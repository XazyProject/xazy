# გრიდ ელემენტების პოზიციონირება

## შესავალი

ამ გაკვეთილში გავარჩევთ გრიდის ნაწილებს და ვისწავლით სტილებს, რომლებიც გრიდ ელემენტების პოზიციონირებაში დაგვეხმარება.

## გაკვეთილის მიმოხილვა

- განსხვავებას გზებზე, ხაზებზე და უჯრედებზე.
- აითემების პოზიციონირება მათი დასაწყისი და დასასრული ხაზების განსაზღვრით.
- მოკლედ ჩაწერა

## გზების (tracks) განხილვა

სანამ ჩვენ პოზიციონირებაზე გადავალთ, ვისწავლოთ ტერმინოლოგია გრიდის ნაწილების უკეთესად გასაგებად. წინა გაკვეთილებში თქვენ ისწავლეთ, როდესაც `grid-template`-ს აკეთებთ, თქვენ ასევე განსაზღვრავთ *track*-ს, ანუ გზას, რომელიც გრიდს ექნება.

მაგალითისთვის, თუ ჩვენ გვსურს გავაკეთოთ 3x3 გრიდი, 100 პიქსელიანი რიგებით და 100 პიქსელიანი სვეტებით, ჩვენ შეგვიძლია განვსაზღვროთ სამი ჰორიზონტალური გზა, რომელსაც ექნება 100 პიქსელის სიმაღლე და სამი ვერტიკალური გზა 100 პიქსელის სიგანით:

<iframe height="300" style="width: 100%;" scrolling="no" title="3x3 Layout | CSS Grid" src="https://codepen.io/xazy/embed/xxerYzN?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/xxerYzN">
  3x3 Layout | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

CSS კოდში ორი სტილი დაკომენტარებულია. წაუშალეთ კომენტარი `.first-row` კლას სელექტორს, რათა ნახოთ გრიდის გზა პირველი და მეორე რიგის გრიდის ხაზებს შორის.

შემდეგ, წაუშალეთ კომენტარი `.last-column` კლასის სელექტორში არსებულ სტილს, რათა ნახოთ გრიდის გზა მესამე და მეოთხე სვეტის გრიდის ხაზებს შორის.

## ხაზები (lines)

როდესაც ჩვენ ვქნით გრიდის გზებს, გრიდის ხაზები კეთდება თავისით. ეს მნიშვნელოვანია. გრიდის ხაზები მხოლოდ მაშინ კეთდება, როდესაც ჩვენი გრიდის გზები განსაზღვრულია. ჩვენ არ შეგვიძლია პირდაპირ შევქმნათ გრიდის ხაზები.

ყველა გზას აქვს საწყისი და საბოლოო ხაზი. ეს ხაზები დანომრილია მარცხნიდან მარჯვნივ და ზევიდან ქვევით. ანუ ჩვენს 3x3-ზე გრიდს აქვს ოთხი ვერტიკალური ხაზი სვეტისთვის და ოთხი ჰორიზონტალური ხაზი რიგისთვის.

გრიდის ხაზები არის ის, რასაც ჩვენ გრიდის აითემების პოზიციონირებისთვის ვიყენებთ.

## უჯრედები (cells)

სივრცე გრიდში, რომელიც ერთი რიგის გზას და ერთი სვეტის გზას ეკუთვნის გრიდის უჯრედი ჰქვია. გრიდის უჯრედი ჰგავს ცხრილს/ტაბულას: სივრცე განსაზღვრულია რიგების და სვეტების კოორდინატებით.

ჩვეულებრივ, გრიდის კონტეინერის თითოეული შვილი ელემენტი იკავებს ერთ უჯრედს. ზედა მაგალითში ჩვენ გვაქვს ცხრა უჯრედი ჩვენს გრიდში (სამი რიგი და სამი სვეტი), თითოეულის შიგნით კი ავტომატურად პოზიციონირებული შვილი ელემეტა. ელემენტი, რომელსაც ჰქვია "A" იკავებს უჯრედს, რომელიც რიგის პირველ გზაზე (რიგის პირველ და მეორე გრიდის ხაზს შორის) და სვეტის პირველ გზაზეა (სვეტის პირველ და მეორე გრიდის ხაზს შორის). აითემი, რომელსაც "H" ჰქვია, არის უჯრედი რიგის მესამე გზაზე (რიგის მესამე და მეოთხე გრიდის ხაზს შორის) და სვეტის მეორე გზაზე (სვეტის მეორე და მესამე გრიდის ხაზს შორის).

მაგრამ, რა უნდა ვქნათ, თუ გვსურს ჩვენი გრიდის აითემების განლაგების შეცვლა? ან თუ გსურს აითემმა ერთზე მეტი უჯრედი დაიკავოს?

## პოზიციონირება

