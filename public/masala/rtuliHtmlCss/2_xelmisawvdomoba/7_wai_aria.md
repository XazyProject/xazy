# WAI ARIA

## შესავალი

განვლილ ლექციებში ვისწავლეთ რამდენიმე გზა, რაც ჩვენს საიტს უფრო ხელმისაწვდომს ხდის. ეს გაკვეთილები აისბერგის წვერი იყო. WAI-ARIA გვაცნობს ატრიბუტებს, რომლებიც გვეხმარება საიტის უფრო ხელმისაწვდომობაში, რაც ელემენტების სემანტიკების და კონტექსტის შეცვლით გამოიხატება. ამით კონტროლი იზრდება და დამხმარე ტექნოლოგიებს ეხმარება. რადგანაც ეს საკითხი ძაან ჩახლართულია, მხოლოდ ორ ატრიბუტს ვისწავლით, რომელიც ძალიან დაგვეხმარება.

## გაკვეთილის მიმოხილვა

- ისწავლით WAI-ARIA-ს დანიშნულებას.
- ისწავლით რა არ შეუცლია ARIA-ს.
- გაიგებთ ხუთ წესს ARIA-ს გამოყენების.
- გაიგებთ სამ ARIA ატრიბუტს, რომელიც აძლევს იარლიყს ელემენტს.
- გაიგებთ რას შვრება `aria-hidden` ატრიბუტი.

## რა არის WAI-ARIA?

WAI-ARIA ნიშნავს: ვებ ხელმისაწვდომობის... ააააა (Web Accessibility Initiative’s Accessible Rich Internet Applications). მისი დანიშნულებაა განსაზღვროს გზა, რომლითაც ვებ კონტენტს გახდის უფრო ხელმისაწვდომს, როდესაც უბრალო HTML-ს ეს არ შეუძლია. ჩათვალეთ ARIA ხელსაწყოთ, რომელიც ავსებს ხელმისაწვდომობის ცარიელ სივრცეებს, რომელიც HTML-მ დატოვა.

მნიშვნელოვანია გავითვალისწინოთ, რომ ARIA-ს შეუძლია მხოლოდ სემანტიკურობის და კონტექსტის შეცვლა ელემენტზე. ARIA-ს არ შეუძლია:
  - შეცვალოს ელემენტის ვიზუალი,
  - შეცვალოს ელემენტის ქცევა,
  - გახადოს ელემენტი ფოკუსირებადი,
  - დაამატოს კლავიატურის ივენთ ჰენდლინგი.

როდესაც ARIA-ს იყენებთ, თქვენ დამატებით ნაბიჯებს დგავთ გამორჩენილი სემანტიკურობის და ფუნქციონალის დამატების განვითარებისკენ საიტზე. გაიხსენეთ "ნავიგაცია კლავიატურით" გაკვეთილი და როგორ დავამატეთ ფუნქციონალი `<div>` "ღილაკს".

## ARIA-ს ხუთი წესი.

ARIA არის ძალიან ძლიერი ხელსაწყო, როდესაც სწორედ ვიყენებთ, მაგრამ თანაბრად საშიშია, როდესაც არასწორად ვიყენებთ. ამის გამო, თქვენ უნდა გაითვალისწინოთ, რომ **ARIA-ს არ ჰქონა, უკეთესია ცუდი ARIA-ს ქონაზე**. WCAG-ს აქვს "ARIA-ს ხუთი წესი", რომელიც გასათვალისწინებელია ARIA-თი სარგებლობის დროს. ჩვენ ყველაფერს არ განვიხილავთ ყველა მოხსენიებულ წესს, მაგრამ შეგიძლიათ თქვენით მოიძიოთ დამატებითი ინფორმაცია, თუ მოგეწონებათ.

