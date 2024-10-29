// Kelas Printer yang memiliki tugas mencetak
class Printer {
    void print(String message) {
        System.out.println(message);
    }
}

// Kelas Manager yang mendelegasikan tugas cetak ke Printer
class Manager {
    private Printer printer = new Printer();

    void printDocument(String doc) {
        printer.print(doc);  // Mendelegasikan tugas ke objek Printer
    }
}

// Penggunaan delegation
public class Main {
    public static void main(String[] args) {
        Manager manager = new Manager();
        manager.printDocument("Delegation Example");  // Output: Delegation Example
    }
}
