# AUTO-PRINTER — ARENA PIZZA KEBAB
# Double-cliquez sur LANCER-IMPRESSION.bat pour demarrer
# Ctrl+C pour arreter

$PROJECT_ID = 'arena-pizza-kebab-3f078'
$API_KEY = 'AIzaSyCaxE-POSptcvcXAGSYq7PFKPMcMnRFouM'
$POLL_INTERVAL = 5
$PRINTED_FILE = Join-Path $PSScriptRoot '.printed-orders.json'

$printedOrders = @{}
if (Test-Path $PRINTED_FILE) {
    try {
        $data = Get-Content $PRINTED_FILE -Raw | ConvertFrom-Json
        foreach ($id in $data) { $printedOrders[$id] = $true }
        Write-Host "Charge $($printedOrders.Count) commandes deja imprimees" -ForegroundColor Gray
    } catch {}
}

function Save-Printed {
    $printedOrders.Keys | ConvertTo-Json | Set-Content $PRINTED_FILE -Encoding UTF8
}

function Build-Ticket($order) {
    $ESC = [char]0x1B
    $GS = [char]0x1D

    $t = "${ESC}@"
    $t += "${ESC}E$([char]1)"
    $t += "${ESC}G$([char]1)"
    $t += "${ESC}a$([char]1)"
    $t += "${ESC}!$([char]0x30)"
    $t += "ARENA PIZZA KEBAB`n"
    $t += "${ESC}!$([char]0)"
    $t += "88 Rue Lesage, Reims`n"
    $t += "Tel: 09 83 39 82 20`n"
    $t += "================================`n"
    $t += "${ESC}a$([char]0)"

    $num = if ($order.orderNumber) { $order.orderNumber } else { '---' }
    $timeStr = '--:--'
    if ($order.createdAt) {
        try {
            $dt = [DateTime]::Parse($order.createdAt)
            $timeStr = $dt.ToString('HH:mm')
        } catch {}
    }

    $t += "${ESC}!$([char]0x30)"
    $t += "N. $num`n"
    $t += "${ESC}!$([char]0)"
    $t += "Heure: $timeStr`n"
    $t += "================================`n"

    $mode = if ($order.mode -eq 'delivery') { 'LIVRAISON' } else { 'A EMPORTER / SUR PLACE' }
    $t += "Mode  : $mode`n"
    $t += "Client: $($order.firstName) $($order.lastName)`n"
    $t += "Tel   : $($order.phone)`n"

    if ($order.mode -eq 'delivery' -and $order.address) {
        $addr = $order.address
        if ($addr.street) { $t += "Adresse: $($addr.street)`n" }
        if ($addr.city)   { $t += "Ville  : $($addr.city)`n" }
    }

    $t += "================================`n"

    foreach ($item in $order.items) {
        $qty = if ($item.qty) { $item.qty } else { 1 }
        $price = [math]::Round([double]$item.totalPrice, 2)
        $t += "$($item.name) x$qty  ${price}EUR`n"

        if ($item.selectedOptions) {
            foreach ($key in $item.selectedOptions.PSObject.Properties.Name) {
                $val = $item.selectedOptions.$key
                if ($val) { $t += "  > $val`n" }
            }
        }
        if ($item.specialRequest) {
            $t += "  !! $($item.specialRequest.ToUpper()) !!`n"
        }
    }

    $t += "================================`n"
    $t += "${ESC}a$([char]1)"
    $t += "${ESC}!$([char]0x30)"
    $total = [math]::Round([double]$order.total, 2)
    $t += "TOTAL: ${total} EUR`n"
    $t += "${ESC}!$([char]0)"
    $pay = if ($order.status -eq 'PAYED_CASH') { 'ESPECES' } else { 'CARTE BANCAIRE' }
    $t += "Paiement: $pay`n"

    if ($order.notes) {
        $t += "================================`n"
        $t += "${ESC}a$([char]0)"
        $t += "NOTE: $($order.notes)`n"
    }

    $t += "================================`n"
    $t += "${ESC}a$([char]1)"
    $t += "Merci de votre commande !`n"
    $t += "Arena Pizza Kebab - 7j/7`n"
    $t += "${ESC}a$([char]0)"
    $t += "`n`n`n`n"
    $t += "${GS}V$([char]0x42)$([char]0)"

    return $t
}