1. ყოველთის ამჯობინეთ HTML-ს ელემენტები და ატრიბუტები ARIA-ს, როდესაც საშუალება გექნებათ.
2. არასდროს არ შეცვალოთ არსებული სემანტიკები, თუ სხვა გზა არ გაქვთ.
3. ყველა ინტერაქციული ARIA კონტროლის ხელსაწყო, უნდა იყოს კლავიატურით გამოყენებადი.
4. არასდროს გამოიყენოთ `role="presentation"` ან `aria-hidden="true` ფოკუსირებად ელემენტებზე.
5. ყველა ინტერაქციულ ელემენტს აუცილებლად უნდა ჰქონდეს ხელმისაწვდომი სახელი.

## ხელმისაწვდომობის ხე

სანამ განვიხილავთ ზოგიერთ ARIA ატრიბუტს, მნიშვნელოვანია ვიცოდეთ რას არის ხელმისაწვდომობის ხე, რითაც გაიგებთ რას აკეთებენ სინამდვილეში ეს ატრიბუტები.

ხელმისაწვდომობის ხე დაფუძვნებულია DOM-ზე. DOM ნიშნავს Document Object Model-ს და არის ვებ დოკუმენტის ინტერფეისი. როდესაც გვერდი იტვირთება ბრაუზერში, ბრაუზერი აკეთებს გვერდის სტრუქტურის, ელემენტების და კონტენტის მოდელს. ეს მოდელი გადმოცემულია ხის მსგავს სტრუქტურაში, სადაც თითოეულ ელემენტს (მაგალითად პარაგრაფებს, სათაურებს, სურათებს და ა.შ.) აქვს თავისი ადგილი ამ ხეზე.  დეველოპერები იყენებენ DOM-ს, რათა მოახდინონ სტრუქტურის, კონტენტის და სტილის მანიპულირება დინამიურად, პროგრამული ენის გამოყენებით, მაგალითად ჯავასკრიპტის. მაგალითად, ჯავასკრიპტის გამოყენებით შეგიძლიათ ახალი ელემენტების დამატება გვერდზე, ტექსტის შეცვლა ან გადაკეთება. მარტივად რომ ვთქვათ, DOM არის გვერდის რუქა, რომელსაც დეველოპერი იყენებს რაღაცეების შესაცვლელად.

ARIA ცვლის ამ ხელმისაწვდომობის ხეში არსებულ წევრებს. ამ გაკვეთილში ორს გავივლით:

- **სახელი:** ასევე ცნობილი, როგორც "ხელმისაწვდომი სახელი", არის ის, რასაც დამხმარე ტექნოლოგიები ეუბნებიან მომხმარებლებს და რაც განარჩევს ერთი ტიპის ელემენტებს ერთმანეთისგან. სახელი შესაძლოა დავწეროთ `<label>` ელემენტის ან `alt` ატრიბუტის გამოყენებით.

- **აღწერა:** ამას აცხადებენ დამხმარე ტექნოლოგიები დამატებით, სახელთან ერთად.

## ARIA იარლიყები

ARIA იარლიყი ეხმარება დამხმარე ტექნოლოგიის მომხმარებელს უკეთ გაიგოს კონენტი გვერდზე, რომელიც დამატებით სახელს ან აღწერას გვაწვდის. `<label>` ელემენტისგან განსხვავებით, ARIA იარლიყი არ არის ლიმიტირებული, მხოლოდ რამდენიმე ელემენტთან იმუშაოს.

თქვენ გემახსოვრებათ `id` ატრიბუტის გამოყენებასთან ლეიბლზე. ასევე გემახსოვრებათ, რომ ბევრი `id` ატრიბუტის გამოყენება არ არის სასურველი. არსებობს რამდენიმე ARIA ატრიბუტი, რომელსაც სჭირდება, რომ სხვა ელემენტს ჰქონდეს `id`.

როდესაც იყენებთ მსგავს ARIA ატრიბუტებს, თქვენ აწვდით `id`-ს ერთ ელემენტს და შემდეგ ამ აიდის მნიშვნელობას სხვა ელემენტის ARIA ატრიბუტის მნიშვნელობას. ეს ჯაჭვს ჰქმნის ამ ელემენტებს შორის, მსგავსად, როგორც `<label>` ელემენტისთვისაა `for` ატრიბუტი, რათა დაუკავშირდეს ინფუთის `id`-ს. ARIA-ს სამი იარლიყის ტიპიდან, `aria-labelledby` და  `aria-describedby` არიან ორი ARIA-ს ატრიბუტები, რომელთაც სჭირდებათ სხვა ელემენტის `id`.

