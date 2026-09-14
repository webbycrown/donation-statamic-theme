<?php

$root = dirname(__DIR__);
$img = $root.'/public/assets/images';
$out = $root.'/public/assets/images/marketplace';
$bold = $root.'/storage/fonts/LiberationSans-Bold.ttf';
$reg = $root.'/storage/fonts/LiberationSans-Regular.ttf';

@mkdir($out, 0775, true);

$green = [66, 95, 87];
$lime = [207, 255, 141];
$cream = [255, 248, 248];
$white = [255, 255, 255];

$domain = 'donation-statamic.webbydemo.in';

function loadCover(string $path, int $w, int $h)
{
    $ext = strtolower(pathinfo($path, PATHINFO_EXTENSION));
    $src = $ext === 'png' ? imagecreatefrompng($path) : imagecreatefromjpeg($path);
    $sw = imagesx($src);
    $sh = imagesy($src);
    $scale = max($w / $sw, $h / $sh);
    $nw = (int) round($sw * $scale);
    $nh = (int) round($sh * $scale);
    $dst = imagecreatetruecolor($w, $h);
    imagecopyresampled($dst, $src, (int) (($w - $nw) / 2), (int) (($h - $nh) / 2), 0, 0, $nw, $nh, $sw, $sh);
    imagedestroy($src);

    return $dst;
}

function rgb($im, array $c)
{
    return imagecolorallocate($im, $c[0], $c[1], $c[2]);
}

function overlayPanel($im, int $w, int $h, array $green)
{
    $panel = imagecreatetruecolor($w, $h);
    imagealphablending($panel, false);
    imagesavealpha($panel, true);
    $c = imagecolorallocatealpha($panel, $green[0], $green[1], $green[2], 35);
    imagefilledrectangle($panel, 0, 0, $w, $h, $c);
    imagecopymerge($im, $panel, 0, 0, 0, 0, $w, $h, 62);
    imagedestroy($panel);
}

function writeBanner(string $src, string $dest, int $w, int $h, string $kicker, string $title, string $line, string $domain, string $tags, string $bold, string $reg, array $green, array $lime, array $white)
{
    $im = loadCover($src, $w, $h);
    overlayPanel($im, $w, $h, $green);

    $limeC = rgb($im, $lime);
    $whiteC = rgb($im, $white);
    imagefilledrectangle($im, 0, 0, (int) max(10, $w * 0.012), $h, $limeC);

    $pad = (int) ($w * 0.06);
    $y = (int) ($h * 0.22);
    imagettftext($im, max(14, $w * 0.018), 0, $pad, $y, $limeC, $bold, strtoupper($kicker));
    $y += (int) ($h * 0.14);
    imagettftext($im, max(36, $w * 0.072), 0, $pad, $y, $whiteC, $bold, $title);
    $y += (int) ($h * 0.08);
    imagettftext($im, max(16, $w * 0.026), 0, $pad, $y, $whiteC, $reg, $line);
    $y += (int) ($h * 0.10);
    imagettftext($im, max(15, $w * 0.022), 0, $pad, $y, $limeC, $bold, $domain);

    imagettftext($im, max(12, $w * 0.016), 0, $pad, (int) ($h * 0.88), $whiteC, $reg, $tags);

    imagejpeg($im, $dest, 90);
    imagedestroy($im);
}

function writeThumb(string $src, string $dest, int $size, string $title, string $domain, string $bold, string $reg, array $green, array $lime, array $white)
{
    $im = loadCover($src, $size, $size);
    overlayPanel($im, $size, $size, $green);
    $limeC = rgb($im, $lime);
    $whiteC = rgb($im, $white);
    imagefilledrectangle($im, 0, 0, 12, $size, $limeC);
    imagettftext($im, 16, 0, 40, 90, $limeC, $bold, 'STATAMIC KIT');
    imagettftext($im, 48, 0, 40, 170, $whiteC, $bold, $title);
    imagettftext($im, 16, 0, 40, 230, $limeC, $bold, $domain);
    imagettftext($im, 16, 0, 40, 540, $whiteC, $reg, 'Causes · Donate · Help');
    imagejpeg($im, $dest, 90);
    imagedestroy($im);
}

writeThumb("$img/hero-three.jpg", "$out/00-donation-thumb.jpg", 600, 'DONATION', $domain, $bold, $reg, $green, $lime, $white);

writeBanner("$img/hero-three.jpg", "$out/01-donation-main.jpg", 1600, 900, 'Statamic starter kit', 'DONATION', 'Causes. Volunteers. Give with care.', $domain, 'Causes  ·  Events  ·  News  ·  Donate', $bold, $reg, $green, $lime, $white);

writeBanner("$img/second-hero.jpg", "$out/02-donation-home.jpg", 1200, 800, 'Homepage', 'Give hope', 'Three home layouts for charity campaigns.', $domain, 'Home one  ·  Home two  ·  Home three', $bold, $reg, $green, $lime, $white);

writeBanner("$img/donation.png", "$out/03-donation-causes.jpg", 1200, 800, 'Causes', 'Donate today', 'Amount, method, and a clear thank-you flow.', $domain, 'Donation  ·  Form  ·  Success', $bold, $reg, $green, $lime, $white);

writeBanner("$img/event-1.jpg", "$out/04-donation-events.jpg", 1200, 800, 'Events', 'Gather together', 'Campaign days, fundraisers, and community meets.', $domain, 'Events  ·  Calendar  ·  Details', $bold, $reg, $green, $lime, $white);

writeBanner("$img/latest-news01.jpg", "$out/05-donation-news.jpg", 1200, 800, 'Stories', 'News & blogs', 'Share impact stories and campaign updates.', $domain, 'News  ·  Blog  ·  Stories', $bold, $reg, $green, $lime, $white);

writeBanner("$img/Volunteers001.jpg", "$out/06-donation-volunteers.jpg", 1200, 800, 'People', 'Volunteers', 'Join the team. Apply. Make a difference.', $domain, 'Volunteers  ·  Career  ·  Apply', $bold, $reg, $green, $lime, $white);

writeBanner("$img/about-one.jpg", "$out/07-donation-contact.jpg", 1200, 800, 'Connect', 'Stay in touch', 'Contact form, address, and map in one page.', $domain, 'Contact  ·  Email  ·  Visit', $bold, $reg, $green, $lime, $white);

echo "Wrote banners to $out\n";
foreach (glob("$out/*.jpg") as $file) {
    echo basename($file).' '.filesize($file)."\n";
}
