<?php

    $source = $proj->getItem()['assets'];
    $width = $proj->getItem()['size']['width'];
    $height = $proj->getItem()['size']['height'];
    $initHeight = $proj->getItem()['size']['initHeight'];
    $position = $proj->getItem()['position'];
    $sitebg = $proj->getItem()['sitebg'];
    $sitebg = $sitebg ? $sitebg : 'elle';
    // items for takeover ads
    $ads = $proj->getItem()['ads'];
    $adsTop = $ads['top'];
    $adsSide = $ads['side'];
    $adsWallpaper = $ads['wallpaper'];

    if ($adsWallpaper) {
        $sourceWall = $source.$adsWallpaper['assets'];
        $widthWall = $adsWallpaper['size']['width'];
        $heightWall = $adsWallpaper['size']['height'];
        // style for smartphones, touchscreens 
        print '<style>@media (hover: none) and (pointer: coarse) {body {position: relative; overflow-x: hidden; width: 1500px; margin: 0 auto;}}</style>';
        // wallpaper iframe
        print '<div class="wallpaper" style="width: '. $widthWall .'px; height: '. $heightWall .'px;">';
            print '<iframe class="wallpaper-iframe" src="'. $sourceWall .'" width="'. $widthWall .'" height="'. $heightWall .'" scrolling="no" allowfullscreen="true" style="border: 0; margin: 0; padding: 0;"></iframe>';
        print '</div>';
    }

    $websitePosTop = 0;
    if ($position === "top" || $adsTop) {
        // set new values
        $sourceTop = $ads ? $source.$adsTop['assets'] : $source;
        $widthTop = $ads ? $adsTop['size']['width'] : $width;
        $heightTop = $ads ? $adsTop['size']['height'] : $height;
        $initHeightTop = $adsTop['size']['initHeight'];
        $posTopZero = $adsTop['posTopZero'] ? "pos-top-zero" : "";

        print '<iframe class="top-iframe '. $posTopZero .'" src="'. $sourceTop .'" width="'. $widthTop .'" height="'. $heightTop .'" scrolling="no" allowfullscreen="true" style="border: 0; margin: 0; padding: 0;"></iframe>';
        if ($ads) {
            $websitePosTop = $initHeightTop ? $initHeightTop : $heightTop;
        } else {
            $websitePosTop = $initHeight ? $initHeight : $height;
        }
    }

    print '<div class="website" style="background-image: url(/images/site_'. $sitebg .'.jpg); top: '. $websitePosTop .'px;">';
        print '<div class="sidebar '. $sitebg .'">';
            print '<div class="column">';
                $imagePosTop = 0;
                if ($position === "side" || $adsSide) {
                    // set new values
                    $sourceSide = $ads ? $source.$adsSide['assets'] : $source;
                    $widthSide = $ads ? $adsSide['size']['width'] : $width;
                    $heightSide = $ads ? $adsSide['size']['height'] : $height;
                    $initHeightSide = $adsSide['size']['initHeight'];

                    print '<iframe class="side-iframe" src="'. $sourceSide .'" width="'. $widthSide .'" height="'. $heightSide .'" scrolling="no" allowfullscreen="true" style="border: 0; margin: 5px 0 0 5px; padding: 0;"></iframe>';
                    if ($ads) {
                        $imagePosTop = $initHeightSide ? $initHeightSide : $heightSide;
                    } else {
                        $imagePosTop = $initHeight ? $initHeight : $height;
                    }
                }

                print '<div class="image" style="top: '. ($imagePosTop + 20) .'px;"><img src="/images/site_'. $sitebg  .'_col.jpg" /></div>';
            print '</div>';
        print '</div>';
    print '</div>';

?>