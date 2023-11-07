const news1 = {
    title: "Karaganda was flooded",
    content: "According to the mayor, all the shower receivers in the city are in working condition. And the flooding of the streets occurred due to a volley of rain and foliage, which clogged into the lattice covers of some shower channels.",
    image: "https://novoetv.kz/wp-content/uploads/2022/04/%D0%B7%D0%B0%D1%82%D0%BE%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F.jpg",
    readMoreLink: "C:\Users\lualv\OneDrive\Рабочий стол\project2\read1.html"
};

const news2 = {
    title: "The Indian art market is booming: Will New Delhi become a global auction capital?",
    content: "Following record-breaking sales of pieces by Amrita Sher-Gil and Sayed Haider Raza, Indian art is benefitting from a soaring auction market, more museums and commercial galleries, and global recognition",
    image: "https://mf.b37mrtl.ru/files/2023.09/xxl/651591b385f5405c3d12938e.jpg",
    readMoreLink: "C:\Users\lualv\OneDrive\Рабочий стол\project2\page2.html"
};


 const article1 =    {
        id: 'article1',
        image: 'https://mf.b37mrtl.ru/files/2023.10/l/651f4eee20302724a75cf54c.jpg',
        title: 'EU parliament backs sanctions against Azerbaijan',
        content: 'The European Parliament on Thursday adopted a resolution calling for sanctions on Azerbaijan’s political and military leadership, citing the “ethnic cleansing” of Armenians in Nagorno Karabakh.'
    };
 const article2 = {
        id: 'article2',
        image: 'https://mf.b37mrtl.ru/files/2023.10/l/651ece3f85f5405ce911e1a3.jpg',
        title: 'Ivan Timofeev: China is preparing to make itself immune from inevitable US sanctions',
        content: 'The deterioration of US-China relations has long been a trend. Contradictions on specific issues (e.g., human rights) were even evident during the boom in trade between the two countries in the 1990s and 2000s.'
    };
  const article3 =   {
        id: 'article3',
        image: 'https://mf.b37mrtl.ru/files/2023.10/l/651f2f8b85f5405ce911e1c8.jpg',
        title: 'The Russian president believes equality, universal justice and security for all are keystones in any stable system',
        content: 'Russian President Vladimir Putin has named six key principles that international relations should be built upon. The president made the remarks on Thursday as he spoke at the Valdai International Discussion Club in Sochi.'
    }

    function fadein() {
        let img = document.getElementById("img");
        img.style.opacity = "0.5"; 
      }
      
    function fadeout() {
        let img = document.getElementById("img");
        img.style.opacity = "1"; 
      }
      function fadein2() {
        let img = document.getElementById("img2");
        img.style.opacity = "0.5"; 
      }
      
    function fadeout2() {
        let img = document.getElementById("img2");
        img.style.opacity = "1"; 
      }


      $(document).ready(function() {
        $(document).on("keypress", function(event) {
            if (event.key === "Escape") {
                window.location.href = "home.html";
            }
        });
    });


    