Add-Type -TypeDefinition @'
using System;
using System.Runtime.InteropServices;
public class RawPrinter {
    [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Ansi)]
    public class DOCINFOA {
        [MarshalAs(UnmanagedType.LPStr)] public string pDocName;
        [MarshalAs(UnmanagedType.LPStr)] public string pOutputFile;
        [MarshalAs(UnmanagedType.LPStr)] public string pDatatype;
    }
    [DllImport("winspool.drv", SetLastError=true, CharSet=CharSet.Ansi)]
    public static extern bool OpenPrinter(string pPrinterName, out IntPtr phPrinter, IntPtr pDefault);
    [DllImport("winspool.drv", SetLastError=true)]
    public static extern bool StartDocPrinter(IntPtr hPrinter, int Level, [In, MarshalAs(UnmanagedType.LPStruct)] DOCINFOA pDocInfo);
    [DllImport("winspool.drv", SetLastError=true)]
    public static extern bool StartPagePrinter(IntPtr hPrinter);
    [DllImport("winspool.drv", SetLastError=true)]
    public static extern bool WritePrinter(IntPtr hPrinter, IntPtr pBytes, int dwCount, out int dwWritten);
    [DllImport("winspool.drv", SetLastError=true)]
    public static extern bool EndPagePrinter(IntPtr hPrinter);
    [DllImport("winspool.drv", SetLastError=true)]
    public static extern bool EndDocPrinter(IntPtr hPrinter);
    [DllImport("winspool.drv", SetLastError=true)]
    public static extern bool ClosePrinter(IntPtr hPrinter);
    public static bool SendRaw(string printerName, byte[] data) {
        IntPtr hPrinter;
        if (!OpenPrinter(printerName, out hPrinter, IntPtr.Zero)) return false;
        var di = new DOCINFOA { pDocName = "Ticket", pDatatype = "RAW" };
        try {
            StartDocPrinter(hPrinter, 1, ref di);
            StartPagePrinter(hPrinter);
            IntPtr pBytes = Marshal.AllocCoTaskMem(data.Length);
            Marshal.Copy(data, 0, pBytes, data.Length);
            int written;
            bool ok = WritePrinter(hPrinter, pBytes, data.Length, out written);
            Marshal.FreeCoTaskMem(pBytes);
            EndPagePrinter(hPrinter);
            EndDocPrinter(hPrinter);
            return ok && written > 0;
        } finally {
            ClosePrinter(hPrinter);
        }
    }
}
'@ -ErrorAction SilentlyContinue

function Print-Ticket($order, $docId) {
    $ticket = Build-Ticket $order
    $encoding = [System.Text.Encoding]::GetEncoding(437)
    $rawBytes = $encoding.GetBytes($ticket)
    $success = $false

    # Methode 1 : imprimante specifique XP (copy1)
    try {
        $printerName = 'xp- (copy1)'
        Write-Host "  Essai imprimante: $printerName" -ForegroundColor Cyan
        $success = [RawPrinter]::SendRaw($printerName, $rawBytes)
        if ($success) {
            Write-Host "  Ticket imprime sur $printerName !" -ForegroundColor Green
        }
    } catch {
        Write-Host "  Erreur: $_" -ForegroundColor Yellow
    }

    # Methode 2 : imprimante par defaut
    if (-not $success) {
        try {
            $default = (Get-CimInstance -ClassName Win32_Printer -Filter "Default=True")
            if ($default) {
                $printerName = $default.Name
                Write-Host "  Essai imprimante par defaut: $printerName" -ForegroundColor Cyan
                $success = [RawPrinter]::SendRaw($printerName, $rawBytes)
                if ($success) { Write-Host "  Ticket imprime!" -ForegroundColor Green }
            }
        } catch {}
    }

    # Methode 3 : cherche imprimante thermique par nom
    if (-not $success) {
        try {
            $allPrinters = Get-CimInstance -ClassName Win32_Printer
            $xp = $allPrinters | Where-Object { $_.Name -like '*XP*' -or $_.Name -like '*xp*' -or $_.Name -like '*TM-T*' -or $_.Name -like '*thermal*' -or $_.Name -like '*POS*' } | Select-Object -First 1
            if ($xp) {
                Write-Host "  Essai: $($xp.Name)" -ForegroundColor Yellow
                $success = [RawPrinter]::SendRaw($xp.Name, $rawBytes)
                if ($success) { Write-Host "  Ticket imprime sur $($xp.Name)!" -ForegroundColor Green }
            }
        } catch {}
    }

    if ($success) {
        $printedOrders[$docId] = $true
        Save-Printed
        try {
            $url = "https://firestore.googleapis.com/v1/projects/$PROJECT_ID/databases/(default)/documents/orders/${docId}?updateMask.fieldPaths=printed&key=$API_KEY"
            $body = '{"fields":{"printed":{"booleanValue":true}}}'
            Invoke-RestMethod -Uri $url -Method Patch -Body $body -ContentType 'application/json' | Out-Null
            Write-Host "  Firebase: printed=true" -ForegroundColor Gray
        } catch {
            Write-Host "  WARN Firebase: $_" -ForegroundColor Yellow
        }
    } else {
        Write-Host "  ERREUR: impression echouee!" -ForegroundColor Red
        Write-Host "  Imprimantes disponibles:" -ForegroundColor Red
        Get-Printer | ForEach-Object { Write-Host "    - $($_.Name)" -ForegroundColor Red }
    }
}

