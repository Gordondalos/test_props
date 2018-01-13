Задание
Используя	angular-cli (1.6.0), rxjs (5.5.5), bootstrap(4.0.0-beta.2) или	angular-material (5.0.1),	
необходимо	сделать	сервис	и	модуль с	описанным	ниже	функционалом.
Всё	пишется	на	typescript,	обязательно	используется	описание	типов,	без	крайней	
необходимости	не	использовать	тип	'any'.
Сервис
1. Загрузка	данных	с	бэйкэнд	(положить	файлики	json	в	assets).
Если	не	доступен back-end,	необходимо	делать retry по	следующим	условиям:
a. Первый	retry через	2	секунды
b. Каждый	последующий	retry увеличивает	интервал ожидания	в	два	раза
c. Не	более	10	retry
d. Если	с	back-end приходит	код	ошибки	HTTP	400-499,	то	прекращать	retry с	
ошибкой
e. Retry используется	для	всех	запросов	получения	и	отправки	данных	на	
сервер
2. Отправка	данных	на	back-end (mock /	симуляция)
Модуль
Сделать	интерфейс,	в	котором	можно	визуально	распределить	пропорции	процентов	
между	свойствами	соблюдая	следующие	условия:
1. С	сервера	загружается	массив	объектов.	Каждый	объект	представляет	из	себя	
описание	некоего	свойства.
2. С	сервера	может	приходить	массив	свойств	в	количестве	от	одного	до	
бесконечности. Для	данного	задания	выбираем	1,2,5,7,10	свойств.
3. Сумма	всех	свойств	должна	быть	всегда	100%,	исключением	является	вариант,
когда	с	сервера	приходит	массив	из	одного	элемента,	тогда	возможно	указать	от	0	
до	100% (Данные	с сервера	могут	приходить	с	не	верным	суммарным	количеством	
процентов,	либо	равным	нулю у	всех	свойств,	перед	отображением,	необходимо	
всё	исправлять)
4. Отображать	свойства	необходимо	одновременно	как	в	количественном,	так	и	
процентном	виде
5. Редактирование	соотношений	возможно,	как	с	использованием	слайдера,	так	и	
путём	ввода	процентов	или	количества
6. При	использовании	слайдера,	пересчёт	процентов	должен	выполнятся	в	процессе	
изменения	данных,	а	не	только	в	конце,	при	отпускании	мышки
7. Все	проценты	всегда	округляются	до	двух	знаков	после	запятой
8. Каждому	свойству	можно	включить	«замок»,	при	включенном	«замке»,	количество	
процентов	данного	свойства	не	меняется при	изменении	соотношения	других	
свойств
9. При	увеличении	количества	процентов	у	какого-либо свойства,	проценты	
вычитаются	у	свойства	с	наибольшим	количеством	процентов,	если	проценты	
равны,	то	у	первого	в	списке
10. При	уменьшении	количества	процентов	у	какого-либо	свойства,	проценты	
добавляются	к	свойству	с	наименьшим	количеством	процентов,	если	проценты	
равны,	то	к	первому	в	списке
11. Поля	ввода	количества	и	процентов	должны	принимать	только	числа.	Для	
количественных	данных	только	целые	числа,	для	процентов,	числа	с	точностью	два	
знака	после	запятой
12. Количественные	данные	всегда	целое	число, например, если	с	сервера	приходит	
массив	из	двух	свойств,	сумма	которых	по	количеству	2,	то	можно	выбрать	у	
каждого	свойства	0%,	50%,	100%
13. В	третьей	части	страницы	необходимо	отобразить	текущее	распределение	
элементов	по	свойствам
Как	должен	работать	результат	выполнения	тестового	задания	показан	на	видео:
https://youtu.be/WQRFvd_khwg
Описание	структур	данных:
Естественно, ни	в	консоли,	и	ни	при	сборке	проекта, не	должно	вылетать	ошибок	или	
warnings (кроме	сделанных	намеренно,	нужно	будет	пояснить зачем).
Если	останется	время,	сделайте	unit тесты.
