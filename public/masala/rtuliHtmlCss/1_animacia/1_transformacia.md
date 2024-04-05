# ტრანსფორმაცია

## შესავალი

`transform` სტილი მნიშვნელოვანი ხელსაწყოა, რომელიც ელემენტების გარეგნობას ცვლის დოკუმენტში რაიმეს შეცვლის გარეშე.

ტრანსფორმაციას ხშირად ანიმაციური ეფექტების მისანიჭებლად იყენებენ. მოდი გავიგოთ როგორ მუშაობს ტრანსოფრმაცია.

## გაკვეთილის მიმოხილვა

- როგორ გამოვიყენოთ 2D ტრანსფორმაცია.
- როგორ გამოვიყენოთ 3D ტრანსფორმაცია.
- როგორ გადავაბათ ერთმანეთს რამოდენიმე ტრანსოფრმაცია.
- `transform` სტილის დადებით მხარეებს.

## შესავალი ტრანსფორმაციაში

სანამ რაიმეს ახსნას დავიწყებთ, ხშირად მოუბრუნდით სწავლისას ამ ფოტოს, რათა განზომილებები უკეთ გაიაზროთ.

![axis](./transformacia-imgs/01.jpg)

`transform` სტილი იღებს ერთ ან მეტ CSS ტრანსფორმაციის ფუნქციას მნიშვნელობად, ხოლო თავად მნიშვნელობებიც იღებენ რაიმე მნიშვნელობას, ძირითადად კუთხეს ან რიცხვს.

თითქმის ყველა ელემენტს შეუძლია ჰქონდეს `transform` სტილი, გარდა `<col>` `<colgroup>` ელემენტებს. ასევე ამას ვერ გამოვიყენებთ ისეთ inline ელემენტებთან, რომლებსაც არ აქვთ საკუთარი კონტენტი ვებგვერდის გარეთ. "კონტენტი ვებგვერდის გარეთ", ნიშნავს, როდესაც ელემენტის კონტენტი მოდის გარე წყაროებიდან, მაგალითად `<img>`, `<iframe>` და `<video>`. ამ ელემენტებს კონტენტი სხვა ადგილიდან მოაქვთ და შემდეგ გვაჩვენებენ. ინლაინ ელემენტები, რომლებსაც კონტენტი არ აქვთ ვებგვერდის გარეთ, არიან `<span>`, `<b>`, `<em>` და ა.შ.

მათი დამახსოვრება საჭირო არ არის, უბრალოდ გახსოვდეთ, რომ თუ რაიმე ელემენტზე `transform` სტილი არ მუშაობს, ესეიგი ამ გამონაკლისის გამო.

## ორ-განზომილებიანი ტრანსფორმაციები

ამ სექციაში გავივლით 2D ტრანსფორმაციებს, ამ ფუნქციების გამოყენებით: `rotate`, `scale`, `skew` და `translate`.

### Rotate

ეს არის ტრანსფორმ ფუნქციის მნიშვნელობა ელემენტის 2D-ში სატრიალებლად:

```css
.element {
  transform: rotate();
}
```

ქვემოთ არის მაგალითი, რომელიც გაჩვენებთ ამის გავლენას ფოტოებზე.

<iframe height="300" style="width: 100%;" scrolling="no" title="2D Rotate | CSS Transform" src="https://codepen.io/xazy/embed/rNbYwjr?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/rNbYwjr">
  2D Rotate | CSS Transform</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Scale

ეს არის ტრანსფორმ ფუნქციის მნიშვნელობა ელემენტის მასშტაბის შესაცვლელად 2D-ში:

