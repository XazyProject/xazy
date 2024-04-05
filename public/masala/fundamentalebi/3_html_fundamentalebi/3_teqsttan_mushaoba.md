# ტექსტთან მუშაობა

## შესავალი

უმეტესი კონტენტი ვებში არის ტექსტზე დამოკიდებული, ამიტომ დაგჭირდებათ HTML ტექსტის ელემენტებთან ბევრი და ხშირი მუშაობა.

ამ გაკვეთილში ვისწავლით ტექსტის ელემენტებს, რომლებსაც ხშირად გამოიყენებთ.

## პარაგრაფები

რას ფიქრობთ, როგორ ჩაიტვირთება ეს კოდი საიტზე?

```html
<body>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua.

  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat.
</body>
```

როგორც ხედავთ ეს არის ორი პარაგრაფი და თქვენც ელოდებით ასე ჩატვირთვას, მაგრამ ეს ასე არ მოხდება და ტექსტი ჩაიტვირთება ასე:

<iframe height="300" style="width: 100%;" scrolling="no" title="html_chonchxi_1" src="https://codepen.io/xazy/embed/wvOKvKW?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/wvOKvKW">
  html_chonchxi_1</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

თუ ჩვენ პარაგრაფის გაკეთება გვინდა, ამისვის ვიყენებთ პარაგრაფის ელემენტს, რომელიც ასე გამოიყურება: `<p>`

ახლა შეგვიძლია დავამატოთ პარაგრაფის თეგი და ვნახოთ როგორ ჩაიტვირთება:

<iframe height="300" style="width: 100%;" scrolling="no" title="paragraphs-example" src="https://codepen.io/xazy/embed/LYapYGa?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/LYapYGa">
  paragraphs-example</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## სათაურები

სათაურები არის განსხვავებული სხვა HTML ტექსტური ელემენტებისგან: ისინი გამოჩნდება დიდად და სქლად სხვა ტექსტებთან შედარებით.

არის 6 სახის სათაური, რომელიც იწყება `<h1>` დან `<h6>` ის ჩათვლით. თითო ციფრი აღნიშნავს სათაურის ზომას. ყველაზე დიდი და მნიშვნელოვანი არის `h1`, ხოლო `h6` არის ყველაზე პატარა სათაური.
როგორც პარაგრაფი, სათაურიც მსგავსად იწერება, მაგალითად ჩვენი სათაურის დასამატებლად შემოვარტყათ `<h1>` თეგი.

<iframe height="300" style="width: 100%;" scrolling="no" title="heading-example" src="https://codepen.io/xazy/embed/gOEaOra?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/gOEaOra">
  heading-example</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## ძლიერი ელემენტი

`<strong>` ელემენტი ასქელებს ტექსტს, ასევე ამ ტექსტს ხდის მნიშვნელოვანს სემანტიკურად. ამ ელემენტის გამოსაყენებლად ვარტყავთ ტექსტსს ამ ელემენტს.

<iframe height="300" style="width: 100%;" scrolling="no" title="strong example" src="https://codepen.io/xazy/embed/XWGmWdY?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/XWGmWdY">
  strong example</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

მაგრამ ამის გამოყენება უფრო ხშირად სხვა ელემენტებში მოგიწევთ.

ზოგჯერ თქვენ მოგინდებათ გახადოთ ტექსტი სქელი, ისე, რომ არ იყოს მნიშვნელოვანი, ამას მოგვიანებით CSS-ში ვისწავლით.

## Em ელემენტები

`<em>` ელემენტი ხდის ტექსტს დახრილს, ანუ italic-ს. ასევე სემანტიკურად ამ ტექსტსაც აქცენტი ენიჭება, რომელიც ეკრანის წამკითხელებისთვისაა. ამ ელემენტის გამოსაყენებლად ვარტყავთ ტექსტსს.

<iframe height="300" style="width: 100%;" scrolling="no" title="em example" src="https://codepen.io/xazy/embed/qBvOBZg?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/qBvOBZg">
  em example</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

როგორც strong, ამის გამოყენება სხვა ტექსტური ელემენტის შიგნითაც შეიძლება.

<iframe height="300" style="width: 100%;" scrolling="no" title="em in p example" src="https://codepen.io/xazy/embed/mdoedEy?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/mdoedEy">
  em in p example</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## Nesting

