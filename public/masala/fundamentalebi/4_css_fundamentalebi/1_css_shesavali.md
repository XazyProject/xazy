#CSS შესავალი

## შესავალი

წინა გაკვეთილებში ვისწავლეთ როგორ დავწეროთ ელემენტარული HTML კოდი და როგორია ვებგვერდის სტრუქტურა. შემდეგი საფეხურია, რომ ეს სტრუქტურა გავალამაზოთ, ანუ გავსტილოთ, რისთვისაც CSS გვჭირდება. მომდევნო გაკვეთილებში ყურადღებას დავუთმობთ CSS-ის ფუნდამენტებს, ყველაფერს, რისი დასაწყისიდან ცოდნა აუცილებელია.

თავიდან შევხვდებით CSS კოდებს, ეს კოდი სად დავწეროთ ბოლოში ვისწავლით.

## გაკვეთილის მიმოხილვა

- დავადოთ სტილი HTML-ს CSS-ით.
- როგორ მუშაობს class და ID ატრიბუტები.
- დავამატოთ სტილი კონკრეტულ ელემენტებს სწორი სელექთორის გამოყენებით.

## სინტაქსი

CSS შედგება ბევრი წესისგან. ეს წესები ძირითადად შეიქმნა სელექთორებისთვის (selectors - მოგვიანებით განვიხილავთ).

