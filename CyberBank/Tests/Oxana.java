// var votes = ["mike","alex", "mark","mark", "mike"];
// votes.sort();
// console.log(votes);
// var count = 0;



// for (var i=0; i<=votes.length-1; i++ ) {
//     for (var j=0; j<=votes.length-1; j++ ) {
//         if (votes[i]==votes[j]) {
//             count ++;

//         }
//     }
//     console.log(votes[i]+" = "+ count);
//     count = 0;
// }



// int[] a = {1,2,3,4,4,1,1};

// Map<Integer, Integer> hm = new HashMap<Integer, Integer>();
//                for (int i=0; i<a.length; i++) {
//                        if (hm.containsKey(a[i])) {
//                                int counter = hm.get(a[i]);
//                                hm.put(a[i], counter+1);
//                        } else {
//                                hm.put(a[i], 1);
//                        }
//                }
//                System.out.println(hm);


public static String findWinner(String[] votes) {
        Set<String> empty = new HashSet<String>();
        Map<String,Integer>mymap = new HashMap<String,Integer>();
        int maxVotes = 0;
        String finalName = "";
        for (int j=0;j<votes.length;j++) {
            if(empty.contains(votes[j])) {
                continue;
            }else {
                
            String name = votes[j];
              int counter = 0;
              empty.add(name);
               for (int i=0;i<votes.length;i++) {
                 if(name == votes[i]) {
                   counter++;
               }
              
         }
              
               mymap.put(name, counter);
              
               for(Map.Entry<String, Integer> x : mymap.entrySet()) {
                   if(x.getValue()>maxVotes) {
                       maxVotes = x.getValue();
                       finalName = x.getKey();
                   }else if(x.getValue()==maxVotes) {
                       if((x.getKey().compareTo(finalName))<0) {
                           finalName = x.getKey();
                       }
                   }
               }
            }
        }
        return finalName;    
    
       }