# ვებ კონტენტის ხელმისაწვდომობის გაიდლაინი (WCAG)

## შესავალი

წინა გაკვეთილში, უკეთ გაიგებდით, რამდენად მნიშვნელოვანია ხელმისაწვდომობა ვებში ზოგიერთი მომხმარებლისთვის და რამდენად სასარგებლოა ყველა მომხმარებლისთვის. ამის ცოდნის შემდეგ უნდა ვისწავლოთ, როგორ გავითვალისწინოთ a11y დეველომპენტისას. ბევრი მასალა არსებობს რა და როგორ უნდა გაკეთდეს, ამ მასალებს კი ჩვენ მოგაწვდით.

კიდევ ერთი რესურსი არის ვებ კონტენტის ხელმისაწვდომობის გაიდლაინი, ანუნ Web Content Accessibility Guidelines (WCAG). ამ გაკვეთილში გავიგებთ და საბაზისო დონეზე გვეცოდინება ეს გაიდლაინები.

## გაკვეთილის მიმოხილვა

- რა არის ვებ კონტენტის ხელმისაწვდომობის გაიდლაინის მიზანი.
- ისწავლით WCAG-ის ოთხ პრინციპს.

## ვებ კონტენტის ხელმისაწვდომობის გაიდლაინი (WCAG)

WCAG არის სტანდარტი, როდესაც საქმე ვების ხელმისაწვდომობას ეხება. წარმოიდგინეთ ხელმისაწვდომობა არის დანიშნულების ადგილი, ხოლო WCAG არის ხელსაწყო, რომელიც ამასთან გვაახლოვებს.

## ოთხი პრინციპი

WCAG დგას ოთხ მთავარ პრინციპზე (POUR), რომელიც გასათვალისწინებელია ხელმისაწვდომობისთვის:
1. **აღქმადი(Perceivable):** მომხმარებლებს აუცილებლად უნდა შეეძლოთ ინფორმაციის აღქმა. მაგალითად, ღია ფერის ტექსტი ღია ფერის ფონზე ძნელად აღსაქმელია.
2. **ქმედუნარიანი(Operable):** მომხმარებლებმა აუცილებლად უნდა შეძლონ ოპერირება ნებისმიერ მომხმარებლის ინტერფეისზე ან ნავიგაციაზე. ინტერფეისს არ უნდა სჭირდებოდეს ისეთი ინტერაქცია, რომლის შესრულებაც მომხმარებლებს არ შეუძლიათ. ნავიგაცია, რომელსაც ჩამოსაშლელი მენიუ აქვს *მხოლოდ* მაუსის კურსორის მიტანაზე, შეუძლებელია კლავიატურით შევძლოთ მათზე ფოკუსირება (TAB ღილაკის დაჭერით შეგიძლიათ სცადოთ ეს როგორ ხდება).
3. **გასაგები(Understandable):** მომხმარებლებს აუცილებლად უნდა შეეძლოთ ყველა ინფორმაციის ან მომხმარებლის ინტერფეისის გაგება, რაც წარმოდგენილია საიტზე. მაგალითად, თუ მომხმარებელი ცდილობს ფორმის გაგზავნას და მოუვიდა შეტყობინება "Error 113:Bad data", ისინი ვერ გაიგებენ რას ნიშნავს ეს შეცდომა და როგორ გამოასწორონ მიზეზი, რამაც შეცდომა გამოიწვია.
4. **გამძლე/ძლიერი(Robust):** კონტენტი უნდა იყოს ხელმისაწვდომი დამხმარე ტექნოლოგიებისთვის და ხელმისაწვდომობა უნდა შენარჩუნდეს ამ ტექნოლოგიების განვითარებასთან ერთად.

### შეთანხმება

## ხელმისაწვდომობის რეალიზება

მომდევნო გაკვეთილებში უფრო ღრმად გავიგებთ, როგორ გავაუმჯობესოთ ჩვენი საიტების ხელმისაწვდომობა, მაგრამ არ არის ახსნილი ხელმისაწვდომობის ყველა ასპექტი. ამ გაკვეთილების მიზანია ისწავლოთ გასათვალისწინებელი კონცეპტები.

მიუხედავათ იმისა, რომ ჩვენ მხოლოდ a11y კონცეპტებს განვიხილავთ, ალბათ გგონიათ, რომ თქვენი საიტი საკმარისად ხელმისაწვდომი არ იქნება, მაგრამ არ იდარდოთ, **არცერთი საიტი არ არის 100%-ით ხელმისაწვდომი**, ამიტომ ამაში წარმოუდგენელი მიზნები არ დაისახოთ. ზოგჯერ თავად საიტის კონცეპტს არ სჭირდება ხელმისაწვდომა რაღაც ადგილებში.

მეორე რამ, რაც გასათვალისწინებელია, არის, რომ პატარა ნაბიჯებიც ხელმისაწვდომობისკენ ძალიან კარგია, რადგან ბევრისთვის საქმე გაამარტივეთ ისე, რომ ვერც მიხვდით. ამიტომ არ სცადოთ ბოლომდე იდეალურად გქონდეთ ეს, განსაკუთრებით მაშინ, როცა დამწყებები ხართ.

## დავალება

<div className="homework">

1. წაიკითხეთ [WCAG მიმოხილვის გვერდი](https://www.w3.org/WAI/standards-guidelines/wcag/).
2. გადახედეთ [WCAG-ის გასათვალისწინებელ სიას](https://webaim.org/standards/wcag/checklist). ამის წაკითხვით ზოგადი წარმოდგენა გექნებათ რა არის გასათვალისწინებელი საიტის აწყობისას.

</div>