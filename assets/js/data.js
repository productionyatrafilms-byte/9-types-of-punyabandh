const slidesData = [
    {
        video: "./assets/videos/1/1.mp4",
        title: "PUNYA",
        titlehi: "पुण्य",
        titlegj: "પુણ્ય",
        content: "When one performs good deeds, he gains Good Karma which is called Punya. ",
        contenthi: "जब कोई व्यक्ति अच्छे कार्य करता है, तो उसे अच्छे कर्म प्राप्त होते हैं, जिन्हें पुण्य कहा जाता है।",
        contentgj: "જ્યારે કોઈ વ્યક્તિ સારા કાર્યો કરે છે, ત્યારે તેને સારા કર્મો પ્રાપ્ત થાય છે. જેને પુણ્ય કહેવામાં આવે છે"
    },
    {
        video: "./assets/videos/1/2.mp4",
        title: "PAAP",
        titlehi: "पाप",
        titlegj: "પાપ",
        content: "When one performs Bad Deeds, he gains Bad karma which is called Paap.",
        contenthi: "जब कोई बुरे कार्य करता है,तो उसे बुरे कर्म प्राप्त होते हैं, जिन्हें पाप कहा जाता है।",
        contentgj: "જ્યારે કોઈ વ્યક્તિ ખરાબ કાર્યો કરે છે, ત્યારે તેને ખરાબ કર્મો પ્રાપ્ત થાય છે.જેને પાપ કહેવામાં આવે છે"
    },
    {
        video: "./assets/videos/1/3.mp4",
        title: "",
        titlehi: "",
        titlegj: "",
        content: "Punya can be earned through good intentions, kind words, and helping those in need. On the other hand, Paap is accumulated when we speak negatively, behave badly, or think ill of others. Both lead to completely different outcomes.",
        contenthi: "अच्छी नीयत, अच्छे शब्दों और जरूरतमंदों की सेवा से पुण्य प्राप्त किया जा सकता है। दूसरी ओर, पाप तब बनता है, जब हम बुरा बोलते हैं, बुरा व्यवहार करते हैं या दुसरो के लिए बुरा सोचते है। दोनों बिल्कुल अलग परिणाम देते हैं।.",
        contentgj:"સારા ઈરાદા, સારા શબ્દો અને જરૂરિયાતમંદોની સેવા દ્વારા પુણ્ય મેળવી શકાય છે. બીજી બાજુ, જ્યારે આપણે ખરાબ શબ્દો બોલીએ, ખરાબ વર્તન કરીએ અથવા અન્ય લોકો માટે ખરાબ વિચારો કરીએ ત્યારે પાપ બંધાય છે. બંને સંપૂર્ણપણે અલગ પરિણામો આપે છે.",
        wide: true
    },
    {
        video: "./assets/videos/1/4.mp4",
        title: "",
        titlehi: "",
        titlegj: "",
        content: "Punya brings good things into our life, while Paap brings bad things into our life.",
        contenthi: "पुण्य हमें जीवन में अच्छी चीज़े देता है और पाप हमें जीवन में बुरी चीजें देता है।",
        contentgj: "પુણ્ય આપણને જીવનમાં સારી વસ્તુઓ આપે છે અને પાપ આપણને જીવનમાં ખરાબ વસ્તુઓ આપે છે."
    }
];

