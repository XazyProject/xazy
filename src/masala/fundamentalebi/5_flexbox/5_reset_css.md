# Reset CSS

## შესავალი

ყველა ბრაუზერს აქვს თავისი სტილი თითოეული ელემენტისთვის. Chrome როგორც არენდერებს სათაურებს, პარაგრაფებს, სიებს და ა.შ. შესაძლოა განსხვავებული იყოს Internet Explorer-ზე და სხვა ბრაუზერებზე. იმისათვის, რომ ბრაუზერის მინიჭებული სტილები წავუშალოთ ელემენტებს და ჩვენი სურვილის მიხედვით გავსტილოთ საჭიროა ე.წ reset.css ფაილი.

## დაყენება

CSS Reset-ში ვწერთ ყველა ხშირად გამოყენებულ HTML ელემენტს და ვუშლით ბრაუზერის მიერ დადებულ სტილებს.

თქვენ შეგიძლიათ მოძებნოთ reset.css გუგლში და გამოიყენოთ ნებისმიერი, მაგრამ [ხშირად იყენებენ ამ ვერსიას.](https://meyerweb.com/eric/tools/css/reset/)

```css
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```

როგორც ვიცით, CSS კასკადში, რაც უფრო ქვევით დავწერთ, მით უფრო პრიორიტეტულია და ზედა იგივე სტილს გადააწერს, ამიტომ, როდესაც Reset CSS-ს შევქმნით, მთავარ css-ზე ზევით უნდა დავაიმპორტოთ, რომ `styles.css`-მ გადააწეროს ზევიდან.

```html
<head>
  <meta charset="utf-8">
  <title>xazy.ge</title>
  <link rel="stylesheet" href="reset.css">
  <link rel="stylesheet" href="styles.css">
</head>
```