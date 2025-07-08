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
   //IMPORTANT change the arrow event listeners to description and family history from painting switch here 
}
function hideDescription(){
  var dB = document.getElementById('descButton');
  document.getElementById('a-4-icon-top').style.opacity = '0%';
  dB.innerText = "View Description";
  dB.removeEventListener('click',hideDescription);
  dB.addEventListener('click',viewDescription);
  //IMPORTANT change the arrow event listeners from description and family history to painting switch here
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
  var paintingTitle = "Family History Statement";
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
      paintingDescription = getFamily(urlIdParam,urlGroupParam);
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
//should probably make functions more modular
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
  if (urlGroupParam === "christians") {
    if (urlIdParam.includes("'")) urlIdParam = urlIdParam.replace("'","_");
  }
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
    if (urlGroupParam === "christians") {
    if (urlIdParam.includes("'")) urlIdParam = urlIdParam.replace("'","_");
  }
  if (urlGroupParam === "christians") sequence = {'1a': ['15', '1b'], '1b': ['1a', '1c'], '1c': ['1b', '2_a'], '2_a': ['1c', '2_b'], '2_b': ['2_a', '2_c'], '2_c': ['2_b', '2_d'], '2_d': ['2_c', '2a'], '2a': ['2_d', '2b'], '2b': ['2a', '2d'], '2d': ['2b', '3_a'], '3_a': ['2d', '3_b'], '3_b': ['3_a', '3_c'], '3_c': ['3_b', '3_d'], '3_d': ['3_c', '3a'], '3a': ['3_d', '3b'], '3b': ['3a', '3c'], '3c': ['3b', '3d'], '3d': ['3c', '4a'], '4a': ['3d', '4b'], '4b': ['4a', '4c'], '4c': ['4b', '4d'], '4d': ['4c', '5a'], '5a': ['4d', '5b'], '5b': ['5a', '5c'], '5c': ['5b', '6_a'], '6_a': ['5c', '6_b'], '6_b': ['6_a', '6_c'], '6_c': ['6_b', '6_d'], '6_d': ['6_c', '6a'], '6a': ['6_d', '6b'], '6b': ['6a', '6c'], '6c': ['6b', '6d'], '6d': ['6c', '7a'], '7a': ['6d', '7b'], '7b': ['7a', '7c'], '7c': ['7b', '7d'], '7d': ['7c', '8a'], '8a': ['7d', '8b'], '8b': ['8a', '8c'], '8c': ['8b', '8d'], '8d': ['8c', '9a'], '9a': ['8d', '9b'], '9b': ['9a', '9c'], '9c': ['9b', '9d'], '9d': ['9c', '10_a'], '10_a': ['9d', '10_b'], '10_b': ['10_a', '10_c'], '10_c': ['10_b', '10_d'], '10_d': ['10_c', '10a'], '10a': ['10_d', '10c'], '10c': ['10a', '10d'], '10d': ['10c', '11'], '11': ['10d', '12'], '12': ['11', '13'], '13': ['12', '14'], '14': ['13', '15'], '15': ['14', '1a']}
  else if (urlGroupParam === "jews") sequence = {'1a': ['32', '1b'], '1b': ['1a', '1c'], '1c': ['1b', '1d'], '1d': ['1c', "2'a"], "2'a": ['1d', "2'b"], "2'b": ["2'a", "2'c"], "2'c": ["2'b", "2'd"], "2'd": ["2'c", '2a'], '2a': ["2'd", '2b'], '2b': ['2a', '2c'], '2c': ['2b', '2d'], '2d': ['2c', "3'a"], "3'a": ['2d', "3'b"], "3'b": ["3'a", "3'c"], "3'c": ["3'b", "3'd"], "3'd": ["3'c", '3a'], '3a': ["3'd", '3b'], '3b': ['3a', '3c'], '3c': ['3b', '3d'], '3d': ['3c', '4c'], '4c': ['3d', '4d'], '4d': ['4c', '5a'], '5a': ['4d', '5b'], '5b': ['5a', '5c'], '5c': ['5b', '5d'], '5d': ['5c', "6'a"], "6'a": ['5d', "6'b"], "6'b": ["6'a", "6'c"], "6'c": ["6'b", "6'd"], "6'd": ["6'c", '6a'], '6a': ["6'd", '6b'], '6b': ['6a', '6c'], '6c': ['6b', '6d'], '6d': ['6c', '7a'], '7a': ['6d', '7b'], '7b': ['7a', '7c'], '7c': ['7b', '7d'], '7d': ['7c', '8a'], '8a': ['7d', '8b'], '8b': ['8a', '8c'], '8c': ['8b', '8d'], '8d': ['8c', '9a'], '9a': ['8d', '9b'], '9b': ['9a', '9c'], '9c': ['9b', '9d'], '9d': ['9c', "10'a"], "10'a": ['9d', "10'b"], "10'b": ["10'a", "10'c"], "10'c": ["10'b", "10'd"], "10'd": ["10'c", '10a'], '10a': ["10'd", '10b'], '10b': ['10a', '10c'], '10c': ['10b', '10d'], '10d': ['10c', '11'], '11': ['10d', '12'], '12': ['11', '13'], '13': ['12', '14'], '14': ['13', '15'], '15': ['14', '16'], '16': ['15', '17'], '17': ['16', '18'], '18': ['17', '19'], '19': ['18', '20'], '20': ['19', '21'], '21': ['20', '22'], '22': ['21', '23'], '23': ['22', '24'], '24': ['23', '25'], '25': ['24', '26'], '26': ['25', '27'], '27': ['26', '28'], '28': ['27', '29'], '29': ['28', '30'], '30': ['29', '31'], '31': ['30', '32'], '32': ['31', '1a']};
  params.set('id',sequence[urlIdParam][1]);
  window.location.href = url;
}
function exitFullScreen(){
  window.location.href = "../Gallery Page/gallery-page.html";
}
function getFamily(id,group){ //read the id and group and return the corresponding family information or just change the text IMPORTANT ADD OTHER FAMILIES
  var families = {}
  // console.log(id,group)
  if (group === 'christians'){
    families = 
    {
      "10_a":["Hideki Uchida"],
      "10_b":["Shelley Bradford Bell"],
      "10_c":["Leslie Aguilar"],
      "10_d":["Scott Madison"],
      "10a":["Hideki Uchida"],
      "10b":["Shelley Bradford Bell"],
      "10c":["Leslie Aguilar"],
      "10d":["Scott Madison"],
      "11":["Leslie Aguilar"],
      "12":["Shelley Bradford Bell"],
      "13":["Shelley Bradford Bell"],
      "14":["Hideki Uchida"],
      "15":["Hideki Uchida"],
      "16":["Shelley Bradford Bell"],
      "17":["Scott Madison"],
      "18":["Shelley Bradford Bell"],
      "19":["Leslie Aguilar"],
      "1a":["Hideki Uchida"],
      "1b":["Shelley Bradford Bell"],
      "1c":["Leslie Aguilar"],
      "20":["Hideki Uchida"],
      "21":["Shelley Bradford Bell"],
      "22":["Scott Madison"],
      "23":["Scott Madison"],
      "24":["Hideki Uchida"],
      "25":["Leslie Aguilar"],
      "26":["Hideki Uchida"],
      "27":["Shelley Bradford Bell"],
      "28":["Shelley Bradford Bell"],
      "29":["Shelley Bradford Bell"],
      "2_a":["Hideki Uchida"],
      "2_b":["Shelley Bradford Bell"],
      "2_c":["Leslie Aguilar"],
      "2_d":["Scott Madison"],
      "2a":["Hideki Uchida"],
      "2b":["Shelley Bradford Bell"],
      "2d":["Scott Madison"],
      "30":["Shelley Bradford Bell"],
      "31":["Shelley Bradford Bell"],
      "3_a":["Hideki Uchida"],
      "3_b":["Shelley Bradford Bell"],
      "3_c":["Leslie Aguilar"],
      "3_d":["Scott Madison"],
      "3a":["Hideki Uchida"],
      "3b":["Shelley Bradford Bell"],
      "3c":["Leslie Aguilar"],
      "3d":["Scott Madison"],
      "4a":["Hideki Uchida"],
      "4b":["Shelley Bradford Bell"],
      "4c":["Leslie Aguilar"],
      "4d":["Scott Madison"],
      "5a":["Hideki Uchida"],
      "5b":["Shelley Bradford Bell"],
      "5c":["Shelley Bradford Bell"],
      "6_a":["Hideki Uchida"],
      "6_b":["Shelley Bradford Bell"],
      "6_c":["Leslie Aguilar"],
      "6_d":["Scott Madison"],
      "6a":["Hideki Uchida"],
      "6b":["Shelley Bradford Bell"],
      "6c":["Leslie Aguilar"],
      "6d":["Scott Madison"],
      "7a":["Hideki Uchida"],
      "7b":["Shelley Bradford Bell"],
      "7c":["Leslie Aguilar"],
      "7d":["Scott Madison"],
      "8b":["Shelley Bradford Bell"],
      "8c":["Leslie Aguilar"],
      "8d":["Scott Madison"],
      "9a":["Hideki Uchida"],
      "9b":["Shelley Bradford Bell"],
      "9c":["Leslie Aguilar"],
      "9d":["Scott Madison"],
    };
  }else if (group === 'jews'){
    families = {
      "10_a":["Suzanna Sprong"],
      "10_b":["Ray Pestrong"],
      "10_c":["Irving Sacks"],
      "10_d":["Marc and Fleur Attia"],
      "10a":["Suzanna Sprong"],
      "10b":["Ray Pestrong"],
      "10c":["Irving Sacks"],
      "10d":["Marc and Fleur Attia"],
      "11":["Marc and Fleur Attia"],
      "12":["Marc and Fleur Attia"],
      // "13":["Family of focus"],
      "14":["Suzanna Sprong"],
      "15":["Suzanna Sprong"],
      "16":["Marc and Fleur Attia"],
      "17":["Family of focus"],
      "18":["Irving Sacks"],
      "19":["Ray Pestrong"],
      "1a":["Suzanna Sprong"],
      "1b":["Ray Pestrong"],
      "1c":["Irving Sacks"],
      "1d":["Marc and Fleur Attia"],
      "20":["Ray Pestrong"],
      "21":["Irving Sacks"],
      "22":["Ray Pestrong"],
      "23":["Family of focus"],
      "24":["Irving Sacks"],
      // "25":["Family of focus"],
      "26":["Heidi Hardin"],
      "27":["Marc and Fleur Attia"],
      "28":["Ray Pestrong"],
      "29":["Suzanna Sprong"],
      "2_a":["Suzanna Sprong"],
      "2_b":["Ray Pestrong"],
      "2_c":["Irving Sacks"],
      "2_d":["Marc and Fleur Attia"],
      "2a":["Suzanna Sprong"],
      "2b":["Ray Pestrong"],
      "2c":["Irving Sacks"],
      "2d":["Marc and Fleur Attia"],
      "30":["Irving Sacks"],
      "31":["Irving Sacks"],
      // "32":["Family of focus"],
      "3_a":["Suzanna Sprong"],
      "3_b":["Ray Pestrong"],
      "3_c":["Irving Sacks"],
      "3_d":["Marc and Fleur Attia"],
      "3a":["Suzanna Sprong"],
      "3b":["Ray Pestrong"],
      "3c":["Irving Sacks"],
      "3d":["Marc and Fleur Attia"],
      "4c":["Irving Sacks"],
      "4d":["Marc and Fleur Attia"],
      "5a":["Suzanna Sprong"],
      "5b":["Ray Pestrong"],
      "5c":["Irving Sacks"],
      "5d":["Marc and Fleur Attia"],
      "6_a":["Suzanna Sprong"],
      "6_b":["Ray Pestrong"],
      "6_c":["Irving Sacks"],
      "6_d":["Marc and Fleur Attia"],
      "6a":["Suzanna Sprong"],
      "6b":["Ray Pestrong"],
      "6c":["Irving Sacks"],
      "6d":["Marc and Fleur Attia"],
      "7a":["Suzanna Sprong"],
      "7b":["Ray Pestrong"],
      "7c":["Irving Sacks"],
      "7d":["Marc and Fleur Attia"],
      "8a":["Suzanna Sprong"],
      "8b":["Ray Pestrong"],
      "8c":["Irving Sacks"],
      "8d":["Marc and Fleur Attia"],
      "9a":["Suzanna Sprong"],
      "9b":["Ray Pestrong"],
      "9c":["Irving Sacks"],
      "9d":["Marc and Fleur Attia"]
    }
  }
  var familiesText = //IMPORTANT: Will need to enable scrolling and fix formatting for longer texts. See family histories
  {
    "Leslie Aguilar":
    `
    Latin Americans:  The family of Leslie Aguilar

    Leslie Aguilar was born in South Central Los Angeles, CA in 1957.  He has two brothers and a sister.  His mom and dad met there and were married for fifteen years.  Leslie was raised in the house of her father’s birth.  His parents divorced when Leslie was five.  His mother went to work to support her family.  Leslie moved to San Francisco in 1977 to pursue his career as an artist.  The paintings of Leslie’s life span from 1958 to the present.  Leslie leads life as a gay man. His life has been a journey to expand and explore his abilities as an artist and includes dance, design, architecture, carpentry, teaching, drawing, ceramics and textiles.
    `,
    "Scott Madison": 
    `
    European Americans:  The Family of Scott Madison

    These paintings are made from hundreds of slides Scott Madison’s father took from 1950 to 1975.  The family settled in South Bend, Indiana, where both parents were born, met and married.  Scott and his sister, Patricia, grew up in the Indiana family home.  Scott moved to San Francisco in 1977 “to escape the profound boredom of the Midwest.”  Scott’s dad, Don, and his mother, Mary, were married for more than fifty years.  Mary passed away several years ago and Don now lives in Redwood City, CA, under the loving care of his son, Scott.
    `,
    "Hideki Uchida": 
    `
    Japanese American Family:  Hideki Uchida’s Family

    These paintings are of the family of Yachiyo Uchida.  Yachiyo moved to San Francisco forty years ago with her two children, Joko and Hideki.  She left Japan after the war to reunite with her mother.  Toshi came to San Francisco, leaving her baby, Yachiyo, in Japan.  She came to escape the abusive relationship with Hideki’s father, her second husband.  Unable to speak English comfortably, Yachio’s oral history was taken on videotape and translated by Hideki.  The paintings in this exhibit were created from black and white family photos taken mostly by Yachiyo’s stepfather, a dentist and avid photographer.  His collection of photos includes images of the San Francisco World Expo and San Francisco’s 1909 earthquake.  The artist recently married Hideki.
    `,
    "Shelley Bradford Bell":
    `
    African Americans: The Family of Shelley Bradford Bell

    Shelley Bradford Bell’s family grew up in Chicago, Illinois.  Shelley’s sister, Marcia, lives in Chicago and has a daughter, Binta.  Her brother, Quintin, lives in Atlanta.  Yvonne and Eugene Bradford Jr. are her parents, who divorced after 31 years of marriage.  Eugene Bradford Sr. is her maternal grandfather and her maternal grandmother is Elizabeth Badon.  She grew up with her husband, James Bell Jr. from age five.  Her son’s name is James III.  She came to San Francisco in 1986 to fulfill a childhood dream of living in the City by the Bay.
    `,
    "Irving Sacks":
    `
    Sacks Family History
    Prepared by Irving Sacks
    January 2004


    Irving's parents, Hyman and Frieda Sacks, and Irene's parents, Max and Rebecca Bookspan emigrated from Eastern Europe in the early 1900s and settled in Brooklyn, New York, where Irving and Irene were born. They met after Irving's discharge from the Navy in 1946 and married in 1948. They both graduated from Brooklyn College, moved to Pittsburgh (where Irving received his BA in Physics from Carnegie Institute of Technology), then successfully on to Kansas City (where son Jonathan was born), to Long Island, New York (where son Lee was born) and have resided over the past 45 years in Peabody, Massachusetts (where daughter Reva was born). Lee married Mary Ann Cougevan, and they have a 9-year-old son, Robert. Reva is married to John Cuthbertson, and they have a 3-year-old Daughter, Ellen. Irving enjoyed a 50-year career as an engineer in Aeronautics, Energy and Environment. And after raising 3 children, Irene worked as a high school Chemistry teacher. Both have now retired and continue to reside in Peabody.

    `,
    "Ray Pestrong":
    `
    Pestrong Family History
    Prepared by Ray Pestrong
    January 2004

    My mother, Irene Brandes, came to NY when she was one year old, from Romania. She arrived here in 1899, with her mother, father, 3 sisters and a brother. All but Ethel had either died or disappeared from NY by the time I was born. My mother was very attractive, and had lots of opportunities to marry, but because she was the youngest, she was not allowed to marry until her sisters were wed. At one point she ran away and secretly got married, but that was quickly annulled. She later met my father, who had come from Radomysl, Poland (near Krakow), and when I was born my mother was 40. She died at age 97. She told me he was the handsomest man she had ever met. 

    My father, who died (of a heart attack) when I was 16, was very secretive about his family. I assumed they did not get along, and I did not have the foresight to ask more about his history. I only met his one brother once, but that was not a very positive experience. My father was very powerful and tried to make a living as a boxer. When that failed he worked as a furniture mover. His greatest pride was in wrestling a bear on stage, and in witnessing the Dempsey - Firpo fight, immortalized in the famous painting by (  ?  ) in which Dempsey was knocked out of the ring, and got back in to knock out Firpo. The only movies I remember him taking me to were King Kong and Mighty Joe Young. He loved powerful, fearsome figures. My father's heart attack came at the age of 63. I also had a heart attack at age 63. 

    I am learning of other Pestrongs, both here in the US and in Israel, but I'm not in close contact with anyone at the moment. My sister, Diana Fish, lives in NY with her husband, Stan, has two sons, married, two grandchildren and one more on the way. Both her sons are in NY. 

    I live with my second wife, Judi, in Portola Valley, and have two married daughters. One, with 2 young sons, is in NJ, and the other, with a newborn baby, is in Menlo Park. My wife has one married son, living in Boston. 

    I've been teaching geology at San Francisco State for 38 years and plan to continue indefinitely.
    `,
    "Susanna Sprong":
    `
    Black Dutch: Mixed-Heritage Jews of Color in the Deep American South
    (Susanna’s Family History)
    Prepared by Suzanna Sprong-Fernandez
    October 2018 (adapted by ChatGPT)

    Susanna Sprong-Fernandez recounts her emotional journey through northern Spain, recognizing herself as the first in her family to return in five centuries since her Sephardic Jewish ancestors fled the Spanish Inquisition. In 1492, the expulsion forced many Jews from the Iberian Peninsula to seek refuge in nearby regions, such as Bayonne and La Rochelle, before attempting to escape to the Americas. By the 1600s, her ancestors had settled in the colonial American South, a region characterized by cultural intermingling and conflict among European colonizers, Africans, and Indigenous populations. Her family, blending Sephardic Jewish, Native American, and African American heritage, thrived in this diverse environment despite the challenges they faced.

    The "Black Dutch" Identity
    Susanna's family, known as "Black Dutch" due to their dark skin and mixed heritage, navigated complex racial dynamics in the Appalachian region. The term "Black Dutch" originally referred to Sephardic Jews fleeing Spain through Amsterdam, and it came to describe people of ambiguous racial characteristics in the American South. Susanna traces her lineage to these Sephardic Jews who married into Native American and African American communities, forming a unique tri-racial group known as Melungeons. Despite the wealth and social status some family members achieved, they faced ongoing discrimination due to their mixed heritage, prompting further westward migration.

    Cultural Preservation Amidst Adversity
    Susanna's ancestors maintained their Sephardic traditions despite the pressures to assimilate. They adopted names and customs reflective of their Jewish heritage, even as they moved through Tennessee, North Carolina, Georgia, and Texas. Her family's identity often had to be concealed or reinterpreted to fit into the racial hierarchies of the time. Susanna’s great-great-grandfather Moses Deen, for example, married in North Carolina in the 1700s, signifying their deliberate preservation of Sephardic heritage. Susanna reflects on how her family’s dark features and unique cultural practices set them apart, fostering a sense of otherness and resilience.




    Sephardic Traditions and Hidden Identities
    Growing up in Atlanta, Susanna experienced the blending of Jewish and Christian traditions, influenced by her mother Juanita's Sephardic heritage. Although Juanita passed as Native American for safety, she subtly preserved Jewish customs, such as the prohibition against sweeping dirt through a door, a Sephardic superstition. Susanna's childhood was enriched with Mediterranean and classical Spanish music, alongside southern bluegrass, reflecting her family's diverse cultural roots. Despite societal pressures, her mother ensured that Susanna and her siblings received Hebrew names and participated in Jewish rituals within a messianic framework.

    Embracing and Documenting Heritage
    Susanna's journey to uncover and honor her family's Sephardic roots led her to delve into genealogy, revealing the complex layers of her ancestry. Her DNA confirmed Mediterranean, Iberian, and African heritage, prompting further research into her ancestors' migrations and intermarriages. Susanna's quest to document her family's history serves as a mitzvah, a way to honor and preserve the rich cultural tapestry her ancestors wove through centuries of resilience and adaptation. She is committed to continuing her mother's legacy of cultural preservation and restoration, ensuring that their Sephardic heritage is recognized and celebrated for generations to come.

    Susanna Sprong-Fernandez recounts her emotional journey through northern Spain, recognizing herself as the first in her family to return in five centuries since her Sephardic Jewish ancestors fled the Spanish Inquisition. In 1492, the expulsion forced many Jews from the Iberian Peninsula to seek refuge in nearby regions, such as Bayonne and La Rochelle, before attempting to escape to the Americas. By the 1600s, her ancestors had settled in the colonial American South, a region characterized by cultural intermingling and conflict among European colonizers, Africans, and Indigenous populations. Her family, blending Sephardic Jewish, Native American, and African American heritage, thrived in this diverse environment despite the challenges they faced.
    `,
    "Marc and Fleur Attia":
    `
    Marc and Fleur Attia Family History: Notes
    Prepared by Marc and Fleur
    October 2018

    Place of Marriage: Marseille		

    Religion: Jewish

    Siblings: Marc is the twelfth Child of Salomon and the fifth of Anini.

    Siblings were born in Algeria, Israël and France following the migration of Salomon and Anini after the Algerian indépendance (Jewish were French in Algeria (which was a French colony) since décret Cremieux of 1870.

    Fleur is a twin to Dov.
    Fleur’s father was born in Lyon in 1944 near the building of the Gestapo. His family hid their Jewish identity during this time, and his elder brother was hidden in a catholic family.

    During the WWII, Marc's parents were in Algeria. They have been affected by the Algerian war (1954/1962) and have to leave Algeria after the independence of 1962.

    Your view of America: A country full of energy

    Place of Marriage: Marseille		

    Parent’s religious beliefs and practices: We came from a family of believers, but Marc’s family is much more practicing than Fleur’s.

    Your religious beliefs and practices: We are both believers and practicing.

    Your view of other world religions and their prophets: There are different expressions of wisdom.

    Your family's view of other world religions: there is one God for everyone: Artwork in the home: paintings, sculpture, etc.

    `,
    "Souleiman Ghali":
    `
    Souleiman Ghali Family History
    Prepared by Souleiman Ghali
    January 2004

    Both Souleiman and wife, Doaa, were born in Lebanon to a Palestinian family of refuges from Palestine the city of Yafa. They both studied there. Both Souleiman and Doaa parents come from the same city in Palestine called Yafa.

    Souleiman has 4 brothers and 2 sisters. Both parents passed away grow up as a Palestinian in the country of Lebanon came to study in the United States as a student went to Pharmacy school due to limited resources never finished due to lack of money and finical support.  Started working his way up lived in many states: Texas, New York, and finally made Bay Area his home in 1995.  

    Souleiman owns his own business that does Graphic Design, Printing and Copying. He is very active in the Muslim community. He is the co-founder of the Islamic Society of San Francisco, which is the largest Islamic Institution in San Francisco and operates a Mosque and School.  He is very active in the San Francisco Bay Area and a regular advocate for Muslim and ARAB CAUSES. Souleiman strongly believes in bridging the gap between the Abrahamic Faiths:  Jews, Christians, and Muslims.

    Doaa is an accountant supervisor for Artizn Co, which is a technology consultant firm, one of the main providers of Engineers for companies like CISCO SYSTEM. She works in a high-tech environment and is well regarded for her talent and devotion to her faith.

    Souleiman and Doaa have two boys, Ibrahim and Muhammad, who were both born in the United States.

    Souleiman and Doaa are proud to be Muslim Americans, love this country, and want to give their best to make America a better place for all. 

    `,
    "Salma Arastu":
    `
    Salma Arastu Family History

    Alamdar Husain Arastu, an architect and Salma Arastu, an artist were married in Hyderabad, India. Salma accepted Islam at the time of their marriage and her maiden name is Kamlesh Valiram Hingorani. After marriage, they moved to Tehran, Iran for a couple of years and after revolution in Iran the family moved to Kuwait. By this time, they had two kids, Shirin and Samad Husain. Alamdar worked as an architect in National Housing at Kuwait and Salma continued practicing her art. In 1986 the couple immigrated to USA with children and settled in Bethlehem Pennsylvania as one of Alamdar’s brother was already living there. Shirin became scientist with post doc in biochemistry from Stanford University and got married and settled in the Bay area. Alamdar and Salma moved to the Bay Area in 2006. Alamdar is working with Housing Development Authority, a Federal Government Agency in San Francisco. Salma has continued her career as a professional artist and rents a beautiful large studio in Berkeley. They both live in Emeryville, California.  Samad Husain was trained as an artist and recently got married and lives in Los Angeles with his wife.
    `,
    "Ismailia Biaye":
    `
    Ismailia Biaye Family History

    The Biaye family settled in the Bay Area in the late eighties. Ismaila and Mariama welcomed their first child, Josephine, in San Francisco, then her brother Karim and sisters Fatima, Mariétou, aka Bijou, and Mariam Biaye. They attended Saint Dominic Elementary (SF), Lincoln Community International School (Accra, Ghana), Sir Francis Drake High School (San Anselmo), and Emery High (Emeryville). The children, now college students and adult professionals, are first-generation Americans born in San Francisco to Senegalese parents. Ismaila, best known as Monsieur Biaye or Ismaël, has a dual career as a teacher and business communication strategist. Mariama studied fashion merchandising, and also graduated as a bilingual specialist in administrative office management. She currently works in the field of aviation security in San Francisco. Josephine studied Culinary Arts and is a professional chef. Karim is a coordinator in procurement and supply chain management. Fatima is a fashion stylist for a major international apparel retailer. Mariétou is an account executive for a leading dental software management company. Mariam is graduating in Art History from San Francisco State University in the Fall of 2019. Ismaila and Heidi worked in tandem to develop and teach a curriculum with Global Arts & Education and Alliance Française de San Francisco.
    `,
    "Mona Anonymous":
    `
    Mona Anonymous Family History

    This family has asked to remain anonymous. The names provided for the titles of their portraits on the following page are all fictitious and created by Mona Anonymous, the wife and mother.

    `,
  };
  if (families[id] && familiesText[families[id]]) return familiesText[families[id]];
  return ""; // if family is blank, could probably disable the button IMPORTANT
}