const earnSlidesData = [
    {
        video: "./assets/videos/2/1.mp4",
        title: "",
        titlehi: "",
        titlegj: "",
        content: "5 Senses",
        contenthi: "५ इन्द्रियाँ",
        contentgj: "5 ઇન્દ્રિયો"
    },

    {
        video: "./assets/videos/2/2.mp4",
        title: "",
        titlehi: "",
        titlegj: "",
        content: "Good Body",
        contenthi: "अच्छा शरीर",
        contentgj: "સારું શરીર"
    },

    {
        video: "./assets/videos/2/3.mp4",
        title: "",
        titlehi: "",
        titlegj: "",
        content: "Good Health",
        contenthi: "अच्छी सेहत",
        contentgj: "સારું સ્વાસ્થ્ય"
    },

    {
        video: "./assets/videos/2/4.mp4",
        title: "",
        titlehi: "",
        titlegj: "",
        content: "Birth as Human Being",
        contenthi: "मनुष्य जन्म",
        contentgj: "મનુષ્ય જન્મ"
    },

    {
        video: "./assets/videos/2/5.mp4",
        title: "",
        titlehi: "",
        titlegj: "",
        content: "Birth in Arya Desh",
        contenthi: "आर्य देश में जन्म",
        contentgj: "આર્ય દેશમાં જન્મ"
    },

    {
        video: "./assets/videos/2/6.mp4",
        title: "",
        titlehi: "",
        titlegj: "",
        content: "Jain Religion",
        contenthi: "जैन धर्म",
        contentgj: "જૈન ધર્મ"
    },

    {
        video: "./assets/videos/2/7.mp4",
        title: "",
        titlehi: "",
        titlegj: "",
        content: "Good Family",
        contenthi: "अच्छा परिवार",
        contentgj: "સારું કુટુંબ"
    },

    {
        video: "./assets/videos/2/8.mp4",
        title: "",
        titlehi: "",
        titlegj: "",
        content: "Good Memory",
        contenthi: "अच्छी स्मरणशक्ति",
        contentgj: "સારી સ્મરણશક્તિ"
    },

    {
        video: "./assets/videos/2/9.mp4",
        title: "",
        titlehi: "",
        titlegj: "",
        content: "Sadhu - Sadhviji Darshan",
        contenthi: "साधु - साध्वीजी के दर्शन",
        contentgj: "સાધુ - સાધ્વીજીના દર્શન"
    },

    {
        video: "./assets/videos/2/10.mp4",
        title: "",
        titlehi: "",
        titlegj: "",
        content: "Jinvaani",
        contenthi: "जिनवाणी",
        contentgj: "જિનવાણી"
    },

    {
        video: "./assets/videos/2/11.mp4",
        title: "",
        titlehi: "",
        titlegj: "",
        content: "Long Life",
        contenthi: "दीर्घायु",
        contentgj: "દીર્ઘાયુષ્ય"
    }
];

