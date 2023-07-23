var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "colophon-1",
  "level": "1",
  "url": "colophon-1.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "   smakdonald.github   https:\/\/smakdonald.github.io\/index.html   copyright  "
},
{
  "id": "acknowledgement-1",
  "level": "1",
  "url": "acknowledgement-1.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " The content of this text is heavily based on the 817-818 sequence of courses offered in UNL, specificlly those taught during the 2021 and 2022 academic years. As such, the content and structure have been heavily based on the notes of the following faculty:    Eloísa Grifo      Alexandra Seceleanu      Mark Walker Mark has somehow managed to be the only member of the mathematics faculty to not have so much as a single page on the UNL website. Luckily, there are workarounds.    I am very thankful to Eloísa, Alexandra, and Mark for sharing their .tex files with me. Fittingly, I would also like to acknowledge Eloísa for having an acknowledgement section in her lecture notes, yielding a template for my own.  And, as always, I reserve a speical thank you for Erin McNicholas and Inga Johnson for forever tinting the world of mathematics purple.  "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "How to Use This Book",
  "body": "How to Use This Book  I'm still in the process of figuring out exactly what this text is for. Some possibilities include:   Future lecture notes for the hopeful possibility that one day I will teach a course over this material.    Current notes for students taking the first year algebra sequence.    Assistance in studying for the Algebra Qualifying Exam at UNL.    Clout.     Blocks  Here are the types of environments you are likely to encounter throughout the text and what they are used for.  Definition   These are pretty standard and probably what you'd be expecting. The building blocks of what we'll be working with.   Examples   Specific instances of a definition. For example, the empty set, is an example of a set, and thus would be contained within an example environment. At some point the line between example and definition becomes incoherently blurred, but I have done my best to keep things consistent.   Theorem   A result.   Lemma   A true mathematical statement that was proven mainly to help in the proof of some theorem.   Corollary   An important result whose proof comes directly from a previous theorem.   Proposition   Results that require proof but are more specific and\/or contained in a larger result coming later.   Exploration   Generalizations, specifics, smaller results, things are are less essential to the course or results who's proofs are usually skipped.   Problem   Used for qualifying exam problems.   Remark   Providing context in the form of foreshadowing or content not covered in this text. In general, there shouldn't be anything defined in a remark, they should be entirely optional.   Convention      Discussion   Usually for arguing about notation.   Footnotes   Sometimes act like remarks. However, most are strictly for fun and add little to no educational value, at least in the traditional sense. It should really be feetnote if you think about it.       "
},
{
  "id": "p-11",
  "level": "2",
  "url": "preface-1.html#p-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition Examples Theorem Lemma Corollary Proposition Exploration Problem Remark Convention Discussion Footnotes "
},
{
  "id": "sec-group-basics",
  "level": "1",
  "url": "sec-group-basics.html",
  "type": "Section",
  "number": "1.1",
  "title": "Group Basics",
  "body": "Group Basics  Binary Operations and Algebraic Structures    The operation was a success, but I'm afraid the doctor is dead.   Steve Martin   A Brief Notational Aside  At various points throughout this text, the author may use \"mathcal\" notation for definitions that do not normally require it (such as for a group, for a ring, etc.). In the realm of higher mathematics, this is what is known as a typo , and should be reported to the proper authorities as soon as possible.   We begin, as all great volumes of mathematics are like to do, somewhere in the middle. Though everything that you need from the beginning can be found in .   Binary Operation   A binary operation on a set is a   a binary operation  binary operation     Binary Operations     Addition ( ) and multiplication ( ) are both binary operations on and .    Let denote the power set of a set . Then and are both binary operations on .    Let denote the set of all functions from to itself. Then is a binary operation on .      Binary Properties   Let be a binary operation on a set .   An operation satisfies the associative property if for all we have . associative property     An operation satisfies the commutative property if for all . commutative property     An operation satisfies the identity property if there exists such that for all . Such an element is called an identity element . the identity element of a group  identity property     An operation satisfies the inverse property if for each , there is an element such that , where is an identity element of . Such an element is called an inverse of the element . inverse property         The notation is used for an arbitary binary operation. When context is sufficient for understanding, we often write instead of for simplicity.    The notation is also sometimes used for an arbitary binary operation, though we avoid doing so here to prevent confusion with the mutliplication operation, as seen in in .   Algebraic Structures      A magma (or binary structure ) is a pair where is a set and is a binary operation on . magma  binary structure     A semigroup is a pair where is a set and is a binary operation on satisfying the associative property. semigroup     A monoid is a pair where is a set and is a binary operation on satisfying the associative and identity properties. monoid     A group is a pair where is a set and is a binary operation on satisfying the associative, identity, and inverse properties. a group and its binary operation  group     An abelian group is a pair where is a set and is a binary operation on satisfying the associative, identity, inverse, and commutative properties. abelian group         Though a group is a pair, we will usually refer to the group by only naming the underlying set, .    Some mathematicians choose to define a semigroup as we have defined a monoid (e.g. satisfying both the associative and identity properties). We have yet to grasp why. This is the one and only \"Mark\". All following \"Marks\" will be \"Remarks\".     Magmas, semigroups, and monoids won't show up all that much moving forward, but they are doing a surprising amount of leg work under the surface, and it's worth mentioning them. However, if you're feeling overwhelmed by the amount of new words buzzing around, those three are probably the ones you can worry about the least, at least in this text.   For those who appreciate a snazzy visual, here is a handy little graphic.  Algebraic Structures  Relations between algebraic structures. Quiver     Groups    Most great learning happens in groups.   Ken Robinson    Properties of Groups   Let be a group.  Unique Identity  The element satisfying of is unique, and we thus refer to it as the identity element of . identity element    Unique Inverses  For each , the element satisfying of is unique, and we thus refer to it as the inverse of .   Cancellation cancellation  Suppose . If then . Similarly, if we have .          Suppose there exist two elements and such that and for all . Then Thus , making the identity element unique.    For a given , if and for some and , then Thus , making inverses unique.    Suppose for some . By the , there exists some such that . Observe         The property of holds in monoids (and unital magmas) as well.    The inverse of an element is often written , for reasons we will see in the next section.   Group Examples      The trivial group trivial group is the group with a single element . the trivial group: e.g. the group containing only an identity element      and each form an abelian group, where denotes traditional addition. The axioms of arithmetic guarantee the validity of the group axioms as well as the commutativity of the group operation. Thus all four groups are abelian.    For any positive integer , let Then is a non-abelian group under matrix multiplication known as the general linear group general linear group . General linear group     For any , let denote the . Then forms an abelian group where denotes addition modulo .       Identity Theft  In familiar groups of numbers, is used for the identity element of a multiplicative group (and likewise in additive groups). Often, is used for the identity element in arbitrary groups, though we will not do so here.   Specific General Linear Groups  In general, is a group for any field (whatever those are). To jump ahead and discover what those are, see: .    The following example illustrates a few important examples of something called a , which is defined explicitely in terms of rings (whatever those are) in the aptly named .  Groups of Units   Each of the following subsets form an abelian group under multiplication.   The subset of .     , , and .    For each , the subset of .        Some texts use the notation to denote groups of units. For example, would be written .    Prove that .   Some Extra Groups    Opposite Group  Let be a multiplicative group, and define opposite group be the set equipped with the operation , where . Then is a group. Opposite groups are used in category theory to describe something called duality between algebraic structures.    Evening the Odds  Let denote the set of even integers and denote the set of odd integers. Then is a group, whereas is not.         Since is a group and its operation is associative, we have for any elements , , in . This implies that for any elements in . Thus, associativity is satisfied in . Let be the identity element of . In , the identity element is still because for any element in , we have , where denotes the operation in . Therefore, the identity element property is satisfied in . Let be an element in . Since is also in , being a group implies that there exists an inverse element in such that , where is the identity element of . This implies that in as well. Therefore, every element in has an inverse in , satisfying the inverse element property.    Integer addition is associative, which means that for any three integers , and , the expression is equal to . Thus, associativity is satisfied for . The identity element for addition is . For any even integer , adding to it does not change its parity (evenness). Hence, the identity element property is satisfied for . For every even integer , there exists an inverse element denoted as such that . The negative of an even integer is also an even integer. Adding an even integer to its negative results in , which is the identity element. Therefore, the inverse element property is satisfied for . The identity element for addition is . However, is not an odd integer, so the identity element property is not satisfied for .      Properties of Inverses   If is a group and , then    and               We show that both and are inverses of the element . First, recall from that . However, it is also the case that . By part (2) of we know that inverses are unique, and thus it must be the case that .    By definition, is the inverse of the element . However, we also have Thus both and are inverses of , making them equal by part (2) of .       The second portion of can be generalized.  Big 'Ole Inverses  If is a group and , then .   Generalized Associative Law  If an element of a monoid is contructed from a sequence of elements in this order by repeatedly inserting parenthesis and applying the operation, the element must equal and so is independent of the mode of bracketing. This is similar to general relativity, relatively speaking ('Relatively' meaning 'not very much at all' in this context).    Certainly we may assume that . If is an element constructed from in the prescribed manner, we can write where and are constructed from and respectively . If , the result follows by induction on . Otherwise we can write and : once again the result follows by induction on n.   As a result of any expression formed from the elements in that order can be written without parenthesis, which will save us oodles of time down the line. This is usually a result that is simply taken for granted and left unstated; we leave it here for the sake of completeness and ~rigor~. And yes, oodles is the best word to go here and no, I will not be changing it.    "
},
{
  "id": "def-binop",
  "level": "2",
  "url": "sec-group-basics.html#def-binop",
  "type": "Definition",
  "number": "1.1",
  "title": "Binary Operation.",
  "body": "Binary Operation   A binary operation on a set is a   a binary operation  binary operation    "
},
{
  "id": "ex-binop",
  "level": "2",
  "url": "sec-group-basics.html#ex-binop",
  "type": "Example",
  "number": "1.2",
  "title": "Binary Operations.",
  "body": "Binary Operations     Addition ( ) and multiplication ( ) are both binary operations on and .    Let denote the power set of a set . Then and are both binary operations on .    Let denote the set of all functions from to itself. Then is a binary operation on .     "
},
{
  "id": "def-binary-properties",
  "level": "2",
  "url": "sec-group-basics.html#def-binary-properties",
  "type": "Definition",
  "number": "1.3",
  "title": "Binary Properties.",
  "body": "Binary Properties   Let be a binary operation on a set .   An operation satisfies the associative property if for all we have . associative property     An operation satisfies the commutative property if for all . commutative property     An operation satisfies the identity property if there exists such that for all . Such an element is called an identity element . the identity element of a group  identity property     An operation satisfies the inverse property if for each , there is an element such that , where is an identity element of . Such an element is called an inverse of the element . inverse property       "
},
{
  "id": "convention-1",
  "level": "2",
  "url": "sec-group-basics.html#convention-1",
  "type": "Convention",
  "number": "1.4",
  "title": "",
  "body": " The notation is used for an arbitary binary operation. When context is sufficient for understanding, we often write instead of for simplicity.  "
},
{
  "id": "def-algebraic-structures",
  "level": "2",
  "url": "sec-group-basics.html#def-algebraic-structures",
  "type": "Definition",
  "number": "1.5",
  "title": "Algebraic Structures.",
  "body": "Algebraic Structures      A magma (or binary structure ) is a pair where is a set and is a binary operation on . magma  binary structure     A semigroup is a pair where is a set and is a binary operation on satisfying the associative property. semigroup     A monoid is a pair where is a set and is a binary operation on satisfying the associative and identity properties. monoid     A group is a pair where is a set and is a binary operation on satisfying the associative, identity, and inverse properties. a group and its binary operation  group     An abelian group is a pair where is a set and is a binary operation on satisfying the associative, identity, inverse, and commutative properties. abelian group       "
},
{
  "id": "convention-2",
  "level": "2",
  "url": "sec-group-basics.html#convention-2",
  "type": "Convention",
  "number": "1.6",
  "title": "",
  "body": " Though a group is a pair, we will usually refer to the group by only naming the underlying set, .  "
},
{
  "id": "insight-1",
  "level": "2",
  "url": "sec-group-basics.html#insight-1",
  "type": "Mark",
  "number": "1.7",
  "title": "",
  "body": " Some mathematicians choose to define a semigroup as we have defined a monoid (e.g. satisfying both the associative and identity properties). We have yet to grasp why. This is the one and only \"Mark\". All following \"Marks\" will be \"Remarks\".   "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-group-basics.html#remark-1",
  "type": "Remark",
  "number": "1.8",
  "title": "",
  "body": " Magmas, semigroups, and monoids won't show up all that much moving forward, but they are doing a surprising amount of leg work under the surface, and it's worth mentioning them. However, if you're feeling overwhelmed by the amount of new words buzzing around, those three are probably the ones you can worry about the least, at least in this text.  "
},
{
  "id": "figure-magma",
  "level": "2",
  "url": "sec-group-basics.html#figure-magma",
  "type": "Figure",
  "number": "1.9",
  "title": "Algebraic Structures",
  "body": "Algebraic Structures  Relations between algebraic structures. Quiver   "
},
{
  "id": "thm-properties-of-groups",
  "level": "2",
  "url": "sec-group-basics.html#thm-properties-of-groups",
  "type": "Theorem",
  "number": "1.10",
  "title": "Properties of Groups.",
  "body": "Properties of Groups   Let be a group.  Unique Identity  The element satisfying of is unique, and we thus refer to it as the identity element of . identity element    Unique Inverses  For each , the element satisfying of is unique, and we thus refer to it as the inverse of .   Cancellation cancellation  Suppose . If then . Similarly, if we have .          Suppose there exist two elements and such that and for all . Then Thus , making the identity element unique.    For a given , if and for some and , then Thus , making inverses unique.    Suppose for some . By the , there exists some such that . Observe       "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-group-basics.html#remark-2",
  "type": "Remark",
  "number": "1.11",
  "title": "",
  "body": " The property of holds in monoids (and unital magmas) as well.  "
},
{
  "id": "convention-3",
  "level": "2",
  "url": "sec-group-basics.html#convention-3",
  "type": "Convention",
  "number": "1.12",
  "title": "",
  "body": " The inverse of an element is often written , for reasons we will see in the next section.  "
},
{
  "id": "ex-group-examples",
  "level": "2",
  "url": "sec-group-basics.html#ex-group-examples",
  "type": "Example",
  "number": "1.13",
  "title": "Group Examples.",
  "body": "Group Examples      The trivial group trivial group is the group with a single element . the trivial group: e.g. the group containing only an identity element      and each form an abelian group, where denotes traditional addition. The axioms of arithmetic guarantee the validity of the group axioms as well as the commutativity of the group operation. Thus all four groups are abelian.    For any positive integer , let Then is a non-abelian group under matrix multiplication known as the general linear group general linear group . General linear group     For any , let denote the . Then forms an abelian group where denotes addition modulo .      "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "sec-group-basics.html#remark-3",
  "type": "Remark",
  "number": "1.14",
  "title": "Specific General Linear Groups.",
  "body": "Specific General Linear Groups  In general, is a group for any field (whatever those are). To jump ahead and discover what those are, see: .   "
},
{
  "id": "ex-group-of-units",
  "level": "2",
  "url": "sec-group-basics.html#ex-group-of-units",
  "type": "Example",
  "number": "1.15",
  "title": "Groups of Units.",
  "body": "Groups of Units   Each of the following subsets form an abelian group under multiplication.   The subset of .     , , and .    For each , the subset of .      "
},
{
  "id": "exe-group-of-units-in-zp",
  "level": "2",
  "url": "sec-group-basics.html#exe-group-of-units-in-zp",
  "type": "Exploration",
  "number": "1.16",
  "title": "<span class=\"process-math\">\\(\\Z\/p^\\times\\)<\/span>.",
  "body": " Prove that .  "
},
{
  "id": "exe-extra-groups",
  "level": "2",
  "url": "sec-group-basics.html#exe-extra-groups",
  "type": "Exploration",
  "number": "1.17",
  "title": "Some Extra Groups.",
  "body": "Some Extra Groups    Opposite Group  Let be a multiplicative group, and define opposite group be the set equipped with the operation , where . Then is a group. Opposite groups are used in category theory to describe something called duality between algebraic structures.    Evening the Odds  Let denote the set of even integers and denote the set of odd integers. Then is a group, whereas is not.         Since is a group and its operation is associative, we have for any elements , , in . This implies that for any elements in . Thus, associativity is satisfied in . Let be the identity element of . In , the identity element is still because for any element in , we have , where denotes the operation in . Therefore, the identity element property is satisfied in . Let be an element in . Since is also in , being a group implies that there exists an inverse element in such that , where is the identity element of . This implies that in as well. Therefore, every element in has an inverse in , satisfying the inverse element property.    Integer addition is associative, which means that for any three integers , and , the expression is equal to . Thus, associativity is satisfied for . The identity element for addition is . For any even integer , adding to it does not change its parity (evenness). Hence, the identity element property is satisfied for . For every even integer , there exists an inverse element denoted as such that . The negative of an even integer is also an even integer. Adding an even integer to its negative results in , which is the identity element. Therefore, the inverse element property is satisfied for . The identity element for addition is . However, is not an odd integer, so the identity element property is not satisfied for .     "
},
{
  "id": "thm-group-inverses",
  "level": "2",
  "url": "sec-group-basics.html#thm-group-inverses",
  "type": "Theorem",
  "number": "1.18",
  "title": "Properties of Inverses.",
  "body": "Properties of Inverses   If is a group and , then    and               We show that both and are inverses of the element . First, recall from that . However, it is also the case that . By part (2) of we know that inverses are unique, and thus it must be the case that .    By definition, is the inverse of the element . However, we also have Thus both and are inverses of , making them equal by part (2) of .      "
},
{
  "id": "exe-big-inverses",
  "level": "2",
  "url": "sec-group-basics.html#exe-big-inverses",
  "type": "Exploration",
  "number": "1.19",
  "title": "Big 'Ole Inverses.",
  "body": "Big 'Ole Inverses  If is a group and , then .  "
},
{
  "id": "exe-general-associativity",
  "level": "2",
  "url": "sec-group-basics.html#exe-general-associativity",
  "type": "Exploration",
  "number": "1.20",
  "title": "Generalized Associative Law.",
  "body": "Generalized Associative Law  If an element of a monoid is contructed from a sequence of elements in this order by repeatedly inserting parenthesis and applying the operation, the element must equal and so is independent of the mode of bracketing. This is similar to general relativity, relatively speaking ('Relatively' meaning 'not very much at all' in this context).    Certainly we may assume that . If is an element constructed from in the prescribed manner, we can write where and are constructed from and respectively . If , the result follows by induction on . Otherwise we can write and : once again the result follows by induction on n.  "
},
{
  "id": "sec-order-power",
  "level": "1",
  "url": "sec-order-power.html",
  "type": "Section",
  "number": "1.2",
  "title": "Order and Power",
  "body": "Order and Power  Power    Having power is not nearly as important as what you choose to do with it.   Roald Dahl   Though it might seem natural to write the product using the notation , we have no notion of what that means in the world of groups. Do exponents behave the way we want them to in groups, or does something disasterous occur? Do exponents even exist? Do I ? In this section, we attempt to answer as many of these questions as is philosophically feasible.  power   Let be an element of a multiplicative group . For , the  power  of is defined recursively as follows:    , , and ; Convenient notation, isn't it? Almost like we planned it.      when ; and     when .     If was an additive group, then we would write intead of . This would be called a multiple of instead of a power.    Laws of Exponents   Let and be an element of a group . Then    and     .          Let and ; then by induction on and the definition . Multiplying on both sides by we deduce that and . Finally inversion of the equation yields . Hence the law is established in all cases.    If , it follows from (1) that . Now assume that ; then since .       Abelian Exponents  Let . The equation holds for all if and only if is abelian.    Order    Good order is the foundation of all things.   Edmund Burke   Order      In a group , the order of an element order of a group element  is the least positive integer such that . If no such exists, we say has infinite order. We write for the order of . Order of an element     The order of a group order of a group  is the of the set , denoted . Order of a group         Some authors use the notation or to refer to the order of a group. We won't name names, but they know who they are.   Order Examples      in every group .     in     In the additive groups , , , and every nonzero (i.e., nonidentity) element has infinite order. Groups with this property are known as torsion-free , a concept explored in more advanced contexts.     In the additve group , the element has order , as and .      We arrive at one of the central conjectures of group theory, posed by none other tha UNL's Tom \"Destroyer of Worlds\" Marley. Best of luck. For the more astute reader, you may observe that this is one of the more solvable conjectures in mathematics. This is the first problem Tom assigns every time he teaches 817 and it's become a bit of a running joke.   Marley's Conjecture  Every group of order is abelian.   Let be a group with elements, and suppose there are elements such that for some elements . Since , we must have , , and . Since has only elements and , either or . Without loss, say the former occurs. But implies and we know commutes with , and hence this is not possible. If , then and if then , both of which are impossible. Since were arbitrary, must be abelian.   Properties of Order      An element of a group has order if and only if .         If for and  , then .          Let be a group and consider an element in with order . By definition, the order of an element is the smallest positive integer such that , where is the identity element of . Since the order of is , we have . This implies that is equal to the identity element .       there or  If is a group such every non-identity element has order , then is abelian.   Element Order   Let be a group and any element.   If , then are all distinct elements of .    If , then for all integers (positive or negative) with .     .    If then .          Coming soon!    Coming soon!    Coming soon!    Let . We have for some by the division algorithm . We have and so, by the definition of order , it must be that        Order Hors d'oeuvre  Let be a group.   Let be an element of finite order. Show that has finite order for any integer , and in fact     Prove that for all in , holds.       "
},
{
  "id": "def-power",
  "level": "2",
  "url": "sec-order-power.html#def-power",
  "type": "Definition",
  "number": "1.21",
  "title": "<span class=\"process-math\">\\(n\\th\\)<\/span> power.",
  "body": "power   Let be an element of a multiplicative group . For , the  power  of is defined recursively as follows:    , , and ; Convenient notation, isn't it? Almost like we planned it.      when ; and     when .     If was an additive group, then we would write intead of . This would be called a multiple of instead of a power.   "
},
{
  "id": "thm-exponent-laws",
  "level": "2",
  "url": "sec-order-power.html#thm-exponent-laws",
  "type": "Theorem",
  "number": "1.22",
  "title": "Laws of Exponents.",
  "body": "Laws of Exponents   Let and be an element of a group . Then    and     .          Let and ; then by induction on and the definition . Multiplying on both sides by we deduce that and . Finally inversion of the equation yields . Hence the law is established in all cases.    If , it follows from (1) that . Now assume that ; then since .      "
},
{
  "id": "exe-abelian-exponents",
  "level": "2",
  "url": "sec-order-power.html#exe-abelian-exponents",
  "type": "Exploration",
  "number": "1.23",
  "title": "Abelian Exponents.",
  "body": "Abelian Exponents  Let . The equation holds for all if and only if is abelian.  "
},
{
  "id": "def-order",
  "level": "2",
  "url": "sec-order-power.html#def-order",
  "type": "Definition",
  "number": "1.24",
  "title": "Order.",
  "body": "Order      In a group , the order of an element order of a group element  is the least positive integer such that . If no such exists, we say has infinite order. We write for the order of . Order of an element     The order of a group order of a group  is the of the set , denoted . Order of a group       "
},
{
  "id": "ex-order",
  "level": "2",
  "url": "sec-order-power.html#ex-order",
  "type": "Example",
  "number": "1.25",
  "title": "Order Examples.",
  "body": "Order Examples      in every group .     in     In the additive groups , , , and every nonzero (i.e., nonidentity) element has infinite order. Groups with this property are known as torsion-free , a concept explored in more advanced contexts.     In the additve group , the element has order , as and .     "
},
{
  "id": "exe-order-4-abelian",
  "level": "2",
  "url": "sec-order-power.html#exe-order-4-abelian",
  "type": "Exploration",
  "number": "1.26",
  "title": "Marley's Conjecture.",
  "body": "Marley's Conjecture  Every group of order is abelian.   Let be a group with elements, and suppose there are elements such that for some elements . Since , we must have , , and . Since has only elements and , either or . Without loss, say the former occurs. But implies and we know commutes with , and hence this is not possible. If , then and if then , both of which are impossible. Since were arbitrary, must be abelian.  "
},
{
  "id": "thm-order-properties",
  "level": "2",
  "url": "sec-order-power.html#thm-order-properties",
  "type": "Theorem",
  "number": "1.27",
  "title": "Properties of Order.",
  "body": "Properties of Order      An element of a group has order if and only if .         If for and  , then .          Let be a group and consider an element in with order . By definition, the order of an element is the smallest positive integer such that , where is the identity element of . Since the order of is , we have . This implies that is equal to the identity element .      "
},
{
  "id": "exe-every-element-order-2",
  "level": "2",
  "url": "sec-order-power.html#exe-every-element-order-2",
  "type": "Exploration",
  "number": "1.28",
  "title": "<span class=\"process-math\">\\(b\\)<\/span> there or <span class=\"process-math\">\\(b^2=e\\)<\/span>.",
  "body": "there or  If is a group such every non-identity element has order , then is abelian.  "
},
{
  "id": "thm-element-order",
  "level": "2",
  "url": "sec-order-power.html#thm-element-order",
  "type": "Theorem",
  "number": "1.29",
  "title": "Element Order.",
  "body": "Element Order   Let be a group and any element.   If , then are all distinct elements of .    If , then for all integers (positive or negative) with .     .    If then .          Coming soon!    Coming soon!    Coming soon!    Let . We have for some by the division algorithm . We have and so, by the definition of order , it must be that       "
},
{
  "id": "exe-order-and-gcd",
  "level": "2",
  "url": "sec-order-power.html#exe-order-and-gcd",
  "type": "Exploration",
  "number": "1.30",
  "title": "Order Hors d'oeuvre.",
  "body": "Order Hors d'oeuvre  Let be a group.   Let be an element of finite order. Show that has finite order for any integer , and in fact     Prove that for all in , holds.     "
},
{
  "id": "sec-common-groups",
  "level": "1",
  "url": "sec-common-groups.html",
  "type": "Section",
  "number": "1.3",
  "title": "Common Groups",
  "body": "Common Groups   We examine two of the most commonly encountered groups in all of algebra: the dihedral group and the symmetric group. The quaternions are also here.    Dihedral Groups    Reflection is one of the most underused yet powerful tools for success.   Richard Carlson   Isometry and Symmetry   For any integer , let denote a regular -gon regular -gon . An isometry isometry of the plane is a function that is a bijection and preserves the Euclidean distance for any ). A symmetry symmetry of is an isometry that maps to itself.     By the latter I don't mean that fixes each of the points of , but rather that , that is every point of is mapped to a (possibly different) point of and every point of is the image of some point in via .   There are three natural types of isometry in    rotations about a point,    reflections in a line,    and translations: in the latter the point (x, y) is moved to (x + a, y + b) for some fixed a, b.   It can be shown that every isometry is a rotation, a translation, a reflection, or the product of a reflection and a translation.  Composition of Symmetries  The of two symmetries of is again a symmetry of .   Let be the composition of and , where denotes composition. Let's take an arbitrary point on the object. When we apply the symmetry to , it is mapped to a new point, let's call it . Since is a symmetry, is still on the object. Next, when we apply the symmetry to , it is mapped to a new point, let's call it . Again, since is a symmetry, is still on the object. Therefore, the composition maps the point on the object to the point , which is also on the object. Hence, the composition of symmetries is again a symmetry.   Dihedral Group   The dihedral group  dihedral group is the set of symmetries of the regular -gon equipped with the binary operation given by composition. Dihedral Group     Rotations and Reflections  Assume that the regular -gon is drawn in the plane with its center at the origin and one vertex on the axis.   If denotes rotation about the origin by radians counter-clockwise, then . It's inverse is rotation by clock-wise. rotation     For another example, for any line of symmetry of , reflection about that line gives an element of . By our convention for how to draw , the -axis is a line of symmetry for , and we let denote reflection about the -axis. reflection       Elements of  Elements of . Quiver     We see and , which may make some intuitive sense. The fact that is a reflection and hence that may be slightly less aparent.   Order of      Every element in can be written as or for .            We will use some geometric notions freely without complete justification. For example, we use that if an isometry of fixes two points and , then it is either the identity element or it is reflection about the line . We also use that every element of maps the origin to itself (since the origin is the center of mass of ). Finally, we use that every isometry of is either orientation preserving or orientation reversing .  Label the vertices of as , with being the vertex located on the positive -axis, being the vertex adjacent to in the counter-clockwise direction, etc. We have , , etc., and so . Moreover any isometry must send a vertex to a vertex because the vertices are the points on at largest distance from the origin.  Let be an arbitrary symmetry of . Then for some . Then the element fixes and the origin, and hence either or from the discussion above. We get that or , proving the first assertion.  Since , we see that if for , then . We have for any since the former is orientation reversing and the latter is orientation preserving. If for , then upon multiplying on the left of we get .     Symmetric Groups    Symmetry is overrated. Overrated is symmetry.   Larry Wall   Let's introduce another very important example: symmetric groups.  Permutation   A permutation permutation of a set is a bijective function . The set of all permutations of a set is denoted . permutation group       Symmetric Group   For any , the symmetric group symmetric group is the set equipped with the composition of functions as its binary operation. Symmetric group     Order of  Prove .   To count the number of permutations in , we can consider the process of constructing a permutation step by step.   For the first element, we have choices. We can choose any of the elements as the image of the first element.    For the second element, we have choices. After choosing the image of the first element, we have remaining elements to choose from for the image of the second element.    Continuing this process, for the third element, we have choices, for the fourth element we have choices, and so on.    Finally, for the last element, we have only one choice remaining.   The total number of permutations is obtained by multiplying the number of choices at each step. Hence, the total number of permutations in is given by , which is equal to . Therefore, the order of the symmetric group is .   Cycles and Transpositions   If are distinct integers between and , then denotes the element of that satisfies for . Such a permutation is called a cycle or an -cycle if we want to emphasize its length. A -cycle is often called a transposition . cycle  transposition     Cycle Example  For example, , regarded as an element of sends to , to and to , and it fixes . (Note that the value of in cycle notation is sometime ambiguous.)   -Cycles in  Determine the number of -cycles in .    Note that distinct lists of integers represent the same cycle if they are cyclical rearrangements of each other, e.g., . However, .   We compose cycles the same way we compose functions.  Composing Cycles  Consider This equation might lead you to the false belief that every element of is a cycle. This is not true — for example, the product cannot be written as a single cycle. What is true is that every element of is uniquely (up to ordering) the product of disjoint cycles. We'll prove that soon in .   Disjoint Commutes   Disjoint cycles commute, disjoint cycles that is, if , and then .    Let's consider two disjoint cycles, denoted as and , where 's and 's are distinct elements. Let's analyze the composition : When we apply the composition to an element , we have: Similarly, when we apply the composition to an element , we have: From these calculations, we can observe that the composition maps each element to (if ), and it maps to . Similarly, the composition maps each element to (if ), and it maps to . Now, let's consider the composition and evaluate its effect on the elements ai and am:  Comparing these results with the previous composition, we see that the effects on and are the same in both compositions. This implies that the compositions and are identical. Therefore, we have shown that disjoint cycles commute, meaning that the order in which they are composed does not affect the final result.    While sufficent, this is not a necessary condition.  Non-Disjoint Commutes  Find elements that commute but are not disjoint.   Cycle Decompostion      Each can be written as a product (composition) of disjoint cycles cycle decompostion , and such a factorization is unique up to the ordering of the factors.    Each can be written a product of transpositions.          First, note that the identity element of is the empty product of cycles.  Fix and let . The homomorphism given as the inclusion of into determines an action of on the set . This action decomposes into disjoint orbits. Since generates , belong to the same orbit iff for some . Let be any one of these orbits with size at least . Now pick any element . Consider the sequence of element of . The axioms of a group action gives us that the first time this sequence has a repitition occurs when , where . Let for and let be the -cycle . Then and  act the same on . More formally, fixes all elements of . Also, fixes . It follows that where the product is taken over all orbits of size at least . This proves existense.  For uniqueness, if is a product of disjoint cycles, then the orbits under the action of are the one-element orbits along with the orbits of each . Moreover, if the orbit of is , then and act the same on and fixes . It follows that .    It suffices to prove this for a single cycle and, by symmetry, for the cycle . The equation is seen to hold by direct calculation.        For the uniqueness part of statement (1) in one needs to establish a convention regarding -cycles, that is one needs to stipulate either that the -cycles will not be recorded (which gives the shortest such factorization) or that all the -cycles will be recorded (which gives the longest such factorization, but also the only one that makes it clear what the number is).   Now that we know that every permutation can be written as a product of transpositions, we can utilize this to gain insight into many aspects of the group structure, such as the order of elements.  Permutation Order   The order of a permutation is the least common multiple of the lengths of the cycles it is a product of.  In particular, every transposition is its own inverse and the order of a -cycle in is .    Coming soon!    We can also categorize elements of permutation groups by the number of transpositions it is a product of.  Even and Odd Permutaitons   A permutation is even even permutation is if is the product of an even number of transpositions, otherwise it is odd odd permutation .    Even and Odd Properties      A -cycle is even if and only if is odd.    Products of even permutations are even, products of odd permutations are even, products of even and odd permutations are odd.    The identity permutation in is even, but not odd.    No permutation in is both even and odd.       Alternating Group   The alternating group alternating group  is the subset of all even cycles of . the alternating group on elements     Order of  Prove .   For an element to be in An, it must be an even permutation. This means it can be expressed as a product of an even number of transpositions. Each transposition in the product swaps two elements. There are n choices for the first element, and after fixing the first element, there are (n-1) choices for the second element. This gives us n * (n-1) choices for the first transposition. For the second transposition, there are (n-2) choices for the first element and (n-3) choices for the second element. Continuing this process, we have (n-2) * (n-3) * ... * 2 * 1 choices for the remaining transpositions. In total, the number of even permutations (elements in An) is given by n * (n-1) * (n-2) * ... * 2 * 1, which is equal to n!. However, we have counted each even permutation twice because we can write a given even permutation as a product in different orders. For example, (1 2) * (3 4) is the same as (3 4) * (1 2). Therefore, we divide the total number of even permutations (n!) by 2 to remove the duplicate counting. Hence, the order of the alternating group An is n!\/2.    The Quaternions  Quaternions...though beautifully ingenious, have been an unmixed evil to those who have touched them in any way. William Thomson  Quaternions   The quaternion group quaternion group  is a set with elements satisfying the following relations: is the identity element and      The quaternion group arises in the study of rotations in three dimensions. It has important applications in computer graphics and computer vision, as well as in physics and algebra.  Heinous Commutes  Provide explicit examples to show , and are not abelian groups when .   There isn't much for us to do with right now, but you'd be surprised by the unusual places this group manages to crop up.   "
},
{
  "id": "def-iso-and-sym",
  "level": "2",
  "url": "sec-common-groups.html#def-iso-and-sym",
  "type": "Definition",
  "number": "1.31",
  "title": "Isometry and Symmetry.",
  "body": "Isometry and Symmetry   For any integer , let denote a regular -gon regular -gon . An isometry isometry of the plane is a function that is a bijection and preserves the Euclidean distance for any ). A symmetry symmetry of is an isometry that maps to itself.   "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "sec-common-groups.html#remark-4",
  "type": "Remark",
  "number": "1.32",
  "title": "",
  "body": " By the latter I don't mean that fixes each of the points of , but rather that , that is every point of is mapped to a (possibly different) point of and every point of is the image of some point in via .  "
},
{
  "id": "exe-symmetry-compostion",
  "level": "2",
  "url": "sec-common-groups.html#exe-symmetry-compostion",
  "type": "Exploration",
  "number": "1.33",
  "title": "Composition of Symmetries.",
  "body": "Composition of Symmetries  The of two symmetries of is again a symmetry of .   Let be the composition of and , where denotes composition. Let's take an arbitrary point on the object. When we apply the symmetry to , it is mapped to a new point, let's call it . Since is a symmetry, is still on the object. Next, when we apply the symmetry to , it is mapped to a new point, let's call it . Again, since is a symmetry, is still on the object. Therefore, the composition maps the point on the object to the point , which is also on the object. Hence, the composition of symmetries is again a symmetry.  "
},
{
  "id": "def-d2n",
  "level": "2",
  "url": "sec-common-groups.html#def-d2n",
  "type": "Definition",
  "number": "1.34",
  "title": "Dihedral Group.",
  "body": "Dihedral Group   The dihedral group  dihedral group is the set of symmetries of the regular -gon equipped with the binary operation given by composition. Dihedral Group    "
},
{
  "id": "ex-d2n-elements",
  "level": "2",
  "url": "sec-common-groups.html#ex-d2n-elements",
  "type": "Example",
  "number": "1.35",
  "title": "Rotations and Reflections.",
  "body": "Rotations and Reflections  Assume that the regular -gon is drawn in the plane with its center at the origin and one vertex on the axis.   If denotes rotation about the origin by radians counter-clockwise, then . It's inverse is rotation by clock-wise. rotation     For another example, for any line of symmetry of , reflection about that line gives an element of . By our convention for how to draw , the -axis is a line of symmetry for , and we let denote reflection about the -axis. reflection      "
},
{
  "id": "figure-d4",
  "level": "2",
  "url": "sec-common-groups.html#figure-d4",
  "type": "Figure",
  "number": "1.36",
  "title": "Elements of <span class=\"process-math\">\\(D_4\\)<\/span>",
  "body": "Elements of  Elements of . Quiver   "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-common-groups.html#remark-5",
  "type": "Remark",
  "number": "1.37",
  "title": "",
  "body": " We see and , which may make some intuitive sense. The fact that is a reflection and hence that may be slightly less aparent.  "
},
{
  "id": "thm-d2n-order",
  "level": "2",
  "url": "sec-common-groups.html#thm-d2n-order",
  "type": "Proposition",
  "number": "1.38",
  "title": "Order of <span class=\"process-math\">\\(D_{2n}\\)<\/span>.",
  "body": "Order of      Every element in can be written as or for .            We will use some geometric notions freely without complete justification. For example, we use that if an isometry of fixes two points and , then it is either the identity element or it is reflection about the line . We also use that every element of maps the origin to itself (since the origin is the center of mass of ). Finally, we use that every isometry of is either orientation preserving or orientation reversing .  Label the vertices of as , with being the vertex located on the positive -axis, being the vertex adjacent to in the counter-clockwise direction, etc. We have , , etc., and so . Moreover any isometry must send a vertex to a vertex because the vertices are the points on at largest distance from the origin.  Let be an arbitrary symmetry of . Then for some . Then the element fixes and the origin, and hence either or from the discussion above. We get that or , proving the first assertion.  Since , we see that if for , then . We have for any since the former is orientation reversing and the latter is orientation preserving. If for , then upon multiplying on the left of we get .   "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "sec-common-groups.html#def-permutation",
  "type": "Definition",
  "number": "1.39",
  "title": "Permutation.",
  "body": "Permutation   A permutation permutation of a set is a bijective function . The set of all permutations of a set is denoted . permutation group      "
},
{
  "id": "def-symmetric-group",
  "level": "2",
  "url": "sec-common-groups.html#def-symmetric-group",
  "type": "Definition",
  "number": "1.40",
  "title": "Symmetric Group <span class=\"process-math\">\\(S_n\\)<\/span>.",
  "body": "Symmetric Group   For any , the symmetric group symmetric group is the set equipped with the composition of functions as its binary operation. Symmetric group    "
},
{
  "id": "exe-sn-order",
  "level": "2",
  "url": "sec-common-groups.html#exe-sn-order",
  "type": "Exploration",
  "number": "1.41",
  "title": "Order of <span class=\"process-math\">\\(S_n\\)<\/span>.",
  "body": "Order of  Prove .   To count the number of permutations in , we can consider the process of constructing a permutation step by step.   For the first element, we have choices. We can choose any of the elements as the image of the first element.    For the second element, we have choices. After choosing the image of the first element, we have remaining elements to choose from for the image of the second element.    Continuing this process, for the third element, we have choices, for the fourth element we have choices, and so on.    Finally, for the last element, we have only one choice remaining.   The total number of permutations is obtained by multiplying the number of choices at each step. Hence, the total number of permutations in is given by , which is equal to . Therefore, the order of the symmetric group is .  "
},
{
  "id": "def-cycle",
  "level": "2",
  "url": "sec-common-groups.html#def-cycle",
  "type": "Definition",
  "number": "1.42",
  "title": "Cycles and Transpositions.",
  "body": "Cycles and Transpositions   If are distinct integers between and , then denotes the element of that satisfies for . Such a permutation is called a cycle or an -cycle if we want to emphasize its length. A -cycle is often called a transposition . cycle  transposition    "
},
{
  "id": "ex-cycle",
  "level": "2",
  "url": "sec-common-groups.html#ex-cycle",
  "type": "Example",
  "number": "1.43",
  "title": "Cycle Example.",
  "body": "Cycle Example  For example, , regarded as an element of sends to , to and to , and it fixes . (Note that the value of in cycle notation is sometime ambiguous.)  "
},
{
  "id": "exe-1-cycles",
  "level": "2",
  "url": "sec-common-groups.html#exe-1-cycles",
  "type": "Exploration",
  "number": "1.44",
  "title": "<span class=\"process-math\">\\(1\\)<\/span>-Cycles in <span class=\"process-math\">\\(S_n\\)<\/span>.",
  "body": "-Cycles in  Determine the number of -cycles in .  "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-common-groups.html#remark-6",
  "type": "Remark",
  "number": "1.45",
  "title": "",
  "body": " Note that distinct lists of integers represent the same cycle if they are cyclical rearrangements of each other, e.g., . However, .  "
},
{
  "id": "exe-composing-cycles",
  "level": "2",
  "url": "sec-common-groups.html#exe-composing-cycles",
  "type": "Example",
  "number": "1.46",
  "title": "Composing Cycles.",
  "body": "Composing Cycles  Consider This equation might lead you to the false belief that every element of is a cycle. This is not true — for example, the product cannot be written as a single cycle. What is true is that every element of is uniquely (up to ordering) the product of disjoint cycles. We'll prove that soon in .  "
},
{
  "id": "prop-disjoint-cycles-commute",
  "level": "2",
  "url": "sec-common-groups.html#prop-disjoint-cycles-commute",
  "type": "Proposition",
  "number": "1.47",
  "title": "Disjoint Commutes.",
  "body": "Disjoint Commutes   Disjoint cycles commute, disjoint cycles that is, if , and then .    Let's consider two disjoint cycles, denoted as and , where 's and 's are distinct elements. Let's analyze the composition : When we apply the composition to an element , we have: Similarly, when we apply the composition to an element , we have: From these calculations, we can observe that the composition maps each element to (if ), and it maps to . Similarly, the composition maps each element to (if ), and it maps to . Now, let's consider the composition and evaluate its effect on the elements ai and am:  Comparing these results with the previous composition, we see that the effects on and are the same in both compositions. This implies that the compositions and are identical. Therefore, we have shown that disjoint cycles commute, meaning that the order in which they are composed does not affect the final result.   "
},
{
  "id": "exe-non-disjoint-commutes",
  "level": "2",
  "url": "sec-common-groups.html#exe-non-disjoint-commutes",
  "type": "Exploration",
  "number": "1.48",
  "title": "Non-Disjoint Commutes.",
  "body": "Non-Disjoint Commutes  Find elements that commute but are not disjoint.  "
},
{
  "id": "thm-cycledecomp",
  "level": "2",
  "url": "sec-common-groups.html#thm-cycledecomp",
  "type": "Theorem",
  "number": "1.49",
  "title": "Cycle Decompostion.",
  "body": "Cycle Decompostion      Each can be written as a product (composition) of disjoint cycles cycle decompostion , and such a factorization is unique up to the ordering of the factors.    Each can be written a product of transpositions.          First, note that the identity element of is the empty product of cycles.  Fix and let . The homomorphism given as the inclusion of into determines an action of on the set . This action decomposes into disjoint orbits. Since generates , belong to the same orbit iff for some . Let be any one of these orbits with size at least . Now pick any element . Consider the sequence of element of . The axioms of a group action gives us that the first time this sequence has a repitition occurs when , where . Let for and let be the -cycle . Then and  act the same on . More formally, fixes all elements of . Also, fixes . It follows that where the product is taken over all orbits of size at least . This proves existense.  For uniqueness, if is a product of disjoint cycles, then the orbits under the action of are the one-element orbits along with the orbits of each . Moreover, if the orbit of is , then and act the same on and fixes . It follows that .    It suffices to prove this for a single cycle and, by symmetry, for the cycle . The equation is seen to hold by direct calculation.      "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "sec-common-groups.html#remark-7",
  "type": "Remark",
  "number": "1.50",
  "title": "",
  "body": " For the uniqueness part of statement (1) in one needs to establish a convention regarding -cycles, that is one needs to stipulate either that the -cycles will not be recorded (which gives the shortest such factorization) or that all the -cycles will be recorded (which gives the longest such factorization, but also the only one that makes it clear what the number is).  "
},
{
  "id": "prop-permutation-order",
  "level": "2",
  "url": "sec-common-groups.html#prop-permutation-order",
  "type": "Proposition",
  "number": "1.51",
  "title": "Permutation Order.",
  "body": "Permutation Order   The order of a permutation is the least common multiple of the lengths of the cycles it is a product of.  In particular, every transposition is its own inverse and the order of a -cycle in is .    Coming soon!   "
},
{
  "id": "def-even-odd-permutation",
  "level": "2",
  "url": "sec-common-groups.html#def-even-odd-permutation",
  "type": "Definition",
  "number": "1.52",
  "title": "Even and Odd Permutaitons.",
  "body": "Even and Odd Permutaitons   A permutation is even even permutation is if is the product of an even number of transpositions, otherwise it is odd odd permutation .   "
},
{
  "id": "prop-even-odd-properties",
  "level": "2",
  "url": "sec-common-groups.html#prop-even-odd-properties",
  "type": "Proposition",
  "number": "1.53",
  "title": "Even and Odd Properties.",
  "body": "Even and Odd Properties      A -cycle is even if and only if is odd.    Products of even permutations are even, products of odd permutations are even, products of even and odd permutations are odd.    The identity permutation in is even, but not odd.    No permutation in is both even and odd.      "
},
{
  "id": "def-alternating-group",
  "level": "2",
  "url": "sec-common-groups.html#def-alternating-group",
  "type": "Definition",
  "number": "1.54",
  "title": "Alternating Group.",
  "body": "Alternating Group   The alternating group alternating group  is the subset of all even cycles of . the alternating group on elements    "
},
{
  "id": "exe-an-order",
  "level": "2",
  "url": "sec-common-groups.html#exe-an-order",
  "type": "Exploration",
  "number": "1.55",
  "title": "Order of <span class=\"process-math\">\\(A_n\\)<\/span>.",
  "body": "Order of  Prove .   For an element to be in An, it must be an even permutation. This means it can be expressed as a product of an even number of transpositions. Each transposition in the product swaps two elements. There are n choices for the first element, and after fixing the first element, there are (n-1) choices for the second element. This gives us n * (n-1) choices for the first transposition. For the second transposition, there are (n-2) choices for the first element and (n-3) choices for the second element. Continuing this process, we have (n-2) * (n-3) * ... * 2 * 1 choices for the remaining transpositions. In total, the number of even permutations (elements in An) is given by n * (n-1) * (n-2) * ... * 2 * 1, which is equal to n!. However, we have counted each even permutation twice because we can write a given even permutation as a product in different orders. For example, (1 2) * (3 4) is the same as (3 4) * (1 2). Therefore, we divide the total number of even permutations (n!) by 2 to remove the duplicate counting. Hence, the order of the alternating group An is n!\/2.  "
},
{
  "id": "def-quaternions",
  "level": "2",
  "url": "sec-common-groups.html#def-quaternions",
  "type": "Definition",
  "number": "1.56",
  "title": "Quaternions.",
  "body": "Quaternions   The quaternion group quaternion group  is a set with elements satisfying the following relations: is the identity element and     "
},
{
  "id": "exe-heinous-commutes",
  "level": "2",
  "url": "sec-common-groups.html#exe-heinous-commutes",
  "type": "Exploration",
  "number": "1.57",
  "title": "Heinous Commutes.",
  "body": "Heinous Commutes  Provide explicit examples to show , and are not abelian groups when .  "
},
{
  "id": "sec-gphoms",
  "level": "1",
  "url": "sec-gphoms.html",
  "type": "Section",
  "number": "2.1",
  "title": "Group Homomorphisms",
  "body": "Group Homomorphisms  Homomorphism? I Barely Know 'em!    In the end, the character of a civilization is encased in its structures.   Frank Gehry   Group Homomorphism   If and are groups, a homomorphism group homomorphism from is is a function such that , where and denote the multiplication rules for and , respectively. the common symbols we use to denote homomorphisms      We use to denote an arbitrary homomorphism instead of to differentiate between homormorphisms and ordinary functions. Other greek letters, such as and are used for more specific homomorphisms, as we will see in the coming sections. For those interested, is used for inner automorphisms, is used permutation representations corresponding to group actions, and is used for permutation representations of the left regular action.     Some folk use for homomorphisms as well as functions that are not homomorphisms. They should be avoided and probably smell weird.   Intuitively, a group homomorphism preserves the algebraic structure of the group, while allowing us to compare and relate different groups. In this way, group homomorphisms allow us to study the properties of groups by comparing them to other groups that we already understand well.  Homormophism Examples     The identity map is a group homomorphism for any group , this is known as the trivial homomorphism trivial homomorphism .    The zero map is a group homomorphism for any group .    The sign homomorphism sign homomorphism  that sends even permuations to and odd permutations to is a homomorphism.    The exponential map exponential map  is a homomorphism.    The natural log map natural log map  is a homomorphism.    For any positive integer , the map determinant map determinant map  is a group homomorphism.       Specifically, homomorphisms will preserve the additive structure, such as the identity element and inverse elements.  Homomorphism Preservations   If is a homomorphism of groups, then    and     .       For the first, and now multiply by . For the second, implies .    Compositions of Homomorphisms   If and are group homomorphisms, the composition is a group homomorphism.    Sweet   Let and be abelian groups. Then the set of all group homomorphisms from to is itself an abelian group.     Kernel   Let be a homomorphism of groups. The kernel kernel of a group homomorphism of is the set  the kernel of a homomorphism      Injective and Surjective Homomorphisms      A group homomorphism is injective if and only if .    A group homomorphism is surjective if and only if .           is immediate from the definitions (since for all homomorphisms ). If and then and thus which implies .    This is identical to ; the homomorphism aspect adds nothing of interest. Though one could argue that adding nothing of interest is interesting, causing it to add something of interest.        Homomorphisms and Order  If is a homomorphism of groups and is finte, then .    "
},
{
  "id": "def-ghom",
  "level": "2",
  "url": "sec-gphoms.html#def-ghom",
  "type": "Definition",
  "number": "2.1",
  "title": "Group Homomorphism.",
  "body": "Group Homomorphism   If and are groups, a homomorphism group homomorphism from is is a function such that , where and denote the multiplication rules for and , respectively. the common symbols we use to denote homomorphisms    "
},
{
  "id": "convention-4",
  "level": "2",
  "url": "sec-gphoms.html#convention-4",
  "type": "Convention",
  "number": "2.2",
  "title": "",
  "body": " We use to denote an arbitrary homomorphism instead of to differentiate between homormorphisms and ordinary functions. Other greek letters, such as and are used for more specific homomorphisms, as we will see in the coming sections. For those interested, is used for inner automorphisms, is used permutation representations corresponding to group actions, and is used for permutation representations of the left regular action.   "
},
{
  "id": "ex-group-homom-examples",
  "level": "2",
  "url": "sec-gphoms.html#ex-group-homom-examples",
  "type": "Example",
  "number": "2.3",
  "title": "Homormophism Examples.",
  "body": "Homormophism Examples     The identity map is a group homomorphism for any group , this is known as the trivial homomorphism trivial homomorphism .    The zero map is a group homomorphism for any group .    The sign homomorphism sign homomorphism  that sends even permuations to and odd permutations to is a homomorphism.    The exponential map exponential map  is a homomorphism.    The natural log map natural log map  is a homomorphism.    For any positive integer , the map determinant map determinant map  is a group homomorphism.     "
},
{
  "id": "thm-grphomom-preservations",
  "level": "2",
  "url": "sec-gphoms.html#thm-grphomom-preservations",
  "type": "Theorem",
  "number": "2.4",
  "title": "Homomorphism Preservations.",
  "body": "Homomorphism Preservations   If is a homomorphism of groups, then    and     .       For the first, and now multiply by . For the second, implies .   "
},
{
  "id": "thm-ghom-composition",
  "level": "2",
  "url": "sec-gphoms.html#thm-ghom-composition",
  "type": "Theorem",
  "number": "2.5",
  "title": "Compositions of Homomorphisms.",
  "body": "Compositions of Homomorphisms   If and are group homomorphisms, the composition is a group homomorphism.   "
},
{
  "id": "exe-group-hom",
  "level": "2",
  "url": "sec-gphoms.html#exe-group-hom",
  "type": "Foreshadowing",
  "number": "2.1",
  "title": "<span class=\"process-math\">\\(\\Hom\\)<\/span> Sweet <span class=\"process-math\">\\(\\Hom\\)<\/span>.",
  "body": "Sweet   Let and be abelian groups. Then the set of all group homomorphisms from to is itself an abelian group.   "
},
{
  "id": "def-group-kernel",
  "level": "2",
  "url": "sec-gphoms.html#def-group-kernel",
  "type": "Definition",
  "number": "2.6",
  "title": "Kernel.",
  "body": "Kernel   Let be a homomorphism of groups. The kernel kernel of a group homomorphism of is the set  the kernel of a homomorphism     "
},
{
  "id": "thm-inj-surj-ghom",
  "level": "2",
  "url": "sec-gphoms.html#thm-inj-surj-ghom",
  "type": "Theorem",
  "number": "2.7",
  "title": "Injective and Surjective Homomorphisms.",
  "body": "Injective and Surjective Homomorphisms      A group homomorphism is injective if and only if .    A group homomorphism is surjective if and only if .           is immediate from the definitions (since for all homomorphisms ). If and then and thus which implies .    This is identical to ; the homomorphism aspect adds nothing of interest. Though one could argue that adding nothing of interest is interesting, causing it to add something of interest.       "
},
{
  "id": "exe-order-preservation",
  "level": "2",
  "url": "sec-gphoms.html#exe-order-preservation",
  "type": "Exploration",
  "number": "2.8",
  "title": "Homomorphisms and Order.",
  "body": "Homomorphisms and Order  If is a homomorphism of groups and is finte, then .  "
},
{
  "id": "sec-gpisos",
  "level": "1",
  "url": "sec-gpisos.html",
  "type": "Section",
  "number": "2.2",
  "title": "Group Isomorphisms",
  "body": "Group Isomorphisms  Isomorphisms    The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function.   F. Scott Fitzgerald   Group Ismorphism   A homomorphism is called an isomorphism isomorphism if there exists a homomorphism such that and .  If is an isomorphism, and are called isomorphic isomorphic , written . Isomorphic     Intuitively, a group isomorphism establishes a one-to-one correspondence between the elements of two groups, such that they have exactly the same algebraic structure. This means that the groups are essentially the same, up to a relabeling of their elements.  Equivalent Isomorphism Characterization   Suppose is a group homomorphism. Then an isomorphism if and only if is bijective (one-to-one and onto).    We start by recalling that a function between two sets is bijective if and only if there is a function such that and .  The is thus immediate. For the direction, if is bijective homomorphism, then it certainly has a set-theoretic two-sided inverse . But we need to show is actually a homomorphism: for we have . Since is one-to-one, .     Moving forward, we will essentially treat as the de-facto definition of a group isomorphism. Rather than end every proof with a reference to , we will instead enshrine its monumental achievements of within this remark. To alleviate some of the corresponding guilt asociated with this decision I am referencing as many times as possible, as is important and should not be forgotten.   Isomorphism Examples     The identity map is a group isomomorphism for any group .     , where is as defined in .         The exponential and natural logarithm maps from are inverses, making them isomorphisms as well.      Opposite Day  Let be a group and the of . Then .   Coming soon!    Isomorphism Invariants   Let and be groups. If is an isomorphism, then the following hold:           for all and for all      is abelian if and only if is abelian          is finitely generated if and only if is finitely generated.       Something's Missing  Justify why the following pairs of groups are not isomorphic.   and    and    and    and      Coming soon!   Isomorphisms form Equivalence Relation           If , then     If and , then        Coming soon!     Automorphisms    Self preservation is the first law of nature.   Samuel Butler  Group Automorphism   Let be a group. An isomorphism is called an automorphism automorphism of . The set of automorphisms of a group is called the automorphism group automorphism group of and denoted .     In we saw that the identity map is a group isomomorphism from a group to itself, making an automorphism. This may prove (pun intended) useful in the following proposition.   The Automorphism Group   The set of automorphisms of , denoted , is a group under composition. the automorphism group of a group     Coming soon!    Complex Conjugation Automorphism  Prove that the function given by is an automorphism.   Coming soon!        Coming soon!    Notice that we have actually shown that the composition of automorphisms is an automorphism, both through (as automorphisms are isomorphisms) and (as groups are closed under their operation)   Automorphism groups may also give us information about whether or not our group is abelian.  Abelian Groups and Automorphisms  Let be a group.   The map given by for all is an automorphism if and only if is abelian.    If then is abelian and every non-identity element of has order .      Inner Automorphism   Let be a group and . The function defined by is called the inner automorphism inner automorphism of induced by . The set of inner automorphisms inner automorphism group of is denoted .    Let's make sure this is indeed an automorphism to avoid any potential awkwardness down the line.  The Conjugation Automorphism   Let be a group and . Then for all .    Notice , proving that is a homomorhism from to itself.  Observe that for any , we have since . Also, , which is obvious. It follows that and . This proves has a two-sided inveerse and hence is an isomorphism. In fact, it shows that .     There is indeed a notion of outer automorphisms as well, though we currently lack the tools to define them rigorously.    "
},
{
  "id": "def-gpiso",
  "level": "2",
  "url": "sec-gpisos.html#def-gpiso",
  "type": "Definition",
  "number": "2.9",
  "title": "Group Ismorphism.",
  "body": "Group Ismorphism   A homomorphism is called an isomorphism isomorphism if there exists a homomorphism such that and .  If is an isomorphism, and are called isomorphic isomorphic , written . Isomorphic    "
},
{
  "id": "thm-iso-def",
  "level": "2",
  "url": "sec-gpisos.html#thm-iso-def",
  "type": "Theorem",
  "number": "2.10",
  "title": "Equivalent Isomorphism Characterization.",
  "body": "Equivalent Isomorphism Characterization   Suppose is a group homomorphism. Then an isomorphism if and only if is bijective (one-to-one and onto).    We start by recalling that a function between two sets is bijective if and only if there is a function such that and .  The is thus immediate. For the direction, if is bijective homomorphism, then it certainly has a set-theoretic two-sided inverse . But we need to show is actually a homomorphism: for we have . Since is one-to-one, .   "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "sec-gpisos.html#remark-8",
  "type": "Remark",
  "number": "2.11",
  "title": "",
  "body": " Moving forward, we will essentially treat as the de-facto definition of a group isomorphism. Rather than end every proof with a reference to , we will instead enshrine its monumental achievements of within this remark. To alleviate some of the corresponding guilt asociated with this decision I am referencing as many times as possible, as is important and should not be forgotten.  "
},
{
  "id": "ex-group-iso-examples",
  "level": "2",
  "url": "sec-gpisos.html#ex-group-iso-examples",
  "type": "Example",
  "number": "2.12",
  "title": "Isomorphism Examples.",
  "body": "Isomorphism Examples     The identity map is a group isomomorphism for any group .     , where is as defined in .         The exponential and natural logarithm maps from are inverses, making them isomorphisms as well.     "
},
{
  "id": "exe-isomorphic-to-opposite",
  "level": "2",
  "url": "sec-gpisos.html#exe-isomorphic-to-opposite",
  "type": "Exploration",
  "number": "2.13",
  "title": "Opposite Day.",
  "body": "Opposite Day  Let be a group and the of . Then .   Coming soon!  "
},
{
  "id": "thm-iso-inv",
  "level": "2",
  "url": "sec-gpisos.html#thm-iso-inv",
  "type": "Theorem",
  "number": "2.14",
  "title": "Isomorphism Invariants.",
  "body": "Isomorphism Invariants   Let and be groups. If is an isomorphism, then the following hold:           for all and for all      is abelian if and only if is abelian          is finitely generated if and only if is finitely generated.      "
},
{
  "id": "exe-not-isomorphic",
  "level": "2",
  "url": "sec-gpisos.html#exe-not-isomorphic",
  "type": "Exploration",
  "number": "2.15",
  "title": "Something's Missing.",
  "body": "Something's Missing  Justify why the following pairs of groups are not isomorphic.   and    and    and    and      Coming soon!  "
},
{
  "id": "thm-iso-equivalence-relation",
  "level": "2",
  "url": "sec-gpisos.html#thm-iso-equivalence-relation",
  "type": "Theorem",
  "number": "2.16",
  "title": "Isomorphisms form “Equivalence” Relation.",
  "body": "Isomorphisms form Equivalence Relation           If , then     If and , then        Coming soon!   "
},
{
  "id": "def-gp-automorphism",
  "level": "2",
  "url": "sec-gpisos.html#def-gp-automorphism",
  "type": "Definition",
  "number": "2.17",
  "title": "Group Automorphism.",
  "body": "Group Automorphism   Let be a group. An isomorphism is called an automorphism automorphism of . The set of automorphisms of a group is called the automorphism group automorphism group of and denoted .   "
},
{
  "id": "ex-identity-automorphism",
  "level": "2",
  "url": "sec-gpisos.html#ex-identity-automorphism",
  "type": "Example",
  "number": "2.18",
  "title": "",
  "body": " In we saw that the identity map is a group isomomorphism from a group to itself, making an automorphism. This may prove (pun intended) useful in the following proposition.  "
},
{
  "id": "prop-aut-is-group",
  "level": "2",
  "url": "sec-gpisos.html#prop-aut-is-group",
  "type": "Proposition",
  "number": "2.19",
  "title": "The Automorphism Group.",
  "body": "The Automorphism Group   The set of automorphisms of , denoted , is a group under composition. the automorphism group of a group     Coming soon!   "
},
{
  "id": "exe-complex-conjugation-automorphism",
  "level": "2",
  "url": "sec-gpisos.html#exe-complex-conjugation-automorphism",
  "type": "Exploration",
  "number": "2.20",
  "title": "Complex Conjugation Automorphism.",
  "body": "Complex Conjugation Automorphism  Prove that the function given by is an automorphism.   Coming soon!  "
},
{
  "id": "ex-z-aut",
  "level": "2",
  "url": "sec-gpisos.html#ex-z-aut",
  "type": "Exploration",
  "number": "2.21",
  "title": "<span class=\"process-math\">\\(\\Aut(\\Z)\\)<\/span>.",
  "body": "     Coming soon!  "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "sec-gpisos.html#remark-9",
  "type": "Remark",
  "number": "2.22",
  "title": "",
  "body": " Notice that we have actually shown that the composition of automorphisms is an automorphism, both through (as automorphisms are isomorphisms) and (as groups are closed under their operation)  "
},
{
  "id": "exe-inverse-map-and-abelian",
  "level": "2",
  "url": "sec-gpisos.html#exe-inverse-map-and-abelian",
  "type": "Exploration",
  "number": "2.23",
  "title": "Abelian Groups and Automorphisms.",
  "body": "Abelian Groups and Automorphisms  Let be a group.   The map given by for all is an automorphism if and only if is abelian.    If then is abelian and every non-identity element of has order .     "
},
{
  "id": "def-inner-automorphisms",
  "level": "2",
  "url": "sec-gpisos.html#def-inner-automorphisms",
  "type": "Definition",
  "number": "2.24",
  "title": "Inner Automorphism.",
  "body": "Inner Automorphism   Let be a group and . The function defined by is called the inner automorphism inner automorphism of induced by . The set of inner automorphisms inner automorphism group of is denoted .   "
},
{
  "id": "prop-conjugation-automorphism",
  "level": "2",
  "url": "sec-gpisos.html#prop-conjugation-automorphism",
  "type": "Proposition",
  "number": "2.25",
  "title": "The Conjugation Automorphism.",
  "body": "The Conjugation Automorphism   Let be a group and . Then for all .    Notice , proving that is a homomorhism from to itself.  Observe that for any , we have since . Also, , which is obvious. It follows that and . This proves has a two-sided inveerse and hence is an isomorphism. In fact, it shows that .   "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "sec-gpisos.html#remark-10",
  "type": "Remark",
  "number": "2.26",
  "title": "",
  "body": " There is indeed a notion of outer automorphisms as well, though we currently lack the tools to define them rigorously.  "
},
{
  "id": "sec-subgroups",
  "level": "1",
  "url": "sec-subgroups.html",
  "type": "Section",
  "number": "3.1",
  "title": "Subgroups",
  "body": "Subgroups  Subgroups    I have this fear of falling in front of large groups...that's why I tend not to wear heels.  Taylor Swift  Taylor Swift   Subgroup   A nonempty subset of a group is called a subgroup , denoted , if and only if is a group under the multiplication law of . Subgroup  in group theory, and usually denote subgroups.  subgroup   A subgroup of a group is a called proper subgroup, denoted , if and only if . proper subgroup  Proper subgroup     Subgroup Tests     Two Step Subgroup Test  If a subset of a group is nonempty and closed under multiplication and inversion, then is a subgroup.   One Step Subgroup Test  If a subset of a group is nonempty and satisfies for all , , then is a subgroup.   Finite Subgroup Test  If a finite subset of a group is nonempty and closed under multiplication, then is a subgroup.       We prove the one-step test first.  Assume is non-empty and for all , . Since is non-empty, there is an and hence . Since for any , is an identity element for . For any , , and so every element of has an inverse inside . For we have and thus and hence is closed under . This means that the restriction of the group operation of to is a well-defined group operation. This operation is associative by the axioms for the group . The axioms of a group have now been established for .  Now we prove the two step test.  Assume is non-empty and closed under multiplication and inversion. Then, for we have and . Since the hypothesis of the one-step test is satisfied, is a subgroup of .    Common Subgroups      and are subroups of , which we call the trivial subgroups of .               for all .     .    The set of all rotations is a subgroup of . Similarly, the set of reflections is also a subgroup.    Let and define . Then for all .       In fact, in the case of , these turn out to be the only subgroups of .  Subgroups of  The only subgroups of are the sets .   Whilst perusing , you may have noticed the following: If you didn't, don't worry. I won't tell anyeone ;)   Subgroups Preservations  Let be a subgroup of . Then the following hold:    .    If is abelian then so is .      Here are some slightly more involved properties.  Properties of Subgroups      Transitivity of Subgroups  If is a subgroup of and is a subgroup of , then is a subgroup of .    Intersections of Subgroups  If is a subgroup of for all in an index set , then is a subgroup of .    Unions of Subgroups  Let be a group and , subgroups. Prove that is a subgroup if and only if or .          Coming soon!    Let denote any indexing set and for each , let be a subgroup of . We need to prove is a subgroup. It's not empty since for all . If , then for each , and hence . It follows that .    Coming soon!       No Proper Unions  No finite group can be expressed as the union of two proper subgroups.   Part (3) of may prove useful!   Coming soon to an OER near you!   Subgroups not Symmetric  In we showed that subgroups form a transitve relation. Prove that the relation is reflexive (it can be one sentence) but not symmetric, and thus not an equivalence relation.   Special Linear Group   The special linear group with complex entries is defined  the special linear group  special linear group       The special linear group is a subgroup of the general linear group .    Torsion Subgroups      Let be an abelian group. Then the set of elements of finite order, which we denote , is a subgroup of , called the torsion subgroup of . torision subgroup     Show that the torision subgroup may not in fact be a subgroup if is not assumed to be abelian.       Group Homomorphisms and Subgroups     Images are Subgroups  If is a homomorphism of groups, then the image of is a subgroup of .   Kernels are Subgroups  If is a homomorphism of groups, then the kernel of is a subgroup of .   Preimages are Subgroups  If is a group homomorphism and then the preimage of , defined as , is a subgroup of .   Inclusions are Homomorphisms  If is a subgroup of a group , then the inclusion is a group homomorphism.       Cayley's Theorem   Every group is isomorphic to a subgroup of .     This is a nearly useless theorem.    Stuck in the Middle    Stay in the center, and you will be ready to move in any direction.   Alan Watts  Center of a Group   The center of a group , often written , is the set of elements of that commute with every element of . That is,  the center of a group  center of a group      Center is a Subgroup            is abelian    If , then        Only Element of Order  Let be a group and . If is the only element of order in , then .   Even Order Groups  Every group of even order contains an element of order . This is a direct result of , but proving it is possible with the tools we have.     "
},
{
  "id": "def-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#def-subgroup",
  "type": "Definition",
  "number": "3.1",
  "title": "Subgroup.",
  "body": "Subgroup   A nonempty subset of a group is called a subgroup , denoted , if and only if is a group under the multiplication law of . Subgroup  in group theory, and usually denote subgroups.  subgroup   A subgroup of a group is a called proper subgroup, denoted , if and only if . proper subgroup  Proper subgroup    "
},
{
  "id": "thm-subgroup-test",
  "level": "2",
  "url": "sec-subgroups.html#thm-subgroup-test",
  "type": "Theorem",
  "number": "3.2",
  "title": "Subgroup Tests.",
  "body": "Subgroup Tests     Two Step Subgroup Test  If a subset of a group is nonempty and closed under multiplication and inversion, then is a subgroup.   One Step Subgroup Test  If a subset of a group is nonempty and satisfies for all , , then is a subgroup.   Finite Subgroup Test  If a finite subset of a group is nonempty and closed under multiplication, then is a subgroup.       We prove the one-step test first.  Assume is non-empty and for all , . Since is non-empty, there is an and hence . Since for any , is an identity element for . For any , , and so every element of has an inverse inside . For we have and thus and hence is closed under . This means that the restriction of the group operation of to is a well-defined group operation. This operation is associative by the axioms for the group . The axioms of a group have now been established for .  Now we prove the two step test.  Assume is non-empty and closed under multiplication and inversion. Then, for we have and . Since the hypothesis of the one-step test is satisfied, is a subgroup of .   "
},
{
  "id": "ex-common-subgroups",
  "level": "2",
  "url": "sec-subgroups.html#ex-common-subgroups",
  "type": "Example",
  "number": "3.3",
  "title": "Common Subgroups.",
  "body": "Common Subgroups      and are subroups of , which we call the trivial subgroups of .               for all .     .    The set of all rotations is a subgroup of . Similarly, the set of reflections is also a subgroup.    Let and define . Then for all .      "
},
{
  "id": "exe-subgroups-of-z",
  "level": "2",
  "url": "sec-subgroups.html#exe-subgroups-of-z",
  "type": "Exploration",
  "number": "3.4",
  "title": "Subgroups of <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Subgroups of  The only subgroups of are the sets .  "
},
{
  "id": "exe-subgroup-preservations",
  "level": "2",
  "url": "sec-subgroups.html#exe-subgroup-preservations",
  "type": "Exploration",
  "number": "3.5",
  "title": "Subgroups Preservations.",
  "body": "Subgroups Preservations  Let be a subgroup of . Then the following hold:    .    If is abelian then so is .     "
},
{
  "id": "thm-subgroup-properties",
  "level": "2",
  "url": "sec-subgroups.html#thm-subgroup-properties",
  "type": "Theorem",
  "number": "3.6",
  "title": "Properties of Subgroups.",
  "body": "Properties of Subgroups      Transitivity of Subgroups  If is a subgroup of and is a subgroup of , then is a subgroup of .    Intersections of Subgroups  If is a subgroup of for all in an index set , then is a subgroup of .    Unions of Subgroups  Let be a group and , subgroups. Prove that is a subgroup if and only if or .          Coming soon!    Let denote any indexing set and for each , let be a subgroup of . We need to prove is a subgroup. It's not empty since for all . If , then for each , and hence . It follows that .    Coming soon!      "
},
{
  "id": "exe-no-proper-unions",
  "level": "2",
  "url": "sec-subgroups.html#exe-no-proper-unions",
  "type": "Exploration",
  "number": "3.7",
  "title": "No Proper Unions.",
  "body": "No Proper Unions  No finite group can be expressed as the union of two proper subgroups.   Part (3) of may prove useful!   Coming soon to an OER near you!  "
},
{
  "id": "exe-subgroup-not-symmetric",
  "level": "2",
  "url": "sec-subgroups.html#exe-subgroup-not-symmetric",
  "type": "Exploration",
  "number": "3.8",
  "title": "Subgroups not Symmetric.",
  "body": "Subgroups not Symmetric  In we showed that subgroups form a transitve relation. Prove that the relation is reflexive (it can be one sentence) but not symmetric, and thus not an equivalence relation.  "
},
{
  "id": "def-special-linear-group",
  "level": "2",
  "url": "sec-subgroups.html#def-special-linear-group",
  "type": "Definition",
  "number": "3.9",
  "title": "Special Linear Group.",
  "body": "Special Linear Group   The special linear group with complex entries is defined  the special linear group  special linear group    "
},
{
  "id": "prop-slg-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#prop-slg-subgroup",
  "type": "Proposition",
  "number": "3.10",
  "title": "<span class=\"process-math\">\\(\\SL_n(\\C)\\leq\\GL_n(\\C)\\)<\/span>.",
  "body": "  The special linear group is a subgroup of the general linear group .   "
},
{
  "id": "exe-torsion-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#exe-torsion-subgroup",
  "type": "Foreshadowing",
  "number": "3.1",
  "title": "Torsion Subgroups.",
  "body": "Torsion Subgroups      Let be an abelian group. Then the set of elements of finite order, which we denote , is a subgroup of , called the torsion subgroup of . torision subgroup     Show that the torision subgroup may not in fact be a subgroup if is not assumed to be abelian.      "
},
{
  "id": "thm-properties-of-group-homoms",
  "level": "2",
  "url": "sec-subgroups.html#thm-properties-of-group-homoms",
  "type": "Theorem",
  "number": "3.11",
  "title": "Group Homomorphisms and Subgroups.",
  "body": "Group Homomorphisms and Subgroups     Images are Subgroups  If is a homomorphism of groups, then the image of is a subgroup of .   Kernels are Subgroups  If is a homomorphism of groups, then the kernel of is a subgroup of .   Preimages are Subgroups  If is a group homomorphism and then the preimage of , defined as , is a subgroup of .   Inclusions are Homomorphisms  If is a subgroup of a group , then the inclusion is a group homomorphism.      "
},
{
  "id": "thm-cayley",
  "level": "2",
  "url": "sec-subgroups.html#thm-cayley",
  "type": "Theorem",
  "number": "3.12",
  "title": "Cayley's Theorem.",
  "body": "Cayley's Theorem   Every group is isomorphic to a subgroup of .   "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "sec-subgroups.html#remark-11",
  "type": "Remark",
  "number": "3.13",
  "title": "",
  "body": " This is a nearly useless theorem.  "
},
{
  "id": "def-group-center",
  "level": "2",
  "url": "sec-subgroups.html#def-group-center",
  "type": "Definition",
  "number": "3.14",
  "title": "Center of a Group.",
  "body": "Center of a Group   The center of a group , often written , is the set of elements of that commute with every element of . That is,  the center of a group  center of a group    "
},
{
  "id": "prop-center-is-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#prop-center-is-subgroup",
  "type": "Proposition",
  "number": "3.15",
  "title": "Center is a Subgroup.",
  "body": "Center is a Subgroup            is abelian    If , then       "
},
{
  "id": "exe-only-element-of-order-2",
  "level": "2",
  "url": "sec-subgroups.html#exe-only-element-of-order-2",
  "type": "Exploration",
  "number": "3.16",
  "title": "Only Element of Order <span class=\"process-math\">\\(2\\)<\/span>.",
  "body": "Only Element of Order  Let be a group and . If is the only element of order in , then .  "
},
{
  "id": "exe-even-groups-order-2",
  "level": "2",
  "url": "sec-subgroups.html#exe-even-groups-order-2",
  "type": "Exploration",
  "number": "3.17",
  "title": "Even Order Groups.",
  "body": "Even Order Groups  Every group of even order contains an element of order . This is a direct result of , but proving it is possible with the tools we have.   "
},
{
  "id": "sec-gp-generators",
  "level": "1",
  "url": "sec-gp-generators.html",
  "type": "Section",
  "number": "3.2",
  "title": "Generated Subgroups",
  "body": "Generated Subgroups    How often misused words generate misleading thoughts.   Herbert Spencer   Generated Subgroup   Given a group and a subset of , the subgroup of generated by generated subgroup is If is a set with one element then we write and we refer to this as the cyclic subgroup generated by generated cyclic subgroup  . the subgroup generated by   The elements of are known as generators , generator     Elements of   For a subset of , the elements of can be described as:     Let . Since is a subgroup that contains , it is closed under products and inverses, and thus must contain all elements of .  For the opposite containment, we just need to show the set really is a subgroup. We use the one step test:      since we allow and declare the empty product to be .    If and are in then is also in .     Therefore and (by taking and ) and by the minimality of we obtain .    Lets look at some examples for context.     for every .    Generating      Algebraic Structures  Elements of generated by and . Quiver    Generating  Let be prime and be any two distinct reflections in . Then .   Generating  For any integer , the set of column vectors consisting of in the row and elsewhere generate . As you may recall from a linear algebra course, these are called the elementary matrices . (Bonus: what subgroup do the type I elementary matrices generate?)   Generating    is the subgroup of generated by all produts of -cyclies (disjoint or not). In symbols,      Note that in we showed is generated by transpositions. However, there's more than one way to fry an egg (or in this case, to generate one)   Generating   For prove that is generated by and the -cycle .     This theorem will prove surprisingly useful all the way down in , saving us a lot of time with our proof of unsolvable quintic polyomials.   Lets look at another example.  Commutator Subgroup  Let be a group, , and . This is known as the commutator subgroup commutator subgroup of . the commutator subgroup     Commutator subgroups prove invaluable when it comes to something called abelianization abelianization , which is, loosely speaking, a way of \"modding out\" the non-commutative part of to obtain a new group that is abelian. This is seen rigorously in .   A nice property of a is that once you've located the generators, you've found the whole group:  Generators of Subgroups   If is a subgroup of that contains , then .    In this way, if we can understand something about the generators of a group, we can (for the most part) extend that knowledge to the group as a whole. This is something you may have seen in the form of a basis, either for a vector space or a topological space.  Here is a proposition that might appear to come out of the blue. #1c1cf0, to be precise.   Generators and Unique Homomorphism   If is a group and are elements such that , , and for some integer , then there exists a unique group homomorphism such that and .    Recall that the elements of are and that this list has no repetitions. Given , , and , if exists it is clearly unique, since we have and , so that the value of on every element of is determined by its values on just and .  To prove existence, define a function by for and for . Then one may painstakenly checks that in each of the cases or or or . For example, using that , we have and For the last string of equalities, we have used that, since , we have in too. Note also that might be negative, in which case is really and so really we would have . But this is OK since too, since .  I'll skip the verifications of the other three cases.     This is techincally an specific instance of the Universal Mapping Property for a Presentation, which is not covered here.   Let's take a peak at what this might look like in practice.  Mapping Example  Consider the group and elements  cosine function sine function Then one may check that , and . gives that there is a group homomorphism such that and . This is not at all surprising, since the matrix represents rotation by radians counter-clockwise and represents reflection about the -axis. Indeed, one could define as the subgroup of consisting of elements .   Another Mapping  Let and , in order to distinguish them. Find a homomorphism from to with and prove that it is unique.    gives a group homomorhism . Let and , in order to distinguish them. Then since , there is a unique homomorphism from to with . For example, .   "
},
{
  "id": "def-gensubgroup",
  "level": "2",
  "url": "sec-gp-generators.html#def-gensubgroup",
  "type": "Definition",
  "number": "3.18",
  "title": "Generated Subgroup.",
  "body": "Generated Subgroup   Given a group and a subset of , the subgroup of generated by generated subgroup is If is a set with one element then we write and we refer to this as the cyclic subgroup generated by generated cyclic subgroup  . the subgroup generated by   The elements of are known as generators , generator    "
},
{
  "id": "lem-gensubgp",
  "level": "2",
  "url": "sec-gp-generators.html#lem-gensubgp",
  "type": "Lemma",
  "number": "3.19",
  "title": "Elements of <span class=\"process-math\">\\(\\igen X\\)<\/span>.",
  "body": "Elements of   For a subset of , the elements of can be described as:     Let . Since is a subgroup that contains , it is closed under products and inverses, and thus must contain all elements of .  For the opposite containment, we just need to show the set really is a subgroup. We use the one step test:      since we allow and declare the empty product to be .    If and are in then is also in .     Therefore and (by taking and ) and by the minimality of we obtain .   "
},
{
  "id": "ex-nz-generated",
  "level": "2",
  "url": "sec-gp-generators.html#ex-nz-generated",
  "type": "Example",
  "number": "3.20",
  "title": "<span class=\"process-math\">\\(n\\Z=\\igen n\\)<\/span>.",
  "body": "   for every .   "
},
{
  "id": "ex-d2n-rs",
  "level": "2",
  "url": "sec-gp-generators.html#ex-d2n-rs",
  "type": "Example",
  "number": "3.21",
  "title": "Generating <span class=\"process-math\">\\(D_{2n}\\)<\/span>.",
  "body": "Generating     "
},
{
  "id": "figure-d4-pres",
  "level": "2",
  "url": "sec-gp-generators.html#figure-d4-pres",
  "type": "Figure",
  "number": "3.22",
  "title": "Algebraic Structures",
  "body": "Algebraic Structures  Elements of generated by and . Quiver   "
},
{
  "id": "exe-d2p",
  "level": "2",
  "url": "sec-gp-generators.html#exe-d2p",
  "type": "Exploration",
  "number": "3.23",
  "title": "Generating <span class=\"process-math\">\\(D_{2p}\\)<\/span>.",
  "body": "Generating  Let be prime and be any two distinct reflections in . Then .  "
},
{
  "id": "generating-gl",
  "level": "2",
  "url": "sec-gp-generators.html#generating-gl",
  "type": "Exploration",
  "number": "3.24",
  "title": "Generating <span class=\"process-math\">\\(\\GL_n(\\R)\\)<\/span>.",
  "body": "Generating  For any integer , the set of column vectors consisting of in the row and elsewhere generate . As you may recall from a linear algebra course, these are called the elementary matrices . (Bonus: what subgroup do the type I elementary matrices generate?)  "
},
{
  "id": "prop-generating-an",
  "level": "2",
  "url": "sec-gp-generators.html#prop-generating-an",
  "type": "Proposition",
  "number": "3.25",
  "title": "Generating <span class=\"process-math\">\\(A_n\\)<\/span>.",
  "body": "Generating    is the subgroup of generated by all produts of -cyclies (disjoint or not). In symbols,    "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "sec-gp-generators.html#remark-12",
  "type": "Remark",
  "number": "3.26",
  "title": "",
  "body": " Note that in we showed is generated by transpositions. However, there's more than one way to fry an egg (or in this case, to generate one)  "
},
{
  "id": "thm-generating-sn",
  "level": "2",
  "url": "sec-gp-generators.html#thm-generating-sn",
  "type": "Theorem",
  "number": "3.27",
  "title": "Generating <span class=\"process-math\">\\(S_n\\)<\/span>.",
  "body": "Generating   For prove that is generated by and the -cycle .   "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "sec-gp-generators.html#remark-13",
  "type": "Remark",
  "number": "3.28",
  "title": "",
  "body": " This theorem will prove surprisingly useful all the way down in , saving us a lot of time with our proof of unsolvable quintic polyomials.  "
},
{
  "id": "ex-commutator-subgroup",
  "level": "2",
  "url": "sec-gp-generators.html#ex-commutator-subgroup",
  "type": "Example",
  "number": "3.29",
  "title": "Commutator Subgroup.",
  "body": "Commutator Subgroup  Let be a group, , and . This is known as the commutator subgroup commutator subgroup of . the commutator subgroup   "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "sec-gp-generators.html#remark-14",
  "type": "Remark",
  "number": "3.30",
  "title": "",
  "body": " Commutator subgroups prove invaluable when it comes to something called abelianization abelianization , which is, loosely speaking, a way of \"modding out\" the non-commutative part of to obtain a new group that is abelian. This is seen rigorously in .  "
},
{
  "id": "prop-generators-of-subgroup",
  "level": "2",
  "url": "sec-gp-generators.html#prop-generators-of-subgroup",
  "type": "Proposition",
  "number": "3.31",
  "title": "Generators of Subgroups.",
  "body": "Generators of Subgroups   If is a subgroup of that contains , then .   "
},
{
  "id": "prop-d2n-mapping",
  "level": "2",
  "url": "sec-gp-generators.html#prop-d2n-mapping",
  "type": "Proposition",
  "number": "3.32",
  "title": "<span class=\"process-math\">\\(D_{2n}\\)<\/span> Generators and Unique Homomorphism.",
  "body": "Generators and Unique Homomorphism   If is a group and are elements such that , , and for some integer , then there exists a unique group homomorphism such that and .    Recall that the elements of are and that this list has no repetitions. Given , , and , if exists it is clearly unique, since we have and , so that the value of on every element of is determined by its values on just and .  To prove existence, define a function by for and for . Then one may painstakenly checks that in each of the cases or or or . For example, using that , we have and For the last string of equalities, we have used that, since , we have in too. Note also that might be negative, in which case is really and so really we would have . But this is OK since too, since .  I'll skip the verifications of the other three cases.   "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "sec-gp-generators.html#remark-15",
  "type": "Remark",
  "number": "3.33",
  "title": "",
  "body": " This is techincally an specific instance of the Universal Mapping Property for a Presentation, which is not covered here.  "
},
{
  "id": "ex-d2n-cos-sin",
  "level": "2",
  "url": "sec-gp-generators.html#ex-d2n-cos-sin",
  "type": "Example",
  "number": "3.34",
  "title": "<span class=\"process-math\">\\(D_{2n}\\)<\/span> Mapping Example.",
  "body": "Mapping Example  Consider the group and elements  cosine function sine function Then one may check that , and . gives that there is a group homomorphism such that and . This is not at all surprising, since the matrix represents rotation by radians counter-clockwise and represents reflection about the -axis. Indeed, one could define as the subgroup of consisting of elements .  "
},
{
  "id": "exe-d12-d6",
  "level": "2",
  "url": "sec-gp-generators.html#exe-d12-d6",
  "type": "Exploration",
  "number": "3.35",
  "title": "Another <span class=\"process-math\">\\(D_{2n}\\)<\/span> Mapping.",
  "body": "Another Mapping  Let and , in order to distinguish them. Find a homomorphism from to with and prove that it is unique.    gives a group homomorhism . Let and , in order to distinguish them. Then since , there is a unique homomorphism from to with . For example, .  "
},
{
  "id": "sec-cyclic",
  "level": "1",
  "url": "sec-cyclic.html",
  "type": "Section",
  "number": "3.3",
  "title": "Cyclic Groups",
  "body": "Cyclic Groups  Cyclic Groups    Madness is the exception in individuals and the rule in groups.   Friedrich Nietzsche   We zoom in now on the wondrous case in which a group can be generated by a single element.  Cylic Group   If is a generated by a single element, i.e. for some , then is called a cyclic group . cyclic group  cyclic     Recalling , we can describe the elements of a cylic group explicitely.  Elements of   For an element of , the elements of can be described as: .    By , the group has the following elements . We show that    by showing the elements are distinct. Indeed, if and then and , contradicting the minimality of the order of .     by showing (this implies ). Indeed, for any division by yields integers with such that . Then .       One quick way of seeing if a finite group is cyclic is to find an element with the same order as the group.  Cyclic iff Element of Order   Let be a finite group. Then is cyclic if and only if there exists an such that     Examples of Cyclic Groups       is a cyclic group.     is a cyclic group.    The group is cyclic.           , for example.     , for example.     , for example.       Not Quite Cyclic Groups     Prove that is not a cyclic group.    Prove that is not cyclic.      Generators are not unique.  Cyclic Generators are not Unique  Let be a cyclic group. Then .   Here is a more general criteria for determining when an element of a cyclic group is a generator.  Criteria for Cyclic Generators   Let be a cyclic group of order , and let . Then generates if and only if .    Conveniently enough, cyclic groups are always abelian.  Cyclic Groups are Abelian   Every cyclic group is abelian.    Roots of Unity  For a fixed , is a subgroup of . Since and so if , then and hence for some real number . Moreover, implies that is an integer multiple of . It follows that and that generates . So, is cyclic or order . It is therefore isomorphic to , via the map .   One of the first things one does when encountering a new group is to examine its subgroups. As it turns out, cyclic groups have some very special properties when it comes to subgroups, though proving them will be more technical than anything we have encountered thus far.  Subgroups of Cyclic Groups   Let , where has finite order . Then there is a bijection for each divisor of . Moreover, for each subgroup of , . In particular, all subgroups of are cyclic and there is a unique subgroup of each order.        Claim 1: For any , setting gives that .  Since any element of is of the form for some . By the Division Theorem for some , . Since and are elements of , . Since and , by the minimality of it follows that cannot be positive and thus . Therefore and we have shown that . The opposite containment follows because and is the smallest subgroup of containing . Thus .  Let be given by .   Claim 2: For any divisor of , we have .  We have .   Claim 3: For any subgroup of , we have .  By Claim 1, any is either , for which or is of the form . In the latter case, setting we have and . It remains to show that . By Bézout's Identity, for some integers . Since if follows that . On the other hand is a multiple of so and thus . Finally, we conclude that for any .  Claims 2 and 3 establish that is a two sided inverse to , thus is a bijection.       Cyclic Groups of Small Order     Every group of orders are cyclic.    Every abelian group of order is cyclic.      Finally, we end with two results that will prove invaluable later in the course. Though we won't see them for some time, proving them now will be good practice and save us time later on.    The automorphism group of is isomorphic to the multiplicative group of units of via the map where .    In particular:    If is prime the automorphism group of is cyclic, namely .     Uniqueness of Cyclic Groups    There is no way to be in cyclic existence without creating the causes of suffering.   Jetsunma Ahkon Lhamo   UMP for Cyclic Groups   Assume and let be any group. If , then for each such that , there is a unique group homomorphism such that . If , then for each , there is a unique group homomorphism such that . In both cases this unique group homomorphism is given by for any . universal mapping property for a cyclic group     Recall that either (with no repetitions) if or (with no repetitions) if .   Uniqueness: We show that if is a group homomorphism, then for all .     if then     if then     if then , using the formula above for       Existence: In either case, define for all relevant (i.e., in the first case, for and in the second for all ). We need to show this function is a well-defined group homomorphism. To see that is well defined, suppose for some . Then, since , using or the definition for order we have Thus, if then .  The homomorphism property is immediate: .     This is a particular case of the universal mapping property of a presentation, since a cyclic group is either presented by or .   Classification Theorem for Cyclic Groups   Every infinite cyclic group is isomorphic to . Every cyclic group of order is isomorphic to . classification of cyclic groups     Suppose with or and set in the first case and in the second case. Then by , there are homomorphisms and such that and . So is an endomorphism of mapping to . But the identity map also has this property, and so the uniqueness clause gives . Similarly, .     Moving forward, it is customary to denote the cyclic group of order with the notation . We similarly denote the infinite cyclic group . the cyclic group of order  the cyclic group with countably infinite elements  classification of cyclic groups     "
},
{
  "id": "def-cyclic-group",
  "level": "2",
  "url": "sec-cyclic.html#def-cyclic-group",
  "type": "Definition",
  "number": "3.36",
  "title": "Cylic Group.",
  "body": "Cylic Group   If is a generated by a single element, i.e. for some , then is called a cyclic group . cyclic group  cyclic    "
},
{
  "id": "cor-cyclic-subgroup",
  "level": "2",
  "url": "sec-cyclic.html#cor-cyclic-subgroup",
  "type": "Corollary",
  "number": "3.37",
  "title": "Elements of <span class=\"process-math\">\\(\\igen x\\)<\/span>.",
  "body": "Elements of   For an element of , the elements of can be described as: .    By , the group has the following elements . We show that    by showing the elements are distinct. Indeed, if and then and , contradicting the minimality of the order of .     by showing (this implies ). Indeed, for any division by yields integers with such that . Then .      "
},
{
  "id": "prop-cyclic-equivalencies",
  "level": "2",
  "url": "sec-cyclic.html#prop-cyclic-equivalencies",
  "type": "Proposition",
  "number": "3.38",
  "title": "Cyclic iff Element of Order <span class=\"process-math\">\\(|G|\\)<\/span>.",
  "body": "Cyclic iff Element of Order   Let be a finite group. Then is cyclic if and only if there exists an such that    "
},
{
  "id": "ex-cyclic-examples",
  "level": "2",
  "url": "sec-cyclic.html#ex-cyclic-examples",
  "type": "Example",
  "number": "3.39",
  "title": "Examples of Cyclic Groups.",
  "body": "Examples of Cyclic Groups       is a cyclic group.     is a cyclic group.    The group is cyclic.           , for example.     , for example.     , for example.      "
},
{
  "id": "exe-not-cyclic",
  "level": "2",
  "url": "sec-cyclic.html#exe-not-cyclic",
  "type": "Exploration",
  "number": "3.40",
  "title": "Not Quite Cyclic Groups.",
  "body": "Not Quite Cyclic Groups     Prove that is not a cyclic group.    Prove that is not cyclic.     "
},
{
  "id": "exe-non-unique-cyclic-generators",
  "level": "2",
  "url": "sec-cyclic.html#exe-non-unique-cyclic-generators",
  "type": "Exploration",
  "number": "3.41",
  "title": "Cyclic Generators are not Unique.",
  "body": "Cyclic Generators are not Unique  Let be a cyclic group. Then .  "
},
{
  "id": "thm-cyclic-criteria",
  "level": "2",
  "url": "sec-cyclic.html#thm-cyclic-criteria",
  "type": "Theorem",
  "number": "3.42",
  "title": "Criteria for Cyclic Generators.",
  "body": "Criteria for Cyclic Generators   Let be a cyclic group of order , and let . Then generates if and only if .   "
},
{
  "id": "thm-cyclic-abelian",
  "level": "2",
  "url": "sec-cyclic.html#thm-cyclic-abelian",
  "type": "Theorem",
  "number": "3.43",
  "title": "Cyclic Groups are Abelian.",
  "body": "Cyclic Groups are Abelian   Every cyclic group is abelian.   "
},
{
  "id": "ex-group-of-unity",
  "level": "2",
  "url": "sec-cyclic.html#ex-group-of-unity",
  "type": "Example",
  "number": "3.44",
  "title": "Roots of Unity.",
  "body": "Roots of Unity  For a fixed , is a subgroup of . Since and so if , then and hence for some real number . Moreover, implies that is an integer multiple of . It follows that and that generates . So, is cyclic or order . It is therefore isomorphic to , via the map .  "
},
{
  "id": "thm-cyclic-divisors-and-subgroups",
  "level": "2",
  "url": "sec-cyclic.html#thm-cyclic-divisors-and-subgroups",
  "type": "Theorem",
  "number": "3.45",
  "title": "Subgroups of Cyclic Groups.",
  "body": "Subgroups of Cyclic Groups   Let , where has finite order . Then there is a bijection for each divisor of . Moreover, for each subgroup of , . In particular, all subgroups of are cyclic and there is a unique subgroup of each order.        Claim 1: For any , setting gives that .  Since any element of is of the form for some . By the Division Theorem for some , . Since and are elements of , . Since and , by the minimality of it follows that cannot be positive and thus . Therefore and we have shown that . The opposite containment follows because and is the smallest subgroup of containing . Thus .  Let be given by .   Claim 2: For any divisor of , we have .  We have .   Claim 3: For any subgroup of , we have .  By Claim 1, any is either , for which or is of the form . In the latter case, setting we have and . It remains to show that . By Bézout's Identity, for some integers . Since if follows that . On the other hand is a multiple of so and thus . Finally, we conclude that for any .  Claims 2 and 3 establish that is a two sided inverse to , thus is a bijection.      "
},
{
  "id": "exe-small-cyclic",
  "level": "2",
  "url": "sec-cyclic.html#exe-small-cyclic",
  "type": "Exploration",
  "number": "3.46",
  "title": "Cyclic Groups of Small Order.",
  "body": "Cyclic Groups of Small Order     Every group of orders are cyclic.    Every abelian group of order is cyclic.     "
},
{
  "id": "thm-aut-cn",
  "level": "2",
  "url": "sec-cyclic.html#thm-aut-cn",
  "type": "Theorem",
  "number": "3.47",
  "title": "<span class=\"process-math\">\\(\\Aut(C_n)\\)<\/span>.",
  "body": "  The automorphism group of is isomorphic to the multiplicative group of units of via the map where .   "
},
{
  "id": "cor-aut-cp",
  "level": "2",
  "url": "sec-cyclic.html#cor-aut-cp",
  "type": "Corollary",
  "number": "3.48",
  "title": "<span class=\"process-math\">\\(\\Aut(C_p)\\)<\/span>.",
  "body": "  If is prime the automorphism group of is cyclic, namely .   "
},
{
  "id": "prop-ump-cyclic",
  "level": "2",
  "url": "sec-cyclic.html#prop-ump-cyclic",
  "type": "Proposition",
  "number": "3.49",
  "title": "UMP for Cyclic Groups.",
  "body": "UMP for Cyclic Groups   Assume and let be any group. If , then for each such that , there is a unique group homomorphism such that . If , then for each , there is a unique group homomorphism such that . In both cases this unique group homomorphism is given by for any . universal mapping property for a cyclic group     Recall that either (with no repetitions) if or (with no repetitions) if .   Uniqueness: We show that if is a group homomorphism, then for all .     if then     if then     if then , using the formula above for       Existence: In either case, define for all relevant (i.e., in the first case, for and in the second for all ). We need to show this function is a well-defined group homomorphism. To see that is well defined, suppose for some . Then, since , using or the definition for order we have Thus, if then .  The homomorphism property is immediate: .   "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "sec-cyclic.html#remark-16",
  "type": "Remark",
  "number": "3.50",
  "title": "",
  "body": " This is a particular case of the universal mapping property of a presentation, since a cyclic group is either presented by or .  "
},
{
  "id": "thm-cyclic-classification",
  "level": "2",
  "url": "sec-cyclic.html#thm-cyclic-classification",
  "type": "Theorem",
  "number": "3.51",
  "title": "Classification Theorem for Cyclic Groups.",
  "body": "Classification Theorem for Cyclic Groups   Every infinite cyclic group is isomorphic to . Every cyclic group of order is isomorphic to . classification of cyclic groups     Suppose with or and set in the first case and in the second case. Then by , there are homomorphisms and such that and . So is an endomorphism of mapping to . But the identity map also has this property, and so the uniqueness clause gives . Similarly, .   "
},
{
  "id": "convention-5",
  "level": "2",
  "url": "sec-cyclic.html#convention-5",
  "type": "Convention",
  "number": "3.52",
  "title": "",
  "body": " Moving forward, it is customary to denote the cyclic group of order with the notation . We similarly denote the infinite cyclic group . the cyclic group of order  the cyclic group with countably infinite elements  classification of cyclic groups   "
},
{
  "id": "sec-cosets",
  "level": "1",
  "url": "sec-cosets.html",
  "type": "Section",
  "number": "4.1",
  "title": "Cosets and Lagrange's Theorem",
  "body": "Cosets and Lagrange's Theorem  Cosets    If I had inherited a fortune I should probably not have cast my lot with mathematics.   Joseph-Louis Lagrange   Coset   For any and any let be defined as a left coset and right coset of in , respectfully. coset  left coset  right coset     Abelian Cosets  If is an abelian then for all .    Though mostly a matter of preference, we will focus primarily on left cosets.   Basic Coset Properties   Let and          if and only if             Coset Equivalencies   Let . The following facts about left cosets are equivalent for :    and belong to the same left coset of in ,     for some ,     for some ,     ,     ,     .        if and belong to the same left coset of in then and for some , so and therefore where .    for some   and .    for some   .    .   Suppose for some , then by we also have for some . Then we have  thus .   Since , we have and . If then, and belong to the same left coset.      For any and any , the set of (left) cosets induces an equivalence relation on , where two elements are related if they belong to the same left coset of in .    Cosets Partition a Group   For , the collection of left cosets of in form a partition of , and similarly for the collection of right cosets. That is,   for all , either or      ,   and similarly for right cosets. Moreover all left and right cosets have the same cardinality: for any .    Let me prove the assertions for right cosets. Every element of belongs to at least one right coset, since (since ). We need to show any two cosets are either identical or disjoint: if and share an element, then it follows from of that . This proves that the right cosets partition . To see that all right cosets have the same cardinality as , define a function by . Clearly is onto and if then and hence , so that is also one-to-one.    Lagrange's Theorem   If is a finite group and , then In particular, divides .    Equal Number of Left and Right Cosets   The number of left cosets of in is equal to the number of right cosets of in .    Index   In finite groups, the common number of left or right cosets of a subgroup in a group is denoted as and is called the index of in . Index of in  index     Cosets in  For and , the left cosets of in are and the right cosets are Note that these lists are not the same, but they do have the same length. We have , and .   Now that we have proved , a host of other results now become available to us.  Corollaries to Lagrange's Theorem   Let be a finite group.   If , then divides .         If then for all        The notion of index is most useful when it is finite, but note that this does not require that to be finite.  Finite Index in Infinite Group  Let and . Then since the cosets are . (Since is abelian, left and right cosets are automatically the same by )   Number of Left and Right Cosets (Ininite Version)  Show that even if is not finite the number of left and right cosets of a subgroup is still the same.   Consider the map and show it's a bijection. Why is the inverse needed?   This seems like it might be important.  The Index Tower   Let be a group (possibly infinite) and subgroups of . Suppose is finite. Then .    Here are some more corollaries to .   Let be a group of composite order. Then contains a non-trivial proper subgroup.   Fermat's Little Theorem  Prove Fermat's Little Theorem: for every integer and every prime , .   If you can believe it, there's actually another important corollary to , but we'll cover it when its more relevant. Wouldn't want to spoil all the fun at once, right? To spoil all the fun at once, see: , part (1).    "
},
{
  "id": "def-coset",
  "level": "2",
  "url": "sec-cosets.html#def-coset",
  "type": "Definition",
  "number": "4.1",
  "title": "Coset.",
  "body": "Coset   For any and any let be defined as a left coset and right coset of in , respectfully. coset  left coset  right coset    "
},
{
  "id": "exe-abelian-cosets",
  "level": "2",
  "url": "sec-cosets.html#exe-abelian-cosets",
  "type": "Exploration",
  "number": "4.2",
  "title": "Abelian Cosets.",
  "body": "Abelian Cosets  If is an abelian then for all .  "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "sec-cosets.html#remark-17",
  "type": "Remark",
  "number": "4.3",
  "title": "",
  "body": " Though mostly a matter of preference, we will focus primarily on left cosets.  "
},
{
  "id": "prop-coset-properties",
  "level": "2",
  "url": "sec-cosets.html#prop-coset-properties",
  "type": "Proposition",
  "number": "4.4",
  "title": "Basic Coset Properties.",
  "body": "Basic Coset Properties   Let and          if and only if            "
},
{
  "id": "lem-cosetfacts",
  "level": "2",
  "url": "sec-cosets.html#lem-cosetfacts",
  "type": "Lemma",
  "number": "4.5",
  "title": "Coset Equivalencies.",
  "body": "Coset Equivalencies   Let . The following facts about left cosets are equivalent for :    and belong to the same left coset of in ,     for some ,     for some ,     ,     ,     .        if and belong to the same left coset of in then and for some , so and therefore where .    for some   and .    for some   .    .   Suppose for some , then by we also have for some . Then we have  thus .   Since , we have and . If then, and belong to the same left coset.   "
},
{
  "id": "thm-coset-equivalence-relation",
  "level": "2",
  "url": "sec-cosets.html#thm-coset-equivalence-relation",
  "type": "Theorem",
  "number": "4.6",
  "title": "",
  "body": "  For any and any , the set of (left) cosets induces an equivalence relation on , where two elements are related if they belong to the same left coset of in .   "
},
{
  "id": "cor-cosetpartition",
  "level": "2",
  "url": "sec-cosets.html#cor-cosetpartition",
  "type": "Corollary",
  "number": "4.7",
  "title": "Cosets Partition a Group.",
  "body": "Cosets Partition a Group   For , the collection of left cosets of in form a partition of , and similarly for the collection of right cosets. That is,   for all , either or      ,   and similarly for right cosets. Moreover all left and right cosets have the same cardinality: for any .    Let me prove the assertions for right cosets. Every element of belongs to at least one right coset, since (since ). We need to show any two cosets are either identical or disjoint: if and share an element, then it follows from of that . This proves that the right cosets partition . To see that all right cosets have the same cardinality as , define a function by . Clearly is onto and if then and hence , so that is also one-to-one.   "
},
{
  "id": "thm-lagrange",
  "level": "2",
  "url": "sec-cosets.html#thm-lagrange",
  "type": "Theorem",
  "number": "4.8",
  "title": "Lagrange's Theorem.",
  "body": "Lagrange's Theorem   If is a finite group and , then In particular, divides .   "
},
{
  "id": "cor-index-cor",
  "level": "2",
  "url": "sec-cosets.html#cor-index-cor",
  "type": "Corollary",
  "number": "4.9",
  "title": "Equal Number of Left and Right Cosets.",
  "body": "Equal Number of Left and Right Cosets   The number of left cosets of in is equal to the number of right cosets of in .   "
},
{
  "id": "def-index",
  "level": "2",
  "url": "sec-cosets.html#def-index",
  "type": "Definition",
  "number": "4.10",
  "title": "Index.",
  "body": "Index   In finite groups, the common number of left or right cosets of a subgroup in a group is denoted as and is called the index of in . Index of in  index    "
},
{
  "id": "ex-d2n-cosets",
  "level": "2",
  "url": "sec-cosets.html#ex-d2n-cosets",
  "type": "Example",
  "number": "4.11",
  "title": "Cosets in <span class=\"process-math\">\\(D_{2n}\\)<\/span>.",
  "body": "Cosets in  For and , the left cosets of in are and the right cosets are Note that these lists are not the same, but they do have the same length. We have , and .  "
},
{
  "id": "cor-lagrange",
  "level": "2",
  "url": "sec-cosets.html#cor-lagrange",
  "type": "Corollary",
  "number": "4.12",
  "title": "Corollaries to Lagrange's Theorem.",
  "body": "Corollaries to Lagrange's Theorem   Let be a finite group.   If , then divides .         If then for all       "
},
{
  "id": "ex-z-cosets",
  "level": "2",
  "url": "sec-cosets.html#ex-z-cosets",
  "type": "Example",
  "number": "4.13",
  "title": "Finite Index in Infinite Group.",
  "body": "Finite Index in Infinite Group  Let and . Then since the cosets are . (Since is abelian, left and right cosets are automatically the same by )  "
},
{
  "id": "exe-left-right-cosets",
  "level": "2",
  "url": "sec-cosets.html#exe-left-right-cosets",
  "type": "Exploration",
  "number": "4.14",
  "title": "Number of Left and Right Cosets (Ininite Version).",
  "body": "Number of Left and Right Cosets (Ininite Version)  Show that even if is not finite the number of left and right cosets of a subgroup is still the same.   Consider the map and show it's a bijection. Why is the inverse needed?  "
},
{
  "id": "thm-index-tower",
  "level": "2",
  "url": "sec-cosets.html#thm-index-tower",
  "type": "Theorem",
  "number": "4.15",
  "title": "The Index Tower.",
  "body": "The Index Tower   Let be a group (possibly infinite) and subgroups of . Suppose is finite. Then .   "
},
{
  "id": "exe-nontrivial-subgroup",
  "level": "2",
  "url": "sec-cosets.html#exe-nontrivial-subgroup",
  "type": "Exploration",
  "number": "4.16",
  "title": "",
  "body": " Let be a group of composite order. Then contains a non-trivial proper subgroup.  "
},
{
  "id": "exe-fermat",
  "level": "2",
  "url": "sec-cosets.html#exe-fermat",
  "type": "Exploration",
  "number": "4.17",
  "title": "Fermat's Little Theorem.",
  "body": "Fermat's Little Theorem  Prove Fermat's Little Theorem: for every integer and every prime , .  "
},
{
  "id": "sec-normal-subgroups",
  "level": "1",
  "url": "sec-normal-subgroups.html",
  "type": "Section",
  "number": "4.2",
  "title": "Normal Subgroups",
  "body": "Normal Subgroups    If you are always trying to be normal, you will never know how amazing you can be.   Maya Angelou   Normal Subgroup   A subgroup of a group is normal in , written , if for all . normal subgroup  Normal subgroup     Anything but Normal   Come up with a better name for normal subgroups than 'normal subgroup'. Give it some oomph. Make it mean something.    Here are some options the author has recently become partial to:    Semiabelian : Yes, its more letters, but so are semigroup, semisimple, semidirect, and semicircle. Imagine if we called all those things normal too! It would be a nightmare. And we would deserve it for our hubris.     Ideal subgroup : Look, its shorter! Normal subgroups and ideals parallel ideas in group and ring theory, and relabeling normal groups in this way would cement these similarities.       Equivalent Normal Definitions   Let be a subgroup of a group . The following are equivalent:         for all .     for all .    The equivalence relations on determined by the left and right cosets of coincide.       Normal Subgroups     The trivial subgroups , of a group are normal subgroups of .    Any subgroup of an abelian group is a normal subgroup.    For any group , .     for all .     .     .     .    The commutator subgroup from is normal in .    The set is normal in .      Normality is not Transitive  Show that being a normal subgroup is not a transitive relation. In other words, find groups such that and , but .    is a good place to start routing around in.   Consider From we have . The group has order , making it ableian from . Thus every subgroup of is normal in by .  Now consider the subgroup . But is not normal in , since for example    Normal Preimages   If is a group homomorphism and then the preimage of , , is a normal subgroup of .    Images not Normal in General  Show that if is a group homomorphism and then need not be a normal subgroup of .   Here is a theorem that will prove exceedingly useful all the way down in .  Unique Order Subgroup is Normal   Let be the only subgroup of order . Then is normal.    We also have some criteria for when a generated subgroup is normal.  Normality and Generated Subgroups  Let be a group and a subset of . Suppose . Prove if and only if for every and .   Or, if we're tired of generating subgroups that aren't as normal as we'd like them to be, we can generate a normal subgroup explicitely.  Generated Normal Subgroup  Let be a group and let be a set. The normal subgroup generated by , denoted , is the intersection of all the normal subgroups of that contain .   Show that is a normal subgroup of .    Show that the elements of can be described as       We conclude this section by taking a sneak peak at the interactions between the index of a subgroup and its normality.  Subgroup of Index is Normal   Show that any subgroup of index two is normal. This means: show that if is a group, is a subgroup and , i.e the number of left (or right) cosets of in is two, then is normal.    Coming soon to an OER near you!     This is a specific case of a much more powerful theorem that we will prove later on, we can tackle this smaller piece with the tools we have now.   Converse to Lagrange's Theorem is False  Prove the converse to is false: find a group and an integer such that divides the order of but does not have any subgroups of order .   Take .   Consider , and note that . Suppose by way of contradiction that is subgroup of such that . Notice that , the smallest prime dividing the order of , making normal in .  As there are eight -cycles in , there exists some -cycle, , such that . Consider then and in . Since , it must be the case that either or .    If then . As we have , but as is a subgroup this would mean , which is not the case.  If then , but , and so we have a contradiction. Thus cannot exist, and has no subgroup of order .     Relatively Prime Index and Order   Let be a finite group, and subgroups such that and are relatively prime and . Then .    "
},
{
  "id": "def-normal-subgroup",
  "level": "2",
  "url": "sec-normal-subgroups.html#def-normal-subgroup",
  "type": "Definition",
  "number": "4.18",
  "title": "Normal Subgroup.",
  "body": "Normal Subgroup   A subgroup of a group is normal in , written , if for all . normal subgroup  Normal subgroup    "
},
{
  "id": "exe-anything-but-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-anything-but-normal",
  "type": "Discussion",
  "number": "4.1",
  "title": "Anything but Normal.",
  "body": "Anything but Normal   Come up with a better name for normal subgroups than 'normal subgroup'. Give it some oomph. Make it mean something.    Here are some options the author has recently become partial to:    Semiabelian : Yes, its more letters, but so are semigroup, semisimple, semidirect, and semicircle. Imagine if we called all those things normal too! It would be a nightmare. And we would deserve it for our hubris.     Ideal subgroup : Look, its shorter! Normal subgroups and ideals parallel ideas in group and ring theory, and relabeling normal groups in this way would cement these similarities.      "
},
{
  "id": "thm-equivdef-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#thm-equivdef-normal",
  "type": "Theorem",
  "number": "4.19",
  "title": "Equivalent Normal Definitions.",
  "body": "Equivalent Normal Definitions   Let be a subgroup of a group . The following are equivalent:         for all .     for all .    The equivalence relations on determined by the left and right cosets of coincide.      "
},
{
  "id": "ex-normal-examples",
  "level": "2",
  "url": "sec-normal-subgroups.html#ex-normal-examples",
  "type": "Example",
  "number": "4.20",
  "title": "Normal Subgroups.",
  "body": "Normal Subgroups     The trivial subgroups , of a group are normal subgroups of .    Any subgroup of an abelian group is a normal subgroup.    For any group , .     for all .     .     .     .    The commutator subgroup from is normal in .    The set is normal in .     "
},
{
  "id": "exe-normality-not-transitive",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-normality-not-transitive",
  "type": "Exploration",
  "number": "4.21",
  "title": "Normality is not Transitive.",
  "body": "Normality is not Transitive  Show that being a normal subgroup is not a transitive relation. In other words, find groups such that and , but .    is a good place to start routing around in.   Consider From we have . The group has order , making it ableian from . Thus every subgroup of is normal in by .  Now consider the subgroup . But is not normal in , since for example   "
},
{
  "id": "prop-normal-subgroups-and-homomorphisms",
  "level": "2",
  "url": "sec-normal-subgroups.html#prop-normal-subgroups-and-homomorphisms",
  "type": "Proposition",
  "number": "4.22",
  "title": "Normal Preimages.",
  "body": "Normal Preimages   If is a group homomorphism and then the preimage of , , is a normal subgroup of .   "
},
{
  "id": "exe-images-need-not-be-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-images-need-not-be-normal",
  "type": "Exploration",
  "number": "4.23",
  "title": "Images not Normal in General.",
  "body": "Images not Normal in General  Show that if is a group homomorphism and then need not be a normal subgroup of .  "
},
{
  "id": "thm-unique-order-subgroup-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#thm-unique-order-subgroup-normal",
  "type": "Theorem",
  "number": "4.24",
  "title": "Unique Order Subgroup is Normal.",
  "body": "Unique Order Subgroup is Normal   Let be the only subgroup of order . Then is normal.   "
},
{
  "id": "exe-normality-and-generated-subgroups",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-normality-and-generated-subgroups",
  "type": "Exploration",
  "number": "4.25",
  "title": "Normality and Generated Subgroups.",
  "body": "Normality and Generated Subgroups  Let be a group and a subset of . Suppose . Prove if and only if for every and .  "
},
{
  "id": "exe-generated-normal-subgroup",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-generated-normal-subgroup",
  "type": "Exploration",
  "number": "4.26",
  "title": "Generated Normal Subgroup.",
  "body": "Generated Normal Subgroup  Let be a group and let be a set. The normal subgroup generated by , denoted , is the intersection of all the normal subgroups of that contain .   Show that is a normal subgroup of .    Show that the elements of can be described as      "
},
{
  "id": "exe-subgroup-index-2-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-subgroup-index-2-normal",
  "type": "Proposition",
  "number": "4.27",
  "title": "Subgroup of Index <span class=\"process-math\">\\(2\\)<\/span> is Normal.",
  "body": "Subgroup of Index is Normal   Show that any subgroup of index two is normal. This means: show that if is a group, is a subgroup and , i.e the number of left (or right) cosets of in is two, then is normal.    Coming soon to an OER near you!   "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "sec-normal-subgroups.html#remark-18",
  "type": "Remark",
  "number": "4.28",
  "title": "",
  "body": " This is a specific case of a much more powerful theorem that we will prove later on, we can tackle this smaller piece with the tools we have now.  "
},
{
  "id": "exe-lagrange-converse-false",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-lagrange-converse-false",
  "type": "Exploration",
  "number": "4.29",
  "title": "Converse to Lagrange's Theorem is False.",
  "body": "Converse to Lagrange's Theorem is False  Prove the converse to is false: find a group and an integer such that divides the order of but does not have any subgroups of order .   Take .   Consider , and note that . Suppose by way of contradiction that is subgroup of such that . Notice that , the smallest prime dividing the order of , making normal in .  As there are eight -cycles in , there exists some -cycle, , such that . Consider then and in . Since , it must be the case that either or .    If then . As we have , but as is a subgroup this would mean , which is not the case.  If then , but , and so we have a contradiction. Thus cannot exist, and has no subgroup of order .    "
},
{
  "id": "prop-rel-prime-index-and-order",
  "level": "2",
  "url": "sec-normal-subgroups.html#prop-rel-prime-index-and-order",
  "type": "Proposition",
  "number": "4.30",
  "title": "Relatively Prime Index and Order.",
  "body": "Relatively Prime Index and Order   Let be a finite group, and subgroups such that and are relatively prime and . Then .   "
},
{
  "id": "sec-quotient-groups",
  "level": "1",
  "url": "sec-quotient-groups.html",
  "type": "Section",
  "number": "4.3",
  "title": "Quotient Groups",
  "body": "Quotient Groups  Quotient Groups    Great things are done by a series of small things brought together.   Vincent Van Gogh   We return now to the equivalence relation induced by the set of left (or right) cosets on a group .  Let us ask a question: When does aquire the structure of a group under the operation We need to be worried about whether this operation is independent of choice. That is, if and then must ? In other words, if and , must ?  As it turns out (serendipidous, I know) we discovered the exact property a subgroup needs to ensure its cosets form a well-defined group. At least, normally they do... Get it?   Quotients and Normal Subgroups  1889   Let . The set of (left cosets) forms a group if and only if .    Quotient Group   For any normal subgroup of a group , the quotient group , , is the set of left cosets of in with multiplication given by . quotient group     Old Friends  Let in . It is automatic that is normal since is abelian. The quotient group is our old friend .    Don't forget that the set exists for any subgroup . However, this set only satisfies the axioms of a group when the subgroup is normal.   Modular Integer? Barely Know 'Er!  Argue amongst yourselves what the 'best' notation for the integers should be:  , , , , , or whatever other horrors you can conjure.   Dihedral Quotient   is a normal subgroup of . The quotient has just two elements, and .   Quotient of Commutator Subgroup  Let be a group with commutator subgroup . Prove is abelian.   Special Linear Quotients      Define a map as the composition of where is the matrix with in the upper-left corner, 's along the rest of the diaganal, and 's everywhere else, and the second map is the canonical surjection. Then is easily seen to be a homomorphism and hence so is (since the composition of homomorhisms is a homomorphism). I claim is one-to-one and onto. For any , let and note that has determinant and thus belongs to . So . This proves is onto. If , then and so . Clearly this means .   Recalling , we have yet another useful corollary:  Order of Quotient Groups   If is finite we have .    Quotient Map   For any group and normal subgroup of the quotient map  is defined by . quotient map     Quotient Map is Surjective Homomorphism   For any group and normal subgroup of , the map defined by is a surjective group homomorphism with kernel .    Surjectivity is immediate from the definition. The group homomorphism property follows from the computation below which uses the definition of and the rule for multiplying cosets in : Finally, using , we have .    Normal Subgroup iff Kernel   A subgroup of a group is normal in if and only if is the kernel of a homomorphism with domain .    Coming soon to an OER near you!    Cyclic Center Quotients   Let be a group with center . If is cyclic, then is abelian.     The Isomorphism Theorems    If it's your job to eat a frog, it's best to do it first thing in the morning. And If it's your job to eat two frogs, it's best to eat the biggest one first.   Mark Twain   We come to the so-called Isomorphism Theorems.  UMP for Quotients   Let be a group and a normal subgroup. If is a homomorphism of groups such that , then     there exists a unique group homomorphism such that the composition of and the quotient map is .    If is onto, then is onto.    Moreover,           If such a exists, it is necessarily unique since is onto. In fact, if then has to be given by the formula We now need to show that this formula determines a well-defined homomorphism: if , then and so , whence . For any we have     The formula for given above ensures that hence is surjective if and only if is surjective.    We have iff iff iff . If for some , then for some and hence for some . Since , we have .       Abelianization  Let be any group, and recall the . In we saw . Now let be any group homomorphism from to an abelian group . Since for all (since is abelian), we have that must contain . By , we get that factors as for a unique group homomorphism .  The group is called the abelianization of and the motto is: a homomorphism from a group to an abelian group factors uniquely through the abelianization.   First Isomorphism Theorem Jordan, 1870   If is a homomorphism of groups, then and the map defined by induces an isomorphism     By , there exists a homomorphism such that , and its kernel consists of just the one element of . So is one-to-one, and the image of is the same as the image of .    Double Divide   If is a homomorphism from a finite group to a group , then divides and .     For any group we have .   The Lattice Isomorphism Theorem   Let be a group and a normal subgroup with canonical homomorphism . There is an containment-preserving bijection given by for . The inverse is defined for by where is the quotient map. We denote .  Then this bijection enjoys the following properties:     (normal) subgroups correspond to normal subgroups i.e.,      iff and iff      iff and iff        indices are preserved; i.e., and .    the supremums and infimums are preserved (this makes and lattice isomorphisms)      and      and           We have previously shown that the quotient map is a surjective group homomorphism. We show:      is well defined (correct codomain) since for we have (since images of subgroups through group homomorphisms are subgroups).      is well defined (correct codomain) since for we have (since preimages of subgroups through group homomorphisms are subgroups) and for any we have , hence      and are mutual inverses: since is surjective and , with the last equality justified by      Thus, the two functions defined in the statement are well-defined and are mutually inverse.  Since and preserve containments, each of , preserves the order relation of containment.  I will only prove some parts of statements (1), (2), (3) in the theorem.  (1) If and , then holds by part of or by the exercise below, since is surjective. The fact that the inverse function also sends normal subgroups to normal subgroups is a consequence of the statement that inverse images of normal subgroups are normal subgroups (see HW 4).   (2) In the interest of time, I'll only prove the assertion about indices in the special case when is normal. In that case this fact is also an immediate consequence of the Third Isomorhism Theorem since for with we have The general case is a consequence of an exercise from HW 5.   (3) The proof of (3) is omitted.     "
},
{
  "id": "thm-quotient-iff-normal",
  "level": "2",
  "url": "sec-quotient-groups.html#thm-quotient-iff-normal",
  "type": "Theorem",
  "number": "4.31",
  "title": "Quotients and Normal Subgroups.",
  "body": "Quotients and Normal Subgroups  1889   Let . The set of (left cosets) forms a group if and only if .   "
},
{
  "id": "def-quotient-group",
  "level": "2",
  "url": "sec-quotient-groups.html#def-quotient-group",
  "type": "Definition",
  "number": "4.32",
  "title": "Quotient Group.",
  "body": "Quotient Group   For any normal subgroup of a group , the quotient group , , is the set of left cosets of in with multiplication given by . quotient group    "
},
{
  "id": "ex-old-friends",
  "level": "2",
  "url": "sec-quotient-groups.html#ex-old-friends",
  "type": "Example",
  "number": "4.33",
  "title": "Old Friends.",
  "body": "Old Friends  Let in . It is automatic that is normal since is abelian. The quotient group is our old friend .  "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "sec-quotient-groups.html#remark-19",
  "type": "Remark",
  "number": "4.34",
  "title": "",
  "body": " Don't forget that the set exists for any subgroup . However, this set only satisfies the axioms of a group when the subgroup is normal.  "
},
{
  "id": "exe-mod-n-iso",
  "level": "2",
  "url": "sec-quotient-groups.html#exe-mod-n-iso",
  "type": "Discussion",
  "number": "4.2",
  "title": "Modular Integer? Barely Know 'Er!",
  "body": "Modular Integer? Barely Know 'Er!  Argue amongst yourselves what the 'best' notation for the integers should be:  , , , , , or whatever other horrors you can conjure.  "
},
{
  "id": "ex-dihedral-quotient",
  "level": "2",
  "url": "sec-quotient-groups.html#ex-dihedral-quotient",
  "type": "Example",
  "number": "4.35",
  "title": "Dihedral Quotient.",
  "body": "Dihedral Quotient   is a normal subgroup of . The quotient has just two elements, and .  "
},
{
  "id": "exe-commutator-quotient-abelian",
  "level": "2",
  "url": "sec-quotient-groups.html#exe-commutator-quotient-abelian",
  "type": "Exploration",
  "number": "4.36",
  "title": "Quotient of Commutator Subgroup.",
  "body": "Quotient of Commutator Subgroup  Let be a group with commutator subgroup . Prove is abelian.  "
},
{
  "id": "exe-gl-sl-iso",
  "level": "2",
  "url": "sec-quotient-groups.html#exe-gl-sl-iso",
  "type": "Exploration",
  "number": "4.37",
  "title": "Special Linear Quotients.",
  "body": "Special Linear Quotients      Define a map as the composition of where is the matrix with in the upper-left corner, 's along the rest of the diaganal, and 's everywhere else, and the second map is the canonical surjection. Then is easily seen to be a homomorphism and hence so is (since the composition of homomorhisms is a homomorphism). I claim is one-to-one and onto. For any , let and note that has determinant and thus belongs to . So . This proves is onto. If , then and so . Clearly this means .  "
},
{
  "id": "cor-order-of-quotient",
  "level": "2",
  "url": "sec-quotient-groups.html#cor-order-of-quotient",
  "type": "Corollary",
  "number": "4.38",
  "title": "Order of Quotient Groups.",
  "body": "Order of Quotient Groups   If is finite we have .   "
},
{
  "id": "def-quotient-map",
  "level": "2",
  "url": "sec-quotient-groups.html#def-quotient-map",
  "type": "Definition",
  "number": "4.39",
  "title": "Quotient Map.",
  "body": "Quotient Map   For any group and normal subgroup of the quotient map  is defined by . quotient map    "
},
{
  "id": "prop-quotient-surj-hom",
  "level": "2",
  "url": "sec-quotient-groups.html#prop-quotient-surj-hom",
  "type": "Proposition",
  "number": "4.40",
  "title": "Quotient Map is Surjective Homomorphism.",
  "body": "Quotient Map is Surjective Homomorphism   For any group and normal subgroup of , the map defined by is a surjective group homomorphism with kernel .    Surjectivity is immediate from the definition. The group homomorphism property follows from the computation below which uses the definition of and the rule for multiplying cosets in : Finally, using , we have .   "
},
{
  "id": "thm-norm-iff-ker",
  "level": "2",
  "url": "sec-quotient-groups.html#thm-norm-iff-ker",
  "type": "Theorem",
  "number": "4.41",
  "title": "Normal Subgroup iff Kernel.",
  "body": "Normal Subgroup iff Kernel   A subgroup of a group is normal in if and only if is the kernel of a homomorphism with domain .    Coming soon to an OER near you!   "
},
{
  "id": "thm-gz-cyclic",
  "level": "2",
  "url": "sec-quotient-groups.html#thm-gz-cyclic",
  "type": "Theorem",
  "number": "4.42",
  "title": "Cyclic Center Quotients.",
  "body": "Cyclic Center Quotients   Let be a group with center . If is cyclic, then is abelian.   "
},
{
  "id": "thm-ump-quotient",
  "level": "2",
  "url": "sec-quotient-groups.html#thm-ump-quotient",
  "type": "Theorem",
  "number": "4.43",
  "title": "UMP for Quotients.",
  "body": "UMP for Quotients   Let be a group and a normal subgroup. If is a homomorphism of groups such that , then     there exists a unique group homomorphism such that the composition of and the quotient map is .    If is onto, then is onto.    Moreover,           If such a exists, it is necessarily unique since is onto. In fact, if then has to be given by the formula We now need to show that this formula determines a well-defined homomorphism: if , then and so , whence . For any we have     The formula for given above ensures that hence is surjective if and only if is surjective.    We have iff iff iff . If for some , then for some and hence for some . Since , we have .      "
},
{
  "id": "ex-abelianization",
  "level": "2",
  "url": "sec-quotient-groups.html#ex-abelianization",
  "type": "Example",
  "number": "4.44",
  "title": "Abelianization.",
  "body": "Abelianization  Let be any group, and recall the . In we saw . Now let be any group homomorphism from to an abelian group . Since for all (since is abelian), we have that must contain . By , we get that factors as for a unique group homomorphism .  The group is called the abelianization of and the motto is: a homomorphism from a group to an abelian group factors uniquely through the abelianization.  "
},
{
  "id": "thm-fit-group",
  "level": "2",
  "url": "sec-quotient-groups.html#thm-fit-group",
  "type": "Theorem",
  "number": "4.45",
  "title": "First Isomorphism Theorem.",
  "body": "First Isomorphism Theorem Jordan, 1870   If is a homomorphism of groups, then and the map defined by induces an isomorphism     By , there exists a homomorphism such that , and its kernel consists of just the one element of . So is one-to-one, and the image of is the same as the image of .   "
},
{
  "id": "cor-homom-finite-groups",
  "level": "2",
  "url": "sec-quotient-groups.html#cor-homom-finite-groups",
  "type": "Corollary",
  "number": "4.46",
  "title": "Double Divide.",
  "body": "Double Divide   If is a homomorphism from a finite group to a group , then divides and .   "
},
{
  "id": "exe-quotients-inner-automorphisms",
  "level": "2",
  "url": "sec-quotient-groups.html#exe-quotients-inner-automorphisms",
  "type": "Exploration",
  "number": "4.47",
  "title": "<span class=\"process-math\">\\(G\/Z(G)\\cong\\Inn(G)\\)<\/span>.",
  "body": " For any group we have .  "
},
{
  "id": "thm-lattice-iso-group",
  "level": "2",
  "url": "sec-quotient-groups.html#thm-lattice-iso-group",
  "type": "Theorem",
  "number": "4.48",
  "title": "The Lattice Isomorphism Theorem.",
  "body": "The Lattice Isomorphism Theorem   Let be a group and a normal subgroup with canonical homomorphism . There is an containment-preserving bijection given by for . The inverse is defined for by where is the quotient map. We denote .  Then this bijection enjoys the following properties:     (normal) subgroups correspond to normal subgroups i.e.,      iff and iff      iff and iff        indices are preserved; i.e., and .    the supremums and infimums are preserved (this makes and lattice isomorphisms)      and      and           We have previously shown that the quotient map is a surjective group homomorphism. We show:      is well defined (correct codomain) since for we have (since images of subgroups through group homomorphisms are subgroups).      is well defined (correct codomain) since for we have (since preimages of subgroups through group homomorphisms are subgroups) and for any we have , hence      and are mutual inverses: since is surjective and , with the last equality justified by      Thus, the two functions defined in the statement are well-defined and are mutually inverse.  Since and preserve containments, each of , preserves the order relation of containment.  I will only prove some parts of statements (1), (2), (3) in the theorem.  (1) If and , then holds by part of or by the exercise below, since is surjective. The fact that the inverse function also sends normal subgroups to normal subgroups is a consequence of the statement that inverse images of normal subgroups are normal subgroups (see HW 4).   (2) In the interest of time, I'll only prove the assertion about indices in the special case when is normal. In that case this fact is also an immediate consequence of the Third Isomorhism Theorem since for with we have The general case is a consequence of an exercise from HW 5.   (3) The proof of (3) is omitted.   "
},
{
  "id": "graction",
  "level": "1",
  "url": "graction.html",
  "type": "Section",
  "number": "5.1",
  "title": "Group Actions",
  "body": "Group Actions    Actions speak louder than words.   Anthony of Padua   We come to one of the central concepts in group theory, that of an action of a group on a set.  Group Action   For a group and set , an action of on is a function typically written as , such that      for all and .     for all .    group action      To make the first axiom clearer, throughout this section we will write for the action of on and no symbol (concatenation) for the multiplication of two elements in the group .   Group Actions on Arbitrary Sets    Trivial Action  For any group and any set , defines an action, the trivial action . trivial action     Left Multiplication  For any group and any set , defines an action, the left multiplication action . And similarly for right multiplication, yet we do not speak of that here.  left multiplication  left regular action    Conjugation  For any group and any set , defines an action, the conjugation action . conjugation action       Permutation Action   The group acts on the set such that .     Though the set need not be a group, it certainly can be. Indeed, a group can act on itself, as we will see in .   One can also think of group actions as homomorphisms.  The Permutation Representation   Assume is a group and is a set.     If is an action of on , then the function defined as , where is the function given by , is a well defined homomorphism of groups. we will attempt to reserve for the permutation representation homomorphism of a group action.     Conversely, if is a group homomorphism, the rule defines an action of on .       We have thus and a similar argument shows that   Finally, we wish to show , equivalently . Since holds for all , this proves is a homomorphism.  Given a homomorphism , the function defined as is an action because , and .    An immediate perk of this result is that we already know a lot of things about homomorphisms, and we can thus extend that knowledge into the realm of group actions at our leisure. Let's see some examples.  Common Permutation Representations     For the trivial action, the associated group homomorphism is by     For left multiplication, the associated group homomorphism is by , where     For the conjugation action, the associated group homomorphism is by , where       Faithful Action   An action of a group on a set is called faithful if the associated group homomorphism is injective. Equivalently, an action is faithful if and only if for a given , whenever for all , it must be that . faithful action     Losing Faith  Should an action which is not faithful be called unfaithful ? Adulterous ? Discuss.   Trivial Adultery  The trivial action is not faithful.   Transitive Action   An action is transitive if for all there is a such that . transitive action      In many cases, transitivity and faithfulness are related concepts. As we will see later, if a group action is transitive on a set , then the action is faithful if and only if the stabilizer of any element of is trivial. In these situations we can identify the group with a subgroup of the symmetric group on , and use this identification to study the group.   "
},
{
  "id": "def-graction",
  "level": "2",
  "url": "graction.html#def-graction",
  "type": "Definition",
  "number": "5.1",
  "title": "Group Action.",
  "body": "Group Action   For a group and set , an action of on is a function typically written as , such that      for all and .     for all .    group action    "
},
{
  "id": "convention-6",
  "level": "2",
  "url": "graction.html#convention-6",
  "type": "Convention",
  "number": "5.2",
  "title": "",
  "body": " To make the first axiom clearer, throughout this section we will write for the action of on and no symbol (concatenation) for the multiplication of two elements in the group .  "
},
{
  "id": "ex-group-actions",
  "level": "2",
  "url": "graction.html#ex-group-actions",
  "type": "Example",
  "number": "5.3",
  "title": "Group Actions on Arbitrary Sets.",
  "body": "Group Actions on Arbitrary Sets    Trivial Action  For any group and any set , defines an action, the trivial action . trivial action     Left Multiplication  For any group and any set , defines an action, the left multiplication action . And similarly for right multiplication, yet we do not speak of that here.  left multiplication  left regular action    Conjugation  For any group and any set , defines an action, the conjugation action . conjugation action      "
},
{
  "id": "ex-perm-act",
  "level": "2",
  "url": "graction.html#ex-perm-act",
  "type": "Example",
  "number": "5.4",
  "title": "Permutation Action.",
  "body": "Permutation Action   The group acts on the set such that .   "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "graction.html#remark-20",
  "type": "Remark",
  "number": "5.5",
  "title": "",
  "body": " Though the set need not be a group, it certainly can be. Indeed, a group can act on itself, as we will see in .  "
},
{
  "id": "thm-permrep",
  "level": "2",
  "url": "graction.html#thm-permrep",
  "type": "Theorem",
  "number": "5.6",
  "title": "The Permutation Representation.",
  "body": "The Permutation Representation   Assume is a group and is a set.     If is an action of on , then the function defined as , where is the function given by , is a well defined homomorphism of groups. we will attempt to reserve for the permutation representation homomorphism of a group action.     Conversely, if is a group homomorphism, the rule defines an action of on .       We have thus and a similar argument shows that   Finally, we wish to show , equivalently . Since holds for all , this proves is a homomorphism.  Given a homomorphism , the function defined as is an action because , and .   "
},
{
  "id": "ex-permrep-examples",
  "level": "2",
  "url": "graction.html#ex-permrep-examples",
  "type": "Example",
  "number": "5.7",
  "title": "Common Permutation Representations.",
  "body": "Common Permutation Representations     For the trivial action, the associated group homomorphism is by     For left multiplication, the associated group homomorphism is by , where     For the conjugation action, the associated group homomorphism is by , where      "
},
{
  "id": "def-faithful-action",
  "level": "2",
  "url": "graction.html#def-faithful-action",
  "type": "Definition",
  "number": "5.8",
  "title": "Faithful Action.",
  "body": "Faithful Action   An action of a group on a set is called faithful if the associated group homomorphism is injective. Equivalently, an action is faithful if and only if for a given , whenever for all , it must be that . faithful action    "
},
{
  "id": "exploration-3",
  "level": "2",
  "url": "graction.html#exploration-3",
  "type": "Discussion",
  "number": "5.1",
  "title": "Losing Faith.",
  "body": "Losing Faith  Should an action which is not faithful be called unfaithful ? Adulterous ? Discuss.  "
},
{
  "id": "def-trivial-action-not-faithful",
  "level": "2",
  "url": "graction.html#def-trivial-action-not-faithful",
  "type": "Example",
  "number": "5.9",
  "title": "Trivial Adultery.",
  "body": "Trivial Adultery  The trivial action is not faithful.  "
},
{
  "id": "def-transitive-action",
  "level": "2",
  "url": "graction.html#def-transitive-action",
  "type": "Definition",
  "number": "5.10",
  "title": "Transitive Action.",
  "body": "Transitive Action   An action is transitive if for all there is a such that . transitive action    "
},
{
  "id": "remark-21",
  "level": "2",
  "url": "graction.html#remark-21",
  "type": "Remark",
  "number": "5.11",
  "title": "",
  "body": " In many cases, transitivity and faithfulness are related concepts. As we will see later, if a group action is transitive on a set , then the action is faithful if and only if the stabilizer of any element of is trivial. In these situations we can identify the group with a subgroup of the symmetric group on , and use this identification to study the group.  "
},
{
  "id": "sec-left-mult-conjugation",
  "level": "1",
  "url": "sec-left-mult-conjugation.html",
  "type": "Section",
  "number": "5.2",
  "title": "Self Actions",
  "body": "Self Actions  Conjugation    You may never know what results come of your action, but if you do nothing there will be no results.   Ghandi   Conjugacy Class   The conjugacy class of an element is . the conjugacy class of the element  conjugacy class     Conjugate   Let be a group. Two elements are conjugate if there is with . conjugate   Two subsets are conjugate if there is with .    Conjugation Action  Let be any group and fix an element . Define the conjugation action of on itself by setting This is also known as self-conjugation  self-conjugation    We saw the conjugation action in , but in this specific case the group is acting on itself.  Properties of the Conjugation Action      Show acts on via conjugation for any .    The kernel of the permutation representation for the conjugation action is the center . Moreover, the action is faithful if and only if .          Coming soon!    If is the permutation representation for acting on by , then         Normal Subgroups are Unions of Conjugacy Classes   Let . Then is the disjoint union of some of the conjugacy classes in .    Define the conjugation action of on by for all and . Since this is well defined. The two properties in the definition of the action hold for the action of by on since they hold more generally for the action of by conjugation on . Therefore this is indeed an action. The orbits of elements under this action are . Thus the conjugacy classes of the elements of partition .     Left Regular Action    To the left, to the left. Everything you own in a box to the left.   Beyoncé, Single Ladies   Left Regular Action  Let be any group and define an action of on (regarded as just a set) by the rule     This action is often referred to as the left regular action.   Left Multiplication is Faithful   The left regular action is faithful.    Largest Normal Subgroup   Let be a subgroup of a group , and let act on the set of left cosets by left multiplication . Let denote the permutation representation associated to this action. Then  the action described above is transitive     the subgroup described in (1) is the largest (with respect to containment) normal subgroup of contained in .        Let be a group, and let be a subgroup of of finite index . Then there exists a normal subgroup such that and .    Smallest Prime Index is Normal   Let be a finite group and let be a subgroup of of index , where is the smallest prime divisor of the order of . Then is normal in .    Let and note that . Let denote the kernel of the permutation representation generated by acting on by left multiplication.  The tells us that . Thus by . Let . Then for all , making for all including . Thus .  This yields . Let , giving us . As we have , so . But is the smallest prime dividing the order of , and thus , making and .     "
},
{
  "id": "def-conjugacy-class",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#def-conjugacy-class",
  "type": "Definition",
  "number": "5.12",
  "title": "Conjugacy Class.",
  "body": "Conjugacy Class   The conjugacy class of an element is . the conjugacy class of the element  conjugacy class    "
},
{
  "id": "def-conjugate",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#def-conjugate",
  "type": "Definition",
  "number": "5.13",
  "title": "Conjugate.",
  "body": "Conjugate   Let be a group. Two elements are conjugate if there is with . conjugate   Two subsets are conjugate if there is with .   "
},
{
  "id": "ex-conjugation-action",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#ex-conjugation-action",
  "type": "Example",
  "number": "5.14",
  "title": "Conjugation Action.",
  "body": "Conjugation Action  Let be any group and fix an element . Define the conjugation action of on itself by setting This is also known as self-conjugation  self-conjugation   "
},
{
  "id": "thm-conjugation-action",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#thm-conjugation-action",
  "type": "Theorem",
  "number": "5.15",
  "title": "Properties of the Conjugation Action.",
  "body": "Properties of the Conjugation Action      Show acts on via conjugation for any .    The kernel of the permutation representation for the conjugation action is the center . Moreover, the action is faithful if and only if .          Coming soon!    If is the permutation representation for acting on by , then        "
},
{
  "id": "cor-normal-union-of-conjugacy-classes",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#cor-normal-union-of-conjugacy-classes",
  "type": "Corollary",
  "number": "5.16",
  "title": "Normal Subgroups are Unions of Conjugacy Classes.",
  "body": "Normal Subgroups are Unions of Conjugacy Classes   Let . Then is the disjoint union of some of the conjugacy classes in .    Define the conjugation action of on by for all and . Since this is well defined. The two properties in the definition of the action hold for the action of by on since they hold more generally for the action of by conjugation on . Therefore this is indeed an action. The orbits of elements under this action are . Thus the conjugacy classes of the elements of partition .   "
},
{
  "id": "ex-leftmult",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#ex-leftmult",
  "type": "Example",
  "number": "5.17",
  "title": "Left Regular Action.",
  "body": "Left Regular Action  Let be any group and define an action of on (regarded as just a set) by the rule   "
},
{
  "id": "remark-22",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#remark-22",
  "type": "Remark",
  "number": "5.18",
  "title": "",
  "body": " This action is often referred to as the left regular action.  "
},
{
  "id": "prop-left-mult-faithful",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#prop-left-mult-faithful",
  "type": "Proposition",
  "number": "5.19",
  "title": "Left Multiplication is Faithful.",
  "body": "Left Multiplication is Faithful   The left regular action is faithful.   "
},
{
  "id": "lem-largest-normal-subgroup",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#lem-largest-normal-subgroup",
  "type": "Lemma",
  "number": "5.20",
  "title": "Largest Normal Subgroup.",
  "body": "Largest Normal Subgroup   Let be a subgroup of a group , and let act on the set of left cosets by left multiplication . Let denote the permutation representation associated to this action. Then  the action described above is transitive     the subgroup described in (1) is the largest (with respect to containment) normal subgroup of contained in .     "
},
{
  "id": "prop-normal-subgroups-and-index",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#prop-normal-subgroups-and-index",
  "type": "Proposition",
  "number": "5.21",
  "title": "",
  "body": "  Let be a group, and let be a subgroup of of finite index . Then there exists a normal subgroup such that and .   "
},
{
  "id": "thm-smallest-prime-normal",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#thm-smallest-prime-normal",
  "type": "Theorem",
  "number": "5.22",
  "title": "Smallest Prime Index is Normal.",
  "body": "Smallest Prime Index is Normal   Let be a finite group and let be a subgroup of of index , where is the smallest prime divisor of the order of . Then is normal in .    Let and note that . Let denote the kernel of the permutation representation generated by acting on by left multiplication.  The tells us that . Thus by . Let . Then for all , making for all including . Thus .  This yields . Let , giving us . As we have , so . But is the smallest prime dividing the order of , and thus , making and .   "
},
{
  "id": "sec-orbit-stab-class-eq",
  "level": "1",
  "url": "sec-orbit-stab-class-eq.html",
  "type": "Section",
  "number": "5.3",
  "title": "Orbit-Stabilizer and the Class Equation",
  "body": "Orbit-Stabilizer and the Class Equation  LOIS and Orbit-Stabilizer    Being born in a stable does not make one a horse.   Arthur Wellesley   The information encoded in a group action has two basic parts: one part tells us where points go and the other part tells us how points stay put. The following terminology refers to these ideas.  Orbit   Let be a group acting on a set . For an element the orbit of is  the orbit of an element  orbit     A fun fact about orbits is that they've secretly been at the heart of everything we've been doing so far.  Familiar Orbits   Let be a group.   Let act upon itself by . Under this action, .    Let act upon itself by . Under this action, .       Orbits Partition the Group   Let be a group acting on a set . Then    is an equivalence relation;    for any , either or ; and     .       Stabilizer   Let be a group acting on a set . For an element the stabilizer is  the stabilizer of .  stabilizer      Sometimes (including on old qualifying exams) the notation is used to denote the stabilizer. Given that this notation gives no context as to what the set is or what it does, we will stick to .   Stabilizers are Subgroups  The stabilizer is a subgroup of .   One of the most important facts about the action of a group on a finite set is the following:  The Length of the Orbit is the Index of the Stabilizer (LOIS)   Let be a group that acts on a finite set via . For any we have     Let be the collection of left cosets of in . Define a function by . This function is well defined and one-to-one: The function is onto by definition of . Thus is a bijection and it yields equalities     Length isn't a word we have used to describe size or cardinality before, but I suppose that SOIS and COIS just don't quite roll of the tongue quite the same.  Orbit-Stabilizer Theorem   Let be a finite group that acts on a finite set via . For any we have      One of my biggest pet peeves in math is when things with \"Theorem\" or \"Lemma\" in the title aren't given the corresponding classification. Why is always a theorem? Why must the Orbit-Stabilizer Theorem be a corollary? Why do the good die young?    Take note that only applies when is a finite group.   Transitive iff One Orbit An action is transitive if and only if there is exactly one orbit under the action. Similarly, an action is transitive if every stabilizer is trivial.  Lets look at some group actions of a more geometric flavor. What do you think geometry tastes like? Which field of mathematics would taste the best?   Symmetries of the Cube  Let be the group of rotational symmetries of the cube and let act on the collection of faces of the cube in the evident way. This action is transitive and so the one and only orbit has length . It follows that for any face of the cube, has index and, since we already know that , it follows from that . That is, there are four symmetries that map to itself. Indeed, they are the rotations by , , or degrees about the line of symmetry passing through the mid-point of and the mid-point of the opposite face.   That was fun and all, but I just feel like there weren't enough faces...  Symmetries of the Dodecahedron  Let be the group of rotatoinal symmetries of the dodecahedron ( pentagonal faces). The evident action of on the twleve faces is transitive. For each face , clearly has elements: the five rotations about the line joining the midpoint of to the midpoint of the face on the opposite side. Since and , we conclude .   As a final note, we are now able to connect the concepts of transitive and faithful actions in a more meaningful way.  Transitive and Faithful   Suppose that is an abelian group acting transitively and faithfully on a set . Then .    Let . As the action is transitive, by the exercise above we have that the kernel of the action is the intersection of over all . However, as is abelian, for all . Hence, the kernel of the action is for any . On the other hand, the action is faithful, which means the kernel of the action is the identity. It follows that for every . Finally, as the action is transitive, for some (any) . By , .     The Class Equation    Let the others have the charisma. I've got the class.   George H. W. Bush   Centralizer   Let be a group. For any , is called the centralizer of in  the centralizer of an element  centralizer      Many texts use the notation for the centralzier and for conjugacy classes. However, given that the center of a group is denoted with , we argue that makes more intuitive sense for the centralizer, freeing up for conjugacy classes.   Center is Intersection of Stabilizers  Prove that    Normalizer   Let be a group. For any , is called the normalizer of in . the normalizer of a set  normalizer      Notation Check  There have been a lot of new sets introduced recently, all of whom seem to be flying around with reckless abandon. Here's a quick refresher:  Let be a group acting on a set , and let .    : The of in .     The of in .     The of in .     The of in .     The of in .      Conjugation Actions and LOIS   Let be a group.     Then acts on by . For all , the orbit of is the conjugacy class of , and .    Then acts on the power set by . For all , and .       Size of Conjugacy Class Divides   For a finite group , the size of any conjugacy class divides .    Class Equation   Let be a finite group and let be a list of unique representatives of all of the conjugacy classes of of size greater than . Then     The elements of are precisely the group elements that are conjugate to only themselves; that is, they are the one-element orbits for the conjugation action. Because the conjugacy classes (orbits of the conjugation action) partition we have For each as in the statement, by , we have . The follows from substituting this into the equation above.    The provides a way of decomposing a group into its conjugacy classes, which are fundamental building blocks of the group and are essential in more advanced topics, such as representation and character theory.  It also gives us information about the size and structure of the center of a group. (Read: when a proof involves the center of a group from here on out, the is probably a good place to start)   "
},
{
  "id": "def-orbit",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-orbit",
  "type": "Definition",
  "number": "5.23",
  "title": "Orbit.",
  "body": "Orbit   Let be a group acting on a set . For an element the orbit of is  the orbit of an element  orbit    "
},
{
  "id": "cor-familiar-orbits",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#cor-familiar-orbits",
  "type": "Corollary",
  "number": "5.24",
  "title": "Familiar Orbits.",
  "body": "Familiar Orbits   Let be a group.   Let act upon itself by . Under this action, .    Let act upon itself by . Under this action, .      "
},
{
  "id": "lem-orbits-partition",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#lem-orbits-partition",
  "type": "Lemma",
  "number": "5.25",
  "title": "Orbits Partition the Group.",
  "body": "Orbits Partition the Group   Let be a group acting on a set . Then    is an equivalence relation;    for any , either or ; and     .      "
},
{
  "id": "def-stab",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-stab",
  "type": "Definition",
  "number": "5.26",
  "title": "Stabilizer.",
  "body": "Stabilizer   Let be a group acting on a set . For an element the stabilizer is  the stabilizer of .  stabilizer    "
},
{
  "id": "convention-7",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#convention-7",
  "type": "Convention",
  "number": "5.27",
  "title": "",
  "body": " Sometimes (including on old qualifying exams) the notation is used to denote the stabilizer. Given that this notation gives no context as to what the set is or what it does, we will stick to .  "
},
{
  "id": "exe-stabilizer-is-subgroup",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#exe-stabilizer-is-subgroup",
  "type": "Exploration",
  "number": "5.28",
  "title": "Stabilizers are Subgroups.",
  "body": "Stabilizers are Subgroups  The stabilizer is a subgroup of .  "
},
{
  "id": "thm-LOIS",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-LOIS",
  "type": "Theorem",
  "number": "5.29",
  "title": "The Length of the Orbit is the Index of the Stabilizer (LOIS).",
  "body": "The Length of the Orbit is the Index of the Stabilizer (LOIS)   Let be a group that acts on a finite set via . For any we have     Let be the collection of left cosets of in . Define a function by . This function is well defined and one-to-one: The function is onto by definition of . Thus is a bijection and it yields equalities    "
},
{
  "id": "cor-orbit-stabilizer",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#cor-orbit-stabilizer",
  "type": "Corollary",
  "number": "5.30",
  "title": "Orbit-Stabilizer Theorem.",
  "body": "Orbit-Stabilizer Theorem   Let be a finite group that acts on a finite set via . For any we have    "
},
{
  "id": "warning-1",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#warning-1",
  "type": "Warning",
  "number": "5.31",
  "title": "",
  "body": " Take note that only applies when is a finite group.  "
},
{
  "id": "exe-transitive-orbit",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#exe-transitive-orbit",
  "type": "Exploration",
  "number": "5.32",
  "title": "Transitive iff One Orbit.",
  "body": "Transitive iff One Orbit An action is transitive if and only if there is exactly one orbit under the action. Similarly, an action is transitive if every stabilizer is trivial. "
},
{
  "id": "ex-cube",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#ex-cube",
  "type": "Example",
  "number": "5.33",
  "title": "Symmetries of the Cube.",
  "body": "Symmetries of the Cube  Let be the group of rotational symmetries of the cube and let act on the collection of faces of the cube in the evident way. This action is transitive and so the one and only orbit has length . It follows that for any face of the cube, has index and, since we already know that , it follows from that . That is, there are four symmetries that map to itself. Indeed, they are the rotations by , , or degrees about the line of symmetry passing through the mid-point of and the mid-point of the opposite face.  "
},
{
  "id": "ex-dodec",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#ex-dodec",
  "type": "Example",
  "number": "5.34",
  "title": "Symmetries of the Dodecahedron.",
  "body": "Symmetries of the Dodecahedron  Let be the group of rotatoinal symmetries of the dodecahedron ( pentagonal faces). The evident action of on the twleve faces is transitive. For each face , clearly has elements: the five rotations about the line joining the midpoint of to the midpoint of the face on the opposite side. Since and , we conclude .  "
},
{
  "id": "thm-transfaith",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-transfaith",
  "type": "Theorem",
  "number": "5.35",
  "title": "Transitive and Faithful.",
  "body": "Transitive and Faithful   Suppose that is an abelian group acting transitively and faithfully on a set . Then .    Let . As the action is transitive, by the exercise above we have that the kernel of the action is the intersection of over all . However, as is abelian, for all . Hence, the kernel of the action is for any . On the other hand, the action is faithful, which means the kernel of the action is the identity. It follows that for every . Finally, as the action is transitive, for some (any) . By , .   "
},
{
  "id": "def-centralizer",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-centralizer",
  "type": "Definition",
  "number": "5.36",
  "title": "Centralizer.",
  "body": "Centralizer   Let be a group. For any , is called the centralizer of in  the centralizer of an element  centralizer    "
},
{
  "id": "convention-8",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#convention-8",
  "type": "Convention",
  "number": "5.37",
  "title": "",
  "body": " Many texts use the notation for the centralzier and for conjugacy classes. However, given that the center of a group is denoted with , we argue that makes more intuitive sense for the centralizer, freeing up for conjugacy classes.  "
},
{
  "id": "exe-stabilizer-intersection-is-center",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#exe-stabilizer-intersection-is-center",
  "type": "Exploration",
  "number": "5.38",
  "title": "Center is Intersection of Stabilizers.",
  "body": "Center is Intersection of Stabilizers  Prove that   "
},
{
  "id": "def-normalizer",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-normalizer",
  "type": "Definition",
  "number": "5.39",
  "title": "Normalizer.",
  "body": "Normalizer   Let be a group. For any , is called the normalizer of in . the normalizer of a set  normalizer    "
},
{
  "id": "lem-conjugation-and-lois",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#lem-conjugation-and-lois",
  "type": "Lemma",
  "number": "5.40",
  "title": "Conjugation Actions and LOIS.",
  "body": "Conjugation Actions and LOIS   Let be a group.     Then acts on by . For all , the orbit of is the conjugacy class of , and .    Then acts on the power set by . For all , and .      "
},
{
  "id": "thm-conjugacy-divides-order",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-conjugacy-divides-order",
  "type": "Theorem",
  "number": "5.41",
  "title": "Size of Conjugacy Class Divides <span class=\"process-math\">\\(|G|\\)<\/span>.",
  "body": "Size of Conjugacy Class Divides   For a finite group , the size of any conjugacy class divides .   "
},
{
  "id": "thm-class-eq",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-class-eq",
  "type": "Theorem",
  "number": "5.42",
  "title": "Class Equation.",
  "body": "Class Equation   Let be a finite group and let be a list of unique representatives of all of the conjugacy classes of of size greater than . Then     The elements of are precisely the group elements that are conjugate to only themselves; that is, they are the one-element orbits for the conjugation action. Because the conjugacy classes (orbits of the conjugation action) partition we have For each as in the statement, by , we have . The follows from substituting this into the equation above.   "
},
{
  "id": "sec-p-groups",
  "level": "1",
  "url": "sec-p-groups.html",
  "type": "Section",
  "number": "6.1",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-groups and Sylow's Theorem",
  "body": "-groups and Sylow's Theorem  -groups    The greatest weakness of most humans is their hesitancy to tell others how much they love them while they're still alive.   Optimus Prime   -group   For a prime number , a -group is a group of order for some . -group     Center of -group is Nontrivial   If is a prime number and is a finite group of order for some , then is not the trivial group (In fact for some ).    Let be a list of unique representatives of all of the conjugacy classes of of size greater than as in . Then for each , so . Since , it follows that for each . From we deduce that so, .      is dissimilar to in that this theorem is useful.   Order and   Let be prime.   Any group of order is cyclic.    Any group of order is abelian.        Sylow Subgroups  Sylow -subgroup   Let be a finite group and a prime. Write the order of as where . A Sylow -subgroup of is a subgroup such that . That is, a Sylow -subgroup of is a subgroup whose order is the highest conceivable power of according to .  We set to be the collection of all Sylow -subgroups of and to be the number of Sylow -subgroups. the collection of all Sylow -subgroups of  the the number of Sylow -subgroups  Sylow subgroup  Sylow -subgroup      We allow the case when , in which case and has a unique Sylow -subgroup, namely which has order .   Sylow Subgroups in  In for a prime , is a Sylow -subgroup. If , there is only one Sylow -subgroup of , so .  In for odd, each of the subgroups , for is a Sylow -subgroup, so .   Sylow Subgroups in  In , the Sylow -subgroups are the cyclic groups for any five cycle , so because there are five cycles, but there are four of these in every Sylow -subgroup. The Sylow -subgroups are the cyclic groups for any three cycle , so because there are three cycles, but there are two of these in every Sylow -subgroup.  A Sylow -subgroup of is any subgroup of order . For example is a Sylow -subgroup. There are many others.   Cauchy's Theorem   If is a finite group and is a prime number dividing , then has an element of order . (In fact, at least elements of order .)     allows us to conclude the existence of certain elements in a group based solely on its order, which can be a powerful tool in studying the structure of groups.  For example, it can be used to prove the existence of subgroups of a given order in a group, and it is a key ingredient in the proof of , which provides information about the structure of finite groups.   has since been generalized and extended in many ways, and it is now a fundamental result in the theory of finite groups, where it plays a central role in the classification of groups of small order.   Sylows-Theorem    What makes me unique is that I'm normal.   Scotty McCreery   Sylow's Lemma   Let be a finite group, a prime, a Sylow -subgroup of , and any -subgroup of . Then .    Since , we have . For the reverse containment, let . Since , is a subgroup of . (Technically, we only proved is a subgroup if , but the proof applies verbatim provided the weaker condition holds.) Also and since each of , , and is a power of , is a -subgroup of . But and is a -subgroup of largest possible order. So . This proves and thus .    Sylow's Theorem   Assume is a group of order where is prime, , and .    (there exists at least one Sylow -subgroup of ).    If is a Sylow -subgroup of and is any -subgroup of (i.e., a subgroup whose order is some power of ), then there is a such that . In particular, the action of on by is transitive — i.e., any two Sylow -subgroups are conjugate.    We have     For any , and hence         provides a systematic way of analyzing the subgroups of a finite group. It allows us to determine the number of subgroups of a given order, which is useful in many applications, such as studying the structure of solvable and simple groups. The theorems also provide information about the normalizers of subgroups, which can be used to study normal subgroups and quotient groups.   In general, can be deduced from part one of . For say . Then there exists a Sylow -subgroup of . Pick any , . Then for some . Then has order .   Recalling , we have the following:  Sylow Subgroup Normal iff Unique   A Sylow -subgroup of a finite group is normal if and only if it is the only Sylow -subgroup of .    Order of  Prove that has precisely three distinct subgroups of order , all of which are isomorphic to    Any subgroup of of order is a Sylow -subgroup. By , the number of Sylow -subgroups is either or . As any -cycle or -cycle must be contained in a Sylow -subgroup (since such elements generate subgroups of order , for some ) and there are six -cycles and six -cycles, there has to be more than one Sylow -subgroup. Hence, there are precisely distinct subgroups of order .  As all of them are conjugate, and conjugation induces an isomorphism on the group, we see that all three subgroups are isomorphic. Hence, we just need to show that contains a subgroup isomorphic to . Let be the set of left cosets of the subgroup of . Note that . Let act on by left multiplication. This action induces a homomorphism where is the permutation group on . As shown in class, the kernel of this homomorphism is the largest normal subgroup contained in , which is . Thus, is injective and the image of is a subgroup of isomorphic to .    "
},
{
  "id": "def-p-group",
  "level": "2",
  "url": "sec-p-groups.html#def-p-group",
  "type": "Definition",
  "number": "6.1",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-group.",
  "body": "-group   For a prime number , a -group is a group of order for some . -group    "
},
{
  "id": "thm-center-pgroup",
  "level": "2",
  "url": "sec-p-groups.html#thm-center-pgroup",
  "type": "Theorem",
  "number": "6.2",
  "title": "Center of <span class=\"process-math\">\\(p\\)<\/span>-group is Nontrivial.",
  "body": "Center of -group is Nontrivial   If is a prime number and is a finite group of order for some , then is not the trivial group (In fact for some ).    Let be a list of unique representatives of all of the conjugacy classes of of size greater than as in . Then for each , so . Since , it follows that for each . From we deduce that so, .   "
},
{
  "id": "remark-23",
  "level": "2",
  "url": "sec-p-groups.html#remark-23",
  "type": "Remark",
  "number": "6.3",
  "title": "",
  "body": "  is dissimilar to in that this theorem is useful.  "
},
{
  "id": "thm-order-p-cyclic",
  "level": "2",
  "url": "sec-p-groups.html#thm-order-p-cyclic",
  "type": "Theorem",
  "number": "6.4",
  "title": "Order <span class=\"process-math\">\\(p\\)<\/span> and <span class=\"process-math\">\\(p^2\\)<\/span>.",
  "body": "Order and   Let be prime.   Any group of order is cyclic.    Any group of order is abelian.      "
},
{
  "id": "def-sylow-subgroup",
  "level": "2",
  "url": "sec-p-groups.html#def-sylow-subgroup",
  "type": "Definition",
  "number": "6.5",
  "title": "Sylow <span class=\"process-math\">\\(p\\)<\/span>-subgroup.",
  "body": "Sylow -subgroup   Let be a finite group and a prime. Write the order of as where . A Sylow -subgroup of is a subgroup such that . That is, a Sylow -subgroup of is a subgroup whose order is the highest conceivable power of according to .  We set to be the collection of all Sylow -subgroups of and to be the number of Sylow -subgroups. the collection of all Sylow -subgroups of  the the number of Sylow -subgroups  Sylow subgroup  Sylow -subgroup    "
},
{
  "id": "remark-24",
  "level": "2",
  "url": "sec-p-groups.html#remark-24",
  "type": "Remark",
  "number": "6.6",
  "title": "",
  "body": " We allow the case when , in which case and has a unique Sylow -subgroup, namely which has order .  "
},
{
  "id": "ex-d2n-sylow",
  "level": "2",
  "url": "sec-p-groups.html#ex-d2n-sylow",
  "type": "Example",
  "number": "6.7",
  "title": "Sylow Subgroups in <span class=\"process-math\">\\(D_{2n}\\)<\/span>.",
  "body": "Sylow Subgroups in  In for a prime , is a Sylow -subgroup. If , there is only one Sylow -subgroup of , so .  In for odd, each of the subgroups , for is a Sylow -subgroup, so .  "
},
{
  "id": "ex-s5-sylow",
  "level": "2",
  "url": "sec-p-groups.html#ex-s5-sylow",
  "type": "Example",
  "number": "6.8",
  "title": "Sylow Subgroups in <span class=\"process-math\">\\(S_{5}\\)<\/span>.",
  "body": "Sylow Subgroups in  In , the Sylow -subgroups are the cyclic groups for any five cycle , so because there are five cycles, but there are four of these in every Sylow -subgroup. The Sylow -subgroups are the cyclic groups for any three cycle , so because there are three cycles, but there are two of these in every Sylow -subgroup.  A Sylow -subgroup of is any subgroup of order . For example is a Sylow -subgroup. There are many others.  "
},
{
  "id": "thm-cauchy",
  "level": "2",
  "url": "sec-p-groups.html#thm-cauchy",
  "type": "Theorem",
  "number": "6.9",
  "title": "Cauchy's Theorem.",
  "body": "Cauchy's Theorem   If is a finite group and is a prime number dividing , then has an element of order . (In fact, at least elements of order .)   "
},
{
  "id": "lem-Syl-lem",
  "level": "2",
  "url": "sec-p-groups.html#lem-Syl-lem",
  "type": "Lemma",
  "number": "6.10",
  "title": "Sylow's Lemma.",
  "body": "Sylow's Lemma   Let be a finite group, a prime, a Sylow -subgroup of , and any -subgroup of . Then .    Since , we have . For the reverse containment, let . Since , is a subgroup of . (Technically, we only proved is a subgroup if , but the proof applies verbatim provided the weaker condition holds.) Also and since each of , , and is a power of , is a -subgroup of . But and is a -subgroup of largest possible order. So . This proves and thus .   "
},
{
  "id": "thm-sylow",
  "level": "2",
  "url": "sec-p-groups.html#thm-sylow",
  "type": "Theorem",
  "number": "6.11",
  "title": "Sylow's Theorem.",
  "body": "Sylow's Theorem   Assume is a group of order where is prime, , and .    (there exists at least one Sylow -subgroup of ).    If is a Sylow -subgroup of and is any -subgroup of (i.e., a subgroup whose order is some power of ), then there is a such that . In particular, the action of on by is transitive — i.e., any two Sylow -subgroups are conjugate.    We have     For any , and hence       "
},
{
  "id": "remark-25",
  "level": "2",
  "url": "sec-p-groups.html#remark-25",
  "type": "Remark",
  "number": "6.12",
  "title": "",
  "body": " In general, can be deduced from part one of . For say . Then there exists a Sylow -subgroup of . Pick any , . Then for some . Then has order .  "
},
{
  "id": "cor-unique-sylow-normal",
  "level": "2",
  "url": "sec-p-groups.html#cor-unique-sylow-normal",
  "type": "Corollary",
  "number": "6.13",
  "title": "Sylow Subgroup Normal iff Unique.",
  "body": "Sylow Subgroup Normal iff Unique   A Sylow -subgroup of a finite group is normal if and only if it is the only Sylow -subgroup of .   "
},
{
  "id": "exe-order-8-subgroups-of-s4",
  "level": "2",
  "url": "sec-p-groups.html#exe-order-8-subgroups-of-s4",
  "type": "Exploration",
  "number": "6.14",
  "title": "Order <span class=\"process-math\">\\(8\\)<\/span> of <span class=\"process-math\">\\(S_4\\)<\/span>.",
  "body": "Order of  Prove that has precisely three distinct subgroups of order , all of which are isomorphic to    Any subgroup of of order is a Sylow -subgroup. By , the number of Sylow -subgroups is either or . As any -cycle or -cycle must be contained in a Sylow -subgroup (since such elements generate subgroups of order , for some ) and there are six -cycles and six -cycles, there has to be more than one Sylow -subgroup. Hence, there are precisely distinct subgroups of order .  As all of them are conjugate, and conjugation induces an isomorphism on the group, we see that all three subgroups are isomorphic. Hence, we just need to show that contains a subgroup isomorphic to . Let be the set of left cosets of the subgroup of . Note that . Let act on by left multiplication. This action induces a homomorphism where is the permutation group on . As shown in class, the kernel of this homomorphism is the largest normal subgroup contained in , which is . Thus, is injective and the image of is a subgroup of isomorphic to .  "
},
{
  "id": "sec-simple-groups",
  "level": "1",
  "url": "sec-simple-groups.html",
  "type": "Section",
  "number": "6.2",
  "title": "Simple Groups",
  "body": "Simple Groups    Everything should be made as simple as possible, but not simpler.   Albert Einstein   Simple Group   A group is called simple if it has only two normal subgroups: itself and the trivial subgroup. simple group     Simple   for a prime is simple since any non-trivial element generates the whole group.   Simple Groups and Index  Let be a finite group and a subgroup of such that: , is simple, and . Prove that the only normal subgroups of are , and .   Let be a normal subgroup of . Then is a normal subgroup of .   No Simple Groups of Order   Let us prove that no group or order is simple. Let be any group of order . We will prove that must have either a normal subgroup of order or a normal subgroups of oder .   gives that is either or and is either or . If either of these numbers is , we have a unique subgroup of order or of order , and such a subgroup must be normal. Suppose these numbers are and , respectively. We deduce a contradition by counting elements .  In detail, say are the Sylow -subgroups. By  for all . Thus the set  has elements, one of which is and the other of which must have order . That is, there are elements of order in . But now consider the three Sylow -subgroups . Each has order and for all . It follows that for all , and thus , a contradiction.     In the previous example, it would not be so easy to count elements of order and . We do know that every element in has order , or (any only one has order ), but the size of this set is harder to calculate. For notice that might have order . The most one can say for sure is that has at least elements.   No Simple Groups of Order 80   No group of order is simple.    By way of contradiciton suppose is simple and . gives and (since they cannot be by the assumption that is simple). The counting elements trick would work, but let's proceed in a different way: Consider the action of on by conjugation and let be the associated homomorphism (obtained by choosing a numbering of the members of ). The map is non-trivial since the action is transitive (part (2) of ). But does not divide and so cannot be injective. It follows that is a non-trivial, proper normal subgroup of , a contradiction.    No Simple Groups of Order 90   No group of order is simple.    By way of contradiction suppose is a simple group of order . Since , we conclude from that   If any of these is , then the corresonding Sylow -subgroup is unique and hence normal, a contradiction.  Although it is not actually needed here, let's show cannot be or . For example, if it were , then the action of on (by conjugation) gives a homomorphism . Since the action is transitive, this homomorphism cannot be the trivial map. Since does not divide , this map cannot be injective. Thus the kernel of is a non-trivial, proper normal subgroup, a contradiction. In a similar way one shows .  We have shown that the only possibility is One is now tempted to count elements: we have elements of order and elements of order . But elements of order are not so easy to count since the various Sylow -subgroups have nine elements each and might interect in subsets of order . The only obvious things is that there are at least of them. This does not give enough elements to reach a contradiction.  The action of on leads to a homomorphism , but since does divide , there is no contradiction lurking here either.  So, we must resort to something really sneaky: let be all of the Sylow -subgroups. Observe that if  for all , then we would have elements of order or . This would give at least elements, which is not possible. So, it must be the case that at least two intersect non-trivially. Without loss, let's say is such that . We ponder . Since is abelian and , , so that . Likewise, too, and since , we get . And of course . We get only three possibilities: Let us show that each is impossible:  If , then we have constructed a subgroup of of index . The action of on the left cosets gives a homomorphism that cannot be the trivial map since the action is transitive. But it cannot be injective either, and this leads to a non-trivial nomal subgroup. The exact same reasoning shows cannot be (or we could use that it has index ). Finally, if , then , which is also impossible.    is Simple    is simple.    the Unique Simple Group of Order   If is a simple group of order , then .    Assume is simple of order . Let us first observe that it suffices to construct a non-trivial action of on a set with elements. For given such an action we obtain a non-trivial homomorphism . Since it's non-trivial and is simple, we must have , so that is injective. Thus , and . But we already know that is the only subgroup of of order , and thus .  So, we only need to find such an action, and one's first guess would be the action on one of the sets of Sylow -subgroups. By Sylow Theory and the fact that is simple (so that no Sylow -subgroup for can be unique) we get   The next important observation is:   There is no non-trivial action of on a set of size at most .   For if there was such a non-trivial action, we would get a homomorphism for (if , the only action is the trivial one). Such a homomorphism cannot be injective by order considerations. So, it's kernel would be a proper, non-trivial normal subgroup, which do not exist.  In particular, and , so that   If then we are done, since this action is transitive and thus certainly non-trivial.  Suppose and let be all the Sylow -subgroups. Since and , has elements of order or . If for all , we would have elements of order or , which is far too many elements in total. At least two of these must therefore intersect non-trivially and without loss say has two elements. We consider . As in the preivious example, and hence , , and . The possibilities are If then , which is impossible. If , then we obtain an transitive action of on the three element set of left cosets of in , which as shown above is not possible. We are left with . Thus acts transitively (and hence non-trivially) on the five element set of left cosets of in .     The proof shows that if either or , but in hindsight only one of these can actually be possible. It's actually the former: has no elements of order (since four cycles are odd permuations) and the only elements of order are products of two disjoint transpotions, and there are such elements. It's not hard to see that the five -element subgroups of given by the Klein -group and its obvious conjugates (i.e., those obtained by leaving out one of instead of ) are the only Sylow -subgoups of .   "
},
{
  "id": "def-simple-group",
  "level": "2",
  "url": "sec-simple-groups.html#def-simple-group",
  "type": "Definition",
  "number": "6.15",
  "title": "Simple Group.",
  "body": "Simple Group   A group is called simple if it has only two normal subgroups: itself and the trivial subgroup. simple group    "
},
{
  "id": "example-34",
  "level": "2",
  "url": "sec-simple-groups.html#example-34",
  "type": "Example",
  "number": "6.16",
  "title": "<span class=\"process-math\">\\(\\mathbb{Z}\/p\\)<\/span> Simple.",
  "body": "Simple   for a prime is simple since any non-trivial element generates the whole group.  "
},
{
  "id": "exe-index-2-and-simple-groups",
  "level": "2",
  "url": "sec-simple-groups.html#exe-index-2-and-simple-groups",
  "type": "Exploration",
  "number": "6.17",
  "title": "Simple Groups and Index <span class=\"process-math\">\\(2\\)<\/span>.",
  "body": "Simple Groups and Index  Let be a finite group and a subgroup of such that: , is simple, and . Prove that the only normal subgroups of are , and .   Let be a normal subgroup of . Then is a normal subgroup of .  "
},
{
  "id": "ex-no-order-12-simple",
  "level": "2",
  "url": "sec-simple-groups.html#ex-no-order-12-simple",
  "type": "Example",
  "number": "6.18",
  "title": "No Simple Groups of Order <span class=\"process-math\">\\(12\\)<\/span>.",
  "body": "No Simple Groups of Order   Let us prove that no group or order is simple. Let be any group of order . We will prove that must have either a normal subgroup of order or a normal subgroups of oder .   gives that is either or and is either or . If either of these numbers is , we have a unique subgroup of order or of order , and such a subgroup must be normal. Suppose these numbers are and , respectively. We deduce a contradition by counting elements .  In detail, say are the Sylow -subgroups. By  for all . Thus the set  has elements, one of which is and the other of which must have order . That is, there are elements of order in . But now consider the three Sylow -subgroups . Each has order and for all . It follows that for all , and thus , a contradiction.   "
},
{
  "id": "remark-26",
  "level": "2",
  "url": "sec-simple-groups.html#remark-26",
  "type": "Remark",
  "number": "6.19",
  "title": "",
  "body": " In the previous example, it would not be so easy to count elements of order and . We do know that every element in has order , or (any only one has order ), but the size of this set is harder to calculate. For notice that might have order . The most one can say for sure is that has at least elements.  "
},
{
  "id": "ex-no-order-80-simple",
  "level": "2",
  "url": "sec-simple-groups.html#ex-no-order-80-simple",
  "type": "Example",
  "number": "6.20",
  "title": "No Simple Groups of Order 80.",
  "body": "No Simple Groups of Order 80   No group of order is simple.    By way of contradiciton suppose is simple and . gives and (since they cannot be by the assumption that is simple). The counting elements trick would work, but let's proceed in a different way: Consider the action of on by conjugation and let be the associated homomorphism (obtained by choosing a numbering of the members of ). The map is non-trivial since the action is transitive (part (2) of ). But does not divide and so cannot be injective. It follows that is a non-trivial, proper normal subgroup of , a contradiction.   "
},
{
  "id": "ex-no-order-90-simple",
  "level": "2",
  "url": "sec-simple-groups.html#ex-no-order-90-simple",
  "type": "Example",
  "number": "6.21",
  "title": "No Simple Groups of Order 90.",
  "body": "No Simple Groups of Order 90   No group of order is simple.    By way of contradiction suppose is a simple group of order . Since , we conclude from that   If any of these is , then the corresonding Sylow -subgroup is unique and hence normal, a contradiction.  Although it is not actually needed here, let's show cannot be or . For example, if it were , then the action of on (by conjugation) gives a homomorphism . Since the action is transitive, this homomorphism cannot be the trivial map. Since does not divide , this map cannot be injective. Thus the kernel of is a non-trivial, proper normal subgroup, a contradiction. In a similar way one shows .  We have shown that the only possibility is One is now tempted to count elements: we have elements of order and elements of order . But elements of order are not so easy to count since the various Sylow -subgroups have nine elements each and might interect in subsets of order . The only obvious things is that there are at least of them. This does not give enough elements to reach a contradiction.  The action of on leads to a homomorphism , but since does divide , there is no contradiction lurking here either.  So, we must resort to something really sneaky: let be all of the Sylow -subgroups. Observe that if  for all , then we would have elements of order or . This would give at least elements, which is not possible. So, it must be the case that at least two intersect non-trivially. Without loss, let's say is such that . We ponder . Since is abelian and , , so that . Likewise, too, and since , we get . And of course . We get only three possibilities: Let us show that each is impossible:  If , then we have constructed a subgroup of of index . The action of on the left cosets gives a homomorphism that cannot be the trivial map since the action is transitive. But it cannot be injective either, and this leads to a non-trivial nomal subgroup. The exact same reasoning shows cannot be (or we could use that it has index ). Finally, if , then , which is also impossible.   "
},
{
  "id": "thm-a5-simple",
  "level": "2",
  "url": "sec-simple-groups.html#thm-a5-simple",
  "type": "Theorem",
  "number": "6.22",
  "title": "<span class=\"process-math\">\\(A_5\\)<\/span> is Simple.",
  "body": "is Simple    is simple.   "
},
{
  "id": "thm-simple-60",
  "level": "2",
  "url": "sec-simple-groups.html#thm-simple-60",
  "type": "Theorem",
  "number": "6.23",
  "title": "<span class=\"process-math\">\\(A_5\\)<\/span> the Unique Simple Group of Order <span class=\"process-math\">\\(60\\)<\/span>.",
  "body": "the Unique Simple Group of Order   If is a simple group of order , then .    Assume is simple of order . Let us first observe that it suffices to construct a non-trivial action of on a set with elements. For given such an action we obtain a non-trivial homomorphism . Since it's non-trivial and is simple, we must have , so that is injective. Thus , and . But we already know that is the only subgroup of of order , and thus .  So, we only need to find such an action, and one's first guess would be the action on one of the sets of Sylow -subgroups. By Sylow Theory and the fact that is simple (so that no Sylow -subgroup for can be unique) we get   The next important observation is:   There is no non-trivial action of on a set of size at most .   For if there was such a non-trivial action, we would get a homomorphism for (if , the only action is the trivial one). Such a homomorphism cannot be injective by order considerations. So, it's kernel would be a proper, non-trivial normal subgroup, which do not exist.  In particular, and , so that   If then we are done, since this action is transitive and thus certainly non-trivial.  Suppose and let be all the Sylow -subgroups. Since and , has elements of order or . If for all , we would have elements of order or , which is far too many elements in total. At least two of these must therefore intersect non-trivially and without loss say has two elements. We consider . As in the preivious example, and hence , , and . The possibilities are If then , which is impossible. If , then we obtain an transitive action of on the three element set of left cosets of in , which as shown above is not possible. We are left with . Thus acts transitively (and hence non-trivially) on the five element set of left cosets of in .   "
},
{
  "id": "remark-27",
  "level": "2",
  "url": "sec-simple-groups.html#remark-27",
  "type": "Remark",
  "number": "6.24",
  "title": "",
  "body": " The proof shows that if either or , but in hindsight only one of these can actually be possible. It's actually the former: has no elements of order (since four cycles are odd permuations) and the only elements of order are products of two disjoint transpotions, and there are such elements. It's not hard to see that the five -element subgroups of given by the Klein -group and its obvious conjugates (i.e., those obtained by leaving out one of instead of ) are the only Sylow -subgoups of .  "
},
{
  "id": "sec-dps",
  "level": "1",
  "url": "sec-dps.html",
  "type": "Section",
  "number": "7.1",
  "title": "Direct Products",
  "body": "Direct Products   We now discuss how to build new groups from old ones.   Direct Products: Revisited    Evil is the product of the ability of humans to make abstract that which is concrete.   John-Paul Sartre   Direct Product, Direct Sum   Let be a group for all in an index set . The direct product of the groups is the Cartesian product with multiplication defined by The direct sum of the groups is the subset of the direct product given by with the same multiplication as the direct product. direct product of groups  direct sum of groups      A direct sum is the same thing as a finite direct product.   Direct Product of Groups is a Group   The direct product of a collection of groups is a group, and the direct sum of the collection is a subgroup of the direct product.     The direct sum notation will not be seen or heard from again in group theory. It was fun while it lasted.   Properties of Direct Products      The direct product of groups is abelian if and only if every factor of the product is abelian.    Let be a direct product of groups. If is a direct product of subgroups of , then .    If and , then .    Let . Then .       Direct Products and Homomorphisms      Let and be groups. Then the projection map is a surjective homomorphism of groups.    Let and be groups. Then the inclusion map is an injective homomorphism of groups.       Direct Product of Cyclic Groups  If then . Indeed consider the elements and in . Then and . Therefore . Since and both of these sets have cardinality it must be the case that . Since and are both cyclic groups of order they are isomorphic. Thus    No Cancellation in Products  Find an example of groups such that there is an isomorphism but is not trivial. Note: since can be rewritten as , the above shows that in general one cannot cancel groups in isomorphisms between direct products.       Outside of a dog, a book is a man's best friend. Inside of a dog it's too dark to read.   Groucho Marx   Trivially Intersecting Normal Subgroups  Let and be normal subgroups of a group such that . Prove that for all .     Let and be subgroups of a group and define the set  I wish this had a name other than \"HK\"       There has to be a better name for this, right? I can't think of one, but maybe you can. Discuss.   Subgroup Criteria   Let be a group with subgroups . Recall the notation     if and only if .    If either one of or is a normal subgroup of , then and .       Order of   For two finite subgroups , .    HK and Normality   Let be a group, and . Then    ,     , and     .        The identity does not mean that every pair of elements from and must commute.   but not Abelian   In , let and . Then but and do not commute. The fact that can also be justified by observing that .    The second isomorphism theorem, also known as the diamond isomorphism theorem or the modular law, provides information about the structure of subgroups and their intersections.  Second Isomorphism Theorem   Let be a group, and . Then there is an isomorphism given by     The first two assertions are left as exercises and since we have . Define a homomorphism by . This is a homomorphism since it is the composition  of homomorphisms. is onto since for all we have . The kernel of is . The result thus follows from the .    The third isomorphism theorem, also known as the factor or quotient theorem, gives a relationship between normal subgroups of a group and their quotient groups.  Third Isomorphism Theorem   Suppose is a group, , and . Then , and there is an isomorphism given by sending the coset of represented by to .    The first two assertions are immediate from the definitions.  The kernel of the canonical map contains and so by we get an induced homomorhism with . Moreover, we know Finally apply the to .    and Sylow Subgroups  Let be a finite group and a normal subgroup of . Let be a Sylow -subgroup of (for some prime dividing the order of ). Prove that .   Let . Then is a Sylow -subgroup of and hence conjugate in to .   As in the hint, for , we have for some . Thus, , which means . Hence, .    Recognition Theorem    Don't worry when you are not recognized, but strive to be worthy of recognition.   Abraham Lincoln   Recognition Theorem for Direct Products   Suppose is a group with normal subgroups and such that . Then the following hold:    via the isomorphism of groups defined by .          .       Notice that the hypothesis implies . Furthermore and imply that the elements of commute with the elements of . Indeed, consider . Then since , , so also . Similarly it follows that , but since it follows that , i.e. for any .  Using the above we have and thus is a homomorphism. It's kernel is , which is just since . The image of is clearly . This proves is an isomorphism.    Internal and External Direct Product   If and are such that then we call is called the internal direct product of and and the external direct product of and . internal direct product  external direct product      "
},
{
  "id": "def-dp-external",
  "level": "2",
  "url": "sec-dps.html#def-dp-external",
  "type": "Definition",
  "number": "7.1",
  "title": "Direct Product, Direct Sum.",
  "body": "Direct Product, Direct Sum   Let be a group for all in an index set . The direct product of the groups is the Cartesian product with multiplication defined by The direct sum of the groups is the subset of the direct product given by with the same multiplication as the direct product. direct product of groups  direct sum of groups    "
},
{
  "id": "remark-28",
  "level": "2",
  "url": "sec-dps.html#remark-28",
  "type": "Remark",
  "number": "7.2",
  "title": "",
  "body": " A direct sum is the same thing as a finite direct product.  "
},
{
  "id": "thm-dp-a-group",
  "level": "2",
  "url": "sec-dps.html#thm-dp-a-group",
  "type": "Theorem",
  "number": "7.3",
  "title": "Direct Product of Groups is a Group.",
  "body": "Direct Product of Groups is a Group   The direct product of a collection of groups is a group, and the direct sum of the collection is a subgroup of the direct product.   "
},
{
  "id": "remark-29",
  "level": "2",
  "url": "sec-dps.html#remark-29",
  "type": "Remark",
  "number": "7.4",
  "title": "",
  "body": " The direct sum notation will not be seen or heard from again in group theory. It was fun while it lasted.  "
},
{
  "id": "thm-dp-properties",
  "level": "2",
  "url": "sec-dps.html#thm-dp-properties",
  "type": "Theorem",
  "number": "7.5",
  "title": "Properties of Direct Products.",
  "body": "Properties of Direct Products      The direct product of groups is abelian if and only if every factor of the product is abelian.    Let be a direct product of groups. If is a direct product of subgroups of , then .    If and , then .    Let . Then .      "
},
{
  "id": "thm-dps-and-homs",
  "level": "2",
  "url": "sec-dps.html#thm-dps-and-homs",
  "type": "Theorem",
  "number": "7.6",
  "title": "Direct Products and Homomorphisms.",
  "body": "Direct Products and Homomorphisms      Let and be groups. Then the projection map is a surjective homomorphism of groups.    Let and be groups. Then the inclusion map is an injective homomorphism of groups.      "
},
{
  "id": "ex-dp-cyclic",
  "level": "2",
  "url": "sec-dps.html#ex-dp-cyclic",
  "type": "Example",
  "number": "7.7",
  "title": "Direct Product of Cyclic Groups.",
  "body": "Direct Product of Cyclic Groups  If then . Indeed consider the elements and in . Then and . Therefore . Since and both of these sets have cardinality it must be the case that . Since and are both cyclic groups of order they are isomorphic. Thus   "
},
{
  "id": "exe-no-group-cancellation-in-products",
  "level": "2",
  "url": "sec-dps.html#exe-no-group-cancellation-in-products",
  "type": "Exploration",
  "number": "7.8",
  "title": "No Cancellation in Products.",
  "body": "No Cancellation in Products  Find an example of groups such that there is an isomorphism but is not trivial. Note: since can be rewritten as , the above shows that in general one cannot cancel groups in isomorphisms between direct products.  "
},
{
  "id": "exe-trivially-intersecting-normal-subgroups",
  "level": "2",
  "url": "sec-dps.html#exe-trivially-intersecting-normal-subgroups",
  "type": "Exploration",
  "number": "7.9",
  "title": "Trivially Intersecting Normal Subgroups.",
  "body": "Trivially Intersecting Normal Subgroups  Let and be normal subgroups of a group such that . Prove that for all .  "
},
{
  "id": "def-HK",
  "level": "2",
  "url": "sec-dps.html#def-HK",
  "type": "Definition",
  "number": "7.10",
  "title": "<span class=\"process-math\">\\(HK\\)<\/span>.",
  "body": "  Let and be subgroups of a group and define the set  I wish this had a name other than \"HK\"     "
},
{
  "id": "exploration-4",
  "level": "2",
  "url": "sec-dps.html#exploration-4",
  "type": "Discussion",
  "number": "7.1",
  "title": "",
  "body": " There has to be a better name for this, right? I can't think of one, but maybe you can. Discuss.  "
},
{
  "id": "hk-normal",
  "level": "2",
  "url": "sec-dps.html#hk-normal",
  "type": "Theorem",
  "number": "7.11",
  "title": "<span class=\"process-math\">\\(HK\\)<\/span> Subgroup Criteria.",
  "body": "Subgroup Criteria   Let be a group with subgroups . Recall the notation     if and only if .    If either one of or is a normal subgroup of , then and .      "
},
{
  "id": "thm-hk-order",
  "level": "2",
  "url": "sec-dps.html#thm-hk-order",
  "type": "Theorem",
  "number": "7.12",
  "title": "Order of <span class=\"process-math\">\\(HK\\)<\/span>.",
  "body": "Order of   For two finite subgroups , .   "
},
{
  "id": "thm-hn-normal",
  "level": "2",
  "url": "sec-dps.html#thm-hn-normal",
  "type": "Theorem",
  "number": "7.13",
  "title": "HK and Normality.",
  "body": "HK and Normality   Let be a group, and . Then    ,     , and     .      "
},
{
  "id": "warning-2",
  "level": "2",
  "url": "sec-dps.html#warning-2",
  "type": "Warning",
  "number": "7.14",
  "title": "",
  "body": " The identity does not mean that every pair of elements from and must commute.  "
},
{
  "id": "ex-hk-non-commuting-elements",
  "level": "2",
  "url": "sec-dps.html#ex-hk-non-commuting-elements",
  "type": "Example",
  "number": "7.15",
  "title": "<span class=\"process-math\">\\(HK=KH\\)<\/span> but not Abelian.",
  "body": "but not Abelian   In , let and . Then but and do not commute. The fact that can also be justified by observing that .   "
},
{
  "id": "thm-sit-group",
  "level": "2",
  "url": "sec-dps.html#thm-sit-group",
  "type": "Theorem",
  "number": "7.16",
  "title": "Second Isomorphism Theorem.",
  "body": "Second Isomorphism Theorem   Let be a group, and . Then there is an isomorphism given by     The first two assertions are left as exercises and since we have . Define a homomorphism by . This is a homomorphism since it is the composition  of homomorphisms. is onto since for all we have . The kernel of is . The result thus follows from the .   "
},
{
  "id": "thm-tit-group",
  "level": "2",
  "url": "sec-dps.html#thm-tit-group",
  "type": "Theorem",
  "number": "7.17",
  "title": "Third Isomorphism Theorem.",
  "body": "Third Isomorphism Theorem   Suppose is a group, , and . Then , and there is an isomorphism given by sending the coset of represented by to .    The first two assertions are immediate from the definitions.  The kernel of the canonical map contains and so by we get an induced homomorhism with . Moreover, we know Finally apply the to .   "
},
{
  "id": "exe-hk-sylow",
  "level": "2",
  "url": "sec-dps.html#exe-hk-sylow",
  "type": "Exploration",
  "number": "7.18",
  "title": "<span class=\"process-math\">\\(HK\\)<\/span> and Sylow Subgroups.",
  "body": "and Sylow Subgroups  Let be a finite group and a normal subgroup of . Let be a Sylow -subgroup of (for some prime dividing the order of ). Prove that .   Let . Then is a Sylow -subgroup of and hence conjugate in to .   As in the hint, for , we have for some . Thus, , which means . Hence, .  "
},
{
  "id": "thm-dp-recognition",
  "level": "2",
  "url": "sec-dps.html#thm-dp-recognition",
  "type": "Theorem",
  "number": "7.19",
  "title": "Recognition Theorem for Direct Products.",
  "body": "Recognition Theorem for Direct Products   Suppose is a group with normal subgroups and such that . Then the following hold:    via the isomorphism of groups defined by .          .       Notice that the hypothesis implies . Furthermore and imply that the elements of commute with the elements of . Indeed, consider . Then since , , so also . Similarly it follows that , but since it follows that , i.e. for any .  Using the above we have and thus is a homomorphism. It's kernel is , which is just since . The image of is clearly . This proves is an isomorphism.   "
},
{
  "id": "def-int-ext-dp",
  "level": "2",
  "url": "sec-dps.html#def-int-ext-dp",
  "type": "Definition",
  "number": "7.20",
  "title": "Internal and External Direct Product.",
  "body": "Internal and External Direct Product   If and are such that then we call is called the internal direct product of and and the external direct product of and . internal direct product  external direct product    "
},
{
  "id": "sec-spds",
  "level": "1",
  "url": "sec-spds.html",
  "type": "Section",
  "number": "7.2",
  "title": "Semidirect Products",
  "body": "Semidirect Products  External Semidirect Products    Don't give up and always keep on believing in your product.   Niels van Deuren   We now discuss an important generalization for the direct product and a new method of constructing a new groups from the action of one group on another.  Suppose is a group with subgroups and such that . Then we still have ; let's see what we would need the multiplication on the cartesian product to be in order for defined by to still be a group homomorphism: where is such that .  This means that we would need to have for to be a homomorphism. This motivates the following definition.  External Semidirect Products   Let and be groups and let be a homomorphism. The (external) semidirect product induced by is the set with the binary operation defined by This group is denoted by . Semidirect product  semidirect product  external semidirect product       Decide amongst yourselves whether it should be spelled \"semidirect\", \"semi-direct\", \"semi direct\".    Before we prove that the construction above actually gives a group, let's compute a few examples.  Semidirect, Sans the Semi  Given and we could always take to be the trivial homomorphism, so that for all and . Then is just the usual direct product:     Fix a group , a normal subgroup and a subgroup . Then the function given by for is a homomorphism. Thus acts on via automorphisms.    Let be cyclic of order and be cyclic of order for any . There is an automorphism of that sends to . This automorphism is its own inverse; i.e., it has order . Therefore, by , there is a group homomorphism with . We may thus form the group The elements of are for and , in particular . Set Then  and Looks familar!  Indeed, by the universal mapping property for we have a homomorphism such that and . Moreover, is onto since and since it follows that is a bijection. So the dihedral group is a semidirect product, in which the two component groups are cyclic of orders and respectively: and is the inversion homomorphism as described above.   Semidirect Products are Groups   If and are groups and is a homomorphism, then setting:      is a group     and      .          The proof is straightforward but a bit messy. For associativity, note that On the other hand This gives associativity.  The fact that is a two-sided identity follows from the fact that .  Finally and similarly     Define a funtion as . Then is a homomorphism, since The map is clearly injective and hence its image is isomorphic to . In fact, the image is normal since the second component of is clearly . Let us write this image as   The function defined by is also an injective homomorphism and thus its image is isomorphic to . is typically not normal, however. Finally, it is easy to see that and . Putting this all together we have    ,     ,     , and     .       Consider the projection onto the second factor given by . This is a goup homomorphism since the second component of is and is surjective by definition. Now By the we conclude that .        Internal Semidirect Products    I've often said there's nothing better for the inside of a man than the outside of a horse.   Ronald Reagan   We can turn this around. the semidirect product, not the Reagan quote.   Recognition Theorem for Internal Semidirect Products   For a group , suppose we are given and so that    ,     ,     , and     .     Let be the permutation representation of the action of on via automorphisms given by in . (This means that for any  , where is the function for all .) Then the function defined by is an isomorphism of groups. Moreover, under this isomorphism, corresponds to and corresponds to (referring to the notation in above).    We have and thus is a homomorphism. It's kernel is , which is just since . The image of is clearly . This proves is an isomorphism. It is obvious that and .    Internal Semidirect Product   In this situation of the , we will say that is the internal semi-direct product of and . internal semidirect product      Returning to , let and . Then , , and . So, is isomorphic to a semi-direct product, as we already showed.    Let , and . Then , , and . It follows that where is cyclic of order and the action sends to conjugation by .   It is important to be aware that for a fixed pair of groups and , different actions of on via automorphisms can result in isomorphic semi-direct products. Indeed, determining when is in general a tricky business. The previous example shows this.   Let and again, but this time take (assuming ). Then we get where is cyclic of order and the action sends to conjugation by .  The actions and are not identical. For example, assuming we have and Yet since each is isomorphic to .  On HW 8 you will give a more conceptual reason for why these two semidirect products turned out to be isomorphic: it is because and are conjugate in . More generally, below is a criterion for a two semidirect products to be isomorphic.   Isomorphisms of Semidirect Products   Let be a finite cyclic group and let be an arbitrary group. Suppose that the images of and are conjugate subgroups of . Then .     "
},
{
  "id": "def-sdp-external",
  "level": "2",
  "url": "sec-spds.html#def-sdp-external",
  "type": "Definition",
  "number": "7.21",
  "title": "External Semidirect Products.",
  "body": "External Semidirect Products   Let and be groups and let be a homomorphism. The (external) semidirect product induced by is the set with the binary operation defined by This group is denoted by . Semidirect product  semidirect product  external semidirect product    "
},
{
  "id": "exploration-5",
  "level": "2",
  "url": "sec-spds.html#exploration-5",
  "type": "Discussion",
  "number": "7.2",
  "title": "",
  "body": "  Decide amongst yourselves whether it should be spelled \"semidirect\", \"semi-direct\", \"semi direct\".   "
},
{
  "id": "def-trivial-sdp",
  "level": "2",
  "url": "sec-spds.html#def-trivial-sdp",
  "type": "Example",
  "number": "7.22",
  "title": "Semidirect, Sans the Semi.",
  "body": "Semidirect, Sans the Semi  Given and we could always take to be the trivial homomorphism, so that for all and . Then is just the usual direct product:   "
},
{
  "id": "example-41",
  "level": "2",
  "url": "sec-spds.html#example-41",
  "type": "Example",
  "number": "7.23",
  "title": ".",
  "body": " Fix a group , a normal subgroup and a subgroup . Then the function given by for is a homomorphism. Thus acts on via automorphisms.  "
},
{
  "id": "example-42",
  "level": "2",
  "url": "sec-spds.html#example-42",
  "type": "Example",
  "number": "7.24",
  "title": ".",
  "body": " Let be cyclic of order and be cyclic of order for any . There is an automorphism of that sends to . This automorphism is its own inverse; i.e., it has order . Therefore, by , there is a group homomorphism with . We may thus form the group The elements of are for and , in particular . Set Then  and Looks familar!  Indeed, by the universal mapping property for we have a homomorphism such that and . Moreover, is onto since and since it follows that is a bijection. So the dihedral group is a semidirect product, in which the two component groups are cyclic of orders and respectively: and is the inversion homomorphism as described above.  "
},
{
  "id": "thm-sdp",
  "level": "2",
  "url": "sec-spds.html#thm-sdp",
  "type": "Theorem",
  "number": "7.25",
  "title": "Semidirect Products are Groups.",
  "body": "Semidirect Products are Groups   If and are groups and is a homomorphism, then setting:      is a group     and      .          The proof is straightforward but a bit messy. For associativity, note that On the other hand This gives associativity.  The fact that is a two-sided identity follows from the fact that .  Finally and similarly     Define a funtion as . Then is a homomorphism, since The map is clearly injective and hence its image is isomorphic to . In fact, the image is normal since the second component of is clearly . Let us write this image as   The function defined by is also an injective homomorphism and thus its image is isomorphic to . is typically not normal, however. Finally, it is easy to see that and . Putting this all together we have    ,     ,     , and     .       Consider the projection onto the second factor given by . This is a goup homomorphism since the second component of is and is surjective by definition. Now By the we conclude that .      "
},
{
  "id": "thm-sdp-recognition",
  "level": "2",
  "url": "sec-spds.html#thm-sdp-recognition",
  "type": "Theorem",
  "number": "7.26",
  "title": "Recognition Theorem for Internal Semidirect Products.",
  "body": "Recognition Theorem for Internal Semidirect Products   For a group , suppose we are given and so that    ,     ,     , and     .     Let be the permutation representation of the action of on via automorphisms given by in . (This means that for any  , where is the function for all .) Then the function defined by is an isomorphism of groups. Moreover, under this isomorphism, corresponds to and corresponds to (referring to the notation in above).    We have and thus is a homomorphism. It's kernel is , which is just since . The image of is clearly . This proves is an isomorphism. It is obvious that and .   "
},
{
  "id": "def-spd-internal",
  "level": "2",
  "url": "sec-spds.html#def-spd-internal",
  "type": "Definition",
  "number": "7.27",
  "title": "Internal Semidirect Product.",
  "body": "Internal Semidirect Product   In this situation of the , we will say that is the internal semi-direct product of and . internal semidirect product    "
},
{
  "id": "example-43",
  "level": "2",
  "url": "sec-spds.html#example-43",
  "type": "Example",
  "number": "7.28",
  "title": ".",
  "body": " Returning to , let and . Then , , and . So, is isomorphic to a semi-direct product, as we already showed.  "
},
{
  "id": "example-44",
  "level": "2",
  "url": "sec-spds.html#example-44",
  "type": "Example",
  "number": "7.29",
  "title": ".",
  "body": " Let , and . Then , , and . It follows that where is cyclic of order and the action sends to conjugation by .  "
},
{
  "id": "example-45",
  "level": "2",
  "url": "sec-spds.html#example-45",
  "type": "Example",
  "number": "7.30",
  "title": ".",
  "body": " Let and again, but this time take (assuming ). Then we get where is cyclic of order and the action sends to conjugation by .  The actions and are not identical. For example, assuming we have and Yet since each is isomorphic to .  On HW 8 you will give a more conceptual reason for why these two semidirect products turned out to be isomorphic: it is because and are conjugate in . More generally, below is a criterion for a two semidirect products to be isomorphic.  "
},
{
  "id": "thm-conjugate-aut",
  "level": "2",
  "url": "sec-spds.html#thm-conjugate-aut",
  "type": "Theorem",
  "number": "7.31",
  "title": "Isomorphisms of Semidirect Products.",
  "body": "Isomorphisms of Semidirect Products   Let be a finite cyclic group and let be an arbitrary group. Suppose that the images of and are conjugate subgroups of . Then .   "
},
{
  "id": "sec-ftfgag",
  "level": "1",
  "url": "sec-ftfgag.html",
  "type": "Section",
  "number": "8.1",
  "title": "Finitely Generated Abelian Groups",
  "body": "Finitely Generated Abelian Groups    The classification of the constituents of a chaos, nothing less is here essayed.   Herman Melville   Cyclic Groups of Relatively Prime Order   Prove that if are positive integers such that then there is a group isomorphism .    Sunzi's Remainder Theorem   Suppose for distinct primes . Then there is an isomorphism given by where denote the class of an integer in . Sunzi's Remainder Theorem for groups     Using , we let be the unique homomorhism that sends to . Then Clearly and so . Conversely, if , then for all and since are pairwise relatively prime, it follows that . This proves . The claim follows by the .     This theorem frequently goes by the name of The Chinese Remainder Theorem, but it has been remarked that this is somewhat like referencing the Pythagorean Theorem as The Greek Triangle Theorem or Fermat's Little Theorem as The French Power Postulate. In the interest of giving credit where credit is due, we include it here with the name of the 3rd-century Chinese mathematician, Sunzi, to whom the result is often attributed. Chinese Remainder Theorem    In this section we see that we can classify finitely generated abelian groups into isomorphism classes.  Finitely Generated Group   A group is finitely generated provided that , where is a finite set. finitely generated group      Any finite group is finitely generated (take ), but a finitely generated group need not be finite.   The following is the classification theorem for finitely generated abelian groups. We present it without proving it for now. The full proof will be given in the spring semester.  Fundamental Theorem of Finitely Generated Abelian Groups (FTFGAG)   Let be a finitely generated abelian group. Then is a direct product of cyclic groups. More precisely     There exist , prime integers and positive integers such that: where for all .    For each index , there is a partition with each , such that , thus overall we have     The 's, 's and 's are uniquely determined by .    equivalently, there exist , and for all , satisfying for all so that .    The integers are uniquely determined by .       It suffices prove that for a given group , we can recover its invariant factor form from its elementary divisor form, and vice versa. We will be a bit hand-wavey for this following the ideas from the above examples. by applying we have where is the product of the elementary divisors of highest power for each distinct prime in the list , is the product of the next highest possible prime powers, and so on. We will have that and in general that since by definition the exponent of is greater or equal to the exponent of .  Conversely, given with , we may apply to each to find its elementary divisor form.     For we have , .   Rank, Invariant Factors, Elementary Divisors   In , the number is the rank of , the are the elementary divisors of , and the decomposition of in parts (1-2) is called the elementary divisor decomposition of . The decomposition in part (1) is also called a primary decomposition .  In , the number is the rank of , the numbers are the invariant factors of , and the decomposition of in part (1) is the invariant factor decomposition of .     Say I tell you  gives and so that Since , this is in invariant factor form, and hence the rank of is and the invariant factors of are and .    Suppose now I tell you Then by  given the elementary divisor form.   The makes classification of finite abelian groups a very quick matter.  Abelian Groups of Order  We classify the abelian groups of order up to isomorphism.  Let be an abelian group of order . Since is finite the rank of is . Let's determine the possible elementary divisors so that The above equation gives and the possibilities for factoring as a product of prime powers are or which gives   Note that the two groups above are not isomorphic. To see this, note that there is an element of order in , namely whereas every element has order since and .  Alternatively we could argue that the uniqueness of the tells us that uniquely determines the elementary divisors, so two groups with distinct elementary divisors cannot be isomorphic.   "
},
{
  "id": "lem-cyclic-relprime",
  "level": "2",
  "url": "sec-ftfgag.html#lem-cyclic-relprime",
  "type": "Lemma",
  "number": "8.1",
  "title": "Cyclic Groups of Relatively Prime Order.",
  "body": "Cyclic Groups of Relatively Prime Order   Prove that if are positive integers such that then there is a group isomorphism .   "
},
{
  "id": "thm-sunzi",
  "level": "2",
  "url": "sec-ftfgag.html#thm-sunzi",
  "type": "Theorem",
  "number": "8.2",
  "title": "Sunzi's Remainder Theorem.",
  "body": "Sunzi's Remainder Theorem   Suppose for distinct primes . Then there is an isomorphism given by where denote the class of an integer in . Sunzi's Remainder Theorem for groups     Using , we let be the unique homomorhism that sends to . Then Clearly and so . Conversely, if , then for all and since are pairwise relatively prime, it follows that . This proves . The claim follows by the .   "
},
{
  "id": "remark-30",
  "level": "2",
  "url": "sec-ftfgag.html#remark-30",
  "type": "Remark",
  "number": "8.3",
  "title": "",
  "body": " This theorem frequently goes by the name of The Chinese Remainder Theorem, but it has been remarked that this is somewhat like referencing the Pythagorean Theorem as The Greek Triangle Theorem or Fermat's Little Theorem as The French Power Postulate. In the interest of giving credit where credit is due, we include it here with the name of the 3rd-century Chinese mathematician, Sunzi, to whom the result is often attributed. Chinese Remainder Theorem   "
},
{
  "id": "def-fg-group",
  "level": "2",
  "url": "sec-ftfgag.html#def-fg-group",
  "type": "Definition",
  "number": "8.4",
  "title": "Finitely Generated Group.",
  "body": "Finitely Generated Group   A group is finitely generated provided that , where is a finite set. finitely generated group    "
},
{
  "id": "remark-31",
  "level": "2",
  "url": "sec-ftfgag.html#remark-31",
  "type": "Remark",
  "number": "8.5",
  "title": "",
  "body": " Any finite group is finitely generated (take ), but a finitely generated group need not be finite.  "
},
{
  "id": "thm-ftfgag",
  "level": "2",
  "url": "sec-ftfgag.html#thm-ftfgag",
  "type": "Theorem",
  "number": "8.6",
  "title": "Fundamental Theorem of Finitely Generated Abelian Groups (FTFGAG).",
  "body": "Fundamental Theorem of Finitely Generated Abelian Groups (FTFGAG)   Let be a finitely generated abelian group. Then is a direct product of cyclic groups. More precisely     There exist , prime integers and positive integers such that: where for all .    For each index , there is a partition with each , such that , thus overall we have     The 's, 's and 's are uniquely determined by .    equivalently, there exist , and for all , satisfying for all so that .    The integers are uniquely determined by .       It suffices prove that for a given group , we can recover its invariant factor form from its elementary divisor form, and vice versa. We will be a bit hand-wavey for this following the ideas from the above examples. by applying we have where is the product of the elementary divisors of highest power for each distinct prime in the list , is the product of the next highest possible prime powers, and so on. We will have that and in general that since by definition the exponent of is greater or equal to the exponent of .  Conversely, given with , we may apply to each to find its elementary divisor form.   "
},
{
  "id": "example-46",
  "level": "2",
  "url": "sec-ftfgag.html#example-46",
  "type": "Example",
  "number": "8.7",
  "title": ".",
  "body": " For we have , .  "
},
{
  "id": "def-eds-and-ifs",
  "level": "2",
  "url": "sec-ftfgag.html#def-eds-and-ifs",
  "type": "Definition",
  "number": "8.8",
  "title": "Rank, Invariant Factors, Elementary Divisors.",
  "body": "Rank, Invariant Factors, Elementary Divisors   In , the number is the rank of , the are the elementary divisors of , and the decomposition of in parts (1-2) is called the elementary divisor decomposition of . The decomposition in part (1) is also called a primary decomposition .  In , the number is the rank of , the numbers are the invariant factors of , and the decomposition of in part (1) is the invariant factor decomposition of .   "
},
{
  "id": "example-47",
  "level": "2",
  "url": "sec-ftfgag.html#example-47",
  "type": "Example",
  "number": "8.9",
  "title": ".",
  "body": " Say I tell you  gives and so that Since , this is in invariant factor form, and hence the rank of is and the invariant factors of are and .  "
},
{
  "id": "example-48",
  "level": "2",
  "url": "sec-ftfgag.html#example-48",
  "type": "Example",
  "number": "8.10",
  "title": ".",
  "body": " Suppose now I tell you Then by  given the elementary divisor form.  "
},
{
  "id": "example-49",
  "level": "2",
  "url": "sec-ftfgag.html#example-49",
  "type": "Example",
  "number": "8.11",
  "title": "Abelian Groups of Order <span class=\"process-math\">\\(75\\)<\/span>.",
  "body": "Abelian Groups of Order  We classify the abelian groups of order up to isomorphism.  Let be an abelian group of order . Since is finite the rank of is . Let's determine the possible elementary divisors so that The above equation gives and the possibilities for factoring as a product of prime powers are or which gives   Note that the two groups above are not isomorphic. To see this, note that there is an element of order in , namely whereas every element has order since and .  Alternatively we could argue that the uniqueness of the tells us that uniquely determines the elementary divisors, so two groups with distinct elementary divisors cannot be isomorphic.  "
},
{
  "id": "sec-classifications",
  "level": "1",
  "url": "sec-classifications.html",
  "type": "Section",
  "number": "8.2",
  "title": "Groups of Specific Order",
  "body": "Groups of Specific Order  Groups of Order    I did not know I was in my prime until afterwards.   Mason Cooley   Groups of Order   Any group of order is isomorphic either to or to .    Let be a group of order . gives that there exist elements with and . Let and . Since , is a normal subgroup of and since is a common subgroup of and  gives that . Thus and since we deduce that . now gives that is the internal semidirect product of and . More to the point, , where gives the action of on by .  We now analyze the possibilities for . By , . There are two possibilities for the image of : either or .  If , then (which implies ) and . Therefore, in this case , where the last isomorphism uses the .  If , then is the map and by an earlier example for this we have , so .  Finally, because the former is abelian and the latter is not.    Let's repeat the previous example for classifying groups of order with distinct primes into isomorphism classes.  Classification for Groups of Order   Let be primes.     If there is a unique group of order up to isomorphism, namely .    If there are exactly two groups of order up to isomorphism, namely and a non-abelian group.       Let be a group of order and let be Sylow subgroups of order and respectively. We see that is a normal subgroup using a HW problem, since is the smallest prime that divides .  Furthermore, since is a subgroup of both and we have by that , so that . From here it follows that and so . now yields that for some homomorphism , equivalently . By to give such a homomorphism is equivalent to giving an element so that , which will give for . Thus yielding that either or .   Case 1: if then is the trivial homomorphism and thus .   Case 2: if then it must be the case by Lagrange that . By we know that is a cyclic group. Therefore we have that if and only if there exists an element of order by (2). Moreover any such element generates a subgroup of of order . Since there is a unique subgroup of a cyclic group of a given order by Theorem (2) we see that the image of is independent of the choice of . Thus by we conclude that all subgroups resulting from any choice of of order are isomorphic.  Moreover, from the explicit presentation of semidirect products of cyclic groups given in a homework problem we see that the resulting group is non-abelian; in particular it is not isomorphic to .     Groups of Small Order    To be beyond any existing classification has always pleased me.   Boyd Rice   Groups of Order   Let's classify all groups of order .    Right off the bat we see that there are at least four: No two of these are isomorphic, as can be seen by looking at the sizes of their centers. The first is abelian, and we have , and .  Let's show this list is complete. If is a group of order , then , , . The usual counting argument shows that and cannot both occur. So, letting and , since at least one is normal, we have that is a subgroup of of order . Since it has index two, . Moreover, since , by Sylow Theory, has normal subgroups of order and , from which it follows that . Let be a Sylow -subgroup. Then for some homomorphism where   SInce , each non-trivial map is given by an element of order in . Now , but this is not enough information to figure out how many elements have order . We need to find up to isomorphism.  There is an evident homomorphism given by sending to the function . It's easy to see is one-to-one and hence bijective by the pigeon-hole principle. It follows that In particuar, has exactly elements of order two, corresponding to in . (One could also use that and then hunt around for elements of order .) This gives exactly four choices for , including the trivial map, and hence there are at most four groups of order .    Groups of Order   Let's classify all groups of order .    As we will show below, every such group is a semi-direct product. Let's start by building all the groups we can as semi-direct products. As a matter of noation, let's write for a cyclic group of order . Let's consider the four possibilities:      ,     ,     ,     .     In case (1), since , we have only the abelian group .  In case (2), and so there is a unique subgroup of order . This leads to three possibities for , including the trivial one. The two non-trivial maps have conjugate (in fact, equal) images. By the homework problem, we get just two possible groups: one is the abelian group and the other is non-abelian.  In case (3), and so there are two possibilities for including the trivial map. These leads to and a non-abelian group.  Case (4) is more complicated. We have is itself cyclic of order . Switching to additive notation, the map is given as a map of elementary abelian -groups. Thus, may be represented by a matrix with entries in ; there are such maps. But, using linear algebra, if are any two non-trivial maps of this form, then there is an automorhism of such that . Using the Lemma below, this proves that for any two non-trivial map. Thus, in case (4) we again get just two groups up to isomorphism: the abelian group and a non-abelian one.  We must now beware to toss out reptitions: we've counted each abelian group twice. So, in total we've found at most five groups of order :      ,     ,     ,     ,     ,     where each of is non-trivial.  To see that no two of these are isomorphic, note that (a) and (b) are abelian and (c), (d), and (e) are not. Every Sylow -subgroup of (d) is whereas the Sylow -subgroups for (c) and (e) are . Finally, (c) and (e) are not isomorphic since the former has a normal Sylow -subgroup and the latter does not.  Finally, we need to prove we've found all groups of order . If , then and . and cannot both occur since that would lead to at least elements. This gives the existence of and with either or . The usual reasoning gives and , so that for some .     "
},
{
  "id": "thm-groups-of-order-6",
  "level": "2",
  "url": "sec-classifications.html#thm-groups-of-order-6",
  "type": "Theorem",
  "number": "8.12",
  "title": "Groups of Order <span class=\"process-math\">\\(6\\)<\/span>.",
  "body": "Groups of Order   Any group of order is isomorphic either to or to .    Let be a group of order . gives that there exist elements with and . Let and . Since , is a normal subgroup of and since is a common subgroup of and  gives that . Thus and since we deduce that . now gives that is the internal semidirect product of and . More to the point, , where gives the action of on by .  We now analyze the possibilities for . By , . There are two possibilities for the image of : either or .  If , then (which implies ) and . Therefore, in this case , where the last isomorphism uses the .  If , then is the map and by an earlier example for this we have , so .  Finally, because the former is abelian and the latter is not.   "
},
{
  "id": "thm-order-pq",
  "level": "2",
  "url": "sec-classifications.html#thm-order-pq",
  "type": "Theorem",
  "number": "8.13",
  "title": "Classification for Groups of Order <span class=\"process-math\">\\(pq\\)<\/span>.",
  "body": "Classification for Groups of Order   Let be primes.     If there is a unique group of order up to isomorphism, namely .    If there are exactly two groups of order up to isomorphism, namely and a non-abelian group.       Let be a group of order and let be Sylow subgroups of order and respectively. We see that is a normal subgroup using a HW problem, since is the smallest prime that divides .  Furthermore, since is a subgroup of both and we have by that , so that . From here it follows that and so . now yields that for some homomorphism , equivalently . By to give such a homomorphism is equivalent to giving an element so that , which will give for . Thus yielding that either or .   Case 1: if then is the trivial homomorphism and thus .   Case 2: if then it must be the case by Lagrange that . By we know that is a cyclic group. Therefore we have that if and only if there exists an element of order by (2). Moreover any such element generates a subgroup of of order . Since there is a unique subgroup of a cyclic group of a given order by Theorem (2) we see that the image of is independent of the choice of . Thus by we conclude that all subgroups resulting from any choice of of order are isomorphic.  Moreover, from the explicit presentation of semidirect products of cyclic groups given in a homework problem we see that the resulting group is non-abelian; in particular it is not isomorphic to .   "
},
{
  "id": "ex-order-30",
  "level": "2",
  "url": "sec-classifications.html#ex-order-30",
  "type": "Example",
  "number": "8.14",
  "title": "Groups of Order <span class=\"process-math\">\\(30\\)<\/span>.",
  "body": "Groups of Order   Let's classify all groups of order .    Right off the bat we see that there are at least four: No two of these are isomorphic, as can be seen by looking at the sizes of their centers. The first is abelian, and we have , and .  Let's show this list is complete. If is a group of order , then , , . The usual counting argument shows that and cannot both occur. So, letting and , since at least one is normal, we have that is a subgroup of of order . Since it has index two, . Moreover, since , by Sylow Theory, has normal subgroups of order and , from which it follows that . Let be a Sylow -subgroup. Then for some homomorphism where   SInce , each non-trivial map is given by an element of order in . Now , but this is not enough information to figure out how many elements have order . We need to find up to isomorphism.  There is an evident homomorphism given by sending to the function . It's easy to see is one-to-one and hence bijective by the pigeon-hole principle. It follows that In particuar, has exactly elements of order two, corresponding to in . (One could also use that and then hunt around for elements of order .) This gives exactly four choices for , including the trivial map, and hence there are at most four groups of order .   "
},
{
  "id": "ex-order-12",
  "level": "2",
  "url": "sec-classifications.html#ex-order-12",
  "type": "Example",
  "number": "8.15",
  "title": "Groups of Order <span class=\"process-math\">\\(12\\)<\/span>.",
  "body": "Groups of Order   Let's classify all groups of order .    As we will show below, every such group is a semi-direct product. Let's start by building all the groups we can as semi-direct products. As a matter of noation, let's write for a cyclic group of order . Let's consider the four possibilities:      ,     ,     ,     .     In case (1), since , we have only the abelian group .  In case (2), and so there is a unique subgroup of order . This leads to three possibities for , including the trivial one. The two non-trivial maps have conjugate (in fact, equal) images. By the homework problem, we get just two possible groups: one is the abelian group and the other is non-abelian.  In case (3), and so there are two possibilities for including the trivial map. These leads to and a non-abelian group.  Case (4) is more complicated. We have is itself cyclic of order . Switching to additive notation, the map is given as a map of elementary abelian -groups. Thus, may be represented by a matrix with entries in ; there are such maps. But, using linear algebra, if are any two non-trivial maps of this form, then there is an automorhism of such that . Using the Lemma below, this proves that for any two non-trivial map. Thus, in case (4) we again get just two groups up to isomorphism: the abelian group and a non-abelian one.  We must now beware to toss out reptitions: we've counted each abelian group twice. So, in total we've found at most five groups of order :      ,     ,     ,     ,     ,     where each of is non-trivial.  To see that no two of these are isomorphic, note that (a) and (b) are abelian and (c), (d), and (e) are not. Every Sylow -subgroup of (d) is whereas the Sylow -subgroups for (c) and (e) are . Finally, (c) and (e) are not isomorphic since the former has a normal Sylow -subgroup and the latter does not.  Finally, we need to prove we've found all groups of order . If , then and . and cannot both occur since that would lead to at least elements. This gives the existence of and with either or . The usual reasoning gives and , so that for some .   "
},
{
  "id": "sec-defn-ex",
  "level": "1",
  "url": "sec-defn-ex.html",
  "type": "Section",
  "number": "9.1",
  "title": "Ring Basics",
  "body": "Ring Basics  From Rings to Fields    I made a lot of mistakes out of the ring, but I never made any in it.   Jack Johnson   Ring   A ring is a set equipped with two binary operations, and , satisfying:      is an abelian group with identity element denoted ,   Associative Multiplication   is associative (making a )   Distributive Law   and hold for all .       Here are some basic consequences of the axioms.  Ring Arithmetic   For any ring and all we have:      ,     ,     .       Let be a ring with identity.   Let . Observe that by the distributive law. Subtracting from both sides we have . A similar argument shows that .    Let . Note that . Consider . Using the distributive law we see that . Thus and are both additive inverses of making them unique.       Unital Ring   A ring is a unital ring (or a ring with identity ) if there is a multiplicative identity element, written as , such that for all .     Around these parts most of us generally include in our definition of a ring, referring to a ring without an identity as a rng  Get it? . However, we'll stick with the more classical definition for now.   Some additional consequences.  Unital Ring Arithmetic   For a unital ring and all we have:      is unique, and     .       We can go deeper.  Division Ring   A unital ring is a division ring if and is a group under (i.e. every has a multiplicative inverse)    We can go deeper .  Commutative Ring   A ring is commutative if holds for all .     One could argue that commutative rings should really be called abelian rings to remain consistent with abelian groups. Discuss.   We can go deeper .  Field   A ring is a field if it is a commutative division ring.    Phew. That was pretty deep. Let's take a breather and see some examples.  Relevant Rings    Trivial Ring   is called the trivial ring , or zero ring . Personally, I am in favor of calling this the bor-ring .      is a commutative ring.     is a commutative ring under addition and multiplication modulo .    The familiar sets are fields.   Gaussian Integers  The set is a commutative ring known as the Gaussian integers .   Matrix Ring  If is any ring (not necessarily commutative), so is for any natural number , using the usual rules for addition and multiplication of square matrices.   Direct Product of Rings  The cartesian product of two rings and has a natural ring structure with addition and multiplication defined componentwise:         Let be a ring. Prove that if and only if .   Notice that in the trivial ring . Conversely, if in a ring, then , since in this case for all , we have and hence .   Direct Product Preservations Let and be rings. The Cartesian product is commutative if and only if and are commutative. Similarly, has identity if and only if both and do as well.  Less Relevant Rings    Opposite Day  Given a ring , let denote the “opposite ring''. This is the same underlying set as equipped with the same rule for as , but with multiplication rule (which I will write here as ) redefined to be (where refers to the original multiplication rule for ). Then is also a ring   The Real Hamiltonian Quaternion Ring  Let be formal symbols and set to be the four dimensional -vector space consisting of all expressions of the form with . Addition is vector space addition: Multiplication is uniquely determined by the axioms of a ring together with the rules and the fact that the real coefficients commute with each other and .  It's not obvious that the multiplication defined in this way satisfies associativity, but in fact it does (this amounts conditions very similar to the associativity of the group ).   is a division ring, since one can check that where   In the equation above is non-zero real number if is not the zero element. The quantity is called the norm of the quaternion .   Function Ring  If is a set and is a ring, let be the collection of set theoretic functions from to , and define and . Then is a ring. If is a finite set and , then may be identified with , the direct product of copies of .    Endomorphism Ring  If is any abelian group, set to be the collection of endomorphisms of — that is, the set of group homomorphisms from to itself.  Then is a ring with addition and multiplication . This is almost always a non-commutative ring.      Here is a nice generalization that will prove usful quite a few times down the road.  Binomial Theorem for Commutative Rings   For any commutative ring and any elements and in , we have: where is the binomial coefficient, defined as: with integers and such that .     "
},
{
  "id": "def-ring",
  "level": "2",
  "url": "sec-defn-ex.html#def-ring",
  "type": "Definition",
  "number": "9.1",
  "title": "Ring.",
  "body": "Ring   A ring is a set equipped with two binary operations, and , satisfying:      is an abelian group with identity element denoted ,   Associative Multiplication   is associative (making a )   Distributive Law   and hold for all .      "
},
{
  "id": "prop-ring-arithmetic",
  "level": "2",
  "url": "sec-defn-ex.html#prop-ring-arithmetic",
  "type": "Proposition",
  "number": "9.2",
  "title": "Ring Arithmetic.",
  "body": "Ring Arithmetic   For any ring and all we have:      ,     ,     .       Let be a ring with identity.   Let . Observe that by the distributive law. Subtracting from both sides we have . A similar argument shows that .    Let . Note that . Consider . Using the distributive law we see that . Thus and are both additive inverses of making them unique.      "
},
{
  "id": "def-unital-ring",
  "level": "2",
  "url": "sec-defn-ex.html#def-unital-ring",
  "type": "Definition",
  "number": "9.3",
  "title": "Unital Ring.",
  "body": "Unital Ring   A ring is a unital ring (or a ring with identity ) if there is a multiplicative identity element, written as , such that for all .   "
},
{
  "id": "remark-32",
  "level": "2",
  "url": "sec-defn-ex.html#remark-32",
  "type": "Remark",
  "number": "9.4",
  "title": "",
  "body": " Around these parts most of us generally include in our definition of a ring, referring to a ring without an identity as a rng  Get it? . However, we'll stick with the more classical definition for now.  "
},
{
  "id": "prop-unital-ring-arithmetic",
  "level": "2",
  "url": "sec-defn-ex.html#prop-unital-ring-arithmetic",
  "type": "Proposition",
  "number": "9.5",
  "title": "Unital Ring Arithmetic.",
  "body": "Unital Ring Arithmetic   For a unital ring and all we have:      is unique, and     .      "
},
{
  "id": "def-division-ring",
  "level": "2",
  "url": "sec-defn-ex.html#def-division-ring",
  "type": "Definition",
  "number": "9.6",
  "title": "Division Ring.",
  "body": "Division Ring   A unital ring is a division ring if and is a group under (i.e. every has a multiplicative inverse)   "
},
{
  "id": "def-commutative-ring",
  "level": "2",
  "url": "sec-defn-ex.html#def-commutative-ring",
  "type": "Definition",
  "number": "9.7",
  "title": "Commutative Ring.",
  "body": "Commutative Ring   A ring is commutative if holds for all .   "
},
{
  "id": "exploration-6",
  "level": "2",
  "url": "sec-defn-ex.html#exploration-6",
  "type": "Discussion",
  "number": "9.1",
  "title": "",
  "body": " One could argue that commutative rings should really be called abelian rings to remain consistent with abelian groups. Discuss.  "
},
{
  "id": "def-field",
  "level": "2",
  "url": "sec-defn-ex.html#def-field",
  "type": "Definition",
  "number": "9.8",
  "title": "Field.",
  "body": "Field   A ring is a field if it is a commutative division ring.   "
},
{
  "id": "ex-ring-examples",
  "level": "2",
  "url": "sec-defn-ex.html#ex-ring-examples",
  "type": "Example",
  "number": "9.9",
  "title": "Relevant Rings.",
  "body": "Relevant Rings    Trivial Ring   is called the trivial ring , or zero ring . Personally, I am in favor of calling this the bor-ring .      is a commutative ring.     is a commutative ring under addition and multiplication modulo .    The familiar sets are fields.   Gaussian Integers  The set is a commutative ring known as the Gaussian integers .   Matrix Ring  If is any ring (not necessarily commutative), so is for any natural number , using the usual rules for addition and multiplication of square matrices.   Direct Product of Rings  The cartesian product of two rings and has a natural ring structure with addition and multiplication defined componentwise:       "
},
{
  "id": "exe-1-is-0",
  "level": "2",
  "url": "sec-defn-ex.html#exe-1-is-0",
  "type": "Exploration",
  "number": "9.10",
  "title": "<span class=\"process-math\">\\(1=0\\)<\/span>.",
  "body": " Let be a ring. Prove that if and only if .   Notice that in the trivial ring . Conversely, if in a ring, then , since in this case for all , we have and hence .  "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "sec-defn-ex.html#exercise-54",
  "type": "Exploration",
  "number": "9.11",
  "title": "Direct Product Preservations.",
  "body": "Direct Product Preservations Let and be rings. The Cartesian product is commutative if and only if and are commutative. Similarly, has identity if and only if both and do as well. "
},
{
  "id": "example-53",
  "level": "2",
  "url": "sec-defn-ex.html#example-53",
  "type": "Example",
  "number": "9.12",
  "title": "Less Relevant Rings.",
  "body": "Less Relevant Rings    Opposite Day  Given a ring , let denote the “opposite ring''. This is the same underlying set as equipped with the same rule for as , but with multiplication rule (which I will write here as ) redefined to be (where refers to the original multiplication rule for ). Then is also a ring   The Real Hamiltonian Quaternion Ring  Let be formal symbols and set to be the four dimensional -vector space consisting of all expressions of the form with . Addition is vector space addition: Multiplication is uniquely determined by the axioms of a ring together with the rules and the fact that the real coefficients commute with each other and .  It's not obvious that the multiplication defined in this way satisfies associativity, but in fact it does (this amounts conditions very similar to the associativity of the group ).   is a division ring, since one can check that where   In the equation above is non-zero real number if is not the zero element. The quantity is called the norm of the quaternion .   Function Ring  If is a set and is a ring, let be the collection of set theoretic functions from to , and define and . Then is a ring. If is a finite set and , then may be identified with , the direct product of copies of .    Endomorphism Ring  If is any abelian group, set to be the collection of endomorphisms of — that is, the set of group homomorphisms from to itself.  Then is a ring with addition and multiplication . This is almost always a non-commutative ring.     "
},
{
  "id": "thm-binomial-thm-rings",
  "level": "2",
  "url": "sec-defn-ex.html#thm-binomial-thm-rings",
  "type": "Theorem",
  "number": "9.13",
  "title": "Binomial Theorem for Commutative Rings.",
  "body": "Binomial Theorem for Commutative Rings   For any commutative ring and any elements and in , we have: where is the binomial coefficient, defined as: with integers and such that .   "
},
{
  "id": "sec-units-zerodivisors",
  "level": "1",
  "url": "sec-units-zerodivisors.html",
  "type": "Section",
  "number": "9.2",
  "title": "Units and Zerodivisors",
  "body": "Units and Zerodivisors  Absolute Units    There is more power in unity than division.   Emmanuel Cleaver   Unit   An element of a unital ring with is called a unit there exists such that and . If such a exists, it is unique, it is called the inverse of and denoted by .    Group of Units   The set of units of a non-trivial unital ring is denoted . This forms a group with respect to multiplication.    Finally, we have a formal definition for groups of units.  Sweet, Sweet Rigor The group of units is indeed a group with respect to multiplication.  Well, that was validating. Not as validating as it will be when we prove that matrix multiplication is associative, finally allowing us to complete the proof that is indeed a group. Soon... Months in the making. But enough vindication: we move forward. It's all we've ever known.  Units in Fields  Let be a field. Prove that every non-zero element of is a unit. In symbols, show .     is often the standard way of proving that something is a field.   If you'll remember all the way back to , you'll see that we verified for and . This also explains why and had a different structure: they weren't fields.  is a Field!  In we showed that . Thus is a field for all primes .   Matrices and Units For any field we have .   Units in matrix rings are called invertible matrices , but they aren't very useful and we'll probably never see them again. That was a joke. I'm very funny.    Gaussian Units  Let be the ring of Gaussian integers. Define a function    Prove that for any .    Use the function to determine the units of .         Let and behold So there's that done.    Suppose . Then by Part (1) we know so , with . Thus we have . So the units of are .       The function in is some incredibly spicy foreshadowing of something called a norm function, which we'll see more of in .    A Zero Divided Cannot Stand  The only way on Earth to multiply happiness is to divide it. Paul Scherrer  We might not be able to divide by zero, but sometimes we can get the next best thing.  Zerodivisor   A zerodivisor in a ring is an element such that or for some . We once again jump the gun on the lack-of-hyphenation situation. Language evolves at its own rate, but who has time for that?     However, as it turns out, most of the time we are trying to avoid the next best thing.  Integral Domain   A unital ring is an integral domain (often shortened to domain ) if , is commutative, and has no zerodivisors.    Note that by saying that is equivalent to saying that is nontrivial.  is an Integral Domain  The ring of integers is an integral domain. Find two nonzero integers that multiply to . I dare you. This is, in our humble opinion, how all conjectures should be proven moving forward.    Unlike in groups, which have a notion of , rings do not necessarily come equipped with this property. One of the main niceties of integral domains is that cancellation is indeed possible (and in many cases encouraged).  Cancellation in Domains   Let be a commutative ring with identity. Then is an integral domain if and only if for all such that , we have . This property is called cancellation .    This is sometimes taken to be the definition of an integral domain, but only by those that are aren't left handed. No one knows why; it just seemed right.  In an introductory high school or college algebra course this notion is known as the zero factor principle of the real numbers, which is what allowes us to solve for the -intercepts (or zeros) of a polynomial equation after factoring it.  Rather than jumping in and proving too many examples directly, let's be a little more efficient and discover a whole class of examples in one fell swoop. Well, actually two fell swoops, since we'll need a quick lemma first.  Zerodivisors and Units   If is a zerodivisor in a ring , then is not a unit.    Suppose that is both a zerodivisor and a unit. Then there exists such that or . Multiplying either of these equations by gives , a contradiction.    All right. Now it's one fell swoop.  Domains and Fields      Every field is an integral domain.    A finite integral domain must be a field.          Let be a field. By we know that every nonzero element of is a unit. Thus has no zerodivisors by .    Let , and consider the set . As is finite there must exist such that . Since is an integral domain allows us to cancel an from both sides, yielding , and thus , making a unit of . Thus is a field by .       Finite Zerdivisors and Units    Prove that if is finite then every element is either a unit or a zerodivisor.    Give an example of a ring and an element which is neither a unit nor a zerodivisor.     Nilpotent  An element of a ring is called nilpotent if for some integer .   Nilpotents and Units  If is a nilpotent element in a unital ring , then is a unit.   Let be a nilpotent element of a ring. Show that is a unit of Deduce that the sum of a nilpotent element and a unit is a unit.  Idempotent  Let be a ring with identity. An element is called idempotent if .   Potent Idempotents Let be a ring with identity.   Give an example of a ring which has an idempotent other than or .    Prove that if is idempotent, so is .    Suppose is commutative and an idempotent. Let . Prove that is a commutative ring (with identity ).     Integral Idempotents Prove that the only idempotents in an integral domain are and .    "
},
{
  "id": "def-unit",
  "level": "2",
  "url": "sec-units-zerodivisors.html#def-unit",
  "type": "Definition",
  "number": "9.14",
  "title": "Unit.",
  "body": "Unit   An element of a unital ring with is called a unit there exists such that and . If such a exists, it is unique, it is called the inverse of and denoted by .   "
},
{
  "id": "def-group-of-units",
  "level": "2",
  "url": "sec-units-zerodivisors.html#def-group-of-units",
  "type": "Definition",
  "number": "9.15",
  "title": "Group of Units.",
  "body": "Group of Units   The set of units of a non-trivial unital ring is denoted . This forms a group with respect to multiplication.   "
},
{
  "id": "exe-group-of-units-is-a-group",
  "level": "2",
  "url": "sec-units-zerodivisors.html#exe-group-of-units-is-a-group",
  "type": "Exploration",
  "number": "9.16",
  "title": "Sweet, Sweet Rigor.",
  "body": "Sweet, Sweet Rigor The group of units is indeed a group with respect to multiplication. "
},
{
  "id": "thm-units-in-fields",
  "level": "2",
  "url": "sec-units-zerodivisors.html#thm-units-in-fields",
  "type": "Theorem",
  "number": "9.17",
  "title": "Units in Fields.",
  "body": "Units in Fields  Let be a field. Prove that every non-zero element of is a unit. In symbols, show .  "
},
{
  "id": "remark-33",
  "level": "2",
  "url": "sec-units-zerodivisors.html#remark-33",
  "type": "Remark",
  "number": "9.18",
  "title": "",
  "body": "  is often the standard way of proving that something is a field.  "
},
{
  "id": "zp-field",
  "level": "2",
  "url": "sec-units-zerodivisors.html#zp-field",
  "type": "Example",
  "number": "9.19",
  "title": "<span class=\"process-math\">\\(\\Z\/p\\)<\/span> is a Field!",
  "body": "is a Field!  In we showed that . Thus is a field for all primes .  "
},
{
  "id": "exe-matrices-and-units",
  "level": "2",
  "url": "sec-units-zerodivisors.html#exe-matrices-and-units",
  "type": "Exploration",
  "number": "9.20",
  "title": "Matrices and Units.",
  "body": "Matrices and Units For any field we have . "
},
{
  "id": "remark-34",
  "level": "2",
  "url": "sec-units-zerodivisors.html#remark-34",
  "type": "Remark",
  "number": "9.21",
  "title": "",
  "body": " Units in matrix rings are called invertible matrices , but they aren't very useful and we'll probably never see them again. That was a joke. I'm very funny.   "
},
{
  "id": "exe-gaussian-units",
  "level": "2",
  "url": "sec-units-zerodivisors.html#exe-gaussian-units",
  "type": "Exploration",
  "number": "9.22",
  "title": "Gaussian Units.",
  "body": "Gaussian Units  Let be the ring of Gaussian integers. Define a function    Prove that for any .    Use the function to determine the units of .         Let and behold So there's that done.    Suppose . Then by Part (1) we know so , with . Thus we have . So the units of are .     "
},
{
  "id": "remark-35",
  "level": "2",
  "url": "sec-units-zerodivisors.html#remark-35",
  "type": "Remark",
  "number": "9.23",
  "title": "",
  "body": " The function in is some incredibly spicy foreshadowing of something called a norm function, which we'll see more of in .  "
},
{
  "id": "def-zerodivisor",
  "level": "2",
  "url": "sec-units-zerodivisors.html#def-zerodivisor",
  "type": "Definition",
  "number": "9.24",
  "title": "Zerodivisor.",
  "body": "Zerodivisor   A zerodivisor in a ring is an element such that or for some . We once again jump the gun on the lack-of-hyphenation situation. Language evolves at its own rate, but who has time for that?    "
},
{
  "id": "def-integral-domain",
  "level": "2",
  "url": "sec-units-zerodivisors.html#def-integral-domain",
  "type": "Definition",
  "number": "9.25",
  "title": "Integral Domain.",
  "body": "Integral Domain   A unital ring is an integral domain (often shortened to domain ) if , is commutative, and has no zerodivisors.   "
},
{
  "id": "remark-36",
  "level": "2",
  "url": "sec-units-zerodivisors.html#remark-36",
  "type": "Remark",
  "number": "9.26",
  "title": "",
  "body": "Note that by saying that is equivalent to saying that is nontrivial. "
},
{
  "id": "ex-z-integral-domain",
  "level": "2",
  "url": "sec-units-zerodivisors.html#ex-z-integral-domain",
  "type": "Example",
  "number": "9.27",
  "title": "<span class=\"process-math\">\\(\\Z\\)<\/span> is an Integral Domain.",
  "body": "is an Integral Domain  The ring of integers is an integral domain. Find two nonzero integers that multiply to . I dare you. This is, in our humble opinion, how all conjectures should be proven moving forward.   "
},
{
  "id": "lem-cancellation-in-integral-domains",
  "level": "2",
  "url": "sec-units-zerodivisors.html#lem-cancellation-in-integral-domains",
  "type": "Lemma",
  "number": "9.28",
  "title": "Cancellation in Domains.",
  "body": "Cancellation in Domains   Let be a commutative ring with identity. Then is an integral domain if and only if for all such that , we have . This property is called cancellation .   "
},
{
  "id": "remark-37",
  "level": "2",
  "url": "sec-units-zerodivisors.html#remark-37",
  "type": "Remark",
  "number": "9.29",
  "title": "",
  "body": "This is sometimes taken to be the definition of an integral domain, but only by those that are aren't left handed. No one knows why; it just seemed right. "
},
{
  "id": "remark-38",
  "level": "2",
  "url": "sec-units-zerodivisors.html#remark-38",
  "type": "Remark",
  "number": "9.30",
  "title": "",
  "body": "In an introductory high school or college algebra course this notion is known as the zero factor principle of the real numbers, which is what allowes us to solve for the -intercepts (or zeros) of a polynomial equation after factoring it. "
},
{
  "id": "lem-zerodivisor-not-unit",
  "level": "2",
  "url": "sec-units-zerodivisors.html#lem-zerodivisor-not-unit",
  "type": "Lemma",
  "number": "9.31",
  "title": "Zerodivisors and Units.",
  "body": "Zerodivisors and Units   If is a zerodivisor in a ring , then is not a unit.    Suppose that is both a zerodivisor and a unit. Then there exists such that or . Multiplying either of these equations by gives , a contradiction.   "
},
{
  "id": "integral-domains-and-fields",
  "level": "2",
  "url": "sec-units-zerodivisors.html#integral-domains-and-fields",
  "type": "Theorem",
  "number": "9.32",
  "title": "Domains and Fields.",
  "body": "Domains and Fields      Every field is an integral domain.    A finite integral domain must be a field.          Let be a field. By we know that every nonzero element of is a unit. Thus has no zerodivisors by .    Let , and consider the set . As is finite there must exist such that . Since is an integral domain allows us to cancel an from both sides, yielding , and thus , making a unit of . Thus is a field by .      "
},
{
  "id": "exe-neither-zerodivisor-nor-unit",
  "level": "2",
  "url": "sec-units-zerodivisors.html#exe-neither-zerodivisor-nor-unit",
  "type": "Exploration",
  "number": "9.33",
  "title": "Finite Zerdivisors and Units.",
  "body": "Finite Zerdivisors and Units    Prove that if is finite then every element is either a unit or a zerodivisor.    Give an example of a ring and an element which is neither a unit nor a zerodivisor.    "
},
{
  "id": "def-nilpotent",
  "level": "2",
  "url": "sec-units-zerodivisors.html#def-nilpotent",
  "type": "Definition",
  "number": "9.34",
  "title": "Nilpotent.",
  "body": "Nilpotent  An element of a ring is called nilpotent if for some integer .  "
},
{
  "id": "lem-nilpotents-and-units",
  "level": "2",
  "url": "sec-units-zerodivisors.html#lem-nilpotents-and-units",
  "type": "Lemma",
  "number": "9.35",
  "title": "Nilpotents and Units.",
  "body": "Nilpotents and Units  If is a nilpotent element in a unital ring , then is a unit.  "
},
{
  "id": "exe-one-plus-nilpotent-is-unit",
  "level": "2",
  "url": "sec-units-zerodivisors.html#exe-one-plus-nilpotent-is-unit",
  "type": "Exploration",
  "number": "9.36",
  "title": "",
  "body": "Let be a nilpotent element of a ring. Show that is a unit of Deduce that the sum of a nilpotent element and a unit is a unit. "
},
{
  "id": "def-idempotent",
  "level": "2",
  "url": "sec-units-zerodivisors.html#def-idempotent",
  "type": "Definition",
  "number": "9.37",
  "title": "Idempotent.",
  "body": "Idempotent  Let be a ring with identity. An element is called idempotent if .  "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "sec-units-zerodivisors.html#exercise-60",
  "type": "Exploration",
  "number": "9.38",
  "title": "Potent Idempotents.",
  "body": "Potent Idempotents Let be a ring with identity.   Give an example of a ring which has an idempotent other than or .    Prove that if is idempotent, so is .    Suppose is commutative and an idempotent. Let . Prove that is a commutative ring (with identity ).    "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "sec-units-zerodivisors.html#exercise-61",
  "type": "Exploration",
  "number": "9.39",
  "title": "Integral Idempotents.",
  "body": "Integral Idempotents Prove that the only idempotents in an integral domain are and . "
},
{
  "id": "sec-subrings",
  "level": "1",
  "url": "sec-subrings.html",
  "type": "Section",
  "number": "9.3",
  "title": "Subrings",
  "body": "Subrings  We all live in a yellow subma-ring (Ring)o Starr  We will spend the first half of our exploration of rings following the same general structure as we did in . First, we looked at rings in general, and now we will examine subrings, just as we did with subgroups. Then it's off to homomorphisms, isomorphisms, and quotients. It'll be just like old times.  Subring   A subring of a ring is a subset such that is a ring under the operations of .  When is a field we call a subfield of We generally do not define subdomains, subcommutativerings, or subdivisionringswithidentity, but if you're feeling inspired I say go for it. .    Unlike with groups, we generally do not use the notation to denote a subring. In fact, I'm not sure if we have any notation for it at all. You know what that means!   Come up with some spiffy new notation for a subring. I have absolutely no ideas, so good luck.   Subring Test   A nonempty subset of a ring is a subring if and only if either one of the following hold:    is a subgroup of closed under multiplication.     is closed under subtraction and multiplication.       Subring Preservations Any subring of a commutative ring is a commutative ring. Any unital subring of an integral domain is an integral domain.  Examples of Subrings    is a subring of , which is a subring of , which is a subring of .   is a subring without of the ring with .  The set of continuous functions mapping is a subring of , denoted .   , the ring of Gaussian Integers, is a subring of .    Nilradical Radishes Prove that the set of all nilpotent elements of a ring is a subring of , which we call the nilradical .  Fancy Subrings If is a ring and is a subring of , it can happen that    is unital but is not (e.g. )     is unital but is not    both and are unital but    Find examples for each of these situations!  Center of a Ring   The center of a ring is the set     Center is a Subring   The center is a subring of . If is a ring with identity then is a subring that contains the same .    Centers of rings don't show up as much in ring theory as they did with groups, but that might also be because there hasn't been a non-commutative ring spotted within twenty miles of UNL since 1977.  Determine the center of the real quaternion ring .    Let be a squarefree integer (that is, the prime factorization of has no repeated primes). Then the subset of is a subring that is a field (called a quadratic field ), and is a subring of .    Both and are closed under subtraction and multiplication, so they are subrings of .  The fact that is a {} follows since is also closed under taking inverses. Indeed the inverse of (from ) turns out to be whenever . A slightly subtle point here is that the fraction above makes sense since provided and are not simultaneously . This is because, if then either , which contradicts the assumption that is squarefree, or , which contradicts the assumption .    Note the difference in notation between and : one uses parenthesis and the other brackets. This is to denote that one (the one with parentheses) is a field, whereas the other [the one with brackets] is not. This is also some spicy foreshadowing that won't pay off until all the way down in . Stay tuned.  "
},
{
  "id": "def-subring",
  "level": "2",
  "url": "sec-subrings.html#def-subring",
  "type": "Definition",
  "number": "9.40",
  "title": "Subring.",
  "body": "Subring   A subring of a ring is a subset such that is a ring under the operations of .  When is a field we call a subfield of We generally do not define subdomains, subcommutativerings, or subdivisionringswithidentity, but if you're feeling inspired I say go for it. .   "
},
{
  "id": "remark-39",
  "level": "2",
  "url": "sec-subrings.html#remark-39",
  "type": "Remark",
  "number": "9.41",
  "title": "",
  "body": "Unlike with groups, we generally do not use the notation to denote a subring. In fact, I'm not sure if we have any notation for it at all. You know what that means! "
},
{
  "id": "exploration-7",
  "level": "2",
  "url": "sec-subrings.html#exploration-7",
  "type": "Discussion",
  "number": "9.2",
  "title": "",
  "body": " Come up with some spiffy new notation for a subring. I have absolutely no ideas, so good luck.  "
},
{
  "id": "lem-subring-test",
  "level": "2",
  "url": "sec-subrings.html#lem-subring-test",
  "type": "Lemma",
  "number": "9.42",
  "title": "Subring Test.",
  "body": "Subring Test   A nonempty subset of a ring is a subring if and only if either one of the following hold:    is a subgroup of closed under multiplication.     is closed under subtraction and multiplication.      "
},
{
  "id": "exe-subring-preservations",
  "level": "2",
  "url": "sec-subrings.html#exe-subring-preservations",
  "type": "Exploration",
  "number": "9.43",
  "title": "Subring Preservations.",
  "body": "Subring Preservations Any subring of a commutative ring is a commutative ring. Any unital subring of an integral domain is an integral domain. "
},
{
  "id": "ex-subring-examples",
  "level": "2",
  "url": "sec-subrings.html#ex-subring-examples",
  "type": "Example",
  "number": "9.44",
  "title": "Examples of Subrings.",
  "body": "Examples of Subrings    is a subring of , which is a subring of , which is a subring of .   is a subring without of the ring with .  The set of continuous functions mapping is a subring of , denoted .   , the ring of Gaussian Integers, is a subring of .   "
},
{
  "id": "exercise-63",
  "level": "2",
  "url": "sec-subrings.html#exercise-63",
  "type": "Exploration",
  "number": "9.45",
  "title": "Nilradical Radishes.",
  "body": "Nilradical Radishes Prove that the set of all nilpotent elements of a ring is a subring of , which we call the nilradical . "
},
{
  "id": "exe-finding-subring-counterexamples",
  "level": "2",
  "url": "sec-subrings.html#exe-finding-subring-counterexamples",
  "type": "Exploration",
  "number": "9.46",
  "title": "Fancy Subrings.",
  "body": "Fancy Subrings If is a ring and is a subring of , it can happen that    is unital but is not (e.g. )     is unital but is not    both and are unital but    Find examples for each of these situations! "
},
{
  "id": "def-center-ring",
  "level": "2",
  "url": "sec-subrings.html#def-center-ring",
  "type": "Definition",
  "number": "9.47",
  "title": "Center of a Ring.",
  "body": "Center of a Ring   The center of a ring is the set    "
},
{
  "id": "lem-center-is-subring",
  "level": "2",
  "url": "sec-subrings.html#lem-center-is-subring",
  "type": "Lemma",
  "number": "9.48",
  "title": "Center is a Subring.",
  "body": "Center is a Subring   The center is a subring of . If is a ring with identity then is a subring that contains the same .   "
},
{
  "id": "exe-center-of-quaternion-ring",
  "level": "2",
  "url": "sec-subrings.html#exe-center-of-quaternion-ring",
  "type": "Exploration",
  "number": "9.49",
  "title": "<span class=\"process-math\">\\(Z(\\H)\\)<\/span>.",
  "body": "Determine the center of the real quaternion ring . "
},
{
  "id": "lem-quadratic-field",
  "level": "2",
  "url": "sec-subrings.html#lem-quadratic-field",
  "type": "Lemma",
  "number": "9.50",
  "title": "<span class=\"process-math\">\\(\\Q(\\sqrt {d})\\)<\/span>.",
  "body": "  Let be a squarefree integer (that is, the prime factorization of has no repeated primes). Then the subset of is a subring that is a field (called a quadratic field ), and is a subring of .    Both and are closed under subtraction and multiplication, so they are subrings of .  The fact that is a {} follows since is also closed under taking inverses. Indeed the inverse of (from ) turns out to be whenever . A slightly subtle point here is that the fraction above makes sense since provided and are not simultaneously . This is because, if then either , which contradicts the assumption that is squarefree, or , which contradicts the assumption .   "
},
{
  "id": "remark-40",
  "level": "2",
  "url": "sec-subrings.html#remark-40",
  "type": "Remark",
  "number": "9.51",
  "title": "",
  "body": "Note the difference in notation between and : one uses parenthesis and the other brackets. This is to denote that one (the one with parentheses) is a field, whereas the other [the one with brackets] is not. This is also some spicy foreshadowing that won't pay off until all the way down in . Stay tuned. "
},
{
  "id": "sec-ring-hom",
  "level": "1",
  "url": "sec-ring-hom.html",
  "type": "Section",
  "number": "9.4",
  "title": "Homomorphisms",
  "body": "Homomorphisms  When you have a map, you know where to go. Shakira  Ring Homomorphism   If and are rings, a ring homomorphism from to is a function that satisfies:    for all ,     for all .   Ring homomorphisms are often referred to as ring maps .    So basically the same as a group homomorphism, we just have an extra operation that we need to preserve.  Ring Isomorphism   A ring homomorphism that is bijective is called a ring isomorphism . Two rings and are isomorphic , written , if there is an isomorphism from to . Ring isomorphisms are not usually referred to as super ring maps , but it would be cool if they were.     Isomorphism Invariants   The following are ring isomorphism invariants:   all group isomorphism invariants of the additive group, including the isomorphism class (i.e., if then ).    being unital, being commutative, division ring, field, integral domain    the number of zerodivisors.    if is unital, all group isomorphism invariants of the group of units, including the isomorphism class (i.e., if then ).    the isomorphism type of the center (i.e., if then ).       Examples of Ring Maps    The identity map is a ring isomorphism.  The zero map is a ring map.  Let be a subring of a ring . The inclusion mapping of into is a ring homomorphism.  Projection maps are ring homomorphisms.     Properties of Ring Maps   If is a ring homomorphism, then    and .    if , are unital then can be either or a zerodivisor.    If and then .    If and are ring homomorphisms (or isomorphisms, respectively), then is a ring homomorphism (or isomorphism).         Since we have , thus Now either or (which yields ) or both of these are nonzero and then they are complementary zerodivisors (in particular, is a zerodivisor).      Equivalent Field Characterizations  Let be a nontrivial ring. Then is a field if and only if every homomorphism of into a nonzero ring is injective.   Isomorphisms and Idempotents Suppose is commutative and an idempotent. Let . Prove that the map given by is a ring isomorphism.  More Isomorphisms Let be squarefree integers and set and .   There is a group isomorphism .    There is a ring isomorphism if and only if .     "
},
{
  "id": "def-ring-homomorphism",
  "level": "2",
  "url": "sec-ring-hom.html#def-ring-homomorphism",
  "type": "Definition",
  "number": "9.52",
  "title": "Ring Homomorphism.",
  "body": "Ring Homomorphism   If and are rings, a ring homomorphism from to is a function that satisfies:    for all ,     for all .   Ring homomorphisms are often referred to as ring maps .   "
},
{
  "id": "def-ring-isomorphism",
  "level": "2",
  "url": "sec-ring-hom.html#def-ring-isomorphism",
  "type": "Definition",
  "number": "9.53",
  "title": "Ring Isomorphism.",
  "body": "Ring Isomorphism   A ring homomorphism that is bijective is called a ring isomorphism . Two rings and are isomorphic , written , if there is an isomorphism from to . Ring isomorphisms are not usually referred to as super ring maps , but it would be cool if they were.    "
},
{
  "id": "prop-ring-isomorphism-invariants",
  "level": "2",
  "url": "sec-ring-hom.html#prop-ring-isomorphism-invariants",
  "type": "Proposition",
  "number": "9.54",
  "title": "Isomorphism Invariants.",
  "body": "Isomorphism Invariants   The following are ring isomorphism invariants:   all group isomorphism invariants of the additive group, including the isomorphism class (i.e., if then ).    being unital, being commutative, division ring, field, integral domain    the number of zerodivisors.    if is unital, all group isomorphism invariants of the group of units, including the isomorphism class (i.e., if then ).    the isomorphism type of the center (i.e., if then ).      "
},
{
  "id": "exe-ring-homomorphisms-examples",
  "level": "2",
  "url": "sec-ring-hom.html#exe-ring-homomorphisms-examples",
  "type": "Example",
  "number": "9.55",
  "title": "Examples of Ring Maps.",
  "body": "Examples of Ring Maps    The identity map is a ring isomorphism.  The zero map is a ring map.  Let be a subring of a ring . The inclusion mapping of into is a ring homomorphism.  Projection maps are ring homomorphisms.    "
},
{
  "id": "lem-ring-homomorphism-properties",
  "level": "2",
  "url": "sec-ring-hom.html#lem-ring-homomorphism-properties",
  "type": "Lemma",
  "number": "9.56",
  "title": "Properties of Ring Maps.",
  "body": "Properties of Ring Maps   If is a ring homomorphism, then    and .    if , are unital then can be either or a zerodivisor.    If and then .    If and are ring homomorphisms (or isomorphisms, respectively), then is a ring homomorphism (or isomorphism).         Since we have , thus Now either or (which yields ) or both of these are nonzero and then they are complementary zerodivisors (in particular, is a zerodivisor).     "
},
{
  "id": "exe-equivalent-field-definitions",
  "level": "2",
  "url": "sec-ring-hom.html#exe-equivalent-field-definitions",
  "type": "Exploration",
  "number": "9.57",
  "title": "Equivalent Field Characterizations.",
  "body": "Equivalent Field Characterizations  Let be a nontrivial ring. Then is a field if and only if every homomorphism of into a nonzero ring is injective.  "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "sec-ring-hom.html#exercise-67",
  "type": "Exploration",
  "number": "9.58",
  "title": "Isomorphisms and Idempotents.",
  "body": "Isomorphisms and Idempotents Suppose is commutative and an idempotent. Let . Prove that the map given by is a ring isomorphism. "
},
{
  "id": "exercise-68",
  "level": "2",
  "url": "sec-ring-hom.html#exercise-68",
  "type": "Exploration",
  "number": "9.59",
  "title": "More Isomorphisms.",
  "body": "More Isomorphisms Let be squarefree integers and set and .   There is a group isomorphism .    There is a ring isomorphism if and only if .    "
},
{
  "id": "sec-polyrings",
  "level": "1",
  "url": "sec-polyrings.html",
  "type": "Section",
  "number": "9.5",
  "title": "Polynomial Rings",
  "body": "Polynomial Rings  I had a polynomial once. My doctor removed it. Michael Grant, Gone  Polynomial Ring   For any commutative ring , the polynomial ring in the variable  , written , is the set with addition defined by and multiplication defined by For any commutative ring , the polynomial ring in  , written , is defined inductively as , but more easily thought of as the set consisting of (finite) sums of the form with addition and multiplication defined by rules similar to the ones seen above.    One often views as the subring of consisting of the constant polynomials.  Let's remind ourselves of some classic notions of polynomials.  Degree   Let , . Say , where . Then is the degree of .    Monic   A polynomial is monic if . Please do not confuse this with the notion of a yonic polynomial, which does not yet exist and should probably stay that way. Algebraists are already on very thin ice for some of the things they've named over the years.     Polynomials, Domains, Degrees, Units   If is a domain, then    is a domain    for any nonzero polynomials ,     the units of are the units of ( )        Its been far too long since we've had ourselves a universal mapping property, I think we've earned one.  UMP for Polynomial Rings   Let and be commutative rings, is a ring homomorphism and arbitrary elements of . Then there exists a unique ring homomorphism such that and for all , namely     Let's observe first that if such a map exists it is unique. For if is a ring map extending and sending to . Then using that preserves and .  For existence, let's assume at first. Given and , define by It is elementary (but tedious) to check really is a ring homomorphism. The fact that it restricts to is clear, however.  For the general case, we proceed by induction on the number of variables . The induction hypothesis shows that there is a ring homomorphism such that and , . Applying the case to gives with and . Setting gives a map with the needed properties.    Evalutation Homomorphism If are commutative rings with and , then the evaluation at function given by is a ring homomorphism.  Ring Maps and Coefficients  Given a ring map between commutative rings, we may apply to the composition using the element of to get an induced ring map that sends to . That is, the map applies to the coefficients of a polynomial. This can be generalized to more than one variable in the obvious way.   Reduction Homomorphism Continuing with , we could have for an ideal of and could be the quotient map. Then takes a polynomial and reduces its coefficients modulo . We will usually denote the image of through the reduction homomorphism by .  Polynomial Division Algorithm   Let be a commutative ring with identity and . Assume the leading coefficient of is a unit in . Then there exists a unique such that , and .    Factor Theorem   Let be a commutative ring with identity, and . Then if and only if .    "
},
{
  "id": "def-polynomial-ring",
  "level": "2",
  "url": "sec-polyrings.html#def-polynomial-ring",
  "type": "Definition",
  "number": "9.60",
  "title": "Polynomial Ring.",
  "body": "Polynomial Ring   For any commutative ring , the polynomial ring in the variable  , written , is the set with addition defined by and multiplication defined by For any commutative ring , the polynomial ring in  , written , is defined inductively as , but more easily thought of as the set consisting of (finite) sums of the form with addition and multiplication defined by rules similar to the ones seen above.   "
},
{
  "id": "remark-41",
  "level": "2",
  "url": "sec-polyrings.html#remark-41",
  "type": "Remark",
  "number": "9.61",
  "title": "",
  "body": "One often views as the subring of consisting of the constant polynomials. "
},
{
  "id": "def-degree",
  "level": "2",
  "url": "sec-polyrings.html#def-degree",
  "type": "Definition",
  "number": "9.62",
  "title": "Degree.",
  "body": "Degree   Let , . Say , where . Then is the degree of .   "
},
{
  "id": "def-monic",
  "level": "2",
  "url": "sec-polyrings.html#def-monic",
  "type": "Definition",
  "number": "9.63",
  "title": "Monic.",
  "body": "Monic   A polynomial is monic if . Please do not confuse this with the notion of a yonic polynomial, which does not yet exist and should probably stay that way. Algebraists are already on very thin ice for some of the things they've named over the years.    "
},
{
  "id": "prop-polynomials-domains-degrees-units",
  "level": "2",
  "url": "sec-polyrings.html#prop-polynomials-domains-degrees-units",
  "type": "Proposition",
  "number": "9.64",
  "title": "Polynomials, Domains, Degrees, Units.",
  "body": "Polynomials, Domains, Degrees, Units   If is a domain, then    is a domain    for any nonzero polynomials ,     the units of are the units of ( )      "
},
{
  "id": "thm-ump-for-polynomial-rings",
  "level": "2",
  "url": "sec-polyrings.html#thm-ump-for-polynomial-rings",
  "type": "Theorem",
  "number": "9.65",
  "title": "UMP for Polynomial Rings.",
  "body": "UMP for Polynomial Rings   Let and be commutative rings, is a ring homomorphism and arbitrary elements of . Then there exists a unique ring homomorphism such that and for all , namely     Let's observe first that if such a map exists it is unique. For if is a ring map extending and sending to . Then using that preserves and .  For existence, let's assume at first. Given and , define by It is elementary (but tedious) to check really is a ring homomorphism. The fact that it restricts to is clear, however.  For the general case, we proceed by induction on the number of variables . The induction hypothesis shows that there is a ring homomorphism such that and , . Applying the case to gives with and . Setting gives a map with the needed properties.   "
},
{
  "id": "exe-evaluation-homomorphism",
  "level": "2",
  "url": "sec-polyrings.html#exe-evaluation-homomorphism",
  "type": "Exploration",
  "number": "9.66",
  "title": "Evalutation Homomorphism.",
  "body": "Evalutation Homomorphism If are commutative rings with and , then the evaluation at function given by is a ring homomorphism. "
},
{
  "id": "ex-applying-ring-homomorphism-to-coefficients",
  "level": "2",
  "url": "sec-polyrings.html#ex-applying-ring-homomorphism-to-coefficients",
  "type": "Example",
  "number": "9.67",
  "title": "Ring Maps and Coefficients.",
  "body": "Ring Maps and Coefficients  Given a ring map between commutative rings, we may apply to the composition using the element of to get an induced ring map that sends to . That is, the map applies to the coefficients of a polynomial. This can be generalized to more than one variable in the obvious way.  "
},
{
  "id": "exe-the-reduction-homomorphism",
  "level": "2",
  "url": "sec-polyrings.html#exe-the-reduction-homomorphism",
  "type": "Exploration",
  "number": "9.68",
  "title": "Reduction Homomorphism.",
  "body": "Reduction Homomorphism Continuing with , we could have for an ideal of and could be the quotient map. Then takes a polynomial and reduces its coefficients modulo . We will usually denote the image of through the reduction homomorphism by . "
},
{
  "id": "thm-polynomial-division-algorithm",
  "level": "2",
  "url": "sec-polyrings.html#thm-polynomial-division-algorithm",
  "type": "Theorem",
  "number": "9.69",
  "title": "Polynomial Division Algorithm.",
  "body": "Polynomial Division Algorithm   Let be a commutative ring with identity and . Assume the leading coefficient of is a unit in . Then there exists a unique such that , and .   "
},
{
  "id": "thm-factor-thm",
  "level": "2",
  "url": "sec-polyrings.html#thm-factor-thm",
  "type": "Theorem",
  "number": "9.70",
  "title": "Factor Theorem.",
  "body": "Factor Theorem   Let be a commutative ring with identity, and . Then if and only if .   "
},
{
  "id": "sec-ideals",
  "level": "1",
  "url": "sec-ideals.html",
  "type": "Section",
  "number": "10.1",
  "title": "Ideals",
  "body": "Ideals  Ideal or No Deal  It is a useless life that is not consecrated to a great ideal. It is like a stone wasted on the field without becoming a part of any edifice. Jose Rizal  Ideal   For a ring , an ideal (or a two sided ideal ) of is a non empty subset such that    is a subgroup of and    for all and , we have and . This is often called absorption Personally I think it would be splendid if we could rename ideals sponges to match this imagery. .   For a ring , a proper ideal is an ideal such that .    To simplify to an excessive degree, ideals are the normal subgroups of rings. This is not accurate in the techincal sense, but it does communicate the vibe of what ideals are and how we will be using them in this text.  Examples of Ideals    In any ring , and itself are ideals.  The ideals of are .  The sets and are a right ideal and a left ideal of respectively. Neither are two-sided ideals.  The set of all nilpotent elements in a ring is an ideal.   Let be a commutative ring, and set . Then is an ideal in .      A fun fact about ideals is that they are subrings.  Ideals are Subrings   Any ideal of a ring is a subring of     The converse need not be true, however.  Subrings Need not be Ideals  Find, with justification, a subring which is not an ideal.   For example, in , the set of polynomials for which every term has even degree is a subring (it's closed under subtraction and multiplication), but it is not an ideal because it is not closed under multiplication by arbitrary polynomials. Indeed, , but .   Another fun fact is that we can combine ideals in all sorts of ways to get new ones!  Combinations of Ideals   Let be a ring and let be ideals of . Then    is an ideal     is an ideal     is an ideal and .    The intersection of any collection of ideals of is an ideal.   The set of all ideals of a ring is a lattice with respect to the partial order given by containment. In this lattice, the supremum of a pair of ideals is and the infimum is .    Union of Ideals Need not be an Ideal Give an example  Ideals are also commutative and associative. This is taken for granted or stated as tedious in most cases, but we include it here to be thorough.  Ideals Commute and Associate Let be ideals in . Then                                  For those interested in digging a little deeper into ideal arithmetic, here are some more properties to investigate.  Ideals Distribute in Let be ideals in . Then   Ideals Don't Distribute in General Give an example of a ring where ideals do not distribute.  Modular Law Let be ideals in such that or . Then   And here are some important properties to wrap up on.  Proper Ideals, Fields, and Units   An ideal of a unital ring is proper if and only if contains no units. Moreover, if is a field it has only two ideals and .    Homomorphisms and Ideals   If is a ring homomorphism, then   the image of is a subring of and    the kernel of is an ideal of .     is injective if and only if .    if is an ideal of then is an ideal of .    if is an ideal of then is an ideal of .         Since is a ring homomorphism, it is in particular a group homomorphism . We know the kernel of a group homomorphism is a subgroup, so . All that remains to be shown is that for any  and . Let ; then and , show .       Generated Ideals    If you make yourself more than just a man, if you devote yourself to an ideal, you become something else entirely.   Liam Neeson, Batman Begins   Generated Ideals   If is any subset of a ring , the ideal generated by  , denoted , is the intersection of all ideals of that contain : An ideal is finitely generated if for some finite subset of .    It is common for to be written as ; this is often taken as the standard notation. We will not do so here to maintain notational consistency and to avoid confusion.   By Proposition, is an ideal and it is the smallest ideal of that contains .   Elements in Generated Ideals   For a subset of a ring with , the ideal generated by is given by If is commutative and is any subset, then there is a simpler formula     Generated Ideals and    In the commutative ring , we have . Indeed any element can be written as . Note that .    In the commutative ring , we have , the set of all even integers. Notice this shows that different sets can generate the same ideal. Also note that .     Finitely Generated Ideals and Nilpotent Elements Let be a finitely generated ideal of . Suppose every element of is nilpotent. Prove that there exists an integer such that for all .  Infinitely Generated Ideal Let    Prove that is an ideal of .    Prove that is not finitely generated.      "
},
{
  "id": "def-ideal",
  "level": "2",
  "url": "sec-ideals.html#def-ideal",
  "type": "Definition",
  "number": "10.1",
  "title": "Ideal.",
  "body": "Ideal   For a ring , an ideal (or a two sided ideal ) of is a non empty subset such that    is a subgroup of and    for all and , we have and . This is often called absorption Personally I think it would be splendid if we could rename ideals sponges to match this imagery. .   For a ring , a proper ideal is an ideal such that .   "
},
{
  "id": "ex-ideal-examples",
  "level": "2",
  "url": "sec-ideals.html#ex-ideal-examples",
  "type": "Example",
  "number": "10.2",
  "title": "Examples of Ideals.",
  "body": "Examples of Ideals    In any ring , and itself are ideals.  The ideals of are .  The sets and are a right ideal and a left ideal of respectively. Neither are two-sided ideals.  The set of all nilpotent elements in a ring is an ideal.   Let be a commutative ring, and set . Then is an ideal in .     "
},
{
  "id": "prop-ideals-are-subrings",
  "level": "2",
  "url": "sec-ideals.html#prop-ideals-are-subrings",
  "type": "Proposition",
  "number": "10.3",
  "title": "Ideals are Subrings.",
  "body": "Ideals are Subrings   Any ideal of a ring is a subring of    "
},
{
  "id": "exercise-71",
  "level": "2",
  "url": "sec-ideals.html#exercise-71",
  "type": "Exploration",
  "number": "10.4",
  "title": "Subrings Need not be Ideals.",
  "body": "Subrings Need not be Ideals  Find, with justification, a subring which is not an ideal.   For example, in , the set of polynomials for which every term has even degree is a subring (it's closed under subtraction and multiplication), but it is not an ideal because it is not closed under multiplication by arbitrary polynomials. Indeed, , but .  "
},
{
  "id": "prop-properties-of-ideals",
  "level": "2",
  "url": "sec-ideals.html#prop-properties-of-ideals",
  "type": "Proposition",
  "number": "10.5",
  "title": "Combinations of Ideals.",
  "body": "Combinations of Ideals   Let be a ring and let be ideals of . Then    is an ideal     is an ideal     is an ideal and .    The intersection of any collection of ideals of is an ideal.   The set of all ideals of a ring is a lattice with respect to the partial order given by containment. In this lattice, the supremum of a pair of ideals is and the infimum is .   "
},
{
  "id": "exe-the-union-of-ideals-need-not-be-an-ideal",
  "level": "2",
  "url": "sec-ideals.html#exe-the-union-of-ideals-need-not-be-an-ideal",
  "type": "Exploration",
  "number": "10.6",
  "title": "Union of Ideals Need not be an Ideal.",
  "body": "Union of Ideals Need not be an Ideal Give an example "
},
{
  "id": "exe-ideals-are-commutative-and-associative",
  "level": "2",
  "url": "sec-ideals.html#exe-ideals-are-commutative-and-associative",
  "type": "Exploration",
  "number": "10.7",
  "title": "Ideals Commute and Associate.",
  "body": "Ideals Commute and Associate Let be ideals in . Then                                 "
},
{
  "id": "exe-ideals-distribute-in-z",
  "level": "2",
  "url": "sec-ideals.html#exe-ideals-distribute-in-z",
  "type": "Exploration",
  "number": "10.8",
  "title": "Ideals Distribute in <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Ideals Distribute in Let be ideals in . Then  "
},
{
  "id": "exe-ideals-do-not-distribute-in-general",
  "level": "2",
  "url": "sec-ideals.html#exe-ideals-do-not-distribute-in-general",
  "type": "Exploration",
  "number": "10.9",
  "title": "Ideals Don't Distribute in General.",
  "body": "Ideals Don't Distribute in General Give an example of a ring where ideals do not distribute. "
},
{
  "id": "exe-modular-law",
  "level": "2",
  "url": "sec-ideals.html#exe-modular-law",
  "type": "Exploration",
  "number": "10.10",
  "title": "Modular Law.",
  "body": "Modular Law Let be ideals in such that or . Then  "
},
{
  "id": "prop-proper-ideals",
  "level": "2",
  "url": "sec-ideals.html#prop-proper-ideals",
  "type": "Proposition",
  "number": "10.11",
  "title": "Proper Ideals, Fields, and Units.",
  "body": "Proper Ideals, Fields, and Units   An ideal of a unital ring is proper if and only if contains no units. Moreover, if is a field it has only two ideals and .   "
},
{
  "id": "prop-homomorphisms-and-ideals",
  "level": "2",
  "url": "sec-ideals.html#prop-homomorphisms-and-ideals",
  "type": "Proposition",
  "number": "10.12",
  "title": "Homomorphisms and Ideals.",
  "body": "Homomorphisms and Ideals   If is a ring homomorphism, then   the image of is a subring of and    the kernel of is an ideal of .     is injective if and only if .    if is an ideal of then is an ideal of .    if is an ideal of then is an ideal of .         Since is a ring homomorphism, it is in particular a group homomorphism . We know the kernel of a group homomorphism is a subgroup, so . All that remains to be shown is that for any  and . Let ; then and , show .     "
},
{
  "id": "def-generated-ideal",
  "level": "2",
  "url": "sec-ideals.html#def-generated-ideal",
  "type": "Definition",
  "number": "10.13",
  "title": "Generated Ideals.",
  "body": "Generated Ideals   If is any subset of a ring , the ideal generated by  , denoted , is the intersection of all ideals of that contain : An ideal is finitely generated if for some finite subset of .   "
},
{
  "id": "remark-42",
  "level": "2",
  "url": "sec-ideals.html#remark-42",
  "type": "Remark",
  "number": "10.14",
  "title": "",
  "body": "It is common for to be written as ; this is often taken as the standard notation. We will not do so here to maintain notational consistency and to avoid confusion. "
},
{
  "id": "remark-43",
  "level": "2",
  "url": "sec-ideals.html#remark-43",
  "type": "Remark",
  "number": "10.15",
  "title": "",
  "body": " By Proposition, is an ideal and it is the smallest ideal of that contains .  "
},
{
  "id": "lem-formula-for-generated-ideal",
  "level": "2",
  "url": "sec-ideals.html#lem-formula-for-generated-ideal",
  "type": "Lemma",
  "number": "10.16",
  "title": "Elements in Generated Ideals.",
  "body": "Elements in Generated Ideals   For a subset of a ring with , the ideal generated by is given by If is commutative and is any subset, then there is a simpler formula    "
},
{
  "id": "exe-generated-ideals-and-z",
  "level": "2",
  "url": "sec-ideals.html#exe-generated-ideals-and-z",
  "type": "Exploration",
  "number": "10.17",
  "title": "Generated Ideals and <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Generated Ideals and    In the commutative ring , we have . Indeed any element can be written as . Note that .    In the commutative ring , we have , the set of all even integers. Notice this shows that different sets can generate the same ideal. Also note that .    "
},
{
  "id": "exe-finite-generated-ideal-and-nilpotent",
  "level": "2",
  "url": "sec-ideals.html#exe-finite-generated-ideal-and-nilpotent",
  "type": "Exploration",
  "number": "10.18",
  "title": "Finitely Generated Ideals and Nilpotent Elements.",
  "body": "Finitely Generated Ideals and Nilpotent Elements Let be a finitely generated ideal of . Suppose every element of is nilpotent. Prove that there exists an integer such that for all . "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "sec-ideals.html#exercise-79",
  "type": "Exploration",
  "number": "10.19",
  "title": "Infinitely Generated Ideal.",
  "body": "Infinitely Generated Ideal Let    Prove that is an ideal of .    Prove that is not finitely generated.    "
},
{
  "id": "sec-ring-quotients",
  "level": "1",
  "url": "sec-ring-quotients.html",
  "type": "Section",
  "number": "10.2",
  "title": "Quotient Rings",
  "body": "Quotient Rings  Quotient Rings    Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it.   Alan Perlis   Additive Cosets form Abelian Group   For a two-sided ideal of , the set of additive cosets modulo is This is an abelian group with respect to addition given by .    Quotient Ring   For a two-sided ideal of The quotient ring of modulo is the set with addition defined as above and multiplication given by     Quotient Rings are Rings Given a two-sided ideal of , prove that the quotient ring is indeed a ring.  Just like we had with groups, it turns out our dear friend has been a quotient all along.  Quotients of  If is an ideal in the ring , then the quotient ring is the familiar ring .   This is where the common notation comes from, even though it should be anyway.  And, once again, we have a quotient map that turns out to be a homomorphism.  Quotient Map is Surjective Ring Map Prove that the canonical quotient map is a surjective ring homomorphism.  Last but certainly not least, we have an analogue of for ideals. Once again, I would like to suggest that ideal subgroup is a far better name for a normal subgroup.  Ideal iff Kernel of Ring Map   Let be a ring. A subset of is an ideal of if and only if there exists a ring homomorphism such that .     The Ring Isomorphism Theorems  I'm not a very structured person, so when I get some structure, it's cool; it's good for me. J. Cole  We arrive at the isomorphism theorems for rings. We've seen most of this stuff before in different packaging, so lets jump right in.  UMP for Quotient Rings   If is a ring homomorphism and is an ideal such that , there exists a well defined ring homomorphism such that . Furthermore, if is surjective then is surjective and if then is injective.    Ignoring for a minute, we know that there is a unique homomorphism of abelian groups from to such that . It remains only to check that preserves multiplication: Given elements , their product is , and we have since preserves multiplication.    First Isomorphism Theorem for Rings   If is a ring homomorphism, then via the map given by .    The map is a well-defined ring homomorphism by . By the for groups, the map is bijective, finishing the proof.    Second Isomorphism Theorem for Rings   Let be a subring and let be an ideal of . Then is a subring of , is an ideal of , and     Third Isomorphism Theorem for Rings   If is a ring and are two ideals of , then is an ideal of and     Lattice Isomorphism Theorem for Quotient Rings   Suppose is a ring and is a two-sided ideal of and write for the quotient ring homomorphism. There is a bijection with inverse Moreover this bijection induces a bijection between since is an ideal of containing if and only if is an ideal of .     "
},
{
  "id": "lem-cosets-abelian",
  "level": "2",
  "url": "sec-ring-quotients.html#lem-cosets-abelian",
  "type": "Lemma",
  "number": "10.20",
  "title": "Additive Cosets form Abelian Group.",
  "body": "Additive Cosets form Abelian Group   For a two-sided ideal of , the set of additive cosets modulo is This is an abelian group with respect to addition given by .   "
},
{
  "id": "def-quotient-ring",
  "level": "2",
  "url": "sec-ring-quotients.html#def-quotient-ring",
  "type": "Definition",
  "number": "10.21",
  "title": "Quotient Ring.",
  "body": "Quotient Ring   For a two-sided ideal of The quotient ring of modulo is the set with addition defined as above and multiplication given by    "
},
{
  "id": "exe-quotient-ring-is-ring",
  "level": "2",
  "url": "sec-ring-quotients.html#exe-quotient-ring-is-ring",
  "type": "Exploration",
  "number": "10.22",
  "title": "Quotient Rings are Rings.",
  "body": "Quotient Rings are Rings Given a two-sided ideal of , prove that the quotient ring is indeed a ring. "
},
{
  "id": "ex-quotient-of-z",
  "level": "2",
  "url": "sec-ring-quotients.html#ex-quotient-of-z",
  "type": "Example",
  "number": "10.23",
  "title": "Quotients of <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Quotients of  If is an ideal in the ring , then the quotient ring is the familiar ring .  "
},
{
  "id": "remark-44",
  "level": "2",
  "url": "sec-ring-quotients.html#remark-44",
  "type": "Remark",
  "number": "10.24",
  "title": "",
  "body": "This is where the common notation comes from, even though it should be anyway. "
},
{
  "id": "quotient-map-is-surjective-homomorphism",
  "level": "2",
  "url": "sec-ring-quotients.html#quotient-map-is-surjective-homomorphism",
  "type": "Exploration",
  "number": "10.25",
  "title": "Quotient Map is Surjective Ring Map.",
  "body": "Quotient Map is Surjective Ring Map Prove that the canonical quotient map is a surjective ring homomorphism. "
},
{
  "id": "thm-ideal-iff-kernel-of-ring-map",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ideal-iff-kernel-of-ring-map",
  "type": "Theorem",
  "number": "10.26",
  "title": "Ideal iff Kernel of Ring Map.",
  "body": "Ideal iff Kernel of Ring Map   Let be a ring. A subset of is an ideal of if and only if there exists a ring homomorphism such that .   "
},
{
  "id": "thm-ump-for-quotient-rings",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ump-for-quotient-rings",
  "type": "Theorem",
  "number": "10.27",
  "title": "UMP for Quotient Rings.",
  "body": "UMP for Quotient Rings   If is a ring homomorphism and is an ideal such that , there exists a well defined ring homomorphism such that . Furthermore, if is surjective then is surjective and if then is injective.    Ignoring for a minute, we know that there is a unique homomorphism of abelian groups from to such that . It remains only to check that preserves multiplication: Given elements , their product is , and we have since preserves multiplication.   "
},
{
  "id": "thm-ring-fit",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ring-fit",
  "type": "Theorem",
  "number": "10.28",
  "title": "First Isomorphism Theorem for Rings.",
  "body": "First Isomorphism Theorem for Rings   If is a ring homomorphism, then via the map given by .    The map is a well-defined ring homomorphism by . By the for groups, the map is bijective, finishing the proof.   "
},
{
  "id": "thm-ring-sit",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ring-sit",
  "type": "Theorem",
  "number": "10.29",
  "title": "Second Isomorphism Theorem for Rings.",
  "body": "Second Isomorphism Theorem for Rings   Let be a subring and let be an ideal of . Then is a subring of , is an ideal of , and    "
},
{
  "id": "thm-ring-tit",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ring-tit",
  "type": "Theorem",
  "number": "10.30",
  "title": "Third Isomorphism Theorem for Rings.",
  "body": "Third Isomorphism Theorem for Rings   If is a ring and are two ideals of , then is an ideal of and    "
},
{
  "id": "thm-ring-lit",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ring-lit",
  "type": "Theorem",
  "number": "10.31",
  "title": "Lattice Isomorphism Theorem for Quotient Rings.",
  "body": "Lattice Isomorphism Theorem for Quotient Rings   Suppose is a ring and is a two-sided ideal of and write for the quotient ring homomorphism. There is a bijection with inverse Moreover this bijection induces a bijection between since is an ideal of containing if and only if is an ideal of .   "
},
{
  "id": "sec-primemax-ideals",
  "level": "1",
  "url": "sec-primemax-ideals.html",
  "type": "Section",
  "number": "10.3",
  "title": "Prime and Maximal Ideals",
  "body": "Prime and Maximal Ideals  Prime Ideals    I have as much chance of becoming Prime Minister as of being decapitated by a frisbee or of finding Elvis.   Boris Johnson, former Prime Minister   Prime Ideal   A prime ideal of a commutative ring is a proper ideal such that whenever for , we have or .    We often refer to prime ideals as just primes , this will become gently confusing later and we will avoid doing so when possible.  Examples of Prime Ideals    In , the prime ideals are and the ideals generated by prime integers , where is a prime integer. The maximal ideals are the ideals generated by prime integers. In particular is prime but not maximal.  In the ideal is not prime, because , but and (because if then so , a contradiction).     Here is an equivalent characterization of prime ideals that will become very useful in a later course on commutative algebra.  Prime iff Complement is Closed   An ideal is prime if and only if is closed under multiplication.    And here is another equivalent characterization One might say it is an equivalent equivalent characterization... but we shant. that will become very useful instantly and will never really stop.  Prime iff Quotient is Domain   Let be a commutative ring with , and let be an ideal of . The ideal is prime if and only if is an integral domain.    Suppose is prime. If , then and hence either or , so that either or . This proves is a domain. Suppose is a domain and that . Then in and hence either or . It follows or , so that is prime.    Since we're on such a roll of equivalent characterizations, let's through in one more for good measure.  Equivalent Domain Characterization   Let be a nontrivial ring. Then is an integral domain if and only if the ideal is prime.    Prime ideals and homomorphisms? I thought you'd never ask.  Prime Ideals and Ring Maps      If is a domain, is a ring and is a ring homomorphism, then is a prime ideal.    If is a ring homomorphism and is a prime ideal in , then is prime in .        Maximal Ideals  It's just like, we know how to push ourselves to the max. Young Dolph  Maximal Ideal   A maximal ideal of an arbitrary ring is a proper ideal such that the only ideals of containing are and .    It is not uncommon to denote maximal ideals with . We reserve this notation for when we dive into modules.  in In the ideal is maximal and prime, the ideals and are prime but not maximal.  And, matching up quite nicely with , we have one of the spicier meatballs of the chapter.  Maximal Ideal iff Quotient is a Field   Let be a commutative ring with , and let be an ideal of . The ideal is maximal if and only if is a field.    The first assertion follows immediately from the Lattice Isomorphism Theorem and the fact that is a field if and only if its only ideals are and .    Maximal Ideals are Prime   Every maximal ideal is prime.    If is maximal, then is a field, which in particular implies that is a domain, so is prime.    Unlike their prime counterparts, maximal ideals are not preserved by preimages in general.   Zorn's Lemma   Let be a non-empty family of sets. Suppose that for each chain in , the set is in . Then has a maximal element.    All Ideals Contained in Maximal Ideal   If is a ring with and is a proper ideal of , then there is a maximal ideal of containing . In particular every ring contains a maximal ideal.    Let be the set of proper ideals of that contain and view as a poset under containment. We will apply . Suppose is a totally ordered subset of . We need to show has an upper bound in . If is empty, is such a bound. Otherwise, let .  Since is non-empty, we have and so .  Given , then for some . Since is totally ordered, either or , and hence or . Either way, .  For and , we have for some and hence .  This proves is an ideal that contains . Since every is a proper ideal, , so and hence is a proper ideal, so . By , we conclude has at least one maximal element . This is a maximal ideal in the sense of definition since if is an ideal of and then either or, if is proper, then , which yields by using that is a maximal element of .  The existence of a maximal ideal follows by applying the first part of the theorem for .     "
},
{
  "id": "def-prime-ideal",
  "level": "2",
  "url": "sec-primemax-ideals.html#def-prime-ideal",
  "type": "Definition",
  "number": "10.32",
  "title": "Prime Ideal.",
  "body": "Prime Ideal   A prime ideal of a commutative ring is a proper ideal such that whenever for , we have or .   "
},
{
  "id": "remark-45",
  "level": "2",
  "url": "sec-primemax-ideals.html#remark-45",
  "type": "Remark",
  "number": "10.33",
  "title": "",
  "body": "We often refer to prime ideals as just primes , this will become gently confusing later and we will avoid doing so when possible. "
},
{
  "id": "ex-prime-ideals",
  "level": "2",
  "url": "sec-primemax-ideals.html#ex-prime-ideals",
  "type": "Example",
  "number": "10.34",
  "title": "Examples of Prime Ideals.",
  "body": "Examples of Prime Ideals    In , the prime ideals are and the ideals generated by prime integers , where is a prime integer. The maximal ideals are the ideals generated by prime integers. In particular is prime but not maximal.  In the ideal is not prime, because , but and (because if then so , a contradiction).    "
},
{
  "id": "prop-prime-iff-complement-closed",
  "level": "2",
  "url": "sec-primemax-ideals.html#prop-prime-iff-complement-closed",
  "type": "Proposition",
  "number": "10.35",
  "title": "Prime iff Complement is Closed.",
  "body": "Prime iff Complement is Closed   An ideal is prime if and only if is closed under multiplication.   "
},
{
  "id": "thm-prime-iff-domain",
  "level": "2",
  "url": "sec-primemax-ideals.html#thm-prime-iff-domain",
  "type": "Theorem",
  "number": "10.36",
  "title": "Prime iff Quotient is Domain.",
  "body": "Prime iff Quotient is Domain   Let be a commutative ring with , and let be an ideal of . The ideal is prime if and only if is an integral domain.    Suppose is prime. If , then and hence either or , so that either or . This proves is a domain. Suppose is a domain and that . Then in and hence either or . It follows or , so that is prime.   "
},
{
  "id": "prop-equivalent-integral-domain-definition",
  "level": "2",
  "url": "sec-primemax-ideals.html#prop-equivalent-integral-domain-definition",
  "type": "Proposition",
  "number": "10.37",
  "title": "Equivalent Domain Characterization.",
  "body": "Equivalent Domain Characterization   Let be a nontrivial ring. Then is an integral domain if and only if the ideal is prime.   "
},
{
  "id": "thm-primes-and-maps",
  "level": "2",
  "url": "sec-primemax-ideals.html#thm-primes-and-maps",
  "type": "Theorem",
  "number": "10.38",
  "title": "Prime Ideals and Ring Maps.",
  "body": "Prime Ideals and Ring Maps      If is a domain, is a ring and is a ring homomorphism, then is a prime ideal.    If is a ring homomorphism and is a prime ideal in , then is prime in .      "
},
{
  "id": "def-maximal-ideal",
  "level": "2",
  "url": "sec-primemax-ideals.html#def-maximal-ideal",
  "type": "Definition",
  "number": "10.39",
  "title": "Maximal Ideal.",
  "body": "Maximal Ideal   A maximal ideal of an arbitrary ring is a proper ideal such that the only ideals of containing are and .   "
},
{
  "id": "remark-46",
  "level": "2",
  "url": "sec-primemax-ideals.html#remark-46",
  "type": "Remark",
  "number": "10.40",
  "title": "",
  "body": "It is not uncommon to denote maximal ideals with . We reserve this notation for when we dive into modules. "
},
{
  "id": "exe-2x-prime-and-maximal-in-zx",
  "level": "2",
  "url": "sec-primemax-ideals.html#exe-2x-prime-and-maximal-in-zx",
  "type": "Exploration",
  "number": "10.41",
  "title": "<span class=\"process-math\">\\(\\igen{2,x}\\)<\/span> in <span class=\"process-math\">\\(\\Z[x]\\)<\/span>.",
  "body": "in In the ideal is maximal and prime, the ideals and are prime but not maximal. "
},
{
  "id": "thm-maximal-iff-field",
  "level": "2",
  "url": "sec-primemax-ideals.html#thm-maximal-iff-field",
  "type": "Theorem",
  "number": "10.42",
  "title": "Maximal Ideal iff Quotient is a Field.",
  "body": "Maximal Ideal iff Quotient is a Field   Let be a commutative ring with , and let be an ideal of . The ideal is maximal if and only if is a field.    The first assertion follows immediately from the Lattice Isomorphism Theorem and the fact that is a field if and only if its only ideals are and .   "
},
{
  "id": "cor-maximal-prime",
  "level": "2",
  "url": "sec-primemax-ideals.html#cor-maximal-prime",
  "type": "Corollary",
  "number": "10.43",
  "title": "Maximal Ideals are Prime.",
  "body": "Maximal Ideals are Prime   Every maximal ideal is prime.    If is maximal, then is a field, which in particular implies that is a domain, so is prime.   "
},
{
  "id": "lem-zorn",
  "level": "2",
  "url": "sec-primemax-ideals.html#lem-zorn",
  "type": "Lemma",
  "number": "10.44",
  "title": "Zorn's Lemma.",
  "body": "Zorn's Lemma   Let be a non-empty family of sets. Suppose that for each chain in , the set is in . Then has a maximal element.   "
},
{
  "id": "thm-all-ideals-contained-in-maximal-ideal",
  "level": "2",
  "url": "sec-primemax-ideals.html#thm-all-ideals-contained-in-maximal-ideal",
  "type": "Theorem",
  "number": "10.45",
  "title": "All Ideals Contained in Maximal Ideal.",
  "body": "All Ideals Contained in Maximal Ideal   If is a ring with and is a proper ideal of , then there is a maximal ideal of containing . In particular every ring contains a maximal ideal.    Let be the set of proper ideals of that contain and view as a poset under containment. We will apply . Suppose is a totally ordered subset of . We need to show has an upper bound in . If is empty, is such a bound. Otherwise, let .  Since is non-empty, we have and so .  Given , then for some . Since is totally ordered, either or , and hence or . Either way, .  For and , we have for some and hence .  This proves is an ideal that contains . Since every is a proper ideal, , so and hence is a proper ideal, so . By , we conclude has at least one maximal element . This is a maximal ideal in the sense of definition since if is an ideal of and then either or, if is proper, then , which yields by using that is a maximal element of .  The existence of a maximal ideal follows by applying the first part of the theorem for .   "
},
{
  "id": "sec-eds",
  "level": "1",
  "url": "sec-eds.html",
  "type": "Section",
  "number": "11.1",
  "title": "Euclidian Domains",
  "body": "Euclidian Domains  Find your domain and serve it to the world. Myles Munroe  Euclidean Domain   A Euclidean domain (ED) is a domain together with a norm function such that and the following property holds: for any two elements with , there are elements and of such that     In a Euclidean domain, division with remainder is possible, and the remainder is always smaller than the divisor. This property is similar to the division algorithm for integers, which is what makes Euclidean domains so useful in number theory and algebra.  Lets take a look at some examples to deepen our understanding.  Trivial Norm  A \"degenerate example\" is a field equipped with the trivial norm for all . Given with , we have . Note that in this example there is no need to include in the description of the division algorithm, since implies . This is not the case in other examples. Also observe that as we've defined remainders they are not unique. For example, in dividing by , both are considered valid. This calculation shows, more generally, that if is a unit, then for all there exists an equation with , not matter what norm is used. One could make remainders (and hence quotients) unique for by insisting that remainders always be non-negative, but this is not part of the abstract theory since it doesn't generalize to all cases well.   Polynomial Rings over Fields are Euclidean Domains  The next classical example is with a field and where we define the norm to be polynomial degree: if and . This ring is a Euclidean Domain because of the familiar long division for polynomials, as proved in .    Guassian Integers are a Euclidian Domain  The ring of Gaussian integers is a Euclidean domain with being the usual complex (Euclidean) square norm . Let ,  and let (here we use that the fraction field of is ). Now pick so that and . We have Set and set and notice that because and by closure. If we're good, and if then, using that the complex squared norm is multiplicative as well as the Pythagorean Theorem and the choice for , we have Thus the norm function makes into a Euclidean domain.   GCD   Given elements , not both , of a Euclidean domain with Euclidean norm , a of and is an element such that:    and ; and    If and , then .       Note that is equivalent to .  "
},
{
  "id": "def-ed",
  "level": "2",
  "url": "sec-eds.html#def-ed",
  "type": "Definition",
  "number": "11.1",
  "title": "Euclidean Domain.",
  "body": "Euclidean Domain   A Euclidean domain (ED) is a domain together with a norm function such that and the following property holds: for any two elements with , there are elements and of such that    "
},
{
  "id": "ex-trivial-norm",
  "level": "2",
  "url": "sec-eds.html#ex-trivial-norm",
  "type": "Example",
  "number": "11.2",
  "title": "Trivial Norm.",
  "body": "Trivial Norm  A \"degenerate example\" is a field equipped with the trivial norm for all . Given with , we have . Note that in this example there is no need to include in the description of the division algorithm, since implies . This is not the case in other examples. Also observe that as we've defined remainders they are not unique. For example, in dividing by , both are considered valid. This calculation shows, more generally, that if is a unit, then for all there exists an equation with , not matter what norm is used. One could make remainders (and hence quotients) unique for by insisting that remainders always be non-negative, but this is not part of the abstract theory since it doesn't generalize to all cases well.  "
},
{
  "id": "ex-degree-and-norm",
  "level": "2",
  "url": "sec-eds.html#ex-degree-and-norm",
  "type": "Example",
  "number": "11.3",
  "title": "Polynomial Rings over Fields are Euclidean Domains.",
  "body": "Polynomial Rings over Fields are Euclidean Domains  The next classical example is with a field and where we define the norm to be polynomial degree: if and . This ring is a Euclidean Domain because of the familiar long division for polynomials, as proved in .  "
},
{
  "id": "ex-gaussian-integers-are-an-ed",
  "level": "2",
  "url": "sec-eds.html#ex-gaussian-integers-are-an-ed",
  "type": "Example",
  "number": "11.4",
  "title": "Guassian Integers are a Euclidian Domain.",
  "body": " Guassian Integers are a Euclidian Domain  The ring of Gaussian integers is a Euclidean domain with being the usual complex (Euclidean) square norm . Let ,  and let (here we use that the fraction field of is ). Now pick so that and . We have Set and set and notice that because and by closure. If we're good, and if then, using that the complex squared norm is multiplicative as well as the Pythagorean Theorem and the choice for , we have Thus the norm function makes into a Euclidean domain.  "
},
{
  "id": "def-ed-gcd",
  "level": "2",
  "url": "sec-eds.html#def-ed-gcd",
  "type": "Definition",
  "number": "11.5",
  "title": "GCD.",
  "body": "GCD   Given elements , not both , of a Euclidean domain with Euclidean norm , a of and is an element such that:    and ; and    If and , then .      "
},
{
  "id": "remark-47",
  "level": "2",
  "url": "sec-eds.html#remark-47",
  "type": "Remark",
  "number": "11.6",
  "title": "",
  "body": "Note that is equivalent to . "
},
{
  "id": "sec-pids",
  "level": "1",
  "url": "sec-pids.html",
  "type": "Section",
  "number": "11.2",
  "title": "Principal Ideal Domains",
  "body": "Principal Ideal Domains  One chance is all you need. Jesse Owens  Principal Ideal   Let be an ideal of a ring . The ideal is principal if for some , that is, is generated by a set with a single element.    Principal Ideals in Let be ideals in . Then         Conclude that if and only if and are relatively prime.    Examples of Principal Ideals    every ideal of is principal with for some This means is a PID, something that will be defined in   for any field , every ideal of is principal.  for any field , every ideal in is finitely generated, but not necessarily principal. This is a consequence of a deep theorem called the Hilbert Basis Theorem, which you will see in Math 905.     PID   A ring is called a principal ideal domain (PID) if it is a domain with the property that every ideal is principal, i.e., for each ideal , we have for some     Polynomial Rings over Fields are PIDs For any field , every ideal of is principal ( is a PID)  Euclidean Domains are PIDs   If is a Euclidean domain, then is a PID.    Let be the norm function making into a Euclidean domain. Pick an ideal . If is the zero ideal, . Otherwise pick a non-zero element of with as small as possible. (Such a exists by the well-ordering of .) I claim . It is clear that . Pick . Then and either or . But note that , and we cannot have both and by our choice of . So it must be that , and hence .    The converse is not true in general.  PIDs Need not be Euclidean Domains  The ring is a PID, but not a Euclidean domain. It is the simplest example of such a ring, but the proofs of these claims are not easy. I will not cover a proof of this fact.   Nonzero Primes are Maximal in PIDs   If is a PID, then every nonzero prime ideal is maximal.    Associate   Let be a domain. Two elements are associates if there is a unit of R such that .    Associates and Principal Ideals   Two elements of a domain are associates if and only if .    If then and so for some . Similarly and hence . Since is a domain, either or . If , then and otherwise is a unit.  If for a unit , then and so and , from which is follows that and .    GCDs and Units in PIDs   If is a PID and , then    for some and any such is a gcd of and     the gcd of and is unique up to multiplication by a unit.       The existence of is granted by definition in a PID. Now gives that and . If and we have that , so by minimality. This gives , hence .    If is not only a PID but a Euclidean domain with norm function , then the Euclidean algorithm can be used to compute a gcd of any two nonzero .  Prime   Suppose is a domain. An element is a prime element if and the ideal is a prime ideal.    Irreducible   Suppose is a domain. An element is irreducible if , is not a unit, and whenever with then either or is a unit.    Examples of Primes and Irreducibles    the prime elements of are the prime integers and their negatives; they are also irreducible  any element with a prime integer is irreducible e.g. is irreducible  the element is not irreducible in   the polynomial is irreducible; indeed if it factors nontrivially, it must factor as a product of two linear polynomials: . Then is a root for . But neither nor are roots for this polynomial, a contradiction.     In , Prime but not Irreducible  In the domain the element is irreducible but not prime.   Note that and thus . However we claim that neither nor are in . If then for some and so , a contradiction. Thus is not prime.    In the ring the element is irreducible but not prime.   Since this ring is a domain. The element is irreducible for degree reasons. The ideal contains but doesn't contain so is not prime.   Irreducible is Prime in PID   Let be a domain and let .   If is a prime element, then is irreducible.    If is a PID and is irreducible, then is a prime element.       Suppose is an integral domain and that is prime. Then and is not a unit. Suppose . Then and hence by definition either or . If , we have for some and so . Since , , and is an integral domain, we must have , showing that is a unit.  Assume is a PID and that is irreducible. Since is not a unit, is a proper ideal and hence is contained in a maximal ideal by Theorem . We show and hence is prime. Since is a PID, for some . So for some . But is irreducible and is not a unit, which forces to be a unit and hence .    Factorizations and Permutations   Assume is a PID is non zero and not a unit and are two different irreducible factorization of . Then and there is a permutation such that, for all , we have and are associates.    Without loss of generality, assume . We induct on .  If then as well since and would yield , a contradiction. If we have and there is nothing more to prove.  Assume and that irreducible factorizations with factors are unique up to reordering factors and taking associates.  Since is a PID, irreducible elements are prime by Theorem . Since we have that and since is a prime ideal it follows that for some . Upon reordering, we may as well assume . Thus for some . Since is irreducible and is not a unit, must be a unit. We get and hence, since is an integral domain, we may divide by to obtain Notice that is a prime ideal so is irreducible by Theorem .  By the inductive hypothesis we deduce that hence and also that are associates to in some order. This together with associate to establishes the claim.    "
},
{
  "id": "def-principal-ideal",
  "level": "2",
  "url": "sec-pids.html#def-principal-ideal",
  "type": "Definition",
  "number": "11.7",
  "title": "Principal Ideal.",
  "body": "Principal Ideal   Let be an ideal of a ring . The ideal is principal if for some , that is, is generated by a set with a single element.   "
},
{
  "id": "exe-properties-of-principal-ideals-in-z",
  "level": "2",
  "url": "sec-pids.html#exe-properties-of-principal-ideals-in-z",
  "type": "Exploration",
  "number": "11.8",
  "title": "Principal Ideals in <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Principal Ideals in Let be ideals in . Then         Conclude that if and only if and are relatively prime.   "
},
{
  "id": "ex-principal-ideals",
  "level": "2",
  "url": "sec-pids.html#ex-principal-ideals",
  "type": "Example",
  "number": "11.9",
  "title": "Examples of Principal Ideals.",
  "body": "Examples of Principal Ideals    every ideal of is principal with for some This means is a PID, something that will be defined in   for any field , every ideal of is principal.  for any field , every ideal in is finitely generated, but not necessarily principal. This is a consequence of a deep theorem called the Hilbert Basis Theorem, which you will see in Math 905.    "
},
{
  "id": "def-pid",
  "level": "2",
  "url": "sec-pids.html#def-pid",
  "type": "Definition",
  "number": "11.10",
  "title": "PID.",
  "body": "PID   A ring is called a principal ideal domain (PID) if it is a domain with the property that every ideal is principal, i.e., for each ideal , we have for some    "
},
{
  "id": "exe-fx-is-a-pid",
  "level": "2",
  "url": "sec-pids.html#exe-fx-is-a-pid",
  "type": "Exploration",
  "number": "11.11",
  "title": "Polynomial Rings over Fields are PIDs.",
  "body": "Polynomial Rings over Fields are PIDs For any field , every ideal of is principal ( is a PID) "
},
{
  "id": "thm-ed-is-a-pid",
  "level": "2",
  "url": "sec-pids.html#thm-ed-is-a-pid",
  "type": "Theorem",
  "number": "11.12",
  "title": "Euclidean Domains are PIDs.",
  "body": "Euclidean Domains are PIDs   If is a Euclidean domain, then is a PID.    Let be the norm function making into a Euclidean domain. Pick an ideal . If is the zero ideal, . Otherwise pick a non-zero element of with as small as possible. (Such a exists by the well-ordering of .) I claim . It is clear that . Pick . Then and either or . But note that , and we cannot have both and by our choice of . So it must be that , and hence .   "
},
{
  "id": "ex-pid-not-ed",
  "level": "2",
  "url": "sec-pids.html#ex-pid-not-ed",
  "type": "Example",
  "number": "11.13",
  "title": "PIDs Need not be Euclidean Domains.",
  "body": "PIDs Need not be Euclidean Domains  The ring is a PID, but not a Euclidean domain. It is the simplest example of such a ring, but the proofs of these claims are not easy. I will not cover a proof of this fact.  "
},
{
  "id": "exe-nonzero-primes-maximal-in-pid",
  "level": "2",
  "url": "sec-pids.html#exe-nonzero-primes-maximal-in-pid",
  "type": "Proposition",
  "number": "11.14",
  "title": "Nonzero Primes are Maximal in PIDs.",
  "body": "Nonzero Primes are Maximal in PIDs   If is a PID, then every nonzero prime ideal is maximal.   "
},
{
  "id": "def-associate",
  "level": "2",
  "url": "sec-pids.html#def-associate",
  "type": "Definition",
  "number": "11.15",
  "title": "Associate.",
  "body": "Associate   Let be a domain. Two elements are associates if there is a unit of R such that .   "
},
{
  "id": "lem-associates-and-principal-ideals",
  "level": "2",
  "url": "sec-pids.html#lem-associates-and-principal-ideals",
  "type": "Lemma",
  "number": "11.16",
  "title": "Associates and Principal Ideals.",
  "body": "Associates and Principal Ideals   Two elements of a domain are associates if and only if .    If then and so for some . Similarly and hence . Since is a domain, either or . If , then and otherwise is a unit.  If for a unit , then and so and , from which is follows that and .   "
},
{
  "id": "prop-gcds-and-units-in-pids",
  "level": "2",
  "url": "sec-pids.html#prop-gcds-and-units-in-pids",
  "type": "Proposition",
  "number": "11.17",
  "title": "GCDs and Units in PIDs.",
  "body": "GCDs and Units in PIDs   If is a PID and , then    for some and any such is a gcd of and     the gcd of and is unique up to multiplication by a unit.       The existence of is granted by definition in a PID. Now gives that and . If and we have that , so by minimality. This gives , hence .   "
},
{
  "id": "remark-48",
  "level": "2",
  "url": "sec-pids.html#remark-48",
  "type": "Remark",
  "number": "11.18",
  "title": "",
  "body": "If is not only a PID but a Euclidean domain with norm function , then the Euclidean algorithm can be used to compute a gcd of any two nonzero . "
},
{
  "id": "def-prime-element",
  "level": "2",
  "url": "sec-pids.html#def-prime-element",
  "type": "Definition",
  "number": "11.19",
  "title": "Prime.",
  "body": "Prime   Suppose is a domain. An element is a prime element if and the ideal is a prime ideal.   "
},
{
  "id": "def-irreducible",
  "level": "2",
  "url": "sec-pids.html#def-irreducible",
  "type": "Definition",
  "number": "11.20",
  "title": "Irreducible.",
  "body": "Irreducible   Suppose is a domain. An element is irreducible if , is not a unit, and whenever with then either or is a unit.   "
},
{
  "id": "ex-prime-and-irreducible-elements",
  "level": "2",
  "url": "sec-pids.html#ex-prime-and-irreducible-elements",
  "type": "Example",
  "number": "11.21",
  "title": "Examples of Primes and Irreducibles.",
  "body": "Examples of Primes and Irreducibles    the prime elements of are the prime integers and their negatives; they are also irreducible  any element with a prime integer is irreducible e.g. is irreducible  the element is not irreducible in   the polynomial is irreducible; indeed if it factors nontrivially, it must factor as a product of two linear polynomials: . Then is a root for . But neither nor are roots for this polynomial, a contradiction.    "
},
{
  "id": "ex-in-zsqrt-5-2-irreducible-but-not-prime",
  "level": "2",
  "url": "sec-pids.html#ex-in-zsqrt-5-2-irreducible-but-not-prime",
  "type": "Exploration",
  "number": "11.22",
  "title": "In <span class=\"process-math\">\\(\\Z[\\sqrt{-5}]\\text{,}\\)<\/span> <span class=\"process-math\">\\(2\\)<\/span> Prime but not Irreducible.",
  "body": "In , Prime but not Irreducible  In the domain the element is irreducible but not prime.   Note that and thus . However we claim that neither nor are in . If then for some and so , a contradiction. Thus is not prime.  "
},
{
  "id": "ex-cxyx2-y3-y-irreducible-but-not-prime",
  "level": "2",
  "url": "sec-pids.html#ex-cxyx2-y3-y-irreducible-but-not-prime",
  "type": "Exploration",
  "number": "11.23",
  "title": "",
  "body": " In the ring the element is irreducible but not prime.   Since this ring is a domain. The element is irreducible for degree reasons. The ideal contains but doesn't contain so is not prime.  "
},
{
  "id": "thm-irreducible-is-prime-in-pid",
  "level": "2",
  "url": "sec-pids.html#thm-irreducible-is-prime-in-pid",
  "type": "Theorem",
  "number": "11.24",
  "title": "Irreducible is Prime in PID.",
  "body": "Irreducible is Prime in PID   Let be a domain and let .   If is a prime element, then is irreducible.    If is a PID and is irreducible, then is a prime element.       Suppose is an integral domain and that is prime. Then and is not a unit. Suppose . Then and hence by definition either or . If , we have for some and so . Since , , and is an integral domain, we must have , showing that is a unit.  Assume is a PID and that is irreducible. Since is not a unit, is a proper ideal and hence is contained in a maximal ideal by Theorem . We show and hence is prime. Since is a PID, for some . So for some . But is irreducible and is not a unit, which forces to be a unit and hence .   "
},
{
  "id": "thm-factorizations-permutations-and-associates",
  "level": "2",
  "url": "sec-pids.html#thm-factorizations-permutations-and-associates",
  "type": "Theorem",
  "number": "11.25",
  "title": "Factorizations and Permutations.",
  "body": "Factorizations and Permutations   Assume is a PID is non zero and not a unit and are two different irreducible factorization of . Then and there is a permutation such that, for all , we have and are associates.    Without loss of generality, assume . We induct on .  If then as well since and would yield , a contradiction. If we have and there is nothing more to prove.  Assume and that irreducible factorizations with factors are unique up to reordering factors and taking associates.  Since is a PID, irreducible elements are prime by Theorem . Since we have that and since is a prime ideal it follows that for some . Upon reordering, we may as well assume . Thus for some . Since is irreducible and is not a unit, must be a unit. We get and hence, since is an integral domain, we may divide by to obtain Notice that is a prime ideal so is irreducible by Theorem .  By the inductive hypothesis we deduce that hence and also that are associates to in some order. This together with associate to establishes the claim.   "
},
{
  "id": "subsec-ufds",
  "level": "1",
  "url": "subsec-ufds.html",
  "type": "Section",
  "number": "11.3",
  "title": "Unique Factorization Domains",
  "body": "Unique Factorization Domains  Always remember that you are absolutely unique. Just like everyone else. Margaret Mead  UFD   A ring is called a unique factorization domain , or UFD for short, if is an integral domain and every element that is non-zero and not a unit can be written as a finite product of (not necessarily distinct) irreducible elements of in a way that is unique up to ordering and associates. That is, if also holds with each irreducible, then and there is a permutation such that, for all , we have and are associates.    Examples of UFDs    is a UFD by the Fundamental Theorem of Arithmetic.   where is a field is a UFD. This is the case because is a Euclidean domain and Euclidean domains are UFD's (we'll prove this shortly).  We will eventually prove that if is a UFD then so is . It follows that is a UFD for all . Note that if , this ring is not a PID and hence not a Euclidean domain.    is a UFD  is not a PID hence also not a Euclidean domain. For example, this can be seen because the ideal is not a principal ideal. It is a UFD because is a UFD (based on the result that if is a UFD then so is which we will prove shortly).  PIDs are UFDs   If is a PID then is a UFD.    Polynomial Rings over UFDs are UFDs   If is a UFD then so is .    "
},
{
  "id": "def-ufd",
  "level": "2",
  "url": "subsec-ufds.html#def-ufd",
  "type": "Definition",
  "number": "11.26",
  "title": "UFD.",
  "body": "UFD   A ring is called a unique factorization domain , or UFD for short, if is an integral domain and every element that is non-zero and not a unit can be written as a finite product of (not necessarily distinct) irreducible elements of in a way that is unique up to ordering and associates. That is, if also holds with each irreducible, then and there is a permutation such that, for all , we have and are associates.   "
},
{
  "id": "ex-ufd-exs",
  "level": "2",
  "url": "subsec-ufds.html#ex-ufd-exs",
  "type": "Example",
  "number": "11.27",
  "title": "Examples of UFDs.",
  "body": "Examples of UFDs    is a UFD by the Fundamental Theorem of Arithmetic.   where is a field is a UFD. This is the case because is a Euclidean domain and Euclidean domains are UFD's (we'll prove this shortly).  We will eventually prove that if is a UFD then so is . It follows that is a UFD for all . Note that if , this ring is not a PID and hence not a Euclidean domain.   "
},
{
  "id": "ex-zx-not-a-pid",
  "level": "2",
  "url": "subsec-ufds.html#ex-zx-not-a-pid",
  "type": "Exploration",
  "number": "11.28",
  "title": "<span class=\"process-math\">\\(\\Z[x]\\)<\/span> is a UFD.",
  "body": "is a UFD  is not a PID hence also not a Euclidean domain. For example, this can be seen because the ideal is not a principal ideal. It is a UFD because is a UFD (based on the result that if is a UFD then so is which we will prove shortly). "
},
{
  "id": "thm-pid-implies-ufd",
  "level": "2",
  "url": "subsec-ufds.html#thm-pid-implies-ufd",
  "type": "Theorem",
  "number": "11.29",
  "title": "PIDs are UFDs.",
  "body": "PIDs are UFDs   If is a PID then is a UFD.   "
},
{
  "id": "thm-polynomials-over-ufd-ufd",
  "level": "2",
  "url": "subsec-ufds.html#thm-polynomials-over-ufd-ufd",
  "type": "Theorem",
  "number": "11.30",
  "title": "Polynomial Rings over UFDs are UFDs.",
  "body": "Polynomial Rings over UFDs are UFDs   If is a UFD then so is .   "
},
{
  "id": "sec-field-of-fractions",
  "level": "1",
  "url": "sec-field-of-fractions.html",
  "type": "Section",
  "number": "11.4",
  "title": "Fields of Fractions",
  "body": "Fields of Fractions    Food is a common denominator for all people.   Guy Fieri   Multiplicately Closed Set   Suppose is a commutative ring and is a subset such that      ,     is closed under multiplication (i.e., if , then ), and     does not contain nor any zerodivisors.     Such a subset is called a multiplicatively closed subset of non zerodivisors of .    Examples of Multaplicatively Closed Sets  Two types of multiplicatively closed sets are most commonly used in practice:   If is a field then is a multiplicatively closed set of non zerodivisors.    If is an arbitrary ring with and is a non zerodivisor then the set of non negative powers of , , is multiplicatively closed.      Field of Fractions   If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the field of fractions  is the set of equivalence classes where the equivalence relation is defined by   From now on we just write instead of when dealing with fractions.  Addition and multiplication on are given by     Field of Fractions is a Field   If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the rules given in the above definition for and make into a field. Moreover, the function sending to is an injective ring homomorphism.    There is a lot of small things to check and we'll just do a few. Right off the bat we need to be sure the given equivalence relation really is one. The reflexive and symmetric properties are clear. But the proof of transitivity illustrates a key point: Say . Then and . We need to deduce that . The given equations imply and since is a nonzerodivisor we conclude . This is in fact the only time that the fact that consists of nonzerodivisors is used.  We also need to be sure our rules for and make sense and are independent of representation. They make sense since we assume is closed under . To show is independent of representations, say , so that . Then and and so we need to show . This is clear upon expaning out both sides and using . In a similar way one shows is well-defined.  From now on we just write instead of when dealing with fractions.  The associative and distributive axioms involve a straightfoward but tedious check, and we skip them entirely. The fact that and are commutative is clear from their definitions. is a group under addition since it has a element, namely , and , with the last equality holding since . The element is . (Note that we have used that a couple times here — indeed, without this assumption could be empty and then would be the empty set.)   being a domain means implies ( or ). The contrapositive to this statement is: if and then , which shows is a multiplicatively closed set of nonzerodivisors.  It remains only to show every non-zero element of is a unit. Given , note that and hence . So is also an element of . We have , where the last equation holds by the definition of .  The fact that is a ring homomorphism is straightforward to check. Its injective since implies .    Examples of Fields of Fractions     For a specific example, the field of fractions of is .    or another, if is a squarefree integer and is an integral domain and we will show soon that its field of fractions is (isomorphic to) the field .    For yet another, is an integral domain. Its field of fractions, usually denoted constists of all rational functions . This last example could be generalized by replacing with any field and also by using any number of variables.      "
},
{
  "id": "def-multiplicatively-closed",
  "level": "2",
  "url": "sec-field-of-fractions.html#def-multiplicatively-closed",
  "type": "Definition",
  "number": "11.31",
  "title": "Multiplicately Closed Set.",
  "body": "Multiplicately Closed Set   Suppose is a commutative ring and is a subset such that      ,     is closed under multiplication (i.e., if , then ), and     does not contain nor any zerodivisors.     Such a subset is called a multiplicatively closed subset of non zerodivisors of .   "
},
{
  "id": "example-69",
  "level": "2",
  "url": "sec-field-of-fractions.html#example-69",
  "type": "Example",
  "number": "11.32",
  "title": "Examples of Multaplicatively Closed Sets.",
  "body": "Examples of Multaplicatively Closed Sets  Two types of multiplicatively closed sets are most commonly used in practice:   If is a field then is a multiplicatively closed set of non zerodivisors.    If is an arbitrary ring with and is a non zerodivisor then the set of non negative powers of , , is multiplicatively closed.     "
},
{
  "id": "def-field-of-fractions",
  "level": "2",
  "url": "sec-field-of-fractions.html#def-field-of-fractions",
  "type": "Definition",
  "number": "11.33",
  "title": "Field of Fractions.",
  "body": "Field of Fractions   If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the field of fractions  is the set of equivalence classes where the equivalence relation is defined by   From now on we just write instead of when dealing with fractions.  Addition and multiplication on are given by    "
},
{
  "id": "thm-field-of-fractions-is-field",
  "level": "2",
  "url": "sec-field-of-fractions.html#thm-field-of-fractions-is-field",
  "type": "Theorem",
  "number": "11.34",
  "title": "Field of Fractions is a Field.",
  "body": "Field of Fractions is a Field   If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the rules given in the above definition for and make into a field. Moreover, the function sending to is an injective ring homomorphism.    There is a lot of small things to check and we'll just do a few. Right off the bat we need to be sure the given equivalence relation really is one. The reflexive and symmetric properties are clear. But the proof of transitivity illustrates a key point: Say . Then and . We need to deduce that . The given equations imply and since is a nonzerodivisor we conclude . This is in fact the only time that the fact that consists of nonzerodivisors is used.  We also need to be sure our rules for and make sense and are independent of representation. They make sense since we assume is closed under . To show is independent of representations, say , so that . Then and and so we need to show . This is clear upon expaning out both sides and using . In a similar way one shows is well-defined.  From now on we just write instead of when dealing with fractions.  The associative and distributive axioms involve a straightfoward but tedious check, and we skip them entirely. The fact that and are commutative is clear from their definitions. is a group under addition since it has a element, namely , and , with the last equality holding since . The element is . (Note that we have used that a couple times here — indeed, without this assumption could be empty and then would be the empty set.)   being a domain means implies ( or ). The contrapositive to this statement is: if and then , which shows is a multiplicatively closed set of nonzerodivisors.  It remains only to show every non-zero element of is a unit. Given , note that and hence . So is also an element of . We have , where the last equation holds by the definition of .  The fact that is a ring homomorphism is straightforward to check. Its injective since implies .   "
},
{
  "id": "example-70",
  "level": "2",
  "url": "sec-field-of-fractions.html#example-70",
  "type": "Example",
  "number": "11.35",
  "title": "Examples of Fields of Fractions.",
  "body": "Examples of Fields of Fractions     For a specific example, the field of fractions of is .    or another, if is a squarefree integer and is an integral domain and we will show soon that its field of fractions is (isomorphic to) the field .    For yet another, is an integral domain. Its field of fractions, usually denoted constists of all rational functions . This last example could be generalized by replacing with any field and also by using any number of variables.     "
},
{
  "id": "sec-defmod",
  "level": "1",
  "url": "sec-defmod.html",
  "type": "Section",
  "number": "12.1",
  "title": "Module Basics",
  "body": "Module Basics  Modules    Complexity that works is built up out of modules that work perfectly, layered one over the other.   Kevin Kelly   Module   Let be a ring (with ). A left -module is an abelian group together with a pairing , written , such that for all and     ,     ,     , and     .       Modules in Commutative Rings  If is a commutative ring, then any left -module may be regarded as a right -module by setting . Likewise, any right -module may be regarded as a left -module.    For non-commutative rings, left and right modules are not the same: trying to make a left -module into a right one by setting fails to satisfy the second axiom, since and , and, unless , we cannot conclude that .   Module and Opposite Ring  For a ring , recall the opposite ring, , as defined in . Given a left -module , prove that is a right -module via the same rule for addition but with the rule for scaling on the right defined to be for any and .   Arithmetic in Modules   Let be a ring and let be a (left) -module. Then for all and we have    ,     ,     , and     .         For the first, and hence .  For the second, and hence since is an abelian group.  For the third, (using the second) and hence is the additive inverse of .  Finally, (using the fact that holds in any ring and the previous result).      Examples of Modules    For any ring , the trivial module is with for any .  Every ring is a left module over itself with the rule for scaling given by the ring multiplication rule. It is also a right module over itself.  More generally, if is any ring and is a left ideal, then is a left- -module.  Let be a field and (the ring of matrices with entries in ). Let be the collection of column vectors with entries in having entries. The usual rules for adding column vectors and multiplying column vectors on the left by matrices make into a left -module. Likewise if is the collection of all row vector with entries in , the is a right -module via addition and matrix multiplication.     Standard Free Module  For a non-negative integer , the “standard\" free (left) -module of rank is the set equipped with the operations    Typically, one first encounters modules in an undergraduate linear algebra course: the vector spaces from linear algebra are modules over fields. Later we will see that vector spaces are much simpler modules than modules over other rings. So while one might take linear algebra and vector spaces as an inspiration for what to expect from a module, be warned that this perspective can often be deceiving.  Vector Space   Let be a field. An -vector space is a (left) -module.    Abelian Groups are -modules   Let be an abelian group under . Then becomes a -module upon defining the rule for scaling to be    for any and .    Modules  Let be a positive integer and recall that denotes the ring of integers modulo (whose elements I will write as ).   Show that if is any abelian group (under the operation ) such that for all (where ), then the pairing given makes into a -module. (Be sure to check this pairing is well-defined.)    Conversely, show that if is a -module, then the underlying abelian group has the property that for all .       Submodules and Restriction of Scalars    Restrictions will set you free.   W.A. Mathieu   For an -module the ring is often referred to as the ring of scalars for the module (by analogy to the vector space case). Given an action of a ring of scalars on a module, we can sometimes produce an action of a different ring of scalars on the same set, producing in effect a new module structure.  Restriction of Scalars   Let be a ring homomorphism. Any left -module may be regarded via restriction of scalars as a left -module with the following structure:   the rule for addition on is the same as in the original structure and    the rule for scaling by elements of is        Let and . One checks that the properties in the definition of module hold for the given action using properties of ring homomorphisms. In detail, since preserves addition, since preserves multiplication, and since preserves multiplicative identities. This gives three of the axioms. The final also holds:     As a special case of , if is a subring of , then every left -module becomes a left -module via restriction of scalars along the inclusion map of into . This explains the use of the phrase restriction of scalars .  Complex Vector Spaces are Real   For example, since is a subring of , every complex vector space may be regarded as a real vector space, by restriction of scalars from to . Likewise, any real vector space may be regarded as a rational vector space, etc.    Ring Maps and Restriction of Scalars   If and are rings and is a ring homomorphism, then since is a left -module, it is also a left -module via restriction of scalars. Note that the rule for scaling given by .  As a special case of this, if is a subring of a ring then is an -module (restriction of scalars along the inclusion map).  For instance, is a left -module for any via the evident injective ring homomorphism .  Also, is a left -module for given by the ring map sending to .    is an -module  If is a (two-sided) ideal of a ring then applying restriction of scalars along the quotient homomorphism gives that any left -module is also a left -module.  In particular, applying this to the -module gives that is a left -module. The rule for scaling is .   Submodule   Let be a ring and let be a left -module. An -submodule of is a subset such that    is a subgroup of under (so, we have , if then , and if then ), and     for all and .       We could equivalently define submodule to be a subset of that is an -module using the same operations of addition and scaling as in .  Let be an -module and be an ideal in . Show that the set is an -submodule of .  Submodules are Ideals   A subset of a ring is a (left) submodule of if and only if it is a (left) ideal.     Let be a commutative ring with . An -module is simple if it has no nontrivial submodules. Show that is simple if and only if there exists a maximal ideal of such that .    "
},
{
  "id": "def-module",
  "level": "2",
  "url": "sec-defmod.html#def-module",
  "type": "Definition",
  "number": "12.1",
  "title": "Module.",
  "body": "Module   Let be a ring (with ). A left -module is an abelian group together with a pairing , written , such that for all and     ,     ,     , and     .      "
},
{
  "id": "exe-lr-modules",
  "level": "2",
  "url": "sec-defmod.html#exe-lr-modules",
  "type": "Exploration",
  "number": "12.2",
  "title": "Modules in Commutative Rings.",
  "body": "Modules in Commutative Rings  If is a commutative ring, then any left -module may be regarded as a right -module by setting . Likewise, any right -module may be regarded as a left -module.  "
},
{
  "id": "remark-49",
  "level": "2",
  "url": "sec-defmod.html#remark-49",
  "type": "Remark",
  "number": "12.3",
  "title": "",
  "body": " For non-commutative rings, left and right modules are not the same: trying to make a left -module into a right one by setting fails to satisfy the second axiom, since and , and, unless , we cannot conclude that .  "
},
{
  "id": "exe-opposite-ring-module",
  "level": "2",
  "url": "sec-defmod.html#exe-opposite-ring-module",
  "type": "Exploration",
  "number": "12.4",
  "title": "Module and Opposite Ring.",
  "body": "Module and Opposite Ring  For a ring , recall the opposite ring, , as defined in . Given a left -module , prove that is a right -module via the same rule for addition but with the rule for scaling on the right defined to be for any and .  "
},
{
  "id": "lem-module-arithmetic",
  "level": "2",
  "url": "sec-defmod.html#lem-module-arithmetic",
  "type": "Lemma",
  "number": "12.5",
  "title": "Arithmetic in Modules.",
  "body": "Arithmetic in Modules   Let be a ring and let be a (left) -module. Then for all and we have    ,     ,     , and     .         For the first, and hence .  For the second, and hence since is an abelian group.  For the third, (using the second) and hence is the additive inverse of .  Finally, (using the fact that holds in any ring and the previous result).     "
},
{
  "id": "ex-modules",
  "level": "2",
  "url": "sec-defmod.html#ex-modules",
  "type": "Example",
  "number": "12.6",
  "title": "Examples of Modules.",
  "body": "Examples of Modules    For any ring , the trivial module is with for any .  Every ring is a left module over itself with the rule for scaling given by the ring multiplication rule. It is also a right module over itself.  More generally, if is any ring and is a left ideal, then is a left- -module.  Let be a field and (the ring of matrices with entries in ). Let be the collection of column vectors with entries in having entries. The usual rules for adding column vectors and multiplying column vectors on the left by matrices make into a left -module. Likewise if is the collection of all row vector with entries in , the is a right -module via addition and matrix multiplication.    "
},
{
  "id": "ex-standard-free-module",
  "level": "2",
  "url": "sec-defmod.html#ex-standard-free-module",
  "type": "Example",
  "number": "12.7",
  "title": "Standard Free Module.",
  "body": "Standard Free Module  For a non-negative integer , the “standard\" free (left) -module of rank is the set equipped with the operations   "
},
{
  "id": "def-vector-space",
  "level": "2",
  "url": "sec-defmod.html#def-vector-space",
  "type": "Definition",
  "number": "12.8",
  "title": "Vector Space.",
  "body": "Vector Space   Let be a field. An -vector space is a (left) -module.   "
},
{
  "id": "thm-abelian-groups-are-z-modules",
  "level": "2",
  "url": "sec-defmod.html#thm-abelian-groups-are-z-modules",
  "type": "Theorem",
  "number": "12.9",
  "title": "Abelian Groups are <span class=\"process-math\">\\(\\Z\\)<\/span>-modules.",
  "body": "Abelian Groups are -modules   Let be an abelian group under . Then becomes a -module upon defining the rule for scaling to be    for any and .   "
},
{
  "id": "exe-zn-modules",
  "level": "2",
  "url": "sec-defmod.html#exe-zn-modules",
  "type": "Exploration",
  "number": "12.10",
  "title": "<span class=\"process-math\">\\(\\Z\/n\\)<\/span> Modules.",
  "body": "Modules  Let be a positive integer and recall that denotes the ring of integers modulo (whose elements I will write as ).   Show that if is any abelian group (under the operation ) such that for all (where ), then the pairing given makes into a -module. (Be sure to check this pairing is well-defined.)    Conversely, show that if is a -module, then the underlying abelian group has the property that for all .     "
},
{
  "id": "thm-restriction-of-scalars",
  "level": "2",
  "url": "sec-defmod.html#thm-restriction-of-scalars",
  "type": "Theorem",
  "number": "12.11",
  "title": "Restriction of Scalars.",
  "body": "Restriction of Scalars   Let be a ring homomorphism. Any left -module may be regarded via restriction of scalars as a left -module with the following structure:   the rule for addition on is the same as in the original structure and    the rule for scaling by elements of is        Let and . One checks that the properties in the definition of module hold for the given action using properties of ring homomorphisms. In detail, since preserves addition, since preserves multiplication, and since preserves multiplicative identities. This gives three of the axioms. The final also holds:    "
},
{
  "id": "ex-complex-vector-spaces-are-real-vector-spaces",
  "level": "2",
  "url": "sec-defmod.html#ex-complex-vector-spaces-are-real-vector-spaces",
  "type": "Example",
  "number": "12.12",
  "title": "Complex Vector Spaces are Real.",
  "body": "Complex Vector Spaces are Real   For example, since is a subring of , every complex vector space may be regarded as a real vector space, by restriction of scalars from to . Likewise, any real vector space may be regarded as a rational vector space, etc.   "
},
{
  "id": "ex-homomorphisms-and-restriction-of-scalars",
  "level": "2",
  "url": "sec-defmod.html#ex-homomorphisms-and-restriction-of-scalars",
  "type": "Example",
  "number": "12.13",
  "title": "Ring Maps and Restriction of Scalars.",
  "body": "Ring Maps and Restriction of Scalars   If and are rings and is a ring homomorphism, then since is a left -module, it is also a left -module via restriction of scalars. Note that the rule for scaling given by .  As a special case of this, if is a subring of a ring then is an -module (restriction of scalars along the inclusion map).  For instance, is a left -module for any via the evident injective ring homomorphism .  Also, is a left -module for given by the ring map sending to .   "
},
{
  "id": "exe-ri-module-is-an-r-module",
  "level": "2",
  "url": "sec-defmod.html#exe-ri-module-is-an-r-module",
  "type": "Example",
  "number": "12.14",
  "title": "<span class=\"process-math\">\\(R\/I\\)<\/span> is an <span class=\"process-math\">\\(R\\)<\/span>-module.",
  "body": "is an -module  If is a (two-sided) ideal of a ring then applying restriction of scalars along the quotient homomorphism gives that any left -module is also a left -module.  In particular, applying this to the -module gives that is a left -module. The rule for scaling is .  "
},
{
  "id": "def-submodule",
  "level": "2",
  "url": "sec-defmod.html#def-submodule",
  "type": "Definition",
  "number": "12.15",
  "title": "Submodule.",
  "body": "Submodule   Let be a ring and let be a left -module. An -submodule of is a subset such that    is a subgroup of under (so, we have , if then , and if then ), and     for all and .      "
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "sec-defmod.html#exercise-91",
  "type": "Exploration",
  "number": "12.16",
  "title": "",
  "body": "Let be an -module and be an ideal in . Show that the set is an -submodule of . "
},
{
  "id": "thm-submodules-are-ideals",
  "level": "2",
  "url": "sec-defmod.html#thm-submodules-are-ideals",
  "type": "Theorem",
  "number": "12.17",
  "title": "Submodules are Ideals.",
  "body": "Submodules are Ideals   A subset of a ring is a (left) submodule of if and only if it is a (left) ideal.   "
},
{
  "id": "exercise-92",
  "level": "2",
  "url": "sec-defmod.html#exercise-92",
  "type": "Exploration",
  "number": "12.18",
  "title": "",
  "body": " Let be a commutative ring with . An -module is simple if it has no nontrivial submodules. Show that is simple if and only if there exists a maximal ideal of such that .  "
},
{
  "id": "sec-modhom",
  "level": "1",
  "url": "sec-modhom.html",
  "type": "Section",
  "number": "12.2",
  "title": "Module Homomorphisms",
  "body": "Module Homomorphisms  Homomorphisms and Isomorphisms    Transformation rarely happens accidentally.   A.J. Sheppard   Module Homomorphism   Let be a ring and let and be -modules. An -module homomorphism from to sometimes called an - map , is a function such that for all and we have    , i.e. is an additive group homomorphism, and     .         .   The condition says that is a homomorphism of abelian groups.    Unlike its group or ring counterparts, a module homomorphism does not need to map to .   When the ring of scalars is a field, special terminology is used:  Linear Transformation   Let be a field and let and be vector spaces over . A linear transformation from to is an -module homomorphism .      Let be a commutative ring and be an -module. For each , the multiplication map given by is a homomorphism of -modules.    Indeed, by the definition of -module we have and     Module Isomorphism   An -module homomorphism is an -module isomorphism if there is another -module homomorphism such that and .    To check that an -module homomorphism is an isomorphism, it is sufficient to check that it is bijective.  Module Isomorphisms and Bijections   Given a ring , -modules and , and a -module homomorphism , is an -module isomorphism if and only if is a bijection.    One can think of a module isomorphism as a relabelling of the names of the elements of the module. If two modules are isomorphic, that means that they are essentially the same, up to renaming the elements.  Kernel   The kernel of an -module homomorphism is the set      Let be a ring with , let be an -module, and let be an -submodule of . Then the inclusion map is an -module homomorphism.   Cokernel   The cokernel of an -module homomorphism is the set    Kernels and Images are Submodules   Let be a ring and let be an -module homomorphism. Then    is an -submodule of and     is an -submodule of .        and    All good things must come to an    Geoffrey Chaucer   and   Let be a ring and let and be -modules. Then denotes the set of all -module homomorphisms from to , and denotes the set . We call the endomorphism ring of , and elements of are called endomorphisms of .         is a ring.     is not a ring.        Let and be -modules over a commutative ring . Then is an -module using the following structure: Given , is the map defined by , and given and , is the -module homomorphism defined by The zero element of is the zero map.     We will see later that for an -dimensional vector space over a field , there is an isomorphism of vector spaces . This says that every linear transformation corresponds to some matrix. However, the story for general -modules is a lot more complicated.     For any commutative ring with and any -module there is an isomorphism of -modules .    in Eloísa notes     Show that for every nonzero integers and there is a -module isomorphism .     Let be a commutative ring. Given an -module , its annihilator is the ideal Show that if there is an isomorphism of -modules , then .     Quotient Modules    The best way to solve a problem is to remove its cause.   Martin Luther King Jr.   Quotient Module   Let be a ring, let be an -module, and let be a submodule of . The quotient module  is the quotient group under (so elements of are additive cosets of the form with and addition is defined by ) and with the rule for scaling by defined to be for all and .    Quotient Modules are Well Defined   Let be a ring, let be an -module, and let be a submodule of . The rule for scaling introduced above is well-defined and it, along with the rule for , makes into an -module.    Module Quotient Map   Let be a ring, let be an -module, and let be a submodule of . Define the canonical quotient map  by .    Quotient Map is an -map   Let be a ring, let be an -module, and let be a submodule of .   The quotient map is a n -module homomorphism     .       Among the many things to check here, we will only check a couple.  We need to prove the rule for scaling by on is well-defined: If then so by the definition of submodule. This gives that , hence . The module axioms are then pretty straightforward. We already know from 817 that is an abelian group under .  Let us check one of the four axioms involving scaling. We have which gives the third such axiom. The other three are also straightforward.  The fact that is an -module homomorphism is also straightforward. Its kernel is , which is equal to .    -modules and Quotients  Recall that -modules are the same as abelian groups by . Submodules and quotient -modules are the same things as subgroups and quotients of abelian groups.   Module Isomorphism Theorems   Let be a ring, and let be a -module.  UMP for Quotient Modules  Let be a submodule of , let be an -module, and let be an -module homomorphism. If (i.e., if ) then the function given by is a well-defined, -module homomorphism. In fact, is the unique -module homomorphism such that where denotes the canonical surjection .   First Isomorphism Theorem  Let be an -module and let be an -module homomorphism. Then is a submodule of and there is an -module isomorphism given by .   Second Isomorphism Theorem  Let and be submodules of , and define . Then is a submodule of , is a submodule of , and there is an -module isomorphism .   Third Isomorphism Theorem  Let and be submodules of with . Then is a submodule of and there is an -module isomorphism given by sending to .   Lattice Isomorphism Theorem  Let be a ring, let be a R-submodule of , and let be the canonical quotient map. Then the function defined by is a bijection, with inverse given by for each submodule of . Moreover, and preserve sums and intersections.       Ignoring the rules for scaling by , we know each of the first four results holds for abelian groups (and the maps are the same). So, we merely need to prove that the rules for scaling are respected in each case. In more detail:  For the UMP, we already know that is a well-defined homomorphism of groups under and that it is the unique one such that . It remains only to show preserves scaling: This follows quickly from the definitions: where the third equation uses that preserves scaling.  For the First Isomorphism Theorem, we already know that there is an isomorphism of abelian groups under , given by , and it remains only to show this map preserves scaling. This is a special case of what we proved in part (0).  For the second isomorphism theorem, we need to first check that and are submodules. From 817 we already know they are subgroups under , and it is evident from the definitions that each is closed under scaling by elements of . Now, we know from 817 that there is an isomorphism of abelian groups given by . It remains only to show preserves scaling:   For the third, we already know (from 817) that is a subgroup of under . Given and we have which belongs to since . This proves is a submodule of . Also from 817 we know there is an isomorphism of abelian groups given by and it remains only to show it is -linear: .  The Lattice Theorem is the most complicaed to gerenlize. From 817 we know thre is a bijection between the set of subgroups of and that contain and subgroups of the quotient group , and the maps are the same as given in the statment. We just need to prove that these maps send submodules to submodules. If is a submodule of containing , then by part (3) we know is a submodule of .  If is a submodule of , then is an abelian group. For adn we have and hence too, since is a submodule. This proves is a submodule.     "
},
{
  "id": "def-module-homomorphism",
  "level": "2",
  "url": "sec-modhom.html#def-module-homomorphism",
  "type": "Definition",
  "number": "12.19",
  "title": "Module Homomorphism.",
  "body": "Module Homomorphism   Let be a ring and let and be -modules. An -module homomorphism from to sometimes called an - map , is a function such that for all and we have    , i.e. is an additive group homomorphism, and     .      "
},
{
  "id": "exercise-93",
  "level": "2",
  "url": "sec-modhom.html#exercise-93",
  "type": "Exploration",
  "number": "12.20",
  "title": "",
  "body": "  .   The condition says that is a homomorphism of abelian groups.  "
},
{
  "id": "remark-50",
  "level": "2",
  "url": "sec-modhom.html#remark-50",
  "type": "Remark",
  "number": "12.21",
  "title": "",
  "body": " Unlike its group or ring counterparts, a module homomorphism does not need to map to .  "
},
{
  "id": "def-linear-transformation",
  "level": "2",
  "url": "sec-modhom.html#def-linear-transformation",
  "type": "Definition",
  "number": "12.22",
  "title": "Linear Transformation.",
  "body": "Linear Transformation   Let be a field and let and be vector spaces over . A linear transformation from to is an -module homomorphism .   "
},
{
  "id": "example-76",
  "level": "2",
  "url": "sec-modhom.html#example-76",
  "type": "Example",
  "number": "12.23",
  "title": "",
  "body": "  Let be a commutative ring and be an -module. For each , the multiplication map given by is a homomorphism of -modules.    Indeed, by the definition of -module we have and    "
},
{
  "id": "def-module-isomorphism",
  "level": "2",
  "url": "sec-modhom.html#def-module-isomorphism",
  "type": "Definition",
  "number": "12.24",
  "title": "Module Isomorphism.",
  "body": "Module Isomorphism   An -module homomorphism is an -module isomorphism if there is another -module homomorphism such that and .   "
},
{
  "id": "thm-module-isomorphisms-and-bijections",
  "level": "2",
  "url": "sec-modhom.html#thm-module-isomorphisms-and-bijections",
  "type": "Theorem",
  "number": "12.25",
  "title": "Module Isomorphisms and Bijections.",
  "body": "Module Isomorphisms and Bijections   Given a ring , -modules and , and a -module homomorphism , is an -module isomorphism if and only if is a bijection.   "
},
{
  "id": "def-r-map-ker",
  "level": "2",
  "url": "sec-modhom.html#def-r-map-ker",
  "type": "Definition",
  "number": "12.26",
  "title": "Kernel.",
  "body": "Kernel   The kernel of an -module homomorphism is the set    "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "sec-modhom.html#exercise-94",
  "type": "Exploration",
  "number": "12.27",
  "title": "",
  "body": " Let be a ring with , let be an -module, and let be an -submodule of . Then the inclusion map is an -module homomorphism.  "
},
{
  "id": "def-cokernel",
  "level": "2",
  "url": "sec-modhom.html#def-cokernel",
  "type": "Definition",
  "number": "12.28",
  "title": "Cokernel.",
  "body": "Cokernel   The cokernel of an -module homomorphism is the set   "
},
{
  "id": "thm-kernels-and-images-of-homomorphisms-are-submodule",
  "level": "2",
  "url": "sec-modhom.html#thm-kernels-and-images-of-homomorphisms-are-submodule",
  "type": "Theorem",
  "number": "12.29",
  "title": "Kernels and Images are Submodules.",
  "body": "Kernels and Images are Submodules   Let be a ring and let be an -module homomorphism. Then    is an -submodule of and     is an -submodule of .      "
},
{
  "id": "def-r-mod-hom",
  "level": "2",
  "url": "sec-modhom.html#def-r-mod-hom",
  "type": "Definition",
  "number": "12.30",
  "title": "<span class=\"process-math\">\\(\\Hom\\)<\/span> and <span class=\"process-math\">\\(\\End\\)<\/span>.",
  "body": "and   Let be a ring and let and be -modules. Then denotes the set of all -module homomorphisms from to , and denotes the set . We call the endomorphism ring of , and elements of are called endomorphisms of .   "
},
{
  "id": "exercise-95",
  "level": "2",
  "url": "sec-modhom.html#exercise-95",
  "type": "Exploration",
  "number": "12.31",
  "title": "",
  "body": "     is a ring.     is not a ring.     "
},
{
  "id": "prop-hom-module",
  "level": "2",
  "url": "sec-modhom.html#prop-hom-module",
  "type": "Proposition",
  "number": "12.32",
  "title": "",
  "body": "  Let and be -modules over a commutative ring . Then is an -module using the following structure: Given , is the map defined by , and given and , is the -module homomorphism defined by The zero element of is the zero map.   "
},
{
  "id": "remark-51",
  "level": "2",
  "url": "sec-modhom.html#remark-51",
  "type": "Remark",
  "number": "12.33",
  "title": "",
  "body": " We will see later that for an -dimensional vector space over a field , there is an isomorphism of vector spaces . This says that every linear transformation corresponds to some matrix. However, the story for general -modules is a lot more complicated.  "
},
{
  "id": "thm-hom-iso",
  "level": "2",
  "url": "sec-modhom.html#thm-hom-iso",
  "type": "Theorem",
  "number": "12.34",
  "title": "",
  "body": "  For any commutative ring with and any -module there is an isomorphism of -modules .    in Eloísa notes   "
},
{
  "id": "exercise-96",
  "level": "2",
  "url": "sec-modhom.html#exercise-96",
  "type": "Exploration",
  "number": "12.35",
  "title": "",
  "body": " Show that for every nonzero integers and there is a -module isomorphism .  "
},
{
  "id": "proposition-34",
  "level": "2",
  "url": "sec-modhom.html#proposition-34",
  "type": "Proposition",
  "number": "12.36",
  "title": "",
  "body": "  Let be a commutative ring. Given an -module , its annihilator is the ideal Show that if there is an isomorphism of -modules , then .   "
},
{
  "id": "def-quotient-module",
  "level": "2",
  "url": "sec-modhom.html#def-quotient-module",
  "type": "Definition",
  "number": "12.37",
  "title": "Quotient Module.",
  "body": "Quotient Module   Let be a ring, let be an -module, and let be a submodule of . The quotient module  is the quotient group under (so elements of are additive cosets of the form with and addition is defined by ) and with the rule for scaling by defined to be for all and .   "
},
{
  "id": "thm-quotient-module-well-defined",
  "level": "2",
  "url": "sec-modhom.html#thm-quotient-module-well-defined",
  "type": "Theorem",
  "number": "12.38",
  "title": "Quotient Modules are Well Defined.",
  "body": "Quotient Modules are Well Defined   Let be a ring, let be an -module, and let be a submodule of . The rule for scaling introduced above is well-defined and it, along with the rule for , makes into an -module.   "
},
{
  "id": "def-module-quotient-map",
  "level": "2",
  "url": "sec-modhom.html#def-module-quotient-map",
  "type": "Definition",
  "number": "12.39",
  "title": "Module Quotient Map.",
  "body": "Module Quotient Map   Let be a ring, let be an -module, and let be a submodule of . Define the canonical quotient map  by .   "
},
{
  "id": "prop-quotient-map-is-r-module-homomorphism",
  "level": "2",
  "url": "sec-modhom.html#prop-quotient-map-is-r-module-homomorphism",
  "type": "Proposition",
  "number": "12.40",
  "title": "Quotient Map is an <span class=\"process-math\">\\(R\\)<\/span>-map.",
  "body": "Quotient Map is an -map   Let be a ring, let be an -module, and let be a submodule of .   The quotient map is a n -module homomorphism     .       Among the many things to check here, we will only check a couple.  We need to prove the rule for scaling by on is well-defined: If then so by the definition of submodule. This gives that , hence . The module axioms are then pretty straightforward. We already know from 817 that is an abelian group under .  Let us check one of the four axioms involving scaling. We have which gives the third such axiom. The other three are also straightforward.  The fact that is an -module homomorphism is also straightforward. Its kernel is , which is equal to .   "
},
{
  "id": "exe-z-modules-and-quotients",
  "level": "2",
  "url": "sec-modhom.html#exe-z-modules-and-quotients",
  "type": "Example",
  "number": "12.41",
  "title": "<span class=\"process-math\">\\(\\Z\\)<\/span>-modules and Quotients.",
  "body": "-modules and Quotients  Recall that -modules are the same as abelian groups by . Submodules and quotient -modules are the same things as subgroups and quotients of abelian groups.  "
},
{
  "id": "thm-module-isomorphism-thms",
  "level": "2",
  "url": "sec-modhom.html#thm-module-isomorphism-thms",
  "type": "Theorem",
  "number": "12.42",
  "title": "Module Isomorphism Theorems.",
  "body": "Module Isomorphism Theorems   Let be a ring, and let be a -module.  UMP for Quotient Modules  Let be a submodule of , let be an -module, and let be an -module homomorphism. If (i.e., if ) then the function given by is a well-defined, -module homomorphism. In fact, is the unique -module homomorphism such that where denotes the canonical surjection .   First Isomorphism Theorem  Let be an -module and let be an -module homomorphism. Then is a submodule of and there is an -module isomorphism given by .   Second Isomorphism Theorem  Let and be submodules of , and define . Then is a submodule of , is a submodule of , and there is an -module isomorphism .   Third Isomorphism Theorem  Let and be submodules of with . Then is a submodule of and there is an -module isomorphism given by sending to .   Lattice Isomorphism Theorem  Let be a ring, let be a R-submodule of , and let be the canonical quotient map. Then the function defined by is a bijection, with inverse given by for each submodule of . Moreover, and preserve sums and intersections.       Ignoring the rules for scaling by , we know each of the first four results holds for abelian groups (and the maps are the same). So, we merely need to prove that the rules for scaling are respected in each case. In more detail:  For the UMP, we already know that is a well-defined homomorphism of groups under and that it is the unique one such that . It remains only to show preserves scaling: This follows quickly from the definitions: where the third equation uses that preserves scaling.  For the First Isomorphism Theorem, we already know that there is an isomorphism of abelian groups under , given by , and it remains only to show this map preserves scaling. This is a special case of what we proved in part (0).  For the second isomorphism theorem, we need to first check that and are submodules. From 817 we already know they are subgroups under , and it is evident from the definitions that each is closed under scaling by elements of . Now, we know from 817 that there is an isomorphism of abelian groups given by . It remains only to show preserves scaling:   For the third, we already know (from 817) that is a subgroup of under . Given and we have which belongs to since . This proves is a submodule of . Also from 817 we know there is an isomorphism of abelian groups given by and it remains only to show it is -linear: .  The Lattice Theorem is the most complicaed to gerenlize. From 817 we know thre is a bijection between the set of subgroups of and that contain and subgroups of the quotient group , and the maps are the same as given in the statment. We just need to prove that these maps send submodules to submodules. If is a submodule of containing , then by part (3) we know is a submodule of .  If is a submodule of , then is an abelian group. For adn we have and hence too, since is a submodule. This proves is a submodule.   "
},
{
  "id": "sec-linear",
  "level": "1",
  "url": "sec-linear.html",
  "type": "Section",
  "number": "12.3",
  "title": "Linear Independence",
  "body": "Linear Independence    You need to learn independence. You have to be independent - it builds character.   Mike Tyson   Linear Combination   Let be an -module and . An - linear combination of is an element of of the form for some and . (If , this gives the empty sum which is interpreted to give .)     If is an -vector space, one usually uses the term spanned by instead of the term generated by by.   Smallest Submodule of Containing   For any subset of a -module , the subset is indeed a submodule of , and it is the smallest submodule of that contains as a subset. In fact, we have     Finitely Generated Module   A module is finitely generated if there exists some finite subset of such that .     For any -module , we have . This is because the empty sum is interpreted as giving .   Cyclic Module   If for some single element , we say that is cyclic .    Cyclic -module  If , then (recalling that a -module is the same thing as an abelian group) we see that is a cyclic -module if and only if is a cyclic group.   Cyclic Modules and Ideals  Show that the left -module is cyclic if and only if there exists a left ideal of such that .     Let be a commutative a ring. Let be an -module, an ideal in , and let which is an -submodule of by Problem 1. Show that     Standard Free Module Finitely Generated  Let be a ring. The standard free -module of rank , , is finitely generated, since it is generated by where , with a in the -th position. This holds since given any element of we have .  In particular, taking , is cyclic as a module over itself, since . More generally, for any (two sided) ideal , is a cyclic left -module, generated by .   Linearly Independent   Let be an -module and let be a subset of . The set is linearly independent if whenever and are distinct elements of satisfying , then . Equivalently, is linearly independent if and only if given any equation of the form where for all and for all but a finite number of s, we must have for all .    Linearly Dependent   Let be an -module and let be a subset of . The set is linearly dependent if and only if there is an equation of the form where for all , for all but a finite number of s, and for at least one .     The empty subset of any module is linearly independent (vacuously).   One Element Subsets of -Modules  A one element subset of an -module is linearly independent if and only if whenever , we have .  But it is possible for one elements subsets to be linearly dependent: For example, let be any ring and and (two-sided) ideal such that . Then I claim that every non-empty subset of is linearly dependent. For say is a such a nonempty subset. For any , pick any such that . Then (since for some and hence ) and this shows is linearly dependent. In particular, even a one-element subset of is linearly dependent.   Linearly Independent in  The singleton is a linearly independent subset of the -module . But it does not generate all of . The subset does generate all of , but it is not linearly independent, since . More on this later.   "
},
{
  "id": "def-linear-combination",
  "level": "2",
  "url": "sec-linear.html#def-linear-combination",
  "type": "Definition",
  "number": "12.43",
  "title": "Linear Combination.",
  "body": "Linear Combination   Let be an -module and . An - linear combination of is an element of of the form for some and . (If , this gives the empty sum which is interpreted to give .)   "
},
{
  "id": "remark-52",
  "level": "2",
  "url": "sec-linear.html#remark-52",
  "type": "Remark",
  "number": "12.44",
  "title": "",
  "body": " If is an -vector space, one usually uses the term spanned by instead of the term generated by by.  "
},
{
  "id": "lem-rcdot-a-smallest-submodule-of-m-containing-a",
  "level": "2",
  "url": "sec-linear.html#lem-rcdot-a-smallest-submodule-of-m-containing-a",
  "type": "Lemma",
  "number": "12.45",
  "title": "<span class=\"process-math\">\\(R\\cdot A\\)<\/span> Smallest Submodule of <span class=\"process-math\">\\(M\\)<\/span> Containing <span class=\"process-math\">\\(A\\)<\/span>.",
  "body": "Smallest Submodule of Containing   For any subset of a -module , the subset is indeed a submodule of , and it is the smallest submodule of that contains as a subset. In fact, we have    "
},
{
  "id": "def-finitely-generated-module",
  "level": "2",
  "url": "sec-linear.html#def-finitely-generated-module",
  "type": "Definition",
  "number": "12.46",
  "title": "Finitely Generated Module.",
  "body": "Finitely Generated Module   A module is finitely generated if there exists some finite subset of such that .   "
},
{
  "id": "remark-53",
  "level": "2",
  "url": "sec-linear.html#remark-53",
  "type": "Remark",
  "number": "12.47",
  "title": "",
  "body": " For any -module , we have . This is because the empty sum is interpreted as giving .  "
},
{
  "id": "def-cyclic-module",
  "level": "2",
  "url": "sec-linear.html#def-cyclic-module",
  "type": "Definition",
  "number": "12.48",
  "title": "Cyclic Module.",
  "body": "Cyclic Module   If for some single element , we say that is cyclic .   "
},
{
  "id": "exe-cyclic-z-module",
  "level": "2",
  "url": "sec-linear.html#exe-cyclic-z-module",
  "type": "Example",
  "number": "12.49",
  "title": "Cyclic <span class=\"process-math\">\\(\\Z\\)<\/span>-module.",
  "body": "Cyclic -module  If , then (recalling that a -module is the same thing as an abelian group) we see that is a cyclic -module if and only if is a cyclic group.  "
},
{
  "id": "exercise-97",
  "level": "2",
  "url": "sec-linear.html#exercise-97",
  "type": "Exploration",
  "number": "12.50",
  "title": "Cyclic Modules and Ideals.",
  "body": "Cyclic Modules and Ideals  Show that the left -module is cyclic if and only if there exists a left ideal of such that .  "
},
{
  "id": "proposition-36",
  "level": "2",
  "url": "sec-linear.html#proposition-36",
  "type": "Proposition",
  "number": "12.51",
  "title": "",
  "body": "  Let be a commutative a ring. Let be an -module, an ideal in , and let which is an -submodule of by Problem 1. Show that    "
},
{
  "id": "ex-standard-free-module-finitely-generated",
  "level": "2",
  "url": "sec-linear.html#ex-standard-free-module-finitely-generated",
  "type": "Example",
  "number": "12.52",
  "title": "Standard Free Module Finitely Generated.",
  "body": "Standard Free Module Finitely Generated  Let be a ring. The standard free -module of rank , , is finitely generated, since it is generated by where , with a in the -th position. This holds since given any element of we have .  In particular, taking , is cyclic as a module over itself, since . More generally, for any (two sided) ideal , is a cyclic left -module, generated by .  "
},
{
  "id": "def-linearly-independent",
  "level": "2",
  "url": "sec-linear.html#def-linearly-independent",
  "type": "Definition",
  "number": "12.53",
  "title": "Linearly Independent.",
  "body": "Linearly Independent   Let be an -module and let be a subset of . The set is linearly independent if whenever and are distinct elements of satisfying , then . Equivalently, is linearly independent if and only if given any equation of the form where for all and for all but a finite number of s, we must have for all .   "
},
{
  "id": "def-linearly-dependent",
  "level": "2",
  "url": "sec-linear.html#def-linearly-dependent",
  "type": "Definition",
  "number": "12.54",
  "title": "Linearly Dependent.",
  "body": "Linearly Dependent   Let be an -module and let be a subset of . The set is linearly dependent if and only if there is an equation of the form where for all , for all but a finite number of s, and for at least one .   "
},
{
  "id": "remark-54",
  "level": "2",
  "url": "sec-linear.html#remark-54",
  "type": "Remark",
  "number": "12.55",
  "title": "",
  "body": " The empty subset of any module is linearly independent (vacuously).  "
},
{
  "id": "ex-one-element-subsets-of-r-mods",
  "level": "2",
  "url": "sec-linear.html#ex-one-element-subsets-of-r-mods",
  "type": "Example",
  "number": "12.56",
  "title": "One Element Subsets of <span class=\"process-math\">\\(R\\)<\/span>-Modules.",
  "body": "One Element Subsets of -Modules  A one element subset of an -module is linearly independent if and only if whenever , we have .  But it is possible for one elements subsets to be linearly dependent: For example, let be any ring and and (two-sided) ideal such that . Then I claim that every non-empty subset of is linearly dependent. For say is a such a nonempty subset. For any , pick any such that . Then (since for some and hence ) and this shows is linearly dependent. In particular, even a one-element subset of is linearly dependent.  "
},
{
  "id": "exe-3-linearly-independent-in-z",
  "level": "2",
  "url": "sec-linear.html#exe-3-linearly-independent-in-z",
  "type": "Example",
  "number": "12.57",
  "title": "<span class=\"process-math\">\\(\\{3\\}\\)<\/span> Linearly Independent in <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Linearly Independent in  The singleton is a linearly independent subset of the -module . But it does not generate all of . The subset does generate all of , but it is not linearly independent, since . More on this later.  "
},
{
  "id": "sec-modgen",
  "level": "1",
  "url": "sec-modgen.html",
  "type": "Section",
  "number": "12.4",
  "title": "Generated Modules",
  "body": "Generated Modules    A peaceful mind generates power.   Normal Vincent Peale   Finite Generation and Quotient Modules   Let be a ring with . Prove that if is an -module and is a submodule of such that and are finitely generated, then is finitely generated.    Every Cyclic -module to for some   Every cyclic -module is isomorphic to for some left ideal .    Say is cyclic and is a generator of , so that . Define to be the unique -map with . Here I am applying the UMP for bases, using that is a basis of as a left -modules. More explicitly, for all . Then is onto, since generates . Its kernel is a left ideal of , since submodules of are the same thing as left ideals. By the FIT, there is an isomorphism sending to .      Let be a ring. Recall that we proved in class that every cyclic -module is isomorphic to for some left ideal . Prove the left ideal occurring this statement is unique; that is, if a cyclic -module is isomorphic to and for left ideals and , then .     More generally, the same argument shows that if is a finitely generated module, say generated by elements, then for some submodule of .   is an -module   For a commutative ring , module and ideal , the rules for addition in and scaling by on introduced above make into an -module.  Moreover, given another -module and an -map , the function given by is a well-defined -module homomorphism.  Finally, if is yet another -module homomorphism, then , and we also have for any -module .    I leave some of the details as an exercise, but I will check a few of the necessary things:  We already showed that the rule for scaling is well defined, and we know from 817 that the rule for addition is well-defined and that is an abelian group. To show is an -module, there remain four axioms to verify. For instance, which verifies one of them; the other proofs are similar.  Next, let me verify that the function is a well-defined -map: Let be the composition of -maps (the second one being the canonical one), so that . Since for any 's belonging to and 's belonging to , we have . By the UMP for quotient modules, there is an induced -map given by . The map is so far only known to be an -map, but it is in fact an -map since The final assertions are clear from the formula for for an -map .     The Lemma shows that the rules and determine what is known as a functor from the category of -modules to the category of -modules.   Maximal Ideals and Vector Spaces  Suppose is a maximal ideal of a commutative ring . Then is a field, and given an -module , is a module over the field ; i.e., it is a vector space over this field. Moreover, if is an -map then is an -linear transformation.     Let be a non-zero commutative ring and suppose is a surjective homomorphism of -modules for some non-negative integers and .   Prove that if is a field, then .    Prove that if is any non-zero commutative ring, then .       Finitely Generated Modules and Submodules   Let be a ring, let be a left -module and let be a left -submodule.   Prove that if is finitely generated (as an -module), then so is .    Prove that if and are both finitely generated, then so is .    Prove the converse to the previous part is false, as follows: Let be a field and , the ring of polynomials in the infinite list of variables . (So, an element of is a {} -linear combination of monomials of the form for and . Note that each element of involves only a finite number of variables, but there is no uniform bound on how many such variables can be involved in the elements of .) You may assume without proof that is a ring with the usual rules for adding and multiplying polynomials, which make sense since each element of involves only a finite number of variables. Finally let be the ideal of generated by the variables . Prove is finitely generated as an -module but the submodule is not.       Split Surjection   Let be a ring, and left -modules, and an -module homomorphism. Assume that is surjective. We say is a split surjection if there exists an -module homomorphism such that (i.e., for all ).   Prove that if is free, then every surjective -module homomorphism of the form is a split surjection.    By giving an explicit example with justification, show the statement in part (1) would become false if were not assumed to be free.       Split Injection   Assume is a ring, an -module, and an injective -module homomorphism. We say is a split injection if there exists an -module homomorphism such that (i.e., for all ).       Prove that if is a field, is a subspace (i.e., submodule) of , and is the inclusion map, then is a split injection. Note that since is the inclusion map, what you need to prove is that there exists an -module homomorphism such that . {}: Start by picking a basis of and use a theorem proven in class to show that can be extended to a basis of . Use to construct . (I am assuming that is a subspace of and that is the inclusion map just for simplicity — more generally, it is true that every injective -module homomorphism is a split injection whenever is a field.)    Assume is a non-zero integral domain, but that it is not a field. Prove there exists an -module homomorphism that is an injection but {} a split injection. {}: Pick such that and is not a unit, let be the proper ideal generated by and show the inclusion map is not a split injection.         Prove that if is a commutative ring with then as -modules if and only if . In order to do that, you will complete the following steps:   Show that if is any ideal of and is any -module, then is an -module via     Show that if is any ideal of , then as -modules.    Apply the previous part when is a maximal ideal of . You will need to use the following fact, which we shall prove in class very soon: if is a field, then as -vector spaces if and only if .       Properties of Torsion Submodules   Let be a domain and let be an -module. The torsion submodule of is Elements of are called the torsion elements of , and the module is called torsion if . You may take for granted that this is actually a submodule of without proof.   Show that if and are -modules, then .    Show that if , then .    Show that if is a free -module then .    Show that if is an ideal of that is not principal, then is a torsion-free -module that is not a free -module.    Show that if is an ideal of then .    Suppose that R is a PID, and that is a finitely generated -module. Show that is a torsion-free -module if and only if is a free -module.       Annihilators and Direct Sums   Let be a commutative ring with . Show that     "
},
{
  "id": "proposition-37",
  "level": "2",
  "url": "sec-modgen.html#proposition-37",
  "type": "Proposition",
  "number": "12.58",
  "title": "Finite Generation and Quotient Modules.",
  "body": "Finite Generation and Quotient Modules   Let be a ring with . Prove that if is an -module and is a submodule of such that and are finitely generated, then is finitely generated.   "
},
{
  "id": "prop-every-cyclic-r-module-cong-to-ri-for-some-i",
  "level": "2",
  "url": "sec-modgen.html#prop-every-cyclic-r-module-cong-to-ri-for-some-i",
  "type": "Proposition",
  "number": "12.59",
  "title": "Every Cyclic <span class=\"process-math\">\\(R\\)<\/span>-module <span class=\"process-math\">\\(\\cong\\)<\/span> to <span class=\"process-math\">\\(R\/I\\)<\/span> for some <span class=\"process-math\">\\(I\\)<\/span>.",
  "body": "Every Cyclic -module to for some   Every cyclic -module is isomorphic to for some left ideal .    Say is cyclic and is a generator of , so that . Define to be the unique -map with . Here I am applying the UMP for bases, using that is a basis of as a left -modules. More explicitly, for all . Then is onto, since generates . Its kernel is a left ideal of , since submodules of are the same thing as left ideals. By the FIT, there is an isomorphism sending to .   "
},
{
  "id": "proposition-39",
  "level": "2",
  "url": "sec-modgen.html#proposition-39",
  "type": "Proposition",
  "number": "12.60",
  "title": "",
  "body": "  Let be a ring. Recall that we proved in class that every cyclic -module is isomorphic to for some left ideal . Prove the left ideal occurring this statement is unique; that is, if a cyclic -module is isomorphic to and for left ideals and , then .   "
},
{
  "id": "remark-55",
  "level": "2",
  "url": "sec-modgen.html#remark-55",
  "type": "Remark",
  "number": "12.61",
  "title": "",
  "body": " More generally, the same argument shows that if is a finitely generated module, say generated by elements, then for some submodule of .  "
},
{
  "id": "lem-mim-is-an-ri-module",
  "level": "2",
  "url": "sec-modgen.html#lem-mim-is-an-ri-module",
  "type": "Lemma",
  "number": "12.62",
  "title": "<span class=\"process-math\">\\(M\/IM\\)<\/span> is an <span class=\"process-math\">\\(R\/I\\)<\/span>-module.",
  "body": "is an -module   For a commutative ring , module and ideal , the rules for addition in and scaling by on introduced above make into an -module.  Moreover, given another -module and an -map , the function given by is a well-defined -module homomorphism.  Finally, if is yet another -module homomorphism, then , and we also have for any -module .    I leave some of the details as an exercise, but I will check a few of the necessary things:  We already showed that the rule for scaling is well defined, and we know from 817 that the rule for addition is well-defined and that is an abelian group. To show is an -module, there remain four axioms to verify. For instance, which verifies one of them; the other proofs are similar.  Next, let me verify that the function is a well-defined -map: Let be the composition of -maps (the second one being the canonical one), so that . Since for any 's belonging to and 's belonging to , we have . By the UMP for quotient modules, there is an induced -map given by . The map is so far only known to be an -map, but it is in fact an -map since The final assertions are clear from the formula for for an -map .   "
},
{
  "id": "remark-56",
  "level": "2",
  "url": "sec-modgen.html#remark-56",
  "type": "Remark",
  "number": "12.63",
  "title": "",
  "body": " The Lemma shows that the rules and determine what is known as a functor from the category of -modules to the category of -modules.  "
},
{
  "id": "ex-maximal-ideals-and-vector-spaces",
  "level": "2",
  "url": "sec-modgen.html#ex-maximal-ideals-and-vector-spaces",
  "type": "Example",
  "number": "12.64",
  "title": "Maximal Ideals and Vector Spaces.",
  "body": "Maximal Ideals and Vector Spaces  Suppose is a maximal ideal of a commutative ring . Then is a field, and given an -module , is a module over the field ; i.e., it is a vector space over this field. Moreover, if is an -map then is an -linear transformation.  "
},
{
  "id": "proposition-40",
  "level": "2",
  "url": "sec-modgen.html#proposition-40",
  "type": "Proposition",
  "number": "12.65",
  "title": "",
  "body": "  Let be a non-zero commutative ring and suppose is a surjective homomorphism of -modules for some non-negative integers and .   Prove that if is a field, then .    Prove that if is any non-zero commutative ring, then .      "
},
{
  "id": "proposition-41",
  "level": "2",
  "url": "sec-modgen.html#proposition-41",
  "type": "Proposition",
  "number": "12.66",
  "title": "Finitely Generated Modules and Submodules.",
  "body": "Finitely Generated Modules and Submodules   Let be a ring, let be a left -module and let be a left -submodule.   Prove that if is finitely generated (as an -module), then so is .    Prove that if and are both finitely generated, then so is .    Prove the converse to the previous part is false, as follows: Let be a field and , the ring of polynomials in the infinite list of variables . (So, an element of is a {} -linear combination of monomials of the form for and . Note that each element of involves only a finite number of variables, but there is no uniform bound on how many such variables can be involved in the elements of .) You may assume without proof that is a ring with the usual rules for adding and multiplying polynomials, which make sense since each element of involves only a finite number of variables. Finally let be the ideal of generated by the variables . Prove is finitely generated as an -module but the submodule is not.      "
},
{
  "id": "proposition-42",
  "level": "2",
  "url": "sec-modgen.html#proposition-42",
  "type": "Proposition",
  "number": "12.67",
  "title": "Split Surjection.",
  "body": "Split Surjection   Let be a ring, and left -modules, and an -module homomorphism. Assume that is surjective. We say is a split surjection if there exists an -module homomorphism such that (i.e., for all ).   Prove that if is free, then every surjective -module homomorphism of the form is a split surjection.    By giving an explicit example with justification, show the statement in part (1) would become false if were not assumed to be free.      "
},
{
  "id": "proposition-43",
  "level": "2",
  "url": "sec-modgen.html#proposition-43",
  "type": "Proposition",
  "number": "12.68",
  "title": "Split Injection.",
  "body": "Split Injection   Assume is a ring, an -module, and an injective -module homomorphism. We say is a split injection if there exists an -module homomorphism such that (i.e., for all ).       Prove that if is a field, is a subspace (i.e., submodule) of , and is the inclusion map, then is a split injection. Note that since is the inclusion map, what you need to prove is that there exists an -module homomorphism such that . {}: Start by picking a basis of and use a theorem proven in class to show that can be extended to a basis of . Use to construct . (I am assuming that is a subspace of and that is the inclusion map just for simplicity — more generally, it is true that every injective -module homomorphism is a split injection whenever is a field.)    Assume is a non-zero integral domain, but that it is not a field. Prove there exists an -module homomorphism that is an injection but {} a split injection. {}: Pick such that and is not a unit, let be the proper ideal generated by and show the inclusion map is not a split injection.      "
},
{
  "id": "proposition-44",
  "level": "2",
  "url": "sec-modgen.html#proposition-44",
  "type": "Proposition",
  "number": "12.69",
  "title": "",
  "body": "  Prove that if is a commutative ring with then as -modules if and only if . In order to do that, you will complete the following steps:   Show that if is any ideal of and is any -module, then is an -module via     Show that if is any ideal of , then as -modules.    Apply the previous part when is a maximal ideal of . You will need to use the following fact, which we shall prove in class very soon: if is a field, then as -vector spaces if and only if .      "
},
{
  "id": "thm-torsion-properties",
  "level": "2",
  "url": "sec-modgen.html#thm-torsion-properties",
  "type": "Theorem",
  "number": "12.70",
  "title": "Properties of Torsion Submodules.",
  "body": "Properties of Torsion Submodules   Let be a domain and let be an -module. The torsion submodule of is Elements of are called the torsion elements of , and the module is called torsion if . You may take for granted that this is actually a submodule of without proof.   Show that if and are -modules, then .    Show that if , then .    Show that if is a free -module then .    Show that if is an ideal of that is not principal, then is a torsion-free -module that is not a free -module.    Show that if is an ideal of then .    Suppose that R is a PID, and that is a finitely generated -module. Show that is a torsion-free -module if and only if is a free -module.      "
},
{
  "id": "proposition-45",
  "level": "2",
  "url": "sec-modgen.html#proposition-45",
  "type": "Proposition",
  "number": "12.71",
  "title": "Annihilators and Direct Sums.",
  "body": "Annihilators and Direct Sums   Let be a commutative ring with . Show that    "
},
{
  "id": "sec-bases",
  "level": "1",
  "url": "sec-bases.html",
  "type": "Section",
  "number": "12.5",
  "title": "Bases",
  "body": "Bases    The basis of all good human behavior is kindness.   Eleanor Roosevelt   Basis   A subset of an -module is a basis of , if the set generates and is linearly independent.    Free Module   An -module M is a free  -module if admits at least one a basis.    Module Rank   Let be a non-zero commutative ring and let be a free -module. The cardinality of any basis of is called the rank of .    Zero Module is Free     The zero module is free with as (its only) basis. This holds since the empty set is vacuously linearly independent and it generates .     is free since is a basis for . It clearly generates and if then , so it is linearly independent.    More generally, is free since is a basis. This is called the standard basis of . We've already seen that generates as an -module. Suppose . Then and hence for all .    For any ring , if is a (two-sided) ideal such that and , then is not free. Since , is not the zero module and hence the empty set isn't a basis. Let be any non-empty subset. Then since , as shown above is linearly dependent. We conclude that no subset of is a basis.      Bases are not Unique  Bases of free modules are rarely unique. Indeed, if is any ring, then any single unit forms a basis for as a module over itself. For another example, for any ring and any fixed element , the set forms a basis for the free -module .   Every Module over a Field is Free  Let be a commutative ring with . Show that if every -module is free then is a field.   is not a Free -module  An abelian group is called divisible if for each and , there exists such that . Prove that if is a divisible abelian group then is not a free -module. Deduce that is not a free -module.   Free Modules have Trivial Annihilators  Let be a commutative ring with .   Show that if is a free -module, then .    Give an example of a ring an a nonzero module such that .       A key difference between free modules over rings that are not fields and vector spaces is that not every linearly independent subset of a free module can be extended to a basis. For example, is a linearly independent subset of , but it cannot be extended to a basis. Indeed, any set of the form with is linearly dependent since .  Likewise, over arbitrary rings, not every subset that generates a free module necessarily contains a basis. For instance, generated as a module over itself, but no subset of it is a basis.  (Note that has precisely two bases as a module over itself: and . )    If is the zero ring, then there is (up to isomorphism) only one -module, the zero module. (Proof: If is any module over the ring, then for each we have .) Checking the definition carefully, we see that both the empty set and the set form bases for the zero module over the ring. This gives an example of a module with two bases of different cardinalities.   Elements Uniquely Expressible in Free Modules   Suppose is a free -module and is a basis of . Then every element of is uniquely expressible as an -linear combination of elements of .  More precisely, for each there is unique family of elements , with for all , such that for all but a finite number of indices and .    Given , the fact that for at least one family of elements with for all but a finite number of 's is the definition of what it means for to generate .  Suppose is another such family with . Then Since is linearly independent, by definition for all .    I have not yet given an example of a module with an infinite basis; here is one.  Module with Infinite Basis  Let be any ring and (which, recall, is an -module due to the evident ring map ). Then the countably infinite set is a basis. The fact that this set is a basis is essentially part of the definition of . says that every polynomial is uniquely expressible as an -linear combination of (a finite subset of) .   UMP for Free -Modules   Let be a ring, let be a free -module with basis , let be an -module, and let be any function. Then there is a unique -module homomorphism such that for all .  In other words, there is a bijection of sets given by sending a homomorphisms to its restriction to . (Here, is the set of all -module homomorphisms from to and is the set of all functions from to .)    Given a function , define as follows: Given , by  can be written uniquely as a finite sum . We set Note that is a well-defined function by the uniqueness of the equation .  We need to prove is an -module homomorphism. I'll just show it preserves scaling — the proof for addition is similar. Given and , we have for some , and hence . By definition of ,   Finally, for any we have where if and if . So by construction. This proves existence.  Let be another -module homomorphism such that for each . Given we have and hence and hence .     The uniqueness only uses that generates as an -module.   Free Modules with Equal Basis Elements Isomorphic   If and are free -modules having bases of the same cardinality, then and are isomorphic -modules.  More precisely, if is a basis of and is a basis of and is a bijection of sets, then there is a unique -module isomorphism such that .    Let and be the -module homomorphisms induced by the bijection and its inverse , respectively, using . We'll show that and are mutual inverses. For this note that is an -module homomorphism and for every . Since the identity map is also an -module homomorphism such that for every , by the uniqueness clause in the , we have . Similarly .    as -modules  If is a free -module that has a basis of cardinality , then as -modules. This holds since, as seen above, has a basis of cardinality , namely the standard basis .  More precisely, as the proof makes clear, if is an (ordered) basis of , there is an isomorphism that sends to .    Beware that the cardinality of a basis of a free modules is not an isomorphism invariant in general! There exist rings such that and are isomorphic -modules for all positive integers and .   Uniqueness of Rank over Commutative Rings   Let be a commutative ring such that and let be a free -module with bases and . Then and have the same rank, i.e. there exists a (non unique) bijection of sets joining them.    Let be a non-zero commutative ring and let be a free -module with two bases, and . We need to show and have the same cardinality. Since and are finite, by Example the assertion is equivalent to the following statement: \\begin{quote} For a non-zero commutative ring $R$, if there is an isomorphism $R^n \\cong R^m$ of $R$-modules for some integers $n$ and $m$, then $n = m$. \\end{quote}   I will prove this statement by taking it as already known that it holds in the special case when is a field. (We will prove it for fields later.)   Since is not the zero ring, it contains at least one maximal ideal . (This is proven using .) Recall that is a field by   Given an isomorphism of -modules, by Lemma we have an induced homomorphism of -module . Likewise, the inverse map induces a map . Also by that Lemma we have and similarly is the identity. That is, we have an isomorphism of -modules.  Next, I claim that there is an isomorphism of -modules. Define in the evident way (modding out by entry-wise). It is a surjective map of -modules with kernel and thus, by the First Isomorphism Theorem, it induces an isomorphism given by (where denotes taking the transpose). Now, what we have said so far only shows that is isomorphism of -modules, but it is easy to see that is in fact -linear (I'll leave that to you) and thus it is an isomorphism of -modules.  Putting the results proven so far together, we conclude that and are isomorphic as -modules. Since is a field and since we are assuming the result holds for fields, we deduce that .    Bases of     Let be a non-zero, commutative ring. Prove that a subset of is a basis of as a module over itself if and only if for some unit of .    Let be the ring of column-finite, infinite-by-infinite matrices with entries in a field , as in exercise #3. Prove that for each positive integer , there is a subset of of cardinality that forms as a basis for as a module over itself.      Bases of ideals in commutative rings     Assume is a non-zero, commutative ring and is a non-zero ideal. Prove is free as an -module if and only if for a non-zerodivisor . (Recall that an element is a non-zerodivisor in provided and implies for all . )    Let be a field and . Let , the ideal consisting of all polynomials with constant term. Prove is not free as an -module.      "
},
{
  "id": "def-basis",
  "level": "2",
  "url": "sec-bases.html#def-basis",
  "type": "Definition",
  "number": "12.72",
  "title": "Basis.",
  "body": "Basis   A subset of an -module is a basis of , if the set generates and is linearly independent.   "
},
{
  "id": "def-free-module",
  "level": "2",
  "url": "sec-bases.html#def-free-module",
  "type": "Definition",
  "number": "12.73",
  "title": "Free Module.",
  "body": "Free Module   An -module M is a free  -module if admits at least one a basis.   "
},
{
  "id": "def-rank-module",
  "level": "2",
  "url": "sec-bases.html#def-rank-module",
  "type": "Definition",
  "number": "12.74",
  "title": "Module Rank.",
  "body": "Module Rank   Let be a non-zero commutative ring and let be a free -module. The cardinality of any basis of is called the rank of .   "
},
{
  "id": "ex-zero-module-is-free",
  "level": "2",
  "url": "sec-bases.html#ex-zero-module-is-free",
  "type": "Example",
  "number": "12.75",
  "title": "Zero Module is Free.",
  "body": "Zero Module is Free     The zero module is free with as (its only) basis. This holds since the empty set is vacuously linearly independent and it generates .     is free since is a basis for . It clearly generates and if then , so it is linearly independent.    More generally, is free since is a basis. This is called the standard basis of . We've already seen that generates as an -module. Suppose . Then and hence for all .    For any ring , if is a (two-sided) ideal such that and , then is not free. Since , is not the zero module and hence the empty set isn't a basis. Let be any non-empty subset. Then since , as shown above is linearly dependent. We conclude that no subset of is a basis.     "
},
{
  "id": "ex-bases-are-not-unique",
  "level": "2",
  "url": "sec-bases.html#ex-bases-are-not-unique",
  "type": "Example",
  "number": "12.76",
  "title": "Bases are not Unique.",
  "body": "Bases are not Unique  Bases of free modules are rarely unique. Indeed, if is any ring, then any single unit forms a basis for as a module over itself. For another example, for any ring and any fixed element , the set forms a basis for the free -module .  "
},
{
  "id": "exercise-98",
  "level": "2",
  "url": "sec-bases.html#exercise-98",
  "type": "Exploration",
  "number": "12.77",
  "title": "Every Module over a Field is Free.",
  "body": "Every Module over a Field is Free  Let be a commutative ring with . Show that if every -module is free then is a field.  "
},
{
  "id": "exercise-99",
  "level": "2",
  "url": "sec-bases.html#exercise-99",
  "type": "Exploration",
  "number": "12.78",
  "title": "<span class=\"process-math\">\\(\\Q\\)<\/span> is not a Free <span class=\"process-math\">\\(\\Z\\)<\/span>-module.",
  "body": "is not a Free -module  An abelian group is called divisible if for each and , there exists such that . Prove that if is a divisible abelian group then is not a free -module. Deduce that is not a free -module.  "
},
{
  "id": "exercise-100",
  "level": "2",
  "url": "sec-bases.html#exercise-100",
  "type": "Exploration",
  "number": "12.79",
  "title": "Free Modules have Trivial Annihilators.",
  "body": "Free Modules have Trivial Annihilators  Let be a commutative ring with .   Show that if is a free -module, then .    Give an example of a ring an a nonzero module such that .     "
},
{
  "id": "remark-57",
  "level": "2",
  "url": "sec-bases.html#remark-57",
  "type": "Remark",
  "number": "12.80",
  "title": "",
  "body": " A key difference between free modules over rings that are not fields and vector spaces is that not every linearly independent subset of a free module can be extended to a basis. For example, is a linearly independent subset of , but it cannot be extended to a basis. Indeed, any set of the form with is linearly dependent since .  Likewise, over arbitrary rings, not every subset that generates a free module necessarily contains a basis. For instance, generated as a module over itself, but no subset of it is a basis.  (Note that has precisely two bases as a module over itself: and . )  "
},
{
  "id": "remark-58",
  "level": "2",
  "url": "sec-bases.html#remark-58",
  "type": "Remark",
  "number": "12.81",
  "title": "",
  "body": " If is the zero ring, then there is (up to isomorphism) only one -module, the zero module. (Proof: If is any module over the ring, then for each we have .) Checking the definition carefully, we see that both the empty set and the set form bases for the zero module over the ring. This gives an example of a module with two bases of different cardinalities.  "
},
{
  "id": "lem-elements-uniquely-expressible-in-free-modules",
  "level": "2",
  "url": "sec-bases.html#lem-elements-uniquely-expressible-in-free-modules",
  "type": "Lemma",
  "number": "12.82",
  "title": "Elements Uniquely Expressible in Free Modules.",
  "body": "Elements Uniquely Expressible in Free Modules   Suppose is a free -module and is a basis of . Then every element of is uniquely expressible as an -linear combination of elements of .  More precisely, for each there is unique family of elements , with for all , such that for all but a finite number of indices and .    Given , the fact that for at least one family of elements with for all but a finite number of 's is the definition of what it means for to generate .  Suppose is another such family with . Then Since is linearly independent, by definition for all .   "
},
{
  "id": "exe-module-with-infinite-basis",
  "level": "2",
  "url": "sec-bases.html#exe-module-with-infinite-basis",
  "type": "Example",
  "number": "12.83",
  "title": "Module with Infinite Basis.",
  "body": "Module with Infinite Basis  Let be any ring and (which, recall, is an -module due to the evident ring map ). Then the countably infinite set is a basis. The fact that this set is a basis is essentially part of the definition of . says that every polynomial is uniquely expressible as an -linear combination of (a finite subset of) .  "
},
{
  "id": "thm-ump-for-free-modules",
  "level": "2",
  "url": "sec-bases.html#thm-ump-for-free-modules",
  "type": "Theorem",
  "number": "12.84",
  "title": "UMP for Free <span class=\"process-math\">\\(R\\)<\/span>-Modules.",
  "body": "UMP for Free -Modules   Let be a ring, let be a free -module with basis , let be an -module, and let be any function. Then there is a unique -module homomorphism such that for all .  In other words, there is a bijection of sets given by sending a homomorphisms to its restriction to . (Here, is the set of all -module homomorphisms from to and is the set of all functions from to .)    Given a function , define as follows: Given , by  can be written uniquely as a finite sum . We set Note that is a well-defined function by the uniqueness of the equation .  We need to prove is an -module homomorphism. I'll just show it preserves scaling — the proof for addition is similar. Given and , we have for some , and hence . By definition of ,   Finally, for any we have where if and if . So by construction. This proves existence.  Let be another -module homomorphism such that for each . Given we have and hence and hence .   "
},
{
  "id": "remark-59",
  "level": "2",
  "url": "sec-bases.html#remark-59",
  "type": "Remark",
  "number": "12.85",
  "title": "",
  "body": " The uniqueness only uses that generates as an -module.  "
},
{
  "id": "cor-free-modules-with-equal-basis-elements-isomorphic",
  "level": "2",
  "url": "sec-bases.html#cor-free-modules-with-equal-basis-elements-isomorphic",
  "type": "Corollary",
  "number": "12.86",
  "title": "Free Modules with Equal Basis Elements Isomorphic.",
  "body": "Free Modules with Equal Basis Elements Isomorphic   If and are free -modules having bases of the same cardinality, then and are isomorphic -modules.  More precisely, if is a basis of and is a basis of and is a bijection of sets, then there is a unique -module isomorphism such that .    Let and be the -module homomorphisms induced by the bijection and its inverse , respectively, using . We'll show that and are mutual inverses. For this note that is an -module homomorphism and for every . Since the identity map is also an -module homomorphism such that for every , by the uniqueness clause in the , we have . Similarly .   "
},
{
  "id": "exe-mcong-rn-as-r-modules",
  "level": "2",
  "url": "sec-bases.html#exe-mcong-rn-as-r-modules",
  "type": "Example",
  "number": "12.87",
  "title": "<span class=\"process-math\">\\(M\\cong R^n\\)<\/span> as <span class=\"process-math\">\\(R\\)<\/span>-modules.",
  "body": "as -modules  If is a free -module that has a basis of cardinality , then as -modules. This holds since, as seen above, has a basis of cardinality , namely the standard basis .  More precisely, as the proof makes clear, if is an (ordered) basis of , there is an isomorphism that sends to .  "
},
{
  "id": "remark-60",
  "level": "2",
  "url": "sec-bases.html#remark-60",
  "type": "Remark",
  "number": "12.88",
  "title": "",
  "body": " Beware that the cardinality of a basis of a free modules is not an isomorphism invariant in general! There exist rings such that and are isomorphic -modules for all positive integers and .  "
},
{
  "id": "thm-uniqueness-of-rank-over-commutative-rings",
  "level": "2",
  "url": "sec-bases.html#thm-uniqueness-of-rank-over-commutative-rings",
  "type": "Theorem",
  "number": "12.89",
  "title": "Uniqueness of Rank over Commutative Rings.",
  "body": "Uniqueness of Rank over Commutative Rings   Let be a commutative ring such that and let be a free -module with bases and . Then and have the same rank, i.e. there exists a (non unique) bijection of sets joining them.    Let be a non-zero commutative ring and let be a free -module with two bases, and . We need to show and have the same cardinality. Since and are finite, by Example the assertion is equivalent to the following statement: \\begin{quote} For a non-zero commutative ring $R$, if there is an isomorphism $R^n \\cong R^m$ of $R$-modules for some integers $n$ and $m$, then $n = m$. \\end{quote}   I will prove this statement by taking it as already known that it holds in the special case when is a field. (We will prove it for fields later.)   Since is not the zero ring, it contains at least one maximal ideal . (This is proven using .) Recall that is a field by   Given an isomorphism of -modules, by Lemma we have an induced homomorphism of -module . Likewise, the inverse map induces a map . Also by that Lemma we have and similarly is the identity. That is, we have an isomorphism of -modules.  Next, I claim that there is an isomorphism of -modules. Define in the evident way (modding out by entry-wise). It is a surjective map of -modules with kernel and thus, by the First Isomorphism Theorem, it induces an isomorphism given by (where denotes taking the transpose). Now, what we have said so far only shows that is isomorphism of -modules, but it is easy to see that is in fact -linear (I'll leave that to you) and thus it is an isomorphism of -modules.  Putting the results proven so far together, we conclude that and are isomorphic as -modules. Since is a field and since we are assuming the result holds for fields, we deduce that .   "
},
{
  "id": "prop-r-bases",
  "level": "2",
  "url": "sec-bases.html#prop-r-bases",
  "type": "Exploration",
  "number": "12.90",
  "title": "Bases of <span class=\"process-math\">\\(R\\)<\/span>.",
  "body": "Bases of     Let be a non-zero, commutative ring. Prove that a subset of is a basis of as a module over itself if and only if for some unit of .    Let be the ring of column-finite, infinite-by-infinite matrices with entries in a field , as in exercise #3. Prove that for each positive integer , there is a subset of of cardinality that forms as a basis for as a module over itself.     "
},
{
  "id": "prop-bases-of-ideals-in-commutative-rings",
  "level": "2",
  "url": "sec-bases.html#prop-bases-of-ideals-in-commutative-rings",
  "type": "Exploration",
  "number": "12.91",
  "title": "Bases of ideals in commutative rings.",
  "body": "Bases of ideals in commutative rings     Assume is a non-zero, commutative ring and is a non-zero ideal. Prove is free as an -module if and only if for a non-zerodivisor . (Recall that an element is a non-zerodivisor in provided and implies for all . )    Let be a field and . Let , the ideal consisting of all polynomials with constant term. Prove is not free as an -module.     "
},
{
  "id": "sec-vecbasis",
  "level": "1",
  "url": "sec-vecbasis.html",
  "type": "Section",
  "number": "13.1",
  "title": "Existence of Bases",
  "body": "Existence of Bases    His words span rivers and mountains, but his thoughts are still only six inches long.   E.B. White   Span   In keeping with standard convention, we use the term span instead of submodule generated by , but they mean exactly the same thing: for a subset of an -vector space , the span of is As with modules over general rings, the span of a subset of a vector space is a sub-vector space (i.e., sub-module).    Linear Independence and Span   Suppose is a linearly independent subset of an -vector space and , then is also linearly independent.    We need to prove that every finite subset of is linearly independent. Let be a list of distinct elements of and suppose for some . If for all , then for all since is linearly independent. Without loss, say . If , then , contrary to the assumption. So we must have . But then for all by the same reasoning as in the first case.     The only place where the fact that the ring of scalars is a field is to know that has a multiplicative inverse when . In particular, the Lemma holds when is a division ring too.   Finding Intermediate Bases   Let be an -vector space and assume are subsets such that is linearly independent and spans . Then there is a subset such that and is a basis of     Let denote the collection of all subsets of such that and is linearly independent. We make into a poset by the order relation , set containment.  We note that .  Let be any totally ordered subset of . If is empty, then is (vacuously) bounded above by .  Assume is non-empty. Let . I claim . Given , for each we have for some . Since is totally ordered, one of contains all the others and hence it contains all the 's. Since each is linearly independent, this shows are linearly independent. We have shown that every finite subset of is linearly independent, and hence is linearly independent. Since is non-empty, . Since each member of is contained in , . Thus, , and it is clearly an upper bound for .  We may thus apply to conclude that has at least one maximal element, . I claim is a basis of . Note that is linearly independent and by construction. We need to show that it spans . Suppose not. Since spans , if , then would have to be all of . (For note that if and , then for any we may write for and with and hence , which implies .) Since we are assuming , there must be at least one such that . Set . Clearly, and, by Lemma , is linearly independent. This shows that is an element of that is strictly bigger than , contrary to the maximality of . So, must span and hence it is a basis.    Every Vector Space has a Basis   Every -vector space has a basis. Moreover, every linearly independent subset of is contained in some basis, and every set of vectors that spans contains some basis.    For this first part, apply the theorem with and . For the second and third, use arbitrary and and and arbitrary, respectively.      has a basis as a -Vector Space has a basis as a -vector space. Just don't ask me what it looks like.   Basis of Subspaces Extent   Suppose is a field an is a subspace (i.e., submodule) of the -vector space (i.e., -module) . Then every basis of extends to a basis of - that is, if is a basis of then there exists a basis of such that is a subset of .    Just apply the Theorem with and . (Since is a basis of , it is linearly independent, and observe that remains linearly independent when regarded as a subset of .)     It is not true that, with the notation of the previous Corollary, if is a basis of then there exists a basis of such that is a subset of . For instance, take , , and the subspace spanned by .   Exchange Lemma   Let be a field, let be a basis of an -vector space , and let be any finite set of linearly independent vectors in . Then there are distinct vectors in , such that is also a basis .    Let . As noted, the sublemma establishes the case of the Exchange Lemma. The general case proceeds recursively:  Suppose that for some , we have found such that is a basis for some . We need to show we can “swap out one more''; that is, we need to prove there is a such that is also a basis.  Since is a basis, there is a (unique) equation of the form with and . Now, there must be at least one that is not in , for otherwise we would have , contrary to being linearly independent. Let for such an . Then by the sublemma is a basis of .    "
},
{
  "id": "def-span",
  "level": "2",
  "url": "sec-vecbasis.html#def-span",
  "type": "Definition",
  "number": "13.1",
  "title": "Span.",
  "body": "Span   In keeping with standard convention, we use the term span instead of submodule generated by , but they mean exactly the same thing: for a subset of an -vector space , the span of is As with modules over general rings, the span of a subset of a vector space is a sub-vector space (i.e., sub-module).   "
},
{
  "id": "lem-linear-independence-and-span",
  "level": "2",
  "url": "sec-vecbasis.html#lem-linear-independence-and-span",
  "type": "Lemma",
  "number": "13.2",
  "title": "Linear Independence and Span.",
  "body": "Linear Independence and Span   Suppose is a linearly independent subset of an -vector space and , then is also linearly independent.    We need to prove that every finite subset of is linearly independent. Let be a list of distinct elements of and suppose for some . If for all , then for all since is linearly independent. Without loss, say . If , then , contrary to the assumption. So we must have . But then for all by the same reasoning as in the first case.   "
},
{
  "id": "remark-61",
  "level": "2",
  "url": "sec-vecbasis.html#remark-61",
  "type": "Remark",
  "number": "13.3",
  "title": "",
  "body": " The only place where the fact that the ring of scalars is a field is to know that has a multiplicative inverse when . In particular, the Lemma holds when is a division ring too.  "
},
{
  "id": "thm-finding-intermediate-bases",
  "level": "2",
  "url": "sec-vecbasis.html#thm-finding-intermediate-bases",
  "type": "Theorem",
  "number": "13.4",
  "title": "Finding Intermediate Bases.",
  "body": "Finding Intermediate Bases   Let be an -vector space and assume are subsets such that is linearly independent and spans . Then there is a subset such that and is a basis of     Let denote the collection of all subsets of such that and is linearly independent. We make into a poset by the order relation , set containment.  We note that .  Let be any totally ordered subset of . If is empty, then is (vacuously) bounded above by .  Assume is non-empty. Let . I claim . Given , for each we have for some . Since is totally ordered, one of contains all the others and hence it contains all the 's. Since each is linearly independent, this shows are linearly independent. We have shown that every finite subset of is linearly independent, and hence is linearly independent. Since is non-empty, . Since each member of is contained in , . Thus, , and it is clearly an upper bound for .  We may thus apply to conclude that has at least one maximal element, . I claim is a basis of . Note that is linearly independent and by construction. We need to show that it spans . Suppose not. Since spans , if , then would have to be all of . (For note that if and , then for any we may write for and with and hence , which implies .) Since we are assuming , there must be at least one such that . Set . Clearly, and, by Lemma , is linearly independent. This shows that is an element of that is strictly bigger than , contrary to the maximality of . So, must span and hence it is a basis.   "
},
{
  "id": "cor-every-vector-space-has-a-basis",
  "level": "2",
  "url": "sec-vecbasis.html#cor-every-vector-space-has-a-basis",
  "type": "Corollary",
  "number": "13.5",
  "title": "Every Vector Space has a Basis.",
  "body": "Every Vector Space has a Basis   Every -vector space has a basis. Moreover, every linearly independent subset of is contained in some basis, and every set of vectors that spans contains some basis.    For this first part, apply the theorem with and . For the second and third, use arbitrary and and and arbitrary, respectively.   "
},
{
  "id": "remark-62",
  "level": "2",
  "url": "sec-vecbasis.html#remark-62",
  "type": "Remark",
  "number": "13.6",
  "title": "",
  "body": "  has a basis as a -Vector Space has a basis as a -vector space. Just don't ask me what it looks like.  "
},
{
  "id": "cor-basis-of-subspaces-extent",
  "level": "2",
  "url": "sec-vecbasis.html#cor-basis-of-subspaces-extent",
  "type": "Corollary",
  "number": "13.7",
  "title": "Basis of Subspaces Extent.",
  "body": "Basis of Subspaces Extent   Suppose is a field an is a subspace (i.e., submodule) of the -vector space (i.e., -module) . Then every basis of extends to a basis of - that is, if is a basis of then there exists a basis of such that is a subset of .    Just apply the Theorem with and . (Since is a basis of , it is linearly independent, and observe that remains linearly independent when regarded as a subset of .)   "
},
{
  "id": "remark-63",
  "level": "2",
  "url": "sec-vecbasis.html#remark-63",
  "type": "Remark",
  "number": "13.8",
  "title": "",
  "body": " It is not true that, with the notation of the previous Corollary, if is a basis of then there exists a basis of such that is a subset of . For instance, take , , and the subspace spanned by .  "
},
{
  "id": "lem-exchange-lemma",
  "level": "2",
  "url": "sec-vecbasis.html#lem-exchange-lemma",
  "type": "Lemma",
  "number": "13.9",
  "title": "Exchange Lemma.",
  "body": "Exchange Lemma   Let be a field, let be a basis of an -vector space , and let be any finite set of linearly independent vectors in . Then there are distinct vectors in , such that is also a basis .    Let . As noted, the sublemma establishes the case of the Exchange Lemma. The general case proceeds recursively:  Suppose that for some , we have found such that is a basis for some . We need to show we can “swap out one more''; that is, we need to prove there is a such that is also a basis.  Since is a basis, there is a (unique) equation of the form with and . Now, there must be at least one that is not in , for otherwise we would have , contrary to being linearly independent. Let for such an . Then by the sublemma is a basis of .   "
},
{
  "id": "sec-ranknul",
  "level": "1",
  "url": "sec-ranknul.html",
  "type": "Section",
  "number": "13.2",
  "title": "Dimension and Rank-Nullity",
  "body": "Dimension and Rank-Nullity  Dimension   The dimension of a vector space , denoted or , is the cardinality of any of its bases. This is the same as the rank of as an -module.    Dimension Theorem   Any two bases of the same vector space have the same dimension.    We will only prove this in the case of finite dimensional vector spaces, but it is indeed true in general.  Suppose is a field and is a finite dimensional -vector space. Then it has a finite basis . Let be any other basis. (Note that we cannot assume is necessarily finite.) For any non-negative integer , suppose is any -element subset of . Then is linearly independent and so, by the Exchange Lemma, there is an -element subset of such that is also a basis of . In particular, . Since this holds for all , we conclude . By symmetry, and hence .    Dimension of in      SubLemma   Let be a field. Given a basis of an -vector space and vector , let for , and for all , be the unique way of writing as a linear combination of some of the members of using non-zero coefficients. Then for any , we have that is also a basis of .    If the sublemma is vacously true since in that case.  For , we may as well assume (to simplify the notation) that . We need to show is linearly independent and spans.  By solving for (as we may since ) we obtain for some and hence . Given any , since spans, we have for some . If one of 's is equal to , then we may use the previous equation to replace the term with a linear combination of members of . This proves that . So spans .  To show is linearly indepedent, suppose for some and some . If , then we have for some . But this contradicts the uniqueness of (for note that for all ). So we must have . But then we must also have for all since is linearly independent. This proves is linearly independent. This completes the proof of the sublemma.    SubLemma and  For a visual interpretation of the sublemma, suppose and is its standard basis. Given , if is a non-zero multiple of one of the members of , say for , then is also basis of . If lies one of the coordinate planes but is not on a axis, say for , then both and are bases. If lies on none of the coordinate planes, then for and each of , and is a basis. So, the sublemma is saying that we can swap in for any of the basis elements that occur with a non-zero coefficient in the unique expression of as a linear combination of the basis. (This includes the case when , since no such basis vectors occur.)    This completes the proof that, for a commutative ring with , any two finite bases of a free -module have the same cardinality. (In the proof of this fact given above, we had assumed it held for fields.)    The Exchange Lemma also holds for any division ring (using the exact same proof).    Consider , and define rules for addition and scaling degree-wise in the evident way.  It is not hard to see is a -vector space. It can be identified with the collection of all sequences of real numbers. One might be interested in a basis for this vector space. At first glance the most obvious choice would be , where is the sequence with a in the -th position and 's everywhere else.  However, this set does not span as can not be represented as a finite linear combination of these elements. (It turns out that is the basis for the direct sum , which may be identified with all sequences having only a finite number of non-zero terms.)  Now, since we know since is not in , we have that is a linearly independent set. However, this does not span either as is not in the span of this set. We know that has a basis, but it can be shown that no countable collection of vectors forms a basis for this space, in fact . An explicit basis of this vector space is impossible to describe.   Dimension and Subspaces   Let be a field and let be a subspace of a finite dimensional -vector space . Then     Pick a basis of . Regarded as a subset of , remains linearly independent and thus it may be extended to a basis of by Corollary . Let us write this basis of as with .  Let . I claim that is a basis of .  Given we have for some and scalars . Since for all , we have . This proves spans. Say for some . Then and hence , whence . Since is linearly independent, and for all . This proves is linearly independent.  We have with the second equality holding since and are disjoint.     Suitably interpreted, this is valid even if is infinite dimensional, as the proof will show.   Nullspace   Let be a linear transformation. The nullspace of is .  The nullity of is .    Rank Nullity Theorem   Let be a field and an -linear transformation between -vector spaces and , and assume is finite dimensional. Then or equivalently     By the first isomorphism theorem for modules we have , thus . By the previous theorem we have      Suitably interpreted, this is valid even if is infinite dimensional.   "
},
{
  "id": "def-dimension-vector-space",
  "level": "2",
  "url": "sec-ranknul.html#def-dimension-vector-space",
  "type": "Definition",
  "number": "13.10",
  "title": "Dimension.",
  "body": "Dimension   The dimension of a vector space , denoted or , is the cardinality of any of its bases. This is the same as the rank of as an -module.   "
},
{
  "id": "thm-dimension-theorem",
  "level": "2",
  "url": "sec-ranknul.html#thm-dimension-theorem",
  "type": "Theorem",
  "number": "13.11",
  "title": "Dimension Theorem.",
  "body": "Dimension Theorem   Any two bases of the same vector space have the same dimension.    We will only prove this in the case of finite dimensional vector spaces, but it is indeed true in general.  Suppose is a field and is a finite dimensional -vector space. Then it has a finite basis . Let be any other basis. (Note that we cannot assume is necessarily finite.) For any non-negative integer , suppose is any -element subset of . Then is linearly independent and so, by the Exchange Lemma, there is an -element subset of such that is also a basis of . In particular, . Since this holds for all , we conclude . By symmetry, and hence .   "
},
{
  "id": "ex-dimension-of-fn-in-f",
  "level": "2",
  "url": "sec-ranknul.html#ex-dimension-of-fn-in-f",
  "type": "Example",
  "number": "13.12",
  "title": "Dimension of <span class=\"process-math\">\\(F^n\\)<\/span> in <span class=\"process-math\">\\(F\\)<\/span>.",
  "body": "Dimension of in     "
},
{
  "id": "lem-sublemma",
  "level": "2",
  "url": "sec-ranknul.html#lem-sublemma",
  "type": "Lemma",
  "number": "13.13",
  "title": "SubLemma.",
  "body": "SubLemma   Let be a field. Given a basis of an -vector space and vector , let for , and for all , be the unique way of writing as a linear combination of some of the members of using non-zero coefficients. Then for any , we have that is also a basis of .    If the sublemma is vacously true since in that case.  For , we may as well assume (to simplify the notation) that . We need to show is linearly independent and spans.  By solving for (as we may since ) we obtain for some and hence . Given any , since spans, we have for some . If one of 's is equal to , then we may use the previous equation to replace the term with a linear combination of members of . This proves that . So spans .  To show is linearly indepedent, suppose for some and some . If , then we have for some . But this contradicts the uniqueness of (for note that for all ). So we must have . But then we must also have for all since is linearly independent. This proves is linearly independent. This completes the proof of the sublemma.   "
},
{
  "id": "exe-sublemma-and-r3",
  "level": "2",
  "url": "sec-ranknul.html#exe-sublemma-and-r3",
  "type": "Example",
  "number": "13.14",
  "title": "SubLemma and <span class=\"process-math\">\\(\\R^3\\)<\/span>.",
  "body": "SubLemma and  For a visual interpretation of the sublemma, suppose and is its standard basis. Given , if is a non-zero multiple of one of the members of , say for , then is also basis of . If lies one of the coordinate planes but is not on a axis, say for , then both and are bases. If lies on none of the coordinate planes, then for and each of , and is a basis. So, the sublemma is saying that we can swap in for any of the basis elements that occur with a non-zero coefficient in the unique expression of as a linear combination of the basis. (This includes the case when , since no such basis vectors occur.)  "
},
{
  "id": "remark-64",
  "level": "2",
  "url": "sec-ranknul.html#remark-64",
  "type": "Remark",
  "number": "13.15",
  "title": "",
  "body": " This completes the proof that, for a commutative ring with , any two finite bases of a free -module have the same cardinality. (In the proof of this fact given above, we had assumed it held for fields.)  "
},
{
  "id": "remark-65",
  "level": "2",
  "url": "sec-ranknul.html#remark-65",
  "type": "Remark",
  "number": "13.16",
  "title": "",
  "body": " The Exchange Lemma also holds for any division ring (using the exact same proof).  "
},
{
  "id": "exe-rn",
  "level": "2",
  "url": "sec-ranknul.html#exe-rn",
  "type": "Example",
  "number": "13.17",
  "title": "<span class=\"process-math\">\\(\\R^\\N\\)<\/span>.",
  "body": " Consider , and define rules for addition and scaling degree-wise in the evident way.  It is not hard to see is a -vector space. It can be identified with the collection of all sequences of real numbers. One might be interested in a basis for this vector space. At first glance the most obvious choice would be , where is the sequence with a in the -th position and 's everywhere else.  However, this set does not span as can not be represented as a finite linear combination of these elements. (It turns out that is the basis for the direct sum , which may be identified with all sequences having only a finite number of non-zero terms.)  Now, since we know since is not in , we have that is a linearly independent set. However, this does not span either as is not in the span of this set. We know that has a basis, but it can be shown that no countable collection of vectors forms a basis for this space, in fact . An explicit basis of this vector space is impossible to describe.  "
},
{
  "id": "thm-dimension-and-subspaces",
  "level": "2",
  "url": "sec-ranknul.html#thm-dimension-and-subspaces",
  "type": "Theorem",
  "number": "13.18",
  "title": "Dimension and Subspaces.",
  "body": "Dimension and Subspaces   Let be a field and let be a subspace of a finite dimensional -vector space . Then     Pick a basis of . Regarded as a subset of , remains linearly independent and thus it may be extended to a basis of by Corollary . Let us write this basis of as with .  Let . I claim that is a basis of .  Given we have for some and scalars . Since for all , we have . This proves spans. Say for some . Then and hence , whence . Since is linearly independent, and for all . This proves is linearly independent.  We have with the second equality holding since and are disjoint.   "
},
{
  "id": "remark-66",
  "level": "2",
  "url": "sec-ranknul.html#remark-66",
  "type": "Remark",
  "number": "13.19",
  "title": "",
  "body": " Suitably interpreted, this is valid even if is infinite dimensional, as the proof will show.  "
},
{
  "id": "def-nullspace",
  "level": "2",
  "url": "sec-ranknul.html#def-nullspace",
  "type": "Definition",
  "number": "13.20",
  "title": "Nullspace.",
  "body": "Nullspace   Let be a linear transformation. The nullspace of is .  The nullity of is .   "
},
{
  "id": "thm-rank-nullity",
  "level": "2",
  "url": "sec-ranknul.html#thm-rank-nullity",
  "type": "Theorem",
  "number": "13.21",
  "title": "Rank Nullity Theorem.",
  "body": "Rank Nullity Theorem   Let be a field and an -linear transformation between -vector spaces and , and assume is finite dimensional. Then or equivalently     By the first isomorphism theorem for modules we have , thus . By the previous theorem we have    "
},
{
  "id": "remark-67",
  "level": "2",
  "url": "sec-ranknul.html#remark-67",
  "type": "Remark",
  "number": "13.22",
  "title": "",
  "body": " Suitably interpreted, this is valid even if is infinite dimensional.  "
},
{
  "id": "sec-basics",
  "level": "1",
  "url": "sec-basics.html",
  "type": "Section",
  "number": "13.3",
  "title": "Basics",
  "body": "Basics  Recall that when is a field an -module homomorphism is called a -linear transformation. Since every -vector space has a basis, every linear transformation between finite dimensional vector spaces may be represented by a matrix, as we noted before.  Matrix of Free Module Homomorphism   Let be a non-zero commutative ring and let , be -modules of finite rank and , respectively. (For instance, could be a field and and could be arbitrary finite dimensional vector spaces.) Let and be ordered bases of and .   For each , let denote the unique column vector such that . Define for similarly.    If is an -module homomorphism then we define elements for and by the formulas    Define to be the matrix EMPTY    -Vector Space of Polynomials ( )  Let denote the the -vector space of polynomials of degree at most (including the zero polynomial) and consider the linear transformation given by , i.e. taking the derivative. Take for an ordered basis of and for an ordered basis of . Then for we have and We have confirming in this example one of the assertions of the Lemma.  Let be the linear map . Then Note that and as predicted by .   Identity Automorphism of Free -Module  If is the identity automorphism of an -dimensional free -module , then for any basis of we have for all and hence    "
},
{
  "id": "remark-68",
  "level": "2",
  "url": "sec-basics.html#remark-68",
  "type": "Remark",
  "number": "13.23",
  "title": "",
  "body": "Recall that when is a field an -module homomorphism is called a -linear transformation. Since every -vector space has a basis, every linear transformation between finite dimensional vector spaces may be represented by a matrix, as we noted before. "
},
{
  "id": "def-matrix-of-free-module-homomorphism",
  "level": "2",
  "url": "sec-basics.html#def-matrix-of-free-module-homomorphism",
  "type": "Definition",
  "number": "13.24",
  "title": "Matrix of Free Module Homomorphism.",
  "body": "Matrix of Free Module Homomorphism   Let be a non-zero commutative ring and let , be -modules of finite rank and , respectively. (For instance, could be a field and and could be arbitrary finite dimensional vector spaces.) Let and be ordered bases of and .   For each , let denote the unique column vector such that . Define for similarly.    If is an -module homomorphism then we define elements for and by the formulas    Define to be the matrix EMPTY   "
},
{
  "id": "exe-r-vector-space-of-polynomials-p_n",
  "level": "2",
  "url": "sec-basics.html#exe-r-vector-space-of-polynomials-p_n",
  "type": "Example",
  "number": "13.25",
  "title": "<span class=\"process-math\">\\(\\R\\)<\/span>-Vector Space of Polynomials (<span class=\"process-math\">\\(P_n\\)<\/span>).",
  "body": "-Vector Space of Polynomials ( )  Let denote the the -vector space of polynomials of degree at most (including the zero polynomial) and consider the linear transformation given by , i.e. taking the derivative. Take for an ordered basis of and for an ordered basis of . Then for we have and We have confirming in this example one of the assertions of the Lemma.  Let be the linear map . Then Note that and as predicted by .  "
},
{
  "id": "exe-identity-automorphism-of-free-r-module",
  "level": "2",
  "url": "sec-basics.html#exe-identity-automorphism-of-free-r-module",
  "type": "Example",
  "number": "13.26",
  "title": "Identity Automorphism of Free <span class=\"process-math\">\\(R\\)<\/span>-Module.",
  "body": "Identity Automorphism of Free -Module  If is the identity automorphism of an -dimensional free -module , then for any basis of we have for all and hence   "
},
{
  "id": "subsec-free-modules-and-matrices",
  "level": "1",
  "url": "subsec-free-modules-and-matrices.html",
  "type": "Section",
  "number": "13.4",
  "title": "Free Modules and Matrices",
  "body": "Free Modules and Matrices  Bijection of Matrices and Hom Functor   Suppose is a ring and and are free -modules with ordered bases and , respectively. There is a bijective correspondence that sends a matrix to the unique -module homomorphism satisfying for each .     It is of paramount importance to realize that the bijection between maps and matrices {}.  In particular, the -map written as that we associate to the matrix in this proposition depends on the basis and , and so it should really be written as something like . I will occasionally do so.    Let us rephrase the Proposition in terms of usual matrix multiplication in the case when is {}.  Given an -module homomorphism with and as in the proposition, let be the matrix attached to it using the bases and as described above. Then the diagram #empty  commutes, where and are defined in and and by we mean the map where denotes the usual rule for matrix multiplication. (Recall elements of are represented as column vectors.)  Conversely, given a matrix , the corresponding map is the unique one causing this square to commute; i.e. .   For non-commutative rings, there is a version of the previous remark that remains true: Replace the vertical map on the left in diagram with the map given by where the exponent denotes taking the transpose of a matrix. (If is commutative, we have for all matrices and of an appropriate size, and thus . When is not commutative, it is {} true in general that .)  Matrix Multiplication is Associative   Let be a commutative ring, let be free -modules having finite bases of size , respectively. Given a matrix and a matrix , let denote the matrix obtained by the usual formula for matrix multiplication, and let , and be the maps associated to these matrices relative to the specified bases, as given in Proposition. Then In particular, matrix multiplication is associative.    For the first assertion we just need to check the two maps agree on for all : We have (with the second equation using that is an -map) and (I have left off the superscripts etc. for the sake of my sanity.) These two expressions agree since is commutative.  The second assertion holds since composition of functions is associative.    The correct version of this for -non commutative is that (again, with superscripts omitted).  "
},
{
  "id": "prop-bijection-of-matrices-and-hom-functor",
  "level": "2",
  "url": "subsec-free-modules-and-matrices.html#prop-bijection-of-matrices-and-hom-functor",
  "type": "Proposition",
  "number": "13.27",
  "title": "Bijection of Matrices and Hom Functor.",
  "body": "Bijection of Matrices and Hom Functor   Suppose is a ring and and are free -modules with ordered bases and , respectively. There is a bijective correspondence that sends a matrix to the unique -module homomorphism satisfying for each .   "
},
{
  "id": "remark-69",
  "level": "2",
  "url": "subsec-free-modules-and-matrices.html#remark-69",
  "type": "Remark",
  "number": "13.28",
  "title": "",
  "body": " It is of paramount importance to realize that the bijection between maps and matrices {}.  In particular, the -map written as that we associate to the matrix in this proposition depends on the basis and , and so it should really be written as something like . I will occasionally do so.  "
},
{
  "id": "remark-70",
  "level": "2",
  "url": "subsec-free-modules-and-matrices.html#remark-70",
  "type": "Remark",
  "number": "13.29",
  "title": "",
  "body": " Let us rephrase the Proposition in terms of usual matrix multiplication in the case when is {}.  Given an -module homomorphism with and as in the proposition, let be the matrix attached to it using the bases and as described above. Then the diagram #empty  commutes, where and are defined in and and by we mean the map where denotes the usual rule for matrix multiplication. (Recall elements of are represented as column vectors.)  Conversely, given a matrix , the corresponding map is the unique one causing this square to commute; i.e. .  "
},
{
  "id": "remark-71",
  "level": "2",
  "url": "subsec-free-modules-and-matrices.html#remark-71",
  "type": "Remark",
  "number": "13.30",
  "title": "",
  "body": "For non-commutative rings, there is a version of the previous remark that remains true: Replace the vertical map on the left in diagram with the map given by where the exponent denotes taking the transpose of a matrix. (If is commutative, we have for all matrices and of an appropriate size, and thus . When is not commutative, it is {} true in general that .) "
},
{
  "id": "thm-matrix-multiplication-is-associative",
  "level": "2",
  "url": "subsec-free-modules-and-matrices.html#thm-matrix-multiplication-is-associative",
  "type": "Theorem",
  "number": "13.31",
  "title": "Matrix Multiplication is Associative.",
  "body": "Matrix Multiplication is Associative   Let be a commutative ring, let be free -modules having finite bases of size , respectively. Given a matrix and a matrix , let denote the matrix obtained by the usual formula for matrix multiplication, and let , and be the maps associated to these matrices relative to the specified bases, as given in Proposition. Then In particular, matrix multiplication is associative.    For the first assertion we just need to check the two maps agree on for all : We have (with the second equation using that is an -map) and (I have left off the superscripts etc. for the sake of my sanity.) These two expressions agree since is commutative.  The second assertion holds since composition of functions is associative.   "
},
{
  "id": "remark-72",
  "level": "2",
  "url": "subsec-free-modules-and-matrices.html#remark-72",
  "type": "Remark",
  "number": "13.32",
  "title": "",
  "body": "The correct version of this for -non commutative is that (again, with superscripts omitted). "
},
{
  "id": "sec-cob",
  "level": "1",
  "url": "sec-cob.html",
  "type": "Section",
  "number": "13.5",
  "title": "Change of Basis",
  "body": "Change of Basis  Change of Basis Matrix (CoB)   Let be a finite rank free module over a commutative ring , and let and be bases of . Let be the identity map on . Then is called the change of basis matrix from to      By Proposition, is an invertible matrix and its inverse It follows from that that is, multiplication by really does change the representation of vectors by column vectors from one basis to another.   CoB Matrix and Standard Free Module  Say , is the standard basis (so is a column vector with a in the -th position and 's elsewhere). Note that for all .  Let be any other basis of . Then and so the change of basis matrix satisfies, on the one hand, and, on the other hand, That is, is the matrix whose columns are .   CoB and  Consider , let and be bases of . We calculate the change of basis matrix. We have Thus, the change of basis matrix is given by If we wish to represent in the basis , we start by noting (where recall means to take the transpose) and compute to get . This tells us that    CoB and Identity   Let be finitely generated free modules over a commutative ring , let and be bases of , let and be bases of , and let be a homomorphism. Then     This is seen to hold by applying twice (since ).    Equivalent Matrices   Two matrices and are equivalent if there exists invertible matrices and (of the appropriate sizes) so that .    With this bit of terminology, we can say that two matrices representing the same linear transformation with respect to a different pair of bases are equivalent. The converse is also true: If two matrices are equivalent, then they represent the same linear transformation with respect to different bases.  Finding Equivalent Matrices   Let be a field. Given an -linear transformation between finite dimensional -vector spaces and , there are bases and of and , respectively, such that where and the 's denote appropriately sized matrices with all entries.    We form and in steps.  Start by picking an ordered basis of the image of . For each pick such that and set . Then pick a basis of the kernel of . Let us list the elements of as .  I claim that is a basis of . (Note that since for all with and for all .) Pick . Then, since spans the image of , we have for some scalars . It follows that and hence, since the kernel is spanned by , we have for some . We rearranging this equation, we conclude and thus spans .  Now say for some 's in . Since for all and for all , this gives that . Since is linearly independent, we have for . Going back to the original equation   , we see that and hence for all , since is linearly independent.  Finally we extend to an ordered basis of arbitrarily.  By our construction, for any we have and hence Note that, in our construction, .    Every Matrix Equivalent to Unique Matrix   Every matrix with entries in a field is equivalent to a unique matrix of the form where is the rank of .    Let and and be the linear transformation given by , matrix multiplication. (I have called this map in the past.) If and are the standard basis of and then .  The Theorem gives that there are bases and of and such that So, by Proposition , we have with and . Note that are invertible since they are change of basis matrices (see ).  The uniqueness of follows from the fact that , which does not depend on a choice of bases.    "
},
{
  "id": "def-change-of-basis-matrix",
  "level": "2",
  "url": "sec-cob.html#def-change-of-basis-matrix",
  "type": "Definition",
  "number": "13.33",
  "title": "Change of Basis Matrix (CoB).",
  "body": "Change of Basis Matrix (CoB)   Let be a finite rank free module over a commutative ring , and let and be bases of . Let be the identity map on . Then is called the change of basis matrix from to    "
},
{
  "id": "remark-73",
  "level": "2",
  "url": "sec-cob.html#remark-73",
  "type": "Remark",
  "number": "13.34",
  "title": "",
  "body": " By Proposition, is an invertible matrix and its inverse It follows from that that is, multiplication by really does change the representation of vectors by column vectors from one basis to another.  "
},
{
  "id": "exe-cob-matrix-and-standard-free-module",
  "level": "2",
  "url": "sec-cob.html#exe-cob-matrix-and-standard-free-module",
  "type": "Example",
  "number": "13.35",
  "title": "CoB Matrix and Standard Free Module.",
  "body": "CoB Matrix and Standard Free Module  Say , is the standard basis (so is a column vector with a in the -th position and 's elsewhere). Note that for all .  Let be any other basis of . Then and so the change of basis matrix satisfies, on the one hand, and, on the other hand, That is, is the matrix whose columns are .  "
},
{
  "id": "exe-cob-and-p_n",
  "level": "2",
  "url": "sec-cob.html#exe-cob-and-p_n",
  "type": "Example",
  "number": "13.36",
  "title": "CoB and <span class=\"process-math\">\\(P_n\\)<\/span>.",
  "body": "CoB and  Consider , let and be bases of . We calculate the change of basis matrix. We have Thus, the change of basis matrix is given by If we wish to represent in the basis , we start by noting (where recall means to take the transpose) and compute to get . This tells us that   "
},
{
  "id": "prop-cob-and-identity",
  "level": "2",
  "url": "sec-cob.html#prop-cob-and-identity",
  "type": "Proposition",
  "number": "13.37",
  "title": "CoB and Identity.",
  "body": "CoB and Identity   Let be finitely generated free modules over a commutative ring , let and be bases of , let and be bases of , and let be a homomorphism. Then     This is seen to hold by applying twice (since ).   "
},
{
  "id": "def-equivalent-matrices",
  "level": "2",
  "url": "sec-cob.html#def-equivalent-matrices",
  "type": "Definition",
  "number": "13.38",
  "title": "Equivalent Matrices.",
  "body": "Equivalent Matrices   Two matrices and are equivalent if there exists invertible matrices and (of the appropriate sizes) so that .   "
},
{
  "id": "remark-74",
  "level": "2",
  "url": "sec-cob.html#remark-74",
  "type": "Remark",
  "number": "13.39",
  "title": "",
  "body": "With this bit of terminology, we can say that two matrices representing the same linear transformation with respect to a different pair of bases are equivalent. The converse is also true: If two matrices are equivalent, then they represent the same linear transformation with respect to different bases. "
},
{
  "id": "thm-finding-equivalent-matrices",
  "level": "2",
  "url": "sec-cob.html#thm-finding-equivalent-matrices",
  "type": "Theorem",
  "number": "13.40",
  "title": "Finding Equivalent Matrices.",
  "body": "Finding Equivalent Matrices   Let be a field. Given an -linear transformation between finite dimensional -vector spaces and , there are bases and of and , respectively, such that where and the 's denote appropriately sized matrices with all entries.    We form and in steps.  Start by picking an ordered basis of the image of . For each pick such that and set . Then pick a basis of the kernel of . Let us list the elements of as .  I claim that is a basis of . (Note that since for all with and for all .) Pick . Then, since spans the image of , we have for some scalars . It follows that and hence, since the kernel is spanned by , we have for some . We rearranging this equation, we conclude and thus spans .  Now say for some 's in . Since for all and for all , this gives that . Since is linearly independent, we have for . Going back to the original equation   , we see that and hence for all , since is linearly independent.  Finally we extend to an ordered basis of arbitrarily.  By our construction, for any we have and hence Note that, in our construction, .   "
},
{
  "id": "cor-every-mtimes-n-matrix-equivalent-to-unique-matrix",
  "level": "2",
  "url": "sec-cob.html#cor-every-mtimes-n-matrix-equivalent-to-unique-matrix",
  "type": "Corollary",
  "number": "13.41",
  "title": "Every <span class=\"process-math\">\\(m\\times n\\)<\/span> Matrix Equivalent to Unique Matrix.",
  "body": "Every Matrix Equivalent to Unique Matrix   Every matrix with entries in a field is equivalent to a unique matrix of the form where is the rank of .    Let and and be the linear transformation given by , matrix multiplication. (I have called this map in the past.) If and are the standard basis of and then .  The Theorem gives that there are bases and of and such that So, by Proposition , we have with and . Note that are invertible since they are change of basis matrices (see ).  The uniqueness of follows from the fact that , which does not depend on a choice of bases.   "
},
{
  "id": "sec-elematix",
  "level": "1",
  "url": "sec-elematix.html",
  "type": "Section",
  "number": "13.6",
  "title": "Elementary Matrices",
  "body": "Elementary Matrices  Elementary Basis Change Operations   Let be a commutative ring with , let be a free -module of finite rank , and let be an ordered basis for . An elementary basis change operation on the basis is one of the following three types of operations:   (Type I) Replacing by for some and some .    (Type II) Replacing by for some and some unit of ,    (Type III) Swapping the positions of and for some .       Elementary Row Operations   Let be a commutative ring with . An elementary row (column) operation on a matrix is one of the following three types of operations:   (Type I) Adding an element of times a row (column) of to a different row column of .    (Type II) Multiplying a row (column) of by a unit of .    (Type III) Interchanging two rows (columns) of .       Elementary Matrix   Let be a commutative ring with . An elementary matrix over is an matrix obtained from by applying a single elementary column operation (or, equivalently, a single elementary column operation). In more detail:   (Type I) For and with , let be the type I elementary matrix with 's on the diagonal, in the position, and everywhere else.    (Type II) For and let be the type II elementary matrix with entry , entry for all , and everywhere else.    (Type III) For with , let be the type III elementary matrix with in the and positions and in the positions for all , and 0 in all other entries.       In particular, the Lemma and the fact that elementary matrices are invertible shows that if is an invertible matrix, then the result of performing elementary row or column operations on results in another invertible matrix.  Properties of Elementary Matrices   Let be an elementary matrix.   For a free -module with basis such that , is the change of basis matrix , where is the basis obtained from by the corresponding elementary basis change operation.    If , then the product matrix is the result of performing the corresponding elementary column operation on .    If , then the product matrix is the result of performing the corresponding elementary column operation on .       This is true for commutative rings in general, but the proof is much harder.  Matrix Invertible iff Columns Span   Let be a field and let be an matrix for . is invertible if and only if its columns span .     is invertible if and only if the associated linear map given by is an isomorphism. By the rank-nullity Theorem, if and only if if and only if is an isomorphism. The result follows, since and is the span of the columns of .     The previous proof used the following fact implicitly:   If is a subspace of a finite dimensional -vector space (where is a field) and , then .   This holds since any basis of can be extended to a basis of and hence if is properly contained in we must have .  This fact fails for commutative rings in general. For instance, let and . Then and are free of rank one and is a submodule of , but .   Gauss   Let be a field and let be an invertible matrix for . Then can be transformed to a matrix of the form for some via elementary column and column operations of type I.    Proceed by induction on . If , there is nothing to prove (since cannot be the matrix.) Assume and that the result holds for by invertible matrices.  Let . Since is invertible, its column space must have dimension , by the previous Lemma, and in particular none of its columns can be (since otherwise the column space would be spanned by vectors and would thus have dimension at most ). In particular, its second-to-last column has at least one non-zero entry. By either doing nothing or by adding a suitable row to the last row, we can assume . By adding times column to column , we obtain . Next do suitable column operations of type I to arrive at for all , and finally do row operations of type I to also get for all . We have thus transformed to a matrix of the form . Note that this matrix remains invertible (see Remark ) and so the columns of this matrix span by the previous Lemma. Since for all , the columns of must span . Thus is invertible by the previous Lemma. By induction, we can transform via type I row and column operations to a matrix of the form as in the statement. Notice that since the for all and for all , such operations will also put into this form.    Invertible Matrices and the Identity Matrix   If is invertible then it can be transformed into via elementary column and column operations of type I and II.    Apply the Theorem and then use a single type II operator; i.e., multiply the first row by .    Square Matrix Invertibility   If is a field, then a square matrix is invertible if and only if it is a product of elementary matrices.    ( ) Every elementary matrix is invertible and a product of invertible matrices is again invertible.  ( ) If is invertible, then by the previous Corollary and Lemma there exists elementary matrices , of type I or II such that and hence . This proves the statement since the inverse of an elementary matrix is an elementary matrix.    Equivalent Matrices Characterization   Given two matrices and with entries in a field, and are equivalent if and only if each can be transformed to the other via elementary column and column operations.     For a ring , recall that is the group of invertible matrices with entries in . Let be the subset of consisting of all products of elementary matrices of type I. Since the inverse of an elementary matrix of type I is again an elementary matrix of type I, is a subgroup of . In fact it is a normal subgroup, at least when , and hence the quotient group is defined in this case.  As a consequence of the Theorem above, if is a field then there is an isomorphism of groups where is the group of units in .  For a general ring, the extent to which is “larger'' than measure the extent to which Theorem fails.  The algebraic -group is defined to be (and it is usually isomorphic to for ). Moreover, is the derived subgroup of , and hence is the abelianization of .   "
},
{
  "id": "def-elementary-basis-change-operations",
  "level": "2",
  "url": "sec-elematix.html#def-elementary-basis-change-operations",
  "type": "Definition",
  "number": "13.42",
  "title": "Elementary Basis Change Operations.",
  "body": "Elementary Basis Change Operations   Let be a commutative ring with , let be a free -module of finite rank , and let be an ordered basis for . An elementary basis change operation on the basis is one of the following three types of operations:   (Type I) Replacing by for some and some .    (Type II) Replacing by for some and some unit of ,    (Type III) Swapping the positions of and for some .      "
},
{
  "id": "def-elementary-row-operations",
  "level": "2",
  "url": "sec-elematix.html#def-elementary-row-operations",
  "type": "Definition",
  "number": "13.43",
  "title": "Elementary Row Operations.",
  "body": "Elementary Row Operations   Let be a commutative ring with . An elementary row (column) operation on a matrix is one of the following three types of operations:   (Type I) Adding an element of times a row (column) of to a different row column of .    (Type II) Multiplying a row (column) of by a unit of .    (Type III) Interchanging two rows (columns) of .      "
},
{
  "id": "def-elementary-matrix",
  "level": "2",
  "url": "sec-elematix.html#def-elementary-matrix",
  "type": "Definition",
  "number": "13.44",
  "title": "Elementary Matrix.",
  "body": "Elementary Matrix   Let be a commutative ring with . An elementary matrix over is an matrix obtained from by applying a single elementary column operation (or, equivalently, a single elementary column operation). In more detail:   (Type I) For and with , let be the type I elementary matrix with 's on the diagonal, in the position, and everywhere else.    (Type II) For and let be the type II elementary matrix with entry , entry for all , and everywhere else.    (Type III) For with , let be the type III elementary matrix with in the and positions and in the positions for all , and 0 in all other entries.      "
},
{
  "id": "remark-75",
  "level": "2",
  "url": "sec-elematix.html#remark-75",
  "type": "Remark",
  "number": "13.45",
  "title": "",
  "body": "In particular, the Lemma and the fact that elementary matrices are invertible shows that if is an invertible matrix, then the result of performing elementary row or column operations on results in another invertible matrix. "
},
{
  "id": "thm-properties-of-elementary-matrices",
  "level": "2",
  "url": "sec-elematix.html#thm-properties-of-elementary-matrices",
  "type": "Theorem",
  "number": "13.46",
  "title": "Properties of Elementary Matrices.",
  "body": "Properties of Elementary Matrices   Let be an elementary matrix.   For a free -module with basis such that , is the change of basis matrix , where is the basis obtained from by the corresponding elementary basis change operation.    If , then the product matrix is the result of performing the corresponding elementary column operation on .    If , then the product matrix is the result of performing the corresponding elementary column operation on .      "
},
{
  "id": "remark-76",
  "level": "2",
  "url": "sec-elematix.html#remark-76",
  "type": "Remark",
  "number": "13.47",
  "title": "",
  "body": "This is true for commutative rings in general, but the proof is much harder. "
},
{
  "id": "lem-matrix-invertible-iff-columns-span-fn",
  "level": "2",
  "url": "sec-elematix.html#lem-matrix-invertible-iff-columns-span-fn",
  "type": "Lemma",
  "number": "13.48",
  "title": "Matrix Invertible iff Columns Span <span class=\"process-math\">\\(F^n\\)<\/span>.",
  "body": "Matrix Invertible iff Columns Span   Let be a field and let be an matrix for . is invertible if and only if its columns span .     is invertible if and only if the associated linear map given by is an isomorphism. By the rank-nullity Theorem, if and only if if and only if is an isomorphism. The result follows, since and is the span of the columns of .   "
},
{
  "id": "remark-77",
  "level": "2",
  "url": "sec-elematix.html#remark-77",
  "type": "Remark",
  "number": "13.49",
  "title": "",
  "body": " The previous proof used the following fact implicitly:   If is a subspace of a finite dimensional -vector space (where is a field) and , then .   This holds since any basis of can be extended to a basis of and hence if is properly contained in we must have .  This fact fails for commutative rings in general. For instance, let and . Then and are free of rank one and is a submodule of , but .  "
},
{
  "id": "thm-gauss",
  "level": "2",
  "url": "sec-elematix.html#thm-gauss",
  "type": "Theorem",
  "number": "13.50",
  "title": "Gauss.",
  "body": "Gauss   Let be a field and let be an invertible matrix for . Then can be transformed to a matrix of the form for some via elementary column and column operations of type I.    Proceed by induction on . If , there is nothing to prove (since cannot be the matrix.) Assume and that the result holds for by invertible matrices.  Let . Since is invertible, its column space must have dimension , by the previous Lemma, and in particular none of its columns can be (since otherwise the column space would be spanned by vectors and would thus have dimension at most ). In particular, its second-to-last column has at least one non-zero entry. By either doing nothing or by adding a suitable row to the last row, we can assume . By adding times column to column , we obtain . Next do suitable column operations of type I to arrive at for all , and finally do row operations of type I to also get for all . We have thus transformed to a matrix of the form . Note that this matrix remains invertible (see Remark ) and so the columns of this matrix span by the previous Lemma. Since for all , the columns of must span . Thus is invertible by the previous Lemma. By induction, we can transform via type I row and column operations to a matrix of the form as in the statement. Notice that since the for all and for all , such operations will also put into this form.   "
},
{
  "id": "cor-invertible-matrices-and-identity-matrix",
  "level": "2",
  "url": "sec-elematix.html#cor-invertible-matrices-and-identity-matrix",
  "type": "Corollary",
  "number": "13.51",
  "title": "Invertible Matrices and the Identity Matrix.",
  "body": "Invertible Matrices and the Identity Matrix   If is invertible then it can be transformed into via elementary column and column operations of type I and II.    Apply the Theorem and then use a single type II operator; i.e., multiply the first row by .   "
},
{
  "id": "cor-square-matrix-invertible-iff-pi-of-elementary-matrices",
  "level": "2",
  "url": "sec-elematix.html#cor-square-matrix-invertible-iff-pi-of-elementary-matrices",
  "type": "Corollary",
  "number": "13.52",
  "title": "Square Matrix Invertibility.",
  "body": "Square Matrix Invertibility   If is a field, then a square matrix is invertible if and only if it is a product of elementary matrices.    ( ) Every elementary matrix is invertible and a product of invertible matrices is again invertible.  ( ) If is invertible, then by the previous Corollary and Lemma there exists elementary matrices , of type I or II such that and hence . This proves the statement since the inverse of an elementary matrix is an elementary matrix.   "
},
{
  "id": "cor-matrices-equivalent-iff-path-with-operations",
  "level": "2",
  "url": "sec-elematix.html#cor-matrices-equivalent-iff-path-with-operations",
  "type": "Corollary",
  "number": "13.53",
  "title": "Equivalent Matrices Characterization.",
  "body": "Equivalent Matrices Characterization   Given two matrices and with entries in a field, and are equivalent if and only if each can be transformed to the other via elementary column and column operations.   "
},
{
  "id": "remark-78",
  "level": "2",
  "url": "sec-elematix.html#remark-78",
  "type": "Remark",
  "number": "13.54",
  "title": "",
  "body": " For a ring , recall that is the group of invertible matrices with entries in . Let be the subset of consisting of all products of elementary matrices of type I. Since the inverse of an elementary matrix of type I is again an elementary matrix of type I, is a subgroup of . In fact it is a normal subgroup, at least when , and hence the quotient group is defined in this case.  As a consequence of the Theorem above, if is a field then there is an isomorphism of groups where is the group of units in .  For a general ring, the extent to which is “larger'' than measure the extent to which Theorem fails.  The algebraic -group is defined to be (and it is usually isomorphic to for ). Moreover, is the derived subgroup of , and hence is the abelianization of .  "
},
{
  "id": "sec-operator",
  "level": "1",
  "url": "sec-operator.html",
  "type": "Section",
  "number": "13.7",
  "title": "Linear Operators on Free Modules",
  "body": "Linear Operators on Free Modules  Linear Operator   By a linear operator (or -linear operator) on we mean an -module endomorphism of .    Let be a commutative ring (with ) and assume is a free -module of finite rank . Upon choosing an ordered basis of , we may represent as a matrix — a key point here is that for operators we usually use the same basis for both the source and target of the map.  Representing Bases  Here is a concrete example. Let , the collection of polynomials in with coefficients in of degree at most . Let be the map sending a polynomial to its derivative. The most obvious choice for a bases of is . With respect to this basis, the map is represented by the matrix   If, when , we instead used as a basis, then the matrix for would be     Say is the square matrix representing with respect to . If is another basis of and is the matrix representing with respect to (used for both the source and target of the map), then we have where is the change of basis matrix. This holds since    Similar Matrices   Two matrices and with entries in a commutative ring are called similar if for some invertible matrix .     It is easy to decide if two matrices with entries in a field are equivalent — just row reduce them to see if they have the same rank.  But it is in general quite difficult to decide if two square matrices with entries in a field are similar. The operation can in principle be broken down into a sequence of steps by factoring into elementary matrices. That is, two square matrices and of the same size are similar if and only if one can be obtained from the other by a sequence of operations of the form where is an elementary matrix.  But such a stap amounts to doing a row operation and simultaneously doing the inverse column operation. There is no simple algorithm, such as Gaussian reduction, to determine whether matrices are similar.   Linear Operators and Bases   Let be a non-zero commutative ring. Given a linear operator on a free -module of finite rank , we have:   The matrices representing with respect to any two choices of bases of are similar    If represents with respect to a basis of and if is similar to , then there is a basis of such that the matrix representing with respect to is .       We proved the first assertion above.  Say and for some invertible matrix . By Proposition above, for a (unique) new basis . So .    "
},
{
  "id": "def-linear-operator",
  "level": "2",
  "url": "sec-operator.html#def-linear-operator",
  "type": "Definition",
  "number": "13.55",
  "title": "Linear Operator.",
  "body": "Linear Operator   By a linear operator (or -linear operator) on we mean an -module endomorphism of .   "
},
{
  "id": "remark-79",
  "level": "2",
  "url": "sec-operator.html#remark-79",
  "type": "Remark",
  "number": "13.56",
  "title": "",
  "body": "Let be a commutative ring (with ) and assume is a free -module of finite rank . Upon choosing an ordered basis of , we may represent as a matrix — a key point here is that for operators we usually use the same basis for both the source and target of the map. "
},
{
  "id": "ex-representing-bases",
  "level": "2",
  "url": "sec-operator.html#ex-representing-bases",
  "type": "Example",
  "number": "13.57",
  "title": "Representing Bases.",
  "body": "Representing Bases  Here is a concrete example. Let , the collection of polynomials in with coefficients in of degree at most . Let be the map sending a polynomial to its derivative. The most obvious choice for a bases of is . With respect to this basis, the map is represented by the matrix   If, when , we instead used as a basis, then the matrix for would be   "
},
{
  "id": "remark-80",
  "level": "2",
  "url": "sec-operator.html#remark-80",
  "type": "Remark",
  "number": "13.58",
  "title": "",
  "body": " Say is the square matrix representing with respect to . If is another basis of and is the matrix representing with respect to (used for both the source and target of the map), then we have where is the change of basis matrix. This holds since   "
},
{
  "id": "def-similar-matrices",
  "level": "2",
  "url": "sec-operator.html#def-similar-matrices",
  "type": "Definition",
  "number": "13.59",
  "title": "Similar Matrices.",
  "body": "Similar Matrices   Two matrices and with entries in a commutative ring are called similar if for some invertible matrix .   "
},
{
  "id": "remark-81",
  "level": "2",
  "url": "sec-operator.html#remark-81",
  "type": "Remark",
  "number": "13.60",
  "title": "",
  "body": " It is easy to decide if two matrices with entries in a field are equivalent — just row reduce them to see if they have the same rank.  But it is in general quite difficult to decide if two square matrices with entries in a field are similar. The operation can in principle be broken down into a sequence of steps by factoring into elementary matrices. That is, two square matrices and of the same size are similar if and only if one can be obtained from the other by a sequence of operations of the form where is an elementary matrix.  But such a stap amounts to doing a row operation and simultaneously doing the inverse column operation. There is no simple algorithm, such as Gaussian reduction, to determine whether matrices are similar.  "
},
{
  "id": "prop-linear-operators-and-bases",
  "level": "2",
  "url": "sec-operator.html#prop-linear-operators-and-bases",
  "type": "Proposition",
  "number": "13.61",
  "title": "Linear Operators and Bases.",
  "body": "Linear Operators and Bases   Let be a non-zero commutative ring. Given a linear operator on a free -module of finite rank , we have:   The matrices representing with respect to any two choices of bases of are similar    If represents with respect to a basis of and if is similar to , then there is a basis of such that the matrix representing with respect to is .       We proved the first assertion above.  Say and for some invertible matrix . By Proposition above, for a (unique) new basis . So .   "
},
{
  "id": "sec-modpres",
  "level": "1",
  "url": "sec-modpres.html",
  "type": "Section",
  "number": "14.1",
  "title": "Finitely Presented Modules",
  "body": "Finitely Presented Modules   You have seen presentations for groups in the past; these consisted of a set of generators and a set of relations among these generators. Presentations are important for modules as well. In the case of modules, the relations may be encoded by a matrix.   -Module Presentation   Let be a non-zero commutative ring, let , and let be the -module homomorphism represented by with respect to the standard bases; that is, define . The - module presented by  is the -module .  Equivalently, the module presented by is where are the columns of .    -Module Presentation  What -module is presented by Formally, is the quotient module , where is defined by . Since is generated by its standard basis elements , it follows that is generated by the cosets of the . To keep the notation short, we set .  Let and note that is the submodule of generated by the columns of , i.e. Since maps to under the quotient map , we have that the relations of can be written as We can now see that this is a rather inefficient presentation, since we can clearly use the first equation to solve for for . This implies that can be generated using only and that is This eliminates the first equation, and by substituting the latter two relations become Now we can also eliminate , i.e leaving just two generators that satisfy Let us notice that what we have really done is to perform certain transformations of the matrix . In detail, we can use elementary row operations to “make zeros'' on the 1st and 2nd columns as follows: Eliminating the generators and amounts to dropping the first two columns (which are the 3rd and 4th standard basis vectors) as well as the last two rows. As we will prove soon, this shows that the -module presented by is isomorphic to the -module presented by We can go further. Set . Then and also form a generating set of . The relation on translates to given by the matrix Note that we have done a row operation (subtract twice row 1 from row 2) to get from to . Continuing in this fashion by subtracting 12 row 2 from row 1 we also form The last matrix presents the module with generators  ) and relation . As we will see, this proves .   Matrices, Modules, and Isomorphisms   Let be a non-zero commutative ring and let and for some . Then and present isomorphic -modules if can be obtained from by any finite sequence of operations of the following form:   an elementary row operation,    an elementary column operation,    deletion of the -th column and -th row of a matrix whose -th column is the vector ,    the reverse of (3),    deletion of a column of all 's,    the reverse of (5).       Note: This proof was not covered in class. Assume is obtained from by a single one of the steps listed above. We need to prove that there is an isomorphism of -modules.   In this case, for some elementary matrix . More generally, let be any invertible matrix such that . Then is an isomorphism and it maps bijectively onto . It follows that the kernel of the composition is and hence by the first isomorphism theorem it induces an isomorphism     In this case, for some elementary matrix . More generally, assume is any invertible matrix such that . Since is an isomorphism, we have and so . (For this one we get equality, not merely an isomorphism.)    For notational simplicity, let us assume ; that is, the first column of is and is obtained by deleting the first row and column of , giving a matrix. So where denotes some row vector and denotes a column of all 's. Let and be projection onto the last and components, respectively. Because of the nature of and , the diagram (page 40 in notes) commutes. Moreover, the kernel of is and the kernel of is , and since the first column of is , maps the kernel of bijectively onto the kernel of . A “diagram chase'' shows that . In detail: Since the diagram commutes, and hence induces an -module homomorphism (by the -th isomorphism theorem). Since is onto, so is . Suppose . So, . Say . Since is onto, for some . Then and thus . As noted above, maps onto and hence for some vector . This proves and hence that in . This proves is one-to-one.    It is clear that the columns of generate the same submodule of as do the columns of , and thus and .    Since the isomorphism relation is reflexive, the statements of parts 3. & 5. show that parts 4.& 6. are true as well.        The converse is true for some rings , including Euclidean domains.    In fact, if and are equivalent matrices, then , as I shall prove below. This implies both (1) and (2) from the Theorem.   Diagonal Presentation   Suppose is a commutative ring and is a matrix such that for all and set for all . If then and if then     Assume and define to be the map sending to where for . (I.e., is the unique -map sending the -th standard basis vector to with in the -th position, for , and to itself for .) Then is clearly onto and the kernel of is the set of those tuples such that for some for all and for . Given such a tuple, This proves is contained Arguing backwards we see that the opposite containment also holds, so that in fact .  By the First Isomorphism Theorem, If then, by deleting columns of all 's, we may reduce to the case when , which is included in the first case.    "
},
{
  "id": "remark-82",
  "level": "2",
  "url": "sec-modpres.html#remark-82",
  "type": "Remark",
  "number": "14.1",
  "title": "",
  "body": " You have seen presentations for groups in the past; these consisted of a set of generators and a set of relations among these generators. Presentations are important for modules as well. In the case of modules, the relations may be encoded by a matrix.  "
},
{
  "id": "def-module-presentation",
  "level": "2",
  "url": "sec-modpres.html#def-module-presentation",
  "type": "Definition",
  "number": "14.2",
  "title": "<span class=\"process-math\">\\(R\\)<\/span>-Module Presentation.",
  "body": "-Module Presentation   Let be a non-zero commutative ring, let , and let be the -module homomorphism represented by with respect to the standard bases; that is, define . The - module presented by  is the -module .  Equivalently, the module presented by is where are the columns of .   "
},
{
  "id": "exe-z-module-presentation",
  "level": "2",
  "url": "sec-modpres.html#exe-z-module-presentation",
  "type": "Example",
  "number": "14.3",
  "title": "<span class=\"process-math\">\\(\\Z\\)<\/span>-Module Presentation.",
  "body": "-Module Presentation  What -module is presented by Formally, is the quotient module , where is defined by . Since is generated by its standard basis elements , it follows that is generated by the cosets of the . To keep the notation short, we set .  Let and note that is the submodule of generated by the columns of , i.e. Since maps to under the quotient map , we have that the relations of can be written as We can now see that this is a rather inefficient presentation, since we can clearly use the first equation to solve for for . This implies that can be generated using only and that is This eliminates the first equation, and by substituting the latter two relations become Now we can also eliminate , i.e leaving just two generators that satisfy Let us notice that what we have really done is to perform certain transformations of the matrix . In detail, we can use elementary row operations to “make zeros'' on the 1st and 2nd columns as follows: Eliminating the generators and amounts to dropping the first two columns (which are the 3rd and 4th standard basis vectors) as well as the last two rows. As we will prove soon, this shows that the -module presented by is isomorphic to the -module presented by We can go further. Set . Then and also form a generating set of . The relation on translates to given by the matrix Note that we have done a row operation (subtract twice row 1 from row 2) to get from to . Continuing in this fashion by subtracting 12 row 2 from row 1 we also form The last matrix presents the module with generators  ) and relation . As we will see, this proves .  "
},
{
  "id": "thm-matrices-modules-and-isomorphisms",
  "level": "2",
  "url": "sec-modpres.html#thm-matrices-modules-and-isomorphisms",
  "type": "Theorem",
  "number": "14.4",
  "title": "Matrices, Modules, and Isomorphisms.",
  "body": "Matrices, Modules, and Isomorphisms   Let be a non-zero commutative ring and let and for some . Then and present isomorphic -modules if can be obtained from by any finite sequence of operations of the following form:   an elementary row operation,    an elementary column operation,    deletion of the -th column and -th row of a matrix whose -th column is the vector ,    the reverse of (3),    deletion of a column of all 's,    the reverse of (5).       Note: This proof was not covered in class. Assume is obtained from by a single one of the steps listed above. We need to prove that there is an isomorphism of -modules.   In this case, for some elementary matrix . More generally, let be any invertible matrix such that . Then is an isomorphism and it maps bijectively onto . It follows that the kernel of the composition is and hence by the first isomorphism theorem it induces an isomorphism     In this case, for some elementary matrix . More generally, assume is any invertible matrix such that . Since is an isomorphism, we have and so . (For this one we get equality, not merely an isomorphism.)    For notational simplicity, let us assume ; that is, the first column of is and is obtained by deleting the first row and column of , giving a matrix. So where denotes some row vector and denotes a column of all 's. Let and be projection onto the last and components, respectively. Because of the nature of and , the diagram (page 40 in notes) commutes. Moreover, the kernel of is and the kernel of is , and since the first column of is , maps the kernel of bijectively onto the kernel of . A “diagram chase'' shows that . In detail: Since the diagram commutes, and hence induces an -module homomorphism (by the -th isomorphism theorem). Since is onto, so is . Suppose . So, . Say . Since is onto, for some . Then and thus . As noted above, maps onto and hence for some vector . This proves and hence that in . This proves is one-to-one.    It is clear that the columns of generate the same submodule of as do the columns of , and thus and .    Since the isomorphism relation is reflexive, the statements of parts 3. & 5. show that parts 4.& 6. are true as well.      "
},
{
  "id": "remark-83",
  "level": "2",
  "url": "sec-modpres.html#remark-83",
  "type": "Remark",
  "number": "14.5",
  "title": "",
  "body": " The converse is true for some rings , including Euclidean domains.  "
},
{
  "id": "remark-84",
  "level": "2",
  "url": "sec-modpres.html#remark-84",
  "type": "Remark",
  "number": "14.6",
  "title": "",
  "body": " In fact, if and are equivalent matrices, then , as I shall prove below. This implies both (1) and (2) from the Theorem.  "
},
{
  "id": "lem-diagonal-presentation",
  "level": "2",
  "url": "sec-modpres.html#lem-diagonal-presentation",
  "type": "Lemma",
  "number": "14.7",
  "title": "Diagonal Presentation.",
  "body": "Diagonal Presentation   Suppose is a commutative ring and is a matrix such that for all and set for all . If then and if then     Assume and define to be the map sending to where for . (I.e., is the unique -map sending the -th standard basis vector to with in the -th position, for , and to itself for .) Then is clearly onto and the kernel of is the set of those tuples such that for some for all and for . Given such a tuple, This proves is contained Arguing backwards we see that the opposite containment also holds, so that in fact .  By the First Isomorphism Theorem, If then, by deleting columns of all 's, we may reduce to the case when , which is included in the first case.   "
},
{
  "id": "sec-snf",
  "level": "1",
  "url": "sec-snf.html",
  "type": "Section",
  "number": "14.2",
  "title": "Smith Normal Form",
  "body": "Smith Normal Form  Smith Normal Form   Let be a Euclidean domain and let . Then there is a sequence of elementary column and column operations that transform into a matrix such that all non-diagonal entries of are and the diagonal entries of satisfy     The main point of the proof is to establish:  {}: There is a sequence of row and column operations that transforms to for some matrix and where . (We adopt the convention that if is the matrix of all 's, then .) Note that, by Lemma , we have and thus .  Granting this claim, by applying it again to we arrive at a matrix of the form where and and . (Observe that the row and column operations on will not affect the first row and column of .) Continuing in this fashion, we arrive at the matrix in the statement.  To prove the claim, let be the upper-left entry of .  Suppose happens to be . Then, in particular, it divides every entry of the first row and column of , and so by doing row and column operations of type I, we may out these entries to arrive at a matrix of the desired form directly.  In general, let to be the number of prime factors in a prime factorization of of , and proceed by induction on .  If , then (up to associates), and we already did this case.  Assume . Then there is at least one entry such that .  Case I: There is such a belonging to the first row of . In this case we we may implement the Euclidean algorithm in the form of suitable column operations to replace by and by , as in the example above. Since , is a proper divisor of , and it follows that the number of factors in a prime factorization of is smaller than , and we are done by induction.  Case II: There is such a in the first column. Just as in the previous case, we are done by induction upon implementing the Euclidean algorithm using suitable row operations.  Case III: divides every entry of the first row and first column. In this case, suitable row and column operations transform to By Lemma we have , and thus there is some element of such that (since we are assuming is not the gcd of ). A suitable row operation puts into row one without affecting , and we are back to the previously solved Case I.     Note that some of the diagonal entries could be . Recall for all (including ), and is the only element that divides . So, the “tail'' end of the sequence could be all 's, and indeed if for some then all subsequent diagonal entries must be .   FTFPMED: First Version   If is a Euclidean domain and is a finitely presented -module, then is isomorphic to a direct sum of cyclic modules: for some and some non-zero, non-invertible elements such that .    This is an immediate consequence of the SNF Theorem, Theorem parts (1) and (2), and Lemma .    Special Case of SNF  Suppose is a Euclidean domain and is a matrix. Column operations of type I in this case amount to adding a multiple of one element in this list to another one. The SNF Theorem in this case amounts to the Euclidean algorithm: By adding a suitable multiple of the one entry in the first two positions to the other, in the usual back-and-forth way, we arrive at where . Repeat this for columns and to arrive at where . Continuing in this fashion we arrive at where .  The proof of the SNF Theorem in general amounts to an extended version of the idea used in this special case.   Finding SNF  Consider the matrix with entries in  Do row and column operations to put into its Smith Normal Form: Conclude that the module presented by is isomorphic to .    A version of the SNF Theorem and its Corollary are valid for PIDs: If is a PID and , there there exist invertible matrices and such that has the form as in the theorem. It follows that every finitely presented module over a PID is direct sum of cyclic ones.  For Euclidean domains, and may be taken to be products of elementary matrices, and the Smith normal form can be found algorithmically.   Matrix GCDs in PIDs   Suppose is a PID and is a matrix with entries in and is a matrix obtained from via elementary column and column operations. Then where the gcd of a matrix is defined to be the gcd of all of its entries.    Minor   A  minor of is the determinant of a submatrix of ; more formally, if is an matrix, a minor of is any element of given as follows: Choose and , let be the matrix with . Then is a minor of .    Ideals Generated by Minors   For any commutative ring and matrix , if is obtained from via an elementary column or column operation, then the ideal of generated by all the minors of equals the ideal of generated by all the minors of .    Smith Normal Form is Unique   Assume is a PID and . Suppose can be obtained from via a sequence of elementary column and column operations and that is diagonal with diagonal entries such that . Then In particular, the SNF of a matrix is unique up to associates.    Recall that for a PID , the gcd of any set of elements is defined to be a generatpr of the ideal they generate. So, Lemma implies that for all . Since is diagonal, the only non-zero minors of are those given by indices and for which for all , and moreover such a minor is equal to . Since for all , it follows that divides for all . Thus , for each , and hence as claimed.     So, another way of finding the SNF of a matrix with entries in a Euclidean domain is to calculate for all . This is not practical except in very special cases.   "
},
{
  "id": "thm-snf",
  "level": "2",
  "url": "sec-snf.html#thm-snf",
  "type": "Theorem",
  "number": "14.8",
  "title": "Smith Normal Form.",
  "body": "Smith Normal Form   Let be a Euclidean domain and let . Then there is a sequence of elementary column and column operations that transform into a matrix such that all non-diagonal entries of are and the diagonal entries of satisfy     The main point of the proof is to establish:  {}: There is a sequence of row and column operations that transforms to for some matrix and where . (We adopt the convention that if is the matrix of all 's, then .) Note that, by Lemma , we have and thus .  Granting this claim, by applying it again to we arrive at a matrix of the form where and and . (Observe that the row and column operations on will not affect the first row and column of .) Continuing in this fashion, we arrive at the matrix in the statement.  To prove the claim, let be the upper-left entry of .  Suppose happens to be . Then, in particular, it divides every entry of the first row and column of , and so by doing row and column operations of type I, we may out these entries to arrive at a matrix of the desired form directly.  In general, let to be the number of prime factors in a prime factorization of of , and proceed by induction on .  If , then (up to associates), and we already did this case.  Assume . Then there is at least one entry such that .  Case I: There is such a belonging to the first row of . In this case we we may implement the Euclidean algorithm in the form of suitable column operations to replace by and by , as in the example above. Since , is a proper divisor of , and it follows that the number of factors in a prime factorization of is smaller than , and we are done by induction.  Case II: There is such a in the first column. Just as in the previous case, we are done by induction upon implementing the Euclidean algorithm using suitable row operations.  Case III: divides every entry of the first row and first column. In this case, suitable row and column operations transform to By Lemma we have , and thus there is some element of such that (since we are assuming is not the gcd of ). A suitable row operation puts into row one without affecting , and we are back to the previously solved Case I.   "
},
{
  "id": "remark-85",
  "level": "2",
  "url": "sec-snf.html#remark-85",
  "type": "Remark",
  "number": "14.9",
  "title": "",
  "body": " Note that some of the diagonal entries could be . Recall for all (including ), and is the only element that divides . So, the “tail'' end of the sequence could be all 's, and indeed if for some then all subsequent diagonal entries must be .  "
},
{
  "id": "cor-ftfpmed-first-version",
  "level": "2",
  "url": "sec-snf.html#cor-ftfpmed-first-version",
  "type": "Corollary",
  "number": "14.10",
  "title": "FTFPMED: First Version.",
  "body": "FTFPMED: First Version   If is a Euclidean domain and is a finitely presented -module, then is isomorphic to a direct sum of cyclic modules: for some and some non-zero, non-invertible elements such that .    This is an immediate consequence of the SNF Theorem, Theorem parts (1) and (2), and Lemma .   "
},
{
  "id": "exe-special-case-of-snf",
  "level": "2",
  "url": "sec-snf.html#exe-special-case-of-snf",
  "type": "Example",
  "number": "14.11",
  "title": "Special Case of SNF.",
  "body": "Special Case of SNF  Suppose is a Euclidean domain and is a matrix. Column operations of type I in this case amount to adding a multiple of one element in this list to another one. The SNF Theorem in this case amounts to the Euclidean algorithm: By adding a suitable multiple of the one entry in the first two positions to the other, in the usual back-and-forth way, we arrive at where . Repeat this for columns and to arrive at where . Continuing in this fashion we arrive at where .  The proof of the SNF Theorem in general amounts to an extended version of the idea used in this special case.  "
},
{
  "id": "exe-finding-snf",
  "level": "2",
  "url": "sec-snf.html#exe-finding-snf",
  "type": "Example",
  "number": "14.12",
  "title": "Finding SNF.",
  "body": "Finding SNF  Consider the matrix with entries in  Do row and column operations to put into its Smith Normal Form: Conclude that the module presented by is isomorphic to .  "
},
{
  "id": "remark-86",
  "level": "2",
  "url": "sec-snf.html#remark-86",
  "type": "Remark",
  "number": "14.13",
  "title": "",
  "body": " A version of the SNF Theorem and its Corollary are valid for PIDs: If is a PID and , there there exist invertible matrices and such that has the form as in the theorem. It follows that every finitely presented module over a PID is direct sum of cyclic ones.  For Euclidean domains, and may be taken to be products of elementary matrices, and the Smith normal form can be found algorithmically.  "
},
{
  "id": "lem-gcd-of-a-matrix-in-pid",
  "level": "2",
  "url": "sec-snf.html#lem-gcd-of-a-matrix-in-pid",
  "type": "Lemma",
  "number": "14.14",
  "title": "Matrix GCDs in PIDs.",
  "body": "Matrix GCDs in PIDs   Suppose is a PID and is a matrix with entries in and is a matrix obtained from via elementary column and column operations. Then where the gcd of a matrix is defined to be the gcd of all of its entries.   "
},
{
  "id": "def-minor",
  "level": "2",
  "url": "sec-snf.html#def-minor",
  "type": "Definition",
  "number": "14.15",
  "title": "Minor.",
  "body": "Minor   A  minor of is the determinant of a submatrix of ; more formally, if is an matrix, a minor of is any element of given as follows: Choose and , let be the matrix with . Then is a minor of .   "
},
{
  "id": "lem-ideals-generated-by-minors",
  "level": "2",
  "url": "sec-snf.html#lem-ideals-generated-by-minors",
  "type": "Lemma",
  "number": "14.16",
  "title": "Ideals Generated by Minors.",
  "body": "Ideals Generated by Minors   For any commutative ring and matrix , if is obtained from via an elementary column or column operation, then the ideal of generated by all the minors of equals the ideal of generated by all the minors of .   "
},
{
  "id": "thm-smith-normal-form-is-unique",
  "level": "2",
  "url": "sec-snf.html#thm-smith-normal-form-is-unique",
  "type": "Theorem",
  "number": "14.17",
  "title": "Smith Normal Form is Unique.",
  "body": "Smith Normal Form is Unique   Assume is a PID and . Suppose can be obtained from via a sequence of elementary column and column operations and that is diagonal with diagonal entries such that . Then In particular, the SNF of a matrix is unique up to associates.    Recall that for a PID , the gcd of any set of elements is defined to be a generatpr of the ideal they generate. So, Lemma implies that for all . Since is diagonal, the only non-zero minors of are those given by indices and for which for all , and moreover such a minor is equal to . Since for all , it follows that divides for all . Thus , for each , and hence as claimed.   "
},
{
  "id": "remark-87",
  "level": "2",
  "url": "sec-snf.html#remark-87",
  "type": "Remark",
  "number": "14.18",
  "title": "",
  "body": " So, another way of finding the SNF of a matrix with entries in a Euclidean domain is to calculate for all . This is not practical except in very special cases.  "
},
{
  "id": "sec-noeth",
  "level": "1",
  "url": "sec-noeth.html",
  "type": "Section",
  "number": "14.3",
  "title": "Noetherian Rings",
  "body": "Noetherian Rings   We now address the question of which modules have finite presentations. It is clear than any such module must be finitely generated (since the cosets of generate for any matrix ). If is finitely generated, say by elements, then we can find a surjective -module homomorphism Provided the kernel of is also finitely generated, say by elements, then we may find a surjection The composition is a map between free -modules and is thus equal to for some matrix . Clearly and hence by the first isomorphism theorem so that is finitely presented.  So the real question is: For a given ring , is it the case that for all , every submodule of is finitely generated? The answer is “no'' in general, but it does hold for many rings of interest:   Ascending Chain Condition   A commutative ring has the ascending chain condition (on ideals) if given any chain of ideals in of the form there is an such that     Noetherian Rings   Suppose is a commutative ring. The following conditions are equivalent:    has the ascending chain condition on ideals.    Every ideal of is finitely generated — i.e., for every ideal , there exists a finite set of elements in such that . In this case we say is Noetherian .       Assume every ideal is finitely generated and that such a chain is given. Let . Then it is easy to see that is an ideal. (In detail, for we have for some and hence .  If , then and for some and hence there is a such that . It follows that . Finally .) Thus by assumption is finitely generated, say for some .  Each belongs to one of the 's and hence, since there are only a finite number of such elements and ideas are nested, there is an such that . It follows that and hence .  Assume has the acc for ideals and let be any ideal. Pick any element and set . If we are done. If not, pick and set . If we are done and if not pick and let . In this way we form a strictly ascending chain , and this process cannot be continued forever since has the acc. When it terminates, we have for some and thus is finitely generated.    Hilbert's Basis Theorem   If is a noetherian ring, then the polynomial rings and are noetherian for any .    Finitely Generated Modules in Noetherian Rings   If is a noetherian commutative ring, then every submodule of a finitely generated module is again finitely generated.    I will just prove the following special case (since it is all we need): For each , every submodule of is finitely generated. The base case holds by definition (and Lemma ), since a submodule of is the same thing as an ideal.  Assume and the result holds for . Let be any submodule of . Define to be the projection onto the last component of . The kernel of may be identified with and so is a submodule of , and it is therefore finitely generated by assumption. The image of under is a submodule of , that is, an ideal of , and so it too is finitely generated by assumption (and Lemma ).  Furthermore, by the first isomorphism theorem is also finitely generated. By a homework problem, we deduce that is a finitely generated module.  % I'll just sketch the general case (which I don't think we'll actually need): let be any finitely generated -module and any submodule. % Since is finitely generated, there exists a surjective -module homomorphism for some . Then is a submodule of and % hence it is finitely generated by the case we already proved. Moreover, induces a surjective -module homomorphism , % and hence is isomorphic to a quotient of a finitely generated -module and thus it is also finitely generated.     The converse is also true: If is not Noetherian, there there exists an ideal that is not finitely generated (by the Lemma). This gives an example of a non-finitely-generated submodule, namely , of a finitely generated module, namely .   Finite Presentations in Noetherian Rings   Any finitely generated module over a noetherian ring has a finite presentation; that is, given such a module over such a ring, there exists an matrix in and an isomorphism     We basically already proved this, but let me recap it:  If is finitely generated, then for some we can find a surjective -module homomorphism Since we assume is Noetherian, the kernel of is also finitely generated by the Proposition, and so we may find a surjection of -modules for some . The composition is equal to for some matrix . Since , the first isomorphism theorem gives an isomorphism     Quotient Rings Noetherian in Noetherian Rings  Let be a commutative ring and an ideal of . Show that if is noetherian then is also noetherian.   "
},
{
  "id": "remark-88",
  "level": "2",
  "url": "sec-noeth.html#remark-88",
  "type": "Remark",
  "number": "14.19",
  "title": "",
  "body": " We now address the question of which modules have finite presentations. It is clear than any such module must be finitely generated (since the cosets of generate for any matrix ). If is finitely generated, say by elements, then we can find a surjective -module homomorphism Provided the kernel of is also finitely generated, say by elements, then we may find a surjection The composition is a map between free -modules and is thus equal to for some matrix . Clearly and hence by the first isomorphism theorem so that is finitely presented.  So the real question is: For a given ring , is it the case that for all , every submodule of is finitely generated? The answer is “no'' in general, but it does hold for many rings of interest:  "
},
{
  "id": "def-ascending-chain-condition",
  "level": "2",
  "url": "sec-noeth.html#def-ascending-chain-condition",
  "type": "Definition",
  "number": "14.20",
  "title": "Ascending Chain Condition.",
  "body": "Ascending Chain Condition   A commutative ring has the ascending chain condition (on ideals) if given any chain of ideals in of the form there is an such that    "
},
{
  "id": "lem-noetherian-rings",
  "level": "2",
  "url": "sec-noeth.html#lem-noetherian-rings",
  "type": "Lemma",
  "number": "14.21",
  "title": "Noetherian Rings.",
  "body": "Noetherian Rings   Suppose is a commutative ring. The following conditions are equivalent:    has the ascending chain condition on ideals.    Every ideal of is finitely generated — i.e., for every ideal , there exists a finite set of elements in such that . In this case we say is Noetherian .       Assume every ideal is finitely generated and that such a chain is given. Let . Then it is easy to see that is an ideal. (In detail, for we have for some and hence .  If , then and for some and hence there is a such that . It follows that . Finally .) Thus by assumption is finitely generated, say for some .  Each belongs to one of the 's and hence, since there are only a finite number of such elements and ideas are nested, there is an such that . It follows that and hence .  Assume has the acc for ideals and let be any ideal. Pick any element and set . If we are done. If not, pick and set . If we are done and if not pick and let . In this way we form a strictly ascending chain , and this process cannot be continued forever since has the acc. When it terminates, we have for some and thus is finitely generated.   "
},
{
  "id": "thm-hilberts-basis-theorem",
  "level": "2",
  "url": "sec-noeth.html#thm-hilberts-basis-theorem",
  "type": "Theorem",
  "number": "14.22",
  "title": "Hilbert's Basis Theorem.",
  "body": "Hilbert's Basis Theorem   If is a noetherian ring, then the polynomial rings and are noetherian for any .   "
},
{
  "id": "prop-submodules-of-fg-modules-are-fg-when-noetherian",
  "level": "2",
  "url": "sec-noeth.html#prop-submodules-of-fg-modules-are-fg-when-noetherian",
  "type": "Proposition",
  "number": "14.23",
  "title": "Finitely Generated Modules in Noetherian Rings.",
  "body": "Finitely Generated Modules in Noetherian Rings   If is a noetherian commutative ring, then every submodule of a finitely generated module is again finitely generated.    I will just prove the following special case (since it is all we need): For each , every submodule of is finitely generated. The base case holds by definition (and Lemma ), since a submodule of is the same thing as an ideal.  Assume and the result holds for . Let be any submodule of . Define to be the projection onto the last component of . The kernel of may be identified with and so is a submodule of , and it is therefore finitely generated by assumption. The image of under is a submodule of , that is, an ideal of , and so it too is finitely generated by assumption (and Lemma ).  Furthermore, by the first isomorphism theorem is also finitely generated. By a homework problem, we deduce that is a finitely generated module.  % I'll just sketch the general case (which I don't think we'll actually need): let be any finitely generated -module and any submodule. % Since is finitely generated, there exists a surjective -module homomorphism for some . Then is a submodule of and % hence it is finitely generated by the case we already proved. Moreover, induces a surjective -module homomorphism , % and hence is isomorphic to a quotient of a finitely generated -module and thus it is also finitely generated.   "
},
{
  "id": "remark-89",
  "level": "2",
  "url": "sec-noeth.html#remark-89",
  "type": "Remark",
  "number": "14.24",
  "title": "",
  "body": " The converse is also true: If is not Noetherian, there there exists an ideal that is not finitely generated (by the Lemma). This gives an example of a non-finitely-generated submodule, namely , of a finitely generated module, namely .  "
},
{
  "id": "cor-fg-modules-finitely-presented-when-noetherian",
  "level": "2",
  "url": "sec-noeth.html#cor-fg-modules-finitely-presented-when-noetherian",
  "type": "Corollary",
  "number": "14.25",
  "title": "Finite Presentations in Noetherian Rings.",
  "body": "Finite Presentations in Noetherian Rings   Any finitely generated module over a noetherian ring has a finite presentation; that is, given such a module over such a ring, there exists an matrix in and an isomorphism     We basically already proved this, but let me recap it:  If is finitely generated, then for some we can find a surjective -module homomorphism Since we assume is Noetherian, the kernel of is also finitely generated by the Proposition, and so we may find a surjection of -modules for some . The composition is equal to for some matrix . Since , the first isomorphism theorem gives an isomorphism    "
},
{
  "id": "exercise-103",
  "level": "2",
  "url": "sec-noeth.html#exercise-103",
  "type": "Exploration",
  "number": "14.26",
  "title": "Quotient Rings Noetherian in Noetherian Rings.",
  "body": "Quotient Rings Noetherian in Noetherian Rings  Let be a commutative ring and an ideal of . Show that if is noetherian then is also noetherian.  "
},
{
  "id": "sec-modclass",
  "level": "1",
  "url": "sec-modclass.html",
  "type": "Section",
  "number": "14.4",
  "title": "Classifications",
  "body": "Classifications  Fundamental Theorem of Finitely Generated Modules over a PID, Invariant Factors Form   Let be a PID and let be a finitely generated module. Then there exist integers , and non-zero, non-unit elements of satisfying such that Moreover and are uniquely determined by , and the 's are unique up to associates.    Invariant Factors   The polynomials occurring in the Theorem are called the invariant factors of the operator .    FTFGMOPRIFF   Let be a field and be the ring of polynomials with coefficients in in one variable . If a finitely generated -module then for some , and non-constant monic polynomials such that Moreover, , and are unique.    This follows from the Theorem since is a Euclidean domain and every non-zero polynomial is associate to a unique monic one.    -Modules of Dimension  Let be a field and a -module such that the dimension of as a -vector space is What are the possibilities for up to isomorphism?  We have with as in the Corollary. But must be since is infinite dimensional as a -vector space. Moreover, for any non-zero polynomial . So we must have . There are five possibilities:    and is monic of degree .     , is linear, is cubic and . (So if , then must be a root of ).     , is quadratic.     , is linear and is quadratic with .     , is linear.   Now suppose . What is the total number of possibilities? For case , there are monic polynomial of degree . For case , there are choices for and choices for since for a unique quadratic , for a total of possibilities. For case there are choices. For case there are choices since there are choices for and for a unique linear . For case , there are choices for . In total there are such modules up to isomorphism.   Sunzi's Remainder Theorem (Rings)   Suppose and are ideals in a commutative ring such that . Then (where is defined as the set of all sums of products of the form with and ) and there is an isomorphism of -modules In particular, if is a UFD and and are relatively prime elements of , then     Note that holds in general for any pair of ideals. If then for some and . Given we have with and , which proves .  For the second assertion define to be the -module homomorphism . Note that the kernel of is which equals by the first assertion. I claim is onto: Pick . With chosen as above, we have The last equation holds since and thus and similarly .  For the final assertion, recall that when is a UFD, two principle ideals and satisfy if and only if and are relatively prime. Also, for and , we have .    FTFGMOPIDEDF   Let be a PID and let be a finitely generated -module. Then there exist integers , prime elements of (not necessarily distinct), and integers , such that Moreover and are uniquely determined by , and the list is unique up to associates and reordering.    First write in invariant factor form . For any non-zero, non-unit element of , we have for some distinct (non-associate) prime elements and integers . By the Chinese remainder theorem (applied over and over again) we have Doing this for each fact in the invariant factor form of we obtain the existence of an elementary divisor form of .  Uniqueness follows from the uniqueness of the invariant factor form and of the prime factorizations of the 's.    Elementary Divisor (Module)   With the notation in the Theorem above, the elements of are the elementary divisors of .     Since , so the elementary divisors of are , and . The only invariant factor of is .   Direct Sums and  Consider the group . This is neither in IFF nor in EDF. Applying the Sunzi Remainder Theorem, we have and this gives the EDF. The elementary divisors of are (ordering does not matter).  To find the IFF we start by finding the largest prime power order for each prime in the list of orders of the summands. These are . The CRT gives Then we find the highest prime power orders for each prime among the left-over summands: By the CRT we have The highest orders of the prime power order not yet used are and , and we have which can be rearranged to give This is the IFF, and the invariant factors of are .   FTFGAGEDF   Let be a finitely generated abelian group. Then there exist integers , positive prime integers , and strictly positive integers such that Moreover, the 's, and 's are uniquely determined by (up to ordering).    FTFGMOPREDF   Let be a field and be the ring of polynomials with coefficients in in one variable . If a finitely generated -module then for some , , non-constant monic, irreducible polynomials and integers with , and these are unique up to ordering.    Finding IFs and EDs  Find the invariant factor form and the elementary divisor form of the -module first when    ,     and     .      "
},
{
  "id": "thm-ftfgmopidiff",
  "level": "2",
  "url": "sec-modclass.html#thm-ftfgmopidiff",
  "type": "Theorem",
  "number": "14.27",
  "title": "Fundamental Theorem of Finitely Generated Modules over a PID, Invariant Factors Form.",
  "body": "Fundamental Theorem of Finitely Generated Modules over a PID, Invariant Factors Form   Let be a PID and let be a finitely generated module. Then there exist integers , and non-zero, non-unit elements of satisfying such that Moreover and are uniquely determined by , and the 's are unique up to associates.   "
},
{
  "id": "def-invariant-factors",
  "level": "2",
  "url": "sec-modclass.html#def-invariant-factors",
  "type": "Definition",
  "number": "14.28",
  "title": "Invariant Factors.",
  "body": "Invariant Factors   The polynomials occurring in the Theorem are called the invariant factors of the operator .   "
},
{
  "id": "cor-ftfgmopriff",
  "level": "2",
  "url": "sec-modclass.html#cor-ftfgmopriff",
  "type": "Corollary",
  "number": "14.29",
  "title": "FTFGMOPRIFF.",
  "body": "FTFGMOPRIFF   Let be a field and be the ring of polynomials with coefficients in in one variable . If a finitely generated -module then for some , and non-constant monic polynomials such that Moreover, , and are unique.    This follows from the Theorem since is a Euclidean domain and every non-zero polynomial is associate to a unique monic one.   "
},
{
  "id": "exe-kx-modules-of-dimension-4",
  "level": "2",
  "url": "sec-modclass.html#exe-kx-modules-of-dimension-4",
  "type": "Example",
  "number": "14.30",
  "title": "<span class=\"process-math\">\\(k[x]\\)<\/span>-Modules of Dimension <span class=\"process-math\">\\(4\\)<\/span>.",
  "body": "-Modules of Dimension  Let be a field and a -module such that the dimension of as a -vector space is What are the possibilities for up to isomorphism?  We have with as in the Corollary. But must be since is infinite dimensional as a -vector space. Moreover, for any non-zero polynomial . So we must have . There are five possibilities:    and is monic of degree .     , is linear, is cubic and . (So if , then must be a root of ).     , is quadratic.     , is linear and is quadratic with .     , is linear.   Now suppose . What is the total number of possibilities? For case , there are monic polynomial of degree . For case , there are choices for and choices for since for a unique quadratic , for a total of possibilities. For case there are choices. For case there are choices since there are choices for and for a unique linear . For case , there are choices for . In total there are such modules up to isomorphism.  "
},
{
  "id": "thm-sunzis-remainder-theorem-rings",
  "level": "2",
  "url": "sec-modclass.html#thm-sunzis-remainder-theorem-rings",
  "type": "Theorem",
  "number": "14.31",
  "title": "Sunzi's Remainder Theorem (Rings).",
  "body": "Sunzi's Remainder Theorem (Rings)   Suppose and are ideals in a commutative ring such that . Then (where is defined as the set of all sums of products of the form with and ) and there is an isomorphism of -modules In particular, if is a UFD and and are relatively prime elements of , then     Note that holds in general for any pair of ideals. If then for some and . Given we have with and , which proves .  For the second assertion define to be the -module homomorphism . Note that the kernel of is which equals by the first assertion. I claim is onto: Pick . With chosen as above, we have The last equation holds since and thus and similarly .  For the final assertion, recall that when is a UFD, two principle ideals and satisfy if and only if and are relatively prime. Also, for and , we have .   "
},
{
  "id": "thm-ftfgmopidedf",
  "level": "2",
  "url": "sec-modclass.html#thm-ftfgmopidedf",
  "type": "Theorem",
  "number": "14.32",
  "title": "FTFGMOPIDEDF.",
  "body": "FTFGMOPIDEDF   Let be a PID and let be a finitely generated -module. Then there exist integers , prime elements of (not necessarily distinct), and integers , such that Moreover and are uniquely determined by , and the list is unique up to associates and reordering.    First write in invariant factor form . For any non-zero, non-unit element of , we have for some distinct (non-associate) prime elements and integers . By the Chinese remainder theorem (applied over and over again) we have Doing this for each fact in the invariant factor form of we obtain the existence of an elementary divisor form of .  Uniqueness follows from the uniqueness of the invariant factor form and of the prime factorizations of the 's.   "
},
{
  "id": "def-elementary-divisor-module",
  "level": "2",
  "url": "sec-modclass.html#def-elementary-divisor-module",
  "type": "Definition",
  "number": "14.33",
  "title": "Elementary Divisor (Module).",
  "body": "Elementary Divisor (Module)   With the notation in the Theorem above, the elements of are the elementary divisors of .   "
},
{
  "id": "exe-z90",
  "level": "2",
  "url": "sec-modclass.html#exe-z90",
  "type": "Example",
  "number": "14.34",
  "title": "<span class=\"process-math\">\\(\\Z\/90\\)<\/span>.",
  "body": " Since , so the elementary divisors of are , and . The only invariant factor of is .  "
},
{
  "id": "example-100",
  "level": "2",
  "url": "sec-modclass.html#example-100",
  "type": "Example",
  "number": "14.35",
  "title": "Direct Sums and <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Direct Sums and  Consider the group . This is neither in IFF nor in EDF. Applying the Sunzi Remainder Theorem, we have and this gives the EDF. The elementary divisors of are (ordering does not matter).  To find the IFF we start by finding the largest prime power order for each prime in the list of orders of the summands. These are . The CRT gives Then we find the highest prime power orders for each prime among the left-over summands: By the CRT we have The highest orders of the prime power order not yet used are and , and we have which can be rearranged to give This is the IFF, and the invariant factors of are .  "
},
{
  "id": "cor-ftfgagedf",
  "level": "2",
  "url": "sec-modclass.html#cor-ftfgagedf",
  "type": "Corollary",
  "number": "14.36",
  "title": "FTFGAGEDF.",
  "body": "FTFGAGEDF   Let be a finitely generated abelian group. Then there exist integers , positive prime integers , and strictly positive integers such that Moreover, the 's, and 's are uniquely determined by (up to ordering).   "
},
{
  "id": "cor-ftfgmopredf",
  "level": "2",
  "url": "sec-modclass.html#cor-ftfgmopredf",
  "type": "Corollary",
  "number": "14.37",
  "title": "FTFGMOPREDF.",
  "body": "FTFGMOPREDF   Let be a field and be the ring of polynomials with coefficients in in one variable . If a finitely generated -module then for some , , non-constant monic, irreducible polynomials and integers with , and these are unique up to ordering.   "
},
{
  "id": "exe-finding-ifs-and-eds",
  "level": "2",
  "url": "sec-modclass.html#exe-finding-ifs-and-eds",
  "type": "Example",
  "number": "14.38",
  "title": "Finding IFs and EDs.",
  "body": "Finding IFs and EDs  Find the invariant factor form and the elementary divisor form of the -module first when    ,     and     .     "
},
{
  "id": "sec-rcf",
  "level": "1",
  "url": "sec-rcf.html",
  "type": "Section",
  "number": "15.1",
  "title": "Rational Canonical Form",
  "body": "Rational Canonical Form   Suppose is a field and is a -module. By restriction of scalars along the canonical ring map we may regard as a -vector space — let us write this vector space as to be precise. Let be the map given by . Then is an -linear operator on . So, to a -module we may associate the pair where is an -vector space and is an -linear operator on . This process is reversible:   -Module   Let be a field, let be a finite dimensional vector space over , and let be an -linear operator. The -module is defined to be the abelian group equipped with the rule for scaling given by for any polynomial and vector .    is Actually a -Module   Given a pair as in the definition, really is a -module.    Special Case of  We have the following special case (it isn't really special — the general case reduces to this one upon choosing a basis):  Given a matrix , then is the -module whose underlying abelian group is (column vectors) with the usual rule for addition and with the rule for scaling given by for any column vector . For short, we write this rule as for any polynomial , where is the matrix obtained by evaluating at in the evident sense.    Let and let be the -module . So as a -vector space, and acts on by sending to . I claim there is an isomorphism of -modules.  Let . Note that and that and span as a -vector space. It follows that generates as a -module; in detail, for any we have .  Define a -module homomorphism by sending to and hence to . It is onto since generates as a -module. The kernel will be a (necessarily principle) ideal of ; we just need to find it. Note that , and are linearly dependent and in fact we have and hence . This gives that is in the kernel of and hence, by the -th Isomorphism Theorem we have an induced homomorphism of -modules induced by . The map is onto since is onto. Since the source and target both have dimension two as -vector spaces, is -linear, and is onto, it must in fact be an isomorphism of -modules (by the Rank-Nullity Theorem).   Equality of -Modules   The two assignments and defined above are mutually inverse: Given a -module , there is an equality of -modules and given a pair with an -vector space and an -linear operator on we have an equality of pairs .     In fact, these rules determine an “isomorphism of categories''.   Block Diagonal Matrix   Given square matrices , we define to be the block diagonal matrix which belongs to for .    Rational Canonical Form   Given a finite dimensional -vector space and an -linear operator , there is a basis of such that the matrix representing relative to is for monic polynomials of degree at least one such that . Moreover, this matrix is unique, and is known as the rational canonical form of the operator .    We know by the Fundamental Theorem of modules over (i.e., Corollary ) that there is a -module isomorphism for some unique list of monic, non-constant polynomials with for all . Recall that the operator on is given as (multiplication by ) on . Since this is a -module isomorphism, corresponds to multiplication by on each summand . As we have seen before, for each , the matrix representing on relative to the basis of is the companion matrix of . Let be the -basis of given by tuples (in that order). Then the matrix of on for is .  This gives existence. Uniqueness is a consequence of the uniqueness of the list , but I will omit the details.     The matrix is unique, but the basis that realizes it is, in general, not unique. As an extreme example illustrating this: Take to be the identity operator on a finite dimensional vector space . Then holds for any basis . (Note that is indeed in rational canonical form: it is equal to .)   Invariant Factor   In Theorem , the number is the rank of , the numbers are the invariant factors of , and the decomposition of in part (1) is the invariant factor decomposition of .    Back to  Let us return to the example of to illustrate the Theorem and its proof. By the previous example we have an isomorphism of -module Recall that (multiplication by ) on is given by multiplication by the matrix . This is an isomorphism of -modules, and so corresponds to the operator on . As we have seen before, relative to the basis , the matrix for is This is the Rational Canonical Form of . has just one invariant factor, namely .  By the way, tracking through the calculations that got us here, we see that the basis of that gives the RCF of if of .   Every Matrix Similar to Unique RCF Matrix   Every matrix is similar to a unique matrix in RCF.    Similarity Classes of Matrices  Let be the field with elements for some prime . Up to similarity, how many matrices are there with entries in ?  Each such matrix is similar to a unique one of the form with monic polynomials of positive degree such that . Moreover, since is a matrix where , we must have . So the goal becomes to count all such tuples of polynomials. We proceed by cases on . Note that is not possible. - Case . Then and the number of such polynomials is (since and has elements). - Case : Note that is not possible. If then , and there are possibilities. If , then and with monic and . There are possibilities for and for , for a total of in this subcase. The total for this case is thus . - Case : The only possibilities are , and so that and with . We get possibilities. - Case . We must have with each of degree , for a total of possibilities. The total is     The proof of Theorem makes clear the following fact:   For a field , finite dimensional vector space , and -linear operator ,the invariant factors of the operator are identical to the invariant factors of the -module .   The following result is thus very useful for finding the Rational Canonical Form of an operator (we will state it just for operators given explicitly by matrices):   RCF and Cokernels   Let be a field and let . The matrix presents the -module ; that is, there is an isomorphism of -modules     For this proof it is useful to identity with where the latter refers to all expressions of the form with . For instance, (when ) we identify with . Using this identification we define by . Then is a -module homomorphism — I leave it to you to verify this. is onto since, e.g., for any we have .  We have and hence . By the -th isomorphism theorem, there is an induced -module homomorphism induced by , and it is onto since is onto. It remains to show this map is one-to-one.  Since is -linear it is certainly -linear. Since , to prove is one-to-one, it suffices to prove (by Rank-Nullity). I claim the images of the standard basis in span it as an -vector space. To see this, note that , for , span as an -vector space, and hence they span the quotient. It thus suffices to show lies in the span of in for all and . We have and thus and by repeating this argument we have     Invariant Factors are Diagonal SNF Entries   The invariant factors of a matrix are the non-zero, non-unit diagonal entries of the SNF of .    Let be the Smith Normal Form of and let be its diagonal entries. As proven before, the matrix and present isomorphic -modules, and thus the Theorem gives an isomorphism Since , none of the 's can be zero. So, each is monic and . Now some of the might be non-zero constants, in which case is a unit and . Upon tossing those out, we are left with with each monic of positive degree and . These are, by definition, the invariant factors of .    Once More to Back to  Let's find the invariant factors of the matrix we looked at before, but this time using the Theorem and its Corollary.  We have To find the invariant factors of we just need to find the Smith Normal Form of . I'll do this two ways:  Method I: Do row and column operations using the generalized Euclidean algorithm: Tossing out the unit, we see that the only invariant factor is , as before.  Method II: Call the entries on the diagonal of the SNF of . Recall from Theorem that is the gcd of the entries of and . Thus and . Therefore the only invariant factor of is .   Finding IFs and RCF  Let Let us find the invariant factors and Rational Canonical Form of by finding the Smith Normal Form of .  We have A sequence of messy row and column operations yields Note that this is indeed in Smith Normal Form. It follows that the invariant factors of are and the RCF of is   For an alternative approach, we could use that the diagonal entries of the Smith Normal Form of satisfy , is the gcd of the minors of , and . It's clear that and an easy calculation gives that . There are nine minors of , and a tedious check reveals that each of them is one of , , or (up to signs). So . We get that as before.   "
},
{
  "id": "remark-90",
  "level": "2",
  "url": "sec-rcf.html#remark-90",
  "type": "Remark",
  "number": "15.1",
  "title": "",
  "body": " Suppose is a field and is a -module. By restriction of scalars along the canonical ring map we may regard as a -vector space — let us write this vector space as to be precise. Let be the map given by . Then is an -linear operator on . So, to a -module we may associate the pair where is an -vector space and is an -linear operator on . This process is reversible:  "
},
{
  "id": "def-fx-module-vg",
  "level": "2",
  "url": "sec-rcf.html#def-fx-module-vg",
  "type": "Definition",
  "number": "15.2",
  "title": "<span class=\"process-math\">\\(F[x]\\)<\/span>-Module <span class=\"process-math\">\\(V_g\\)<\/span>.",
  "body": "-Module   Let be a field, let be a finite dimensional vector space over , and let be an -linear operator. The -module is defined to be the abelian group equipped with the rule for scaling given by for any polynomial and vector .   "
},
{
  "id": "prop-vg-is-actually-a-fx-module",
  "level": "2",
  "url": "sec-rcf.html#prop-vg-is-actually-a-fx-module",
  "type": "Proposition",
  "number": "15.3",
  "title": "<span class=\"process-math\">\\(V_g\\)<\/span> is Actually a <span class=\"process-math\">\\(F[x]\\)<\/span>-Module.",
  "body": "is Actually a -Module   Given a pair as in the definition, really is a -module.   "
},
{
  "id": "ex-special-case-of-v_g",
  "level": "2",
  "url": "sec-rcf.html#ex-special-case-of-v_g",
  "type": "Example",
  "number": "15.4",
  "title": "Special Case of <span class=\"process-math\">\\(V_g\\)<\/span>.",
  "body": "Special Case of  We have the following special case (it isn't really special — the general case reduces to this one upon choosing a basis):  Given a matrix , then is the -module whose underlying abelian group is (column vectors) with the usual rule for addition and with the rule for scaling given by for any column vector . For short, we write this rule as for any polynomial , where is the matrix obtained by evaluating at in the evident sense.  "
},
{
  "id": "ex-mat_2times-2q",
  "level": "2",
  "url": "sec-rcf.html#ex-mat_2times-2q",
  "type": "Example",
  "number": "15.5",
  "title": "<span class=\"process-math\">\\(\\Mat_{2\\times 2}(\\Q)\\)<\/span>.",
  "body": " Let and let be the -module . So as a -vector space, and acts on by sending to . I claim there is an isomorphism of -modules.  Let . Note that and that and span as a -vector space. It follows that generates as a -module; in detail, for any we have .  Define a -module homomorphism by sending to and hence to . It is onto since generates as a -module. The kernel will be a (necessarily principle) ideal of ; we just need to find it. Note that , and are linearly dependent and in fact we have and hence . This gives that is in the kernel of and hence, by the -th Isomorphism Theorem we have an induced homomorphism of -modules induced by . The map is onto since is onto. Since the source and target both have dimension two as -vector spaces, is -linear, and is onto, it must in fact be an isomorphism of -modules (by the Rank-Nullity Theorem).  "
},
{
  "id": "prop-equality-of-fx-modules",
  "level": "2",
  "url": "sec-rcf.html#prop-equality-of-fx-modules",
  "type": "Proposition",
  "number": "15.6",
  "title": "Equality of <span class=\"process-math\">\\(F[x]\\)<\/span>-Modules.",
  "body": "Equality of -Modules   The two assignments and defined above are mutually inverse: Given a -module , there is an equality of -modules and given a pair with an -vector space and an -linear operator on we have an equality of pairs .   "
},
{
  "id": "remark-91",
  "level": "2",
  "url": "sec-rcf.html#remark-91",
  "type": "Remark",
  "number": "15.7",
  "title": "",
  "body": " In fact, these rules determine an “isomorphism of categories''.  "
},
{
  "id": "def-block-diagonal-matrix",
  "level": "2",
  "url": "sec-rcf.html#def-block-diagonal-matrix",
  "type": "Definition",
  "number": "15.8",
  "title": "Block Diagonal Matrix.",
  "body": "Block Diagonal Matrix   Given square matrices , we define to be the block diagonal matrix which belongs to for .   "
},
{
  "id": "thm-rcf",
  "level": "2",
  "url": "sec-rcf.html#thm-rcf",
  "type": "Theorem",
  "number": "15.9",
  "title": "Rational Canonical Form.",
  "body": "Rational Canonical Form   Given a finite dimensional -vector space and an -linear operator , there is a basis of such that the matrix representing relative to is for monic polynomials of degree at least one such that . Moreover, this matrix is unique, and is known as the rational canonical form of the operator .    We know by the Fundamental Theorem of modules over (i.e., Corollary ) that there is a -module isomorphism for some unique list of monic, non-constant polynomials with for all . Recall that the operator on is given as (multiplication by ) on . Since this is a -module isomorphism, corresponds to multiplication by on each summand . As we have seen before, for each , the matrix representing on relative to the basis of is the companion matrix of . Let be the -basis of given by tuples (in that order). Then the matrix of on for is .  This gives existence. Uniqueness is a consequence of the uniqueness of the list , but I will omit the details.   "
},
{
  "id": "remark-92",
  "level": "2",
  "url": "sec-rcf.html#remark-92",
  "type": "Remark",
  "number": "15.10",
  "title": "",
  "body": " The matrix is unique, but the basis that realizes it is, in general, not unique. As an extreme example illustrating this: Take to be the identity operator on a finite dimensional vector space . Then holds for any basis . (Note that is indeed in rational canonical form: it is equal to .)  "
},
{
  "id": "def-invariant-factor-2",
  "level": "2",
  "url": "sec-rcf.html#def-invariant-factor-2",
  "type": "Definition",
  "number": "15.11",
  "title": "Invariant Factor.",
  "body": "Invariant Factor   In Theorem , the number is the rank of , the numbers are the invariant factors of , and the decomposition of in part (1) is the invariant factor decomposition of .   "
},
{
  "id": "exe-back-to-mat_2times-2q",
  "level": "2",
  "url": "sec-rcf.html#exe-back-to-mat_2times-2q",
  "type": "Example",
  "number": "15.12",
  "title": "Back to <span class=\"process-math\">\\(\\Mat_{2\\times 2}(\\Q)\\)<\/span>.",
  "body": "Back to  Let us return to the example of to illustrate the Theorem and its proof. By the previous example we have an isomorphism of -module Recall that (multiplication by ) on is given by multiplication by the matrix . This is an isomorphism of -modules, and so corresponds to the operator on . As we have seen before, relative to the basis , the matrix for is This is the Rational Canonical Form of . has just one invariant factor, namely .  By the way, tracking through the calculations that got us here, we see that the basis of that gives the RCF of if of .  "
},
{
  "id": "cor-every-matrix-similar-to-unique-rcf-matrix",
  "level": "2",
  "url": "sec-rcf.html#cor-every-matrix-similar-to-unique-rcf-matrix",
  "type": "Corollary",
  "number": "15.13",
  "title": "Every Matrix Similar to Unique RCF Matrix.",
  "body": "Every Matrix Similar to Unique RCF Matrix   Every matrix is similar to a unique matrix in RCF.   "
},
{
  "id": "exe-similarity-classes-of-4times-4-matrices",
  "level": "2",
  "url": "sec-rcf.html#exe-similarity-classes-of-4times-4-matrices",
  "type": "Example",
  "number": "15.14",
  "title": "Similarity Classes of <span class=\"process-math\">\\(4\\times 4\\)<\/span> Matrices.",
  "body": "Similarity Classes of Matrices  Let be the field with elements for some prime . Up to similarity, how many matrices are there with entries in ?  Each such matrix is similar to a unique one of the form with monic polynomials of positive degree such that . Moreover, since is a matrix where , we must have . So the goal becomes to count all such tuples of polynomials. We proceed by cases on . Note that is not possible. - Case . Then and the number of such polynomials is (since and has elements). - Case : Note that is not possible. If then , and there are possibilities. If , then and with monic and . There are possibilities for and for , for a total of in this subcase. The total for this case is thus . - Case : The only possibilities are , and so that and with . We get possibilities. - Case . We must have with each of degree , for a total of possibilities. The total is   "
},
{
  "id": "remark-93",
  "level": "2",
  "url": "sec-rcf.html#remark-93",
  "type": "Remark",
  "number": "15.15",
  "title": "",
  "body": " The proof of Theorem makes clear the following fact:   For a field , finite dimensional vector space , and -linear operator ,the invariant factors of the operator are identical to the invariant factors of the -module .   The following result is thus very useful for finding the Rational Canonical Form of an operator (we will state it just for operators given explicitly by matrices):  "
},
{
  "id": "thm-rcf-and-cokernels",
  "level": "2",
  "url": "sec-rcf.html#thm-rcf-and-cokernels",
  "type": "Theorem",
  "number": "15.16",
  "title": "RCF and Cokernels.",
  "body": "RCF and Cokernels   Let be a field and let . The matrix presents the -module ; that is, there is an isomorphism of -modules     For this proof it is useful to identity with where the latter refers to all expressions of the form with . For instance, (when ) we identify with . Using this identification we define by . Then is a -module homomorphism — I leave it to you to verify this. is onto since, e.g., for any we have .  We have and hence . By the -th isomorphism theorem, there is an induced -module homomorphism induced by , and it is onto since is onto. It remains to show this map is one-to-one.  Since is -linear it is certainly -linear. Since , to prove is one-to-one, it suffices to prove (by Rank-Nullity). I claim the images of the standard basis in span it as an -vector space. To see this, note that , for , span as an -vector space, and hence they span the quotient. It thus suffices to show lies in the span of in for all and . We have and thus and by repeating this argument we have    "
},
{
  "id": "cor-invariant-factors-are-diagonal-snf-entries",
  "level": "2",
  "url": "sec-rcf.html#cor-invariant-factors-are-diagonal-snf-entries",
  "type": "Corollary",
  "number": "15.17",
  "title": "Invariant Factors are Diagonal SNF Entries.",
  "body": "Invariant Factors are Diagonal SNF Entries   The invariant factors of a matrix are the non-zero, non-unit diagonal entries of the SNF of .    Let be the Smith Normal Form of and let be its diagonal entries. As proven before, the matrix and present isomorphic -modules, and thus the Theorem gives an isomorphism Since , none of the 's can be zero. So, each is monic and . Now some of the might be non-zero constants, in which case is a unit and . Upon tossing those out, we are left with with each monic of positive degree and . These are, by definition, the invariant factors of .   "
},
{
  "id": "exe-once-more-to-back-to-mat_2times-2q",
  "level": "2",
  "url": "sec-rcf.html#exe-once-more-to-back-to-mat_2times-2q",
  "type": "Example",
  "number": "15.18",
  "title": "Once More to Back to <span class=\"process-math\">\\(\\Mat_{2\\times 2}(\\Q)\\)<\/span>.",
  "body": "Once More to Back to  Let's find the invariant factors of the matrix we looked at before, but this time using the Theorem and its Corollary.  We have To find the invariant factors of we just need to find the Smith Normal Form of . I'll do this two ways:  Method I: Do row and column operations using the generalized Euclidean algorithm: Tossing out the unit, we see that the only invariant factor is , as before.  Method II: Call the entries on the diagonal of the SNF of . Recall from Theorem that is the gcd of the entries of and . Thus and . Therefore the only invariant factor of is .  "
},
{
  "id": "exe-finding-ifs-and-rcf",
  "level": "2",
  "url": "sec-rcf.html#exe-finding-ifs-and-rcf",
  "type": "Example",
  "number": "15.19",
  "title": "Finding IFs and RCF.",
  "body": "Finding IFs and RCF  Let Let us find the invariant factors and Rational Canonical Form of by finding the Smith Normal Form of .  We have A sequence of messy row and column operations yields Note that this is indeed in Smith Normal Form. It follows that the invariant factors of are and the RCF of is   For an alternative approach, we could use that the diagonal entries of the Smith Normal Form of satisfy , is the gcd of the minors of , and . It's clear that and an easy calculation gives that . There are nine minors of , and a tedious check reveals that each of them is one of , , or (up to signs). So . We get that as before.  "
},
{
  "id": "sec-cayley-hamilton",
  "level": "1",
  "url": "sec-cayley-hamilton.html",
  "type": "Section",
  "number": "15.2",
  "title": "The Cayley-Hamilton Theorem",
  "body": "The Cayley-Hamilton Theorem  Given a square matrix and polynomial , recall that refers to the square matrix .  Ideals and   Given a matrix with entries in a field , the set forms a non-zero ideal of .     is an ideal since the result of evaluating the sum of two polynomials at is . the result of evaluating the product at is .  To show it is non-zero, consider the matrices . This is a collection of matrices in the dimensional -vector space , and hence the must be linearly dependent: there are , not all of which are , such that . This proves .    Minimum Polynomial of a Matrix   Let be a field and let . The minimum polynomial of , denoted , is the unique monic generator of the ideal . Equivalently, is the monic polynomial of least degree such that .    iff Annihilates   Given an matrix and polynomial , we have if and only if annihilates the -module .  In particular, is the unique monic generator of the annihilator ideal     If , then for each , by definition of the action of on we have and so annihilates . Conversely, if annihilates , then for all . Taking for each , this says that each column of is and hence is the zero matrix.    Minimum Polynomial   More generally, let be an -vector space of dimension , and let be a linear transformation. The minimum polynomial of , denoted , is the unique monic polynomial generating the ideal or, equivalently, the annihilator ideal .    Theorem - Cayley-Hamilton   Let be a field, a finite dimensional -vector space, and an -linear operator. Let be the invariant factors of .   The product of the invariant factors of equals the characteristic polynomial of :     The largest invariant factor of is equal to the minimum polynomial of :     (The Cayley-Hamilton Theorem) The minimum polynomial of divides its characteristic polynomial. In particular, satisfies its characteristic polynomial:        The first assertion is a consequence of Corollary , since the product of the diagonal elements of the Smith Normal Form of is equal to the determinant of . (Technically, we can only conclude at first that they are only associates, but since each is monic, they must be equal.)  For the second, we use the isomorphism of -modules Note that a polynomial annihilates if and only if divides . Since , the annihilator of the -module is generated by . Thus the annihilator of is also generated by , and by the Proposition is the minimum polynomial of .  The third assertion is an immediate consequence of the first two.    Finding Minimum Polynomial  Let's find the minimum polynomial of   We apply the Cayley-Hamilton Theorem: . The polynomial is easy to compute since this matrix is upper-triangular: So for some . By brute-force, we verify that and thus it must be the case that .   Finding Minimum Polynomial (2)  Let's find the minimum polynomial of As in the previous example, and so by the Cayley-Hamilton Theorem for some . This time we notice that and so, since , .   "
},
{
  "id": "remark-94",
  "level": "2",
  "url": "sec-cayley-hamilton.html#remark-94",
  "type": "Remark",
  "number": "15.20",
  "title": "",
  "body": "Given a square matrix and polynomial , recall that refers to the square matrix . "
},
{
  "id": "prop-ideals-and-gx",
  "level": "2",
  "url": "sec-cayley-hamilton.html#prop-ideals-and-gx",
  "type": "Proposition",
  "number": "15.21",
  "title": "Ideals and <span class=\"process-math\">\\(g(x)\\)<\/span>.",
  "body": "Ideals and   Given a matrix with entries in a field , the set forms a non-zero ideal of .     is an ideal since the result of evaluating the sum of two polynomials at is . the result of evaluating the product at is .  To show it is non-zero, consider the matrices . This is a collection of matrices in the dimensional -vector space , and hence the must be linearly dependent: there are , not all of which are , such that . This proves .   "
},
{
  "id": "def-min-poly-matrix",
  "level": "2",
  "url": "sec-cayley-hamilton.html#def-min-poly-matrix",
  "type": "Definition",
  "number": "15.22",
  "title": "Minimum Polynomial of a Matrix.",
  "body": "Minimum Polynomial of a Matrix   Let be a field and let . The minimum polynomial of , denoted , is the unique monic generator of the ideal . Equivalently, is the monic polynomial of least degree such that .   "
},
{
  "id": "prop-ga0-iff-gx-annihilates-fn_a",
  "level": "2",
  "url": "sec-cayley-hamilton.html#prop-ga0-iff-gx-annihilates-fn_a",
  "type": "Proposition",
  "number": "15.23",
  "title": "<span class=\"process-math\">\\(g(A)=0\\)<\/span> iff <span class=\"process-math\">\\(g(x)\\)<\/span> Annihilates <span class=\"process-math\">\\(F^n_A\\)<\/span>.",
  "body": "iff Annihilates   Given an matrix and polynomial , we have if and only if annihilates the -module .  In particular, is the unique monic generator of the annihilator ideal     If , then for each , by definition of the action of on we have and so annihilates . Conversely, if annihilates , then for all . Taking for each , this says that each column of is and hence is the zero matrix.   "
},
{
  "id": "def-minimum-polynomial-linear-transformation",
  "level": "2",
  "url": "sec-cayley-hamilton.html#def-minimum-polynomial-linear-transformation",
  "type": "Definition",
  "number": "15.24",
  "title": "Minimum Polynomial.",
  "body": "Minimum Polynomial   More generally, let be an -vector space of dimension , and let be a linear transformation. The minimum polynomial of , denoted , is the unique monic polynomial generating the ideal or, equivalently, the annihilator ideal .   "
},
{
  "id": "thm-cayley-hamilton-thm",
  "level": "2",
  "url": "sec-cayley-hamilton.html#thm-cayley-hamilton-thm",
  "type": "Theorem",
  "number": "15.25",
  "title": "Theorem - Cayley-Hamilton <span class=\"process-math\">\\(\\thm\\)<\/span>.",
  "body": "Theorem - Cayley-Hamilton   Let be a field, a finite dimensional -vector space, and an -linear operator. Let be the invariant factors of .   The product of the invariant factors of equals the characteristic polynomial of :     The largest invariant factor of is equal to the minimum polynomial of :     (The Cayley-Hamilton Theorem) The minimum polynomial of divides its characteristic polynomial. In particular, satisfies its characteristic polynomial:        The first assertion is a consequence of Corollary , since the product of the diagonal elements of the Smith Normal Form of is equal to the determinant of . (Technically, we can only conclude at first that they are only associates, but since each is monic, they must be equal.)  For the second, we use the isomorphism of -modules Note that a polynomial annihilates if and only if divides . Since , the annihilator of the -module is generated by . Thus the annihilator of is also generated by , and by the Proposition is the minimum polynomial of .  The third assertion is an immediate consequence of the first two.   "
},
{
  "id": "exe-finding-minimum-polynomial",
  "level": "2",
  "url": "sec-cayley-hamilton.html#exe-finding-minimum-polynomial",
  "type": "Example",
  "number": "15.26",
  "title": "Finding Minimum Polynomial.",
  "body": "Finding Minimum Polynomial  Let's find the minimum polynomial of   We apply the Cayley-Hamilton Theorem: . The polynomial is easy to compute since this matrix is upper-triangular: So for some . By brute-force, we verify that and thus it must be the case that .  "
},
{
  "id": "exe-finding-minimum-polynomial-2",
  "level": "2",
  "url": "sec-cayley-hamilton.html#exe-finding-minimum-polynomial-2",
  "type": "Example",
  "number": "15.27",
  "title": "Finding Minimum Polynomial (2).",
  "body": "Finding Minimum Polynomial (2)  Let's find the minimum polynomial of As in the previous example, and so by the Cayley-Hamilton Theorem for some . This time we notice that and so, since , .  "
},
{
  "id": "sec-jcf",
  "level": "1",
  "url": "sec-jcf.html",
  "type": "Section",
  "number": "15.3",
  "title": "Jordan Canonical Form",
  "body": "Jordan Canonical Form  Companion Matrix and Jordan Blocks  Let us consider the companion matrix of : We can interpret this matrix as arising from the linear transformation on defined as multiplication by . Recall that the ordered basis of that gives the matrix is the “obvious one'': But notice that is also a basis of . Let us calculate what the operator does to this alternative basis. We could work this out by brute force, but a cleaner way is to first compute what the operator does. Since is multiplication by , it sends each basis element to the next one, except for the last one, which is sent to . It follows that the matrix of this operator relative to the ordered basis is and hence the matrix for itself for this basis is This is what's known as a Jordan Block.   In this example, if we used the basis instead we would have gotten the transpose of .  Jordan Block   Given a field , and integer , and an element , the Jordan block  is the with entries in such that its diagonal entries are all , each entry just below the diagonal is a , and all other entries are : (More precisely, for all , for all , and for all other .)    Some people (including I think the authors or our text) defined a Jordan block to be the transpose of what I have defined it to be.  Jordan Canonical Form   Let be a field, let be a finite dimensional -vector space, and let be a linear transformation satisfying the property that the characteristic polynomial of factors completely in into linear factors. Then there is an ordered basis for such that where , the 's, and the 's are such that are the elementary divisors of the -module . Moreover, this matrix is unique up to ordering of the Jordan Blocks, and it is known as “the'' Jordan Canonical Form of .    The proof is similar to the proof the RCF theorem, using the idea of Example above, but starting with the FTFGMPIDEDF (instead of the FTFGMPIDIFF). Here are the details:  We consider the -module . Since we assume factors completely, the only irreducible polynomials in its factorization are linear. Thus the invariant factors of are products of polynomials of the form for various and integers . It follows that the elementary divisors have this form too. The FTFGMPIDEDF therefore gives an isomorphism of -modules Now pick ordered bases for each of the summands and set to be their “ordered union'' just as we did for the proof of the Theorem on RCF. By the same argument as in Example applied to each summand individually, the matrix representing multiplication by on each summand is . This gives the existence of the JCF.  The uniqueness follows from the uniqueness clause in the FTFGMPIDEDF.    Not every operator has a Jordan Canonical Form: The Theorem only applies if factors completely, and, conversely, if an operator is represented by any lower-triangular matrix, then its characteristic polynomial must be a product of linear polynomials. For algebraically closed fields, such as , every linear operator does indeed have a JCF.  If we flip the order of each in the proof, we would end up with the transpose of what I have defined the JCF to be. This is what our text does, and it defines the JCF as the transpose of what I have defined it to be.  JCF Exists if CharPoly Factors Linearly   If is an matrix with entries in a field and factors completely into linear factors, then is similar to a matrix in Jordan Canonical Form, and this matrix is unique up to the ordering of the Jordan Blocks.    Finding JCF  Let us find the Jordan Canonical Form of   We found the Rational Canonical Form of this matrix before. In the process we showed that we have an isomorphism of -module. By the Sunzi Remainder Theorem and thus the elementary divisors of are . By the Theorem this shows that the JCF of is    Diagonalizable   Let be a finite dimensional vector space over a field and let be an -linear operator. We say is diagonalizable if there is a basis for such that the matrix is a diagonal matrix.    "
},
{
  "id": "compantion-matrix-and-jordan-blocks",
  "level": "2",
  "url": "sec-jcf.html#compantion-matrix-and-jordan-blocks",
  "type": "Example",
  "number": "15.28",
  "title": "Companion Matrix and Jordan Blocks.",
  "body": "Companion Matrix and Jordan Blocks  Let us consider the companion matrix of : We can interpret this matrix as arising from the linear transformation on defined as multiplication by . Recall that the ordered basis of that gives the matrix is the “obvious one'': But notice that is also a basis of . Let us calculate what the operator does to this alternative basis. We could work this out by brute force, but a cleaner way is to first compute what the operator does. Since is multiplication by , it sends each basis element to the next one, except for the last one, which is sent to . It follows that the matrix of this operator relative to the ordered basis is and hence the matrix for itself for this basis is This is what's known as a Jordan Block.  "
},
{
  "id": "remark-95",
  "level": "2",
  "url": "sec-jcf.html#remark-95",
  "type": "Remark",
  "number": "15.29",
  "title": "",
  "body": "In this example, if we used the basis instead we would have gotten the transpose of . "
},
{
  "id": "def-jordan-block",
  "level": "2",
  "url": "sec-jcf.html#def-jordan-block",
  "type": "Definition",
  "number": "15.30",
  "title": "Jordan Block.",
  "body": "Jordan Block   Given a field , and integer , and an element , the Jordan block  is the with entries in such that its diagonal entries are all , each entry just below the diagonal is a , and all other entries are : (More precisely, for all , for all , and for all other .)   "
},
{
  "id": "remark-96",
  "level": "2",
  "url": "sec-jcf.html#remark-96",
  "type": "Remark",
  "number": "15.31",
  "title": "",
  "body": "Some people (including I think the authors or our text) defined a Jordan block to be the transpose of what I have defined it to be. "
},
{
  "id": "thm-jcf",
  "level": "2",
  "url": "sec-jcf.html#thm-jcf",
  "type": "Theorem",
  "number": "15.32",
  "title": "Jordan Canonical Form.",
  "body": "Jordan Canonical Form   Let be a field, let be a finite dimensional -vector space, and let be a linear transformation satisfying the property that the characteristic polynomial of factors completely in into linear factors. Then there is an ordered basis for such that where , the 's, and the 's are such that are the elementary divisors of the -module . Moreover, this matrix is unique up to ordering of the Jordan Blocks, and it is known as “the'' Jordan Canonical Form of .    The proof is similar to the proof the RCF theorem, using the idea of Example above, but starting with the FTFGMPIDEDF (instead of the FTFGMPIDIFF). Here are the details:  We consider the -module . Since we assume factors completely, the only irreducible polynomials in its factorization are linear. Thus the invariant factors of are products of polynomials of the form for various and integers . It follows that the elementary divisors have this form too. The FTFGMPIDEDF therefore gives an isomorphism of -modules Now pick ordered bases for each of the summands and set to be their “ordered union'' just as we did for the proof of the Theorem on RCF. By the same argument as in Example applied to each summand individually, the matrix representing multiplication by on each summand is . This gives the existence of the JCF.  The uniqueness follows from the uniqueness clause in the FTFGMPIDEDF.   "
},
{
  "id": "remark-97",
  "level": "2",
  "url": "sec-jcf.html#remark-97",
  "type": "Remark",
  "number": "15.33",
  "title": "",
  "body": "Not every operator has a Jordan Canonical Form: The Theorem only applies if factors completely, and, conversely, if an operator is represented by any lower-triangular matrix, then its characteristic polynomial must be a product of linear polynomials. For algebraically closed fields, such as , every linear operator does indeed have a JCF. "
},
{
  "id": "remark-98",
  "level": "2",
  "url": "sec-jcf.html#remark-98",
  "type": "Remark",
  "number": "15.34",
  "title": "",
  "body": "If we flip the order of each in the proof, we would end up with the transpose of what I have defined the JCF to be. This is what our text does, and it defines the JCF as the transpose of what I have defined it to be. "
},
{
  "id": "cor-jcf-exists-if-charpoly-factors-linearly",
  "level": "2",
  "url": "sec-jcf.html#cor-jcf-exists-if-charpoly-factors-linearly",
  "type": "Corollary",
  "number": "15.35",
  "title": "JCF Exists if CharPoly Factors Linearly.",
  "body": "JCF Exists if CharPoly Factors Linearly   If is an matrix with entries in a field and factors completely into linear factors, then is similar to a matrix in Jordan Canonical Form, and this matrix is unique up to the ordering of the Jordan Blocks.   "
},
{
  "id": "exe-finding-jcf",
  "level": "2",
  "url": "sec-jcf.html#exe-finding-jcf",
  "type": "Example",
  "number": "15.36",
  "title": "Finding JCF.",
  "body": "Finding JCF  Let us find the Jordan Canonical Form of   We found the Rational Canonical Form of this matrix before. In the process we showed that we have an isomorphism of -module. By the Sunzi Remainder Theorem and thus the elementary divisors of are . By the Theorem this shows that the JCF of is   "
},
{
  "id": "def-diagonalizable",
  "level": "2",
  "url": "sec-jcf.html#def-diagonalizable",
  "type": "Definition",
  "number": "15.37",
  "title": "Diagonalizable.",
  "body": "Diagonalizable   Let be a finite dimensional vector space over a field and let be an -linear operator. We say is diagonalizable if there is a basis for such that the matrix is a diagonal matrix.   "
},
{
  "id": "sec-irrpoly",
  "level": "1",
  "url": "sec-irrpoly.html",
  "type": "Section",
  "number": "16.1",
  "title": "Irredicuble Polynomials",
  "body": "Irredicuble Polynomials    Eliminate all other factors, and the one which remains must be the truth.   Sir Arthur Conan Doyle     For an integral domain , a polynomial is called irreducible if is not a unit and whenever , either or is a unit. (It follows that such a also cannot be .)      Let be a field and .   If has degree one, it is irreducible.    If has a root and , then is not irreducible (since it factors as for some of degree at least ).    If , then is irreducible if and only if has no roots.    (Rational Root Test) If and all the coefficients of are integers and is a root of with , then divides and divides . More generally, the same holds with replaced by any PID and replaced by its field of fractions.        Never, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever try to use the converse of (2) or a version of (3) for polynomials of degree more than ; they are false.    Does have any roots? No. The only possible roots are and , and a careful check rules these out. Is irreducible? No, it factors as times      For a PID and , define the content of , written , to be the gcd of the coefficients of . Equivalently, is the generator of the principal ideal generated by the coefficients of .    Gauss's Lemma: Part 1   Let where is a PID. Then (up to associates).    We first show the following special case: If and , then .  To see this, pick a prime and write for the result of modding out the coefficients of by . Then (since the map sending to is a ring map). Since , we have that and . Since is a domain, it follows that . This proves does not divide all of the coefficients of . Since was arbitrary, .  For the general case, let and where and . Note that and . By the case already proven, . It follows .    Gauss's Lemma: Part 2   Let be a PID and let be its field of fractions, and assume is a non-constant polynomial with coefficients in . is irreducible in if and only if it is irreducible in and .    Suppose with . We can find an element of such that . (We can take to be the product of all the denominators of the coefficients of , for example; this is called “clearing denominators''.) Similarly, there is an such that . Further, write where , , and and similarly where , , and . We have Using Gauss's Lemma, Part 1, we have and hence We also have (since we've already proven that ).  So and thus by dividing we arrive at But is irreducible in . It follows that either or must be a unit in (i.e., a unit in ) and it follows that either or is a unit in . This proves is irreducible in .  ( ) Say irreducible in and . If with then, since is irreducible in , one of or must be a constant. But since , this constant must be .     Let's prove is irreducible. By Gauss's Lemma, we just need to show it is irreducible in .  If did factor in as a product of monic polynomials, then would also factor in this way. Now . This has no roots (the only possibilities are or ) and so if it did factor it would have to factor as a product of two quadratic, irreducible polynomials. The only such polynomial in is (the others all have roots). But . This proves is irreducible in and hence must be irreducible in .   Eisenstein's Criterion   Let be a PID with field of fractions and assume is a polynomial. Suppose there is a prime element such that , for all , and . Then is irreducible in .    We have with and . Since does not divide the leading coefficient of , we have . It therefore follows that the three assumptions involving the coefficients of are also satisfied by the coefficients . Moreover, is irreducible in if and only if is irreducible in . We may therefore assume without loss of generality that .  By Gauss's Lemma we just need to prove it is irreducible in . Suppose with , where and where and .  Upon modding out by we get The assumptions on give that with . Since is a domain, it follows that On the other hand, we also have and since , we have that or . So or . This can only occur if or .  We have shown that if factors in as , then at least one of of must be a constant polynomial. Since , this factor must be a unit. So is irreducible in .     For instance, is irreducible in thanks to applied with . (Note that it isn't irreducible in since it does not have unit content.)     For any prime , the -th cyclotomic polynomial  is irreducible in .    Consider the ring isomorphism given by . I claim that To see this, we note that and by the binomial theorem we have Since , the claim follows.  By , is irreducible in and, since is an isomorphism, it follows that is irreducible in .      Assume is an integral domain and is a monic polynomial with coefficients in . If there is a prime element such that is irreducible in , then is irreducible in .    We prove the contra-positive. Suppose is reducible in . Then we have for some monic, non-constant polynomials and in . It follows that holds in . But since and are monic, non-constant polynomials, and are both non-constant polynomials in and hence is reducible in .     The assumption that be monic in this Proposition is necessary. Consider for instance . Modding out by yields a linear polynomial in which is thus irreducible. But clearly isn't irreducible in . (The Proposition can be generalized to non-monic polynomials by adding the assumption that does not divided the leading coefficient of .)     Let be a field and a finite subgroup of the multiplicative group . Prove that is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian every Sylow -subgroup of is normal, and thus there is only one of each. This means that can be written as a direct product of cyclic groups of relatively prime order; Hence is itself cyclic.      Show that is irreducible.      Let be a field and a finite subgroup of the multiplicative group . Prove that is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian every Sylow -subgroup of is normal, and thus there is only one of each. This means that can be written as a direct product of cyclic groups of relatively prime order; Hence is itself cyclic.    "
},
{
  "id": "def-irreducible-polynomial",
  "level": "2",
  "url": "sec-irrpoly.html#def-irreducible-polynomial",
  "type": "Definition",
  "number": "16.1",
  "title": "",
  "body": "  For an integral domain , a polynomial is called irreducible if is not a unit and whenever , either or is a unit. (It follows that such a also cannot be .)   "
},
{
  "id": "thm-degree-and-irreducibility",
  "level": "2",
  "url": "sec-irrpoly.html#thm-degree-and-irreducibility",
  "type": "Theorem",
  "number": "16.2",
  "title": "",
  "body": "  Let be a field and .   If has degree one, it is irreducible.    If has a root and , then is not irreducible (since it factors as for some of degree at least ).    If , then is irreducible if and only if has no roots.    (Rational Root Test) If and all the coefficients of are integers and is a root of with , then divides and divides . More generally, the same holds with replaced by any PID and replaced by its field of fractions.      "
},
{
  "id": "remark-99",
  "level": "2",
  "url": "sec-irrpoly.html#remark-99",
  "type": "Remark",
  "number": "16.3",
  "title": "",
  "body": " Never, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever try to use the converse of (2) or a version of (3) for polynomials of degree more than ; they are false.  "
},
{
  "id": "ex-does-it-have-roots",
  "level": "2",
  "url": "sec-irrpoly.html#ex-does-it-have-roots",
  "type": "Example",
  "number": "16.4",
  "title": "",
  "body": " Does have any roots? No. The only possible roots are and , and a careful check rules these out. Is irreducible? No, it factors as times   "
},
{
  "id": "def-content",
  "level": "2",
  "url": "sec-irrpoly.html#def-content",
  "type": "Definition",
  "number": "16.5",
  "title": "",
  "body": "  For a PID and , define the content of , written , to be the gcd of the coefficients of . Equivalently, is the generator of the principal ideal generated by the coefficients of .   "
},
{
  "id": "thm-gausss-lemma-part-1",
  "level": "2",
  "url": "sec-irrpoly.html#thm-gausss-lemma-part-1",
  "type": "Theorem",
  "number": "16.6",
  "title": "Gauss's Lemma: Part 1.",
  "body": "Gauss's Lemma: Part 1   Let where is a PID. Then (up to associates).    We first show the following special case: If and , then .  To see this, pick a prime and write for the result of modding out the coefficients of by . Then (since the map sending to is a ring map). Since , we have that and . Since is a domain, it follows that . This proves does not divide all of the coefficients of . Since was arbitrary, .  For the general case, let and where and . Note that and . By the case already proven, . It follows .   "
},
{
  "id": "thm-gausss-lemma-part-2",
  "level": "2",
  "url": "sec-irrpoly.html#thm-gausss-lemma-part-2",
  "type": "Theorem",
  "number": "16.7",
  "title": "Gauss's Lemma: Part 2.",
  "body": "Gauss's Lemma: Part 2   Let be a PID and let be its field of fractions, and assume is a non-constant polynomial with coefficients in . is irreducible in if and only if it is irreducible in and .    Suppose with . We can find an element of such that . (We can take to be the product of all the denominators of the coefficients of , for example; this is called “clearing denominators''.) Similarly, there is an such that . Further, write where , , and and similarly where , , and . We have Using Gauss's Lemma, Part 1, we have and hence We also have (since we've already proven that ).  So and thus by dividing we arrive at But is irreducible in . It follows that either or must be a unit in (i.e., a unit in ) and it follows that either or is a unit in . This proves is irreducible in .  ( ) Say irreducible in and . If with then, since is irreducible in , one of or must be a constant. But since , this constant must be .   "
},
{
  "id": "ex-irreducibility-and-gauss",
  "level": "2",
  "url": "sec-irrpoly.html#ex-irreducibility-and-gauss",
  "type": "Example",
  "number": "16.8",
  "title": "",
  "body": " Let's prove is irreducible. By Gauss's Lemma, we just need to show it is irreducible in .  If did factor in as a product of monic polynomials, then would also factor in this way. Now . This has no roots (the only possibilities are or ) and so if it did factor it would have to factor as a product of two quadratic, irreducible polynomials. The only such polynomial in is (the others all have roots). But . This proves is irreducible in and hence must be irreducible in .  "
},
{
  "id": "thm-eisensteins-criterion",
  "level": "2",
  "url": "sec-irrpoly.html#thm-eisensteins-criterion",
  "type": "Theorem",
  "number": "16.9",
  "title": "Eisenstein's Criterion.",
  "body": "Eisenstein's Criterion   Let be a PID with field of fractions and assume is a polynomial. Suppose there is a prime element such that , for all , and . Then is irreducible in .    We have with and . Since does not divide the leading coefficient of , we have . It therefore follows that the three assumptions involving the coefficients of are also satisfied by the coefficients . Moreover, is irreducible in if and only if is irreducible in . We may therefore assume without loss of generality that .  By Gauss's Lemma we just need to prove it is irreducible in . Suppose with , where and where and .  Upon modding out by we get The assumptions on give that with . Since is a domain, it follows that On the other hand, we also have and since , we have that or . So or . This can only occur if or .  We have shown that if factors in as , then at least one of of must be a constant polynomial. Since , this factor must be a unit. So is irreducible in .   "
},
{
  "id": "ex-using-eisenstein",
  "level": "2",
  "url": "sec-irrpoly.html#ex-using-eisenstein",
  "type": "Example",
  "number": "16.10",
  "title": "",
  "body": " For instance, is irreducible in thanks to applied with . (Note that it isn't irreducible in since it does not have unit content.)  "
},
{
  "id": "prop-cyclotomic-polynomial-irreducible",
  "level": "2",
  "url": "sec-irrpoly.html#prop-cyclotomic-polynomial-irreducible",
  "type": "Proposition",
  "number": "16.11",
  "title": "",
  "body": "  For any prime , the -th cyclotomic polynomial  is irreducible in .    Consider the ring isomorphism given by . I claim that To see this, we note that and by the binomial theorem we have Since , the claim follows.  By , is irreducible in and, since is an isomorphism, it follows that is irreducible in .   "
},
{
  "id": "prop-primes-and-irreducibility",
  "level": "2",
  "url": "sec-irrpoly.html#prop-primes-and-irreducibility",
  "type": "Proposition",
  "number": "16.12",
  "title": "",
  "body": "  Assume is an integral domain and is a monic polynomial with coefficients in . If there is a prime element such that is irreducible in , then is irreducible in .    We prove the contra-positive. Suppose is reducible in . Then we have for some monic, non-constant polynomials and in . It follows that holds in . But since and are monic, non-constant polynomials, and are both non-constant polynomials in and hence is reducible in .   "
},
{
  "id": "ex-monic-is-necessary",
  "level": "2",
  "url": "sec-irrpoly.html#ex-monic-is-necessary",
  "type": "Example",
  "number": "16.13",
  "title": "",
  "body": " The assumption that be monic in this Proposition is necessary. Consider for instance . Modding out by yields a linear polynomial in which is thus irreducible. But clearly isn't irreducible in . (The Proposition can be generalized to non-monic polynomials by adding the assumption that does not divided the leading coefficient of .)  "
},
{
  "id": "prop-fields-and-group-of-units",
  "level": "2",
  "url": "sec-irrpoly.html#prop-fields-and-group-of-units",
  "type": "Proposition",
  "number": "16.14",
  "title": "",
  "body": "  Let be a field and a finite subgroup of the multiplicative group . Prove that is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian every Sylow -subgroup of is normal, and thus there is only one of each. This means that can be written as a direct product of cyclic groups of relatively prime order; Hence is itself cyclic.   "
},
{
  "id": "prop-irreducible-poly",
  "level": "2",
  "url": "sec-irrpoly.html#prop-irreducible-poly",
  "type": "Proposition",
  "number": "16.15",
  "title": "",
  "body": "  Show that is irreducible.   "
},
{
  "id": "prop-fields-and-group-of-units-1",
  "level": "2",
  "url": "sec-irrpoly.html#prop-fields-and-group-of-units-1",
  "type": "Proposition",
  "number": "16.16",
  "title": "",
  "body": "  Let be a field and a finite subgroup of the multiplicative group . Prove that is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian every Sylow -subgroup of is normal, and thus there is only one of each. This means that can be written as a direct product of cyclic groups of relatively prime order; Hence is itself cyclic.   "
},
{
  "id": "field-extension-basics",
  "level": "1",
  "url": "field-extension-basics.html",
  "type": "Section",
  "number": "17.1",
  "title": "Field Extension Basics",
  "body": "Field Extension Basics  Field Extension   A field extension is an inclusion of one field into a larger field , making into a subfield of . We will write either or to signify that is a field extension of .     So a field extension is just another name for a subfield, but the emphasis is different. We think of as coming first and later.    Recall that if and are fields, then every ring homomorphism necessarily injective. (Proof: since , is a proper ideal of , and since is a field, the only proper ideal of it is .) Thus maps isomorphically onto its image and is a field extension. By abuse of notation we will typically think of as being a field extension, even though it is technically just an injective homomorphism of fields.   Examples of Field Extensions   and are basic examples of field extensions.  Recall that is a field. So is another example of a field extension.    The latter is a typical sort of example for us: Starting with , we would like to adjoin a root of the irreducible (in ) polynomial . Doing so yields .  The previous example was a quadratic extension, which is misleadingly simple.   Yet More Field Extensions  Consider . It is irreducible (e.g., by ) and has roots , and in . So there are three ways in which we could “adjoin a root\" to : First we could form the field It is not completely obvious this is a field, but we'll prove it latter. The reason that we don't need third or higher powers is that, e.g., . Or we could instead form the field or the field . There are clearly not all equal since, for example, but is not in . However, they are {} field extensions as we will prove below.     Given a field extension and an element , set Then is a subring of and in fact it is the smallest subring of that contains and We define to be the field of fractions of ; that is, So, is a subfield of and it is the smallest subfield of that contains and .     Note that, in the context of this definition, we have , with each inclusion being a subring inclusion. and are all fields and in general is only a ring. But, in some cases we have (and hence it is a field). Indeed, this occurs whenever is the root of some polynomial with coefficients in .    Take and . Then any expression of the form with is equal to one of the form for . If , then with and both in . This proves that and in particular that is a field.     is not a field (and so in particular it is not equal to since, for example, . (If it were, then we would have for some , and hence , which would imply is the root of a polynomial with rational coefficients. This is known to be not true.)   Degree of a Field Extension   The degree of a field extension is     Degrees of Common Extensions  We have that and . (We could in fact say is the cardinality of , but in general we lump all infinite field extensions together when talking about degree.) We have where .   Properties of Extension Degrees   Assume is a field and is an irreducible polynomial. Set , and for , let denote the coset . The following hold:    is a field extension via the map given by for . (This is technically an injective homomorphisms of fields.)     .     has a root in ; in fact, the element is a root of this polynomial: .       Because is irreducible and is a PID, is a maximal ideal . Thus is a field . The map given by is a ring map since it is the composition of the two ring maps  . Since it is a ring map between two fields, it is injective .  The equality holds since is a basis for regarded as an -vector space, as we have seen before .  The last assertion is tricky only because the notation is confusing. Say and just to keep things straight let's set . We need to show : We have      The last part of the proposition is notationally confusing to prove in general but clear in examples. So let's do a simple one: Say and . Then . The assertion is that is a root of the polynomial viewed as having coefficients in . In other words, this element has the property that its square is . Let's check: Since and we have . Indeed, there is a field isomorphism sending to and more generally to    Simple Extension   A field extension is called simple if for some (typically, non-unique) element of .    Primitive Element   primitive element goes here lol      is a primitive element of the extension . So is and, more generally, for any with .   Generated Subfield   If is a field extension and is any subset of , we write for the smallest subfield of that contains all of and and it is called the subfield generated by over . Since the intersection of any two subfields of is again a subfield, exists and is where  fix Nearly always will be a finite set, , and we write for .  In this case, we have      Regard as a subfield of and let . We may also describe as where we set .  I claim that is in fact a simple extension of . For example, say . I claim that . Note that and So , and hence . Likewise, So . This example is an illustration of the Primitive Element Theorem (which we might or might not have time to prove this semester): Every finite extension of is generated by a single element (or, in other words, is simple). This example shows is simple and is a primitive element of this field extension.   "
},
{
  "id": "def-field-extension",
  "level": "2",
  "url": "field-extension-basics.html#def-field-extension",
  "type": "Definition",
  "number": "17.1",
  "title": "Field Extension.",
  "body": "Field Extension   A field extension is an inclusion of one field into a larger field , making into a subfield of . We will write either or to signify that is a field extension of .   "
},
{
  "id": "remark-100",
  "level": "2",
  "url": "field-extension-basics.html#remark-100",
  "type": "Remark",
  "number": "17.2",
  "title": "",
  "body": " So a field extension is just another name for a subfield, but the emphasis is different. We think of as coming first and later.  "
},
{
  "id": "remark-101",
  "level": "2",
  "url": "field-extension-basics.html#remark-101",
  "type": "Remark",
  "number": "17.3",
  "title": "",
  "body": " Recall that if and are fields, then every ring homomorphism necessarily injective. (Proof: since , is a proper ideal of , and since is a field, the only proper ideal of it is .) Thus maps isomorphically onto its image and is a field extension. By abuse of notation we will typically think of as being a field extension, even though it is technically just an injective homomorphism of fields.  "
},
{
  "id": "exe-classic-field-extensions",
  "level": "2",
  "url": "field-extension-basics.html#exe-classic-field-extensions",
  "type": "Example",
  "number": "17.4",
  "title": "Examples of Field Extensions.",
  "body": "Examples of Field Extensions   and are basic examples of field extensions.  Recall that is a field. So is another example of a field extension.  "
},
{
  "id": "remark-102",
  "level": "2",
  "url": "field-extension-basics.html#remark-102",
  "type": "Remark",
  "number": "17.5",
  "title": "",
  "body": " The latter is a typical sort of example for us: Starting with , we would like to adjoin a root of the irreducible (in ) polynomial . Doing so yields .  The previous example was a quadratic extension, which is misleadingly simple.  "
},
{
  "id": "exe-more-field-extensions",
  "level": "2",
  "url": "field-extension-basics.html#exe-more-field-extensions",
  "type": "Example",
  "number": "17.6",
  "title": "Yet More Field Extensions.",
  "body": "Yet More Field Extensions  Consider . It is irreducible (e.g., by ) and has roots , and in . So there are three ways in which we could “adjoin a root\" to : First we could form the field It is not completely obvious this is a field, but we'll prove it latter. The reason that we don't need third or higher powers is that, e.g., . Or we could instead form the field or the field . There are clearly not all equal since, for example, but is not in . However, they are {} field extensions as we will prove below.  "
},
{
  "id": "def-field-extension-element",
  "level": "2",
  "url": "field-extension-basics.html#def-field-extension-element",
  "type": "Definition",
  "number": "17.7",
  "title": "<span class=\"process-math\">\\(F(\\a)\\)<\/span>.",
  "body": "  Given a field extension and an element , set Then is a subring of and in fact it is the smallest subring of that contains and We define to be the field of fractions of ; that is, So, is a subfield of and it is the smallest subfield of that contains and .   "
},
{
  "id": "remark-103",
  "level": "2",
  "url": "field-extension-basics.html#remark-103",
  "type": "Remark",
  "number": "17.8",
  "title": "",
  "body": " Note that, in the context of this definition, we have , with each inclusion being a subring inclusion. and are all fields and in general is only a ring. But, in some cases we have (and hence it is a field). Indeed, this occurs whenever is the root of some polynomial with coefficients in .  "
},
{
  "id": "exe-qsqrt2",
  "level": "2",
  "url": "field-extension-basics.html#exe-qsqrt2",
  "type": "Example",
  "number": "17.9",
  "title": "",
  "body": " Take and . Then any expression of the form with is equal to one of the form for . If , then with and both in . This proves that and in particular that is a field.  "
},
{
  "id": "exe-qpi",
  "level": "2",
  "url": "field-extension-basics.html#exe-qpi",
  "type": "Example",
  "number": "17.10",
  "title": ".",
  "body": "  is not a field (and so in particular it is not equal to since, for example, . (If it were, then we would have for some , and hence , which would imply is the root of a polynomial with rational coefficients. This is known to be not true.)  "
},
{
  "id": "def-degree-field-extension",
  "level": "2",
  "url": "field-extension-basics.html#def-degree-field-extension",
  "type": "Definition",
  "number": "17.11",
  "title": "Degree of a Field Extension.",
  "body": "Degree of a Field Extension   The degree of a field extension is    "
},
{
  "id": "exe-degrees-of-common-extensions",
  "level": "2",
  "url": "field-extension-basics.html#exe-degrees-of-common-extensions",
  "type": "Example",
  "number": "17.12",
  "title": "Degrees of Common Extensions.",
  "body": "Degrees of Common Extensions  We have that and . (We could in fact say is the cardinality of , but in general we lump all infinite field extensions together when talking about degree.) We have where .  "
},
{
  "id": "prop-properties-of-extension-degrees",
  "level": "2",
  "url": "field-extension-basics.html#prop-properties-of-extension-degrees",
  "type": "Proposition",
  "number": "17.13",
  "title": "Properties of Extension Degrees.",
  "body": "Properties of Extension Degrees   Assume is a field and is an irreducible polynomial. Set , and for , let denote the coset . The following hold:    is a field extension via the map given by for . (This is technically an injective homomorphisms of fields.)     .     has a root in ; in fact, the element is a root of this polynomial: .       Because is irreducible and is a PID, is a maximal ideal . Thus is a field . The map given by is a ring map since it is the composition of the two ring maps  . Since it is a ring map between two fields, it is injective .  The equality holds since is a basis for regarded as an -vector space, as we have seen before .  The last assertion is tricky only because the notation is confusing. Say and just to keep things straight let's set . We need to show : We have    "
},
{
  "id": "exe-rxx21",
  "level": "2",
  "url": "field-extension-basics.html#exe-rxx21",
  "type": "Example",
  "number": "17.14",
  "title": "",
  "body": " The last part of the proposition is notationally confusing to prove in general but clear in examples. So let's do a simple one: Say and . Then . The assertion is that is a root of the polynomial viewed as having coefficients in . In other words, this element has the property that its square is . Let's check: Since and we have . Indeed, there is a field isomorphism sending to and more generally to   "
},
{
  "id": "def-simple-extension",
  "level": "2",
  "url": "field-extension-basics.html#def-simple-extension",
  "type": "Definition",
  "number": "17.15",
  "title": "Simple Extension.",
  "body": "Simple Extension   A field extension is called simple if for some (typically, non-unique) element of .   "
},
{
  "id": "def-primitive-element",
  "level": "2",
  "url": "field-extension-basics.html#def-primitive-element",
  "type": "Definition",
  "number": "17.16",
  "title": "Primitive Element.",
  "body": "Primitive Element   primitive element goes here lol   "
},
{
  "id": "exe-sqrt2-primitive",
  "level": "2",
  "url": "field-extension-basics.html#exe-sqrt2-primitive",
  "type": "Example",
  "number": "17.17",
  "title": "",
  "body": "  is a primitive element of the extension . So is and, more generally, for any with .  "
},
{
  "id": "def-generated-subfield",
  "level": "2",
  "url": "field-extension-basics.html#def-generated-subfield",
  "type": "Definition",
  "number": "17.18",
  "title": "Generated Subfield.",
  "body": "Generated Subfield   If is a field extension and is any subset of , we write for the smallest subfield of that contains all of and and it is called the subfield generated by over . Since the intersection of any two subfields of is again a subfield, exists and is where  fix Nearly always will be a finite set, , and we write for .  In this case, we have    "
},
{
  "id": "exe-qsqrt2sqrt3",
  "level": "2",
  "url": "field-extension-basics.html#exe-qsqrt2sqrt3",
  "type": "Example",
  "number": "17.19",
  "title": "",
  "body": " Regard as a subfield of and let . We may also describe as where we set .  I claim that is in fact a simple extension of . For example, say . I claim that . Note that and So , and hence . Likewise, So . This example is an illustration of the Primitive Element Theorem (which we might or might not have time to prove this semester): Every finite extension of is generated by a single element (or, in other words, is simple). This example shows is simple and is a primitive element of this field extension.  "
},
{
  "id": "sec-algebraic",
  "level": "1",
  "url": "sec-algebraic.html",
  "type": "Section",
  "number": "17.2",
  "title": "Algebraic Extensions",
  "body": "Algebraic Extensions  Algebraic Element   For a field extension and , we say is algebraic over if for some non-zero polynomial . Otherwise, is transcendental over .      is algebraic over . Indeed, every element of is algebraic over . (E.g., is a root of .) ia algebraic over . So is for any . The numbers and of are transcendental over ; these are deep facts.   Properties of Algebraic Elements   Suppose is a field extension and . Define a subset of .   The subset is an ideal of .   if and only if is transcendental over ; so if and only if is algebraic over .  Assume is algebraic over .  The unique monic generator of , which we will write as , is irreducible (and hence is a prime ideal).  There is a unique isomorphism of fields sending identically to and sending to .   and in particular is a field.     is algebraic over if and only if . In this case,    is transcendental over if and only if . In this case, there is a unique isomorphism of fields sending identically to and sending to . (Here, is the field of fractions of .)     All parts use the following construction:  Let be the evaluation homomorphism, given by sending to  . Note that satisfies and . We have by definition of the latter. The First Isomorphism Theorem for rings thus gives that induces a ring isomorphism given by . In particular, since is a subring of , it is an integral domain, and hence must be a prime ideal (possibly the ideal).   Let us now prove the various parts:    holds because is the kernel of the ring map .    is by definition.    For (3) assume is algebraic. Then and hence it has a unique monic generator, which we write . Since is prime, is irreducible ; this proves (3a). Also, this shows that is a field and hence so is . Since , contains and , and is a field, we must have . This proves (3b) and (3c).  For (4), if is algebraic over , then by (3b) and Proposition . For the converse, if , then the infinite list of elements of cannot be -linearly independent . So, for some and some not all of which are . This shows is the root of a non-zero polynomial.  For (5), if is transcendental, then and so is injective. Since is a field, is a domain , and is injective , it can be extended to the field of fractions of , i.e. there is a ring homomorphism given by for all with . The image of is precisely . The map is injective since it is a ring homomorphism whose source is a field.     Minimum Polynomial   If is algebraic over the subfield , the unique monic generator of the ideal in the previous theorem, written , is called the minimum polynomial of over .     Note that the minimum polynomial of over (if it exists) divides every polynomial in that has as a root. In particular, it is the unique monic, irreducible polynomial having as a root. It can also be characterized as the monic polynomial in of least degree having as a root.    For any prime integer , set , a so-called “primitive -th root of unity\". Let us find . Note that is a root of which factors as where . As we showed before , is irreducible in . Since is not a root of , it must be a root of , and since is irreducible, it must be (see the Remark).    Uniqueness of Field Extensions   Let be irreducible and let (respectively, ) be a root of in some field extension (respectively, ) of . Then there is an isomorphism of fields such that and .    Note that is (up to a non-zero constant factor) the minimum polynomial of both and . So, we may apply (3b) of the Theorem twice to give a pair of isomorphisms of fields, given by sending to (for the left one) and (for the right one). Take to be the inverse of the one on the left composed with the right one.      A simple example illustrating the Corollary is that and are isomorphic fields. In fact, the are equal: . But the Corollary gives that there is an interesting isomorphism that sends to . In general, we have for . This previews the central idea of Galois theory.    Let (the unique real cube-root of ) and (one of the two imaginary cube roots of ).  Then by the Corollary (applied with ) there is an isomorphism of fields that restricts to the identity map on . Note that these two fields are not equal since the former is contained in and the latter is not.   The Degree Formula   Suppose are field extensions. Then In particular, the composition of two finite extensions of fields is again a finite extension.    Let be a basis for as an -vector space and let be a basis for as an -vector space. Let denote the subset of . The Proposition follows from the following two facts: - is a basis of as an -vector space and - the function is bijective (so that the cardinality of is ). Concerning (a), for , we have for some and . For each , is an -linear combination of a finite set of elements of . Combining these gives that is in the -span of .  To prove linear independence, it suffices to prove that if and be distinct elements of and respectively, then the set is linearly independent. Suppose for some . Since the 's are -linearly independent and and , we get that, for each , . Using now that the 's are -linearly independent, we have that for all and all , . This proves is linearly independent over , and hence is linearly independent over .  Concerning (b), if for some , then , and since the 's are -linearly independent, we must have and hence .     Say is a field extension of prime degree . Given , by the we have . Since , and so . It follows that , whence . As a (very simple) example of this, since is prime, for any complex number that is not real.    Let be the result of adjoining to all of the roots in of . That is, where , , , and . As we shall see later, is an example of a “splitting field\". Let's find .  First, let us note that we can also describe as . This holds since each of belongs to and hence . The opposite containment holds because , with the latter being true because .  Set . Then . Since and is a root of , we have is at most and it will be exactly if and only if is irreducible in . This is unclear.  So instead let's try a different approach. Let . Then since is irreducible in by , we have . Since and is a root of , we have . But since . Note that if and only if . Thus .  By the  we conclude that Note that, in hindsight, it must have been true that is irreducible in , since otherwise the would give that .   Algebraic Extension   A field extension is called algebraic if every element is algebraic over (i.e., if every element of is the root of a non-zero polynomial with coefficients in ).    Finite Extensions are Algebraic   If is a finite extension of fields, then it is algebraic.    Pick . Since is a -vector subspace of and we have . (One could also appeal to the  for this.) So by (4) of Theorem , is algebraic of .    Infinite Algebraic Extension  Let and set . Then is a subfield of : To see this, note first that provided . Given , we have and for some and and hence are both in . Since is a field, we have , , and (provided ) all belong to and hence to . This proves is field extension of . It is algebraic over since each is. But it is not a finite extension of , since (since is irreducible in by ) and hence for all .    Transitivity of Algebraic Extensions   Let be extensions of fields, not necessarily finite.   Prove that and are algebraic if and only if is algebraic.  Give an example where and are Galois but is not Galois.     Let be extensions of fields, not necessarily finite.  Suppose that and are algebraic extensions. Let . Then is the root of the polynomial with . Notice that is a polynomial in , making is algebraic over this as well. Consider the chain of field extensions Since is algebraic over for all and is algebraic over , by Theorem each step in this chain has finite degree. By the , is finite and thus so is . By the Theorem again, is algebraic over .  Next suppose that is algebraic. Let . Then , and so it is algebraic over . Now let . Then is the root of a polynomial in , which is also in , so is algebraic as well.   is Galois over , and is Galois over , but is not Galois over as the splitting field of has degree .     The converse of this proposition is also true: Given field extensions , if is algebraic then so are and . This is more or less obvious from the definition.      Show that any finite extension of fields is algebraic.  Let denote the subfield of consisting of all the complex numbers which are algebraic over . (You may use that is a field without proof.) Show that is an algebraic extension, but not a finite extension.        Let be a finite extension of fields. Let . By the we have . Thus is finite, making algebraic over .    Notice that for all and that is a root of the polynomial , which is irreducible in by ( ). Thus . As must be added to for all , we see that this extension is not finite.         Assume that is a finite extension of fields of degree .   Prove that if is irreducible of degree and then remains irreducible when regarded as an element of the ring .  Show, by means of an explicit example with justification, that the statement in part (a) would become false if the assumption that were omitted.      Let be a finite extension of fields of degree .  Suppose that is irreducible of degree and .  First, note that if then will remain irreducible in  . Suppose then that . There exists an algebraically closed extension such that has a root  . Consider . As is algebraic in we know there exists some unique irreducible minimum polynomial of degree , and thus that  . Using the  we see that However, and so for some , so . As we must have . But was defined to be the degree of , which divides . As and , we see that , so so for some . As irreducible polynomials multiplied by a constant are still irreducible, we see that is indeed irreducible in .  Let be a non-constant irreducible polynomial of degree in . Let . Because is irreducible and is a PID, is a maximal ideal. Thus is a field , , and is a root of in  . Hence is no longer irreducible by Theorem 2.2    "
},
{
  "id": "def-algebraic-element",
  "level": "2",
  "url": "sec-algebraic.html#def-algebraic-element",
  "type": "Definition",
  "number": "17.20",
  "title": "Algebraic Element.",
  "body": "Algebraic Element   For a field extension and , we say is algebraic over if for some non-zero polynomial . Otherwise, is transcendental over .   "
},
{
  "id": "exe-i-algebraic-over-r",
  "level": "2",
  "url": "sec-algebraic.html#exe-i-algebraic-over-r",
  "type": "Example",
  "number": "17.21",
  "title": "",
  "body": "  is algebraic over . Indeed, every element of is algebraic over . (E.g., is a root of .) ia algebraic over . So is for any . The numbers and of are transcendental over ; these are deep facts.  "
},
{
  "id": "thm-properties-of-algebraic-elements",
  "level": "2",
  "url": "sec-algebraic.html#thm-properties-of-algebraic-elements",
  "type": "Theorem",
  "number": "17.22",
  "title": "Properties of Algebraic Elements.",
  "body": "Properties of Algebraic Elements   Suppose is a field extension and . Define a subset of .   The subset is an ideal of .   if and only if is transcendental over ; so if and only if is algebraic over .  Assume is algebraic over .  The unique monic generator of , which we will write as , is irreducible (and hence is a prime ideal).  There is a unique isomorphism of fields sending identically to and sending to .   and in particular is a field.     is algebraic over if and only if . In this case,    is transcendental over if and only if . In this case, there is a unique isomorphism of fields sending identically to and sending to . (Here, is the field of fractions of .)     All parts use the following construction:  Let be the evaluation homomorphism, given by sending to  . Note that satisfies and . We have by definition of the latter. The First Isomorphism Theorem for rings thus gives that induces a ring isomorphism given by . In particular, since is a subring of , it is an integral domain, and hence must be a prime ideal (possibly the ideal).   Let us now prove the various parts:    holds because is the kernel of the ring map .    is by definition.    For (3) assume is algebraic. Then and hence it has a unique monic generator, which we write . Since is prime, is irreducible ; this proves (3a). Also, this shows that is a field and hence so is . Since , contains and , and is a field, we must have . This proves (3b) and (3c).  For (4), if is algebraic over , then by (3b) and Proposition . For the converse, if , then the infinite list of elements of cannot be -linearly independent . So, for some and some not all of which are . This shows is the root of a non-zero polynomial.  For (5), if is transcendental, then and so is injective. Since is a field, is a domain , and is injective , it can be extended to the field of fractions of , i.e. there is a ring homomorphism given by for all with . The image of is precisely . The map is injective since it is a ring homomorphism whose source is a field.    "
},
{
  "id": "def-minimum-polynomial",
  "level": "2",
  "url": "sec-algebraic.html#def-minimum-polynomial",
  "type": "Definition",
  "number": "17.23",
  "title": "Minimum Polynomial.",
  "body": "Minimum Polynomial   If is algebraic over the subfield , the unique monic generator of the ideal in the previous theorem, written , is called the minimum polynomial of over .   "
},
{
  "id": "remark-104",
  "level": "2",
  "url": "sec-algebraic.html#remark-104",
  "type": "Remark",
  "number": "17.24",
  "title": "",
  "body": " Note that the minimum polynomial of over (if it exists) divides every polynomial in that has as a root. In particular, it is the unique monic, irreducible polynomial having as a root. It can also be characterized as the monic polynomial in of least degree having as a root.  "
},
{
  "id": "exe-primitive-roots-of-unity",
  "level": "2",
  "url": "sec-algebraic.html#exe-primitive-roots-of-unity",
  "type": "Example",
  "number": "17.25",
  "title": "",
  "body": " For any prime integer , set , a so-called “primitive -th root of unity\". Let us find . Note that is a root of which factors as where . As we showed before , is irreducible in . Since is not a root of , it must be a root of , and since is irreducible, it must be (see the Remark).   "
},
{
  "id": "cor-uniqueness-of-field-extensions",
  "level": "2",
  "url": "sec-algebraic.html#cor-uniqueness-of-field-extensions",
  "type": "Corollary",
  "number": "17.26",
  "title": "Uniqueness of Field Extensions.",
  "body": "Uniqueness of Field Extensions   Let be irreducible and let (respectively, ) be a root of in some field extension (respectively, ) of . Then there is an isomorphism of fields such that and .    Note that is (up to a non-zero constant factor) the minimum polynomial of both and . So, we may apply (3b) of the Theorem twice to give a pair of isomorphisms of fields, given by sending to (for the left one) and (for the right one). Take to be the inverse of the one on the left composed with the right one.    "
},
{
  "id": "exe-qsqrt2congq-sqrt2",
  "level": "2",
  "url": "sec-algebraic.html#exe-qsqrt2congq-sqrt2",
  "type": "Example",
  "number": "17.27",
  "title": "",
  "body": " A simple example illustrating the Corollary is that and are isomorphic fields. In fact, the are equal: . But the Corollary gives that there is an interesting isomorphism that sends to . In general, we have for . This previews the central idea of Galois theory.  "
},
{
  "id": "exe-cube-roots",
  "level": "2",
  "url": "sec-algebraic.html#exe-cube-roots",
  "type": "Example",
  "number": "17.28",
  "title": "",
  "body": " Let (the unique real cube-root of ) and (one of the two imaginary cube roots of ).  Then by the Corollary (applied with ) there is an isomorphism of fields that restricts to the identity map on . Note that these two fields are not equal since the former is contained in and the latter is not.  "
},
{
  "id": "thm-degree-formula",
  "level": "2",
  "url": "sec-algebraic.html#thm-degree-formula",
  "type": "Theorem",
  "number": "17.29",
  "title": "The Degree Formula.",
  "body": "The Degree Formula   Suppose are field extensions. Then In particular, the composition of two finite extensions of fields is again a finite extension.    Let be a basis for as an -vector space and let be a basis for as an -vector space. Let denote the subset of . The Proposition follows from the following two facts: - is a basis of as an -vector space and - the function is bijective (so that the cardinality of is ). Concerning (a), for , we have for some and . For each , is an -linear combination of a finite set of elements of . Combining these gives that is in the -span of .  To prove linear independence, it suffices to prove that if and be distinct elements of and respectively, then the set is linearly independent. Suppose for some . Since the 's are -linearly independent and and , we get that, for each , . Using now that the 's are -linearly independent, we have that for all and all , . This proves is linearly independent over , and hence is linearly independent over .  Concerning (b), if for some , then , and since the 's are -linearly independent, we must have and hence .   "
},
{
  "id": "exe-rwc-for-all-wnotinr",
  "level": "2",
  "url": "sec-algebraic.html#exe-rwc-for-all-wnotinr",
  "type": "Example",
  "number": "17.30",
  "title": "",
  "body": " Say is a field extension of prime degree . Given , by the we have . Since , and so . It follows that , whence . As a (very simple) example of this, since is prime, for any complex number that is not real.  "
},
{
  "id": "exe-degree-and-x2-5",
  "level": "2",
  "url": "sec-algebraic.html#exe-degree-and-x2-5",
  "type": "Example",
  "number": "17.31",
  "title": "",
  "body": " Let be the result of adjoining to all of the roots in of . That is, where , , , and . As we shall see later, is an example of a “splitting field\". Let's find .  First, let us note that we can also describe as . This holds since each of belongs to and hence . The opposite containment holds because , with the latter being true because .  Set . Then . Since and is a root of , we have is at most and it will be exactly if and only if is irreducible in . This is unclear.  So instead let's try a different approach. Let . Then since is irreducible in by , we have . Since and is a root of , we have . But since . Note that if and only if . Thus .  By the  we conclude that Note that, in hindsight, it must have been true that is irreducible in , since otherwise the would give that .  "
},
{
  "id": "def-algebraic-extension",
  "level": "2",
  "url": "sec-algebraic.html#def-algebraic-extension",
  "type": "Definition",
  "number": "17.32",
  "title": "Algebraic Extension.",
  "body": "Algebraic Extension   A field extension is called algebraic if every element is algebraic over (i.e., if every element of is the root of a non-zero polynomial with coefficients in ).   "
},
{
  "id": "prop-finite-extensions-are-algebraic",
  "level": "2",
  "url": "sec-algebraic.html#prop-finite-extensions-are-algebraic",
  "type": "Proposition",
  "number": "17.33",
  "title": "Finite Extensions are Algebraic.",
  "body": "Finite Extensions are Algebraic   If is a finite extension of fields, then it is algebraic.    Pick . Since is a -vector subspace of and we have . (One could also appeal to the  for this.) So by (4) of Theorem , is algebraic of .   "
},
{
  "id": "exe-infinite-algebraic-extension",
  "level": "2",
  "url": "sec-algebraic.html#exe-infinite-algebraic-extension",
  "type": "Example",
  "number": "17.34",
  "title": "Infinite Algebraic Extension.",
  "body": "Infinite Algebraic Extension  Let and set . Then is a subfield of : To see this, note first that provided . Given , we have and for some and and hence are both in . Since is a field, we have , , and (provided ) all belong to and hence to . This proves is field extension of . It is algebraic over since each is. But it is not a finite extension of , since (since is irreducible in by ) and hence for all .   "
},
{
  "id": "thm-algebraic-extensions-are-transitive",
  "level": "2",
  "url": "sec-algebraic.html#thm-algebraic-extensions-are-transitive",
  "type": "Theorem",
  "number": "17.35",
  "title": "Transitivity of Algebraic Extensions.",
  "body": "Transitivity of Algebraic Extensions   Let be extensions of fields, not necessarily finite.   Prove that and are algebraic if and only if is algebraic.  Give an example where and are Galois but is not Galois.     Let be extensions of fields, not necessarily finite.  Suppose that and are algebraic extensions. Let . Then is the root of the polynomial with . Notice that is a polynomial in , making is algebraic over this as well. Consider the chain of field extensions Since is algebraic over for all and is algebraic over , by Theorem each step in this chain has finite degree. By the , is finite and thus so is . By the Theorem again, is algebraic over .  Next suppose that is algebraic. Let . Then , and so it is algebraic over . Now let . Then is the root of a polynomial in , which is also in , so is algebraic as well.   is Galois over , and is Galois over , but is not Galois over as the splitting field of has degree .   "
},
{
  "id": "remark-105",
  "level": "2",
  "url": "sec-algebraic.html#remark-105",
  "type": "Remark",
  "number": "17.36",
  "title": "",
  "body": " The converse of this proposition is also true: Given field extensions , if is algebraic then so are and . This is more or less obvious from the definition.  "
},
{
  "id": "prop-algebraic-but-not-finite-extension",
  "level": "2",
  "url": "sec-algebraic.html#prop-algebraic-but-not-finite-extension",
  "type": "Proposition",
  "number": "17.37",
  "title": "",
  "body": "   Show that any finite extension of fields is algebraic.  Let denote the subfield of consisting of all the complex numbers which are algebraic over . (You may use that is a field without proof.) Show that is an algebraic extension, but not a finite extension.        Let be a finite extension of fields. Let . By the we have . Thus is finite, making algebraic over .    Notice that for all and that is a root of the polynomial , which is irreducible in by ( ). Thus . As must be added to for all , we see that this extension is not finite.      "
},
{
  "id": "thm-relatively-prime-extension",
  "level": "2",
  "url": "sec-algebraic.html#thm-relatively-prime-extension",
  "type": "Theorem",
  "number": "17.38",
  "title": "",
  "body": "  Assume that is a finite extension of fields of degree .   Prove that if is irreducible of degree and then remains irreducible when regarded as an element of the ring .  Show, by means of an explicit example with justification, that the statement in part (a) would become false if the assumption that were omitted.      Let be a finite extension of fields of degree .  Suppose that is irreducible of degree and .  First, note that if then will remain irreducible in  . Suppose then that . There exists an algebraically closed extension such that has a root  . Consider . As is algebraic in we know there exists some unique irreducible minimum polynomial of degree , and thus that  . Using the  we see that However, and so for some , so . As we must have . But was defined to be the degree of , which divides . As and , we see that , so so for some . As irreducible polynomials multiplied by a constant are still irreducible, we see that is indeed irreducible in .  Let be a non-constant irreducible polynomial of degree in . Let . Because is irreducible and is a PID, is a maximal ideal. Thus is a field , , and is a root of in  . Hence is no longer irreducible by Theorem 2.2   "
},
{
  "id": "sec-closure",
  "level": "1",
  "url": "sec-closure.html",
  "type": "Section",
  "number": "17.3",
  "title": "Algebraic Closures",
  "body": "Algebraic Closures  Algebraic Closure   A field is algebraically closed if every non-constant polynomial has a root in     is algebraically closed   is algebraically closed. This is the Fundamental Theorem of Algebra.   Equivalent Algebraically Closed Characterizations   The following are equivalent for a field :    is algebraically closed.    Every non-constant polynomial with coefficients in splits completely into (not necessarily distinct) linear factors.    There are no non-trivial algebraic extensions of : If is an algebraic field extension then .          (2): Given a non-constant , by assumption has a root and thus with . But then also has a root and so it too factors, and so on.     (3): Say is algebraic. Pick . Then is a root of some . But since factors completely, .     (1). Pick a non-constant . By Proposition , there there is finite extension of in which does have a root. By assumption and so this root must be in .      Algebraic Closure   Given a field , a field is called an algebraic closure of if is an algebraic field extension of and is algebraically closed.      is an algebraic closure of . This follows from the fact that is a finite extension, hence algebraic, and the Fundamental Theorem of Algebra, which we will not prove.   Collection of Algebraic Elements is Algebraically Closed   Let Then is an algebraic closure of .  More generally, if is a field extension and is algebraically closed, then the collection of elements of that are algebraic over is an algebraic closure of .    It is far from clear that is a subfield of , and so we first prove that: Given , we have that and are finite and hence so is . Thus, every element of is algebraic over ; that is, . Since is a field, it follows that contains , and if . This proves that is indeed a subfield of .  It is clear from the definition that is an algebraic field extension.  Given a non-constant , let be one of its roots in (which exists since we assume is algebraically closed). Then is an algebraic extension and hence so is by Proposition . This proves and hence that is algebraically closed.      Let be a field extension with algebraically closed. Consider the set    Show that is a field.    Show that is algebraically closed.       Let . Notice that and are contained in . As , there exists some polynomial with coefficients in such that is a root. However, this polynomial also lives in , so we have algebraic. As is also algebraic, we have algebraic as well, as it is a finite extension by the . Thus and are algebraic over as well, making a field.  Let . Thus is the root of a polynomial , where . Notice that is a polynomial in as well, and thus is algebraic over this extension as well. Consider the chain of extensions As is algebraic over for all and is algebraic over we see that each step in this chain has finite degree by. By the , is finite and thus so is . Thus is algebraic over , hence , making algebraically closed.    Existence and Uniqueness of Algebraic Closures   For any field , there exists an algebraic closure of . If and are two algebraic closures of the same field , then there exists a field isomorphism such that (i.e., for all ).    Fake Proof of Existence  Let be the collection of all algebraic field extensions of . Make into a poset by declaring iff . We prove has a maximal element.  Let be any totally ordered subset of . If is empty, then is an upper bound for . If is non-empty, set . Using that is totally ordered, it is not hard to see that is indeed a field. It clearly contains as a subfield and every element of it is algebraic over . So and it is an upper bound for . By , has a maximal member .  By construction is algebraic over . If were not algebraically closed, then there would be a non-trivial algebraic extension of it, by Proposition . But then is algebraic by Proposition , and this contradicts the maximality of .  Why is this only a fake proof? It's because , as we've defined it, is not a {} but rather it is something bigger than that. Zorn's Lemma only applies to po{}. How annoying!    "
},
{
  "id": "def-algebraically-closed",
  "level": "2",
  "url": "sec-closure.html#def-algebraically-closed",
  "type": "Definition",
  "number": "17.39",
  "title": "Algebraic Closure.",
  "body": "Algebraic Closure   A field is algebraically closed if every non-constant polynomial has a root in    "
},
{
  "id": "exe-c-is-closed",
  "level": "2",
  "url": "sec-closure.html#exe-c-is-closed",
  "type": "Example",
  "number": "17.40",
  "title": "<span class=\"process-math\">\\(\\C\\)<\/span> is algebraically closed.",
  "body": "is algebraically closed   is algebraically closed. This is the Fundamental Theorem of Algebra.  "
},
{
  "id": "prop-equivalencies-of-algebraically-closed",
  "level": "2",
  "url": "sec-closure.html#prop-equivalencies-of-algebraically-closed",
  "type": "Proposition",
  "number": "17.41",
  "title": "Equivalent Algebraically Closed Characterizations.",
  "body": "Equivalent Algebraically Closed Characterizations   The following are equivalent for a field :    is algebraically closed.    Every non-constant polynomial with coefficients in splits completely into (not necessarily distinct) linear factors.    There are no non-trivial algebraic extensions of : If is an algebraic field extension then .          (2): Given a non-constant , by assumption has a root and thus with . But then also has a root and so it too factors, and so on.     (3): Say is algebraic. Pick . Then is a root of some . But since factors completely, .     (1). Pick a non-constant . By Proposition , there there is finite extension of in which does have a root. By assumption and so this root must be in .     "
},
{
  "id": "def-algebraic-closure",
  "level": "2",
  "url": "sec-closure.html#def-algebraic-closure",
  "type": "Definition",
  "number": "17.42",
  "title": "Algebraic Closure.",
  "body": "Algebraic Closure   Given a field , a field is called an algebraic closure of if is an algebraic field extension of and is algebraically closed.   "
},
{
  "id": "exe-c-is-the-algebraic-closure-of-r",
  "level": "2",
  "url": "sec-closure.html#exe-c-is-the-algebraic-closure-of-r",
  "type": "Example",
  "number": "17.43",
  "title": "",
  "body": "  is an algebraic closure of . This follows from the fact that is a finite extension, hence algebraic, and the Fundamental Theorem of Algebra, which we will not prove.  "
},
{
  "id": "prop-collection-of-algebraic-elements-is-closed",
  "level": "2",
  "url": "sec-closure.html#prop-collection-of-algebraic-elements-is-closed",
  "type": "Proposition",
  "number": "17.44",
  "title": "Collection of Algebraic Elements is Algebraically Closed.",
  "body": "Collection of Algebraic Elements is Algebraically Closed   Let Then is an algebraic closure of .  More generally, if is a field extension and is algebraically closed, then the collection of elements of that are algebraic over is an algebraic closure of .    It is far from clear that is a subfield of , and so we first prove that: Given , we have that and are finite and hence so is . Thus, every element of is algebraic over ; that is, . Since is a field, it follows that contains , and if . This proves that is indeed a subfield of .  It is clear from the definition that is an algebraic field extension.  Given a non-constant , let be one of its roots in (which exists since we assume is algebraically closed). Then is an algebraic extension and hence so is by Proposition . This proves and hence that is algebraically closed.   "
},
{
  "id": "prop-algebraic-elements-closed",
  "level": "2",
  "url": "sec-closure.html#prop-algebraic-elements-closed",
  "type": "Proposition",
  "number": "17.45",
  "title": "",
  "body": "  Let be a field extension with algebraically closed. Consider the set    Show that is a field.    Show that is algebraically closed.       Let . Notice that and are contained in . As , there exists some polynomial with coefficients in such that is a root. However, this polynomial also lives in , so we have algebraic. As is also algebraic, we have algebraic as well, as it is a finite extension by the . Thus and are algebraic over as well, making a field.  Let . Thus is the root of a polynomial , where . Notice that is a polynomial in as well, and thus is algebraic over this extension as well. Consider the chain of extensions As is algebraic over for all and is algebraic over we see that each step in this chain has finite degree by. By the , is finite and thus so is . Thus is algebraic over , hence , making algebraically closed.   "
},
{
  "id": "thm-existence-and-uniqueness-of-algebraic-closures",
  "level": "2",
  "url": "sec-closure.html#thm-existence-and-uniqueness-of-algebraic-closures",
  "type": "Theorem",
  "number": "17.46",
  "title": "Existence and Uniqueness of Algebraic Closures.",
  "body": "Existence and Uniqueness of Algebraic Closures   For any field , there exists an algebraic closure of . If and are two algebraic closures of the same field , then there exists a field isomorphism such that (i.e., for all ).    Fake Proof of Existence  Let be the collection of all algebraic field extensions of . Make into a poset by declaring iff . We prove has a maximal element.  Let be any totally ordered subset of . If is empty, then is an upper bound for . If is non-empty, set . Using that is totally ordered, it is not hard to see that is indeed a field. It clearly contains as a subfield and every element of it is algebraic over . So and it is an upper bound for . By , has a maximal member .  By construction is algebraic over . If were not algebraically closed, then there would be a non-trivial algebraic extension of it, by Proposition . But then is algebraic by Proposition , and this contradicts the maximality of .  Why is this only a fake proof? It's because , as we've defined it, is not a {} but rather it is something bigger than that. Zorn's Lemma only applies to po{}. How annoying!   "
},
{
  "id": "sec-splitting",
  "level": "1",
  "url": "sec-splitting.html",
  "type": "Section",
  "number": "17.4",
  "title": "Splitting Fields",
  "body": "Splitting Fields  Splitting Field   For a field and non-constant polynomial , a splitting field of over is a field extension such that     splits completely into linear factors in ; that is, for some , and     ; that is, is the smallest subfield of that contains and all the roots of .       Examples of Splitting Fields   As a silly example, if already splits into linear factors over , then itself is the splitting field of over .  The splitting field of over is .  If is any irreducible quadratic polynomial in , then the splitting field of is .  In general, given , a splitting field of is given by where are all of the roots of in .     More generally, we may speak of the splitting field of a list of polynomials in : it is a field extension over which each polynomial factors completely and which is generated by all the roots of all the polynomials.  Note that given a finite list , a splitting field for this list is identical to a splitting field for their product .   Properties of Splitting Fields   Let be a field and a non-constant polynomial.   There exists a splitting field for over .    If is another splitting field of over , then there is a field isomorphism such that .    The degree of any splitting field of is at most where .       For (1), let be an algebraic closure of , which exists by the previous Theorem. Let be the roots of in , and set .  It is clear is a splitting field.  To prove (2), we proceed by induction on the degree of . If is linear, then the only splitting field of over is itself and so the result is clear in this case. Say and are the roots of in and , respectively, and say they are ordered so that, and are roots of the same irreducible factor of in .  By Corollary there is an isomorphism that fixes . Note that factors as in and that is the splitting field of over , and similarly factors as in and that is the splitting field of over . If we blur our eyes slightly and pretend is the identity map, we can apply the inductive hypothesis, since , to conclude that there is an isomorphism as in the statement. I leave a more rigorous argument to your imaginations.  To prove (3), we also proceed by induction on the degree of , using the same notation as in the proof of (2).  Since is a root of , we have and hence In we have with and, as before, is the splitting field of over , so that by induction . By the       Recall from before that we proved there exists a field extension in which has at least one root. So for some and . We can then find a field extension of in which has at least one root , and so on. In this way we build a field extension such that factors in as for some . Finally, is a splitting field of .    The splitting field of over is , where . It is not hard to see that . We have since is irreducible in (by ). Since and thus , the gives that . By the Theorem, and hence . (We could also have proven this without appealing to the Theorem.)    The splitting field of is This holds since . It is not too hard to see that the degree of this splitting field over is , far smaller than the upper bound given by the Theorem.    Let . Then splits completely in and its roots are the  -th roots of . One of these is . Notice that every other -th root of is a power of this one. We thus see that is the splitting field of over . This field is called the {} of roots of 1 over . This is a somewhat special example: upon joining one of the roots of we got all the others for free. This happens in other examples too, but is certainly {} a general principle.  In particular, we see that the degree of is at most , far less than the bound of given by the Proposition above. In fact, it is at most since factors as , and hence the minimum polynomial of is a divisor of .  When is prime, then is irreducible, as we proved before, and hence it must equal the minimum polynomial of . So, in this case, the degree of is exactly , but it can be smaller than in general; for example, when , and . Note that factors as and of course .  The irreducible polynomial is known as the {}.   The Porism   If is the splitting field over of an irreducible polynomial and if are any two roots of , then there is a field automorphism such that and .    We basically already proved this, but since it is of large importance, let's do so again:  Since are roots of the same irreducible polynomial, by Corollary there is an isomorphism such that and . We have two field maps, (actual inclusion) and the composition of , and they realize as the splitting field of over in two different ways. Since splitting fields are unique, an isomorphism such as exists.     Let be the splitting field of over ; so .  The Porism gives that there is a field automorphism of such that . This one is clear – complex conjugation gives such an isomorphism.  It also gives there is a field automorphism of such that . This is less obvious.   "
},
{
  "id": "def-splitting-field",
  "level": "2",
  "url": "sec-splitting.html#def-splitting-field",
  "type": "Definition",
  "number": "17.47",
  "title": "Splitting Field.",
  "body": "Splitting Field   For a field and non-constant polynomial , a splitting field of over is a field extension such that     splits completely into linear factors in ; that is, for some , and     ; that is, is the smallest subfield of that contains and all the roots of .      "
},
{
  "id": "exe-common-splitting-fields",
  "level": "2",
  "url": "sec-splitting.html#exe-common-splitting-fields",
  "type": "Example",
  "number": "17.48",
  "title": "Examples of Splitting Fields.",
  "body": "Examples of Splitting Fields   As a silly example, if already splits into linear factors over , then itself is the splitting field of over .  The splitting field of over is .  If is any irreducible quadratic polynomial in , then the splitting field of is .  In general, given , a splitting field of is given by where are all of the roots of in .   "
},
{
  "id": "remark-106",
  "level": "2",
  "url": "sec-splitting.html#remark-106",
  "type": "Remark",
  "number": "17.49",
  "title": "",
  "body": " More generally, we may speak of the splitting field of a list of polynomials in : it is a field extension over which each polynomial factors completely and which is generated by all the roots of all the polynomials.  Note that given a finite list , a splitting field for this list is identical to a splitting field for their product .  "
},
{
  "id": "thm-properties-of-splitting-fields",
  "level": "2",
  "url": "sec-splitting.html#thm-properties-of-splitting-fields",
  "type": "Theorem",
  "number": "17.50",
  "title": "Properties of Splitting Fields.",
  "body": "Properties of Splitting Fields   Let be a field and a non-constant polynomial.   There exists a splitting field for over .    If is another splitting field of over , then there is a field isomorphism such that .    The degree of any splitting field of is at most where .       For (1), let be an algebraic closure of , which exists by the previous Theorem. Let be the roots of in , and set .  It is clear is a splitting field.  To prove (2), we proceed by induction on the degree of . If is linear, then the only splitting field of over is itself and so the result is clear in this case. Say and are the roots of in and , respectively, and say they are ordered so that, and are roots of the same irreducible factor of in .  By Corollary there is an isomorphism that fixes . Note that factors as in and that is the splitting field of over , and similarly factors as in and that is the splitting field of over . If we blur our eyes slightly and pretend is the identity map, we can apply the inductive hypothesis, since , to conclude that there is an isomorphism as in the statement. I leave a more rigorous argument to your imaginations.  To prove (3), we also proceed by induction on the degree of , using the same notation as in the proof of (2).  Since is a root of , we have and hence In we have with and, as before, is the splitting field of over , so that by induction . By the     "
},
{
  "id": "remark-107",
  "level": "2",
  "url": "sec-splitting.html#remark-107",
  "type": "Remark",
  "number": "17.51",
  "title": "",
  "body": " Recall from before that we proved there exists a field extension in which has at least one root. So for some and . We can then find a field extension of in which has at least one root , and so on. In this way we build a field extension such that factors in as for some . Finally, is a splitting field of .  "
},
{
  "id": "exe-splitting-fields-and-x3-2",
  "level": "2",
  "url": "sec-splitting.html#exe-splitting-fields-and-x3-2",
  "type": "Example",
  "number": "17.52",
  "title": "",
  "body": " The splitting field of over is , where . It is not hard to see that . We have since is irreducible in (by ). Since and thus , the gives that . By the Theorem, and hence . (We could also have proven this without appealing to the Theorem.)  "
},
{
  "id": "exe-splitting-fields-and-x4-5x26",
  "level": "2",
  "url": "sec-splitting.html#exe-splitting-fields-and-x4-5x26",
  "type": "Example",
  "number": "17.53",
  "title": "",
  "body": " The splitting field of is This holds since . It is not too hard to see that the degree of this splitting field over is , far smaller than the upper bound given by the Theorem.  "
},
{
  "id": "exe-splitting-fields-and-xn-1",
  "level": "2",
  "url": "sec-splitting.html#exe-splitting-fields-and-xn-1",
  "type": "Example",
  "number": "17.54",
  "title": "",
  "body": " Let . Then splits completely in and its roots are the  -th roots of . One of these is . Notice that every other -th root of is a power of this one. We thus see that is the splitting field of over . This field is called the {} of roots of 1 over . This is a somewhat special example: upon joining one of the roots of we got all the others for free. This happens in other examples too, but is certainly {} a general principle.  In particular, we see that the degree of is at most , far less than the bound of given by the Proposition above. In fact, it is at most since factors as , and hence the minimum polynomial of is a divisor of .  When is prime, then is irreducible, as we proved before, and hence it must equal the minimum polynomial of . So, in this case, the degree of is exactly , but it can be smaller than in general; for example, when , and . Note that factors as and of course .  The irreducible polynomial is known as the {}.  "
},
{
  "id": "cor-porism",
  "level": "2",
  "url": "sec-splitting.html#cor-porism",
  "type": "Corollary",
  "number": "17.55",
  "title": "The Porism.",
  "body": "The Porism   If is the splitting field over of an irreducible polynomial and if are any two roots of , then there is a field automorphism such that and .    We basically already proved this, but since it is of large importance, let's do so again:  Since are roots of the same irreducible polynomial, by Corollary there is an isomorphism such that and . We have two field maps, (actual inclusion) and the composition of , and they realize as the splitting field of over in two different ways. Since splitting fields are unique, an isomorphism such as exists.   "
},
{
  "id": "exe-porism-and-x3-2",
  "level": "2",
  "url": "sec-splitting.html#exe-porism-and-x3-2",
  "type": "Example",
  "number": "17.56",
  "title": "",
  "body": " Let be the splitting field of over ; so .  The Porism gives that there is a field automorphism of such that . This one is clear – complex conjugation gives such an isomorphism.  It also gives there is a field automorphism of such that . This is less obvious.  "
},
{
  "id": "sec-separable",
  "level": "1",
  "url": "sec-separable.html",
  "type": "Section",
  "number": "17.5",
  "title": "Separability",
  "body": "Separability  Characteristic   Let R be a commutative ring. The characteristic of , written , is the unique non-negative generator of the kernel of the unique ring homomorphism . (Recall .)  Equivalently, is the smallest positive integer such that , if such and integer exists, and otherwise.     Observe that for any integer and commutative ring , we have in (i.e., ) if and only if .      and for any .   Prime Field   For a field its prime field is the smallest subfield of ; i.e., it is the intersection of all subfields of .    Prime Fields and Characteristic   Let F be a field.   The characteristic is either or a prime number .     if and only if the prime subfield of is isomorphic to ; for a prime integer if and only if the prime subfield of is isomorphic to .       For the first assertion, consider the unique ring homomorphism . Since is a domain, the kernel of is a prime ideal (since and is a subring of ). The result holds since the only prime ideals of are and for a prime integer . (Note that this proof shows that, more generally, the characteristic of an integral domain must be either or a prime.)  For the second assertion, observe that the smallest {} of is the image of the ring map , and by the first assertion, this image is isomorphic to either or . The latter is already a field and hence it is the prime field of . In the former case, the prime subfield is isomorphic to the field of fractions of , which is .    No Homomorphisms if Different Characteristics   If and are fields such that then there exist no ring homomorphisms from to (or vice versa).    Suppose and are fields and is a ring homomorphism. Let and be the unique ring maps from to and . Since is a ring map from to , we have by the uniqueness of . Since is a field and is not the zero ring, the map is injective. Since is injective, it follows that , and hence we obtain that . By definition of characteristic, we conclude .    Root Multiplicity   For a field and a polynomial , let be an algebraic closure of and a root of . The multiplicity of in is the number of times appears in the factorization of in . (This number is independent of choice of algebraic closure by uniqueness of such closures up to isomorphism.)    Separable (Polynomial)   Let be a field and a polynomial in . If the multiplicity of every root is , we say is a separable polynomial ; i.e. is separable provided it has no repeated roots.    Derivative   For any field and , define its derivative to be     Derivatives in Characteristic  If and for , then . So beware that non-constant polynomials can have derivatives! Observe, however, that this cannot occur in characteristic .   GCD and Field Extensions   Let be a field. For , not both of which are , recall that denotes the unique monic generator of the ideal in generated by and .   For any field extension , .    Let be an algebraic closure of . if any only if and have no common roots in .       Let . To prove (1), we note that is the unique monic polynomial such that - for some , - for soem , and - for soem . Since is a subring of , these three properties also hold when we regard as belonging to and thus by the uniqueness property, we have .   is a consequence of (1), since if two polynomials factor completely into linear factors, then they are relatively prime if and only if they have no linear factors in common, which is equivalent to their having no roots in common.     Criteria for Separability   Let be field and an algebraic closure of .   Given and , the multiplicity of in is at least if and only if and .     is separable if and only if in .    If is irreducible in , then is separable if and only if .       For (1), suppose is a root of of multiplicity at least two. Then in and hence , by the Product Rule. It follows that . Conversely, suppose . Since , we have and hence . Since it follows and thus has multiplicity at least two.  For the second assertion, by (1), we have that is separable if and only if and has no common roots in . The result thus follows from the Lemma.  For the final assertion, assume is irreducible. Since the degree of is strictly less than the degree of , we have that if and only if .    Separability and   is not separable sine is a double root (it factors as ). As predicted by the Theorem, it fails to be relatively prime to its derivative, which is , since each are divisible by .   is separable in because it has 3 distinct roots in , namely . As predicted by the Theorem, it is relatively prime to its derivative .  Now interpret as belonging to . Then is not separable. As predicted by the Theorem, it is not relatively prime to its derivative, which is .    Let be a field of characteristic and assume is an element such that for all .Then is irreducible but not separable. It is not separable since in we have where . Also note that its derivative is .  It is less obvious that it is irreducible, but we can see that this is indeed the case in a specific example: Take (the field of fractions of the polynomial ring ) and let . In this case, is seen to be irreducible, by , but not separable.   Separability and Characteristic Zero   If is an irreducible polynomial with coefficients in a field of characteristic , then is separable. More generally, if is irreducible of degree and , then is separable.    Separable (Field Extension)   An algebraic field extension is called separable if for every its minimum polynomial is separable (i.e., has no repeated roots in an algebraic closure of ).    Separability, Algebraic Extensions, and Char Zero   If , then every algebraic field extension is separable.    Suppose is an algebraic extension and let be algebraic over . Then the minimal polynomial of over has coefficients in and is of the form where . We need to show that is separable, i.e., has no repeated roots in its splitting field.  Suppose has a repeated root in some splitting field of , i.e., for some polynomial . Since is also a root of , we have . Since is an algebraic extension, is algebraic over , so . It follows that , i.e., , which means that is a repeated root of , contradicting the assumption that has no repeated roots. Hence is separable, and since was an arbitrary algebraic element of , we conclude that is a separable extension.     Let and be indeterminants. The extension of fields given by identifying with is not separable. Somewhat more precisely, is isomorphism to the subfield of consisting of elements of the form , with the isomorphism given by sending to .  Then is a root of the polynomial . Moreover since is the field of fractions of the PID and is a prime element of , we may apply (and Gauss) to conclude that is irreducible in . This proves that . This polynomial is not separable since in it is equal to and hence has a repeated root. (Or, you may use that its derivative is .)   "
},
{
  "id": "def-ring-characteristic",
  "level": "2",
  "url": "sec-separable.html#def-ring-characteristic",
  "type": "Definition",
  "number": "17.57",
  "title": "Characteristic.",
  "body": "Characteristic   Let R be a commutative ring. The characteristic of , written , is the unique non-negative generator of the kernel of the unique ring homomorphism . (Recall .)  Equivalently, is the smallest positive integer such that , if such and integer exists, and otherwise.   "
},
{
  "id": "remark-108",
  "level": "2",
  "url": "sec-separable.html#remark-108",
  "type": "Remark",
  "number": "17.58",
  "title": "",
  "body": " Observe that for any integer and commutative ring , we have in (i.e., ) if and only if .  "
},
{
  "id": "exe-charz",
  "level": "2",
  "url": "sec-separable.html#exe-charz",
  "type": "Example",
  "number": "17.59",
  "title": "<span class=\"process-math\">\\(\\char(\\Z)\\)<\/span>.",
  "body": "   and for any .  "
},
{
  "id": "def-prime-field",
  "level": "2",
  "url": "sec-separable.html#def-prime-field",
  "type": "Definition",
  "number": "17.60",
  "title": "Prime Field.",
  "body": "Prime Field   For a field its prime field is the smallest subfield of ; i.e., it is the intersection of all subfields of .   "
},
{
  "id": "prop-characteristic-and-prime-fields",
  "level": "2",
  "url": "sec-separable.html#prop-characteristic-and-prime-fields",
  "type": "Proposition",
  "number": "17.61",
  "title": "Prime Fields and Characteristic.",
  "body": "Prime Fields and Characteristic   Let F be a field.   The characteristic is either or a prime number .     if and only if the prime subfield of is isomorphic to ; for a prime integer if and only if the prime subfield of is isomorphic to .       For the first assertion, consider the unique ring homomorphism . Since is a domain, the kernel of is a prime ideal (since and is a subring of ). The result holds since the only prime ideals of are and for a prime integer . (Note that this proof shows that, more generally, the characteristic of an integral domain must be either or a prime.)  For the second assertion, observe that the smallest {} of is the image of the ring map , and by the first assertion, this image is isomorphic to either or . The latter is already a field and hence it is the prime field of . In the former case, the prime subfield is isomorphic to the field of fractions of , which is .   "
},
{
  "id": "prop-no-homomorphisms-if-different-characteristics",
  "level": "2",
  "url": "sec-separable.html#prop-no-homomorphisms-if-different-characteristics",
  "type": "Proposition",
  "number": "17.62",
  "title": "No Homomorphisms if Different Characteristics.",
  "body": "No Homomorphisms if Different Characteristics   If and are fields such that then there exist no ring homomorphisms from to (or vice versa).    Suppose and are fields and is a ring homomorphism. Let and be the unique ring maps from to and . Since is a ring map from to , we have by the uniqueness of . Since is a field and is not the zero ring, the map is injective. Since is injective, it follows that , and hence we obtain that . By definition of characteristic, we conclude .   "
},
{
  "id": "def-root-multiplicity",
  "level": "2",
  "url": "sec-separable.html#def-root-multiplicity",
  "type": "Definition",
  "number": "17.63",
  "title": "Root Multiplicity.",
  "body": "Root Multiplicity   For a field and a polynomial , let be an algebraic closure of and a root of . The multiplicity of in is the number of times appears in the factorization of in . (This number is independent of choice of algebraic closure by uniqueness of such closures up to isomorphism.)   "
},
{
  "id": "def-separable-polynomial",
  "level": "2",
  "url": "sec-separable.html#def-separable-polynomial",
  "type": "Definition",
  "number": "17.64",
  "title": "Separable (Polynomial).",
  "body": "Separable (Polynomial)   Let be a field and a polynomial in . If the multiplicity of every root is , we say is a separable polynomial ; i.e. is separable provided it has no repeated roots.   "
},
{
  "id": "def-derivative",
  "level": "2",
  "url": "sec-separable.html#def-derivative",
  "type": "Definition",
  "number": "17.65",
  "title": "Derivative.",
  "body": "Derivative   For any field and , define its derivative to be    "
},
{
  "id": "exe-derivatives-in-characteristic-p",
  "level": "2",
  "url": "sec-separable.html#exe-derivatives-in-characteristic-p",
  "type": "Example",
  "number": "17.66",
  "title": "Derivatives in Characteristic <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": "Derivatives in Characteristic  If and for , then . So beware that non-constant polynomials can have derivatives! Observe, however, that this cannot occur in characteristic .  "
},
{
  "id": "lem-gcd-and-field-extensions",
  "level": "2",
  "url": "sec-separable.html#lem-gcd-and-field-extensions",
  "type": "Lemma",
  "number": "17.67",
  "title": "GCD and Field Extensions.",
  "body": "GCD and Field Extensions   Let be a field. For , not both of which are , recall that denotes the unique monic generator of the ideal in generated by and .   For any field extension , .    Let be an algebraic closure of . if any only if and have no common roots in .       Let . To prove (1), we note that is the unique monic polynomial such that - for some , - for soem , and - for soem . Since is a subring of , these three properties also hold when we regard as belonging to and thus by the uniqueness property, we have .   is a consequence of (1), since if two polynomials factor completely into linear factors, then they are relatively prime if and only if they have no linear factors in common, which is equivalent to their having no roots in common.    "
},
{
  "id": "prop-criteria-for-separability",
  "level": "2",
  "url": "sec-separable.html#prop-criteria-for-separability",
  "type": "Proposition",
  "number": "17.68",
  "title": "Criteria for Separability.",
  "body": "Criteria for Separability   Let be field and an algebraic closure of .   Given and , the multiplicity of in is at least if and only if and .     is separable if and only if in .    If is irreducible in , then is separable if and only if .       For (1), suppose is a root of of multiplicity at least two. Then in and hence , by the Product Rule. It follows that . Conversely, suppose . Since , we have and hence . Since it follows and thus has multiplicity at least two.  For the second assertion, by (1), we have that is separable if and only if and has no common roots in . The result thus follows from the Lemma.  For the final assertion, assume is irreducible. Since the degree of is strictly less than the degree of , we have that if and only if .   "
},
{
  "id": "exe-separability-and-x4-x3-x1",
  "level": "2",
  "url": "sec-separable.html#exe-separability-and-x4-x3-x1",
  "type": "Example",
  "number": "17.69",
  "title": "Separability and <span class=\"process-math\">\\((x^4-x^3-x+1)\\)<\/span>.",
  "body": "Separability and   is not separable sine is a double root (it factors as ). As predicted by the Theorem, it fails to be relatively prime to its derivative, which is , since each are divisible by .   is separable in because it has 3 distinct roots in , namely . As predicted by the Theorem, it is relatively prime to its derivative .  Now interpret as belonging to . Then is not separable. As predicted by the Theorem, it is not relatively prime to its derivative, which is .  "
},
{
  "id": "exe-zpy",
  "level": "2",
  "url": "sec-separable.html#exe-zpy",
  "type": "Example",
  "number": "17.70",
  "title": "<span class=\"process-math\">\\(\\Z\/p(y)\\)<\/span>.",
  "body": " Let be a field of characteristic and assume is an element such that for all .Then is irreducible but not separable. It is not separable since in we have where . Also note that its derivative is .  It is less obvious that it is irreducible, but we can see that this is indeed the case in a specific example: Take (the field of fractions of the polynomial ring ) and let . In this case, is seen to be irreducible, by , but not separable.  "
},
{
  "id": "cor-separability-and-characteristic-zero",
  "level": "2",
  "url": "sec-separable.html#cor-separability-and-characteristic-zero",
  "type": "Corollary",
  "number": "17.71",
  "title": "Separability and Characteristic Zero.",
  "body": "Separability and Characteristic Zero   If is an irreducible polynomial with coefficients in a field of characteristic , then is separable. More generally, if is irreducible of degree and , then is separable.   "
},
{
  "id": "def-separable-field-extension",
  "level": "2",
  "url": "sec-separable.html#def-separable-field-extension",
  "type": "Definition",
  "number": "17.72",
  "title": "Separable (Field Extension).",
  "body": "Separable (Field Extension)   An algebraic field extension is called separable if for every its minimum polynomial is separable (i.e., has no repeated roots in an algebraic closure of ).   "
},
{
  "id": "cor-separability-algebraic-extensions-and-char-zero",
  "level": "2",
  "url": "sec-separable.html#cor-separability-algebraic-extensions-and-char-zero",
  "type": "Corollary",
  "number": "17.73",
  "title": "Separability, Algebraic Extensions, and Char Zero.",
  "body": "Separability, Algebraic Extensions, and Char Zero   If , then every algebraic field extension is separable.    Suppose is an algebraic extension and let be algebraic over . Then the minimal polynomial of over has coefficients in and is of the form where . We need to show that is separable, i.e., has no repeated roots in its splitting field.  Suppose has a repeated root in some splitting field of , i.e., for some polynomial . Since is also a root of , we have . Since is an algebraic extension, is algebraic over , so . It follows that , i.e., , which means that is a repeated root of , contradicting the assumption that has no repeated roots. Hence is separable, and since was an arbitrary algebraic element of , we conclude that is a separable extension.   "
},
{
  "id": "exe-f-zpy-subseteq-zpz-l",
  "level": "2",
  "url": "sec-separable.html#exe-f-zpy-subseteq-zpz-l",
  "type": "Example",
  "number": "17.74",
  "title": "<span class=\"process-math\">\\(F = (\\Z\/p)(y) \\subseteq (\\Z\/p)(z) = L\\)<\/span>.",
  "body": " Let and be indeterminants. The extension of fields given by identifying with is not separable. Somewhat more precisely, is isomorphism to the subfield of consisting of elements of the form , with the isomorphism given by sending to .  Then is a root of the polynomial . Moreover since is the field of fractions of the PID and is a prime element of , we may apply (and Gauss) to conclude that is irreducible in . This proves that . This polynomial is not separable since in it is equal to and hence has a repeated root. (Or, you may use that its derivative is .)  "
},
{
  "id": "sec-galext",
  "level": "1",
  "url": "sec-galext.html",
  "type": "Section",
  "number": "18.1",
  "title": "Galois Extensions",
  "body": "Galois Extensions  Field Automorphism Group   Let be a field. The automorphism group of , written , is the collection of field automorphisms of , with the binary operation of composition.  The automorphism group of a field extension , written , is the subgroup of consisting of those field automorphisms of that restrict to the identity on .     I claim has two elements (and so is a cyclic group of order ): the identity map on and the element given as complex conjugation. It is easy to see each of these is an element of — for , this amounts to the fact that complex conjugation commutes with addition and multiplication of complex numbers (and that it sends to ).  To see these are the only elements of , suppose . For any , we have since . Moreover, and so . Thus or .    For any square-free integer , has order , and its two elements are the identity and the map sending to . Checking that each really is an element of this group and that there are the only two elements in this group is done similarly to the previous example.   and  For a more complicated example, let be the splitting field of over . Recall  Let us ponder how big could be. Pick any . Since is a ring homomorphism, for any we have and thus is also a root of . In other words, for each we have for some . Moreover, since is generated as a field extension of by , the action of on the three roots completely determines the action of on all of . In more detail, every element of is given taking -linear combinations of sums and products and quotients of these roots, and any element of preserves sums, products and -linear combinations.  To summarize, we have proven that there are {} possibilities for . In fact, more is true: The function given by sending to its restriction to the subset is an injective group homomorphism. Thus is isomorphic to a subgroup of . I claim that and hence . I will prove this directly - we will learn of fancier methods to do so later.  First we notice that the field automorphism of given by complex conjugation, namely , permutes the roots of and hence it restricts to a field map from into . Since this map is -linear and injective (as are all field maps) and is a finite dimensional -vector space, this map must be onto as well. So, we obtain an element given by for all . It corresponds .  Next, we apply Porism , which gives such that . So, in the numbering above, corresponds to either or in . We don't really know which of these it is. (In fact, both will occur — the map is not unique.) But either way we have proven the claim: For notice that both subsets and of generated all of .  In other words, every possible permutation of roots of arises as a field automorphism of its splitting field over . This is what I meant before when I said that the roots of are “as symmetric as possible''.   Automorphisms and Permutations (Fields)   Suppose is a field extension and . Let , the set of roots of in .   For any and , we have .    If then for all .    The function given by for is a homomorphism of groups.    If then is one-to-one. In particular, if is the splitting field over of , then is isomorphic to a subgroup of where is the number of roots of in . (Note that .)       Say with . Then This proves (1) and (2) is an immediate consequence.  To show (3) we need to first prove that for all , the function is a bijection. (The target of this function is indeed by (2).) Since is finite, we just need to show its one-to-one. This holds since itself is one-to-one. (If for then and, since is one-to-one, we have .) Since the group laws of and are both given as function composition, it is clear that is a group homomorphism. In detail, for all and so .  Now asssume . We show is one-to-one by showing its kernel is trivial. Suppose ; that is, suppose for all . We show . Define the so-called {} of . Note that since and we also have by assumption. It is easy to see that is a subfield of . (Here are the details: Clearly . For , we have and, if , and thus .) So, is a subfield of that contains and , but recall that is the {} subfield of that contains and , and so we must have . But then for all and hence .    Fixed Field   Let . Define the so-called fixed field of .    Automorphisms and Group Actions (Fields)   Let be the spitting field of some .   The group acts on the set of roots in by the rule .    This action is faithful.    If is irreducible, this action is transitive.       We proceed by induction on . When , we have and is the one element group.  For , pick and let . Consider the extension . Note that is a subgroup of , by definition. By induction we have . Using the and the fact that , it suffices to prove . This follows from:  {} Let be the set of roots of that belong to . Then the function given by is well-defined and injective. (Note: is not necessarily normal, and so isn't a group. By I just mean the {} of left cosets of in .)  By Proposition , for each we have . Moreover, by definition of , for all , we have and hence . This proves is a well-defined function (i.e., it is independent of left coset representative). For , if then which implies (since if an automorphism of fixes and then it fixes ). Thus implies and hence is one-to-one.  Since , we conclude from the claim that . Putting all this together gives .    Automorphisms and Finite Extension Degree   If is a finite extension of fields, then .    We proceed by induction on . When , we have and is the one element group.  For , pick and let . Consider the extension . Note that is a subgroup of , by definition. By induction we have . Using the and the fact that , it suffices to prove . This follows from:  {} Let be the set of roots of that belong to . Then the function given by is well-defined and injective. (Note: is not necessarily normal, and so isn't a group. By I just mean the {} of left cosets of in .)  \\begin{proof} By Proposition , for each we have . Moreover, by definition of , for all , we have and hence . This proves is a well-defined function (i.e., it is independent of left coset representative). For , if then which implies (since if an automorphism of fixes and then it fixes ). Thus implies and hence is one-to-one.    and  Let be the splitting field of the irreducible polynomial . So where . By the Corollary above, the action of on is faithful so that we have an injective group homomorphism .  Note that this map cannot possibly be onto: there is no such that , , , and ; i.e., the permutation of these roots is not realizable by a field automorphism. To see this note that if then . So, any field automorphism that interchanges and would have to also interchange and . In fact, as we shall see, , considerably smaller than .  Let us compute . Note that since and in fact . In the chain of extensions the first one has degree , since is irreducible by , and the second has degree at most since is a root of . It would be less than two if factors in . But since and is not contained in , the second extension cannot be trivial and so must have degree exactly . We conclude . It follows from Proposition that . (In fact, since is the splitting field of a separable polynomial, the Theorem below will tell us that . But we won't appeal to this fact here.)  We claim and is isomorphic to the subgroup of generated by and . (This is isomorphic to .)  The map given by complex conjugation permutes the roots of and it restricts to an automorphism of — specially, it fixes and interchanges and . It follows that complex conjugation determines an element that corresponds to .  By the we get . Since , the degree of must be . This shows that must remain irreducible as a polynomial in ; this is not obvious, but we have now proven it, and this fact will be useful in what we do next.  To construct another element of , we use that that is the splitting field of the polynomial over and that, as we just showed, is irreducible in . We may thus apply Porism (also stated in the Corollary) to get that there is an element such that . We may regard as an element of since, by definition, is a subgroup of . We have since by construction. A key point here is that if we had merely specified to be an element of sending to , then we would have no idea what does to — it was key to define as we did. We then also get and . So corresponds to the permutation .  We have proven that is isomorphic to a subgroup of having order at most (by the Proposition above) and that it contains and . Since the subgroup generated by these two elements has order , the claim follows.   Normal Extension   A finite extension is called normal if is the splitting field of some (non-unique) polynomial .    Normal Extension   is a normal extension of since it is the splitting field of .   not Normal  Is normal? It isn't the splitting field of clearly, but maybe it somehow is the splitting field of some other polynomial. It in fact is not normal, but it is not so obvious that it isn't. The next Theorem will allow us to prove it isn't normal.   Galois Extension Equivalencies   Let be a finite extension of fields. The following are equivalent.        The extension is both normal and separable.     is the splitting field of some separable polynomial with coefficients in .       Galois Extension   A finite extension of fields is a Galois extension if the three equivalence conditions of this theorem hold:        The extension is both normal and separable.     is the splitting field of some separable polynomial with coefficients in .     In this case it is customary to write for the group and to refer to it as the Galois group of the extension - they are exactly the same group, but the former is used only when the extension is Galois.     Recall from the Proposition above that holds for any finite field extension. So, such an extension is Galois if and only if its automorphism group is as large as is allowed by the Proposition.   Galois Extension   is a Galois extension of , since it the splitting field of . We proved above that has six elements and , as the Theorem predicts.   not Galois  I claim is not a Galois extension of . Let be the set of all roots of in . Since , has just one element: . Since , the function is injective by Proposition and so since , we have . Thus it isn't Galois. Since it is separable, must not be a normal extension of .   One Root to Factor them All   Suppose is a finite extension of fields and is an irreducible polynomial. If is a normal extension and has at least one root in , then factors completely in .    Say is the splitting field of . Let be the splitting field of . So . Say is a root of that belongs to , and let be any other root. We aim to prove .  Recall that we know that if is a splitting field over of an {} polynomial, then acts transitively on the roots of this polynomial. Something more general is true: If is the splitting field over of some possibly reducible polynomial , then for each irreducible factors , acts transitively on the roots of . I won't prove this, but will apply it to . Since is irreducible, we get that there is there a such that . Let be all the roots of , so that . Since fixes , it must permute these roots. In particular, . But then .    Galois and Characteristic  Let be a field of characteristic , for a prime integer , and assume is a finite field extension of such that there exists an element of with but . Then is not Galois since in this case. You will prove this in the Homework.   "
},
{
  "id": "def-aut-k",
  "level": "2",
  "url": "sec-galext.html#def-aut-k",
  "type": "Definition",
  "number": "18.1",
  "title": "Field Automorphism Group.",
  "body": "Field Automorphism Group   Let be a field. The automorphism group of , written , is the collection of field automorphisms of , with the binary operation of composition.  The automorphism group of a field extension , written , is the subgroup of consisting of those field automorphisms of that restrict to the identity on .   "
},
{
  "id": "exe-autcr",
  "level": "2",
  "url": "sec-galext.html#exe-autcr",
  "type": "Example",
  "number": "18.2",
  "title": "<span class=\"process-math\">\\(\\Aut(\\C\/\\R)\\)<\/span>.",
  "body": " I claim has two elements (and so is a cyclic group of order ): the identity map on and the element given as complex conjugation. It is easy to see each of these is an element of — for , this amounts to the fact that complex conjugation commutes with addition and multiplication of complex numbers (and that it sends to ).  To see these are the only elements of , suppose . For any , we have since . Moreover, and so . Thus or .  "
},
{
  "id": "exe-autqsqrt-dq",
  "level": "2",
  "url": "sec-galext.html#exe-autqsqrt-dq",
  "type": "Example",
  "number": "18.3",
  "title": "<span class=\"process-math\">\\(\\Aut(\\Q(\\sqrt d)\/\\Q)\\)<\/span>.",
  "body": " For any square-free integer , has order , and its two elements are the identity and the map sending to . Checking that each really is an element of this group and that there are the only two elements in this group is done similarly to the previous example.  "
},
{
  "id": "exe-aut-and-x3-2",
  "level": "2",
  "url": "sec-galext.html#exe-aut-and-x3-2",
  "type": "Example",
  "number": "18.4",
  "title": "<span class=\"process-math\">\\(\\Aut\\)<\/span> and <span class=\"process-math\">\\((x^3-2)\\)<\/span>.",
  "body": "and  For a more complicated example, let be the splitting field of over . Recall  Let us ponder how big could be. Pick any . Since is a ring homomorphism, for any we have and thus is also a root of . In other words, for each we have for some . Moreover, since is generated as a field extension of by , the action of on the three roots completely determines the action of on all of . In more detail, every element of is given taking -linear combinations of sums and products and quotients of these roots, and any element of preserves sums, products and -linear combinations.  To summarize, we have proven that there are {} possibilities for . In fact, more is true: The function given by sending to its restriction to the subset is an injective group homomorphism. Thus is isomorphic to a subgroup of . I claim that and hence . I will prove this directly - we will learn of fancier methods to do so later.  First we notice that the field automorphism of given by complex conjugation, namely , permutes the roots of and hence it restricts to a field map from into . Since this map is -linear and injective (as are all field maps) and is a finite dimensional -vector space, this map must be onto as well. So, we obtain an element given by for all . It corresponds .  Next, we apply Porism , which gives such that . So, in the numbering above, corresponds to either or in . We don't really know which of these it is. (In fact, both will occur — the map is not unique.) But either way we have proven the claim: For notice that both subsets and of generated all of .  In other words, every possible permutation of roots of arises as a field automorphism of its splitting field over . This is what I meant before when I said that the roots of are “as symmetric as possible''.  "
},
{
  "id": "prop-automorphisms-and-permutations-fields",
  "level": "2",
  "url": "sec-galext.html#prop-automorphisms-and-permutations-fields",
  "type": "Proposition",
  "number": "18.5",
  "title": "Automorphisms and Permutations (Fields).",
  "body": "Automorphisms and Permutations (Fields)   Suppose is a field extension and . Let , the set of roots of in .   For any and , we have .    If then for all .    The function given by for is a homomorphism of groups.    If then is one-to-one. In particular, if is the splitting field over of , then is isomorphic to a subgroup of where is the number of roots of in . (Note that .)       Say with . Then This proves (1) and (2) is an immediate consequence.  To show (3) we need to first prove that for all , the function is a bijection. (The target of this function is indeed by (2).) Since is finite, we just need to show its one-to-one. This holds since itself is one-to-one. (If for then and, since is one-to-one, we have .) Since the group laws of and are both given as function composition, it is clear that is a group homomorphism. In detail, for all and so .  Now asssume . We show is one-to-one by showing its kernel is trivial. Suppose ; that is, suppose for all . We show . Define the so-called {} of . Note that since and we also have by assumption. It is easy to see that is a subfield of . (Here are the details: Clearly . For , we have and, if , and thus .) So, is a subfield of that contains and , but recall that is the {} subfield of that contains and , and so we must have . But then for all and hence .   "
},
{
  "id": "def-fixed-field",
  "level": "2",
  "url": "sec-galext.html#def-fixed-field",
  "type": "Definition",
  "number": "18.6",
  "title": "Fixed Field.",
  "body": "Fixed Field   Let . Define the so-called fixed field of .   "
},
{
  "id": "cor-automorphisms-and-group-actions-fields",
  "level": "2",
  "url": "sec-galext.html#cor-automorphisms-and-group-actions-fields",
  "type": "Corollary",
  "number": "18.7",
  "title": "Automorphisms and Group Actions (Fields).",
  "body": "Automorphisms and Group Actions (Fields)   Let be the spitting field of some .   The group acts on the set of roots in by the rule .    This action is faithful.    If is irreducible, this action is transitive.       We proceed by induction on . When , we have and is the one element group.  For , pick and let . Consider the extension . Note that is a subgroup of , by definition. By induction we have . Using the and the fact that , it suffices to prove . This follows from:  {} Let be the set of roots of that belong to . Then the function given by is well-defined and injective. (Note: is not necessarily normal, and so isn't a group. By I just mean the {} of left cosets of in .)  By Proposition , for each we have . Moreover, by definition of , for all , we have and hence . This proves is a well-defined function (i.e., it is independent of left coset representative). For , if then which implies (since if an automorphism of fixes and then it fixes ). Thus implies and hence is one-to-one.  Since , we conclude from the claim that . Putting all this together gives .   "
},
{
  "id": "prop-automorphisms-and-finite-extension-degree",
  "level": "2",
  "url": "sec-galext.html#prop-automorphisms-and-finite-extension-degree",
  "type": "Proposition",
  "number": "18.8",
  "title": "Automorphisms and Finite Extension Degree.",
  "body": "Automorphisms and Finite Extension Degree   If is a finite extension of fields, then .    We proceed by induction on . When , we have and is the one element group.  For , pick and let . Consider the extension . Note that is a subgroup of , by definition. By induction we have . Using the and the fact that , it suffices to prove . This follows from:  {} Let be the set of roots of that belong to . Then the function given by is well-defined and injective. (Note: is not necessarily normal, and so isn't a group. By I just mean the {} of left cosets of in .)  \\begin{proof} By Proposition , for each we have . Moreover, by definition of , for all , we have and hence . This proves is a well-defined function (i.e., it is independent of left coset representative). For , if then which implies (since if an automorphism of fixes and then it fixes ). Thus implies and hence is one-to-one.   "
},
{
  "id": "exe-lq-and-x4-2",
  "level": "2",
  "url": "sec-galext.html#exe-lq-and-x4-2",
  "type": "Example",
  "number": "18.9",
  "title": "<span class=\"process-math\">\\([L:\\Q]\\)<\/span> and <span class=\"process-math\">\\((x^4-2)\\)<\/span>.",
  "body": "and  Let be the splitting field of the irreducible polynomial . So where . By the Corollary above, the action of on is faithful so that we have an injective group homomorphism .  Note that this map cannot possibly be onto: there is no such that , , , and ; i.e., the permutation of these roots is not realizable by a field automorphism. To see this note that if then . So, any field automorphism that interchanges and would have to also interchange and . In fact, as we shall see, , considerably smaller than .  Let us compute . Note that since and in fact . In the chain of extensions the first one has degree , since is irreducible by , and the second has degree at most since is a root of . It would be less than two if factors in . But since and is not contained in , the second extension cannot be trivial and so must have degree exactly . We conclude . It follows from Proposition that . (In fact, since is the splitting field of a separable polynomial, the Theorem below will tell us that . But we won't appeal to this fact here.)  We claim and is isomorphic to the subgroup of generated by and . (This is isomorphic to .)  The map given by complex conjugation permutes the roots of and it restricts to an automorphism of — specially, it fixes and interchanges and . It follows that complex conjugation determines an element that corresponds to .  By the we get . Since , the degree of must be . This shows that must remain irreducible as a polynomial in ; this is not obvious, but we have now proven it, and this fact will be useful in what we do next.  To construct another element of , we use that that is the splitting field of the polynomial over and that, as we just showed, is irreducible in . We may thus apply Porism (also stated in the Corollary) to get that there is an element such that . We may regard as an element of since, by definition, is a subgroup of . We have since by construction. A key point here is that if we had merely specified to be an element of sending to , then we would have no idea what does to — it was key to define as we did. We then also get and . So corresponds to the permutation .  We have proven that is isomorphic to a subgroup of having order at most (by the Proposition above) and that it contains and . Since the subgroup generated by these two elements has order , the claim follows.  "
},
{
  "id": "def-normal-extension",
  "level": "2",
  "url": "sec-galext.html#def-normal-extension",
  "type": "Definition",
  "number": "18.10",
  "title": "Normal Extension.",
  "body": "Normal Extension   A finite extension is called normal if is the splitting field of some (non-unique) polynomial .   "
},
{
  "id": "exe-normal-extension",
  "level": "2",
  "url": "sec-galext.html#exe-normal-extension",
  "type": "Example",
  "number": "18.11",
  "title": "Normal Extension.",
  "body": "Normal Extension   is a normal extension of since it is the splitting field of .  "
},
{
  "id": "exe-qsqrt32-not-normal",
  "level": "2",
  "url": "sec-galext.html#exe-qsqrt32-not-normal",
  "type": "Example",
  "number": "18.12",
  "title": "<span class=\"process-math\">\\(\\Q(\\sqrt[3]2)\\)<\/span> not Normal.",
  "body": "not Normal  Is normal? It isn't the splitting field of clearly, but maybe it somehow is the splitting field of some other polynomial. It in fact is not normal, but it is not so obvious that it isn't. The next Theorem will allow us to prove it isn't normal.  "
},
{
  "id": "thm-galois-extension-equivalencies",
  "level": "2",
  "url": "sec-galext.html#thm-galois-extension-equivalencies",
  "type": "Theorem",
  "number": "18.13",
  "title": "Galois Extension Equivalencies.",
  "body": "Galois Extension Equivalencies   Let be a finite extension of fields. The following are equivalent.        The extension is both normal and separable.     is the splitting field of some separable polynomial with coefficients in .      "
},
{
  "id": "def-galois-extension",
  "level": "2",
  "url": "sec-galext.html#def-galois-extension",
  "type": "Definition",
  "number": "18.14",
  "title": "Galois Extension.",
  "body": "Galois Extension   A finite extension of fields is a Galois extension if the three equivalence conditions of this theorem hold:        The extension is both normal and separable.     is the splitting field of some separable polynomial with coefficients in .     In this case it is customary to write for the group and to refer to it as the Galois group of the extension - they are exactly the same group, but the former is used only when the extension is Galois.   "
},
{
  "id": "remark-109",
  "level": "2",
  "url": "sec-galext.html#remark-109",
  "type": "Remark",
  "number": "18.15",
  "title": "",
  "body": " Recall from the Proposition above that holds for any finite field extension. So, such an extension is Galois if and only if its automorphism group is as large as is allowed by the Proposition.  "
},
{
  "id": "exe-galois-extension",
  "level": "2",
  "url": "sec-galext.html#exe-galois-extension",
  "type": "Example",
  "number": "18.16",
  "title": "Galois Extension.",
  "body": "Galois Extension   is a Galois extension of , since it the splitting field of . We proved above that has six elements and , as the Theorem predicts.  "
},
{
  "id": "exe-qsqrt32-not-galois",
  "level": "2",
  "url": "sec-galext.html#exe-qsqrt32-not-galois",
  "type": "Example",
  "number": "18.17",
  "title": "<span class=\"process-math\">\\(\\Q(\\sqrt[3]2)\\)<\/span> not Galois.",
  "body": "not Galois  I claim is not a Galois extension of . Let be the set of all roots of in . Since , has just one element: . Since , the function is injective by Proposition and so since , we have . Thus it isn't Galois. Since it is separable, must not be a normal extension of .  "
},
{
  "id": "prop-one-root-to-factor-them-all",
  "level": "2",
  "url": "sec-galext.html#prop-one-root-to-factor-them-all",
  "type": "Proposition",
  "number": "18.18",
  "title": "One Root to Factor them All.",
  "body": "One Root to Factor them All   Suppose is a finite extension of fields and is an irreducible polynomial. If is a normal extension and has at least one root in , then factors completely in .    Say is the splitting field of . Let be the splitting field of . So . Say is a root of that belongs to , and let be any other root. We aim to prove .  Recall that we know that if is a splitting field over of an {} polynomial, then acts transitively on the roots of this polynomial. Something more general is true: If is the splitting field over of some possibly reducible polynomial , then for each irreducible factors , acts transitively on the roots of . I won't prove this, but will apply it to . Since is irreducible, we get that there is there a such that . Let be all the roots of , so that . Since fixes , it must permute these roots. In particular, . But then .   "
},
{
  "id": "exe-galois-and-characteristic-p",
  "level": "2",
  "url": "sec-galext.html#exe-galois-and-characteristic-p",
  "type": "Example",
  "number": "18.19",
  "title": "Galois and Characteristic <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": "Galois and Characteristic  Let be a field of characteristic , for a prime integer , and assume is a finite field extension of such that there exists an element of with but . Then is not Galois since in this case. You will prove this in the Homework.  "
},
{
  "id": "sec-ftgt",
  "level": "1",
  "url": "sec-ftgt.html",
  "type": "Section",
  "number": "18.2",
  "title": "The Fundamental Theorem of Galois Theory",
  "body": "The Fundamental Theorem of Galois Theory  Intermediate Field   Given a field extension , an intermediate field is a subfield of that contains , so that .    Intermediate Extensions are Galois   If is a (finite) Galois extension, then so is for any intermediate field .    This is immediate from the definition: If is the splitting field over of a separable polynomial , then is also the splitting field over of the same polynomial, now regarded as belonging to .    In the setting of the previous Proposition, need not be Galois over . For , is Galois over but is not Galois over , as we noted before.  Fixed Subfield   For a field and a subgroup of , the subfield of fixed by , denoted , is by definition  really is a subfield of since where , and we proved before that is a subfield of .    Fundamental Theorem of Galois Theory   Suppose is a (finite) Galois field extension. Then the functions given by is a bijection whose inverse is given by Moreover, this bijective correspondence enjoys the following properties:    and each reverse the order of inclusions.     and convert degrees of extensions to indices of subgroups:    or, equivalently,     .       Normal subgroups correspond to intermediate fields that are Galois over :   If then is Galois.    If is Galois, then .       If for a normal subgroup , then .    If are subgroups of with corresponding fixed subfields and , then    and      and .          Galois Correspondence and Lattices   The Galois correspondence induces a lattice isomorphism between the lattice of intermediate fields of a Galois extension and the “dual'' of the lattice of subgroups of .    FTGT and  Let be the splitting field of over . Let's use the fundamental theorem to list all intermediate fields for and to determine which are Galois over . Notice that without the theorem, it isn't even obvious that there are only a finite number of such intermediate fields.  We know corresponds to the element subgroup of generated by and where we number the roots as .  This group is isomorphic to and we can make this isomorphism explicit by labeling the four corners of a square by , counter-clockwise. So, is rotation by degrees and is reflection about the line joining vertices and .  The subgroup lattice and intermediate field lattice are represented below, with normal subgroups and Galois extensions highlighted (boxed).  The subgroups are and the lattices are INSERT IMAGE The intermediate fields are the fixed subfields of associated to each of these subgroups. In some sense, this answers the question, but let's find explicit generators for at least some of these.   corresponds to and corresponds to .  Set . has degree over . It is clear (and ) belongs to and since , we must have .  Likewise .   also has degree four over . Let and note . If , then would be fixed by a subgroup of index that contains , and the only possibility is . But sends to . So we must have and hence .  I'll skip the details on and , but they are and .   has degree equal to over and so we merely need to find a single, non-rational element of fixed by . Since (which can be seen by looking back at how we built originally or by noting that ), we get .  I'll skip the details on , but it is .   also has degree two over and so we just need to find a single non-rational element fixed by the two generators of . Note that and so is fixed by both and . Thus .  Finally, we note that are normal subgroups of , since is the center of and each of has index two. Some messy checking reveals these to be the only normal subgroups. It follows from the Fundamental Theorem that are the only intermediate fields that are Galois over . As an example, to see directly that is not Galois over , note that is a root of , which is irreducible. But is also a root of this polynomial and it is not in . We conclude from Proposition that is not a normal extension of .   Cyclotomic Extensions Revisited  Let be a field, let be a positive integer such that does not divide , and let be the algebraic closure of . If is a primitive -th root of 1 over , then is a finite Galois extension, and is a cyclic group that is isomorphic to a subgroup of .    If is a field of prime characteristic and is an integer that is divisible by , then is not separable.    Let be an irreducible, fifth degree polynomial in with exactly three real roots and let be its splitting field over . Let the real roots be and the imaginary ones be and . Then is isomorphic to . You will prove this on one of the final exam problems (for a specific case), but let me get you started with a couple {}: Show that is isomorphic to a subgroup of with . You may use (without justifying it) that if is a -cycle in and is any five cycle in , then the subgroup of they generate is all of .   Finding Unique Intermediate Field   If is a finite Galois extension of degree , then I claim there is a unique intermediate field with and that must be a Galois extension over .  To see this, set . Then and by the Sylow theorems, there is a unique Sylow -subgroup, call it , and hence is normal in . It follows from the Fundamental Theorem that is an intermediate field that   is Galois over and    satisfies . Moreover, it is unique since has just one subgroup of index .     In fact, there are exactly two groups of order up to isomorphism, the cyclic one and one that is a (non-trivial) semi-direct product of by . So, there are just two possible lattices of intermediate fields for such a field extension.    "
},
{
  "id": "def-intermediate-field",
  "level": "2",
  "url": "sec-ftgt.html#def-intermediate-field",
  "type": "Definition",
  "number": "18.20",
  "title": "Intermediate Field.",
  "body": "Intermediate Field   Given a field extension , an intermediate field is a subfield of that contains , so that .   "
},
{
  "id": "prop-intermediate-extensions-are-galois",
  "level": "2",
  "url": "sec-ftgt.html#prop-intermediate-extensions-are-galois",
  "type": "Proposition",
  "number": "18.21",
  "title": "Intermediate Extensions are Galois.",
  "body": "Intermediate Extensions are Galois   If is a (finite) Galois extension, then so is for any intermediate field .    This is immediate from the definition: If is the splitting field over of a separable polynomial , then is also the splitting field over of the same polynomial, now regarded as belonging to .   "
},
{
  "id": "warning-3",
  "level": "2",
  "url": "sec-ftgt.html#warning-3",
  "type": "Warning",
  "number": "18.22",
  "title": "",
  "body": "In the setting of the previous Proposition, need not be Galois over . For , is Galois over but is not Galois over , as we noted before. "
},
{
  "id": "def-fixed-subfield",
  "level": "2",
  "url": "sec-ftgt.html#def-fixed-subfield",
  "type": "Definition",
  "number": "18.23",
  "title": "Fixed Subfield.",
  "body": "Fixed Subfield   For a field and a subgroup of , the subfield of fixed by , denoted , is by definition  really is a subfield of since where , and we proved before that is a subfield of .   "
},
{
  "id": "thm-ftgt",
  "level": "2",
  "url": "sec-ftgt.html#thm-ftgt",
  "type": "Theorem",
  "number": "18.24",
  "title": "Fundamental Theorem of Galois Theory.",
  "body": "Fundamental Theorem of Galois Theory   Suppose is a (finite) Galois field extension. Then the functions given by is a bijection whose inverse is given by Moreover, this bijective correspondence enjoys the following properties:    and each reverse the order of inclusions.     and convert degrees of extensions to indices of subgroups:    or, equivalently,     .       Normal subgroups correspond to intermediate fields that are Galois over :   If then is Galois.    If is Galois, then .       If for a normal subgroup , then .    If are subgroups of with corresponding fixed subfields and , then    and      and .         "
},
{
  "id": "cor-galois-correspondence-and-lattices",
  "level": "2",
  "url": "sec-ftgt.html#cor-galois-correspondence-and-lattices",
  "type": "Corollary",
  "number": "18.25",
  "title": "Galois Correspondence and Lattices.",
  "body": "Galois Correspondence and Lattices   The Galois correspondence induces a lattice isomorphism between the lattice of intermediate fields of a Galois extension and the “dual'' of the lattice of subgroups of .   "
},
{
  "id": "exe-ftgt-and-x4-2",
  "level": "2",
  "url": "sec-ftgt.html#exe-ftgt-and-x4-2",
  "type": "Example",
  "number": "18.26",
  "title": "FTGT and <span class=\"process-math\">\\((x^4-2)\\)<\/span>.",
  "body": "FTGT and  Let be the splitting field of over . Let's use the fundamental theorem to list all intermediate fields for and to determine which are Galois over . Notice that without the theorem, it isn't even obvious that there are only a finite number of such intermediate fields.  We know corresponds to the element subgroup of generated by and where we number the roots as .  This group is isomorphic to and we can make this isomorphism explicit by labeling the four corners of a square by , counter-clockwise. So, is rotation by degrees and is reflection about the line joining vertices and .  The subgroup lattice and intermediate field lattice are represented below, with normal subgroups and Galois extensions highlighted (boxed).  The subgroups are and the lattices are INSERT IMAGE The intermediate fields are the fixed subfields of associated to each of these subgroups. In some sense, this answers the question, but let's find explicit generators for at least some of these.   corresponds to and corresponds to .  Set . has degree over . It is clear (and ) belongs to and since , we must have .  Likewise .   also has degree four over . Let and note . If , then would be fixed by a subgroup of index that contains , and the only possibility is . But sends to . So we must have and hence .  I'll skip the details on and , but they are and .   has degree equal to over and so we merely need to find a single, non-rational element of fixed by . Since (which can be seen by looking back at how we built originally or by noting that ), we get .  I'll skip the details on , but it is .   also has degree two over and so we just need to find a single non-rational element fixed by the two generators of . Note that and so is fixed by both and . Thus .  Finally, we note that are normal subgroups of , since is the center of and each of has index two. Some messy checking reveals these to be the only normal subgroups. It follows from the Fundamental Theorem that are the only intermediate fields that are Galois over . As an example, to see directly that is not Galois over , note that is a root of , which is irreducible. But is also a root of this polynomial and it is not in . We conclude from Proposition that is not a normal extension of .  "
},
{
  "id": "exe-cyclotomic-extensions-revisited",
  "level": "2",
  "url": "sec-ftgt.html#exe-cyclotomic-extensions-revisited",
  "type": "Example",
  "number": "18.27",
  "title": "Cyclotomic Extensions Revisited.",
  "body": "Cyclotomic Extensions Revisited  Let be a field, let be a positive integer such that does not divide , and let be the algebraic closure of . If is a primitive -th root of 1 over , then is a finite Galois extension, and is a cyclic group that is isomorphic to a subgroup of .  "
},
{
  "id": "remark-110",
  "level": "2",
  "url": "sec-ftgt.html#remark-110",
  "type": "Remark",
  "number": "18.28",
  "title": "",
  "body": " If is a field of prime characteristic and is an integer that is divisible by , then is not separable.  "
},
{
  "id": "exe-two-complex-roots-and-s_n",
  "level": "2",
  "url": "sec-ftgt.html#exe-two-complex-roots-and-s_n",
  "type": "Example",
  "number": "18.29",
  "title": "",
  "body": " Let be an irreducible, fifth degree polynomial in with exactly three real roots and let be its splitting field over . Let the real roots be and the imaginary ones be and . Then is isomorphic to . You will prove this on one of the final exam problems (for a specific case), but let me get you started with a couple {}: Show that is isomorphic to a subgroup of with . You may use (without justifying it) that if is a -cycle in and is any five cycle in , then the subgroup of they generate is all of .  "
},
{
  "id": "exe-finding-unique-intermediate-field",
  "level": "2",
  "url": "sec-ftgt.html#exe-finding-unique-intermediate-field",
  "type": "Example",
  "number": "18.30",
  "title": "Finding Unique Intermediate Field.",
  "body": "Finding Unique Intermediate Field   If is a finite Galois extension of degree , then I claim there is a unique intermediate field with and that must be a Galois extension over .  To see this, set . Then and by the Sylow theorems, there is a unique Sylow -subgroup, call it , and hence is normal in . It follows from the Fundamental Theorem that is an intermediate field that   is Galois over and    satisfies . Moreover, it is unique since has just one subgroup of index .     In fact, there are exactly two groups of order up to isomorphism, the cyclic one and one that is a (non-trivial) semi-direct product of by . So, there are just two possible lattices of intermediate fields for such a field extension.   "
},
{
  "id": "sec-sets-functions",
  "level": "1",
  "url": "sec-sets-functions.html",
  "type": "Section",
  "number": "A.1",
  "title": "Sets, Functions, Constructions",
  "body": "Sets, Functions, Constructions  Sets  Set   The basic undefined term we will use is that of a set , which we take to be any collection of objects, not necessarily mathematical ones.     A more rigrorous description of sets can be found using the ZFC axioms for set theory, which are listed around here somewhere.   Sets of Numbers     Natural Numbers  The set of natural numbers is denoted by    Integers  The set of integers is denoted by    Rational Numbers  The set of rational numbers is denoted by    Real Numbers  The set of real numbers is denoted by , and is a little trickier to define both rigorously and succinctly. Heuristically, it is the set of all numbers on the number line.   Complex Numbers  The set of complex numbers is denoted by        Set Containments   Let and be sets.   The set is a subset of the set , denoted , if implies .    The set  equals the set , denoted , if and .    The set is a proper subset of the set , denoted , if and .         Let and be sets. The union of and , denoted , is the set defined by . The intersection of and , denoted , is the set defined by .      Let be a set. The set is called a family of sets if all the elements of A are sets. The family of sets is indexed by , denoted , if there is a non-empty set such that there is an element for each , and that every element of equals for exactly one .     Notation for sets, elements of sets, and sets of sets: Small letters for elements of sets, capital letters for sets, calligraphic capital letters ℬ,𝒞,𝒯,𝒰 for collections of sets.    Notation for indices: for finite or countably many indices, for arbitrarily many indices.     Let be a family of sets. If is indexed by a set , then we write to denote the union and intersection of the sets in , respectively.    Distributive Laws    and     De Morgan's Laws    and     Cartesian Product   Let and for be sets. The Cartesian product  and     Subsets of Cartesian Products  If and , then .    Functions  Function   Let and be sets. A function (also called a map ) from to , denoted , is a subset such that for each , there is one and only one pair in of the form . The set is called the domain of and the set is called the codomain of .    Well-defined Function   A function is well-defined if whenever and , then .     All functions are well-defined.   Commonly Encountered Functions     A constant map  is any function of the form for all , where is some fixed element.    The identity map on is the function defined by for all .    The inclusion map from to is the function defined by for all     If is a function, the restriction of to , denoted , is the function defined by for all .    If is a function, an extension of to is any function such that .    The projection maps from are the functions and defined by and for all . For any finite collection of sets , projection maps for all can be defined similarly.    Let be a non-empty set, and let be a subset. The characteristic map for in , denoted , is the function defined by       Injective, Surjective, Bijective   Let be a function.   The function is one-to-one (also called an injection and denoted ) if whenever and then .    The function is onto (also called a surjection and denoted ) if for every in , there is an in with .    The function is a bijection if is both one-to-one and onto.    The function is invertible if there is a function such that and .       Surjective iff Image is Codomain A function is surjective if and only if .  Composition   Let , and be sets, and let and be functions. The composition of and is the function defined by for all .    Compositions and 'Jectivity   Let , , and be functions. Then:   If and are one-to-one then is one-to-one.    If is one-to-one then is one-to-one.    If and are onto then is onto.    If is onto then is onto.     is a bijection if and only if is invertible.       Image and Preimage   Let be a function.   The image of a subset of is .    The preimage of a subset of is .    The image  is .       PAN   If , and for all , then    .     .     .     .       IASN   If , and for all , then    .     .     . If moreover is injective, then .     . If moreover is injective, then .       Containments of Images, Preimages   Let .   If , then ; if moreover is injective then .    If then ; if moreover is surjective then .       Inclusions are Injective   If and is the inclusion, then is an injection.    Projection Map   Let for all be sets and let . The projection map is defined by .    Product Inclusion Map   Let for all be sets, let , and for each , let . The associated product inclusion map is defined for each by , where .    Properties of Projections and Product Inclusions      Projection maps are surjections.    Product inclusion maps are injections.        Set Constructions  Equivalence Relations and Modular Arithmetic  Equivalence Relation   An equivalence relation  on a set is a subset (where is written ) that satisfies the following for all in :  Reflexivity   ,   Symmetry   implies , and   Transitivity   and implies .     The equivalence class of an element a of is .  The notation denotes the set of equivalence classes , also called the quotient of with respect to .  The function defined by for all is called the quotient map .    Partition   A partition of a set is a collection of nonempty disjoint subsets of whose union is .    EPT   Let be a set.   If is an equivalence relation on , then is a partition of .    If is a partition of , and , then is an equivalence relation on .       The Integers Modulo   Let , and let . The number is congruent to the number modulo , denoted , if for some .  For each , we obtain a relation on given by congruence modulo , which we call the integers modulo  .      "
},
{
  "id": "heur-set",
  "level": "2",
  "url": "sec-sets-functions.html#heur-set",
  "type": "Vague Semidefinition",
  "number": "A.1",
  "title": "Set.",
  "body": "Set   The basic undefined term we will use is that of a set , which we take to be any collection of objects, not necessarily mathematical ones.   "
},
{
  "id": "remark-111",
  "level": "2",
  "url": "sec-sets-functions.html#remark-111",
  "type": "Remark",
  "number": "A.2",
  "title": "",
  "body": " A more rigrorous description of sets can be found using the ZFC axioms for set theory, which are listed around here somewhere.  "
},
{
  "id": "def-number-sets",
  "level": "2",
  "url": "sec-sets-functions.html#def-number-sets",
  "type": "Definition",
  "number": "A.3",
  "title": "Sets of Numbers.",
  "body": "Sets of Numbers     Natural Numbers  The set of natural numbers is denoted by    Integers  The set of integers is denoted by    Rational Numbers  The set of rational numbers is denoted by    Real Numbers  The set of real numbers is denoted by , and is a little trickier to define both rigorously and succinctly. Heuristically, it is the set of all numbers on the number line.   Complex Numbers  The set of complex numbers is denoted by       "
},
{
  "id": "def-subset",
  "level": "2",
  "url": "sec-sets-functions.html#def-subset",
  "type": "Definition",
  "number": "A.4",
  "title": "Set Containments.",
  "body": "Set Containments   Let and be sets.   The set is a subset of the set , denoted , if implies .    The set  equals the set , denoted , if and .    The set is a proper subset of the set , denoted , if and .      "
},
{
  "id": "def-union-intersection",
  "level": "2",
  "url": "sec-sets-functions.html#def-union-intersection",
  "type": "Definition",
  "number": "A.5",
  "title": "",
  "body": "  Let and be sets. The union of and , denoted , is the set defined by . The intersection of and , denoted , is the set defined by .   "
},
{
  "id": "def-family-of-sets",
  "level": "2",
  "url": "sec-sets-functions.html#def-family-of-sets",
  "type": "Definition",
  "number": "A.6",
  "title": "",
  "body": "  Let be a set. The set is called a family of sets if all the elements of A are sets. The family of sets is indexed by , denoted , if there is a non-empty set such that there is an element for each , and that every element of equals for exactly one .   "
},
{
  "id": "convention-9",
  "level": "2",
  "url": "sec-sets-functions.html#convention-9",
  "type": "Convention",
  "number": "A.7",
  "title": "",
  "body": " Notation for sets, elements of sets, and sets of sets: Small letters for elements of sets, capital letters for sets, calligraphic capital letters ℬ,𝒞,𝒯,𝒰 for collections of sets.  "
},
{
  "id": "convention-10",
  "level": "2",
  "url": "sec-sets-functions.html#convention-10",
  "type": "Convention",
  "number": "A.8",
  "title": "",
  "body": " Notation for indices: for finite or countably many indices, for arbitrarily many indices.  "
},
{
  "id": "def-union-intersection-2",
  "level": "2",
  "url": "sec-sets-functions.html#def-union-intersection-2",
  "type": "Definition",
  "number": "A.9",
  "title": "",
  "body": "  Let be a family of sets. If is indexed by a set , then we write to denote the union and intersection of the sets in , respectively.   "
},
{
  "id": "thm-distributive-laws",
  "level": "2",
  "url": "sec-sets-functions.html#thm-distributive-laws",
  "type": "Theorem",
  "number": "A.10",
  "title": "Distributive Laws.",
  "body": "Distributive Laws    and    "
},
{
  "id": "thm-de-morgans-laws",
  "level": "2",
  "url": "sec-sets-functions.html#thm-de-morgans-laws",
  "type": "Theorem",
  "number": "A.11",
  "title": "De Morgan's Laws.",
  "body": "De Morgan's Laws    and    "
},
{
  "id": "def-cartesian-product",
  "level": "2",
  "url": "sec-sets-functions.html#def-cartesian-product",
  "type": "Definition",
  "number": "A.12",
  "title": "Cartesian Product.",
  "body": "Cartesian Product   Let and for be sets. The Cartesian product  and    "
},
{
  "id": "exe-cartesian-subsets",
  "level": "2",
  "url": "sec-sets-functions.html#exe-cartesian-subsets",
  "type": "Exploration",
  "number": "A.13",
  "title": "Subsets of Cartesian Products.",
  "body": "Subsets of Cartesian Products  If and , then .  "
},
{
  "id": "def-function",
  "level": "2",
  "url": "sec-sets-functions.html#def-function",
  "type": "Definition",
  "number": "A.14",
  "title": "Function.",
  "body": "Function   Let and be sets. A function (also called a map ) from to , denoted , is a subset such that for each , there is one and only one pair in of the form . The set is called the domain of and the set is called the codomain of .   "
},
{
  "id": "def-well-defined",
  "level": "2",
  "url": "sec-sets-functions.html#def-well-defined",
  "type": "Definition",
  "number": "A.15",
  "title": "Well-defined Function.",
  "body": "Well-defined Function   A function is well-defined if whenever and , then .   "
},
{
  "id": "remark-112",
  "level": "2",
  "url": "sec-sets-functions.html#remark-112",
  "type": "Remark",
  "number": "A.16",
  "title": "",
  "body": " All functions are well-defined.  "
},
{
  "id": "ex-common-functions",
  "level": "2",
  "url": "sec-sets-functions.html#ex-common-functions",
  "type": "Example",
  "number": "A.17",
  "title": "Commonly Encountered Functions.",
  "body": "Commonly Encountered Functions     A constant map  is any function of the form for all , where is some fixed element.    The identity map on is the function defined by for all .    The inclusion map from to is the function defined by for all     If is a function, the restriction of to , denoted , is the function defined by for all .    If is a function, an extension of to is any function such that .    The projection maps from are the functions and defined by and for all . For any finite collection of sets , projection maps for all can be defined similarly.    Let be a non-empty set, and let be a subset. The characteristic map for in , denoted , is the function defined by      "
},
{
  "id": "def-jectivity",
  "level": "2",
  "url": "sec-sets-functions.html#def-jectivity",
  "type": "Definition",
  "number": "A.18",
  "title": "Injective, Surjective, Bijective.",
  "body": "Injective, Surjective, Bijective   Let be a function.   The function is one-to-one (also called an injection and denoted ) if whenever and then .    The function is onto (also called a surjection and denoted ) if for every in , there is an in with .    The function is a bijection if is both one-to-one and onto.    The function is invertible if there is a function such that and .      "
},
{
  "id": "surjective-iff-image",
  "level": "2",
  "url": "sec-sets-functions.html#surjective-iff-image",
  "type": "Exploration",
  "number": "A.19",
  "title": "Surjective iff Image is Codomain.",
  "body": "Surjective iff Image is Codomain A function is surjective if and only if . "
},
{
  "id": "def-composition",
  "level": "2",
  "url": "sec-sets-functions.html#def-composition",
  "type": "Definition",
  "number": "A.20",
  "title": "Composition.",
  "body": "Composition   Let , and be sets, and let and be functions. The composition of and is the function defined by for all .   "
},
{
  "id": "thm-compositions-and-jectivity",
  "level": "2",
  "url": "sec-sets-functions.html#thm-compositions-and-jectivity",
  "type": "Theorem",
  "number": "A.21",
  "title": "Compositions and 'Jectivity.",
  "body": "Compositions and 'Jectivity   Let , , and be functions. Then:   If and are one-to-one then is one-to-one.    If is one-to-one then is one-to-one.    If and are onto then is onto.    If is onto then is onto.     is a bijection if and only if is invertible.      "
},
{
  "id": "def-image-preimage",
  "level": "2",
  "url": "sec-sets-functions.html#def-image-preimage",
  "type": "Definition",
  "number": "A.22",
  "title": "Image and Preimage.",
  "body": "Image and Preimage   Let be a function.   The image of a subset of is .    The preimage of a subset of is .    The image  is .      "
},
{
  "id": "thm-pan",
  "level": "2",
  "url": "sec-sets-functions.html#thm-pan",
  "type": "Theorem",
  "number": "A.23",
  "title": "PAN.",
  "body": "PAN   If , and for all , then    .     .     .     .      "
},
{
  "id": "thm-iasn",
  "level": "2",
  "url": "sec-sets-functions.html#thm-iasn",
  "type": "Theorem",
  "number": "A.24",
  "title": "IASN.",
  "body": "IASN   If , and for all , then    .     .     . If moreover is injective, then .     . If moreover is injective, then .      "
},
{
  "id": "theorem-132",
  "level": "2",
  "url": "sec-sets-functions.html#theorem-132",
  "type": "Theorem",
  "number": "A.25",
  "title": "Containments of Images, Preimages.",
  "body": "Containments of Images, Preimages   Let .   If , then ; if moreover is injective then .    If then ; if moreover is surjective then .      "
},
{
  "id": "prop-inclusions-injective",
  "level": "2",
  "url": "sec-sets-functions.html#prop-inclusions-injective",
  "type": "Proposition",
  "number": "A.26",
  "title": "Inclusions are Injective.",
  "body": "Inclusions are Injective   If and is the inclusion, then is an injection.   "
},
{
  "id": "def-projection-map",
  "level": "2",
  "url": "sec-sets-functions.html#def-projection-map",
  "type": "Definition",
  "number": "A.27",
  "title": "Projection Map.",
  "body": "Projection Map   Let for all be sets and let . The projection map is defined by .   "
},
{
  "id": "def-product-inclusion",
  "level": "2",
  "url": "sec-sets-functions.html#def-product-inclusion",
  "type": "Definition",
  "number": "A.28",
  "title": "Product Inclusion Map.",
  "body": "Product Inclusion Map   Let for all be sets, let , and for each , let . The associated product inclusion map is defined for each by , where .   "
},
{
  "id": "thm-proj-sur-incl-inj",
  "level": "2",
  "url": "sec-sets-functions.html#thm-proj-sur-incl-inj",
  "type": "Theorem",
  "number": "A.29",
  "title": "Properties of Projections and Product Inclusions.",
  "body": "Properties of Projections and Product Inclusions      Projection maps are surjections.    Product inclusion maps are injections.      "
},
{
  "id": "def-equivalence-relation",
  "level": "2",
  "url": "sec-sets-functions.html#def-equivalence-relation",
  "type": "Definition",
  "number": "A.30",
  "title": "Equivalence Relation.",
  "body": "Equivalence Relation   An equivalence relation  on a set is a subset (where is written ) that satisfies the following for all in :  Reflexivity   ,   Symmetry   implies , and   Transitivity   and implies .     The equivalence class of an element a of is .  The notation denotes the set of equivalence classes , also called the quotient of with respect to .  The function defined by for all is called the quotient map .   "
},
{
  "id": "def-partition",
  "level": "2",
  "url": "sec-sets-functions.html#def-partition",
  "type": "Definition",
  "number": "A.31",
  "title": "Partition.",
  "body": "Partition   A partition of a set is a collection of nonempty disjoint subsets of whose union is .   "
},
{
  "id": "thm-equiv-partition",
  "level": "2",
  "url": "sec-sets-functions.html#thm-equiv-partition",
  "type": "Theorem",
  "number": "A.32",
  "title": "EPT.",
  "body": "EPT   Let be a set.   If is an equivalence relation on , then is a partition of .    If is a partition of , and , then is an equivalence relation on .      "
},
{
  "id": "def-integers-modulo",
  "level": "2",
  "url": "sec-sets-functions.html#def-integers-modulo",
  "type": "Definition",
  "number": "A.33",
  "title": "The Integers Modulo <span class=\"process-math\">\\(n\\)<\/span>.",
  "body": "The Integers Modulo   Let , and let . The number is congruent to the number modulo , denoted , if for some .  For each , we obtain a relation on given by congruence modulo , which we call the integers modulo  .   "
},
{
  "id": "sec-numbers-and-cardinality",
  "level": "1",
  "url": "sec-numbers-and-cardinality.html",
  "type": "Section",
  "number": "A.2",
  "title": "Number Systems, Counting, Cardinality",
  "body": "Number Systems, Counting, Cardinality  Number Systems (*)  Divisibility   Let and be integers. The integer  divides the integer if and only if there is some integer such that . If divides , we write , and we say that is a factor of , and that is divisible by .    Prime Integer   Let be an integer greater than . The integer is a prime number if and only if the only positive integers that divide are and . The integer is a composite number iff it is not a prime number.    GCD, LCM (*)       Division Algorithm   Let and be integers with . Then there exist unique integers and such that     Coming soon!     Counting (*)  Binomial Coefficient (*)       Binomial Theorem (*)        Cardinality  Cardinality   A set is finite if there is a bijection for some natural number , or is empty. In this case the number is called the cardinality of .  A set is infinite if is not finite. A set is countable if there is an injection .      Let be a set.   The following are equivalent:    is finite.    There is an onto function for some     There is a one-to-one function for some .       The following are equivalent:    is infinite.    There is an onto function .    There is a one-to-one function .       The following are equivalent:    is countable.    There is an onto function .    There is an injection .               The class of finite sets is closed under: subsets, intersections, finite unions, and finite products.    The class of countable sets is closed under: subsets, intersections, countable unions, and finite products.        "
},
{
  "id": "def-divides",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#def-divides",
  "type": "Definition",
  "number": "A.34",
  "title": "Divisibility.",
  "body": "Divisibility   Let and be integers. The integer  divides the integer if and only if there is some integer such that . If divides , we write , and we say that is a factor of , and that is divisible by .   "
},
{
  "id": "def-prime-number",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#def-prime-number",
  "type": "Definition",
  "number": "A.35",
  "title": "Prime Integer.",
  "body": "Prime Integer   Let be an integer greater than . The integer is a prime number if and only if the only positive integers that divide are and . The integer is a composite number iff it is not a prime number.   "
},
{
  "id": "def-gcd-lcm",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#def-gcd-lcm",
  "type": "Definition",
  "number": "A.36",
  "title": "GCD, LCM (*).",
  "body": "GCD, LCM (*)      "
},
{
  "id": "thm-division-algorithm",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#thm-division-algorithm",
  "type": "Theorem",
  "number": "A.37",
  "title": "Division Algorithm.",
  "body": "Division Algorithm   Let and be integers with . Then there exist unique integers and such that     Coming soon!   "
},
{
  "id": "def-binomial-coefficient",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#def-binomial-coefficient",
  "type": "Definition",
  "number": "A.38",
  "title": "Binomial Coefficient (*).",
  "body": "Binomial Coefficient (*)      "
},
{
  "id": "thm-binomial-theorem",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#thm-binomial-theorem",
  "type": "Theorem",
  "number": "A.39",
  "title": "Binomial Theorem (*).",
  "body": "Binomial Theorem (*)      "
},
{
  "id": "def-cardinality",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#def-cardinality",
  "type": "Definition",
  "number": "A.40",
  "title": "Cardinality.",
  "body": "Cardinality   A set is finite if there is a bijection for some natural number , or is empty. In this case the number is called the cardinality of .  A set is infinite if is not finite. A set is countable if there is an injection .   "
},
{
  "id": "thm-cardinality-equivalencies",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#thm-cardinality-equivalencies",
  "type": "Theorem",
  "number": "A.41",
  "title": "",
  "body": "  Let be a set.   The following are equivalent:    is finite.    There is an onto function for some     There is a one-to-one function for some .       The following are equivalent:    is infinite.    There is an onto function .    There is a one-to-one function .       The following are equivalent:    is countable.    There is an onto function .    There is an injection .         "
},
{
  "id": "thm-cardinality-closures",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#thm-cardinality-closures",
  "type": "Theorem",
  "number": "A.42",
  "title": "",
  "body": "     The class of finite sets is closed under: subsets, intersections, finite unions, and finite products.    The class of countable sets is closed under: subsets, intersections, countable unions, and finite products.      "
},
{
  "id": "sec-poset-lattice",
  "level": "1",
  "url": "sec-poset-lattice.html",
  "type": "Section",
  "number": "A.3",
  "title": "Posets, Lattices, Chains (*)",
  "body": "Posets, Lattices, Chains (*)  Coming soon!  "
},
{
  "id": "app-notation",
  "level": "1",
  "url": "app-notation.html",
  "type": "Appendix",
  "number": "B",
  "title": "Notation",
  "body": "Notation   Notation       equal to           not equal to           in           subset           proper subset           subset           proper subset           less than or equal to           less than           greater than or equal to           greater than           union           intersection           set difference           multiplicative operation           additive operation           additive inverse           multiplicative inverse, inverse function           composition operation           divides           function from domain to codomain           where input is mapped by function           injective function           surjective function           isomorphic           isomorphism           congruent           relation           equivalence class           direct product           direct sum           tensor product           factorial           sum           product           for all           there exists           unique existence           set notation         "
},
{
  "id": "table-1",
  "level": "2",
  "url": "app-notation.html#table-1",
  "type": "Table",
  "number": "B.1",
  "title": "Notation",
  "body": "Notation       equal to           not equal to           in           subset           proper subset           subset           proper subset           less than or equal to           less than           greater than or equal to           greater than           union           intersection           set difference           multiplicative operation           additive operation           additive inverse           multiplicative inverse, inverse function           composition operation           divides           function from domain to codomain           where input is mapped by function           injective function           surjective function           isomorphic           isomorphism           congruent           relation           equivalence class           direct product           direct sum           tensor product           factorial           sum           product           for all           there exists           unique existence           set notation        "
},
{
  "id": "appendix-biograhy",
  "level": "1",
  "url": "appendix-biograhy.html",
  "type": "Appendix",
  "number": "C",
  "title": "Biographies",
  "body": "Biographies  Niels Henrik Abel  Niels Henrik Abel (1802-1829) was a Norwegian mathematician who made groundbreaking contributions to several areas of mathematics, including number theory, algebra, and analysis. Despite dying at the young age of 26, Abel's work had a profound impact on the development of mathematics in the 19th century and beyond. He is perhaps best known for his proof of the impossibility of solving the general quintic equation by radicals, which is considered one of the major achievements of 19th-century mathematics.  Abel was born in Norway and showed an early talent for mathematics. He began studying at the University of Oslo at the age of 17, but financial difficulties and political unrest in Norway at the time made it difficult for him to pursue his studies. In 1823, Abel traveled to Paris, where he was able to work with some of the leading mathematicians of the day, including Adrien-Marie Legendre and Joseph Fourier.  Abel's life was marked by tragedy and struggle. He suffered from poor health throughout his short life, and financial difficulties made it difficult for him to support himself and his family. Despite these challenges, he continued to work tirelessly on his mathematical research, producing a body of work that continues to be studied and admired today. Abel died of tuberculosis in 1829, just months after being awarded a prestigious prize for his work on elliptic integrals.   Augustin-Louis Cauchy  Augustin-Louis Cauchy (1789-1857) was a French mathematician who made significant contributions to several areas of mathematics, including analysis, number theory, and group theory. Cauchy was a prodigious mathematician who published over 800 papers during his lifetime, and his work laid the foundation for much of modern analysis. He is perhaps best known for his contributions to the theory of functions of a complex variable, which he developed in the early 19th century.  Cauchy was born in Paris, France, and showed an early aptitude for mathematics. He was a brilliant student who excelled in both mathematics and physics, and he received his doctorate in mathematics from the École Polytechnique in Paris at the age of 21. He went on to become a professor of mathematics at several prestigious institutions, including the École Polytechnique and the Collège de France.  Cauchy's work in group theory was influential in the development of the subject, and he is credited with formulating the first rigorous definition of a group. He also made significant contributions to the theory of permutation groups, which are central to the study of group theory. Despite his many achievements, Cauchy's life was not without controversy. He was known for his irascible temperament and his conflicts with other mathematicians, including his bitter rival, Niels Henrik Abel. Nonetheless, his contributions to mathematics continue to be studied and applied by mathematicians today.   Arthur Cayley  Arthur Cayley (1821-1895) was a British mathematician who made important contributions to a wide range of fields, including group theory, algebra, geometry, and matrix theory. He is often regarded as one of the founders of modern algebra, and his work played a key role in the development of abstract algebra in the late 19th century.  Cayley was born in London and studied mathematics and law at the University of Cambridge. He went on to become a fellow of Trinity College, Cambridge, and later served as the university's professor of pure mathematics. During his career, he published over 300 papers on a variety of topics in mathematics, and he made important contributions to the study of group theory, including the development of Cayley's theorem and the theory of permutation groups.  Cayley was also an advocate for women's education and played a key role in the movement to allow women to study mathematics at Cambridge University. He argued that women had the same intellectual abilities as men and should be given the same opportunities to pursue advanced studies in mathematics. Today, Arthur Cayley is remembered not only for his contributions to mathematics but also for his advocacy for women's education and his support for social progress and equality.   Richard Dedekind  Richard Dedekind (1831-1916) was a German mathematician who made important contributions to several areas of mathematics, including number theory, algebra, and analysis. He is best known for his work on the foundations of mathematics and his development of the theory of ideals in algebra.  Dedekind was born in Brunswick, Germany, in 1831, and he studied at the University of Göttingen under some of the most renowned mathematicians of his time, including Carl Friedrich Gauss and Ernst Dirichlet. He received his doctorate in 1852 and then spent several years teaching at various universities in Germany.  In the 1870s, Dedekind turned his attention to algebraic number theory, which was then a relatively new field. He developed the theory of ideals as a way of understanding the structure of rings of algebraic integers. Dedekind's work on ideals was an important step in the development of modern abstract algebra and has had a profound impact on many areas of mathematics, including algebraic geometry, algebraic topology, and commutative algebra.   Gotthold Eisenstein  Gotthold Eisenstein (1823-1852) was a German mathematician who made important contributions to several areas of mathematics, including number theory, group theory, and algebra. He is best known for his work on the theory of quadratic forms and his development of Eisenstein series.  Eisenstein was born in Berlin, Germany in 1823, and he showed a talent for mathematics at an early age. He studied at the University of Berlin and received his doctorate in 1844. After completing his studies, Eisenstein spent several years working as a private tutor and publishing papers on various topics in mathematics.  In the 1840s, Eisenstein began to develop his theory of quadratic forms, which would become one of his most important contributions to mathematics. He also worked on the theory of elliptic functions and discovered what are now known as Eisenstein series, which are a type of modular form. Eisenstein's work on quadratic forms and Eisenstein series has had a profound impact on many areas of mathematics, including algebraic number theory, algebraic geometry, and the theory of automorphic forms.   Ferdinand Georg Frobenius  Ferdinand Georg Frobenius was a German mathematician who made significant contributions to various areas of mathematics, including group theory, number theory, and differential equations. He was born on October 26, 1849, in Charlottenburg, Germany, and died on August 3, 1917, in Berlin.  Frobenius studied at the University of Berlin, where he received his doctorate in 1870. He then spent several years teaching at various universities in Germany before eventually settling at the University of Berlin, where he spent the rest of his career.  One of Frobenius's most significant contributions to mathematics was his work on group theory. He introduced the concept of a group homomorphism and used it to study the structure of groups. He also introduced the idea of a group character, which is a function that associates a complex number with each element of a group and provides information about the group's representation theory. Frobenius's work on group theory was foundational for the development of modern algebra. In addition to his work on group theory, Frobenius also made contributions to number theory, particularly in the area of diophantine equations, and to the theory of differential equations, where he introduced the concept of a linear differential equation with singularities.   Évariste Galois  Évariste Galois (1811-1832) was a French mathematician who made groundbreaking contributions to the field of algebra, particularly in the study of group theory. Despite his short life, Galois laid the foundation for the modern theory of algebraic equations and abstract algebra. His work on the theory of equations, which he developed at a young age, revealed the limitations of algebraic methods and led to the development of a new field of mathematics.  Galois was born in Bourg-la-Reine, France, and was recognized for his mathematical talent at a young age. He was an excellent student, but his studies were often interrupted by political upheaval in France, including the July Revolution of 1830. Galois was an active participant in revolutionary movements and was imprisoned for his involvement in a failed uprising against the government. While in prison, he continued to work on mathematical problems and developed his theory of groups and fields, which would later become the foundation for modern algebra.  Galois died at the age of 20 in a duel, which has been attributed to his political and personal conflicts. Although he died young, his work on algebra and group theory had a profound impact on the development of modern mathematics. Today, Galois is regarded as one of the most important mathematicians in history, and his contributions to algebra are still studied and applied by mathematicians around the world.   Johann Carl Friedrich Gauss  Johann Carl Friedrich Gauss (1777-1855) was a German mathematician, physicist, and astronomer who made significant contributions to many areas of mathematics. He is often referred to as the \"Prince of Mathematicians\" and is considered to be one of the most influential mathematicians in history.  Gauss was born in Brunswick, Germany in 1777 and showed a remarkable talent for mathematics at an early age. He made many important contributions to the field of mathematics throughout his life, including the development of non-Euclidean geometry, the discovery of the fundamental theorem of algebra, and the invention of the method of least squares.  In addition to his work in mathematics, Gauss also made significant contributions to the fields of physics and astronomy. He was one of the first scientists to discover the planet Ceres and made important contributions to the study of electromagnetism and the theory of celestial mechanics. Gauss was widely recognized as one of the greatest minds of his time, and his work continues to influence and inspire mathematicians and scientists to this day.   William Rowan Hamilton  William Rowan Hamilton was an Irish mathematician and physicist who lived from 1805 to 1865. He is known for his contributions to a wide range of fields, including complex analysis, number theory, optics, and dynamics. Hamilton was a child prodigy and entered Trinity College Dublin at the age of 16, where he later became a professor of astronomy.  One of Hamilton's most important contributions to mathematics was the invention of quaternions, a non-commutative extension of complex numbers. Quaternions have played an important role in the development of 3D computer graphics and robotics. Hamilton also made important contributions to the theory of optics, including the discovery of conical refraction.  Hamilton was highly respected in the scientific community and was elected president of the Royal Irish Academy in 1837. He was also a fellow of the Royal Society in London and received numerous awards and honors throughout his lifetime. Hamilton died in 1865, and his legacy continues to inspire mathematicians and scientists to this day.   David Hilbert  David Hilbert (1862-1943) was a German mathematician who made significant contributions to a wide range of fields, including algebra, number theory, geometry, mathematical physics, and the foundations of mathematics. Hilbert is perhaps best known for his work on the foundations of mathematics, where he sought to develop a formal, axiomatic approach to mathematics that would provide a solid, logical foundation for the discipline. His work on the foundations of mathematics led to the development of important concepts such as Hilbert space, Hilbert's program, and the theory of integral equations.  Hilbert was born in Königsberg, Germany (now Kaliningrad, Russia), and he studied mathematics at the University of Königsberg. After completing his studies, he worked as a professor of mathematics at several universities in Germany, including the University of Göttingen, where he spent most of his career. In addition to his research, Hilbert was an influential teacher and mentor, and he played a key role in the development of mathematical education in Germany.  Hilbert was widely recognized for his contributions to mathematics, and he received numerous awards and honors during his lifetime. He was a member of the Prussian Academy of Sciences and the German Academy of Sciences, and he was awarded the Royal Society's Copley Medal in 1930. Hilbert's work has had a lasting impact on the development of mathematics, and his insights continue to be studied and applied in modern mathematics.   Camille Jordan  Camille Jordan (1838-1922) was a French mathematician who made significant contributions to the development of group theory, number theory, and algebraic geometry. Jordan's most important work was his theory of finite groups, which provided a rigorous framework for the study of symmetry and structure. He was also known for his work on the theory of equations, and he developed important results on modular forms, hyperelliptic functions, and algebraic curves.  Jordan was born in Lyons, France, and he received his education at the École Polytechnique in Paris. After completing his studies, he worked as a professor of mathematics at several universities, including the University of Lille and the Collège de France. In addition to his research, Jordan was an influential teacher and mentor, and he played a key role in the development of mathematical education in France.  Jordan was widely recognized for his contributions to mathematics, and he received numerous awards and honors during his lifetime. He was a member of the French Academy of Sciences, and he was awarded the Grand Prix des Sciences Mathématiques in 1892. Jordan's work has had a lasting impact on the development of group theory and algebraic geometry, and his insights continue to be studied and applied in modern mathematics.   Felix Klein  Felix Klein was a German mathematician who made significant contributions to many areas of mathematics, including group theory, geometry, and topology. He was born in 1849 in Düsseldorf, Germany, and showed a strong aptitude for mathematics from a young age. He went on to study at the University of Bonn and later the University of Berlin, where he earned his doctorate in 1868 under the supervision of Ernst Eduard Kummer. After completing his education, Klein held various academic positions in Germany and Switzerland before being appointed as a professor of mathematics at the University of Erlangen in 1875. In 1880, he moved to the University of Göttingen, where he remained until his retirement in 1913.  Klein is perhaps best known for his work on the theory of groups and their applications to geometry. He was instrumental in developing the idea of the group as an abstract mathematical structure, rather than simply a collection of symmetries of a particular object. He also introduced the concept of the Kleinian group, a discrete group of isometries of the hyperbolic plane. In addition to his work in group theory, Klein made significant contributions to other areas of mathematics, including geometry, topology, and the theory of functions. He also played a prominent role in the development of mathematical education, advocating for the use of concrete examples and applications in teaching.  Klein's work had a profound impact on the development of mathematics in the late 19th and early 20th centuries, and he was widely regarded as one of the leading mathematicians of his time. He was awarded numerous honors for his contributions, including the Royal Society's Copley Medal and the French Legion of Honor. After his retirement from academia, Klein continued to work on mathematical problems and served as the editor of the influential mathematical journal Mathematische Annalen. He died in 1925 at the age of 76, leaving behind a legacy of important mathematical discoveries and a lasting impact on the field of mathematics as a whole.   Joseph-Louis Lagrange  Joseph-Louis Lagrange (1736-1813) was an Italian-French mathematician who made significant contributions to many areas of mathematics, including algebra, calculus, and number theory. Born in Turin, Italy, Lagrange showed early promise in mathematics and was admitted to the Royal Academy of Sciences at the age of 19. He later moved to Paris, where he became a prominent member of the scientific community and a professor at the École Polytechnique.  Lagrange's contributions to mathematics were wide-ranging and profound. He is perhaps best known for his work on the calculus of variations, which helped to lay the foundation for modern optimization theory. He also made important contributions to number theory, including the study of Diophantine equations and the development of the theory of binary quadratic forms. In addition, Lagrange made important contributions to classical mechanics, including the development of the principle of least action and the formulation of Lagrangian mechanics.  Lagrange's life was marked by political upheaval and personal tragedy. He lived through the French Revolution and was forced to flee Paris at one point due to his association with the royal court. He also suffered the loss of his wife and several children, which he wrote about in a series of poignant letters. Despite these challenges, Lagrange continued to work tirelessly on his mathematical research, producing a body of work that continues to be studied and admired today. He died in Paris in 1813, having left an indelible mark on the history of mathematics.   Emmy Noether  Emmy Noether (1882-1935) was a German mathematician who made groundbreaking contributions to the fields of algebra and theoretical physics. Born in Erlangen, Germany, Noether was the daughter of a mathematics professor and grew up with a strong interest in the subject. Despite facing discrimination as a woman in a male-dominated field, Noether pursued her passion for mathematics and eventually became a professor at the University of Göttingen.  Noether's work in algebra revolutionized the field and laid the foundation for modern abstract algebra. She developed the concept of \"Noetherian rings\" and proved several theorems that are now known as \"Noether's theorems,\" including a fundamental theorem linking symmetries and conservation laws in physics. Her work also had a significant impact on the development of group theory and the study of algebraic geometry.  In addition to her contributions to mathematics, Noether played an important role in the scientific community as a mentor and advocate for women in science. She taught and mentored several notable mathematicians, including Hermann Weyl and Richard Courant, and was a founding member of the Mathematical Association of America. Despite facing discrimination and persecution as a Jew in Nazi Germany, Noether continued to work and inspire others until her untimely death at the age of 53. She is remembered today as one of the most influential mathematicians of the 20th century.   Henry John Stephen Smith  Henry John Stephen Smith was a British mathematician born in Dublin, Ireland in 1826. He was the second son of a barrister and was educated at Trinity College Dublin, where he studied mathematics and classics. He received his BA in 1847 and his MA in 1852. He began teaching at Trinity College in 1850 and was appointed professor of geometry there in 1856. Smith made significant contributions to the theory of elliptic functions and their applications to mechanics, and to the theory of algebraic invariants. He is also known for his work on the arithmetic of algebraic curves and for his contributions to the study of the zeta function.  In addition to his work in mathematics, Smith was involved in the administration of Trinity College Dublin. He served as Registrar of the University from 1867 to 1884, and in 1874 he was appointed the first dean of the newly formed Faculty of Science. He was also involved in the foundation of the Royal Irish Academy, and served as its president from 1886 to 1890. Smith was widely respected for his administrative abilities as well as his mathematical accomplishments.  Smith died in 1883 at the age of 56. He is remembered as one of the most important mathematicians of his time, and his contributions to the theory of algebraic invariants and the theory of elliptic functions continue to be studied today. The Smith normal form, a method for finding the elementary divisors of a matrix, is named after him.   "
},
{
  "id": "appendix-etymology",
  "level": "1",
  "url": "appendix-etymology.html",
  "type": "Appendix",
  "number": "D",
  "title": "Etymology",
  "body": "Etymology  Algebraic Structures  The term magma was coined by the mathematician Benjamin Peirce in the 1870s to describe a set with a binary operation. The word magma is derived from the Latin word magmus , meaning mass or heap , which suggests a collection of objects with no particular order or structure.  The word \"monoid\" was first used by the mathematician Garrett Birkhoff in his 1935 paper \"On the Structure of Abstract Algebras\".  The term group was introduced in 1831 by the French mathematician to describe a set of mathematical objects that exhibit certain symmetry properties.  It was later adopted and popularized by other mathematicians such as and , though the axiomatic definition was not given until 1882 by Heinrich Weber.  The term abelian groups was introduced by the mathematician and physicist James Clerk Maxwell in the 1870s. Maxwell named these groups after the Norwegian mathematician .  The name \"dihedral group\" is a natural choice for these groups, as they are intimately connected to the study of dihedral angles and the symmetries of regular polygons.  Quaternions were invented by the Irish mathematician in 1843. Hamilton named them \"quaternions\" because they are a generalization of complex numbers, which he called \"duads\". Since quaternions involve four components instead of two, Hamilton chose the name \"quaternions\" to reflect this. The word \"quaternion\" itself means a group of four things or a fourfold entity, which is a fitting name for a mathematical object with four components.  The word \"homomorphism\" comes from the Greek words \"homo\" meaning \"same\" and \"morphe\" meaning \"form\" or \"shape\".  Several mathematicians have been creditied with inventing \/ discovering homomorphisms, such as Frobenius, Galois, Klein, and Jordan.  The term kernel was first used in mathematics by the German mathematician in the late 19th century.  The term kernel comes from the German word kern , which means core or nucleus . In the context of a homomorphism, the kernel is the subgroup of the domain group that is killed by the homomorphism.  The meaning of the word isomorphism in any context (sets, groups, rings, fields, topological spaces, whatever) is always a morphism that has a two-sided inverse . In many contexts this turns out to be equivalent to the notion of being one-to-one and onto . But there are contexts in which this is not the case. For example a one-to-one and onto continuous map of topological spaces need not be a homeomorphism. (A homeomorphism is a term one uses for isomorphism of topological spaces, for historical reasons.)  Cayley's Theorem is named after the British mathematician Arthur Cayley. Cayley was a prolific mathematician who made significant contributions to a wide range of fields, including algebra, geometry, and graph theory. Cayley was also a strong advocate for women's education and played an important role in the movement to admit women to Cambridge University. In the 1860s, he was part of a group of academics who lobbied for women to be allowed to take the Cambridge Mathematical Tripos exam, which was the standard test for mathematics students at the time.  Lagrange stated his version of this theorem in 1770, but the first complete proof was given by Pietro Abbati roughly 30 years later.  Sylow subgroups are named after the Norwegian mathematician Ludwig Sylow, who was the first to systematically study their properties in the late 19th century.  Sylow was interested in understanding the structure of finite groups and in particular, how the existence of certain subgroups of prime power order could provide information about the structure of the group as a whole. He introduced the concept of a Sylow -subgroupa and showed that such subgroups play a crucial role in the structure of finite groups.  Rings were first discovered (or created) by the German mathematician in the early 20th century, who used the term \"Ring\" because of the circular nature of the structure. The operations interact with each other in a circular way, such that multiplication distributes over addition, and addition and multiplication satisfy certain other algebraic properties.  The term \"Field\" was first introduced by the German mathematician Ernst Steinitz in the early 20th century. It was chosen because of the analogy with the physical concept of a field, such as an electric field or a gravitational field, which also has a notion of addition and multiplication, and satisfies certain algebraic properties.  The term \"integral domain\" was coined by , a German mathematician who lived in the 19th century.  The word \"integral\" comes from the Latin \"integer,\" meaning \"whole\" or \"untouched,\" which is fitting because in an integral domain, the product of two nonzero elements is never \"broken apart\" into smaller pieces by a zerodivisor.  Ideals were first introduced by in the 1870s in his work on algebraic number theory. The term \"ideal\" was chosen by Dedekind to suggest the notion of an \"ideal\" number, which he saw as a kind of idealization of a real number. Similarly, Dedekind saw an ideal in a ring as an idealization of an element in the ring.  Euclidean domains were named after the ancient Greek mathematician Euclid; however, it was actually Ernst Eduard Kummer, a German mathematician, who first introduced the concept of Euclidean domains in the 19th century.  The concept of principal ideal domains (PIDs) was introduced by the German mathematician Ernst Eduard Kummer in the 19th century, as a generalization of the concept of Euclidean domains.  The concept of unique factorization was first introduced by mathematicians Carl Friedrich Gauss and Ernst Eduard Kummer in the 19th century.  The term \"unique factorization domain\" was coined by Emmy Noether in the 20th century, to describe integral domains in which every non-zero, non-unit element has a unique factorization into irreducible elements.  The term \"module\" comes from the Latin word \"modulus\", which means \"measure\". In mathematics, a module is a mathematical object that measures the size and shape of a vector space over a given ring. The term \"module\" is used to emphasize the idea that these objects are generalizations of vector spaces, and that they measure the extent to which a given vector space can be transformed using the ring operations.   "
},
{
  "id": "index-1",
  "level": "1",
  "url": "index-1.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "   "
},
{
  "id": "colophon-2",
  "level": "1",
  "url": "colophon-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
