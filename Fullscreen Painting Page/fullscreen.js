function viewWithBackground(){
  var bB = document.getElementById('bgButton');
  bB.innerText = "View Main Painting";
  document.getElementById("painting").style.transform = 'scale(0.5)';
  bB.removeEventListener('click',viewWithBackground);
  bB.addEventListener('click',viewMainPainting);
}
//need to match paintings with their background versions
function viewMainPainting(){
  var bB = document.getElementById('bgButton');
  bB.innerText = "View Background";
  document.getElementById("painting").style.transform = 'scale(1)';
  bB.removeEventListener('click',viewMainPainting);
  bB.addEventListener('click',viewWithBackground);
}
function viewDescription(){
  var dB = document.getElementById('descButton');
  document.getElementById('a-4-icon-top').style.opacity = '100%';
  dB.innerText = "Hide Description";
  dB.removeEventListener('click',viewDescription);
  dB.addEventListener('click',hideDescription);
}
function hideDescription(){
  var dB = document.getElementById('descButton');
  document.getElementById('a-4-icon-top').style.opacity = '0%';
  dB.innerText = "View Description";
  dB.removeEventListener('click',hideDescription);
  dB.addEventListener('click',viewDescription);
}
function setPainting(){ //read the url to find the specific painting
  const params = new URL(document.location.toString()).searchParams;
  var urlGroupParam = params.get("group").toLowerCase();
  var urlIdParam = params.get("id").toLowerCase();
  // console.log(urlGroupParam);
  // console.log(urlIdParam);
  //search for the background version and the backgroundless version
  //Defaults
    //Things that will need to change:
  // Painting Title, Description Composition, Description Dimensions, Actual Descripton, Painting Family, Painting Size
  var paintingTitle = "Painting Title";
  var family = "Part I : The Human Family Tree (Christians)";
  var paintingSrc = "./public/1a-4@2x.png";
  var paintingDescription = "";
  if (urlGroupParam && !urlIdParam){
    //use the first painting for group IMPORTANT
    if (urlGroupParam === 'christians' || urlGroupParam === 'jews') urlIdParam = "1a";
  }else if (urlGroupParam && urlIdParam){
    const filenames = {
      "jews" : {"10_a":["10_a. Kea’lani Pretending to Drive Mommy’s Audi on her Third Birthday, Mountain View, CA March 25, 2014 (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"10_b":["10_b. Yetta with High School Diploma in Hand (Jews - Ray Pestrong)_cropped.jpg"],
"10_c":["10_c. Irene Sunning Herself On the Garden Walk on a Summer Day on 58th Street in Brooklyn, 1947 (Jews - Irving Sacks)_cropped.jpg"],
"10_d":["10_d. Summer in Provence, Fleur in her Twentys, France (Jews - Marc and Fleur Attia)_cropped.jpg"],
"10a":["10a. Zephyr Kai and Kea’lani Zaire in San Francisco’s Botanical Gardens May 12, 2013 (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"10b":["10b. Ray’s View of the Neighbor’s Back Yard from his Apartment Where He Grew Up CU (Jews - Ray Pestrong)_cropped.jpg"],
"10c":["10c. Reva outside our home enjoying the aftermath of  a winter snow fall  (Afternoon) (Jews - Irving Sacks)_cropped.jpg"],
"10d":["10d. Hockey in Our Backyard for Jonas, Ethan, and Raphael,Lyon, France 2009 (Jews - Marc and Fleur Attia)_cropped.jpg"],
"11":["11. Holy City Jonas, Raphael, and Ethan in Jerusalem, Israel December 2011 (Jews - Marc and Fleur Attia)_cropped.jpg"],
"12":["12. Danny Reading from the Tora at His Bar Mitzvah (Jews - Marc and Fleur Attia)_cropped.jpg"],
"13":["13. Yael as a Queen of the Night for Purim-CU (Jews - Family of focus)_cropped.jpg"],
"14":["14. Susanna Holding Kea’lani Zaire, Sausalito, CA February 23rd, 2014 (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"15":["15. John Plays with Berry, Jack, and Esme the Pugs in Our Apartment in San Francisco August 2018 (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"16":["16. Chema Israel, Raphael’s Bar Mitsvah, Marseille, France May 2016 (Jews - Marc and Fleur Attia)_cropped.jpg"],
"17":["17. KK Radiating the Sunlight of the Spirit NEF (Jews - Family of focus)_cropped.jpg"],
"18":["18. Irene and Irving Dancing at Their Wedding, Feb. 8, 1948 (Jews - Irving Sacks)_cropped.jpg"],
"19":["19. Rockets of Desire Paying Off for Ray (Jews -  Ray Pestrong)_cropped.jpg"],
"1a":["1a. Zephyr Kai and Kea’lani Zaire Walking by the Beach, Probably Pacifica May 3rd, 2014 (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"1b":["1b. Ray’s Imaginary Backyard (Jews - Ray Pestrong)_cropped.jpg"],
"1c":["1c. Jonathan (with His First Camera), His Mom, Brother and His Mom’s Parents, 1959 or 1960 (Jews - Irving Sacks)_cropped.jpg"],
"1d":["1d. First Time in San Francisco (Ethan, Raphael, and Jonas at Fisherman’s Wharf), July 2015  (Jews - Marc and Fleur Attia)_cropped.jpg"],
"20":["20. Some Like It Hot│Ray’s Aunt’s Dancing Instructor (or Someone Like That) │Hot Tamale (Jews -  Ray Pestrong)_cropped.jpg"],
"21":["21.Irene_s grandfather, Moses Bookspan, As Part of Her Wedding Procession, February 8, 1948 (Jews - Irving Sacks)_cropped.jpg"],
"22":["22. Ray at Coney Island with His friend S.C (Jews - Ray Pestrong)_cropped.jpg"],
"23":["23. Yael and a friend at Purim, as a Muslim and a Jew, with A Sign that Reads “Peace” Written in Arabic and Hebrew (Jews - Family of focus)_cropped.jpg"],
"24":["24. Sailor, Irving on a top Over in Hilo, Hawaii, 1946. (Around Noon) (Jews - Irving Sacks)_cropped.jpg"],
"25":["25. Ruth Rosenwald’s Mother’s Gravestone in Israel (Jews - Family of focus)_cropped.jpg"],
"26":["26. MeToo HEIDI Still Burnt Up by All-Dressed Up Men Who Hide Behind and Blame HER For The [Green (in this in) (Jews - Heidi Hardin)_cropped.jpg"],
"27":["27. Ethan, Raphael, and Jonas at Universal Studios, Los Angeles, USA May 2017 (Jews - Marc and Fleur Attia)_cropped(1).jpg"],
"27":["27. Ethan, Raphael, and Jonas at Universal Studios, Los Angeles, USA May 2017 (Jews - Marc and Fleur Attia)_cropped.jpg"],
"28":["28. Rays Very Special View of the Empire State Building (Jews - Ray Pestrong)_cropped(1).jpg"],
"28":["28. Rays Very Special View of the Empire State Building (Jews - Ray Pestrong)_cropped.jpg"],
"29":["29. Susanna Wears Baby Kea’lani Zaire, CA April 18, 2012 (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"2_a":["2_a. Wilbur Springfield Holding Baby Juanita, Probably Texas or Japan, 1949 (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"2_b":["2_b. Davidon a Park Bench along the East River Drive(Within a Year of His Death), c. 1952 (Jews - Ray Pestrong)_cropped.jpg"],
"2_c":["2_c. Irving Feeding His Newborn Granddaughter, Ellen, Oct (Jews - Irving Sacks)_cropped.jpg"],
"2_d":["2_d. Ethan’s Bar Mitsvah, Marseille, France, June 2014 (Jews - Marc and Fleur Attia)_cropped.jpg"],
"2a":["2a. John, Kea’lani, Susanna, and Zephyr at Six Flags for Youtube Employee Day, Summer 2017 (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"2b":["2b. David Reading the Jewish Daily (at Age 60), NY City, 1950 (Jews - Ray Pestrong)_cropped.jpg"],
"2c":["2c. Lee, Reva, Irene, Jonathan and Irving Sacks. Fall, early 1980s (Jews - Irving Sacks)_cropped.jpg"],
"2d":["2d. Happy Fiftieth Birthday of Marc, Celebrated in Paris, France, November 2017 (Jews - Marc and Fleur Attia)_cropped(1).jpg"],
"2d":["2d. Happy Fiftieth Birthday of Marc, Celebrated in Paris, France, November 2017 (Jews - Marc and Fleur Attia)_cropped.jpg"],
"30":["30. Irene on Her Wedding Day, February 8, 1948 (Evening.) CU (Jews - Irving Sacks)_cropped.jpg"],
"31":["31. Jonathan on the Bimah (of the Congregation AnshaiSfard), Peabody, MA, 1963 (Morning.)NEF (Jews - Irving Sacks)_cropped.jpg"],
"32":["32. URI IRU [Uri Seeing Himself Reflected in You and Vis-Versa(If You Please)]NEF (Jews - Family of focus)_cropped.jpg"],
"3_a":["3_a.  Lillian Ada Holds Juanita Lillian, early 1950s in either Georgia or Japan (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"3_b":["3_b. Ray’s Mom All Dressed Up in NYC (Jews - Ray Pestrong)_cropped.jpg"],
"3_c":["3_c. Irene with Her Grandson, Robby, 2002 (Jews - Irving Sacks)_cropped(1).jpg"],
"3_c":["3_c. Irene with Her Grandson, Robby, 2002 (Jews - Irving Sacks)_cropped.jpg"],
"3_d":["3_d. Pride (Jonas, Marc, Ethan, Raphael, and Fleur at Ethan’s Bar Mitsvah) June 1st, 2014,Marseille, France (Jews - Marc and Fleur Attia)_cropped.jpg"],
"3a":["3a. Dinner Out with the Kids Susanna Holds Kea’lani and Zephyr has Fallen Asleep, December 6th, 2013, in Redwood (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"3b":["3b. Ray’s Mom, Irene, at the Kitchen Living Room Table, on First Street in NY (Jews - Ray Pestrong)_cropped.jpg"],
"3c":["3c. Lee’s Graduation from Hebrew School Celebrated by Jonathan, Irene and Reva, 1967 (Jews - Irving Sacks)_cropped.jpg"],
"3d":["3d. Happiness Under the Sun, Bendor Island, South of France August 2009 (Jews - Marc and Fleur Attia)_cropped.jpg"],
"4c":["4c. Lee, Irving and Jonathan on Rosh Hashanah in 1958 (Jews - Irving Sacks)_cropped.jpg"],
"4d":["4d. Looking Forward to Playing Soccer, Lyon, France 2008 (Jews - Marc and Fleur Attia)_cropped.jpg"],
"5a":["5a. Lillian and Juanita, Late 1950s Early 1960s, Georgia (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"5b":["5b. Yetta with Her Aunt Ethel (Jews - Ray Pestrong)_cropped.jpg"],
"5c":["5c. Nothing is More Important Than That I Feel (Jews - Irving Sacks)_cropped.jpg"],
"5d":["5d. Kisses from Loving Grandmothers, Elaine and Annette, at Raphael’s Bar Mitsvah, Marseille, France May 26th (Jews - Marc and Fleur Attia)_cropped.jpg"],
"6_a":["6_a. Zephyr Kai on the Beach near Muir Woods, CA April 6th, 2014 (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"6_b":["6_b. Ray with His Little Sister, Yetta (Jewish Boy as Prince of the Family) (Jews - Ray Pestrong)_cropped.jpg"],
"6_c":["6_c. Jonathan and Lee in the Garden on Rosh Hashanah 1958 (Jews - Irving Sacks)_cropped.jpg"],
"6_d":["6_d. First Prior with the Teilins, Ethan’s Bar Mitsvah, Marseille, France, June 2014 (Jews - Marc and Fleur Attia)_cropped.jpg"],
"6a":["6a. Juanita as a Teenager, Georgia 1960s (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"6b":["6b. Ray on His Very First Date (Jews - Ray Pestrong)_cropped.jpg"],
"6c":["6c. Lee and Jonathan 1965 (Jews - Irving Sacks)_cropped.jpg"],
"6d":["6d. Preparing for a Family Party, Lyon, France 2011 (Jews - Marc and Fleur Attia)_cropped.jpg"],
"7a":["7a. Zephyr and Coco Watch TV Together at Our Apartment in Redwood City August 17, 2013 (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"7b":["7b. Ray’s Very Special Way of Using His Fingertips to Find the Beauty in Life on the Surface of Things (Jews - Ray Pestrong)_cropped.jpg"],
"7c":["7c. Lee as a Cub Scout, 1962 (Jews - Irving Sacks)_cropped.jpg"],
"7d":["7d. Preschool Picture, Marc 4 Years Old, Marseille, France (Jews - Marc and Fleur Attia)_cropped.jpg"],
"8a":["8a. Kea’lani Giving Herself “Tattoos” with Paint at Our House in Bayview, SF February 17, 2014 (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"8b":["8b. Ray’s Sister, Yetta, I’m Guessing at Age 5 (Jews - Ray Pestrong)_cropped.jpg"],
"8c":["8c. Reva in a Rage,1967 (Jews - Irving Sacks)_cropped.jpg"],
"8d":["8d. Smile on the Stairs, Fleur 2 Years Old in Parc-de-la-tête-d’Or Lyon, FranceNEF (Jews - Marc and Fleur Attia)_cropped.jpg"],
"9a":["9a. Kea’lani Zaire at the Beach in Pacifica, May 22, 2012 (Jews - Suzanna Sprong-Fernandez)_cropped.jpg"],
"9b":["9b. Ray’s New Younger Sister, Yetta, c.1943 (Jews - Ray Pestrong)_cropped.jpg"],
"9c":["9c. Jonathan Romping, probably 1954 (Jews - Irving Sacks)_cropped.jpg"],
"9d":["9d. Love at First Sight, Raphael Paris, France 2003 (Jews - Marc and Fleur Attia)_cropped.jpg"]},
      "christians" : {"10_a":["10_a. Hideki_s Sister, Joko, Next to the Family Car, 1959 (Christians - Hideki Uchida).jpg"],
                      "10_b":["10_b. Shelley_s Sister on Easter Morning (Christians - Shelley Bradford Bell).jpg"],
                      "10_c":["10_c. Fictional Sister for Leslie (Christians -  Leslie Aguilar).jpg"],
                      "10_d":["10_d.-Scott_s-Sister,-Patricia-Ann-before-the-Christmas-Tree-(European-Sister-as-Princess).jpg"],
                      "10a":["10a. Hideki_s mom_s students in front of the family homeStar Beauty Salon (Christians - Hideki Uchida)(1).jpg"],
                      "10a":["10a. Hideki_s mom_s students in front of the family homeStar Beauty Salon (Christians - Hideki Uchida).jpg"],
                      "10b":["10b. A Neighbor in Front of Shelley_s Grandmom_s Home (Christians - Shelley Bradford Bell).jpg"],
                      "10c":["10c. Leslie_s Home, South Central Los Angeles (Christians -  Leslie Aguilar).jpg"],
                      "10d":["10d. Scott_s Family_s Home, South Bend 1945 (Christians -  Scott Madison).jpg"],
                      "11":["11. Leslie at a SF Street Fair (Christians -  Leslie Aguilar).jpg"],
                      "12":["12. Shelley_s Granddad (Christians - Shelley Bradford Bell).jpg"],
                      "13":["13. Shelley_s Grandmom (Christians - Shelley Bradford Bell).jpg"],
                      "14":["14. Hideki_s Mom in Her Bridal Costume (Christians - Hideki Uchida).jpg"],
                      "15":["15. Hideki_s Granddad (Christians - Hideki Uchida).jpg"],
                      "16":["16. Shelley_s Family Preacher with Them at Church (Christians - Shelley Bradford Bell).jpg"],
                      "17":["17. Scott and His Sister on a Teeter Totter (Christians - Scott Madison).jpg"],
                      "18":["18. Shelley and Her Son Imagining Their Future (Christians - Shelley Bradford Bell).jpg"],
                      "19":["19. Leslie Presenting Pineapples to a Model (Christians -  Leslie Aguilar).jpg"],
                      "1a":["1a. Hideki_s Grandfather_s View of the Pacific Ocean from SF (Christians - Hideki Uchida).jpg"],
                      "1b":["1b. Shelley_s Grandmom_s Backyard, Chicago (Christians - Shelley Bradford Bell).jpg"],
                      "1c":["1c. Leslie at Yosemite with Friends (Christians - Leslie Aguilar).jpg"],
                      "20":["20. Hideki_s Grandmom Near Still Water (Christians - Hideki Uchida).jpg"],
                      "21":["21. Shelley_s Mom, Dad and Grandmom in Vegas (Christians - Shelley Bradford Bell).jpg"],
                      "22":["22. Scott_s Dad_s View of the Statue of Liberty (Christians - Scott Madison).jpg"],
                      "23":["23. Scott_s Dad_s Troop in the Army (Christians - Scott Madison).jpg"],
                      "24":["24. Hideki_s Ancestor_s Tomb (Christians - Hideki Uchida).jpg"],
                      "25":["25. Leslie at One of His Art Openings (Christians -  Leslie Aguilar).jpg"],
                      "26":["26. Heidi on the Mountain with Her Pet Goat (Christians -  Heidi).jpg"],
                      "27":["27. Shelley_s Sister_s View Crossing The Golden Gate Bridge (Christians - Shelley Bradford Bell).jpg"],
                      "28":["28. Shelley_s First Christmas with James, Jr. (Christians - Shelley Bradford Bell).jpg"],
                      "29":["29. Shelley Reflected in a Pool by Moonlight (Christians - Shelley Bradford Bell).jpg"],
                      "2_a":["2_a. Hideki_s Grandfather, Japan, 1933 (Christians - Hideki Uchida).jpg"],
                      "2_b":["2_b. Shelley_s Dad in a Cowboy Hat, Chicago, 1980 (Christians - Shelley Bradford Bell).jpg"],
                      "2_c":["2_c. Leslie_s Godfather at His Confirmation, Los-Angeles, 1967 (Christians - Leslie Aguilar).jpg"],
                      "2_d":["2_d. Scott_s Dad at the Office, South Bend, 1955 (Christians - Scott Madison).jpg"],
                      "2a":["2a. Hideki_s Uncle and Cousin Filling in For Father and Son of His Family, Japan 1935 (Christians - Hideki Uchida).jpg"],
                      "2b":["2b. Shelley_s Dad on Easter Morning with His Family, Chicago, 1967 (Christians - Shelley Bradford Bell).jpg"],
                      "2d":["2d. Scott_s Dad at Christmas time with His Two Children, South Bend, 1968 (Christians - Scott Madison).jpg"],
                      "30":["30. Shelley_s Sister at Her High School Graduation (Christians - Shelley Bradford Bell).jpg"],
                      "31":["31. Shelley with Friends at The Bay to Breakers (Christians - Shelley Bradford Bell).jpg"],
                      "32":["32. You, The Viewer.jpg"],
                      "3_a":["3_a. Hideki_s Mom, Yachiyo, in a Purple Robe (Christians - Yachiyo Uchida).jpg"],
                      "3_b":["3_b.-Shelley_s-Mom,-Lillian,-in-the-Kitchen-Laughing,-Having-Fun-(African-Mom-as-Queen).jpg"],
                      "3_c":["3_c. Leslie_s Mom, Vivian_s, Glamour Shot (Christians -  Leslie Aguilar).jpg"],
                      "3_d":["3_d. Scott_s Mom, Mary, in the Backseat of the Car (Christians - Scott Madison).jpg"],
                      "3a":["3a. Hideki with His Mom and Grandmom (Christians - Hideki Uchida).jpg"],
                      "3b":["3b. Four Generations of Mothers in Shelley_s Family (Christians - Shelley Bradford Bell).jpg"],
                      "3c":["3c. Leslie_s Mom with Her First Grandchild, Tina (Christians -  Leslie Aguilar).jpg"],
                      "3d":["3d. Scott_s Mom and Grandmom in the Kitchen After Thanksgiving Dinner (Christians - Scott Madison).jpg"],
                      "4a":["4a. Hideki and Two Friends Blowing Whistles at the California Academy of Sciences ( Christians - Hideki Uchida).jpg"],
                      "4b":["4b. Shelley_s Brother, Quentin, and a Friend Giving the Panther Salute (Christians - Shelley Bradford Bell).jpg"],
                      "4c":["4c. Leslie at High School Graduation with Two Friends (Christians -  Leslie Aguilar).jpg"],
                      "4d":["4d. Scott and Two Friends with Their Baseball Stuff (Christians - Scott Madison).jpg"],
                      "5a":["5a. Hideki, his Mom and her Students in Front of her Beauty Salon, Japan, 1954 (Christians - Hideki Uchida).jpg"],
                      "5b":["5b. Shelley Supporting Her Sister (Christians - Shelley Bradford Bell).jpg"],
                      "5c":["5c. Leslie Cheerleading, Los Angeles (Christians - Shelley Bradford Bell).jpg"],
                      "6_a":["6_a. Hideki_s Formal Portrait, 1957 (Christians - Hideki Uchida).jpg"],
                      "6_b":["6_b. Shelley_s Brother Quentin at Easter (Christians - Shelley Bradford Bell).jpg"],
                      "6_c":["6_c. Leslie at His Confirmation (Christians -  Leslie Aguilar).jpg"],
                      "6_d":["6_d. Scott before Christmas Tree (Christians - Scott Madison).jpg"],
                      "6a":["6a. Hideki_s School Photo, Senior Year, 1968 (Christians - Hideki Uchida).jpg"],
                      "6b":["6b. Shelley with Her Future Husband, James, before the Junior Prom (Christians - Shelley Bradford Bell).jpg"],
                      "6c":["6c. Leslie_s Junior Prom Portrait (Christians -  Leslie Aguilar).jpg"],
                      "6d":["6d. Scott with his Date to the Senior Prom (Christians - Scott Madison).jpg"],
                      "7a":["7a. Hideki as Boy Scout (Christians - Hideki Uchida).jpg"],
                      "7b":["7b. Shelley_s Son, James, 4 Years Old (Christians - Shelley Bradford Bell).jpg"],
                      "7c":["7c. Leslie_s Third Grade School Portrait (Christians -  Leslie Aguilar).jpg"],
                      "7d":["7d. Scott with His New Bike (Christians - Scott Madison).jpg"],
                      "8a":["8a. Hideki_s Sister, Joko, with Several Beauticians Behind Her (Christians Hideki Uchida).jpg"],
                      "8b":["8b. Shelley in Her Favorite Dress, Third Grade (Christians - Shelley Bradford Bell).jpg"],
                      "8c":["8c. Leslie_s Classmate in Grammar School (Christians -  Leslie Aguilar).jpg"],
                      "8d":["8d. Scott_s Sister, Patricia Ann with Her New Doll (Christians - Scott Madison).jpg"],
                      "9a":["9a. Hideki_s Sister, Joko, on Her roo Day Birthday (Christians - Hideki Uchida).jpg"],
                      "9b":["9b. Shelley_s Son_s (James) Baby Portrait (Christians - Shelley Bradford Bell).jpg"],
                      "9c":["9c. Leslie on the Back Porch (Christians -  Leslie Aguilar).jpg"],
                      "9d":["9d. Scott at 9 Months Old (Christians - Scott Madison).jpg"]
                      },
      "muslims" : [],
      "hindusandsikhs" : [],
      "indigenous" : [],
      "buddhistsandjains" : [],
      "taoistsandconfucians" : []
    };
    //convert url codings apostrophies IMPORTANT remember to do this for later families added
    if (urlIdParam.includes("'")) urlIdParam = urlIdParam.replace("'","_")
    if (filenames[urlGroupParam] && urlGroupParam in filenames && urlIdParam in filenames[urlGroupParam]){
      paintingTitle = filenames[urlGroupParam][urlIdParam][0];
      if (paintingTitle.split(".")[0].includes("_")) paintingTitle = paintingTitle.split(".")[0].replace("_","'") + "." + paintingTitle.split(".").slice(1).join(".");
      paintingSrc = encodeURI("../paintings/" + urlGroupParam + "/" + filenames[urlGroupParam][urlIdParam]);
      if (urlGroupParam === "christians" && urlIdParam.includes("_")) paintingTitle = paintingTitle.replace("_","'");
      //Add rest of family titles IMPORTANT
      family = (urlGroupParam === 'christians' ? "Part I : The Human Family Tree (Christians)" : 
                urlGroupParam === 'jews' ? "Part II: Families in Paradise (Jews)" : 
                urlGroupParam === 'muslims' ? "Part III: Art of the Family (Muslims)" :
                urlGroupParam === 'hindusandsikhs' ? "Part IV: Family Dharma (Hindus & Sikhs)" :
                urlGroupParam === 'indigenous' ? "" :
                urlGroupParam === 'buddhistsandjains' ? "" :
                urlGroupParam === 'taoistsandconfucians' ? "" : 
                ""                  
      );
      paintingDescription = ""; //need to get the text depending on both group and family IMPORTANT
    }else{
          //probably give an error if a bad param is given?
    }
  }
  //SPECIAL ISSUES
  if (urlGroupParam === 'jews' && urlIdParam === '26') paintingTitle = "26. #MeToo HEIDI Still Burnt Up by All-Dressed Up Men Who Hide Behind and Blame HER For The [Green (in this in) (Jews - Heidi Hardin)_cropped"
  //
  document.getElementById('paintingTitle').innerText = paintingTitle;
  document.getElementById('artworkDescription').innerText = family;
  document.getElementById('painting').src = paintingSrc;
  //probably change size too IMPORTANT
  document.getElementById("descriptionText").innerText = paintingDescription;
}
// order should be as google drive shows it
// loop back in the family do not switch to a new one
function previousPainting(){
  var url = new URL(document.location.toString());
  var params = url.searchParams;
  var urlGroupParam = params.get("group").toLowerCase(); //window.location.search("group");
  var urlIdParam = params.get("id").toLowerCase(); //window.location.search("id");
  //if no params go to last painting
  if (!urlGroupParam && !urlIdParam){
    urlGroupParam = "christians";
    urlIdParam = "1a"; 
  }else if (!urlIdParam){
    if (urlGroupParam === "christians" || urlGroupParam === "jews") urlIdParam = "1a";
  }
  var sequence = {};
  if (urlGroupParam === "christians") sequence = {'1a': ['15', '1b'], '1b': ['1a', '1c'], '1c': ['1b', '2_a'], '2_a': ['1c', '2_b'], '2_b': ['2_a', '2_c'], '2_c': ['2_b', '2_d'], '2_d': ['2_c', '2a'], '2a': ['2_d', '2b'], '2b': ['2a', '2d'], '2d': ['2b', '3_a'], '3_a': ['2d', '3_b'], '3_b': ['3_a', '3_c'], '3_c': ['3_b', '3_d'], '3_d': ['3_c', '3a'], '3a': ['3_d', '3b'], '3b': ['3a', '3c'], '3c': ['3b', '3d'], '3d': ['3c', '4a'], '4a': ['3d', '4b'], '4b': ['4a', '4c'], '4c': ['4b', '4d'], '4d': ['4c', '5a'], '5a': ['4d', '5b'], '5b': ['5a', '5c'], '5c': ['5b', '6_a'], '6_a': ['5c', '6_b'], '6_b': ['6_a', '6_c'], '6_c': ['6_b', '6_d'], '6_d': ['6_c', '6a'], '6a': ['6_d', '6b'], '6b': ['6a', '6c'], '6c': ['6b', '6d'], '6d': ['6c', '7a'], '7a': ['6d', '7b'], '7b': ['7a', '7c'], '7c': ['7b', '7d'], '7d': ['7c', '8a'], '8a': ['7d', '8b'], '8b': ['8a', '8c'], '8c': ['8b', '8d'], '8d': ['8c', '9a'], '9a': ['8d', '9b'], '9b': ['9a', '9c'], '9c': ['9b', '9d'], '9d': ['9c', '10_a'], '10_a': ['9d', '10_b'], '10_b': ['10_a', '10_c'], '10_c': ['10_b', '10_d'], '10_d': ['10_c', '10a'], '10a': ['10_d', '10c'], '10c': ['10a', '10d'], '10d': ['10c', '11'], '11': ['10d', '12'], '12': ['11', '13'], '13': ['12', '14'], '14': ['13', '15'], '15': ['14', '1a']}
  else if (urlGroupParam === "jews") sequence = {'1a': ['32', '1b'], '1b': ['1a', '1c'], '1c': ['1b', '1d'], '1d': ['1c', "2'a"], "2'a": ['1d', "2'b"], "2'b": ["2'a", "2'c"], "2'c": ["2'b", "2'd"], "2'd": ["2'c", '2a'], '2a': ["2'd", '2b'], '2b': ['2a', '2c'], '2c': ['2b', '2d'], '2d': ['2c', "3'a"], "3'a": ['2d', "3'b"], "3'b": ["3'a", "3'c"], "3'c": ["3'b", "3'd"], "3'd": ["3'c", '3a'], '3a': ["3'd", '3b'], '3b': ['3a', '3c'], '3c': ['3b', '3d'], '3d': ['3c', '4c'], '4c': ['3d', '4d'], '4d': ['4c', '5a'], '5a': ['4d', '5b'], '5b': ['5a', '5c'], '5c': ['5b', '5d'], '5d': ['5c', "6'a"], "6'a": ['5d', "6'b"], "6'b": ["6'a", "6'c"], "6'c": ["6'b", "6'd"], "6'd": ["6'c", '6a'], '6a': ["6'd", '6b'], '6b': ['6a', '6c'], '6c': ['6b', '6d'], '6d': ['6c', '7a'], '7a': ['6d', '7b'], '7b': ['7a', '7c'], '7c': ['7b', '7d'], '7d': ['7c', '8a'], '8a': ['7d', '8b'], '8b': ['8a', '8c'], '8c': ['8b', '8d'], '8d': ['8c', '9a'], '9a': ['8d', '9b'], '9b': ['9a', '9c'], '9c': ['9b', '9d'], '9d': ['9c', "10'a"], "10'a": ['9d', "10'b"], "10'b": ["10'a", "10'c"], "10'c": ["10'b", "10'd"], "10'd": ["10'c", '10a'], '10a': ["10'd", '10b'], '10b': ['10a', '10c'], '10c': ['10b', '10d'], '10d': ['10c', '11'], '11': ['10d', '12'], '12': ['11', '13'], '13': ['12', '14'], '14': ['13', '15'], '15': ['14', '16'], '16': ['15', '17'], '17': ['16', '18'], '18': ['17', '19'], '19': ['18', '20'], '20': ['19', '21'], '21': ['20', '22'], '22': ['21', '23'], '23': ['22', '24'], '24': ['23', '25'], '25': ['24', '26'], '26': ['25', '27'], '27': ['26', '28'], '28': ['27', '29'], '29': ['28', '30'], '30': ['29', '31'], '31': ['30', '32'], '32': ['31', '1a']};
  params.set('id',sequence[urlIdParam][0]);
  window.location.href = url;
}
function nextPainting(){ //may need to change paintings size //can probably combine the above painting functions
  var url = new URL(document.location.toString());
  var params = url.searchParams;
  var urlGroupParam = params.get("group").toLowerCase(); //window.location.search("group");
  var urlIdParam = params.get("id").toLowerCase(); //window.location.search("id");
  if (!urlGroupParam && !urlIdParam){
    urlGroupParam = "christians";
    urlIdParam = "1a"; 
  }else if (!urlIdParam){
    if (urlGroupParam === "christians" || urlGroupParam === "jews") urlIdParam = "1a";
  }
  var sequence = {};
  if (urlGroupParam === "christians") sequence = {'1a': ['15', '1b'], '1b': ['1a', '1c'], '1c': ['1b', '2_a'], '2_a': ['1c', '2_b'], '2_b': ['2_a', '2_c'], '2_c': ['2_b', '2_d'], '2_d': ['2_c', '2a'], '2a': ['2_d', '2b'], '2b': ['2a', '2d'], '2d': ['2b', '3_a'], '3_a': ['2d', '3_b'], '3_b': ['3_a', '3_c'], '3_c': ['3_b', '3_d'], '3_d': ['3_c', '3a'], '3a': ['3_d', '3b'], '3b': ['3a', '3c'], '3c': ['3b', '3d'], '3d': ['3c', '4a'], '4a': ['3d', '4b'], '4b': ['4a', '4c'], '4c': ['4b', '4d'], '4d': ['4c', '5a'], '5a': ['4d', '5b'], '5b': ['5a', '5c'], '5c': ['5b', '6_a'], '6_a': ['5c', '6_b'], '6_b': ['6_a', '6_c'], '6_c': ['6_b', '6_d'], '6_d': ['6_c', '6a'], '6a': ['6_d', '6b'], '6b': ['6a', '6c'], '6c': ['6b', '6d'], '6d': ['6c', '7a'], '7a': ['6d', '7b'], '7b': ['7a', '7c'], '7c': ['7b', '7d'], '7d': ['7c', '8a'], '8a': ['7d', '8b'], '8b': ['8a', '8c'], '8c': ['8b', '8d'], '8d': ['8c', '9a'], '9a': ['8d', '9b'], '9b': ['9a', '9c'], '9c': ['9b', '9d'], '9d': ['9c', '10_a'], '10_a': ['9d', '10_b'], '10_b': ['10_a', '10_c'], '10_c': ['10_b', '10_d'], '10_d': ['10_c', '10a'], '10a': ['10_d', '10c'], '10c': ['10a', '10d'], '10d': ['10c', '11'], '11': ['10d', '12'], '12': ['11', '13'], '13': ['12', '14'], '14': ['13', '15'], '15': ['14', '1a']}
  else if (urlGroupParam === "jews") sequence = {'1a': ['32', '1b'], '1b': ['1a', '1c'], '1c': ['1b', '1d'], '1d': ['1c', "2'a"], "2'a": ['1d', "2'b"], "2'b": ["2'a", "2'c"], "2'c": ["2'b", "2'd"], "2'd": ["2'c", '2a'], '2a': ["2'd", '2b'], '2b': ['2a', '2c'], '2c': ['2b', '2d'], '2d': ['2c', "3'a"], "3'a": ['2d', "3'b"], "3'b": ["3'a", "3'c"], "3'c": ["3'b", "3'd"], "3'd": ["3'c", '3a'], '3a': ["3'd", '3b'], '3b': ['3a', '3c'], '3c': ['3b', '3d'], '3d': ['3c', '4c'], '4c': ['3d', '4d'], '4d': ['4c', '5a'], '5a': ['4d', '5b'], '5b': ['5a', '5c'], '5c': ['5b', '5d'], '5d': ['5c', "6'a"], "6'a": ['5d', "6'b"], "6'b": ["6'a", "6'c"], "6'c": ["6'b", "6'd"], "6'd": ["6'c", '6a'], '6a': ["6'd", '6b'], '6b': ['6a', '6c'], '6c': ['6b', '6d'], '6d': ['6c', '7a'], '7a': ['6d', '7b'], '7b': ['7a', '7c'], '7c': ['7b', '7d'], '7d': ['7c', '8a'], '8a': ['7d', '8b'], '8b': ['8a', '8c'], '8c': ['8b', '8d'], '8d': ['8c', '9a'], '9a': ['8d', '9b'], '9b': ['9a', '9c'], '9c': ['9b', '9d'], '9d': ['9c', "10'a"], "10'a": ['9d', "10'b"], "10'b": ["10'a", "10'c"], "10'c": ["10'b", "10'd"], "10'd": ["10'c", '10a'], '10a': ["10'd", '10b'], '10b': ['10a', '10c'], '10c': ['10b', '10d'], '10d': ['10c', '11'], '11': ['10d', '12'], '12': ['11', '13'], '13': ['12', '14'], '14': ['13', '15'], '15': ['14', '16'], '16': ['15', '17'], '17': ['16', '18'], '18': ['17', '19'], '19': ['18', '20'], '20': ['19', '21'], '21': ['20', '22'], '22': ['21', '23'], '23': ['22', '24'], '24': ['23', '25'], '25': ['24', '26'], '26': ['25', '27'], '27': ['26', '28'], '28': ['27', '29'], '29': ['28', '30'], '30': ['29', '31'], '31': ['30', '32'], '32': ['31', '1a']};
  params.set('id',sequence[urlIdParam][1]);
  window.location.href = url;
}
function exitFullScreen(){
  window.location.href = "../Gallery Page/gallery-page.html";
}