function calculate() {
                chi = '';
                myname = document.getElementById("fname").value;
                month = parseInt(document.getElementById("month").value);
                date = parseInt(document.getElementById("date").value);
                year = parseInt(document.getElementById("year").value);

                if (isNaN(year) || isNaN(month) || isNaN(date)) {
                    document.getElementById("chinese").innerHTML = "Please enter valid birth year, month, and date.";
                    return;
                }

                const zodiacSigns = [
                    "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
                    "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
                ];

                // The Chinese zodiac cycle starts from the year 1900 (Rat)
                const startIndex = 1900;
                const index = (year - startIndex) % 12;
                chi = zodiacSigns[index < 0 ? index + 12 : index];

                document.getElementById("nameout").innerHTML = myname;
                document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
            }