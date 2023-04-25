//1-  Toplama çıxma, toplama, vurma, bölməyə uyğun funksiya yaradirsiz 2 eded ve 1 operator('+','-','*','/') qebul edir. Qebul etdiyi operatora uygun a və b ədədləri üzərində hesablama aparib alinan deyeri qaytarır.
// function func(functi,a,b) {
//     switch (functi)
//     {
//         case "+":
//             return addition(a,b);
//             break;
//             case "-":
//                 return subtraction(a,b);
//                 break;
//                 case "*":
//                     return multiplication(a,b);
//             break;
//             case "/":
//                 return division(a,b);
//             break;

//         default:
//            console.log("duzgun daxil edin");
//             break;
//          }
// }

//2-  Methodlar yaradirsiz. Methoda ad gonderende adi ekrana cixardir(Sabir), ad ve soyad gonderende soyadi adi ekrana cixardir(Guliyev Sabir), ad,soyad ve ata adı göndərildikdə adin baş hərfi nöqtə soyad ata adi ekrana cixardirsiz(S.Guliyev Mehti). Methodlarin adi eyni olmalıdır.
function formatName(ad, soyad, patronymic) {
    if (patronymic === undefined) {     //burani da sadece biz goruruk
        if (soyad === undefined) {      //soyad hissesini sadece biz goruruk
            return ad                   //adi geri verecek
        }
    }
    if (patronymic === undefined) {     
        if (soyad === undefined) {     
            return soyad      
        }
    }
}

console.log(formatName("text daxil edin"));   





//3-  1 eded daxil edin. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini ekrana cixardan bir alqoritm yazin.
// function kicikEded(num) {
//     let count = 0;               //bolunen ededlerin sayini ekrana cixartmaq ucun bir deyisen yaratmaq lazimdir
//     if (num < 50) {
//         for (let i = 1; i < num; i++) {
//             if (i % 3 === 0) {
//                 count++;
//             }
//         }
//     }
//     elif(num > 50 && num < 100){             //else if
//         for (let i = 1; i < num; i++) {
//             if (i % 5 === 0) {
//                 count++;
//             }
//         }
//     }
//     else {                      //burada numberin 100 den boyuk olub olmadigini yoxlamaga ehtiyac yoxdur cunki diger hallarda alinmayibsa bu sert odeyecek
//         for (i = 1; i < num; i++) {
//             if (i % 8 === 0) {
//                 count++;
//             }
//         }
//     }
//     return count              //burda mene sayi qaytarmasini istediyim ucun count verdim
// }
// alert(kicikEded(Number(prompt("Eded daxil edin: "))));