რომ მიხვდეთ როგორ შეიძლება აითემების პოზიციონირება, ჩვენ შევქმნით ბინის გეგმას. შევქმნათ ბინის მთავარი სივრცე (გრიდის კონტეინერი), რომელსაც დავყოფთ 5x5-ზე. ამ მაგალთის გასამარტივებლად, ჩვენ გამოვიყენებთ ფონის ფერს, რათა ეს კონტეინერი გასარჩევი გახდეს. ასევე აქ ვიყენებთ `display: inline-grid`-ს, ამით ჩვენი კონტეინერი არ გაიწელება, იმისთვის, რომ აითვისოს სივრცე, როგორც block ელემენტი იზავდა. ეს უკეთ წარმოაჩენს ამ სივრცეს.

<iframe height="300" style="width: 100%;" scrolling="no" title="Positioning 1 | CSS Grid" src="https://codepen.io/xazy/embed/KKYvjNR?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/KKYvjNR?hbdluka">
  Positioning 1 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ახლა ამ კონტეინერს დავამატოთ აითემები, რომლებიც ოთახებს აღნიშნავენ.

<iframe height="300" style="width: 100%;" scrolling="no" title="Positioning 2 | CSS Grid" src="https://codepen.io/xazy/embed/RwOZzpG?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/RwOZzpG">
  Positioning 2 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ჩვენი ოთახების უმეტესობა ერთ გრიდის უჯრედს იკავებს. მაგრამ ჩვენ გვაქვს დიდი მისაღები ოთახი. მისი პოზიციონირება `grid-column-start` და `grid-column-end`-ის გამოყენებით შევძელით. ამ სტილების მნიშვნელობები წარმოადგენენ სვეტის გრიდის ხაზებს, საიდანაც გვსურს, რომ დაიწყოს და სად დამთავრდეს.

ასევე შეამჩნევდით დაკომენტარებულ სტილებს. წაუშალეთ კომენტარები `grid-row-start`-ს და `grid-row-end`-ს და დააკვირდით რამხელაზე გაიზრდება მისაღები ოთახი, ის დაიკავებს გრიდის გზას პირველ და მესამე რიგის გრიდის ხაზებს შორის.

ეს სტილები გვაძლევს საშუალებას, გამოვიყენოთ არსებული გრიდის ხაზები, რომ ვუთხრათ საიდან სადამდე გადაიჭიმოს თითოეული აითემი. შეცვალეთ ამ სტილების მნიშვნელობები და დააკვირდით უკეთ. თუ ხაზებს კარგად ვერ არჩევთ, გამოიყენეთ ინსპექტი და ნახეთ გრიდის განლაგება.

ახლა ჩვენი სივრცე გადავანაწილოთ უკეთ. ჩვენ ავითვისებთ ოთახებისთვის რამდენიმე უჯრედს და შევავსებთ გრიდისთვის გამოყოფილ ადგილს.

<iframe height="300" style="width: 100%;" scrolling="no" title="Positioning 3 | CSS Grid" src="https://codepen.io/xazy/embed/wvZrwav?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/wvZrwav">
  Positioning 3 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ბინის განლაგება განაწილებულია. დააკვირდით `#samzareulo` სელექტორს, აქ შემოკლებულად დავწერეთ. `grid-column` არის `grid-column-start` და `grid-column-end`, ოღონდ დახრილი ხაზით გამოყოფილი. სლეშის მარცხნივ ერთის მნიშვნელობები წერია, მეორე მხარეს - მეორეს მნიშვნელობები. `grid-row` შემოკლებული ვერსიაა აითემის რიგის პოზიციონირების.

ერთი რობლემა, რაც ჩვენს ბინის გეგმას აქვს არის აბაზანა და სამზარეულო ერთმანეთს დაშორებულია. ფულს დავზოგავდით სანტექნიკაში, ესენი ერთმანეთის გვერდზე რომ იყოს. დაფიქრდით, როგორ შეგიძლიათ საწყისი და საბოლოო პოზიციების შეცვლა აბაზანისთვის, საძინებლისთვის და გარდერობისთვის ისე, რომ აბაზანა სამზარეულოს გვერდზე აღმოჩნდეს.

## გრიდის არეა (grid-area)

უკვე იცით გრიდის აითემების პოზიციონირება რიგისა და სვეტის ხაზებით, მაგრამ სხვა გზებიც არსებობს მათი პოზიციონირებისთვის და ცოტათი დამაბნეველია.

მოკლეზე უფრო მოკლე სტილები არსებობს გრიდის აითემების პოზიციონირების. თქვენ შეგიძლიათ `grid-row-start` / `grid-column-start` / `grid-row-end` / `grid-column-end` -ის შეჯვარება `grid-area`-ს გამოყენებით.

ჩვენი მისაღები ოთახი შეგვიძლია ასე ჩავწეროთ:

