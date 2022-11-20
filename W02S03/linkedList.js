class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    //INSERT FIRST NODE
    insertFirst(data){
        this.head=new Node(data, this.head)
    }

    //PRINT LIST DATA
    printListData(){
        let current=this.head

        while(current){
            console.log(current.data)
            current=current.next
        }
    }

    //INSERT LAST NODE
    insertLast(data){
        let node=new Node(data)
        let current

        //If empty, make head
        if(!this.head){
            this.head=node
        }
        else{
            current=this.head

            while(current.next){
                current=current.next
            }
            current.next=node
        }
        this.size++
    }

    //CLEAR LIST
    clearList(){
        this.head=null
        this.size=0
    }

    //INSERT AT INDEX
    insertAt(data, index){
    //if index is out of range
    if(index>0 && index>this.size){
        return
    }

    //if first index
    if(index===0){
        this.insertFirst(data)
        return
    }

    const node=new Node(data)
    let current, previous

    //set current to first
    current=this.head
    let count=0

    while(count<index){
        previous=current //node before index
        count++
        current=current.next  //node after index
    }

    node.next=current
    previous.next=node

    this.size++
    }

    //GET AT
    getAt(index){
        let current=this.head
        let count=0

        while(current){
            if(count==index){
                console.log(current.data)
            }
            count++
            current=current.next
        }
        return null
    }

    //REMOVE AT
    removeAt(index){
        if(index>0 && index>this.size){
            return
        }

        let current=this.head
        let previous
        let count=0

        //remove first
        if(index===0){
            this.head=current.next
        }
        else{
            while(count<index){
                count++
                previous=current
                current=current.next
            }
            previous.next=current.next
        }
        this.size--
    }


}

//Linkedlist Hackerrank Insert at Position

function insertNodeAtPosition(node, element, index) {
    // Write your code here
    
    if(index === 0) {
        let newNode = new SinglyLinkedListNode(element);
        newNode.next = node;
        return node;
    }
    
    let current = node;
    let indexCounter = 0;
    
    while(current.next != null && indexCounter+1 != index) {
        current = current.next;
        indexCounter++;
    }
    
    let newNode = new SinglyLinkedListNode(element);
    newNode.next = current.next;
    current.next = newNode;
    
    return node;
}