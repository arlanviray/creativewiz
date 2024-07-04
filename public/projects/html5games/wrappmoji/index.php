<?php
    
    $siteURL = (isset($_SERVER['HTTPS']) ? 'https' : 'http') .'://'. $_SERVER['HTTP_HOST'] . dirname($_SERVER['PHP_SELF']) .'/';
    $siteTitle = 'WrappMoji';
    $siteDescription = 'Personalise your presents with the awesome '. $siteTitle .' Wrapping Paper.';
    $sharingDescription = 'Check out my personalised '. $siteTitle .' Wrapping Paper design. Create yours now.';

?>
<!DOCTYPE html>
<html>
<head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KK9XCKS');</script>
    <!-- End Google Tag Manager -->

    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $siteTitle; ?></title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
    <script type="text/javascript" src="js/modernizr.js"></script>
    <script type="text/javascript" src="js/detectizr.min.js"></script>
    <script type="text/javascript" src="js/base64.js"></script>
    <script type="text/javascript" src="js/htmlentities.js"></script>
    <script type="text/javascript" src="js/clipboard.min.js"></script>
    <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/7246976/7289772/css/fonts.css"/>
    <link rel="stylesheet" type="text/css" href="css/app.css" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="<?= $siteTitle; ?>" />
    <?php if( isset($_GET[ 'hash' ]) ): ?>
        <meta property="og:description" content="<?= $sharingDescription; ?>" />
    <?php else: ?>
        <meta property="og:description" content="<?= $siteDescription; ?>" />
    <?php endif; ?>
    <meta property="og:image" content="<?= $siteURL; ?>images/share_facebook_image.jpg" />
    <meta name="twitter:card" content="website" />
    <meta name="twitter:title" content="<?= $siteTitle; ?>" />
    <link rel="icon" href="images/favicon/Splash_Bauble_Favicon_32x32.png" sizes="32x32" />
    <link rel="icon" href="images/favicon/Splash_Bauble_Favicon_192x192.png" sizes="192x192" />
    <link rel="apple-touch-icon-precomposed" href="images/favicon/Splash_Bauble_Favicon_180x180.png" />
    <meta name="msapplication-TileImage" content="images/favicon/Splash_Bauble_Favicon_270x270.png" />
    <script type="text/javascript">
        var _siteURL = '<?= $siteURL; ?>';
        var _siteTitle = '<?= $siteTitle; ?>';
        var _sharingDescription = '<?= $sharingDescription; ?>';
    </script>
