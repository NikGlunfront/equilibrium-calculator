import expBooks from '../../img/talents/exp-books.jpg';
import expToms from '../../img/talents/exp-toms.jpg';
import bigCase from '../../img/talents/case.jpg';
import atkBadge from '../../img/talents/atk-badge.jpg';
import naukaBadge from '../../img/talents/nauka-badge.jpg';
import heartBadge from '../../img/talents/heart-badge.jpg';
import expCase from '../../img/talents/exp-case.jpg';
import politikaBadge from '../../img/talents/politika-badge.jpg';
import sixBadge from '../../img/talents/six-badge.jpg';

const DATA_TALENTS_INPUTS = {
    "rus": [
        {text: "Альманах Знаний", img: expBooks},
        {text: "Приказ Изучения", img: expToms},
        {text: "Случ. приказ-изучения", img: expCase},
        {text: "Шкатулка Сфер", img: bigCase},
        {text: "Жетон Тактики", img: atkBadge},
        {text: "Жетон Науки", img: naukaBadge},
        {text: "Жетон Культуры", img: heartBadge},
        {text: "Жетон Политики", img: politikaBadge},
        {text: "Жетон Могущества", img: sixBadge},
    ],

    "eng": [
        {text: "Book XP Pack", img: expBooks},
        {text: "Book Xp Chest", img: expToms},
        {text: "Book Xp Booster", img: expCase},
        {text: "Orb Box", img: bigCase},
        {text: "Military Badge", img: atkBadge},
        {text: "Research Badge", img: naukaBadge},
        {text: "Prestige Badge", img: heartBadge},
        {text: "Politics Badge", img: politikaBadge},
        {text: "Almighty Badge", img: sixBadge},
    ],

    "tur": [
        {text: "Kitap Tecrübesi", img: expBooks},
        {text: "Kitap Tecrübe Sandığı", img: expToms},
        {text: "Kitap Tecrübe Takviyesi", img: expCase},
        {text: "Küre Kutusu", img: bigCase},
        {text: "Güç Payesi", img: atkBadge},
        {text: "İtibar Payesi", img: naukaBadge},
        {text: "Bilgi Payesi", img: heartBadge},
        {text: "Politika Payesi", img: politikaBadge},
        {text: "Süper Paye", img: sixBadge},
    ],
}

const DATA_TALENTS_TITLE = {
    "rus": {title: 'Расчет Талантов', subtitle: 'Межсерверный рейтинг талантов (Богдан)'},
    "eng": {title: 'Calculation of Talents', subtitle: 'Cross-Server Talent Rating (Bogdan)'},
    "tur": {title: 'Yeteneklerin Hesaplanması', subtitle: 'Sunucular Arası Yetenek Derecelendirmesi (Bogdan)'},
}

const DATA_TALENTS_TEXT = [
    {
        "rus": {text: "Расчет жетонов могущества производится с учетом улучшения навыков исключительно с шестью звездами."},
        "eng": {text: "The calculation of power tokens is made taking into account the improvement of skills with six stars only."},
        "tur": {text: "Güç belirteçlerinin hesaplanması, yalnızca altı yıldızla becerilerin geliştirilmesi dikkate alınarak yapılır."}
    },
    {
        "rus": {text: "Расчетное количество талантов может отличаться от Среднего и Максимального количества в меньшую сторону."},
        "eng": {text: "The estimated number of talents may differ from the Average and Maximum number to a smaller side."},
        "tur": {text: "Hesaplanan yetenek sayısı, Ortalama ve Maksimum sayıdan daha küçük bir tarafa farklılık gösterebilir."}
    },
    {
        "rus": {text: "Результатом вычислений являются три показателя: Минимальное количество, Среднее количество, Максимальное количество."},
        "eng": {text: "The result of the calculations are three indicators: Minimum number, Average number, Maximum number."},
        "tur": {text: "Hesaplamaların sonucu üç göstergedir: Minimum sayı, Ortalama sayı, Maksimum sayı."}
    },
    {
        "rus": {text: "Минимальное количество - число, показывающее минимально возможное количество, которое прибавится к показателю по итогу."},
        "eng": {text: "Minimum quantity - a number indicating the minimum possible quantity that will be added to the total indicator."},
        "tur": {text: "Minimum miktar - toplam göstergeye eklenecek olası minimum miktarı gösteren bir sayı."}
    },
    {
        "rus": {text: "Среднее количество - число, показывающее среднее возможное количество, которое прибавится к показателю по итогу."},
        "eng": {text: "Average number - a number showing the average possible amount that will be added to the total indicator."},
        "tur": {text: "Ortalama sayı - toplam göstergeye eklenecek olası ortalama tutarı gösteren bir sayı."}
    },
    {
        "rus": {text: "Максимальное количество - число, показывающее максимальное возможное количество, которое прибавится к показателю по итогу."},
        "eng": {text: "Maximum Quantity - A number indicating the maximum possible amount that will be added to the total."},
        "tur": {text: "Maksimum Miktar - Toplama eklenecek olası maksimum tutarı gösteren bir sayı."}
    },
]



export const DATA_TALENTS = {
    text: DATA_TALENTS_TEXT,
    title: DATA_TALENTS_TITLE,
    inputs: DATA_TALENTS_INPUTS,
}