```css
/* styles.css */

#misagebi-otaxi {
  grid-area: 1 / 1 / 3 / 6;
}
```

მაგრამ, `grid-area` სხვა რაღაცასაც შეიძლება ნიშნავდეს.

გრიდის ხაზების გამოყენების ნაცვლად, აითემების გრიდში პოზიციონირებისთვის, შეგვიძლია გავაკეთოთ ვიზუალური განლაგება გრიდში სიტყვების გამოყენებით. ამისთვის ვაძლევთ თითოეულ აითემს გრიდში სახელს `grid-area`-ს გამოყენებით.

ანუ, ჩვენი მისაღები ოთახის განლაგება შეგვიძლია ჩავწეროთ ასე:

```css
/* styles.css */

#misagebi-otaxi {
  grid-area: misagebi-otaxi;
}
```

ჩვენ შეგვიძლიათ ასე დავუწეროთ გრიდის აითემებს და მივცეთ თითოეულ ოთახს `grid-area`-ს მნიშვნელობა სახელად. შემდეგ ჩვენ შეგვიძლია მოვხაზოთ მთლიანი სტრუქტურა გრიდის კონტეინერით `grid-template-area`-ს გამოყენებით:

```css
.container {
  display: inline-grid;
  grid-template: 40px 40px 40px 40px 40px / 40px 40px 40px 40px 40px;
  background-color: lightblue; 
  grid-template-areas:
    "misagebi-otaxi misagebi-otaxi misagebi-otaxi misagebi-otaxi misagebi-otaxi"
    "misagebi-otaxi misagebi-otaxi misagebi-otaxi misagebi-otaxi misagebi-otaxi"
    "sadzinebeli sadzinebeli abazana samzareulo samzareulo"
    "sadzinebeli sadzinebeli abazana samzareulo samzareulo"
    "garderobi garderobi abazana samzareulo samzareulo"    
}

.otaxi {
  border: 1px solid;
  font-size: 50%;
  text-align: center;
}

#misagebi-otaxi {
   grid-area:  misagebi-otaxi;
}

#samzareulo {
  grid-area: samzareulo;
}

#sadzinebeli {
  grid-area: sadzinebeli;
}

#abazana {
  grid-area: abazana;
}

#garderobi {
  grid-area: garderobi;
}
```

<iframe height="300" style="width: 100%;" scrolling="no" title="grid-template-areas 1 | CSS Grid" src="https://codepen.io/xazy/embed/VwNMZPg?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/VwNMZPg">
  grid-template-areas 1 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

ასევე შეგვიძლია `.`-ის გამოყენება ცარიელი უჯრედებისთვის. ვთქვათ ბინაში ვამატებთ რაიმეს და არ ვიცით როგორ დაგვეტევა, ამისთვის შეგვიძლია რაღაცეების აღება აბაზანიდან და სამზარეულოდან:

<iframe height="300" style="width: 100%;" scrolling="no" title="grid-template-areas 2 | CSS Grid" src="https://codepen.io/xazy/embed/xxeXbLq?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/xxeXbLq">
  grid-template-areas 2 | CSS Grid</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

დააკვირდით როგორ ჩავანაცვლეთ აბაზანისა და სამზარეულოს სივრცეები სიცარიელით `"garderobi garderobi . . ."`.

ახლა იცით ორი განსხვავებული გზა `grid-area`-ს გამოყენების გრიდ აითემზე. გრიდის უჯრედები, რომლებიც მისაღებ ოთახში არიან ერთად ჰქვიათ გრიდის არეა.


## შეჯამება

როდესაც დავალებებს გადაიკითხავთ, შესაძლოა შეგხვდეთ ტერმინები `span` და `auto`, როდესაც გრიდის აითემებს პოზიციებს უცვლით, ისინი არიან მსგავსი სტილები, როგორც `justify` და `align` ფლექსბოქსში. საუკეთესო გზა ამ ტერმინილოგიის სწავლისთვის და პოზიციონირებისთვის არის ბევრი პრაქტიკა.

## დავალება

<div className="homework">
1. გადადით [CSS დავალებების რეპოზიტორიაში](https://github.com/XazyProject/css-davalebebi) და გააკეთეთ პირველი დავალება `grid` ფოლდერში:
  - `grid-ganlageba-1`
</div>

## დამატებითი რესურსები

- ითამაშეთ 1-17 ლეველები [CSS Grid Garden](https://cssgridgarden.com/)-ში აითემების პოზიციონირებაში პრაქტიკისთვის. 17 ლეველზე მაღლა ჩვენი ცოდნის ფარგლებს გავცდებით, ამიტომ ჯერ არ გააკეთოთ.

- თუ გინდათ იცოდეთ მეტი `grid-template-areas`-ზე, გადახედეთ [Smashing Magazine-ს არტიკლს](https://www.smashingmagazine.com/understanding-css-grid-template-areas).

