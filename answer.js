var longestConsecutive = function(nums) {
    
    //We will use a set.
    //Why? Mainly to gain acces to set.has(), which has time complexity O(1) instead of array.includes(), which is O(n).
    //Ok, but what abou the time to setup the set from an array? Won't that be O(n) on its own?
    ////Does use iteration, but this isn't nested, so if the rest of our solution is O(n) we get O(n+n) => O(2n) =>  O(n)
    let numSet = new Set(nums);

    //Highest value
    let count = 0;

    //We are using for Each -> O(n), how can we have loop inside?
    //Our while loop ONLY runs when we start a new sequence.
    //Since we only run the while loop on STARTS, we will never run it more than N times total.
    ////Because of this, we run only n times maximum. -> O(n + n) = O(2n) = O(n)
    numSet.forEach((val)=>{

        //Does this value START a sequence?
        if(!numSet.has(val-1)){
            let currNum = val;
            let currStreak = 1;

            //As long as there are additional consecutive values, icrement the number we are looking for, and current streak.
            while (numSet.has(currNum + 1)) {
                currNum++;
                currStreak++;
            }

            //Once we are done looking for values, is this sequence bigger than what we've found before?
            //If yes update biggest streak.
            if(currStreak > count){
                count = currStreak;
            }
        }
    })
    return count;

};
