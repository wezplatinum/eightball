//wjf product

import * as readline from 'readline';
import chalk from 'chalk';
import figlet from 'figlet';

const magicEightBall = async () => {
  try {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    // Function to display a styled and animated Magic Eight Ball
    const displayMagicEightBall = async () => {
      console.clear();
      console.log(chalk.red(figlet.textSync('Jixen', { horizontalLayout: 'full' })));
      console.log(chalk.green('Ask your question and find your destiny...\n'));
    };

    // Function to delay the response
    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Custom function to generate responses for "how" questions
    const generateHowResponse = (question) => {
      // Check if the question contains specific keywords
      if (
        question.toLowerCase().includes('how') &&
        (question.toLowerCase().includes('with') || question.toLowerCase().includes('long')) && question.toLowerCase().includes('marry')
      ) {
        // Generate a random number for demonstration purposes
        const randomNumber = Math.floor(Math.random() * 1000);
        return `It will take you ${randomNumber} years to achieve that.`;
      }
      // If the question doesn't match the criteria, return undefined
      return undefined;
    };

    // Custom function to generate responses for marriage questions
    const generateMarriageResponse = (question) => {
      // Check if the question contains specific keywords
      if (
        question.toLowerCase().includes('with whom') ||
        question.toLowerCase().includes('who will i be married') ||
        question.toLowerCase().includes('who shall i be married') ||
        question.toLowerCase().includes('who will be in my future') ||
        question.toLowerCase().includes('who will i marry') ||
        question.toLowerCase().includes('who will i spend my life with')
      ) {
        // Generate a random response for demonstration purposes
        const responses = [
          'You will be married with Humpty Dumpty.',
          'I can see that you will not be married.',
          'The future is uncertain. Only time will tell.',
          'You will be married with Pikachu.',
          'I foresee a marriage with Captain Jack Sparrow.',
          'Your future spouse will be none other than Sherlock Holmes.',
          'You will tie the knot with Wonder Woman.',
          'Sorry, but marrying Batman is out of the question.',
          'You will have a fairy tale wedding with Cinderella.',
          'Your soulmate is the one and only Harry Potter.',
          'You will find love and marry Iron Man.',
          'You will not marry your girlfriend.',
          'You will not marry your ex.',
          'You will not marry your crush.',
          'You will not marry your boyfriend.',
          'You won\'t be married to them.',
          'Your future spouse will be a unicorn. They do exist!',
          'Marriage? You will elope with Bigfoot!',
          'I see a whirlwind romance with Captain America.',
          'You are destined to marry the incredible Hulk.',
          'Your perfect match is none other than Spider-Man.',
          'Sorry, marriage is not in the cards. You will be a professional cat lady.',
          'Your future spouse will be a celebrity. I sense Justin Bieber!',
          'The universe has spoken, and you will marry... a robot! Beep boop!',
          'You will marry your girlfriend.',
          'You will marry your ex.',
          'You will marry your crush.',
          'You will marry your boyfriend.',
          'You won\'t be married to them.'
        ];
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
      }
      // If the question doesn't match the criteria, return undefined
      return undefined;
    };

    // Custom function to generate food recommendations
    const generateFoodResponse = (question) => {
      // Check if the question starts with "what"
      if (question.toLowerCase().startsWith('what')) {
        // Generate random food and beverage recommendations
        const foods = [
          { name: 'sushi', beverage: 'green tea' },
          { name: 'pizza', beverage: 'cola' },
          { name: 'salad', beverage: 'water' },
          { name: 'burger', beverage: 'milkshake' },
          { name: 'pasta', beverage: 'red wine' },
          { name: 'tacos', beverage: 'margarita' },
          { name: 'ramen', beverage: 'sake' },
          { name: 'steak', beverage: 'whiskey' },
          { name: 'fried chicken', beverage: 'beer' },
          { name: 'sushi burrito', beverage: 'iced tea' },
          { name: 'curry', beverage: 'lassi' },
          { name: 'poke bowl', beverage: 'coconut water' },
          { name: 'lobster', beverage: 'champagne' },
          { name: 'sandwich', beverage: 'lemonade' },
          { name: 'burrito', beverage: 'horchata' },
          { name: 'noodles', beverage: 'jasmine tea' },
          { name: 'barbecue ribs', beverage: 'root beer' },
          { name: 'fried rice', beverage: 'soju' },
          { name: 'fish and chips', beverage: 'cider' },
          { name: 'taco salad', beverage: 'tequila sunrise' },
          { name: 'lasagna', beverage: 'merlot' },
          { name: 'shawarma', beverage: 'ayran' },
          { name: 'pancakes', beverage: 'orange juice' },
          { name: 'sushi rolls', beverage: 'sake bomb' },
          { name: 'pad thai', beverage: 'Thai iced tea' },
          { name: 'lobster roll', beverage: 'sparkling water' },
          { name: 'caesar salad', beverage: 'iced coffee' },
          { name: 'hot dog', beverage: 'root beer float' },
          { name: 'ramen burger', beverage: 'matcha latte' },
          { name: 'fried calamari', beverage: 'mojito' },
          // Add more food options here
        ];
    
        const randomIndex = Math.floor(Math.random() * foods.length);
        const randomFood = foods[randomIndex];
    
        const beverages = [
          'water',
          'cola',
          'milkshake',
          'green tea',
          'red wine',
          'margarita',
          'sake',
          'whiskey',
          'beer',
          'iced tea',
          'lassi',
          'coconut water',
          'champagne',
          'lemonade',
          'horchata',
          'jasmine tea',
          'root beer',
          'soju',
          'cider',
          'tequila sunrise',
          'merlot',
          'ayran',
          'orange juice',
          'sake bomb',
          'Thai iced tea',
          'sparkling water',
          'iced coffee',
          'root beer float',
          'matcha latte',
          'mojito',
          // Add more beverage options here
        ];
    
        const randomBeverageIndex = Math.floor(Math.random() * beverages.length);
        const randomBeverage = beverages[randomBeverageIndex];
    
        let message = '';

        // Randomly select a response phrase
        const responsePhrases = [
          `How about some ${randomFood.name} with ${randomBeverage}?`,
          `Enjoy your meal of ${randomFood.name} paired with ${randomBeverage}.`,
          `Indulge in a delicious combination of ${randomFood.name} and ${randomBeverage}.`,
          `Savor the flavors of ${randomFood.name} accompanied by ${randomBeverage}.`,
          `Treat yourself to a delightful feast of ${randomFood.name} and ${randomBeverage}.`,
          `Experience culinary bliss with ${randomFood.name} complemented by ${randomBeverage}.`,
          `Take a culinary adventure with ${randomFood.name} and enjoy a refreshing ${randomBeverage}.`,
          `Delight your taste buds with a pairing of ${randomFood.name} and a refreshing ${randomBeverage}.`,
          `Satisfy your cravings with ${randomFood.name} and quench your thirst with ${randomBeverage}.`,
          `Relish the combination of ${randomFood.name} and a refreshing ${randomBeverage} to tantalize your palate.`
        ];

        const randomPhraseIndex = Math.floor(Math.random() * responsePhrases.length);
        message = responsePhrases[randomPhraseIndex];

        // Randomly include the "Stay hydrated" message
        const shouldIncludeHydrationMessage = Math.random() < 0.5; // 50% chance
        if (shouldIncludeHydrationMessage) {
          message += ' Don\'t forget to stay hydrated!';
        }

        return message;
      }
        // If the question doesn't match the criteria, return undefined
      return undefined;
    };
        

        // Custom function to generate conversation responses
        const generateConversationResponse = (question) => {
        const questionLowerCase = question.toLowerCase();

        // Check if the question is a conversation starter
        if (questionLowerCase.includes('hello') || questionLowerCase.includes('hi')) {
          return 'Hello! How can I help you today?';
        }

        // Check if the question is a conversation continuation
        if (questionLowerCase.includes('thank') || questionLowerCase.includes('bye')) {
          return 'You\'re welcome! Feel free to ask more questions anytime.';
        }

        // If the question doesn't match the criteria, return undefined
        return undefined;
      };

    let continueAsking = true;

    // Main loop to handle the user interaction
    while (continueAsking) {
      await displayMagicEightBall();

      // Ask the user for their question
      const userQuestion = await new Promise((resolve, reject) => {
        rl.question(chalk.blue('What is your question? '), (answer) => {
          if (answer.trim() === '') {
            reject(new Error(chalk.red('Question cannot be empty.')));
          } else {
            resolve(answer);
          }
        });
      });

      // Define an array of suspenseful phrases
      const suspensePhrases = [
        'Hmmm... let me consult the mystical oracle.',
        'Hold on tight! The answer will soon be revealed.',
        'The secrets of the universe are being unlocked...',
        'Time slows down as Jixen ponders the question.',
        'Intriguing... Jixen is diving deep into the unknown.',
        'The gears of knowledge are turning, ready to present the answer.',
        'A moment of anticipation... Jixen is about to reveal the truth.',
        'Shhh... listen closely, for the whispers of wisdom are near.',
        'The cosmos holds the answer, and Jixen shall uncover it.',
        'Prepare yourself, for the answer is on the horizon.',
        'Jixen is thinking...'
      ];

      // Choose a random suspense phrase, excluding "Jixen is thinking..."
      const randomSuspensePhrase = suspensePhrases[Math.floor(Math.random() * (suspensePhrases.length - 1))];

      console.log(chalk.yellow(`\n${randomSuspensePhrase}\n`));

      await delay(2000);


      // Check if the question matches the criteria for a "how" question
      const customResponse = generateHowResponse(userQuestion) || generateMarriageResponse(userQuestion) || generateFoodResponse(userQuestion) || generateConversationResponse(userQuestion);

      if (customResponse) {
        console.log(chalk.black(`Jixen: ${customResponse}\n`));
      } else {
        const randomIndex = Math.floor(Math.random() * responses.length);
      console.log(chalk.black(`Jixen: ${responses[randomIndex]}\n`));
      }

      // Ask the user if they want to ask another question
      let validAnswer = false;
      while (!validAnswer) {
        const answer = await new Promise((resolve) => {
          rl.question(chalk.red('Do you want to ask another question or exit? (y/n/exit) '), (response) => {
            resolve(response.trim().toLowerCase());
          });
        });

        if (answer === 'n') {
          console.log(chalk.green(`\nThank you for playing with the Magic Eight Ball!`));
          validAnswer = true;
          continueAsking = false;
        } else if (answer === 'y') {
          validAnswer = true;
        } else if (answer === 'exit') {
          console.log(chalk.green(`\nGoodbye! Thank you for chatting with me. Have a great day!`));
          validAnswer = true;
          continueAsking = false;
        } else {
          console.log(chalk.red('Invalid response. Please enter "y" to ask another question, "n" to exit, or "exit" to stop the conversation.'));
        }
      }
    }
    
    rl.close();
  } catch (err) {
    console.error(chalk.red('An error occurred:', err.message));
    magicEightBall();
  }
};

magicEightBall();
