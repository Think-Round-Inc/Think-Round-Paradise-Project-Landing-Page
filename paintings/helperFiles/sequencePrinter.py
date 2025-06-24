def sequencePrinter(a):
    d = {};
    for i in range(len(a)):
        if (i == 0):
            d[a[0]] = [ a[len(a) - 1] , a[1] ];
        elif (i == len(a) - 1):
            d[a[i]] = [a[i-1],a[0]];
        else:
            d[a[i]] = [a[i-1],a[i+1]];
    return d;

        
if __name__ == "__main__":
    #Christians Sequence
    #print(sequencePrinter("1a,1b,1c,2_a,2_b,2_c,2_d,2a,2b,2d,3_a,3_b,3_c,3_d,3a,3b,3c,3d,4a,4b,4c,4d,5a,5b,5c,6_a,6_b,6_c,6_d,6a,6b,6c,6d,7a,7b,7c,7d,8a,8b,8c,8d,9a,9b,9c,9d,10_a,10_b,10_c,10_d,10a,10c,10d,11,12,13,14,15".split(",")))
    #Jews Sequence
    print(sequencePrinter("1a,1b,1c,1d,2'a,2'b,2'c,2'd,2,2b,2c,2d,3'a,3'b,3'c,3'd,3a,3b,3c,3d,4c,4d,5a,5b,5c,5d,6'a,6'b,6'c,6'd,6a,6b,6c,6d,7a,7b,7c,7d,8a,8b,8c,8d,9a9b,9c,9d,10'a,10'b,10'c,10'd,10a,10b,10c,10d,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32".split(',')))
    #
