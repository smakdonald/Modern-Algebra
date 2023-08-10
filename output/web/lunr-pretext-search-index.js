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
  "body": " The content of this text is heavily based on the 817-818 sequence of courses offered in UNL, specificlly those taught during the 2021 and 2022 academic years. As such, the content and structure have been heavily based on the notes of the following faculty:    Eloísa Grifo      Alexandra Seceleanu      Mark Walker  Mark has somehow managed to be the only member of the mathematics faculty to not have so much as a single page on the UNL website. Luckily, there are workarounds.    I am very thankful to Eloísa, Alexandra, and Mark for sharing their .tex files with me.  And, as always, I reserve a speical thank you for Erin McNicholas and Inga Johnson for forever tinting the world of mathematics purple.  Supplementary \/ Source Material      Alexandra Seceleanu's Algebra Lecture Notes      Eloísa Grifo's 818 Lecture Notes       "
},
{
  "id": "preface-1",
  "level": "1",
  "url": "preface-1.html",
  "type": "Preface",
  "number": "",
  "title": "How to Use This Book",
  "body": "How to Use This Book  I'm still in the process of figuring out exactly what this text is for. Some possibilities include:   Future lecture notes for the hopeful possibility that one day I will teach a course over this material.    Current notes for students taking the first year algebra sequence.    Assistance in studying for the Algebra Qualifying Exam at UNL.    Clout.     Blocks  Here are the types of environments you are likely to encounter throughout the text and what they are used for.  Definition   The building blocks of what we'll be working with.   Examples   Specific instances of a definition. For example, the empty set, is an example of a set, and thus would be contained within an example environment. See: . At some point the line between example and definition becomes incoherently blurred, but I have done my best to keep things consistent.   Theorem   A result.   Lemma   A true mathematical statement that was proven mainly to help in the proof of some theorem.   Corollary   An important result whose proof comes directly from a previous theorem.   Proposition   Results that require proof but are more specific and\/or contained in a larger result coming later.   Exercise   Generalizations, specifics, smaller results, things are are less essential to the course or results who's proofs are usually skipped.   Problem   Used for qualifying exam problems.   Remark   Providing context in the form of foreshadowing or content not covered in this text. In general, there shouldn't be anything defined in a remark, they should be entirely optional.   Discussion   Usually for arguing about notation.   Footnotes   Sometimes act like remarks. However, most are strictly for fun and add little to no educational value, at least in the traditional sense. It should really be feetnote if you think about it.       Don't Forget the Index!  This text (and algebra in general) contains an otherworldly amount of definitions and notation, it can sometimes be overwhelming keeping track of it all, and that's okay! The is here to help; it contains a comprehensive list of all the terms and notation used here, as well as where to find their definition \/ first usage in the text. Use it, it's here for you!   "
},
{
  "id": "p-14",
  "level": "2",
  "url": "preface-1.html#p-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Definition Examples Theorem Lemma Corollary Proposition Exercise Problem Remark Discussion Footnotes "
},
{
  "id": "sec-group-basics",
  "level": "1",
  "url": "sec-group-basics.html",
  "type": "Section",
  "number": "1.1",
  "title": "Group Basics",
  "body": "Group Basics  Binary Operations and Algebraic Structures    The operation was a success, but I'm afraid the doctor is dead.   Steve Martin   A Brief Notational Aside  At various points throughout this text, the author may use \"mathcal\" notation for definitions that do not normally require it (such as for a group, for a ring, etc.). In the realm of higher mathematics, this is what is known as a typo , and should be reported to the proper authorities as soon as possible.   We begin, as all great volumes of mathematics are like to do, somewhere in the middle. Though everything that you need from the beginning can be found in .   Binary Operation   A binary operation on a set is a   binary operation      Binary Properties   Let be a binary operation on a set .   An operation satisfies the associative property if for all we have . associative property     An operation satisfies the identity property if there exists such that for all . Such an element is called an identity element .  identity property     An operation satisfies the inverse property if for each , there is an element such that , where is an identity element of . Such an element is called an inverse of the element . inverse property        Additionally, a binary operation can be commutative .  Commutative Property   An operation satisfies the commutative property if for all . commutative property     Monoid   A monoid is a pair where is a set and is a binary operation on satisfying the associative and identity properties. monoid     Semigroups and Monoids  Some mathematicians choose to define a semigroup as we have defined a monoid (e.g. satisfying both the associative and identity properties). We have yet to grasp why. semigroup     We say that is closed under the operation , when we want to emphasize that for any the result of the operation, , is an element of . However note that closure is really part of the definition of a binary operation on a set, and it is implicitly assumed whenever we consider such an operation. This is the one and only \"Mark\". All following \"Marks\" will be \"Remarks\".    For those who appreciate a snazzy visual, here is a handy little graphic.  Algebraic Structures  Relations between algebraic structures. Quiver     Groups    Most great learning happens in groups.   Ken Robinson   Group      A group is a pair where is a set and is a binary operation on satisfying the associative, identity, and inverse properties. For specifics, see: .  group      An abelian group is a pair where is a set and is a binary operation on satisfying the associative, identity, inverse, and commutative properties. abelian group         Though a group is a pair, we will usually refer to the group by only naming the underlying set, .   Properties of Groups   Let be a group.  Unique Identity  The element satisfying of is unique, and we thus refer to it as the identity element of . identity element    Unique Inverses  For each , the element satisfying of is unique, and we thus refer to it as the inverse of . inverse element    Cancellation  Suppose . If then . Similarly, if we have  cancellation (groups)           Suppose there exist two elements and such that and for all . Then Thus , making the identity element unique.    For a given , if and for some and , then Thus , making inverses unique.    Suppose for some . By the , there exists some such that . Observe         The property of holds in monoids (and unital magmas) as well.    The inverse of an element is often written , for reasons we will see in the next section.   Group Examples      The trivial group is the group with a single element . trivial group       and each form an abelian group, where denotes traditional addition. The axioms of arithmetic guarantee the validity of the group axioms as well as the commutativity of the group operation. Thus all four groups are abelian.    For any positive integer , let Then is a non-abelian group under matrix multiplication known as the general linear group . general linear group      For any , let denote the . Then forms an abelian group where denotes addition modulo .       Identity Theft  In familiar groups of numbers, is used for the identity element of a multiplicative group (and likewise in additive groups). Often, is used for the identity element in arbitrary groups, though we will not do so here.   Specific General Linear Groups  In general, is a group for any field (whatever those are). To jump ahead and discover what those are, see: .    Not Quite Groups     The natural numbers do not form a group with respect to addition.    The rational numbers do not form a group with respect to multiplication.      The following example illustrates a few important examples of something called a , which is defined explicitely in terms of rings (whatever those are) in the aptly named .  Groups of Units  group of units    Each of the following subsets form an abelian group under multiplication.   The subset of .     , , and .    For each , the subset of .         will be integral to our constructions of semidirect products in and our classifications of certain groups up to isomorphism (whatever that means). Though not strictly required for this text, knowing the structure of for various can prove helpful in many qualifying exam problems.    Some texts use the notation to denote groups of units. For example, would be written .    Prove that .   Some Extra Groups    Opposite Group  Let be a multiplicative group, and define opposite group be the set equipped with the operation , where . Then is a group. Opposite groups are used in category theory to describe something called duality between algebraic structures.  opposite group     Evening the Odds  Let denote the set of even integers and denote the set of odd integers. Then is a group, whereas is not.           Since is a group and its operation is associative, we have for any elements , , in . This implies that for any elements in . Thus, associativity is satisfied in .  Let be the identity element of . In , the identity element is still because for any element in , we have , where denotes the operation in . Therefore, the identity element property is satisfied in .  Let be an element in . Since is also in , being a group implies that there exists an inverse element in such that , where is the identity element of . This implies that in as well. Therefore, every element in has an inverse in , satisfying the inverse element property.    Integer addition is associative, which means that for any three integers , and , the expression is equal to . Thus, associativity is satisfied for .  The identity element for addition is . For any even integer , adding to it does not change its parity (evenness). Hence, the identity element property is satisfied for .  For every even integer , there exists an inverse element denoted as such that . The negative of an even integer is also an even integer. Adding an even integer to its negative results in , which is the identity element. Therefore, the inverse element property is satisfied for .  The identity element for addition is . However, is not an odd integer, so the identity element property is not satisfied for .      Properties of Inverses   If is a group and , then    and               We show that both and are inverses of the element . First, recall from that . However, it is also the case that . By part (2) of we know that inverses are unique, and thus it must be the case that .    By definition, is the inverse of the element . However, we also have Thus both and are inverses of , making them equal by part (2) of .       The second portion of can be generalized.  Big 'Ole Inverses  If is a group and , then .   Generalized Associative Law generalized associative law  If an element of a monoid is contructed from a sequence of elements in this order by repeatedly inserting parenthesis and applying the operation, the element must equal and so is independent of the mode of bracketing. This is similar to general relativity, relatively speaking ('Relatively' meaning 'not very much at all' in this context).    Certainly we may assume that . If is an element constructed from in the prescribed manner, we can write where and are constructed from and respectively . If , the result follows by induction on . Otherwise we can write and : once again the result follows by induction on n.   As a result of any expression formed from the elements in that order can be written without parenthesis, which will save us oodles of time down the line. This is usually a result that is simply taken for granted and left unstated; we leave it here for the sake of completeness and ~rigor~. And yes, oodles is the best word to go here and no, I will not be changing it.       A is a set equipped with a that satisfies the properties given in . An abelian group is a group that also satisfies the .    The identity and inverse elements described in are unique. See: For inverses, we have and . See:      and are all additive abelian groups, and form multiplicative abelian groups.     "
},
{
  "id": "p-39",
  "level": "2",
  "url": "sec-group-basics.html#p-39",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "typo "
},
{
  "id": "def-binop",
  "level": "2",
  "url": "sec-group-basics.html#def-binop",
  "type": "Definition",
  "number": "1.1",
  "title": "Binary Operation.",
  "body": "Binary Operation   A binary operation on a set is a   binary operation     "
},
{
  "id": "def-binary-properties",
  "level": "2",
  "url": "sec-group-basics.html#def-binary-properties",
  "type": "Definition",
  "number": "1.2",
  "title": "Binary Properties.",
  "body": "Binary Properties   Let be a binary operation on a set .   An operation satisfies the associative property if for all we have . associative property     An operation satisfies the identity property if there exists such that for all . Such an element is called an identity element .  identity property     An operation satisfies the inverse property if for each , there is an element such that , where is an identity element of . Such an element is called an inverse of the element . inverse property       "
},
{
  "id": "commutative-axiom",
  "level": "2",
  "url": "sec-group-basics.html#commutative-axiom",
  "type": "Definition",
  "number": "1.3",
  "title": "Commutative Property.",
  "body": "Commutative Property   An operation satisfies the commutative property if for all . commutative property    "
},
{
  "id": "def-monoid",
  "level": "2",
  "url": "sec-group-basics.html#def-monoid",
  "type": "Definition",
  "number": "1.4",
  "title": "Monoid.",
  "body": "Monoid   A monoid is a pair where is a set and is a binary operation on satisfying the associative and identity properties. monoid    "
},
{
  "id": "insight-1",
  "level": "2",
  "url": "sec-group-basics.html#insight-1",
  "type": "Mark",
  "number": "1.5",
  "title": "",
  "body": " We say that is closed under the operation , when we want to emphasize that for any the result of the operation, , is an element of . However note that closure is really part of the definition of a binary operation on a set, and it is implicitly assumed whenever we consider such an operation. This is the one and only \"Mark\". All following \"Marks\" will be \"Remarks\".   "
},
{
  "id": "figure-magma",
  "level": "2",
  "url": "sec-group-basics.html#figure-magma",
  "type": "Figure",
  "number": "1.6",
  "title": "Algebraic Structures",
  "body": "Algebraic Structures  Relations between algebraic structures. Quiver   "
},
{
  "id": "def-group",
  "level": "2",
  "url": "sec-group-basics.html#def-group",
  "type": "Definition",
  "number": "1.7",
  "title": "Group.",
  "body": "Group      A group is a pair where is a set and is a binary operation on satisfying the associative, identity, and inverse properties. For specifics, see: .  group      An abelian group is a pair where is a set and is a binary operation on satisfying the associative, identity, inverse, and commutative properties. abelian group       "
},
{
  "id": "thm-properties-of-groups",
  "level": "2",
  "url": "sec-group-basics.html#thm-properties-of-groups",
  "type": "Theorem",
  "number": "1.8",
  "title": "Properties of Groups.",
  "body": "Properties of Groups   Let be a group.  Unique Identity  The element satisfying of is unique, and we thus refer to it as the identity element of . identity element    Unique Inverses  For each , the element satisfying of is unique, and we thus refer to it as the inverse of . inverse element    Cancellation  Suppose . If then . Similarly, if we have  cancellation (groups)           Suppose there exist two elements and such that and for all . Then Thus , making the identity element unique.    For a given , if and for some and , then Thus , making inverses unique.    Suppose for some . By the , there exists some such that . Observe       "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "sec-group-basics.html#remark-1",
  "type": "Remark",
  "number": "1.9",
  "title": "",
  "body": " The property of holds in monoids (and unital magmas) as well.  "
},
{
  "id": "ex-group-examples",
  "level": "2",
  "url": "sec-group-basics.html#ex-group-examples",
  "type": "Example",
  "number": "1.10",
  "title": "Group Examples.",
  "body": "Group Examples      The trivial group is the group with a single element . trivial group       and each form an abelian group, where denotes traditional addition. The axioms of arithmetic guarantee the validity of the group axioms as well as the commutativity of the group operation. Thus all four groups are abelian.    For any positive integer , let Then is a non-abelian group under matrix multiplication known as the general linear group . general linear group      For any , let denote the . Then forms an abelian group where denotes addition modulo .      "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "sec-group-basics.html#remark-2",
  "type": "Remark",
  "number": "1.11",
  "title": "Specific General Linear Groups.",
  "body": "Specific General Linear Groups  In general, is a group for any field (whatever those are). To jump ahead and discover what those are, see: .   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "sec-group-basics.html#exercise-1",
  "type": "Exercise",
  "number": "1.12",
  "title": "Not Quite Groups.",
  "body": "Not Quite Groups     The natural numbers do not form a group with respect to addition.    The rational numbers do not form a group with respect to multiplication.     "
},
{
  "id": "ex-group-of-units",
  "level": "2",
  "url": "sec-group-basics.html#ex-group-of-units",
  "type": "Example",
  "number": "1.13",
  "title": "Groups of Units.",
  "body": "Groups of Units  group of units    Each of the following subsets form an abelian group under multiplication.   The subset of .     , , and .    For each , the subset of .      "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "sec-group-basics.html#remark-3",
  "type": "Remark",
  "number": "1.14",
  "title": "",
  "body": "  will be integral to our constructions of semidirect products in and our classifications of certain groups up to isomorphism (whatever that means). Though not strictly required for this text, knowing the structure of for various can prove helpful in many qualifying exam problems.  "
},
{
  "id": "exe-group-of-units-in-zp",
  "level": "2",
  "url": "sec-group-basics.html#exe-group-of-units-in-zp",
  "type": "Exercise",
  "number": "1.15",
  "title": "<span class=\"process-math\">\\(\\Z\/p^\\times\\)<\/span>.",
  "body": " Prove that .  "
},
{
  "id": "exe-extra-groups",
  "level": "2",
  "url": "sec-group-basics.html#exe-extra-groups",
  "type": "Exercise",
  "number": "1.16",
  "title": "Some Extra Groups.",
  "body": "Some Extra Groups    Opposite Group  Let be a multiplicative group, and define opposite group be the set equipped with the operation , where . Then is a group. Opposite groups are used in category theory to describe something called duality between algebraic structures.  opposite group     Evening the Odds  Let denote the set of even integers and denote the set of odd integers. Then is a group, whereas is not.           Since is a group and its operation is associative, we have for any elements , , in . This implies that for any elements in . Thus, associativity is satisfied in .  Let be the identity element of . In , the identity element is still because for any element in , we have , where denotes the operation in . Therefore, the identity element property is satisfied in .  Let be an element in . Since is also in , being a group implies that there exists an inverse element in such that , where is the identity element of . This implies that in as well. Therefore, every element in has an inverse in , satisfying the inverse element property.    Integer addition is associative, which means that for any three integers , and , the expression is equal to . Thus, associativity is satisfied for .  The identity element for addition is . For any even integer , adding to it does not change its parity (evenness). Hence, the identity element property is satisfied for .  For every even integer , there exists an inverse element denoted as such that . The negative of an even integer is also an even integer. Adding an even integer to its negative results in , which is the identity element. Therefore, the inverse element property is satisfied for .  The identity element for addition is . However, is not an odd integer, so the identity element property is not satisfied for .     "
},
{
  "id": "thm-group-inverses",
  "level": "2",
  "url": "sec-group-basics.html#thm-group-inverses",
  "type": "Theorem",
  "number": "1.17",
  "title": "Properties of Inverses.",
  "body": "Properties of Inverses   If is a group and , then    and               We show that both and are inverses of the element . First, recall from that . However, it is also the case that . By part (2) of we know that inverses are unique, and thus it must be the case that .    By definition, is the inverse of the element . However, we also have Thus both and are inverses of , making them equal by part (2) of .      "
},
{
  "id": "exe-big-inverses",
  "level": "2",
  "url": "sec-group-basics.html#exe-big-inverses",
  "type": "Exercise",
  "number": "1.18",
  "title": "Big 'Ole Inverses.",
  "body": "Big 'Ole Inverses  If is a group and , then .  "
},
{
  "id": "exe-general-associativity",
  "level": "2",
  "url": "sec-group-basics.html#exe-general-associativity",
  "type": "Exercise",
  "number": "1.19",
  "title": "Generalized Associative Law.",
  "body": "Generalized Associative Law generalized associative law  If an element of a monoid is contructed from a sequence of elements in this order by repeatedly inserting parenthesis and applying the operation, the element must equal and so is independent of the mode of bracketing. This is similar to general relativity, relatively speaking ('Relatively' meaning 'not very much at all' in this context).    Certainly we may assume that . If is an element constructed from in the prescribed manner, we can write where and are constructed from and respectively . If , the result follows by induction on . Otherwise we can write and : once again the result follows by induction on n.  "
},
{
  "id": "outcomes-1",
  "level": "2",
  "url": "sec-group-basics.html#outcomes-1",
  "type": "Summary",
  "number": "1.1",
  "title": "",
  "body": "   A is a set equipped with a that satisfies the properties given in . An abelian group is a group that also satisfies the .    The identity and inverse elements described in are unique. See: For inverses, we have and . See:      and are all additive abelian groups, and form multiplicative abelian groups.    "
},
{
  "id": "sec-order-power",
  "level": "1",
  "url": "sec-order-power.html",
  "type": "Section",
  "number": "1.2",
  "title": "Order and Power",
  "body": "Order and Power  Power    Having power is not nearly as important as what you choose to do with it.   Roald Dahl   Though it might seem natural to write the product using the notation , we have no notion of what that means in the world of groups. Do exponents behave the way we want them to in groups, or does something disasterous occur? Do exponents even exist? Do I ? In this section, we attempt to answer as many of these questions as is philosophically feasible.  power   Let be an element of a multiplicative group . For , the  power  of is defined recursively as follows: power     , , and ; Convenient notation, isn't it? Almost like we planned it.      when ; and     when .     If was an additive group, then we would write intead of . This would be called a multiple of instead of a power. multiple     Laws of Exponents   Let and be an element of a group . Then    and     .          Let and ; then by induction on and the definition . Multiplying on both sides by we deduce that and . Finally inversion of the equation yields . Hence the law is established in all cases.    If , it follows from (1) that . Now assume that ; then since .       Abelian Exponents  Let . The equation holds for all if and only if is abelian.    Order    Good order is the foundation of all things.   Edmund Burke   Order      In a group , the order of an element  is the least positive integer such that . If no such exists, we say has infinite order. We write for the order of . order of a group element      The order of a group  is the of the set , denoted . order of a group          Some authors use the notation or to refer to the order of a group. We won't name names, but they know who they are.   Order      in every group .     in     In the additive groups , , , and every nonzero (i.e., nonidentity) element has infinite order. Groups with this property are known as torsion-free , a concept explored in more advanced contexts.     In the additve group , the element has order , as and .      We arrive at one of the central conjectures of group theory, posed by none other than UNL's Tom \"Destroyer of Worlds\" Marley. Best of luck. For the more astute reader, you may observe that this is one of the more solvable conjectures in mathematics. This is the first problem Tom assigns every time he teaches 817 and it's become a bit of a running joke.   Marley's Conjecture  Every group of order is abelian.   Let be a group with elements, and suppose there are elements such that for some elements . Since , we must have , , and . Since has only elements and , either or . Without loss, say the former occurs. But implies and we know commutes with , and hence this is not possible. If , then and if then , both of which are impossible. Since were arbitrary, must be abelian.   Properties of Order      An element of a group has order if and only if .         If for and  , then .          Let be a group and consider an element in with order . By definition, the order of an element is the smallest positive integer such that , where is the identity element of . Since the order of is , we have . This implies that is equal to the identity element .       there or  If is a group such every non-identity element has order , then is abelian.   Element Order   Let be a group and any element.   If , then are all distinct elements of .    If , then for all integers (positive or negative) with .     .    If then .          Coming soon!    Coming soon!    Coming soon!    Let . We have for some by the We have and so, by the definition of order , it must be that        Order Hors d'oeuvre  Let be a group.   Let be an element of finite order. Show that has finite order for any integer , and in fact     Prove that for all in , holds.      The central theorem of group order, (perhaps the central theorem of group theory), , requires more machinery than we currently posess. We will get there evantually, but first, it would be useful to examine some more concrete groups and their interactions with what we have constructed thus far.      The hold in groups.    The of an element is the smallest positive integer such that . The order of a group is its cardinality.     "
},
{
  "id": "def-power",
  "level": "2",
  "url": "sec-order-power.html#def-power",
  "type": "Definition",
  "number": "1.20",
  "title": "<span class=\"process-math\">\\(n\\th\\)<\/span> power.",
  "body": "power   Let be an element of a multiplicative group . For , the  power  of is defined recursively as follows: power     , , and ; Convenient notation, isn't it? Almost like we planned it.      when ; and     when .     If was an additive group, then we would write intead of . This would be called a multiple of instead of a power. multiple    "
},
{
  "id": "thm-exponent-laws",
  "level": "2",
  "url": "sec-order-power.html#thm-exponent-laws",
  "type": "Theorem",
  "number": "1.21",
  "title": "Laws of Exponents.",
  "body": "Laws of Exponents   Let and be an element of a group . Then    and     .          Let and ; then by induction on and the definition . Multiplying on both sides by we deduce that and . Finally inversion of the equation yields . Hence the law is established in all cases.    If , it follows from (1) that . Now assume that ; then since .      "
},
{
  "id": "exe-abelian-exponents",
  "level": "2",
  "url": "sec-order-power.html#exe-abelian-exponents",
  "type": "Exercise",
  "number": "1.22",
  "title": "Abelian Exponents.",
  "body": "Abelian Exponents  Let . The equation holds for all if and only if is abelian.  "
},
{
  "id": "def-order",
  "level": "2",
  "url": "sec-order-power.html#def-order",
  "type": "Definition",
  "number": "1.23",
  "title": "Order.",
  "body": "Order      In a group , the order of an element  is the least positive integer such that . If no such exists, we say has infinite order. We write for the order of . order of a group element      The order of a group  is the of the set , denoted . order of a group        "
},
{
  "id": "ex-order",
  "level": "2",
  "url": "sec-order-power.html#ex-order",
  "type": "Example",
  "number": "1.24",
  "title": "Order.",
  "body": "Order      in every group .     in     In the additive groups , , , and every nonzero (i.e., nonidentity) element has infinite order. Groups with this property are known as torsion-free , a concept explored in more advanced contexts.     In the additve group , the element has order , as and .     "
},
{
  "id": "exe-order-4-abelian",
  "level": "2",
  "url": "sec-order-power.html#exe-order-4-abelian",
  "type": "Exercise",
  "number": "1.25",
  "title": "Marley's Conjecture.",
  "body": "Marley's Conjecture  Every group of order is abelian.   Let be a group with elements, and suppose there are elements such that for some elements . Since , we must have , , and . Since has only elements and , either or . Without loss, say the former occurs. But implies and we know commutes with , and hence this is not possible. If , then and if then , both of which are impossible. Since were arbitrary, must be abelian.  "
},
{
  "id": "thm-order-properties",
  "level": "2",
  "url": "sec-order-power.html#thm-order-properties",
  "type": "Theorem",
  "number": "1.26",
  "title": "Properties of Order.",
  "body": "Properties of Order      An element of a group has order if and only if .         If for and  , then .          Let be a group and consider an element in with order . By definition, the order of an element is the smallest positive integer such that , where is the identity element of . Since the order of is , we have . This implies that is equal to the identity element .      "
},
{
  "id": "exe-every-element-order-2",
  "level": "2",
  "url": "sec-order-power.html#exe-every-element-order-2",
  "type": "Exercise",
  "number": "1.27",
  "title": "<span class=\"process-math\">\\(b\\)<\/span> there or <span class=\"process-math\">\\(b^2=e\\)<\/span>.",
  "body": "there or  If is a group such every non-identity element has order , then is abelian.  "
},
{
  "id": "thm-element-order",
  "level": "2",
  "url": "sec-order-power.html#thm-element-order",
  "type": "Theorem",
  "number": "1.28",
  "title": "Element Order.",
  "body": "Element Order   Let be a group and any element.   If , then are all distinct elements of .    If , then for all integers (positive or negative) with .     .    If then .          Coming soon!    Coming soon!    Coming soon!    Let . We have for some by the We have and so, by the definition of order , it must be that       "
},
{
  "id": "exe-order-and-gcd",
  "level": "2",
  "url": "sec-order-power.html#exe-order-and-gcd",
  "type": "Exercise",
  "number": "1.29",
  "title": "Order Hors d'oeuvre.",
  "body": "Order Hors d'oeuvre  Let be a group.   Let be an element of finite order. Show that has finite order for any integer , and in fact     Prove that for all in , holds.     "
},
{
  "id": "outcomes-2",
  "level": "2",
  "url": "sec-order-power.html#outcomes-2",
  "type": "Summary",
  "number": "1.2",
  "title": "",
  "body": "   The hold in groups.    The of an element is the smallest positive integer such that . The order of a group is its cardinality.    "
},
{
  "id": "sec-common-groups",
  "level": "1",
  "url": "sec-common-groups.html",
  "type": "Section",
  "number": "1.3",
  "title": "Common Groups",
  "body": "Common Groups   We examine two of the most commonly encountered groups in all of algebra: the dihedral group and the symmetric group. The quaternions are also here.    Dihedral Groups    Reflection is one of the most underused yet powerful tools for success.   Richard Carlson   Isometry and Symmetry   For any integer , let denote a regular -gon regular -gon . An isometry isometry of the plane is a function that is a bijection and preserves the Euclidean distance for any ). A symmetry symmetry of is an isometry that maps to itself.     By the latter I don't mean that fixes each of the points of , but rather that , that is every point of is mapped to a (possibly different) point of and every point of is the image of some point in via .   There are three natural types of isometry in    rotations about a point,    reflections in a line,    and translations: in the latter the point is moved to for some fixed .   It can be shown that every isometry is a rotation, a translation, a reflection, or the product of a reflection and a translation.  Composition of Symmetries  The of two symmetries of is again a symmetry of .   Let be the composition of and , where denotes composition. Let's take an arbitrary point on the object. When we apply the symmetry to , it is mapped to a new point, let's call it . Since is a symmetry, is still on the object. Next, when we apply the symmetry to , it is mapped to a new point, let's call it . Again, since is a symmetry, is still on the object. Therefore, the composition maps the point on the object to the point , which is also on the object. Hence, the composition of symmetries is again a symmetry.   Dihedral Group   The dihedral group  dihedral group is the set of symmetries of the regular -gon equipped with the binary operation given by composition.     Rotations and Reflections  Assume that the regular -gon is drawn in the plane with its center at the origin and one vertex on the axis.   If denotes rotation about the origin by radians counter-clockwise, then . It's inverse is rotation by clock-wise. rotation     For another example, for any line of symmetry of , reflection about that line gives an element of . By our convention for how to draw , the -axis is a line of symmetry for , and we let denote reflection about the -axis. reflection       Elements of  Elements of . Quiver     We see and , which may make some intuitive sense. The fact that is a reflection and hence that may be slightly less aparent.   Order of      Every element in can be written as or for .            We will use some geometric notions freely without complete justification. For example, we use that if an isometry of fixes two points and , then it is either the identity element or it is reflection about the line . We also use that every element of maps the origin to itself (since the origin is the center of mass of ). Finally, we use that every isometry of is either orientation preserving or orientation reversing .  Label the vertices of as , with being the vertex located on the positive -axis, being the vertex adjacent to in the counter-clockwise direction, etc. We have , , etc., and so . Moreover any isometry must send a vertex to a vertex because the vertices are the points on at largest distance from the origin.  Let be an arbitrary symmetry of . Then for some . Then the element fixes and the origin, and hence either or from the discussion above. We get that or , proving the first assertion.  Since , we see that if for , then . We have for any since the former is orientation reversing and the latter is orientation preserving. If for , then upon multiplying on the left of we get .     Symmetric Groups    Symmetry is overrated. Overrated is symmetry.   Larry Wall   Let's introduce another very important example: symmetric groups.  Permutations   A permutation permutation of a set is a bijective function . The set of all permutations of a set is denoted . permutation group       Symmetric Group   For any , the symmetric group symmetric group is the set equipped with the composition of functions as its binary operation.     Order of  Prove .   To count the number of permutations in , we can consider the process of constructing a permutation step by step.   For the first element, we have choices. We can choose any of the elements as the image of the first element.    For the second element, we have choices. After choosing the image of the first element, we have remaining elements to choose from for the image of the second element.    Continuing this process, for the third element, we have choices, for the fourth element we have choices, and so on.    Finally, for the last element, we have only one choice remaining.   The total number of permutations is obtained by multiplying the number of choices at each step. Hence, the total number of permutations in is given by , which is equal to . Therefore, the order of the symmetric group is .   Cycles and Transpositions   If are distinct integers between and , then denotes the element of that satisfies for . Such a permutation is called a cycle or an -cycle if we want to emphasize its length. A -cycle is often called a transposition . cycle  transposition     Cycle Example  For example, , regarded as an element of sends to , to and to , and it fixes . (Note that the value of in cycle notation is sometime ambiguous.)   -Cycles in  Determine the number of -cycles in .    Note that distinct lists of integers represent the same cycle if they are cyclical rearrangements of each other, e.g., . However, .   We compose cycles the same way we compose functions.  Composing Cycles  Consider This equation might lead you to the false belief that every element of is a cycle. This is not true — for example, the product cannot be written as a single cycle. What is true is that every element of is uniquely (up to ordering) the product of disjoint cycles. We'll prove that soon in .   Disjoint Commutes   Disjoint cycles commute, disjoint cycles that is, if , and then .    Let's consider two disjoint cycles, denoted as and , where 's and 's are distinct elements. Let's analyze the composition : When we apply the composition to an element , we have: Similarly, when we apply the composition to an element , we have: From these calculations, we can observe that the composition maps each element to (if ), and it maps to . Similarly, the composition maps each element to (if ), and it maps to . Now, let's consider the composition and evaluate its effect on the elements ai and am:  Comparing these results with the previous composition, we see that the effects on and are the same in both compositions. This implies that the compositions and are identical. Therefore, we have shown that disjoint cycles commute, meaning that the order in which they are composed does not affect the final result.    While sufficent, this is not a necessary condition.  Non-Disjoint Commutes  Find elements that commute but are not disjoint.   Cycle Decompostion      Each can be written as a product (composition) of disjoint cycles cycle decompostion , and such a factorization is unique up to the ordering of the factors.    Each can be written a product of transpositions.         For the uniqueness part of statement (1) in one needs to establish a convention regarding -cycles, that is one needs to stipulate either that the -cycles will not be recorded (which gives the shortest such factorization) or that all the -cycles will be recorded (which gives the longest such factorization, but also the only one that makes it clear what the number is).   Now that we know that every permutation can be written as a product of transpositions, we can utilize this to gain insight into many aspects of the group structure, such as the order of elements.  Permutation Order   The order of a permutation is the least common multiple of the lengths of the cycles it is a product of.  In particular, every transposition is its own inverse and the order of a -cycle in is .    Coming soon!    We can also categorize elements of permutation groups by the number of transpositions it is a product of.  Even and Odd Permutaitons   A permutation is even even permutation is if is the product of an even number of transpositions, otherwise it is odd odd permutation .    Even and Odd Properties      A -cycle is even if and only if is odd.    Products of even permutations are even, products of odd permutations are even, products of even and odd permutations are odd.    The identity permutation in is even, but not odd.    No permutation in is both even and odd.       Alternating Group   The alternating group alternating group  is the subset of all even cycles of .     Order of  Prove .   For an element to be in , it must be an even permutation. This means it can be expressed as a product of an even number of transpositions. Each transposition in the product swaps two elements. There are choices for the first element, and after fixing the first element, there are choices for the second element. This gives us choices for the first transposition. For the second transposition, there are choices for the first element and choices for the second element. Continuing this process, we have choices for the remaining transpositions. In total, the number of even permutations (elements in ) is given by , which is equal to . However, we have counted each even permutation twice because we can write a given even permutation as a product in different orders. For example, is the same as . Therefore, we divide the total number of even permutations by to remove the duplicate counting. Hence, the order of the alternating group is .    The Quaternions    Quaternions...though beautifully ingenious, have been an unmixed evil to those who have touched them in any way.   William Thomson   Quaternions   The quaternion group quaternion group  is a set with elements satisfying the following relations: is the identity element and      The quaternion group arises in the study of rotations in three dimensions. It has important applications in computer graphics and computer vision, as well as in physics and algebra.  Heinous Commutes  Provide explicit examples to show , and are not abelian groups when .   There isn't much for us to do with right now, but you'd be surprised by the unusual places this group manages to crop up.      The is the group of reflections and rotations of a regular polygon. Every element in can be written as a product of rotations and reflections . See: and .     The  is set of all of a set with elements. The order of is . See: .     Permutations are either even or odd; the is the set of even permutations. The order of is . See: .      are special permutations. Every cycle can be written as a product of transpositions. See: , though we don't have the tools to prove this explicitly just yet.     The exist.     "
},
{
  "id": "def-iso-and-sym",
  "level": "2",
  "url": "sec-common-groups.html#def-iso-and-sym",
  "type": "Definition",
  "number": "1.30",
  "title": "Isometry and Symmetry.",
  "body": "Isometry and Symmetry   For any integer , let denote a regular -gon regular -gon . An isometry isometry of the plane is a function that is a bijection and preserves the Euclidean distance for any ). A symmetry symmetry of is an isometry that maps to itself.   "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "sec-common-groups.html#remark-4",
  "type": "Remark",
  "number": "1.31",
  "title": "",
  "body": " By the latter I don't mean that fixes each of the points of , but rather that , that is every point of is mapped to a (possibly different) point of and every point of is the image of some point in via .  "
},
{
  "id": "exe-symmetry-compostion",
  "level": "2",
  "url": "sec-common-groups.html#exe-symmetry-compostion",
  "type": "Exercise",
  "number": "1.32",
  "title": "Composition of Symmetries.",
  "body": "Composition of Symmetries  The of two symmetries of is again a symmetry of .   Let be the composition of and , where denotes composition. Let's take an arbitrary point on the object. When we apply the symmetry to , it is mapped to a new point, let's call it . Since is a symmetry, is still on the object. Next, when we apply the symmetry to , it is mapped to a new point, let's call it . Again, since is a symmetry, is still on the object. Therefore, the composition maps the point on the object to the point , which is also on the object. Hence, the composition of symmetries is again a symmetry.  "
},
{
  "id": "def-d2n",
  "level": "2",
  "url": "sec-common-groups.html#def-d2n",
  "type": "Definition",
  "number": "1.33",
  "title": "Dihedral Group.",
  "body": "Dihedral Group   The dihedral group  dihedral group is the set of symmetries of the regular -gon equipped with the binary operation given by composition.    "
},
{
  "id": "ex-d2n-elements",
  "level": "2",
  "url": "sec-common-groups.html#ex-d2n-elements",
  "type": "Example",
  "number": "1.34",
  "title": "Rotations and Reflections.",
  "body": "Rotations and Reflections  Assume that the regular -gon is drawn in the plane with its center at the origin and one vertex on the axis.   If denotes rotation about the origin by radians counter-clockwise, then . It's inverse is rotation by clock-wise. rotation     For another example, for any line of symmetry of , reflection about that line gives an element of . By our convention for how to draw , the -axis is a line of symmetry for , and we let denote reflection about the -axis. reflection      "
},
{
  "id": "figure-d4",
  "level": "2",
  "url": "sec-common-groups.html#figure-d4",
  "type": "Figure",
  "number": "1.35",
  "title": "Elements of <span class=\"process-math\">\\(D_4\\)<\/span>",
  "body": "Elements of  Elements of . Quiver   "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-common-groups.html#remark-5",
  "type": "Remark",
  "number": "1.36",
  "title": "",
  "body": " We see and , which may make some intuitive sense. The fact that is a reflection and hence that may be slightly less aparent.  "
},
{
  "id": "thm-d2n-order",
  "level": "2",
  "url": "sec-common-groups.html#thm-d2n-order",
  "type": "Proposition",
  "number": "1.37",
  "title": "Order of <span class=\"process-math\">\\(D_{2n}\\)<\/span>.",
  "body": "Order of      Every element in can be written as or for .            We will use some geometric notions freely without complete justification. For example, we use that if an isometry of fixes two points and , then it is either the identity element or it is reflection about the line . We also use that every element of maps the origin to itself (since the origin is the center of mass of ). Finally, we use that every isometry of is either orientation preserving or orientation reversing .  Label the vertices of as , with being the vertex located on the positive -axis, being the vertex adjacent to in the counter-clockwise direction, etc. We have , , etc., and so . Moreover any isometry must send a vertex to a vertex because the vertices are the points on at largest distance from the origin.  Let be an arbitrary symmetry of . Then for some . Then the element fixes and the origin, and hence either or from the discussion above. We get that or , proving the first assertion.  Since , we see that if for , then . We have for any since the former is orientation reversing and the latter is orientation preserving. If for , then upon multiplying on the left of we get .   "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "sec-common-groups.html#def-permutation",
  "type": "Definition",
  "number": "1.38",
  "title": "Permutations.",
  "body": "Permutations   A permutation permutation of a set is a bijective function . The set of all permutations of a set is denoted . permutation group      "
},
{
  "id": "def-symmetric-group",
  "level": "2",
  "url": "sec-common-groups.html#def-symmetric-group",
  "type": "Definition",
  "number": "1.39",
  "title": "Symmetric Group <span class=\"process-math\">\\(S_n\\)<\/span>.",
  "body": "Symmetric Group   For any , the symmetric group symmetric group is the set equipped with the composition of functions as its binary operation.    "
},
{
  "id": "exe-sn-order",
  "level": "2",
  "url": "sec-common-groups.html#exe-sn-order",
  "type": "Exercise",
  "number": "1.40",
  "title": "Order of <span class=\"process-math\">\\(S_n\\)<\/span>.",
  "body": "Order of  Prove .   To count the number of permutations in , we can consider the process of constructing a permutation step by step.   For the first element, we have choices. We can choose any of the elements as the image of the first element.    For the second element, we have choices. After choosing the image of the first element, we have remaining elements to choose from for the image of the second element.    Continuing this process, for the third element, we have choices, for the fourth element we have choices, and so on.    Finally, for the last element, we have only one choice remaining.   The total number of permutations is obtained by multiplying the number of choices at each step. Hence, the total number of permutations in is given by , which is equal to . Therefore, the order of the symmetric group is .  "
},
{
  "id": "def-cycle",
  "level": "2",
  "url": "sec-common-groups.html#def-cycle",
  "type": "Definition",
  "number": "1.41",
  "title": "Cycles and Transpositions.",
  "body": "Cycles and Transpositions   If are distinct integers between and , then denotes the element of that satisfies for . Such a permutation is called a cycle or an -cycle if we want to emphasize its length. A -cycle is often called a transposition . cycle  transposition    "
},
{
  "id": "ex-cycle",
  "level": "2",
  "url": "sec-common-groups.html#ex-cycle",
  "type": "Example",
  "number": "1.42",
  "title": "Cycle Example.",
  "body": "Cycle Example  For example, , regarded as an element of sends to , to and to , and it fixes . (Note that the value of in cycle notation is sometime ambiguous.)  "
},
{
  "id": "exe-1-cycles",
  "level": "2",
  "url": "sec-common-groups.html#exe-1-cycles",
  "type": "Exercise",
  "number": "1.43",
  "title": "<span class=\"process-math\">\\(1\\)<\/span>-Cycles in <span class=\"process-math\">\\(S_n\\)<\/span>.",
  "body": "-Cycles in  Determine the number of -cycles in .  "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-common-groups.html#remark-6",
  "type": "Remark",
  "number": "1.44",
  "title": "",
  "body": " Note that distinct lists of integers represent the same cycle if they are cyclical rearrangements of each other, e.g., . However, .  "
},
{
  "id": "exe-composing-cycles",
  "level": "2",
  "url": "sec-common-groups.html#exe-composing-cycles",
  "type": "Example",
  "number": "1.45",
  "title": "Composing Cycles.",
  "body": "Composing Cycles  Consider This equation might lead you to the false belief that every element of is a cycle. This is not true — for example, the product cannot be written as a single cycle. What is true is that every element of is uniquely (up to ordering) the product of disjoint cycles. We'll prove that soon in .  "
},
{
  "id": "prop-disjoint-cycles-commute",
  "level": "2",
  "url": "sec-common-groups.html#prop-disjoint-cycles-commute",
  "type": "Proposition",
  "number": "1.46",
  "title": "Disjoint Commutes.",
  "body": "Disjoint Commutes   Disjoint cycles commute, disjoint cycles that is, if , and then .    Let's consider two disjoint cycles, denoted as and , where 's and 's are distinct elements. Let's analyze the composition : When we apply the composition to an element , we have: Similarly, when we apply the composition to an element , we have: From these calculations, we can observe that the composition maps each element to (if ), and it maps to . Similarly, the composition maps each element to (if ), and it maps to . Now, let's consider the composition and evaluate its effect on the elements ai and am:  Comparing these results with the previous composition, we see that the effects on and are the same in both compositions. This implies that the compositions and are identical. Therefore, we have shown that disjoint cycles commute, meaning that the order in which they are composed does not affect the final result.   "
},
{
  "id": "exe-non-disjoint-commutes",
  "level": "2",
  "url": "sec-common-groups.html#exe-non-disjoint-commutes",
  "type": "Exercise",
  "number": "1.47",
  "title": "Non-Disjoint Commutes.",
  "body": "Non-Disjoint Commutes  Find elements that commute but are not disjoint.  "
},
{
  "id": "thm-cycledecomp",
  "level": "2",
  "url": "sec-common-groups.html#thm-cycledecomp",
  "type": "Theorem",
  "number": "1.48",
  "title": "Cycle Decompostion.",
  "body": "Cycle Decompostion      Each can be written as a product (composition) of disjoint cycles cycle decompostion , and such a factorization is unique up to the ordering of the factors.    Each can be written a product of transpositions.       "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "sec-common-groups.html#remark-7",
  "type": "Remark",
  "number": "1.49",
  "title": "",
  "body": " For the uniqueness part of statement (1) in one needs to establish a convention regarding -cycles, that is one needs to stipulate either that the -cycles will not be recorded (which gives the shortest such factorization) or that all the -cycles will be recorded (which gives the longest such factorization, but also the only one that makes it clear what the number is).  "
},
{
  "id": "prop-permutation-order",
  "level": "2",
  "url": "sec-common-groups.html#prop-permutation-order",
  "type": "Proposition",
  "number": "1.50",
  "title": "Permutation Order.",
  "body": "Permutation Order   The order of a permutation is the least common multiple of the lengths of the cycles it is a product of.  In particular, every transposition is its own inverse and the order of a -cycle in is .    Coming soon!   "
},
{
  "id": "def-even-odd-permutation",
  "level": "2",
  "url": "sec-common-groups.html#def-even-odd-permutation",
  "type": "Definition",
  "number": "1.51",
  "title": "Even and Odd Permutaitons.",
  "body": "Even and Odd Permutaitons   A permutation is even even permutation is if is the product of an even number of transpositions, otherwise it is odd odd permutation .   "
},
{
  "id": "prop-even-odd-properties",
  "level": "2",
  "url": "sec-common-groups.html#prop-even-odd-properties",
  "type": "Proposition",
  "number": "1.52",
  "title": "Even and Odd Properties.",
  "body": "Even and Odd Properties      A -cycle is even if and only if is odd.    Products of even permutations are even, products of odd permutations are even, products of even and odd permutations are odd.    The identity permutation in is even, but not odd.    No permutation in is both even and odd.      "
},
{
  "id": "def-alternating-group",
  "level": "2",
  "url": "sec-common-groups.html#def-alternating-group",
  "type": "Definition",
  "number": "1.53",
  "title": "Alternating Group.",
  "body": "Alternating Group   The alternating group alternating group  is the subset of all even cycles of .    "
},
{
  "id": "exe-an-order",
  "level": "2",
  "url": "sec-common-groups.html#exe-an-order",
  "type": "Exercise",
  "number": "1.54",
  "title": "Order of <span class=\"process-math\">\\(A_n\\)<\/span>.",
  "body": "Order of  Prove .   For an element to be in , it must be an even permutation. This means it can be expressed as a product of an even number of transpositions. Each transposition in the product swaps two elements. There are choices for the first element, and after fixing the first element, there are choices for the second element. This gives us choices for the first transposition. For the second transposition, there are choices for the first element and choices for the second element. Continuing this process, we have choices for the remaining transpositions. In total, the number of even permutations (elements in ) is given by , which is equal to . However, we have counted each even permutation twice because we can write a given even permutation as a product in different orders. For example, is the same as . Therefore, we divide the total number of even permutations by to remove the duplicate counting. Hence, the order of the alternating group is .  "
},
{
  "id": "def-quaternions",
  "level": "2",
  "url": "sec-common-groups.html#def-quaternions",
  "type": "Definition",
  "number": "1.55",
  "title": "Quaternions.",
  "body": "Quaternions   The quaternion group quaternion group  is a set with elements satisfying the following relations: is the identity element and     "
},
{
  "id": "exe-heinous-commutes",
  "level": "2",
  "url": "sec-common-groups.html#exe-heinous-commutes",
  "type": "Exercise",
  "number": "1.56",
  "title": "Heinous Commutes.",
  "body": "Heinous Commutes  Provide explicit examples to show , and are not abelian groups when .  "
},
{
  "id": "outcomes-3",
  "level": "2",
  "url": "sec-common-groups.html#outcomes-3",
  "type": "Summary",
  "number": "1.3",
  "title": "",
  "body": "   The is the group of reflections and rotations of a regular polygon. Every element in can be written as a product of rotations and reflections . See: and .     The  is set of all of a set with elements. The order of is . See: .     Permutations are either even or odd; the is the set of even permutations. The order of is . See: .      are special permutations. Every cycle can be written as a product of transpositions. See: , though we don't have the tools to prove this explicitly just yet.     The exist.    "
},
{
  "id": "sec-gphoms",
  "level": "1",
  "url": "sec-gphoms.html",
  "type": "Section",
  "number": "1.4",
  "title": "Group Homomorphisms",
  "body": "Group Homomorphisms  Homomorphism? I Barely Know 'em!    In the end, the character of a civilization is encased in its structures.   Frank Gehry   Group Homomorphism   If and are groups, a homomorphism group homomorphism from is is a function such that , where and denote the multiplication rules for and , respectively. the common symbols we use to denote homomorphisms      We use to denote an arbitrary homomorphism instead of to differentiate between homormorphisms and ordinary functions.  Some folk use for homomorphisms as well as functions that are not homomorphisms. They should be avoided and probably smell weird.   Intuitively, a group homomorphism preserves the algebraic structure of the group, while allowing us to compare and relate different groups. In this way, group homomorphisms allow us to study the properties of groups by comparing them to other groups that we already understand well.  Homormophism Examples     The identity map is a group homomorphism for any group , this is known as the trivial homomorphism  trivial homomorphism .    The zero map is a group homomorphism for any group .    The sign homomorphism  that sends even permuations to and odd permutations to is a homomorphism. sign homomorphism     The exponential map exponential map  is a homomorphism.    The natural log map natural log map  is a homomorphism.    For any positive integer , the map determinant map determinant map  is a group homomorphism.      Specifically, homomorphisms will preserve the additive structure, such as the identity element and inverse elements.  Homomorphism Preservations   If is a homomorphism of groups, then    and     .       For the first, and now multiply by . For the second, implies .    Compositions of Homomorphisms   If and are group homomorphisms, the composition is a group homomorphism.    Sweet   Let and be abelian groups. Then the set of all group homomorphisms from to is itself an abelian group.     Kernel   Let be a homomorphism of groups. The kernel kernel of a group homomorphism of is the set  (groups)     Injective and Surjective Homomorphisms      A group homomorphism is injective if and only if .    A group homomorphism is surjective if and only if .           is immediate from the definitions (since for all homomorphisms ). If and then and thus which implies .    This is identical to ; the homomorphism aspect adds nothing of interest. Though one could argue that adding nothing of interest is interesting, causing it to add something of interest.        Homomorphisms and Order  If is a homomorphism of groups and is finte, then .    Isomorphism? I Know 'em!    The test of a first-rate intelligence is the ability to hold two opposed ideas in mind at the same time and still retain the ability to function.   F. Scott Fitzgerald   Group Ismorphism   A homomorphism is called an isomorphism isomorphism if there exists a homomorphism such that and .  If is an isomorphism, and are called isomorphic isomorphic , written . Isomorphic     Intuitively, a group isomorphism establishes a one-to-one correspondence between the elements of two groups, such that they have exactly the same algebraic structure. This means that the groups are essentially the same, up to a relabeling of their elements.  Equivalent Isomorphism Characterization   Suppose is a group homomorphism. Then an isomorphism if and only if is bijective (one-to-one and onto).    We start by recalling that a function between two sets is bijective if and only if there is a function such that and .  The is thus immediate. For the direction, if is bijective homomorphism, then it certainly has a set-theoretic two-sided inverse . But we need to show is actually a homomorphism: for we have . Since is one-to-one, .     Moving forward, we will essentially treat as the de-facto definition of a group isomorphism. Rather than end every proof with a reference to , we will instead enshrine its monumental achievements of within this remark. To alleviate some of the corresponding guilt asociated with this decision I am referencing as many times as possible, as is important and should not be forgotten.   Isomorphism Examples     The identity map is a group isomomorphism for any group .     , where is as defined in .         The exponential and natural logarithm maps from are inverses, making them isomorphisms as well.      Opposite Day  Let be a group and the of . Then .   Coming soon!   Isomorphism Invariants   Let and be groups. If is an isomorphism, then the following hold: isomorphism invariant            for all and for all      is abelian if and only if is abelian            Something's Missing  Justify why the following pairs of groups are not isomorphic.   and    and    and    and      Coming soon!   There Can Only Be One...  All trivial groups are (canonically) isomorphic.    Hence, we usually speak of the trivial group.   Isomorphisms form Equivalence Relation           If , then     If and , then        Coming soon!     The quotation marks in the title of this result are importnat. Equivalenve relations as we know them are only defined on sets , but there is no set of groups. This dips into the realm of Russel's Paradox and higher category theory, which we will steer clear of for the time being.    Automorphism? I'm Am 'em!    Self preservation is the first law of nature.   Samuel Butler  Group Automorphism   Let be a group. An isomorphism is called an automorphism  automorphism of .     In we saw that the identity map is a group isomomorphism from a group to itself, making an automorphism. This may prove (pun intended) useful in the following proposition.   Automorphism Group   The set of automorphisms of a group is called the automorphism group automorphism group of and denoted .     Let's verify that this group is indeed what it claims to be.  The Automorphism Group   The set of automorphisms of , denoted , is a group under composition.    Coming soon!    Complex Conjugation Automorphism  Prove that the function given by is an automorphism.   Coming soon!        Coming soon!    Notice that we have actually shown that the composition of automorphisms is an automorphism, both through (as automorphisms are isomorphisms) and (as groups are closed under their operation)   Inner Automorphism   Let be a group and . The function defined by is called the inner automorphism inner automorphism of induced by . The set of inner automorphisms inner automorphism group of is denoted .     Let's make sure this is indeed an automorphism to avoid any potential awkwardness down the line.  Conjugation Automorphism   Let be a group and . Then for all .    Notice , proving that is a homomorhism from to itself.  Observe that for any , we have since . Also, , which is obvious. It follows that and . This proves has a two-sided inveerse and hence is an isomorphism. In fact, it shows that .     There is indeed a notion of outer automorphisms as well, though we currently lack the tools to define them rigorously.       A is a function between groups that preserves certain algebraic structures, such as the operation, identites, and inverses. For the first, see: . For the second and third, see: The set of elements mapped to the identity by a homomorphism is known as its .    A is a bijective homomorphism, and a is an isomorphism from a group to itself. The structures preserved by an isomorphism are known as .    The set of automorphisms of a group forms a group itself: the of the group. See: Specifically, the will prove very important later.    Compositions of homomorphisms, isomorphisms, and automophisms are again homomorphisms, isomorphisms, and automophisms, respectively.     "
},
{
  "id": "def-ghom",
  "level": "2",
  "url": "sec-gphoms.html#def-ghom",
  "type": "Definition",
  "number": "1.57",
  "title": "Group Homomorphism.",
  "body": "Group Homomorphism   If and are groups, a homomorphism group homomorphism from is is a function such that , where and denote the multiplication rules for and , respectively. the common symbols we use to denote homomorphisms    "
},
{
  "id": "ex-group-homom-examples",
  "level": "2",
  "url": "sec-gphoms.html#ex-group-homom-examples",
  "type": "Example",
  "number": "1.58",
  "title": "Homormophism Examples.",
  "body": "Homormophism Examples     The identity map is a group homomorphism for any group , this is known as the trivial homomorphism  trivial homomorphism .    The zero map is a group homomorphism for any group .    The sign homomorphism  that sends even permuations to and odd permutations to is a homomorphism. sign homomorphism     The exponential map exponential map  is a homomorphism.    The natural log map natural log map  is a homomorphism.    For any positive integer , the map determinant map determinant map  is a group homomorphism.     "
},
{
  "id": "thm-grphomom-preservations",
  "level": "2",
  "url": "sec-gphoms.html#thm-grphomom-preservations",
  "type": "Theorem",
  "number": "1.59",
  "title": "Homomorphism Preservations.",
  "body": "Homomorphism Preservations   If is a homomorphism of groups, then    and     .       For the first, and now multiply by . For the second, implies .   "
},
{
  "id": "thm-ghom-composition",
  "level": "2",
  "url": "sec-gphoms.html#thm-ghom-composition",
  "type": "Theorem",
  "number": "1.60",
  "title": "Compositions of Homomorphisms.",
  "body": "Compositions of Homomorphisms   If and are group homomorphisms, the composition is a group homomorphism.   "
},
{
  "id": "exe-group-hom",
  "level": "2",
  "url": "sec-gphoms.html#exe-group-hom",
  "type": "Exploration",
  "number": "1.1",
  "title": "<span class=\"process-math\">\\(\\Hom\\)<\/span> Sweet <span class=\"process-math\">\\(\\Hom\\)<\/span>.",
  "body": "Sweet   Let and be abelian groups. Then the set of all group homomorphisms from to is itself an abelian group.    "
},
{
  "id": "def-group-kernel",
  "level": "2",
  "url": "sec-gphoms.html#def-group-kernel",
  "type": "Definition",
  "number": "1.61",
  "title": "Kernel.",
  "body": "Kernel   Let be a homomorphism of groups. The kernel kernel of a group homomorphism of is the set  (groups)    "
},
{
  "id": "thm-inj-surj-ghom",
  "level": "2",
  "url": "sec-gphoms.html#thm-inj-surj-ghom",
  "type": "Theorem",
  "number": "1.62",
  "title": "Injective and Surjective Homomorphisms.",
  "body": "Injective and Surjective Homomorphisms      A group homomorphism is injective if and only if .    A group homomorphism is surjective if and only if .           is immediate from the definitions (since for all homomorphisms ). If and then and thus which implies .    This is identical to ; the homomorphism aspect adds nothing of interest. Though one could argue that adding nothing of interest is interesting, causing it to add something of interest.       "
},
{
  "id": "exe-order-preservation",
  "level": "2",
  "url": "sec-gphoms.html#exe-order-preservation",
  "type": "Exercise",
  "number": "1.63",
  "title": "Homomorphisms and Order.",
  "body": "Homomorphisms and Order  If is a homomorphism of groups and is finte, then .  "
},
{
  "id": "def-gpiso",
  "level": "2",
  "url": "sec-gphoms.html#def-gpiso",
  "type": "Definition",
  "number": "1.64",
  "title": "Group Ismorphism.",
  "body": "Group Ismorphism   A homomorphism is called an isomorphism isomorphism if there exists a homomorphism such that and .  If is an isomorphism, and are called isomorphic isomorphic , written . Isomorphic    "
},
{
  "id": "thm-iso-def",
  "level": "2",
  "url": "sec-gphoms.html#thm-iso-def",
  "type": "Theorem",
  "number": "1.65",
  "title": "Equivalent Isomorphism Characterization.",
  "body": "Equivalent Isomorphism Characterization   Suppose is a group homomorphism. Then an isomorphism if and only if is bijective (one-to-one and onto).    We start by recalling that a function between two sets is bijective if and only if there is a function such that and .  The is thus immediate. For the direction, if is bijective homomorphism, then it certainly has a set-theoretic two-sided inverse . But we need to show is actually a homomorphism: for we have . Since is one-to-one, .   "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "sec-gphoms.html#remark-8",
  "type": "Remark",
  "number": "1.66",
  "title": "",
  "body": " Moving forward, we will essentially treat as the de-facto definition of a group isomorphism. Rather than end every proof with a reference to , we will instead enshrine its monumental achievements of within this remark. To alleviate some of the corresponding guilt asociated with this decision I am referencing as many times as possible, as is important and should not be forgotten.  "
},
{
  "id": "ex-group-iso-examples",
  "level": "2",
  "url": "sec-gphoms.html#ex-group-iso-examples",
  "type": "Example",
  "number": "1.67",
  "title": "Isomorphism Examples.",
  "body": "Isomorphism Examples     The identity map is a group isomomorphism for any group .     , where is as defined in .         The exponential and natural logarithm maps from are inverses, making them isomorphisms as well.     "
},
{
  "id": "exe-isomorphic-to-opposite",
  "level": "2",
  "url": "sec-gphoms.html#exe-isomorphic-to-opposite",
  "type": "Exercise",
  "number": "1.68",
  "title": "Opposite Day.",
  "body": "Opposite Day  Let be a group and the of . Then .   Coming soon!  "
},
{
  "id": "thm-iso-inv",
  "level": "2",
  "url": "sec-gphoms.html#thm-iso-inv",
  "type": "Theorem",
  "number": "1.69",
  "title": "Isomorphism Invariants.",
  "body": "Isomorphism Invariants   Let and be groups. If is an isomorphism, then the following hold: isomorphism invariant            for all and for all      is abelian if and only if is abelian           "
},
{
  "id": "exe-not-isomorphic",
  "level": "2",
  "url": "sec-gphoms.html#exe-not-isomorphic",
  "type": "Exercise",
  "number": "1.70",
  "title": "Something's Missing.",
  "body": "Something's Missing  Justify why the following pairs of groups are not isomorphic.   and    and    and    and      Coming soon!  "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "sec-gphoms.html#exercise-19",
  "type": "Exercise",
  "number": "1.71",
  "title": "There Can Only Be One....",
  "body": "There Can Only Be One...  All trivial groups are (canonically) isomorphic.  "
},
{
  "id": "thm-iso-equivalence-relation",
  "level": "2",
  "url": "sec-gphoms.html#thm-iso-equivalence-relation",
  "type": "Theorem",
  "number": "1.72",
  "title": "Isomorphisms form “Equivalence” Relation.",
  "body": "Isomorphisms form Equivalence Relation           If , then     If and , then        Coming soon!   "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "sec-gphoms.html#remark-9",
  "type": "Remark",
  "number": "1.73",
  "title": "",
  "body": " The quotation marks in the title of this result are importnat. Equivalenve relations as we know them are only defined on sets , but there is no set of groups. This dips into the realm of Russel's Paradox and higher category theory, which we will steer clear of for the time being.  "
},
{
  "id": "def-gp-automorphism",
  "level": "2",
  "url": "sec-gphoms.html#def-gp-automorphism",
  "type": "Definition",
  "number": "1.74",
  "title": "Group Automorphism.",
  "body": "Group Automorphism   Let be a group. An isomorphism is called an automorphism  automorphism of .   "
},
{
  "id": "ex-identity-automorphism",
  "level": "2",
  "url": "sec-gphoms.html#ex-identity-automorphism",
  "type": "Example",
  "number": "1.75",
  "title": "",
  "body": " In we saw that the identity map is a group isomomorphism from a group to itself, making an automorphism. This may prove (pun intended) useful in the following proposition.  "
},
{
  "id": "def-gp-aut",
  "level": "2",
  "url": "sec-gphoms.html#def-gp-aut",
  "type": "Definition",
  "number": "1.76",
  "title": "Automorphism Group.",
  "body": "Automorphism Group   The set of automorphisms of a group is called the automorphism group automorphism group of and denoted .    "
},
{
  "id": "prop-aut-is-group",
  "level": "2",
  "url": "sec-gphoms.html#prop-aut-is-group",
  "type": "Proposition",
  "number": "1.77",
  "title": "The Automorphism Group.",
  "body": "The Automorphism Group   The set of automorphisms of , denoted , is a group under composition.    Coming soon!   "
},
{
  "id": "exe-complex-conjugation-automorphism",
  "level": "2",
  "url": "sec-gphoms.html#exe-complex-conjugation-automorphism",
  "type": "Exercise",
  "number": "1.78",
  "title": "Complex Conjugation Automorphism.",
  "body": "Complex Conjugation Automorphism  Prove that the function given by is an automorphism.   Coming soon!  "
},
{
  "id": "ex-z-aut",
  "level": "2",
  "url": "sec-gphoms.html#ex-z-aut",
  "type": "Exercise",
  "number": "1.79",
  "title": "<span class=\"process-math\">\\(\\Aut(\\Z)\\)<\/span>.",
  "body": "     Coming soon!  "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "sec-gphoms.html#remark-10",
  "type": "Remark",
  "number": "1.80",
  "title": "",
  "body": " Notice that we have actually shown that the composition of automorphisms is an automorphism, both through (as automorphisms are isomorphisms) and (as groups are closed under their operation)  "
},
{
  "id": "def-inner-automorphisms",
  "level": "2",
  "url": "sec-gphoms.html#def-inner-automorphisms",
  "type": "Definition",
  "number": "1.81",
  "title": "Inner Automorphism.",
  "body": "Inner Automorphism   Let be a group and . The function defined by is called the inner automorphism inner automorphism of induced by . The set of inner automorphisms inner automorphism group of is denoted .    "
},
{
  "id": "prop-conjugation-automorphism",
  "level": "2",
  "url": "sec-gphoms.html#prop-conjugation-automorphism",
  "type": "Proposition",
  "number": "1.82",
  "title": "Conjugation Automorphism.",
  "body": "Conjugation Automorphism   Let be a group and . Then for all .    Notice , proving that is a homomorhism from to itself.  Observe that for any , we have since . Also, , which is obvious. It follows that and . This proves has a two-sided inveerse and hence is an isomorphism. In fact, it shows that .   "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "sec-gphoms.html#remark-11",
  "type": "Remark",
  "number": "1.83",
  "title": "",
  "body": " There is indeed a notion of outer automorphisms as well, though we currently lack the tools to define them rigorously.  "
},
{
  "id": "outcomes-4",
  "level": "2",
  "url": "sec-gphoms.html#outcomes-4",
  "type": "Summary",
  "number": "1.4",
  "title": "",
  "body": "   A is a function between groups that preserves certain algebraic structures, such as the operation, identites, and inverses. For the first, see: . For the second and third, see: The set of elements mapped to the identity by a homomorphism is known as its .    A is a bijective homomorphism, and a is an isomorphism from a group to itself. The structures preserved by an isomorphism are known as .    The set of automorphisms of a group forms a group itself: the of the group. See: Specifically, the will prove very important later.    Compositions of homomorphisms, isomorphisms, and automophisms are again homomorphisms, isomorphisms, and automophisms, respectively.    "
},
{
  "id": "sec-subgroups",
  "level": "1",
  "url": "sec-subgroups.html",
  "type": "Section",
  "number": "2.1",
  "title": "Subgroups",
  "body": "Subgroups  Subgroups    I have this fear of falling in front of large groups...that's why I tend not to wear heels.  Taylor Swift  Taylor Swift   Subgroup   A nonempty subset of a group is called a subgroup , denoted , if and only if is a group under the multiplication law of . (groups)  subgroup   A subgroup of a group is a called proper subgroup, denoted , if and only if . proper subgroup  (groups)     Subgroup Tests  subgroup test     Two Step Subgroup Test  If a subset of a group is nonempty and closed under multiplication and inversion, then is a subgroup.   One Step Subgroup Test  If a subset of a group is nonempty and satisfies for all , , then is a subgroup.   Finite Subgroup Test  If a finite subset of a group is nonempty and closed under multiplication, then is a subgroup.       We prove the one-step test first.  Assume is non-empty and for all , . Since is non-empty, there is an and hence . Since for any , is an identity element for . For any , , and so every element of has an inverse inside . For we have and thus and hence is closed under . This means that the restriction of the group operation of to is a well-defined group operation. This operation is associative by the axioms for the group . The axioms of a group have now been established for .  Now we prove the two step test.  Assume is non-empty and closed under multiplication and inversion. Then, for we have and . Since the hypothesis of the one-step test is satisfied, is a subgroup of .    Common Subgroups      and are subroups of , which we call the trivial subgroups of .               for all .     .    The set of all rotations is a subgroup of . Similarly, the set of reflections is also a subgroup.    Let and define . Then for all .       In fact, in the case of , these turn out to be the only subgroups of .  Subgroups of  The only subgroups of are the sets .   Whilst perusing , you may have noticed the following: If you didn't, don't worry. I won't tell anyeone ;)   Subgroups Preservations  Let be a subgroup of . Then the following hold:    .    If is abelian then so is .      Here are some slightly more involved properties.  Properties of Subgroups      Transitivity of Subgroups  If is a subgroup of and is a subgroup of , then is a subgroup of .    Intersections of Subgroups  If is a subgroup of for all in an index set , then is a subgroup of .    Unions of Subgroups  Let be a group and , subgroups. Prove that is a subgroup if and only if or .          Coming soon!    Let denote any indexing set and for each , let be a subgroup of . We need to prove is a subgroup. It's not empty since for all . If , then for each , and hence . It follows that .    Coming soon!       No Proper Unions  No finite group can be expressed as the union of two proper subgroups.   Part (3) of may prove useful!   Coming soon to an OER near you!   Subgroups not Symmetric  In we showed that subgroups form a transitve relation. Prove that the relation is reflexive (it can be one sentence) but not symmetric, and thus not an equivalence relation.   Special Linear Group   The special linear group with complex entries is defined  special linear group        The special linear group is a subgroup of the general linear group .    Torsion Subgroups      Let be an abelian group. Then the set of elements of finite order, which we denote , is a subgroup of , called the torsion subgroup of . torision subgroup     Show that the torision subgroup may not in fact be a subgroup if is not assumed to be abelian.       Group Homomorphisms and Subgroups     Images are Subgroups  If is a homomorphism of groups, then the image of is a subgroup of .   Kernels are Subgroups  If is a homomorphism of groups, then the kernel of is a subgroup of .   Preimages are Subgroups  If is a group homomorphism and then the preimage of , defined as , is a subgroup of .   Inclusions are Homomorphisms  If is a subgroup of a group , then the inclusion is a group homomorphism.       Cayley's Theorem  cayley's theorem   Every group is isomorphic to a subgroup of .     This is a nearly useless theorem.    Stuck in the Middle    Stay in the center, and you will be ready to move in any direction.   Alan Watts  Center of a Group   The center of a group , often written , is the set of elements of that commute with every element of . That is,   center of a group     Center is a Subgroup            is abelian    If , then        Only Element of Order  Let be a group and . If is the only element of order in , then .   Even Order Groups  Every group of even order contains an element of order . This is a direct result of , but proving it is possible with the tools we have.        A is a subset of a group that is also a group under the same operation. The fastest way to show something is a subgroup is with one of the .    The is the subgroup of elements of a group that commute with every other element. See: .     The and image of a group homomorphism are subgroups. See:      "
},
{
  "id": "def-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#def-subgroup",
  "type": "Definition",
  "number": "2.1",
  "title": "Subgroup.",
  "body": "Subgroup   A nonempty subset of a group is called a subgroup , denoted , if and only if is a group under the multiplication law of . (groups)  subgroup   A subgroup of a group is a called proper subgroup, denoted , if and only if . proper subgroup  (groups)    "
},
{
  "id": "thm-subgroup-test",
  "level": "2",
  "url": "sec-subgroups.html#thm-subgroup-test",
  "type": "Theorem",
  "number": "2.2",
  "title": "Subgroup Tests.",
  "body": "Subgroup Tests  subgroup test     Two Step Subgroup Test  If a subset of a group is nonempty and closed under multiplication and inversion, then is a subgroup.   One Step Subgroup Test  If a subset of a group is nonempty and satisfies for all , , then is a subgroup.   Finite Subgroup Test  If a finite subset of a group is nonempty and closed under multiplication, then is a subgroup.       We prove the one-step test first.  Assume is non-empty and for all , . Since is non-empty, there is an and hence . Since for any , is an identity element for . For any , , and so every element of has an inverse inside . For we have and thus and hence is closed under . This means that the restriction of the group operation of to is a well-defined group operation. This operation is associative by the axioms for the group . The axioms of a group have now been established for .  Now we prove the two step test.  Assume is non-empty and closed under multiplication and inversion. Then, for we have and . Since the hypothesis of the one-step test is satisfied, is a subgroup of .   "
},
{
  "id": "ex-common-subgroups",
  "level": "2",
  "url": "sec-subgroups.html#ex-common-subgroups",
  "type": "Example",
  "number": "2.3",
  "title": "Common Subgroups.",
  "body": "Common Subgroups      and are subroups of , which we call the trivial subgroups of .               for all .     .    The set of all rotations is a subgroup of . Similarly, the set of reflections is also a subgroup.    Let and define . Then for all .      "
},
{
  "id": "exe-subgroups-of-z",
  "level": "2",
  "url": "sec-subgroups.html#exe-subgroups-of-z",
  "type": "Exercise",
  "number": "2.4",
  "title": "Subgroups of <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Subgroups of  The only subgroups of are the sets .  "
},
{
  "id": "exe-subgroup-preservations",
  "level": "2",
  "url": "sec-subgroups.html#exe-subgroup-preservations",
  "type": "Exercise",
  "number": "2.5",
  "title": "Subgroups Preservations.",
  "body": "Subgroups Preservations  Let be a subgroup of . Then the following hold:    .    If is abelian then so is .     "
},
{
  "id": "thm-subgroup-properties",
  "level": "2",
  "url": "sec-subgroups.html#thm-subgroup-properties",
  "type": "Theorem",
  "number": "2.6",
  "title": "Properties of Subgroups.",
  "body": "Properties of Subgroups      Transitivity of Subgroups  If is a subgroup of and is a subgroup of , then is a subgroup of .    Intersections of Subgroups  If is a subgroup of for all in an index set , then is a subgroup of .    Unions of Subgroups  Let be a group and , subgroups. Prove that is a subgroup if and only if or .          Coming soon!    Let denote any indexing set and for each , let be a subgroup of . We need to prove is a subgroup. It's not empty since for all . If , then for each , and hence . It follows that .    Coming soon!      "
},
{
  "id": "exe-no-proper-unions",
  "level": "2",
  "url": "sec-subgroups.html#exe-no-proper-unions",
  "type": "Exercise",
  "number": "2.7",
  "title": "No Proper Unions.",
  "body": "No Proper Unions  No finite group can be expressed as the union of two proper subgroups.   Part (3) of may prove useful!   Coming soon to an OER near you!  "
},
{
  "id": "exe-subgroup-not-symmetric",
  "level": "2",
  "url": "sec-subgroups.html#exe-subgroup-not-symmetric",
  "type": "Exercise",
  "number": "2.8",
  "title": "Subgroups not Symmetric.",
  "body": "Subgroups not Symmetric  In we showed that subgroups form a transitve relation. Prove that the relation is reflexive (it can be one sentence) but not symmetric, and thus not an equivalence relation.  "
},
{
  "id": "def-special-linear-group",
  "level": "2",
  "url": "sec-subgroups.html#def-special-linear-group",
  "type": "Definition",
  "number": "2.9",
  "title": "Special Linear Group.",
  "body": "Special Linear Group   The special linear group with complex entries is defined  special linear group     "
},
{
  "id": "prop-slg-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#prop-slg-subgroup",
  "type": "Proposition",
  "number": "2.10",
  "title": "<span class=\"process-math\">\\(\\SL_n(\\C)\\leq\\GL_n(\\C)\\)<\/span>.",
  "body": "  The special linear group is a subgroup of the general linear group .   "
},
{
  "id": "exe-torsion-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#exe-torsion-subgroup",
  "type": "Exploration",
  "number": "2.1",
  "title": "Torsion Subgroups.",
  "body": "Torsion Subgroups      Let be an abelian group. Then the set of elements of finite order, which we denote , is a subgroup of , called the torsion subgroup of . torision subgroup     Show that the torision subgroup may not in fact be a subgroup if is not assumed to be abelian.      "
},
{
  "id": "thm-properties-of-group-homoms",
  "level": "2",
  "url": "sec-subgroups.html#thm-properties-of-group-homoms",
  "type": "Theorem",
  "number": "2.11",
  "title": "Group Homomorphisms and Subgroups.",
  "body": "Group Homomorphisms and Subgroups     Images are Subgroups  If is a homomorphism of groups, then the image of is a subgroup of .   Kernels are Subgroups  If is a homomorphism of groups, then the kernel of is a subgroup of .   Preimages are Subgroups  If is a group homomorphism and then the preimage of , defined as , is a subgroup of .   Inclusions are Homomorphisms  If is a subgroup of a group , then the inclusion is a group homomorphism.      "
},
{
  "id": "thm-cayley",
  "level": "2",
  "url": "sec-subgroups.html#thm-cayley",
  "type": "Theorem",
  "number": "2.12",
  "title": "Cayley's Theorem.",
  "body": "Cayley's Theorem  cayley's theorem   Every group is isomorphic to a subgroup of .   "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "sec-subgroups.html#remark-12",
  "type": "Remark",
  "number": "2.13",
  "title": "",
  "body": " This is a nearly useless theorem.  "
},
{
  "id": "def-group-center",
  "level": "2",
  "url": "sec-subgroups.html#def-group-center",
  "type": "Definition",
  "number": "2.14",
  "title": "Center of a Group.",
  "body": "Center of a Group   The center of a group , often written , is the set of elements of that commute with every element of . That is,   center of a group    "
},
{
  "id": "prop-center-is-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#prop-center-is-subgroup",
  "type": "Proposition",
  "number": "2.15",
  "title": "Center is a Subgroup.",
  "body": "Center is a Subgroup            is abelian    If , then       "
},
{
  "id": "exe-only-element-of-order-2",
  "level": "2",
  "url": "sec-subgroups.html#exe-only-element-of-order-2",
  "type": "Exercise",
  "number": "2.16",
  "title": "Only Element of Order <span class=\"process-math\">\\(2\\)<\/span>.",
  "body": "Only Element of Order  Let be a group and . If is the only element of order in , then .  "
},
{
  "id": "exe-even-groups-order-2",
  "level": "2",
  "url": "sec-subgroups.html#exe-even-groups-order-2",
  "type": "Exercise",
  "number": "2.17",
  "title": "Even Order Groups.",
  "body": "Even Order Groups  Every group of even order contains an element of order . This is a direct result of , but proving it is possible with the tools we have.   "
},
{
  "id": "outcomes-5",
  "level": "2",
  "url": "sec-subgroups.html#outcomes-5",
  "type": "Summary",
  "number": "2.1",
  "title": "",
  "body": "   A is a subset of a group that is also a group under the same operation. The fastest way to show something is a subgroup is with one of the .    The is the subgroup of elements of a group that commute with every other element. See: .     The and image of a group homomorphism are subgroups. See:     "
},
{
  "id": "sec-gp-generators",
  "level": "1",
  "url": "sec-gp-generators.html",
  "type": "Section",
  "number": "2.2",
  "title": "Generated Subgroups",
  "body": "Generated Subgroups  Generational Wealth    How often misused words generate misleading thoughts.   Herbert Spencer   Generated Subgroup   Given a group and a subset of , the subgroup of generated by generated subgroup is If is a set with one element then we write and we refer to this as the cyclic subgroup generated by generated cyclic subgroup  .   The elements of are known as generators , generator     Elements of   For a subset of , the elements of can be described as:     Let . Since is a subgroup that contains , it is closed under products and inverses, and thus must contain all elements of .  For the opposite containment, we just need to show the set really is a subgroup. We use the one step test:      since we allow and declare the empty product to be .    If and are in then is also in .     Therefore and (by taking and ) and by the minimality of we obtain .    Lets look at some examples for context.     for every .    Generating      Algebraic Structures  Elements of generated by and . Quiver    Generating  Let be prime and be any two distinct reflections in . Then .   Generating  For any integer , the set of column vectors consisting of in the row and elsewhere generate . As you may recall from a linear algebra course, these are called the elementary matrices . (Bonus: what subgroup do the type I elementary matrices generate?)   Generating    is the subgroup of generated by all produts of -cyclies (disjoint or not). In symbols,      Note that in we showed is generated by transpositions. However, there's more than one way to generate an egg.   We look now at generating ; the following lemma will be helpful.    For and distinct intgers we have (Note that the right-hand cycle is a cycle since is one-to-one.)    To prove this, evaluate both sides at for any and observe that one gets (with the supscript taken modulo ) both times. This proves they agree on the set . If is not in this set, then fixes so the left-hand side fixes . So does the right, since . Thus the two functions coincide on elements.    Generating   For prove that is generated by and the -cycle .     This theorem will prove surprisingly useful all the way down in , saving us a lot of time with our proof of unsolvable quintic polyomials.   Lets look at another example.  Commutator Subgroup  Let be a group, , and . This is known as the commutator subgroup  commutator subgroup of .     Commutator subgroups prove invaluable when it comes to something called abelianization abelianization , which is, loosely speaking, a way of \"modding out\" the non-commutative part of to obtain a new group that is abelian. This is seen rigorously in .   A nice property of a is that once you've located the generators, you've found the whole group:  Generators of Subgroups   If is a subgroup of that contains , then .    In this way, if we can understand something about the generators of a group, we can (for the most part) extend that knowledge to the group as a whole. This is something you may have seen in the form of a basis, either for a vector space or a topological space.  Here is a proposition that might appear to come out of the blue. #1c1cf0, to be precise.   Generators and Unique Homomorphism   If is a group and are elements such that , , and for some integer , then there exists a unique group homomorphism such that and .    Recall that the elements of are and that this list has no repetitions. Given , , and , if exists it is clearly unique, since we have and , so that the value of on every element of is determined by its values on just and .  To prove existence, define a function by for and for . Then one may painstakenly checks that in each of the cases or or or . For example, using that , we have and For the last string of equalities, we have used that, since , we have in too. Note also that might be negative, in which case is really and so really we would have . But this is OK since too, since .  I'll skip the verifications of the other three cases.     This is techincally an specific instance of the Universal Mapping Property for a Presentation, which is not covered here.   Let's take a peak at what this might look like in practice.  Mapping Example  Consider the group and elements  cosine function sine function Then one may check that , and . gives that there is a group homomorphism such that and . This is not at all surprising, since the matrix represents rotation by radians counter-clockwise and represents reflection about the -axis. Indeed, one could define as the subgroup of consisting of elements .   Another Mapping  Let and , in order to distinguish them. Find a homomorphism from to with and prove that it is unique.    gives a group homomorhism . Let and , in order to distinguish them. Then since , there is a unique homomorphism from to with . For example, .       For a subset of a group, the of is the smallest subgroup containing .     . See: .     Two prominent examples are and .     "
},
{
  "id": "def-gensubgroup",
  "level": "2",
  "url": "sec-gp-generators.html#def-gensubgroup",
  "type": "Definition",
  "number": "2.18",
  "title": "Generated Subgroup.",
  "body": "Generated Subgroup   Given a group and a subset of , the subgroup of generated by generated subgroup is If is a set with one element then we write and we refer to this as the cyclic subgroup generated by generated cyclic subgroup  .   The elements of are known as generators , generator    "
},
{
  "id": "lem-gensubgp",
  "level": "2",
  "url": "sec-gp-generators.html#lem-gensubgp",
  "type": "Lemma",
  "number": "2.19",
  "title": "Elements of <span class=\"process-math\">\\(\\igen S\\)<\/span>.",
  "body": "Elements of   For a subset of , the elements of can be described as:     Let . Since is a subgroup that contains , it is closed under products and inverses, and thus must contain all elements of .  For the opposite containment, we just need to show the set really is a subgroup. We use the one step test:      since we allow and declare the empty product to be .    If and are in then is also in .     Therefore and (by taking and ) and by the minimality of we obtain .   "
},
{
  "id": "ex-nz-generated",
  "level": "2",
  "url": "sec-gp-generators.html#ex-nz-generated",
  "type": "Example",
  "number": "2.20",
  "title": "<span class=\"process-math\">\\(n\\Z=\\igen n\\)<\/span>.",
  "body": "   for every .   "
},
{
  "id": "ex-d2n-rs",
  "level": "2",
  "url": "sec-gp-generators.html#ex-d2n-rs",
  "type": "Example",
  "number": "2.21",
  "title": "Generating <span class=\"process-math\">\\(D_{2n}\\)<\/span>.",
  "body": "Generating     "
},
{
  "id": "figure-d4-pres",
  "level": "2",
  "url": "sec-gp-generators.html#figure-d4-pres",
  "type": "Figure",
  "number": "2.22",
  "title": "Algebraic Structures",
  "body": "Algebraic Structures  Elements of generated by and . Quiver   "
},
{
  "id": "exe-d2p",
  "level": "2",
  "url": "sec-gp-generators.html#exe-d2p",
  "type": "Exercise",
  "number": "2.23",
  "title": "Generating <span class=\"process-math\">\\(D_{2p}\\)<\/span>.",
  "body": "Generating  Let be prime and be any two distinct reflections in . Then .  "
},
{
  "id": "generating-gl",
  "level": "2",
  "url": "sec-gp-generators.html#generating-gl",
  "type": "Exercise",
  "number": "2.24",
  "title": "Generating <span class=\"process-math\">\\(\\GL_n(\\R)\\)<\/span>.",
  "body": "Generating  For any integer , the set of column vectors consisting of in the row and elsewhere generate . As you may recall from a linear algebra course, these are called the elementary matrices . (Bonus: what subgroup do the type I elementary matrices generate?)  "
},
{
  "id": "prop-generating-an",
  "level": "2",
  "url": "sec-gp-generators.html#prop-generating-an",
  "type": "Proposition",
  "number": "2.25",
  "title": "Generating <span class=\"process-math\">\\(A_n\\)<\/span>.",
  "body": "Generating    is the subgroup of generated by all produts of -cyclies (disjoint or not). In symbols,    "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "sec-gp-generators.html#remark-13",
  "type": "Remark",
  "number": "2.26",
  "title": "",
  "body": " Note that in we showed is generated by transpositions. However, there's more than one way to generate an egg.  "
},
{
  "id": "lem-generating-sn",
  "level": "2",
  "url": "sec-gp-generators.html#lem-generating-sn",
  "type": "Lemma",
  "number": "2.27",
  "title": "",
  "body": "  For and distinct intgers we have (Note that the right-hand cycle is a cycle since is one-to-one.)    To prove this, evaluate both sides at for any and observe that one gets (with the supscript taken modulo ) both times. This proves they agree on the set . If is not in this set, then fixes so the left-hand side fixes . So does the right, since . Thus the two functions coincide on elements.   "
},
{
  "id": "thm-generating-sn",
  "level": "2",
  "url": "sec-gp-generators.html#thm-generating-sn",
  "type": "Theorem",
  "number": "2.28",
  "title": "Generating <span class=\"process-math\">\\(S_n\\)<\/span>.",
  "body": "Generating   For prove that is generated by and the -cycle .   "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "sec-gp-generators.html#remark-14",
  "type": "Remark",
  "number": "2.29",
  "title": "",
  "body": " This theorem will prove surprisingly useful all the way down in , saving us a lot of time with our proof of unsolvable quintic polyomials.  "
},
{
  "id": "ex-commutator-subgroup",
  "level": "2",
  "url": "sec-gp-generators.html#ex-commutator-subgroup",
  "type": "Example",
  "number": "2.30",
  "title": "Commutator Subgroup.",
  "body": "Commutator Subgroup  Let be a group, , and . This is known as the commutator subgroup  commutator subgroup of .   "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "sec-gp-generators.html#remark-15",
  "type": "Remark",
  "number": "2.31",
  "title": "",
  "body": " Commutator subgroups prove invaluable when it comes to something called abelianization abelianization , which is, loosely speaking, a way of \"modding out\" the non-commutative part of to obtain a new group that is abelian. This is seen rigorously in .  "
},
{
  "id": "prop-generators-of-subgroup",
  "level": "2",
  "url": "sec-gp-generators.html#prop-generators-of-subgroup",
  "type": "Proposition",
  "number": "2.32",
  "title": "Generators of Subgroups.",
  "body": "Generators of Subgroups   If is a subgroup of that contains , then .   "
},
{
  "id": "prop-d2n-mapping",
  "level": "2",
  "url": "sec-gp-generators.html#prop-d2n-mapping",
  "type": "Proposition",
  "number": "2.33",
  "title": "<span class=\"process-math\">\\(D_{2n}\\)<\/span> Generators and Unique Homomorphism.",
  "body": "Generators and Unique Homomorphism   If is a group and are elements such that , , and for some integer , then there exists a unique group homomorphism such that and .    Recall that the elements of are and that this list has no repetitions. Given , , and , if exists it is clearly unique, since we have and , so that the value of on every element of is determined by its values on just and .  To prove existence, define a function by for and for . Then one may painstakenly checks that in each of the cases or or or . For example, using that , we have and For the last string of equalities, we have used that, since , we have in too. Note also that might be negative, in which case is really and so really we would have . But this is OK since too, since .  I'll skip the verifications of the other three cases.   "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "sec-gp-generators.html#remark-16",
  "type": "Remark",
  "number": "2.34",
  "title": "",
  "body": " This is techincally an specific instance of the Universal Mapping Property for a Presentation, which is not covered here.  "
},
{
  "id": "ex-d2n-cos-sin",
  "level": "2",
  "url": "sec-gp-generators.html#ex-d2n-cos-sin",
  "type": "Example",
  "number": "2.35",
  "title": "<span class=\"process-math\">\\(D_{2n}\\)<\/span> Mapping Example.",
  "body": "Mapping Example  Consider the group and elements  cosine function sine function Then one may check that , and . gives that there is a group homomorphism such that and . This is not at all surprising, since the matrix represents rotation by radians counter-clockwise and represents reflection about the -axis. Indeed, one could define as the subgroup of consisting of elements .  "
},
{
  "id": "exe-d12-d6",
  "level": "2",
  "url": "sec-gp-generators.html#exe-d12-d6",
  "type": "Exercise",
  "number": "2.36",
  "title": "Another <span class=\"process-math\">\\(D_{2n}\\)<\/span> Mapping.",
  "body": "Another Mapping  Let and , in order to distinguish them. Find a homomorphism from to with and prove that it is unique.    gives a group homomorhism . Let and , in order to distinguish them. Then since , there is a unique homomorphism from to with . For example, .  "
},
{
  "id": "outcomes-6",
  "level": "2",
  "url": "sec-gp-generators.html#outcomes-6",
  "type": "Summary",
  "number": "2.2",
  "title": "",
  "body": "   For a subset of a group, the of is the smallest subgroup containing .     . See: .     Two prominent examples are and .    "
},
{
  "id": "sec-cyclic",
  "level": "1",
  "url": "sec-cyclic.html",
  "type": "Section",
  "number": "2.3",
  "title": "Cyclic Groups",
  "body": "Cyclic Groups  Cyclic Groups    Madness is the exception in individuals and the rule in groups.   Friedrich Nietzsche   We zoom in now on the wondrous case in which a group can be generated by a single element.  Cylic Group   If is a generated by a single element, i.e. for some , then is called a cyclic group . cyclic group     Recalling , we can describe the elements of a cylic group explicitely.  Elements of   For an element of , the elements of can be described as: .    By , the group has the following elements . We show that    by showing the elements are distinct. Indeed, if and then and , contradicting the minimality of the order of .     by showing (this implies ). Indeed, for any division by yields integers with such that . Then .       One quick way of seeing if a finite group is cyclic is to find an element with the same order as the group.  Cyclic iff Element of Order   Let be a finite group. Then is cyclic if and only if there exists an such that     Cyclic Groups       is a cyclic group.     is a cyclic group.           , for example.     , for example.       Not Quite Cyclic Groups     Prove that is not a cyclic group.    Prove that is not cyclic.      Generators are not unique.  Cyclic Generators are not Unique  Let be a cyclic group. Then .   Here is a more general criteria for determining when an element of a cyclic group is a generator.  Criteria for Cyclic Generators   Let be a cyclic group of order , and let . Then generates if and only if .    Conveniently enough, cyclic groups are always abelian.  Cyclic Groups are Abelian   Every cyclic group is abelian.    Roots of Unity  For a fixed , is a subgroup of . Since and so if , then and hence for some real number . Moreover, implies that is an integer multiple of . It follows that and that generates . So, is cyclic or order . It is therefore isomorphic to , via the map .   One of the first things one does when encountering a new group is to examine its subgroups. As it turns out, cyclic groups have some very special properties when it comes to subgroups, though proving them will be more technical than anything we have encountered thus far.  Subgroups of Cyclic Groups   Let , where has finite order . Then there is a bijection for each divisor of . Moreover, for each subgroup of , . In particular, all subgroups of are cyclic and there is a unique subgroup of each order.        Claim 1: For any , setting gives that .  Since any element of is of the form for some . By the  for some , . Since and are elements of , . Since and , by the minimality of it follows that cannot be positive and thus . Therefore and we have shown that . The opposite containment follows because and is the smallest subgroup of containing . Thus .  Let be given by .   Claim 2: For any divisor of , we have .  We have .   Claim 3: For any subgroup of , we have .  By Claim 1, any is either , for which or is of the form . In the latter case, setting we have and . It remains to show that . By Bézout's Identity, for some integers . Since if follows that . On the other hand is a multiple of so and thus . Finally, we conclude that for any .  Claims 2 and 3 establish that is a two sided inverse to , thus is a bijection.       Cyclic Groups of Small Order     Every group of orders are cyclic.    Every abelian group of order is cyclic.      Finally, we end with two results that will prove invaluable later in the course. Though we won't see them for some time, proving them now will be good practice and save us time later on.    The automorphism group of is isomorphic to the multiplicative group of units of via the map where .    In particular:    If is prime the automorphism group of is cyclic, namely .     Uniqueness of Cyclic Groups    There is no way to be in cyclic existence without creating the causes of suffering.   Jetsunma Ahkon Lhamo   UMP for Cyclic Groups   Assume and let be any group. If , then for each such that , there is a unique group homomorphism such that . If , then for each , there is a unique group homomorphism such that . In both cases this unique group homomorphism is given by for any . UMP for a cyclic group     Recall that either (with no repetitions) if or (with no repetitions) if .   Uniqueness: We show that if is a group homomorphism, then for all .     if then     if then     if then , using the formula above for       Existence: In either case, define for all relevant (i.e., in the first case, for and in the second for all ). We need to show this function is a well-defined group homomorphism. To see that is well defined, suppose for some . Then, since , using or the definition for order we have Thus, if then .  The homomorphism property is immediate: .     This is a particular case of the universal mapping property of a presentation, since a cyclic group is either presented by or .   Classification Theorem for Cyclic Groups  classification of cyclic groups   Every infinite cyclic group is isomorphic to . Every cyclic group of order is isomorphic to . classification of cyclic groups     Suppose with or and set in the first case and in the second case. Then by , there are homomorphisms and such that and . So is an endomorphism of mapping to . But the identity map also has this property, and so the uniqueness clause gives . Similarly, .     Moving forward, it is customary to denote the cyclic group of order with the notation . We similarly denote the infinite cyclic group .         A is a group generated by one element. Thus . See:     An element generates a cyclic group if its order is equal to or relatively prime to the order of the group. See: . A finite group is cyclic if there exists an element with the same order as the group. See: .      ; all subgroups of a cyclic group are cyclic and there is a unique subgroup of each order. See:     Every infinite cyclic group is isomorphic to , and every cyclic group of order is isomorphic to . This is known as the .     ; in particular, . See: and .      "
},
{
  "id": "def-cyclic-group",
  "level": "2",
  "url": "sec-cyclic.html#def-cyclic-group",
  "type": "Definition",
  "number": "2.37",
  "title": "Cylic Group.",
  "body": "Cylic Group   If is a generated by a single element, i.e. for some , then is called a cyclic group . cyclic group    "
},
{
  "id": "cor-cyclic-subgroup",
  "level": "2",
  "url": "sec-cyclic.html#cor-cyclic-subgroup",
  "type": "Corollary",
  "number": "2.38",
  "title": "Elements of <span class=\"process-math\">\\(\\igen x\\)<\/span>.",
  "body": "Elements of   For an element of , the elements of can be described as: .    By , the group has the following elements . We show that    by showing the elements are distinct. Indeed, if and then and , contradicting the minimality of the order of .     by showing (this implies ). Indeed, for any division by yields integers with such that . Then .      "
},
{
  "id": "prop-cyclic-equivalencies",
  "level": "2",
  "url": "sec-cyclic.html#prop-cyclic-equivalencies",
  "type": "Proposition",
  "number": "2.39",
  "title": "Cyclic iff Element of Order <span class=\"process-math\">\\(|G|\\)<\/span>.",
  "body": "Cyclic iff Element of Order   Let be a finite group. Then is cyclic if and only if there exists an such that    "
},
{
  "id": "ex-cyclic-examples",
  "level": "2",
  "url": "sec-cyclic.html#ex-cyclic-examples",
  "type": "Example",
  "number": "2.40",
  "title": "Cyclic Groups.",
  "body": "Cyclic Groups       is a cyclic group.     is a cyclic group.           , for example.     , for example.      "
},
{
  "id": "exe-not-cyclic",
  "level": "2",
  "url": "sec-cyclic.html#exe-not-cyclic",
  "type": "Exercise",
  "number": "2.41",
  "title": "Not Quite Cyclic Groups.",
  "body": "Not Quite Cyclic Groups     Prove that is not a cyclic group.    Prove that is not cyclic.     "
},
{
  "id": "exe-non-unique-cyclic-generators",
  "level": "2",
  "url": "sec-cyclic.html#exe-non-unique-cyclic-generators",
  "type": "Exercise",
  "number": "2.42",
  "title": "Cyclic Generators are not Unique.",
  "body": "Cyclic Generators are not Unique  Let be a cyclic group. Then .  "
},
{
  "id": "thm-cyclic-criteria",
  "level": "2",
  "url": "sec-cyclic.html#thm-cyclic-criteria",
  "type": "Theorem",
  "number": "2.43",
  "title": "Criteria for Cyclic Generators.",
  "body": "Criteria for Cyclic Generators   Let be a cyclic group of order , and let . Then generates if and only if .   "
},
{
  "id": "thm-cyclic-abelian",
  "level": "2",
  "url": "sec-cyclic.html#thm-cyclic-abelian",
  "type": "Theorem",
  "number": "2.44",
  "title": "Cyclic Groups are Abelian.",
  "body": "Cyclic Groups are Abelian   Every cyclic group is abelian.   "
},
{
  "id": "ex-group-of-unity",
  "level": "2",
  "url": "sec-cyclic.html#ex-group-of-unity",
  "type": "Example",
  "number": "2.45",
  "title": "Roots of Unity.",
  "body": "Roots of Unity  For a fixed , is a subgroup of . Since and so if , then and hence for some real number . Moreover, implies that is an integer multiple of . It follows that and that generates . So, is cyclic or order . It is therefore isomorphic to , via the map .  "
},
{
  "id": "thm-cyclic-divisors-and-subgroups",
  "level": "2",
  "url": "sec-cyclic.html#thm-cyclic-divisors-and-subgroups",
  "type": "Theorem",
  "number": "2.46",
  "title": "Subgroups of Cyclic Groups.",
  "body": "Subgroups of Cyclic Groups   Let , where has finite order . Then there is a bijection for each divisor of . Moreover, for each subgroup of , . In particular, all subgroups of are cyclic and there is a unique subgroup of each order.        Claim 1: For any , setting gives that .  Since any element of is of the form for some . By the  for some , . Since and are elements of , . Since and , by the minimality of it follows that cannot be positive and thus . Therefore and we have shown that . The opposite containment follows because and is the smallest subgroup of containing . Thus .  Let be given by .   Claim 2: For any divisor of , we have .  We have .   Claim 3: For any subgroup of , we have .  By Claim 1, any is either , for which or is of the form . In the latter case, setting we have and . It remains to show that . By Bézout's Identity, for some integers . Since if follows that . On the other hand is a multiple of so and thus . Finally, we conclude that for any .  Claims 2 and 3 establish that is a two sided inverse to , thus is a bijection.      "
},
{
  "id": "exe-small-cyclic",
  "level": "2",
  "url": "sec-cyclic.html#exe-small-cyclic",
  "type": "Exercise",
  "number": "2.47",
  "title": "Cyclic Groups of Small Order.",
  "body": "Cyclic Groups of Small Order     Every group of orders are cyclic.    Every abelian group of order is cyclic.     "
},
{
  "id": "thm-aut-cn",
  "level": "2",
  "url": "sec-cyclic.html#thm-aut-cn",
  "type": "Theorem",
  "number": "2.48",
  "title": "<span class=\"process-math\">\\(\\Aut(C_n)\\)<\/span>.",
  "body": "  The automorphism group of is isomorphic to the multiplicative group of units of via the map where .   "
},
{
  "id": "cor-aut-cp",
  "level": "2",
  "url": "sec-cyclic.html#cor-aut-cp",
  "type": "Corollary",
  "number": "2.49",
  "title": "<span class=\"process-math\">\\(\\Aut(C_p)\\)<\/span>.",
  "body": "  If is prime the automorphism group of is cyclic, namely .   "
},
{
  "id": "prop-ump-cyclic",
  "level": "2",
  "url": "sec-cyclic.html#prop-ump-cyclic",
  "type": "Proposition",
  "number": "2.50",
  "title": "UMP for Cyclic Groups.",
  "body": "UMP for Cyclic Groups   Assume and let be any group. If , then for each such that , there is a unique group homomorphism such that . If , then for each , there is a unique group homomorphism such that . In both cases this unique group homomorphism is given by for any . UMP for a cyclic group     Recall that either (with no repetitions) if or (with no repetitions) if .   Uniqueness: We show that if is a group homomorphism, then for all .     if then     if then     if then , using the formula above for       Existence: In either case, define for all relevant (i.e., in the first case, for and in the second for all ). We need to show this function is a well-defined group homomorphism. To see that is well defined, suppose for some . Then, since , using or the definition for order we have Thus, if then .  The homomorphism property is immediate: .   "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "sec-cyclic.html#remark-17",
  "type": "Remark",
  "number": "2.51",
  "title": "",
  "body": " This is a particular case of the universal mapping property of a presentation, since a cyclic group is either presented by or .  "
},
{
  "id": "thm-cyclic-classification",
  "level": "2",
  "url": "sec-cyclic.html#thm-cyclic-classification",
  "type": "Theorem",
  "number": "2.52",
  "title": "Classification Theorem for Cyclic Groups.",
  "body": "Classification Theorem for Cyclic Groups  classification of cyclic groups   Every infinite cyclic group is isomorphic to . Every cyclic group of order is isomorphic to . classification of cyclic groups     Suppose with or and set in the first case and in the second case. Then by , there are homomorphisms and such that and . So is an endomorphism of mapping to . But the identity map also has this property, and so the uniqueness clause gives . Similarly, .   "
},
{
  "id": "convention-1",
  "level": "2",
  "url": "sec-cyclic.html#convention-1",
  "type": "Convention",
  "number": "2.53",
  "title": "",
  "body": " Moving forward, it is customary to denote the cyclic group of order with the notation . We similarly denote the infinite cyclic group .    "
},
{
  "id": "outcomes-7",
  "level": "2",
  "url": "sec-cyclic.html#outcomes-7",
  "type": "Summary",
  "number": "2.3",
  "title": "",
  "body": "   A is a group generated by one element. Thus . See:     An element generates a cyclic group if its order is equal to or relatively prime to the order of the group. See: . A finite group is cyclic if there exists an element with the same order as the group. See: .      ; all subgroups of a cyclic group are cyclic and there is a unique subgroup of each order. See:     Every infinite cyclic group is isomorphic to , and every cyclic group of order is isomorphic to . This is known as the .     ; in particular, . See: and .     "
},
{
  "id": "sec-cosets",
  "level": "1",
  "url": "sec-cosets.html",
  "type": "Section",
  "number": "3.1",
  "title": "Cosets and Lagrange's Theorem",
  "body": "Cosets and Lagrange's Theorem  Cosets    If I had inherited a fortune I should probably not have cast my lot with mathematics.   Joseph-Louis Lagrange   Cosets   For any and any let be defined as a left coset and right coset of in , respectfully. coset  left coset  right coset     Abelian Cosets  If is an abelian then for all .    Though mostly a matter of preference, we will focus primarily on left cosets.   Basic Coset Properties   Let and          if and only if             Coset Equivalencies   Let . The following facts about left cosets are equivalent for :    and belong to the same left coset of in ,     for some ,     for some ,     ,     ,     .        if and belong to the same left coset of in then and for some , so and therefore where .    for some   and .    for some   .    .   Suppose for some , then by we also have for some . Then we have  thus .   Since , we have and . If then, and belong to the same left coset.      For any and any , the set of (left) cosets induces an equivalence relation on , where two elements are related if they belong to the same left coset of in .    Cosets Partition a Group   For , the collection of left cosets of in form a partition of , and similarly for the collection of right cosets. That is,   for all , either or      ,   and similarly for right cosets. Moreover all left and right cosets have the same cardinality: for any .    Let me prove the assertions for right cosets. Every element of belongs to at least one right coset, since (since ). We need to show any two cosets are either identical or disjoint: if and share an element, then it follows from of that . This proves that the right cosets partition . To see that all right cosets have the same cardinality as , define a function by . We see is onto and if then and hence , so that is also one-to-one.    Lagrange's Theorem  Lagrange's theorem   If is a finite group and , then In particular, divides .    Equal Number of Left and Right Cosets   The number of left cosets of in is equal to the number of right cosets of in .    Index   In finite groups, the common number of left or right cosets of a subgroup in a group is denoted as and is called the index of in .  index     Cosets in  For and , the left cosets of in are and the right cosets are Note that these lists are not the same, but they do have the same length. We have , and .   Now that we have proved , a host of other results now become available to us.  Corollaries to Lagrange's Theorem   Let be a finite group.   If , then divides .         If then for all        The notion of index is most useful when it is finite, but note that this does not require that to be finite.  Finite Index in Infinite Group  Let and . Then since the cosets are . (Since is abelian, left and right cosets are automatically the same by )   Number of Left and Right Cosets (Ininite Version)  Show that even if is not finite the number of left and right cosets of a subgroup is still the same.   Consider the map and show it's a bijection. Why is the inverse needed?   This seems like it might be important.  The Index Tower  index tower   Let be a group (possibly infinite) and subgroups of . Suppose is finite. Then .    Here are some more corollaries to .   Let be a group of composite order. Then contains a non-trivial proper subgroup.   Fermat's Little Theorem  Prove Fermat's Little Theorem: for every integer and every prime , . Fermat's little theorem    If you can believe it, there's actually another important corollary to , but we'll cover it when its more relevant. Wouldn't want to spoil all the fun at once, right? To spoil all the fun at once, see: , part (1).       For any and any , a left and right of in is defined to be     The set of cosets partitions the group and induces an equivlance relation where two elements are related if they belong to the same coset. See: and .     All cosets have the same cardinality, and there are an equal number of left and right cosets. See: and . The number of cosets is called the .     states that the order of any subgroup divides the order of the group, and thus that the order of an element must also divide the order of the group. This is one of the seminal results in group theory.     "
},
{
  "id": "def-coset",
  "level": "2",
  "url": "sec-cosets.html#def-coset",
  "type": "Definition",
  "number": "3.1",
  "title": "Cosets.",
  "body": "Cosets   For any and any let be defined as a left coset and right coset of in , respectfully. coset  left coset  right coset    "
},
{
  "id": "exe-abelian-cosets",
  "level": "2",
  "url": "sec-cosets.html#exe-abelian-cosets",
  "type": "Exercise",
  "number": "3.2",
  "title": "Abelian Cosets.",
  "body": "Abelian Cosets  If is an abelian then for all .  "
},
{
  "id": "prop-coset-properties",
  "level": "2",
  "url": "sec-cosets.html#prop-coset-properties",
  "type": "Proposition",
  "number": "3.3",
  "title": "Basic Coset Properties.",
  "body": "Basic Coset Properties   Let and          if and only if            "
},
{
  "id": "lem-cosetfacts",
  "level": "2",
  "url": "sec-cosets.html#lem-cosetfacts",
  "type": "Lemma",
  "number": "3.4",
  "title": "Coset Equivalencies.",
  "body": "Coset Equivalencies   Let . The following facts about left cosets are equivalent for :    and belong to the same left coset of in ,     for some ,     for some ,     ,     ,     .        if and belong to the same left coset of in then and for some , so and therefore where .    for some   and .    for some   .    .   Suppose for some , then by we also have for some . Then we have  thus .   Since , we have and . If then, and belong to the same left coset.   "
},
{
  "id": "thm-coset-equivalence-relation",
  "level": "2",
  "url": "sec-cosets.html#thm-coset-equivalence-relation",
  "type": "Theorem",
  "number": "3.5",
  "title": "",
  "body": "  For any and any , the set of (left) cosets induces an equivalence relation on , where two elements are related if they belong to the same left coset of in .   "
},
{
  "id": "cor-cosetpartition",
  "level": "2",
  "url": "sec-cosets.html#cor-cosetpartition",
  "type": "Corollary",
  "number": "3.6",
  "title": "Cosets Partition a Group.",
  "body": "Cosets Partition a Group   For , the collection of left cosets of in form a partition of , and similarly for the collection of right cosets. That is,   for all , either or      ,   and similarly for right cosets. Moreover all left and right cosets have the same cardinality: for any .    Let me prove the assertions for right cosets. Every element of belongs to at least one right coset, since (since ). We need to show any two cosets are either identical or disjoint: if and share an element, then it follows from of that . This proves that the right cosets partition . To see that all right cosets have the same cardinality as , define a function by . We see is onto and if then and hence , so that is also one-to-one.   "
},
{
  "id": "thm-lagrange",
  "level": "2",
  "url": "sec-cosets.html#thm-lagrange",
  "type": "Theorem",
  "number": "3.7",
  "title": "Lagrange's Theorem.",
  "body": "Lagrange's Theorem  Lagrange's theorem   If is a finite group and , then In particular, divides .   "
},
{
  "id": "cor-index-cor",
  "level": "2",
  "url": "sec-cosets.html#cor-index-cor",
  "type": "Corollary",
  "number": "3.8",
  "title": "Equal Number of Left and Right Cosets.",
  "body": "Equal Number of Left and Right Cosets   The number of left cosets of in is equal to the number of right cosets of in .   "
},
{
  "id": "def-index",
  "level": "2",
  "url": "sec-cosets.html#def-index",
  "type": "Definition",
  "number": "3.9",
  "title": "Index.",
  "body": "Index   In finite groups, the common number of left or right cosets of a subgroup in a group is denoted as and is called the index of in .  index    "
},
{
  "id": "ex-d2n-cosets",
  "level": "2",
  "url": "sec-cosets.html#ex-d2n-cosets",
  "type": "Example",
  "number": "3.10",
  "title": "Cosets in <span class=\"process-math\">\\(D_{2n}\\)<\/span>.",
  "body": "Cosets in  For and , the left cosets of in are and the right cosets are Note that these lists are not the same, but they do have the same length. We have , and .  "
},
{
  "id": "cor-lagrange",
  "level": "2",
  "url": "sec-cosets.html#cor-lagrange",
  "type": "Corollary",
  "number": "3.11",
  "title": "Corollaries to Lagrange's Theorem.",
  "body": "Corollaries to Lagrange's Theorem   Let be a finite group.   If , then divides .         If then for all       "
},
{
  "id": "ex-z-cosets",
  "level": "2",
  "url": "sec-cosets.html#ex-z-cosets",
  "type": "Example",
  "number": "3.12",
  "title": "Finite Index in Infinite Group.",
  "body": "Finite Index in Infinite Group  Let and . Then since the cosets are . (Since is abelian, left and right cosets are automatically the same by )  "
},
{
  "id": "exe-left-right-cosets",
  "level": "2",
  "url": "sec-cosets.html#exe-left-right-cosets",
  "type": "Exercise",
  "number": "3.13",
  "title": "Number of Left and Right Cosets (Ininite Version).",
  "body": "Number of Left and Right Cosets (Ininite Version)  Show that even if is not finite the number of left and right cosets of a subgroup is still the same.   Consider the map and show it's a bijection. Why is the inverse needed?  "
},
{
  "id": "thm-index-tower",
  "level": "2",
  "url": "sec-cosets.html#thm-index-tower",
  "type": "Theorem",
  "number": "3.14",
  "title": "The Index Tower.",
  "body": "The Index Tower  index tower   Let be a group (possibly infinite) and subgroups of . Suppose is finite. Then .   "
},
{
  "id": "exe-nontrivial-subgroup",
  "level": "2",
  "url": "sec-cosets.html#exe-nontrivial-subgroup",
  "type": "Exercise",
  "number": "3.15",
  "title": "",
  "body": " Let be a group of composite order. Then contains a non-trivial proper subgroup.  "
},
{
  "id": "exe-fermat",
  "level": "2",
  "url": "sec-cosets.html#exe-fermat",
  "type": "Exercise",
  "number": "3.16",
  "title": "Fermat's Little Theorem.",
  "body": "Fermat's Little Theorem  Prove Fermat's Little Theorem: for every integer and every prime , . Fermat's little theorem   "
},
{
  "id": "outcomes-8",
  "level": "2",
  "url": "sec-cosets.html#outcomes-8",
  "type": "Summary",
  "number": "3.1",
  "title": "",
  "body": "   For any and any , a left and right of in is defined to be     The set of cosets partitions the group and induces an equivlance relation where two elements are related if they belong to the same coset. See: and .     All cosets have the same cardinality, and there are an equal number of left and right cosets. See: and . The number of cosets is called the .     states that the order of any subgroup divides the order of the group, and thus that the order of an element must also divide the order of the group. This is one of the seminal results in group theory.    "
},
{
  "id": "sec-normal-subgroups",
  "level": "1",
  "url": "sec-normal-subgroups.html",
  "type": "Section",
  "number": "3.2",
  "title": "Normal Subgroups",
  "body": "Normal Subgroups  The New Normal    If you are always trying to be normal, you will never know how amazing you can be.   Maya Angelou   Sometimes it is convenient to ignore a certain subobject of a given object and to focus on the remaining properties. Formally, this is done by taking quotients . In contrast to the theory of vector spaces, where the quotient of any vector space by any subspace again naturally forms a vector space, we have to be a little bit more careful in the world of groups. Only special subgroups lead to quotient groups :  Normal Subgroup   A subgroup of a group is normal in , written , if for all . normal subgroup      Anything but Normal   Come up with a better name for normal subgroups than 'normal subgroup'. Give it some oomph. Make it mean something.    Here are some options the author has recently become partial to:    Semiabelian : Yes, its more letters, but so are semigroup, semisimple, semidirect, and semicircle. Imagine if we called all those things normal too! It would be a nightmare. And we would deserve it for our hubris.     Ideal subgroup : Look, its shorter! Normal subgroups and ideals parallel ideas in group and ring theory, and relabeling normal groups in this way would cement these similarities.       However, there are many ways to characterize normal subgroups.  Equivalent Normal Characterizations   Let be a subgroup of a group . The following are equivalent:         for all .     for all .    The equivalence relations on determined by the left and right cosets of coincide.       Arguably, the most important and \/ or intuitive characterization of normal subgroups comes from their relation to homomorphisms. Indeed, though we currenly lack the tools to prove it, tells us that a subgroup is normal if and only if it is the kernel of some homomorphism. Thus, in addition to its necessity in the definition of quotients, a normal subgroup is a simple and unique way to characterize any homomorphism.  Normal Subgroups     The trivial subgroups , of a group are normal subgroups of .    Any subgroup of an abelian group is a normal subgroup.    For any group , .     for all .     .     .     .    The commutator subgroup from is normal in .    The set is normal in .      Normality is not Transitive  Show that being a normal subgroup is not a transitive relation. In other words, find groups such that and , but .    is a good place to start routing around in.   Consider From we have . The group has order , making it ableian from . Thus every subgroup of is normal in by .  Now consider the subgroup . But is not normal in , since for example    Normal Preimages   If is a group homomorphism and then the preimage of , , is a normal subgroup of .    Images not Normal in General  Show that if is a group homomorphism and then need not be a normal subgroup of .   Here is a theorem that will prove exceedingly useful all the way down in .  Unique Order Subgroup is Normal   Let be the only subgroup of order . Then is normal.    We also have some criteria for when a generated subgroup is normal.  Normality and Generated Subgroups  Let be a group and a subset of . Suppose . Prove if and only if for every and .   Or, if we're tired of generating subgroups that aren't as normal as we'd like them to be, we can generate a normal subgroup explicitely.  Generated Normal Subgroup  Let be a group and let be a set. The normal subgroup generated by , denoted , is the intersection of all the normal subgroups of that contain .   Show that is a normal subgroup of .    Show that the elements of can be described as  generated normal subgroup       We conclude this section by taking a sneak peak at the interactions between the index of a subgroup and its normality.  Subgroup of Index is Normal   Show that any subgroup of index two is normal. This means: show that if is a group, is a subgroup and , i.e the number of left (or right) cosets of in is two, then is normal.    Coming soon to an OER near you!     This is a specific case of , a much more powerful theorem that we will prove later on, but we can tackle this smaller piece with the tools we have now.   Converse to Lagrange's Theorem is False converse to Lagrange's theorem  Prove the converse to is false: find a group and an integer such that divides the order of but does not have any subgroups of order .   Take .   Consider , and note that . Suppose by way of contradiction that is subgroup of such that . Notice that , the smallest prime dividing the order of , making normal in .  As there are eight -cycles in , there exists some -cycle, , such that . Consider then and in . Since , it must be the case that either or .    If then . As we have , but as is a subgroup this would mean , which is not the case.  If then , but , and so we have a contradiction. Thus cannot exist, and has no subgroup of order .         A subgroup is a if for all , though there are several .    Abelian subgroups are always normal; in particular, the center of a group is always normal.    If a is the only subgroup of order , then . See: .     The .     "
},
{
  "id": "def-normal-subgroup",
  "level": "2",
  "url": "sec-normal-subgroups.html#def-normal-subgroup",
  "type": "Definition",
  "number": "3.17",
  "title": "Normal Subgroup.",
  "body": "Normal Subgroup   A subgroup of a group is normal in , written , if for all . normal subgroup     "
},
{
  "id": "exe-anything-but-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-anything-but-normal",
  "type": "Discussion",
  "number": "3.1",
  "title": "Anything but Normal.",
  "body": "Anything but Normal   Come up with a better name for normal subgroups than 'normal subgroup'. Give it some oomph. Make it mean something.    Here are some options the author has recently become partial to:    Semiabelian : Yes, its more letters, but so are semigroup, semisimple, semidirect, and semicircle. Imagine if we called all those things normal too! It would be a nightmare. And we would deserve it for our hubris.     Ideal subgroup : Look, its shorter! Normal subgroups and ideals parallel ideas in group and ring theory, and relabeling normal groups in this way would cement these similarities.      "
},
{
  "id": "thm-equivdef-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#thm-equivdef-normal",
  "type": "Theorem",
  "number": "3.18",
  "title": "Equivalent Normal Characterizations.",
  "body": "Equivalent Normal Characterizations   Let be a subgroup of a group . The following are equivalent:         for all .     for all .    The equivalence relations on determined by the left and right cosets of coincide.      "
},
{
  "id": "ex-normal-examples",
  "level": "2",
  "url": "sec-normal-subgroups.html#ex-normal-examples",
  "type": "Example",
  "number": "3.19",
  "title": "Normal Subgroups.",
  "body": "Normal Subgroups     The trivial subgroups , of a group are normal subgroups of .    Any subgroup of an abelian group is a normal subgroup.    For any group , .     for all .     .     .     .    The commutator subgroup from is normal in .    The set is normal in .     "
},
{
  "id": "exe-normality-not-transitive",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-normality-not-transitive",
  "type": "Exercise",
  "number": "3.20",
  "title": "Normality is not Transitive.",
  "body": "Normality is not Transitive  Show that being a normal subgroup is not a transitive relation. In other words, find groups such that and , but .    is a good place to start routing around in.   Consider From we have . The group has order , making it ableian from . Thus every subgroup of is normal in by .  Now consider the subgroup . But is not normal in , since for example   "
},
{
  "id": "prop-normal-subgroups-and-homomorphisms",
  "level": "2",
  "url": "sec-normal-subgroups.html#prop-normal-subgroups-and-homomorphisms",
  "type": "Proposition",
  "number": "3.21",
  "title": "Normal Preimages.",
  "body": "Normal Preimages   If is a group homomorphism and then the preimage of , , is a normal subgroup of .   "
},
{
  "id": "exe-images-need-not-be-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-images-need-not-be-normal",
  "type": "Exercise",
  "number": "3.22",
  "title": "Images not Normal in General.",
  "body": "Images not Normal in General  Show that if is a group homomorphism and then need not be a normal subgroup of .  "
},
{
  "id": "thm-unique-order-subgroup-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#thm-unique-order-subgroup-normal",
  "type": "Theorem",
  "number": "3.23",
  "title": "Unique Order Subgroup is Normal.",
  "body": "Unique Order Subgroup is Normal   Let be the only subgroup of order . Then is normal.   "
},
{
  "id": "exe-normality-and-generated-subgroups",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-normality-and-generated-subgroups",
  "type": "Exercise",
  "number": "3.24",
  "title": "Normality and Generated Subgroups.",
  "body": "Normality and Generated Subgroups  Let be a group and a subset of . Suppose . Prove if and only if for every and .  "
},
{
  "id": "exe-generated-normal-subgroup",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-generated-normal-subgroup",
  "type": "Exercise",
  "number": "3.25",
  "title": "Generated Normal Subgroup.",
  "body": "Generated Normal Subgroup  Let be a group and let be a set. The normal subgroup generated by , denoted , is the intersection of all the normal subgroups of that contain .   Show that is a normal subgroup of .    Show that the elements of can be described as  generated normal subgroup      "
},
{
  "id": "exe-subgroup-index-2-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-subgroup-index-2-normal",
  "type": "Proposition",
  "number": "3.26",
  "title": "Subgroup of Index <span class=\"process-math\">\\(2\\)<\/span> is Normal.",
  "body": "Subgroup of Index is Normal   Show that any subgroup of index two is normal. This means: show that if is a group, is a subgroup and , i.e the number of left (or right) cosets of in is two, then is normal.    Coming soon to an OER near you!   "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "sec-normal-subgroups.html#remark-18",
  "type": "Remark",
  "number": "3.27",
  "title": "",
  "body": " This is a specific case of , a much more powerful theorem that we will prove later on, but we can tackle this smaller piece with the tools we have now.  "
},
{
  "id": "exe-lagrange-converse-false",
  "level": "2",
  "url": "sec-normal-subgroups.html#exe-lagrange-converse-false",
  "type": "Exercise",
  "number": "3.28",
  "title": "Converse to Lagrange's Theorem is False.",
  "body": "Converse to Lagrange's Theorem is False converse to Lagrange's theorem  Prove the converse to is false: find a group and an integer such that divides the order of but does not have any subgroups of order .   Take .   Consider , and note that . Suppose by way of contradiction that is subgroup of such that . Notice that , the smallest prime dividing the order of , making normal in .  As there are eight -cycles in , there exists some -cycle, , such that . Consider then and in . Since , it must be the case that either or .    If then . As we have , but as is a subgroup this would mean , which is not the case.  If then , but , and so we have a contradiction. Thus cannot exist, and has no subgroup of order .    "
},
{
  "id": "outcomes-9",
  "level": "2",
  "url": "sec-normal-subgroups.html#outcomes-9",
  "type": "Summary",
  "number": "3.2",
  "title": "",
  "body": "   A subgroup is a if for all , though there are several .    Abelian subgroups are always normal; in particular, the center of a group is always normal.    If a is the only subgroup of order , then . See: .     The .    "
},
{
  "id": "sec-quotient-groups",
  "level": "1",
  "url": "sec-quotient-groups.html",
  "type": "Section",
  "number": "3.3",
  "title": "Quotient Groups",
  "body": "Quotient Groups  Quotient Groups    Great things are done by a series of small things brought together.   Vincent Van Gogh   We return now to the equivalence relation induced by the set of left (or right) cosets on a group .  Let us ask a question: When does aquire the structure of a group under the operation We need to be worried about whether this operation is independent of choice. That is, if and then must ? In other words, if and , must ?  As it turns out (serendipidous, I know) we discovered the exact property a subgroup needs to ensure its cosets form a well-defined group. At least, normally they do... Get it?   Quotients and Normal Subgroups   Let . The set of (left cosets) forms a group if and only if .    Quotient Group   For any normal subgroup of a group , the quotient group , , is the set of left cosets of in with multiplication given by . quotient group     Old Friends  Let in . It is automatic that is normal since is abelian. The quotient group is our old friend .    Don't forget that the set exists for any subgroup . However, this set only satisfies the axioms of a group when the subgroup is normal.   Modular Integer? Barely Know 'Er!  Argue amongst yourselves what the 'best' notation for the integers should be:  , , , , , or whatever other horrors you can conjure.   Dihedral Quotient   is a normal subgroup of . The quotient has just two elements, and .   Quotient of Commutator Subgroup  Let be a group with commutator subgroup . Prove is abelian.   Special Linear Quotients      Define a map as the composition of where is the matrix with in the upper-left corner, 's along the rest of the diaganal, and 's everywhere else, and the second map is the canonical surjection. Then is easily seen to be a homomorphism and hence so is (since the composition of homomorhisms is a homomorphism). I claim is one-to-one and onto. For any , let and note that has determinant and thus belongs to . So . This proves is onto. If , then and so . This means .   Recalling , we have yet another useful corollary:  Order of Quotient Groups   If is finite we have .    Quotient Map   For any group and normal subgroup of the quotient map  is defined by . quotient map (groups)     Quotient Map is Surjective Homomorphism   For any group and normal subgroup of , the map defined by is a surjective group homomorphism with kernel .    Surjectivity is immediate from the definition. The group homomorphism property follows from the computation below which uses the definition of and the rule for multiplying cosets in : Finally, using , we have .    Normal Subgroup iff Kernel   A subgroup of a group is normal in if and only if is the kernel of a homomorphism with domain .    Coming soon to an OER near you!    Cyclic Center Quotients   Let be a group with center . If is cyclic, then is abelian.        Given , the  is the set of left cosets of in with multiplication given by . This is a well defined group if and only if is normal. See: .     A subgroup is normal if and only if it is the kernel of a homomorphism. See: .     If is finite we have , and the is a surjective homomorphism. See: and .     If is cyclic, then is abelian. See: .      "
},
{
  "id": "thm-quotient-iff-normal",
  "level": "2",
  "url": "sec-quotient-groups.html#thm-quotient-iff-normal",
  "type": "Theorem",
  "number": "3.29",
  "title": "Quotients and Normal Subgroups.",
  "body": "Quotients and Normal Subgroups   Let . The set of (left cosets) forms a group if and only if .   "
},
{
  "id": "def-quotient-group",
  "level": "2",
  "url": "sec-quotient-groups.html#def-quotient-group",
  "type": "Definition",
  "number": "3.30",
  "title": "Quotient Group.",
  "body": "Quotient Group   For any normal subgroup of a group , the quotient group , , is the set of left cosets of in with multiplication given by . quotient group    "
},
{
  "id": "ex-old-friends",
  "level": "2",
  "url": "sec-quotient-groups.html#ex-old-friends",
  "type": "Example",
  "number": "3.31",
  "title": "Old Friends.",
  "body": "Old Friends  Let in . It is automatic that is normal since is abelian. The quotient group is our old friend .  "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "sec-quotient-groups.html#remark-19",
  "type": "Remark",
  "number": "3.32",
  "title": "",
  "body": " Don't forget that the set exists for any subgroup . However, this set only satisfies the axioms of a group when the subgroup is normal.  "
},
{
  "id": "exe-mod-n-iso",
  "level": "2",
  "url": "sec-quotient-groups.html#exe-mod-n-iso",
  "type": "Discussion",
  "number": "3.2",
  "title": "Modular Integer? Barely Know 'Er!",
  "body": "Modular Integer? Barely Know 'Er!  Argue amongst yourselves what the 'best' notation for the integers should be:  , , , , , or whatever other horrors you can conjure.  "
},
{
  "id": "ex-dihedral-quotient",
  "level": "2",
  "url": "sec-quotient-groups.html#ex-dihedral-quotient",
  "type": "Example",
  "number": "3.33",
  "title": "Dihedral Quotient.",
  "body": "Dihedral Quotient   is a normal subgroup of . The quotient has just two elements, and .  "
},
{
  "id": "exe-commutator-quotient-abelian",
  "level": "2",
  "url": "sec-quotient-groups.html#exe-commutator-quotient-abelian",
  "type": "Exercise",
  "number": "3.34",
  "title": "Quotient of Commutator Subgroup.",
  "body": "Quotient of Commutator Subgroup  Let be a group with commutator subgroup . Prove is abelian.  "
},
{
  "id": "exe-gl-sl-iso",
  "level": "2",
  "url": "sec-quotient-groups.html#exe-gl-sl-iso",
  "type": "Exercise",
  "number": "3.35",
  "title": "Special Linear Quotients.",
  "body": "Special Linear Quotients      Define a map as the composition of where is the matrix with in the upper-left corner, 's along the rest of the diaganal, and 's everywhere else, and the second map is the canonical surjection. Then is easily seen to be a homomorphism and hence so is (since the composition of homomorhisms is a homomorphism). I claim is one-to-one and onto. For any , let and note that has determinant and thus belongs to . So . This proves is onto. If , then and so . This means .  "
},
{
  "id": "cor-order-of-quotient",
  "level": "2",
  "url": "sec-quotient-groups.html#cor-order-of-quotient",
  "type": "Corollary",
  "number": "3.36",
  "title": "Order of Quotient Groups.",
  "body": "Order of Quotient Groups   If is finite we have .   "
},
{
  "id": "def-quotient-map",
  "level": "2",
  "url": "sec-quotient-groups.html#def-quotient-map",
  "type": "Definition",
  "number": "3.37",
  "title": "Quotient Map.",
  "body": "Quotient Map   For any group and normal subgroup of the quotient map  is defined by . quotient map (groups)    "
},
{
  "id": "prop-quotient-surj-hom",
  "level": "2",
  "url": "sec-quotient-groups.html#prop-quotient-surj-hom",
  "type": "Proposition",
  "number": "3.38",
  "title": "Quotient Map is Surjective Homomorphism.",
  "body": "Quotient Map is Surjective Homomorphism   For any group and normal subgroup of , the map defined by is a surjective group homomorphism with kernel .    Surjectivity is immediate from the definition. The group homomorphism property follows from the computation below which uses the definition of and the rule for multiplying cosets in : Finally, using , we have .   "
},
{
  "id": "thm-norm-iff-ker",
  "level": "2",
  "url": "sec-quotient-groups.html#thm-norm-iff-ker",
  "type": "Theorem",
  "number": "3.39",
  "title": "Normal Subgroup iff Kernel.",
  "body": "Normal Subgroup iff Kernel   A subgroup of a group is normal in if and only if is the kernel of a homomorphism with domain .    Coming soon to an OER near you!   "
},
{
  "id": "thm-gz-cyclic",
  "level": "2",
  "url": "sec-quotient-groups.html#thm-gz-cyclic",
  "type": "Theorem",
  "number": "3.40",
  "title": "Cyclic Center Quotients.",
  "body": "Cyclic Center Quotients   Let be a group with center . If is cyclic, then is abelian.   "
},
{
  "id": "outcomes-10",
  "level": "2",
  "url": "sec-quotient-groups.html#outcomes-10",
  "type": "Summary",
  "number": "3.3",
  "title": "",
  "body": "   Given , the  is the set of left cosets of in with multiplication given by . This is a well defined group if and only if is normal. See: .     A subgroup is normal if and only if it is the kernel of a homomorphism. See: .     If is finite we have , and the is a surjective homomorphism. See: and .     If is cyclic, then is abelian. See: .     "
},
{
  "id": "sec-products-iso-thms",
  "level": "1",
  "url": "sec-products-iso-thms.html",
  "type": "Section",
  "number": "3.4",
  "title": "Products and the Isomorphism Theorems",
  "body": "Products and the Isomorphism Theorems  The First Isomorphism Theorem    If it's your job to eat a frog, it's best to do it first thing in the morning. And If it's your job to eat two frogs, it's best to eat the biggest one first.   Mark Twain   We come to the so-called Isomorphism Theorems.  UMP for Quotient Groups  UMP for quotient groups   Let be a group and a normal subgroup. If is a homomorphism of groups such that , then     there exists a unique group homomorphism such that the composition of and the quotient map is .    If is onto, then is onto.    Moreover,           If such a exists, it is necessarily unique since is onto. In fact, if then has to be given by the formula We now need to show that this formula determines a well-defined homomorphism: if , then and so , whence . For any we have     The formula for given above ensures that hence is surjective if and only if is surjective.    We have iff iff iff . If for some , then for some and hence for some . Since , we have .       Abelianization  Let be any group, and recall the . In we saw . Now let be any group homomorphism from to an abelian group . Since for all (since is abelian), we have that must contain . By , we get that factors as for a unique group homomorphism .  The group is called the abelianization of and the motto is: a homomorphism from a group to an abelian group factors uniquely through the abelianization. abelianization    First Isomorphism Theorem  first isomorphism theorem for groups   If is a homomorphism of groups, then and the map defined by induces an isomorphism     By , there exists a homomorphism such that , and its kernel consists of just the one element of . So is one-to-one, and the image of is the same as the image of .    Double Divide   If is a homomorphism from a finite group to a group , then divides and .     For any group we have .    Products    Outside of a dog, a book is a man's best friend. Inside of a dog it's too dark to read.   Groucho Marx   Trivially Intersecting Normal Subgroups  Let and be normal subgroups of a group such that . Prove that for all .   Group Product ( )   Let and be subgroups of a group and define the set   product (groups)     Product vs. Direct Product  The product and direct product Whatever that is are not always the same. We will explore this later in    Product Order   For two finite subgroups , .    Products and Normality   Let be a group, and . Then    ,     , and     .       When   If either one of or is a normal subgroup of , then .     The identity does not mean that every pair of elements from and must commute.   but not Abelian   In , let and . Then but and do not commute. The fact that can also be justified by observing that .    The second isomorphism theorem, also known as the diamond isomorphism theorem or the modular law, provides information about the structure of subgroups and their intersections.  Second Isomorphism Theorem  second isomorphism theorem for groups   Let be a group, and . Then there is an isomorphism given by     The first two assertions are left as exercises and since we have . Define a homomorphism by . This is a homomorphism since it is the composition  of homomorphisms. is onto since for all we have . The kernel of is . The result thus follows from the .    The third isomorphism theorem, also known as the factor or quotient theorem, gives a relationship between normal subgroups of a group and their quotient groups.  Third Isomorphism Theorem  third isomorphism theorem for groups   Suppose is a group, , and . Then , and there is an isomorphism given by sending the coset of represented by to .    The first two assertions are immediate from the definitions.  The kernel of the canonical map contains and so by we get an induced homomorhism with . Moreover, we know Finally apply the to .    Lattice Isomorphism Theorem  lattice isomorphism theorem for groups   Let be a group and a normal subgroup with canonical homomorphism . There is an containment-preserving bijection given by for . The inverse is defined for by where is the quotient map. We denote .  Then this bijection enjoys the following properties:     (normal) subgroups correspond to normal subgroups i.e.,      iff and iff      iff and iff        indices are preserved; i.e., and .    the supremums and infimums are preserved (this makes and lattice isomorphisms)      and      and           We have previously shown that the quotient map is a surjective group homomorphism. We show:      is well defined (correct codomain) since for we have (since images of subgroups through group homomorphisms are subgroups by ).     is well defined (correct codomain) since for we have (by again) and for any we have , hence      and are mutual inverses: since is surjective and , with the last equality justified by      Thus, the two functions defined in the statement are well-defined and are mutually inverse.  Since and preserve containments, each of , preserves the order relation of containment.  I will only prove some parts of statements (1), (2), (3) in the theorem.   If and , then holds by part of or by the exercise below, since is surjective. The fact that the inverse function also sends normal subgroups to normal subgroups is a consequence of the statement that inverse images of normal subgroups are normal subgroups. See: .     In the interest of time, I'll only prove the assertion about indices in the special case when is normal. In that case this fact is also an immediate consequence of the since for with we have The general case is a consequence of an exercise from HW 5.     The proof of (3) is omitted.           The tells us for any homomorphism .    For , we define the to be the set  .     if either or are normal. If , then and . See: .     We also have the , , and .     "
},
{
  "id": "thm-ump-quotient",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-ump-quotient",
  "type": "Theorem",
  "number": "3.41",
  "title": "UMP for Quotient Groups.",
  "body": "UMP for Quotient Groups  UMP for quotient groups   Let be a group and a normal subgroup. If is a homomorphism of groups such that , then     there exists a unique group homomorphism such that the composition of and the quotient map is .    If is onto, then is onto.    Moreover,           If such a exists, it is necessarily unique since is onto. In fact, if then has to be given by the formula We now need to show that this formula determines a well-defined homomorphism: if , then and so , whence . For any we have     The formula for given above ensures that hence is surjective if and only if is surjective.    We have iff iff iff . If for some , then for some and hence for some . Since , we have .      "
},
{
  "id": "ex-abelianization",
  "level": "2",
  "url": "sec-products-iso-thms.html#ex-abelianization",
  "type": "Example",
  "number": "3.42",
  "title": "Abelianization.",
  "body": "Abelianization  Let be any group, and recall the . In we saw . Now let be any group homomorphism from to an abelian group . Since for all (since is abelian), we have that must contain . By , we get that factors as for a unique group homomorphism .  The group is called the abelianization of and the motto is: a homomorphism from a group to an abelian group factors uniquely through the abelianization. abelianization   "
},
{
  "id": "thm-fit-group",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-fit-group",
  "type": "Theorem",
  "number": "3.43",
  "title": "First Isomorphism Theorem.",
  "body": "First Isomorphism Theorem  first isomorphism theorem for groups   If is a homomorphism of groups, then and the map defined by induces an isomorphism     By , there exists a homomorphism such that , and its kernel consists of just the one element of . So is one-to-one, and the image of is the same as the image of .   "
},
{
  "id": "cor-homom-finite-groups",
  "level": "2",
  "url": "sec-products-iso-thms.html#cor-homom-finite-groups",
  "type": "Corollary",
  "number": "3.44",
  "title": "Double Divide.",
  "body": "Double Divide   If is a homomorphism from a finite group to a group , then divides and .   "
},
{
  "id": "exe-quotients-inner-automorphisms",
  "level": "2",
  "url": "sec-products-iso-thms.html#exe-quotients-inner-automorphisms",
  "type": "Exercise",
  "number": "3.45",
  "title": "<span class=\"process-math\">\\(G\/Z(G)\\cong\\Inn(G)\\)<\/span>.",
  "body": " For any group we have .  "
},
{
  "id": "exe-trivially-intersecting-normal-subgroups",
  "level": "2",
  "url": "sec-products-iso-thms.html#exe-trivially-intersecting-normal-subgroups",
  "type": "Exercise",
  "number": "3.46",
  "title": "Trivially Intersecting Normal Subgroups.",
  "body": "Trivially Intersecting Normal Subgroups  Let and be normal subgroups of a group such that . Prove that for all .  "
},
{
  "id": "def-HK",
  "level": "2",
  "url": "sec-products-iso-thms.html#def-HK",
  "type": "Definition",
  "number": "3.47",
  "title": "Group Product (<span class=\"process-math\">\\(HK\\)<\/span>).",
  "body": "Group Product ( )   Let and be subgroups of a group and define the set   product (groups)    "
},
{
  "id": "warning-1",
  "level": "2",
  "url": "sec-products-iso-thms.html#warning-1",
  "type": "Warning",
  "number": "3.48",
  "title": "Product vs. Direct Product.",
  "body": "Product vs. Direct Product  The product and direct product Whatever that is are not always the same. We will explore this later in   "
},
{
  "id": "thm-hk-order",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-hk-order",
  "type": "Theorem",
  "number": "3.49",
  "title": "Product Order.",
  "body": "Product Order   For two finite subgroups , .   "
},
{
  "id": "thm-hn-normal",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-hn-normal",
  "type": "Theorem",
  "number": "3.50",
  "title": "Products and Normality.",
  "body": "Products and Normality   Let be a group, and . Then    ,     , and     .      "
},
{
  "id": "cor-hk-normal",
  "level": "2",
  "url": "sec-products-iso-thms.html#cor-hk-normal",
  "type": "Corollary",
  "number": "3.51",
  "title": "When <span class=\"process-math\">\\(HK=KH\\)<\/span>.",
  "body": "When   If either one of or is a normal subgroup of , then .   "
},
{
  "id": "warning-2",
  "level": "2",
  "url": "sec-products-iso-thms.html#warning-2",
  "type": "Warning",
  "number": "3.52",
  "title": "",
  "body": " The identity does not mean that every pair of elements from and must commute.  "
},
{
  "id": "ex-hk-non-commuting-elements",
  "level": "2",
  "url": "sec-products-iso-thms.html#ex-hk-non-commuting-elements",
  "type": "Example",
  "number": "3.53",
  "title": "<span class=\"process-math\">\\(HK=KH\\)<\/span> but not Abelian.",
  "body": "but not Abelian   In , let and . Then but and do not commute. The fact that can also be justified by observing that .   "
},
{
  "id": "thm-sit-group",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-sit-group",
  "type": "Theorem",
  "number": "3.54",
  "title": "Second Isomorphism Theorem.",
  "body": "Second Isomorphism Theorem  second isomorphism theorem for groups   Let be a group, and . Then there is an isomorphism given by     The first two assertions are left as exercises and since we have . Define a homomorphism by . This is a homomorphism since it is the composition  of homomorphisms. is onto since for all we have . The kernel of is . The result thus follows from the .   "
},
{
  "id": "thm-tit-group",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-tit-group",
  "type": "Theorem",
  "number": "3.55",
  "title": "Third Isomorphism Theorem.",
  "body": "Third Isomorphism Theorem  third isomorphism theorem for groups   Suppose is a group, , and . Then , and there is an isomorphism given by sending the coset of represented by to .    The first two assertions are immediate from the definitions.  The kernel of the canonical map contains and so by we get an induced homomorhism with . Moreover, we know Finally apply the to .   "
},
{
  "id": "thm-lit-group",
  "level": "2",
  "url": "sec-products-iso-thms.html#thm-lit-group",
  "type": "Theorem",
  "number": "3.56",
  "title": "Lattice Isomorphism Theorem.",
  "body": "Lattice Isomorphism Theorem  lattice isomorphism theorem for groups   Let be a group and a normal subgroup with canonical homomorphism . There is an containment-preserving bijection given by for . The inverse is defined for by where is the quotient map. We denote .  Then this bijection enjoys the following properties:     (normal) subgroups correspond to normal subgroups i.e.,      iff and iff      iff and iff        indices are preserved; i.e., and .    the supremums and infimums are preserved (this makes and lattice isomorphisms)      and      and           We have previously shown that the quotient map is a surjective group homomorphism. We show:      is well defined (correct codomain) since for we have (since images of subgroups through group homomorphisms are subgroups by ).     is well defined (correct codomain) since for we have (by again) and for any we have , hence      and are mutual inverses: since is surjective and , with the last equality justified by      Thus, the two functions defined in the statement are well-defined and are mutually inverse.  Since and preserve containments, each of , preserves the order relation of containment.  I will only prove some parts of statements (1), (2), (3) in the theorem.   If and , then holds by part of or by the exercise below, since is surjective. The fact that the inverse function also sends normal subgroups to normal subgroups is a consequence of the statement that inverse images of normal subgroups are normal subgroups. See: .     In the interest of time, I'll only prove the assertion about indices in the special case when is normal. In that case this fact is also an immediate consequence of the since for with we have The general case is a consequence of an exercise from HW 5.     The proof of (3) is omitted.      "
},
{
  "id": "outcomes-11",
  "level": "2",
  "url": "sec-products-iso-thms.html#outcomes-11",
  "type": "Summary",
  "number": "3.4",
  "title": "",
  "body": "   The tells us for any homomorphism .    For , we define the to be the set  .     if either or are normal. If , then and . See: .     We also have the , , and .    "
},
{
  "id": "graction",
  "level": "1",
  "url": "graction.html",
  "type": "Section",
  "number": "4.1",
  "title": "Group Actions",
  "body": "Group Actions  Time to Act    Actions speak louder than words.   Anthony of Padua   We come to one of the central concepts in group theory, that of an action of a group on a set.  Group Action   For a group and set , an action of on is a function typically written as , such that      for all and .     for all .    group action  -action      To make the first axiom clearer, throughout this section we will write for the action of on and no symbol (concatenation) for the multiplication of two elements in the group .   Group Actions on Arbitrary Sets    Trivial Action  For any group and any set , defines an action, the trivial action . trivial action    Left Multiplication  For any group and any set , defines an action, the left multiplication action . And similarly for right multiplication, yet we do not speak of that here.  left multiplication action    Conjugation  For any group and any set , defines an action, the conjugation action . conjugation action       Permutation Action   The group acts on the set such that .     Though the set need not be a group, it certainly can be. Indeed, a group can act on itself, as we will see in .   One can also think of group actions as homomorphisms.  Permutation Representation  permutation representation   Assume is a group and is a set.     If is an action of on , then the function defined as , where is the function given by , is a well defined homomorphism of groups.    Conversely, if is a group homomorphism, the rule defines an action of on .       We have thus and a similar argument shows that   Finally, we wish to show , equivalently . Since holds for all , this proves is a homomorphism.  Given a homomorphism , the function defined as is an action because , and .    An immediate perk of this result is that we already know a lot of things about homomorphisms, and we can thus extend that knowledge into the realm of group actions at our leisure.  Let's see some examples.  Common Permutation Representations     For the trivial action, the associated group homomorphism is by     For left multiplication, the associated group homomorphism is by , where     For the conjugation action, the associated group homomorphism is by , where       Faithful   An action of a group on a set is called faithful if the associated group homomorphism is injective. Equivalently, an action is faithful if and only if for a given , whenever for all , it must be that . faithful action     The Faithful Action  Verify that the two definitions of a faithful action are indeed equivalent. That is, show that the permutation representation of a group action is injective if and only if for a given , whenever for all , it must be that .   Losing Faith  Should an action which is not faithful be called unfaithful ? Adulterous ? Discuss.   Trivial Adultery  The trivial action is not faithful.   Transitive   An action is transitive if for all there is a such that . transitive action      In many cases, transitivity and faithfulness are related concepts. As we will see later, if a group action is transitive on a set , then the action is faithful if and only if the stabilizer of any element of is trivial. In these situations we can identify the group with a subgroup of the symmetric group on , and use this identification to study the group.       One of the central topics of group theory is the . The two main group actions we will examine are that of and .    Through the group actions can be viewed as homomorphisms. This will be used extensively.    Group actions can be both and .     "
},
{
  "id": "def-graction",
  "level": "2",
  "url": "graction.html#def-graction",
  "type": "Definition",
  "number": "4.1",
  "title": "Group Action.",
  "body": "Group Action   For a group and set , an action of on is a function typically written as , such that      for all and .     for all .    group action  -action    "
},
{
  "id": "ex-group-actions",
  "level": "2",
  "url": "graction.html#ex-group-actions",
  "type": "Example",
  "number": "4.2",
  "title": "Group Actions on Arbitrary Sets.",
  "body": "Group Actions on Arbitrary Sets    Trivial Action  For any group and any set , defines an action, the trivial action . trivial action    Left Multiplication  For any group and any set , defines an action, the left multiplication action . And similarly for right multiplication, yet we do not speak of that here.  left multiplication action    Conjugation  For any group and any set , defines an action, the conjugation action . conjugation action      "
},
{
  "id": "ex-perm-act",
  "level": "2",
  "url": "graction.html#ex-perm-act",
  "type": "Example",
  "number": "4.3",
  "title": "Permutation Action.",
  "body": "Permutation Action   The group acts on the set such that .   "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "graction.html#remark-20",
  "type": "Remark",
  "number": "4.4",
  "title": "",
  "body": " Though the set need not be a group, it certainly can be. Indeed, a group can act on itself, as we will see in .  "
},
{
  "id": "thm-permrep",
  "level": "2",
  "url": "graction.html#thm-permrep",
  "type": "Theorem",
  "number": "4.5",
  "title": "Permutation Representation.",
  "body": "Permutation Representation  permutation representation   Assume is a group and is a set.     If is an action of on , then the function defined as , where is the function given by , is a well defined homomorphism of groups.    Conversely, if is a group homomorphism, the rule defines an action of on .       We have thus and a similar argument shows that   Finally, we wish to show , equivalently . Since holds for all , this proves is a homomorphism.  Given a homomorphism , the function defined as is an action because , and .   "
},
{
  "id": "ex-permrep-examples",
  "level": "2",
  "url": "graction.html#ex-permrep-examples",
  "type": "Example",
  "number": "4.6",
  "title": "Common Permutation Representations.",
  "body": "Common Permutation Representations     For the trivial action, the associated group homomorphism is by     For left multiplication, the associated group homomorphism is by , where     For the conjugation action, the associated group homomorphism is by , where      "
},
{
  "id": "def-faithful-action",
  "level": "2",
  "url": "graction.html#def-faithful-action",
  "type": "Definition",
  "number": "4.7",
  "title": "Faithful.",
  "body": "Faithful   An action of a group on a set is called faithful if the associated group homomorphism is injective. Equivalently, an action is faithful if and only if for a given , whenever for all , it must be that . faithful action    "
},
{
  "id": "exe-faithful-action",
  "level": "2",
  "url": "graction.html#exe-faithful-action",
  "type": "Exercise",
  "number": "4.8",
  "title": "The Faithful Action.",
  "body": "The Faithful Action  Verify that the two definitions of a faithful action are indeed equivalent. That is, show that the permutation representation of a group action is injective if and only if for a given , whenever for all , it must be that .  "
},
{
  "id": "exploration-3",
  "level": "2",
  "url": "graction.html#exploration-3",
  "type": "Discussion",
  "number": "4.1",
  "title": "Losing Faith.",
  "body": "Losing Faith  Should an action which is not faithful be called unfaithful ? Adulterous ? Discuss.  "
},
{
  "id": "def-trivial-action-not-faithful",
  "level": "2",
  "url": "graction.html#def-trivial-action-not-faithful",
  "type": "Example",
  "number": "4.9",
  "title": "Trivial Adultery.",
  "body": "Trivial Adultery  The trivial action is not faithful.  "
},
{
  "id": "def-transitive-action",
  "level": "2",
  "url": "graction.html#def-transitive-action",
  "type": "Definition",
  "number": "4.10",
  "title": "Transitive.",
  "body": "Transitive   An action is transitive if for all there is a such that . transitive action    "
},
{
  "id": "remark-21",
  "level": "2",
  "url": "graction.html#remark-21",
  "type": "Remark",
  "number": "4.11",
  "title": "",
  "body": " In many cases, transitivity and faithfulness are related concepts. As we will see later, if a group action is transitive on a set , then the action is faithful if and only if the stabilizer of any element of is trivial. In these situations we can identify the group with a subgroup of the symmetric group on , and use this identification to study the group.  "
},
{
  "id": "outcomes-12",
  "level": "2",
  "url": "graction.html#outcomes-12",
  "type": "Summary",
  "number": "4.1",
  "title": "",
  "body": "   One of the central topics of group theory is the . The two main group actions we will examine are that of and .    Through the group actions can be viewed as homomorphisms. This will be used extensively.    Group actions can be both and .    "
},
{
  "id": "sec-left-mult-conjugation",
  "level": "1",
  "url": "sec-left-mult-conjugation.html",
  "type": "Section",
  "number": "4.2",
  "title": "Self Actions and Conjugacy",
  "body": "Self Actions and Conjugacy  Self Actions    Selfless action is a source of strength.   Mahatma Ghandi   Groups Acting on Themselves     Left Regular Action  Let be any group and define an action of on itself by the rule This is also known as the left regular action  left regular action    Self Conjugation Action  Let be any group and fix an element . Define the conjugation action of on itself by setting This is also known as self-conjugation  self-conjugation         Though called the left regular action, we usually say Let act on itself my left multiplication , as that is more easily understood.   Kernel of the Conjugation Action   The kernel of the permutation representation for the conjugation action is the center .    If is the permutation representation for acting on by , then      Faithful Self Actions      The left regular action is faithful.    The self conjugation action is faithful if and only if .       A group may also act on its cosets.  Actions on Cosets   For a subgroup , consider the set of left cosets . Then acts on my left multiplication.    Largest Normal Subgroup   Let be a subgroup of a group , and let act on the set of left cosets by left multiplication . Let denote the permutation representation associated to this action. Then  the action described above is transitive     the subgroup described in (2) is the largest (with respect to containment) normal subgroup of contained in .      Smallest Prime Index is Normal   Let be a finite group and let be a subgroup of of index , where is the smallest prime divisor of the order of . Then is normal in .    Let and note that . Let denote the kernel of the permutation representation generated by acting on by left multiplication.  The tells us that . Thus by . Let . Then for all , making for all including . Thus .  This yields . Let , giving us . As we have , so . But is the smallest prime dividing the order of , and thus , making and .     Conjugacy    Words may inspire but only action creates change.   Simon Sinek   Conjugate   Let be a group. Two elements are conjugate if there is with . Two subsets are conjugate if there is with . conjugate     Conjugacy Class   The conjugacy class of an element is . conjugacy class      Conjugacy Class Partition   The conjugacy classes of a group partition the group.    We will not prove this result here, as it is really a specific case of , which we examine in the next section.    The conjugacy classes for are    ,    all two cycles of which there are ,    all three cycles of which there are ,    all four cycles of which there are , and    all product of two disjoint two cycles of which there are .       Here is a convenient way of checking the conjugacy of two permutations.  Conjugate Permutations   Two elements of are conjugate if and only if they have the same cycle type.    If two elements of are conjugate, say , then they have the same cycle type, since we may write as a product of disjoint cycles and then apply . Indeed, and the shows that the right-side is a product of disjoint cycles.    Normal Subgroups are Unions of Conjugacy Classes   Let . Then is the disjoint union of some of the conjugacy classes in .    Define the conjugation action of on by for all and . Since this is well defined. The two properties in the definition of the action hold for the action of by on since they hold more generally for the action of by conjugation on . Therefore this is indeed an action. The orbits of elements under this action are . Thus the conjugacy classes of the elements of partition .        Groups may act on themselves by left multiplication and conjugation. See: .     The is faithful, whereas the is faithful if and only if the center of the group is trivial. This is because the is the center of the group.    For , may also act on the set . See: . This action is transitive, and the kernel of the action is the largest normal subgroup of contained in . See:     A subgroup with an index , where is the smallest prime divisor of the order of , is normal in . See:     A of an element is the set of all elements to . Normal subgroups are disjoint unions of conjugacy classes of . See: .      "
},
{
  "id": "ex-self-actions",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#ex-self-actions",
  "type": "Example",
  "number": "4.12",
  "title": "Groups Acting on Themselves.",
  "body": "Groups Acting on Themselves     Left Regular Action  Let be any group and define an action of on itself by the rule This is also known as the left regular action  left regular action    Self Conjugation Action  Let be any group and fix an element . Define the conjugation action of on itself by setting This is also known as self-conjugation  self-conjugation       "
},
{
  "id": "lem-conj-ker",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#lem-conj-ker",
  "type": "Lemma",
  "number": "4.13",
  "title": "Kernel of the Conjugation Action.",
  "body": "Kernel of the Conjugation Action   The kernel of the permutation representation for the conjugation action is the center .    If is the permutation representation for acting on by , then     "
},
{
  "id": "thm-faithful-self-actions",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#thm-faithful-self-actions",
  "type": "Theorem",
  "number": "4.14",
  "title": "Faithful Self Actions.",
  "body": "Faithful Self Actions      The left regular action is faithful.    The self conjugation action is faithful if and only if .      "
},
{
  "id": "ex-coset-mult",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#ex-coset-mult",
  "type": "Example",
  "number": "4.15",
  "title": "Actions on Cosets.",
  "body": "Actions on Cosets   For a subgroup , consider the set of left cosets . Then acts on my left multiplication.   "
},
{
  "id": "lem-largest-normal-subgroup",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#lem-largest-normal-subgroup",
  "type": "Lemma",
  "number": "4.16",
  "title": "Largest Normal Subgroup.",
  "body": "Largest Normal Subgroup   Let be a subgroup of a group , and let act on the set of left cosets by left multiplication . Let denote the permutation representation associated to this action. Then  the action described above is transitive     the subgroup described in (2) is the largest (with respect to containment) normal subgroup of contained in .     "
},
{
  "id": "thm-smallest-prime-normal",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#thm-smallest-prime-normal",
  "type": "Theorem",
  "number": "4.17",
  "title": "Smallest Prime Index is Normal.",
  "body": "Smallest Prime Index is Normal   Let be a finite group and let be a subgroup of of index , where is the smallest prime divisor of the order of . Then is normal in .    Let and note that . Let denote the kernel of the permutation representation generated by acting on by left multiplication.  The tells us that . Thus by . Let . Then for all , making for all including . Thus .  This yields . Let , giving us . As we have , so . But is the smallest prime dividing the order of , and thus , making and .   "
},
{
  "id": "def-conjugate",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#def-conjugate",
  "type": "Definition",
  "number": "4.18",
  "title": "Conjugate.",
  "body": "Conjugate   Let be a group. Two elements are conjugate if there is with . Two subsets are conjugate if there is with . conjugate    "
},
{
  "id": "def-conjugacy-class",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#def-conjugacy-class",
  "type": "Definition",
  "number": "4.19",
  "title": "Conjugacy Class.",
  "body": "Conjugacy Class   The conjugacy class of an element is . conjugacy class     "
},
{
  "id": "prop-conj-part",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#prop-conj-part",
  "type": "Proposition",
  "number": "4.20",
  "title": "Conjugacy Class Partition.",
  "body": "Conjugacy Class Partition   The conjugacy classes of a group partition the group.   "
},
{
  "id": "example-30",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#example-30",
  "type": "Example",
  "number": "4.21",
  "title": "",
  "body": "  The conjugacy classes for are    ,    all two cycles of which there are ,    all three cycles of which there are ,    all four cycles of which there are , and    all product of two disjoint two cycles of which there are .      "
},
{
  "id": "prop-perm-conj",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#prop-perm-conj",
  "type": "Proposition",
  "number": "4.22",
  "title": "Conjugate Permutations.",
  "body": "Conjugate Permutations   Two elements of are conjugate if and only if they have the same cycle type.    If two elements of are conjugate, say , then they have the same cycle type, since we may write as a product of disjoint cycles and then apply . Indeed, and the shows that the right-side is a product of disjoint cycles.   "
},
{
  "id": "thm-normal-union-of-conjugacy-classes",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#thm-normal-union-of-conjugacy-classes",
  "type": "Theorem",
  "number": "4.23",
  "title": "Normal Subgroups are Unions of Conjugacy Classes.",
  "body": "Normal Subgroups are Unions of Conjugacy Classes   Let . Then is the disjoint union of some of the conjugacy classes in .    Define the conjugation action of on by for all and . Since this is well defined. The two properties in the definition of the action hold for the action of by on since they hold more generally for the action of by conjugation on . Therefore this is indeed an action. The orbits of elements under this action are . Thus the conjugacy classes of the elements of partition .   "
},
{
  "id": "outcomes-13",
  "level": "2",
  "url": "sec-left-mult-conjugation.html#outcomes-13",
  "type": "Summary",
  "number": "4.2",
  "title": "",
  "body": "   Groups may act on themselves by left multiplication and conjugation. See: .     The is faithful, whereas the is faithful if and only if the center of the group is trivial. This is because the is the center of the group.    For , may also act on the set . See: . This action is transitive, and the kernel of the action is the largest normal subgroup of contained in . See:     A subgroup with an index , where is the smallest prime divisor of the order of , is normal in . See:     A of an element is the set of all elements to . Normal subgroups are disjoint unions of conjugacy classes of . See: .     "
},
{
  "id": "sec-orbit-stab-class-eq",
  "level": "1",
  "url": "sec-orbit-stab-class-eq.html",
  "type": "Section",
  "number": "4.3",
  "title": "Orbits and Stabilizers",
  "body": "Orbits and Stabilizers  In a Stable Orbit    Being born in a stable does not make one a horse.   Arthur Wellesley   The information encoded in a group action has two basic parts: one part tells us where points go and the other part tells us how points stay put. The following terminology refers to these ideas.  Orbit   Let be a group acting on a set . For an element the orbit of is  orbit      A fun fact about orbits is that they've secretly been at the heart of everything we've been doing so far.  Familiar Orbits   Let be a group.   Let act upon itself by . Under this action, .    Let act upon itself by . Under this action, .       All the way back in we proved that the set of cosets induced an equivalence relation on the group. As we saw in , left cosets turn out to be a special kind of orbit. Luckily for us, the equivalence relation generalizes.    Let be a group acting on a set . The equivalence relation on induced by the action of , written , is defined by if and only if there is a such that . The equivalence classes of are the orbits. equivalence relation induced by a group action     Orbits Partition the Group   Let be a group acting on a set . Then    is an equivalence relation;    for any , either or ; and     .       We'll have a lot more to say about orbits, but first they'll need a friend.  Stabilizer   Let be a group acting on a set . For an element the stabilizer is  stabilizer       Sometimes (including on old qualifying exams) the notation is used to denote the stabilizer. Given that this notation gives no context as to what the set is or what it does, we will stick to .   Stabilizers are Subgroups  The stabilizer is a subgroup of .   One of the most important facts about the action of a group on a finite set is the following:  The Length of the Orbit is the Index of the Stabilizer (LOIS)  LOIS   Let be a group that acts on a finite set via . For any we have     Let be the collection of left cosets of in . Define a function by . This function is well defined and one-to-one: The function is onto by definition of . Thus is a bijection and it yields equalities     Length isn't a word we have used to describe size or cardinality before, but I suppose that SOIS and COIS just don't quite roll of the tongue quite the same.  Orbit-Stabilizer Theorem  orbit-stabilizer theorem   Let be a finite group that acts on a finite set via . For any we have      Take note that only applies when is a finite group.   Transitive iff One Orbit   An action is transitive if and only if there is exactly one orbit under the action. Similarly, an action is transitive if and only if every stabilizer is trivial.    Lets look at some group actions of a more geometric flavor. What do you think geometry tastes like? Which field of mathematics would taste the best?   Symmetries of the Cube  Let be the group of rotational symmetries of the cube and let act on the collection of faces of the cube in the evident way. This action is transitive and so the one and only orbit has length . It follows that for any face of the cube, has index and, since we already know that , it follows from that . That is, there are four symmetries that map to itself. Indeed, they are the rotations by , , or degrees about the line of symmetry passing through the mid-point of and the mid-point of the opposite face.   That was fun and all, but I just feel like there weren't enough faces...  Symmetries of the Dodecahedron  Let be the group of rotatoinal symmetries of the dodecahedron ( pentagonal faces). The evident action of on the twleve faces is transitive. For each face , clearly has elements: the five rotations about the line joining the midpoint of to the midpoint of the face on the opposite side. Since and , we conclude .   As a final note, we are now able to connect the concepts of transitive and faithful actions in a more meaningful way.  Transitive and Faithful   Suppose that is an abelian group acting transitively and faithfully on a set . Then .    Let . As the action is transitive, by the exercise above we have that the kernel of the action is the intersection of over all . However, as is abelian, for all . Hence, the kernel of the action is for any . On the other hand, the action is faithful, which means the kernel of the action is the identity. It follows that for every . Finally, as the action is transitive, for some (any) . By , .     The Class Equation    Let the others have the charisma. I've got the class.   George H. W. Bush   Centralizer   Let be a group. For any , is called the centralizer of in  centralizer       Many texts use the notation for the centralzier and for conjugacy classes. However, given that the center of a group is denoted with , we argue that makes more intuitive sense for the centralizer, freeing up for conjugacy classes.   Center is Intersection of Centrilizers  Prove that    Normalizer   Let be a group. For any , is called the normalizer of in . normalizer       Notice that when consists of just one element, , we have .    Notation Check  There have been a lot of new sets introduced recently, all of whom seem to be flying around with reckless abandon. Here's a quick refresher:  Let be a group acting on a set , and let .    : The of in .     The of in .     The of in .     The of in .     The of in .      Conjugation Actions and LOIS   Let be a group.     Then acts on by . For all , the orbit of is the conjugacy class of , and .    Then acts on the power set by . For all , and .       Size of Conjugacy Class Divides   For a finite group , the size of any conjugacy class divides .    Class Equation  class equation   Let be a finite group and let be a list of unique representatives of all of the conjugacy classes of of size greater than . Then     The elements of are precisely the group elements that are conjugate to only themselves; that is, they are the one-element orbits for the conjugation action. Because the conjugacy classes (orbits of the conjugation action) partition we have For each as in the statement, by , we have . The follows from substituting this into the equation above.    The provides a way of decomposing a group into its conjugacy classes, which are fundamental building blocks of the group and are essential in more advanced topics, such as representation and character theory.  It also gives us information about the size and structure of the center of a group. (Read: when a proof involves the center of a group from here on out, the is probably a good place to start)      In a group action, the of an element is the set of points that the element is mapped to under the action, and the is set of all points that fix .    Orbits induce an equivalence relation and partition on . See: and They correspond to cosets under the and conjugacy classes under the . See: .      , (LOIS), tells us and the yields .    An action is transitive if and only if there is exactly one orbit under the action. Similarly, an action is transitive if and only if every stabilizer is trivial. See: .     The of an element is the set of all elements that commute with it. The of a set is the set of elements that fix the set under conjugation.    When acts on itself by conjugation, we have and . See:     The yields , where are the list of unique representatives of all of the conjugacy classes of of size greater than .     "
},
{
  "id": "def-orbit",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-orbit",
  "type": "Definition",
  "number": "4.24",
  "title": "Orbit.",
  "body": "Orbit   Let be a group acting on a set . For an element the orbit of is  orbit     "
},
{
  "id": "ex-familiar-orbits",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#ex-familiar-orbits",
  "type": "Example",
  "number": "4.25",
  "title": "Familiar Orbits.",
  "body": "Familiar Orbits   Let be a group.   Let act upon itself by . Under this action, .    Let act upon itself by . Under this action, .      "
},
{
  "id": "def-orbit-equiv",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-orbit-equiv",
  "type": "Definition",
  "number": "4.26",
  "title": "",
  "body": "  Let be a group acting on a set . The equivalence relation on induced by the action of , written , is defined by if and only if there is a such that . The equivalence classes of are the orbits. equivalence relation induced by a group action    "
},
{
  "id": "thm-orbits-partition",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-orbits-partition",
  "type": "Theorem",
  "number": "4.27",
  "title": "Orbits Partition the Group.",
  "body": "Orbits Partition the Group   Let be a group acting on a set . Then    is an equivalence relation;    for any , either or ; and     .      "
},
{
  "id": "def-stab",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-stab",
  "type": "Definition",
  "number": "4.28",
  "title": "Stabilizer.",
  "body": "Stabilizer   Let be a group acting on a set . For an element the stabilizer is  stabilizer     "
},
{
  "id": "exe-stabilizer-is-subgroup",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#exe-stabilizer-is-subgroup",
  "type": "Exercise",
  "number": "4.29",
  "title": "Stabilizers are Subgroups.",
  "body": "Stabilizers are Subgroups  The stabilizer is a subgroup of .  "
},
{
  "id": "thm-LOIS",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-LOIS",
  "type": "Theorem",
  "number": "4.30",
  "title": "The Length of the Orbit is the Index of the Stabilizer (LOIS).",
  "body": "The Length of the Orbit is the Index of the Stabilizer (LOIS)  LOIS   Let be a group that acts on a finite set via . For any we have     Let be the collection of left cosets of in . Define a function by . This function is well defined and one-to-one: The function is onto by definition of . Thus is a bijection and it yields equalities    "
},
{
  "id": "thm-orbit-stabilizer",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-orbit-stabilizer",
  "type": "Theorem",
  "number": "4.31",
  "title": "Orbit-Stabilizer Theorem.",
  "body": "Orbit-Stabilizer Theorem  orbit-stabilizer theorem   Let be a finite group that acts on a finite set via . For any we have    "
},
{
  "id": "warning-3",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#warning-3",
  "type": "Warning",
  "number": "4.32",
  "title": "",
  "body": " Take note that only applies when is a finite group.  "
},
{
  "id": "cor-transitive-orbit",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#cor-transitive-orbit",
  "type": "Corollary",
  "number": "4.33",
  "title": "Transitive iff One Orbit.",
  "body": "Transitive iff One Orbit   An action is transitive if and only if there is exactly one orbit under the action. Similarly, an action is transitive if and only if every stabilizer is trivial.   "
},
{
  "id": "ex-cube",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#ex-cube",
  "type": "Example",
  "number": "4.34",
  "title": "Symmetries of the Cube.",
  "body": "Symmetries of the Cube  Let be the group of rotational symmetries of the cube and let act on the collection of faces of the cube in the evident way. This action is transitive and so the one and only orbit has length . It follows that for any face of the cube, has index and, since we already know that , it follows from that . That is, there are four symmetries that map to itself. Indeed, they are the rotations by , , or degrees about the line of symmetry passing through the mid-point of and the mid-point of the opposite face.  "
},
{
  "id": "ex-dodec",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#ex-dodec",
  "type": "Example",
  "number": "4.35",
  "title": "Symmetries of the Dodecahedron.",
  "body": "Symmetries of the Dodecahedron  Let be the group of rotatoinal symmetries of the dodecahedron ( pentagonal faces). The evident action of on the twleve faces is transitive. For each face , clearly has elements: the five rotations about the line joining the midpoint of to the midpoint of the face on the opposite side. Since and , we conclude .  "
},
{
  "id": "thm-transfaith",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-transfaith",
  "type": "Theorem",
  "number": "4.36",
  "title": "Transitive and Faithful.",
  "body": "Transitive and Faithful   Suppose that is an abelian group acting transitively and faithfully on a set . Then .    Let . As the action is transitive, by the exercise above we have that the kernel of the action is the intersection of over all . However, as is abelian, for all . Hence, the kernel of the action is for any . On the other hand, the action is faithful, which means the kernel of the action is the identity. It follows that for every . Finally, as the action is transitive, for some (any) . By , .   "
},
{
  "id": "def-centralizer",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-centralizer",
  "type": "Definition",
  "number": "4.37",
  "title": "Centralizer.",
  "body": "Centralizer   Let be a group. For any , is called the centralizer of in  centralizer     "
},
{
  "id": "exe-centrilizer-intersection-is-center",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#exe-centrilizer-intersection-is-center",
  "type": "Exercise",
  "number": "4.38",
  "title": "Center is Intersection of Centrilizers.",
  "body": "Center is Intersection of Centrilizers  Prove that   "
},
{
  "id": "def-normalizer",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#def-normalizer",
  "type": "Definition",
  "number": "4.39",
  "title": "Normalizer.",
  "body": "Normalizer   Let be a group. For any , is called the normalizer of in . normalizer     "
},
{
  "id": "remark-22",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#remark-22",
  "type": "Remark",
  "number": "4.40",
  "title": "",
  "body": " Notice that when consists of just one element, , we have .  "
},
{
  "id": "lem-conjugation-and-lois",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#lem-conjugation-and-lois",
  "type": "Lemma",
  "number": "4.41",
  "title": "Conjugation Actions and LOIS.",
  "body": "Conjugation Actions and LOIS   Let be a group.     Then acts on by . For all , the orbit of is the conjugacy class of , and .    Then acts on the power set by . For all , and .      "
},
{
  "id": "thm-conjugacy-divides-order",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-conjugacy-divides-order",
  "type": "Theorem",
  "number": "4.42",
  "title": "Size of Conjugacy Class Divides <span class=\"process-math\">\\(|G|\\)<\/span>.",
  "body": "Size of Conjugacy Class Divides   For a finite group , the size of any conjugacy class divides .   "
},
{
  "id": "thm-class-eq",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#thm-class-eq",
  "type": "Theorem",
  "number": "4.43",
  "title": "Class Equation.",
  "body": "Class Equation  class equation   Let be a finite group and let be a list of unique representatives of all of the conjugacy classes of of size greater than . Then     The elements of are precisely the group elements that are conjugate to only themselves; that is, they are the one-element orbits for the conjugation action. Because the conjugacy classes (orbits of the conjugation action) partition we have For each as in the statement, by , we have . The follows from substituting this into the equation above.   "
},
{
  "id": "outcomes-14",
  "level": "2",
  "url": "sec-orbit-stab-class-eq.html#outcomes-14",
  "type": "Summary",
  "number": "4.3",
  "title": "",
  "body": "   In a group action, the of an element is the set of points that the element is mapped to under the action, and the is set of all points that fix .    Orbits induce an equivalence relation and partition on . See: and They correspond to cosets under the and conjugacy classes under the . See: .      , (LOIS), tells us and the yields .    An action is transitive if and only if there is exactly one orbit under the action. Similarly, an action is transitive if and only if every stabilizer is trivial. See: .     The of an element is the set of all elements that commute with it. The of a set is the set of elements that fix the set under conjugation.    When acts on itself by conjugation, we have and . See:     The yields , where are the list of unique representatives of all of the conjugacy classes of of size greater than .    "
},
{
  "id": "sec-p-groups",
  "level": "1",
  "url": "sec-p-groups.html",
  "type": "Section",
  "number": "5.1",
  "title": "Sylow's Theorem",
  "body": "Sylow's Theorem   We come to a very powerful technique for analyzing finite groups of relatively small order. One aspect of Sylow theory is that it allows us to deduce, in certain special cases, the existence of a unique subgroup of a given order, and thus it allows one to construct a normal subgroup.   Groups of Prime Order    The greatest weakness of most humans is their hesitancy to tell others how much they love them while they're still alive.   Optimus Prime   -group   For a prime number , a -group is a group of order for some . -group     Center of -group is Nontrivial   If is a prime number and is a finite group of order for some , then is not the trivial group (In fact for some ).    Let be a list of unique representatives of all of the conjugacy classes of of size greater than as in . Then for each , so . Since , it follows that for each . From we deduce that so, .    Order and   Let be prime.   Any group of order is cyclic.    Any group of order is abelian.       Cauchy's Theorem  Cauchy's theorem   If is a finite group and is a prime number dividing , then has an element of order . (In fact, at least elements of order .)     allows us to conclude the existence of certain elements in a group based solely on its order, which can be a powerful tool in studying the structure of groups.  For example, it can be used to prove the existence of subgroups of a given order in a group, and it is a key ingredient in the proof of , which provides information about the structure of finite groups.   has since been generalized and extended in many ways, and it is now a fundamental result in the theory of finite groups, where it plays a central role in the classification of groups of small order.   Sylow Subgroups  Sylow -subgroup   Let be a finite group and a prime. Write the order of as where . A Sylow -subgroup of is a subgroup such that . That is, a Sylow -subgroup of is a subgroup whose order is the highest conceivable power of according to .  We set to be the collection of all Sylow -subgroups of and to be the number of Sylow -subgroups. Sylow subgroup  Sylow -subgroup        We allow the case when , in which case and has a unique Sylow -subgroup, namely which has order .   Sylow Subgroups in  In for a prime , is a Sylow -subgroup. If , there is only one Sylow -subgroup of , so .  In for odd, each of the subgroups , for is a Sylow -subgroup, so .   Sylow Subgroups in  In , the Sylow -subgroups are the cyclic groups for any five cycle , so because there are five cycles, but there are four of these in every Sylow -subgroup. The Sylow -subgroups are the cyclic groups for any three cycle , so because there are three cycles, but there are two of these in every Sylow -subgroup.  A Sylow -subgroup of is any subgroup of order . For example is a Sylow -subgroup. There are many others.    Sylows-Theorem    What makes me unique is that I'm normal.   Scotty McCreery     If is a finite group and is a prime with , then acts on the set of its Sylow -subgroups via conjugation.     As of now, for all we know, this might be the action on the empty set, but we’ll see in a bit that the set of Sylow -subgroups is in fact not empty.   Sylow Theory is all about understanding this action very well.  Sylow's Lemma   Let be a finite group, a prime, a Sylow -subgroup of , and any -subgroup of . Then .    Since , we have . For the reverse containment, let . Since , is a subgroup of . (Technically, we only proved is a subgroup if , but the proof applies verbatim provided the weaker condition holds.) Also and since each of , , and is a power of , is a -subgroup of . But and is a -subgroup of largest possible order. So . This proves and thus .    Sylow's Theorems  Sylow's theorems   Assume is a group of order where is prime, , and .    (there exists at least one Sylow -subgroup of ).    If is a Sylow -subgroup of and is any -subgroup of (i.e., a subgroup whose order is some power of ), then there is a such that . In particular, the action of on by is transitive — i.e., any two Sylow -subgroups are conjugate.    We have     For any , and hence           Recall that we write where . We need to prove contains a subgroup of order , and we proceed by induction on .  If or, more generally, if , then is a Sylow -subgroup. We may thus assume . We proceed by considering two cases, depending on whether or not divides .  If , then by , there is an element of order . Set . Since , we have . Since , by induction has a subgroup of order (i.e. of index ). By , this subgroup corresponds to a subgroup of of index , hence of order .  For the second case, assume and consider the for : where are a complete and non-redundant list of non-central conjugacy class representatives. Since and , we must have for at least one . For this , we have where . Since is not central, and hence, by induction, contains a subgroup of order . But this subgroup is also a subgroup of .    Let be a Sylow -subgroup and let be any -subgroup. Let denote the collection of all conjugates of : Part (3) tells us the consists of all Sylow -subgroups of , but we don’t yet know this. Nonetheless, acts (transitively) on by conjugation, and thus also acts on (not necessarily transitively). The key to proving parts (2) and (3) of the Sylow Theorem is to analyse the action of on to establish and below.  Let be the orbits of the action of on , and for each pick a representative . We have , where the last equation uses the Lemma. By LOIS, we thus have and hence   This equation holds for any -subgroup of . In particular, we can take . In this case the first term is and, since for all , the remaining terms are divisible by . This gives (This does not yet prove part (3) since we don’t yet know that consists of all Sylow -subgroups.)  We can now prove part (2): By way of contradiction, suppose is a -subgroup of such that is not contained in any of the subgroups belonging to . Then for all and thus every term on the right-hand side of is divisble by , contrary to . The second assertion in (2) follows by taking to be a Sylow -subgroup.  This proves, in particular, that in fact does consist of all Sylow -subgroups.    Part (3) thus follows from .    For any , the stabilizer of for the action of on by conjugation is . Since we now know the action is transitive, Moreover, since and , it follows that .        provides a systematic way of analyzing the subgroups of a finite group. It allows us to determine the number of subgroups of a given order, which is useful in many applications, such as studying the structure of solvable and simple groups. The theorems also provide information about the normalizers of subgroups, which can be used to study normal subgroups and quotient groups.   In general, can be deduced from part one of . For say . Then there exists a Sylow -subgroup of . Pick any , . Then for some . Then has order .   Recalling , we have the following:  Sylow Subgroup Normal iff Unique   A Sylow -subgroup of a finite group is normal if and only if it is the only Sylow -subgroup of .    Order of  Prove that has precisely three distinct subgroups of order , all of which are isomorphic to    Any subgroup of of order is a Sylow -subgroup. By , the number of Sylow -subgroups is either or . As any -cycle or -cycle must be contained in a Sylow -subgroup (since such elements generate subgroups of order , for some ) and there are six -cycles and six -cycles, there has to be more than one Sylow -subgroup. Hence, there are precisely distinct subgroups of order .  As all of them are conjugate, and conjugation induces an isomorphism on the group, we see that all three subgroups are isomorphic. Hence, we just need to show that contains a subgroup isomorphic to . Let be the set of left cosets of the subgroup of . Note that . Let act on by left multiplication. This action induces a homomorphism where is the permutation group on . As shown in class, the kernel of this homomorphism is the largest normal subgroup contained in , which is . Thus, is injective and the image of is a subgroup of isomorphic to .       Groups of prime order are cyclic, and the center of any group of prime power order is nontrivial. See: and      tells us that if is a finite group and is a prime number dividing , then has an element of order .    A of is a subgroup whose order is the highest conceivable power of possible.     tells us and . Furthermore, acts transitively on the set of Sylow -subgroups by conjugation, making them all conjugate to one another.    A Sylow -subgroup of a finite group is normal if and only if it is the only Sylow -subgroup of . See:      "
},
{
  "id": "def-p-group",
  "level": "2",
  "url": "sec-p-groups.html#def-p-group",
  "type": "Definition",
  "number": "5.1",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-group.",
  "body": "-group   For a prime number , a -group is a group of order for some . -group    "
},
{
  "id": "thm-center-pgroup",
  "level": "2",
  "url": "sec-p-groups.html#thm-center-pgroup",
  "type": "Theorem",
  "number": "5.2",
  "title": "Center of <span class=\"process-math\">\\(p\\)<\/span>-group is Nontrivial.",
  "body": "Center of -group is Nontrivial   If is a prime number and is a finite group of order for some , then is not the trivial group (In fact for some ).    Let be a list of unique representatives of all of the conjugacy classes of of size greater than as in . Then for each , so . Since , it follows that for each . From we deduce that so, .   "
},
{
  "id": "thm-order-p-cyclic",
  "level": "2",
  "url": "sec-p-groups.html#thm-order-p-cyclic",
  "type": "Theorem",
  "number": "5.3",
  "title": "Order <span class=\"process-math\">\\(p\\)<\/span> and <span class=\"process-math\">\\(p^2\\)<\/span>.",
  "body": "Order and   Let be prime.   Any group of order is cyclic.    Any group of order is abelian.      "
},
{
  "id": "thm-cauchy",
  "level": "2",
  "url": "sec-p-groups.html#thm-cauchy",
  "type": "Theorem",
  "number": "5.4",
  "title": "Cauchy's Theorem.",
  "body": "Cauchy's Theorem  Cauchy's theorem   If is a finite group and is a prime number dividing , then has an element of order . (In fact, at least elements of order .)   "
},
{
  "id": "def-sylow-subgroup",
  "level": "2",
  "url": "sec-p-groups.html#def-sylow-subgroup",
  "type": "Definition",
  "number": "5.5",
  "title": "Sylow <span class=\"process-math\">\\(p\\)<\/span>-subgroup.",
  "body": "Sylow -subgroup   Let be a finite group and a prime. Write the order of as where . A Sylow -subgroup of is a subgroup such that . That is, a Sylow -subgroup of is a subgroup whose order is the highest conceivable power of according to .  We set to be the collection of all Sylow -subgroups of and to be the number of Sylow -subgroups. Sylow subgroup  Sylow -subgroup      "
},
{
  "id": "remark-23",
  "level": "2",
  "url": "sec-p-groups.html#remark-23",
  "type": "Remark",
  "number": "5.6",
  "title": "",
  "body": " We allow the case when , in which case and has a unique Sylow -subgroup, namely which has order .  "
},
{
  "id": "ex-d2n-sylow",
  "level": "2",
  "url": "sec-p-groups.html#ex-d2n-sylow",
  "type": "Example",
  "number": "5.7",
  "title": "Sylow Subgroups in <span class=\"process-math\">\\(D_{2n}\\)<\/span>.",
  "body": "Sylow Subgroups in  In for a prime , is a Sylow -subgroup. If , there is only one Sylow -subgroup of , so .  In for odd, each of the subgroups , for is a Sylow -subgroup, so .  "
},
{
  "id": "ex-s5-sylow",
  "level": "2",
  "url": "sec-p-groups.html#ex-s5-sylow",
  "type": "Example",
  "number": "5.8",
  "title": "Sylow Subgroups in <span class=\"process-math\">\\(S_{5}\\)<\/span>.",
  "body": "Sylow Subgroups in  In , the Sylow -subgroups are the cyclic groups for any five cycle , so because there are five cycles, but there are four of these in every Sylow -subgroup. The Sylow -subgroups are the cyclic groups for any three cycle , so because there are three cycles, but there are two of these in every Sylow -subgroup.  A Sylow -subgroup of is any subgroup of order . For example is a Sylow -subgroup. There are many others.  "
},
{
  "id": "prop-syl-act",
  "level": "2",
  "url": "sec-p-groups.html#prop-syl-act",
  "type": "Proposition",
  "number": "5.9",
  "title": "",
  "body": "  If is a finite group and is a prime with , then acts on the set of its Sylow -subgroups via conjugation.   "
},
{
  "id": "remark-24",
  "level": "2",
  "url": "sec-p-groups.html#remark-24",
  "type": "Remark",
  "number": "5.10",
  "title": "",
  "body": " As of now, for all we know, this might be the action on the empty set, but we’ll see in a bit that the set of Sylow -subgroups is in fact not empty.  "
},
{
  "id": "lem-syl-lem",
  "level": "2",
  "url": "sec-p-groups.html#lem-syl-lem",
  "type": "Lemma",
  "number": "5.11",
  "title": "Sylow's Lemma.",
  "body": "Sylow's Lemma   Let be a finite group, a prime, a Sylow -subgroup of , and any -subgroup of . Then .    Since , we have . For the reverse containment, let . Since , is a subgroup of . (Technically, we only proved is a subgroup if , but the proof applies verbatim provided the weaker condition holds.) Also and since each of , , and is a power of , is a -subgroup of . But and is a -subgroup of largest possible order. So . This proves and thus .   "
},
{
  "id": "thm-sylow",
  "level": "2",
  "url": "sec-p-groups.html#thm-sylow",
  "type": "Theorem",
  "number": "5.12",
  "title": "Sylow's Theorems.",
  "body": "Sylow's Theorems  Sylow's theorems   Assume is a group of order where is prime, , and .    (there exists at least one Sylow -subgroup of ).    If is a Sylow -subgroup of and is any -subgroup of (i.e., a subgroup whose order is some power of ), then there is a such that . In particular, the action of on by is transitive — i.e., any two Sylow -subgroups are conjugate.    We have     For any , and hence           Recall that we write where . We need to prove contains a subgroup of order , and we proceed by induction on .  If or, more generally, if , then is a Sylow -subgroup. We may thus assume . We proceed by considering two cases, depending on whether or not divides .  If , then by , there is an element of order . Set . Since , we have . Since , by induction has a subgroup of order (i.e. of index ). By , this subgroup corresponds to a subgroup of of index , hence of order .  For the second case, assume and consider the for : where are a complete and non-redundant list of non-central conjugacy class representatives. Since and , we must have for at least one . For this , we have where . Since is not central, and hence, by induction, contains a subgroup of order . But this subgroup is also a subgroup of .    Let be a Sylow -subgroup and let be any -subgroup. Let denote the collection of all conjugates of : Part (3) tells us the consists of all Sylow -subgroups of , but we don’t yet know this. Nonetheless, acts (transitively) on by conjugation, and thus also acts on (not necessarily transitively). The key to proving parts (2) and (3) of the Sylow Theorem is to analyse the action of on to establish and below.  Let be the orbits of the action of on , and for each pick a representative . We have , where the last equation uses the Lemma. By LOIS, we thus have and hence   This equation holds for any -subgroup of . In particular, we can take . In this case the first term is and, since for all , the remaining terms are divisible by . This gives (This does not yet prove part (3) since we don’t yet know that consists of all Sylow -subgroups.)  We can now prove part (2): By way of contradiction, suppose is a -subgroup of such that is not contained in any of the subgroups belonging to . Then for all and thus every term on the right-hand side of is divisble by , contrary to . The second assertion in (2) follows by taking to be a Sylow -subgroup.  This proves, in particular, that in fact does consist of all Sylow -subgroups.    Part (3) thus follows from .    For any , the stabilizer of for the action of on by conjugation is . Since we now know the action is transitive, Moreover, since and , it follows that .      "
},
{
  "id": "remark-25",
  "level": "2",
  "url": "sec-p-groups.html#remark-25",
  "type": "Remark",
  "number": "5.13",
  "title": "",
  "body": " In general, can be deduced from part one of . For say . Then there exists a Sylow -subgroup of . Pick any , . Then for some . Then has order .  "
},
{
  "id": "cor-unique-sylow-normal",
  "level": "2",
  "url": "sec-p-groups.html#cor-unique-sylow-normal",
  "type": "Corollary",
  "number": "5.14",
  "title": "Sylow Subgroup Normal iff Unique.",
  "body": "Sylow Subgroup Normal iff Unique   A Sylow -subgroup of a finite group is normal if and only if it is the only Sylow -subgroup of .   "
},
{
  "id": "exe-order-8-subgroups-of-s4",
  "level": "2",
  "url": "sec-p-groups.html#exe-order-8-subgroups-of-s4",
  "type": "Exercise",
  "number": "5.15",
  "title": "Order <span class=\"process-math\">\\(8\\)<\/span> of <span class=\"process-math\">\\(S_4\\)<\/span>.",
  "body": "Order of  Prove that has precisely three distinct subgroups of order , all of which are isomorphic to    Any subgroup of of order is a Sylow -subgroup. By , the number of Sylow -subgroups is either or . As any -cycle or -cycle must be contained in a Sylow -subgroup (since such elements generate subgroups of order , for some ) and there are six -cycles and six -cycles, there has to be more than one Sylow -subgroup. Hence, there are precisely distinct subgroups of order .  As all of them are conjugate, and conjugation induces an isomorphism on the group, we see that all three subgroups are isomorphic. Hence, we just need to show that contains a subgroup isomorphic to . Let be the set of left cosets of the subgroup of . Note that . Let act on by left multiplication. This action induces a homomorphism where is the permutation group on . As shown in class, the kernel of this homomorphism is the largest normal subgroup contained in , which is . Thus, is injective and the image of is a subgroup of isomorphic to .  "
},
{
  "id": "outcomes-15",
  "level": "2",
  "url": "sec-p-groups.html#outcomes-15",
  "type": "Summary",
  "number": "5.1",
  "title": "",
  "body": "   Groups of prime order are cyclic, and the center of any group of prime power order is nontrivial. See: and      tells us that if is a finite group and is a prime number dividing , then has an element of order .    A of is a subgroup whose order is the highest conceivable power of possible.     tells us and . Furthermore, acts transitively on the set of Sylow -subgroups by conjugation, making them all conjugate to one another.    A Sylow -subgroup of a finite group is normal if and only if it is the only Sylow -subgroup of . See:     "
},
{
  "id": "sec-simple-groups",
  "level": "1",
  "url": "sec-simple-groups.html",
  "type": "Section",
  "number": "5.2",
  "title": "Simple Groups",
  "body": "Simple Groups  Keeping it Simple    Everything should be made as simple as possible, but not simpler.   Albert Einstein   Simple Group   A group is called simple if it has only two normal subgroups: itself and the trivial subgroup. simple group     Simple   for a prime is simple since any non-trivial element generates the whole group.   No Simple Groups of Order (Counting Elements)  counting elements  element counting argument   Let us prove that no group or order is simple.    Let be any group of order . We will prove that must have either a normal subgroup of order or a normal subgroups of oder .   gives that is either or and is either or . If either of these numbers is , we have a unique subgroup of order or of order , and such a subgroup must be normal. Suppose these numbers are and , respectively. We deduce a contradition by counting elements .  In detail, say are the Sylow -subgroups. By  for all . Thus the set  has elements, one of which is and the other of which must have order . That is, there are elements of order in . But now consider the three Sylow -subgroups . Each has order and for all . It follows that for all , and thus , a contradiction.     In the previous example, it would not be so easy to count elements of order and . We do know that every element in has order , or (any only one has order ), but the size of this set is harder to calculate. For notice that might have order . The most one can say for sure is that has at least elements.   No Simple Groups of Order (Group Actions)  group action argument   No group of order is simple.    By way of contradiciton suppose is simple and . gives and (since they cannot be by the assumption that is simple). The counting elements trick would work, but let's proceed in a different way: Consider the action of on by conjugation and let be the associated homomorphism (obtained by choosing a numbering of the members of ). The map is non-trivial since the action is transitive (part (2) of ). But does not divide and so cannot be injective. It follows that is a non-trivial, proper normal subgroup of , a contradiction.    No Simple Groups of Order (Normalizers)  normalizer argument   No group of order is simple.    By way of contradiction suppose is a simple group of order . Since , we conclude from that   If any of these is , then the corresonding Sylow -subgroup is unique and hence normal, a contradiction.  Although it is not actually needed here, let's show cannot be or . For example, if it were , then the action of on (by conjugation) gives a homomorphism . Since the action is transitive, this homomorphism cannot be the trivial map. Since does not divide , this map cannot be injective. Thus the kernel of is a non-trivial, proper normal subgroup, a contradiction. In a similar way one shows .  We have shown that the only possibility is One is now tempted to count elements: we have elements of order and elements of order . But elements of order are not so easy to count since the various Sylow -subgroups have nine elements each and might interect in subsets of order . The only obvious things is that there are at least of them. This does not give enough elements to reach a contradiction.  The action of on leads to a homomorphism , but since does divide , there is no contradiction lurking here either.  So, we must resort to something really sneaky: let be all of the Sylow -subgroups. Observe that if  for all , then we would have elements of order or . This would give at least elements, which is not possible. So, it must be the case that at least two intersect non-trivially. Without loss, let's say is such that . We ponder . Since is abelian and , , so that . Likewise, too, and since , we get . And of course . We get only three possibilities: Let us show that each is impossible:  If , then we have constructed a subgroup of of index . The action of on the left cosets gives a homomorphism that cannot be the trivial map since the action is transitive. But it cannot be injective either, and this leads to a non-trivial nomal subgroup. The exact same reasoning shows cannot be (or we could use that it has index ). Finally, if , then , which is also impossible.    is Simple    is simple.    the Unique Simple Group of Order   If is a simple group of order , then .    Assume is simple of order . Let us first observe that it suffices to construct a non-trivial action of on a set with elements. For given such an action we obtain a non-trivial homomorphism . Since it's non-trivial and is simple, we must have , so that is injective. Thus , and . But we already know that is the only subgroup of of order , and thus .  So, we only need to find such an action, and one's first guess would be the action on one of the sets of Sylow -subgroups. By Sylow Theory and the fact that is simple (so that no Sylow -subgroup for can be unique) we get   The next important observation is:   There is no non-trivial action of on a set of size at most .   For if there was such a non-trivial action, we would get a homomorphism for (if , the only action is the trivial one). Such a homomorphism cannot be injective by order considerations. So, it's kernel would be a proper, non-trivial normal subgroup, which do not exist.  In particular, and , so that   If then we are done, since this action is transitive and thus certainly non-trivial.  Suppose and let be all the Sylow -subgroups. Since and , has elements of order or . If for all , we would have elements of order or , which is far too many elements in total. At least two of these must therefore intersect non-trivially and without loss say has two elements. We consider . As in the preivious example, and hence , , and . The possibilities are If then , which is impossible. If , then we obtain an transitive action of on the three element set of left cosets of in , which as shown above is not possible. We are left with . Thus acts transitively (and hence non-trivially) on the five element set of left cosets of in .     The proof shows that if either or , but in hindsight only one of these can actually be possible. It's actually the former: has no elements of order (since four cycles are odd permuations) and the only elements of order are products of two disjoint transpotions, and there are such elements. It's not hard to see that the five -element subgroups of given by the Klein -group and its obvious conjugates (i.e., those obtained by leaving out one of instead of ) are the only Sylow -subgoups of .       A is a group with only two normal subgroups: itself and the trivial subgroup.    We have three main strategies to prove that a group is simple: by counting elements, acting on a set of Sylow -subgroups, or by resorting to diving into the minutae with normalizers. For examples of each, see , , and , respectively.      is simple.     "
},
{
  "id": "def-simple-group",
  "level": "2",
  "url": "sec-simple-groups.html#def-simple-group",
  "type": "Definition",
  "number": "5.16",
  "title": "Simple Group.",
  "body": "Simple Group   A group is called simple if it has only two normal subgroups: itself and the trivial subgroup. simple group    "
},
{
  "id": "example-36",
  "level": "2",
  "url": "sec-simple-groups.html#example-36",
  "type": "Example",
  "number": "5.17",
  "title": "<span class=\"process-math\">\\(\\mathbb{Z}\/p\\)<\/span> Simple.",
  "body": "Simple   for a prime is simple since any non-trivial element generates the whole group.  "
},
{
  "id": "ex-no-order-12-simple",
  "level": "2",
  "url": "sec-simple-groups.html#ex-no-order-12-simple",
  "type": "Example",
  "number": "5.18",
  "title": "No Simple Groups of Order <span class=\"process-math\">\\(12\\)<\/span> (Counting Elements).",
  "body": "No Simple Groups of Order (Counting Elements)  counting elements  element counting argument   Let us prove that no group or order is simple.    Let be any group of order . We will prove that must have either a normal subgroup of order or a normal subgroups of oder .   gives that is either or and is either or . If either of these numbers is , we have a unique subgroup of order or of order , and such a subgroup must be normal. Suppose these numbers are and , respectively. We deduce a contradition by counting elements .  In detail, say are the Sylow -subgroups. By  for all . Thus the set  has elements, one of which is and the other of which must have order . That is, there are elements of order in . But now consider the three Sylow -subgroups . Each has order and for all . It follows that for all , and thus , a contradiction.   "
},
{
  "id": "remark-26",
  "level": "2",
  "url": "sec-simple-groups.html#remark-26",
  "type": "Remark",
  "number": "5.19",
  "title": "",
  "body": " In the previous example, it would not be so easy to count elements of order and . We do know that every element in has order , or (any only one has order ), but the size of this set is harder to calculate. For notice that might have order . The most one can say for sure is that has at least elements.  "
},
{
  "id": "ex-no-order-80-simple",
  "level": "2",
  "url": "sec-simple-groups.html#ex-no-order-80-simple",
  "type": "Example",
  "number": "5.20",
  "title": "No Simple Groups of Order <span class=\"process-math\">\\(80\\)<\/span> (Group Actions).",
  "body": "No Simple Groups of Order (Group Actions)  group action argument   No group of order is simple.    By way of contradiciton suppose is simple and . gives and (since they cannot be by the assumption that is simple). The counting elements trick would work, but let's proceed in a different way: Consider the action of on by conjugation and let be the associated homomorphism (obtained by choosing a numbering of the members of ). The map is non-trivial since the action is transitive (part (2) of ). But does not divide and so cannot be injective. It follows that is a non-trivial, proper normal subgroup of , a contradiction.   "
},
{
  "id": "ex-no-order-90-simple",
  "level": "2",
  "url": "sec-simple-groups.html#ex-no-order-90-simple",
  "type": "Example",
  "number": "5.21",
  "title": "No Simple Groups of Order <span class=\"process-math\">\\(90\\)<\/span> (Normalizers).",
  "body": "No Simple Groups of Order (Normalizers)  normalizer argument   No group of order is simple.    By way of contradiction suppose is a simple group of order . Since , we conclude from that   If any of these is , then the corresonding Sylow -subgroup is unique and hence normal, a contradiction.  Although it is not actually needed here, let's show cannot be or . For example, if it were , then the action of on (by conjugation) gives a homomorphism . Since the action is transitive, this homomorphism cannot be the trivial map. Since does not divide , this map cannot be injective. Thus the kernel of is a non-trivial, proper normal subgroup, a contradiction. In a similar way one shows .  We have shown that the only possibility is One is now tempted to count elements: we have elements of order and elements of order . But elements of order are not so easy to count since the various Sylow -subgroups have nine elements each and might interect in subsets of order . The only obvious things is that there are at least of them. This does not give enough elements to reach a contradiction.  The action of on leads to a homomorphism , but since does divide , there is no contradiction lurking here either.  So, we must resort to something really sneaky: let be all of the Sylow -subgroups. Observe that if  for all , then we would have elements of order or . This would give at least elements, which is not possible. So, it must be the case that at least two intersect non-trivially. Without loss, let's say is such that . We ponder . Since is abelian and , , so that . Likewise, too, and since , we get . And of course . We get only three possibilities: Let us show that each is impossible:  If , then we have constructed a subgroup of of index . The action of on the left cosets gives a homomorphism that cannot be the trivial map since the action is transitive. But it cannot be injective either, and this leads to a non-trivial nomal subgroup. The exact same reasoning shows cannot be (or we could use that it has index ). Finally, if , then , which is also impossible.   "
},
{
  "id": "thm-a5-simple",
  "level": "2",
  "url": "sec-simple-groups.html#thm-a5-simple",
  "type": "Theorem",
  "number": "5.22",
  "title": "<span class=\"process-math\">\\(A_5\\)<\/span> is Simple.",
  "body": "is Simple    is simple.   "
},
{
  "id": "thm-simple-60",
  "level": "2",
  "url": "sec-simple-groups.html#thm-simple-60",
  "type": "Theorem",
  "number": "5.23",
  "title": "<span class=\"process-math\">\\(A_5\\)<\/span> the Unique Simple Group of Order <span class=\"process-math\">\\(60\\)<\/span>.",
  "body": "the Unique Simple Group of Order   If is a simple group of order , then .    Assume is simple of order . Let us first observe that it suffices to construct a non-trivial action of on a set with elements. For given such an action we obtain a non-trivial homomorphism . Since it's non-trivial and is simple, we must have , so that is injective. Thus , and . But we already know that is the only subgroup of of order , and thus .  So, we only need to find such an action, and one's first guess would be the action on one of the sets of Sylow -subgroups. By Sylow Theory and the fact that is simple (so that no Sylow -subgroup for can be unique) we get   The next important observation is:   There is no non-trivial action of on a set of size at most .   For if there was such a non-trivial action, we would get a homomorphism for (if , the only action is the trivial one). Such a homomorphism cannot be injective by order considerations. So, it's kernel would be a proper, non-trivial normal subgroup, which do not exist.  In particular, and , so that   If then we are done, since this action is transitive and thus certainly non-trivial.  Suppose and let be all the Sylow -subgroups. Since and , has elements of order or . If for all , we would have elements of order or , which is far too many elements in total. At least two of these must therefore intersect non-trivially and without loss say has two elements. We consider . As in the preivious example, and hence , , and . The possibilities are If then , which is impossible. If , then we obtain an transitive action of on the three element set of left cosets of in , which as shown above is not possible. We are left with . Thus acts transitively (and hence non-trivially) on the five element set of left cosets of in .   "
},
{
  "id": "remark-27",
  "level": "2",
  "url": "sec-simple-groups.html#remark-27",
  "type": "Remark",
  "number": "5.24",
  "title": "",
  "body": " The proof shows that if either or , but in hindsight only one of these can actually be possible. It's actually the former: has no elements of order (since four cycles are odd permuations) and the only elements of order are products of two disjoint transpotions, and there are such elements. It's not hard to see that the five -element subgroups of given by the Klein -group and its obvious conjugates (i.e., those obtained by leaving out one of instead of ) are the only Sylow -subgoups of .  "
},
{
  "id": "outcomes-16",
  "level": "2",
  "url": "sec-simple-groups.html#outcomes-16",
  "type": "Summary",
  "number": "5.2",
  "title": "",
  "body": "   A is a group with only two normal subgroups: itself and the trivial subgroup.    We have three main strategies to prove that a group is simple: by counting elements, acting on a set of Sylow -subgroups, or by resorting to diving into the minutae with normalizers. For examples of each, see , , and , respectively.      is simple.    "
},
{
  "id": "sec-dps",
  "level": "1",
  "url": "sec-dps.html",
  "type": "Section",
  "number": "6.1",
  "title": "Direct Products",
  "body": "Direct Products   We now discuss how to build new groups from old ones.   Direct Products of Groups    Evil is the product of the ability of humans to make abstract that which is concrete.   John-Paul Sartre   Direct Product   Let be a group for all in an index set . The direct product of the groups is the Cartesian product with multiplication defined by The direct sum of the groups is the subset of the direct product given by with the same multiplication as the direct product. direct product of groups  direct sum of groups      A direct sum is the same thing as a finite direct product.   Direct Product of Groups is a Group   The direct product of a collection of groups is a group, and the direct sum of the collection is a subgroup of the direct product.     The direct sum notation will not be seen or heard from again in group theory. It was fun while it lasted.   Properties of Direct Products      The direct product of groups is abelian if and only if every factor of the product is abelian.    Let be a direct product of groups. If is a direct product of subgroups of , then .    If and , then .    Let . Then .       Direct Products and Homomorphisms      Let and be groups. Then the projection map is a surjective homomorphism of groups.    Let and be groups. Then the inclusion map is an injective homomorphism of groups.       Direct Product of Cyclic Groups  direct product of cyclic groups  If then . Indeed consider the elements and in . Then and . Therefore . Since and both of these sets have cardinality it must be the case that . Since and are both cyclic groups of order they are isomorphic. Thus    No Cancellation in Products  Find an example of groups such that there is an isomorphism but is not trivial. Note: since can be rewritten as , the above shows that in general one cannot cancel groups in isomorphisms between direct products.    Internal and External Direct Products    Don't worry when you are not recognized, but strive to be worthy of recognition.   Abraham Lincoln   Recognition Theorem for Direct Products  recognition theorem (direct products)   Suppose is a group with normal subgroups and such that . Then the following hold:    via the isomorphism of groups defined by .          .       Notice that the hypothesis implies . Furthermore and imply that the elements of commute with the elements of . Indeed, consider . Then since , , so also . Similarly it follows that , but since it follows that , i.e. for any .  Using the above we have and thus is a homomorphism. It's kernel is , which is just since . The image of is clearly . This proves is an isomorphism.    Internal and External Direct Products   If and are such that then we call is called the internal direct product of and and the external direct product of and . internal direct product  external direct product         The of groups is again a group. See: .      .    We define and identify them with the , the requirement being and .     "
},
{
  "id": "def-dp-external",
  "level": "2",
  "url": "sec-dps.html#def-dp-external",
  "type": "Definition",
  "number": "6.1",
  "title": "Direct Product.",
  "body": "Direct Product   Let be a group for all in an index set . The direct product of the groups is the Cartesian product with multiplication defined by The direct sum of the groups is the subset of the direct product given by with the same multiplication as the direct product. direct product of groups  direct sum of groups    "
},
{
  "id": "remark-28",
  "level": "2",
  "url": "sec-dps.html#remark-28",
  "type": "Remark",
  "number": "6.2",
  "title": "",
  "body": " A direct sum is the same thing as a finite direct product.  "
},
{
  "id": "thm-dp-a-group",
  "level": "2",
  "url": "sec-dps.html#thm-dp-a-group",
  "type": "Theorem",
  "number": "6.3",
  "title": "Direct Product of Groups is a Group.",
  "body": "Direct Product of Groups is a Group   The direct product of a collection of groups is a group, and the direct sum of the collection is a subgroup of the direct product.   "
},
{
  "id": "remark-29",
  "level": "2",
  "url": "sec-dps.html#remark-29",
  "type": "Remark",
  "number": "6.4",
  "title": "",
  "body": " The direct sum notation will not be seen or heard from again in group theory. It was fun while it lasted.  "
},
{
  "id": "thm-dp-properties",
  "level": "2",
  "url": "sec-dps.html#thm-dp-properties",
  "type": "Theorem",
  "number": "6.5",
  "title": "Properties of Direct Products.",
  "body": "Properties of Direct Products      The direct product of groups is abelian if and only if every factor of the product is abelian.    Let be a direct product of groups. If is a direct product of subgroups of , then .    If and , then .    Let . Then .      "
},
{
  "id": "thm-dps-and-homs",
  "level": "2",
  "url": "sec-dps.html#thm-dps-and-homs",
  "type": "Theorem",
  "number": "6.6",
  "title": "Direct Products and Homomorphisms.",
  "body": "Direct Products and Homomorphisms      Let and be groups. Then the projection map is a surjective homomorphism of groups.    Let and be groups. Then the inclusion map is an injective homomorphism of groups.      "
},
{
  "id": "ex-dp-cyclic",
  "level": "2",
  "url": "sec-dps.html#ex-dp-cyclic",
  "type": "Example",
  "number": "6.7",
  "title": "Direct Product of Cyclic Groups.",
  "body": "Direct Product of Cyclic Groups  direct product of cyclic groups  If then . Indeed consider the elements and in . Then and . Therefore . Since and both of these sets have cardinality it must be the case that . Since and are both cyclic groups of order they are isomorphic. Thus   "
},
{
  "id": "exe-no-group-cancellation-in-products",
  "level": "2",
  "url": "sec-dps.html#exe-no-group-cancellation-in-products",
  "type": "Exercise",
  "number": "6.8",
  "title": "No Cancellation in Products.",
  "body": "No Cancellation in Products  Find an example of groups such that there is an isomorphism but is not trivial. Note: since can be rewritten as , the above shows that in general one cannot cancel groups in isomorphisms between direct products.  "
},
{
  "id": "thm-dp-recognition",
  "level": "2",
  "url": "sec-dps.html#thm-dp-recognition",
  "type": "Theorem",
  "number": "6.9",
  "title": "Recognition Theorem for Direct Products.",
  "body": "Recognition Theorem for Direct Products  recognition theorem (direct products)   Suppose is a group with normal subgroups and such that . Then the following hold:    via the isomorphism of groups defined by .          .       Notice that the hypothesis implies . Furthermore and imply that the elements of commute with the elements of . Indeed, consider . Then since , , so also . Similarly it follows that , but since it follows that , i.e. for any .  Using the above we have and thus is a homomorphism. It's kernel is , which is just since . The image of is clearly . This proves is an isomorphism.   "
},
{
  "id": "def-int-ext-dp",
  "level": "2",
  "url": "sec-dps.html#def-int-ext-dp",
  "type": "Definition",
  "number": "6.10",
  "title": "Internal and External Direct Products.",
  "body": "Internal and External Direct Products   If and are such that then we call is called the internal direct product of and and the external direct product of and . internal direct product  external direct product    "
},
{
  "id": "outcomes-17",
  "level": "2",
  "url": "sec-dps.html#outcomes-17",
  "type": "Summary",
  "number": "6.1",
  "title": "",
  "body": "   The of groups is again a group. See: .      .    We define and identify them with the , the requirement being and .    "
},
{
  "id": "sec-spds",
  "level": "1",
  "url": "sec-spds.html",
  "type": "Section",
  "number": "6.2",
  "title": "Semidirect Products",
  "body": "Semidirect Products  External Semidirect Products    Don't give up and always keep on believing in your product.   Niels van Deuren   We now discuss an important generalization for the direct product and a new method of constructing a new groups from the action of one group on another.  Suppose is a group with subgroups and such that . Then we still have ; let's see what we would need the multiplication on the cartesian product to be in order for defined by to still be a group homomorphism: where is such that .  This means that we would need to have for to be a homomorphism. This motivates the following definition.  External Semidirect Products   Let and be groups and let be a homomorphism. The (external) semidirect product induced by is the set with the binary operation defined by This group is denoted by .  semidirect product  external semidirect product       Decide amongst yourselves whether it should be spelled \"semidirect\", \"semi-direct\", \"semi direct\".    Before we prove that the construction above actually gives a group, let's compute a few examples.  Semidirect, Sans the Semi  Given and we could always take to be the trivial homomorphism, so that for all and . Then is just the usual direct product:     Fix a group , a normal subgroup and a subgroup . Then the function given by for is a homomorphism. Thus acts on via automorphisms.    Let be cyclic of order and be cyclic of order for any . There is an automorphism of that sends to . This automorphism is its own inverse; i.e., it has order . Therefore, by , there is a group homomorphism with . We may thus form the group The elements of are for and , in particular . Set Then  and Looks familar!  Indeed, by the universal mapping property for we have a homomorphism such that and . Moreover, is onto since and since it follows that is a bijection. So the dihedral group is a semidirect product, in which the two component groups are cyclic of orders and respectively: and is the inversion homomorphism as described above.   Semidirect Products are Groups   If and are groups and is a homomorphism, then setting:      is a group     and      .          The proof is straightforward but a bit messy. For associativity, note that On the other hand This gives associativity.  The fact that is a two-sided identity follows from the fact that .  Finally and similarly     Define a funtion as . Then is a homomorphism, since The map is clearly injective and hence its image is isomorphic to . In fact, the image is normal since the second component of is clearly . Let us write this image as   The function defined by is also an injective homomorphism and thus its image is isomorphic to . is typically not normal, however. Finally, it is easy to see that and . Putting this all together we have    ,     ,     , and     .       Consider the projection onto the second factor given by . This is a goup homomorphism since the second component of is and is surjective by definition. Now By the we conclude that .        Internal Semidirect Products    I've often said there's nothing better for the inside of a man than the outside of a horse.   Ronald Reagan   We can turn this around. the semidirect product, not the Reagan quote.   Recognition Theorem for Internal Semidirect Products  recognition theorem (internal semidirect products)   For a group , suppose we are given and so that    ,     ,     , and     .     Let be the permutation representation of the action of on via automorphisms given by in . (This means that for any  , where is the function for all .) Then the function defined by is an isomorphism of groups. Moreover, under this isomorphism, corresponds to and corresponds to (referring to the notation in above).    We have and thus is a homomorphism. It's kernel is , which is just since . The image of is clearly . This proves is an isomorphism. It is obvious that and .    Internal Semidirect Products   In this situation of the , we will say that is the internal semi-direct product of and . internal semidirect product      Returning to , let and . Then , , and . So, is isomorphic to a semi-direct product, as we already showed.    Let , and . Then , , and . It follows that where is cyclic of order and the action sends to conjugation by .   It is important to be aware that for a fixed pair of groups and , different actions of on via automorphisms can result in isomorphic semi-direct products. Indeed, determining when is in general a tricky business. The previous example shows this.   Let and again, but this time take (assuming ). Then we get where is cyclic of order and the action sends to conjugation by .  The actions and are not identical. For example, assuming we have and Yet since each is isomorphic to .  On HW 8 you will give a more conceptual reason for why these two semidirect products turned out to be isomorphic: it is because and are conjugate in . More generally, below is a criterion for a two semidirect products to be isomorphic.   Isomorphisms of Semidirect Products   Let be a finite cyclic group and let be an arbitrary group. Suppose that the images of and are conjugate subgroups of . Then .     Groups of Order    I did not know I was in my prime until afterwards.   Mason Cooley   Groups of Order   Any group of order is isomorphic either to or to .    Let be a group of order . gives that there exist elements with and . Let and . Since , is a normal subgroup of and since is a common subgroup of and  gives that . Thus and since we deduce that . now gives that is the internal semidirect product of and . More to the point, , where gives the action of on by .  We now analyze the possibilities for . By , . There are two possibilities for the image of : either or .  If , then (which implies ) and . Therefore, in this case , where the last isomorphism uses the .  If , then is the map and by an earlier example for this we have , so .  Finally, because the former is abelian and the latter is not.    Let's repeat the previous example for classifying groups of order with distinct primes into isomorphism classes.  Classification for Groups of Order  classification of groups of order   Let be primes.     If there is a unique group of order up to isomorphism, namely .    If there are exactly two groups of order up to isomorphism, namely and a non-abelian group.       Let be a group of order and let be Sylow subgroups of order and respectively. We see that is a normal subgroup using , since is the smallest prime that divides .  Furthermore, since is a subgroup of both and we have by that , so that . From here it follows that and so . now yields that for some homomorphism , equivalently . By to give such a homomorphism is equivalent to giving an element so that , which will give for . Thus yielding that either or .   Case 1: if then is the trivial homomorphism and thus .   Case 2: if then it must be the case by Lagrange that . By we know that is a cyclic group. Therefore we have that if and only if there exists an element of order by (2). Moreover any such element generates a subgroup of of order . Since there is a unique subgroup of a cyclic group of a given order by (2) we see that the image of is independent of the choice of . Thus by we conclude that all subgroups resulting from any choice of of order are isomorphic.  Moreover, from the explicit presentation of semidirect products of cyclic groups given in a homework problem we see that the resulting group is non-abelian; in particular it is not isomorphic to .         are defined using homomorphisms into automorphism groups. See: They are often used to construct non-abelian groups.     are similar to their direct counterparts, though only require that one of or be normal. They can be identified using the .    Using semidirect products, we are able to provide a .     "
},
{
  "id": "def-sdp-external",
  "level": "2",
  "url": "sec-spds.html#def-sdp-external",
  "type": "Definition",
  "number": "6.11",
  "title": "External Semidirect Products.",
  "body": "External Semidirect Products   Let and be groups and let be a homomorphism. The (external) semidirect product induced by is the set with the binary operation defined by This group is denoted by .  semidirect product  external semidirect product    "
},
{
  "id": "exploration-4",
  "level": "2",
  "url": "sec-spds.html#exploration-4",
  "type": "Discussion",
  "number": "6.1",
  "title": "",
  "body": "  Decide amongst yourselves whether it should be spelled \"semidirect\", \"semi-direct\", \"semi direct\".   "
},
{
  "id": "def-trivial-sdp",
  "level": "2",
  "url": "sec-spds.html#def-trivial-sdp",
  "type": "Example",
  "number": "6.12",
  "title": "Semidirect, Sans the Semi.",
  "body": "Semidirect, Sans the Semi  Given and we could always take to be the trivial homomorphism, so that for all and . Then is just the usual direct product:   "
},
{
  "id": "example-42",
  "level": "2",
  "url": "sec-spds.html#example-42",
  "type": "Example",
  "number": "6.13",
  "title": ".",
  "body": " Fix a group , a normal subgroup and a subgroup . Then the function given by for is a homomorphism. Thus acts on via automorphisms.  "
},
{
  "id": "example-43",
  "level": "2",
  "url": "sec-spds.html#example-43",
  "type": "Example",
  "number": "6.14",
  "title": ".",
  "body": " Let be cyclic of order and be cyclic of order for any . There is an automorphism of that sends to . This automorphism is its own inverse; i.e., it has order . Therefore, by , there is a group homomorphism with . We may thus form the group The elements of are for and , in particular . Set Then  and Looks familar!  Indeed, by the universal mapping property for we have a homomorphism such that and . Moreover, is onto since and since it follows that is a bijection. So the dihedral group is a semidirect product, in which the two component groups are cyclic of orders and respectively: and is the inversion homomorphism as described above.  "
},
{
  "id": "thm-sdp",
  "level": "2",
  "url": "sec-spds.html#thm-sdp",
  "type": "Theorem",
  "number": "6.15",
  "title": "Semidirect Products are Groups.",
  "body": "Semidirect Products are Groups   If and are groups and is a homomorphism, then setting:      is a group     and      .          The proof is straightforward but a bit messy. For associativity, note that On the other hand This gives associativity.  The fact that is a two-sided identity follows from the fact that .  Finally and similarly     Define a funtion as . Then is a homomorphism, since The map is clearly injective and hence its image is isomorphic to . In fact, the image is normal since the second component of is clearly . Let us write this image as   The function defined by is also an injective homomorphism and thus its image is isomorphic to . is typically not normal, however. Finally, it is easy to see that and . Putting this all together we have    ,     ,     , and     .       Consider the projection onto the second factor given by . This is a goup homomorphism since the second component of is and is surjective by definition. Now By the we conclude that .      "
},
{
  "id": "thm-sdp-recognition",
  "level": "2",
  "url": "sec-spds.html#thm-sdp-recognition",
  "type": "Theorem",
  "number": "6.16",
  "title": "Recognition Theorem for Internal Semidirect Products.",
  "body": "Recognition Theorem for Internal Semidirect Products  recognition theorem (internal semidirect products)   For a group , suppose we are given and so that    ,     ,     , and     .     Let be the permutation representation of the action of on via automorphisms given by in . (This means that for any  , where is the function for all .) Then the function defined by is an isomorphism of groups. Moreover, under this isomorphism, corresponds to and corresponds to (referring to the notation in above).    We have and thus is a homomorphism. It's kernel is , which is just since . The image of is clearly . This proves is an isomorphism. It is obvious that and .   "
},
{
  "id": "def-spd-internal",
  "level": "2",
  "url": "sec-spds.html#def-spd-internal",
  "type": "Definition",
  "number": "6.17",
  "title": "Internal Semidirect Products.",
  "body": "Internal Semidirect Products   In this situation of the , we will say that is the internal semi-direct product of and . internal semidirect product    "
},
{
  "id": "example-44",
  "level": "2",
  "url": "sec-spds.html#example-44",
  "type": "Example",
  "number": "6.18",
  "title": ".",
  "body": " Returning to , let and . Then , , and . So, is isomorphic to a semi-direct product, as we already showed.  "
},
{
  "id": "example-45",
  "level": "2",
  "url": "sec-spds.html#example-45",
  "type": "Example",
  "number": "6.19",
  "title": ".",
  "body": " Let , and . Then , , and . It follows that where is cyclic of order and the action sends to conjugation by .  "
},
{
  "id": "example-46",
  "level": "2",
  "url": "sec-spds.html#example-46",
  "type": "Example",
  "number": "6.20",
  "title": ".",
  "body": " Let and again, but this time take (assuming ). Then we get where is cyclic of order and the action sends to conjugation by .  The actions and are not identical. For example, assuming we have and Yet since each is isomorphic to .  On HW 8 you will give a more conceptual reason for why these two semidirect products turned out to be isomorphic: it is because and are conjugate in . More generally, below is a criterion for a two semidirect products to be isomorphic.  "
},
{
  "id": "thm-conjugate-aut",
  "level": "2",
  "url": "sec-spds.html#thm-conjugate-aut",
  "type": "Theorem",
  "number": "6.21",
  "title": "Isomorphisms of Semidirect Products.",
  "body": "Isomorphisms of Semidirect Products   Let be a finite cyclic group and let be an arbitrary group. Suppose that the images of and are conjugate subgroups of . Then .   "
},
{
  "id": "thm-groups-of-order-6",
  "level": "2",
  "url": "sec-spds.html#thm-groups-of-order-6",
  "type": "Theorem",
  "number": "6.22",
  "title": "Groups of Order <span class=\"process-math\">\\(6\\)<\/span>.",
  "body": "Groups of Order   Any group of order is isomorphic either to or to .    Let be a group of order . gives that there exist elements with and . Let and . Since , is a normal subgroup of and since is a common subgroup of and  gives that . Thus and since we deduce that . now gives that is the internal semidirect product of and . More to the point, , where gives the action of on by .  We now analyze the possibilities for . By , . There are two possibilities for the image of : either or .  If , then (which implies ) and . Therefore, in this case , where the last isomorphism uses the .  If , then is the map and by an earlier example for this we have , so .  Finally, because the former is abelian and the latter is not.   "
},
{
  "id": "thm-order-pq",
  "level": "2",
  "url": "sec-spds.html#thm-order-pq",
  "type": "Theorem",
  "number": "6.23",
  "title": "Classification for Groups of Order <span class=\"process-math\">\\(pq\\)<\/span>.",
  "body": "Classification for Groups of Order  classification of groups of order   Let be primes.     If there is a unique group of order up to isomorphism, namely .    If there are exactly two groups of order up to isomorphism, namely and a non-abelian group.       Let be a group of order and let be Sylow subgroups of order and respectively. We see that is a normal subgroup using , since is the smallest prime that divides .  Furthermore, since is a subgroup of both and we have by that , so that . From here it follows that and so . now yields that for some homomorphism , equivalently . By to give such a homomorphism is equivalent to giving an element so that , which will give for . Thus yielding that either or .   Case 1: if then is the trivial homomorphism and thus .   Case 2: if then it must be the case by Lagrange that . By we know that is a cyclic group. Therefore we have that if and only if there exists an element of order by (2). Moreover any such element generates a subgroup of of order . Since there is a unique subgroup of a cyclic group of a given order by (2) we see that the image of is independent of the choice of . Thus by we conclude that all subgroups resulting from any choice of of order are isomorphic.  Moreover, from the explicit presentation of semidirect products of cyclic groups given in a homework problem we see that the resulting group is non-abelian; in particular it is not isomorphic to .   "
},
{
  "id": "outcomes-18",
  "level": "2",
  "url": "sec-spds.html#outcomes-18",
  "type": "Summary",
  "number": "6.2",
  "title": "",
  "body": "    are defined using homomorphisms into automorphism groups. See: They are often used to construct non-abelian groups.     are similar to their direct counterparts, though only require that one of or be normal. They can be identified using the .    Using semidirect products, we are able to provide a .    "
},
{
  "id": "sec-ftfgag",
  "level": "1",
  "url": "sec-ftfgag.html",
  "type": "Section",
  "number": "6.3",
  "title": "Finitely Generated Abelian Groups",
  "body": "Finitely Generated Abelian Groups    The classification of the constituents of a chaos, nothing less is here essayed.   Herman Melville   In this section we see that we can classify finitely generated abelian groups into isomorphism classes.  Sunzi's Remainder Theorem   Suppose for distinct primes . Then there is an isomorphism given by where denote the class of an integer in . Sunzi's remainder theorem for groups     Using , we let be the unique homomorhism that sends to . Then We see and so . Conversely, if , then for all and since are pairwise relatively prime, it follows that . This proves . The claim follows by the .     This theorem frequently goes by the name of The Chinese Remainder Theorem, but it has been remarked that this is somewhat like referencing the Pythagorean Theorem as The Greek Triangle Theorem or Fermat's Little Theorem as The French Power Postulate. In the interest of giving credit where credit is due, we include it here with the name of the 3rd-century Chinese mathematician, Sunzi, to whom the result is often attributed. Chinese Remainder Theorem    Finitely Generated   A group is finitely generated provided that , where is a finite set. finitely generated group      Any finite group is finitely generated (take ), but a finitely generated group need not be finite.   The following is the classification theorem for finitely generated abelian groups. We present it without proving it for now. The full proof will be given in the spring semester.  Fundamental Theorem of Finitely Generated Abelian Groups (FTFGAG)  fundamental theorem of finitely generated abelian groups  FTFGAG   Let be a finitely generated abelian group. Then is a direct product of cyclic groups. More precisely     There exist , prime integers and positive integers such that: where for all .    For each index , there is a partition with each , such that , thus overall we have     The 's, 's and 's are uniquely determined by .    equivalently, there exist , and for all , satisfying for all so that .    The integers are uniquely determined by .       It suffices prove that for a given group , we can recover its invariant factor form from its elementary divisor form, and vice versa. We will be a bit hand-wavey for this following the ideas from the above examples. by applying we have where is the product of the elementary divisors of highest power for each distinct prime in the list , is the product of the next highest possible prime powers, and so on. We will have that and in general that since by definition the exponent of is greater or equal to the exponent of .  Conversely, given with , we may apply to each to find its elementary divisor form.    FTFGAG in Action  For we have , .   Rank, Invariant Factors, Elementary Divisors   In , the number is the rank of , the are the elementary divisors of , and the decomposition of in parts (1-2) is called the elementary divisor decomposition of . elementary divisors (groups)  elementary divisor form (groups) The decomposition in part (1) is also called a primary decomposition .  In , the number is the rank of , the numbers are the invariant factors of , and the decomposition of in part (1) is the invariant factor decomposition of . invariant factors (groups)  invariant factor form (groups)     Elementary Divisor Form to Invariant Factor Form  Say I tell you  gives and so that Since , this is in invariant factor form, and hence the rank of is and the invariant factors of are and .   Invariant Factor Form to Elementary Divisor Form  Suppose now I tell you Then by  given the elementary divisor form.   The makes classification of finite abelian groups a very quick matter.  Abelian Groups of Order  We classify the abelian groups of order up to isomorphism.  Let be an abelian group of order . Since is finite the rank of is . Let's determine the possible elementary divisors so that The above equation gives and the possibilities for factoring as a product of prime powers are or which gives   Note that the two groups above are not isomorphic. To see this, note that there is an element of order in , namely whereas every element has order since and .  Alternatively we could argue that the uniqueness of the tells us that uniquely determines the elementary divisors, so two groups with distinct elementary divisors cannot be isomorphic.       allows us to decompose cyclic groups into direct products of their prime factors.    If is an abelian , then it is isomorphic to a direct product of cyclic groups. This is known as the .    The has two forms, each using either invariant factors or elementary divisors of a group, though it is possible to move from one to the other. See: and .      "
},
{
  "id": "thm-sunzi",
  "level": "2",
  "url": "sec-ftfgag.html#thm-sunzi",
  "type": "Theorem",
  "number": "6.24",
  "title": "Sunzi's Remainder Theorem.",
  "body": "Sunzi's Remainder Theorem   Suppose for distinct primes . Then there is an isomorphism given by where denote the class of an integer in . Sunzi's remainder theorem for groups     Using , we let be the unique homomorhism that sends to . Then We see and so . Conversely, if , then for all and since are pairwise relatively prime, it follows that . This proves . The claim follows by the .   "
},
{
  "id": "remark-30",
  "level": "2",
  "url": "sec-ftfgag.html#remark-30",
  "type": "Remark",
  "number": "6.25",
  "title": "",
  "body": " This theorem frequently goes by the name of The Chinese Remainder Theorem, but it has been remarked that this is somewhat like referencing the Pythagorean Theorem as The Greek Triangle Theorem or Fermat's Little Theorem as The French Power Postulate. In the interest of giving credit where credit is due, we include it here with the name of the 3rd-century Chinese mathematician, Sunzi, to whom the result is often attributed. Chinese Remainder Theorem   "
},
{
  "id": "def-fg-group",
  "level": "2",
  "url": "sec-ftfgag.html#def-fg-group",
  "type": "Definition",
  "number": "6.26",
  "title": "Finitely Generated.",
  "body": "Finitely Generated   A group is finitely generated provided that , where is a finite set. finitely generated group    "
},
{
  "id": "remark-31",
  "level": "2",
  "url": "sec-ftfgag.html#remark-31",
  "type": "Remark",
  "number": "6.27",
  "title": "",
  "body": " Any finite group is finitely generated (take ), but a finitely generated group need not be finite.  "
},
{
  "id": "thm-ftfgag",
  "level": "2",
  "url": "sec-ftfgag.html#thm-ftfgag",
  "type": "Theorem",
  "number": "6.28",
  "title": "Fundamental Theorem of Finitely Generated Abelian Groups (FTFGAG).",
  "body": "Fundamental Theorem of Finitely Generated Abelian Groups (FTFGAG)  fundamental theorem of finitely generated abelian groups  FTFGAG   Let be a finitely generated abelian group. Then is a direct product of cyclic groups. More precisely     There exist , prime integers and positive integers such that: where for all .    For each index , there is a partition with each , such that , thus overall we have     The 's, 's and 's are uniquely determined by .    equivalently, there exist , and for all , satisfying for all so that .    The integers are uniquely determined by .       It suffices prove that for a given group , we can recover its invariant factor form from its elementary divisor form, and vice versa. We will be a bit hand-wavey for this following the ideas from the above examples. by applying we have where is the product of the elementary divisors of highest power for each distinct prime in the list , is the product of the next highest possible prime powers, and so on. We will have that and in general that since by definition the exponent of is greater or equal to the exponent of .  Conversely, given with , we may apply to each to find its elementary divisor form.   "
},
{
  "id": "example-47",
  "level": "2",
  "url": "sec-ftfgag.html#example-47",
  "type": "Example",
  "number": "6.29",
  "title": "FTFGAG in Action.",
  "body": "FTFGAG in Action  For we have , .  "
},
{
  "id": "def-eds-and-ifs",
  "level": "2",
  "url": "sec-ftfgag.html#def-eds-and-ifs",
  "type": "Definition",
  "number": "6.30",
  "title": "Rank, Invariant Factors, Elementary Divisors.",
  "body": "Rank, Invariant Factors, Elementary Divisors   In , the number is the rank of , the are the elementary divisors of , and the decomposition of in parts (1-2) is called the elementary divisor decomposition of . elementary divisors (groups)  elementary divisor form (groups) The decomposition in part (1) is also called a primary decomposition .  In , the number is the rank of , the numbers are the invariant factors of , and the decomposition of in part (1) is the invariant factor decomposition of . invariant factors (groups)  invariant factor form (groups)    "
},
{
  "id": "ex-if-to-ed",
  "level": "2",
  "url": "sec-ftfgag.html#ex-if-to-ed",
  "type": "Example",
  "number": "6.31",
  "title": "Elementary Divisor Form to Invariant Factor Form.",
  "body": "Elementary Divisor Form to Invariant Factor Form  Say I tell you  gives and so that Since , this is in invariant factor form, and hence the rank of is and the invariant factors of are and .  "
},
{
  "id": "ex-ed-to-if",
  "level": "2",
  "url": "sec-ftfgag.html#ex-ed-to-if",
  "type": "Example",
  "number": "6.32",
  "title": "Invariant Factor Form to Elementary Divisor Form.",
  "body": "Invariant Factor Form to Elementary Divisor Form  Suppose now I tell you Then by  given the elementary divisor form.  "
},
{
  "id": "example-50",
  "level": "2",
  "url": "sec-ftfgag.html#example-50",
  "type": "Example",
  "number": "6.33",
  "title": "Abelian Groups of Order <span class=\"process-math\">\\(75\\)<\/span>.",
  "body": "Abelian Groups of Order  We classify the abelian groups of order up to isomorphism.  Let be an abelian group of order . Since is finite the rank of is . Let's determine the possible elementary divisors so that The above equation gives and the possibilities for factoring as a product of prime powers are or which gives   Note that the two groups above are not isomorphic. To see this, note that there is an element of order in , namely whereas every element has order since and .  Alternatively we could argue that the uniqueness of the tells us that uniquely determines the elementary divisors, so two groups with distinct elementary divisors cannot be isomorphic.  "
},
{
  "id": "outcomes-19",
  "level": "2",
  "url": "sec-ftfgag.html#outcomes-19",
  "type": "Summary",
  "number": "6.3",
  "title": "",
  "body": "    allows us to decompose cyclic groups into direct products of their prime factors.    If is an abelian , then it is isomorphic to a direct product of cyclic groups. This is known as the .    The has two forms, each using either invariant factors or elementary divisors of a group, though it is possible to move from one to the other. See: and .     "
},
{
  "id": "sec-defn-ex",
  "level": "1",
  "url": "sec-defn-ex.html",
  "type": "Section",
  "number": "7.1",
  "title": "Ring Basics",
  "body": "Ring Basics  From Rings to Fields    I made a lot of mistakes out of the ring, but I never made any in it.   Jack Johnson   Ring   A ring is a set equipped with two binary operations, and , satisfying: ring       is an abelian group with identity element denoted ,   Associative Multiplication   is associative (making a )   Distributive Property   and hold for all . distributive property       is a unital ring (or a ring with identity ) if, in addition to (1), (2), (3) unital ring  ring with unity  ring with identity      there is a multiplicative identity element written as such that for all .      is commutative if in addition to (1)–(3) commutative ring       holds for all .      is a division ring if , (1)–(4) and (6) hold division ring       is a group under (i.e. every has a multiplicative inverse)      is a field if and (1)–(6) hold (i.e. a field is a commutative division ring). field      Around these parts most of us generally include in our definition of a ring, referring to a ring without an identity as a rng  Get it? . However, we'll stick with the more classical definition for now.    One could argue that commutative rings should really be called abelian rings to remain consistent with abelian groups. Discuss.   Here are some basic consequences of the axioms.  Ring Arithmetic  ring arithmetic   For any ring and all we have:      ,     ,     .     For a unital ring and all we have:      is unique, and     .       Let be a ring with identity.   Let . Observe that by the distributive law. Subtracting from both sides we have . A similar argument shows that .    Let . Note that . Consider . Using the distributive law we see that . Thus and are both additive inverses of making them unique.       Phew. Let's take a breather and see some examples.  Relevant Rings      is called the trivial ring , or zero ring . Personally, I am in favor of calling this the bor-ring .  trivial ring  zero ring      is a commutative ring.     is a commutative ring under addition and multiplication modulo .    The familiar sets are fields.    The set is a commutative ring known as the Gaussian integers . Gaussian integers     If is any ring (not necessarily commutative), so is for any natural number , using the usual rules for addition and multiplication of square matrices.    The cartesian product of two rings and has a natural ring structure with addition and multiplication defined componentwise:         Let be a ring. Prove that if and only if .   Notice that in the trivial ring . Conversely, if in a ring, then , since in this case for all , we have and hence .   Direct Product Preservations Let and be rings. The Cartesian product is commutative if and only if and are commutative. Similarly, has identity if and only if both and do as well.  Less Relevant Rings   Opposite Day  Given a ring , let denote the “opposite ring''. This is the same underlying set as equipped with the same rule for as , but with multiplication rule (which I will write here as ) redefined to be (where refers to the original multiplication rule for ). Then is also a ring opposite ring     Function Ring  If is a set and is a ring, let be the collection of set theoretic functions from to , and define and . Then is a ring. If is a finite set and , then may be identified with , the direct product of copies of .     Endomorphism Ring  If is any abelian group, set to be the collection of endomorphisms of — that is, the set of group homomorphisms from to itself. endomorphism ring    Then is a ring with addition and multiplication . This is almost always a non-commutative ring.     Here is a nice generalization that will prove usful quite a few times down the road.  Binomial Theorem for Commutative Rings  binomial theorem (commutative rings)   For any commutative ring and any elements and in , we have: where is the binomial coefficient, defined as: with integers and such that .     Absolute Units    There is more power in unity than division.   Emmanuel Cleaver   Unit   An element of a unital ring with is called a unit there exists such that and . If such a exists, it is unique, it is called the inverse of and denoted by . unit     Group of Units   The set of units of a non-trivial unital ring is denoted . This forms a group with respect to multiplication. group of units     Finally, we have a formal definition for groups of units.  Sweet, Sweet Rigor The group of units is indeed a group with respect to multiplication.  Well, that was validating. Not as validating as it will be when we prove that matrix multiplication is associative, finally allowing us to complete the proof that is indeed a group. Soon... Months in the making. But enough vindication: we move forward. It's all we've ever known.  Units in Fields  Let be a field. Prove that every non-zero element of is a unit. In symbols, show .     is often the standard way of proving that something is a field.   If you'll remember all the way back to , you'll see that we verified for and . This also explains why and had a different structure: they weren't fields.  is a Field!  In we showed that . Thus is a field for all primes .   Matrices and Units For any field we have .   Units in matrix rings are called invertible matrices , but they aren't very useful and we'll probably never see them again. That was a joke. I'm very funny.    Gaussian Units  Let be the ring of Gaussian integers. Define a function    Prove that for any .    Use the function to determine the units of .         Let and behold So there's that done.    Suppose . Then by Part (1) we know so , with . Thus we have . So the units of are .       The function in is some incredibly spicy foreshadowing of something called a norm function, which we'll see more of in .    A Zero Divided Cannot Stand    The only way on Earth to multiply happiness is to divide it.  Paul Scherrer   We might not be able to divide by zero, but sometimes we can get the next best thing.  Zerodivisor   A zerodivisor in a ring is an element such that or for some . We once again jump the gun on the lack-of-hyphenation situation. Language evolves at its own rate, but who has time for that?  zerodivisor     However, as it turns out, most of the time we are trying to avoid the next best thing.  Integral Domain   A unital ring is an integral domain (often shortened to domain ) if , is commutative, and has no zerodivisors. integral domain      Note that by saying that is equivalent to saying that is nontrivial.   is an Integral Domain  The ring of integers is an integral domain. Find two nonzero integers that multiply to . I dare you. This is, in our humble opinion, how all conjectures should be proven moving forward.    Unlike in groups, which have a notion of , rings do not necessarily come equipped with this property. One of the main niceties of integral domains is that cancellation is indeed possible (and in many cases encouraged).  Cancellation in Domains   Let be a commutative ring with identity. Then is an integral domain if and only if for all such that , we have . This property is called cancellation . cancellation (integral domains)      This is sometimes taken to be the definition of an integral domain, but we're not like the ~other~ algebra books.   Rather than jumping in and proving too many examples directly, let's be a little more efficient and discover a whole class of examples in one fell swoop. Well, actually two fell swoops, since we'll need a quick lemma first.  Zerodivisors and Units   If is a zerodivisor in a ring , then is not a unit.    Suppose that is both a zerodivisor and a unit. Then there exists such that or . Multiplying either of these equations by gives , a contradiction.    All right. Now it's one fell swoop.  Domains and Fields      Every field is an integral domain.    A finite integral domain must be a field.          Let be a field. By we know that every nonzero element of is a unit. Thus has no zerodivisors by .    Let , and consider the set . As is finite there must exist such that . Since is an integral domain allows us to cancel an from both sides, yielding , and thus , making a unit of . Thus is a field by .       Finite Zerdivisors and Units    Prove that if is finite then every element is either a unit or a zerodivisor.    Give an example of a ring and an element which is neither a unit nor a zerodivisor.     Nilpotent   An element of a ring is called nilpotent if for some integer . nilpotent     Nilpotents and Units  If is a nilpotent element in a unital ring , then is a unit.   Idempotent   Let be a ring with identity. An element is called idempotent if . idempotent     Potent Idempotents Let be a ring with identity.   Give an example of a ring which has an idempotent other than or .    Prove that if is idempotent, so is .    Suppose is commutative and an idempotent. Let . Prove that is a commutative ring (with identity ).    Prove that the only idempotents in an integral domain are and .      "
},
{
  "id": "def-ring",
  "level": "2",
  "url": "sec-defn-ex.html#def-ring",
  "type": "Definition",
  "number": "7.1",
  "title": "Ring.",
  "body": "Ring   A ring is a set equipped with two binary operations, and , satisfying: ring       is an abelian group with identity element denoted ,   Associative Multiplication   is associative (making a )   Distributive Property   and hold for all . distributive property       is a unital ring (or a ring with identity ) if, in addition to (1), (2), (3) unital ring  ring with unity  ring with identity      there is a multiplicative identity element written as such that for all .      is commutative if in addition to (1)–(3) commutative ring       holds for all .      is a division ring if , (1)–(4) and (6) hold division ring       is a group under (i.e. every has a multiplicative inverse)      is a field if and (1)–(6) hold (i.e. a field is a commutative division ring). field    "
},
{
  "id": "exploration-5",
  "level": "2",
  "url": "sec-defn-ex.html#exploration-5",
  "type": "Discussion",
  "number": "7.1",
  "title": "",
  "body": " One could argue that commutative rings should really be called abelian rings to remain consistent with abelian groups. Discuss.  "
},
{
  "id": "prop-ring-arithmetic",
  "level": "2",
  "url": "sec-defn-ex.html#prop-ring-arithmetic",
  "type": "Proposition",
  "number": "7.2",
  "title": "Ring Arithmetic.",
  "body": "Ring Arithmetic  ring arithmetic   For any ring and all we have:      ,     ,     .     For a unital ring and all we have:      is unique, and     .       Let be a ring with identity.   Let . Observe that by the distributive law. Subtracting from both sides we have . A similar argument shows that .    Let . Note that . Consider . Using the distributive law we see that . Thus and are both additive inverses of making them unique.      "
},
{
  "id": "ex-ring-examples",
  "level": "2",
  "url": "sec-defn-ex.html#ex-ring-examples",
  "type": "Example",
  "number": "7.3",
  "title": "Relevant Rings.",
  "body": "Relevant Rings      is called the trivial ring , or zero ring . Personally, I am in favor of calling this the bor-ring .  trivial ring  zero ring      is a commutative ring.     is a commutative ring under addition and multiplication modulo .    The familiar sets are fields.    The set is a commutative ring known as the Gaussian integers . Gaussian integers     If is any ring (not necessarily commutative), so is for any natural number , using the usual rules for addition and multiplication of square matrices.    The cartesian product of two rings and has a natural ring structure with addition and multiplication defined componentwise:       "
},
{
  "id": "exe-1-is-0",
  "level": "2",
  "url": "sec-defn-ex.html#exe-1-is-0",
  "type": "Exercise",
  "number": "7.4",
  "title": "<span class=\"process-math\">\\(1=0\\)<\/span>.",
  "body": " Let be a ring. Prove that if and only if .   Notice that in the trivial ring . Conversely, if in a ring, then , since in this case for all , we have and hence .  "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "sec-defn-ex.html#exercise-53",
  "type": "Exercise",
  "number": "7.5",
  "title": "Direct Product Preservations.",
  "body": "Direct Product Preservations Let and be rings. The Cartesian product is commutative if and only if and are commutative. Similarly, has identity if and only if both and do as well. "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "sec-defn-ex.html#exercise-54",
  "type": "Exercise",
  "number": "7.6",
  "title": "Less Relevant Rings.",
  "body": "Less Relevant Rings   Opposite Day  Given a ring , let denote the “opposite ring''. This is the same underlying set as equipped with the same rule for as , but with multiplication rule (which I will write here as ) redefined to be (where refers to the original multiplication rule for ). Then is also a ring opposite ring     Function Ring  If is a set and is a ring, let be the collection of set theoretic functions from to , and define and . Then is a ring. If is a finite set and , then may be identified with , the direct product of copies of .     Endomorphism Ring  If is any abelian group, set to be the collection of endomorphisms of — that is, the set of group homomorphisms from to itself. endomorphism ring    Then is a ring with addition and multiplication . This is almost always a non-commutative ring.    "
},
{
  "id": "thm-binomial-thm-rings",
  "level": "2",
  "url": "sec-defn-ex.html#thm-binomial-thm-rings",
  "type": "Theorem",
  "number": "7.7",
  "title": "Binomial Theorem for Commutative Rings.",
  "body": "Binomial Theorem for Commutative Rings  binomial theorem (commutative rings)   For any commutative ring and any elements and in , we have: where is the binomial coefficient, defined as: with integers and such that .   "
},
{
  "id": "def-unit",
  "level": "2",
  "url": "sec-defn-ex.html#def-unit",
  "type": "Definition",
  "number": "7.8",
  "title": "Unit.",
  "body": "Unit   An element of a unital ring with is called a unit there exists such that and . If such a exists, it is unique, it is called the inverse of and denoted by . unit    "
},
{
  "id": "def-group-of-units",
  "level": "2",
  "url": "sec-defn-ex.html#def-group-of-units",
  "type": "Definition",
  "number": "7.9",
  "title": "Group of Units.",
  "body": "Group of Units   The set of units of a non-trivial unital ring is denoted . This forms a group with respect to multiplication. group of units    "
},
{
  "id": "exe-group-of-units-is-a-group",
  "level": "2",
  "url": "sec-defn-ex.html#exe-group-of-units-is-a-group",
  "type": "Exercise",
  "number": "7.10",
  "title": "Sweet, Sweet Rigor.",
  "body": "Sweet, Sweet Rigor The group of units is indeed a group with respect to multiplication. "
},
{
  "id": "thm-units-in-fields",
  "level": "2",
  "url": "sec-defn-ex.html#thm-units-in-fields",
  "type": "Theorem",
  "number": "7.11",
  "title": "Units in Fields.",
  "body": "Units in Fields  Let be a field. Prove that every non-zero element of is a unit. In symbols, show .  "
},
{
  "id": "remark-32",
  "level": "2",
  "url": "sec-defn-ex.html#remark-32",
  "type": "Remark",
  "number": "7.12",
  "title": "",
  "body": "  is often the standard way of proving that something is a field.  "
},
{
  "id": "zp-field",
  "level": "2",
  "url": "sec-defn-ex.html#zp-field",
  "type": "Example",
  "number": "7.13",
  "title": "<span class=\"process-math\">\\(\\Z\/p\\)<\/span> is a Field!",
  "body": "is a Field!  In we showed that . Thus is a field for all primes .  "
},
{
  "id": "exe-matrices-and-units",
  "level": "2",
  "url": "sec-defn-ex.html#exe-matrices-and-units",
  "type": "Exercise",
  "number": "7.14",
  "title": "Matrices and Units.",
  "body": "Matrices and Units For any field we have . "
},
{
  "id": "remark-33",
  "level": "2",
  "url": "sec-defn-ex.html#remark-33",
  "type": "Remark",
  "number": "7.15",
  "title": "",
  "body": " Units in matrix rings are called invertible matrices , but they aren't very useful and we'll probably never see them again. That was a joke. I'm very funny.   "
},
{
  "id": "exe-gaussian-units",
  "level": "2",
  "url": "sec-defn-ex.html#exe-gaussian-units",
  "type": "Exercise",
  "number": "7.16",
  "title": "Gaussian Units.",
  "body": "Gaussian Units  Let be the ring of Gaussian integers. Define a function    Prove that for any .    Use the function to determine the units of .         Let and behold So there's that done.    Suppose . Then by Part (1) we know so , with . Thus we have . So the units of are .     "
},
{
  "id": "remark-34",
  "level": "2",
  "url": "sec-defn-ex.html#remark-34",
  "type": "Remark",
  "number": "7.17",
  "title": "",
  "body": " The function in is some incredibly spicy foreshadowing of something called a norm function, which we'll see more of in .  "
},
{
  "id": "def-zerodivisor",
  "level": "2",
  "url": "sec-defn-ex.html#def-zerodivisor",
  "type": "Definition",
  "number": "7.18",
  "title": "Zerodivisor.",
  "body": "Zerodivisor   A zerodivisor in a ring is an element such that or for some . We once again jump the gun on the lack-of-hyphenation situation. Language evolves at its own rate, but who has time for that?  zerodivisor    "
},
{
  "id": "def-integral-domain",
  "level": "2",
  "url": "sec-defn-ex.html#def-integral-domain",
  "type": "Definition",
  "number": "7.19",
  "title": "Integral Domain.",
  "body": "Integral Domain   A unital ring is an integral domain (often shortened to domain ) if , is commutative, and has no zerodivisors. integral domain    "
},
{
  "id": "remark-35",
  "level": "2",
  "url": "sec-defn-ex.html#remark-35",
  "type": "Remark",
  "number": "7.20",
  "title": "",
  "body": " Note that by saying that is equivalent to saying that is nontrivial.  "
},
{
  "id": "ex-z-integral-domain",
  "level": "2",
  "url": "sec-defn-ex.html#ex-z-integral-domain",
  "type": "Example",
  "number": "7.21",
  "title": "<span class=\"process-math\">\\(\\Z\\)<\/span> is an Integral Domain.",
  "body": "is an Integral Domain  The ring of integers is an integral domain. Find two nonzero integers that multiply to . I dare you. This is, in our humble opinion, how all conjectures should be proven moving forward.   "
},
{
  "id": "lem-cancellation-in-integral-domains",
  "level": "2",
  "url": "sec-defn-ex.html#lem-cancellation-in-integral-domains",
  "type": "Lemma",
  "number": "7.22",
  "title": "Cancellation in Domains.",
  "body": "Cancellation in Domains   Let be a commutative ring with identity. Then is an integral domain if and only if for all such that , we have . This property is called cancellation . cancellation (integral domains)    "
},
{
  "id": "lem-zerodivisor-not-unit",
  "level": "2",
  "url": "sec-defn-ex.html#lem-zerodivisor-not-unit",
  "type": "Lemma",
  "number": "7.23",
  "title": "Zerodivisors and Units.",
  "body": "Zerodivisors and Units   If is a zerodivisor in a ring , then is not a unit.    Suppose that is both a zerodivisor and a unit. Then there exists such that or . Multiplying either of these equations by gives , a contradiction.   "
},
{
  "id": "integral-domains-and-fields",
  "level": "2",
  "url": "sec-defn-ex.html#integral-domains-and-fields",
  "type": "Theorem",
  "number": "7.24",
  "title": "Domains and Fields.",
  "body": "Domains and Fields      Every field is an integral domain.    A finite integral domain must be a field.          Let be a field. By we know that every nonzero element of is a unit. Thus has no zerodivisors by .    Let , and consider the set . As is finite there must exist such that . Since is an integral domain allows us to cancel an from both sides, yielding , and thus , making a unit of . Thus is a field by .      "
},
{
  "id": "exe-neither-zerodivisor-nor-unit",
  "level": "2",
  "url": "sec-defn-ex.html#exe-neither-zerodivisor-nor-unit",
  "type": "Exercise",
  "number": "7.25",
  "title": "Finite Zerdivisors and Units.",
  "body": "Finite Zerdivisors and Units    Prove that if is finite then every element is either a unit or a zerodivisor.    Give an example of a ring and an element which is neither a unit nor a zerodivisor.    "
},
{
  "id": "def-nilpotent",
  "level": "2",
  "url": "sec-defn-ex.html#def-nilpotent",
  "type": "Definition",
  "number": "7.26",
  "title": "Nilpotent.",
  "body": "Nilpotent   An element of a ring is called nilpotent if for some integer . nilpotent    "
},
{
  "id": "lem-nilpotents-and-units",
  "level": "2",
  "url": "sec-defn-ex.html#lem-nilpotents-and-units",
  "type": "Lemma",
  "number": "7.27",
  "title": "Nilpotents and Units.",
  "body": "Nilpotents and Units  If is a nilpotent element in a unital ring , then is a unit.  "
},
{
  "id": "def-idempotent",
  "level": "2",
  "url": "sec-defn-ex.html#def-idempotent",
  "type": "Definition",
  "number": "7.28",
  "title": "Idempotent.",
  "body": "Idempotent   Let be a ring with identity. An element is called idempotent if . idempotent    "
},
{
  "id": "exercise-59",
  "level": "2",
  "url": "sec-defn-ex.html#exercise-59",
  "type": "Exercise",
  "number": "7.29",
  "title": "Potent Idempotents.",
  "body": "Potent Idempotents Let be a ring with identity.   Give an example of a ring which has an idempotent other than or .    Prove that if is idempotent, so is .    Suppose is commutative and an idempotent. Let . Prove that is a commutative ring (with identity ).    Prove that the only idempotents in an integral domain are and .    "
},
{
  "id": "sec-sub-poly",
  "level": "1",
  "url": "sec-sub-poly.html",
  "type": "Section",
  "number": "7.2",
  "title": "Subrings and Polynomial Rings",
  "body": " Subrings and Polynomial Rings  Subrings    We all live in a yellow subma-ring   (Ring)o Starr   We will spend the first half of our exploration of rings following the same general structure as we did in . First, we looked at rings in general, and now we will examine subrings, just as we did with subgroups. Then it's off to homomorphisms, isomorphisms, and quotients. It'll be just like old times.  Subring   A subring of a ring is a subset such that is a ring under the operations of . subring   When is a field we call a subfield of  We generally do not define subdomains, subcommutativerings, or subdivisionringswithidentity, but if you're feeling inspired I say go for it. . subfield     Subring Test  subring test   A nonempty subset of a ring is a subring if and only if either one of the following hold:    is a subgroup of closed under multiplication.     is closed under subtraction and multiplication.       Subring Preservations Any subring of a commutative ring is a commutative ring. Any unital subring of an integral domain is an integral domain.  Examples of Subrings     is a subring of , which is a subring of , which is a subring of .   is a subring without of the ring with .  The set of continuous functions mapping is a subring of , denoted .   , the ring of Gaussian Integers, is a subring of .     Nilradical Radishes  Prove that the set of all nilpotent elements of a ring is a subring of , which we call the nilradical . nilradical    Fancy Subrings If is a ring and is a subring of , it can happen that    is unital but is not (e.g. )     is unital but is not    both and are unital but    Find examples for each of these situations!  Center of a Ring   The center of a ring is the set  center (of a ring)     Center is a Subring   The center is a subring of . If is a ring with identity then is a subring that contains the same .    Centers of rings don't show up as much in ring theory as they did with groups, but that might also be because there hasn't been a non-commutative ring spotted within twenty miles of UNL since 1977.    Let be a squarefree integer (that is, the prime factorization of has no repeated primes). Then the subset of is a subring that is a field (called a quadratic field ), and is a subring of . quadratic field      Both and are closed under subtraction and multiplication, so they are subrings of .  The fact that is a {} follows since is also closed under taking inverses. Indeed the inverse of (from ) turns out to be whenever . A slightly subtle point here is that the fraction above makes sense since provided and are not simultaneously . This is because, if then either , which contradicts the assumption that is squarefree, or , which contradicts the assumption .     Note the difference in notation between and : one uses parenthesis and the other brackets. This is to denote that one (the one with parentheses) is a field, whereas the other [the one with brackets] is not. This is also some spicy foreshadowing that won't pay off until all the way down in . Stay tuned.    Polynomial Rings    I had a polynomial once. My doctor removed it.   Michael Grant   Polynomial Ring   For any commutative ring , the polynomial ring in the variable  , written , is the set with addition defined by and multiplication defined by For any commutative ring , the polynomial ring in  , written , is defined inductively as , but more easily thought of as the set consisting of (finite) sums of the form with addition and multiplication defined by rules similar to the ones seen above. polynomial ring      One often views as the subring of consisting of the constant polynomials.   Let's remind ourselves of some classic notions of polynomials.  Degree   Let , . Say , where . Then is the degree of . degree (polynomial)     Monic   A polynomial is monic if . Please do not confuse this with the notion of a yonic polynomial, which does not yet exist and should probably stay that way. Algebraists are already on very thin ice for some of the things they've named over the years.  monic polynomial     Polynomials, Domains, Degrees, Units   If is a domain, then    is a domain    for any nonzero polynomials ,     the units of are the units of ( )       Its been far too long since we've had ourselves a universal mapping property, I think we've earned one. As a treat.  UMP for Polynomial Rings  UMP for polynomial rings   Let and be commutative rings, is a ring homomorphism and arbitrary elements of . Then there exists a unique ring homomorphism such that and for all , namely     Let's observe first that if such a map exists it is unique. For if is a ring map extending and sending to . Then using that preserves and .  For existence, let's assume at first. Given and , define by It is elementary (but tedious) to check really is a ring homomorphism. The fact that it restricts to is clear, however.  For the general case, we proceed by induction on the number of variables . The induction hypothesis shows that there is a ring homomorphism such that and , . Applying the case to gives with and . Setting gives a map with the needed properties.    Evalutation Homomorphism If are commutative rings with and , then the evaluation at function given by is a ring homomorphism. evaluation homomorphism   Ring Maps and Coefficients  Given a ring map between commutative rings, we may apply to the composition using the element of to get an induced ring map that sends to . That is, the map applies to the coefficients of a polynomial. This can be generalized to more than one variable in the obvious way.   Reduction Homomorphism Continuing with , we could have for an ideal of and could be the quotient map. Then takes a polynomial and reduces its coefficients modulo . We will usually denote the image of through the reduction homomorphism by . reduction homomorphism   Luckily for us, it turns out that the holds in polynomial rings as well.  Polynomial Division Algorithm  division algorithm (polynomial rings)   Let be a commutative ring with identity and . Assume the leading coefficient of is a unit in . Then there exists a unique such that , and .    Factor Theorem  factor theorem   Let be a commutative ring with identity, and . Then if and only if .     "
},
{
  "id": "def-subring",
  "level": "2",
  "url": "sec-sub-poly.html#def-subring",
  "type": "Definition",
  "number": "7.30",
  "title": "Subring.",
  "body": "Subring   A subring of a ring is a subset such that is a ring under the operations of . subring   When is a field we call a subfield of  We generally do not define subdomains, subcommutativerings, or subdivisionringswithidentity, but if you're feeling inspired I say go for it. . subfield    "
},
{
  "id": "lem-subring-test",
  "level": "2",
  "url": "sec-sub-poly.html#lem-subring-test",
  "type": "Lemma",
  "number": "7.31",
  "title": "Subring Test.",
  "body": "Subring Test  subring test   A nonempty subset of a ring is a subring if and only if either one of the following hold:    is a subgroup of closed under multiplication.     is closed under subtraction and multiplication.      "
},
{
  "id": "exe-subring-preservations",
  "level": "2",
  "url": "sec-sub-poly.html#exe-subring-preservations",
  "type": "Exercise",
  "number": "7.32",
  "title": "Subring Preservations.",
  "body": "Subring Preservations Any subring of a commutative ring is a commutative ring. Any unital subring of an integral domain is an integral domain. "
},
{
  "id": "ex-subring-examples",
  "level": "2",
  "url": "sec-sub-poly.html#ex-subring-examples",
  "type": "Example",
  "number": "7.33",
  "title": "Examples of Subrings.",
  "body": "Examples of Subrings     is a subring of , which is a subring of , which is a subring of .   is a subring without of the ring with .  The set of continuous functions mapping is a subring of , denoted .   , the ring of Gaussian Integers, is a subring of .    "
},
{
  "id": "investigation-3",
  "level": "2",
  "url": "sec-sub-poly.html#investigation-3",
  "type": "Exploration",
  "number": "7.2",
  "title": "Nilradical Radishes.",
  "body": "Nilradical Radishes  Prove that the set of all nilpotent elements of a ring is a subring of , which we call the nilradical . nilradical   "
},
{
  "id": "exe-finding-subring-counterexamples",
  "level": "2",
  "url": "sec-sub-poly.html#exe-finding-subring-counterexamples",
  "type": "Exercise",
  "number": "7.34",
  "title": "Fancy Subrings.",
  "body": "Fancy Subrings If is a ring and is a subring of , it can happen that    is unital but is not (e.g. )     is unital but is not    both and are unital but    Find examples for each of these situations! "
},
{
  "id": "def-center-ring",
  "level": "2",
  "url": "sec-sub-poly.html#def-center-ring",
  "type": "Definition",
  "number": "7.35",
  "title": "Center of a Ring.",
  "body": "Center of a Ring   The center of a ring is the set  center (of a ring)    "
},
{
  "id": "lem-center-is-subring",
  "level": "2",
  "url": "sec-sub-poly.html#lem-center-is-subring",
  "type": "Lemma",
  "number": "7.36",
  "title": "Center is a Subring.",
  "body": "Center is a Subring   The center is a subring of . If is a ring with identity then is a subring that contains the same .   "
},
{
  "id": "lem-quadratic-field",
  "level": "2",
  "url": "sec-sub-poly.html#lem-quadratic-field",
  "type": "Lemma",
  "number": "7.37",
  "title": "<span class=\"process-math\">\\(\\Q(\\sqrt {d})\\)<\/span>.",
  "body": "  Let be a squarefree integer (that is, the prime factorization of has no repeated primes). Then the subset of is a subring that is a field (called a quadratic field ), and is a subring of . quadratic field      Both and are closed under subtraction and multiplication, so they are subrings of .  The fact that is a {} follows since is also closed under taking inverses. Indeed the inverse of (from ) turns out to be whenever . A slightly subtle point here is that the fraction above makes sense since provided and are not simultaneously . This is because, if then either , which contradicts the assumption that is squarefree, or , which contradicts the assumption .   "
},
{
  "id": "remark-36",
  "level": "2",
  "url": "sec-sub-poly.html#remark-36",
  "type": "Remark",
  "number": "7.38",
  "title": "",
  "body": " Note the difference in notation between and : one uses parenthesis and the other brackets. This is to denote that one (the one with parentheses) is a field, whereas the other [the one with brackets] is not. This is also some spicy foreshadowing that won't pay off until all the way down in . Stay tuned.  "
},
{
  "id": "def-polynomial-ring",
  "level": "2",
  "url": "sec-sub-poly.html#def-polynomial-ring",
  "type": "Definition",
  "number": "7.39",
  "title": "Polynomial Ring.",
  "body": "Polynomial Ring   For any commutative ring , the polynomial ring in the variable  , written , is the set with addition defined by and multiplication defined by For any commutative ring , the polynomial ring in  , written , is defined inductively as , but more easily thought of as the set consisting of (finite) sums of the form with addition and multiplication defined by rules similar to the ones seen above. polynomial ring    "
},
{
  "id": "remark-37",
  "level": "2",
  "url": "sec-sub-poly.html#remark-37",
  "type": "Remark",
  "number": "7.40",
  "title": "",
  "body": " One often views as the subring of consisting of the constant polynomials.  "
},
{
  "id": "def-degree",
  "level": "2",
  "url": "sec-sub-poly.html#def-degree",
  "type": "Definition",
  "number": "7.41",
  "title": "Degree.",
  "body": "Degree   Let , . Say , where . Then is the degree of . degree (polynomial)    "
},
{
  "id": "def-monic",
  "level": "2",
  "url": "sec-sub-poly.html#def-monic",
  "type": "Definition",
  "number": "7.42",
  "title": "Monic.",
  "body": "Monic   A polynomial is monic if . Please do not confuse this with the notion of a yonic polynomial, which does not yet exist and should probably stay that way. Algebraists are already on very thin ice for some of the things they've named over the years.  monic polynomial    "
},
{
  "id": "prop-polynomials-domains-degrees-units",
  "level": "2",
  "url": "sec-sub-poly.html#prop-polynomials-domains-degrees-units",
  "type": "Proposition",
  "number": "7.43",
  "title": "Polynomials, Domains, Degrees, Units.",
  "body": "Polynomials, Domains, Degrees, Units   If is a domain, then    is a domain    for any nonzero polynomials ,     the units of are the units of ( )      "
},
{
  "id": "thm-ump-polynomial-rings",
  "level": "2",
  "url": "sec-sub-poly.html#thm-ump-polynomial-rings",
  "type": "Theorem",
  "number": "7.44",
  "title": "UMP for Polynomial Rings.",
  "body": "UMP for Polynomial Rings  UMP for polynomial rings   Let and be commutative rings, is a ring homomorphism and arbitrary elements of . Then there exists a unique ring homomorphism such that and for all , namely     Let's observe first that if such a map exists it is unique. For if is a ring map extending and sending to . Then using that preserves and .  For existence, let's assume at first. Given and , define by It is elementary (but tedious) to check really is a ring homomorphism. The fact that it restricts to is clear, however.  For the general case, we proceed by induction on the number of variables . The induction hypothesis shows that there is a ring homomorphism such that and , . Applying the case to gives with and . Setting gives a map with the needed properties.   "
},
{
  "id": "exe-evaluation-homomorphism",
  "level": "2",
  "url": "sec-sub-poly.html#exe-evaluation-homomorphism",
  "type": "Exercise",
  "number": "7.45",
  "title": "Evalutation Homomorphism.",
  "body": "Evalutation Homomorphism If are commutative rings with and , then the evaluation at function given by is a ring homomorphism. evaluation homomorphism  "
},
{
  "id": "ex-applying-ring-homomorphism-to-coefficients",
  "level": "2",
  "url": "sec-sub-poly.html#ex-applying-ring-homomorphism-to-coefficients",
  "type": "Example",
  "number": "7.46",
  "title": "Ring Maps and Coefficients.",
  "body": "Ring Maps and Coefficients  Given a ring map between commutative rings, we may apply to the composition using the element of to get an induced ring map that sends to . That is, the map applies to the coefficients of a polynomial. This can be generalized to more than one variable in the obvious way.  "
},
{
  "id": "exe-the-reduction-homomorphism",
  "level": "2",
  "url": "sec-sub-poly.html#exe-the-reduction-homomorphism",
  "type": "Exercise",
  "number": "7.47",
  "title": "Reduction Homomorphism.",
  "body": "Reduction Homomorphism Continuing with , we could have for an ideal of and could be the quotient map. Then takes a polynomial and reduces its coefficients modulo . We will usually denote the image of through the reduction homomorphism by . reduction homomorphism  "
},
{
  "id": "thm-polynomial-division-algorithm",
  "level": "2",
  "url": "sec-sub-poly.html#thm-polynomial-division-algorithm",
  "type": "Theorem",
  "number": "7.48",
  "title": "Polynomial Division Algorithm.",
  "body": "Polynomial Division Algorithm  division algorithm (polynomial rings)   Let be a commutative ring with identity and . Assume the leading coefficient of is a unit in . Then there exists a unique such that , and .   "
},
{
  "id": "thm-factor-thm",
  "level": "2",
  "url": "sec-sub-poly.html#thm-factor-thm",
  "type": "Theorem",
  "number": "7.49",
  "title": "Factor Theorem.",
  "body": "Factor Theorem  factor theorem   Let be a commutative ring with identity, and . Then if and only if .   "
},
{
  "id": "sec-ring-hom",
  "level": "1",
  "url": "sec-ring-hom.html",
  "type": "Section",
  "number": "7.3",
  "title": "Homomorphisms",
  "body": "Homomorphisms    When you have a map, you know where to go.  Shakira   Ring Homomorphism   If and are rings, a ring homomorphism from to is a function that satisfies:    for all ,     for all .   Ring homomorphisms are often referred to as ring maps . ring homomorphism     So basically the same as a group homomorphism, but with an extra operation that we need to preserve.  Ring Isomorphism   A ring homomorphism that is bijective is called a ring isomorphism . Two rings and are isomorphic , written , if there is an isomorphism from to . Ring isomorphisms are not usually referred to as super ring maps , but it would be cool if they were.  ring isomorphism     Isomorphism Invariants   The following are ring isomorphism invariants:   all group isomorphism invariants of the additive group, including the isomorphism class (i.e., if then ).    being unital, being commutative, division ring, field, integral domain    the number of zerodivisors.    if is unital, all group isomorphism invariants of the group of units, including the isomorphism class (i.e., if then ).    the isomorphism type of the center (i.e., if then ).       Examples of Ring Maps    The identity map is a ring isomorphism.  The zero map is a ring map.  Let be a subring of a ring . The inclusion mapping of into is a ring homomorphism.  Projection maps are ring homomorphisms.     Properties of Ring Maps   If is a ring homomorphism, then    and .    if , are unital then can be either or a zerodivisor.    If and then .    If and are ring homomorphisms (or isomorphisms, respectively), then is a ring homomorphism (or isomorphism).         Since we have , thus Now either or (which yields ) or both of these are nonzero and then they are complementary zerodivisors (in particular, is a zerodivisor).      Equivalent Field Characterizations  Let be a nontrivial ring. Then is a field if and only if every homomorphism of into a nonzero ring is injective.   Isomorphisms and Idempotents Suppose is commutative and an idempotent. Let . Prove that the map given by is a ring isomorphism.  More Isomorphisms Let be squarefree integers and set and .   There is a group isomorphism .    There is a ring isomorphism if and only if .     "
},
{
  "id": "def-ring-homomorphism",
  "level": "2",
  "url": "sec-ring-hom.html#def-ring-homomorphism",
  "type": "Definition",
  "number": "7.50",
  "title": "Ring Homomorphism.",
  "body": "Ring Homomorphism   If and are rings, a ring homomorphism from to is a function that satisfies:    for all ,     for all .   Ring homomorphisms are often referred to as ring maps . ring homomorphism    "
},
{
  "id": "def-ring-isomorphism",
  "level": "2",
  "url": "sec-ring-hom.html#def-ring-isomorphism",
  "type": "Definition",
  "number": "7.51",
  "title": "Ring Isomorphism.",
  "body": "Ring Isomorphism   A ring homomorphism that is bijective is called a ring isomorphism . Two rings and are isomorphic , written , if there is an isomorphism from to . Ring isomorphisms are not usually referred to as super ring maps , but it would be cool if they were.  ring isomorphism    "
},
{
  "id": "prop-ring-isomorphism-invariants",
  "level": "2",
  "url": "sec-ring-hom.html#prop-ring-isomorphism-invariants",
  "type": "Proposition",
  "number": "7.52",
  "title": "Isomorphism Invariants.",
  "body": "Isomorphism Invariants   The following are ring isomorphism invariants:   all group isomorphism invariants of the additive group, including the isomorphism class (i.e., if then ).    being unital, being commutative, division ring, field, integral domain    the number of zerodivisors.    if is unital, all group isomorphism invariants of the group of units, including the isomorphism class (i.e., if then ).    the isomorphism type of the center (i.e., if then ).      "
},
{
  "id": "exe-ring-homomorphisms-examples",
  "level": "2",
  "url": "sec-ring-hom.html#exe-ring-homomorphisms-examples",
  "type": "Example",
  "number": "7.53",
  "title": "Examples of Ring Maps.",
  "body": "Examples of Ring Maps    The identity map is a ring isomorphism.  The zero map is a ring map.  Let be a subring of a ring . The inclusion mapping of into is a ring homomorphism.  Projection maps are ring homomorphisms.    "
},
{
  "id": "lem-ring-homomorphism-properties",
  "level": "2",
  "url": "sec-ring-hom.html#lem-ring-homomorphism-properties",
  "type": "Lemma",
  "number": "7.54",
  "title": "Properties of Ring Maps.",
  "body": "Properties of Ring Maps   If is a ring homomorphism, then    and .    if , are unital then can be either or a zerodivisor.    If and then .    If and are ring homomorphisms (or isomorphisms, respectively), then is a ring homomorphism (or isomorphism).         Since we have , thus Now either or (which yields ) or both of these are nonzero and then they are complementary zerodivisors (in particular, is a zerodivisor).     "
},
{
  "id": "exe-equivalent-field-definitions",
  "level": "2",
  "url": "sec-ring-hom.html#exe-equivalent-field-definitions",
  "type": "Exercise",
  "number": "7.55",
  "title": "Equivalent Field Characterizations.",
  "body": "Equivalent Field Characterizations  Let be a nontrivial ring. Then is a field if and only if every homomorphism of into a nonzero ring is injective.  "
},
{
  "id": "exercise-65",
  "level": "2",
  "url": "sec-ring-hom.html#exercise-65",
  "type": "Exercise",
  "number": "7.56",
  "title": "Isomorphisms and Idempotents.",
  "body": "Isomorphisms and Idempotents Suppose is commutative and an idempotent. Let . Prove that the map given by is a ring isomorphism. "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "sec-ring-hom.html#exercise-66",
  "type": "Exercise",
  "number": "7.57",
  "title": "More Isomorphisms.",
  "body": "More Isomorphisms Let be squarefree integers and set and .   There is a group isomorphism .    There is a ring isomorphism if and only if .    "
},
{
  "id": "sec-ideals",
  "level": "1",
  "url": "sec-ideals.html",
  "type": "Section",
  "number": "8.1",
  "title": "Ideals",
  "body": "Ideals  Ideal or No Deal    It is a useless life that is not consecrated to a great ideal. It is like a stone wasted on the field without becoming a part of any edifice.   Jose Rizal   Ideal   For a ring , an ideal (or a two sided ideal ) of is a non empty subset such that    is a subgroup of and    for all and , we have and . This is often called absorption  Personally I think it would be splendid if we could rename ideals sponges to match this imagery. . absorption    For a ring , a proper ideal is an ideal such that . ideal  proper ideal     Ideals    In any ring , and itself are ideals.  The ideals of are .  The sets and are a right ideal and a left ideal of respectively. Neither are two-sided ideals.  The set of all nilpotent elements in a ring is an ideal.   Let be a commutative ring, and set . Then is an ideal in .      A fun fact about ideals is that they are subrings.  Ideals are Subrings   Any ideal of a ring is a subring of     The converse need not be true, however.  Subrings Need not be Ideals  Find, with justification, a subring which is not an ideal.   In , the set of polynomials for which every term has even degree is a subring (it's closed under subtraction and multiplication), but it is not an ideal because it is not closed under multiplication by arbitrary polynomials. Indeed, , but .   Another fun fact is that we can combine ideals in all sorts of ways to get new ones!  Combinations of Ideals   Let be a ring and let be ideals of . Then    is an ideal     is an ideal     is an ideal and .     The intersection of any collection of ideals of is an ideal.   The set of all ideals of a ring forms a lattice with respect to the partial order given by containment. In this lattice, the supremum of a pair of ideals is and the infimum is .    Union of Ideals Need not be an Ideal Give an example  Modular Law Let be ideals in such that or . Then   And here are some important properties to wrap up on.  Proper Ideals, Fields, and Units   An ideal of a unital ring is proper if and only if contains no units. Moreover, if is a field it has only two ideals and .    Homomorphisms and Ideals   If is a ring homomorphism, then   the image of is a subring of and    the kernel of is an ideal of .     is injective if and only if .    if is an ideal of then is an ideal of .    if is an ideal of then is an ideal of .         Since is a ring homomorphism, it is in particular a group homomorphism . We know the kernel of a group homomorphism is a subgroup, so . All that remains to be shown is that for any  and . Let ; then and , show .       Generated Ideals    If you make yourself more than just a man, if you devote yourself to an ideal, you become something else entirely.   Liam Neeson, Batman Begins   Generated Ideals   If is any subset of a ring , the ideal generated by  , denoted , is the intersection of all ideals of that contain : An ideal is finitely generated if for some finite subset of . generated ideal  finitely generated (ideal)      It is common for to be written as ; this is often taken as the standard notation. We will not do so here to maintain notational consistency and to avoid confusion.    By , is an ideal. It is also the smallest ideal of that contains .   Elements in Generated Ideals   For a subset of a ring with , the ideal generated by is given by If is commutative and is any subset, then there is a simpler formula     Generated Ideals and    In the commutative ring , we have . Indeed any element can be written as . Note that .    In the commutative ring , we have , the set of all even integers. Notice this shows that different sets can generate the same ideal. Also note that .     Finitely Generated Ideals and Nilpotent Elements Let be a finitely generated ideal of . Suppose every element of is nilpotent. Prove that there exists an integer such that for all .  Infinitely Generated Ideal Let    Prove that is an ideal of .    Prove that is not finitely generated.      "
},
{
  "id": "def-ideal",
  "level": "2",
  "url": "sec-ideals.html#def-ideal",
  "type": "Definition",
  "number": "8.1",
  "title": "Ideal.",
  "body": "Ideal   For a ring , an ideal (or a two sided ideal ) of is a non empty subset such that    is a subgroup of and    for all and , we have and . This is often called absorption  Personally I think it would be splendid if we could rename ideals sponges to match this imagery. . absorption    For a ring , a proper ideal is an ideal such that . ideal  proper ideal    "
},
{
  "id": "ex-ideal-examples",
  "level": "2",
  "url": "sec-ideals.html#ex-ideal-examples",
  "type": "Example",
  "number": "8.2",
  "title": "Ideals.",
  "body": "Ideals    In any ring , and itself are ideals.  The ideals of are .  The sets and are a right ideal and a left ideal of respectively. Neither are two-sided ideals.  The set of all nilpotent elements in a ring is an ideal.   Let be a commutative ring, and set . Then is an ideal in .     "
},
{
  "id": "prop-ideals-are-subrings",
  "level": "2",
  "url": "sec-ideals.html#prop-ideals-are-subrings",
  "type": "Proposition",
  "number": "8.3",
  "title": "Ideals are Subrings.",
  "body": "Ideals are Subrings   Any ideal of a ring is a subring of    "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "sec-ideals.html#exercise-67",
  "type": "Exercise",
  "number": "8.4",
  "title": "Subrings Need not be Ideals.",
  "body": "Subrings Need not be Ideals  Find, with justification, a subring which is not an ideal.   In , the set of polynomials for which every term has even degree is a subring (it's closed under subtraction and multiplication), but it is not an ideal because it is not closed under multiplication by arbitrary polynomials. Indeed, , but .  "
},
{
  "id": "thm-properties-of-ideals",
  "level": "2",
  "url": "sec-ideals.html#thm-properties-of-ideals",
  "type": "Theorem",
  "number": "8.5",
  "title": "Combinations of Ideals.",
  "body": "Combinations of Ideals   Let be a ring and let be ideals of . Then    is an ideal     is an ideal     is an ideal and .     The intersection of any collection of ideals of is an ideal.   The set of all ideals of a ring forms a lattice with respect to the partial order given by containment. In this lattice, the supremum of a pair of ideals is and the infimum is .   "
},
{
  "id": "exe-the-union-of-ideals-need-not-be-an-ideal",
  "level": "2",
  "url": "sec-ideals.html#exe-the-union-of-ideals-need-not-be-an-ideal",
  "type": "Exercise",
  "number": "8.6",
  "title": "Union of Ideals Need not be an Ideal.",
  "body": "Union of Ideals Need not be an Ideal Give an example "
},
{
  "id": "exe-modular-law",
  "level": "2",
  "url": "sec-ideals.html#exe-modular-law",
  "type": "Exercise",
  "number": "8.7",
  "title": "Modular Law.",
  "body": "Modular Law Let be ideals in such that or . Then  "
},
{
  "id": "prop-proper-ideals",
  "level": "2",
  "url": "sec-ideals.html#prop-proper-ideals",
  "type": "Proposition",
  "number": "8.8",
  "title": "Proper Ideals, Fields, and Units.",
  "body": "Proper Ideals, Fields, and Units   An ideal of a unital ring is proper if and only if contains no units. Moreover, if is a field it has only two ideals and .   "
},
{
  "id": "thm-homomorphisms-and-ideals",
  "level": "2",
  "url": "sec-ideals.html#thm-homomorphisms-and-ideals",
  "type": "Theorem",
  "number": "8.9",
  "title": "Homomorphisms and Ideals.",
  "body": "Homomorphisms and Ideals   If is a ring homomorphism, then   the image of is a subring of and    the kernel of is an ideal of .     is injective if and only if .    if is an ideal of then is an ideal of .    if is an ideal of then is an ideal of .         Since is a ring homomorphism, it is in particular a group homomorphism . We know the kernel of a group homomorphism is a subgroup, so . All that remains to be shown is that for any  and . Let ; then and , show .     "
},
{
  "id": "def-generated-ideal",
  "level": "2",
  "url": "sec-ideals.html#def-generated-ideal",
  "type": "Definition",
  "number": "8.10",
  "title": "Generated Ideals.",
  "body": "Generated Ideals   If is any subset of a ring , the ideal generated by  , denoted , is the intersection of all ideals of that contain : An ideal is finitely generated if for some finite subset of . generated ideal  finitely generated (ideal)    "
},
{
  "id": "remark-38",
  "level": "2",
  "url": "sec-ideals.html#remark-38",
  "type": "Remark",
  "number": "8.11",
  "title": "",
  "body": " By , is an ideal. It is also the smallest ideal of that contains .  "
},
{
  "id": "lem-formula-for-generated-ideal",
  "level": "2",
  "url": "sec-ideals.html#lem-formula-for-generated-ideal",
  "type": "Lemma",
  "number": "8.12",
  "title": "Elements in Generated Ideals.",
  "body": "Elements in Generated Ideals   For a subset of a ring with , the ideal generated by is given by If is commutative and is any subset, then there is a simpler formula    "
},
{
  "id": "exe-generated-ideals-and-z",
  "level": "2",
  "url": "sec-ideals.html#exe-generated-ideals-and-z",
  "type": "Exercise",
  "number": "8.13",
  "title": "Generated Ideals and <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Generated Ideals and    In the commutative ring , we have . Indeed any element can be written as . Note that .    In the commutative ring , we have , the set of all even integers. Notice this shows that different sets can generate the same ideal. Also note that .    "
},
{
  "id": "exe-finite-generated-ideal-and-nilpotent",
  "level": "2",
  "url": "sec-ideals.html#exe-finite-generated-ideal-and-nilpotent",
  "type": "Exercise",
  "number": "8.14",
  "title": "Finitely Generated Ideals and Nilpotent Elements.",
  "body": "Finitely Generated Ideals and Nilpotent Elements Let be a finitely generated ideal of . Suppose every element of is nilpotent. Prove that there exists an integer such that for all . "
},
{
  "id": "exercise-72",
  "level": "2",
  "url": "sec-ideals.html#exercise-72",
  "type": "Exercise",
  "number": "8.15",
  "title": "Infinitely Generated Ideal.",
  "body": "Infinitely Generated Ideal Let    Prove that is an ideal of .    Prove that is not finitely generated.    "
},
{
  "id": "sec-ring-quotients",
  "level": "1",
  "url": "sec-ring-quotients.html",
  "type": "Section",
  "number": "8.2",
  "title": "Quotient Rings",
  "body": "Quotient Rings  Quotient Rings    Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it.   Alan Perlis   Additive Cosets form Abelian Group   For a two-sided ideal of , the set of additive cosets modulo is This is an abelian group with respect to addition given by .    Quotient Ring   For a two-sided ideal of The quotient ring of modulo is the set with addition defined as above and multiplication given by . quotient ring     Quotient Rings are Rings Given a two-sided ideal of , prove that the quotient ring is indeed a ring.  Just like we had with groups, it turns out our dear friend has been a quotient all along.  Quotients of  If is an ideal in the ring , then the quotient ring is the familiar ring .    This is where the common notation comes from, even though it should be anyway.   And, once again, we have a quotient map that turns out to be a homomorphism.  Quotient Map is Surjective Ring Map Prove that the canonical quotient map is a surjective ring homomorphism.  Last but certainly not least, we have an analogue of for ideals. Once again, I would like to suggest that ideal subgroup is a far better name for a normal subgroup.   Ideal iff Kernel of Ring Map   Let be a ring. A subset of is an ideal of if and only if there exists a ring homomorphism such that .     The Ring Isomorphism Theorems    I'm not a very structured person, so when I get some structure, it's cool; it's good for me.  J. Cole   We arrive at the isomorphism theorems for rings. We've seen most of this stuff before in different packaging, so lets jump right in.  UMP for Quotient Rings  UMP for quotient rings   If is a ring homomorphism and is an ideal such that , there exists a well defined ring homomorphism such that . Furthermore, if is surjective then is surjective and if then is injective.    Ignoring for a minute, we know that there is a unique homomorphism of abelian groups from to such that . It remains only to check that preserves multiplication: Given elements , their product is , and we have since preserves multiplication.    First Isomorphism Theorem for Rings  first isomorphism theorem for rings   If is a ring homomorphism, then via the map given by .    The map is a well-defined ring homomorphism by . By the for groups, the map is bijective, finishing the proof.    Second Isomorphism Theorem for Rings  second isomorphism theorem for rings   Let be a subring and let be an ideal of . Then is a subring of , is an ideal of , and     Third Isomorphism Theorem for Rings  third isomorphism theorem for rings   If is a ring and are two ideals of , then is an ideal of and     Lattice Isomorphism Theorem for Rings  lattice isomorphism theorem for rings   Suppose is a ring and is a two-sided ideal of and write for the quotient ring homomorphism. There is a bijection with inverse Moreover this bijection induces a bijection between since is an ideal of containing if and only if is an ideal of .     "
},
{
  "id": "lem-cosets-abelian",
  "level": "2",
  "url": "sec-ring-quotients.html#lem-cosets-abelian",
  "type": "Lemma",
  "number": "8.16",
  "title": "Additive Cosets form Abelian Group.",
  "body": "Additive Cosets form Abelian Group   For a two-sided ideal of , the set of additive cosets modulo is This is an abelian group with respect to addition given by .   "
},
{
  "id": "def-quotient-ring",
  "level": "2",
  "url": "sec-ring-quotients.html#def-quotient-ring",
  "type": "Definition",
  "number": "8.17",
  "title": "Quotient Ring.",
  "body": "Quotient Ring   For a two-sided ideal of The quotient ring of modulo is the set with addition defined as above and multiplication given by . quotient ring    "
},
{
  "id": "exe-quotient-ring-is-ring",
  "level": "2",
  "url": "sec-ring-quotients.html#exe-quotient-ring-is-ring",
  "type": "Exercise",
  "number": "8.18",
  "title": "Quotient Rings are Rings.",
  "body": "Quotient Rings are Rings Given a two-sided ideal of , prove that the quotient ring is indeed a ring. "
},
{
  "id": "ex-quotient-of-z",
  "level": "2",
  "url": "sec-ring-quotients.html#ex-quotient-of-z",
  "type": "Example",
  "number": "8.19",
  "title": "Quotients of <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Quotients of  If is an ideal in the ring , then the quotient ring is the familiar ring .  "
},
{
  "id": "quotient-map-is-surjective-homomorphism",
  "level": "2",
  "url": "sec-ring-quotients.html#quotient-map-is-surjective-homomorphism",
  "type": "Exercise",
  "number": "8.20",
  "title": "Quotient Map is Surjective Ring Map.",
  "body": "Quotient Map is Surjective Ring Map Prove that the canonical quotient map is a surjective ring homomorphism. "
},
{
  "id": "thm-ideal-iff-kernel-of-ring-map",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ideal-iff-kernel-of-ring-map",
  "type": "Theorem",
  "number": "8.21",
  "title": "Ideal iff Kernel of Ring Map.",
  "body": "Ideal iff Kernel of Ring Map   Let be a ring. A subset of is an ideal of if and only if there exists a ring homomorphism such that .   "
},
{
  "id": "thm-ump-for-quotient-rings",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ump-for-quotient-rings",
  "type": "Theorem",
  "number": "8.22",
  "title": "UMP for Quotient Rings.",
  "body": "UMP for Quotient Rings  UMP for quotient rings   If is a ring homomorphism and is an ideal such that , there exists a well defined ring homomorphism such that . Furthermore, if is surjective then is surjective and if then is injective.    Ignoring for a minute, we know that there is a unique homomorphism of abelian groups from to such that . It remains only to check that preserves multiplication: Given elements , their product is , and we have since preserves multiplication.   "
},
{
  "id": "thm-ring-fit",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ring-fit",
  "type": "Theorem",
  "number": "8.23",
  "title": "First Isomorphism Theorem for Rings.",
  "body": "First Isomorphism Theorem for Rings  first isomorphism theorem for rings   If is a ring homomorphism, then via the map given by .    The map is a well-defined ring homomorphism by . By the for groups, the map is bijective, finishing the proof.   "
},
{
  "id": "thm-ring-sit",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ring-sit",
  "type": "Theorem",
  "number": "8.24",
  "title": "Second Isomorphism Theorem for Rings.",
  "body": "Second Isomorphism Theorem for Rings  second isomorphism theorem for rings   Let be a subring and let be an ideal of . Then is a subring of , is an ideal of , and    "
},
{
  "id": "thm-ring-tit",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ring-tit",
  "type": "Theorem",
  "number": "8.25",
  "title": "Third Isomorphism Theorem for Rings.",
  "body": "Third Isomorphism Theorem for Rings  third isomorphism theorem for rings   If is a ring and are two ideals of , then is an ideal of and    "
},
{
  "id": "thm-ring-lit",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ring-lit",
  "type": "Theorem",
  "number": "8.26",
  "title": "Lattice Isomorphism Theorem for Rings.",
  "body": "Lattice Isomorphism Theorem for Rings  lattice isomorphism theorem for rings   Suppose is a ring and is a two-sided ideal of and write for the quotient ring homomorphism. There is a bijection with inverse Moreover this bijection induces a bijection between since is an ideal of containing if and only if is an ideal of .   "
},
{
  "id": "sec-primemax-ideals",
  "level": "1",
  "url": "sec-primemax-ideals.html",
  "type": "Section",
  "number": "8.3",
  "title": "Prime and Maximal Ideals",
  "body": "Prime and Maximal Ideals  Prime Ideals    I have as much chance of becoming Prime Minister as of being decapitated by a frisbee or of finding Elvis.   Boris Johnson, former Prime Minister   Prime Ideal   A prime ideal of a commutative ring is a proper ideal such that whenever for , we have or . prime ideal      We often refer to prime ideals as just primes , this will become gently confusing later and we will avoid doing so when possible.   Examples of Prime Ideals    In , the prime ideals are and the ideals generated by prime integers , where is a prime integer. The maximal ideals are the ideals generated by prime integers. In particular is prime but not maximal.  In the ideal is not prime, because , but and (because if then so , a contradiction).     Here is an equivalent characterization of prime ideals that will become very useful in a later course on commutative algebra.  Prime iff Complement is Closed   An ideal is prime if and only if is closed under multiplication.    And here is another equivalent characterization One might say it is an equivalent equivalent characterization... but we shant. that will become very useful instantly and will never really stop.  Prime iff Quotient is Domain   Let be a commutative ring with , and let be an ideal of . The ideal is prime if and only if is an integral domain.    Suppose is prime. If , then and hence either or , so that either or . This proves is a domain. Suppose is a domain and that . Then in and hence either or . It follows or , so that is prime.    Since we're on such a roll of equivalent characterizations, let's through in one more for good measure.  Equivalent Domain Characterization   Let be a nontrivial ring. Then is an integral domain if and only if the ideal is prime.    Prime ideals and homomorphisms? I thought you'd never ask.  Prime Ideals and Ring Maps      If is a domain, is a ring and is a ring homomorphism, then is a prime ideal.    If is a ring homomorphism and is a prime ideal in , then is prime in .        Maximal Ideals    It's just like, we know how to push ourselves to the max.   Young Dolph   Maximal Ideal   A maximal ideal of an arbitrary ring is a proper ideal such that the only ideals of containing are and . maximal ideal      It is not uncommon to denote maximal ideals with . We reserve this notation for when we dive into modules.   in In the ideal is maximal and prime, the ideals and are prime but not maximal.  And, matching up quite nicely with , we have one of the spicier meatballs of the chapter.  Maximal Ideal iff Quotient is a Field   Let be a commutative ring with , and let be an ideal of . The ideal is maximal if and only if is a field.    The first assertion follows immediately from the and the fact that is a field if and only if its only ideals are and .    Maximal Ideals are Prime   Every maximal ideal is prime.    If is maximal, then is a field, which in particular implies that is a domain, so is prime.    Unlike their prime counterparts, maximal ideals are not preserved by preimages in general.  Zorn's Lemma   Let be a non-empty family of sets. Suppose that for each chain in , the set is in . Then has a maximal element.    All Ideals Contained in Maximal Ideal   If is a ring with and is a proper ideal of , then there is a maximal ideal of containing . In particular every ring contains a maximal ideal.    Let be the set of proper ideals of that contain and view as a poset under containment. We will apply . Suppose is a totally ordered subset of . We need to show has an upper bound in . If is empty, is such a bound. Otherwise, let .  Since is non-empty, we have and so .  Given , then for some . Since is totally ordered, either or , and hence or . Either way, .  For and , we have for some and hence .  This proves is an ideal that contains . Since every is a proper ideal, , so and hence is a proper ideal, so . By , we conclude has at least one maximal element . This is a maximal ideal in the sense of definition since if is an ideal of and then either or, if is proper, then , which yields by using that is a maximal element of .  The existence of a maximal ideal follows by applying the first part of the theorem for .     "
},
{
  "id": "def-prime-ideal",
  "level": "2",
  "url": "sec-primemax-ideals.html#def-prime-ideal",
  "type": "Definition",
  "number": "8.27",
  "title": "Prime Ideal.",
  "body": "Prime Ideal   A prime ideal of a commutative ring is a proper ideal such that whenever for , we have or . prime ideal    "
},
{
  "id": "remark-39",
  "level": "2",
  "url": "sec-primemax-ideals.html#remark-39",
  "type": "Remark",
  "number": "8.28",
  "title": "",
  "body": " We often refer to prime ideals as just primes , this will become gently confusing later and we will avoid doing so when possible.  "
},
{
  "id": "ex-prime-ideals",
  "level": "2",
  "url": "sec-primemax-ideals.html#ex-prime-ideals",
  "type": "Example",
  "number": "8.29",
  "title": "Examples of Prime Ideals.",
  "body": "Examples of Prime Ideals    In , the prime ideals are and the ideals generated by prime integers , where is a prime integer. The maximal ideals are the ideals generated by prime integers. In particular is prime but not maximal.  In the ideal is not prime, because , but and (because if then so , a contradiction).    "
},
{
  "id": "prop-prime-iff-complement-closed",
  "level": "2",
  "url": "sec-primemax-ideals.html#prop-prime-iff-complement-closed",
  "type": "Proposition",
  "number": "8.30",
  "title": "Prime iff Complement is Closed.",
  "body": "Prime iff Complement is Closed   An ideal is prime if and only if is closed under multiplication.   "
},
{
  "id": "thm-prime-iff-domain",
  "level": "2",
  "url": "sec-primemax-ideals.html#thm-prime-iff-domain",
  "type": "Theorem",
  "number": "8.31",
  "title": "Prime iff Quotient is Domain.",
  "body": "Prime iff Quotient is Domain   Let be a commutative ring with , and let be an ideal of . The ideal is prime if and only if is an integral domain.    Suppose is prime. If , then and hence either or , so that either or . This proves is a domain. Suppose is a domain and that . Then in and hence either or . It follows or , so that is prime.   "
},
{
  "id": "prop-equivalent-integral-domain-definition",
  "level": "2",
  "url": "sec-primemax-ideals.html#prop-equivalent-integral-domain-definition",
  "type": "Proposition",
  "number": "8.32",
  "title": "Equivalent Domain Characterization.",
  "body": "Equivalent Domain Characterization   Let be a nontrivial ring. Then is an integral domain if and only if the ideal is prime.   "
},
{
  "id": "thm-primes-and-maps",
  "level": "2",
  "url": "sec-primemax-ideals.html#thm-primes-and-maps",
  "type": "Theorem",
  "number": "8.33",
  "title": "Prime Ideals and Ring Maps.",
  "body": "Prime Ideals and Ring Maps      If is a domain, is a ring and is a ring homomorphism, then is a prime ideal.    If is a ring homomorphism and is a prime ideal in , then is prime in .      "
},
{
  "id": "def-maximal-ideal",
  "level": "2",
  "url": "sec-primemax-ideals.html#def-maximal-ideal",
  "type": "Definition",
  "number": "8.34",
  "title": "Maximal Ideal.",
  "body": "Maximal Ideal   A maximal ideal of an arbitrary ring is a proper ideal such that the only ideals of containing are and . maximal ideal    "
},
{
  "id": "exe-2x-prime-and-maximal-in-zx",
  "level": "2",
  "url": "sec-primemax-ideals.html#exe-2x-prime-and-maximal-in-zx",
  "type": "Exercise",
  "number": "8.35",
  "title": "<span class=\"process-math\">\\(\\igen{2,x}\\)<\/span> in <span class=\"process-math\">\\(\\Z[x]\\)<\/span>.",
  "body": "in In the ideal is maximal and prime, the ideals and are prime but not maximal. "
},
{
  "id": "thm-maximal-iff-field",
  "level": "2",
  "url": "sec-primemax-ideals.html#thm-maximal-iff-field",
  "type": "Theorem",
  "number": "8.36",
  "title": "Maximal Ideal iff Quotient is a Field.",
  "body": "Maximal Ideal iff Quotient is a Field   Let be a commutative ring with , and let be an ideal of . The ideal is maximal if and only if is a field.    The first assertion follows immediately from the and the fact that is a field if and only if its only ideals are and .   "
},
{
  "id": "cor-maximal-prime",
  "level": "2",
  "url": "sec-primemax-ideals.html#cor-maximal-prime",
  "type": "Corollary",
  "number": "8.37",
  "title": "Maximal Ideals are Prime.",
  "body": "Maximal Ideals are Prime   Every maximal ideal is prime.    If is maximal, then is a field, which in particular implies that is a domain, so is prime.   "
},
{
  "id": "lem-zorn",
  "level": "2",
  "url": "sec-primemax-ideals.html#lem-zorn",
  "type": "Lemma",
  "number": "8.38",
  "title": "Zorn's Lemma.",
  "body": "Zorn's Lemma   Let be a non-empty family of sets. Suppose that for each chain in , the set is in . Then has a maximal element.   "
},
{
  "id": "thm-all-ideals-contained-in-maximal-ideal",
  "level": "2",
  "url": "sec-primemax-ideals.html#thm-all-ideals-contained-in-maximal-ideal",
  "type": "Theorem",
  "number": "8.39",
  "title": "All Ideals Contained in Maximal Ideal.",
  "body": "All Ideals Contained in Maximal Ideal   If is a ring with and is a proper ideal of , then there is a maximal ideal of containing . In particular every ring contains a maximal ideal.    Let be the set of proper ideals of that contain and view as a poset under containment. We will apply . Suppose is a totally ordered subset of . We need to show has an upper bound in . If is empty, is such a bound. Otherwise, let .  Since is non-empty, we have and so .  Given , then for some . Since is totally ordered, either or , and hence or . Either way, .  For and , we have for some and hence .  This proves is an ideal that contains . Since every is a proper ideal, , so and hence is a proper ideal, so . By , we conclude has at least one maximal element . This is a maximal ideal in the sense of definition since if is an ideal of and then either or, if is proper, then , which yields by using that is a maximal element of .  The existence of a maximal ideal follows by applying the first part of the theorem for .   "
},
{
  "id": "sec-eds",
  "level": "1",
  "url": "sec-eds.html",
  "type": "Section",
  "number": "9.1",
  "title": "Euclidean Domains",
  "body": "Euclidean Domains    Find your domain and serve it to the world.   Myles Munroe   Euclidean Domain   A Euclidean domain (ED) is a domain together with a norm function such that and the following property holds: for any two elements with , there are elements and of such that  Euclidean domain  norm function     In a Euclidean domain, division with remainder is possible, and the remainder is always smaller than the divisor. This property is similar to the for integers, which is what makes Euclidean domains so useful in number theory and algebra.  Lets take a look at some examples to deepen our understanding.  Trivial Norm  A \"degenerate example\" is a field equipped with the trivial norm for all . Given with , we have . Note that in this example there is no need to include in the description of the , since implies . This is not the case in other examples. Also observe that as we've defined remainders they are not unique. For example, in dividing by , both are considered valid. This calculation shows, more generally, that if is a unit, then for all there exists an equation with , not matter what norm is used. One could make remainders (and hence quotients) unique for by insisting that remainders always be non-negative, but this is not part of the abstract theory since it doesn't generalize to all cases well.   Polynomial Rings over Fields are Euclidean Domains  The next classical example is with a field and where we define the norm to be polynomial degree: if and . This ring is a Euclidean Domain because of the familiar long division for polynomials, as proved in .    Guassian Integers are a Euclidean Domain  The ring of Gaussian integers is a Euclidean domain with being the usual complex (Euclidean) square norm . Let ,  and let (here we use that the fraction field of is ). Now pick so that and . We have Set and set and notice that because and by closure. If we're good, and if then, using that the complex squared norm is multiplicative as well as the Pythagorean Theorem and the choice for , we have Thus the norm function makes into a Euclidean domain.   GCD   Given elements , not both , of a Euclidean domain with Euclidean norm , a of and is an element such that:    and ; and    If and , then .    gcd (Euclidean domain)      Note that is equivalent to .   "
},
{
  "id": "def-ed",
  "level": "2",
  "url": "sec-eds.html#def-ed",
  "type": "Definition",
  "number": "9.1",
  "title": "Euclidean Domain.",
  "body": "Euclidean Domain   A Euclidean domain (ED) is a domain together with a norm function such that and the following property holds: for any two elements with , there are elements and of such that  Euclidean domain  norm function    "
},
{
  "id": "ex-trivial-norm",
  "level": "2",
  "url": "sec-eds.html#ex-trivial-norm",
  "type": "Example",
  "number": "9.2",
  "title": "Trivial Norm.",
  "body": "Trivial Norm  A \"degenerate example\" is a field equipped with the trivial norm for all . Given with , we have . Note that in this example there is no need to include in the description of the , since implies . This is not the case in other examples. Also observe that as we've defined remainders they are not unique. For example, in dividing by , both are considered valid. This calculation shows, more generally, that if is a unit, then for all there exists an equation with , not matter what norm is used. One could make remainders (and hence quotients) unique for by insisting that remainders always be non-negative, but this is not part of the abstract theory since it doesn't generalize to all cases well.  "
},
{
  "id": "ex-degree-and-norm",
  "level": "2",
  "url": "sec-eds.html#ex-degree-and-norm",
  "type": "Example",
  "number": "9.3",
  "title": "Polynomial Rings over Fields are Euclidean Domains.",
  "body": "Polynomial Rings over Fields are Euclidean Domains  The next classical example is with a field and where we define the norm to be polynomial degree: if and . This ring is a Euclidean Domain because of the familiar long division for polynomials, as proved in .  "
},
{
  "id": "ex-gaussian-integers-are-an-ed",
  "level": "2",
  "url": "sec-eds.html#ex-gaussian-integers-are-an-ed",
  "type": "Example",
  "number": "9.4",
  "title": "Guassian Integers are a Euclidean Domain.",
  "body": " Guassian Integers are a Euclidean Domain  The ring of Gaussian integers is a Euclidean domain with being the usual complex (Euclidean) square norm . Let ,  and let (here we use that the fraction field of is ). Now pick so that and . We have Set and set and notice that because and by closure. If we're good, and if then, using that the complex squared norm is multiplicative as well as the Pythagorean Theorem and the choice for , we have Thus the norm function makes into a Euclidean domain.  "
},
{
  "id": "def-ed-gcd",
  "level": "2",
  "url": "sec-eds.html#def-ed-gcd",
  "type": "Definition",
  "number": "9.5",
  "title": "GCD.",
  "body": "GCD   Given elements , not both , of a Euclidean domain with Euclidean norm , a of and is an element such that:    and ; and    If and , then .    gcd (Euclidean domain)    "
},
{
  "id": "remark-40",
  "level": "2",
  "url": "sec-eds.html#remark-40",
  "type": "Remark",
  "number": "9.6",
  "title": "",
  "body": " Note that is equivalent to .  "
},
{
  "id": "sec-pids",
  "level": "1",
  "url": "sec-pids.html",
  "type": "Section",
  "number": "9.2",
  "title": "Principal Ideal Domains",
  "body": "Principal Ideal Domains    One chance is all you need.   Jesse Owens   Principal Ideal   Let be an ideal of a ring . The ideal is principal if for some , that is, is generated by a set with a single element. principal ideal     Principal Ideals in Let be ideals in . Then         Conclude that if and only if and are relatively prime.    Examples of Principal Ideals    Every ideal of is principal with for some  This means is a PID, something that will be defined in   For any field , every ideal of is principal.  For any field , every ideal in is finitely generated, but not necessarily principal. This is a consequence of a deep theorem called the Hilbert Basis Theorem, which you will see in Math 905.     PID   A ring is called a principal ideal domain (PID) if it is a domain with the property that every ideal is principal, i.e., for each ideal , we have for some . PID  principal ideal domain     Polynomial Rings over Fields are PIDs For any field , every ideal of is principal ( is a PID)  Euclidean Domains are PIDs   If is a Euclidean domain, then is a PID.    Let be the norm function making into a Euclidean domain. Pick an ideal . If is the zero ideal, . Otherwise pick a non-zero element of with as small as possible. (Such a exists by the well-ordering of .) I claim . It is clear that . Pick . Then and either or . But note that , and we cannot have both and by our choice of . So it must be that , and hence .    The converse is not true in general.  PIDs Need not be Euclidean Domains  The ring is a PID, but not a Euclidean domain. It is the simplest example of such a ring, but the proofs of these claims are not easy. I will not cover a proof of this fact.   Nonzero Primes are Maximal in PIDs   If is a PID, then every nonzero prime ideal is maximal.    Associate   Let be a domain. Two elements are associates if there is a unit of such that . associate     Associates and Principal Ideals   Two elements of a domain are associates if and only if .    If then and so for some . Similarly and hence . Since is a domain, either or . If , then and otherwise is a unit.  If for a unit , then and so and , from which is follows that and .    GCDs and Units in PIDs   If is a PID and , then    for some and any such is a gcd of and .    the gcd of and is unique up to multiplication by a unit.       The existence of is granted by definition in a PID. Now gives that and . If and we have that , so by minimality. This gives , hence .     If is not only a PID but a Euclidean domain with norm function , then the Euclidean algorithm can be used to compute a gcd of any two nonzero .   Prime   Suppose is a domain. An element is a prime element if and the ideal is a prime ideal. prime element     Irreducible   Suppose is a domain. An element is irreducible if , is not a unit, and whenever with then either or is a unit. irreducible element     Examples of Primes and Irreducibles    the prime elements of are the prime integers and their negatives; they are also irreducible  any element with a prime integer is irreducible e.g. is irreducible  the element is not irreducible in   the polynomial is irreducible; indeed if it factors nontrivially, it must factor as a product of two linear polynomials: . Then is a root for . But neither nor are roots for this polynomial, a contradiction.     In , Prime but not Irreducible  In the domain the element is irreducible but not prime.   Note that and thus . However we claim that neither nor are in . If then for some and so , a contradiction. Thus is not prime.    In the ring the element is irreducible but not prime.   Since this ring is a domain. The element is irreducible for degree reasons. The ideal contains but doesn't contain so is not prime.   Irreducible is Prime in PID   Let be a domain and let .   If is a prime element, then is irreducible.    If is a PID and is irreducible, then is a prime element.       Suppose is an integral domain and that is prime. Then and is not a unit. Suppose . Then and hence by definition either or . If , we have for some and so . Since , , and is an integral domain, we must have , showing that is a unit.  Assume is a PID and that is irreducible. Since is not a unit, is a proper ideal and hence is contained in a maximal ideal by We show and hence is prime. Since is a PID, for some . So for some . But is irreducible and is not a unit, which forces to be a unit and hence .    Factorizations and Permutations   Assume is a PID is non zero and not a unit and are two different irreducible factorization of . Then and there is a permutation such that, for all , we have and are associates.    Without loss of generality, assume . We induct on .  If then as well since and would yield , a contradiction. If we have and there is nothing more to prove.  Assume and that irreducible factorizations with factors are unique up to reordering factors and taking associates.  Since is a PID, irreducible elements are prime by . Since we have that and since is a prime ideal it follows that for some . Upon reordering, we may as well assume . Thus for some . Since is irreducible and is not a unit, must be a unit. We get and hence, since is an integral domain, we may divide by to obtain Notice that is a prime ideal so is irreducible by .  By the inductive hypothesis we deduce that hence and also that are associates to in some order. This together with associate to establishes the claim.    "
},
{
  "id": "def-principal-ideal",
  "level": "2",
  "url": "sec-pids.html#def-principal-ideal",
  "type": "Definition",
  "number": "9.7",
  "title": "Principal Ideal.",
  "body": "Principal Ideal   Let be an ideal of a ring . The ideal is principal if for some , that is, is generated by a set with a single element. principal ideal    "
},
{
  "id": "exe-properties-of-principal-ideals-in-z",
  "level": "2",
  "url": "sec-pids.html#exe-properties-of-principal-ideals-in-z",
  "type": "Exercise",
  "number": "9.8",
  "title": "Principal Ideals in <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Principal Ideals in Let be ideals in . Then         Conclude that if and only if and are relatively prime.   "
},
{
  "id": "ex-principal-ideals",
  "level": "2",
  "url": "sec-pids.html#ex-principal-ideals",
  "type": "Example",
  "number": "9.9",
  "title": "Examples of Principal Ideals.",
  "body": "Examples of Principal Ideals    Every ideal of is principal with for some  This means is a PID, something that will be defined in   For any field , every ideal of is principal.  For any field , every ideal in is finitely generated, but not necessarily principal. This is a consequence of a deep theorem called the Hilbert Basis Theorem, which you will see in Math 905.    "
},
{
  "id": "def-pid",
  "level": "2",
  "url": "sec-pids.html#def-pid",
  "type": "Definition",
  "number": "9.10",
  "title": "PID.",
  "body": "PID   A ring is called a principal ideal domain (PID) if it is a domain with the property that every ideal is principal, i.e., for each ideal , we have for some . PID  principal ideal domain    "
},
{
  "id": "exe-fx-is-a-pid",
  "level": "2",
  "url": "sec-pids.html#exe-fx-is-a-pid",
  "type": "Exercise",
  "number": "9.11",
  "title": "Polynomial Rings over Fields are PIDs.",
  "body": "Polynomial Rings over Fields are PIDs For any field , every ideal of is principal ( is a PID) "
},
{
  "id": "thm-ed-is-a-pid",
  "level": "2",
  "url": "sec-pids.html#thm-ed-is-a-pid",
  "type": "Theorem",
  "number": "9.12",
  "title": "Euclidean Domains are PIDs.",
  "body": "Euclidean Domains are PIDs   If is a Euclidean domain, then is a PID.    Let be the norm function making into a Euclidean domain. Pick an ideal . If is the zero ideal, . Otherwise pick a non-zero element of with as small as possible. (Such a exists by the well-ordering of .) I claim . It is clear that . Pick . Then and either or . But note that , and we cannot have both and by our choice of . So it must be that , and hence .   "
},
{
  "id": "ex-pid-not-ed",
  "level": "2",
  "url": "sec-pids.html#ex-pid-not-ed",
  "type": "Example",
  "number": "9.13",
  "title": "PIDs Need not be Euclidean Domains.",
  "body": "PIDs Need not be Euclidean Domains  The ring is a PID, but not a Euclidean domain. It is the simplest example of such a ring, but the proofs of these claims are not easy. I will not cover a proof of this fact.  "
},
{
  "id": "exe-nonzero-primes-maximal-in-pid",
  "level": "2",
  "url": "sec-pids.html#exe-nonzero-primes-maximal-in-pid",
  "type": "Proposition",
  "number": "9.14",
  "title": "Nonzero Primes are Maximal in PIDs.",
  "body": "Nonzero Primes are Maximal in PIDs   If is a PID, then every nonzero prime ideal is maximal.   "
},
{
  "id": "def-associate",
  "level": "2",
  "url": "sec-pids.html#def-associate",
  "type": "Definition",
  "number": "9.15",
  "title": "Associate.",
  "body": "Associate   Let be a domain. Two elements are associates if there is a unit of such that . associate    "
},
{
  "id": "lem-associates-and-principal-ideals",
  "level": "2",
  "url": "sec-pids.html#lem-associates-and-principal-ideals",
  "type": "Lemma",
  "number": "9.16",
  "title": "Associates and Principal Ideals.",
  "body": "Associates and Principal Ideals   Two elements of a domain are associates if and only if .    If then and so for some . Similarly and hence . Since is a domain, either or . If , then and otherwise is a unit.  If for a unit , then and so and , from which is follows that and .   "
},
{
  "id": "prop-gcds-and-units-in-pids",
  "level": "2",
  "url": "sec-pids.html#prop-gcds-and-units-in-pids",
  "type": "Proposition",
  "number": "9.17",
  "title": "GCDs and Units in PIDs.",
  "body": "GCDs and Units in PIDs   If is a PID and , then    for some and any such is a gcd of and .    the gcd of and is unique up to multiplication by a unit.       The existence of is granted by definition in a PID. Now gives that and . If and we have that , so by minimality. This gives , hence .   "
},
{
  "id": "remark-41",
  "level": "2",
  "url": "sec-pids.html#remark-41",
  "type": "Remark",
  "number": "9.18",
  "title": "",
  "body": " If is not only a PID but a Euclidean domain with norm function , then the Euclidean algorithm can be used to compute a gcd of any two nonzero .  "
},
{
  "id": "def-prime-element",
  "level": "2",
  "url": "sec-pids.html#def-prime-element",
  "type": "Definition",
  "number": "9.19",
  "title": "Prime.",
  "body": "Prime   Suppose is a domain. An element is a prime element if and the ideal is a prime ideal. prime element    "
},
{
  "id": "def-irreducible",
  "level": "2",
  "url": "sec-pids.html#def-irreducible",
  "type": "Definition",
  "number": "9.20",
  "title": "Irreducible.",
  "body": "Irreducible   Suppose is a domain. An element is irreducible if , is not a unit, and whenever with then either or is a unit. irreducible element    "
},
{
  "id": "ex-prime-and-irreducible-elements",
  "level": "2",
  "url": "sec-pids.html#ex-prime-and-irreducible-elements",
  "type": "Example",
  "number": "9.21",
  "title": "Examples of Primes and Irreducibles.",
  "body": "Examples of Primes and Irreducibles    the prime elements of are the prime integers and their negatives; they are also irreducible  any element with a prime integer is irreducible e.g. is irreducible  the element is not irreducible in   the polynomial is irreducible; indeed if it factors nontrivially, it must factor as a product of two linear polynomials: . Then is a root for . But neither nor are roots for this polynomial, a contradiction.    "
},
{
  "id": "ex-in-zsqrt-5-2-irreducible-but-not-prime",
  "level": "2",
  "url": "sec-pids.html#ex-in-zsqrt-5-2-irreducible-but-not-prime",
  "type": "Exercise",
  "number": "9.22",
  "title": "In <span class=\"process-math\">\\(\\Z[\\sqrt{-5}]\\text{,}\\)<\/span> <span class=\"process-math\">\\(2\\)<\/span> Prime but not Irreducible.",
  "body": "In , Prime but not Irreducible  In the domain the element is irreducible but not prime.   Note that and thus . However we claim that neither nor are in . If then for some and so , a contradiction. Thus is not prime.  "
},
{
  "id": "ex-cxyx2-y3-y-irreducible-but-not-prime",
  "level": "2",
  "url": "sec-pids.html#ex-cxyx2-y3-y-irreducible-but-not-prime",
  "type": "Exercise",
  "number": "9.23",
  "title": "",
  "body": " In the ring the element is irreducible but not prime.   Since this ring is a domain. The element is irreducible for degree reasons. The ideal contains but doesn't contain so is not prime.  "
},
{
  "id": "thm-irreducible-is-prime-in-pid",
  "level": "2",
  "url": "sec-pids.html#thm-irreducible-is-prime-in-pid",
  "type": "Theorem",
  "number": "9.24",
  "title": "Irreducible is Prime in PID.",
  "body": "Irreducible is Prime in PID   Let be a domain and let .   If is a prime element, then is irreducible.    If is a PID and is irreducible, then is a prime element.       Suppose is an integral domain and that is prime. Then and is not a unit. Suppose . Then and hence by definition either or . If , we have for some and so . Since , , and is an integral domain, we must have , showing that is a unit.  Assume is a PID and that is irreducible. Since is not a unit, is a proper ideal and hence is contained in a maximal ideal by We show and hence is prime. Since is a PID, for some . So for some . But is irreducible and is not a unit, which forces to be a unit and hence .   "
},
{
  "id": "thm-factorizations-permutations-and-associates",
  "level": "2",
  "url": "sec-pids.html#thm-factorizations-permutations-and-associates",
  "type": "Theorem",
  "number": "9.25",
  "title": "Factorizations and Permutations.",
  "body": "Factorizations and Permutations   Assume is a PID is non zero and not a unit and are two different irreducible factorization of . Then and there is a permutation such that, for all , we have and are associates.    Without loss of generality, assume . We induct on .  If then as well since and would yield , a contradiction. If we have and there is nothing more to prove.  Assume and that irreducible factorizations with factors are unique up to reordering factors and taking associates.  Since is a PID, irreducible elements are prime by . Since we have that and since is a prime ideal it follows that for some . Upon reordering, we may as well assume . Thus for some . Since is irreducible and is not a unit, must be a unit. We get and hence, since is an integral domain, we may divide by to obtain Notice that is a prime ideal so is irreducible by .  By the inductive hypothesis we deduce that hence and also that are associates to in some order. This together with associate to establishes the claim.   "
},
{
  "id": "subsec-ufds",
  "level": "1",
  "url": "subsec-ufds.html",
  "type": "Section",
  "number": "9.3",
  "title": "Unique Factorization Domains",
  "body": "Unique Factorization Domains    Always remember that you are absolutely unique. Just like everyone else.   Margaret Mead   UFD   A ring is called a unique factorization domain , or UFD for short, if is an integral domain and every element that is non-zero and not a unit can be written as a finite product of (not necessarily distinct) irreducible elements of in a way that is unique up to ordering and associates. That is, if also holds with each irreducible, then and there is a permutation such that, for all , we have and are associates. unique factorization domain  UFD     Examples of UFDs     is a UFD by the Fundamental Theorem of Arithmetic.   where is a field is a UFD. This is the case because is a Euclidean domain and Euclidean domains are UFD's (we'll prove this shortly).  We will eventually prove that if is a UFD then so is . It follows that is a UFD for all . Note that if , this ring is not a PID and hence not a Euclidean domain.     is a UFD  is not a PID hence also not a Euclidean domain. For example, this can be seen because the ideal is not a principal ideal. It is a UFD because is a UFD (based on the result that if is a UFD then so is which we will prove shortly).  PIDs are UFDs   If is a PID then is a UFD.    Polynomial Rings over UFDs are UFDs   If is a UFD then so is .    "
},
{
  "id": "def-ufd",
  "level": "2",
  "url": "subsec-ufds.html#def-ufd",
  "type": "Definition",
  "number": "9.26",
  "title": "UFD.",
  "body": "UFD   A ring is called a unique factorization domain , or UFD for short, if is an integral domain and every element that is non-zero and not a unit can be written as a finite product of (not necessarily distinct) irreducible elements of in a way that is unique up to ordering and associates. That is, if also holds with each irreducible, then and there is a permutation such that, for all , we have and are associates. unique factorization domain  UFD    "
},
{
  "id": "ex-ufd-exs",
  "level": "2",
  "url": "subsec-ufds.html#ex-ufd-exs",
  "type": "Example",
  "number": "9.27",
  "title": "Examples of UFDs.",
  "body": "Examples of UFDs     is a UFD by the Fundamental Theorem of Arithmetic.   where is a field is a UFD. This is the case because is a Euclidean domain and Euclidean domains are UFD's (we'll prove this shortly).  We will eventually prove that if is a UFD then so is . It follows that is a UFD for all . Note that if , this ring is not a PID and hence not a Euclidean domain.    "
},
{
  "id": "ex-zx-not-a-pid",
  "level": "2",
  "url": "subsec-ufds.html#ex-zx-not-a-pid",
  "type": "Exercise",
  "number": "9.28",
  "title": "<span class=\"process-math\">\\(\\Z[x]\\)<\/span> is a UFD.",
  "body": "is a UFD  is not a PID hence also not a Euclidean domain. For example, this can be seen because the ideal is not a principal ideal. It is a UFD because is a UFD (based on the result that if is a UFD then so is which we will prove shortly). "
},
{
  "id": "thm-pid-implies-ufd",
  "level": "2",
  "url": "subsec-ufds.html#thm-pid-implies-ufd",
  "type": "Theorem",
  "number": "9.29",
  "title": "PIDs are UFDs.",
  "body": "PIDs are UFDs   If is a PID then is a UFD.   "
},
{
  "id": "thm-polynomials-over-ufd-ufd",
  "level": "2",
  "url": "subsec-ufds.html#thm-polynomials-over-ufd-ufd",
  "type": "Theorem",
  "number": "9.30",
  "title": "Polynomial Rings over UFDs are UFDs.",
  "body": "Polynomial Rings over UFDs are UFDs   If is a UFD then so is .   "
},
{
  "id": "subsec-noeth",
  "level": "1",
  "url": "subsec-noeth.html",
  "type": "Section",
  "number": "9.4",
  "title": "Noetherian Rings",
  "body": "Noetherian Rings    All good things must come to an end.   Geoffrey Chaucer   Most rings that commutative algebraists naturally want to study are noetherian. Noetherian rings are named after Emmy Noether, who is in many ways the mother of modern commutative algebra.  Ascending Chain Condition   A commutative ring has the ascending chain condition (on ideals) if given any chain of ideals in of the form there is an such that  ascending chain condition  ACC     Noetherian Ring   Suppose is a commutative ring. Then is called a noetherian ring if satisfies the ascending chain condition on ideals. noetherian ring      Unlike many modern sources, we choose not to capitalize noetherian . The convention of not capitalizing mathematical adjectives has a long history and is widely followed in mathematical literature. For example, other mathematical adjectives that are not capitalized include \"abelian\", \"euclidean\", and \"gaussian\"   PIDs are Noetherian   If is a PID then is noetherian.    Consider and ascending chain of ideals of ; it must have the form Consider which is an ideal of by the argument given in . Since is a PID, for some . Since , we must have for some . Then we see that for all , thus for and the chain stabilizes as desired.    Fields are Noetherian  Every field is noetherian.   Quotient Rings Noetherian in Noetherian Rings  Let be a commutative ring and an ideal of . Show that if is noetherian then is also noetherian.   Factorization in Noetherian Domains   If is a noetherian integral domain, then every non-zero, not-unit element factors into a finite product of irreducible elements.    Pick with and . If is irreducible, there is nothing to prove. Otherwise, we have for non-units . If both are irreducible, the proof is complete. Otherwise, one or both of them factors non-trivially. We may express this conveniently by saying that and such that either and are both non-units or and are both non-units. (E.g., if is irreducible, we could set .) Continuing in the this manner, we form a binary tree with at the top, one level down, one level below that, etc.  We halt the process of building the tree if at some stage all the leaves of the tree are irreducible elements, at which point we will have proven that factors in to a product of the irreducible elements given by these leaves.  We need to rule out the possibility that the process never terminates. If it never terminates, we will have built an infinite binary tree with the property that some route downward through the tree consists of an infinite list of irreducible elements such that for a non-unit and, for each , for a non-unit . Since is an integral domain, we have and for all . (E.g., if then and hence , so that , contrary to being a non-unit.)  But then we have arrived at an infinite ascending chain of ideals in , which is not possible in a Noetherian ring.     For those mathematicians who refute the Axiom of Choice (though they are few and far between), noetherian rings provide a haven of sorts within the world of algebra. This is because the existence of a maximal ideal is guarenteed in noetherian rings, given that every ascending chain of ideals stabilizes.   "
},
{
  "id": "def-ascending-chain-condition",
  "level": "2",
  "url": "subsec-noeth.html#def-ascending-chain-condition",
  "type": "Definition",
  "number": "9.31",
  "title": "Ascending Chain Condition.",
  "body": "Ascending Chain Condition   A commutative ring has the ascending chain condition (on ideals) if given any chain of ideals in of the form there is an such that  ascending chain condition  ACC    "
},
{
  "id": "def-noetherian-ring",
  "level": "2",
  "url": "subsec-noeth.html#def-noetherian-ring",
  "type": "Definition",
  "number": "9.32",
  "title": "Noetherian Ring.",
  "body": "Noetherian Ring   Suppose is a commutative ring. Then is called a noetherian ring if satisfies the ascending chain condition on ideals. noetherian ring    "
},
{
  "id": "lem-pids-are-noetherian",
  "level": "2",
  "url": "subsec-noeth.html#lem-pids-are-noetherian",
  "type": "Theorem",
  "number": "9.33",
  "title": "PIDs are Noetherian.",
  "body": "PIDs are Noetherian   If is a PID then is noetherian.    Consider and ascending chain of ideals of ; it must have the form Consider which is an ideal of by the argument given in . Since is a PID, for some . Since , we must have for some . Then we see that for all , thus for and the chain stabilizes as desired.   "
},
{
  "id": "cor-fields-are-noetherian",
  "level": "2",
  "url": "subsec-noeth.html#cor-fields-are-noetherian",
  "type": "Corollary",
  "number": "9.34",
  "title": "Fields are Noetherian.",
  "body": "Fields are Noetherian  Every field is noetherian.  "
},
{
  "id": "exe-noetherian-quotients",
  "level": "2",
  "url": "subsec-noeth.html#exe-noetherian-quotients",
  "type": "Exercise",
  "number": "9.35",
  "title": "Quotient Rings Noetherian in Noetherian Rings.",
  "body": "Quotient Rings Noetherian in Noetherian Rings  Let be a commutative ring and an ideal of . Show that if is noetherian then is also noetherian.  "
},
{
  "id": "lem-factorization-in-noetherian-domains",
  "level": "2",
  "url": "subsec-noeth.html#lem-factorization-in-noetherian-domains",
  "type": "Theorem",
  "number": "9.36",
  "title": "Factorization in Noetherian Domains.",
  "body": "Factorization in Noetherian Domains   If is a noetherian integral domain, then every non-zero, not-unit element factors into a finite product of irreducible elements.    Pick with and . If is irreducible, there is nothing to prove. Otherwise, we have for non-units . If both are irreducible, the proof is complete. Otherwise, one or both of them factors non-trivially. We may express this conveniently by saying that and such that either and are both non-units or and are both non-units. (E.g., if is irreducible, we could set .) Continuing in the this manner, we form a binary tree with at the top, one level down, one level below that, etc.  We halt the process of building the tree if at some stage all the leaves of the tree are irreducible elements, at which point we will have proven that factors in to a product of the irreducible elements given by these leaves.  We need to rule out the possibility that the process never terminates. If it never terminates, we will have built an infinite binary tree with the property that some route downward through the tree consists of an infinite list of irreducible elements such that for a non-unit and, for each , for a non-unit . Since is an integral domain, we have and for all . (E.g., if then and hence , so that , contrary to being a non-unit.)  But then we have arrived at an infinite ascending chain of ideals in , which is not possible in a Noetherian ring.   "
},
{
  "id": "remark-42",
  "level": "2",
  "url": "subsec-noeth.html#remark-42",
  "type": "Remark",
  "number": "9.37",
  "title": "",
  "body": " For those mathematicians who refute the Axiom of Choice (though they are few and far between), noetherian rings provide a haven of sorts within the world of algebra. This is because the existence of a maximal ideal is guarenteed in noetherian rings, given that every ascending chain of ideals stabilizes.  "
},
{
  "id": "sec-field-of-fractions",
  "level": "1",
  "url": "sec-field-of-fractions.html",
  "type": "Section",
  "number": "10.1",
  "title": "Fields of Fractions",
  "body": "Fields of Fractions    Food is a common denominator for all people.   Guy Fieri   Multiplicately Closed Set   Suppose is a commutative ring and is a subset such that    ,     is closed under multiplication (i.e., if , then ), and     does not contain nor any zerodivisors.     Such a subset is called a multiplicatively closed subset of non zerodivisors of . multiplicatively closed subset of non zerodivisors     Examples of Multaplicatively Closed Sets  Two types of multiplicatively closed sets are most commonly used in practice:   If is a field then is a multiplicatively closed set of non zerodivisors.    If is an arbitrary ring with and is a non zerodivisor then the set of non negative powers of , , is multiplicatively closed.      Field of Fractions   If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the field of fractions  is the set of equivalence classes where the equivalence relation is defined by   From now on we just write instead of when dealing with fractions.  Addition and multiplication on are given by  field of fractions  fraction field     Field of Fractions is a Field   If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the rules given in the above definition for and make into a field. Moreover, the function sending to is an injective ring homomorphism.    There is a lot of small things to check and we'll just do a few. Right off the bat we need to be sure the given equivalence relation really is one. The reflexive and symmetric properties are clear. But the proof of transitivity illustrates a key point: Say . Then and . We need to deduce that . The given equations imply and since is a nonzerodivisor we conclude . This is in fact the only time that the fact that consists of nonzerodivisors is used.  We also need to be sure our rules for and make sense and are independent of representation. They make sense since we assume is closed under . To show is independent of representations, say , so that . Then and and so we need to show . This is clear upon expaning out both sides and using . In a similar way one shows is well-defined.  From now on we just write instead of when dealing with fractions.  The associative and distributive axioms involve a straightfoward but tedious check, and we skip them entirely. The fact that and are commutative is clear from their definitions. The set is a group under addition since it has a element, namely , and , with the last equality holding since . The element is . (Note that we have used that a couple times here — indeed, without this assumption could be empty and then would be the empty set.)   being a domain means implies ( or ). The contrapositive to this statement is: if and then , which shows is a multiplicatively closed set of nonzerodivisors.  It remains only to show every non-zero element of is a unit. Given , note that and hence . So is also an element of . We have , where the last equation holds by the definition of .  The fact that is a ring homomorphism is straightforward to check. It's injective since implies .    Examples of Fields of Fractions     For a specific example, the field of fractions of is .    or another, if is a squarefree integer and is an integral domain and we will show soon that its field of fractions is (isomorphic to) the field .    For yet another, is an integral domain. Its field of fractions, usually denoted constists of all rational functions . This last example could be generalized by replacing with any field and also by using any number of variables.      "
},
{
  "id": "def-multiplicatively-closed",
  "level": "2",
  "url": "sec-field-of-fractions.html#def-multiplicatively-closed",
  "type": "Definition",
  "number": "10.1",
  "title": "Multiplicately Closed Set.",
  "body": "Multiplicately Closed Set   Suppose is a commutative ring and is a subset such that    ,     is closed under multiplication (i.e., if , then ), and     does not contain nor any zerodivisors.     Such a subset is called a multiplicatively closed subset of non zerodivisors of . multiplicatively closed subset of non zerodivisors    "
},
{
  "id": "example-67",
  "level": "2",
  "url": "sec-field-of-fractions.html#example-67",
  "type": "Example",
  "number": "10.2",
  "title": "Examples of Multaplicatively Closed Sets.",
  "body": "Examples of Multaplicatively Closed Sets  Two types of multiplicatively closed sets are most commonly used in practice:   If is a field then is a multiplicatively closed set of non zerodivisors.    If is an arbitrary ring with and is a non zerodivisor then the set of non negative powers of , , is multiplicatively closed.     "
},
{
  "id": "def-field-of-fractions",
  "level": "2",
  "url": "sec-field-of-fractions.html#def-field-of-fractions",
  "type": "Definition",
  "number": "10.3",
  "title": "Field of Fractions.",
  "body": "Field of Fractions   If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the field of fractions  is the set of equivalence classes where the equivalence relation is defined by   From now on we just write instead of when dealing with fractions.  Addition and multiplication on are given by  field of fractions  fraction field    "
},
{
  "id": "thm-field-of-fractions-is-field",
  "level": "2",
  "url": "sec-field-of-fractions.html#thm-field-of-fractions-is-field",
  "type": "Theorem",
  "number": "10.4",
  "title": "Field of Fractions is a Field.",
  "body": "Field of Fractions is a Field   If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the rules given in the above definition for and make into a field. Moreover, the function sending to is an injective ring homomorphism.    There is a lot of small things to check and we'll just do a few. Right off the bat we need to be sure the given equivalence relation really is one. The reflexive and symmetric properties are clear. But the proof of transitivity illustrates a key point: Say . Then and . We need to deduce that . The given equations imply and since is a nonzerodivisor we conclude . This is in fact the only time that the fact that consists of nonzerodivisors is used.  We also need to be sure our rules for and make sense and are independent of representation. They make sense since we assume is closed under . To show is independent of representations, say , so that . Then and and so we need to show . This is clear upon expaning out both sides and using . In a similar way one shows is well-defined.  From now on we just write instead of when dealing with fractions.  The associative and distributive axioms involve a straightfoward but tedious check, and we skip them entirely. The fact that and are commutative is clear from their definitions. The set is a group under addition since it has a element, namely , and , with the last equality holding since . The element is . (Note that we have used that a couple times here — indeed, without this assumption could be empty and then would be the empty set.)   being a domain means implies ( or ). The contrapositive to this statement is: if and then , which shows is a multiplicatively closed set of nonzerodivisors.  It remains only to show every non-zero element of is a unit. Given , note that and hence . So is also an element of . We have , where the last equation holds by the definition of .  The fact that is a ring homomorphism is straightforward to check. It's injective since implies .   "
},
{
  "id": "example-68",
  "level": "2",
  "url": "sec-field-of-fractions.html#example-68",
  "type": "Example",
  "number": "10.5",
  "title": "Examples of Fields of Fractions.",
  "body": "Examples of Fields of Fractions     For a specific example, the field of fractions of is .    or another, if is a squarefree integer and is an integral domain and we will show soon that its field of fractions is (isomorphic to) the field .    For yet another, is an integral domain. Its field of fractions, usually denoted constists of all rational functions . This last example could be generalized by replacing with any field and also by using any number of variables.     "
},
{
  "id": "sec-irrpoly",
  "level": "1",
  "url": "sec-irrpoly.html",
  "type": "Section",
  "number": "10.2",
  "title": "Irredicuble Polynomials",
  "body": "Irredicuble Polynomials    Eliminate all other factors, and the one which remains must be the truth.   Sir Arthur Conan Doyle     For an integral domain , a polynomial is called irreducible if is not a unit and whenever , either or is a unit. (It follows that such a also cannot be .) irreducible polynomial     In general, it can be very difficult to determine if a polynomial is irreducible. Here we cover some tricks that sometimes work. We will focus mostly on polynomials in .    Let be a field and .   If has degree one, it is irreducible.    If has a root and , then is not irreducible (since it factors as for some of degree at least ).    If , then is irreducible if and only if has no roots.    (Rational Root Test) If and all the coefficients of are integers and is a root of with , then divides and divides . More generally, the same holds with replaced by any PID and replaced by its field of fractions. rational root test         Never, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever try to use the converse of (2) or a version of (3) for polynomials of degree more than ; they are false.    Does have any roots? No. The only possible roots are and , and a careful check rules these out. Is irreducible? No, it factors as times      For a PID and , define the content of , written , to be the gcd of the coefficients of . Equivalently, is the generator of the principal ideal generated by the coefficients of . content     Gauss's Lemma: Part 1   Let where is a PID. Then (up to associates).    We first show the following special case: If and , then .  To see this, pick a prime and write for the result of modding out the coefficients of by . Then (since the map sending to is a ring map). Since , we have that and . Since is a domain, it follows that . This proves does not divide all of the coefficients of . Since was arbitrary, .  For the general case, let and where and . Note that and . By the case already proven, . It follows .    Gauss's Lemma: Part 2   Let be a PID and let be its field of fractions, and assume is a non-constant polynomial with coefficients in . is irreducible in if and only if it is irreducible in and .    Suppose with . We can find an element of such that . (We can take to be the product of all the denominators of the coefficients of , for example; this is called “clearing denominators''.) Similarly, there is an such that . Further, write where , , and and similarly where , , and . We have Using Gauss's Lemma, Part 1, we have and hence We also have (since we've already proven that ).  So and thus by dividing we arrive at But is irreducible in . It follows that either or must be a unit in (i.e., a unit in ) and it follows that either or is a unit in . This proves is irreducible in .  ( ) Say irreducible in and . If with then, since is irreducible in , one of or must be a constant. But since , this constant must be .     Let's prove is irreducible. By Gauss's Lemma, we just need to show it is irreducible in .  If did factor in as a product of monic polynomials, then would also factor in this way. Now . This has no roots (the only possibilities are or ) and so if it did factor it would have to factor as a product of two quadratic, irreducible polynomials. The only such polynomial in is (the others all have roots). But . This proves is irreducible in and hence must be irreducible in .   Eisenstein's Criterion  Eisenstein's criterion   Let be a PID with field of fractions and assume is a polynomial. Suppose there is a prime element such that , for all , and . Then is irreducible in .    We have with and . Since does not divide the leading coefficient of , we have . It therefore follows that the three assumptions involving the coefficients of are also satisfied by the coefficients . Moreover, is irreducible in if and only if is irreducible in . We may therefore assume without loss of generality that .  By Gauss's Lemma we just need to prove it is irreducible in . Suppose with , where and where and .  Upon modding out by we get The assumptions on give that with . Since is a domain, it follows that On the other hand, we also have and since , we have that or . So or . This can only occur if or .  We have shown that if factors in as , then at least one of of must be a constant polynomial. Since , this factor must be a unit. So is irreducible in .     For instance, is irreducible in thanks to applied with . (Note that it isn't irreducible in since it does not have unit content.)     For any prime , the -th cyclotomic polynomial  is irreducible in . cyclotomic polynomial     Consider the ring isomorphism given by . I claim that To see this, we note that and by the binomial theorem we have Since , the claim follows.  By , is irreducible in and, since is an isomorphism, it follows that is irreducible in .      Assume is an integral domain and is a monic polynomial with coefficients in . If there is a prime element such that is irreducible in , then is irreducible in .    We prove the contrapositive. Suppose is reducible in . Then we have for some monic, non-constant polynomials and in . It follows that holds in . But since and are monic, non-constant polynomials, and are both non-constant polynomials in and hence is reducible in .     The assumption that be monic in this Proposition is necessary. Consider for instance . Modding out by yields a linear polynomial in which is thus irreducible. But isn't irreducible in . (The Proposition can be generalized to non-monic polynomials by adding the assumption that does not divided the leading coefficient of .)     Let be a field and a finite subgroup of the multiplicative group . Prove that is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian every Sylow -subgroup of is normal, and thus there is only one of each. This means that can be written as a direct product of cyclic groups of relatively prime order; Hence is itself cyclic.      Let be a field and a finite subgroup of the multiplicative group . Then is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian every Sylow -subgroup of is normal, and thus there is only one of each. This means that can be written as a direct product of cyclic groups of relatively prime order; hence is itself cyclic.    "
},
{
  "id": "def-irreducible-polynomial",
  "level": "2",
  "url": "sec-irrpoly.html#def-irreducible-polynomial",
  "type": "Definition",
  "number": "10.6",
  "title": "",
  "body": "  For an integral domain , a polynomial is called irreducible if is not a unit and whenever , either or is a unit. (It follows that such a also cannot be .) irreducible polynomial    "
},
{
  "id": "thm-degree-and-irreducibility",
  "level": "2",
  "url": "sec-irrpoly.html#thm-degree-and-irreducibility",
  "type": "Theorem",
  "number": "10.7",
  "title": "",
  "body": "  Let be a field and .   If has degree one, it is irreducible.    If has a root and , then is not irreducible (since it factors as for some of degree at least ).    If , then is irreducible if and only if has no roots.    (Rational Root Test) If and all the coefficients of are integers and is a root of with , then divides and divides . More generally, the same holds with replaced by any PID and replaced by its field of fractions. rational root test       "
},
{
  "id": "remark-43",
  "level": "2",
  "url": "sec-irrpoly.html#remark-43",
  "type": "Remark",
  "number": "10.8",
  "title": "",
  "body": " Never, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever try to use the converse of (2) or a version of (3) for polynomials of degree more than ; they are false.  "
},
{
  "id": "ex-does-it-have-roots",
  "level": "2",
  "url": "sec-irrpoly.html#ex-does-it-have-roots",
  "type": "Example",
  "number": "10.9",
  "title": "",
  "body": " Does have any roots? No. The only possible roots are and , and a careful check rules these out. Is irreducible? No, it factors as times   "
},
{
  "id": "def-content",
  "level": "2",
  "url": "sec-irrpoly.html#def-content",
  "type": "Definition",
  "number": "10.10",
  "title": "",
  "body": "  For a PID and , define the content of , written , to be the gcd of the coefficients of . Equivalently, is the generator of the principal ideal generated by the coefficients of . content    "
},
{
  "id": "thm-gausss-lemma-part-1",
  "level": "2",
  "url": "sec-irrpoly.html#thm-gausss-lemma-part-1",
  "type": "Theorem",
  "number": "10.11",
  "title": "Gauss's Lemma: Part 1.",
  "body": "Gauss's Lemma: Part 1   Let where is a PID. Then (up to associates).    We first show the following special case: If and , then .  To see this, pick a prime and write for the result of modding out the coefficients of by . Then (since the map sending to is a ring map). Since , we have that and . Since is a domain, it follows that . This proves does not divide all of the coefficients of . Since was arbitrary, .  For the general case, let and where and . Note that and . By the case already proven, . It follows .   "
},
{
  "id": "thm-gausss-lemma-part-2",
  "level": "2",
  "url": "sec-irrpoly.html#thm-gausss-lemma-part-2",
  "type": "Theorem",
  "number": "10.12",
  "title": "Gauss's Lemma: Part 2.",
  "body": "Gauss's Lemma: Part 2   Let be a PID and let be its field of fractions, and assume is a non-constant polynomial with coefficients in . is irreducible in if and only if it is irreducible in and .    Suppose with . We can find an element of such that . (We can take to be the product of all the denominators of the coefficients of , for example; this is called “clearing denominators''.) Similarly, there is an such that . Further, write where , , and and similarly where , , and . We have Using Gauss's Lemma, Part 1, we have and hence We also have (since we've already proven that ).  So and thus by dividing we arrive at But is irreducible in . It follows that either or must be a unit in (i.e., a unit in ) and it follows that either or is a unit in . This proves is irreducible in .  ( ) Say irreducible in and . If with then, since is irreducible in , one of or must be a constant. But since , this constant must be .   "
},
{
  "id": "ex-irreducibility-and-gauss",
  "level": "2",
  "url": "sec-irrpoly.html#ex-irreducibility-and-gauss",
  "type": "Example",
  "number": "10.13",
  "title": "",
  "body": " Let's prove is irreducible. By Gauss's Lemma, we just need to show it is irreducible in .  If did factor in as a product of monic polynomials, then would also factor in this way. Now . This has no roots (the only possibilities are or ) and so if it did factor it would have to factor as a product of two quadratic, irreducible polynomials. The only such polynomial in is (the others all have roots). But . This proves is irreducible in and hence must be irreducible in .  "
},
{
  "id": "thm-eisensteins-criterion",
  "level": "2",
  "url": "sec-irrpoly.html#thm-eisensteins-criterion",
  "type": "Theorem",
  "number": "10.14",
  "title": "Eisenstein's Criterion.",
  "body": "Eisenstein's Criterion  Eisenstein's criterion   Let be a PID with field of fractions and assume is a polynomial. Suppose there is a prime element such that , for all , and . Then is irreducible in .    We have with and . Since does not divide the leading coefficient of , we have . It therefore follows that the three assumptions involving the coefficients of are also satisfied by the coefficients . Moreover, is irreducible in if and only if is irreducible in . We may therefore assume without loss of generality that .  By Gauss's Lemma we just need to prove it is irreducible in . Suppose with , where and where and .  Upon modding out by we get The assumptions on give that with . Since is a domain, it follows that On the other hand, we also have and since , we have that or . So or . This can only occur if or .  We have shown that if factors in as , then at least one of of must be a constant polynomial. Since , this factor must be a unit. So is irreducible in .   "
},
{
  "id": "ex-using-eisenstein",
  "level": "2",
  "url": "sec-irrpoly.html#ex-using-eisenstein",
  "type": "Example",
  "number": "10.15",
  "title": "",
  "body": " For instance, is irreducible in thanks to applied with . (Note that it isn't irreducible in since it does not have unit content.)  "
},
{
  "id": "prop-cyclotomic-polynomial-irreducible",
  "level": "2",
  "url": "sec-irrpoly.html#prop-cyclotomic-polynomial-irreducible",
  "type": "Proposition",
  "number": "10.16",
  "title": "",
  "body": "  For any prime , the -th cyclotomic polynomial  is irreducible in . cyclotomic polynomial     Consider the ring isomorphism given by . I claim that To see this, we note that and by the binomial theorem we have Since , the claim follows.  By , is irreducible in and, since is an isomorphism, it follows that is irreducible in .   "
},
{
  "id": "prop-primes-and-irreducibility",
  "level": "2",
  "url": "sec-irrpoly.html#prop-primes-and-irreducibility",
  "type": "Proposition",
  "number": "10.17",
  "title": "",
  "body": "  Assume is an integral domain and is a monic polynomial with coefficients in . If there is a prime element such that is irreducible in , then is irreducible in .    We prove the contrapositive. Suppose is reducible in . Then we have for some monic, non-constant polynomials and in . It follows that holds in . But since and are monic, non-constant polynomials, and are both non-constant polynomials in and hence is reducible in .   "
},
{
  "id": "ex-monic-is-necessary",
  "level": "2",
  "url": "sec-irrpoly.html#ex-monic-is-necessary",
  "type": "Example",
  "number": "10.18",
  "title": "",
  "body": " The assumption that be monic in this Proposition is necessary. Consider for instance . Modding out by yields a linear polynomial in which is thus irreducible. But isn't irreducible in . (The Proposition can be generalized to non-monic polynomials by adding the assumption that does not divided the leading coefficient of .)  "
},
{
  "id": "prop-fields-and-group-of-units",
  "level": "2",
  "url": "sec-irrpoly.html#prop-fields-and-group-of-units",
  "type": "Proposition",
  "number": "10.19",
  "title": "",
  "body": "  Let be a field and a finite subgroup of the multiplicative group . Prove that is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian every Sylow -subgroup of is normal, and thus there is only one of each. This means that can be written as a direct product of cyclic groups of relatively prime order; Hence is itself cyclic.   "
},
{
  "id": "prop-fields-and-group-of-units-1",
  "level": "2",
  "url": "sec-irrpoly.html#prop-fields-and-group-of-units-1",
  "type": "Proposition",
  "number": "10.20",
  "title": "",
  "body": "  Let be a field and a finite subgroup of the multiplicative group . Then is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian every Sylow -subgroup of is normal, and thus there is only one of each. This means that can be written as a direct product of cyclic groups of relatively prime order; hence is itself cyclic.   "
},
{
  "id": "sec-defmod",
  "level": "1",
  "url": "sec-defmod.html",
  "type": "Section",
  "number": "11.1",
  "title": "Module Basics",
  "body": "Module Basics  Modules    Complexity that works is built up out of modules that work perfectly, layered one over the other.   Kevin Kelly   Module   Let be a ring (with ). A left -module is an abelian group together with a pairing , written , such that for all and     ,     ,     , and     .    module  -module     Modules in Commutative Rings  If is a commutative ring, then any left -module may be regarded as a right -module by setting . Likewise, any right -module may be regarded as a left -module.    For non-commutative rings, left and right modules are not the same: trying to make a left -module into a right one by setting fails to satisfy the second axiom, since and , and, unless , we cannot conclude that .   Module and Opposite Ring  For a ring , recall the opposite ring, , as defined in . Given a left -module , prove that is a right -module via the same rule for addition but with the rule for scaling on the right defined to be for any and .   Arithmetic in Modules   Let be a ring and let be a (left) -module. Then for all and we have    ,     ,     , and     .         For the first, and hence .  For the second, and hence since is an abelian group.  For the third, (using the second) and hence is the additive inverse of .  Finally, (using the fact that holds in any ring and the previous result).      Examples of Modules    For any ring , the trivial module is with for any . trivial module   Every ring is a left module over itself with the rule for scaling given by the ring multiplication rule. It is also a right module over itself.  More generally, if is any ring and is a left ideal, then is a left- -module.  Let be a field and (the ring of matrices with entries in ). Let be the collection of column vectors with entries in having entries. The usual rules for adding column vectors and multiplying column vectors on the left by matrices make into a left -module. Likewise if is the collection of all row vector with entries in , the is a right -module via addition and matrix multiplication.     Standard Free Module  For a non-negative integer , the “standard\" free (left) -module of rank is the set equipped with the operations  standard free module    Typically, one first encounters modules in an undergraduate linear algebra course: the vector spaces from linear algebra are modules over fields. Later we will see that vector spaces are much simpler modules than modules over other rings. So while one might take linear algebra and vector spaces as an inspiration for what to expect from a module, be warned that this perspective can often be deceiving.  Vector Space   Let be a field. An -vector space is a (left) -module. vector space     Abelian Groups are -modules   Let be an abelian group under . Then becomes a -module upon defining the rule for scaling to be    for any and .    Modules  Let be a positive integer and recall that denotes the ring of integers modulo (whose elements I will write as ).   Show that if is any abelian group (under the operation ) such that for all (where ), then the pairing given makes into a -module. (Be sure to check this pairing is well-defined.)    Conversely, show that if is a -module, then the underlying abelian group has the property that for all .       Submodules and Restriction of Scalars    Restrictions will set you free.   W.A. Mathieu   For an -module the ring is often referred to as the ring of scalars for the module (by analogy to the vector space case). Given an action of a ring of scalars on a module, we can sometimes produce an action of a different ring of scalars on the same set, producing in effect a new module structure.  Restriction of Scalars   Let be a ring homomorphism. Any left -module may be regarded via restriction of scalars as a left -module with the following structure:   the rule for addition on is the same as in the original structure and    the rule for scaling by elements of is     restriction of scalars     Let and . One checks that the properties in the definition of module hold for the given action using properties of ring homomorphisms. In detail, since preserves addition, since preserves multiplication, and since preserves multiplicative identities. This gives three of the axioms. The final also holds:     As a special case of , if is a subring of , then every left -module becomes a left -module via restriction of scalars along the inclusion map of into . This explains the use of the phrase restriction of scalars .  Complex Vector Spaces are Real   For example, since is a subring of , every complex vector space may be regarded as a real vector space, by restriction of scalars from to . Likewise, any real vector space may be regarded as a rational vector space, etc.    Ring Maps and Restriction of Scalars   If and are rings and is a ring homomorphism, then since is a left -module, it is also a left -module via restriction of scalars. Note that the rule for scaling given by .  As a special case of this, if is a subring of a ring then is an -module (restriction of scalars along the inclusion map).  For instance, is a left -module for any via the evident injective ring homomorphism .  Also, is a left -module for given by the ring map sending to .    is an -module  If is a (two-sided) ideal of a ring then applying restriction of scalars along the quotient homomorphism gives that any left -module is also a left -module.  In particular, applying this to the -module gives that is a left -module. The rule for scaling is .   Submodule   Let be a ring and let be a left -module. An -submodule of is a subset such that    is a subgroup of under (so, we have , if then , and if then ), and     for all and .    submodule     We could equivalently define submodule to be a subset of that is an -module using the same operations of addition and scaling as in .  Let be an -module and be an ideal in . Show that the set is an -submodule of .  Submodules are Ideals   A subset of a ring is a (left) submodule of if and only if it is a (left) ideal.    Simple Modules  Let be a commutative ring with . An -module is simple if it has no nontrivial submodules. Show that is simple if and only if there exists a maximal ideal of such that . simple module     "
},
{
  "id": "def-module",
  "level": "2",
  "url": "sec-defmod.html#def-module",
  "type": "Definition",
  "number": "11.1",
  "title": "Module.",
  "body": "Module   Let be a ring (with ). A left -module is an abelian group together with a pairing , written , such that for all and     ,     ,     , and     .    module  -module    "
},
{
  "id": "exe-lr-modules",
  "level": "2",
  "url": "sec-defmod.html#exe-lr-modules",
  "type": "Exercise",
  "number": "11.2",
  "title": "Modules in Commutative Rings.",
  "body": "Modules in Commutative Rings  If is a commutative ring, then any left -module may be regarded as a right -module by setting . Likewise, any right -module may be regarded as a left -module.  "
},
{
  "id": "remark-44",
  "level": "2",
  "url": "sec-defmod.html#remark-44",
  "type": "Remark",
  "number": "11.3",
  "title": "",
  "body": " For non-commutative rings, left and right modules are not the same: trying to make a left -module into a right one by setting fails to satisfy the second axiom, since and , and, unless , we cannot conclude that .  "
},
{
  "id": "exe-opposite-ring-module",
  "level": "2",
  "url": "sec-defmod.html#exe-opposite-ring-module",
  "type": "Exercise",
  "number": "11.4",
  "title": "Module and Opposite Ring.",
  "body": "Module and Opposite Ring  For a ring , recall the opposite ring, , as defined in . Given a left -module , prove that is a right -module via the same rule for addition but with the rule for scaling on the right defined to be for any and .  "
},
{
  "id": "lem-module-arithmetic",
  "level": "2",
  "url": "sec-defmod.html#lem-module-arithmetic",
  "type": "Lemma",
  "number": "11.5",
  "title": "Arithmetic in Modules.",
  "body": "Arithmetic in Modules   Let be a ring and let be a (left) -module. Then for all and we have    ,     ,     , and     .         For the first, and hence .  For the second, and hence since is an abelian group.  For the third, (using the second) and hence is the additive inverse of .  Finally, (using the fact that holds in any ring and the previous result).     "
},
{
  "id": "ex-modules",
  "level": "2",
  "url": "sec-defmod.html#ex-modules",
  "type": "Example",
  "number": "11.6",
  "title": "Examples of Modules.",
  "body": "Examples of Modules    For any ring , the trivial module is with for any . trivial module   Every ring is a left module over itself with the rule for scaling given by the ring multiplication rule. It is also a right module over itself.  More generally, if is any ring and is a left ideal, then is a left- -module.  Let be a field and (the ring of matrices with entries in ). Let be the collection of column vectors with entries in having entries. The usual rules for adding column vectors and multiplying column vectors on the left by matrices make into a left -module. Likewise if is the collection of all row vector with entries in , the is a right -module via addition and matrix multiplication.    "
},
{
  "id": "ex-standard-free-module",
  "level": "2",
  "url": "sec-defmod.html#ex-standard-free-module",
  "type": "Example",
  "number": "11.7",
  "title": "Standard Free Module.",
  "body": "Standard Free Module  For a non-negative integer , the “standard\" free (left) -module of rank is the set equipped with the operations  standard free module   "
},
{
  "id": "def-vector-space",
  "level": "2",
  "url": "sec-defmod.html#def-vector-space",
  "type": "Definition",
  "number": "11.8",
  "title": "Vector Space.",
  "body": "Vector Space   Let be a field. An -vector space is a (left) -module. vector space    "
},
{
  "id": "thm-abelian-groups-are-z-modules",
  "level": "2",
  "url": "sec-defmod.html#thm-abelian-groups-are-z-modules",
  "type": "Theorem",
  "number": "11.9",
  "title": "Abelian Groups are <span class=\"process-math\">\\(\\Z\\)<\/span>-modules.",
  "body": "Abelian Groups are -modules   Let be an abelian group under . Then becomes a -module upon defining the rule for scaling to be    for any and .   "
},
{
  "id": "exe-zn-modules",
  "level": "2",
  "url": "sec-defmod.html#exe-zn-modules",
  "type": "Exercise",
  "number": "11.10",
  "title": "<span class=\"process-math\">\\(\\Z\/n\\)<\/span> Modules.",
  "body": "Modules  Let be a positive integer and recall that denotes the ring of integers modulo (whose elements I will write as ).   Show that if is any abelian group (under the operation ) such that for all (where ), then the pairing given makes into a -module. (Be sure to check this pairing is well-defined.)    Conversely, show that if is a -module, then the underlying abelian group has the property that for all .     "
},
{
  "id": "thm-restriction-of-scalars",
  "level": "2",
  "url": "sec-defmod.html#thm-restriction-of-scalars",
  "type": "Theorem",
  "number": "11.11",
  "title": "Restriction of Scalars.",
  "body": "Restriction of Scalars   Let be a ring homomorphism. Any left -module may be regarded via restriction of scalars as a left -module with the following structure:   the rule for addition on is the same as in the original structure and    the rule for scaling by elements of is     restriction of scalars     Let and . One checks that the properties in the definition of module hold for the given action using properties of ring homomorphisms. In detail, since preserves addition, since preserves multiplication, and since preserves multiplicative identities. This gives three of the axioms. The final also holds:    "
},
{
  "id": "ex-complex-vector-spaces-are-real-vector-spaces",
  "level": "2",
  "url": "sec-defmod.html#ex-complex-vector-spaces-are-real-vector-spaces",
  "type": "Example",
  "number": "11.12",
  "title": "Complex Vector Spaces are Real.",
  "body": "Complex Vector Spaces are Real   For example, since is a subring of , every complex vector space may be regarded as a real vector space, by restriction of scalars from to . Likewise, any real vector space may be regarded as a rational vector space, etc.   "
},
{
  "id": "ex-homomorphisms-and-restriction-of-scalars",
  "level": "2",
  "url": "sec-defmod.html#ex-homomorphisms-and-restriction-of-scalars",
  "type": "Example",
  "number": "11.13",
  "title": "Ring Maps and Restriction of Scalars.",
  "body": "Ring Maps and Restriction of Scalars   If and are rings and is a ring homomorphism, then since is a left -module, it is also a left -module via restriction of scalars. Note that the rule for scaling given by .  As a special case of this, if is a subring of a ring then is an -module (restriction of scalars along the inclusion map).  For instance, is a left -module for any via the evident injective ring homomorphism .  Also, is a left -module for given by the ring map sending to .   "
},
{
  "id": "exe-ri-module-is-an-r-module",
  "level": "2",
  "url": "sec-defmod.html#exe-ri-module-is-an-r-module",
  "type": "Example",
  "number": "11.14",
  "title": "<span class=\"process-math\">\\(R\/I\\)<\/span> is an <span class=\"process-math\">\\(R\\)<\/span>-module.",
  "body": "is an -module  If is a (two-sided) ideal of a ring then applying restriction of scalars along the quotient homomorphism gives that any left -module is also a left -module.  In particular, applying this to the -module gives that is a left -module. The rule for scaling is .  "
},
{
  "id": "def-submodule",
  "level": "2",
  "url": "sec-defmod.html#def-submodule",
  "type": "Definition",
  "number": "11.15",
  "title": "Submodule.",
  "body": "Submodule   Let be a ring and let be a left -module. An -submodule of is a subset such that    is a subgroup of under (so, we have , if then , and if then ), and     for all and .    submodule    "
},
{
  "id": "exercise-85",
  "level": "2",
  "url": "sec-defmod.html#exercise-85",
  "type": "Exercise",
  "number": "11.16",
  "title": "",
  "body": "Let be an -module and be an ideal in . Show that the set is an -submodule of . "
},
{
  "id": "thm-submodules-are-ideals",
  "level": "2",
  "url": "sec-defmod.html#thm-submodules-are-ideals",
  "type": "Theorem",
  "number": "11.17",
  "title": "Submodules are Ideals.",
  "body": "Submodules are Ideals   A subset of a ring is a (left) submodule of if and only if it is a (left) ideal.   "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "sec-defmod.html#exercise-86",
  "type": "Exercise",
  "number": "11.18",
  "title": "Simple Modules.",
  "body": "Simple Modules  Let be a commutative ring with . An -module is simple if it has no nontrivial submodules. Show that is simple if and only if there exists a maximal ideal of such that . simple module   "
},
{
  "id": "sec-modhom",
  "level": "1",
  "url": "sec-modhom.html",
  "type": "Section",
  "number": "11.2",
  "title": "Module Homomorphisms",
  "body": "Module Homomorphisms  Homomorphisms and Isomorphisms    Transformation rarely happens accidentally.   A.J. Sheppard   Module Homomorphism   Let be a ring and let and be -modules. An -module homomorphism from to sometimes called an - map , is a function such that for all and we have    , i.e. is an additive group homomorphism, and     .    module homomorphism  -module homomorphism  -map       .   The condition says that is a homomorphism of abelian groups.    Unlike its group or ring counterparts, a module homomorphism does not need to map to .   When the ring of scalars is a field, special terminology is used:  Linear Transformation   Let be a field and let and be vector spaces over . A linear transformation from to is an -module homomorphism . linear transformation       Let be a commutative ring and be an -module. For each , the multiplication map given by is a homomorphism of -modules.    Indeed, by the definition of -module we have and     Module Isomorphism   An -module homomorphism is an -module isomorphism if there is another -module homomorphism such that and . module isomorphism  -module isomorphism     To check that an -module homomorphism is an isomorphism, it is sufficient to check that it is bijective.  Module Isomorphisms and Bijections   Given a ring , -modules and , and a -module homomorphism , is an -module isomorphism if and only if is a bijection.    One can think of a module isomorphism as a relabelling of the names of the elements of the module. If two modules are isomorphic, that means that they are essentially the same, up to renaming the elements.  Kernel   The kernel of an -module homomorphism is the set  kernel ( -map)     Inclusion Map is -map  Let be a ring with , let be an -module, and let be an -submodule of . Then the inclusion map is an -module homomorphism.   Cokernel   The cokernel of an -module homomorphism is the set cokernel     Kernels and Images are Submodules   Let be a ring and let be an -module homomorphism. Then    is an -submodule of and     is an -submodule of .        and    All good things must come to an    Geoffrey Chaucer   and   Let be a ring and let and be -modules. Then denotes the set of all -module homomorphisms from to , and denotes the set . We call the endomorphism ring of , and elements of are called endomorphisms of .   endomorphism          is a ring.     is not a ring.        Let and be -modules over a commutative ring . Then is an -module using the following structure: Given , is the map defined by , and given and , is the -module homomorphism defined by The zero element of is the zero map.     We will see later that for an -dimensional vector space over a field , there is an isomorphism of vector spaces . This says that every linear transformation corresponds to some matrix. However, the story for general -modules is a lot more complicated.     For any commutative ring with and any -module there is an isomorphism of -modules .    in Eloísa notes     Show that for every nonzero integers and there is a -module isomorphism .     Let be a commutative ring. Given an -module , its annihilator is the ideal Show that if there is an isomorphism of -modules , then .     Quotient Modules    The best way to solve a problem is to remove its cause.   Martin Luther King Jr.   Quotient Module   Let be a ring, let be an -module, and let be a submodule of . The quotient module  is the quotient group under (so elements of are additive cosets of the form with and addition is defined by ) and with the rule for scaling by defined to be for all and . quotient module     Quotient Modules are Well Defined   Let be a ring, let be an -module, and let be a submodule of . The rule for scaling introduced above is well-defined and it, along with the rule for , makes into an -module.    Module Quotient Map   Let be a ring, let be an -module, and let be a submodule of . Define the canonical quotient map  by . quotient map (modules)     Quotient Map is an -map   Let be a ring, let be an -module, and let be a submodule of .   The quotient map is a n -module homomorphism     .       Among the many things to check here, we will only check a couple.  We need to prove the rule for scaling by on is well-defined: If then so by the definition of submodule. This gives that , hence . The module axioms are then pretty straightforward. We already know from 817 that is an abelian group under .  Let us check one of the four axioms involving scaling. We have which gives the third such axiom. The other three are also straightforward.  The fact that is an -module homomorphism is also straightforward. Its kernel is , which is equal to .    -modules and Quotients  Recall that -modules are the same as abelian groups by . Submodules and quotient -modules are the same things as subgroups and quotients of abelian groups.   Module Isomorphism Theorems   Let be a ring, and let be a -module.  UMP for Quotient Modules  Let be a submodule of , let be an -module, and let be an -module homomorphism. If (i.e., if ) then the function given by is a well-defined, -module homomorphism. In fact, is the unique -module homomorphism such that where denotes the canonical surjection . UMP for quotient modules    First Isomorphism Theorem for Modules  Let be an -module and let be an -module homomorphism. Then is a submodule of and there is an -module isomorphism given by . first isomorphism theorem for modules    Second Isomorphism Theorem for Modules  Let and be submodules of , and define . Then is a submodule of , is a submodule of , and there is an -module isomorphism . second isomorphism theorem for modules    Third Isomorphism Theorem for Modules  Let and be submodules of with . Then is a submodule of and there is an -module isomorphism given by sending to . third isomorphism theorem for modules    Lattice Isomorphism Theorem for Modules  Let be a ring, let be a R-submodule of , and let be the canonical quotient map. Then the function defined by is a bijection, with inverse given by for each submodule of . Moreover, and preserve sums and intersections. lattice isomorphism theorem for modules        Ignoring the rules for scaling by , we know each of the first four results holds for abelian groups (and the maps are the same). So, we merely need to prove that the rules for scaling are respected in each case. In more detail:  For the UMP, we already know that is a well-defined homomorphism of groups under and that it is the unique one such that . It remains only to show preserves scaling: This follows quickly from the definitions: where the third equation uses that preserves scaling.  For the First Isomorphism Theorem, we already know that there is an isomorphism of abelian groups under , given by , and it remains only to show this map preserves scaling. This is a special case of what we proved in part (0).  For the second isomorphism theorem, we need to first check that and are submodules. From 817 we already know they are subgroups under , and it is evident from the definitions that each is closed under scaling by elements of . Now, we know from 817 that there is an isomorphism of abelian groups given by . It remains only to show preserves scaling:   For the third, we already know (from 817) that is a subgroup of under . Given and we have which belongs to since . This proves is a submodule of . Also from 817 we know there is an isomorphism of abelian groups given by and it remains only to show it is -linear: .  The Lattice Theorem is the most complicaed to gerenlize. From 817 we know thre is a bijection between the set of subgroups of and that contain and subgroups of the quotient group , and the maps are the same as given in the statment. We just need to prove that these maps send submodules to submodules. If is a submodule of containing , then by part (3) we know is a submodule of .  If is a submodule of , then is an abelian group. For adn we have and hence too, since is a submodule. This proves is a submodule.     "
},
{
  "id": "def-module-homomorphism",
  "level": "2",
  "url": "sec-modhom.html#def-module-homomorphism",
  "type": "Definition",
  "number": "11.19",
  "title": "Module Homomorphism.",
  "body": "Module Homomorphism   Let be a ring and let and be -modules. An -module homomorphism from to sometimes called an - map , is a function such that for all and we have    , i.e. is an additive group homomorphism, and     .    module homomorphism  -module homomorphism  -map    "
},
{
  "id": "exercise-87",
  "level": "2",
  "url": "sec-modhom.html#exercise-87",
  "type": "Exercise",
  "number": "11.20",
  "title": "",
  "body": "  .   The condition says that is a homomorphism of abelian groups.  "
},
{
  "id": "remark-45",
  "level": "2",
  "url": "sec-modhom.html#remark-45",
  "type": "Remark",
  "number": "11.21",
  "title": "",
  "body": " Unlike its group or ring counterparts, a module homomorphism does not need to map to .  "
},
{
  "id": "def-linear-transformation",
  "level": "2",
  "url": "sec-modhom.html#def-linear-transformation",
  "type": "Definition",
  "number": "11.22",
  "title": "Linear Transformation.",
  "body": "Linear Transformation   Let be a field and let and be vector spaces over . A linear transformation from to is an -module homomorphism . linear transformation    "
},
{
  "id": "example-78",
  "level": "2",
  "url": "sec-modhom.html#example-78",
  "type": "Example",
  "number": "11.23",
  "title": "",
  "body": "  Let be a commutative ring and be an -module. For each , the multiplication map given by is a homomorphism of -modules.    Indeed, by the definition of -module we have and    "
},
{
  "id": "def-module-isomorphism",
  "level": "2",
  "url": "sec-modhom.html#def-module-isomorphism",
  "type": "Definition",
  "number": "11.24",
  "title": "Module Isomorphism.",
  "body": "Module Isomorphism   An -module homomorphism is an -module isomorphism if there is another -module homomorphism such that and . module isomorphism  -module isomorphism    "
},
{
  "id": "thm-module-isomorphisms-and-bijections",
  "level": "2",
  "url": "sec-modhom.html#thm-module-isomorphisms-and-bijections",
  "type": "Theorem",
  "number": "11.25",
  "title": "Module Isomorphisms and Bijections.",
  "body": "Module Isomorphisms and Bijections   Given a ring , -modules and , and a -module homomorphism , is an -module isomorphism if and only if is a bijection.   "
},
{
  "id": "def-r-map-ker",
  "level": "2",
  "url": "sec-modhom.html#def-r-map-ker",
  "type": "Definition",
  "number": "11.26",
  "title": "Kernel.",
  "body": "Kernel   The kernel of an -module homomorphism is the set  kernel ( -map)    "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "sec-modhom.html#exercise-88",
  "type": "Exercise",
  "number": "11.27",
  "title": "Inclusion Map is <span class=\"process-math\">\\(R\\)<\/span>-map.",
  "body": "Inclusion Map is -map  Let be a ring with , let be an -module, and let be an -submodule of . Then the inclusion map is an -module homomorphism.  "
},
{
  "id": "def-cokernel",
  "level": "2",
  "url": "sec-modhom.html#def-cokernel",
  "type": "Definition",
  "number": "11.28",
  "title": "Cokernel.",
  "body": "Cokernel   The cokernel of an -module homomorphism is the set cokernel    "
},
{
  "id": "thm-kernels-and-images-of-homomorphisms-are-submodule",
  "level": "2",
  "url": "sec-modhom.html#thm-kernels-and-images-of-homomorphisms-are-submodule",
  "type": "Theorem",
  "number": "11.29",
  "title": "Kernels and Images are Submodules.",
  "body": "Kernels and Images are Submodules   Let be a ring and let be an -module homomorphism. Then    is an -submodule of and     is an -submodule of .      "
},
{
  "id": "def-r-mod-hom",
  "level": "2",
  "url": "sec-modhom.html#def-r-mod-hom",
  "type": "Definition",
  "number": "11.30",
  "title": "<span class=\"process-math\">\\(\\Hom\\)<\/span> and <span class=\"process-math\">\\(\\End\\)<\/span>.",
  "body": "and   Let be a ring and let and be -modules. Then denotes the set of all -module homomorphisms from to , and denotes the set . We call the endomorphism ring of , and elements of are called endomorphisms of .   endomorphism    "
},
{
  "id": "exercise-89",
  "level": "2",
  "url": "sec-modhom.html#exercise-89",
  "type": "Exercise",
  "number": "11.31",
  "title": "",
  "body": "     is a ring.     is not a ring.     "
},
{
  "id": "prop-hom-module",
  "level": "2",
  "url": "sec-modhom.html#prop-hom-module",
  "type": "Proposition",
  "number": "11.32",
  "title": "",
  "body": "  Let and be -modules over a commutative ring . Then is an -module using the following structure: Given , is the map defined by , and given and , is the -module homomorphism defined by The zero element of is the zero map.   "
},
{
  "id": "remark-46",
  "level": "2",
  "url": "sec-modhom.html#remark-46",
  "type": "Remark",
  "number": "11.33",
  "title": "",
  "body": " We will see later that for an -dimensional vector space over a field , there is an isomorphism of vector spaces . This says that every linear transformation corresponds to some matrix. However, the story for general -modules is a lot more complicated.  "
},
{
  "id": "thm-hom-iso",
  "level": "2",
  "url": "sec-modhom.html#thm-hom-iso",
  "type": "Theorem",
  "number": "11.34",
  "title": "",
  "body": "  For any commutative ring with and any -module there is an isomorphism of -modules .    in Eloísa notes   "
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "sec-modhom.html#exercise-90",
  "type": "Exercise",
  "number": "11.35",
  "title": "",
  "body": " Show that for every nonzero integers and there is a -module isomorphism .  "
},
{
  "id": "proposition-35",
  "level": "2",
  "url": "sec-modhom.html#proposition-35",
  "type": "Proposition",
  "number": "11.36",
  "title": "",
  "body": "  Let be a commutative ring. Given an -module , its annihilator is the ideal Show that if there is an isomorphism of -modules , then .   "
},
{
  "id": "def-quotient-module",
  "level": "2",
  "url": "sec-modhom.html#def-quotient-module",
  "type": "Definition",
  "number": "11.37",
  "title": "Quotient Module.",
  "body": "Quotient Module   Let be a ring, let be an -module, and let be a submodule of . The quotient module  is the quotient group under (so elements of are additive cosets of the form with and addition is defined by ) and with the rule for scaling by defined to be for all and . quotient module    "
},
{
  "id": "thm-quotient-module-well-defined",
  "level": "2",
  "url": "sec-modhom.html#thm-quotient-module-well-defined",
  "type": "Theorem",
  "number": "11.38",
  "title": "Quotient Modules are Well Defined.",
  "body": "Quotient Modules are Well Defined   Let be a ring, let be an -module, and let be a submodule of . The rule for scaling introduced above is well-defined and it, along with the rule for , makes into an -module.   "
},
{
  "id": "def-module-quotient-map",
  "level": "2",
  "url": "sec-modhom.html#def-module-quotient-map",
  "type": "Definition",
  "number": "11.39",
  "title": "Module Quotient Map.",
  "body": "Module Quotient Map   Let be a ring, let be an -module, and let be a submodule of . Define the canonical quotient map  by . quotient map (modules)    "
},
{
  "id": "prop-quotient-map-is-r-module-homomorphism",
  "level": "2",
  "url": "sec-modhom.html#prop-quotient-map-is-r-module-homomorphism",
  "type": "Proposition",
  "number": "11.40",
  "title": "Quotient Map is an <span class=\"process-math\">\\(R\\)<\/span>-map.",
  "body": "Quotient Map is an -map   Let be a ring, let be an -module, and let be a submodule of .   The quotient map is a n -module homomorphism     .       Among the many things to check here, we will only check a couple.  We need to prove the rule for scaling by on is well-defined: If then so by the definition of submodule. This gives that , hence . The module axioms are then pretty straightforward. We already know from 817 that is an abelian group under .  Let us check one of the four axioms involving scaling. We have which gives the third such axiom. The other three are also straightforward.  The fact that is an -module homomorphism is also straightforward. Its kernel is , which is equal to .   "
},
{
  "id": "exe-z-modules-and-quotients",
  "level": "2",
  "url": "sec-modhom.html#exe-z-modules-and-quotients",
  "type": "Example",
  "number": "11.41",
  "title": "<span class=\"process-math\">\\(\\Z\\)<\/span>-modules and Quotients.",
  "body": "-modules and Quotients  Recall that -modules are the same as abelian groups by . Submodules and quotient -modules are the same things as subgroups and quotients of abelian groups.  "
},
{
  "id": "thm-module-isomorphism-thms",
  "level": "2",
  "url": "sec-modhom.html#thm-module-isomorphism-thms",
  "type": "Theorem",
  "number": "11.42",
  "title": "Module Isomorphism Theorems.",
  "body": "Module Isomorphism Theorems   Let be a ring, and let be a -module.  UMP for Quotient Modules  Let be a submodule of , let be an -module, and let be an -module homomorphism. If (i.e., if ) then the function given by is a well-defined, -module homomorphism. In fact, is the unique -module homomorphism such that where denotes the canonical surjection . UMP for quotient modules    First Isomorphism Theorem for Modules  Let be an -module and let be an -module homomorphism. Then is a submodule of and there is an -module isomorphism given by . first isomorphism theorem for modules    Second Isomorphism Theorem for Modules  Let and be submodules of , and define . Then is a submodule of , is a submodule of , and there is an -module isomorphism . second isomorphism theorem for modules    Third Isomorphism Theorem for Modules  Let and be submodules of with . Then is a submodule of and there is an -module isomorphism given by sending to . third isomorphism theorem for modules    Lattice Isomorphism Theorem for Modules  Let be a ring, let be a R-submodule of , and let be the canonical quotient map. Then the function defined by is a bijection, with inverse given by for each submodule of . Moreover, and preserve sums and intersections. lattice isomorphism theorem for modules        Ignoring the rules for scaling by , we know each of the first four results holds for abelian groups (and the maps are the same). So, we merely need to prove that the rules for scaling are respected in each case. In more detail:  For the UMP, we already know that is a well-defined homomorphism of groups under and that it is the unique one such that . It remains only to show preserves scaling: This follows quickly from the definitions: where the third equation uses that preserves scaling.  For the First Isomorphism Theorem, we already know that there is an isomorphism of abelian groups under , given by , and it remains only to show this map preserves scaling. This is a special case of what we proved in part (0).  For the second isomorphism theorem, we need to first check that and are submodules. From 817 we already know they are subgroups under , and it is evident from the definitions that each is closed under scaling by elements of . Now, we know from 817 that there is an isomorphism of abelian groups given by . It remains only to show preserves scaling:   For the third, we already know (from 817) that is a subgroup of under . Given and we have which belongs to since . This proves is a submodule of . Also from 817 we know there is an isomorphism of abelian groups given by and it remains only to show it is -linear: .  The Lattice Theorem is the most complicaed to gerenlize. From 817 we know thre is a bijection between the set of subgroups of and that contain and subgroups of the quotient group , and the maps are the same as given in the statment. We just need to prove that these maps send submodules to submodules. If is a submodule of containing , then by part (3) we know is a submodule of .  If is a submodule of , then is an abelian group. For adn we have and hence too, since is a submodule. This proves is a submodule.   "
},
{
  "id": "sec-linear-ind-gen",
  "level": "1",
  "url": "sec-linear-ind-gen.html",
  "type": "Section",
  "number": "11.3",
  "title": "Linear Independence and Generated Modules",
  "body": "Linear Independence and Generated Modules  Generated Modules    You need to learn independence. You have to be independent - it builds character.   Mike Tyson   Linear Combination   Let be an -module and . An - linear combination of is an element of of the form for some and . (If , this gives the empty sum which is interpreted to give .) linear combination  -linear combination       Let be a ring with and let be an -module. For a subset of , the submodule of  generated by is   We say is generated by if . generated module     Generated vs. Span  If is an -vector space, one usually uses the term spanned by instead of the term generated by by.   Smallest Submodule of Containing   For any subset of a -module , the subset is indeed a submodule of , and it is the smallest submodule of that contains as a subset. In fact, we have     Cyclic Module   If for some single element , we say that is cyclic . cyclic module     Cyclic -module  If , then (recalling that a -module is the same thing as an abelian group) we see that is a cyclic -module if and only if is a cyclic group.   Cyclic Modules and Ideals  Show that the left -module is cyclic if and only if there exists a left ideal of such that .   Every Cyclic -module to for some  Every cyclic -module is isomorphic to for some left ideal .   Say is cyclic and is a generator of , so that . Define to be the unique -map with . Here I am applying the UMP for bases, using that is a basis of as a left -modules. More explicitly, for all . Then is onto, since generates . Its kernel is a left ideal of , since submodules of are the same thing as left ideals. By the FIT, there is an isomorphism sending to .   Finitely Generated Module   A module is finitely generated if there exists some finite subset of such that . finitely generated module      For any -module , we have . This is because the empty sum is interpreted as giving .   Standard Free Module Finitely Generated  Let be a ring. The standard free -module of rank , , is finitely generated, since it is generated by where , with a in the -th position. This holds since given any element of we have .  In particular, taking , is cyclic as a module over itself, since . More generally, for any (two sided) ideal , is a cyclic left -module, generated by .   Finite Generation and Quotient Modules   Let be a ring with , let be an -module, and let be an submodule of .   If is finitely generated as an -module, then so is .    If and are finitely generated as -modules, then so is .          Note that if then , where .           Linearly Independent   Let be an -module and let be a subset of . The set is linearly independent if whenever and are distinct elements of satisfying , then . Otherwise is linearly dependent . linearly independent  linearly dependent      The empty subset of any module is linearly independent (vacuously).   One Element Subsets of -Modules  A one element subset of an -module is linearly independent if and only if whenever , we have .  But it is possible for one elements subsets to be linearly dependent: For example, let be any ring and and (two-sided) ideal such that . Then I claim that every non-empty subset of is linearly dependent. For say is a such a nonempty subset. For any , pick any such that . Then (since for some and hence ) and this shows is linearly dependent. In particular, even a one-element subset of is linearly dependent.   Linearly Independent in  The singleton is a linearly independent subset of the -module . But it does not generate all of . The subset does generate all of , but it is not linearly independent, since . More on this later.    "
},
{
  "id": "def-linear-combination",
  "level": "2",
  "url": "sec-linear-ind-gen.html#def-linear-combination",
  "type": "Definition",
  "number": "11.43",
  "title": "Linear Combination.",
  "body": "Linear Combination   Let be an -module and . An - linear combination of is an element of of the form for some and . (If , this gives the empty sum which is interpreted to give .) linear combination  -linear combination    "
},
{
  "id": "def-generated-submodule",
  "level": "2",
  "url": "sec-linear-ind-gen.html#def-generated-submodule",
  "type": "Definition",
  "number": "11.44",
  "title": "",
  "body": "  Let be a ring with and let be an -module. For a subset of , the submodule of  generated by is   We say is generated by if . generated module    "
},
{
  "id": "lem-rcdot-a-smallest-submodule-of-m-containing-a",
  "level": "2",
  "url": "sec-linear-ind-gen.html#lem-rcdot-a-smallest-submodule-of-m-containing-a",
  "type": "Lemma",
  "number": "11.45",
  "title": "<span class=\"process-math\">\\(R\\cdot A\\)<\/span> Smallest Submodule of <span class=\"process-math\">\\(M\\)<\/span> Containing <span class=\"process-math\">\\(A\\)<\/span>.",
  "body": "Smallest Submodule of Containing   For any subset of a -module , the subset is indeed a submodule of , and it is the smallest submodule of that contains as a subset. In fact, we have    "
},
{
  "id": "def-cyclic-module",
  "level": "2",
  "url": "sec-linear-ind-gen.html#def-cyclic-module",
  "type": "Definition",
  "number": "11.46",
  "title": "Cyclic Module.",
  "body": "Cyclic Module   If for some single element , we say that is cyclic . cyclic module    "
},
{
  "id": "exe-cyclic-z-module",
  "level": "2",
  "url": "sec-linear-ind-gen.html#exe-cyclic-z-module",
  "type": "Example",
  "number": "11.47",
  "title": "Cyclic <span class=\"process-math\">\\(\\Z\\)<\/span>-module.",
  "body": "Cyclic -module  If , then (recalling that a -module is the same thing as an abelian group) we see that is a cyclic -module if and only if is a cyclic group.  "
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "sec-linear-ind-gen.html#exercise-91",
  "type": "Exercise",
  "number": "11.48",
  "title": "Cyclic Modules and Ideals.",
  "body": "Cyclic Modules and Ideals  Show that the left -module is cyclic if and only if there exists a left ideal of such that .  "
},
{
  "id": "exe-every-cyclic-r-module-cong-to-ri-for-some-i",
  "level": "2",
  "url": "sec-linear-ind-gen.html#exe-every-cyclic-r-module-cong-to-ri-for-some-i",
  "type": "Exercise",
  "number": "11.49",
  "title": "Every Cyclic <span class=\"process-math\">\\(R\\)<\/span>-module <span class=\"process-math\">\\(\\cong\\)<\/span> to <span class=\"process-math\">\\(R\/I\\)<\/span> for some <span class=\"process-math\">\\(I\\)<\/span>.",
  "body": "Every Cyclic -module to for some  Every cyclic -module is isomorphic to for some left ideal .   Say is cyclic and is a generator of , so that . Define to be the unique -map with . Here I am applying the UMP for bases, using that is a basis of as a left -modules. More explicitly, for all . Then is onto, since generates . Its kernel is a left ideal of , since submodules of are the same thing as left ideals. By the FIT, there is an isomorphism sending to .  "
},
{
  "id": "def-finitely-generated-module",
  "level": "2",
  "url": "sec-linear-ind-gen.html#def-finitely-generated-module",
  "type": "Definition",
  "number": "11.50",
  "title": "Finitely Generated Module.",
  "body": "Finitely Generated Module   A module is finitely generated if there exists some finite subset of such that . finitely generated module    "
},
{
  "id": "remark-47",
  "level": "2",
  "url": "sec-linear-ind-gen.html#remark-47",
  "type": "Remark",
  "number": "11.51",
  "title": "",
  "body": " For any -module , we have . This is because the empty sum is interpreted as giving .  "
},
{
  "id": "ex-standard-free-module-finitely-generated",
  "level": "2",
  "url": "sec-linear-ind-gen.html#ex-standard-free-module-finitely-generated",
  "type": "Example",
  "number": "11.52",
  "title": "Standard Free Module Finitely Generated.",
  "body": "Standard Free Module Finitely Generated  Let be a ring. The standard free -module of rank , , is finitely generated, since it is generated by where , with a in the -th position. This holds since given any element of we have .  In particular, taking , is cyclic as a module over itself, since . More generally, for any (two sided) ideal , is a cyclic left -module, generated by .  "
},
{
  "id": "lem-fg-quotient-mod",
  "level": "2",
  "url": "sec-linear-ind-gen.html#lem-fg-quotient-mod",
  "type": "Lemma",
  "number": "11.53",
  "title": "Finite Generation and Quotient Modules.",
  "body": "Finite Generation and Quotient Modules   Let be a ring with , let be an -module, and let be an submodule of .   If is finitely generated as an -module, then so is .    If and are finitely generated as -modules, then so is .          Note that if then , where .          "
},
{
  "id": "def-linearly-independent",
  "level": "2",
  "url": "sec-linear-ind-gen.html#def-linearly-independent",
  "type": "Definition",
  "number": "11.54",
  "title": "Linearly Independent.",
  "body": "Linearly Independent   Let be an -module and let be a subset of . The set is linearly independent if whenever and are distinct elements of satisfying , then . Otherwise is linearly dependent . linearly independent  linearly dependent    "
},
{
  "id": "remark-48",
  "level": "2",
  "url": "sec-linear-ind-gen.html#remark-48",
  "type": "Remark",
  "number": "11.55",
  "title": "",
  "body": " The empty subset of any module is linearly independent (vacuously).  "
},
{
  "id": "ex-one-element-subsets-of-r-mods",
  "level": "2",
  "url": "sec-linear-ind-gen.html#ex-one-element-subsets-of-r-mods",
  "type": "Example",
  "number": "11.56",
  "title": "One Element Subsets of <span class=\"process-math\">\\(R\\)<\/span>-Modules.",
  "body": "One Element Subsets of -Modules  A one element subset of an -module is linearly independent if and only if whenever , we have .  But it is possible for one elements subsets to be linearly dependent: For example, let be any ring and and (two-sided) ideal such that . Then I claim that every non-empty subset of is linearly dependent. For say is a such a nonempty subset. For any , pick any such that . Then (since for some and hence ) and this shows is linearly dependent. In particular, even a one-element subset of is linearly dependent.  "
},
{
  "id": "exe-3-linearly-independent-in-z",
  "level": "2",
  "url": "sec-linear-ind-gen.html#exe-3-linearly-independent-in-z",
  "type": "Example",
  "number": "11.57",
  "title": "<span class=\"process-math\">\\(\\{3\\}\\)<\/span> Linearly Independent in <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Linearly Independent in  The singleton is a linearly independent subset of the -module . But it does not generate all of . The subset does generate all of , but it is not linearly independent, since . More on this later.  "
},
{
  "id": "sec-free-mod",
  "level": "1",
  "url": "sec-free-mod.html",
  "type": "Section",
  "number": "11.4",
  "title": "Bases and Free Modules",
  "body": "Bases and Free Modules  Bases    The basis of all good human behavior is kindness.   Eleanor Roosevelt   Basis and Free Module   A subset of an -module is a basis of , if the set generates and is linearly independent. An -module M is a free  -module if admits at least one a basis. basis  free module     Module Rank   Let be a non-zero commutative ring and let be a free -module. The cardinality of any basis of is called the rank of . rank (modules)     Free Modules     The zero module is free with as (its only) basis. This holds since the empty set is vacuously linearly independent and it generates .     is free since is a basis for . It generates and if then , so it is linearly independent.    More generally, is free since is a basis. This is called the standard basis of . We've already seen that generates as an -module. Suppose . Then and hence for all .    For any ring , if is a (two-sided) ideal such that and , then is not free. Since , is not the zero module and hence the empty set isn't a basis. Let be any non-empty subset. Then since , as shown above is linearly dependent. We conclude that no subset of is a basis.      Bases of free modules are rarely unique.  Bases are not Unique  If is any ring, then any single unit forms a basis for as a module over itself. For another example, for any ring and any fixed element , the set forms a basis for the free -module .   Every Module over a Field is Free  Let be a commutative ring with . Show that if every -module is free then is a field.    A key difference between free modules over rings that are not fields and vector spaces is that not every linearly independent subset of a free module can be extended to a basis. For example, is a linearly independent subset of , but it cannot be extended to a basis. Indeed, any set of the form with is linearly dependent since .  Likewise, over arbitrary rings, not every subset that generates a free module necessarily contains a basis. For instance, generated as a module over itself, but no subset of it is a basis.  (Note that has precisely two bases as a module over itself: and . )    If is the zero ring, then there is (up to isomorphism) only one -module, the zero module.   If is any module over the ring, then for each we have .    Checking the definition carefully, we see that both the empty set and the set form bases for the zero module over the ring. This gives an example of a module with two bases of different cardinalities.   Elements Uniquely Expressible in Free Modules   Suppose is a free -module and is a basis of . Then every element of is uniquely expressible as an -linear combination of elements of .  More precisely, for each there is unique family of elements , with for all , such that for all but a finite number of indices and .    Given , the fact that for at least one family of elements with for all but a finite number of 's is the definition of what it means for to generate .  Suppose is another such family with . Then Since is linearly independent, by definition for all .    I have not yet given an example of a module with an infinite basis; here is one.  Module with Infinite Basis  Let be any ring and (which, recall, is an -module due to the evident ring map ). Then the countably infinite set is a basis. The fact that this set is a basis is essentially part of the definition of . says that every polynomial is uniquely expressible as an -linear combination of (a finite subset of) .   UMP for Free -Modules  UMP for free -modules   Let be a ring, let be a free -module with basis , let be an -module, and let be any function. Then there is a unique -module homomorphism such that for all .  In other words, there is a bijection of sets given by sending a homomorphisms to its restriction to . (Here, is the set of all -module homomorphisms from to and is the set of all functions from to .)    Given a function , define as follows: Given , by  can be written uniquely as a finite sum . We set Note that is a well-defined function by the uniqueness of the equation .  We need to prove is an -module homomorphism. I'll just show it preserves scaling — the proof for addition is similar. Given and , we have for some , and hence . By definition of ,   Finally, for any we have where if and if . So by construction. This proves existence.  Let be another -module homomorphism such that for each . Given we have and hence and hence .     The uniqueness only uses that generates as an -module.   Free Modules with Equal Basis Elements Isomorphic   If and are free -modules having bases of the same cardinality, then and are isomorphic -modules.  More precisely, if is a basis of and is a basis of and is a bijection of sets, then there is a unique -module isomorphism such that .    Let and be the -module homomorphisms induced by the bijection and its inverse , respectively, using . We'll show that and are mutual inverses. For this note that is an -module homomorphism and for every . Since the identity map is also an -module homomorphism such that for every , by the uniqueness clause in the , we have . Similarly .    as -modules  If is a free -module that has a basis of cardinality , then as -modules. This holds since, as seen above, has a basis of cardinality , namely the standard basis .  More precisely, as the proof makes clear, if is an (ordered) basis of , there is an isomorphism that sends to .    Beware that the cardinality of a basis of a free modules is not an isomorphism invariant in general! There exist rings such that and are isomorphic -modules for all positive integers and .   Uniqueness of Rank over Commutative Rings   Let be a commutative ring such that and let be a free -module with bases and . Then and have the same rank, i.e. there exists a (non unique) bijection of sets joining them.    Let be a non-zero commutative ring and let be a free -module with two bases, and . We need to show and have the same cardinality. Since and are finite, by Example the assertion is equivalent to the following statement: \\begin{quote} For a non-zero commutative ring $R$, if there is an isomorphism $R^n \\cong R^m$ of $R$-modules for some integers $n$ and $m$, then $n = m$. \\end{quote}   I will prove this statement by taking it as already known that it holds in the special case when is a field. (We will prove it for fields later.)   Since is not the zero ring, it contains at least one maximal ideal . (This is proven using .) Recall that is a field by   Given an isomorphism of -modules, by Lemma we have an induced homomorphism of -module . Likewise, the inverse map induces a map . Also by that Lemma we have and similarly is the identity. That is, we have an isomorphism of -modules.  Next, I claim that there is an isomorphism of -modules. Define in the evident way (modding out by entry-wise). It is a surjective map of -modules with kernel and thus, by the First Isomorphism Theorem, it induces an isomorphism given by (where denotes taking the transpose). Now, what we have said so far only shows that is isomorphism of -modules, but it is easy to see that is in fact -linear (I'll leave that to you) and thus it is an isomorphism of -modules.  Putting the results proven so far together, we conclude that and are isomorphic as -modules. Since is a field and since we are assuming the result holds for fields, we deduce that .    Bases of  Let be a non-zero, commutative ring. Prove that a subset of is a basis of as a module over itself if and only if for some unit of .   Bases of ideals in commutative rings     Assume is a non-zero, commutative ring and is a non-zero ideal. Prove is free as an -module if and only if for a non-zerodivisor . (Recall that an element is a non-zerodivisor in provided and implies for all . )    Let be a field and . Let , the ideal consisting of all polynomials with constant term. Prove is not free as an -module.       "
},
{
  "id": "def-basis-free-mod",
  "level": "2",
  "url": "sec-free-mod.html#def-basis-free-mod",
  "type": "Definition",
  "number": "11.58",
  "title": "Basis and Free Module.",
  "body": "Basis and Free Module   A subset of an -module is a basis of , if the set generates and is linearly independent. An -module M is a free  -module if admits at least one a basis. basis  free module    "
},
{
  "id": "def-rank-module",
  "level": "2",
  "url": "sec-free-mod.html#def-rank-module",
  "type": "Definition",
  "number": "11.59",
  "title": "Module Rank.",
  "body": "Module Rank   Let be a non-zero commutative ring and let be a free -module. The cardinality of any basis of is called the rank of . rank (modules)    "
},
{
  "id": "ex-free-modules",
  "level": "2",
  "url": "sec-free-mod.html#ex-free-modules",
  "type": "Example",
  "number": "11.60",
  "title": "Free Modules.",
  "body": "Free Modules     The zero module is free with as (its only) basis. This holds since the empty set is vacuously linearly independent and it generates .     is free since is a basis for . It generates and if then , so it is linearly independent.    More generally, is free since is a basis. This is called the standard basis of . We've already seen that generates as an -module. Suppose . Then and hence for all .    For any ring , if is a (two-sided) ideal such that and , then is not free. Since , is not the zero module and hence the empty set isn't a basis. Let be any non-empty subset. Then since , as shown above is linearly dependent. We conclude that no subset of is a basis.     "
},
{
  "id": "ex-bases-are-not-unique",
  "level": "2",
  "url": "sec-free-mod.html#ex-bases-are-not-unique",
  "type": "Example",
  "number": "11.61",
  "title": "Bases are not Unique.",
  "body": "Bases are not Unique  If is any ring, then any single unit forms a basis for as a module over itself. For another example, for any ring and any fixed element , the set forms a basis for the free -module .  "
},
{
  "id": "exercise-93",
  "level": "2",
  "url": "sec-free-mod.html#exercise-93",
  "type": "Exercise",
  "number": "11.62",
  "title": "Every Module over a Field is Free.",
  "body": "Every Module over a Field is Free  Let be a commutative ring with . Show that if every -module is free then is a field.  "
},
{
  "id": "remark-49",
  "level": "2",
  "url": "sec-free-mod.html#remark-49",
  "type": "Remark",
  "number": "11.63",
  "title": "",
  "body": " A key difference between free modules over rings that are not fields and vector spaces is that not every linearly independent subset of a free module can be extended to a basis. For example, is a linearly independent subset of , but it cannot be extended to a basis. Indeed, any set of the form with is linearly dependent since .  Likewise, over arbitrary rings, not every subset that generates a free module necessarily contains a basis. For instance, generated as a module over itself, but no subset of it is a basis.  (Note that has precisely two bases as a module over itself: and . )  "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "sec-free-mod.html#exercise-94",
  "type": "Exercise",
  "number": "11.64",
  "title": "",
  "body": " If is the zero ring, then there is (up to isomorphism) only one -module, the zero module.   If is any module over the ring, then for each we have .  "
},
{
  "id": "remark-50",
  "level": "2",
  "url": "sec-free-mod.html#remark-50",
  "type": "Remark",
  "number": "11.65",
  "title": "",
  "body": " Checking the definition carefully, we see that both the empty set and the set form bases for the zero module over the ring. This gives an example of a module with two bases of different cardinalities.  "
},
{
  "id": "lem-elements-uniquely-expressible-in-free-modules",
  "level": "2",
  "url": "sec-free-mod.html#lem-elements-uniquely-expressible-in-free-modules",
  "type": "Lemma",
  "number": "11.66",
  "title": "Elements Uniquely Expressible in Free Modules.",
  "body": "Elements Uniquely Expressible in Free Modules   Suppose is a free -module and is a basis of . Then every element of is uniquely expressible as an -linear combination of elements of .  More precisely, for each there is unique family of elements , with for all , such that for all but a finite number of indices and .    Given , the fact that for at least one family of elements with for all but a finite number of 's is the definition of what it means for to generate .  Suppose is another such family with . Then Since is linearly independent, by definition for all .   "
},
{
  "id": "exe-module-with-infinite-basis",
  "level": "2",
  "url": "sec-free-mod.html#exe-module-with-infinite-basis",
  "type": "Example",
  "number": "11.67",
  "title": "Module with Infinite Basis.",
  "body": "Module with Infinite Basis  Let be any ring and (which, recall, is an -module due to the evident ring map ). Then the countably infinite set is a basis. The fact that this set is a basis is essentially part of the definition of . says that every polynomial is uniquely expressible as an -linear combination of (a finite subset of) .  "
},
{
  "id": "thm-ump-for-free-modules",
  "level": "2",
  "url": "sec-free-mod.html#thm-ump-for-free-modules",
  "type": "Theorem",
  "number": "11.68",
  "title": "UMP for Free <span class=\"process-math\">\\(R\\)<\/span>-Modules.",
  "body": "UMP for Free -Modules  UMP for free -modules   Let be a ring, let be a free -module with basis , let be an -module, and let be any function. Then there is a unique -module homomorphism such that for all .  In other words, there is a bijection of sets given by sending a homomorphisms to its restriction to . (Here, is the set of all -module homomorphisms from to and is the set of all functions from to .)    Given a function , define as follows: Given , by  can be written uniquely as a finite sum . We set Note that is a well-defined function by the uniqueness of the equation .  We need to prove is an -module homomorphism. I'll just show it preserves scaling — the proof for addition is similar. Given and , we have for some , and hence . By definition of ,   Finally, for any we have where if and if . So by construction. This proves existence.  Let be another -module homomorphism such that for each . Given we have and hence and hence .   "
},
{
  "id": "remark-51",
  "level": "2",
  "url": "sec-free-mod.html#remark-51",
  "type": "Remark",
  "number": "11.69",
  "title": "",
  "body": " The uniqueness only uses that generates as an -module.  "
},
{
  "id": "cor-free-modules-with-equal-basis-elements-isomorphic",
  "level": "2",
  "url": "sec-free-mod.html#cor-free-modules-with-equal-basis-elements-isomorphic",
  "type": "Corollary",
  "number": "11.70",
  "title": "Free Modules with Equal Basis Elements Isomorphic.",
  "body": "Free Modules with Equal Basis Elements Isomorphic   If and are free -modules having bases of the same cardinality, then and are isomorphic -modules.  More precisely, if is a basis of and is a basis of and is a bijection of sets, then there is a unique -module isomorphism such that .    Let and be the -module homomorphisms induced by the bijection and its inverse , respectively, using . We'll show that and are mutual inverses. For this note that is an -module homomorphism and for every . Since the identity map is also an -module homomorphism such that for every , by the uniqueness clause in the , we have . Similarly .   "
},
{
  "id": "ex-mcong-rn-as-r-modules",
  "level": "2",
  "url": "sec-free-mod.html#ex-mcong-rn-as-r-modules",
  "type": "Example",
  "number": "11.71",
  "title": "<span class=\"process-math\">\\(M\\cong R^n\\)<\/span> as <span class=\"process-math\">\\(R\\)<\/span>-modules.",
  "body": "as -modules  If is a free -module that has a basis of cardinality , then as -modules. This holds since, as seen above, has a basis of cardinality , namely the standard basis .  More precisely, as the proof makes clear, if is an (ordered) basis of , there is an isomorphism that sends to .  "
},
{
  "id": "remark-52",
  "level": "2",
  "url": "sec-free-mod.html#remark-52",
  "type": "Remark",
  "number": "11.72",
  "title": "",
  "body": " Beware that the cardinality of a basis of a free modules is not an isomorphism invariant in general! There exist rings such that and are isomorphic -modules for all positive integers and .  "
},
{
  "id": "thm-uniqueness-of-rank-over-commutative-rings",
  "level": "2",
  "url": "sec-free-mod.html#thm-uniqueness-of-rank-over-commutative-rings",
  "type": "Theorem",
  "number": "11.73",
  "title": "Uniqueness of Rank over Commutative Rings.",
  "body": "Uniqueness of Rank over Commutative Rings   Let be a commutative ring such that and let be a free -module with bases and . Then and have the same rank, i.e. there exists a (non unique) bijection of sets joining them.    Let be a non-zero commutative ring and let be a free -module with two bases, and . We need to show and have the same cardinality. Since and are finite, by Example the assertion is equivalent to the following statement: \\begin{quote} For a non-zero commutative ring $R$, if there is an isomorphism $R^n \\cong R^m$ of $R$-modules for some integers $n$ and $m$, then $n = m$. \\end{quote}   I will prove this statement by taking it as already known that it holds in the special case when is a field. (We will prove it for fields later.)   Since is not the zero ring, it contains at least one maximal ideal . (This is proven using .) Recall that is a field by   Given an isomorphism of -modules, by Lemma we have an induced homomorphism of -module . Likewise, the inverse map induces a map . Also by that Lemma we have and similarly is the identity. That is, we have an isomorphism of -modules.  Next, I claim that there is an isomorphism of -modules. Define in the evident way (modding out by entry-wise). It is a surjective map of -modules with kernel and thus, by the First Isomorphism Theorem, it induces an isomorphism given by (where denotes taking the transpose). Now, what we have said so far only shows that is isomorphism of -modules, but it is easy to see that is in fact -linear (I'll leave that to you) and thus it is an isomorphism of -modules.  Putting the results proven so far together, we conclude that and are isomorphic as -modules. Since is a field and since we are assuming the result holds for fields, we deduce that .   "
},
{
  "id": "prop-r-bases",
  "level": "2",
  "url": "sec-free-mod.html#prop-r-bases",
  "type": "Exercise",
  "number": "11.74",
  "title": "Bases of <span class=\"process-math\">\\(R\\)<\/span>.",
  "body": "Bases of  Let be a non-zero, commutative ring. Prove that a subset of is a basis of as a module over itself if and only if for some unit of .  "
},
{
  "id": "prop-bases-of-ideals-in-commutative-rings",
  "level": "2",
  "url": "sec-free-mod.html#prop-bases-of-ideals-in-commutative-rings",
  "type": "Exercise",
  "number": "11.75",
  "title": "Bases of ideals in commutative rings.",
  "body": "Bases of ideals in commutative rings     Assume is a non-zero, commutative ring and is a non-zero ideal. Prove is free as an -module if and only if for a non-zerodivisor . (Recall that an element is a non-zerodivisor in provided and implies for all . )    Let be a field and . Let , the ideal consisting of all polynomials with constant term. Prove is not free as an -module.     "
},
{
  "id": "sec-vecbasis",
  "level": "1",
  "url": "sec-vecbasis.html",
  "type": "Section",
  "number": "12.1",
  "title": "Dimension",
  "body": "Dimension  and the Dimension Theorem    His words span rivers and mountains, but his thoughts are still only six inches long.   E.B. White   Span   In keeping with standard convention, we use the term span instead of submodule generated by , but they mean exactly the same thing: for a subset of an -vector space , the span of is As with modules over general rings, the span of a subset of a vector space is a sub-vector space (i.e., sub-module). span     Linear Independence and Span   Suppose is a linearly independent subset of an -vector space and , then is also linearly independent.    We need to prove that every finite subset of is linearly independent. Let be a list of distinct elements of and suppose for some . If for all , then for all since is linearly independent. Without loss, say . If , then , contrary to the assumption. So we must have . But then for all by the same reasoning as in the first case.     The only place where the fact that the ring of scalars is a field is to know that has a multiplicative inverse when . In particular, holds when is a division ring too.   To prove that every vector space has a basis, we will need to use .  Finding Intermediate Bases   Let be an -vector space and assume are subsets such that is linearly independent and spans . Then there is a subset such that and is a basis of     Let denote the collection of all subsets of such that and is linearly independent. We make into a poset by the order relation , set containment.  We note that .  Let be any totally ordered subset of . If is empty, then is (vacuously) bounded above by .  Assume is non-empty. Let . I claim . Given , for each we have for some . Since is totally ordered, one of contains all the others and hence it contains all the 's. Since each is linearly independent, this shows are linearly independent. We have shown that every finite subset of is linearly independent, and hence is linearly independent. Since is non-empty, . Since each member of is contained in , . Thus, , and it is an upper bound for .  We may thus apply to conclude that has at least one maximal element, . I claim is a basis of . Note that is linearly independent and by construction. We need to show that it spans . Suppose not. Since spans , if , then would have to be all of . (For note that if and , then for any we may write for and with and hence , which implies .) Since we are assuming , there must be at least one such that . Set . Then and, by , is linearly independent. This shows that is an element of that is strictly bigger than , contrary to the maximality of . So, must span and hence it is a basis.    Every Vector Space has a Basis   Every -vector space has a basis. Moreover, every linearly independent subset of is contained in some basis, and every set of vectors that spans contains some basis.    For this first part, apply the with and . For the second and third, use arbitrary and and and arbitrary, respectively.    In particular, this says that every module over a field is free!    has a basis as a -Vector Space has a basis as a -vector space. Just don't ask me what it looks like.   Basis of Subspaces Extent   Suppose is a field an is a subspace (i.e., submodule) of the -vector space (i.e., -module) . Then every basis of extends to a basis of - that is, if is a basis of then there exists a basis of such that is a subset of .    Apply with and . (Since is a basis of , it is linearly independent, and observe that remains linearly independent when regarded as a subset of .)     It is not true that, with the notation of , if is a basis of then there exists a basis of such that is a subset of . For instance, take , , and the subspace spanned by .   In the language of modules, a finite dimensional vector space is just a finitely generated -module.  The following is an essential property of vector spaces that eventually will allow us to compare bases in terms of size.  Exchange Lemma  exchange lemma   Let be a field, let be a basis of an -vector space , and let be any finite set of linearly independent vectors in . Then there are distinct vectors in , such that is also a basis .    Let . As noted, the sublemma establishes the case of the Exchange Lemma. The general case proceeds recursively:  Suppose that for some , we have found such that is a basis for some . We need to show we can “swap out one more''; that is, we need to prove there is a such that is also a basis.  Since is a basis, there is a (unique) equation of the form with and . Now, there must be at least one that is not in , for otherwise we would have , contrary to being linearly independent. Let for such an . Then by the sublemma is a basis of .     The also holds for any division ring (using the exact same proof).   Dimension   The dimension of a vector space , denoted or , is the cardinality of any of its bases. A vector space is finite dimensional if there is spanned by a finite subset. dimension (vector space)  finite dimensional (vector space)      This is the same as the rank of as an -module.   But what if two bases of have different cardinalities? I'm so glad you asked.  Dimension Theorem  dimension theorem   Any two bases of the same vector space have the same dimension.    We will only prove this in the case of finite dimensional vector spaces, but it is indeed true in general.  Suppose is a field and is a finite dimensional -vector space. Then it has a finite basis . Let be any other basis. (Note that we cannot assume is necessarily finite.) For any non-negative integer , suppose is any -element subset of . Then is linearly independent and so, by the Exchange Lemma, there is an -element subset of such that is also a basis of . In particular, . Since this holds for all , we conclude . By symmetry, and hence .    Dimension of in       Consider , and define rules for addition and scaling degree-wise in the evident way.  It is not hard to see is a -vector space. It can be identified with the collection of all sequences of real numbers. One might be interested in a basis for this vector space. At first glance the most obvious choice would be , where is the sequence with a in the -th position and 's everywhere else.  However, this set does not span as can not be represented as a finite linear combination of these elements. (It turns out that is the basis for the direct sum , which may be identified with all sequences having only a finite number of non-zero terms.)  Now, since we know since is not in , we have that is a linearly independent set. However, this does not span either as is not in the span of this set. We know that has a basis, but it can be shown that no countable collection of vectors forms a basis for this space, in fact . An explicit basis of this vector space is impossible to describe.    Classification Theorem and Rank-Nullity    O, my offence is rank, it smells to heaven.   William Shakespeare   Classification Theorem  classification of finitely generated vector spaces   Let be a field.   Every finitely generated vector space over is isomorphic to for .    For any if and only if .          Let be a finite dimensional -vector space. Then has a finite spanning set and by there is a basis for . Notice that is necessarily finite and . Set and . By the , there is a linear transformation such that as well as a linear transformation such that . Then both and are linear transformation which agree with the identity map on a basis. Hence by the uniqueness part of we have and . Therefore, these maps are the desired isomorphisms.    Let be a vector space isomorphism and let be a basis of . We claim that is a basis for . Indeed, if since is injective. But is linearly independent, so we must have for all . If , then since spans we have for some . Thus which shows spans . By the , we have        Finite Dimensional Vector Spaces over the same Field   Two finite dimensional vector spaces and over the same field are isomorphic if and only if .    By the , and are both of the form and , while if and only if .    We now deduce some formulas that relate the dimensions of various vector spaces.   Here the dimension of a vector space is understood to be either a nonnegative integer or , and the arithmetic of the formula is understood to follow the rules for any .   Dimension and Subspaces   Let be a field and let be a subspace of a finite dimensional -vector space . Then     Pick a basis of . Regarded as a subset of , remains linearly independent and thus it may be extended to a basis of by Corollary . Let us write this basis of as with .  Let . I claim that is a basis of .  Given we have for some and scalars . Since for all , we have . This proves spans. Say for some . Then and hence , whence . Since is linearly independent, and for all . This proves is linearly independent.  We have with the second equality holding since and are disjoint.     Suitably interpreted, this is valid even if is infinite dimensional.   Nullspace   Let be a linear transformation. The nullspace of is . The nullity of is . nullspace  nullity     Recalling , we have the following.  Rank-Nullity Theorem  rank-nullity theorem   Let be a field and an -linear transformation between -vector spaces and , and assume is finite dimensional. Then or equivalently     By the we have , thus . By we have      Suitably interpreted, this is valid even if is infinite dimensional.    "
},
{
  "id": "def-span",
  "level": "2",
  "url": "sec-vecbasis.html#def-span",
  "type": "Definition",
  "number": "12.1",
  "title": "Span.",
  "body": "Span   In keeping with standard convention, we use the term span instead of submodule generated by , but they mean exactly the same thing: for a subset of an -vector space , the span of is As with modules over general rings, the span of a subset of a vector space is a sub-vector space (i.e., sub-module). span    "
},
{
  "id": "lem-linear-independence-and-span",
  "level": "2",
  "url": "sec-vecbasis.html#lem-linear-independence-and-span",
  "type": "Lemma",
  "number": "12.2",
  "title": "Linear Independence and Span.",
  "body": "Linear Independence and Span   Suppose is a linearly independent subset of an -vector space and , then is also linearly independent.    We need to prove that every finite subset of is linearly independent. Let be a list of distinct elements of and suppose for some . If for all , then for all since is linearly independent. Without loss, say . If , then , contrary to the assumption. So we must have . But then for all by the same reasoning as in the first case.   "
},
{
  "id": "remark-53",
  "level": "2",
  "url": "sec-vecbasis.html#remark-53",
  "type": "Remark",
  "number": "12.3",
  "title": "",
  "body": " The only place where the fact that the ring of scalars is a field is to know that has a multiplicative inverse when . In particular, holds when is a division ring too.  "
},
{
  "id": "thm-finding-intermediate-bases",
  "level": "2",
  "url": "sec-vecbasis.html#thm-finding-intermediate-bases",
  "type": "Theorem",
  "number": "12.4",
  "title": "Finding Intermediate Bases.",
  "body": "Finding Intermediate Bases   Let be an -vector space and assume are subsets such that is linearly independent and spans . Then there is a subset such that and is a basis of     Let denote the collection of all subsets of such that and is linearly independent. We make into a poset by the order relation , set containment.  We note that .  Let be any totally ordered subset of . If is empty, then is (vacuously) bounded above by .  Assume is non-empty. Let . I claim . Given , for each we have for some . Since is totally ordered, one of contains all the others and hence it contains all the 's. Since each is linearly independent, this shows are linearly independent. We have shown that every finite subset of is linearly independent, and hence is linearly independent. Since is non-empty, . Since each member of is contained in , . Thus, , and it is an upper bound for .  We may thus apply to conclude that has at least one maximal element, . I claim is a basis of . Note that is linearly independent and by construction. We need to show that it spans . Suppose not. Since spans , if , then would have to be all of . (For note that if and , then for any we may write for and with and hence , which implies .) Since we are assuming , there must be at least one such that . Set . Then and, by , is linearly independent. This shows that is an element of that is strictly bigger than , contrary to the maximality of . So, must span and hence it is a basis.   "
},
{
  "id": "cor-every-vector-space-has-a-basis",
  "level": "2",
  "url": "sec-vecbasis.html#cor-every-vector-space-has-a-basis",
  "type": "Corollary",
  "number": "12.5",
  "title": "Every Vector Space has a Basis.",
  "body": "Every Vector Space has a Basis   Every -vector space has a basis. Moreover, every linearly independent subset of is contained in some basis, and every set of vectors that spans contains some basis.    For this first part, apply the with and . For the second and third, use arbitrary and and and arbitrary, respectively.   "
},
{
  "id": "example-88",
  "level": "2",
  "url": "sec-vecbasis.html#example-88",
  "type": "Example",
  "number": "12.6",
  "title": "",
  "body": "  has a basis as a -Vector Space has a basis as a -vector space. Just don't ask me what it looks like.  "
},
{
  "id": "cor-basis-of-subspaces-extent",
  "level": "2",
  "url": "sec-vecbasis.html#cor-basis-of-subspaces-extent",
  "type": "Corollary",
  "number": "12.7",
  "title": "Basis of Subspaces Extent.",
  "body": "Basis of Subspaces Extent   Suppose is a field an is a subspace (i.e., submodule) of the -vector space (i.e., -module) . Then every basis of extends to a basis of - that is, if is a basis of then there exists a basis of such that is a subset of .    Apply with and . (Since is a basis of , it is linearly independent, and observe that remains linearly independent when regarded as a subset of .)   "
},
{
  "id": "remark-54",
  "level": "2",
  "url": "sec-vecbasis.html#remark-54",
  "type": "Remark",
  "number": "12.8",
  "title": "",
  "body": " It is not true that, with the notation of , if is a basis of then there exists a basis of such that is a subset of . For instance, take , , and the subspace spanned by .  "
},
{
  "id": "lem-exchange-lemma",
  "level": "2",
  "url": "sec-vecbasis.html#lem-exchange-lemma",
  "type": "Lemma",
  "number": "12.9",
  "title": "Exchange Lemma.",
  "body": "Exchange Lemma  exchange lemma   Let be a field, let be a basis of an -vector space , and let be any finite set of linearly independent vectors in . Then there are distinct vectors in , such that is also a basis .    Let . As noted, the sublemma establishes the case of the Exchange Lemma. The general case proceeds recursively:  Suppose that for some , we have found such that is a basis for some . We need to show we can “swap out one more''; that is, we need to prove there is a such that is also a basis.  Since is a basis, there is a (unique) equation of the form with and . Now, there must be at least one that is not in , for otherwise we would have , contrary to being linearly independent. Let for such an . Then by the sublemma is a basis of .   "
},
{
  "id": "remark-55",
  "level": "2",
  "url": "sec-vecbasis.html#remark-55",
  "type": "Remark",
  "number": "12.10",
  "title": "",
  "body": " The also holds for any division ring (using the exact same proof).  "
},
{
  "id": "def-dimension-vector-space",
  "level": "2",
  "url": "sec-vecbasis.html#def-dimension-vector-space",
  "type": "Definition",
  "number": "12.11",
  "title": "Dimension.",
  "body": "Dimension   The dimension of a vector space , denoted or , is the cardinality of any of its bases. A vector space is finite dimensional if there is spanned by a finite subset. dimension (vector space)  finite dimensional (vector space)    "
},
{
  "id": "remark-56",
  "level": "2",
  "url": "sec-vecbasis.html#remark-56",
  "type": "Remark",
  "number": "12.12",
  "title": "",
  "body": " This is the same as the rank of as an -module.  "
},
{
  "id": "thm-dimension",
  "level": "2",
  "url": "sec-vecbasis.html#thm-dimension",
  "type": "Theorem",
  "number": "12.13",
  "title": "Dimension Theorem.",
  "body": "Dimension Theorem  dimension theorem   Any two bases of the same vector space have the same dimension.    We will only prove this in the case of finite dimensional vector spaces, but it is indeed true in general.  Suppose is a field and is a finite dimensional -vector space. Then it has a finite basis . Let be any other basis. (Note that we cannot assume is necessarily finite.) For any non-negative integer , suppose is any -element subset of . Then is linearly independent and so, by the Exchange Lemma, there is an -element subset of such that is also a basis of . In particular, . Since this holds for all , we conclude . By symmetry, and hence .   "
},
{
  "id": "ex-dimension-of-fn-in-f",
  "level": "2",
  "url": "sec-vecbasis.html#ex-dimension-of-fn-in-f",
  "type": "Example",
  "number": "12.14",
  "title": "Dimension of <span class=\"process-math\">\\(F^n\\)<\/span> in <span class=\"process-math\">\\(F\\)<\/span>.",
  "body": "Dimension of in     "
},
{
  "id": "exe-rn",
  "level": "2",
  "url": "sec-vecbasis.html#exe-rn",
  "type": "Example",
  "number": "12.15",
  "title": "<span class=\"process-math\">\\(\\R^\\N\\)<\/span>.",
  "body": " Consider , and define rules for addition and scaling degree-wise in the evident way.  It is not hard to see is a -vector space. It can be identified with the collection of all sequences of real numbers. One might be interested in a basis for this vector space. At first glance the most obvious choice would be , where is the sequence with a in the -th position and 's everywhere else.  However, this set does not span as can not be represented as a finite linear combination of these elements. (It turns out that is the basis for the direct sum , which may be identified with all sequences having only a finite number of non-zero terms.)  Now, since we know since is not in , we have that is a linearly independent set. However, this does not span either as is not in the span of this set. We know that has a basis, but it can be shown that no countable collection of vectors forms a basis for this space, in fact . An explicit basis of this vector space is impossible to describe.  "
},
{
  "id": "thm-fg-vs-classification",
  "level": "2",
  "url": "sec-vecbasis.html#thm-fg-vs-classification",
  "type": "Theorem",
  "number": "12.16",
  "title": "Classification Theorem.",
  "body": "Classification Theorem  classification of finitely generated vector spaces   Let be a field.   Every finitely generated vector space over is isomorphic to for .    For any if and only if .          Let be a finite dimensional -vector space. Then has a finite spanning set and by there is a basis for . Notice that is necessarily finite and . Set and . By the , there is a linear transformation such that as well as a linear transformation such that . Then both and are linear transformation which agree with the identity map on a basis. Hence by the uniqueness part of we have and . Therefore, these maps are the desired isomorphisms.    Let be a vector space isomorphism and let be a basis of . We claim that is a basis for . Indeed, if since is injective. But is linearly independent, so we must have for all . If , then since spans we have for some . Thus which shows spans . By the , we have       "
},
{
  "id": "cor-dim-iff-iso",
  "level": "2",
  "url": "sec-vecbasis.html#cor-dim-iff-iso",
  "type": "Corollary",
  "number": "12.17",
  "title": "Finite Dimensional Vector Spaces over the same Field.",
  "body": "Finite Dimensional Vector Spaces over the same Field   Two finite dimensional vector spaces and over the same field are isomorphic if and only if .    By the , and are both of the form and , while if and only if .   "
},
{
  "id": "thm-dimension-and-subspaces",
  "level": "2",
  "url": "sec-vecbasis.html#thm-dimension-and-subspaces",
  "type": "Theorem",
  "number": "12.18",
  "title": "Dimension and Subspaces.",
  "body": "Dimension and Subspaces   Let be a field and let be a subspace of a finite dimensional -vector space . Then     Pick a basis of . Regarded as a subset of , remains linearly independent and thus it may be extended to a basis of by Corollary . Let us write this basis of as with .  Let . I claim that is a basis of .  Given we have for some and scalars . Since for all , we have . This proves spans. Say for some . Then and hence , whence . Since is linearly independent, and for all . This proves is linearly independent.  We have with the second equality holding since and are disjoint.   "
},
{
  "id": "remark-57",
  "level": "2",
  "url": "sec-vecbasis.html#remark-57",
  "type": "Remark",
  "number": "12.19",
  "title": "",
  "body": " Suitably interpreted, this is valid even if is infinite dimensional.  "
},
{
  "id": "def-nullspace",
  "level": "2",
  "url": "sec-vecbasis.html#def-nullspace",
  "type": "Definition",
  "number": "12.20",
  "title": "Nullspace.",
  "body": "Nullspace   Let be a linear transformation. The nullspace of is . The nullity of is . nullspace  nullity    "
},
{
  "id": "thm-rank-nullity",
  "level": "2",
  "url": "sec-vecbasis.html#thm-rank-nullity",
  "type": "Theorem",
  "number": "12.21",
  "title": "Rank-Nullity Theorem.",
  "body": "Rank-Nullity Theorem  rank-nullity theorem   Let be a field and an -linear transformation between -vector spaces and , and assume is finite dimensional. Then or equivalently     By the we have , thus . By we have    "
},
{
  "id": "remark-58",
  "level": "2",
  "url": "sec-vecbasis.html#remark-58",
  "type": "Remark",
  "number": "12.22",
  "title": "",
  "body": " Suitably interpreted, this is valid even if is infinite dimensional.  "
},
{
  "id": "sec-cob",
  "level": "1",
  "url": "sec-cob.html",
  "type": "Section",
  "number": "12.2",
  "title": "Linear Transformations and Change of Basis",
  "body": "Linear Transformations and Change of Basis  Matrices of Linear Transformations    No one can be told what the matrix is. You have to see it for yourself.   Morpheus    Recall that when is a field an -module homomorphism is called a -linear transformation. Since every -vector space has a basis, every linear transformation between finite dimensional vector spaces may be represented by a matrix, as we noted before.   Matrix of Free Module Homomorphism   Let be a non-zero commutative ring and let , be -modules of finite rank and , respectively. Let and be ordered bases of and . Given an -module homomorphism , we define elements for and by the formulas The matrix is said to represent the homomorphism with respect to the bases and . In the case that and are -vector spaces, the matrix is called the matrix of the linear transformation  with respect to the bases and . matrix of a linear transformation  matrix of a free module homomorphism     Identity Automorphism of Free -Module  If is the identity automorphism of an -dimensional free -module , then for any basis of we have for all and hence    Matrix Representing the Derivative Operator  Let denote the the -vector space of polynomials of degree at most (including the zero polynomial) and consider the linear transformation given by taking the derivative . Let . Then     Change of Basis    Change brings opportunity.   Nido R. Qubein   Change of Basis Matrix   Let be a finitely generated free module over a commutative ring , and let and be bases of . Let be the identity map on . Then is a matrix called the change of basis matrix from to . change of basis matrix      In we will show that is invertible with inverse .   CoB and  Consider , let and be bases of . We calculate the change of basis matrix. We have Thus, the change of basis matrix is given by    CoB and Identity   If are finitely generated free -modules spaces with ordered bases , , and , and if and are -module homomorphisms, then     Given , we have so .    Similar Matrices   Let be a finitely generated free module over a commutative ring . Two -module homomorphisms are similar if there is a bijective linear transformation such that . Two matrices and with entries in are similar if there is an invertible matrix such that . similar matrices  similar -module homomorphisms      For elements , the notions of similar and conjugate are the same.   Similar CoB Matrices   Let be finitely generated free modules over a commutative ring , let and be bases of , let and be bases of , and let be a homomorphism. Then In particular, if is an -module homomorphism, then and are similar.    Since , by we have Setting , and we have . Notice that is the identity matrix, so the previous formula says that Setting , we notice that the previous identity gives .  Now set and to obtain     We now come to certain special changes of basis and their matrices:  Elementary Basis Change Operations   Let be a commutative ring with , let be a free -module of finite rank , and let be an ordered basis for . An elementary basis change operation on the basis is one of the following three types of operations:   (Type I) Replacing by for some and some .    (Type II) Replacing by for some and some unit of ,    (Type III) Swapping the positions of and for some .    elementary basis change operation     Elementary Row Operations   Let be a commutative ring with . An elementary row (column) operation on a matrix is one of the following three types of operations: elementary row operation  elementary column operation    (Type I) Adding an element of times a row (column) of to a different row column of .    (Type II) Multiplying a row (column) of by a unit of .    (Type III) Interchanging two rows (columns) of .       Elementary Matrix   Let be a commutative ring with . An elementary matrix over is an matrix obtained from by applying a single elementary column operation (or, equivalently, a single elementary column operation). In more detail: elementary matrix    (Type I) For and with , let be the type I elementary matrix with 's on the diagonal, in the position, and everywhere else.    (Type II) For and let be the type II elementary matrix with entry , entry for all , and everywhere else.    (Type III) For with , let be the type III elementary matrix with in the and positions and in the positions for all , and 0 in all other entries.        "
},
{
  "id": "remark-59",
  "level": "2",
  "url": "sec-cob.html#remark-59",
  "type": "Remark",
  "number": "12.23",
  "title": "",
  "body": " Recall that when is a field an -module homomorphism is called a -linear transformation. Since every -vector space has a basis, every linear transformation between finite dimensional vector spaces may be represented by a matrix, as we noted before.  "
},
{
  "id": "def-matrix-of-free-module-homomorphism",
  "level": "2",
  "url": "sec-cob.html#def-matrix-of-free-module-homomorphism",
  "type": "Definition",
  "number": "12.24",
  "title": "Matrix of Free Module Homomorphism.",
  "body": "Matrix of Free Module Homomorphism   Let be a non-zero commutative ring and let , be -modules of finite rank and , respectively. Let and be ordered bases of and . Given an -module homomorphism , we define elements for and by the formulas The matrix is said to represent the homomorphism with respect to the bases and . In the case that and are -vector spaces, the matrix is called the matrix of the linear transformation  with respect to the bases and . matrix of a linear transformation  matrix of a free module homomorphism    "
},
{
  "id": "ex-identity-automorphism-of-free-r-module",
  "level": "2",
  "url": "sec-cob.html#ex-identity-automorphism-of-free-r-module",
  "type": "Example",
  "number": "12.25",
  "title": "Identity Automorphism of Free <span class=\"process-math\">\\(R\\)<\/span>-Module.",
  "body": "Identity Automorphism of Free -Module  If is the identity automorphism of an -dimensional free -module , then for any basis of we have for all and hence   "
},
{
  "id": "ex-r-vector-space-of-polynomials-p_n",
  "level": "2",
  "url": "sec-cob.html#ex-r-vector-space-of-polynomials-p_n",
  "type": "Example",
  "number": "12.26",
  "title": "Matrix Representing the Derivative Operator.",
  "body": "Matrix Representing the Derivative Operator  Let denote the the -vector space of polynomials of degree at most (including the zero polynomial) and consider the linear transformation given by taking the derivative . Let . Then   "
},
{
  "id": "def-change-of-basis-matrix",
  "level": "2",
  "url": "sec-cob.html#def-change-of-basis-matrix",
  "type": "Definition",
  "number": "12.27",
  "title": "Change of Basis Matrix.",
  "body": "Change of Basis Matrix   Let be a finitely generated free module over a commutative ring , and let and be bases of . Let be the identity map on . Then is a matrix called the change of basis matrix from to . change of basis matrix    "
},
{
  "id": "remark-60",
  "level": "2",
  "url": "sec-cob.html#remark-60",
  "type": "Remark",
  "number": "12.28",
  "title": "",
  "body": " In we will show that is invertible with inverse .  "
},
{
  "id": "exe-cob-and-p_n",
  "level": "2",
  "url": "sec-cob.html#exe-cob-and-p_n",
  "type": "Example",
  "number": "12.29",
  "title": "CoB and <span class=\"process-math\">\\(P_n\\)<\/span>.",
  "body": "CoB and  Consider , let and be bases of . We calculate the change of basis matrix. We have Thus, the change of basis matrix is given by   "
},
{
  "id": "lem-cob-and-identity",
  "level": "2",
  "url": "sec-cob.html#lem-cob-and-identity",
  "type": "Lemma",
  "number": "12.30",
  "title": "CoB and Identity.",
  "body": "CoB and Identity   If are finitely generated free -modules spaces with ordered bases , , and , and if and are -module homomorphisms, then     Given , we have so .   "
},
{
  "id": "def-similar-matrices",
  "level": "2",
  "url": "sec-cob.html#def-similar-matrices",
  "type": "Definition",
  "number": "12.31",
  "title": "Similar Matrices.",
  "body": "Similar Matrices   Let be a finitely generated free module over a commutative ring . Two -module homomorphisms are similar if there is a bijective linear transformation such that . Two matrices and with entries in are similar if there is an invertible matrix such that . similar matrices  similar -module homomorphisms    "
},
{
  "id": "remark-61",
  "level": "2",
  "url": "sec-cob.html#remark-61",
  "type": "Remark",
  "number": "12.32",
  "title": "",
  "body": " For elements , the notions of similar and conjugate are the same.  "
},
{
  "id": "thm-similar-cob",
  "level": "2",
  "url": "sec-cob.html#thm-similar-cob",
  "type": "Theorem",
  "number": "12.33",
  "title": "Similar CoB Matrices.",
  "body": "Similar CoB Matrices   Let be finitely generated free modules over a commutative ring , let and be bases of , let and be bases of , and let be a homomorphism. Then In particular, if is an -module homomorphism, then and are similar.    Since , by we have Setting , and we have . Notice that is the identity matrix, so the previous formula says that Setting , we notice that the previous identity gives .  Now set and to obtain    "
},
{
  "id": "def-elementary-basis-change-operations",
  "level": "2",
  "url": "sec-cob.html#def-elementary-basis-change-operations",
  "type": "Definition",
  "number": "12.34",
  "title": "Elementary Basis Change Operations.",
  "body": "Elementary Basis Change Operations   Let be a commutative ring with , let be a free -module of finite rank , and let be an ordered basis for . An elementary basis change operation on the basis is one of the following three types of operations:   (Type I) Replacing by for some and some .    (Type II) Replacing by for some and some unit of ,    (Type III) Swapping the positions of and for some .    elementary basis change operation    "
},
{
  "id": "def-elementary-row-operations",
  "level": "2",
  "url": "sec-cob.html#def-elementary-row-operations",
  "type": "Definition",
  "number": "12.35",
  "title": "Elementary Row Operations.",
  "body": "Elementary Row Operations   Let be a commutative ring with . An elementary row (column) operation on a matrix is one of the following three types of operations: elementary row operation  elementary column operation    (Type I) Adding an element of times a row (column) of to a different row column of .    (Type II) Multiplying a row (column) of by a unit of .    (Type III) Interchanging two rows (columns) of .      "
},
{
  "id": "def-elementary-matrix",
  "level": "2",
  "url": "sec-cob.html#def-elementary-matrix",
  "type": "Definition",
  "number": "12.36",
  "title": "Elementary Matrix.",
  "body": "Elementary Matrix   Let be a commutative ring with . An elementary matrix over is an matrix obtained from by applying a single elementary column operation (or, equivalently, a single elementary column operation). In more detail: elementary matrix    (Type I) For and with , let be the type I elementary matrix with 's on the diagonal, in the position, and everywhere else.    (Type II) For and let be the type II elementary matrix with entry , entry for all , and everywhere else.    (Type III) For with , let be the type III elementary matrix with in the and positions and in the positions for all , and 0 in all other entries.      "
},
{
  "id": "sec-modpres",
  "level": "1",
  "url": "sec-modpres.html",
  "type": "Section",
  "number": "13.1",
  "title": "Finitely Presented Modules",
  "body": "Finitely Presented Modules  Finitely Presented Modules    The success of your presentation will be judged not by the knowledge you send but by what the listener receives.   Lily Walters   -Module Presentation   Let be a non-zero commutative ring, let , and let be the -module homomorphism represented by with respect to the standard bases; that is, define . The - module presented by  is the -module .  Equivalently, the module presented by is where are the columns of .      The -module is presented by     Notice . Notice here we abused notation and wrote instead of the matrix .    Conversely, we might be given a matrix and ask about what module it represents; one thing to keep in mind is that some presentations might be inefficient, either by having more generators or more relations than necessary. We want to answer to key questions: given a presentation for a module, how to find a more efficient presentation; and how to decide if two different presentations actually give us isomorphic modules. Keeping these goals in mind, let's try a more elaborate example.  -Module Presentation  Consider the matrix What -module is presented by ? Formally, is the quotient module , where is defined by . Since is generated by its standard basis elements , we deduce as in that is generated by the cosets of the . To keep the notation short, we set .  Let and note that is the submodule of generated by the columns of : Since maps to 0 under the quotient map , the relations of can be written as We can now see that this is a rather inefficient presentation, since we can clearly use the first equation to solve for for . This implies that can be generated using only and , that is This eliminates the first equation and the latter two become Now we can also eliminate , i.e leaving just two generators that satisfy   Another way to do this is to look at the matrix and use elementary row operations to \"make zeros\" on the 1st and 2nd columns, as follows:   Eliminating the generators and amounts to dropping the first two columns (which are the 3rd and 4th standard basis vectors) as well as the last two rows. As we will prove soon, this shows that the -module presented by is isomorphic to the -module presented by     We can go further. Set . Then and also form a generating set of . The relation on translates to     given by the matrix     Note that we have done a row operation (subtract twice row 1 from row 2 ) to get from to . Continuing in this fashion by subtracting 12 row 2 from row 1 we also form     The last matrix presents the module with generators , where     and relation . This module is isomorphic to our original module . As we will see, this proves . An explicit isomorphism between and is given by sending by the unique -module homomorphism defined by     Now notice that the kernel of this homomorphism is the submodule . Then the first isomorphism theorem gives .   Matrices, Modules, and Isomorphisms   Let be a non-zero commutative ring and let and for some . Then and present isomorphic -modules if can be obtained from by any finite sequence of operations of the following form:   an elementary row operation,    an elementary column operation,    deletion of the -th column and -th row of a matrix whose -th column is the vector ,    the reverse of (3),    deletion of a column of all 's,    the reverse of (5).       Note: This proof was not covered in class. Assume is obtained from by a single one of the steps listed above. We need to prove that there is an isomorphism of -modules.   In this case, for some elementary matrix . More generally, let be any invertible matrix such that . Then is an isomorphism and it maps bijectively onto . It follows that the kernel of the composition is and hence by the first isomorphism theorem it induces an isomorphism     In this case, for some elementary matrix . More generally, assume is any invertible matrix such that . Since is an isomorphism, we have and so . (For this one we get equality, not merely an isomorphism.)    For notational simplicity, let us assume ; that is, the first column of is and is obtained by deleting the first row and column of , giving a matrix. So where denotes some row vector and denotes a column of all 's. Let and be projection onto the last and components, respectively. Because of the nature of and , the diagram (page 40 in notes) commutes. Moreover, the kernel of is and the kernel of is , and since the first column of is , maps the kernel of bijectively onto the kernel of . A “diagram chase'' shows that . In detail: Since the diagram commutes, and hence induces an -module homomorphism (by the -th isomorphism theorem). Since is onto, so is . Suppose . So, . Say . Since is onto, for some . Then and thus . As noted above, maps onto and hence for some vector . This proves and hence that in . This proves is one-to-one.    The columns of generate the same submodule of as do the columns of , and thus and .    Since the isomorphism relation is reflexive, the statements of parts 3. & 5. show that parts 4.& 6. are true as well.        The converse is true for some rings , including Euclidean domains.    In fact, if and are equivalent matrices, then , as I shall prove below. This implies both (1) and (2) from the Theorem.   Diagonal Presentation   Suppose is a commutative ring and is a matrix such that for all and set for all . If then and if then     Assume and define to be the map sending to where for . (I.e., is the unique -map sending the -th standard basis vector to with in the -th position, for , and to itself for .) Then is clearly onto and the kernel of is the set of those tuples such that for some for all and for . Given such a tuple, This proves is contained Arguing backwards we see that the opposite containment also holds, so that in fact .  By the First Isomorphism Theorem, If then, by deleting columns of all 's, we may reduce to the case when , which is included in the first case.     Modules in Noetherian Rings    A chain is no stronger than its weakest link.   William James    We now address the question of which modules have finite presentations. It is clear than any such module must be finitely generated (since the cosets of generate for any matrix ). If is finitely generated, say by elements, then we can find a surjective -module homomorphism Provided the kernel of is also finitely generated, say by elements, then we may find a surjection The composition is a map between free -modules and is thus equal to for some matrix . Clearly and hence by the first isomorphism theorem so that is finitely presented.  So the real question is: For a given ring , is it the case that for all , every submodule of is finitely generated? The answer is “no'' in general, but it does hold for many rings of interest:   Noetherian Rings   Suppose is a commutative ring. The following conditions are equivalent:    has the ascending chain condition on ideals.    Every ideal of is finitely generated — i.e., for every ideal , there exists a finite set of elements in such that . In this case we say is Noetherian .       Assume every ideal is finitely generated and that such a chain is given. Let . Then it is easy to see that is an ideal. (In detail, for we have for some and hence .  If , then and for some and hence there is a such that . It follows that . Finally .) Thus by assumption is finitely generated, say for some .  Each belongs to one of the 's and hence, since there are only a finite number of such elements and ideas are nested, there is an such that . It follows that and hence .  Assume has the acc for ideals and let be any ideal. Pick any element and set . If we are done. If not, pick and set . If we are done and if not pick and let . In this way we form a strictly ascending chain , and this process cannot be continued forever since has the acc. When it terminates, we have for some and thus is finitely generated.    Finitely Generated Modules in Noetherian Rings   If is a noetherian commutative ring, then every submodule of a finitely generated module is again finitely generated.    I will just prove the following special case (since it is all we need): For each , every submodule of is finitely generated. The base case holds by definition (and Lemma ), since a submodule of is the same thing as an ideal.  Assume and the result holds for . Let be any submodule of . Define to be the projection onto the last component of . The kernel of may be identified with and so is a submodule of , and it is therefore finitely generated by assumption. The image of under is a submodule of , that is, an ideal of , and so it too is finitely generated by assumption (and Lemma ).  Furthermore, by the first isomorphism theorem is also finitely generated. By a homework problem, we deduce that is a finitely generated module.  % I'll just sketch the general case (which I don't think we'll actually need): let be any finitely generated -module and any submodule. % Since is finitely generated, there exists a surjective -module homomorphism for some . Then is a submodule of and % hence it is finitely generated by the case we already proved. Moreover, induces a surjective -module homomorphism , % and hence is isomorphic to a quotient of a finitely generated -module and thus it is also finitely generated.    The converse is also true.   If is not noetherian, there there exists an ideal that is not finitely generated (by ). This gives an example of a non-finitely-generated submodule, namely , of a finitely generated module, namely .   Finite Presentations in Noetherian Rings   Any finitely generated module over a noetherian ring has a finite presentation; that is, given such a module over such a ring, there exists an matrix in and an isomorphism     We basically already proved this, but let me recap it:  If is finitely generated, then for some we can find a surjective -module homomorphism Since we assume is noetherian, the kernel of is also finitely generated by , and so we may find a surjection of -modules for some . The composition is equal to for some matrix . Since , the gives an isomorphism      "
},
{
  "id": "def-module-presentation",
  "level": "2",
  "url": "sec-modpres.html#def-module-presentation",
  "type": "Definition",
  "number": "13.1",
  "title": "<span class=\"process-math\">\\(R\\)<\/span>-Module Presentation.",
  "body": "-Module Presentation   Let be a non-zero commutative ring, let , and let be the -module homomorphism represented by with respect to the standard bases; that is, define . The - module presented by  is the -module .  Equivalently, the module presented by is where are the columns of .   "
},
{
  "id": "example-94",
  "level": "2",
  "url": "sec-modpres.html#example-94",
  "type": "Example",
  "number": "13.2",
  "title": "",
  "body": "  The -module is presented by     Notice . Notice here we abused notation and wrote instead of the matrix .   "
},
{
  "id": "exe-z-module-presentation",
  "level": "2",
  "url": "sec-modpres.html#exe-z-module-presentation",
  "type": "Example",
  "number": "13.3",
  "title": "<span class=\"process-math\">\\(\\Z\\)<\/span>-Module Presentation.",
  "body": "-Module Presentation  Consider the matrix What -module is presented by ? Formally, is the quotient module , where is defined by . Since is generated by its standard basis elements , we deduce as in that is generated by the cosets of the . To keep the notation short, we set .  Let and note that is the submodule of generated by the columns of : Since maps to 0 under the quotient map , the relations of can be written as We can now see that this is a rather inefficient presentation, since we can clearly use the first equation to solve for for . This implies that can be generated using only and , that is This eliminates the first equation and the latter two become Now we can also eliminate , i.e leaving just two generators that satisfy   Another way to do this is to look at the matrix and use elementary row operations to \"make zeros\" on the 1st and 2nd columns, as follows:   Eliminating the generators and amounts to dropping the first two columns (which are the 3rd and 4th standard basis vectors) as well as the last two rows. As we will prove soon, this shows that the -module presented by is isomorphic to the -module presented by     We can go further. Set . Then and also form a generating set of . The relation on translates to     given by the matrix     Note that we have done a row operation (subtract twice row 1 from row 2 ) to get from to . Continuing in this fashion by subtracting 12 row 2 from row 1 we also form     The last matrix presents the module with generators , where     and relation . This module is isomorphic to our original module . As we will see, this proves . An explicit isomorphism between and is given by sending by the unique -module homomorphism defined by     Now notice that the kernel of this homomorphism is the submodule . Then the first isomorphism theorem gives .  "
},
{
  "id": "thm-matrices-modules-and-isomorphisms",
  "level": "2",
  "url": "sec-modpres.html#thm-matrices-modules-and-isomorphisms",
  "type": "Theorem",
  "number": "13.4",
  "title": "Matrices, Modules, and Isomorphisms.",
  "body": "Matrices, Modules, and Isomorphisms   Let be a non-zero commutative ring and let and for some . Then and present isomorphic -modules if can be obtained from by any finite sequence of operations of the following form:   an elementary row operation,    an elementary column operation,    deletion of the -th column and -th row of a matrix whose -th column is the vector ,    the reverse of (3),    deletion of a column of all 's,    the reverse of (5).       Note: This proof was not covered in class. Assume is obtained from by a single one of the steps listed above. We need to prove that there is an isomorphism of -modules.   In this case, for some elementary matrix . More generally, let be any invertible matrix such that . Then is an isomorphism and it maps bijectively onto . It follows that the kernel of the composition is and hence by the first isomorphism theorem it induces an isomorphism     In this case, for some elementary matrix . More generally, assume is any invertible matrix such that . Since is an isomorphism, we have and so . (For this one we get equality, not merely an isomorphism.)    For notational simplicity, let us assume ; that is, the first column of is and is obtained by deleting the first row and column of , giving a matrix. So where denotes some row vector and denotes a column of all 's. Let and be projection onto the last and components, respectively. Because of the nature of and , the diagram (page 40 in notes) commutes. Moreover, the kernel of is and the kernel of is , and since the first column of is , maps the kernel of bijectively onto the kernel of . A “diagram chase'' shows that . In detail: Since the diagram commutes, and hence induces an -module homomorphism (by the -th isomorphism theorem). Since is onto, so is . Suppose . So, . Say . Since is onto, for some . Then and thus . As noted above, maps onto and hence for some vector . This proves and hence that in . This proves is one-to-one.    The columns of generate the same submodule of as do the columns of , and thus and .    Since the isomorphism relation is reflexive, the statements of parts 3. & 5. show that parts 4.& 6. are true as well.      "
},
{
  "id": "remark-62",
  "level": "2",
  "url": "sec-modpres.html#remark-62",
  "type": "Remark",
  "number": "13.5",
  "title": "",
  "body": " The converse is true for some rings , including Euclidean domains.  "
},
{
  "id": "remark-63",
  "level": "2",
  "url": "sec-modpres.html#remark-63",
  "type": "Remark",
  "number": "13.6",
  "title": "",
  "body": " In fact, if and are equivalent matrices, then , as I shall prove below. This implies both (1) and (2) from the Theorem.  "
},
{
  "id": "lem-diagonal-presentation",
  "level": "2",
  "url": "sec-modpres.html#lem-diagonal-presentation",
  "type": "Lemma",
  "number": "13.7",
  "title": "Diagonal Presentation.",
  "body": "Diagonal Presentation   Suppose is a commutative ring and is a matrix such that for all and set for all . If then and if then     Assume and define to be the map sending to where for . (I.e., is the unique -map sending the -th standard basis vector to with in the -th position, for , and to itself for .) Then is clearly onto and the kernel of is the set of those tuples such that for some for all and for . Given such a tuple, This proves is contained Arguing backwards we see that the opposite containment also holds, so that in fact .  By the First Isomorphism Theorem, If then, by deleting columns of all 's, we may reduce to the case when , which is included in the first case.   "
},
{
  "id": "remark-64",
  "level": "2",
  "url": "sec-modpres.html#remark-64",
  "type": "Remark",
  "number": "13.8",
  "title": "",
  "body": " We now address the question of which modules have finite presentations. It is clear than any such module must be finitely generated (since the cosets of generate for any matrix ). If is finitely generated, say by elements, then we can find a surjective -module homomorphism Provided the kernel of is also finitely generated, say by elements, then we may find a surjection The composition is a map between free -modules and is thus equal to for some matrix . Clearly and hence by the first isomorphism theorem so that is finitely presented.  So the real question is: For a given ring , is it the case that for all , every submodule of is finitely generated? The answer is “no'' in general, but it does hold for many rings of interest:  "
},
{
  "id": "lem-noetherian-rings",
  "level": "2",
  "url": "sec-modpres.html#lem-noetherian-rings",
  "type": "Lemma",
  "number": "13.9",
  "title": "Noetherian Rings.",
  "body": "Noetherian Rings   Suppose is a commutative ring. The following conditions are equivalent:    has the ascending chain condition on ideals.    Every ideal of is finitely generated — i.e., for every ideal , there exists a finite set of elements in such that . In this case we say is Noetherian .       Assume every ideal is finitely generated and that such a chain is given. Let . Then it is easy to see that is an ideal. (In detail, for we have for some and hence .  If , then and for some and hence there is a such that . It follows that . Finally .) Thus by assumption is finitely generated, say for some .  Each belongs to one of the 's and hence, since there are only a finite number of such elements and ideas are nested, there is an such that . It follows that and hence .  Assume has the acc for ideals and let be any ideal. Pick any element and set . If we are done. If not, pick and set . If we are done and if not pick and let . In this way we form a strictly ascending chain , and this process cannot be continued forever since has the acc. When it terminates, we have for some and thus is finitely generated.   "
},
{
  "id": "thm-submodules-of-fg-modules-are-fg-when-noetherian",
  "level": "2",
  "url": "sec-modpres.html#thm-submodules-of-fg-modules-are-fg-when-noetherian",
  "type": "Theorem",
  "number": "13.10",
  "title": "Finitely Generated Modules in Noetherian Rings.",
  "body": "Finitely Generated Modules in Noetherian Rings   If is a noetherian commutative ring, then every submodule of a finitely generated module is again finitely generated.    I will just prove the following special case (since it is all we need): For each , every submodule of is finitely generated. The base case holds by definition (and Lemma ), since a submodule of is the same thing as an ideal.  Assume and the result holds for . Let be any submodule of . Define to be the projection onto the last component of . The kernel of may be identified with and so is a submodule of , and it is therefore finitely generated by assumption. The image of under is a submodule of , that is, an ideal of , and so it too is finitely generated by assumption (and Lemma ).  Furthermore, by the first isomorphism theorem is also finitely generated. By a homework problem, we deduce that is a finitely generated module.  % I'll just sketch the general case (which I don't think we'll actually need): let be any finitely generated -module and any submodule. % Since is finitely generated, there exists a surjective -module homomorphism for some . Then is a submodule of and % hence it is finitely generated by the case we already proved. Moreover, induces a surjective -module homomorphism , % and hence is isomorphic to a quotient of a finitely generated -module and thus it is also finitely generated.   "
},
{
  "id": "remark-65",
  "level": "2",
  "url": "sec-modpres.html#remark-65",
  "type": "Remark",
  "number": "13.11",
  "title": "",
  "body": " If is not noetherian, there there exists an ideal that is not finitely generated (by ). This gives an example of a non-finitely-generated submodule, namely , of a finitely generated module, namely .  "
},
{
  "id": "cor-fg-modules-finitely-presented-when-noetherian",
  "level": "2",
  "url": "sec-modpres.html#cor-fg-modules-finitely-presented-when-noetherian",
  "type": "Corollary",
  "number": "13.12",
  "title": "Finite Presentations in Noetherian Rings.",
  "body": "Finite Presentations in Noetherian Rings   Any finitely generated module over a noetherian ring has a finite presentation; that is, given such a module over such a ring, there exists an matrix in and an isomorphism     We basically already proved this, but let me recap it:  If is finitely generated, then for some we can find a surjective -module homomorphism Since we assume is noetherian, the kernel of is also finitely generated by , and so we may find a surjection of -modules for some . The composition is equal to for some matrix . Since , the gives an isomorphism    "
},
{
  "id": "sec-snf",
  "level": "1",
  "url": "sec-snf.html",
  "type": "Section",
  "number": "13.2",
  "title": "Smith Normal Form",
  "body": "Smith Normal Form  Smith Normal Form   Let be a Euclidean domain and let . Then there is a sequence of elementary column and column operations that transform into a matrix such that all non-diagonal entries of are and the diagonal entries of satisfy     The main point of the proof is to establish:  {}: There is a sequence of row and column operations that transforms to for some matrix and where . (We adopt the convention that if is the matrix of all 's, then .) Note that, by Lemma , we have and thus .  Granting this claim, by applying it again to we arrive at a matrix of the form where and and . (Observe that the row and column operations on will not affect the first row and column of .) Continuing in this fashion, we arrive at the matrix in the statement.  To prove the claim, let be the upper-left entry of .  Suppose happens to be . Then, in particular, it divides every entry of the first row and column of , and so by doing row and column operations of type I, we may out these entries to arrive at a matrix of the desired form directly.  In general, let to be the number of prime factors in a prime factorization of of , and proceed by induction on .  If , then (up to associates), and we already did this case.  Assume . Then there is at least one entry such that .  Case I: There is such a belonging to the first row of . In this case we we may implement the Euclidean algorithm in the form of suitable column operations to replace by and by , as in the example above. Since , is a proper divisor of , and it follows that the number of factors in a prime factorization of is smaller than , and we are done by induction.  Case II: There is such a in the first column. Just as in the previous case, we are done by induction upon implementing the Euclidean algorithm using suitable row operations.  Case III: divides every entry of the first row and first column. In this case, suitable row and column operations transform to By Lemma we have , and thus there is some element of such that (since we are assuming is not the gcd of ). A suitable row operation puts into row one without affecting , and we are back to the previously solved Case I.     Note that some of the diagonal entries could be . Recall for all (including ), and is the only element that divides . So, the “tail'' end of the sequence could be all 's, and indeed if for some then all subsequent diagonal entries must be .   FTFPMED: First Version   If is a Euclidean domain and is a finitely presented -module, then is isomorphic to a direct sum of cyclic modules: for some and some non-zero, non-invertible elements such that .    This is an immediate consequence of the SNF Theorem, Theorem parts (1) and (2), and Lemma .    Special Case of SNF  Suppose is a Euclidean domain and is a matrix. Column operations of type I in this case amount to adding a multiple of one element in this list to another one. The SNF Theorem in this case amounts to the Euclidean algorithm: By adding a suitable multiple of the one entry in the first two positions to the other, in the usual back-and-forth way, we arrive at where . Repeat this for columns and to arrive at where . Continuing in this fashion we arrive at where .  The proof of the SNF Theorem in general amounts to an extended version of the idea used in this special case.   Finding SNF  Consider the matrix with entries in  Do row and column operations to put into its Smith Normal Form: Conclude that the module presented by is isomorphic to .    A version of the SNF Theorem and its Corollary are valid for PIDs: If is a PID and , there there exist invertible matrices and such that has the form as in the theorem. It follows that every finitely presented module over a PID is direct sum of cyclic ones.  For Euclidean domains, and may be taken to be products of elementary matrices, and the Smith normal form can be found algorithmically.   Matrix GCDs in PIDs   Suppose is a PID and is a matrix with entries in and is a matrix obtained from via elementary column and column operations. Then where the gcd of a matrix is defined to be the gcd of all of its entries.    Minor   A  minor of is the determinant of a submatrix of ; more formally, if is an matrix, a minor of is any element of given as follows: Choose and , let be the matrix with . Then is a minor of .    Ideals Generated by Minors   For any commutative ring and matrix , if is obtained from via an elementary column or column operation, then the ideal of generated by all the minors of equals the ideal of generated by all the minors of .    Smith Normal Form is Unique   Assume is a PID and . Suppose can be obtained from via a sequence of elementary column and column operations and that is diagonal with diagonal entries such that . Then In particular, the SNF of a matrix is unique up to associates.    Recall that for a PID , the gcd of any set of elements is defined to be a generatpr of the ideal they generate. So, Lemma implies that for all . Since is diagonal, the only non-zero minors of are those given by indices and for which for all , and moreover such a minor is equal to . Since for all , it follows that divides for all . Thus , for each , and hence as claimed.     So, another way of finding the SNF of a matrix with entries in a Euclidean domain is to calculate for all . This is not practical except in very special cases.   "
},
{
  "id": "thm-snf",
  "level": "2",
  "url": "sec-snf.html#thm-snf",
  "type": "Theorem",
  "number": "13.13",
  "title": "Smith Normal Form.",
  "body": "Smith Normal Form   Let be a Euclidean domain and let . Then there is a sequence of elementary column and column operations that transform into a matrix such that all non-diagonal entries of are and the diagonal entries of satisfy     The main point of the proof is to establish:  {}: There is a sequence of row and column operations that transforms to for some matrix and where . (We adopt the convention that if is the matrix of all 's, then .) Note that, by Lemma , we have and thus .  Granting this claim, by applying it again to we arrive at a matrix of the form where and and . (Observe that the row and column operations on will not affect the first row and column of .) Continuing in this fashion, we arrive at the matrix in the statement.  To prove the claim, let be the upper-left entry of .  Suppose happens to be . Then, in particular, it divides every entry of the first row and column of , and so by doing row and column operations of type I, we may out these entries to arrive at a matrix of the desired form directly.  In general, let to be the number of prime factors in a prime factorization of of , and proceed by induction on .  If , then (up to associates), and we already did this case.  Assume . Then there is at least one entry such that .  Case I: There is such a belonging to the first row of . In this case we we may implement the Euclidean algorithm in the form of suitable column operations to replace by and by , as in the example above. Since , is a proper divisor of , and it follows that the number of factors in a prime factorization of is smaller than , and we are done by induction.  Case II: There is such a in the first column. Just as in the previous case, we are done by induction upon implementing the Euclidean algorithm using suitable row operations.  Case III: divides every entry of the first row and first column. In this case, suitable row and column operations transform to By Lemma we have , and thus there is some element of such that (since we are assuming is not the gcd of ). A suitable row operation puts into row one without affecting , and we are back to the previously solved Case I.   "
},
{
  "id": "remark-66",
  "level": "2",
  "url": "sec-snf.html#remark-66",
  "type": "Remark",
  "number": "13.14",
  "title": "",
  "body": " Note that some of the diagonal entries could be . Recall for all (including ), and is the only element that divides . So, the “tail'' end of the sequence could be all 's, and indeed if for some then all subsequent diagonal entries must be .  "
},
{
  "id": "cor-ftfpmed-first-version",
  "level": "2",
  "url": "sec-snf.html#cor-ftfpmed-first-version",
  "type": "Corollary",
  "number": "13.15",
  "title": "FTFPMED: First Version.",
  "body": "FTFPMED: First Version   If is a Euclidean domain and is a finitely presented -module, then is isomorphic to a direct sum of cyclic modules: for some and some non-zero, non-invertible elements such that .    This is an immediate consequence of the SNF Theorem, Theorem parts (1) and (2), and Lemma .   "
},
{
  "id": "exe-special-case-of-snf",
  "level": "2",
  "url": "sec-snf.html#exe-special-case-of-snf",
  "type": "Example",
  "number": "13.16",
  "title": "Special Case of SNF.",
  "body": "Special Case of SNF  Suppose is a Euclidean domain and is a matrix. Column operations of type I in this case amount to adding a multiple of one element in this list to another one. The SNF Theorem in this case amounts to the Euclidean algorithm: By adding a suitable multiple of the one entry in the first two positions to the other, in the usual back-and-forth way, we arrive at where . Repeat this for columns and to arrive at where . Continuing in this fashion we arrive at where .  The proof of the SNF Theorem in general amounts to an extended version of the idea used in this special case.  "
},
{
  "id": "exe-finding-snf",
  "level": "2",
  "url": "sec-snf.html#exe-finding-snf",
  "type": "Example",
  "number": "13.17",
  "title": "Finding SNF.",
  "body": "Finding SNF  Consider the matrix with entries in  Do row and column operations to put into its Smith Normal Form: Conclude that the module presented by is isomorphic to .  "
},
{
  "id": "remark-67",
  "level": "2",
  "url": "sec-snf.html#remark-67",
  "type": "Remark",
  "number": "13.18",
  "title": "",
  "body": " A version of the SNF Theorem and its Corollary are valid for PIDs: If is a PID and , there there exist invertible matrices and such that has the form as in the theorem. It follows that every finitely presented module over a PID is direct sum of cyclic ones.  For Euclidean domains, and may be taken to be products of elementary matrices, and the Smith normal form can be found algorithmically.  "
},
{
  "id": "lem-gcd-of-a-matrix-in-pid",
  "level": "2",
  "url": "sec-snf.html#lem-gcd-of-a-matrix-in-pid",
  "type": "Lemma",
  "number": "13.19",
  "title": "Matrix GCDs in PIDs.",
  "body": "Matrix GCDs in PIDs   Suppose is a PID and is a matrix with entries in and is a matrix obtained from via elementary column and column operations. Then where the gcd of a matrix is defined to be the gcd of all of its entries.   "
},
{
  "id": "def-minor",
  "level": "2",
  "url": "sec-snf.html#def-minor",
  "type": "Definition",
  "number": "13.20",
  "title": "Minor.",
  "body": "Minor   A  minor of is the determinant of a submatrix of ; more formally, if is an matrix, a minor of is any element of given as follows: Choose and , let be the matrix with . Then is a minor of .   "
},
{
  "id": "lem-ideals-generated-by-minors",
  "level": "2",
  "url": "sec-snf.html#lem-ideals-generated-by-minors",
  "type": "Lemma",
  "number": "13.21",
  "title": "Ideals Generated by Minors.",
  "body": "Ideals Generated by Minors   For any commutative ring and matrix , if is obtained from via an elementary column or column operation, then the ideal of generated by all the minors of equals the ideal of generated by all the minors of .   "
},
{
  "id": "thm-smith-normal-form-is-unique",
  "level": "2",
  "url": "sec-snf.html#thm-smith-normal-form-is-unique",
  "type": "Theorem",
  "number": "13.22",
  "title": "Smith Normal Form is Unique.",
  "body": "Smith Normal Form is Unique   Assume is a PID and . Suppose can be obtained from via a sequence of elementary column and column operations and that is diagonal with diagonal entries such that . Then In particular, the SNF of a matrix is unique up to associates.    Recall that for a PID , the gcd of any set of elements is defined to be a generatpr of the ideal they generate. So, Lemma implies that for all . Since is diagonal, the only non-zero minors of are those given by indices and for which for all , and moreover such a minor is equal to . Since for all , it follows that divides for all . Thus , for each , and hence as claimed.   "
},
{
  "id": "remark-68",
  "level": "2",
  "url": "sec-snf.html#remark-68",
  "type": "Remark",
  "number": "13.23",
  "title": "",
  "body": " So, another way of finding the SNF of a matrix with entries in a Euclidean domain is to calculate for all . This is not practical except in very special cases.  "
},
{
  "id": "sec-modclass",
  "level": "1",
  "url": "sec-modclass.html",
  "type": "Section",
  "number": "13.3",
  "title": "Classifications",
  "body": "Classifications  Fundamental Theorem of Finitely Generated Modules over a PID, Invariant Factors Form   Let be a PID and let be a finitely generated module. Then there exist integers , and non-zero, non-unit elements of satisfying such that Moreover and are uniquely determined by , and the 's are unique up to associates.    Invariant Factors   The polynomials occurring in the Theorem are called the invariant factors of the operator .    FTFGMOPRIFF   Let be a field and be the ring of polynomials with coefficients in in one variable . If a finitely generated -module then for some , and non-constant monic polynomials such that Moreover, , and are unique.    This follows from the Theorem since is a Euclidean domain and every non-zero polynomial is associate to a unique monic one.    -Modules of Dimension  Let be a field and a -module such that the dimension of as a -vector space is What are the possibilities for up to isomorphism?  We have with as in the Corollary. But must be since is infinite dimensional as a -vector space. Moreover, for any non-zero polynomial . So we must have . There are five possibilities:    and is monic of degree .     , is linear, is cubic and . (So if , then must be a root of ).     , is quadratic.     , is linear and is quadratic with .     , is linear.   Now suppose . What is the total number of possibilities? For case , there are monic polynomial of degree . For case , there are choices for and choices for since for a unique quadratic , for a total of possibilities. For case there are choices. For case there are choices since there are choices for and for a unique linear . For case , there are choices for . In total there are such modules up to isomorphism.   Sunzi's Remainder Theorem (Rings)   Suppose and are ideals in a commutative ring such that . Then (where is defined as the set of all sums of products of the form with and ) and there is an isomorphism of -modules In particular, if is a UFD and and are relatively prime elements of , then     Note that holds in general for any pair of ideals. If then for some and . Given we have with and , which proves .  For the second assertion define to be the -module homomorphism . Note that the kernel of is which equals by the first assertion. I claim is onto: Pick . With chosen as above, we have The last equation holds since and thus and similarly .  For the final assertion, recall that when is a UFD, two principle ideals and satisfy if and only if and are relatively prime. Also, for and , we have .    FTFGMOPIDEDF   Let be a PID and let be a finitely generated -module. Then there exist integers , prime elements of (not necessarily distinct), and integers , such that Moreover and are uniquely determined by , and the list is unique up to associates and reordering.    First write in invariant factor form . For any non-zero, non-unit element of , we have for some distinct (non-associate) prime elements and integers . By the Chinese remainder theorem (applied over and over again) we have Doing this for each fact in the invariant factor form of we obtain the existence of an elementary divisor form of .  Uniqueness follows from the uniqueness of the invariant factor form and of the prime factorizations of the 's.    Elementary Divisor (Module)   With the notation in the Theorem above, the elements of are the elementary divisors of .     Since , so the elementary divisors of are , and . The only invariant factor of is .   Direct Sums and  Consider the group . This is neither in IFF nor in EDF. Applying the Sunzi Remainder Theorem, we have and this gives the EDF. The elementary divisors of are (ordering does not matter).  To find the IFF we start by finding the largest prime power order for each prime in the list of orders of the summands. These are . The CRT gives Then we find the highest prime power orders for each prime among the left-over summands: By the CRT we have The highest orders of the prime power order not yet used are and , and we have which can be rearranged to give This is the IFF, and the invariant factors of are .   FTFGAGEDF   Let be a finitely generated abelian group. Then there exist integers , positive prime integers , and strictly positive integers such that Moreover, the 's, and 's are uniquely determined by (up to ordering).    FTFGMOPREDF   Let be a field and be the ring of polynomials with coefficients in in one variable . If a finitely generated -module then for some , , non-constant monic, irreducible polynomials and integers with , and these are unique up to ordering.    Finding IFs and EDs  Find the invariant factor form and the elementary divisor form of the -module first when    ,     and     .      "
},
{
  "id": "thm-ftfgmopidiff",
  "level": "2",
  "url": "sec-modclass.html#thm-ftfgmopidiff",
  "type": "Theorem",
  "number": "13.24",
  "title": "Fundamental Theorem of Finitely Generated Modules over a PID, Invariant Factors Form.",
  "body": "Fundamental Theorem of Finitely Generated Modules over a PID, Invariant Factors Form   Let be a PID and let be a finitely generated module. Then there exist integers , and non-zero, non-unit elements of satisfying such that Moreover and are uniquely determined by , and the 's are unique up to associates.   "
},
{
  "id": "def-invariant-factors",
  "level": "2",
  "url": "sec-modclass.html#def-invariant-factors",
  "type": "Definition",
  "number": "13.25",
  "title": "Invariant Factors.",
  "body": "Invariant Factors   The polynomials occurring in the Theorem are called the invariant factors of the operator .   "
},
{
  "id": "cor-ftfgmopriff",
  "level": "2",
  "url": "sec-modclass.html#cor-ftfgmopriff",
  "type": "Corollary",
  "number": "13.26",
  "title": "FTFGMOPRIFF.",
  "body": "FTFGMOPRIFF   Let be a field and be the ring of polynomials with coefficients in in one variable . If a finitely generated -module then for some , and non-constant monic polynomials such that Moreover, , and are unique.    This follows from the Theorem since is a Euclidean domain and every non-zero polynomial is associate to a unique monic one.   "
},
{
  "id": "exe-kx-modules-of-dimension-4",
  "level": "2",
  "url": "sec-modclass.html#exe-kx-modules-of-dimension-4",
  "type": "Example",
  "number": "13.27",
  "title": "<span class=\"process-math\">\\(k[x]\\)<\/span>-Modules of Dimension <span class=\"process-math\">\\(4\\)<\/span>.",
  "body": "-Modules of Dimension  Let be a field and a -module such that the dimension of as a -vector space is What are the possibilities for up to isomorphism?  We have with as in the Corollary. But must be since is infinite dimensional as a -vector space. Moreover, for any non-zero polynomial . So we must have . There are five possibilities:    and is monic of degree .     , is linear, is cubic and . (So if , then must be a root of ).     , is quadratic.     , is linear and is quadratic with .     , is linear.   Now suppose . What is the total number of possibilities? For case , there are monic polynomial of degree . For case , there are choices for and choices for since for a unique quadratic , for a total of possibilities. For case there are choices. For case there are choices since there are choices for and for a unique linear . For case , there are choices for . In total there are such modules up to isomorphism.  "
},
{
  "id": "thm-sunzis-remainder-theorem-rings",
  "level": "2",
  "url": "sec-modclass.html#thm-sunzis-remainder-theorem-rings",
  "type": "Theorem",
  "number": "13.28",
  "title": "Sunzi's Remainder Theorem (Rings).",
  "body": "Sunzi's Remainder Theorem (Rings)   Suppose and are ideals in a commutative ring such that . Then (where is defined as the set of all sums of products of the form with and ) and there is an isomorphism of -modules In particular, if is a UFD and and are relatively prime elements of , then     Note that holds in general for any pair of ideals. If then for some and . Given we have with and , which proves .  For the second assertion define to be the -module homomorphism . Note that the kernel of is which equals by the first assertion. I claim is onto: Pick . With chosen as above, we have The last equation holds since and thus and similarly .  For the final assertion, recall that when is a UFD, two principle ideals and satisfy if and only if and are relatively prime. Also, for and , we have .   "
},
{
  "id": "thm-ftfgmopidedf",
  "level": "2",
  "url": "sec-modclass.html#thm-ftfgmopidedf",
  "type": "Theorem",
  "number": "13.29",
  "title": "FTFGMOPIDEDF.",
  "body": "FTFGMOPIDEDF   Let be a PID and let be a finitely generated -module. Then there exist integers , prime elements of (not necessarily distinct), and integers , such that Moreover and are uniquely determined by , and the list is unique up to associates and reordering.    First write in invariant factor form . For any non-zero, non-unit element of , we have for some distinct (non-associate) prime elements and integers . By the Chinese remainder theorem (applied over and over again) we have Doing this for each fact in the invariant factor form of we obtain the existence of an elementary divisor form of .  Uniqueness follows from the uniqueness of the invariant factor form and of the prime factorizations of the 's.   "
},
{
  "id": "def-elementary-divisor-module",
  "level": "2",
  "url": "sec-modclass.html#def-elementary-divisor-module",
  "type": "Definition",
  "number": "13.30",
  "title": "Elementary Divisor (Module).",
  "body": "Elementary Divisor (Module)   With the notation in the Theorem above, the elements of are the elementary divisors of .   "
},
{
  "id": "exe-z90",
  "level": "2",
  "url": "sec-modclass.html#exe-z90",
  "type": "Example",
  "number": "13.31",
  "title": "<span class=\"process-math\">\\(\\Z\/90\\)<\/span>.",
  "body": " Since , so the elementary divisors of are , and . The only invariant factor of is .  "
},
{
  "id": "example-100",
  "level": "2",
  "url": "sec-modclass.html#example-100",
  "type": "Example",
  "number": "13.32",
  "title": "Direct Sums and <span class=\"process-math\">\\(\\Z\\)<\/span>.",
  "body": "Direct Sums and  Consider the group . This is neither in IFF nor in EDF. Applying the Sunzi Remainder Theorem, we have and this gives the EDF. The elementary divisors of are (ordering does not matter).  To find the IFF we start by finding the largest prime power order for each prime in the list of orders of the summands. These are . The CRT gives Then we find the highest prime power orders for each prime among the left-over summands: By the CRT we have The highest orders of the prime power order not yet used are and , and we have which can be rearranged to give This is the IFF, and the invariant factors of are .  "
},
{
  "id": "cor-ftfgagedf",
  "level": "2",
  "url": "sec-modclass.html#cor-ftfgagedf",
  "type": "Corollary",
  "number": "13.33",
  "title": "FTFGAGEDF.",
  "body": "FTFGAGEDF   Let be a finitely generated abelian group. Then there exist integers , positive prime integers , and strictly positive integers such that Moreover, the 's, and 's are uniquely determined by (up to ordering).   "
},
{
  "id": "cor-ftfgmopredf",
  "level": "2",
  "url": "sec-modclass.html#cor-ftfgmopredf",
  "type": "Corollary",
  "number": "13.34",
  "title": "FTFGMOPREDF.",
  "body": "FTFGMOPREDF   Let be a field and be the ring of polynomials with coefficients in in one variable . If a finitely generated -module then for some , , non-constant monic, irreducible polynomials and integers with , and these are unique up to ordering.   "
},
{
  "id": "exe-finding-ifs-and-eds",
  "level": "2",
  "url": "sec-modclass.html#exe-finding-ifs-and-eds",
  "type": "Example",
  "number": "13.35",
  "title": "Finding IFs and EDs.",
  "body": "Finding IFs and EDs  Find the invariant factor form and the elementary divisor form of the -module first when    ,     and     .     "
},
{
  "id": "sec-rcf",
  "level": "1",
  "url": "sec-rcf.html",
  "type": "Section",
  "number": "14.1",
  "title": "Rational Canonical Form",
  "body": "Rational Canonical Form    If everything on Earth were rational, nothing would happen.   Fyodor Dostoevsky    Suppose is a field and is a -module. By restriction of scalars along the canonical ring map we may regard as a -vector space — let us write this vector space as to be precise. Let be the map given by . Then is an -linear operator on . So, to a -module we may associate the pair where is an -vector space and is an -linear operator on . This process is reversible:   -Module   Let be a field, let be a finite dimensional vector space over , and let be an -linear operator. The -module is defined to be the abelian group equipped with the rule for scaling given by for any polynomial and vector .    is Actually a -Module   Given a pair as in the definition, really is a -module.    Special Case of  We have the following special case (it isn't really special — the general case reduces to this one upon choosing a basis):  Given a matrix , then is the -module whose underlying abelian group is (column vectors) with the usual rule for addition and with the rule for scaling given by for any column vector . For short, we write this rule as for any polynomial , where is the matrix obtained by evaluating at in the evident sense.    Let and let be the -module . So as a -vector space, and acts on by sending to . I claim there is an isomorphism of -modules.  Let . Note that and that and span as a -vector space. It follows that generates as a -module; in detail, for any we have .  Define a -module homomorphism by sending to and hence to . It is onto since generates as a -module. The kernel will be a (necessarily principle) ideal of ; we just need to find it. Note that , and are linearly dependent and in fact we have and hence . This gives that is in the kernel of and hence, by the -th Isomorphism Theorem we have an induced homomorphism of -modules induced by . The map is onto since is onto. Since the source and target both have dimension two as -vector spaces, is -linear, and is onto, it must in fact be an isomorphism of -modules (by the Rank-Nullity Theorem).   Equality of -Modules   The two assignments and defined above are mutually inverse: Given a -module , there is an equality of -modules and given a pair with an -vector space and an -linear operator on we have an equality of pairs .     In fact, these rules determine an “isomorphism of categories''.   Block Diagonal Matrix   Given square matrices , we define to be the block diagonal matrix which belongs to for .    Rational Canonical Form   Given a finite dimensional -vector space and an -linear operator , there is a basis of such that the matrix representing relative to is for monic polynomials of degree at least one such that . Moreover, this matrix is unique, and is known as the rational canonical form of the operator .    We know by the Fundamental Theorem of modules over (i.e., Corollary ) that there is a -module isomorphism for some unique list of monic, non-constant polynomials with for all . Recall that the operator on is given as (multiplication by ) on . Since this is a -module isomorphism, corresponds to multiplication by on each summand . As we have seen before, for each , the matrix representing on relative to the basis of is the companion matrix of . Let be the -basis of given by tuples (in that order). Then the matrix of on for is .  This gives existence. Uniqueness is a consequence of the uniqueness of the list , but I will omit the details.     The matrix is unique, but the basis that realizes it is, in general, not unique. As an extreme example illustrating this: Take to be the identity operator on a finite dimensional vector space . Then holds for any basis . (Note that is indeed in rational canonical form: it is equal to .)   Invariant Factor   In Theorem , the number is the rank of , the numbers are the invariant factors of , and the decomposition of in part (1) is the invariant factor decomposition of .    Back to  Let us return to the example of to illustrate the Theorem and its proof. By the previous example we have an isomorphism of -module Recall that (multiplication by ) on is given by multiplication by the matrix . This is an isomorphism of -modules, and so corresponds to the operator on . As we have seen before, relative to the basis , the matrix for is This is the Rational Canonical Form of . has just one invariant factor, namely .  By the way, tracking through the calculations that got us here, we see that the basis of that gives the RCF of if of .   Every Matrix Similar to Unique RCF Matrix   Every matrix is similar to a unique matrix in RCF.    Similarity Classes of Matrices  Let be the field with elements for some prime . Up to similarity, how many matrices are there with entries in ?  Each such matrix is similar to a unique one of the form with monic polynomials of positive degree such that . Moreover, since is a matrix where , we must have . So the goal becomes to count all such tuples of polynomials. We proceed by cases on . Note that is not possible. - Case . Then and the number of such polynomials is (since and has elements). - Case : Note that is not possible. If then , and there are possibilities. If , then and with monic and . There are possibilities for and for , for a total of in this subcase. The total for this case is thus . - Case : The only possibilities are , and so that and with . We get possibilities. - Case . We must have with each of degree , for a total of possibilities. The total is     The proof of Theorem makes clear the following fact:   For a field , finite dimensional vector space , and -linear operator ,the invariant factors of the operator are identical to the invariant factors of the -module .   The following result is thus very useful for finding the Rational Canonical Form of an operator (we will state it just for operators given explicitly by matrices):   RCF and Cokernels   Let be a field and let . The matrix presents the -module ; that is, there is an isomorphism of -modules     For this proof it is useful to identity with where the latter refers to all expressions of the form with . For instance, (when ) we identify with . Using this identification we define by . Then is a -module homomorphism — I leave it to you to verify this. is onto since, e.g., for any we have .  We have and hence . By the -th isomorphism theorem, there is an induced -module homomorphism induced by , and it is onto since is onto. It remains to show this map is one-to-one.  Since is -linear it is certainly -linear. Since , to prove is one-to-one, it suffices to prove (by Rank-Nullity). I claim the images of the standard basis in span it as an -vector space. To see this, note that , for , span as an -vector space, and hence they span the quotient. It thus suffices to show lies in the span of in for all and . We have and thus and by repeating this argument we have     Invariant Factors are Diagonal SNF Entries   The invariant factors of a matrix are the non-zero, non-unit diagonal entries of the SNF of .    Let be the Smith Normal Form of and let be its diagonal entries. As proven before, the matrix and present isomorphic -modules, and thus the Theorem gives an isomorphism Since , none of the 's can be zero. So, each is monic and . Now some of the might be non-zero constants, in which case is a unit and . Upon tossing those out, we are left with with each monic of positive degree and . These are, by definition, the invariant factors of .    Once More to Back to  Let's find the invariant factors of the matrix we looked at before, but this time using the Theorem and its Corollary.  We have To find the invariant factors of we just need to find the Smith Normal Form of . I'll do this two ways:  Method I: Do row and column operations using the generalized Euclidean algorithm: Tossing out the unit, we see that the only invariant factor is , as before.  Method II: Call the entries on the diagonal of the SNF of . Recall from Theorem that is the gcd of the entries of and . Thus and . Therefore the only invariant factor of is .   Finding IFs and RCF  Let Let us find the invariant factors and Rational Canonical Form of by finding the Smith Normal Form of .  We have A sequence of messy row and column operations yields Note that this is indeed in Smith Normal Form. It follows that the invariant factors of are and the RCF of is   For an alternative approach, we could use that the diagonal entries of the Smith Normal Form of satisfy , is the gcd of the minors of , and . It's clear that and an easy calculation gives that . There are nine minors of , and a tedious check reveals that each of them is one of , , or (up to signs). So . We get that as before.   "
},
{
  "id": "remark-69",
  "level": "2",
  "url": "sec-rcf.html#remark-69",
  "type": "Remark",
  "number": "14.1",
  "title": "",
  "body": " Suppose is a field and is a -module. By restriction of scalars along the canonical ring map we may regard as a -vector space — let us write this vector space as to be precise. Let be the map given by . Then is an -linear operator on . So, to a -module we may associate the pair where is an -vector space and is an -linear operator on . This process is reversible:  "
},
{
  "id": "def-fx-module-vg",
  "level": "2",
  "url": "sec-rcf.html#def-fx-module-vg",
  "type": "Definition",
  "number": "14.2",
  "title": "<span class=\"process-math\">\\(F[x]\\)<\/span>-Module <span class=\"process-math\">\\(V_g\\)<\/span>.",
  "body": "-Module   Let be a field, let be a finite dimensional vector space over , and let be an -linear operator. The -module is defined to be the abelian group equipped with the rule for scaling given by for any polynomial and vector .   "
},
{
  "id": "prop-vg-is-actually-a-fx-module",
  "level": "2",
  "url": "sec-rcf.html#prop-vg-is-actually-a-fx-module",
  "type": "Proposition",
  "number": "14.3",
  "title": "<span class=\"process-math\">\\(V_g\\)<\/span> is Actually a <span class=\"process-math\">\\(F[x]\\)<\/span>-Module.",
  "body": "is Actually a -Module   Given a pair as in the definition, really is a -module.   "
},
{
  "id": "ex-special-case-of-v_g",
  "level": "2",
  "url": "sec-rcf.html#ex-special-case-of-v_g",
  "type": "Example",
  "number": "14.4",
  "title": "Special Case of <span class=\"process-math\">\\(V_g\\)<\/span>.",
  "body": "Special Case of  We have the following special case (it isn't really special — the general case reduces to this one upon choosing a basis):  Given a matrix , then is the -module whose underlying abelian group is (column vectors) with the usual rule for addition and with the rule for scaling given by for any column vector . For short, we write this rule as for any polynomial , where is the matrix obtained by evaluating at in the evident sense.  "
},
{
  "id": "ex-mat_2times-2q",
  "level": "2",
  "url": "sec-rcf.html#ex-mat_2times-2q",
  "type": "Example",
  "number": "14.5",
  "title": "<span class=\"process-math\">\\(\\Mat_{2\\times 2}(\\Q)\\)<\/span>.",
  "body": " Let and let be the -module . So as a -vector space, and acts on by sending to . I claim there is an isomorphism of -modules.  Let . Note that and that and span as a -vector space. It follows that generates as a -module; in detail, for any we have .  Define a -module homomorphism by sending to and hence to . It is onto since generates as a -module. The kernel will be a (necessarily principle) ideal of ; we just need to find it. Note that , and are linearly dependent and in fact we have and hence . This gives that is in the kernel of and hence, by the -th Isomorphism Theorem we have an induced homomorphism of -modules induced by . The map is onto since is onto. Since the source and target both have dimension two as -vector spaces, is -linear, and is onto, it must in fact be an isomorphism of -modules (by the Rank-Nullity Theorem).  "
},
{
  "id": "prop-equality-of-fx-modules",
  "level": "2",
  "url": "sec-rcf.html#prop-equality-of-fx-modules",
  "type": "Proposition",
  "number": "14.6",
  "title": "Equality of <span class=\"process-math\">\\(F[x]\\)<\/span>-Modules.",
  "body": "Equality of -Modules   The two assignments and defined above are mutually inverse: Given a -module , there is an equality of -modules and given a pair with an -vector space and an -linear operator on we have an equality of pairs .   "
},
{
  "id": "remark-70",
  "level": "2",
  "url": "sec-rcf.html#remark-70",
  "type": "Remark",
  "number": "14.7",
  "title": "",
  "body": " In fact, these rules determine an “isomorphism of categories''.  "
},
{
  "id": "def-block-diagonal-matrix",
  "level": "2",
  "url": "sec-rcf.html#def-block-diagonal-matrix",
  "type": "Definition",
  "number": "14.8",
  "title": "Block Diagonal Matrix.",
  "body": "Block Diagonal Matrix   Given square matrices , we define to be the block diagonal matrix which belongs to for .   "
},
{
  "id": "thm-rcf",
  "level": "2",
  "url": "sec-rcf.html#thm-rcf",
  "type": "Theorem",
  "number": "14.9",
  "title": "Rational Canonical Form.",
  "body": "Rational Canonical Form   Given a finite dimensional -vector space and an -linear operator , there is a basis of such that the matrix representing relative to is for monic polynomials of degree at least one such that . Moreover, this matrix is unique, and is known as the rational canonical form of the operator .    We know by the Fundamental Theorem of modules over (i.e., Corollary ) that there is a -module isomorphism for some unique list of monic, non-constant polynomials with for all . Recall that the operator on is given as (multiplication by ) on . Since this is a -module isomorphism, corresponds to multiplication by on each summand . As we have seen before, for each , the matrix representing on relative to the basis of is the companion matrix of . Let be the -basis of given by tuples (in that order). Then the matrix of on for is .  This gives existence. Uniqueness is a consequence of the uniqueness of the list , but I will omit the details.   "
},
{
  "id": "remark-71",
  "level": "2",
  "url": "sec-rcf.html#remark-71",
  "type": "Remark",
  "number": "14.10",
  "title": "",
  "body": " The matrix is unique, but the basis that realizes it is, in general, not unique. As an extreme example illustrating this: Take to be the identity operator on a finite dimensional vector space . Then holds for any basis . (Note that is indeed in rational canonical form: it is equal to .)  "
},
{
  "id": "def-invariant-factor-2",
  "level": "2",
  "url": "sec-rcf.html#def-invariant-factor-2",
  "type": "Definition",
  "number": "14.11",
  "title": "Invariant Factor.",
  "body": "Invariant Factor   In Theorem , the number is the rank of , the numbers are the invariant factors of , and the decomposition of in part (1) is the invariant factor decomposition of .   "
},
{
  "id": "exe-back-to-mat_2times-2q",
  "level": "2",
  "url": "sec-rcf.html#exe-back-to-mat_2times-2q",
  "type": "Example",
  "number": "14.12",
  "title": "Back to <span class=\"process-math\">\\(\\Mat_{2\\times 2}(\\Q)\\)<\/span>.",
  "body": "Back to  Let us return to the example of to illustrate the Theorem and its proof. By the previous example we have an isomorphism of -module Recall that (multiplication by ) on is given by multiplication by the matrix . This is an isomorphism of -modules, and so corresponds to the operator on . As we have seen before, relative to the basis , the matrix for is This is the Rational Canonical Form of . has just one invariant factor, namely .  By the way, tracking through the calculations that got us here, we see that the basis of that gives the RCF of if of .  "
},
{
  "id": "cor-every-matrix-similar-to-unique-rcf-matrix",
  "level": "2",
  "url": "sec-rcf.html#cor-every-matrix-similar-to-unique-rcf-matrix",
  "type": "Corollary",
  "number": "14.13",
  "title": "Every Matrix Similar to Unique RCF Matrix.",
  "body": "Every Matrix Similar to Unique RCF Matrix   Every matrix is similar to a unique matrix in RCF.   "
},
{
  "id": "exe-similarity-classes-of-4times-4-matrices",
  "level": "2",
  "url": "sec-rcf.html#exe-similarity-classes-of-4times-4-matrices",
  "type": "Example",
  "number": "14.14",
  "title": "Similarity Classes of <span class=\"process-math\">\\(4\\times 4\\)<\/span> Matrices.",
  "body": "Similarity Classes of Matrices  Let be the field with elements for some prime . Up to similarity, how many matrices are there with entries in ?  Each such matrix is similar to a unique one of the form with monic polynomials of positive degree such that . Moreover, since is a matrix where , we must have . So the goal becomes to count all such tuples of polynomials. We proceed by cases on . Note that is not possible. - Case . Then and the number of such polynomials is (since and has elements). - Case : Note that is not possible. If then , and there are possibilities. If , then and with monic and . There are possibilities for and for , for a total of in this subcase. The total for this case is thus . - Case : The only possibilities are , and so that and with . We get possibilities. - Case . We must have with each of degree , for a total of possibilities. The total is   "
},
{
  "id": "remark-72",
  "level": "2",
  "url": "sec-rcf.html#remark-72",
  "type": "Remark",
  "number": "14.15",
  "title": "",
  "body": " The proof of Theorem makes clear the following fact:   For a field , finite dimensional vector space , and -linear operator ,the invariant factors of the operator are identical to the invariant factors of the -module .   The following result is thus very useful for finding the Rational Canonical Form of an operator (we will state it just for operators given explicitly by matrices):  "
},
{
  "id": "thm-rcf-and-cokernels",
  "level": "2",
  "url": "sec-rcf.html#thm-rcf-and-cokernels",
  "type": "Theorem",
  "number": "14.16",
  "title": "RCF and Cokernels.",
  "body": "RCF and Cokernels   Let be a field and let . The matrix presents the -module ; that is, there is an isomorphism of -modules     For this proof it is useful to identity with where the latter refers to all expressions of the form with . For instance, (when ) we identify with . Using this identification we define by . Then is a -module homomorphism — I leave it to you to verify this. is onto since, e.g., for any we have .  We have and hence . By the -th isomorphism theorem, there is an induced -module homomorphism induced by , and it is onto since is onto. It remains to show this map is one-to-one.  Since is -linear it is certainly -linear. Since , to prove is one-to-one, it suffices to prove (by Rank-Nullity). I claim the images of the standard basis in span it as an -vector space. To see this, note that , for , span as an -vector space, and hence they span the quotient. It thus suffices to show lies in the span of in for all and . We have and thus and by repeating this argument we have    "
},
{
  "id": "cor-invariant-factors-are-diagonal-snf-entries",
  "level": "2",
  "url": "sec-rcf.html#cor-invariant-factors-are-diagonal-snf-entries",
  "type": "Corollary",
  "number": "14.17",
  "title": "Invariant Factors are Diagonal SNF Entries.",
  "body": "Invariant Factors are Diagonal SNF Entries   The invariant factors of a matrix are the non-zero, non-unit diagonal entries of the SNF of .    Let be the Smith Normal Form of and let be its diagonal entries. As proven before, the matrix and present isomorphic -modules, and thus the Theorem gives an isomorphism Since , none of the 's can be zero. So, each is monic and . Now some of the might be non-zero constants, in which case is a unit and . Upon tossing those out, we are left with with each monic of positive degree and . These are, by definition, the invariant factors of .   "
},
{
  "id": "exe-once-more-to-back-to-mat_2times-2q",
  "level": "2",
  "url": "sec-rcf.html#exe-once-more-to-back-to-mat_2times-2q",
  "type": "Example",
  "number": "14.18",
  "title": "Once More to Back to <span class=\"process-math\">\\(\\Mat_{2\\times 2}(\\Q)\\)<\/span>.",
  "body": "Once More to Back to  Let's find the invariant factors of the matrix we looked at before, but this time using the Theorem and its Corollary.  We have To find the invariant factors of we just need to find the Smith Normal Form of . I'll do this two ways:  Method I: Do row and column operations using the generalized Euclidean algorithm: Tossing out the unit, we see that the only invariant factor is , as before.  Method II: Call the entries on the diagonal of the SNF of . Recall from Theorem that is the gcd of the entries of and . Thus and . Therefore the only invariant factor of is .  "
},
{
  "id": "exe-finding-ifs-and-rcf",
  "level": "2",
  "url": "sec-rcf.html#exe-finding-ifs-and-rcf",
  "type": "Example",
  "number": "14.19",
  "title": "Finding IFs and RCF.",
  "body": "Finding IFs and RCF  Let Let us find the invariant factors and Rational Canonical Form of by finding the Smith Normal Form of .  We have A sequence of messy row and column operations yields Note that this is indeed in Smith Normal Form. It follows that the invariant factors of are and the RCF of is   For an alternative approach, we could use that the diagonal entries of the Smith Normal Form of satisfy , is the gcd of the minors of , and . It's clear that and an easy calculation gives that . There are nine minors of , and a tedious check reveals that each of them is one of , , or (up to signs). So . We get that as before.  "
},
{
  "id": "sec-cayley-hamilton",
  "level": "1",
  "url": "sec-cayley-hamilton.html",
  "type": "Section",
  "number": "14.2",
  "title": "The Cayley-Hamilton Theorem",
  "body": "The Cayley-Hamilton Theorem    If you stand for nothing, Burr, what will you fall for?   Hamilton   Given a square matrix and polynomial , recall that refers to the square matrix .  Ideals and   Given a matrix with entries in a field , the set forms a non-zero ideal of .     is an ideal since the result of evaluating the sum of two polynomials at is . the result of evaluating the product at is .  To show it is non-zero, consider the matrices . This is a collection of matrices in the dimensional -vector space , and hence the must be linearly dependent: there are , not all of which are , such that . This proves .    Minimum Polynomial of a Matrix   Let be a field and let . The minimum polynomial of , denoted , is the unique monic generator of the ideal . Equivalently, is the monic polynomial of least degree such that .    iff Annihilates   Given an matrix and polynomial , we have if and only if annihilates the -module .  In particular, is the unique monic generator of the annihilator ideal     If , then for each , by definition of the action of on we have and so annihilates . Conversely, if annihilates , then for all . Taking for each , this says that each column of is and hence is the zero matrix.    Minimum Polynomial   More generally, let be an -vector space of dimension , and let be a linear transformation. The minimum polynomial of , denoted , is the unique monic polynomial generating the ideal or, equivalently, the annihilator ideal .    Theorem - Cayley-Hamilton   Let be a field, a finite dimensional -vector space, and an -linear operator. Let be the invariant factors of .   The product of the invariant factors of equals the characteristic polynomial of :     The largest invariant factor of is equal to the minimum polynomial of :     (The Cayley-Hamilton Theorem) The minimum polynomial of divides its characteristic polynomial. In particular, satisfies its characteristic polynomial:        The first assertion is a consequence of Corollary , since the product of the diagonal elements of the Smith Normal Form of is equal to the determinant of . (Technically, we can only conclude at first that they are only associates, but since each is monic, they must be equal.)  For the second, we use the isomorphism of -modules Note that a polynomial annihilates if and only if divides . Since , the annihilator of the -module is generated by . Thus the annihilator of is also generated by , and by the Proposition is the minimum polynomial of .  The third assertion is an immediate consequence of the first two.    Finding Minimum Polynomial  Let's find the minimum polynomial of   We apply the Cayley-Hamilton Theorem: . The polynomial is easy to compute since this matrix is upper-triangular: So for some . By brute-force, we verify that and thus it must be the case that .   Finding Minimum Polynomial (2)  Let's find the minimum polynomial of As in the previous example, and so by the Cayley-Hamilton Theorem for some . This time we notice that and so, since , .   "
},
{
  "id": "remark-73",
  "level": "2",
  "url": "sec-cayley-hamilton.html#remark-73",
  "type": "Remark",
  "number": "14.20",
  "title": "",
  "body": "Given a square matrix and polynomial , recall that refers to the square matrix . "
},
{
  "id": "prop-ideals-and-gx",
  "level": "2",
  "url": "sec-cayley-hamilton.html#prop-ideals-and-gx",
  "type": "Proposition",
  "number": "14.21",
  "title": "Ideals and <span class=\"process-math\">\\(g(x)\\)<\/span>.",
  "body": "Ideals and   Given a matrix with entries in a field , the set forms a non-zero ideal of .     is an ideal since the result of evaluating the sum of two polynomials at is . the result of evaluating the product at is .  To show it is non-zero, consider the matrices . This is a collection of matrices in the dimensional -vector space , and hence the must be linearly dependent: there are , not all of which are , such that . This proves .   "
},
{
  "id": "def-min-poly-matrix",
  "level": "2",
  "url": "sec-cayley-hamilton.html#def-min-poly-matrix",
  "type": "Definition",
  "number": "14.22",
  "title": "Minimum Polynomial of a Matrix.",
  "body": "Minimum Polynomial of a Matrix   Let be a field and let . The minimum polynomial of , denoted , is the unique monic generator of the ideal . Equivalently, is the monic polynomial of least degree such that .   "
},
{
  "id": "prop-ga0-iff-gx-annihilates-fn_a",
  "level": "2",
  "url": "sec-cayley-hamilton.html#prop-ga0-iff-gx-annihilates-fn_a",
  "type": "Proposition",
  "number": "14.23",
  "title": "<span class=\"process-math\">\\(g(A)=0\\)<\/span> iff <span class=\"process-math\">\\(g(x)\\)<\/span> Annihilates <span class=\"process-math\">\\(F^n_A\\)<\/span>.",
  "body": "iff Annihilates   Given an matrix and polynomial , we have if and only if annihilates the -module .  In particular, is the unique monic generator of the annihilator ideal     If , then for each , by definition of the action of on we have and so annihilates . Conversely, if annihilates , then for all . Taking for each , this says that each column of is and hence is the zero matrix.   "
},
{
  "id": "def-minimum-polynomial-linear-transformation",
  "level": "2",
  "url": "sec-cayley-hamilton.html#def-minimum-polynomial-linear-transformation",
  "type": "Definition",
  "number": "14.24",
  "title": "Minimum Polynomial.",
  "body": "Minimum Polynomial   More generally, let be an -vector space of dimension , and let be a linear transformation. The minimum polynomial of , denoted , is the unique monic polynomial generating the ideal or, equivalently, the annihilator ideal .   "
},
{
  "id": "thm-cayley-hamilton-thm",
  "level": "2",
  "url": "sec-cayley-hamilton.html#thm-cayley-hamilton-thm",
  "type": "Theorem",
  "number": "14.25",
  "title": "Theorem - Cayley-Hamilton <span class=\"process-math\">\\(\\thm\\)<\/span>.",
  "body": "Theorem - Cayley-Hamilton   Let be a field, a finite dimensional -vector space, and an -linear operator. Let be the invariant factors of .   The product of the invariant factors of equals the characteristic polynomial of :     The largest invariant factor of is equal to the minimum polynomial of :     (The Cayley-Hamilton Theorem) The minimum polynomial of divides its characteristic polynomial. In particular, satisfies its characteristic polynomial:        The first assertion is a consequence of Corollary , since the product of the diagonal elements of the Smith Normal Form of is equal to the determinant of . (Technically, we can only conclude at first that they are only associates, but since each is monic, they must be equal.)  For the second, we use the isomorphism of -modules Note that a polynomial annihilates if and only if divides . Since , the annihilator of the -module is generated by . Thus the annihilator of is also generated by , and by the Proposition is the minimum polynomial of .  The third assertion is an immediate consequence of the first two.   "
},
{
  "id": "exe-finding-minimum-polynomial",
  "level": "2",
  "url": "sec-cayley-hamilton.html#exe-finding-minimum-polynomial",
  "type": "Example",
  "number": "14.26",
  "title": "Finding Minimum Polynomial.",
  "body": "Finding Minimum Polynomial  Let's find the minimum polynomial of   We apply the Cayley-Hamilton Theorem: . The polynomial is easy to compute since this matrix is upper-triangular: So for some . By brute-force, we verify that and thus it must be the case that .  "
},
{
  "id": "exe-finding-minimum-polynomial-2",
  "level": "2",
  "url": "sec-cayley-hamilton.html#exe-finding-minimum-polynomial-2",
  "type": "Example",
  "number": "14.27",
  "title": "Finding Minimum Polynomial (2).",
  "body": "Finding Minimum Polynomial (2)  Let's find the minimum polynomial of As in the previous example, and so by the Cayley-Hamilton Theorem for some . This time we notice that and so, since , .  "
},
{
  "id": "sec-jcf",
  "level": "1",
  "url": "sec-jcf.html",
  "type": "Section",
  "number": "14.3",
  "title": "Jordan Canonical Form",
  "body": "Jordan Canonical Form    Success doesn't stop when you get there.   Michael Jordan   We now turn to the Jordan canonical form. To motivate it, let us do an example.  Companion Matrix and Jordan Blocks  Let us consider the companion matrix of : We can interpret this matrix as arising from the linear transformation on defined as multiplication by . Recall that the ordered basis of that gives the matrix as: But notice that is also a basis of . Let us calculate what the operator does to this alternative basis. We could work this out by brute force, but a cleaner way is to first compute what the operator does. Since is multiplication by , it sends each basis element to the next one, except for the last one, which is sent to . It follows that the matrix of this operator relative to the ordered basis is and hence the matrix for itself for this basis is This is what's known as a Jordan Block .    In this example, if we used the basis instead we would have gotten the transpose of .   Jordan Block   Given a field , and integer , and an element , the Jordan block  is the with entries in such that its diagonal entries are all , each entry just below the diagonal is a , and all other entries are : (More precisely, for all , for all , and for all other .)     Some people (including I think the authors or our text) defined a Jordan block to be the transpose of what I have defined it to be.   Jordan Canonical Form   Let be a field, let be a finite dimensional -vector space, and let be a linear transformation satisfying the property that the characteristic polynomial of factors completely in into linear factors. Then there is an ordered basis for such that where , the 's, and the 's are such that are the elementary divisors of the -module . Moreover, this matrix is unique up to ordering of the Jordan Blocks.    The proof is similar to the proof the RCF theorem, using the idea of Example above, but starting with the FTFGMPIDEDF (instead of the FTFGMPIDIFF). Here are the details:  We consider the -module . Since we assume factors completely, the only irreducible polynomials in its factorization are linear. Thus the invariant factors of are products of polynomials of the form for various and integers . It follows that the elementary divisors have this form too. The FTFGMPIDEDF therefore gives an isomorphism of -modules Now pick ordered bases for each of the summands and set to be their “ordered union'' just as we did for the proof of the Theorem on RCF. By the same argument as in Example applied to each summand individually, the matrix representing multiplication by on each summand is . This gives the existence of the JCF.  The uniqueness follows from the uniqueness clause in the FTFGMPIDEDF.    Jordan Canonical Form   Let be a field, be a finite dimensional vector space, and let be a linear transformation satisfying the property that the characteristic polynomial of factors completely into linear factors and has elementary divisors . The matrix is a Jordan canonical form (JCF) of .     Not every operator has a Jordan Canonical Form: only applies if factors completely, and, conversely, if an operator is represented by any lower-triangular matrix, then its characteristic polynomial must be a product of linear polynomials. For algebraically closed fields, such as , every linear operator does indeed have a JCF.    If we flip the order of each in the proof, we would end up with the transpose of what I have defined the JCF to be. This is what our text does, and it defines the JCF as the transpose of what I have defined it to be.   JCF Exists if CharPoly Factors Linearly   If is an matrix with entries in a field and factors completely into linear factors, then is similar to a matrix in Jordan Canonical Form, and this matrix is unique up to the ordering of the Jordan Blocks.    Finding JCF  Let us find the Jordan Canonical Form of   We found the Rational Canonical Form of this matrix before. In the process we showed that we have an isomorphism of -module. By the Sunzi Remainder Theorem and thus the elementary divisors of are . By this shows that the JCF of is    Diagonalizable   Let be a finite dimensional vector space over a field and let be an -linear operator. We say is diagonalizable if there is a basis for such that the matrix is a diagonal matrix.    Diagonalizable Characterization   Let be a field, let be a finite dimensional vector space, and consider a linear transformation . The following are equivalent:    is diagonalizable.     has a Jordan canonical form and is a diagonal matrix.     has a Jordan canonical form and all elementary divisors are of the form with .    Each invariant factor of is a product of linear polynomials with no repeated linear factors.    The minimal polynomial of is a product of linear polynomials with no repeated linear factors.       Note that a diagonal matrix is an example of a matrix in JCF. By the uniqueness of the JCF, (1) holds if and only if (2) holds. Moreover, the equivalence of (2) and (3) follows by definition. A matrix has a JCF if and only if its invariant factors factor completely. In this case, the elementary divisors are constructed by decomposing each invariant factor into powers of distinct linear polynomials. This gives that (3) holds if and only if (4) holds. Finally, since the minimal polynomial is one of the invariant factors and every other invariant factor divides it, we get the equivalence between (4) and (5).    "
},
{
  "id": "compantion-matrix-and-jordan-blocks",
  "level": "2",
  "url": "sec-jcf.html#compantion-matrix-and-jordan-blocks",
  "type": "Example",
  "number": "14.28",
  "title": "Companion Matrix and Jordan Blocks.",
  "body": "Companion Matrix and Jordan Blocks  Let us consider the companion matrix of : We can interpret this matrix as arising from the linear transformation on defined as multiplication by . Recall that the ordered basis of that gives the matrix as: But notice that is also a basis of . Let us calculate what the operator does to this alternative basis. We could work this out by brute force, but a cleaner way is to first compute what the operator does. Since is multiplication by , it sends each basis element to the next one, except for the last one, which is sent to . It follows that the matrix of this operator relative to the ordered basis is and hence the matrix for itself for this basis is This is what's known as a Jordan Block .  "
},
{
  "id": "remark-74",
  "level": "2",
  "url": "sec-jcf.html#remark-74",
  "type": "Remark",
  "number": "14.29",
  "title": "",
  "body": " In this example, if we used the basis instead we would have gotten the transpose of .  "
},
{
  "id": "def-jordan-block",
  "level": "2",
  "url": "sec-jcf.html#def-jordan-block",
  "type": "Definition",
  "number": "14.30",
  "title": "Jordan Block.",
  "body": "Jordan Block   Given a field , and integer , and an element , the Jordan block  is the with entries in such that its diagonal entries are all , each entry just below the diagonal is a , and all other entries are : (More precisely, for all , for all , and for all other .)   "
},
{
  "id": "remark-75",
  "level": "2",
  "url": "sec-jcf.html#remark-75",
  "type": "Remark",
  "number": "14.31",
  "title": "",
  "body": " Some people (including I think the authors or our text) defined a Jordan block to be the transpose of what I have defined it to be.  "
},
{
  "id": "thm-jcf",
  "level": "2",
  "url": "sec-jcf.html#thm-jcf",
  "type": "Theorem",
  "number": "14.32",
  "title": "Jordan Canonical Form.",
  "body": "Jordan Canonical Form   Let be a field, let be a finite dimensional -vector space, and let be a linear transformation satisfying the property that the characteristic polynomial of factors completely in into linear factors. Then there is an ordered basis for such that where , the 's, and the 's are such that are the elementary divisors of the -module . Moreover, this matrix is unique up to ordering of the Jordan Blocks.    The proof is similar to the proof the RCF theorem, using the idea of Example above, but starting with the FTFGMPIDEDF (instead of the FTFGMPIDIFF). Here are the details:  We consider the -module . Since we assume factors completely, the only irreducible polynomials in its factorization are linear. Thus the invariant factors of are products of polynomials of the form for various and integers . It follows that the elementary divisors have this form too. The FTFGMPIDEDF therefore gives an isomorphism of -modules Now pick ordered bases for each of the summands and set to be their “ordered union'' just as we did for the proof of the Theorem on RCF. By the same argument as in Example applied to each summand individually, the matrix representing multiplication by on each summand is . This gives the existence of the JCF.  The uniqueness follows from the uniqueness clause in the FTFGMPIDEDF.   "
},
{
  "id": "def-jcf",
  "level": "2",
  "url": "sec-jcf.html#def-jcf",
  "type": "Definition",
  "number": "14.33",
  "title": "Jordan Canonical Form.",
  "body": "Jordan Canonical Form   Let be a field, be a finite dimensional vector space, and let be a linear transformation satisfying the property that the characteristic polynomial of factors completely into linear factors and has elementary divisors . The matrix is a Jordan canonical form (JCF) of .   "
},
{
  "id": "warning-4",
  "level": "2",
  "url": "sec-jcf.html#warning-4",
  "type": "Warning",
  "number": "14.34",
  "title": "",
  "body": " Not every operator has a Jordan Canonical Form: only applies if factors completely, and, conversely, if an operator is represented by any lower-triangular matrix, then its characteristic polynomial must be a product of linear polynomials. For algebraically closed fields, such as , every linear operator does indeed have a JCF.  "
},
{
  "id": "remark-76",
  "level": "2",
  "url": "sec-jcf.html#remark-76",
  "type": "Remark",
  "number": "14.35",
  "title": "",
  "body": " If we flip the order of each in the proof, we would end up with the transpose of what I have defined the JCF to be. This is what our text does, and it defines the JCF as the transpose of what I have defined it to be.  "
},
{
  "id": "cor-jcf-exists-if-charpoly-factors-linearly",
  "level": "2",
  "url": "sec-jcf.html#cor-jcf-exists-if-charpoly-factors-linearly",
  "type": "Corollary",
  "number": "14.36",
  "title": "JCF Exists if CharPoly Factors Linearly.",
  "body": "JCF Exists if CharPoly Factors Linearly   If is an matrix with entries in a field and factors completely into linear factors, then is similar to a matrix in Jordan Canonical Form, and this matrix is unique up to the ordering of the Jordan Blocks.   "
},
{
  "id": "exe-finding-jcf",
  "level": "2",
  "url": "sec-jcf.html#exe-finding-jcf",
  "type": "Example",
  "number": "14.37",
  "title": "Finding JCF.",
  "body": "Finding JCF  Let us find the Jordan Canonical Form of   We found the Rational Canonical Form of this matrix before. In the process we showed that we have an isomorphism of -module. By the Sunzi Remainder Theorem and thus the elementary divisors of are . By this shows that the JCF of is   "
},
{
  "id": "def-diagonalizable",
  "level": "2",
  "url": "sec-jcf.html#def-diagonalizable",
  "type": "Definition",
  "number": "14.38",
  "title": "Diagonalizable.",
  "body": "Diagonalizable   Let be a finite dimensional vector space over a field and let be an -linear operator. We say is diagonalizable if there is a basis for such that the matrix is a diagonal matrix.   "
},
{
  "id": "thm-diagonalizable-thm",
  "level": "2",
  "url": "sec-jcf.html#thm-diagonalizable-thm",
  "type": "Theorem",
  "number": "14.39",
  "title": "Diagonalizable Characterization.",
  "body": "Diagonalizable Characterization   Let be a field, let be a finite dimensional vector space, and consider a linear transformation . The following are equivalent:    is diagonalizable.     has a Jordan canonical form and is a diagonal matrix.     has a Jordan canonical form and all elementary divisors are of the form with .    Each invariant factor of is a product of linear polynomials with no repeated linear factors.    The minimal polynomial of is a product of linear polynomials with no repeated linear factors.       Note that a diagonal matrix is an example of a matrix in JCF. By the uniqueness of the JCF, (1) holds if and only if (2) holds. Moreover, the equivalence of (2) and (3) follows by definition. A matrix has a JCF if and only if its invariant factors factor completely. In this case, the elementary divisors are constructed by decomposing each invariant factor into powers of distinct linear polynomials. This gives that (3) holds if and only if (4) holds. Finally, since the minimal polynomial is one of the invariant factors and every other invariant factor divides it, we get the equivalence between (4) and (5).   "
},
{
  "id": "field-extension-basics",
  "level": "1",
  "url": "field-extension-basics.html",
  "type": "Section",
  "number": "15.1",
  "title": "Field Extension Basics",
  "body": "Field Extension Basics  Welcome to Field Extensions    Give me extension and motion and I will construct the universe.   René Descartes   One motivation for studying field extensions is that we want to build fields in which certain polynomials have roots. Here is a classical example going back to Gauss: while over the polynomial has no roots, if we want a field in which does have a root we need to consider .  Starting from a smaller field and an irreducible polynomial , we want to build a larger field . One way to do this is to take a root of and adjoin it to obtaining the field , which is the collection of all expressions that one can build using addition, subtraction, multiplication and division starting from the of elements of . Another way to build a larger field from a smaller field and an irreducible polynomial is to let . We will show below that these two ways of creating larger fields are one and the same.  Field Extension   A field extension is an inclusion of one field into a larger field , making into a subfield of . We will write either or to signify that is a field extension of . field extension      Recall that if and are fields, then every ring homomorphism necessarily injective. (Proof: since , is a proper ideal of , and since is a field, the only proper ideal of it is .) Thus maps isomorphically onto its image and is a field extension. By abuse of notation we will typically think of as being a field extension, even though it is technically just an injective homomorphism of fields.   Field Extensions   and are basic examples of field extensions.  Recall that is a field. So is another example of a field extension.    The latter is a typical sort of example for us: Starting with , we would like to adjoin a root of the irreducible (in ) polynomial . Doing so yields .   The previous example was a quadratic extension, which is misleadingly simple.  Yet More Field Extensions  Consider . It is irreducible (e.g., by ) and has roots , and in . So there are three ways in which we could “adjoin a root\" to : First we could form the field It is not completely obvious this is a field, but we'll prove it later. The reason that we don't need third or higher powers is that, e.g., . Or we could instead form the field or the field . There are not all equal since, for example, but is not in . However, they are {} field extensions as we will prove below.   Let us formalize some of these definitions:    Given a field extension and an element , set Then is a subring of and in fact it is the smallest subring of that contains and . We define to be the smallest subfield of that contains and .   adjoining an element      We read as adjoin .   Intersection of Subfields  Show that exists by proving that the intersection of any two subfields is again a subfield.   In some cases we have .  When  Prove whenever is the root of some polynomial with coefficients in .     If is a field extension and , the field is the fraction field of : more precisely,     Soon we will give an even better description for in the case where is the root of a polynomial .  is a Field  Take and . Then any expression of the form with is equal to one of the form for . If , then with and both in . This proves that and in particular that is a field.   is not a Field   is not a field, and so in particular it is not equal to since, for example, . (If it were, then we would have for some , and hence , which would imply is the root of a polynomial with rational coefficients. This is known to be not true.)    Degree of a Field Extension    I may not have a degree, but I certainly got an education.   Jodi Picoult   Degree of a Field Extension   The degree of a field extension is  degree of a field extension     Degrees of Common Extensions  We have that and . (We could in fact say is the cardinality of , but in general we lump all infinite field extensions together when talking about degree.) We have where .   Properties of Extension Degrees   Assume is a field and is an irreducible polynomial. Set , and for , let denote the coset . The following hold:    is a field extension via the map given by for . (This is technically an injective homomorphisms of fields.)     .     has a root in ; in fact, the element is a root of this polynomial: .       Because is irreducible and is a PID, is a maximal ideal . Thus is a field . The map given by is a ring map since it is the composition of the two ring maps  . Since it is a ring map between two fields, it is injective .  The equality holds since is a basis for regarded as an -vector space, as we have seen before .  The last assertion is tricky only because the notation is confusing. Say and just to keep things straight let's set . We need to show : We have     The last part of the proposition is notationally confusing to prove in general but clear in examples.   Say and . Then . The assertion is that is a root of the polynomial viewed as having coefficients in . In other words, this element has the property that its square is . Let's check: Since and we have . Indeed, there is a field isomorphism sending to and more generally to .    Simple and Generated Extensions    It's not easy, but it's simple.   Eric Thomas   Simple Extension, Primitive Element   A field extension is called simple if for some element of . We call such an a primitive element for the extension. simple field extension  primative element      If is a simple field extension, note that there might be many different elements such that . Thus primitive elements are not necessarily unique.     is a primitive element of the extension . So is and, more generally, for any with .   We can generalize this to adjoining a subset instead of a single element.  Generated Subfield   If is a field extension and is any subset of , the subfield generated by over , denoted , is the smallest subfield of that contains all of . If is a finite set, we write for . generated subfield      Regard as a subfield of and let . We may also describe as where we set .  I claim that is in fact a simple extension of . For example, say . I claim that . Note that and So , and hence . Likewise, So . This example shows is simple and is a primitive element of this field extension.    This example is an illustration of the Primitive Element Theorem (which we might or might not have time to prove this semester): Every finite extension of is generated by a single element (or, in other words, is simple).    Uniqueness of Simple Extensions    Feeling unique is no indication of uniqueness.   Douglas Coupland   Next we will show that if is a root of a given polynomial , then is determined by up to isomorphism.    Let be a field extension and let be an irreducible polynomial. If has a root , then there is an isomorphism with and     Let be the evaluation homomorphism that sends ; more precisely, , and the restriction of this map to is the identity on . Since , we have , and since is a maximal ideal and , we conclude that .  Now by Theorem 1.43 we get an injective ring homomorphism such that .  It remains to be shown that is surjective. We will actually show more, namely that . Note first that by the definition of above, the image of on is . However, since is injective the image of is a field contained in , and since the smallest field containing is , we must in fact have .    Let's formalize the extra information we have obtained in the course of proving the theorem. First we used the following useful fact:   If is an injective ring homomorphism and and are fields then the image of is a subfield of .     Let be a field extension and let be irreducible having a root . Then .    Uniqueness of   Let be irreducible and let and be two roots of in some extensions and of . Then , so that the two roots are algebraically indistinguishable.    Complex Conjugation   Taking with roots and in , we actually obtain equal fields . But gives that there is an interesting isomorphism that sends to . In general, we have for .      Another example illustrating is that and are isomorphic fields. In fact, the are equal: . But again Corollary 5.25 gives that there is an interesting isomorphism that sends to . In general, we have for .     Let (the unique real cube-root of ) and (one of the two imaginary cube roots of ).  Then by (applied with ) there is an isomorphism of fields that restricts to the identity map on . Note that these two fields are not equal since the former is contained in and the latter is not.   The two examples above preview the central idea of Galois theory.   "
},
{
  "id": "def-field-extension",
  "level": "2",
  "url": "field-extension-basics.html#def-field-extension",
  "type": "Definition",
  "number": "15.1",
  "title": "Field Extension.",
  "body": "Field Extension   A field extension is an inclusion of one field into a larger field , making into a subfield of . We will write either or to signify that is a field extension of . field extension    "
},
{
  "id": "remark-77",
  "level": "2",
  "url": "field-extension-basics.html#remark-77",
  "type": "Remark",
  "number": "15.2",
  "title": "",
  "body": " Recall that if and are fields, then every ring homomorphism necessarily injective. (Proof: since , is a proper ideal of , and since is a field, the only proper ideal of it is .) Thus maps isomorphically onto its image and is a field extension. By abuse of notation we will typically think of as being a field extension, even though it is technically just an injective homomorphism of fields.  "
},
{
  "id": "ex-classic-field-extensions",
  "level": "2",
  "url": "field-extension-basics.html#ex-classic-field-extensions",
  "type": "Example",
  "number": "15.3",
  "title": "Field Extensions.",
  "body": "Field Extensions   and are basic examples of field extensions.  Recall that is a field. So is another example of a field extension.  "
},
{
  "id": "remark-78",
  "level": "2",
  "url": "field-extension-basics.html#remark-78",
  "type": "Remark",
  "number": "15.4",
  "title": "",
  "body": " The latter is a typical sort of example for us: Starting with , we would like to adjoin a root of the irreducible (in ) polynomial . Doing so yields .  "
},
{
  "id": "ex-more-field-extensions",
  "level": "2",
  "url": "field-extension-basics.html#ex-more-field-extensions",
  "type": "Example",
  "number": "15.5",
  "title": "Yet More Field Extensions.",
  "body": "Yet More Field Extensions  Consider . It is irreducible (e.g., by ) and has roots , and in . So there are three ways in which we could “adjoin a root\" to : First we could form the field It is not completely obvious this is a field, but we'll prove it later. The reason that we don't need third or higher powers is that, e.g., . Or we could instead form the field or the field . There are not all equal since, for example, but is not in . However, they are {} field extensions as we will prove below.  "
},
{
  "id": "def-field-extension-element",
  "level": "2",
  "url": "field-extension-basics.html#def-field-extension-element",
  "type": "Definition",
  "number": "15.6",
  "title": "<span class=\"process-math\">\\(F(\\a)\\)<\/span>.",
  "body": "  Given a field extension and an element , set Then is a subring of and in fact it is the smallest subring of that contains and . We define to be the smallest subfield of that contains and .   adjoining an element    "
},
{
  "id": "exercise-97",
  "level": "2",
  "url": "field-extension-basics.html#exercise-97",
  "type": "Exercise",
  "number": "15.7",
  "title": "Intersection of Subfields.",
  "body": "Intersection of Subfields  Show that exists by proving that the intersection of any two subfields is again a subfield.  "
},
{
  "id": "exercise-98",
  "level": "2",
  "url": "field-extension-basics.html#exercise-98",
  "type": "Exercise",
  "number": "15.8",
  "title": "When <span class=\"process-math\">\\(F(\\a)=F[\\a]\\)<\/span>.",
  "body": "When  Prove whenever is the root of some polynomial with coefficients in .  "
},
{
  "id": "prop-field-ext-fof",
  "level": "2",
  "url": "field-extension-basics.html#prop-field-ext-fof",
  "type": "Proposition",
  "number": "15.9",
  "title": "",
  "body": "  If is a field extension and , the field is the fraction field of : more precisely,    "
},
{
  "id": "exe-qsqrt2",
  "level": "2",
  "url": "field-extension-basics.html#exe-qsqrt2",
  "type": "Example",
  "number": "15.10",
  "title": "<span class=\"process-math\">\\(\\Q[\\sqrt 2]\\)<\/span> is a Field.",
  "body": "is a Field  Take and . Then any expression of the form with is equal to one of the form for . If , then with and both in . This proves that and in particular that is a field.  "
},
{
  "id": "exe-qpi",
  "level": "2",
  "url": "field-extension-basics.html#exe-qpi",
  "type": "Example",
  "number": "15.11",
  "title": "<span class=\"process-math\">\\(\\Q[\\pi]\\)<\/span> is not a Field.",
  "body": "is not a Field   is not a field, and so in particular it is not equal to since, for example, . (If it were, then we would have for some , and hence , which would imply is the root of a polynomial with rational coefficients. This is known to be not true.)  "
},
{
  "id": "def-degree-field-extension",
  "level": "2",
  "url": "field-extension-basics.html#def-degree-field-extension",
  "type": "Definition",
  "number": "15.12",
  "title": "Degree of a Field Extension.",
  "body": "Degree of a Field Extension   The degree of a field extension is  degree of a field extension    "
},
{
  "id": "exe-degrees-of-common-extensions",
  "level": "2",
  "url": "field-extension-basics.html#exe-degrees-of-common-extensions",
  "type": "Example",
  "number": "15.13",
  "title": "Degrees of Common Extensions.",
  "body": "Degrees of Common Extensions  We have that and . (We could in fact say is the cardinality of , but in general we lump all infinite field extensions together when talking about degree.) We have where .  "
},
{
  "id": "thm-properties-of-extension-degrees",
  "level": "2",
  "url": "field-extension-basics.html#thm-properties-of-extension-degrees",
  "type": "Theorem",
  "number": "15.14",
  "title": "Properties of Extension Degrees.",
  "body": "Properties of Extension Degrees   Assume is a field and is an irreducible polynomial. Set , and for , let denote the coset . The following hold:    is a field extension via the map given by for . (This is technically an injective homomorphisms of fields.)     .     has a root in ; in fact, the element is a root of this polynomial: .       Because is irreducible and is a PID, is a maximal ideal . Thus is a field . The map given by is a ring map since it is the composition of the two ring maps  . Since it is a ring map between two fields, it is injective .  The equality holds since is a basis for regarded as an -vector space, as we have seen before .  The last assertion is tricky only because the notation is confusing. Say and just to keep things straight let's set . We need to show : We have    "
},
{
  "id": "exe-rxx21",
  "level": "2",
  "url": "field-extension-basics.html#exe-rxx21",
  "type": "Example",
  "number": "15.15",
  "title": "",
  "body": " Say and . Then . The assertion is that is a root of the polynomial viewed as having coefficients in . In other words, this element has the property that its square is . Let's check: Since and we have . Indeed, there is a field isomorphism sending to and more generally to .  "
},
{
  "id": "def-simple-extension",
  "level": "2",
  "url": "field-extension-basics.html#def-simple-extension",
  "type": "Definition",
  "number": "15.16",
  "title": "Simple Extension, Primitive Element.",
  "body": "Simple Extension, Primitive Element   A field extension is called simple if for some element of . We call such an a primitive element for the extension. simple field extension  primative element    "
},
{
  "id": "remark-79",
  "level": "2",
  "url": "field-extension-basics.html#remark-79",
  "type": "Remark",
  "number": "15.17",
  "title": "",
  "body": " If is a simple field extension, note that there might be many different elements such that . Thus primitive elements are not necessarily unique.  "
},
{
  "id": "exe-sqrt2-primitive",
  "level": "2",
  "url": "field-extension-basics.html#exe-sqrt2-primitive",
  "type": "Example",
  "number": "15.18",
  "title": "",
  "body": "  is a primitive element of the extension . So is and, more generally, for any with .  "
},
{
  "id": "def-generated-subfield",
  "level": "2",
  "url": "field-extension-basics.html#def-generated-subfield",
  "type": "Definition",
  "number": "15.19",
  "title": "Generated Subfield.",
  "body": "Generated Subfield   If is a field extension and is any subset of , the subfield generated by over , denoted , is the smallest subfield of that contains all of . If is a finite set, we write for . generated subfield    "
},
{
  "id": "exe-qsqrt2sqrt3",
  "level": "2",
  "url": "field-extension-basics.html#exe-qsqrt2sqrt3",
  "type": "Example",
  "number": "15.20",
  "title": "",
  "body": " Regard as a subfield of and let . We may also describe as where we set .  I claim that is in fact a simple extension of . For example, say . I claim that . Note that and So , and hence . Likewise, So . This example shows is simple and is a primitive element of this field extension.  "
},
{
  "id": "remark-80",
  "level": "2",
  "url": "field-extension-basics.html#remark-80",
  "type": "Remark",
  "number": "15.21",
  "title": "",
  "body": " This example is an illustration of the Primitive Element Theorem (which we might or might not have time to prove this semester): Every finite extension of is generated by a single element (or, in other words, is simple).  "
},
{
  "id": "thm-field-ext-poly-ring",
  "level": "2",
  "url": "field-extension-basics.html#thm-field-ext-poly-ring",
  "type": "Theorem",
  "number": "15.22",
  "title": "",
  "body": "  Let be a field extension and let be an irreducible polynomial. If has a root , then there is an isomorphism with and     Let be the evaluation homomorphism that sends ; more precisely, , and the restriction of this map to is the identity on . Since , we have , and since is a maximal ideal and , we conclude that .  Now by Theorem 1.43 we get an injective ring homomorphism such that .  It remains to be shown that is surjective. We will actually show more, namely that . Note first that by the definition of above, the image of on is . However, since is injective the image of is a field contained in , and since the smallest field containing is , we must in fact have .   "
},
{
  "id": "exercise-99",
  "level": "2",
  "url": "field-extension-basics.html#exercise-99",
  "type": "Exercise",
  "number": "15.23",
  "title": "",
  "body": " If is an injective ring homomorphism and and are fields then the image of is a subfield of .  "
},
{
  "id": "cor-equal-ext",
  "level": "2",
  "url": "field-extension-basics.html#cor-equal-ext",
  "type": "Corollary",
  "number": "15.24",
  "title": "",
  "body": "  Let be a field extension and let be irreducible having a root . Then .   "
},
{
  "id": "cor-unique-ext",
  "level": "2",
  "url": "field-extension-basics.html#cor-unique-ext",
  "type": "Corollary",
  "number": "15.25",
  "title": "Uniqueness of <span class=\"process-math\">\\(F(\\alpha)\\)<\/span>.",
  "body": "Uniqueness of   Let be irreducible and let and be two roots of in some extensions and of . Then , so that the two roots are algebraically indistinguishable.   "
},
{
  "id": "example-120",
  "level": "2",
  "url": "field-extension-basics.html#example-120",
  "type": "Example",
  "number": "15.26",
  "title": "Complex Conjugation.",
  "body": "Complex Conjugation   Taking with roots and in , we actually obtain equal fields . But gives that there is an interesting isomorphism that sends to . In general, we have for .   "
},
{
  "id": "example-121",
  "level": "2",
  "url": "field-extension-basics.html#example-121",
  "type": "Example",
  "number": "15.27",
  "title": "",
  "body": "  Another example illustrating is that and are isomorphic fields. In fact, the are equal: . But again Corollary 5.25 gives that there is an interesting isomorphism that sends to . In general, we have for .   "
},
{
  "id": "exe-cube-roots",
  "level": "2",
  "url": "field-extension-basics.html#exe-cube-roots",
  "type": "Example",
  "number": "15.28",
  "title": "",
  "body": " Let (the unique real cube-root of ) and (one of the two imaginary cube roots of ).  Then by (applied with ) there is an isomorphism of fields that restricts to the identity map on . Note that these two fields are not equal since the former is contained in and the latter is not.  "
},
{
  "id": "sec-algebraic",
  "level": "1",
  "url": "sec-algebraic.html",
  "type": "Section",
  "number": "15.2",
  "title": "Algebraic Extensions",
  "body": "Algebraic Extensions  Algebraic Elements    People aren't trees, so it is false when they speak of roots.   Tom Robbins   Algebraic Element   For a field extension and , we say is algebraic over if for some non-zero polynomial . Otherwise, is transcendental over . algebraic element  transcendental element     Algebraic Elements   is algebraic over . Indeed, every element of is algebraic over . (E.g., is a root of .) ia algebraic over . So is for any .   Transcendental Elements   The numbers and of are transcendental over ; these are deep facts.    Properties of Algebraic Elements   Suppose is a field extension and . Define a subset of .  The subset is an ideal of .   if and only if is transcendental over ; so if and only if is algebraic over .  Assume is algebraic over .  The unique monic generator of , which we will write as , is irreducible (and hence is a prime ideal).  There is a unique isomorphism of fields sending identically to and sending to .   and in particular is a field.     is algebraic over if and only if . In this case,    is transcendental over if and only if . In this case, there is a unique isomorphism of fields sending identically to and sending to . (Here, is the field of fractions of .)      All parts use the following construction:  Let be the evaluation homomorphism, given by sending to  . Note that satisfies and . We have by definition of the latter. The thus gives that induces a ring isomorphism given by . In particular, since is a subring of , it is an integral domain, and hence must be a prime ideal (possibly the ideal).   Let us now prove the various parts:     holds because is the kernel of the ring map .    is by definition.     For (3) assume is algebraic. Then and hence it has a unique monic generator, which we write . Since is prime, is irreducible ; this proves (3a). Also, this shows that is a field and hence so is . Since , contains and , and is a field, we must have . This proves (3b) and (3c).  For (4), if is algebraic over , then by (3b) and Proposition . For the converse, if , then the infinite list of elements of cannot be -linearly independent . So, for some and some not all of which are . This shows is the root of a non-zero polynomial.  For (5), if is transcendental, then and so is injective. Since is a field, is a domain , and is injective , it can be extended to the field of fractions of , i.e. there is a ring homomorphism given by for all with . The image of is precisely . The map is injective since it is a ring homomorphism whose source is a field.     Minimum Polynomial   Let be a field extension and , and consider the ideal from . The unique monic generator for is called the minimal polynomial of over . minimum polynomial over a field extension      Note that the minimum polynomial of over (if it exists) divides every polynomial in that has as a root. In particular, it is the unique monic, irreducible polynomial having as a root. It can also be characterized as the monic polynomial in of least degree having as a root.     The minimal polynomial of over is .         For any prime integer , set , a so-called “primitive -th root of unity\". Let us find . Note that is a root of which factors as where . As we showed before , is irreducible in . Since is not a root of , it must be a root of , and since is irreducible, it must be (see the Remark).    The Degree Formula  degree formula   Suppose are field extensions. Then In particular, the composition of two finite extensions of fields is again a finite extension.    Let be a basis for as an -vector space and let be a basis for as an -vector space. Let denote the subset of . The Theorem follows from the following two facts:    is a basis of as an -vector space and    the function is bijective (so that the cardinality of is ).   Concerning (a), for , we have for some and . For each , is an -linear combination of a finite set of elements of . Combining these gives that is in the -span of .  To prove linear independence, it suffices to prove that if and be distinct elements of and respectively, then the set is linearly independent. Suppose for some . Since the 's are -linearly independent and and , we get that, for each , . Using now that the 's are -linearly independent, we have that for all and all , . This proves is linearly independent over , and hence is linearly independent over .  Concerning (b), if for some , then , and since the 's are -linearly independent, we must have and hence .     Say is a field extension of prime degree . Given , by the we have . Since , and so . It follows that , whence . As a (very simple) example of this, since is prime, for any complex number that is not real.    Let be the result of adjoining to all of the roots in of . That is, where , , , and . As we shall see later, is an example of a “splitting field\". Let's find .  First, let us note that we can also describe as . This holds since each of belongs to and hence . The opposite containment holds because , with the latter being true because .  Set . Then . Since and is a root of , we have is at most and it will be exactly if and only if is irreducible in . This is unclear.  So instead let's try a different approach. Let . Then since is irreducible in by , we have . Since and is a root of , we have . But since . Note that if and only if . Thus .  By the we conclude that Note that, in hindsight, it must have been true that is irreducible in , since otherwise the would give that .    Algebraic Field Extensions    If you forget your roots, you've lost sight of everything.   Walter Payton   Algebraic Extension   A field extension is called algebraic if every element is algebraic over (i.e., if every element of is the root of a non-zero polynomial with coefficients in ). algebraic field extension     Finite Extensions are Algebraic   If is a finite extension of fields, then it is algebraic.    Pick . Since is a -vector subspace of and we have . (One could also appeal to the for this.) So by (4) of Theorem , is algebraic of .    Infinite Algebraic Extension  Let and set . Then is a subfield of : To see this, note first that provided . Given , we have and for some and and hence are both in . Since is a field, we have , , and (provided ) all belong to and hence to . This proves is field extension of . It is algebraic over since each is. But it is not a finite extension of , since (since is irreducible in by ) and hence for all .    Transitivity of Algebraic Extensions   Let be extensions of fields, not necessarily finite.    Then and are algebraic if and only if is algebraic.  Give an example where and are Galois but is not Galois.      Let be extensions of fields, not necessarily finite.  Suppose that and are algebraic extensions. Let . Then is the root of the polynomial with . Notice that is a polynomial in , making is algebraic over this as well. Consider the chain of field extensions Since is algebraic over for all and is algebraic over , by Theorem each step in this chain has finite degree. By the , is finite and thus so is . By the Theorem again, is algebraic over .  Next suppose that is algebraic. Let . Then , and so it is algebraic over . Now let . Then is the root of a polynomial in , which is also in , so is algebraic as well.   is Galois over , and is Galois over , but is not Galois over as the splitting field of has degree .     The converse of this proposition is also true: Given field extensions , if is algebraic then so are and .     Assume that is a finite extension of fields of degree . If is irreducible of degree and then remains irreducible when regarded as an element of the ring .    Let be a finite extension of fields of degree .  Suppose that is irreducible of degree and .  First, note that if then will remain irreducible in  . Suppose then that . There exists an algebraically closed extension such that has a root  . Consider . As is algebraic in we know there exists some unique irreducible minimum polynomial of degree , and thus that  . Using the we see that However, and so for some , so . As we must have . But was defined to be the degree of , which divides . As and , we see that , so for some . As irreducible polynomials multiplied by a constant are still irreducible, we see that is indeed irreducible in .    The statement in part (a) would become false if the assumption that were omitted.   Let be a non-constant irreducible polynomial of degree in . Let . Because is irreducible and is a PID, is a maximal ideal. Thus is a field , , and is a root of in  . Hence is no longer irreducible by Theorem 2.2    "
},
{
  "id": "def-algebraic-element",
  "level": "2",
  "url": "sec-algebraic.html#def-algebraic-element",
  "type": "Definition",
  "number": "15.29",
  "title": "Algebraic Element.",
  "body": "Algebraic Element   For a field extension and , we say is algebraic over if for some non-zero polynomial . Otherwise, is transcendental over . algebraic element  transcendental element    "
},
{
  "id": "exe-i-algebraic-over-r",
  "level": "2",
  "url": "sec-algebraic.html#exe-i-algebraic-over-r",
  "type": "Example",
  "number": "15.30",
  "title": "Algebraic Elements.",
  "body": "Algebraic Elements   is algebraic over . Indeed, every element of is algebraic over . (E.g., is a root of .) ia algebraic over . So is for any .  "
},
{
  "id": "ex-transcendental",
  "level": "2",
  "url": "sec-algebraic.html#ex-transcendental",
  "type": "Example",
  "number": "15.31",
  "title": "Transcendental Elements.",
  "body": "Transcendental Elements   The numbers and of are transcendental over ; these are deep facts.   "
},
{
  "id": "thm-properties-of-algebraic-elements",
  "level": "2",
  "url": "sec-algebraic.html#thm-properties-of-algebraic-elements",
  "type": "Theorem",
  "number": "15.32",
  "title": "Properties of Algebraic Elements.",
  "body": "Properties of Algebraic Elements   Suppose is a field extension and . Define a subset of .  The subset is an ideal of .   if and only if is transcendental over ; so if and only if is algebraic over .  Assume is algebraic over .  The unique monic generator of , which we will write as , is irreducible (and hence is a prime ideal).  There is a unique isomorphism of fields sending identically to and sending to .   and in particular is a field.     is algebraic over if and only if . In this case,    is transcendental over if and only if . In this case, there is a unique isomorphism of fields sending identically to and sending to . (Here, is the field of fractions of .)      All parts use the following construction:  Let be the evaluation homomorphism, given by sending to  . Note that satisfies and . We have by definition of the latter. The thus gives that induces a ring isomorphism given by . In particular, since is a subring of , it is an integral domain, and hence must be a prime ideal (possibly the ideal).   Let us now prove the various parts:     holds because is the kernel of the ring map .    is by definition.     For (3) assume is algebraic. Then and hence it has a unique monic generator, which we write . Since is prime, is irreducible ; this proves (3a). Also, this shows that is a field and hence so is . Since , contains and , and is a field, we must have . This proves (3b) and (3c).  For (4), if is algebraic over , then by (3b) and Proposition . For the converse, if , then the infinite list of elements of cannot be -linearly independent . So, for some and some not all of which are . This shows is the root of a non-zero polynomial.  For (5), if is transcendental, then and so is injective. Since is a field, is a domain , and is injective , it can be extended to the field of fractions of , i.e. there is a ring homomorphism given by for all with . The image of is precisely . The map is injective since it is a ring homomorphism whose source is a field.    "
},
{
  "id": "def-minimum-polynomial",
  "level": "2",
  "url": "sec-algebraic.html#def-minimum-polynomial",
  "type": "Definition",
  "number": "15.33",
  "title": "Minimum Polynomial.",
  "body": "Minimum Polynomial   Let be a field extension and , and consider the ideal from . The unique monic generator for is called the minimal polynomial of over . minimum polynomial over a field extension    "
},
{
  "id": "remark-81",
  "level": "2",
  "url": "sec-algebraic.html#remark-81",
  "type": "Remark",
  "number": "15.34",
  "title": "",
  "body": " Note that the minimum polynomial of over (if it exists) divides every polynomial in that has as a root. In particular, it is the unique monic, irreducible polynomial having as a root. It can also be characterized as the monic polynomial in of least degree having as a root.  "
},
{
  "id": "example-125",
  "level": "2",
  "url": "sec-algebraic.html#example-125",
  "type": "Example",
  "number": "15.35",
  "title": "",
  "body": "  The minimal polynomial of over is .       "
},
{
  "id": "ex-primitive-roots-of-unity",
  "level": "2",
  "url": "sec-algebraic.html#ex-primitive-roots-of-unity",
  "type": "Example",
  "number": "15.36",
  "title": "",
  "body": " For any prime integer , set , a so-called “primitive -th root of unity\". Let us find . Note that is a root of which factors as where . As we showed before , is irreducible in . Since is not a root of , it must be a root of , and since is irreducible, it must be (see the Remark).   "
},
{
  "id": "thm-degree-formula",
  "level": "2",
  "url": "sec-algebraic.html#thm-degree-formula",
  "type": "Theorem",
  "number": "15.37",
  "title": "The Degree Formula.",
  "body": "The Degree Formula  degree formula   Suppose are field extensions. Then In particular, the composition of two finite extensions of fields is again a finite extension.    Let be a basis for as an -vector space and let be a basis for as an -vector space. Let denote the subset of . The Theorem follows from the following two facts:    is a basis of as an -vector space and    the function is bijective (so that the cardinality of is ).   Concerning (a), for , we have for some and . For each , is an -linear combination of a finite set of elements of . Combining these gives that is in the -span of .  To prove linear independence, it suffices to prove that if and be distinct elements of and respectively, then the set is linearly independent. Suppose for some . Since the 's are -linearly independent and and , we get that, for each , . Using now that the 's are -linearly independent, we have that for all and all , . This proves is linearly independent over , and hence is linearly independent over .  Concerning (b), if for some , then , and since the 's are -linearly independent, we must have and hence .   "
},
{
  "id": "ex-rwc-for-all-wnotinr",
  "level": "2",
  "url": "sec-algebraic.html#ex-rwc-for-all-wnotinr",
  "type": "Example",
  "number": "15.38",
  "title": "",
  "body": " Say is a field extension of prime degree . Given , by the we have . Since , and so . It follows that , whence . As a (very simple) example of this, since is prime, for any complex number that is not real.  "
},
{
  "id": "ex-degree-and-x2-5",
  "level": "2",
  "url": "sec-algebraic.html#ex-degree-and-x2-5",
  "type": "Example",
  "number": "15.39",
  "title": "",
  "body": " Let be the result of adjoining to all of the roots in of . That is, where , , , and . As we shall see later, is an example of a “splitting field\". Let's find .  First, let us note that we can also describe as . This holds since each of belongs to and hence . The opposite containment holds because , with the latter being true because .  Set . Then . Since and is a root of , we have is at most and it will be exactly if and only if is irreducible in . This is unclear.  So instead let's try a different approach. Let . Then since is irreducible in by , we have . Since and is a root of , we have . But since . Note that if and only if . Thus .  By the we conclude that Note that, in hindsight, it must have been true that is irreducible in , since otherwise the would give that .  "
},
{
  "id": "def-algebraic-extension",
  "level": "2",
  "url": "sec-algebraic.html#def-algebraic-extension",
  "type": "Definition",
  "number": "15.40",
  "title": "Algebraic Extension.",
  "body": "Algebraic Extension   A field extension is called algebraic if every element is algebraic over (i.e., if every element of is the root of a non-zero polynomial with coefficients in ). algebraic field extension    "
},
{
  "id": "prop-finite-extensions-are-algebraic",
  "level": "2",
  "url": "sec-algebraic.html#prop-finite-extensions-are-algebraic",
  "type": "Proposition",
  "number": "15.41",
  "title": "Finite Extensions are Algebraic.",
  "body": "Finite Extensions are Algebraic   If is a finite extension of fields, then it is algebraic.    Pick . Since is a -vector subspace of and we have . (One could also appeal to the for this.) So by (4) of Theorem , is algebraic of .   "
},
{
  "id": "exe-infinite-algebraic-extension",
  "level": "2",
  "url": "sec-algebraic.html#exe-infinite-algebraic-extension",
  "type": "Example",
  "number": "15.42",
  "title": "Infinite Algebraic Extension.",
  "body": "Infinite Algebraic Extension  Let and set . Then is a subfield of : To see this, note first that provided . Given , we have and for some and and hence are both in . Since is a field, we have , , and (provided ) all belong to and hence to . This proves is field extension of . It is algebraic over since each is. But it is not a finite extension of , since (since is irreducible in by ) and hence for all .   "
},
{
  "id": "thm-algebraic-extensions-are-transitive",
  "level": "2",
  "url": "sec-algebraic.html#thm-algebraic-extensions-are-transitive",
  "type": "Theorem",
  "number": "15.43",
  "title": "Transitivity of Algebraic Extensions.",
  "body": "Transitivity of Algebraic Extensions   Let be extensions of fields, not necessarily finite.    Then and are algebraic if and only if is algebraic.  Give an example where and are Galois but is not Galois.      Let be extensions of fields, not necessarily finite.  Suppose that and are algebraic extensions. Let . Then is the root of the polynomial with . Notice that is a polynomial in , making is algebraic over this as well. Consider the chain of field extensions Since is algebraic over for all and is algebraic over , by Theorem each step in this chain has finite degree. By the , is finite and thus so is . By the Theorem again, is algebraic over .  Next suppose that is algebraic. Let . Then , and so it is algebraic over . Now let . Then is the root of a polynomial in , which is also in , so is algebraic as well.   is Galois over , and is Galois over , but is not Galois over as the splitting field of has degree .   "
},
{
  "id": "remark-82",
  "level": "2",
  "url": "sec-algebraic.html#remark-82",
  "type": "Remark",
  "number": "15.44",
  "title": "",
  "body": " The converse of this proposition is also true: Given field extensions , if is algebraic then so are and .  "
},
{
  "id": "thm-relatively-prime-extension",
  "level": "2",
  "url": "sec-algebraic.html#thm-relatively-prime-extension",
  "type": "Theorem",
  "number": "15.45",
  "title": "",
  "body": "  Assume that is a finite extension of fields of degree . If is irreducible of degree and then remains irreducible when regarded as an element of the ring .    Let be a finite extension of fields of degree .  Suppose that is irreducible of degree and .  First, note that if then will remain irreducible in  . Suppose then that . There exists an algebraically closed extension such that has a root  . Consider . As is algebraic in we know there exists some unique irreducible minimum polynomial of degree , and thus that  . Using the we see that However, and so for some , so . As we must have . But was defined to be the degree of , which divides . As and , we see that , so for some . As irreducible polynomials multiplied by a constant are still irreducible, we see that is indeed irreducible in .   "
},
{
  "id": "example-130",
  "level": "2",
  "url": "sec-algebraic.html#example-130",
  "type": "Example",
  "number": "15.46",
  "title": "",
  "body": " Let be a non-constant irreducible polynomial of degree in . Let . Because is irreducible and is a PID, is a maximal ideal. Thus is a field , , and is a root of in  . Hence is no longer irreducible by Theorem 2.2  "
},
{
  "id": "sec-closure",
  "level": "1",
  "url": "sec-closure.html",
  "type": "Section",
  "number": "15.3",
  "title": "Algebraic Closures",
  "body": "Algebraic Closures  Clooooosing Time    I think sometimes people really requite the satisfaction of closure.   Diablo Cody   Algebraic Closure   A field is algebraically closed if every non-constant polynomial has a root in  algebraically closed field     is algebraically closed   is algebraically closed. This is the Fundamental Theorem of Algebra.   Equivalent Algebraically Closed Characterizations   The following are equivalent for a field :    is algebraically closed.    Every non-constant polynomial with coefficients in splits completely into (not necessarily distinct) linear factors.    There are no non-trivial algebraic extensions of : If is an algebraic field extension then .           (2): Given a non-constant , by assumption has a root and thus with . But then also has a root and so it too factors, and so on.     (3): Say is algebraic. Pick . Then is a root of some . But since factors completely, .     (1). Pick a non-constant . By , there there is finite extension of in which does have a root. By assumption and so this root must be in .       Algebraic Closure   Given a field , a field is called an algebraic closure of if is an algebraic field extension of and is algebraically closed. algebraic closute       is an algebraic closure of . This follows from the fact that is a finite extension, hence algebraic, and the Fundamental Theorem of Algebra, which we will not prove.   Collection of Algebraic Elements is Algebraically Closed   Let Then is an algebraic closure of .  More generally, if is a field extension and is algebraically closed, then the collection of elements of that are algebraic over is an algebraic closure of .    It is far from clear that is a subfield of , and so we first prove that: Given , we have that and are finite and hence so is . Thus, every element of is algebraic over ; that is, . Since is a field, it follows that contains , and if . This proves that is indeed a subfield of .  It is clear from the definition that is an algebraic field extension.  Given a non-constant , let be one of its roots in (which exists since we assume is algebraically closed). Then is an algebraic extension and hence so is by Proposition . This proves and hence that is algebraically closed.    Existence and Uniqueness of Algebraic Closures   For any field , there exists an algebraic closure of . If and are two algebraic closures of the same field , then there exists a field isomorphism such that (i.e., for all ).    Fake Proof of Existence:  Let be the collection of all algebraic field extensions of . Make into a poset by declaring iff . We prove has a maximal element.  Let be any totally ordered subset of . If is empty, then is an upper bound for . If is non-empty, set . Using that is totally ordered, it is not hard to see that is indeed a field. It clearly contains as a subfield and every element of it is algebraic over . So and it is an upper bound for . By , has a maximal member .  By construction is algebraic over . If were not algebraically closed, then there would be a non-trivial algebraic extension of it, by . But then is algebraic by Proposition , and this contradicts the maximality of .  Why is this only a fake proof? It's because , as we've defined it, is not a set but rather it is something bigger than that. only applies to po sets . How annoying!     "
},
{
  "id": "def-algebraically-closed",
  "level": "2",
  "url": "sec-closure.html#def-algebraically-closed",
  "type": "Definition",
  "number": "15.47",
  "title": "Algebraic Closure.",
  "body": "Algebraic Closure   A field is algebraically closed if every non-constant polynomial has a root in  algebraically closed field    "
},
{
  "id": "exe-c-is-closed",
  "level": "2",
  "url": "sec-closure.html#exe-c-is-closed",
  "type": "Example",
  "number": "15.48",
  "title": "<span class=\"process-math\">\\(\\C\\)<\/span> is algebraically closed.",
  "body": "is algebraically closed   is algebraically closed. This is the Fundamental Theorem of Algebra.  "
},
{
  "id": "prop-equivalencies-of-algebraically-closed",
  "level": "2",
  "url": "sec-closure.html#prop-equivalencies-of-algebraically-closed",
  "type": "Proposition",
  "number": "15.49",
  "title": "Equivalent Algebraically Closed Characterizations.",
  "body": "Equivalent Algebraically Closed Characterizations   The following are equivalent for a field :    is algebraically closed.    Every non-constant polynomial with coefficients in splits completely into (not necessarily distinct) linear factors.    There are no non-trivial algebraic extensions of : If is an algebraic field extension then .           (2): Given a non-constant , by assumption has a root and thus with . But then also has a root and so it too factors, and so on.     (3): Say is algebraic. Pick . Then is a root of some . But since factors completely, .     (1). Pick a non-constant . By , there there is finite extension of in which does have a root. By assumption and so this root must be in .      "
},
{
  "id": "def-algebraic-closure",
  "level": "2",
  "url": "sec-closure.html#def-algebraic-closure",
  "type": "Definition",
  "number": "15.50",
  "title": "Algebraic Closure.",
  "body": "Algebraic Closure   Given a field , a field is called an algebraic closure of if is an algebraic field extension of and is algebraically closed. algebraic closute    "
},
{
  "id": "exe-c-is-the-algebraic-closure-of-r",
  "level": "2",
  "url": "sec-closure.html#exe-c-is-the-algebraic-closure-of-r",
  "type": "Example",
  "number": "15.51",
  "title": "",
  "body": "  is an algebraic closure of . This follows from the fact that is a finite extension, hence algebraic, and the Fundamental Theorem of Algebra, which we will not prove.  "
},
{
  "id": "prop-collection-of-algebraic-elements-is-closed",
  "level": "2",
  "url": "sec-closure.html#prop-collection-of-algebraic-elements-is-closed",
  "type": "Proposition",
  "number": "15.52",
  "title": "Collection of Algebraic Elements is Algebraically Closed.",
  "body": "Collection of Algebraic Elements is Algebraically Closed   Let Then is an algebraic closure of .  More generally, if is a field extension and is algebraically closed, then the collection of elements of that are algebraic over is an algebraic closure of .    It is far from clear that is a subfield of , and so we first prove that: Given , we have that and are finite and hence so is . Thus, every element of is algebraic over ; that is, . Since is a field, it follows that contains , and if . This proves that is indeed a subfield of .  It is clear from the definition that is an algebraic field extension.  Given a non-constant , let be one of its roots in (which exists since we assume is algebraically closed). Then is an algebraic extension and hence so is by Proposition . This proves and hence that is algebraically closed.   "
},
{
  "id": "thm-existence-and-uniqueness-of-algebraic-closures",
  "level": "2",
  "url": "sec-closure.html#thm-existence-and-uniqueness-of-algebraic-closures",
  "type": "Theorem",
  "number": "15.53",
  "title": "Existence and Uniqueness of Algebraic Closures.",
  "body": "Existence and Uniqueness of Algebraic Closures   For any field , there exists an algebraic closure of . If and are two algebraic closures of the same field , then there exists a field isomorphism such that (i.e., for all ).    Fake Proof of Existence:  Let be the collection of all algebraic field extensions of . Make into a poset by declaring iff . We prove has a maximal element.  Let be any totally ordered subset of . If is empty, then is an upper bound for . If is non-empty, set . Using that is totally ordered, it is not hard to see that is indeed a field. It clearly contains as a subfield and every element of it is algebraic over . So and it is an upper bound for . By , has a maximal member .  By construction is algebraic over . If were not algebraically closed, then there would be a non-trivial algebraic extension of it, by . But then is algebraic by Proposition , and this contradicts the maximality of .  Why is this only a fake proof? It's because , as we've defined it, is not a set but rather it is something bigger than that. only applies to po sets . How annoying!   "
},
{
  "id": "sec-splitting",
  "level": "1",
  "url": "sec-splitting.html",
  "type": "Section",
  "number": "15.4",
  "title": "Splitting Fields",
  "body": "Splitting Fields  Split Up and Look For Clues    The best way to carve is not to split.   Laozi   Splitting Field   For a field and non-constant polynomial , a splitting field of over is a field extension such that     splits completely into linear factors in ; that is, for some , and     ; that is, is the smallest subfield of that contains and all the roots of .    splitting field     Splitting Fields    As a silly example, if already splits into linear factors over , then itself is the splitting field of over .  The splitting field of over is .  If is any irreducible quadratic polynomial in , then the splitting field of is .  In general, given , a splitting field of is given by where are all of the roots of in .      More generally, we may speak of the splitting field of a list of polynomials in : it is a field extension over which each polynomial factors completely and which is generated by all the roots of all the polynomials.  Note that given a finite list , a splitting field for this list is identical to a splitting field for their product .   Properties of Splitting Fields   Let be a field and a non-constant polynomial.   There exists a splitting field for over .    If is another splitting field of over , then there is a field isomorphism such that .    The degree of any splitting field of is at most where .       For (1), let be an algebraic closure of , which exists by the previous Theorem. Let be the roots of in , and set .  It is clear is a splitting field.  To prove (2), we proceed by induction on the degree of . If is linear, then the only splitting field of over is itself and so the result is clear in this case. Say and are the roots of in and , respectively, and say they are ordered so that, and are roots of the same irreducible factor of in .  By Corollary there is an isomorphism that fixes . Note that factors as in and that is the splitting field of over , and similarly factors as in and that is the splitting field of over . If we blur our eyes slightly and pretend is the identity map, we can apply the inductive hypothesis, since , to conclude that there is an isomorphism as in the statement. I leave a more rigorous argument to your imaginations.  To prove (3), we also proceed by induction on the degree of , using the same notation as in the proof of (2).  Since is a root of , we have and hence In we have with and, as before, is the splitting field of over , so that by induction . By the       Recall from before that we proved there exists a field extension in which has at least one root. So for some and . We can then find a field extension of in which has at least one root , and so on. In this way we build a field extension such that factors in as for some . Finally, is a splitting field of .    The splitting field of over is , where . It is not hard to see that . We have since is irreducible in (by ). Since and thus , the gives that . By the Theorem, and hence . (We could also have proven this without appealing to the Theorem.)    The splitting field of is This holds since . It is not too hard to see that the degree of this splitting field over is , far smaller than the upper bound given by the Theorem.    Let . Then splits completely in and its roots are the  -th roots of . One of these is . Notice that every other -th root of is a power of this one. We thus see that is the splitting field of over . This field is called the {} of roots of 1 over . This is a somewhat special example: upon joining one of the roots of we got all the others for free. This happens in other examples too, but is certainly {} a general principle.  In particular, we see that the degree of is at most , far less than the bound of given by the Proposition above. In fact, it is at most since factors as , and hence the minimum polynomial of is a divisor of .  When is prime, then is irreducible, as we proved before, and hence it must equal the minimum polynomial of . So, in this case, the degree of is exactly , but it can be smaller than in general; for example, when , and . Note that factors as and of course .  The irreducible polynomial is known as the {}.   The Porism  porism   If is the splitting field over of an irreducible polynomial and if are any two roots of , then there is a field automorphism such that and .    We basically already proved this, but since it is of large importance, let's do so again:  Since are roots of the same irreducible polynomial, by Corollary there is an isomorphism such that and . We have two field maps, (actual inclusion) and the composition of , and they realize as the splitting field of over in two different ways. Since splitting fields are unique, an isomorphism such as exists.     Let be the splitting field of over ; so .   gives that there is a field automorphism of such that . Complex conjugation gives such an isomorphism.  It also gives there is a field automorphism of such that . This is less obvious.    "
},
{
  "id": "def-splitting-field",
  "level": "2",
  "url": "sec-splitting.html#def-splitting-field",
  "type": "Definition",
  "number": "15.54",
  "title": "Splitting Field.",
  "body": "Splitting Field   For a field and non-constant polynomial , a splitting field of over is a field extension such that     splits completely into linear factors in ; that is, for some , and     ; that is, is the smallest subfield of that contains and all the roots of .    splitting field    "
},
{
  "id": "exe-common-splitting-fields",
  "level": "2",
  "url": "sec-splitting.html#exe-common-splitting-fields",
  "type": "Example",
  "number": "15.55",
  "title": "Splitting Fields.",
  "body": "Splitting Fields    As a silly example, if already splits into linear factors over , then itself is the splitting field of over .  The splitting field of over is .  If is any irreducible quadratic polynomial in , then the splitting field of is .  In general, given , a splitting field of is given by where are all of the roots of in .    "
},
{
  "id": "remark-83",
  "level": "2",
  "url": "sec-splitting.html#remark-83",
  "type": "Remark",
  "number": "15.56",
  "title": "",
  "body": " More generally, we may speak of the splitting field of a list of polynomials in : it is a field extension over which each polynomial factors completely and which is generated by all the roots of all the polynomials.  Note that given a finite list , a splitting field for this list is identical to a splitting field for their product .  "
},
{
  "id": "thm-properties-of-splitting-fields",
  "level": "2",
  "url": "sec-splitting.html#thm-properties-of-splitting-fields",
  "type": "Theorem",
  "number": "15.57",
  "title": "Properties of Splitting Fields.",
  "body": "Properties of Splitting Fields   Let be a field and a non-constant polynomial.   There exists a splitting field for over .    If is another splitting field of over , then there is a field isomorphism such that .    The degree of any splitting field of is at most where .       For (1), let be an algebraic closure of , which exists by the previous Theorem. Let be the roots of in , and set .  It is clear is a splitting field.  To prove (2), we proceed by induction on the degree of . If is linear, then the only splitting field of over is itself and so the result is clear in this case. Say and are the roots of in and , respectively, and say they are ordered so that, and are roots of the same irreducible factor of in .  By Corollary there is an isomorphism that fixes . Note that factors as in and that is the splitting field of over , and similarly factors as in and that is the splitting field of over . If we blur our eyes slightly and pretend is the identity map, we can apply the inductive hypothesis, since , to conclude that there is an isomorphism as in the statement. I leave a more rigorous argument to your imaginations.  To prove (3), we also proceed by induction on the degree of , using the same notation as in the proof of (2).  Since is a root of , we have and hence In we have with and, as before, is the splitting field of over , so that by induction . By the     "
},
{
  "id": "remark-84",
  "level": "2",
  "url": "sec-splitting.html#remark-84",
  "type": "Remark",
  "number": "15.58",
  "title": "",
  "body": " Recall from before that we proved there exists a field extension in which has at least one root. So for some and . We can then find a field extension of in which has at least one root , and so on. In this way we build a field extension such that factors in as for some . Finally, is a splitting field of .  "
},
{
  "id": "exe-splitting-fields-and-x3-2",
  "level": "2",
  "url": "sec-splitting.html#exe-splitting-fields-and-x3-2",
  "type": "Example",
  "number": "15.59",
  "title": "",
  "body": " The splitting field of over is , where . It is not hard to see that . We have since is irreducible in (by ). Since and thus , the gives that . By the Theorem, and hence . (We could also have proven this without appealing to the Theorem.)  "
},
{
  "id": "exe-splitting-fields-and-x4-5x26",
  "level": "2",
  "url": "sec-splitting.html#exe-splitting-fields-and-x4-5x26",
  "type": "Example",
  "number": "15.60",
  "title": "",
  "body": " The splitting field of is This holds since . It is not too hard to see that the degree of this splitting field over is , far smaller than the upper bound given by the Theorem.  "
},
{
  "id": "exe-splitting-fields-and-xn-1",
  "level": "2",
  "url": "sec-splitting.html#exe-splitting-fields-and-xn-1",
  "type": "Example",
  "number": "15.61",
  "title": "",
  "body": " Let . Then splits completely in and its roots are the  -th roots of . One of these is . Notice that every other -th root of is a power of this one. We thus see that is the splitting field of over . This field is called the {} of roots of 1 over . This is a somewhat special example: upon joining one of the roots of we got all the others for free. This happens in other examples too, but is certainly {} a general principle.  In particular, we see that the degree of is at most , far less than the bound of given by the Proposition above. In fact, it is at most since factors as , and hence the minimum polynomial of is a divisor of .  When is prime, then is irreducible, as we proved before, and hence it must equal the minimum polynomial of . So, in this case, the degree of is exactly , but it can be smaller than in general; for example, when , and . Note that factors as and of course .  The irreducible polynomial is known as the {}.  "
},
{
  "id": "cor-porism",
  "level": "2",
  "url": "sec-splitting.html#cor-porism",
  "type": "Corollary",
  "number": "15.62",
  "title": "The Porism.",
  "body": "The Porism  porism   If is the splitting field over of an irreducible polynomial and if are any two roots of , then there is a field automorphism such that and .    We basically already proved this, but since it is of large importance, let's do so again:  Since are roots of the same irreducible polynomial, by Corollary there is an isomorphism such that and . We have two field maps, (actual inclusion) and the composition of , and they realize as the splitting field of over in two different ways. Since splitting fields are unique, an isomorphism such as exists.   "
},
{
  "id": "exe-porism-and-x3-2",
  "level": "2",
  "url": "sec-splitting.html#exe-porism-and-x3-2",
  "type": "Example",
  "number": "15.63",
  "title": "",
  "body": " Let be the splitting field of over ; so .   gives that there is a field automorphism of such that . Complex conjugation gives such an isomorphism.  It also gives there is a field automorphism of such that . This is less obvious.  "
},
{
  "id": "sec-separable",
  "level": "1",
  "url": "sec-separable.html",
  "type": "Section",
  "number": "15.5",
  "title": "Separability",
  "body": "Separability  Ring Characteristic    Life is a zero sum game.   George Carlin   Characteristic   Let be a commutative ring. The characteristic of , written , is the unique non-negative generator of the kernel of the unique ring homomorphism . (Recall .) characteristic   Equivalently, is the smallest positive integer such that , if such and integer exists, and otherwise.     Observe that for any integer and commutative ring , we have in (i.e., ) if and only if .     and for any .   Prime Field   For a field its prime field is the smallest subfield of ; i.e., it is the intersection of all subfields of . prime field     Prime Fields and Characteristic   Let be a field.   The characteristic is either or a prime number .     if and only if the prime subfield of is isomorphic to ; for a prime integer if and only if the prime subfield of is isomorphic to .       For the first assertion, consider the unique ring homomorphism . Since is a domain, the kernel of is a prime ideal (since and is a subring of ). The result holds since the only prime ideals of are and for a prime integer . (Note that this proof shows that, more generally, the characteristic of an integral domain must be either or a prime.)  For the second assertion, observe that the smallest {} of is the image of the ring map , and by the first assertion, this image is isomorphic to either or . The latter is already a field and hence it is the prime field of . In the former case, the prime subfield is isomorphic to the field of fractions of , which is .    No Homomorphisms if Different Characteristics   If and are fields such that then there exist no ring homomorphisms from to (or vice versa).    Suppose and are fields and is a ring homomorphism. Let and be the unique ring maps from to and . Since is a ring map from to , we have by the uniqueness of . Since is a field and is not the zero ring, the map is injective. Since is injective, it follows that , and hence we obtain that . By definition of characteristic, we conclude .     Separable Polynomials    I'm trying to be very aware of not repeating myself.   Christoph Waltz   Root Multiplicity   For a field and a polynomial , let be an algebraic closure of and a root of . The multiplicity of in is the number of times appears in the factorization of in . (This number is independent of choice of algebraic closure by uniqueness of such closures up to isomorphism.) mutliplicity of a root     Separable (Polynomial)   Let be a field and a polynomial in . If the multiplicity of every root is , we say is a separable polynomial ; i.e. is separable provided it has no repeated roots. separable polynomial     Derivative   For any field and , define its derivative to be  derivative of a polynomial     Derivatives in Characteristic  If and for , then . So beware that non-constant polynomials can have derivatives! Observe, however, that this cannot occur in characteristic .   GCD and Field Extensions   Let be a field. For , not both of which are , recall that denotes the unique monic generator of the ideal in generated by and .   For any field extension , .    Let be an algebraic closure of . if any only if and have no common roots in .       Let . To prove (1), we note that is the unique monic polynomial such that - for some , - for soem , and - for soem . Since is a subring of , these three properties also hold when we regard as belonging to and thus by the uniqueness property, we have .    is a consequence of (1), since if two polynomials factor completely into linear factors, then they are relatively prime if and only if they have no linear factors in common, which is equivalent to their having no roots in common.      Criteria for Separability   Let be field and an algebraic closure of .   Given and , the multiplicity of in is at least if and only if and .     is separable if and only if in .    If is irreducible in , then is separable if and only if .       For (1), suppose is a root of of multiplicity at least two. Then in and hence , by the Product Rule. It follows that . Conversely, suppose . Since , we have and hence . Since it follows and thus has multiplicity at least two.  For the second assertion, by (1), we have that is separable if and only if and has no common roots in . The result thus follows from the Lemma   For the final assertion, assume is irreducible. Since the degree of is strictly less than the degree of , we have that if and only if .    Separability and   is not separable sine is a double root (it factors as ). As predicted by the Theorem , it fails to be relatively prime to its derivative, which is , since each are divisible by .   is separable in because it has distinct roots in , namely . As predicted by the Theorem, it is relatively prime to its derivative .  Now interpret as belonging to . Then is not separable. As predicted by the Theorem, it is not relatively prime to its derivative, which is .    Let be a field of characteristic and assume is an element such that for all . Then is irreducible but not separable. It is not separable since in we have where . Also note that its derivative is .  It is less obvious that it is irreducible, but we can see that this is indeed the case in a specific example: Take (the field of fractions of the polynomial ring ) and let . In this case, is seen to be irreducible, by , but not separable.   Separability and Characteristic Zero   If is an irreducible polynomial with coefficients in a field of characteristic , then is separable. More generally, if is irreducible of degree and , then is separable.     Separable Field Extensions    Because we are separated everything separates us, even our efforts to join each other.   Simone de Beauvoir   Separable (Field Extension)   An algebraic field extension is called separable if for every its minimum polynomial is separable (i.e., has no repeated roots in an algebraic closure of ). separable field extension     Separability, Algebraic Extensions, and Char Zero   If , then every algebraic field extension is separable.    Suppose is an algebraic extension and let be algebraic over . Then the minimal polynomial of over has coefficients in and is of the form where . We need to show that is separable, i.e., has no repeated roots in its splitting field.  Suppose has a repeated root in some splitting field of , i.e., for some polynomial . Since is also a root of , we have . Since is an algebraic extension, is algebraic over , so . It follows that , i.e., , which means that is a repeated root of , contradicting the assumption that has no repeated roots. Hence is separable, and since was an arbitrary algebraic element of , we conclude that is a separable extension.     Let and be indeterminants. The extension of fields given by identifying with is not separable. Somewhat more precisely, is isomorphism to the subfield of consisting of elements of the form , with the isomorphism given by sending to .  Then is a root of the polynomial . Moreover since is the field of fractions of the PID and is a prime element of , we may apply (and Gauss) to conclude that is irreducible in . This proves that . This polynomial is not separable since in it is equal to and hence has a repeated root. (Or, you may use that its derivative is .)    "
},
{
  "id": "def-ring-characteristic",
  "level": "2",
  "url": "sec-separable.html#def-ring-characteristic",
  "type": "Definition",
  "number": "15.64",
  "title": "Characteristic.",
  "body": "Characteristic   Let be a commutative ring. The characteristic of , written , is the unique non-negative generator of the kernel of the unique ring homomorphism . (Recall .) characteristic   Equivalently, is the smallest positive integer such that , if such and integer exists, and otherwise.   "
},
{
  "id": "remark-85",
  "level": "2",
  "url": "sec-separable.html#remark-85",
  "type": "Remark",
  "number": "15.65",
  "title": "",
  "body": " Observe that for any integer and commutative ring , we have in (i.e., ) if and only if .  "
},
{
  "id": "exe-charz",
  "level": "2",
  "url": "sec-separable.html#exe-charz",
  "type": "Example",
  "number": "15.66",
  "title": "<span class=\"process-math\">\\(\\char(\\Z)\\)<\/span>.",
  "body": "  and for any .  "
},
{
  "id": "def-prime-field",
  "level": "2",
  "url": "sec-separable.html#def-prime-field",
  "type": "Definition",
  "number": "15.67",
  "title": "Prime Field.",
  "body": "Prime Field   For a field its prime field is the smallest subfield of ; i.e., it is the intersection of all subfields of . prime field    "
},
{
  "id": "prop-characteristic-and-prime-fields",
  "level": "2",
  "url": "sec-separable.html#prop-characteristic-and-prime-fields",
  "type": "Proposition",
  "number": "15.68",
  "title": "Prime Fields and Characteristic.",
  "body": "Prime Fields and Characteristic   Let be a field.   The characteristic is either or a prime number .     if and only if the prime subfield of is isomorphic to ; for a prime integer if and only if the prime subfield of is isomorphic to .       For the first assertion, consider the unique ring homomorphism . Since is a domain, the kernel of is a prime ideal (since and is a subring of ). The result holds since the only prime ideals of are and for a prime integer . (Note that this proof shows that, more generally, the characteristic of an integral domain must be either or a prime.)  For the second assertion, observe that the smallest {} of is the image of the ring map , and by the first assertion, this image is isomorphic to either or . The latter is already a field and hence it is the prime field of . In the former case, the prime subfield is isomorphic to the field of fractions of , which is .   "
},
{
  "id": "prop-no-homomorphisms-if-different-characteristics",
  "level": "2",
  "url": "sec-separable.html#prop-no-homomorphisms-if-different-characteristics",
  "type": "Proposition",
  "number": "15.69",
  "title": "No Homomorphisms if Different Characteristics.",
  "body": "No Homomorphisms if Different Characteristics   If and are fields such that then there exist no ring homomorphisms from to (or vice versa).    Suppose and are fields and is a ring homomorphism. Let and be the unique ring maps from to and . Since is a ring map from to , we have by the uniqueness of . Since is a field and is not the zero ring, the map is injective. Since is injective, it follows that , and hence we obtain that . By definition of characteristic, we conclude .   "
},
{
  "id": "def-root-multiplicity",
  "level": "2",
  "url": "sec-separable.html#def-root-multiplicity",
  "type": "Definition",
  "number": "15.70",
  "title": "Root Multiplicity.",
  "body": "Root Multiplicity   For a field and a polynomial , let be an algebraic closure of and a root of . The multiplicity of in is the number of times appears in the factorization of in . (This number is independent of choice of algebraic closure by uniqueness of such closures up to isomorphism.) mutliplicity of a root    "
},
{
  "id": "def-separable-polynomial",
  "level": "2",
  "url": "sec-separable.html#def-separable-polynomial",
  "type": "Definition",
  "number": "15.71",
  "title": "Separable (Polynomial).",
  "body": "Separable (Polynomial)   Let be a field and a polynomial in . If the multiplicity of every root is , we say is a separable polynomial ; i.e. is separable provided it has no repeated roots. separable polynomial    "
},
{
  "id": "def-derivative",
  "level": "2",
  "url": "sec-separable.html#def-derivative",
  "type": "Definition",
  "number": "15.72",
  "title": "Derivative.",
  "body": "Derivative   For any field and , define its derivative to be  derivative of a polynomial    "
},
{
  "id": "exe-derivatives-in-characteristic-p",
  "level": "2",
  "url": "sec-separable.html#exe-derivatives-in-characteristic-p",
  "type": "Example",
  "number": "15.73",
  "title": "Derivatives in Characteristic <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": "Derivatives in Characteristic  If and for , then . So beware that non-constant polynomials can have derivatives! Observe, however, that this cannot occur in characteristic .  "
},
{
  "id": "lem-gcd-and-field-extensions",
  "level": "2",
  "url": "sec-separable.html#lem-gcd-and-field-extensions",
  "type": "Lemma",
  "number": "15.74",
  "title": "GCD and Field Extensions.",
  "body": "GCD and Field Extensions   Let be a field. For , not both of which are , recall that denotes the unique monic generator of the ideal in generated by and .   For any field extension , .    Let be an algebraic closure of . if any only if and have no common roots in .       Let . To prove (1), we note that is the unique monic polynomial such that - for some , - for soem , and - for soem . Since is a subring of , these three properties also hold when we regard as belonging to and thus by the uniqueness property, we have .    is a consequence of (1), since if two polynomials factor completely into linear factors, then they are relatively prime if and only if they have no linear factors in common, which is equivalent to their having no roots in common.     "
},
{
  "id": "prop-criteria-for-separability",
  "level": "2",
  "url": "sec-separable.html#prop-criteria-for-separability",
  "type": "Theorem",
  "number": "15.75",
  "title": "Criteria for Separability.",
  "body": "Criteria for Separability   Let be field and an algebraic closure of .   Given and , the multiplicity of in is at least if and only if and .     is separable if and only if in .    If is irreducible in , then is separable if and only if .       For (1), suppose is a root of of multiplicity at least two. Then in and hence , by the Product Rule. It follows that . Conversely, suppose . Since , we have and hence . Since it follows and thus has multiplicity at least two.  For the second assertion, by (1), we have that is separable if and only if and has no common roots in . The result thus follows from the Lemma   For the final assertion, assume is irreducible. Since the degree of is strictly less than the degree of , we have that if and only if .   "
},
{
  "id": "ex-separability-and-x4-x3-x1",
  "level": "2",
  "url": "sec-separable.html#ex-separability-and-x4-x3-x1",
  "type": "Example",
  "number": "15.76",
  "title": "Separability and <span class=\"process-math\">\\((x^4-x^3-x+1)\\)<\/span>.",
  "body": "Separability and   is not separable sine is a double root (it factors as ). As predicted by the Theorem , it fails to be relatively prime to its derivative, which is , since each are divisible by .   is separable in because it has distinct roots in , namely . As predicted by the Theorem, it is relatively prime to its derivative .  Now interpret as belonging to . Then is not separable. As predicted by the Theorem, it is not relatively prime to its derivative, which is .  "
},
{
  "id": "ex-zpy",
  "level": "2",
  "url": "sec-separable.html#ex-zpy",
  "type": "Example",
  "number": "15.77",
  "title": "<span class=\"process-math\">\\(\\Z\/p(y)\\)<\/span>.",
  "body": " Let be a field of characteristic and assume is an element such that for all . Then is irreducible but not separable. It is not separable since in we have where . Also note that its derivative is .  It is less obvious that it is irreducible, but we can see that this is indeed the case in a specific example: Take (the field of fractions of the polynomial ring ) and let . In this case, is seen to be irreducible, by , but not separable.  "
},
{
  "id": "cor-separability-and-characteristic-zero",
  "level": "2",
  "url": "sec-separable.html#cor-separability-and-characteristic-zero",
  "type": "Corollary",
  "number": "15.78",
  "title": "Separability and Characteristic Zero.",
  "body": "Separability and Characteristic Zero   If is an irreducible polynomial with coefficients in a field of characteristic , then is separable. More generally, if is irreducible of degree and , then is separable.   "
},
{
  "id": "def-separable-field-extension",
  "level": "2",
  "url": "sec-separable.html#def-separable-field-extension",
  "type": "Definition",
  "number": "15.79",
  "title": "Separable (Field Extension).",
  "body": "Separable (Field Extension)   An algebraic field extension is called separable if for every its minimum polynomial is separable (i.e., has no repeated roots in an algebraic closure of ). separable field extension    "
},
{
  "id": "cor-separability-algebraic-extensions-and-char-zero",
  "level": "2",
  "url": "sec-separable.html#cor-separability-algebraic-extensions-and-char-zero",
  "type": "Corollary",
  "number": "15.80",
  "title": "Separability, Algebraic Extensions, and Char Zero.",
  "body": "Separability, Algebraic Extensions, and Char Zero   If , then every algebraic field extension is separable.    Suppose is an algebraic extension and let be algebraic over . Then the minimal polynomial of over has coefficients in and is of the form where . We need to show that is separable, i.e., has no repeated roots in its splitting field.  Suppose has a repeated root in some splitting field of , i.e., for some polynomial . Since is also a root of , we have . Since is an algebraic extension, is algebraic over , so . It follows that , i.e., , which means that is a repeated root of , contradicting the assumption that has no repeated roots. Hence is separable, and since was an arbitrary algebraic element of , we conclude that is a separable extension.   "
},
{
  "id": "ex-f-zpy-subseteq-zpz-l",
  "level": "2",
  "url": "sec-separable.html#ex-f-zpy-subseteq-zpz-l",
  "type": "Example",
  "number": "15.81",
  "title": "<span class=\"process-math\">\\(F = (\\Z\/p)(y) \\subseteq (\\Z\/p)(z) = L\\)<\/span>.",
  "body": " Let and be indeterminants. The extension of fields given by identifying with is not separable. Somewhat more precisely, is isomorphism to the subfield of consisting of elements of the form , with the isomorphism given by sending to .  Then is a root of the polynomial . Moreover since is the field of fractions of the PID and is a prime element of , we may apply (and Gauss) to conclude that is irreducible in . This proves that . This polynomial is not separable since in it is equal to and hence has a repeated root. (Or, you may use that its derivative is .)  "
},
{
  "id": "sec-galext",
  "level": "1",
  "url": "sec-galext.html",
  "type": "Section",
  "number": "16.1",
  "title": "Galois Extensions",
  "body": "Galois Extensions  Group Actions and Automorphism Groups    Give me extension and motion and I will construct the universe.   René Descartes   Field Automorphism Group   Let be a field. The automorphism group of , written , is the collection of field automorphisms of , with the binary operation of composition. automorphism group (fields)    The automorphism group of a field extension , written , is the subgroup of consisting of those field automorphisms of that restrict to the identity on . automorphism group (field extensions)       Some books write for , and call it the Galois group of over . We will reserve that notation for a special type of finite extensions - those that are Galois - and use only for the general case.    Let be a field extension. Then is a group under composition of maps, and is a subgroup of .    I claim has two elements (and so is a cyclic group of order ): the identity map on and the element given as complex conjugation. Each of these is an element of — for , this amounts to the fact that complex conjugation commutes with addition and multiplication of complex numbers (and that it sends to ).  To see these are the only elements of , suppose . For any , we have since . Moreover, and so . Thus or .    For any square-free integer , has order , and its two elements are the identity and the map sending to . Checking that each really is an element of this group and that there are the only two elements in this group is done similarly to    Root Permutations   Let be a field extension, , and .   For all , we have .    If is a root of , then also is a root of .       Let be a field and let . Then the gives that there is an induced ring homomorphism such that for each , we have If and , then .   By assumption, is a homomorphism and it restricts to the identity on . Thus for any polynomial , we have     If is a root of , then showing that is also a root of .       We now come to the main idea connecting field extensions and groups. It concerns the action of the group of automorphisms of a splitting field of a polynomial on the set of roots of that polynomial.  Acts on Roots   Let be the splitting field of a polynomial . Let be the set of distinct roots of in , and let .   The group Aut acts faithfully on , via for all and , and hence is isomorphic to a subgroup of .    If is an irreducible polynomial, then acts transitively on .          Let . To see that the the action above is well-defined, notice that if then by Lemma 6.10. Now we have so the given formula does indeed define an action of on .  This action is faithful: if fixes all the roots of , then it fixes every element of . Thus the corresponding group homomorphism is injective. On the other hand, the group of automorphisms on a set of elements is isomorphic to , so we have an inclusion of into , and thus is isomorphic to a subgroup of .    Let be any two roots of . By Theorem 5.69, there is an isomorphism that fixes .  Our polynomial factors both as and . Since and , we must have . Theorem 5.69 applies, showing there is an automorphism that extends . In particular, fixes , since extends and , so . Moreover, since extends we have . This proves the action is transitive on the set of roots of any irreducible polynomial.       Soon we will show that if is separable but not necessarily irreducible, and is the splitting field of , then the orbits of the action of on the set of roots of are precisely the sets of roots of the same irreducible factor of . But to do so, we will need a little bit of Galois theory.    Let be the splitting field of a polynomial with distinct roots. Then .    We showed in that is isomorphic to a subgroup of , and thus it as at most elements.    We will give an improved version of this result soon.   Let be a field and , where are elements in some extension of that are algebraic over . Each element is uniquely determined by .   A typical question that arises from is to explicitly identify the automorphisms of a splitting field extension as a subgroup of the symmetric group.  and  For a more complicated example, let be the splitting field of over . Recall  Let us ponder how big could be. Pick any . Since is a ring homomorphism, for any we have and thus is also a root of . In other words, for each we have for some . Moreover, since is generated as a field extension of by , the action of on the three roots completely determines the action of on all of . In more detail, every element of is given taking -linear combinations of sums and products and quotients of these roots, and any element of preserves sums, products and -linear combinations.  To summarize, we have proven that there are {} possibilities for . In fact, more is true: The function given by sending to its restriction to the subset is an injective group homomorphism. Thus is isomorphic to a subgroup of . I claim that and hence . I will prove this directly - we will learn of fancier methods to do so later.  First we notice that the field automorphism of given by complex conjugation, namely , permutes the roots of and hence it restricts to a field map from into . Since this map is -linear and injective (as are all field maps) and is a finite dimensional -vector space, this map must be onto as well. So, we obtain an element given by for all . It corresponds .  Next, we apply , which gives such that . So, in the numbering above, corresponds to either or in . We don't really know which of these it is. (In fact, both will occur — the map is not unique.) But either way we have proven the claim: For notice that both subsets and of generated all of .  In other words, every possible permutation of roots of arises as a field automorphism of its splitting field over . This is what I meant before when I said that the roots of are “as symmetric as possible''.   and  Let be the splitting field of the irreducible polynomial . So where . By , the action of on is faithful so that we have an injective group homomorphism .  Note that this map cannot possibly be onto: there is no such that , , , and ; i.e., the permutation of these roots is not realizable by a field automorphism. To see this note that if then . So, any field automorphism that interchanges and would have to also interchange and . In fact, as we shall see, , considerably smaller than .  Let us compute . Note that since and in fact . In the chain of extensions the first one has degree , since is irreducible by , and the second has degree at most since is a root of . It would be less than two if factors in . But since and is not contained in , the second extension cannot be trivial and so must have degree exactly . We conclude . It follows from Proposition that . (In fact, since is the splitting field of a separable polynomial, the Theorem below will tell us that . But we won't appeal to this fact here.)  We claim and is isomorphic to the subgroup of generated by and . (This is isomorphic to .)  The map given by complex conjugation permutes the roots of and it restricts to an automorphism of — specially, it fixes and interchanges and . It follows that complex conjugation determines an element that corresponds to .  By the we get . Since , the degree of must be . This shows that must remain irreducible as a polynomial in ; this is not obvious, but we have now proven it, and this fact will be useful in what we do next.  To construct another element of , we use that that is the splitting field of the polynomial over and that, as we just showed, is irreducible in . We may thus apply Porism (also stated in the Corollary) to get that there is an element such that . We may regard as an element of since, by definition, is a subgroup of . We have since by construction. A key point here is that if we had merely specified to be an element of sending to , then we would have no idea what does to — it was key to define as we did. We then also get and . So corresponds to the permutation .  We have proven that is isomorphic to a subgroup of having order at most (by the Proposition above) and that it contains and . Since the subgroup generated by these two elements has order , the claim follows.    Finite Extensions and Galois Groups    Give me extension and motion and I will construct the universe.   René Descartes   We will now focus on finite field extensions and their automorphism groups. We start by giving a much better upper bound on the order of the automorphism group of a finite field extension.  Order and Degree   Let be a finite field extension. Then If is the splitting field of a separable polynomial in , then     We proceed by induction on . In the base case, , and thus , so is the trivial group, and both statements hold.  Now let and suppose that holds for all and such that . Let . Pick and let , and consider .  Note that is a proper subgroup of . By induction, we have . We claim that it suffices to prove . Indeed, using the Degree Formula and the fact that , if then   To show that , consider the function   By , for any the element is also a root of . For any , we have   Thus is well-defined. Moreover, for any we have which is equivalent to saying that fixes , and equivalently This proves that the function is injective.  By Theorem  . Thus is an inclusion of into a set with at most many elements. Therefore, Now suppose that is separable, so that with for and .  Set and let be the irreducible factor of that has as a root. Notice . As before, we consider and set . Note that is also the splitting field of over , and is also separable. By induction , and it remains to show that   Since is separable, so is , so is exactly the number of distinct roots of . Showing that amounts to the assertion that the injective map is also surjective. This holds since acts transitively on the roots of , as shown in .    The finite field extensions whose automorphism group is as large as possible are very important, and are the main subject of this final chapter.  Galois Extension   A finite field extension is Galois if . In this case we write for , and say is the Galois group of over .    not Galois  I claim is not a Galois extension of . Let be the set of all roots of in . Since , has just one element: . Since , the function is injective by Proposition and so since , we have . Thus it isn't Galois. Since it is separable, must not be a normal extension of .    tells us how to construct Galois extensions:  First Construction of Galois Extensions from Splitting Fields   If is the splitting field of a separable polynomial , then is Galois.    Galois Extension   is a Galois extension of , since it the splitting field of . We proved above that has six elements and , as the Theorem predicts.   Galois and Characteristic  Let be a field of characteristic , for a prime integer , and assume is a finite field extension of such that there exists an element of with but . Then is not Galois since in this case.   We will need the following notation.  Fixed Subfield   If is subgroup of , the subfield of fixed by , denoted , is by definition      Some textbooks write this as .    If is subgroup of , show that is a subfield of .     Let . Then is the subgroup of complex numbers fixed by all the elements in , which we saw in has only two elements, the identity and the conjugation map . Therefore, is the set of complex numbers fixed by conjugation, and thus .     "
},
{
  "id": "def-aut-k",
  "level": "2",
  "url": "sec-galext.html#def-aut-k",
  "type": "Definition",
  "number": "16.1",
  "title": "Field Automorphism Group.",
  "body": "Field Automorphism Group   Let be a field. The automorphism group of , written , is the collection of field automorphisms of , with the binary operation of composition. automorphism group (fields)    The automorphism group of a field extension , written , is the subgroup of consisting of those field automorphisms of that restrict to the identity on . automorphism group (field extensions)     "
},
{
  "id": "exercise-100",
  "level": "2",
  "url": "sec-galext.html#exercise-100",
  "type": "Exercise",
  "number": "16.2",
  "title": "",
  "body": " Let be a field extension. Then is a group under composition of maps, and is a subgroup of .  "
},
{
  "id": "ex-autcr",
  "level": "2",
  "url": "sec-galext.html#ex-autcr",
  "type": "Example",
  "number": "16.3",
  "title": "<span class=\"process-math\">\\(\\Aut(\\C\/\\R)\\)<\/span>.",
  "body": " I claim has two elements (and so is a cyclic group of order ): the identity map on and the element given as complex conjugation. Each of these is an element of — for , this amounts to the fact that complex conjugation commutes with addition and multiplication of complex numbers (and that it sends to ).  To see these are the only elements of , suppose . For any , we have since . Moreover, and so . Thus or .  "
},
{
  "id": "ex-autqsqrt-dq",
  "level": "2",
  "url": "sec-galext.html#ex-autqsqrt-dq",
  "type": "Example",
  "number": "16.4",
  "title": "<span class=\"process-math\">\\(\\Aut(\\Q(\\sqrt d)\/\\Q)\\)<\/span>.",
  "body": " For any square-free integer , has order , and its two elements are the identity and the map sending to . Checking that each really is an element of this group and that there are the only two elements in this group is done similarly to   "
},
{
  "id": "lem-root-perm",
  "level": "2",
  "url": "sec-galext.html#lem-root-perm",
  "type": "Lemma",
  "number": "16.5",
  "title": "Root Permutations.",
  "body": "Root Permutations   Let be a field extension, , and .   For all , we have .    If is a root of , then also is a root of .       Let be a field and let . Then the gives that there is an induced ring homomorphism such that for each , we have If and , then .   By assumption, is a homomorphism and it restricts to the identity on . Thus for any polynomial , we have     If is a root of , then showing that is also a root of .      "
},
{
  "id": "thm-field-aut-action",
  "level": "2",
  "url": "sec-galext.html#thm-field-aut-action",
  "type": "Theorem",
  "number": "16.6",
  "title": "<span class=\"process-math\">\\(\\Aut\\)<\/span> Acts on Roots.",
  "body": "Acts on Roots   Let be the splitting field of a polynomial . Let be the set of distinct roots of in , and let .   The group Aut acts faithfully on , via for all and , and hence is isomorphic to a subgroup of .    If is an irreducible polynomial, then acts transitively on .          Let . To see that the the action above is well-defined, notice that if then by Lemma 6.10. Now we have so the given formula does indeed define an action of on .  This action is faithful: if fixes all the roots of , then it fixes every element of . Thus the corresponding group homomorphism is injective. On the other hand, the group of automorphisms on a set of elements is isomorphic to , so we have an inclusion of into , and thus is isomorphic to a subgroup of .    Let be any two roots of . By Theorem 5.69, there is an isomorphism that fixes .  Our polynomial factors both as and . Since and , we must have . Theorem 5.69 applies, showing there is an automorphism that extends . In particular, fixes , since extends and , so . Moreover, since extends we have . This proves the action is transitive on the set of roots of any irreducible polynomial.      "
},
{
  "id": "cor-aut-order",
  "level": "2",
  "url": "sec-galext.html#cor-aut-order",
  "type": "Corollary",
  "number": "16.7",
  "title": "",
  "body": "  Let be the splitting field of a polynomial with distinct roots. Then .    We showed in that is isomorphic to a subgroup of , and thus it as at most elements.   "
},
{
  "id": "exercise-101",
  "level": "2",
  "url": "sec-galext.html#exercise-101",
  "type": "Exercise",
  "number": "16.8",
  "title": "",
  "body": " Let be a field and , where are elements in some extension of that are algebraic over . Each element is uniquely determined by .  "
},
{
  "id": "ex-aut-and-x3-2",
  "level": "2",
  "url": "sec-galext.html#ex-aut-and-x3-2",
  "type": "Example",
  "number": "16.9",
  "title": "<span class=\"process-math\">\\(\\Aut\\)<\/span> and <span class=\"process-math\">\\((x^3-2)\\)<\/span>.",
  "body": "and  For a more complicated example, let be the splitting field of over . Recall  Let us ponder how big could be. Pick any . Since is a ring homomorphism, for any we have and thus is also a root of . In other words, for each we have for some . Moreover, since is generated as a field extension of by , the action of on the three roots completely determines the action of on all of . In more detail, every element of is given taking -linear combinations of sums and products and quotients of these roots, and any element of preserves sums, products and -linear combinations.  To summarize, we have proven that there are {} possibilities for . In fact, more is true: The function given by sending to its restriction to the subset is an injective group homomorphism. Thus is isomorphic to a subgroup of . I claim that and hence . I will prove this directly - we will learn of fancier methods to do so later.  First we notice that the field automorphism of given by complex conjugation, namely , permutes the roots of and hence it restricts to a field map from into . Since this map is -linear and injective (as are all field maps) and is a finite dimensional -vector space, this map must be onto as well. So, we obtain an element given by for all . It corresponds .  Next, we apply , which gives such that . So, in the numbering above, corresponds to either or in . We don't really know which of these it is. (In fact, both will occur — the map is not unique.) But either way we have proven the claim: For notice that both subsets and of generated all of .  In other words, every possible permutation of roots of arises as a field automorphism of its splitting field over . This is what I meant before when I said that the roots of are “as symmetric as possible''.  "
},
{
  "id": "exe-lq-and-x4-2",
  "level": "2",
  "url": "sec-galext.html#exe-lq-and-x4-2",
  "type": "Example",
  "number": "16.10",
  "title": "<span class=\"process-math\">\\([L:\\Q]\\)<\/span> and <span class=\"process-math\">\\((x^4-2)\\)<\/span>.",
  "body": "and  Let be the splitting field of the irreducible polynomial . So where . By , the action of on is faithful so that we have an injective group homomorphism .  Note that this map cannot possibly be onto: there is no such that , , , and ; i.e., the permutation of these roots is not realizable by a field automorphism. To see this note that if then . So, any field automorphism that interchanges and would have to also interchange and . In fact, as we shall see, , considerably smaller than .  Let us compute . Note that since and in fact . In the chain of extensions the first one has degree , since is irreducible by , and the second has degree at most since is a root of . It would be less than two if factors in . But since and is not contained in , the second extension cannot be trivial and so must have degree exactly . We conclude . It follows from Proposition that . (In fact, since is the splitting field of a separable polynomial, the Theorem below will tell us that . But we won't appeal to this fact here.)  We claim and is isomorphic to the subgroup of generated by and . (This is isomorphic to .)  The map given by complex conjugation permutes the roots of and it restricts to an automorphism of — specially, it fixes and interchanges and . It follows that complex conjugation determines an element that corresponds to .  By the we get . Since , the degree of must be . This shows that must remain irreducible as a polynomial in ; this is not obvious, but we have now proven it, and this fact will be useful in what we do next.  To construct another element of , we use that that is the splitting field of the polynomial over and that, as we just showed, is irreducible in . We may thus apply Porism (also stated in the Corollary) to get that there is an element such that . We may regard as an element of since, by definition, is a subgroup of . We have since by construction. A key point here is that if we had merely specified to be an element of sending to , then we would have no idea what does to — it was key to define as we did. We then also get and . So corresponds to the permutation .  We have proven that is isomorphic to a subgroup of having order at most (by the Proposition above) and that it contains and . Since the subgroup generated by these two elements has order , the claim follows.  "
},
{
  "id": "thm-aut-order",
  "level": "2",
  "url": "sec-galext.html#thm-aut-order",
  "type": "Theorem",
  "number": "16.11",
  "title": "Order and Degree.",
  "body": "Order and Degree   Let be a finite field extension. Then If is the splitting field of a separable polynomial in , then     We proceed by induction on . In the base case, , and thus , so is the trivial group, and both statements hold.  Now let and suppose that holds for all and such that . Let . Pick and let , and consider .  Note that is a proper subgroup of . By induction, we have . We claim that it suffices to prove . Indeed, using the Degree Formula and the fact that , if then   To show that , consider the function   By , for any the element is also a root of . For any , we have   Thus is well-defined. Moreover, for any we have which is equivalent to saying that fixes , and equivalently This proves that the function is injective.  By Theorem  . Thus is an inclusion of into a set with at most many elements. Therefore, Now suppose that is separable, so that with for and .  Set and let be the irreducible factor of that has as a root. Notice . As before, we consider and set . Note that is also the splitting field of over , and is also separable. By induction , and it remains to show that   Since is separable, so is , so is exactly the number of distinct roots of . Showing that amounts to the assertion that the injective map is also surjective. This holds since acts transitively on the roots of , as shown in .   "
},
{
  "id": "def-galois-extension",
  "level": "2",
  "url": "sec-galext.html#def-galois-extension",
  "type": "Definition",
  "number": "16.12",
  "title": "Galois Extension.",
  "body": "Galois Extension   A finite field extension is Galois if . In this case we write for , and say is the Galois group of over .   "
},
{
  "id": "exe-qsqrt32-not-galois",
  "level": "2",
  "url": "sec-galext.html#exe-qsqrt32-not-galois",
  "type": "Example",
  "number": "16.13",
  "title": "<span class=\"process-math\">\\(\\Q(\\sqrt[3]2)\\)<\/span> not Galois.",
  "body": "not Galois  I claim is not a Galois extension of . Let be the set of all roots of in . Since , has just one element: . Since , the function is injective by Proposition and so since , we have . Thus it isn't Galois. Since it is separable, must not be a normal extension of .  "
},
{
  "id": "cor-gal-construction",
  "level": "2",
  "url": "sec-galext.html#cor-gal-construction",
  "type": "Corollary",
  "number": "16.14",
  "title": "First Construction of Galois Extensions from Splitting Fields.",
  "body": "First Construction of Galois Extensions from Splitting Fields   If is the splitting field of a separable polynomial , then is Galois.   "
},
{
  "id": "exe-galois-extension",
  "level": "2",
  "url": "sec-galext.html#exe-galois-extension",
  "type": "Example",
  "number": "16.15",
  "title": "Galois Extension.",
  "body": "Galois Extension   is a Galois extension of , since it the splitting field of . We proved above that has six elements and , as the Theorem predicts.  "
},
{
  "id": "exe-galois-and-characteristic-p",
  "level": "2",
  "url": "sec-galext.html#exe-galois-and-characteristic-p",
  "type": "Example",
  "number": "16.16",
  "title": "Galois and Characteristic <span class=\"process-math\">\\(p\\)<\/span>.",
  "body": "Galois and Characteristic  Let be a field of characteristic , for a prime integer , and assume is a finite field extension of such that there exists an element of with but . Then is not Galois since in this case.  "
},
{
  "id": "def-fixed-subfield",
  "level": "2",
  "url": "sec-galext.html#def-fixed-subfield",
  "type": "Definition",
  "number": "16.17",
  "title": "Fixed Subfield.",
  "body": "Fixed Subfield   If is subgroup of , the subfield of fixed by , denoted , is by definition    "
},
{
  "id": "exercise-102",
  "level": "2",
  "url": "sec-galext.html#exercise-102",
  "type": "Exercise",
  "number": "16.18",
  "title": "",
  "body": " If is subgroup of , show that is a subfield of .  "
},
{
  "id": "example-150",
  "level": "2",
  "url": "sec-galext.html#example-150",
  "type": "Example",
  "number": "16.19",
  "title": "",
  "body": "  Let . Then is the subgroup of complex numbers fixed by all the elements in , which we saw in has only two elements, the identity and the conjugation map . Therefore, is the set of complex numbers fixed by conjugation, and thus .   "
},
{
  "id": "sec-ftgt",
  "level": "1",
  "url": "sec-ftgt.html",
  "type": "Section",
  "number": "16.2",
  "title": "The Fundamental Theorem of Galois Theory",
  "body": "The Fundamental Theorem of Galois Theory  The Fundamental Theorem: Statement and Uses  Intermediate Field   Given a field extension , an intermediate field is a subfield of that contains , so that . intermediate field     Intermediate Extensions are Galois   If is a (finite) Galois extension, then so is for any intermediate field .    If is the splitting field over of a separable polynomial , then is also the splitting field over of the same polynomial, now regarded as belonging to .     In the setting of the , need not be Galois over .      is Galois over but is not Galois over .    Fundamental Theorem of Galois Theory  FTGT  fundamental theorem of Galois theory  Galois correspondance   Suppose is a (finite) Galois field extension. Then the functions given by is a bijection whose inverse is given by Moreover, this bijective correspondence enjoys the following properties:    and each reverse the order of inclusions.     and convert degrees of extensions to indices of subgroups:    or, equivalently,     .       Normal subgroups correspond to intermediate fields that are Galois over :   If then is Galois.    If is Galois, then .       If for a normal subgroup , then .    If are subgroups of with corresponding fixed subfields and , then    and      and .          First, we need to check that both functions are well-defined. For each intermediary field , we know from Corollary 6.31 that is also Galois, and hence it makes sense to write ; moreover, any is an automorphism of that fixes , and thus , so . This shows that is well-defined. Conversely, given a subgroup of is a subfield of by Exercise 18.  Next, we need to check that and are indeed inverse functions. Given a subgroup of , we have by Artin’s Theorem. Thus Conversely, given an intermediate field is Galois by Corollary 6.31, and hence by Corollary 6.24. Thus This establishes the fact that is indeed a bijective correspondence.  Now we check that satisfies the given list of properties. For brevity, set .   The fact that the correspondence is order reversing follows from the definitions. Given intermediate fields , any automorphism of that preserves must also preserve , thus . Conversely, if , then every that is fixed by every must also be fixed in particular by every element of , so .    By definition of Galois extension, . By Artin’s Theorem, for any subgroup the extension is also Galois, and thus by definition . Using the Degree Formula, we have So if , then and the formula above can be rewritten as     Suppose is an intermediate field that is Galois over . Fix and . Since is Galois, by Corollary 6.26 the polynomial is separable and all of its roots are in . By Lemma is also a root of , and thus .  Suppose . For any we have , so . Thus   This proves that and hence that . We have shown that if is Galois over , then the corresponding subgroup of is normal.  For the converse, consider a normal subgroup and the corresponding intermediate field , so that . We will show that is the splitting field over of a separable polynomial in , and hence is Galois over by Corollary 6.18.  Pick any and set . By Corollary 6.26, is separable and all of its roots belong to . We claim that all the roots must in fact belong to . Since is irreducible and is Galois, by Corollary acts transitively on the set of roots of . Thus, given be any other root of , there is a with . Since is normal, for any we have for some . But fixes , so . Therefore, which shows that is also fixed by . But then . Therefore, contains all the roots of , and thus must contain the splitting field of .  We have for some . If are the distinct polynomials among , then is the splitting field of the separable polynomial . By Corollary 6.28, is Galois over .  If for a normal subgroup , then .    Let for a normal subgroup of . We want to show that is isomorphic to .  For each , we claim that . By Lemma 6.10, for all the element is also a root of . But since is Galois, it must contain all of the roots of , by Corollary 6.26, so . Thus , so the restriction of to determines an injective field homomorphism . Since , this map is also a linear transformation of vector spaces over . But is a finite vector space over , and any injective linear transformation must be bijective. We conclude that is an automorphism of . We thus have a well-defined function   Moreover, this map is a group homomorphism by construction. The kernel is the subgroup of of automorphisms that restrict to the identity on , which is precisely . Hence we have an induced injective group homomorphism But , so this map must be an isomorphism.       Galois Correspondence and Lattices   The Galois correspondence induces a lattice isomorphism between the lattice of intermediate fields of a Galois extension and the “dual'' of the lattice of subgroups of .    FTGT and   Let be the splitting field of over . Let's use the fundamental theorem to list all intermediate fields for and to determine which are Galois over . Notice that without the theorem, it isn't even obvious that there are only a finite number of such intermediate fields.    We know corresponds to the element subgroup of generated by and where we number the roots as .  This group is isomorphic to and we can make this isomorphism explicit by labeling the four corners of a square by , counter-clockwise. So, is rotation by degrees and is reflection about the line joining vertices and .  The subgroup lattice and intermediate field lattice are represented below, with normal subgroups and Galois extensions highlighted (boxed).   and the lattices are of subgroups of and intermediate fields of are   The intermediate fields are the fixed subfields of associated to each of these subgroups. In some sense, this answers the question, but let's find explicit generators for at least some of these.   corresponds to and corresponds to .  Set . has degree over . It is clear (and ) belongs to and since , we must have .  Likewise .   also has degree four over . Let and note . If , then would be fixed by a subgroup of index that contains , and the only possibility is . But sends to . So we must have and hence .  I'll skip the details on and , but they are and .   has degree equal to over and so we merely need to find a single, non-rational element of fixed by . Since (which can be seen by looking back at how we built originally or by noting that ), we get .  I'll skip the details on , but it is .   also has degree two over and so we just need to find a single non-rational element fixed by the two generators of . Note that and so is fixed by both and . Thus .  Finally, we note that are normal subgroups of , since is the center of and each of has index two. Some messy checking reveals these to be the only normal subgroups. It follows from the that are the only intermediate fields that are Galois over . As an example, to see directly that is not Galois over , note that is a root of , which is irreducible. But is also a root of this polynomial and it is not in . We conclude from Proposition that is not a normal extension of .    Cyclotomic Extensions Revisited  Let be a field, let be a positive integer such that does not divide , and let be the algebraic closure of . If is a primitive -th root of over , then is a finite Galois extension, and is a cyclic group that is isomorphic to a subgroup of .    If is a field of prime characteristic and is an integer that is divisible by , then is not separable.    Let be an irreducible, fifth degree polynomial in with exactly three real roots and let be its splitting field over . Let the real roots be and the imaginary ones be and . Then is isomorphic to . You will prove this on one of the final exam problems (for a specific case), but let me get you started with a couple {}: Show that is isomorphic to a subgroup of with . You may use (without justifying it) that if is a -cycle in and is any five cycle in , then the subgroup of they generate is all of .   Finding Unique Intermediate Field   If is a finite Galois extension of degree , then I claim there is a unique intermediate field with and that must be a Galois extension over .  To see this, set . Then and by the , there is a unique Sylow -subgroup, call it , and hence is normal in . It follows from the that is an intermediate field that   is Galois over and    satisfies . Moreover, it is unique since has just one subgroup of index .     In fact, there are exactly two groups of order up to isomorphism, the cyclic one and one that is a (non-trivial) semi-direct product of by . So, there are just two possible lattices of intermediate fields for such a field extension.     "
},
{
  "id": "def-intermediate-field",
  "level": "2",
  "url": "sec-ftgt.html#def-intermediate-field",
  "type": "Definition",
  "number": "16.20",
  "title": "Intermediate Field.",
  "body": "Intermediate Field   Given a field extension , an intermediate field is a subfield of that contains , so that . intermediate field    "
},
{
  "id": "prop-intermediate-extensions-are-galois",
  "level": "2",
  "url": "sec-ftgt.html#prop-intermediate-extensions-are-galois",
  "type": "Proposition",
  "number": "16.21",
  "title": "Intermediate Extensions are Galois.",
  "body": "Intermediate Extensions are Galois   If is a (finite) Galois extension, then so is for any intermediate field .    If is the splitting field over of a separable polynomial , then is also the splitting field over of the same polynomial, now regarded as belonging to .   "
},
{
  "id": "warning-5",
  "level": "2",
  "url": "sec-ftgt.html#warning-5",
  "type": "Warning",
  "number": "16.22",
  "title": "",
  "body": " In the setting of the , need not be Galois over .  "
},
{
  "id": "example-151",
  "level": "2",
  "url": "sec-ftgt.html#example-151",
  "type": "Example",
  "number": "16.23",
  "title": "",
  "body": "   is Galois over but is not Galois over .   "
},
{
  "id": "thm-ftgt",
  "level": "2",
  "url": "sec-ftgt.html#thm-ftgt",
  "type": "Theorem",
  "number": "16.24",
  "title": "Fundamental Theorem of Galois Theory.",
  "body": "Fundamental Theorem of Galois Theory  FTGT  fundamental theorem of Galois theory  Galois correspondance   Suppose is a (finite) Galois field extension. Then the functions given by is a bijection whose inverse is given by Moreover, this bijective correspondence enjoys the following properties:    and each reverse the order of inclusions.     and convert degrees of extensions to indices of subgroups:    or, equivalently,     .       Normal subgroups correspond to intermediate fields that are Galois over :   If then is Galois.    If is Galois, then .       If for a normal subgroup , then .    If are subgroups of with corresponding fixed subfields and , then    and      and .          First, we need to check that both functions are well-defined. For each intermediary field , we know from Corollary 6.31 that is also Galois, and hence it makes sense to write ; moreover, any is an automorphism of that fixes , and thus , so . This shows that is well-defined. Conversely, given a subgroup of is a subfield of by Exercise 18.  Next, we need to check that and are indeed inverse functions. Given a subgroup of , we have by Artin’s Theorem. Thus Conversely, given an intermediate field is Galois by Corollary 6.31, and hence by Corollary 6.24. Thus This establishes the fact that is indeed a bijective correspondence.  Now we check that satisfies the given list of properties. For brevity, set .   The fact that the correspondence is order reversing follows from the definitions. Given intermediate fields , any automorphism of that preserves must also preserve , thus . Conversely, if , then every that is fixed by every must also be fixed in particular by every element of , so .    By definition of Galois extension, . By Artin’s Theorem, for any subgroup the extension is also Galois, and thus by definition . Using the Degree Formula, we have So if , then and the formula above can be rewritten as     Suppose is an intermediate field that is Galois over . Fix and . Since is Galois, by Corollary 6.26 the polynomial is separable and all of its roots are in . By Lemma is also a root of , and thus .  Suppose . For any we have , so . Thus   This proves that and hence that . We have shown that if is Galois over , then the corresponding subgroup of is normal.  For the converse, consider a normal subgroup and the corresponding intermediate field , so that . We will show that is the splitting field over of a separable polynomial in , and hence is Galois over by Corollary 6.18.  Pick any and set . By Corollary 6.26, is separable and all of its roots belong to . We claim that all the roots must in fact belong to . Since is irreducible and is Galois, by Corollary acts transitively on the set of roots of . Thus, given be any other root of , there is a with . Since is normal, for any we have for some . But fixes , so . Therefore, which shows that is also fixed by . But then . Therefore, contains all the roots of , and thus must contain the splitting field of .  We have for some . If are the distinct polynomials among , then is the splitting field of the separable polynomial . By Corollary 6.28, is Galois over .  If for a normal subgroup , then .    Let for a normal subgroup of . We want to show that is isomorphic to .  For each , we claim that . By Lemma 6.10, for all the element is also a root of . But since is Galois, it must contain all of the roots of , by Corollary 6.26, so . Thus , so the restriction of to determines an injective field homomorphism . Since , this map is also a linear transformation of vector spaces over . But is a finite vector space over , and any injective linear transformation must be bijective. We conclude that is an automorphism of . We thus have a well-defined function   Moreover, this map is a group homomorphism by construction. The kernel is the subgroup of of automorphisms that restrict to the identity on , which is precisely . Hence we have an induced injective group homomorphism But , so this map must be an isomorphism.      "
},
{
  "id": "cor-galois-correspondence-and-lattices",
  "level": "2",
  "url": "sec-ftgt.html#cor-galois-correspondence-and-lattices",
  "type": "Corollary",
  "number": "16.25",
  "title": "Galois Correspondence and Lattices.",
  "body": "Galois Correspondence and Lattices   The Galois correspondence induces a lattice isomorphism between the lattice of intermediate fields of a Galois extension and the “dual'' of the lattice of subgroups of .   "
},
{
  "id": "exe-ftgt-and-x4-2",
  "level": "2",
  "url": "sec-ftgt.html#exe-ftgt-and-x4-2",
  "type": "Example",
  "number": "16.26",
  "title": "FTGT and <span class=\"process-math\">\\((x^4-2)\\)<\/span>.",
  "body": "FTGT and   Let be the splitting field of over . Let's use the fundamental theorem to list all intermediate fields for and to determine which are Galois over . Notice that without the theorem, it isn't even obvious that there are only a finite number of such intermediate fields.    We know corresponds to the element subgroup of generated by and where we number the roots as .  This group is isomorphic to and we can make this isomorphism explicit by labeling the four corners of a square by , counter-clockwise. So, is rotation by degrees and is reflection about the line joining vertices and .  The subgroup lattice and intermediate field lattice are represented below, with normal subgroups and Galois extensions highlighted (boxed).   and the lattices are of subgroups of and intermediate fields of are   The intermediate fields are the fixed subfields of associated to each of these subgroups. In some sense, this answers the question, but let's find explicit generators for at least some of these.   corresponds to and corresponds to .  Set . has degree over . It is clear (and ) belongs to and since , we must have .  Likewise .   also has degree four over . Let and note . If , then would be fixed by a subgroup of index that contains , and the only possibility is . But sends to . So we must have and hence .  I'll skip the details on and , but they are and .   has degree equal to over and so we merely need to find a single, non-rational element of fixed by . Since (which can be seen by looking back at how we built originally or by noting that ), we get .  I'll skip the details on , but it is .   also has degree two over and so we just need to find a single non-rational element fixed by the two generators of . Note that and so is fixed by both and . Thus .  Finally, we note that are normal subgroups of , since is the center of and each of has index two. Some messy checking reveals these to be the only normal subgroups. It follows from the that are the only intermediate fields that are Galois over . As an example, to see directly that is not Galois over , note that is a root of , which is irreducible. But is also a root of this polynomial and it is not in . We conclude from Proposition that is not a normal extension of .   "
},
{
  "id": "exe-cyclotomic-extensions-revisited",
  "level": "2",
  "url": "sec-ftgt.html#exe-cyclotomic-extensions-revisited",
  "type": "Example",
  "number": "16.27",
  "title": "Cyclotomic Extensions Revisited.",
  "body": "Cyclotomic Extensions Revisited  Let be a field, let be a positive integer such that does not divide , and let be the algebraic closure of . If is a primitive -th root of over , then is a finite Galois extension, and is a cyclic group that is isomorphic to a subgroup of .  "
},
{
  "id": "remark-86",
  "level": "2",
  "url": "sec-ftgt.html#remark-86",
  "type": "Remark",
  "number": "16.28",
  "title": "",
  "body": " If is a field of prime characteristic and is an integer that is divisible by , then is not separable.  "
},
{
  "id": "exe-two-complex-roots-and-s_n",
  "level": "2",
  "url": "sec-ftgt.html#exe-two-complex-roots-and-s_n",
  "type": "Example",
  "number": "16.29",
  "title": "",
  "body": " Let be an irreducible, fifth degree polynomial in with exactly three real roots and let be its splitting field over . Let the real roots be and the imaginary ones be and . Then is isomorphic to . You will prove this on one of the final exam problems (for a specific case), but let me get you started with a couple {}: Show that is isomorphic to a subgroup of with . You may use (without justifying it) that if is a -cycle in and is any five cycle in , then the subgroup of they generate is all of .  "
},
{
  "id": "exe-finding-unique-intermediate-field",
  "level": "2",
  "url": "sec-ftgt.html#exe-finding-unique-intermediate-field",
  "type": "Example",
  "number": "16.30",
  "title": "Finding Unique Intermediate Field.",
  "body": "Finding Unique Intermediate Field   If is a finite Galois extension of degree , then I claim there is a unique intermediate field with and that must be a Galois extension over .  To see this, set . Then and by the , there is a unique Sylow -subgroup, call it , and hence is normal in . It follows from the that is an intermediate field that   is Galois over and    satisfies . Moreover, it is unique since has just one subgroup of index .     In fact, there are exactly two groups of order up to isomorphism, the cyclic one and one that is a (non-trivial) semi-direct product of by . So, there are just two possible lattices of intermediate fields for such a field extension.   "
},
{
  "id": "sec-proving-galois",
  "level": "1",
  "url": "sec-proving-galois.html",
  "type": "Section",
  "number": "16.3",
  "title": "Proving the Fundamental Theorem",
  "body": "Proving the Fundamental Theorem  Artin's Theorem  The following is an important theorem with many corollaries. In fact, the Fundamental Theorem of Galois Theory, which we will state shortly, will follow from this result.  Artin's Theorem   Let be any field. If is a finite subgroup of , then is a subfield of , the extension is finite and Galois, and .    Note that we really do mean equality here: both and are subgroups of , and the theorem states that they coincide. The containment is clear: if , then by construction fixes every element of and hence . The point of the theorem is that the extension is always Galois and that if fixes every element of then must belong to .  We will not prove right away. Instead, we will first deduce some of its consequences, including the . We will then illustrate the Fundamental Theorem with many examples and give some consequences of it too. Only then will we circle back to prove .    The group , where is complex conjugation, is a finite subgroup of Aut . Artin’s Theorem tells us that is finite and Galois with Galois group . It follows that . We already knew all this, since .    As we head towards the , we start by stating a few helpful corollaries of . These will also allow us to show that finite Galois extensions are precisely the splitting fields of separable polynomials.    Let be any Galois extension. Then .    Note that holds by definition, and so by the Degree Formula. But Artin’s Theorem gives and we also know that . Therefore, and thus .      We know from Example 6.14 that is Galois over with Galois group . More precisely, this identification is given by writting and labelling the four corners of a square with , counter-clockwise. Consider and . Then each of and are fixed by every Galois automorphism and hence by Corollary and must be rational. In fact, one can easily see that and , but notice that the exact same reasoning would apply in general to the sum of roots and the product of roots in the splitting field of any separable polynomial.      Let be a Galois extension. For every is separable and all of its roots belong to L. Moreover, acts transitively on the set of roots of .     "
},
{
  "id": "thm-artin",
  "level": "2",
  "url": "sec-proving-galois.html#thm-artin",
  "type": "Theorem",
  "number": "16.31",
  "title": "Artin's Theorem.",
  "body": "Artin's Theorem   Let be any field. If is a finite subgroup of , then is a subfield of , the extension is finite and Galois, and .   "
},
{
  "id": "example-156",
  "level": "2",
  "url": "sec-proving-galois.html#example-156",
  "type": "Example",
  "number": "16.32",
  "title": "",
  "body": "  The group , where is complex conjugation, is a finite subgroup of Aut . Artin’s Theorem tells us that is finite and Galois with Galois group . It follows that . We already knew all this, since .   "
},
{
  "id": "cor-artin",
  "level": "2",
  "url": "sec-proving-galois.html#cor-artin",
  "type": "Corollary",
  "number": "16.33",
  "title": "",
  "body": "  Let be any Galois extension. Then .    Note that holds by definition, and so by the Degree Formula. But Artin’s Theorem gives and we also know that . Therefore, and thus .   "
},
{
  "id": "example-157",
  "level": "2",
  "url": "sec-proving-galois.html#example-157",
  "type": "Example",
  "number": "16.34",
  "title": "",
  "body": "  We know from Example 6.14 that is Galois over with Galois group . More precisely, this identification is given by writting and labelling the four corners of a square with , counter-clockwise. Consider and . Then each of and are fixed by every Galois automorphism and hence by Corollary and must be rational. In fact, one can easily see that and , but notice that the exact same reasoning would apply in general to the sum of roots and the product of roots in the splitting field of any separable polynomial.   "
},
{
  "id": "cor-",
  "level": "2",
  "url": "sec-proving-galois.html#cor-",
  "type": "Corollary",
  "number": "16.35",
  "title": "",
  "body": "  Let be a Galois extension. For every is separable and all of its roots belong to L. Moreover, acts transitively on the set of roots of .   "
},
{
  "id": "sec-sets-functions",
  "level": "1",
  "url": "sec-sets-functions.html",
  "type": "Section",
  "number": "A.1",
  "title": "Sets, Functions, Constructions",
  "body": "Sets, Functions, Constructions  Sets  Set   The basic undefined term we will use is that of a set , which we take to be any collection of objects, not necessarily mathematical ones.     A more rigrorous description of sets can be found using the ZFC axioms for set theory, which are listed around here somewhere.   Empty Set       Sets of Numbers     Natural Numbers  The set of natural numbers is denoted by . natural numbers     Integers  The set of integers is denoted by . integers     Rational Numbers  The set of rational numbers is denoted by . rational numbers     Real Numbers  The set of real numbers is denoted by , and is a little trickier to define both rigorously and succinctly. Heuristically, it is the set of all numbers on the number line. real numbers     Complex Numbers  The set of complex numbers is denoted by . complex numbers         Set Containments   Let and be sets.   The set is a subset of the set , denoted , if implies . subset      The set  equals the set , denoted , if and . set equality     The set is a proper subset of the set , denoted , if and . proper subset         Power Set       Union, Intersection   Let and be sets. The union of and , denoted , is the set defined by . The intersection of and , denoted , is the set defined by . union  intersection       Family of Sets   Let be a set. The set is called a family of sets if all the elements of are sets. The family of sets is indexed by , denoted , if there is a non-empty set such that there is an element for each , and that every element of equals for exactly one . family of sets  indexed family of sets     Union and Intersection of Families of Sets   Let be a family of sets. If is indexed by a set , then we write to denote the union and intersection of the sets in , respectively.    Distributive Laws  distributive law (sets)    and     De Morgan's Laws  De Morgan's laws (sets)    and     Cartesian Product  Cartesian product   Let and for be sets. The Cartesian product  and     Subsets of Cartesian Products  If and , then .    Functions  Function  function  map  domain of a function  range of a function   Let and be sets. A function (also called a map ) from to , denoted , is a subset such that for each , there is one and only one pair in of the form . The set is called the domain of and the set is called the codomain of .    Well-defined Function  well defined function   A function is well-defined if whenever and , then .     All functions are well-defined.   Commonly Encountered Functions     A constant map  is any function of the form for all , where is some fixed element. constant map     The identity map on is the function defined by for all . identity map     The inclusion map from to is the function defined by for all  inclusion map     If is a function, the restriction of to , denoted , is the function defined by for all . restriction of a function     If is a function, an extension of to is any function such that . extension of a function     The projection maps from are the functions and defined by and for all . For any finite collection of sets , projection maps for all can be defined similarly. projection map     Let be a non-empty set, and let be a subset. The characteristic map for in , denoted , is the function defined by  characteristic map       Injective, Surjective, Bijective   Let be a function.   The function is one-to-one (also called an injection and denoted ) if whenever and then . injective  one-to-one     The function is onto (also called a surjection and denoted ) if for every in , there is an in with . surjective  onto     The function is a bijection if is both one-to-one and onto. bijective     The function is invertible if there is a function such that and . invertible function        Surjective iff Image is Codomain A function is surjective if and only if .  Composition  composition of functions   Let , and be sets, and let and be functions. The composition of and is the function defined by for all .    Compositions and 'Jectivity   Let , , and be functions. Then:   If and are one-to-one then is one-to-one.    If is one-to-one then is one-to-one.    If and are onto then is onto.    If is onto then is onto.     is a bijection if and only if is invertible.       Image and Preimage   Let be a function.   The image of a subset of is . image     The preimage of a subset of is . preimage     The image  is .       PAN  PAN   If , and for all , then    .     .     .     .       IASN  IASN   If , and for all , then    .     .     . If moreover is injective, then .     . If moreover is injective, then .       Containments of Images, Preimages   Let .   If , then ; if moreover is injective then .    If then ; if moreover is surjective then .       Inclusions are Injective   If and is the inclusion, then is an injection.    Projection Map   Let for all be sets and let . The projection map is defined by .    Product Inclusion Map  product inclusion map   Let for all be sets, let , and for each , let . The associated product inclusion map is defined for each by , where .    Properties of Projections and Product Inclusions      Projection maps are surjections.    Product inclusion maps are injections.        Set Constructions  Equivalence Relations and Modular Arithmetic  Equivalence Relation  equivalence relation   An equivalence relation  on a set is a subset (where is written ) that satisfies the following for all in :  Reflexivity   , reflexive relation    Symmetry   implies , and symmetric relation    Transitivity   and implies . transitive relation      The equivalence class of an element a of is . equivalence class   The notation denotes the set of equivalence classes , also called the quotient of with respect to .  The function defined by for all is called the quotient map . quotient map     Partition   A partition of a set is a collection of nonempty disjoint subsets of whose union is . partition     EPT   Let be a set.   If is an equivalence relation on , then is a partition of .    If is a partition of , and , then is an equivalence relation on .       The Integers Modulo   Let , and let . The number is congruent to the number modulo , denoted , if for some .  For each , we obtain a relation on given by congruence modulo , which we call the integers modulo  . integers modulo       "
},
{
  "id": "heur-set",
  "level": "2",
  "url": "sec-sets-functions.html#heur-set",
  "type": "Vague Definition",
  "number": "A.1",
  "title": "Set.",
  "body": "Set   The basic undefined term we will use is that of a set , which we take to be any collection of objects, not necessarily mathematical ones.   "
},
{
  "id": "remark-87",
  "level": "2",
  "url": "sec-sets-functions.html#remark-87",
  "type": "Remark",
  "number": "A.2",
  "title": "",
  "body": " A more rigrorous description of sets can be found using the ZFC axioms for set theory, which are listed around here somewhere.  "
},
{
  "id": "ex-empty-set",
  "level": "2",
  "url": "sec-sets-functions.html#ex-empty-set",
  "type": "Example",
  "number": "A.3",
  "title": "Empty Set.",
  "body": "Empty Set      "
},
{
  "id": "ex-number-sets",
  "level": "2",
  "url": "sec-sets-functions.html#ex-number-sets",
  "type": "Example",
  "number": "A.4",
  "title": "Sets of Numbers.",
  "body": "Sets of Numbers     Natural Numbers  The set of natural numbers is denoted by . natural numbers     Integers  The set of integers is denoted by . integers     Rational Numbers  The set of rational numbers is denoted by . rational numbers     Real Numbers  The set of real numbers is denoted by , and is a little trickier to define both rigorously and succinctly. Heuristically, it is the set of all numbers on the number line. real numbers     Complex Numbers  The set of complex numbers is denoted by . complex numbers        "
},
{
  "id": "def-subset",
  "level": "2",
  "url": "sec-sets-functions.html#def-subset",
  "type": "Definition",
  "number": "A.5",
  "title": "Set Containments.",
  "body": "Set Containments   Let and be sets.   The set is a subset of the set , denoted , if implies . subset      The set  equals the set , denoted , if and . set equality     The set is a proper subset of the set , denoted , if and . proper subset        "
},
{
  "id": "ex-power-set",
  "level": "2",
  "url": "sec-sets-functions.html#ex-power-set",
  "type": "Example",
  "number": "A.6",
  "title": "Power Set.",
  "body": "Power Set      "
},
{
  "id": "def-union-intersection",
  "level": "2",
  "url": "sec-sets-functions.html#def-union-intersection",
  "type": "Definition",
  "number": "A.7",
  "title": "Union, Intersection.",
  "body": "Union, Intersection   Let and be sets. The union of and , denoted , is the set defined by . The intersection of and , denoted , is the set defined by . union  intersection      "
},
{
  "id": "def-family-of-sets",
  "level": "2",
  "url": "sec-sets-functions.html#def-family-of-sets",
  "type": "Definition",
  "number": "A.8",
  "title": "Family of Sets.",
  "body": "Family of Sets   Let be a set. The set is called a family of sets if all the elements of are sets. The family of sets is indexed by , denoted , if there is a non-empty set such that there is an element for each , and that every element of equals for exactly one . family of sets  indexed family of sets    "
},
{
  "id": "def-union-intersection-2",
  "level": "2",
  "url": "sec-sets-functions.html#def-union-intersection-2",
  "type": "Definition",
  "number": "A.9",
  "title": "Union and Intersection of Families of Sets.",
  "body": "Union and Intersection of Families of Sets   Let be a family of sets. If is indexed by a set , then we write to denote the union and intersection of the sets in , respectively.   "
},
{
  "id": "thm-distributive-laws",
  "level": "2",
  "url": "sec-sets-functions.html#thm-distributive-laws",
  "type": "Theorem",
  "number": "A.10",
  "title": "Distributive Laws.",
  "body": "Distributive Laws  distributive law (sets)    and    "
},
{
  "id": "thm-de-morgans-laws",
  "level": "2",
  "url": "sec-sets-functions.html#thm-de-morgans-laws",
  "type": "Theorem",
  "number": "A.11",
  "title": "De Morgan's Laws.",
  "body": "De Morgan's Laws  De Morgan's laws (sets)    and    "
},
{
  "id": "def-cartesian-product",
  "level": "2",
  "url": "sec-sets-functions.html#def-cartesian-product",
  "type": "Definition",
  "number": "A.12",
  "title": "Cartesian Product.",
  "body": "Cartesian Product  Cartesian product   Let and for be sets. The Cartesian product  and    "
},
{
  "id": "exe-cartesian-subsets",
  "level": "2",
  "url": "sec-sets-functions.html#exe-cartesian-subsets",
  "type": "Exercise",
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
  "body": "Function  function  map  domain of a function  range of a function   Let and be sets. A function (also called a map ) from to , denoted , is a subset such that for each , there is one and only one pair in of the form . The set is called the domain of and the set is called the codomain of .   "
},
{
  "id": "def-well-defined",
  "level": "2",
  "url": "sec-sets-functions.html#def-well-defined",
  "type": "Definition",
  "number": "A.15",
  "title": "Well-defined Function.",
  "body": "Well-defined Function  well defined function   A function is well-defined if whenever and , then .   "
},
{
  "id": "remark-88",
  "level": "2",
  "url": "sec-sets-functions.html#remark-88",
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
  "body": "Commonly Encountered Functions     A constant map  is any function of the form for all , where is some fixed element. constant map     The identity map on is the function defined by for all . identity map     The inclusion map from to is the function defined by for all  inclusion map     If is a function, the restriction of to , denoted , is the function defined by for all . restriction of a function     If is a function, an extension of to is any function such that . extension of a function     The projection maps from are the functions and defined by and for all . For any finite collection of sets , projection maps for all can be defined similarly. projection map     Let be a non-empty set, and let be a subset. The characteristic map for in , denoted , is the function defined by  characteristic map      "
},
{
  "id": "def-jectivity",
  "level": "2",
  "url": "sec-sets-functions.html#def-jectivity",
  "type": "Definition",
  "number": "A.18",
  "title": "Injective, Surjective, Bijective.",
  "body": "Injective, Surjective, Bijective   Let be a function.   The function is one-to-one (also called an injection and denoted ) if whenever and then . injective  one-to-one     The function is onto (also called a surjection and denoted ) if for every in , there is an in with . surjective  onto     The function is a bijection if is both one-to-one and onto. bijective     The function is invertible if there is a function such that and . invertible function       "
},
{
  "id": "surjective-iff-image",
  "level": "2",
  "url": "sec-sets-functions.html#surjective-iff-image",
  "type": "Exercise",
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
  "body": "Composition  composition of functions   Let , and be sets, and let and be functions. The composition of and is the function defined by for all .   "
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
  "body": "Image and Preimage   Let be a function.   The image of a subset of is . image     The preimage of a subset of is . preimage     The image  is .      "
},
{
  "id": "thm-pan",
  "level": "2",
  "url": "sec-sets-functions.html#thm-pan",
  "type": "Theorem",
  "number": "A.23",
  "title": "PAN.",
  "body": "PAN  PAN   If , and for all , then    .     .     .     .      "
},
{
  "id": "thm-iasn",
  "level": "2",
  "url": "sec-sets-functions.html#thm-iasn",
  "type": "Theorem",
  "number": "A.24",
  "title": "IASN.",
  "body": "IASN  IASN   If , and for all , then    .     .     . If moreover is injective, then .     . If moreover is injective, then .      "
},
{
  "id": "theorem-141",
  "level": "2",
  "url": "sec-sets-functions.html#theorem-141",
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
  "body": "Product Inclusion Map  product inclusion map   Let for all be sets, let , and for each , let . The associated product inclusion map is defined for each by , where .   "
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
  "body": "Equivalence Relation  equivalence relation   An equivalence relation  on a set is a subset (where is written ) that satisfies the following for all in :  Reflexivity   , reflexive relation    Symmetry   implies , and symmetric relation    Transitivity   and implies . transitive relation      The equivalence class of an element a of is . equivalence class   The notation denotes the set of equivalence classes , also called the quotient of with respect to .  The function defined by for all is called the quotient map . quotient map    "
},
{
  "id": "def-partition",
  "level": "2",
  "url": "sec-sets-functions.html#def-partition",
  "type": "Definition",
  "number": "A.31",
  "title": "Partition.",
  "body": "Partition   A partition of a set is a collection of nonempty disjoint subsets of whose union is . partition    "
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
  "body": "The Integers Modulo   Let , and let . The number is congruent to the number modulo , denoted , if for some .  For each , we obtain a relation on given by congruence modulo , which we call the integers modulo  . integers modulo    "
},
{
  "id": "sec-numbers-and-cardinality",
  "level": "1",
  "url": "sec-numbers-and-cardinality.html",
  "type": "Section",
  "number": "A.2",
  "title": "Numbers, Counting, Cardinality",
  "body": "Numbers, Counting, Cardinality  Number Theory  Divisibility   Let and be integers. The integer  divides the integer if and only if there is some integer such that . If divides , we write , and we say that is a factor of , and that is divisible by . divides     Prime   Let be an integer greater than . The integer is a prime number if and only if the only positive integers that divide are and . The integer is a composite number iff it is not a prime number. prime integer     GCD, LCM (*)       Division Algorithm  division algorithm   Let and be integers with . Then there exist unique integers and such that     Coming soon!     Counting (*)  Binomial Coefficient (*)  binomial coefficient       Binomial Theorem (*)  binomial theorem        Cardinality  Cardinality  finite set  cardinality  countably infinite set  uncountably infinite set   A set is finite if there is a bijection for some natural number , or is empty. In this case the number is called the cardinality of .  A set is infinite if is not finite. A set is countable if there is an injection .      Let be a set.   The following are equivalent:    is finite.    There is an onto function for some     There is a one-to-one function for some .       The following are equivalent:    is infinite.    There is an onto function .    There is a one-to-one function .       The following are equivalent:    is countable.    There is an onto function .    There is an injection .               The class of finite sets is closed under: subsets, intersections, finite unions, and finite products.    The class of countable sets is closed under: subsets, intersections, countable unions, and finite products.        "
},
{
  "id": "def-divides",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#def-divides",
  "type": "Definition",
  "number": "A.34",
  "title": "Divisibility.",
  "body": "Divisibility   Let and be integers. The integer  divides the integer if and only if there is some integer such that . If divides , we write , and we say that is a factor of , and that is divisible by . divides    "
},
{
  "id": "def-prime-number",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#def-prime-number",
  "type": "Definition",
  "number": "A.35",
  "title": "Prime.",
  "body": "Prime   Let be an integer greater than . The integer is a prime number if and only if the only positive integers that divide are and . The integer is a composite number iff it is not a prime number. prime integer    "
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
  "body": "Division Algorithm  division algorithm   Let and be integers with . Then there exist unique integers and such that     Coming soon!   "
},
{
  "id": "def-binomial-coefficient",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#def-binomial-coefficient",
  "type": "Definition",
  "number": "A.38",
  "title": "Binomial Coefficient (*).",
  "body": "Binomial Coefficient (*)  binomial coefficient      "
},
{
  "id": "thm-binomial-theorem",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#thm-binomial-theorem",
  "type": "Theorem",
  "number": "A.39",
  "title": "Binomial Theorem (*).",
  "body": "Binomial Theorem (*)  binomial theorem      "
},
{
  "id": "def-cardinality",
  "level": "2",
  "url": "sec-numbers-and-cardinality.html#def-cardinality",
  "type": "Definition",
  "number": "A.40",
  "title": "Cardinality.",
  "body": "Cardinality  finite set  cardinality  countably infinite set  uncountably infinite set   A set is finite if there is a bijection for some natural number , or is empty. In this case the number is called the cardinality of .  A set is infinite if is not finite. A set is countable if there is an injection .   "
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
  "id": "appendix-2",
  "level": "1",
  "url": "appendix-2.html",
  "type": "Appendix",
  "number": "B",
  "title": "Qualifying Exams",
  "body": "Qualifying Exams   UNL Algebra Qualifying Exam Syllabus    May 2022      Let be a finite -group for some prime and a normal subgroup of . Prove that , where is the center of .   Let be a finite -group for some prime and a normal subgroup of .  First, we show that the center of is nontrivial. Suppose by way of contradiction that . We examine the conjugacy classes of . From the , we know Note that for some , meaning that the only divisors of are powers of . In finite groups, each conjugacy class must divide the order of the group by . By , , where . Since , we see that , which is impossible given that . Thus .  As , by it is a union of conjugacy classes of the elements it contains, one of which is . Assume by way of contradiction that , meaning that is the only element in whose conjugacy class is a singleton. This yields However, by  must also be a group, and thus by an analogous element counting argument as above we see that there exists some such that , or that for all . Thankfully, this means that , and thus we have .    A non-abelian group of order .   Prove there exists a non-abelian group of .    Find, with justification, a presentation of the group you found in part (1).      Use a semi-direct product.      Let be the cyclic group of order , and let be the cyclic group of order . Let be the homomorphism defined by for , where we identify with via the isomorphism given by sending the non-identity automorphism to the generator of .  Then the semi-direct product has order and is non-abelian. To see that is non-abelian, note that for any , since has no non-trivial automorphisms.    To find a presentation of , we need to identify the generators and relations. Since and are both cyclic, we can take the generators to be and respectively. Moreover, since is normal in , we have for some .  To determine the value of , note that acts on by automorphisms, and the non-identity automorphism of is inversion . Since , we must have .  Therefore, a presentation of is given by .       Let G be a group of order . Prove that is not simple.   By we know that and . Thus our options are and . Suppose that .  Let act on by conjugation, yielding the homomorphism via the . This map is non-trivial from part (2) of , but does not divide , and thus cannot be injective. Then the kernel of this homomorphism is non-trivial, normal subgroup of by . Thus is not simple.    Let be a commutative ring with identity, and assume . Let and be ideals such that .    Prove .  Prove the following special case of : There is an isomorphism of rings of the form .     Let be a commutative ring with identity, and assume . Let and be ideals such that .     Let . Thus , where each and . As and are both ideals, each term in this sum is contained both in and . Thus, by absorption, . Hence .  Let . Thus and . Note that as , there exists some and such that . So . As we see that , with and . Thus , yielding .    Let be defined by .  Notice that if , we have , and so . Let . Thus and , and so and . Hence , and so .  Observe making a homomorphism of rings.  Let . As , we can write and as and . However, as and , we have .  Consider the element , and observe However, as and , we see Thus is a surjective homomorphism. Hence, by the , we see .       Prove the Rank-Nullity Theorem: If is a field, and are a finite dimensional -vector spaces, and is an -linear transformation, then (Recall the rank of is the dimension of its image and the nullity of is the dimension of its kernel.)   See:     Let be a field and a positive integer. We say an matrix with entries in is unipotent if is nilpotent (i.e., for some ). For the field , find (with complete justification) the number of similarity classes of unipotent matrices and give an explicit representative for each class.   Let , a positive integer, and a unipotent matrix with entries in . Thus is nilpotent. Let be an eigenvalue of . Then , so and . As , we have and .  Notice that as is an eigenvalue of , we have as an eigenvalue of .  Assume inductively that is an eigenvalue of . Notice making an eigenvalue of . Thus if is an eigenvalue of , it is an eigenvalue of as well. As is nilpotent, there exists some such that . This means that . As and is a scalar in a field (and hence integral domain) we have . Thus the only eigenvalue of is , meaning that the only eigenvalue of is .  Eigenvalues of correspond to the roots of , which is a monic quartic polynomial, as is a matrix. Thus , as all roots must be .  Two matrices are similar if and only if they share the same invariant factors. Given that invariant factors divide and each invariant factor must divide the following one, the possible sets of invariant factors for are the following:    ,     ,     ,     , and     .   We identify the companion matrices for each possible invariant factor:              and        We define the following:    ,     ,     ,     , and     .   As each of these matrices is in , they are explicit representatives for each similarity class.    Let be the splitting field of over .    Find, with justification, the degree of over .  Let where , a primitive root of unity. Prove is irreducible in .     Let be the splitting field of over .     First, notice that by ( ) we have irreducible in .  The roots of are the following:                             As is monic and irreducible, it is the minimum polynomial of . Let and notice .  Notice that , a primitive -th root of unity, is the root of , the fourth cyclotomic polynomial, which is monic and irreducible in by . Thus is the minimum polynomial of and .  We know that , as every generator of can be written using and . Let , , and . By the , we have    , and thus      , and thus    As and we know that .  Thus we have .    Let where . From Part (a) we know . As , we know that has degree . As is a monic polynomial of degree , we see that it is the minimum polynomial and thus irreducible.       Let be the splitting field of over . Prove there exists a unique intermediate field such that and is a Galois extension.   Let be the splitting field of over . Let be a primitive fourth root of unity. Thus .  Notice that the roots of are the following:    ,     ,     , and     .   Thus .  Using with we see that is irreducible in . Let , and notice that is the minimum polynomial of . Let and observe .  As is the root of the monic irreducible polynomial we have and . Thus is isomorphic to a subgroup of of order , making it .  Notice that is an extension of degree , and thus by the we have a subgroup such that . As we have , and thus . This makes the cyclic subgroup of generated by a reflection, the only element of order in , making it unique. This is also a normal subgroup of , making Galois over .    Assume is an algebraic field extension such that every non-constant polynomial in splits completely into linear factors in . Prove is an algebraic closure of .   Let be an algebraic field extension such that every non-constant polynomial in splits completely into linear factors in .  Let be a polynomial in , so , with , and let be a root of . There [[Theorem – Existence and Uniqueness of Algebraic Closures|exists]] some field extension such that is algebraically closed, meaning . Notice that is algebraic over .  Consider the chain of field extensions making algebraic over as well. As every non-constant polynomial in splits completely into linear factors in , this yields .     "
},
{
  "id": "exercise-105",
  "level": "2",
  "url": "exercises-qual.html#exercise-105",
  "type": "Exercise",
  "number": "B.1",
  "title": "",
  "body": " Let be a finite -group for some prime and a normal subgroup of . Prove that , where is the center of .   Let be a finite -group for some prime and a normal subgroup of .  First, we show that the center of is nontrivial. Suppose by way of contradiction that . We examine the conjugacy classes of . From the , we know Note that for some , meaning that the only divisors of are powers of . In finite groups, each conjugacy class must divide the order of the group by . By , , where . Since , we see that , which is impossible given that . Thus .  As , by it is a union of conjugacy classes of the elements it contains, one of which is . Assume by way of contradiction that , meaning that is the only element in whose conjugacy class is a singleton. This yields However, by  must also be a group, and thus by an analogous element counting argument as above we see that there exists some such that , or that for all . Thankfully, this means that , and thus we have .  "
},
{
  "id": "exercise-106",
  "level": "2",
  "url": "exercises-qual.html#exercise-106",
  "type": "Exercise",
  "number": "B.2",
  "title": "",
  "body": " A non-abelian group of order .   Prove there exists a non-abelian group of .    Find, with justification, a presentation of the group you found in part (1).      Use a semi-direct product.      Let be the cyclic group of order , and let be the cyclic group of order . Let be the homomorphism defined by for , where we identify with via the isomorphism given by sending the non-identity automorphism to the generator of .  Then the semi-direct product has order and is non-abelian. To see that is non-abelian, note that for any , since has no non-trivial automorphisms.    To find a presentation of , we need to identify the generators and relations. Since and are both cyclic, we can take the generators to be and respectively. Moreover, since is normal in , we have for some .  To determine the value of , note that acts on by automorphisms, and the non-identity automorphism of is inversion . Since , we must have .  Therefore, a presentation of is given by .     "
},
{
  "id": "exercise-107",
  "level": "2",
  "url": "exercises-qual.html#exercise-107",
  "type": "Exercise",
  "number": "B.3",
  "title": "",
  "body": " Let G be a group of order . Prove that is not simple.   By we know that and . Thus our options are and . Suppose that .  Let act on by conjugation, yielding the homomorphism via the . This map is non-trivial from part (2) of , but does not divide , and thus cannot be injective. Then the kernel of this homomorphism is non-trivial, normal subgroup of by . Thus is not simple.  "
},
{
  "id": "exercise-108",
  "level": "2",
  "url": "exercises-qual.html#exercise-108",
  "type": "Exercise",
  "number": "B.4",
  "title": "",
  "body": " Let be a commutative ring with identity, and assume . Let and be ideals such that .    Prove .  Prove the following special case of : There is an isomorphism of rings of the form .     Let be a commutative ring with identity, and assume . Let and be ideals such that .     Let . Thus , where each and . As and are both ideals, each term in this sum is contained both in and . Thus, by absorption, . Hence .  Let . Thus and . Note that as , there exists some and such that . So . As we see that , with and . Thus , yielding .    Let be defined by .  Notice that if , we have , and so . Let . Thus and , and so and . Hence , and so .  Observe making a homomorphism of rings.  Let . As , we can write and as and . However, as and , we have .  Consider the element , and observe However, as and , we see Thus is a surjective homomorphism. Hence, by the , we see .     "
},
{
  "id": "exercise-109",
  "level": "2",
  "url": "exercises-qual.html#exercise-109",
  "type": "Exercise",
  "number": "B.5",
  "title": "",
  "body": " Prove the Rank-Nullity Theorem: If is a field, and are a finite dimensional -vector spaces, and is an -linear transformation, then (Recall the rank of is the dimension of its image and the nullity of is the dimension of its kernel.)   See:   "
},
{
  "id": "exercise-110",
  "level": "2",
  "url": "exercises-qual.html#exercise-110",
  "type": "Exercise",
  "number": "B.6",
  "title": "",
  "body": " Let be a field and a positive integer. We say an matrix with entries in is unipotent if is nilpotent (i.e., for some ). For the field , find (with complete justification) the number of similarity classes of unipotent matrices and give an explicit representative for each class.   Let , a positive integer, and a unipotent matrix with entries in . Thus is nilpotent. Let be an eigenvalue of . Then , so and . As , we have and .  Notice that as is an eigenvalue of , we have as an eigenvalue of .  Assume inductively that is an eigenvalue of . Notice making an eigenvalue of . Thus if is an eigenvalue of , it is an eigenvalue of as well. As is nilpotent, there exists some such that . This means that . As and is a scalar in a field (and hence integral domain) we have . Thus the only eigenvalue of is , meaning that the only eigenvalue of is .  Eigenvalues of correspond to the roots of , which is a monic quartic polynomial, as is a matrix. Thus , as all roots must be .  Two matrices are similar if and only if they share the same invariant factors. Given that invariant factors divide and each invariant factor must divide the following one, the possible sets of invariant factors for are the following:    ,     ,     ,     , and     .   We identify the companion matrices for each possible invariant factor:              and        We define the following:    ,     ,     ,     , and     .   As each of these matrices is in , they are explicit representatives for each similarity class.  "
},
{
  "id": "exercise-111",
  "level": "2",
  "url": "exercises-qual.html#exercise-111",
  "type": "Exercise",
  "number": "B.7",
  "title": "",
  "body": " Let be the splitting field of over .    Find, with justification, the degree of over .  Let where , a primitive root of unity. Prove is irreducible in .     Let be the splitting field of over .     First, notice that by ( ) we have irreducible in .  The roots of are the following:                             As is monic and irreducible, it is the minimum polynomial of . Let and notice .  Notice that , a primitive -th root of unity, is the root of , the fourth cyclotomic polynomial, which is monic and irreducible in by . Thus is the minimum polynomial of and .  We know that , as every generator of can be written using and . Let , , and . By the , we have    , and thus      , and thus    As and we know that .  Thus we have .    Let where . From Part (a) we know . As , we know that has degree . As is a monic polynomial of degree , we see that it is the minimum polynomial and thus irreducible.     "
},
{
  "id": "exercise-112",
  "level": "2",
  "url": "exercises-qual.html#exercise-112",
  "type": "Exercise",
  "number": "B.8",
  "title": "",
  "body": " Let be the splitting field of over . Prove there exists a unique intermediate field such that and is a Galois extension.   Let be the splitting field of over . Let be a primitive fourth root of unity. Thus .  Notice that the roots of are the following:    ,     ,     , and     .   Thus .  Using with we see that is irreducible in . Let , and notice that is the minimum polynomial of . Let and observe .  As is the root of the monic irreducible polynomial we have and . Thus is isomorphic to a subgroup of of order , making it .  Notice that is an extension of degree , and thus by the we have a subgroup such that . As we have , and thus . This makes the cyclic subgroup of generated by a reflection, the only element of order in , making it unique. This is also a normal subgroup of , making Galois over .  "
},
{
  "id": "exercise-113",
  "level": "2",
  "url": "exercises-qual.html#exercise-113",
  "type": "Exercise",
  "number": "B.9",
  "title": "",
  "body": " Assume is an algebraic field extension such that every non-constant polynomial in splits completely into linear factors in . Prove is an algebraic closure of .   Let be an algebraic field extension such that every non-constant polynomial in splits completely into linear factors in .  Let be a polynomial in , so , with , and let be a root of . There [[Theorem – Existence and Uniqueness of Algebraic Closures|exists]] some field extension such that is algebraically closed, meaning . Notice that is algebraic over .  Consider the chain of field extensions making algebraic over as well. As every non-constant polynomial in splits completely into linear factors in , this yields .  "
},
{
  "id": "index",
  "level": "1",
  "url": "index.html",
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
