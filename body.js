const menstrualCycle = document.getElementById("Menstrual-Cycle")


menstrualCycle.addEventListener("mouseover", function(){
    menstrualCycle.innerHTML = `
    <p>
    Every month, a person with the capacity to become pregnant may experience a menstrual cycle, during which the lining of the uterus sheds and exits the body through the vagina. This process is commonly known as a “period.” When a person becomes pregnant, this shedding does not occur; instead, the body retains the uterine lining to support the developing pregnancy.
    If you suspect any irregularities in your period, whether or not you think you might be pregnant, it’s important to consult a medical professional.
    <br>
    Read more here:
    <br>
    <a href = "https://www.pregnancybirthbaby.org.au/periods-after-pregnancy#stop">The science</a>
    <br>
    <a href = "https://www.mayoclinic.org/healthy-lifestyle/getting-pregnant/in-depth/symptoms-of-pregnancy/art-20043853">Tips</a>
    </p>`
})

menstrualCycle.addEventListener("mouseout", function(){
    menstrualCycle.innerHTML = `<img src = "images/Menstrual-Cycle-img.png" width = "100px"><span>Menstrual Cycle</span>`
})

const constipation = document.getElementById("Constipation")

constipation.addEventListener("mouseover", function(){
    constipation.innerHTML = ` <p>
    Anatomic changes in the gastrointestinal tract leave those expecting at a higher risk of developing constipation due to rising progesterone levels (which relaxes smooth muscles throughout the body, including the digestive tract) and reduced motilin hormone levels (causing food to pass through the intestines slower). Research suggest an increase in dietary fibre and fluids as well as daily exercise. 
    <br>
    Read more here:
    <br>
    <a href = "https://pmc.ncbi.nlm.nih.gov/articles/PMC3418980/">The science</a>
    <br>
    <a href = "https://pmc.ncbi.nlm.nih.gov/articles/PMC3418980/">Tips</a>
    </p>`
})

constipation.addEventListener("mouseout",function(){
    constipation.innerHTML = `<img src="images/Constipation-img.png" width = "140px"><span>Constipation</span>`
})

const swelling = document.getElementById("Swelling")

swelling.addEventListener("mouseover", function(){
    swelling.innerHTML = ` <p>
    Swelling can occur when an expecting person’s body holds more water in their body’s tissues than normal. This occurs because the body is producing more blood and body fluids to meet the needs of the baby and the person. Changing hormones can also be a cause of retained fluid in the body. To help alleviate symptoms, doctors suggest sleeping with your legs elevated on pillows to reduce swelling. 
    <br>
    Read more here:
    <br>
    <a href = "https://www.pregnancybirthbaby.org.au/swelling-during-pregnancy">The science</a>
    <br>
    <a href = "https://www.unitypoint.org/news-and-articles/things-that-make-you-swell-when-youre-pregnant">Tips</a>
    </p>`
})

swelling.addEventListener("mouseout", function(){
    swelling.innerHTML = `<img src = "images/Swelling-img.png" width = "100px"><span>Swelling</span>`
})

const fatigue = document.getElementById("Fatigue")

fatigue.addEventListener("mouseover", function(){
    fatigue.innerHTML = ` <p>
    A sharp rise in the hormone progesterone, which prepares the uterus for pregnancy by thickening the uterine lining to make the womb ready for a fertilized egg to implant, is linked to fatigue. This sedative property can lead to drowsiness and diminish energy levels through influencing sleep. Doctors suggest consuming a greater amount of protein, eating frequent balanced meals, and checking in with your doctor to help with feelings of fatigue. 
    <br>
    Read more here:
    <br>
    <a href = "https://www.everlywell.com/blog/womens-health/does-progesterone-make-you-tired/?srsltid=AfmBOorKuc7eDka1qbbRfK1Z0aYnOZ_di7s5UUZA1-J3ZWYhj6OZPrYe">The science</a>
    <br>
    <a href = "https://blog.inito.com/does-progesterone-make-you-tired/">Tips</a>
    </p>`
})

fatigue.addEventListener("mouseout", function(){
    fatigue.innerHTML = ` <img src="images/Fatigue-img.png" width = "90px">Fatigue`
})

const dizziness = document.getElementById("Dizziness")

dizziness.addEventListener("mouseover", function(){
    dizziness.innerHTML = ` <p>
   Dizziness is most commonly experienced during the first trimester of pregnancy due to blood vessels relaxing and widening from rising hormones. Although the baby will receive a greater amount of blood flow, the person experiencing the pregnancy will receive a slower amount of blood to their veins causing their blood pressure to be lower than usual. A slower amount of blood flow to the brain is what is thought to cause dizziness during early stages of pregnancy.
    <br>
    Read more here:
    <br>
    <a href = "https://americanpregnancy.org/healthy-pregnancy/pregnancy-health-wellness/dizziness-during-pregnancy/">The science</a>
    <br>
    <a href = "https://www.medicalnewstoday.com/articles/dizziness-in-early-pregnancy#managing-dizziness">Tips</a>
    </p>`
})

dizziness.addEventListener("mouseout", function(){
    dizziness.innerHTML = `<img src="images/Dizziness-img.png" width = "140px"><span id = "dizziness-spacing">Dizziness</span>`
})

const nausea = document.getElementById("Nausea")

nausea.addEventListener("mouseover", function(){
    nausea.innerHTML = ` <p>
   Those expecting experience what is commonly known as “Morning sickness” when the fetus produces a hormone called “GDF15”. Professor Sir Stephen O’Rahilly, MD, co-director of the Wellcome-Medical Research Council Institute of Metabolic Science at the University of Cambridge has stated “Women who are more sensitive to the hormone get the sickest.” To help reduce nausea it is helpful to eat small frequent meals, avoid greasy foods, and drink carbonated beverages. 
    <br>
    Read more here:
    <br>
    <a href = "https://keck.usc.edu/news/researchers-identify-key-cause-of-pregnancy-sickness-and-a-potential-way-to-prevent-it/">The science</a>
    <br>
    <a href = "https://www.ucsfhealth.org/education/coping-with-common-discomforts-of-pregnancy">Prevention</a>
    </p>`
})

nausea.addEventListener("mouseout", function(){
    nausea.innerHTML = `<img src = "images/nausea-img.png" width = "120px"><span>Nausea</span>`
})