![css syntax](https://raw.githubusercontent.com/XazyProject/masala/main/fundamentalebi/4_css_fundamentalebi/css_shesavali-imgs/00.jpg)

`<div>` ელემენტი ერთ-ერთი HTML-ს უმნიშვნელოვანესი ელემენტია. ეს არის ცარიელი კონტეინერი. ზოგადად უკეთესია სხვა თეგების გამოყენება, მაგალითად `<h1>`-ის ან `<p>`-ის გამოყენება კონტენტის მოსათავსებლად, მაგრამ რაც უფრო სიღრმისეულად ვისწავლით CSS-ს, უფრო ხშირად გამოვიყენებთ ცარიელ კონტეინერს სხვა ელემენტების მოსათავსებლად. ამ შემთხვევაში ვიყენებთ `<div>`-ს მაგალითების კარგად წარმოსაჩენად. მომდევნო გაკვეთილებში ჩვენ უფრო სიღმისეულად ვისწავლით ამის შესახებ, როდესაც უფრო "სწორი" იქნება ამის გამოყენება.

## სელექტორები

```css
h1 { color:red; }

/* h1 არის სელექტორი */
/* { color:red; } არის დეკლარაცია */
/* color არის property, ანუ სტილი */
/* red არის მნიშვნელობა */
```

Selector განსაზღვრავს თუ რომელ ელემენტებს ეკუთვნის ეს წესი.

Declaration განსაზღვრავს თუ როგორ უნდა გაისტილოს ელემენტები, რომლებზეც selector მიუთითებს. თავის მხრივ დეკლარაციები იყოფა ორ ნაწილად (property და value), და გამოყოფილია ორი წერტილით.

Property მიუთითებს ელემენტის იმ ასპექტზე რომელიც გვინდა რომ შეიცვალოს. მაგალითად: color, font, width, height and border.

Values აღწერს შერჩეული Property-ის მნიშვნელობას. მაგალითად თუ გვინდა color Property-ის შეცვლა, მისი მნიშვნელობა იქნება ფერი რომელიც გვინდა რომ დაედოს ელემენტში ტექსტს.

სელექტორები გამოიყენება იმისთვის, რომ HTML ელემენტებს მივანიჭოთ CSS-ს სტილები, ანუ HTML ელემენტებია ის, რასაც "ვასელექთებთ" - ვირჩევთ ამ CSS წესებისთვის. ეს გაკვეთილი არ განიხილავს ყველა სელექტორს, მაგრამ ვისწავლით ყველაზე ხშირად გამოყენებადებს და ისეთებს, რომლების გამოყენებასასც უნდა შევეჩვიოთ და მათთან კომფორტულად ვიყოთ.

### უნივერსალური სელექტორი

უნივერსალური სელექტორი ირჩევს ნებისმიერი ტიპის ელემენტს. ამ მაგალითში აბსოლუტურად ყველა ელემენტს დაედება `color: purple;` სტილი. (ტექსტსს დაადებს იასამნისფერს, ამასაც მოგვიანებით ვისწავლით.)

```css
* {
  color: purple;
}
```

### ტიპის სელექტორები

ტიპის სელექტორი (ან ელემენტის სელექტორი) მონიშნავს ყველა ელემენტს, რომელი ელემენტის ტიპსაც მივუთითებთ და სინტაქსი უბრალოდ ელემენტის სახელი იქნება.

```html
<!-- index.html -->

<div>Hello, World!</div>
<div>Hello again!</div>
<p>Hi...</p>
<div>Okay, bye.</div>
```

```css
/* styles.css */

div {
  color: white;
}
```

აქ სამივე `<div>` ელემენტი მოინიშნება და დაედება თეთრი ფერი, ხოლო `<p>` ელემენტი ხელშეუხებელი იქნება.

### კლასის სელექტორი

კლასის სელექტორი მონიშნავს ყველა ელემენტს, რომელსაც მოცემული კლასი ადევს, ეს კლასი კი ჩვეულებრივი ატრიბუტია, რომელსაც HTML ელემენტს ამაგრებ. ასე უნდა დაადო კლასი HTML თეგს და შემდეგ აირჩიო ეს კლასი CSS-ში:

```html
<!-- index.html -->

<div class="alert-text">Please agree to our terms of service.</div>
```

```css
/* styles.css */

.alert-text {
  color: red;
}
```

კლასები არ არის კონკრეტულად რომელიმე ელემენტისთვის, ანუ მისი გამოყენება შეიძლება ნებისმიერ ელემენტზე. თუ შევქმნით კლასს CSS-ში, რომელიც ელემენტს წითელ ფერს ადებს, ამ კლასს HTML-ში პარაგრაფს დავუწერთ, სათაურს თუ div-ს, მნიშვნელობა არ აქვს, ყველას წითელი ფერი დაედება.

ასევე კლასის ატრიბუტს შეუძლია დაიდოს რამდენიმე კლასი, კლასებს შორის დაშორება სფეისით უნდა იყოს. ანუ თუ გვაქვს კლასი, რომელიც წითელ ფერს ადებს, ხოლო მეორე კლასი ფონტის ზომას ზრდის, შეგვიძლია ერთ ელემენტს ორივე დავადოთ. მაგალითად: `class="color-red font-18"`, კლასის სახელს ჩვენით ვიფიქრებთ. კლასის გასტილვისას წინ ვუწერთ წერტილს (`.`).

## ID სელქტორი

ID სელექტორი მსგავსია კლას სელექტორის. ისინი ირჩევენ ელემენტს, რომელსაც ჩვენს მიერ დადებული ID ადევს, რომელიც ასევე ატრიბუტია HTML ელემენტის. განსხვავება კლას სელექტორსა და ID სელექტორს შორის არის ის, რომ ელემენტს შეუძლია ჰქონდეს მხოლოდ **ერთი** ID. ის არ უნდა იყოს გამოყენებული ერთ გვერდზე ორჯერ და არ უნდა შეიცავდეს სფეისს:

```html
<!-- index.html -->

<div id="title">My Awesome 90's Page</div>
```

```css
/* styles.css */

#title {
  background-color: red;
}
```

როგორც ვისწავლეთ კლასს გასტილვისას წინ ვუწერთ წერტილს, ხოლო აიდის ვუწერთ ჰეშთეგს(`#`). აიდის ყველაზე დიდი მახეა მისი ხშირად გამოყენება ხალხის მიერ, მაშინ, როდესაც ეს არაა საჭირო და კლასიც გაართმევს თავს. მაგრამ არის შემთხვევები, როდესაც ID-ის გამოყენება უფრო გონივრულია და საჭირო, მაგალითად როდესაც საჭიროა სპეციფიურად რაიმეს მონიშვნა ან როდესაც გვაქვს ლინკები, რომლებიც იმავე გვერდზე კონკრეტულ ადგილას გადავყავართ.

### ჯგუფური სელექტორი

რა უნდა ვქნათ მაშინ, როდესაც გვაქვს ელემენტების ორი ჯგუფი, რომლებსაც აქვთ საზიარო სტილი?

```css
.read {
  color: white;
  background-color: black;
  /* კიდევ რამდენიმე უნიკალური სტილი */
}

.unread {
  color: white;
  background-color: black;
  /* კიდევ რამდენიმე უნიკალური სტილი */
}
```

ორივე ჩვენი `.read` და `.unread` სელექტორები იზიარებენ `color: white;` და `background-color: black;` სტილს, მაგრამ ორივეს აქვს უნიკალური სტილი, რომლებიც არ არის საერთო. გამეორებული კოდი რომ მოვჭრათ, ჩვენ შეგვიძლია ორივე ერთად მოვნიშნოთ და დავადოთ ერთიდაიგივე სტილი, ხოლო განსხვავებული სტილები ცალკე დავწეროთ:

```css
.read,
.unread {
  color: white;
  background-color: black;
}

.read {
  /* კიდევ რამდენიმე უნიკალური სტილი */
}

.unread {
  /* კიდევ რამდენიმე უნიკალური სტილი */
}
```

ორივეს, დაჯგუფებულსაც და დაუჯგუფებელსაც აქვს იგივე შედეგი, მაგრამ  მეორე მაგალითი ამცირებს კოდის გამეორებას და უფრო ადვილს ხდის მის შეცვლას ერთიანად.

### ჯაჭვური სელექთორი (Chaining selectors)

კიდევ ერთი გზა სელექტორის გამოსაყენებლად არის ჯაჭვივით გადაბმა, მათი გაყოფის გარეშე:

```html
<div>
  <h1 class="subsection">ბოლო პოსტები</h1>
  <p class="subsection preview">აქ წერია პოსტის აღწერა.</p>
</div>
```

ჩვენ გვაქვს ორი ელემენტი, რომლებსაც `subsection` კლასი ადევს და აქვს უნიკალური სტილი. ანუ თუ ამ `subsection`-ს ადევს `color: red;` დივსაც და პარაგრაფსაც დაედება წითელი ფერი, ხოლო რა უნდა ვქნათ მაშინ, თუ გვინდა სხვა განსხვავებული სტილის დადება, მაშინ, როდესაც სხვა კლასი აქვს მეორე ელემენტად? ჩვენს შემთხვევაში დივს მეორე კლასი ადევს `header`, `header` რომ გავსტილოთ ეს ორი კლასი ერთმანეთს ჯაჭვივით უნდა გადავაბათ CSS-ში ასე:

```css
.subsection.header {
  color: red;
}
```

`.subsection.header` სტილავს ისეთ ელემენტს, რომელსაც ორივე - `subsection` და `header` კლასები ადევს. ალბათ შეამჩნევდით, რომ მათ შორის სფეისი არაა. ეს სინტაქსი მუშაობს ნებისმიერი კლასების კომბინაციის მისაჯაჭვებლად.

ეს ასევე შეგვიძლია გამოვიყენოთ კლასისა და ID-ს მისაჯაჭვებლად:

```html
<div>
  <h1 class="subsection header">ბოლო პოსტები</h1>
  <p class="subsection" id="preview">
    აქ წერია პოსტის აღწერა.
  </p>
</div>
```
შეგიძლიათ აიღოთ ორი ელემენტი და გააერთიანოთ ასე:

```css
.subsection.header {
  color: red;
}

.subsection#preview {
  color: blue;
}
```

ზოგადად, თქვენ არ შეგიძლიათ გააერთიანოთ ერთზე მეტი ტიპის სელექტორი, რადგან ელემენტი არ შეიძლება იყოს ორი სხვადასხვა ტიპის ერთდროულად. მაგალითად თუ შევაჯვარებთ ორი ტიპის სელექტორს მაგალითად `div`-ს და `p`-ს, მოგვცემს ასეთ სელექტორს: `divp`, რომელიც არ იმუშავებს, რადგან სელექტორი დაიწებს მოძებნოს `< divp >` ელემენტი, რომელიც არ არსებობს.

### "შთამომავლობის" კომბინატორი (Descendant combinator)

არსებობს ოთხი სახის კომბინატორი, მაგრამ ამჟამად ჩვენ მხოლოდ ერთ კომბინატორს განვიხილავთ. 

წარმოიდგინეთ თქვენ გაქვთ HTML სტრუქტურა, რომელიც ასახავს ოჯახს:

```html
<div class="ojaxi">
  <div class="babua">
    <div class="mshobeli">
      <div class="bavshvi">
        <p class="bednieri">მე ვარ ბედნიერი ბავშვი.</p>
      </div>
    </div>
  </div>
</div>
```

ახლა კი ვთქვათ, რომ თქვენ გინდათ გასტილოთ ყველა ელემენტი, რომლის კლასიც არის "bednieri", და ეს ელემენტები არიან "ojaxi"-ს შიგნით. თქვენ შეგიძლიათ ეს კომბინატორი ამის განსახორციელებლად ასე გამოიყენოთ:

```css
.ojaxi .bednieri {
  color: green;
}
```

ეს CSS კოდი ამბობს: "მონიშნე ყველა ელემენტი, რომელსაც აქვს კლასი "bednieri", ოღონდ ეს ელემენტები "ojaxi"-ს შიგნით უნდა იყოს." ანუ, ჩვენს შემთხვევაში პარაგრაფი, "bavshvi" დივ-ის შიგნით გახდება მწვანე, რადგან "bednieri" არის "ojaxi"-ს შიგნით.

კიდევ ერთი მაგალითი:

```html
<div class="ojaxi">
  <p class="bednieri">მე ვარ ბედნიერი ოჯახის წევრი!</p>
  <div class="mshobeli">
    <p class="bednieri">მეც ოჯახის ბედნიერი წევრი ვარ!</p>
  </div>
</div>
```

ამ შემთხვევაში ორივე პარაგრაფი გახდება მწვანე, რადგან ისინი "ojaxi"-ს შთამომავლები არიან.

არ არსებობს ლიმიტი, თუ რამდენი კომბინატორის დამატება შეგიძლია, ანუ .`.erti .ori. sami .otxi` რომ დაწეროთ, ესეც სწორი იქნება. ეს აირჩევს ელემენტს, რომელსაც აქვს კლასი `otxi`, მხოლოდ იმ შემთხვევაში, თუ მას აქვს მშობელი ელემენტი, რომლის კლასია `sami` და თავად ამის მშობელია `ori` და ა.შ.

## Properties

CSS-ში არის properties, ე.წ. სტილები, რომლებსაც სულ გამოვიყენებთ. ჩვენ ამჟამად ვისწავლით რამდენიმეს, რომელიც დასაწყისისთვის გამოგვადგება. როდესაც ელემენტი არის არჩეული, ფროფერთი განსაზღვრავს სტილებს, რომლებიც ამ ელემენტებს დაედება.

### Color და background-color

`color` სტილი ადებს ელემენტს ტექსტის ფერს, ხოლო `background-color` ადებს ელემენტს ფონის ფოტოს.

<iframe height="300" style="width: 100%;" scrolling="no" title="css-intro-color-bg-color" src="https://codepen.io/xazy/embed/JjzXWJQ?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/JjzXWJQ">
  css-intro-color-bg-color</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ორივე სტილს შეუძლია მიიღოს ბევრი სახის მნიშვნელობა. ხშირად გამოიყენება ინგლისური სიტყვები, რომლებიც ფერებს აღნიშნავენ, მაგალითად `red`, `green` ან თუ გვინდა გამჭირვალე იყოს დავწერთ `transparent`. ასევე ისინი იღებენ HEX, RGB და HSL მნიშვნელობებს. მათი მაგალითები:

```css
p {
  /* სიტყვის მნიშვნელობის მაგალითი: */
  color: red;
}

p {
  /* hex მაგალითი: */
  color: #1100ff;
}

p {
  /* rgb მაგალითი: */
  color: rgb(100, 0, 127);
}

p {
  /* hsl მაგალითი: */
  color: hsl(15, 82%, 56%);
}
```

გადახედეთ [CSS ფერების მნიშვნელობებს](https://www.w3schools.com/cssref/css_colors_legal.php), რათა უკეთ გაიგოთ ეს.

### ტიპოგრაფია და ტექსტის განლაგება (text-align)

`font-family`-ს შესაძლოა ჰქონდეს ერთი მნიშვნელობა ან მძიმით გამოყოფილი სია მნიშვნელობებისა, რომელიც განსაზღვრავს, რომელი ფონტი გამოიყენოს ელემენტმა. როდესაც ფონტს რამდენიმე სიტყვისგან შემდგარი სახელი აქვს, ვწერთ ბრჭყალებში, მაგალითად: `"Times New Roman"` (ბრჭყალები იმიტომ აქვს, რომ მათ სფეისები აქვთ შუაში), ხოლო თუ ერთ სიტყვიანი სახელი ქვია ფონტს, ბრჭყალების გარეშე ვწერთ, მაგალითად: `serif`.

თუ ბრაუზერს არ შეუძლია ან არ აქვს იმ ფონტის მხარდაჭერა, რომელიც პირველი ჩაწერეთ ამ მნიშვნელობების სიაში, შემდეგ ფონტს გამოიყენებს და მიყვება იქამდე, სანამ იმ ფონტს არ იპოვის, რომლის მხარდაჭერაც აქვს ბრაუზერს. სწორედ ამიტომ არის საჭირო რამდენიმე ფონტის დაწერა მნიშვნელობაში, დაიწყოთ იმით, რომლის გამოყენებაც ყველაზე მეტად გინდათ, ხოლო ბოლოში ნაკლებად სასურველი ფონტი დაწეროთ, მაგალითად: `font-family: "Times New Roman", serif;`.

`font-size`, როგორც სახელიდან ვხვდებით, ადებს ფონტს ზომას. როდესაც ამ სტილს ვაწვდით მნიშვნელობას მნიშვნელობა არ უნდა შეიცავდეს სფეისს, მაგალითად: `font-size: 22px;`. როგორც ხედავთ "22"-სა და "px"-ს შორის სფეისი არაა.

`font-weight` ტექსტს ადებს სისქეს, თუ ამ ფონტს აქვს სქელი ვერსიები. მნიშვნელობა შეიძლება იყოს სიტყვა, მაგალითად: `font-weight: bold;`, რომელიც ტექსტს გაასქელებს, ან აირჩიოთ 100-დან 900-მდე მნიშვნელობა (200, 300, 400 და ა.შ.) მაგალითად: `font-weight: 700` (ეს იგივეა რაც სიტყვით დაწერილი `bold`). ჩვეულებისამებრ ეს 100-დან 900-მდე მნიშვნელობები დამოკიდებულია ფონტზე, რადგან შეიძლება თავად ფონტს არ ჰქონდეს 700 სისქის ფონტი.

`text-align` ჰორიზონტალურად უცვლის ადგილს ტექსტს, იმ ელემენტში, რომელშიც ის წერია. აქვს სხვადასხვა მნიშვნელობები, როგორიცაა left, right, center, და როგორც უკვე მიხვდით, left-მარცხნივ მოათავსებს ტექსტს, right - მარჯვნივ, ხოლო center - შუაში. მაგალითად: `text-align: center;`.

<iframe height="300" style="width: 100%;" scrolling="no" title="font-styles" src="https://codepen.io/xazy/embed/GReZWYW?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/GReZWYW">
  font-styles</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### სურათის სიმაღლე და სიგანე

სურათები არ არის ერთადერთი ელემენტები, რომლებსაც შეგვიძლია მივაწოდოთ სიმაღლე და სიგანე, მაგრამ ამჯერად ამაზე ვკონცენტრირდებით.

ჩვეულებრივ, როდესაც ვიყენებთ `<img>` ელემენტის `height` (სიმაღლე) და `width` (სიგანე) იქნება ის, რა ზომაც სურათს აქვს, ისე, რომ არც დასჭირდება დაკონკრეტება. თუ გინდათ ისე შეუცვალოთ ზომა, რომ პროპორციები არ დაკარგოს, უნდა გამოვიყენოთ მნიშვნელობა "auto" `height` სტილისთვის და მივანიჭოთ `width`-ს მნიშვნელობა, რა ზომის გვინდა იყოს.

```css
img {
  height: auto;
  width: 500px;
}
```

მაგალითად, თუ სურათის ზომა არის 500px სიმაღლე და 1000px სიგანე, იგივე კოდი რომ გავუწეროთ, რაც ზევით წერია, სიმაღლე ავტომატურად გახდება 250px. ეს უზრუნველყოფს სურათი იმავე პროპორციის დარჩეს და არ გაიწელოს რომელიმე მხარეს.

საუკეთესო პრაქტიკაა მიუთითოთ ეს ორივე მნიშვნელობა `<img>` ელემენტს, მიუხედავად იმისა აპირებთ თუ არა ორიგინალი ზომების შეცვლას. როდესაც ეს მნიშვნელობები არ არსებობს, როდესაც საიტი ჩაირთვება და სანამ სურათი ჩაიტვირთება, ის გვერდზე არ დაიკავებს ადგილს და უცბად "გამოხტება" ეკრანზე, ხოლო როდესაც წინასწარ აქვს განსაზღვრული ზომები, "დაარეზერვებს" იმ ადგილს, სადაც უნდა გამოჩნდეს.

## როგორ დავამატოთ HTML-ში CSS

ჩვენ უკვე ვისწავლეთ ელემენტარული სინტაქსი, ახლა ვისწავლოთ როგორ დავამატოთ ეს CSS HTML-ში. ამისთვის არსებობს სამი მეთოდი.

### სხვა ფაილში წერა (External CSS)

სხვა ფაილში დაწერა ყველაზე ხშირი მეთოდია, ეს გულისხმობს ცალკე CSS ფაილის შექმნას და HTML ფაილში დამატებას, `<head>` ელემენტში, თვით-დახურვად `<link>` თეგში. CSS ფაილის შესაქმნლეად ფაილის სახელის ბოლოში, `.html`-ს მსგავსად ვუწერთ `.css`-ს:

```html
<!-- index.html -->

<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* styles.css */

div {
  color: white;
  background-color: black;
}

p {
  color: red;
}
```

პირველ რიგში ვამატებთ თვით-დახურვად `<link>` ელემენტს `<head>` ელემენტში HTML ფაილში. `href` ატრიბუტში ვწერთ CSS ფაილის მდებარეობას. ამ მაგალითში `index.html` და `styles.css` ფაილი ერთ ფოლდერში გვაქვს. `rel` ატრიბუტი საჭიროა, ეს აზუსტებს "ურთიერთობას" HTML ფაილსა და დალინკულ ფაილს შორის.

ამ ახლად შექმნილ `styles.css` ფაილში გვაქვს სელექტორი (`div`-ის და `p`-სი), რომელსაც მოყვება გამხსნელი და დამკეტი ფიგურული ფრჩხილები, რომლებიც ქმნიან "declaration" ბლოკს, როგორც უკვე დასაწყისის კოდშია ნახსენები. საბოლოოდ ჩვენ ვწერთ ჩვენს სტილებს ამ declaration ბლოკში. `color:white;` არის ერთი დეკლარაცია, რომელშიც `color` არის property ანუ სტილი და `white` ამის მნიშვნელობა, `background-color: black;` არის კიდევ ერთი დეკლარაცია.

`styles.css` უბრალოდ ჩვენი მოფიქრებული სახელია ამ ფაილისთვის, ჩვენ შეგვიძლია დავარქვათ ამ ფაილს რაც გვინდა, ოღონდ `.css`-თი ბოლოვდებოდეს, მაგრამ "styles" ან "style" ყველაზე ხშირად გამოყენებული სახელებია.

ამ მეთოდის პლიუსებია:

1. ეს აცალკევებს HTML და CSS ფაილებს, რაც გულისხმობს იმას, რომ HTML ფაილი უფრო პატარა, ადვილად წასაკითხი და "სუფთა" იქნება.
2. ჩვენ CSS-ს წერა და რედაქტირება ერთ განსაზღვრულ ადგილას შეგვეძლება, ეს განსაკუთრებით მოსახერხებელია, როცა ვებსაიტს ბევვრი სტილი აქვს და ამ სტილებს იზიარებენ ერთმანეთში.

### HTML-ში ადაპტირებული, შიდა CSS (Internal CSS)

შიდა CSS (internal/embedded CSS) გულისხმობს CSS-ს დამატებას HTML ფაილში, ცალკე ფაილის შექმნის გარეშე. ამ მეთოდით ყველა თქვეს სტილს ათავსებთ `<style>`-ს გამხსნელ და დამხურავ თეგებს შორის, რომელიც უნდა მოთავსდეს `<head>` თეგში. რადგან სტილები არის `<html>` თეგში, აღარ გვჭირდება `<link>` ელემენტი, რადგან ეს გარე ფაილიდან შემოტანის შემთხვევაში გვჭირდება.

ამ განსხვავებების მიუხედავად, სინტაქსი ზუსტად იგივეა, როგორც გარე ფაილის მეთოდში(სელექტორი, ფიგურული ფრჩხილები, დეკლარაციები):

```html
<head>
  <style>
    div {
      color: white;
      background-color: black;
    }

    p {
      color: red;
    }
  </style>
</head>
<body>
  ...
</body>
```

ეს მეთოდი გამოსადეგარი იქნება, როდესაც უნიკალური სტილის დამატება გვინდა *მხოლოდ ერთი* გვერდისთვის, მაგრამ ეს არ აცალკევებს HTML-სა და CSS-s ერთმანეთისგან, რაც HTML ფაილის ზომაში გაზრდას გულისხმობს.

### "ხაზშიდა" CSS (Inline CSS)

ხაზშიდა CSS გვაძლევს საშუალებას დავამატოთ სტილები პირდაპირ HTML ელემენტებში, მაგრამ ეს მეთოდი არ არის რეკომენდირებული:

```html
<body>
  <div style="color: white; background-color: black;">...</div>
</body>
```

პირველს რასაც შევამჩნევთ, არის ის, რომ აქ არ ვიყენებთ სელექტორებს, რადგან სტილი პირდაპირ `<div>`-ის გამხსნელ თეგშივე წერია. შემდეგ ჩვენ გვაქვს `style=` ატრიბუტი, რომელსაც აქვს მნიშვნელობა ბრჭყალებში.

თუ თქვენ გინდათ უნიკალური სტილი ერთი ელემენტისთვის, ეს მეთოდი კარგად მუშაობს, მაგრამ ეს არ არის რეკომენდირებული რამდენიმე მიზეზის გამო:

- ეს ფაილი მალევე გახდება არეული, როდესაც დაიწყებთ ბევრი დეკლარაციის შექმნას თითოეული ელემენტისთვის, რაც გამოიწვევს HTML ფაილის ზედმეტად გადატვირთვას.

- თუ თქვენ გინდათ ბევრ ელემენტს ჰქონდეს ერთნაირი სტილი, თქვენ მოგიწევთ დააკოპიროთ ეს სტილი ყველა ელემენტისთვის, რაც გამოიწვევს ბევრი კოდის გამეორებას.

- ყველა ხაზშიდა CSS გადააწერს ზევიდან ზედა ორ მეთოდს, ანუ ეს სტილი სხვა სტილებთან შედარებით პრიორიტეტული იქნება, რაც გამოიწვევს მოულოდნელ შედეგებს.

## დავალება

<div className="homework">

გადადით [ჩვენს CSS დავალებების რეპოზიტორში](https://github.com/XazyProject/css-davalebebi) და წაიკითხეთ README. შემდეგ, როდესაც გაეცნობით, როგორ გამოიყენოთ ეს დავალებები, გადადით `fundamentalebi` ფოლდერში. განიხილეთ თითოეული README ფაილი, სანამ დაიწყებთ ამ დავალებების გაკეთებას ამ თანმიმდევრობით:

- `01-css-metodebi`
- `02-class-id-seleqtorebi`
- `03-jgufuri-seleqtorebi`
- `04-jachvuri-seleqtorebi`
- `05-shtamomavluri-kombinatori`
- `06-kaskadis-gasworeba`

შენიშვნა: ამ დავალებების ამოხსნები შეგიძლიათ იპოვოთ `amoxsna` ფოლდერში, რომელიც თითოეულ სავარჯიშოშია.

</div>

## დამატებითი რესურსები

- [მოზილას CSS მნიშვნელობები და ერთეულები](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units) გამოგადგებათ გაეცნოთ სხვადასხვა ტიპის ერთეულებსა და მნიშვნელობებს.