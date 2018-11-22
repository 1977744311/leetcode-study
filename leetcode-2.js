
// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {
    var carry = 0;//carry存放进位
    var result = new ListNode(),temp = new ListNode();
    result.next = temp;//主要是想用result记录结果链表的表头
    var v1 = l1,v2 = l2;
    while(v1||v2){
        var sum = (v1?v1.val:0)+(v2?v2.val:0)+carry;  
        //v1?v1.val:0是考虑l1和l2可能不等长    
        carry = sum > 9 ? 1 : 0;
        temp.val = sum - carry * 10;//某一位上最终值
        temp.next = (v1?v1.next:null)||(v2?v2.next:null)?(new ListNode()):(carry==1?(new ListNode(1)):null);
        //l1或l2未遍历完，则新建一个ListNode结点；否则检查carry==1判断此时是否有进位，有则也需新建一个ListNode结点，
        //val置1，next置null，以上情况除外，则当前节点temp的next置null
        temp = temp.next?temp.next:null;
        //temp向后移动
        v1 = v1?(v1.next?v1.next:null):null;
        //v1存在且v1.next存在，就继续遍历，否则置null，下面v2类似，双重判断也是考虑考虑l1和l2可能不等长
        v2 = v2?(v2.next?v2.next:null):null;
    };
    return result.next;
};