(function() {
  $(function() {
    var lyrics, settings;
    lyrics = [[[0.01, "श्रीमद्वाल्मीकियरामायणे बालकाण्डे प्रथमः सर्गः"]], [[12.16, "तपःस्वाध्यायनिरतं तपस्वी वाग्विदां वरम्"]], [[17.44, "नारदं परिपप्रच्छ वाल्मीकिर्मुनिपुङ्गवम्"]], [[22.8, "को न्वस्मिन् साम्प्रतं लोके गुणवान् कश्च वीर्यवान्"]], [[28.44, "धर्मज्ञश्च कृतज्ञश्च सत्यवाक्यो दृढव्रतः"]], [[34.36, "चारित्रेण च को युक्तः सर्वभूतेषु को हितः"]], [[39.8, "विद्वान् कः कः समर्थश्च कश्चैकप्रियदर्शनः"]], [[47.76, "आत्मवान् को जितक्रोधो द्युतिमान् कोऽनसूयकः"]], [[51.32, "कस्य बिभ्यति देवाश्च जातरोषस्य संयुगे"]], [[56.8, "एतदिच्छाम्यहं श्रोतुं परं कौतूहलं हि मे"]], [[62.08, "महर्षे त्वं समर्थोऽसि ज्ञातुमेवंविधं नरम्"]], [[66.28, "श्रुत्वा चैतत् त्रिलोकज्ञो वाल्मीकेर्नारदो वचः"]], [[72.72, "श्रूयतामिति चामन्त्र्य प्रहृष्टो वाक्यमब्रवीत्"]], [[77.2, "बहवो दुर्ल्लभाश्चैव ये त्वया कीर्त्तिता गुणाः"]], [[83.24, "मुने वक्ष्याम्यहं बुद्ध्वा तैर्युक्तः श्रूयतां नरः"]], [[88.96, "इक्ष्वाकुवंशप्रभवो रामो नाम जनैः श्रुतः"]], [[93.84, "नियतात्मा महावीर्यो द्युतिमान् धृतिमान् वशी"]], [[99.32, "बुद्धिमान्नीतिमान् वाग्ग्मी श्रीमान् शत्रुनिबर्हणः"]], [[105.44, "विपुलांसो  महाबाहुः कम्बुग्रीवो महाहनुः"]], [[110.4, "महोरस्को महेष्वासो  गूढजत्रुर् अरिन्दमः"]], [[115.68, "आजानुबाहुः सुशिराः सुललाटः सुविक्रमः"]], [[120.36, "समः समविभक्ताङ्गः स्निग्धवर्णः प्रतापवान्"]], [[124.8, "पीनवक्षा विशालाक्षो लक्ष्मीवान् शुभलक्षणः"]], [[129.12, "धर्मज्ञः सत्ययसन्धश्च प्रजानां च हिते रतः"]], [[135.76, "यशस्वी ज्ञानसम्पन्नः शुचिर्वश्यः समाधिमान्"]], [[140.92, "प्रजापतिसमः श्रीमान् धाता रिपुनिषूदनः"]], [[145.68, "रक्षिता जीवलोकस्य धर्मस्य परिरक्षिता"]], [[149.4, "रक्षिता स्वस्य धर्मस्य स्वजनस्य च रक्षिता"]], [[155.2, "वेदवेदाङ्गतत्त्वज्ञो धनुर्वेदे च निष्ठितः"]], [[160.32, "सर्वशास्त्रार्थतत्त्वज्ञः स्मृतिमान् प्रतिभानवान्"]], [[165.56, "सर्वलोकप्रियः साधुरदीनात्मा विचक्षणः"]], [[170.32, "सर्वदाभिगतः सद्भिः समुद्र इव सिन्धुभिः"]], [[174.6, "आर्यः सर्वसमश्चैव सदैकप्रियदर्शनः"]], [[179.24, "स च सर्वगुणोपेतः कौसल्यानन्दवर्द्धनः"]], [[184.0, "समुद्र इव गाम्भीर्य्ये धैर्येण हिमवानिव"]], [[187.6, "विष्णुना सदृशो वीर्ये सोमवत्प्रियदर्शनः"]], [[194.56, "कालाग्निसदृशः क्रोधे क्षमया पृथिवीसमः"]], [[198.48, "धनदेन समस्त्यागे सत्ये धर्म इवापरः"]], [[202.88, "तमेवङ्गुणसम्पन्नं रामं सत्यपराक्रमम्"]], [[207.64, "ज्येष्ठं श्रेष्ठगुणैर्युक्तं प्रियं दशरथः सुतम्"]], [[217.28, "यौवराज्येन संयोक्तुमैच्छत्प्रीत्या महीपतिः"]], [[222.52, "तस्याभिषेकसम्भारान् दृष्ट्वा भार्याऽथ कैकयी"]], [[228.08, "पूर्वं दत्तवरा देवी वरमेनमयाचत"]], [[232.68, "विवासनं च रामस्य भरतस्याभिषेचनम्"]], [[236.96, "स सत्यवचनाद्राजा धर्मपाशेन संयतः"]], [[241.96, "विवासयामास सुतं रामं दशरथः प्रियम्"]], [[245.88, "स जगाम वनं वीरः प्रतिज्ञामनुपालयन्"]], [[250.52, "पितुर्वचननिर्देशात् कैकेय्याः प्रियकारणात्"]], [[256.16, "तं व्रजन्तं प्रिये भ्राता लक्ष्मणोऽनुजगाम ह"]], [[260.48, "स्नेहाद्विनयसम्पन्नः सुमित्रानन्दवर्द्धनः"]], [[265.48, "भ्रातरं दयितो भ्रातुः सौभ्रात्रमनुदर्शयन्"]], [[269.48, "रामस्य दयिता भार्या नित्यं प्राणसमा हिता"]], [[275.2, "जनकस्य कुले जाता देवमायेव निर्मिता"]], [[279.68, "सर्वलक्षणसम्पन्ना नारीणामुत्तमा वधूः"]], [[284.48, "सीताप्यनुगता रामं शशिनं रोहिणी यथा"]], [[289.36, "पौरैरनुगतो दूरं पित्रा दशरथेन च"]], [[293.76, "शृङ्गिबेरपुरे सूतं गङ्गाकूले व्यसर्ज्जयत्"]], [[298.68, "गुहमासाद्य धर्मात्मा निषादाधिपतिं प्रियम्"]], [[303.44, "गुहेन सहितो रामो लक्ष्मणेन च सीतया"]], [[308.12, "ते वनेन वनं गत्वा नदीस्तीर्त्वा बहूदकाः"]], [[313.28, "चित्रकूटमनुप्राप्य भरद्वाजस्य शासनात्"]], [[317.48, "रम्यमावसथं कृत्वा रममाणा वने त्रयः"]], [[322.6, "देवगन्धर्वसङ्काशास्तत्र ते न्यवसन् सुखम्"]], [[327.36, "चित्रकूटं गते रामे पुत्रशोकातुरस्तथा"]], [[332.04, "राजा दशरथः स्वर्गं जगाम विलपन् सुतम्"]], [[335.12, "मृते तु तस्मिन्भरतो वसिष्ठप्रमुखैर्द्विजैः"]], [[340.44, "नियुज्यमानो राज्याय नैच्छद्राज्यं महाबलः"]], [[345.4, "स जगाम वनं वीरो रामपादप्रसादकः"]], [[348.72, "गत्वा तु सुमहात्मानं रामं सत्यपराक्रमम्"]], [[354.4, "अयाचद्भ्रातरं राममार्यभावपुरस्कृतः"]], [[363.84, "रामोऽपि परमोदारः सुमुखः सुमहायशाः"]], [[368.32, "न चैच्छत्पितुरादेशाद्राज्यं रामो महाबलः"]], [[373.64, "पादुके चास्य राज्याय न्यासं दत्त्वा पुनः पुनः"]], [[378.8, "निवर्त्तयामास ततो भरतं भरताग्रजः"]], [[383.12, "स काममनवाप्यैव रामपादावुपस्पृशन्"]], [[386.8, "नन्दिग्रामेऽकरोद्राज्यं रामागमनकाङ्क्षया"]], [[392.8, "गते तु भरते श्रीमान् सत्यसन्धो जितेन्द्रियः"]], [[397.96, "रामस्तु पुनरालक्ष्य नागरस्य जनस्य च"]], [[401.44, "तत्रागमनमेकाग्रो दण्डकान् प्रविवेश ह"]], [[406.64, "प्रविश्य तु महारण्यं रामो राजीवलोचनः"]], [[411.24, "विराधं राक्षसं हत्वा शरभङ्गं ददर्श ह"]], [[415.68, "सुतीक्ष्णं चाप्यगस्त्यं च अगस्त्यभ्रातरं तथा"]], [[420.32, "अगस्त्यवचनाच्चैव जग्राहैन्द्रं शरासनम्"]], [[424.72, "खड्गं च परमप्रीतस्तूणी चाक्षयसायकौ"]], [[428.72, "वसतस्तस्य रामस्य वने वनचरैः सह"]], [[433.6, "ऋषयोऽभ्यागमन् सर्वे वधायासुररक्षसाम्"]], [[438.0, "स तेषां प्रतिशुश्राव राक्षसानां तथा वने"]], [[442.72, "प्रतिज्ञातश्च रामेण वधः संयति रक्षसाम्"]], [[447.04, "ऋषीणामग्निकल्पानां दण्डकारण्यवासिनाम्"]], [[451.96, "तेन तत्रैव वसता जनस्थाननिवासिनी"]], [[456.04, "विरूपिता शूर्पणखा राक्षसी कामरूपिणी"]], [[460.52, "ततः शूर्पणखावाक्यादुद्युक्तान् सर्लराक्षसान्"]], [[465.52, "खरं त्रिशिरसं चैव दूषणं चैव राक्षसम्"]], [[469.64, "निजघान रणे रामस्तेषां चैव पदानुगान्"]], [[474.84, "वने तस्मिन्निवसता जनस्थाननिवासिनाम्"]], [[479.0, "रक्षसां निहतान्यासन्सहस्राणि चतुर्दश"]], [[482.96, "ततो ज्ञातिवधं श्रुत्वा रावणः क्रोधमूर्च्छितः"]], [[488.6, "सहायं वरयामास मारीचं नाम राक्षसम्"]], [[492.6, "वार्यमाणः सुबहुशो मारीचेन स रावणः"]], [[497.72, "न विरोधो बलवता क्षमो रावण तेन ते"]], [[502.0, "अनादृत्य तु तद्वाक्यं रावणः कालचोदितः"]], [[506.68, "जगाम सहमारीचस्तस्याश्रमपदं तदा"]], [[511.04, "तेन मायाविना दूरमपवाह्य नृपात्मजौ"]], [[515.64, "जहार भार्यां रामस्य गृध्रं हत्वा जटायुषम्"]], [[521.04, "गृध्रं च निहतं दृष्ट्वा हृतां श्रुत्वा च मैथिलीम्"]], [[525.72, "राघवः शोकसन्तप्तो विललापाकुलेन्द्रियः"]], [[530.6, "ततस्तेनैव शोकेन गृध्रं दग्ध्वा जटायुषम्"]], [[534.76, "मार्गमाणो वने सीतां राक्षसं सन्ददर्श ह"]], [[539.92, "कबन्धं नाम रूपेण विकृतं घोरदर्शनम्"]], [[543.56, "तं निहत्य महाबाहुर्ददाह स्वर्गतश्च सः"]], [[548.64, "स चास्य कथयामास शबरीं धर्मचारिणीम्"]], [[553.0, "श्रमणीं धर्मनिपुणामभिगच्छेति राघवम्"]], [[557.2, "सोभ्यगच्छन्महातेजाः शबरीं शत्रुसूदनः"]], [[562.12, "शबर्या पूजितः सम्यग्रामो दशरथात्मजः"]], [[566.56, "पम्पातीरे हनुमता सङ्गतो वानरेण ह"]], [[570.76, "हनुमद्वचनाच्चैव सुग्रीवेण समागतः"]], [[575.4, "सुग्रीवाय च तत्सर्वं शंसद्रामो महाबलः"]], [[580.12, "आदितस्तद्यथावृत्तं सीतायाश्च विशेषतः"]], [[584.8, "सुग्रीवश्चापि तत्सर्वं श्रुत्वा रामस्य वानरः"]], [[589.56, "चकार सख्यं रामेण प्रीतश्चैवाग्निसाक्षिकम्"]], [[594.32, "ततो वानरराजेन वैरानुकथनं प्रति"]], [[598.48, "रामायावेदितं सर्वं प्रणयाद्दुःखितेन च"]], [[601.96, "प्रतिज्ञातं च रामेण तदा वालिवधं प्रति"]], [[607.28, "वालिनश्च बलं तत्र कथयामास वानरः"]], [[610.4, "प्रतिज्ञातं च रामेण तदा वालिवधं प्रति"]], [[611.64, "सुग्रीवः शङ्कितश्चासीन्नित्यं वीर्येण राघवे"]], [[616.32, "राघवप्रत्ययार्थं तु दुन्दुभेः कायमुत्तमम्"]], [[621.2, "दर्शयामास सुग्रीवो महापर्वतसन्निभम्"]], [[625.24, "उत्स्मयित्वा महाबाहुः प्रेक्ष्य चास्थि महाबलः"]], [[630.04, "पादाङ्गुष्ठेन चिक्षेप सम्पूर्णं दशयोजनम्"]], [[634.4, "बिभेद च पुनस्सालान् सप्तैकेन महेषुणा"]], [[639.44, "गिरिं रसातलं चैवं जनयन् प्रत्ययं तदा"]], [[643.56, "ततः प्रीतमनास्तेन विश्वस्तः स महाकपिः"]], [[648.04, "किष्किन्धां रामसहितो जगाम च गुहां तदा"]], [[653.44, "ततोऽगर्जद्धरिवरः सुग्रीवो हेमपिङ्गलः"]], [[657.28, "तेन नादेन महता निर्जगाम हरीश्वरः"]], [[661.88, "अनुमान्य तदा तारां सुग्रीवेण समागतः"]], [[666.64, "निजघान च तत्रैनं शरेणैकेन राघवः"]], [[670.92, "ततः सुग्रीववचनाद्धत्वा वालिनमाहवे"]], [[675.08, "सुग्रीवमेव तद्राज्ये राघवः प्रत्यपादयत्"]], [[679.68, "स च सर्वान् समानीय वानरान् वानरर्षभः"]], [[684.56, "दिशः प्रस्थापयामास दिदृक्षुर्जनकात्मजाम्"]], [[687.76, "ततो गृध्रस्य वचनात्सम्पातेर्हनुमान् बली"]], [[694.16, "शतयोजनविस्तीर्णं पुप्लुवे लवणार्णवम्"]], [[698.44, "तत्र लङ्कां समासाद्य पुरीं रावणपालिताम्"]], [[703.96, "ददर्श सीतां ध्यायन्तीमशोकवनिकां गताम्"]], [[708.92, "निवेदयित्वाभिज्ञानं प्रवृत्तिं च निवेद्य च"]], [[713.44, "समाश्वास्य च वैदेहीं मर्दयामास तोरणम्"]], [[717.84, "पञ्च सेनाग्रगान् हत्वा सप्त मन्त्रिसुतानपि"]], [[722.84, "शूरमक्षं च निष्पिष्य ग्रहणं समुपागमत्"]], [[727.0, "अस्त्रेणोन्मुक्तमात्मानं ज्ञात्वा पैतामहाद्वरात्"]], [[732.96, "मर्षयन् राक्षसान् वीरो यन्त्रिणस्तान् यदृच्छया"]], [[737.92, "ततो दग्ध्वा पुरीं लङ्कामृते सीतां च मैथिलीम्"]], [[742.76, "रामाय प्रियमाख्यातुं पुनरायान्महाकपिः"]], [[747.92, "सोऽभिगम्य महात्मानं कृत्वा रामं प्रदक्षिणम्"]], [[752.04, "न्यवेदयदमेयात्मा दृष्टा सीतेति तत्त्वतः"]], [[757.48, "ततः सुग्रीवसहितो गत्वा तीरं महोदधेः"]], [[762.08, "समुद्रं क्षोभयामास शरैरादित्यसन्निभैः"]], [[766.76, "दर्शयामास चात्मानं समुद्रः सरितां पतिः"]], [[771.48, "समुद्रवचनाच्चैव नलं सेतुमकारयत्"]], [[775.48, "तेन गत्वा पुरीं लङ्कां हत्वा रावणमाहवे"]], [[780.28, "रामः सीतामनुप्राप्य परां व्रीडामुपागमत्"]], [[785.16, "तामुवाच ततो रामः परुषं जनसंसदि"]], [[789.16, "अमृष्यमाणा सा सीता विवेश ज्वलनं सती"]], [[793.64, "ततोऽग्निवचनात्सीतां ज्ञात्वा विगतकल्मषाम्"]], [[798.6, "कर्मणा तेन महता त्रैलोक्यं सचराचरम्"]], [[803.36, "सदेवर्षिगणं तुष्टं राघवस्य महात्मनः"]], [[810.44, "अभिषिच्य च लङ्कायां राक्षसेन्द्रं विभीषणम्"]], [[817.0, "कृतकृत्यस्तदा रामो विज्वरः प्रमुमोद ह"]], [[821.88, "देवताभ्यो वरं प्राप्य समुत्थाप्य च वानरान्"]], [[826.12, "अयोध्यां प्रस्थितो रामः पुष्पकेण सुहृद्वृतः"]], [[830.32, "भरद्वाजाश्रमं गत्वा रामः सत्यपराक्रमः"]], [[836.76, "भरतस्यान्तिकं रामो हनूमन्तं व्यसर्जयत्"]], [[840.92, "पुनराख्यायिकां जल्पन् सुग्रीवसहितस्तदा"]], [[845.6, "पुष्पकं तत्समारुह्य नन्दिग्रामं ययौ तदा"]], [[850.48, "नन्दिग्रामे जटां हित्वा भ्रातृभिस्सहितोऽनघः"]], [[855.2, "रामः सीतामनुप्राप्य राज्यं पुनरवाप्तवान्"]], [[860.44, "प्रहृष्टमुदितो लोकस्तुष्टः पुष्टः सुधार्मिकः"]], [[864.96, "निरामयो ह्यरोगश्च दुर्भिक्षभयवर्जितः"]], [[869.36, "न पुत्रमरणं किञ्चिद् द्रक्ष्यन्ति पुरुषाः क्वचित्"]], [[872.6, "नार्यश्चाविधवा नित्यं भविष्यन्ति पतिव्रताः"]], [[878.2, "न चाग्निजं भयं किञ्चिन्नाप्सु मज्जन्ति जन्तवः"]], [[883.08, "न वातजं भयं किञ्चिन्नापि ज्वरकृतं तथा"]], [[887.56, "न चापि क्षुद्भयं तत्र न तस्करभयं तथा"]], [[891.76, "नगराणि च राष्ट्राणि धनधान्ययुतानि च"]], [[895.48, "नित्यं प्रमुदिताः सर्वे यथा कृतयुगे तथा"]], [[900.6, "अश्वमेधशतैरिष्ट्वा तथा बहुसुवर्णकैः"]], [[905.04, "गवां कोट्ययुतं दत्त्वा विद्वद्भ्यो विधिपूर्वकम्"]], [[911.76, "राजवंशाञ्छतगुणान् स्थापयिष्यति राघवः"]], [[920.52, "चातुर्वर्ण्यं च लोकेऽस्मिन् स्वेस्वे धर्मे नियोक्ष्यति"]], [[926.12, "दशवर्षसहस्राणि दशवर्षशतानि च"]], [[929.32, "रामो राज्यमुपासित्वा ब्रह्मलोकं गमिष्यति"]], [[935.2, "इदं पवित्रं पापघ्नं पुण्यं वेदैश्च सम्मितम्"]], [[939.6, "यः पठेद्रामचरितं सर्वपापैः प्रमुच्यते"]], [[945.28, "एतदाख्यानमायुष्यं पठन् रामायणं नरः"]], [[950.16, "सपुत्रपौत्रः सगणः प्रेत्य स्वर्गे महीयते"]], [[955.04, "पठन् द्विजो वागृषभत्वमीयात्स्यात् क्षत्रियो भूमिपतित्वमीयात्"]], [[964.88, "वणिग्जनः पण्यफलत्वमीयाज्जनश्च शूद्रोपि महत्त्वमीयात्"]]];
    settings = {
      'last-word-highlight-time': 5.5,
      'scroll-animation-time': .1,
      'karaoke-player-elem': $('audio#karaoke-player'),
      'karaoke-lyrics-elem': $('#karaoke-lyrics')
    };
    return window.karaoke = new window.Karaoke(lyrics, settings);
  });

}).call(this);