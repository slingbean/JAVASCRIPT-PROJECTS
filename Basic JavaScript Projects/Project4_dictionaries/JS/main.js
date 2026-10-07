//This dictionary contains Japanese philosophies and practices as key-value pairs
var JapanesePhilosophy = {
    WabiSabi: "The appreciation of beauty in imperfection, impermanence, and simplicity.",
    ikigai: "A sense of purpose or what makes life feel meaningful.",
    shinrinYoku: "The practice of spending mindful time in nature, often called forest bathing.",
    kaizen: "The practice of making continuous, incremental improvements.",
    kintsugi: "The practice of repairing broken pottery while embracing the marks of its history.",
    omoiyari: "The practice of considering and showing care for the feelings of others.",
    mottainai: "An attitude of valuing resources and avoiding unnecessary waste."
};

//This function displays a dictioinary value on the webpage
function dictionary() {
    //stores the wabi-sabi definition before deleting the key
    var meaning = JapanesePhilosophy.WabiSabi;
    //deletes the wabisabi key from the dictionary
    delete JapanesePhilosophy.WabiSabi;
    //displays the stored definition on the webpage
    document.getElementById("Dictionary").innerHTML = meaning;
}