const subpointsData = [
    {
        id: 1,
        title: "1. Anna Punya",
        titlehi: "1. अन्न पुण्य",
        titlegj: "1. અન્ન પુણ્ય",
        slides: [
         {
        video: "./assets/videos/3/1/1.mp4",
        content: "Definition : It is earned by offering food to others.",
        contenthi: "परिभाषा : अन्न पुण्य दूसरों को भोजन देकर प्राप्त किया जाता है।",
        contentgj: "વ્યાખ્યા : અન્ન પુણ્ય અન્યને ભોજન આપવાથી પ્રાપ્ત થાય છે."
    },

    {
        video: "./assets/videos/3/1/2.mp4",
        content: "Examples: To respectfully offer Gochari to Sadhu - Sadhviji Bhagwant",
        contenthi: "उदाहरण : साधु - साध्वीजी भगवंत को आदरपूर्वक गोचरी वहोराना।",
        contentgj: "ઉદાહરણ : સાધુ - સાધ્વીજી ભગવંતને આદરપૂર્વક ગોચરી અર્પણ કરવી વહોરાવવી."
    },

    {
        video: "./assets/videos/3/1/3.mp4",
        content: "To invite Sadharmik for a meal",
        contenthi: "साधर्मिक को भोजन के लिए आमंत्रित करना।",
        contentgj: "સાધર્મિકને ભોજન માટે આમંત્રિત કરવા."
    },

    {
        video: "./assets/videos/3/1/4.mp4",
        content: "To start a Daanshala or Khichdi Ghar",
        contenthi: "दानशाला या खिचड़ी घर शुरू करना।",
        contentgj: "દાનશાળા અથવા ખીચડી ઘર શરૂ કરવા."
    },

    {
        video: "./assets/videos/3/1/5.mp4",
        content: "To give food to the Homeless and Needy",
        contenthi: "बेघर या जरूरतमंद लोगों को भोजन देना।",
        contentgj: "નિરાધાર અને જરૂરિયાતમંદ લોકોને ભોજન આપવું."
    },

    {
        video: "./assets/videos/3/1/6.mp4",
        content: "To feed Animals & Birds",
        contenthi: "पशु - पक्षियों को भोजन देना।",
        contentgj: "પશુ - પક્ષીઓને ખોરાક આપવો."
    },
        ]
    },
    {
    id: 2,
    title: "2. Paan Punya",
    titlehi: "2. पान पुण्य",
    titlegj: "2. પાન પુણ્ય",

    slides: [
        {
            video: "./assets/videos/3/2/1.mp4",
            content: "Definition: It is earned by offering water to others.",
            contenthi: "परिभाषा : पान पुण्य दूसरों को पानी पिलाने से प्राप्त होता है।",
            contentgj: "વ્યાખ્યા: બીજાને પાણી પીવડાવવાથી પાન પુણ્ય પ્રાપ્ત થાય છે."
        },

        {
            video: "./assets/videos/3/2/2.mp4",
            content: "Examples: To offer boiled water to Sadhu - Sadhviji Bhagwant",
            contenthi: "उदाहरण : साधु - साध्वीजी भगवंत को उबला हुआ पानी वहोराना।",
            contentgj: "ઉદાહરણ : સાધુ - સાધ્વીજી ભગવંતને ઉકાળેલું પાણી વહોરાવવું."
        },

        {
            video: "./assets/videos/3/2/3.mp4",
            content: "To give water to thirsty",
            contenthi: "प्यासे व्यक्ति को पानी देना।",
            contentgj: "તરસ્યા વ્યક્તિને પાણી આપવું."
        },

        {
            video: "./assets/videos/3/2/4.mp4",
            content: "To donate a Drinking Water Station",
            contenthi: "पेयजल परब का दान करना।",
            contentgj: "પાણીની પરબનું દાન કરવું."
        },

        {
            video: "./assets/videos/3/2/5.mp4",
            content: "To donate to or run a Chaas Kendra",
            contenthi: "छास केंद्र में दान देना या उसका संचालन करना।",
            contentgj: "છાસ કેન્દ્રમાં દાન આપવું અથવા તેનું સંચાલન કરવું."
        },

        {
            video: "./assets/videos/3/2/6.mp4",
            content: "To give water to Animals & Birds",
            contenthi: "पशु - पक्षियों को पानी देना।",
            contentgj: "પશુ - પક્ષીઓને પાણી આપવું."
        }
    ]
},
  {
    id: 3,
    title: "3. Aasan Punya",
    titlehi: "3. आसन पुण्य",
    titlegj: "3. આસન પુણ્ય",

    slides: [
        {
            video: "./assets/videos/3/3/1.mp4",
            content: "Definition: It is earned by offering a seat to others",
            contenthi: "परिभाषा : आसन पुण्य दूसरों को बैठने की जगह देकर प्राप्त होता है।",
            contentgj: "વ્યાખ્યા: અન્યને બેસવાની જગ્યા આપવાથી આસન પુણ્ય પ્રાપ્ત થાય છે."
        },

        {
            video: "./assets/videos/3/3/2.mp4",
            content: "Examples: To offer Aasan or a place for sitting to Sadhu - Sadhviji Bhagwant",
            contenthi: "उदाहरण : साधु - साध्वीजी भगवंत को आसन या बैठने का स्थान देना।",
            contentgj: "ઉદાહરણ : સાધુ - સાધ્વીજી ભગવંતને બેસવાની જગ્યા અથવા આસન આપવું."
        },

        {
            video: "./assets/videos/3/3/3.mp4",
            content: "To offer Katasana to Shravak - Shravika",
            contenthi: "श्रावक - श्राविका को कटासना देना।",
            contentgj: "શ્રાવક - શ્રાવિકાને કટાસણું આપવું."
        },

        {
            video: "./assets/videos/3/3/4.mp4",
            content: "To provide a seat in a bus / train to Elderly Person, Disabled or Pregnant Woman",
            contenthi: "बुजुर्ग, विकलांग या गर्भवती महिला को बस / ट्रेन में अपनी सीट देना।",
            contentgj: "વૃદ્ધ વ્યક્તિ, વિકલાંગ અથવા ગર્ભવતી મહિલાને બસ/ટ્રેનમાં સીટ પ્રદાન કરવી."
        },

        {
            video: "./assets/videos/3/3/5.mp4",
            content: "To provide a place for sitting to passerby",
            contenthi: "राहगीर को बैठने के लिए जगह देना।",
            contentgj: "રસ્તે જનાર વ્યક્તિને બેસવા માટે જગ્યા આપવી."
        }
    ]
},

   {
    id: 4,
    title: "4. Shayan Punya",
    titlehi: "4. शयन पुण्य",
    titlegj: "4. શયન પુણ્ય",

    slides: [
        {
            video: "./assets/videos/3/4/1.mp4",
            content: "Definition: Shayan Punya is earned by offering bed to others.",
            contenthi: "परिभाषा : दूसरों को सोने की जगह देने से शयन पुण्य प्राप्त होता है।",
            contentgj: "વ્યાખ્યા: શયન પુણ્ય અન્યને સૂવાની જગ્યા આપવાથી પ્રાપ્ત થાય છે."
        },

        {
            video: "./assets/videos/3/4/2.mp4",
            content: "Examples: To offer a wooden bed (Paat) to Sadhu - Sadhviji Bhagwant for sleeping.",
            contenthi: "उदाहरण : साधु - साध्वीजी भगवंत को सोने के लिए लकड़ी का बिस्तर (पाट) देना।",
            contentgj: "ઉદાહરણ: સાધુ - સાધ્વીજી ભગવંતને સૂવા માટે લાકડાનો પલંગ (પાટ) આપવું."
        },

        {
            video: "./assets/videos/3/4/3.mp4",
            content: "To offer our home to Sadhu - Sadhviji Bhagwant for staying",
            contenthi: "साधु - साध्वीजी भगवंत को रहने के लिए अपना घर देना।",
            contentgj: "સાધુ - સાધ્વીજી ભગવંતને રહેવા માટે આપણું ઘર આપવું."
        },

        {
            video: "./assets/videos/3/4/4.mp4",
            content: "To give bed, bedsheet, blanket etc. to someone for sleeping",
            contenthi: "किसी को सोने के लिए बिस्तर, चादर, कंबल आदि देना।",
            contentgj: "કોઈને સૂવા માટે પલંગ, ચાદર, ધાબળો વગેરે આપવું."
        },

        {
            video: "./assets/videos/3/4/5.mp4",
            content: "To give someone a place to sleep",
            contenthi: "किसी को सोने के लिए जगह देना।",
            contentgj: "કોઈને સૂવા માટે જગ્યા આપવી."
        },

        {
            video: "./assets/videos/3/4/6.mp4",
            content: "To donate money for Upashray or Aaradhna Bhavan",
            contenthi: "उपाश्रय या आराधना भवन के लिए धन का दान करना।",
            contentgj: "ઉપાશ્રય અથવા આરાધના ભવન માટે પૈસા દાન કરવા."
        }
    ]
},
   {
    id: 5,
    title: "5. Vastra Punya",
    titlehi: "5. वस्त्र पुण्य",
    titlegj: "5. વસ્ત્ર પુણ્ય",

    slides: [
        {
            video: "./assets/videos/3/5/1.mp4",
            content: "Definition: Vastra Punya is earned by offering clothes to others.",
            contenthi: "परिभाषा : वस्त्र पुण्य दूसरों को वस्त्र देकर प्राप्त होता है।",
            contentgj: "વ્યાખ્યા: અન્યને વસ્ત્રો આપવાથી વસ્ત્ર પુણ્ય પ્રાપ્ત થાય છે."
        },

        {
            video: "./assets/videos/3/5/2.mp4",
            content: "Examples: To offer clothes to Sadhu - Sadhviji Bhagwant",
            contenthi: "उदाहरण : साधु - साध्वीजी भगवंत को वस्त्र वहोराना।",
            contentgj: "ઉદાહરણ: સાધુ - સાધ્વીજી ભગવંતને વસ્ત્રો વહોરાવવા."
        },

        {
            video: "./assets/videos/3/5/3.mp4",
            content: "To donate clothes to Sadharmik",
            contenthi: "साधर्मिक को वस्त्र दान करना।",
            contentgj: "સાધર્મિકને વસ્ત્રોનું દાન કરવું."
        },

        {
            video: "./assets/videos/3/5/4.mp4",
            content: "To provide clothes to needy",
            contenthi: "जरूरतमंदों को वस्त्र देना।",
            contentgj: "જરૂરિયાતમંદોને કપડાં આપવા."
        },

        {
            video: "./assets/videos/3/5/5.mp4",
            content: "To donate raincoat, umbrella etc. to needy",
            contenthi: "जरूरतमंदों को रेनकोट, छाता आदि दान करना।",
            contentgj: "જરૂરિયાતમંદોને રેઈનકોટ, છત્રી વગેરેનું દાન કરવું."
        }
    ]
},

   {
    id: 6,
    title: "6. Mann Punya",
    titlehi: "6. मन पुण्य",
    titlegj: "6. મન પુણ્ય",

    slides: [
        {
            video: "./assets/videos/3/6/1.mp4",
            content: "Definition: It is earned by becoming a well -wisher of others.",
            contenthi: "परिभाषा : मन पुण्य दूसरों का शुभचिंतक बनकर प्राप्त किया जाता है।",
            contentgj: "વ્યાખ્યા: બીજાના શુભચિંતક બનવાથી મન પુણ્ય પ્રાપ્ત થાય છે."
        },

        {
            video: "./assets/videos/3/6/2.mp4",
            content: "Examples: To think good of everyone",
            contenthi: "उदाहरण : सभी का भला सोचना।",
            contentgj: "ઉદાહરણ: બધાનું સારું વિચારવું."
        },

        {
            video: "./assets/videos/3/6/3.mp4",
            content: "To pray for someone",
            contenthi: "किसी व्यक्ति के लिए प्रार्थना करना।",
            contentgj: "કોઈ વ્યક્તિ માટે પ્રાર્થના કરવી."
        },

        {
            video: "./assets/videos/3/6/4.mp4",
            content: "To admire someone from the heart.",
            contenthi: "किसी व्यक्ति की मन से प्रशंसा करना।",
            contentgj: "કોઈ વ્યક્તિની દિલ થી પ્રશંસા કરવી."
        },

        {
            video: "./assets/videos/3/6/5.mp4",
            content: "To feel compassionate when we see someone in pain.",
            contenthi: "किसी को दर्द में देख करुणा का अनुभव करना।",
            contentgj: "જ્યારે આપણે કોઈને પીડામાં જોઈએ ત્યારે દયા અનુભવવી."
        },

        {
            video: "./assets/videos/3/6/6.mp4",
            content: "To think of doing good deeds",
            contenthi: "अच्छे कर्म करने के बारे में सोचना।",
            contentgj: "સારા કાર્યો કરવાનો વિચાર કરવો."
        },

        {
            video: "./assets/videos/3/6/7.mp4",
            content: "To feel happy for someone’s achievement",
            contenthi: "किसी की सफलता पर खुशी महसूस करना।",
            contentgj: "કોઈની સફળતામાં આનંદ અનુભવવો."
        }
    ]
}, 
  {
    id: 7,
    title: "7. Vachan Punya",
    titlehi: "7. वचन पुण्य",
    titlegj: "7. વચન પુણ્ય",

    slides: [
        {
            video: "./assets/videos/3/7/1.mp4",
            content: "Definition: It is earned by speaking well of others.",
            contenthi: "परिभाषा : वचन पुण्य दूसरों के लिए अच्छा बोलकर प्राप्त होता है।",
            contentgj: "વ્યાખ્યા : અન્ય લોકો માટે સારું બોલવાથી વચન પુણ્યની પ્રાપ્તિ થાય છે."
        },

        {
            video: "./assets/videos/3/7/2.mp4",
            content: "Examples: To speak the truth",
            contenthi: "उदाहरण : सच बोलना।",
            contentgj: "ઉદાહરણ: સાચું બોલવું."
        },

        {
            video: "./assets/videos/3/7/3.mp4",
            content: "To speak good of Dev, Guru and Dharma",
            contenthi: "देव, गुरु और धर्म के बारे में अच्छा बोलना।",
            contentgj: "દેવ, ગુરુ અને ધર્મનું સારું બોલવું."
        },

        {
            video: "./assets/videos/3/7/4.mp4",
            content: "To talk respectfully with everyone",
            contenthi: "सबके साथ आदरपूर्वक बोलना।",
            contentgj: "દરેક સાથે સન્માનપૂર્વક વાત કરવી."
        },

        {
            video: "./assets/videos/3/7/5.mp4",
            content: "To teach good things to others",
            contenthi: "दूसरों को अच्छी बातें सिखाना।",
            contentgj: "અન્ય લોકોને સારી વાતો શીખવવી."
        },

        {
            video: "./assets/videos/3/7/6.mp4",
            content: "To appreciate someone",
            contenthi: "किसी व्यक्ति की अनुमोदना करना।",
            contentgj: "કોઈની પ્રશંસા કરવી."
        }
    ]
},
   {
    id: 8,
    title: "8. Kaay Punya",
    titlehi: "8. काय पुण्य",
    titlegj: "8. કાય પુણ્ય",

    slides: [
        {
            video: "./assets/videos/3/8/1.mp4",
            content: "Definition: It is earned by doing good deeds",
            contenthi: "परिभाषा : काय पुण्य अच्छा कार्य करने से प्राप्त होता है।",
            contentgj: "વ્યાખ્યા: સારા કાર્યો કરવાથી કાય પુણ્યની પ્રાપ્તિ થાય છે."
        },

        {
            video: "./assets/videos/3/8/2.mp4",
            content: "Examples: To help poor, ill or sad people",
            contenthi: "उदाहरण : गरीब, बीमार या दुःखी लोगों की मदद करना।",
            contentgj: "ઉદાહરણ: ગરીબ, બીમાર અથવા દુઃખી લોકોને મદદ કરવી."
        },

        {
            video: "./assets/videos/3/8/3.mp4",
            content: "To do seva of Sadhu - Sadhviji Bhagwant",
            contenthi: "साधु - साध्वीजी भगवंत की सेवा करना।",
            contentgj: "સાધુ - સાધ્વીજી ભગવંતની સેવા કરવી."
        },

        {
            video: "./assets/videos/3/8/4.mp4",
            content: "To help parents, elders, siblings etc.",
            contenthi: "माता - पिता, भाई - बहनों की मदद करना।",
            contentgj: "માતા-પિતા, વડીલો, ભાઈ-બહેનો વગેરેને મદદ કરવી."
        },

        {
            video: "./assets/videos/3/8/5.mp4",
            content: "To save someone’s life",
            contenthi: "किसी की जान बचाना।",
            contentgj: "કોઈનો જીવ બચાવવો."
        }
    ]
},
    {
    id: 9,
    title: "9. Namaskaar Punya",
    titlehi: "9. नमस्कार पुण्य",
    titlegj: "9. નમસ્કાર પુણ્ય",

    slides: [
        {
            video: "./assets/videos/3/9/1.mp4",
            content: "Definition: Namaskaar Punya is earned by bowing down.",
            contenthi: "परिभाषा : नमस्कार पुण्य नमन करने से प्राप्त होता है।",
            contentgj: "વ્યાખ્યા : નમન કરવાથી નમસ્કાર પુણ્ય પ્રાપ્ત થાય છે."
        },

        {
            video: "./assets/videos/3/9/2.mp4",
            content: "Examples: To bow to Panch Parmeshthi",
            contenthi: "उदाहरण: पंच परमेष्ठी को नमन करना।",
            contentgj: "ઉદાહરણ: પંચ પરમેષ્ઠીને નમન કરવું."
        },

        {
            video: "./assets/videos/3/9/3.mp4",
            content: "To bow down to parents, elders, teachers etc.",
            contenthi: "माता - पिता, बड़ों, शिक्षक - शिक्षिका आदि को नमन करना।",
            contentgj: "માતા-પિતા, વડીલ, શિક્ષક વગેરેને પ્રણામ કરવા."
        }
    ]
}
];

