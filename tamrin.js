function Comments(){
    this.data = [{
        id: '1',
        text: 'Great welcoming experience to the Dominican. We used Otium for the airport transport- we were to the resort in 20 minutes. Ralphy has been our concierge for the first half of the stay, he been very helpful- always able to pull through for anything we request',
        username: 'Jake W',
        imageurl: 'https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/9e/avatar069.jpg',
        date: 'January 2020',
        point: 11
    },
    {
        id: '2',
        text: 'We travelled as a group of 13 ages 18 to 80 and this resort was enjoyed by all. We’ve been fortunate to travel to many resorts in Punta Cana but the Grand was by far the best',
        username: 'Andrea C',
        imageurl: 'https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/55/avatar028.jpg',
        date: 'Jan 2020',
        point: 14
    },
    {
        id: '3',
        text: 'The Hotel opened 1-1,5 hs ago. Everything is new and very clean. Even the cheapest rooms are very spacious (77square meters and room and dinning area with sofa bed are diivided by a sliding door).',
        username: 'sergiogiaco',
        imageurl: 'https://media-cdn.tripadvisor.com/media/photo-l/01/2e/70/74/avatar056.jpg',
        date: 'Dec 2020',
        point: 11
    }];

    this.add = function(){

    }
}


function ElementBuilder(tagname){
    const element = document.createElement(tagname);


    this.text = function(input){
        element.innerText = input;
        return element;
    }

    this.appendTo = function(root){
        root.appendChild(element);
        return element;
    }

    this.build = function(){
        return element;
    }



}

function Painter(rootElement){
    const comment = new Comments();
    
    function getBuilder(tag){
        return new ElementBuilder(tag);
    }

    this.render = function(){

        getBuilder("div").text("HASAN").appendTo(rootElement).build();
        
    }
}



const root = document.getElementById('root');
const painter = new Painter(root);
painter.render();



