### Downlaod

Downlad the codebase

<el-button><a href="/" slot="button">Download</a></el-button>

### CDN

Link to the CDN


``` html

<link href="" rel="stylesheet" type="text/css" >

```

### NPM

Install with NPM

``` html

npm atomix -g install

```

### Generate Atomic CSS

For example, if you typed this:

``` html

<div class="Bg(red)"></div>

```

There are many tools which automatically generate CSS styles based on class names defined in the HTML files. For example, if you typed this:

The following CSS is automatically generated:

### Styling a simple component

As in everything, the style code is different for everyone. Some people will prefer shorthand style while others will prefer more readable class names in longhand style.

<div class="console">

<div class="console_pre">

<h4 class="console_header">Output: Card Component</h4>

<div class=" Mt(3m) Mb(3m)">
    <div class="Bs(11) Bg(white) P(16x) D(flex) Fd(col) Mnw(350x) W(100)">
        <div class="F(sb)">
            <div class="F(c)">
                <!-- <img src="/images/placeholder.png" alt="image" width="100"> -->
                <i class="fa fa-twitter P(16x) Bg(white) Bd(black)" aria-hidden="true"></i> 
                <span>Twitter</span>
            </div>
            <div class="">
                <div class="F(c)">
                    <span>5.0</span>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-bookmark P(16x) Bg(white) Bd(black)" aria-hidden="true"></i>
                </div>
            </div>
        </div>
        <div class="Mt(1m)">
            <h3 class="C(primary) M(0) Fs(2m)">Web Developer</h3>
            <p class="C(darkgray) M(0) Fs(12x)">
                <i class="fa fa-usd" aria-hidden="true"></i>
                <span>$60.000 - $75.000</span>.
            </p>
        </div>
        <div class="F(sb)">
            <p class="C(darkgray)">
                <i class="fa fa-map-marker fa-sx" aria-hidden="true"></i>
                <span class="Fs(12x)">Miami, Florida, USA</span>
            </p>
            <a class="Bg(primary) P(8x) C(white)" href="/">Learn More</a>
        </div>
    </div>
</div>
<h4 class="console_header">Input: HTML Code</h4>

<div class="console_html">


``` html

<div class="Bg(white) P(16x) D(flex) Fd(col) Mnw(350x) W(100) Bxs(1)">
    <!-- CARD HEADER -->
    <div class="F(sb)">
        <div class="F(c)">
            <span class="P(16x) Bg(white) Bd(black)"><i class="fa fa-twitter" aria-hidden="true"></i></span>
            <span>Twitter</span>
        </div>
        <div class="F(c)">
            <span> 5.0 </span>
            <i class="fa fa-star" aria-hidden="true"></i>
            <span class="P(16x) Bg(white) Bd(black)">
                <i class="fa fa-bookmark" aria-hidden="true"></i>
            </span>
        </div>
    </div>
    <!-- CARD BODY -->
    <div>
        <h3 class="C(primary) M(0) Fs(2m)">Web Developer</h3>
        <p>
            <i class="fa fa-usd" aria-hidden="true"></i>
            <span>$60.000 - $75.000</span>
        </p>
    </div>
    <!-- CARD FOOTER -->
    <div class="F(sb)">
        <p>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span> Miami, Florida, USA</span>
        </p>
        <a class="Bg(primary) P(8x) C(white)" href="/">Learn More</a>
    </div>
</div>

```
</div>
</div>
</div>

