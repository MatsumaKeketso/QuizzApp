import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { QuizzAreaPage } from '../quizz-area/quizz-area';
import { TotalProvider } from '../../providers/total/total';
import {QuestionsModel} from '../../providers/model/QuestionsModel';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  title = 'THE QUIZZZ APP';
  QuizzData: Array<QuestionsModel> = [
    // Genearal Knowledge = 0
    {
      categoryName: "General Knowledge",
      questions: [
        {
          question: "What is the dot in the letter `i` called?",
          options: [
            { option: "Dot", correct: false },
            { option: "Head", correct: false },
            { option: "A little", correct: true }, // correct
            { option: "The title", correct: false }
          ]
        },
        {
          question: "Chronophobia is the fear of what?",
          options: [
            { option: "Time", correct: true },
            { option: "Animals", correct: false },
            { option: "Food" , correct: false},
            { option: "Cats", correct: false }
          ]
        },
        {
          question: "From the Marvel Comics, name the Fantasic Four.",
          options: [
            { option: "Panther, Wonder Woman, Iron Man, Bubblegum Man", correct: false },
            { option: "Mr Stretch, Sexy Woman, Hot Guy, Rock man", correct: false },
            { option: "Mr Genious, Mrs Mr Genious, Astroid Man, Sun God", correct: false },
            { option: "Mr Fantastic, Invisible Woman, Human Torch, Thing", correct: true } // correct
          ]
        },
        {
          question: "In a hospital, what does the initials ENT stand for?",
          options: [
            { option: "Ear, Nose & Throat", correct: true }, // correct
            { option: "Emergency Do not Traspass", correct: false },
            { option: "Emergency NT", correct: false },
            { option: "Entrance", correct: false }
          ]
        },
        {
          question:
            "Bramley, Granny Smith and Russet are all types of which fruit?",
          options: [
            { option: "Bananan", correct: false },
            { option: "Sharon", correct: false },
            { option: "Apple", correct: true }, // correct
            { option: "Strawbery", correct: false }
          ]
        }
      ]
    },
    // Geography = 1
    {
      categoryName: "Geography",
      questions: [
        {
          question:"Which city is the only city in the world to be located on two separate continents?",
          options: [
            { option: "Istanbul, Turkey", correct: true }, // correct
            { option: "Paris", correct: false },
            { option: "Zambia", correct: false },
            { option: "Egypt", correct: false }
          ]
        },
        {
          question: "Which is NOT part of South Africa’s biome?",
          options: [
            { option: "Desserts", correct: true }, // correct
            { option: "Grasslands", correct: false },
            { option: "Succulent Karoo", correct: false },
            { option: "Nama Karoo", correct: false }
          ]
        },
        {
          question: "South Africa has more than 290 conservation parks.",
          options: [
            { option: "True", correct: true }, // true
            { option: "False", correct: false },
            { option: "True", correct: true },
            { option: "False", correct: false }
          ]
        },
        {
          question: "The Dead Sea is currently _____ below sea level and sinking about 1 meter a year.",
          options: [
            { option: "1.5 miles", correct: false },
            { option: "429 meters", correct: true }, // correct
            { option: "260 km", correct: false },
            { option: "47 meters", correct: false }
          ]
        },
        {
          question:
            "South Africa occupies the most southern tip of Africa with its long coastline stretching more 	than...from the desert border.",
          options: [
            { option: "3 000 km", correct: true }, // correct
            { option: "7 miles", correct: false },
            { option: "600m", correct: false },
            { option: "400 meters", correct: false }
          ]
        }
      ]
    },
    // Movies/Film = 2
    {
      categoryName: "Movies/Film",
      questions: [
        // Q 1
        {
          question:
            "Robert Downey Jr. stars in which 2019 film that sees the allies work together to fix the problems caused by Thanos?",
          options: [
            { option: "Avengers: Endgame", correct: true }, // correct
            { option: "Hollyhock", correct: false },
            { option: "Iron Man", correct: false },
            { option: "Spider Man", correct: false }
          ]
        },
        // Q 2
        {
          question:
            "Directed by Guy Ritchie, who plays the Genie in the 2019 adaptation of Aladdin?",
          options: [
            { option: "Will Smith", correct: true },
            { option: "Arnold", correct: false },
            { option: "Timmy", correct: false },
            { option: "Puleng", correct: false }
          ]
        },
        // Q 3
        {
          question:
            'Joe Pesci stars as "Harry" and Daniel Stern is "Marv" in which 1990 Christmas comedy caper produced by John Hughes?',
          options: [
            { option: "Home Alone", correct: true },
            { option: "Christmas Carrol", correct: false },
            { option: "The big Christmas", correct: false },
            { option: "Hollyhock", correct: false }
          ]
        },
        // Q 4
        {
          question:
            "Jason Statham plays rescuer Jonas Taylor in which 2018 sci-fi film?",
          options: [
            { option: "The Meg", correct: true },
            { option: "Titanic", correct: false },
            { option: "Ant Man", correct: false },
            { option: "Spectra", correct: false }
          ]
        },
        // Q 5
        {
          question:
            "Sandra Bullock, Cate Blanchett, Anne Hathaway, Mindy Kaling, Sarah Paulson, Awkwafina, Rihanna, and Helena Bonham Carter will all star in an all-female spin off of which Steven Soderbergh trilogy?",
          options: [
            { option: "Oceans Trilogy (Oceans 8)", correct: true },
            { option: "The Hobbit", correct: false },
            { option: "Before Midnight", correct: false },
            { option: "The Matrix", correct: false }
          ]
        }
      ]
    },
    // Sports = 3
    {
      categoryName: "Sports",
      questions: [
        // Q 1
        {
          question: "Which was the first car to have a turbo charged engine?",
          options: [
            { option: "Lamborghini", correct: false},
            { option: "The Porsche 911", correct: true }, //correct
            { option: "Rolls Royce", correct: false },
            { option: "Toyota Tazz", correct: false }
          ]
        },
        // Q 2
        {
          question:
            "Since 1996 the sport has been growing quickly and especially amongst the indigenous communities. Which is this sport?",
          options: [
            { option: "Tennis", correct: false },
            { option: "Basketball", correct: false },
            { option: "Australian rules football", correct: true }, // correct
            { option: "Baseball", correct: false }
          ]
        },
        // Q 3
        {
          question:
            "Which games does the  MSSA (Mind Sports South Africa) look after?",
          options: [
            { option: "Board gaming, Figure gaming, eSports, Morabaraba" , correct: true }, //correct
            { option: "Video Games, Bathi, Tennis, Skiing", correct: false },
            { option: "Hicking, Golf, Rugby, Sky Diving" , correct: false},
            { option: "Birdwatching, Flu catching" , correct: false}
          ]
        },
        // Q 4
        {
          question:
            "___is the national governing body for the sport of sailing in South Africa.",
          options: [
            { option: "Sailing Sport of South Africa" , correct: false},
            { option: "South Africa’s Body for Sailing", correct: false },
            { option: "Sailike a Pro SA" , correct: false},
            { option: "South African Sailing" , correct: true} // correct
          ]
        },
        // Q 5
        {
          question:
            "South Africas national sporting colours are green, gold and ...",
          options: [
            { option: "yellow" , correct: false},
            { option: "black" , correct: false},
            { option: "white" , correct: true}, // correct
            { option: "a little purple", correct: false }
          ]
        }
      ]
    },
    // Technology = 4
    {
      categoryName: "Technology",
      questions: [
        // Q 1
        {
          question: "In terms of computing, what does CPU stand for?",
          options: [
            { option: "Central Population Union" , correct: false},
            { option: "Commerce Productive Enviroment" , correct: false},
            { option: "Central Processing Unit" , correct: true}, //correct
            { option: "Component Processing Unit", correct: false }
          ]
        },
        // Q 2
        {
          question:
            "Is the wavelength of infrared light too long or short to be seen by humans?",
          options: [
            { option: "Long" , correct: true}, // correct
            { option: "Short", correct: false },
            { option: "Long" , correct: true}, // correct
            { option: "Short", correct: false }
          ]
        },
        // Q 3
        {
          question: "True or false? Atomic bombs work by atomic fission.",
          options: [
            { option: "True" , correct: true}, //correct
            { option: "False" , correct: false},
            { option: "True" , correct: true}, // correct
            { option: "False", correct: false }
          ]
        },
        // Q 4
        {
          question: "Along with whom did Bill Gates found Microsoft?",
          options: [
            { option: "Paul Allen" , correct: true}, // correct
            { option: "Isaac Newton" , correct: false},
            { option: "Paul Rebert" , correct: false},
            { option: "Brown Robertson", correct: false }
          ]
        },
        // Q 5
        {
          question: "What does the abbreviation WWW stand for?",
          options: [
            { option: "Worldwatch Winston" , correct: false},
            { option: "Worldtourism Wildlife Foundation" , correct: false},
            { option: "World Wide Web" , correct: true}, // correct
            { option: "Wild West Wires" , correct: false}
          ]
        }
      ]
    },
    // Web Development = 5
    {
      categoryName: "Web Development",
      questions: [
        // Q 1
        {
          question:
            "___is the current standard language used to create Web pages.",
          options: [
            { option: "HTML" , correct: true},
            { option: "DHTML" , correct: false},
            { option: "XHTML", correct: false },
            { option: "XML" , correct: false}
          ]
        },
        // Q 2
        {
          question: "The ____ tool is used for panning.",
          options: [
            { option: "Hand" , correct: true},
            { option: "Zoom" , correct: false},
            { option: "Select" , correct: false},
            { option: "Edit" , correct: false}
          ]
        },
        // Q 3
        {
          question:
            ". ____ view shows the underlying HTML code for the page, but not how it will look on a browser.",
          options: [
            { option: "Code and Design" , correct: false},
            { option: "Code", correct: true },
            { option: "Debugging" , correct: false},
            { option: "Design" , correct: false}
          ]
        },
        // Q 4
        {
          question:
            "The ____ content of a Web page contains information used by search engines to help viewers find your Web site.",
          options: [
            { option: "body" , correct: false},
            { option: "html", correct: false },
            { option: "head", correct: false },
            { option: "meta data" , correct: true}
          ]
        },
        // Q 5
        {
          question:
            "In HTML what tag can be used for a multi-line text input control?",
          options: [
            { option: "h1" , correct: false},
            { option: "multi-text" , correct: false},
            { option: "textarrea", correct: true },
            { option: "h6" , correct: false}
          ]
        }
      ]
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, private totalProv: TotalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  toPage2(questions, category){
    // send the category data to provider
    this.totalProv.setData(questions);
    // send the quiz title to next page
    this.navCtrl.push(QuizzAreaPage, category)
  }
  goBack(){
    this.navCtrl.push(HomePage);
  }
}