```css
.element {
  transform: scaleX();
  transform: scaleY();
  transform: scale();
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="2D Scale | CSS Transform" src="https://codepen.io/xazy/embed/KKYyqvZ?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/KKYyqvZ">
  2D Scale | CSS Transform</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Skew

ეს არის ტრანსფორმ ფუნქციის მნიშვნელობა ელემენტის გადახრის შესაცვლელად 2D-ში:

```css
.element {
  transform: skewX();
  transform: skewY();
  transform: skew();
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="2D Skew | CSS Transform" src="https://codepen.io/xazy/embed/dyLZRJy?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/dyLZRJy">
  2D Skew | CSS Transform</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Translate

ეს არის ტრანსფორმ ფუნქციის მნიშვნელობა ელემენტის გადასაადგილებლად 2D-ში:

```css
.element {
  transform: translateX();
  transform: translateY();
  transform: translate();
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="2D Translate | CSS Transform" src="https://codepen.io/xazy/embed/PogOjeW?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/PogOjeW">
  2D Translate | CSS Transform</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## რამდენიმე ტრანსფორმის ერთმანეთზე გადაბმა

ახლა, როცა გაქვთ წარმოდგენა 2D ტრანსფორმაციაზე, ჩვენ ვისწავლით მათ ერთმანეთზე გადაბმას. გადაბმა ხდება მეტი ტრანსფორმ ფუნქციების დამატებით თითოეულში. გადახედეთ კოდს:

```html
<div class="red-box"></div>
<div class="blue-box"></div>
```

```css
.red-box,
.blue-box {
  position: absolute;
  width: 100px;
  height: 100px;
}

.red-box {
  background: red;
  transform: rotate(45deg) translate(200%);
}

.blue-box {
  background: blue;
  transform: translate(200%) rotate(45deg);
}
```

ეს ორი ყუთი ერთ პოზიციაზე დგას. ჩვენ გადავაბით `rotate` და `translate` ფუნქცია მნიშვნელობები ორივე ყუთს, მაგრამ სხვადასხვა მითითებით. დააკვირდით რა მოუვა თითოეულ ყუთს:

<iframe height="300" style="width: 100%;" scrolling="no" title="Chaining | CSS Transform" src="https://codepen.io/xazy/embed/oNOowPg?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/oNOowPg">
  Chaining | CSS Transform</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ეს ცოტათი ჩახლართულია. როდესაც იყენებთ რამდენიმე ტრანსფორმ ფუნქციას, ისინი ედება თითო-თითოდ, იმ თანმიმდევრობით, რა თანმიმდევრობითაც კოდში წერია, დაწყებული მარჯვნიდან გაგრძელებული მარცხნივ. 

თქვენ შეგიძლიათ რამდენიმე ტრანსფორმის გადაბმა ნებისმიერი თანმიმდევრობით სხვადასხვა შედეგებისთვის, ერთი გამონაკლისით `perspective`-ზე. ახლა გადავიდეთ ახალ სექციაზე, სადაც `perspective` გამოყენებულა.

## სამ განზომილებიანი ტრანსფორმაცია.

`rotate`, `scale` და `translate` ტრანსფორმაციის ფუნქციები მხოლოდ 2D-ზე არ არიან შეზღუდულები. ისინი მუშაობენ 3D-ზეც. მაგრამ 3D ეფექტის გამოსაყენებლად გვჭირდება `perspective`.

ახლა დაიწყება რთული მაგალითები, მაგრამ აუცილებელია "ითამაშოთ" ამ სტილებით, რათა უკეთ გაიგოთ მათი გამოყენება. 

## Perspective

ეს ტრანსფორმაციის ფუნქციის მნიშვნელობა აკონტროლებს რამდენად შორსაა რაიმე ეკრანიდან, ან სწორი ზედაპირიდან, სადაც ელემენტები ჩანს:

```css
.element {
  transform: perspective();
}
```

`perspective` მნიშვნელობის მინიჭებით, ჩვენ ვეუბნებით, რომ ობიექტი დაარენდეროს, თითქოს ვუყურებთ მას შორი დისტანციიდან Z ღერძზე.

სხვა ტრანსფორმაციის ფუნქციის მნიშვნელობებისგან განსხვავებით, `perspective` უნდა დადეკლარირდეს პირველად (მარცხნივ), როცა რამდენიმე ტრანსფორმ ფუნქციის მნიშვნელობაა. შემდეგ მაგალითებში ვნახავთ რა გავლენააქვს `rotate`, `scale` და `translate`-ს ელემენტზე.

### Rotate კონკრეტულ ღერძზე

ეს დამატებითი ტრანსფორმ ფუნქცია მნიშვნელობები ატრიალებენ ელემენტს 3D სივრცეში:

```css
.element {
  transform: rotateX();
  transform: rotateY();
  transform: rotateZ();
  transform: rotate3d();
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="3D Rotate | CSS Transform" src="https://codepen.io/xazy/embed/LYvOjNN?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/LYvOjNN">
  3D Rotate | CSS Transform</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### Scale კონკრეტულ ღერძზე

ეს დამატებითი ტრანსფორმ ფუნქცია მნიშვნელობები უცვლიან მასშტაბს ელემენტს 3D სივრცეში:

```css
.element {
  transform: scaleZ();
  transform: scale3d();
}
```

ნახეთ MDN-ს მაგალითები 3D კუბიკზე [scaleZ](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scaleZ()) და [scale3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale3d())

### Translate კონკრეტულ ღერძზე

ეს დამატებითი ტრანსფორმ ფუნქცია მნიშვნელობები უცვლიან ადგილს ელემენტს 3D სივრცეში:

```css
.element {
  transform: translateZ();
  transform: translate3d();
}
```

`translateZ` ბევრს ვერაფერს შვრება `perspective`-ს გარეშე. ესენი მუშაობენ ერთად და ქმნიან 3D ილუზიას,  თითქოს ობიექტი დისტანციაზეა:

<iframe height="300" style="width: 100%;" scrolling="no" title="TranslateZ | CSS Transform" src="https://codepen.io/xazy/embed/PogOKbE?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/PogOKbE">
  TranslateZ | CSS Transform</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Transform-ის დადებითი მხარეები

იმისათვის, რომ მთლიანად გაიგოთ რატომაა ეს სტილი იდეალური, უნდა გაეცნოთ ამ სტატიას [The Pixel Pipeline](https://developers.google.com/web/fundamentals/performance/rendering/#the_pixel_pipeline).

ტრანსფორმის კიდე ერთი დადებითი ისაა, რომ ის სრაფად მუშაობს მოწყობილობის GPU-ს დახმარებით (ე.წ ვიდეო კარტა), რომელიც ტრანზიციებს და ანიმაციებს ძალიან ეხმარება, ამის შესახებ უკეთ შემდეგ გაკვეთილებში ვისწავლით.

## დავალება

<div className="homework">

1. გადახედეთ ვიზუალურ მაგალითებს [MDN-ზე](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d) და [Quackit-ზე](https://www.quackit.com/css/functions/css_rotate3d_function.cfm).
2. დამატებითი დეტალებისთვის `perspective`-ზე, გადახედეთ [CSS-Tricks-ის არტიკლს](https://css-tricks.com/how-css-perspective-works/)
3. გადახედეთ [CSS ტრანსფორმაციებს](https://www.joshwcomeau.com/css/transforms/)

</div>