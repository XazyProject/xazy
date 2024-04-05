# მეტი ტექსტის სტილი

## შესავალი

თქვენ უკვე იცით ცოტა ტექსტის მანიპულაცია CSS-ს გამოყენებით, ამ გაკვეთილში კიდევ მეტ სტილს ისწავლით, რომელიც ტექსტთან მუშაობაში გამოგადგებათ.

## გაკვეთილის მიმოხილვა

- ისწავლით როგორ დაამატოთ ფონტები თქვენს პროექტში.
- ისწავლიტ ტექსტთან დაკავშირებულ დამატებით სტილებს.

## ფონტები

წინა ლექციებში ჩვენ განვიხილეთ `font-family`-ს გამოყენებით ელემენტებზე ფონტის შეცვლა, მაგრამ ახლა ჩვენი ფონტების დამატებას ვისწავლით.

## ფონტის დამატება ინტერნეტიდან

ჩვენ შეგვიძლია სასურველი ფონტი მივაწოდოთ ჩვენს საიტს. არსებობს ბევრი საიტი, რომელზეც ბევრი ფონტია განთავსებული, მაგალითად [Google Fonts](https://fonts.google.com/) ან ქართული ვარიანტი [ვებ-ფონტები](https://web-fonts.ge/).

პირველ რიგში განვიხილოთ გუგლიდან ფონტის დამატება. მოძებნეთ ნებისმიერი ფონტი საიტზე, მაგალითად ძიებაში ჩაწერეთ `Open Sans` და შედით მის გვერდზე. აქ გამოჩნდება ამ ფონტის ბევრნაირი სტილი, დახრილი, სქელი (რამდენიმე დონის სისქე) და ა.შ. თქვენ უნდა აირჩიოთ ის ზომები, რომლებიც მოგეწონებათ.

![googlefonts](https://raw.githubusercontent.com/XazyProject/masala/main/fundamentalebi/4_css_fundamentalebi/css_shesavali-imgs/01.jpg)

ახლა დააკოპირეთ HTML-ში ჩასასმელი `<link>` თეგი და ჩასვით HTML ფაილში, `<head>` ნაწილში:

```html
<!-- index.html -->
<!doctype html>
<html>
  <head>
    ...
    <link href="styles.css" rel="stylesheet" />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,700;1,400&display=swap" rel="stylesheet">

  </head>
  <body>
    ...
  </body>
</html>
```

ან შეგიძლიათ გამოიყენოთ `@import` თეგი CSS ფაილში:

```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap')
```

ახლა გადადით `styles.css`-ში და ჩასვით მოცემული ფონტი `body` ელემენტში, რათა მთლიან საიტზე ყველა ტექსტს ეს ფონტი დაედოს.

```css
/* styles.css */

body {
  font-family: 'Open Sans', sans-serif;
}
```

`font-family`-ს სიაში ვწერთ რამდენიმე ფონტის სახელს, რადგან თუ რომელიმემ არ იმუშავა, სხვამ ჩაანაცვლოს. პრიორიტეტული პირველად დაწერილი ფონტია, ამიტომ თქვენს პროექტებში ფონტის სია დაახლოებით ასე უნდა გამოიყურებოდეს:

```css
body {
  font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
```

### ჩაწერილი ფონტები

თქვენ ასევე შეგიძლიათ ჩაიწეროთ ფონტი და ისე დააიმპორტოთ თქვენს პროექტში `@font-face`-ს გამოყენებით. არსებობს ფონტის რამდენიმე ფაილის ფორმატი და მათ შესახებ [შეგიძლიათ გაიგოთ აქ](https://fileinfo.com/filetypes/font). ფონტის ფაილის ფორმატი ყურადღებით უნდა შეარჩიოთ, რადგან ზოგს არ აქვს ზოგიერთი ბრაუზერის მხარდაჭერა. ბრაუზერებისა და მათ მიერ მხარდაჭერილი ფონტის ფორმატების ნახვა შეგიძლიათ [W3-ს გვერდზე](https://www.w3schools.com/css/css3_fonts.asp)

ჩაწერილი ფონტის შემოტანა:

```css
@font-face {
  font-family: my-cool-font;
  src: url(../fonts/the-font-file.woff);
}

h1 {
  font-family: my-cool-font, sans-serif;
}
```

## ტექსტის სტილები

ჩვენ უკვე გავიარეთ საბაზისო ტექსტის მანიპულაციის სტილები, ახლა გავიღრმაოთ ცოდნა.

### font-style

როდესაც ფონტის დახრა გვინდოდა, ანუ უნდა გაგვეხადა *italic*, ვიყენებდით HTML-ს `<em>` თეგს, მაგრამ ეს ასევე აღნიშნავს, რომ ამ თეგით შემორტყმული ტექსტი მნიშვნელოვანია. უკეთესი პრაქტიკაა, რომ თუ გვინდა ტექსტი გავხადოთ დახრილი, სქელი, მონიშნული და ა.შ. გამოვიყენოთ CSS სტილები.

მაგალითად, თუ გინდათ თქვენი სათაური იყოს დახრილი, უნდა გამოიყენოთ `font-style` სტილი.

```css
h1 {
  font-style: italic;
}
```

### letter-spacing

ეს სტილი სიტყვაში ასოების დაშორებას ცვლის, მაგრამ ამის გამოყენებისას გაითვალისწინეთ არ გახადოთ ტქვენი ვებსაიტი ძნელად წასაკითხი. 

<iframe height="300" style="width: 100%;" scrolling="no" title="Letter Spacing | CSS Text Styles" src="https://codepen.io/xazy/embed/MWxZZXO?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/MWxZZXO">
  Letter Spacing | CSS Text Styles</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### line-height

ეს ცვლის დაშორებას ტექსტის ხაზებს შორის. `line-height`-ის გაზრდა აუნჯობესებს ადვილად წაკითხვას.

განსხვავება ჩვეულებრივსა და დაშორება გაზრდილს შორის შეგიძლია იხილოთ ამ მაგალითში:

<iframe height="300" style="width: 100%;" scrolling="no" title="Line Height | CSS Text Styles" src="https://codepen.io/xazy/embed/poYqqYd?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/poYqqYd">
  Line Height | CSS Text Styles</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### text-transform

ამის გამოყენებით, შევძლებთ ტექსტის ასოები გადაიქცეს ზედა რეგისტრის ად ან ქვედა რეგისტრის ალფაბეტად, ან მხოლოდ სიტყვის პირველი ასოები გადაიქცეს ზედა რეგისტრის ალფაბეტად.

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/xazy/embed/LYaMMwK?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/LYaMMwK">
  Untitled</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### text-shadow

ამის გამოყენებით ტექსტს ვადებთ ჩრდილს ტექსტის გარშემო არჩეულ ელემენტზე. ძირითადად სათაურებზე იყენებენ. 

აქვს რამდენიმე მნიშვნელობა და შეგიძლიათ ის ონლაინ გენერატორების დახმარებით შექმნათ. მაგალითად: [cssgenerator.org](https://cssgenerator.org/text-shadow-css-generator.html) და [cssportal.com](https://www.cssportal.com/css3-text-shadow-generator/).

<iframe height="300" style="width: 100%;" scrolling="no" title="text-shadow" src="https://codepen.io/xazy/embed/poYqGEK?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/poYqGEK">
  text-shadow</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

