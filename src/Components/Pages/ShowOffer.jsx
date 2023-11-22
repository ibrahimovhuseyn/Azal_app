import React from 'react'
import { render } from 'react-dom';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'

function ShowOffer() {
    const { id } = useParams()
    const { offers } = useSelector(store => store.aboutSlice)
    const renderOffer = offers.find(item => item.id == id)

    const renderBody = () => {
        if (id == 1) {
            return (
                <div className='my'>
                    <p>
                        Bu gündən etibarən AZAL reysləri ilə uçuş həyata keçirən bütün sərnişinlər Kinderland giriş biletinə 25% endirim əldə edəcəklər.
                    </p>
                    <p>
                        Şərtlər aşağıdakı kimidir:
                    </p>
                    <ul>
                        <li className='d-flex align-items-center'>
                            <div className='bg-blue'></div>
                            <p>
                                Endirimdən yararlanmaq üçün ziyarətçilər AZAL uçuş minik talonunu kassirə təqdim etməlidirlər;
                            </p>
                        </li>
                        <li className='d-flex align-items-center'>
                            <div className='bg-blue'></div>
                            <p>
                                Minik Talonunu təqdim edən ziyarətçinin adı və soyadı ilə, biletdəki sərnişinin adı və soyadı ilə üst-üstə düşməlidir;
                            </p>
                        </li>
                        <li className='d-flex align-items-center'>
                            <div className='bg-blue'></div>
                            <p>
                                Endirim 2021-ci ilin dekabr ayından etibarən uçuş həyata keçirən bütün sərnişinlərə şamil edilir;
                            </p>
                        </li>
                        <li className='d-flex align-items-center'>
                            <div className='bg-blue'></div>
                            <p>
                                Endirimin yenidən istifadə edilməməsi üçün minik talonu ziyarətçidən götürülür.
                            </p>
                        </li>
                    </ul>
                    <p>
                        “Dəniz Mall”-un 5-ci mərtəbəsində yerləşən və ümumi sahəsi 5 000 m² olan “Kinderland” Azərbaycanın ilk təhsilyönümlü uşaq əyləncə mərkəzidir. Kinderland küçələri, mağazaları, bankı, xəstəxanası və hava limanı ilə sanki Bakının kiçik modelini xatırladır. Bu şəhərciyin hətta xüsusi valyutası da var – “KİNDİ”. Burada uşaqlar müxtəlif peşə sahibi rollarında çıxış edərək həm əylənir, həm də bu fəaliyyət sahələri barədə maraqlı məlumatlar əldə edirlər. “Airbus A319” təyyarəsinin 16 metrlik gövdəsindən hazırlanan instalyasiya və peşəkar uçuş simulyatoru isə xüsusi marağa səbəb olan guşələrdəndir. Şəhərcikdəki 60-dan çox peşə fəaliyyət növü 4-14 yaş arası uşaqlar üçün nəzərdə tutulub, 4 yaşa qədər körpələr üçün həmçinin, xüsusi oyun meydançası mövcuddur.
                    </p>
                </div>
            )
        }
        if (id == 2) {
            return (
                <div className='my'>
                    <p>
                        RentalCars.com, demək olar ki, dünyanın istənilən nöqtəsində avtomobil icarəyə götürməyə imkan verən müasir xidmətdir.
                    </p>
                    <p>
                        Xidmət səyahətiniz zamanı gözəl vaxt keçirməyə imkan verəcək, çünki onun əsas məqsədi dünyanın 160-dan çox ölkəsində səyahətinizi rahat etməkdir! Siz ictimai nəqliyyat cədvəlindən asılı olmayacaqsınız və marşrutunuzu dəyişə biləcəksiniz.
                    </p>
                    <p>
                        60.000-dən çox icarə nöqtəsi və avtomobilin rahat kirayə şərtləri, rahatlıq və etibarlılıq - bu xüsusiyyətlər RentalCars.com xidmətini mükəmməl şəkildə təsvir edir.
                    </p>
                    <div>
                        Xidmətdən istifadə etmək çox sadədir, burada hər kəs cəlbedici qiymətə uyğun avtomobili tapacaqdır.
                    </div>
                    <div>
                        Partnyor linkindən keçərək bu servisdə avtomobil bron edib, siz əlavə olaraq hər 10 dollar üçün üç AzalClub mili qazana bilərsiniz.
                    </div>
                    <div>
                        AzalClub bonus proqramı haqqında daha ətraflı məlumatı azalclub.az saytından əldə edə bilərsiniz.
                    </div>
                </div>
            )
        }
        if (id == 3) {
            return (
                <div className='my'>
                    <p>
                        Məşhur Booking.com xidməti vasitəsilə səyahətiniz üçün sərfəli bir hotel və ya mənzil bron edin.
                    </p>
                    <p>
                        Booking.com bütün dünyada hotellərin, mənzillərin, evlərin müstəqil şəkildə bron edilməsi üçün saytdır. Xidmət 43 dildə mövcuddur və dünyanın demək olar ki, bütün ölkələrində 28 milyondan çox yerləşdirmə variantları təklif edir.
                    </p>
                    <p>
                        Xidmətdən istifadə etmək asandır, hər kəsə ən yaxşı yaşayış variantları təqdim edir. Onun üstünlükləri arasında rezervasiyaların pulsuz ləğvi imkanı, "Genius" loyallıq proqramı, həmçinin qonaqların rəyləri əsasında ən dürüst hotel qiymətləndirilmə sistemi daxildir.
                    </p>
                    <p>
                        Partnyor linkindən keçərək hotel bron edib, siz əlavə olaraq hər 10 dollar üçün üç AzalClub mili qazana bilərsiniz.
                    </p>
                    <p>
                        AzalClub bonus proqramı haqqında daha ətraflı məlumatı azalclub.az saytından əldə edə bilərsiniz.
                    </p>
                </div>
            )
        }
        if (id == 4) {
            return (
                <div className='my'>
                    <p>
                        Azərbaycanın milli aviadaşıyıcısı - AZAL yeni “Azal Club” loyallıq proqramının tətbiqi barədə elan edir.
                    </p>
                    <p>
                        “Azal Club” - pərakəndə satış mağazaları şəbəkəsində alış-veriş zamanı, həmçinin müxtəlif növ xidmət mərkəzlərində bonus millərini toplamağa imkan verən pulsuz virtual loyallıq kartıdır.
                    </p>
                    <p>
                        Tərəfdaşlar şəbəkəsinə həmçinin məşhur restoranlar, mehmanxanalar, geyim, aksessuar və ətriyyat mağazaları, əyləncə mərkəzləri, “Booking.com”, “Rentalcars.com” və s. kimi müxtəlif onlayn saytlardan təkliflər daxildir. Perspektivdə “Azal Club” tərəfdaşlıq şəbəkəsinin coğrafiyasını genişləndirəcək, buraya “Azərbaycan Hava Yolları”nın müntəzəm reyslər yerinə yetirdiyi şəhər və ölkələrdəki müxtəlif tərəfdaşlar cəlb ediləcək.
                    </p>
                    <p>
                        Yeni loyallıq proqramı çərçivəsində toplanan milləri Azərbaycan aviadaşıyıcılarının – AZAL və Buta Airways aviaşirkətlərinin biletlərinə dəyişmək mümkün olacaq.
                    </p>
                    <p>
                        Bonus millərini aviabiletə dəyişərkən komissiya tutulmayacaq, həmçinin vergi, yığım tətbiq olunmayacaq və bilet alışı zamanı yerlərlə məhdudlaşmayacaq. Həmçinin, “Azal Club” istifadəçiləri qazandıqları bonus millərini tətbiqdə birbaşa AZAL-Miles iştirakçısının hesabına köçürə və ya bonus millərini müxtəlif mal və xidmətlərə dəyişə biləcəklər.
                    </p>
                    <p>
                        Proqramın tərəfdaş şəbəkəsinə qoşulmaq arzusunda olanları dəvət edirik. “Azal Club” tərəfdaş brendinin davamlı marketinq dəstəyini və irəliləyişini təmin edəcək. Qeyd etmək lazımdır ki, AZAL-Miles proqramının 200 mindən çox istifadəçisi artıq potensial müştəri bazasının bir hissəsidir. Tərəfdaş şəbəkəsinə qoşulmaq üçün partner@azalclub.az elektron poçtuna ərizə göndərmək lazımdır.
                    </p>
                </div>
            )
        }
    }
    return (
        <div className='showOffer'>
            <div className="container">
                <ul>
                    <li>
                        <Link to={'/'}>Ana Səhifə</Link>
                    </li>
                    <li>
                        <Link to={'/alloffers'}>Xüsusi təkliflər</Link>
                    </li>
                    <li>
                        {renderOffer.title}
                    </li>
                </ul>
                <h1>{renderOffer.title}</h1>
                <div className="img-wrapper">
                    <img src={renderOffer.imgUrl} alt="" />
                </div>
                <h2>{renderOffer.description}</h2>
                {renderBody()}
            </div>
        </div>
    )
}

export default ShowOffer