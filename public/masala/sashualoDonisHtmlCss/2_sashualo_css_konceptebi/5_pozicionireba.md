# პოზიციონირება

## შესავალი

თქვენ უკვე გაქვთ გამოცდილება ელემენტების გადაადგილების მარჯინის, პადინგის და ფლექსბოქსის გამოყენებით, მაგრამ არსებობს კიდევ ბევრი გამოსადეგარი CSS ფუნქცია, რომლის შესახებაც დღეს ვისწავლით.

## გაკვეთილის მიმოხილვა

- ისწავლით როგორ გამოიყენოთ absolute პოზიციონირება.
- ისწავლით როგორ გამოიყენოთ fixed პოზიციონირება.
- ისწავლით როგორ გამოიყენოთ sticky პოზიციონირება.
- გეცოდინებათ როგორ უნდა განასხვავოთ თითოეული ეს სტილი და შეაერთოთ.

## static და relative პოზიციონირება

`position` სტილის გაწერის გარეშე ჩვეულებრივად ყველა ელემენტს ადევს `position:static`. არსებობს `position:relative` სტილიც, რომელთა შორის მცირე განსხვავებაა. ნებისმიერ ელემენტს, რომ გავუწეროთ `top`, `right`, `bottom`, `left` სტილები, ისინი არ შეიცვლიან მდგომარეობას, ხოლო `position:relative;`-ს გაწერის შემთხვევაში, შეგვიძლია მათი გამოყენება, ანუ ელემენტს თუ დავუწერთ `position: relative` და `left: 20px;`, ეს ელემენტი მარცხენა მხრიდან 20 პიქსელით მარჯვნივ გაიწევა, მაგრამ რელატივის ამისთვის გამოყენება არ არის სწორი პრაქტიკა, ხოლო რისთვის გამოიყენება მალე გავიგებთ.

პირველი რამ, რაც `position: relative;`-ს დროს ხდება, ელემენტს შეუძლია გამოიყენოს სტილი `z-index`, რომელიც static ელემენტებთან არ მუშაობს. მაგრამ სულ რომ არ დავადოთ `z-index`, მაინც სხვა static ელემენტებზე ზევით დგას.

ხოლო მეორე, რაც `position: relative;`-ს დროს ხდება, ელემენტი ხდება "ყუთი", რომელიც საზღვრებს უწესებს მათ შიგნით მყოფ ელემენტებს, რომლებსაც აქვთ `absolute` პოზიცია. ამაზე უკეთ ქვევით ავხსნით.

### z-index

z-index ადებს ელემენტს "პრიორიტეტს", რაც ნიშნავს, რომ თუ ორი ელემენტი ერთმანეთზე დგას, რომელსაც უფრო მაღალი z-index ექნება, ის გამოჩნდება.

z-index მუშაობს მხოლოდ იმ ელემენტებზე, რომლებსაც `position: static;`-ის გარდა სხვა მნიშვნელობა აქვთ მინიჭებული.

<iframe height="300" style="width: 100%;" scrolling="no" title="Z-index example" src="https://codepen.io/xazy/embed/LYvNZKZ?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/LYvNZKZ">
  Z-index example</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>


## absolute პოზიცია

`position: absolute;` გაძლევთ უფლებას ელემენტის პოზიციონირების ისე, რომ სხვა ელემენტები არ შეაწუხოს. უფრო რომ დავაზუსტოთ, როდესაც ელემენტს აქვს ეს პოზიცია, ის ვარდება ჩვეულებრივი განლაგებიდან და "ჰაერში რჩება" და მის ადგილს მისი მომდენო ელემენტი იკავებს. აბსოლუტზეც შეგვიძლია `top`, `right`, `bottom` და `left` გამოყენება. ეს იმ შემთხვევაშია კარგი, როდესაც გვინდა რაღაც ეკრანის კონკრეტულ წერტილზე დავსვათ ელემენტი, ისე, რომ სხვა ელემენტები არ შევაწუხოთ. 

როგორც ზევით ვახსენეთ `relative` სხვა შვილი ელემენტის "ყუთი" ხდება. თუ დავადებთ ელემენტს `position:absolute;`-ს და დავაწერთ `top: 0; left: 0;` ის მთლიანი გვერდის ზედა მარცხენა კუთხეში მოთავსდება. სწორედ ამიტომაა საჭირო `relative`. თუ გვაქვს დივი, რომელსაც აქვს სიგანე(`width`) 100px და სიმაღლეც(`height`) იმავე, ხოლო მასში გვაქვს რაიმე ელემენტი, რომელსაც ადევს `position: absolute;` და `top: 0; left: 0;`, ის მოთავსდება სწორედ მშობელი დივის ზედა მარცხენა კუთხეში და არა მთლიანი გვერდის ზედა მარცხენა კუთხეში, ამიტომ აბსოლუტის სწორად გამოსაყენებლად აუცილებელია მის მშობელს ჰქონდეს `position: relative;`, რათა აბსოლუტ ელემენტმა მის ფარგლებში იმოძრაოს.


