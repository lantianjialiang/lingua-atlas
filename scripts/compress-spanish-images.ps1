param([string]$Manifest)
Add-Type -AssemblyName System.Drawing
$jobs = Get-Content -LiteralPath $Manifest -Raw | ConvertFrom-Json
foreach ($job in $jobs) {
  $sourceImage = [System.Drawing.Image]::FromFile($job.path)
  try {
    foreach ($variant in @(@{name='img';width=960},@{name='thumb';width=360})) {
      $width = [Math]::Min($variant.width, $sourceImage.Width)
      $height = [int]($sourceImage.Height * $width / $sourceImage.Width)
      $bitmap = [System.Drawing.Bitmap]::new($width,$height)
      $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
      try {
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.DrawImage($sourceImage,0,0,$width,$height)
        $target = Join-Path $PSScriptRoot "../public/spanish/$($variant.name)/$($job.id).jpg"
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'
        $parameters = [System.Drawing.Imaging.EncoderParameters]::new(1)
        $parameters.Param[0] = [System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality,[long]85)
        $bitmap.Save($target,$codec,$parameters)
        $parameters.Dispose()
      } finally { $graphics.Dispose(); $bitmap.Dispose() }
    }
  } finally { $sourceImage.Dispose() }
}