function Check-Orders {
    try {
        $url = "https://firestore.googleapis.com/v1/projects/$PROJECT_ID/databases/(default)/documents/orders?key=$API_KEY"
        $resp = Invoke-RestMethod -Uri $url -TimeoutSec 10

        foreach ($doc in $resp.documents) {
            $docId = $doc.name.Split('/')[-1]
            $fields = $doc.fields
            $status = $fields.status.stringValue
            $isPrinted = $fields.printed.booleanValue

            if (-not $isPrinted -and -not $printedOrders.ContainsKey($docId) -and ($status -eq 'PAYED_CASH' -or $status -eq 'PAYED_CARD')) {

                $items = @()
                if ($fields.items.arrayValue.values) {
                    foreach ($v in $fields.items.arrayValue.values) {
                        $f = $v.mapValue.fields
                        $opts = $null
                        if ($f.selectedOptions.mapValue.fields) {
                            $opts = $f.selectedOptions.mapValue.fields
                        }
                        $items += @{
                            name          = $f.name.stringValue
                            totalPrice    = if ($f.totalPrice.doubleValue) { $f.totalPrice.doubleValue } elseif ($f.totalPrice.integerValue) { $f.totalPrice.integerValue } else { 0 }
                            qty           = if ($f.qty.integerValue) { $f.qty.integerValue } else { 1 }
                            selectedOptions = $opts
                            specialRequest = $f.specialRequest.stringValue
                        }
                    }
                }

                $addrFields = $null
                if ($fields.address.mapValue.fields) {
                    $af = $fields.address.mapValue.fields
                    $addrFields = @{
                        street = $af.street.stringValue
                        city   = $af.city.stringValue
                    }
                }

                $order = @{
                    orderNumber  = $fields.orderNumber.stringValue
                    firstName    = $fields.firstName.stringValue
                    lastName     = $fields.lastName.stringValue
                    phone        = $fields.phone.stringValue
                    mode         = $fields.mode.stringValue
                    address      = $addrFields
                    total        = if ($fields.total.doubleValue) { $fields.total.doubleValue } elseif ($fields.total.integerValue) { $fields.total.integerValue } else { 0 }
                    status       = $status
                    notes        = $fields.notes.stringValue
                    createdAt    = $fields.createdAt.timestampValue
                    items        = $items
                }

                Write-Host "`n--- NOUVELLE COMMANDE ---" -ForegroundColor Yellow
                Write-Host "  $($order.orderNumber) - $($order.firstName) $($order.lastName) - $($order.total)EUR" -ForegroundColor Cyan
                Print-Ticket $order $docId
            }
        }
    } catch {
        Write-Host "Erreur connexion Firebase: $_" -ForegroundColor Red
    }
}

Clear-Host
Write-Host ""
Write-Host "========================================" -ForegroundColor Red
Write-Host "  AUTO-PRINTER - ARENA PIZZA KEBAB" -ForegroundColor White
Write-Host "========================================" -ForegroundColor Red
Write-Host ""
Write-Host "Imprimantes detectees:" -ForegroundColor Cyan
Get-Printer | ForEach-Object { Write-Host "  - $($_.Name) (port: $($_.PortName))" -ForegroundColor Cyan }
Write-Host ""
Write-Host "En ecoute des nouvelles commandes..." -ForegroundColor Green
Write-Host "Appuyez sur Ctrl+C pour arreter" -ForegroundColor Gray
Write-Host ""

while ($true) {
    Check-Orders
    Start-Sleep -Seconds $POLL_INTERVAL
}
