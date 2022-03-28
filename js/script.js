        /* Remaining Funds
            1. user enters number into field
            2. user presses add funds button
                a. add input to global var for remaining funds 
                b. update total to user
                c. clear form field
            3. if price is less than/equal remFunds, add to total and subtract from remFunds
                a. if price is higher, show alert
        */

        /* Subtotal
            1. create variable to keep track of total
            2. get price of item when user clicks on img
            3. update total variable
            3. display new total to user
        */
            let price = 0;
            let total = 0;
            
            // Get the price of the Hoodie
            function getPriceHoodie() {
                let item = document.getElementById('hoodiePic');
                price = parseFloat(item.getAttribute('data-price'));
                total = total + price;
                document.getElementById('subtotal').innerHTML = total.toFixed();;
            }

            // Get the price of the Baseball Cap
            function getPriceCap() {
                let item = document.getElementById('capPic');
                price = parseFloat(item.getAttribute('data-price'));
                total = total + price;
                document.getElementById('subtotal').innerHTML = total.toFixed();;
            }

            //Get the price of the T-shirt
            function getPriceTee() {
                let item = document.getElementById('teePic');
                price = parseFloat(item.getAttribute('data-price'));
                total = total + price;
                document.getElementById('subtotal').innerHTML = total.toFixed();;
            }

            //Get the price of the Bottle
            function getPriceBottle() {
                let item = document.getElementById('bottlePic');
                price = parseFloat(item.getAttribute('data-price'));
                total = total + price;
                document.getElementById('subtotal').innerHTML = total.toFixed();;
            }

            //Get the price of the Tote Bag
            function getPriceToteBag() {
                let item = document.getElementById('toteBagPic');
                price = parseFloat(item.getAttribute('data-price'));
                total = total + price;
                document.getElementById('subtotal').innerHTML = total.toFixed();;
            }
            function getPriceStickers() {
                let item = document.getElementById('stickersPic');
                price = parseFloat(item.getAttribute('data-price'));
                total = total + price;
                document.getElementById('subtotal').innerHTML = total.toFixed();;
            }