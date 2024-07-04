<?php
    error_reporting(E_ERROR | E_PARSE);
    require_once("projects.php");
    $proj = new Projects;
	$proj->setContents([
		"ads/billboard.php",
        "ads/hpu.php",
        "ads/leaderboard.php",
        "ads/mpu.php",
        "ads/rollfold.php",
        "ads/takeover.php",
		"html5games/html5games.php",
        "microsites/microsites.php"
	]);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon0.png" data-image="favicon" />
    <!--meta name="viewport" content="width=device-width, initial-scale=1.0" /-->
    <meta name="viewport" initial-scale=1.0 content="width=100%" />
    <title>Creativewiz | Projects</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
<?php
    // print_r($proj->getContents());
    if ($proj->isList()) {
        foreach($proj->getContents() as $contentVal) {
            print '<div style="padding-bottom: 20px;">';
                print '<h2>'. $contentVal['type'] .': <span>'. $contentVal['subtype'] .'</span></h2>';
                foreach($contentVal['items'] as $key => $item) {
                    $link = $proj->setUrlParam($contentVal['type'], $contentVal['subtype'], $item['title'], md5($key));
                    print '<ul>';
                        print '<li><strong>'. $item['title'] .'</strong></li>';
                        print '<li><a href="'. $link .'" target="_blank">'. $link .'</a></li>';
                    print '</ul>';
                }
            print '</div>';
        }
    }
    else {
        if ($proj->getItem()) {
            // print_r($proj->getItem());
            print '<div class="projects" data-type="'. $proj->getType() .'">';
            switch($proj->getType()) {
                case "ads":
                    require_once("templates/tpl_ads.php");
                    break;
                case "microsites":
                case "html5games":
                    require_once("templates/tpl_micro.php");
                    break;
                default:
            }
            print '</div>';
        }
        else {
            print '<h1>Page not found</h1>';
        }
    }
?>
</body>
</html>