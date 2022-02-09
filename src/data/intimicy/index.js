import intSunduk from '../../img/intimacy/sunduk.png';
import intMeshok from '../../img/intimacy/meshok.png';
import bracelet1 from '../../img/intimacy/bracelet1.png';
import bracelet2 from '../../img/intimacy/bracelet1.png';
import intCase from '../../img/intimacy/case.png';
import necklace1 from '../../img/intimacy/necklace1.jpg';
import necklace2 from '../../img/intimacy/necklace2.jpg';
import necklace3 from '../../img/intimacy/necklace3.jpg';
import intAromaCase from '../../img/intimacy/aromat-case2.jpg';
import intAromaCase2 from '../../img/intimacy/aromat-case.jpg';
import intBuket from '../../img/intimacy/aromat1.jpg';
import intBuket2 from '../../img/intimacy/aromat2.jpg';
import intRing from '../../img/intimacy/ring1.png';
import intRing2 from '../../img/intimacy/ring2.png';
import udacha from '../../img/intimacy/udacha.png';
import udachaBadge from '../../img/intimacy/udacha-badge.png';

const DATA_INTIMICY_INPUTS = {
    "rus": [
        {text: "Шкатулка с Кольцами", img: intSunduk, id:'intSunduk'},
        {text: "Ларец с Кольцами", img: intMeshok, id:'intMeshok'},
        {text: "Агатовый браслет", img: bracelet1, id:'bracelet1'},
        {text: "Изумрудный браслет", img: bracelet2, id:'bracelet2'},
        {text: "Hабор браслетов", img: intCase, id:'intCase'},
        {text: "Ожерелье Из Лазурита", img: necklace1, id:'necklace1'},
        {text: "Ожерелье Из Сердолика", img: necklace2, id:'necklace2'},
        {text: "Ожерелье С Черным Бриллиантом", img: necklace3, id:'necklace3'},
        {text: "Сундук С Cеребряным Oжерельем", img: intAromaCase, id:'intAromaCase'},
        {text: "Сундук С золотым Ожерельем", img: intAromaCase2, id:'intAromaCase2'},
        {text: "Романтический букет", img: intBuket, id:'intBuket'},
        {text: "Страстный букет", img: intBuket2, id:'intBuket2'},
        {text: "Агатовое Кольцо", img: intRing, id:'intRing'},
        {text: "Изумрудное Кольцо", img: intRing2, id:'intRing2'},
        {text: "Прогулки удача", img: udacha, id:'udacha'},
        {text: "Амулет Удачи", img: udachaBadge, id:'udachaBadge'},
    ],

    "eng": [
        {text: "Intimacy Chest", img: intSunduk, id:'intSunduk'},
        {text: "Intimacy Pack", img: intMeshok, id:'intMeshok'},
        {text: "Agate Bracelet", img: bracelet1, id:'bracelet1'},
        {text: "Emerald Bracelet", img: bracelet2, id:'bracelet2'},
        {text: "Bracelet Chest", img: intCase, id:'intCase'},
        {text: "Lazurite Necklace", img: necklace1, id:'necklace1'},
        {text: "Carnelian Necklace", img: necklace2, id:'necklace2'},
        {text: "Black Diamond Necklace", img: necklace3, id:'necklace3'},
        {text: "Silver Necklace Chest", img: intAromaCase, id:'intAromaCase'},
        {text: "Golden Necklace Chest", img: intAromaCase2, id:'intAromaCase2'},
        {text: "Romantic Bouquet", img: intBuket, id:'intBuket'},
        {text: "Passionate Bouquet", img: intBuket2, id:'intBuket2'},
        {text: "Agate Ring", img: intRing, id:'intRing'},
        {text: "Emerald Ring", img: intRing2, id:'intRing2'},
        {text: "Fortune", img: udacha, id:'udacha'},
        {text: "Amulet", img: udachaBadge, id:'udachaBadge'},
    ],

    "tur": [
        {text: "Samimiyet Sandığı", img: intSunduk, id:'intSunduk'},
        {text: "Samimiyet Paketi", img: intMeshok, id:'intMeshok'},
        {text: "Akik Bilezik", img: bracelet1, id:'bracelet1'},
        {text: "Zümrüt Bilezik", img: bracelet2, id:'bracelet2'},
        {text: "Bilezik Sandığı", img: intCase, id:'intCase'},
        {text: "Lacivert Taşlı Kolye", img: necklace1, id:'necklace1'},
        {text: "Karnelyan Taşlı Kolye", img: necklace2, id:'necklace2'},
        {text: "Siyah Elmaslı Kolye", img: necklace3, id:'necklace3'},
        {text: "Gümüş Kolye Sandığı", img: intAromaCase, id:'intAromaCase'},
        {text: "Altın Kolye Sandığı", img: intAromaCase2, id:'intAromaCase2'},
        {text: "Romatik Buket", img: intBuket, id:'intBuket'},
        {text: "Tutkulu Buket", img: intBuket2, id:'intBuket2'},
        {text: "Akik Yüzük", img: intRing, id:'intRing'},
        {text: "Zümrüt Yüzük", img: intRing2, id:'intRing2'},
        {text: "Kısmet", img: udacha, id:'udacha'},
        {text: "Nazar Boncuğu", img: udachaBadge, id:'udachaBadge'},
    ],
}

const DATA_INTIMICY_TITLE = {
    "rus": {title: 'Расчет Близости', subtitle: 'Межсерверный рейтинг близости (О Мелли)'},
    "eng": {title: 'Intimacy Calculation', subtitle: 'Interserver Intimacy Rating (O Melly)'},
    "tur": {title: 'Yakınlık Hesaplama', subtitle: 'Sunucular Arası Yakınlık Derecesi (Oh ​​Melly)'},
}

const DATA_INTIMICY_UI = {
    "rus": {inputText: 'Прирост близости (усредненный)', resultButton: 'Получить результат'},
    "eng": {inputText: 'Intimacy Growth (Average)', resultButton: 'Get Result'},
    "tur": {inputText: 'Yakınlık kazancı (ortalama)', resultButton: 'Sonuç al'},
}

const DATA_INTIMICY_TEXT = [
    {
        "rus": {text: "Скоро здесь появится описание..."},
        "eng": {text: "Description coming soon..."},
        "tur": {text: "Açıklama yakında..."}
    },
]



export const DATA_INTIMICY = {
    text: DATA_INTIMICY_TEXT,
    title: DATA_INTIMICY_TITLE,
    inputs: DATA_INTIMICY_INPUTS,
    ui: DATA_INTIMICY_UI,
}