### aria-label

`aria-label` ატრიბუტი უცვლის სახელს ხელმისაწვდომობის ხეში არსებულ წევრს. მისი საუკეთესო გამოყენების პრაქტიკაა, როდესაც ელემენტს უკვე არ აქვს label. როდესაც ვამატებთ, `aria-label` ატრიბუტის მნიშვნელობა ხდება ელემენტის ხელმისაწვდომობის სახელი, მაგრამ [`aria-label`-ს არ აქვს ეფექტი ზოგიერთ HTML ელემენტზე](https://github.com/w3c/aria/issues/756), როგორიცაა `<div>` და `<span>`.

ამ ატრიბუტის ხშირი გამოყენება "დახურვის" ღილაკებზე ან მოდალებზე ხდება:

```html
<button type='button' aria-label='Close menu'>X</button>
```

`aria-label` რომ არ ჰქონდეს, ეკრანის წამკითხველი გამოაცხადებდა: "X, button", რაც შესაძლოა გასაგები ყოფილიყო, მაგრამ ბოლოდმე გასაგები ვერა, ამიტომ "Close menu, button" უფრო გასაგებია. კიდევ ერთი გამოყენება არის სემანტიკურ ელემენტებზე:

```html
<nav aria-label='main navigation'>...</nav>
```

როდესაც ეკრანის წამკითხველი აპლიკაცია მივა ამ ელემენტთან, გამოაცხადებს: "Main navigation, navigation landmark". თუ თქვენ რამდენიმე ნავიგაცია გაქვთ, თქვენ შეგიძლიათ სხვადასხვა მნიშვნელობა მისცეთ `aria-label`-ს, რათა მომხმარებელმა ერთმანეთისგან განასხვაოს.

არ გამოიყენოთ `aria-label`, რომ შეცვალოთ სიტყვები არასწორი სიტყვებით. ზოგიერთი სიტყვა, ეკრანის წამკითხველმა აპლიკაციამ, შესაძლოა არასწორად გამოაცხადოს, ამიტომ არ წაგძლიოთ და არ სცადოთ ამის გამოსწორება, რადგან სხვა სახის დამხმარე ტექნოლოგიები ვერ გაიგებენ სწორად.

### aria-labelledby

`aria-labelledby` არის ატრიბუტი, რომელიც უფრო პრიორიტეტულია `aria-label`-ზე და ორივეს არსებობის შემთხვევაში, გადააწერს ზევიდან. `aria-labelledby` ცვლის ელემენტის ხელმისაწვდომობის სახელს.

`aria-labelledby`-ის მაგალითია:

```html
<!-- ეს არის იარლიყიანი ელემენტი -->
<h2 id='label'>Shirts</h2>

<!-- ეს არის დაიარლიყებული ელემენტი. დააკვირდით რა თანმიმდევრობითაა გადაცემული ID-ები -->
<button type='button' id='shop-btn' aria-labelledby='label shop-btn'>Shop Now</button>
```

ზედა HTML ასე იქნება გამოცხადებული: "Shirts, shop now, button". ეს გვერდზე არსებულ სხვა "shop now" ღილაკებისგან გამოარჩევს და გვაწვდის დამატებით კონტექსტს, რაც გვერდს უფრო გასაგებს ხდის.

### aria-describedby

`aria-describedby` ატრიბუტი ცვლის აღწერას ხელმისაწვდომობის ხეში არსებული წევრის. მსგავსია `aria-labelledby` ატრიბუტის, როდესაც იყენებთ ამ ატრიბუტს, მიაწვდით  სხვა ელემენტის `id` მნიშვნელობას `aria-describedby`-ს და ელემენტს, რომლის `id` მნიშვნელობაც მივაწოდეთ.

```html
<label>Password:
  <input type='password' aria-describedby='password-requirements' />
</label>

<!-- აზრიანი ტექსტი + ARIA! -->
<span id='password-requirements'>Password must be at least 10 characters long.</span>
```

როდესაც `<input>` ელემენტი ფოკუსირდება, ეკრანის წამკითხველი გამოაცხადებს: "Password, edit protected, password must be at least ten characters long." ეს ეგრევე ატყობინებს ერანის წამკითხველს, თუ რა მოთხონაა პაროლისთვის.

## კონტენტის დამალვა ხელმისაწვდომობის ხიდან

მსგავსად, როგორც შეგიძლიათ ელემენტების დამალვა `hidden` HTML ატრიბუტით, ან `display` და `visibility` სტილებით, თქვენ შეგიძლიათ `area-hidden` ატრიბუტის გამოყენება ელემენტების დასამალად, მაგალითად დეკორატიული სურათების და აიქონების, ხელმისაწვდომობის ხეში. განსხვავება `aria-hidden`-ში არის, რომ ელემენტის დანახვა მხედველობის მქონე მომხმარებლებს შეეძლებათ. ეს გამოსადეგარი იქნება, როდესაც გვსურს აიქონების ელემენტში დამატება. მაგალითად, თუ ჩავსვავთ Material Icons-ს ღილაკში:

```html
<!-- Example 1 -->
<button type='button'>
  <span class='material-icons'>add</span>
  Add Book
</button>

<!-- Example 2 -->
<button type='button'>
  <span class='material-icons' aria-hidden='true'>add</span>
  Add Book
</button>
```

ორივე მაგალითი გამოიყურება ვიზუალურად ერთნაირად, პირველი მაგალითს ეკრანის წამკითხველი გამოაცხადებს ასე: "Add add book, button". ხოლო მეორე მაგალითი მალავს `<span>`-ს ხელმისაწვდომობის ხისგან და მისი კონტენტი არ ემატება ღილაკის სახელს. ეკრანის წამკითხველი მეორე მაგალითს გამოაცხადებს ასე: "Add book, button."

ფრთხილად იყავით, როდესაც ამ ატრიბუტს იყენებთ. როდესაც ელემენტს ანიჭებთ `aria-hidden="true"`, ყველა ამ ელემენტის შვილი ასევე დამალული იქნება ხელმისაწვდომობის ხისგან. `aria-hidden="false"`-ს დროს შვილ ელემენტზე არ ექნება არანაირი ეფექტი, თო მის მშობელს აქვს `aria-hidden="true"`.

თქვენ ასევე ფრთხილად უნდა იყოთ, როდესაც ელემენტს ადებთ `aria-hidden="true"`-ს, თუ ის ფოკუსირებადია. ამის გაკეთებით ელემენტს აღარ გამოაცხადებს ეკრანის წამკითხველი, ფოკუსის დროს, რაც დააბნევს ბევრ მომხმარებელს.

## დამატებითი რესურსები

- [სიღრმისეული გაიდი ARIA-ს როლებზე](https://www.a11yproject.com/posts/2020-08-20-an-indepth-guide-to-aria-roles/#landmark-roles).
- [ARIA რეგიონები](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) არის ARIA-ს ატრიბუტი, რომელიც ძალიან გამოსადეგარია დინამიურ განახლებებთან.
- [30 წუთიანი ვიდეო](https://www.youtube.com/watch?v=qdB8SRhqvFc), რომელიც ამ ლექციაში განვლილ კონცეპტებს განიხილავს.
- [ხელმისაწვდომობის ფუნდამენტალები ](https://www.youtube.com/watch?v=z8xUCzToff8&list=PLOKfJQCx03akpT6vQQCd6o3_iWWVDIjLK&index=6) კიდევ ერთი 30 წუთიანი ვიდეოა, რომელიც ასევე ამ ლექციებში განვლილ მასალას ფარავს.