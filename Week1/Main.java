import java.util.*;
public class  Main{
    public static void main(String[] args) {
        int []a = new int[10000000];
        int i =0;
        Scanner sc = new Scanner(System.in);
        while(sc.hasNextInt()){
            a[i] = sc.nextInt();
            i++;
        }
        for (int j : a) {
            System.out.println(j);
        }
        sc.close();
    }
}