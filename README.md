# BetterDarkWiki
<i> A browser extension for a better dark-mode for Wikipedia articles </i>
<hr>

![image](https://github.com/IceHermit/BetterDarkWiki/assets/116965845/909f95f9-0ace-4e40-b566-f19f3f542ce9)

Have you ever been researching <i> things </i> late into the night and decided to take help of the largest digital encyclopedia?
If you did then you probably got flashbanged in your eyes by a sudden vastness of bright white.

Easy fix for that though, just download one of the many browser extensions which provide a darkmode for Wikipedia.

What makes this extension any better than all the other darkmode extensions then? If you have ever been on articles with any mathematical formulae, you'd soon realise a major flaw with such extensions.

This ->

![image](https://github.com/IceHermit/BetterDarkWiki/assets/116965845/12b78ff2-9b74-4bfe-9505-3381d0314e68)

None of the formulae are affected by the darkmode, and as such any black background will make them practically illegible,
unless you individually click on each formula and open it in a modal preview

<b>BetterDarkWiki</b> solves that issue.

<h2> But what caused the issue in the first place? </h2>

The issue with writing a darkmode extension for wikipedia is that these mathematical formulae are actually rendered as images.
These images always have a transparent background with black text on it, and these are image renderings of a Latex notation
which is stored as the alt-text of the image. 

There could be several reasons for using images instead of dynamically rendering the Latex, but whatever they may be, it makes
the formulae illegible on any dark background unless you alter the image itself. A fix for that could be to let the images have
a white background while letting the rest of the webpage be in darkmode, but that doesn't look as good, especially with inline
formulae

Another solution to this problem (the one this extension adopts), is to read the alt-text of the images and inject Latex elements
to replace the images. Latex elements can be styled using css like any other text, so the font colour can be easily changed to fit
the dark theme.

<h2> Custom themes </h2>

You can easily change the theme by changing the variables in the css file (<code>/src/darkmode.css</code>).

It's these variables, right at the top of the file: <br>
```css
:root {
  --background-color: #282a35;
  --text-color: #ddd;
  --link-color: #fff4a3;
  --img-bg-color: #ddd;
  --button-color: #51427a;
}
```
