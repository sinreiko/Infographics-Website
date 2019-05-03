$(document).ready(function(){    
    new Chart($("#bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
          labels: ["Cancer", "Pneumonia", "Ischaemic heart diseases", "Cerebrovascular diseases (including stroke)", "External causes of morbidity and mortality", "Urinary tract infection", "Nephritis, nephrotic sydrome & nephrosis", "Other heart diseases", "Diabetes mellitus"],
          datasets: [{
          label: "2014",
          backgroundColor:"#ff5956",
          data: [29.4,19.0,16.0,8.4,4.7,3.6,2.6,2.0,1.9,1.4]
        },{
        label: "2015",
          backgroundColor:"#66ff56",
          data: [29.7,19.4,16.7,6.8,4.5,3.9,2.2,2.3,2.2,1.3]
        },{
        label: "2016",
          backgroundColor:"#56fcff",
          data: [29.6,19.3,17.0,6.6,4.4,4.0,2.3,1.9,1.9,1.7]
        }
        ]
    },
    options: {
    scales: {
        xAxes: [{ 
            stacked: false ,
        
        }],
        yAxes: [{ 
            stacked: true
        }]
      }
        }
    });
    
    $(".mark").click(function(){
        $("#common-content h1").addClass("slant");
        $("#common-extra").addClass("go-up");
    })
    
    $(".lung").click(function(){
        $("#common-content h2").text("Lung Cancer");
        $("#common-content p").html("The lungs are located in the chest and enable us to breathe. When we breathe in, air goes through our nose, down our windpipe (trachea), and into the lungs, where it spreads through tubes called bronchi. Oxygen from the air that we breathe can then pass into the blood and to the rest of the body to allow the body to function normally. <br><input type='checkbox' class='read-more-state' id='post-1'><label for='post-1' class='read-more-trigger symp'></label><br><span class='read-more-target'><li>A persistent cough that does not go away or gets worse</li><li>Blood in sputum</li><li>Increasing breathlessness</li><li>Pain in the chest that may be worsened with deep breathing or coughing</li><li>A change in the voice/ development of a persistent hoarse voice</li><li>Recurrent infection in the lungs</li><li>Loss of appetite and/ or unexplained weight loss and fatigue</li><li>A lump or swelling in the neck (which is due to cancer that has spread to the lymph nodes of the neck)</li></span><br><br>");
    })
    
    $(".colon").click(function(){
        $("#common-content h2").text("Colorectal Cancer");
        $("#common-content p").html("Colorectal cancer, also known as bowel cancer, colon cancer, or rectal cancer, is any cancer that affects the colon and the rectum.<br><input type='checkbox' class='read-more-state' id='post-1'><label for='post-1' class='read-more-trigger symp'></label><br><span class='read-more-target'><li>changes in bowel habits</li><li>diarrhea or constipation</li><li>a feeling that the bowel does not empty properly after a bowel movement</li><li>blood in feces that makes stools look black</li><li>bright red blood coming from the rectum</li><li>pain and bloating in the abdomen</li><li>a feeling of fullness in the abdomen, even after not eating for a while.</li><li>fatigue or tiredness</li><li>unexplained weight loss</li><li>a lump in the abdomen or the back passage felt by your doctor</li><li>unexplained iron deficiency in men, or in women after menopause</li></span>");   
    })
    
    $("#prostate").click(function(){
        $("#common-content h2").text("Prostate Cancer");
        $("#common-content p").html("Prostate cancer affects the prostate gland, the gland that produces some of the fluid in semen and plays a role in urine control in men.<br><input type='checkbox' class='read-more-state' id='post-1'><label for='post-1' class='read-more-trigger symp'></label><br><span class='read-more-target'><li>frequent urges to urinate, including at night</li><li>difficulty commencing and maintaining urination</li><li>blood in the urine</li><li>painful urination and, less commonly, ejaculation</li><li>difficulty achieving or maintaining an erection may be difficult</li><br>Advanced prostate cancer can involve the following symptoms:<br><li>bone pain, often in the spine, femur, pelvis, or ribs</li><li>bone fractures</li><br>If the cancer spreads to the spine and compresses the spinal cord, there may be:<br><li>leg weakness</li><li>urinary incontinence</li><li>fecal incontinence</li></span><br><br>");
    })
    
    $("#breast").click(function(){
        $("#common-content h2").text("Breast Cancer");
        $("#common-content p").html("Breast cancer is the most common invasive cancer in women, and the second main cause of cancer death in women, after lung cancer.<br><input type='checkbox' class='read-more-state' id='post-1'><label for='post-1' class='read-more-trigger symp'></label><br><span class='read-more-target'><li>a pain in the armpits or breast that does not change with the monthly cycle</li><li>pitting or redness of the skin of the breast, like the skin of an orange</li><li>a rash around or on one of the nipples</li><li>a discharge from a nipple, possibly containing blood</li><li>a sunken or inverted nipple</li><li>a change in the size or shape of the breast</li><li>peeling, flaking, or scaling of the skin on the breast or nipple</li></span><br><br>");
    })
    
    
    $(".green#one").click(function(){
        $(".small-container").html("<h2>Your Genetic Makeup</h2><p>If a particular type of cancer is common in your family, you may have been born with genetic mutations that put you at a higher risk of developing certain cancers.  <input type='checkbox' class='read-more-state' id='post-1'><label for='post-1' class='read-more-trigger'></label><span class='read-more-target'>Some cancers, like breast and colorectal cancer, tend to be hereditary. However, having an inherited genetic mutation doesn't mean that you will definitely get cancer later in life; approximately 5 to 10 per cent of all cancers are directly caused by inherited genetic mutations.<br><br><u>What can you do?</u><br><br>If you have a strong family history of cancer, discuss it with your doctor. Genetic testing might be useful to check if you have inherited genetic mutations that might increase your cancer risk. However, these tests are not recommended for everyone. Seek your doctor's advice.</span></p>")
    })
    $(".green#two").click(function(){
        $(".small-container").html("<h2>Smoking</h2><p>Tobacco smoke contains at least 69 carcinogens (cancer-causing agents). Smoking increases your risk of getting certain cancers such as lung and oral cancer, as well as cancers of the stomach, kidney and bladder. Any form of tobacco smoking is harmful to your health. Studies show that smoking just one to four cigarettes a day can lead to health problems.  <input type='checkbox' class='read-more-state' id='post-1'><label for='post-1' class='read-more-trigger'></label><span class='read-more-target'>Second-hand smoke is just as damaging to health. When a cigarette is lit, about 90 per cent of its smoke is released into the air and becomes second-hand smoke. Even if you don't smoke, breathing in another person's smoke can increase your risk of <b>lung cancer</b>.<br><br><u>What can you do?</u><br><br>Quit smoking. If quitting immediately sounds daunting, consider cutting down on the number of cigarettes you smoke daily. Cigarette smoke not only harms you but also increases the risk of <b>lung cancer</b> for your loved ones. Get professional help to quit or rope in your family and friends to support you.</span></p>")
    })
    
    $(".green#three").click(function(){
        $(".small-container").html("<h2>Sun and UV Exposure</h2><p>Although people associate a tanned complexion with good health, frequent direct exposure to ultraviolet (UV) radiation – either by being out in the sun or from artificial sources like a tanning bed – can damage your skin and increase your risk of getting skin cancer.<input type='checkbox' class='read-more-state' id='post-1'><label for='post-1' class='read-more-trigger'></label><span class='read-more-target'>A sunburn is your skin's response to excessive UV exposure. If you are fair-skinned, you are at a higher risk of skin cancer than someone with a darker skin tone. This is because fair skin has less melanin, a pigment that protects the skin from UV rays.<br>Singapore has one of the world's highest UV exposure rates. On days with little cloud cover, it is common for UV radiation in Singapore to reach very high to extreme levels between 11.00am and 3.00pm.<br><br><u>What can you do?</u><br><br>Prevent sunburns and avoid excessive sun exposure. Stay in the shade if possible. When out and about under the sun, use sunscreen with a sun protection factor (SPF) of at least 15 on exposed parts of your body. Wear a wide-brimmed hat and sunglasses that provide UV protection. If you're exposed to artificial sources of UV radiation at work, always follow the safety regulations.</span></p>")
    })
    
    $(".red#one").click(function(){
        $(".small-container").html("<h2>Radiation Exposure</h2><p>Every day, we are exposed to both natural and man-made forms of radiation. Radiation can also come from medical imaging procedures used for X-rays and CT scans. Excessive exposure to radiation can potentially cause cells in the body to undergo changes. This may increase your likelihood of developing cancer.<input type='checkbox' class='read-more-state' id='post-1'><label for='post-1' class='read-more-trigger'></label><span class='read-more-target'><br>Sometimes, an X-ray or CT scan is needed to help your doctor diagnose your medical condition. Radiation exposure from different sources can accumulate over time, but a one-off test is unlikely to increase your risk of cancer.<br><br><u>What can you do?</u><br><br>During these imaging tests, you can protect yourself from unnecessary radiation exposure by following safety measures such as using a lead apron. Share your concerns with your doctor.</span></p>")
    })
    
    $(".red#two").click(function(){
        $(".small-container").html("<h2>Previous Cancer Treatments</h2><p>Advances in cancer treatments like chemotherapy and radiotherapy have helped many people with cancer live longer. But they may also possibly increase your risk of another cancer in the future.<input type='checkbox' class='read-more-state' id='post-1'><label for='post-1' class='read-more-trigger'></label><span class='read-more-target'><br>However, this is rare and should not affect your decision to seek appropriate treatment. It is important to first treat the cancer you have. For some cancers, radiotherapy and chemotherapy may be the best treatment option.<br><br><u>What can you do?</u><br><br>Share your concerns with your doctor. If you have completed cancer treatment, follow-up care and rehabilitation is important.</span></p>")
    })

})