</head>
<body>

    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KK9XCKS" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

    <div id="sw-MAIN">
        <div id="sw-HERO" class="no-print">
            <div class="digital">
                <div class="headline">
                    <h1><?= $siteTitle; ?>:<br/>Personalised Wrapping Paper</h1>
                </div>
            </div>
            <div class="logo">
                <a href="https://www.splashworldwide.com/">
                    <img src="images/logo.svg" alt="SPLASH logo" />
                </a>
            </div>
            <div class='scrollBottom'>
                <div class='scrollDown'><span></span></div>
                <div class='icon-down'></div>
            </div>
        </div>

        <div id="sw-INTRO" class="no-print">
            <div class="sw-contents">
                <p>We've all been there. You've bought a brilliant Christmas gift. But...<br /><span class="intro_span">YOU'VE. FORGOTTEN. TO. BUY. THE. WRAPPING. PAPER. AHHHHH!</span></p>
                <p>Rest easy, my friend, we've got you covered, with our completely customisable <?= $siteTitle; ?> Wrapping Paper. But how, you ask? It's easy...</p>
                <ol>
                    <li><span>Choose the emojis, below, that best represent your dear giftee.</span></li>
                    <li><span>View your design.</span></li>
                    <li><span>Print.</span></li>
                    <li><span>And wrap.</span></li>
                </ol>
                <p>Panic over. And you've been labelled a hero. You're welcome.</p>
                <p>Have a very merry Christmas, from all at Splash Worldwide.</p>
            </div>
        </div>

        <div id="sw-EMOJI" class="no-print">
            <div class="contents-1">
                <div class="sw-contents row-1">
                    <div class="categories--nav">
                        <ul>
                            <li>
                                <img src="images/catagories/Normal/001_Normal_People.png" class="people active" data-nav="people" alt="faces"/>
                            </li>
                            <li>
                                <img src="images/catagories/Normal/002_Normal_Splash.png" class="splash" data-nav="splash" alt="splash"/>
                            </li>
                            <li>
                                <img src="images/catagories/Normal/003_Normal_Animals.png" class="natures" data-nav="natures" alt="nature"/>
                            </li>
                            <li>
                                <img src="images/catagories/Normal/004_Normal_Food.png" class="food" data-nav="food" alt="food"/>
                            </li>
                            <li>
                                <img src="images/catagories/Normal/005_Normal_Sport.png" class="sports" data-nav="sports" alt="activities"/>
                            </li>
                            <li>
                                <img src="images/catagories/Normal/006_Normal_Travel.png" class="travel" data-nav="travel" alt="travel"/>
                            </li>
                            <li>
                                <img src="images/catagories/Normal/007_Normal_Objects.png" class="objects" data-nav="objects" alt="objects"/>
                            </li>
                            <li>
                                <img src="images/catagories/Normal/008_Normal_Symbols.png" class="symbols" data-nav="symbols" alt="symbols"/>
                            </li>
                            <li>
                                <img src="images/catagories/Normal/009_Normal_Flags.png" class="flags" data-nav="flags" alt="flags"/>
                            </li>
                        </ul>
                    </div>
                    <div class="categories--icons">
                        <div class="icons-container">
                            <div id="icons"></div>
                        </div>
                        <div class="arrow left"></div>
                        <div class="arrow right"></div>
                    </div>
                </div>
            </div>
            <div class="contents-2">
                <div class="sw-contents row-2">
                    <div class="selections--icons">
                        <h1>YOUR SELECTION:<span class="hide"> (<span>10</span>)</span></h1>
                        <div id="selections"></div>
                        <div class="buttons">
                            <button class="btn-submit">SUBMIT</button>
                            <button class="btn-clear">CLEAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="sw-FOOTER" class="no-print">
            <div class="sw-contents">
                <ul>
                    <li><img src="images/Emoji_natures/christmas-tree.png" class="footer_emoji"/><img src="images/Emoji_people/_006__1f385.png" class="footer_emoji"/></li>
                    <li>&copy; <?= date("Y") ?> Splash Worldwide</li>
                    <li><a href="https://www.splashworldwide.com/privacy-policy">Privacy Policy</a></li>
                    <li><a href="https://www.splashworldwide.com/terms-and-conditions">Terms and Conditions</a></li>
                    <li><img src="images/Emoji_people/_006__1f385.png" class="footer_emoji"/><img src="images/Emoji_natures/christmas-tree.png" class="footer_emoji"/></li>
                </ul>
                <p class="tcs">Emoji icons provided under a Premium License from <a href="https://www.emojione.com/developers/premium-license" target="_blank">EmojiOne</a>.</p>
            </div>
        </div>
    </div>

    <div id="sw-WALLPAPER">
        <div class="wp-icons"></div>
        <div class="fullwidth no-print"></div>
        <div class="buttons no-print">
            <button class="btn-print">PRINT</button>
            <button class="btn-saveshare">SAVE &#38; SHARE</button>
            <button class="btn-back">TRY AGAIN</button>
            <div class="uniquelink">
                <p>YOUR UNIQUE LINK</p>
                <div class="urlwrapper">
                    <input type="text" value="" class="copytext" />
                    <br />
                    <button class="btn-copy">COPY LINK</button>
                </div>
                <p class="bodycopy">Proud of your creation? Then share it with the world.<br />Not near a printer? Email the link above to yourself to be printed later.</p>
            </div>
            <div class="socailshares">
                <a href="#" class="share facebook"><span style="display:none">facebook</span></a>
                <a href="#" class="share twitter"><span style="display:none">twitter</span></a>
                <a href="#" class="share pinterest"><span style="display:none">pinterest</span></a>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="js/app.js"></script>
</body>
</html>