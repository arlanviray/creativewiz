<?php

    $source = $proj->getItem()['assets'];
    $width = $proj->getItem()['size']['width'];
    $height = $proj->getItem()['size']['height'];

    print '<div style="width: '. $width .'px; margin: 0 auto;">';
        print '<iframe src="'. $source .'" width="'. $width .'" height="'. $height .'" scrolling="no" allowfullscreen="true" style="border: 0; margin: 0; padding: 0;"></iframe>';
    print '</div>';
    
?>