ხშირად გამოიყენება:

- მოდალებისთვის
- სურათებისთვის, რომლებზეც ტექსტია ზევიდან
- აიქონებისთვის სხვა ელემენტების ზევიდან

ამ მაგალითში ჩვენ ვიყენებთ აბსოლუტ პოზიციას, რათა ტექსტი იყოს სურათზე.

<iframe height="300" style="width: 100%;" scrolling="no" title="Absolute Positioning" src="https://codepen.io/xazy/embed/wvZGoxG?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/wvZGoxG">
  Absolute Positioning</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## fixed პოზიციონირება

Fixed ელემენტები ასევე არ ზიან HTML განლაგებაში და არიან "ჰაერში". მათზე არ მოქმედებს რელატივ პოზიციაზე მყოფი მშობელი და ისინი რელატიურნი არიან `viewport`-თან მიმართებაში. (viewport არის ეკრანის ის ადგილი, სადაც საიტი ჩანს, ანუ ბრაუზერის საძიებო ველიდან დაწყებული taskbar-მდე). viewport არ იცვლება როდესაც საიტს ვსქროლათ, ამიტომ fixed ელემენტი სულ ერთ ადგილას იქნება, რამდენიც არ უნდა ვსქროლოთ. უფრო მარტივად რომ განვმარტოთ, წარმოიდგინეთ მარკერით დახატოთ კუბიკი თქვენი ეკრანის ზედაპირზე, იგივეა ფიქსდ პოზიცია. ეს ხშირად გამოიყენება ნავიგაციებზე, რომელიც გვინდა სულ ჩანდეს ჩამოსქროლვის შემთხვევაშიც. 

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/xazy/embed/ExJKNzd?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/ExJKNzd">
  Untitled</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## sticky პოზიციონირება

Sticky ანუ წებოვანი პოზიცია ჩვეულებრივად იქცევიან, სანამ არ ჩასქროლავთ. ჩასქროლვისას იქცევიან, როგორც fixed ელემენტები, მაგრამ ისინი მაინც ზიან HTML განლაგებაში. ცოტათი შეიძლება დაიბნეთ, მაგრამ ქვევით მოყვანილი მაგალითით კარგად გაიგებთ. გასათვალისწინებელია ის, რომ ამას ხშირად არ იყენებენ, რადგან ყველა ბრაუზერში არაა მხარდაჭერილი `position: sticky`.

<iframe height="300" style="width: 100%;" scrolling="no" title="Sticky positioning example" src="https://codepen.io/xazy/embed/eYoZBqK?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/xazy/pen/eYoZBqK">
  Sticky positioning example</a> by XazyProject (<a href="https://codepen.io/xazy">@xazy</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## დავალება

1. შექმენით დივი, რომელსაც ექნება კლასი "container". ამ დივს უნდა ჰქონდეს viewport-ის 80% სიგანე, რომელიც შუაში იქნება მოთავსებული და მაქსიმუმ უნდა გაიზარდოს სიგანეში 1000 პიქსელამდე.

2. ამ კონტეინერის შიგნით შექმენით სამი დივი, რომლებსაც ექნებათ კლასები: "box1", "box2" და "box3". ესენი გასტილეთ ამ მითითებებით:
  - ყველა ყუთის სიმაღლე უნდა იყოს 200 პიქსელი.
  - თითოეულ ყუთს მიეცით განსხვავებული ფონის ფერი.
  - თითოეულ ყუთს მოუმრგვალეთ კუთხეები 10 პიქსელით.
  - "box1" გახადეთ relative, "box2" გახადეთ absolute და "box3" გახადეთ fixed.
  - გამოიყენეთ z-index, რათა "box3" იყოს "box2"-ზე მაღლა.
  - თითოეულში ჩაწერეთ რაიმე ტექსტი, რათა ერთმანეთისგან განასხვაოთ.

3. ახლა ასე განათავსეთ ყუთები:
  - "box1" უნდა იყოს კონტეინერის ზევიდან და მარცხნიდან 20 პიქსელით დაშორებული.
  - "box2" უნდა იყოს კონტეინერის ზევიდან და მარჯვნიდან 50 პიქსელით დაშორებული.
  - "box3" უნდა იყოს გაფიქსული ქვედა მარჯვენა კუთხეში 20 პიქსელით დაშორებული.

## დამატებითი რესურსები

- [ამ პატარა ვიდეოთი](https://www.youtube.com/watch?v=jx5jmI0UlXU) ვიზუალურად წარმოიდგენთ რა როგორ მუშაობს, თუ უკვე ვერ გაიგეთ.

- [position fixed vs position sticky](https://www.kevinpowell.co/article/positition-fixed-vs-sticky/)