ალბათ შეამჩნევდით, რომ ამ მაგალითებში ელემენტები ერთმანეთის შიგნით არის მოთავსებული, ეს ცნობილია როგორც „დაბუდებული“ ელემენტები.(nesting elements.)

როდესაც ერთმანეთის შიგნით ვათავსებთ ელემენტებს, ამით ისინი ერთმანეთის მშობელი და შვილი ელემენტები ხდებიან. ელემენტები რომლებიც შიგნით არიან მათ შვილი ელემენტები ჰქვიათ, ხოლო რომელ ელემენტშიც არიან - მშობელი.

ამ მაგალითში body ელემენტი არის მშობელი, ხოლო პარაგრაფ ელემენტი - შვილი.

<iframe height="300" style="width: 100%;" scrolling="no" title="child example" src="https://codepen.io/xazy/embed/WNmQNxp?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/WNmQNxp">
  child example</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


როგორც ადამიანებში, HTML მშობელს შესაძლებელია ბევრი შვილი ჰავდეს. ელემენტები, რომლებიც ერთ დონეზე დგანან, ითვლებიან სიბლინგებად, ანუ „დედმამიშვილებად“.

ამ კოდში, ორი პარაგრაფი არის სიბლინგი, რადგან ისინი ორივე ერთი მშობლის, ამ შემთხვევაში body-ს შვილები არიან და დგანან „ბუდის“ ერთ დონეზე.

<iframe height="300" style="width: 100%;" scrolling="no" title="sibling example" src="https://codepen.io/xazy/embed/eYXpYzM?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/eYXpYzM">
  sibling example</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

იმისათვის, რომ ჩვენი სტრუქტურა გასაგები და ადვილად წასაკითხი იყოს, რეკომენდირებულია შვილსა და მშობელს შორის დაშორება 2 სფეის ღილაკი იყოს, ანუ:

```html
<მშობელი>
  <შვილი>
  </შვილი>
</მშობელი>
```

ამ ელემენტების ერთმანეთთან ურთიერთობებს უკეთ ვისწავლით და უფრო **მნიშვნელოვანი** გახდება მოგვიანებით, როდესაც ჩვენი HTML-ის გალამაზებას ვისწავლით CSS-თი.

## HTML კომენტარები

HTML კომენტარები არ არის ხილული ბრაუზერისთვის, ეს გვაძლევს საშუალებას გავაკეთოთ კომენტარები ჩვენს კოდში, რათა სხვა დეველოპერებისთვის და ჩვენთვისაც მომავალში, შევძლებთ წავიკითხოთ და მივიღოთ კონტექსტი იმის შესახებ, რაც შესაძლოა არიყოს კარგად გასაგები კოდში.

HTML კომენტარის დაწერა ადვილია, უნდა ჩავწეროთ რისი კომენტარიც გვინდა `<!--`  და `-->` ტაგებს შორის, მათ შორის შეგვიძლია კოდის დაკომენტარებაც.

<iframe height="300" style="width: 100%;" scrolling="no" title="html-comments" src="https://codepen.io/xazy/embed/YzgyzWm?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/YzgyzWm">
  html-comments</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## VSCode-ს შორთქათი

თუ გსურთ მარტივად დააკომენტაროთ რამე, შეგიძლიათ VSCode-ში გამოიყენოთ შორთქათი:

Mac-ზე: <kbd>Cmd</kbd> + <kbd>/</kbd> 
Windows და linux-ზე: <kbd>Ctrl</kbd> + <kbd>/</kbd>

## დავალება

<div className="homework">

- გადახედეთ დამატებით მასალას და ახსნილი ელემენტებით შექმენით საიტი, რომელზეც გამოყენებული იქნება ყველა ეს ელემენტი. (არაა აუცილებელი ექვსივე სათაურის ელემენტის გამოყენება.) უბრალო, უშინაარსო ტექსტის ჩასასმელად შეგიძლიათ VSCode-ში, იმ ხაზზე რომელზეც გსურთ, დაწეროთ lorem და დააჭიროთ ენთერს, ან დააგენერიროთ [აქედან](https://www.lipsum.com/)  ან ქართული [ვარიანტიდან](http://omedia.ge/tools/lipsum/ ).

</div>
