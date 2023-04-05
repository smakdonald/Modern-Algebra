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
  "id": "group-basics",
  "level": "1",
  "url": "group-basics.html",
  "type": "Section",
  "number": "1.1",
  "title": "Group Basics",
  "body": " Group Basics    Most great learning happens in groups.   Ken Robinson    Binary Operation  binary-operation   A binary operation on a set is a function      We often write instead of for simplicity.     A group is a pair where is a set and is a on , called group multiplication , satisfying the following properties:   (Associativity) for all we have     (Identity Element) there exists such that for all     (Inverses) for each , there is an element such that .        Although a group is a pair, we will usually refer to the group by only naming the underlying set, .    We say that is closed under the operation , when we want to emphasize that for any the result of the operation, , is an element of . However note that closure is really part of the definition of a binary operation on a set, and it is implicitly assumed whenever we consider such an operation.    Properties of Groups      In a group , the element satisfying the second axiom of is unique, and we thus refer to it as the identity element of .    In a group , for each , the element satisfying the last axiom of is unique, and we thus refer to it as the the inverse of and we will henceforth denote it by .          Suppose there exist two elements and such that and for all . Then Thus only one element can satisfy this property, making the identity element unique.    For a given , if and fo some and , then .         A group is an abelian group if is commutative; i.e., for all . Often, but not always, the group operation for an abelian group is written as instead of . In this case the inverse of an element is written .     Group Arithmetic   If is a group and , then:   if , then .    if , then .     .     .     .          Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!        Group Examples     The trivial subgroup is the group with a single element      , and are all abelian groups, where denotes traditional addition.    For any set , the permutations on  form a non-abelian group under composition.    For any positive integer , let By invertible I mean those matrices that have two-sided inverses, but in turns out that if an matrix has a left inverse then it it is automatically a right inverse too, and vice versa. Then is a non-abelian group under matrix multiplication.    For any , let denote the integers modulo . Then is an abelian group where denotes addition modulo .         Let and be groups. Then is a group, where denotes the Cartesian Product of and , and the operation is defined     Coming soon to an OER near you!      Let be groups. Then is a group, with its operation defined similary to that in     Coming soon to an OER near you!      In a group , the order of an element  is the least positive integer such that . If no such exists, we say has infinite order. We write for the order of .      The order of a group  is the cardinality of the set , denoted .      Every group of order is abelian.    Let be a group with elements, and suppose there are elements such that for some elements . Since , we must have , , and . Since has only elements and , either or . Without loss, say the former occurs. But implies and we know commutes with , and hence this is not possible. If , then and if then , both of which are impossible. Since were arbitrary, must be abelian.      Let be a group and any element.   Prove that if , then are all distinct elements of .    Prove that if , then for all integers (positive or negative) with .    Conclude in all cases.         Let be groups and let be elements of .   Prove that and in particular .    Prove or disprove: if have finite order then has finite order.         If then .      Group Examples   For each of the following, prove that the given set and operation forms a group.    Prove that each of the groups given in are indeed groups.      Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!      Groups of Units      , , and are each abelian groups under multiplicaton.    Let be a prime integer. Then is an abelian group under multiplicaton.   These are examples of groups of units , which will be defined explicitely and explored more generally later on See:     Give an example of a pair that satisfies axioms 1 and 2 of and an element of that has a left inverse but not a right inverse.   Coming soon to an OER near you!     Let be a group.     Let be an element of finite order. Show that has finite order for any integer , and in fact     Prove that for all in , holds.       "
},
{
  "id": "def-binop",
  "level": "2",
  "url": "group-basics.html#def-binop",
  "type": "Definition",
  "number": "1.1",
  "title": "Binary Operation.",
  "body": " Binary Operation  binary-operation   A binary operation on a set is a function    "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "group-basics.html#remark-1",
  "type": "Remark",
  "number": "1.2",
  "title": "",
  "body": " We often write instead of for simplicity.  "
},
{
  "id": "def-group",
  "level": "2",
  "url": "group-basics.html#def-group",
  "type": "Definition",
  "number": "1.3",
  "title": "",
  "body": "  A group is a pair where is a set and is a on , called group multiplication , satisfying the following properties:   (Associativity) for all we have     (Identity Element) there exists such that for all     (Inverses) for each , there is an element such that .      "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "group-basics.html#remark-2",
  "type": "Remark",
  "number": "1.4",
  "title": "",
  "body": " Although a group is a pair, we will usually refer to the group by only naming the underlying set, .  "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "group-basics.html#remark-3",
  "type": "Remark",
  "number": "1.5",
  "title": "",
  "body": " We say that is closed under the operation , when we want to emphasize that for any the result of the operation, , is an element of . However note that closure is really part of the definition of a binary operation on a set, and it is implicitly assumed whenever we consider such an operation.  "
},
{
  "id": "thm-properties-of-groups",
  "level": "2",
  "url": "group-basics.html#thm-properties-of-groups",
  "type": "Theorem",
  "number": "1.6",
  "title": "Properties of Groups.",
  "body": " Properties of Groups      In a group , the element satisfying the second axiom of is unique, and we thus refer to it as the identity element of .    In a group , for each , the element satisfying the last axiom of is unique, and we thus refer to it as the the inverse of and we will henceforth denote it by .          Suppose there exist two elements and such that and for all . Then Thus only one element can satisfy this property, making the identity element unique.    For a given , if and fo some and , then .      "
},
{
  "id": "def-abelian",
  "level": "2",
  "url": "group-basics.html#def-abelian",
  "type": "Definition",
  "number": "1.7",
  "title": "",
  "body": "  A group is an abelian group if is commutative; i.e., for all . Often, but not always, the group operation for an abelian group is written as instead of . In this case the inverse of an element is written .   "
},
{
  "id": "lem-group-arithmetic",
  "level": "2",
  "url": "group-basics.html#lem-group-arithmetic",
  "type": "Lemma",
  "number": "1.8",
  "title": "Group Arithmetic.",
  "body": " Group Arithmetic   If is a group and , then:   if , then .    if , then .     .     .     .          Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!      "
},
{
  "id": "ex-group-examples",
  "level": "2",
  "url": "group-basics.html#ex-group-examples",
  "type": "Example",
  "number": "1.9",
  "title": "Group Examples.",
  "body": " Group Examples     The trivial subgroup is the group with a single element      , and are all abelian groups, where denotes traditional addition.    For any set , the permutations on  form a non-abelian group under composition.    For any positive integer , let By invertible I mean those matrices that have two-sided inverses, but in turns out that if an matrix has a left inverse then it it is automatically a right inverse too, and vice versa. Then is a non-abelian group under matrix multiplication.    For any , let denote the integers modulo . Then is an abelian group where denotes addition modulo .     "
},
{
  "id": "lem-direct-product-group",
  "level": "2",
  "url": "group-basics.html#lem-direct-product-group",
  "type": "Lemma",
  "number": "1.10",
  "title": "",
  "body": "  Let and be groups. Then is a group, where denotes the Cartesian Product of and , and the operation is defined     Coming soon to an OER near you!   "
},
{
  "id": "thm-dirprop-gp",
  "level": "2",
  "url": "group-basics.html#thm-dirprop-gp",
  "type": "Theorem",
  "number": "1.11",
  "title": "",
  "body": "  Let be groups. Then is a group, with its operation defined similary to that in     Coming soon to an OER near you!   "
},
{
  "id": "def-element-order",
  "level": "2",
  "url": "group-basics.html#def-element-order",
  "type": "Definition",
  "number": "1.12",
  "title": "",
  "body": "  In a group , the order of an element  is the least positive integer such that . If no such exists, we say has infinite order. We write for the order of .   "
},
{
  "id": "def-order-group",
  "level": "2",
  "url": "group-basics.html#def-order-group",
  "type": "Definition",
  "number": "1.13",
  "title": "",
  "body": "  The order of a group  is the cardinality of the set , denoted .   "
},
{
  "id": "prop-order-4-abelian",
  "level": "2",
  "url": "group-basics.html#prop-order-4-abelian",
  "type": "Proposition",
  "number": "1.14",
  "title": "",
  "body": "  Every group of order is abelian.    Let be a group with elements, and suppose there are elements such that for some elements . Since , we must have , , and . Since has only elements and , either or . Without loss, say the former occurs. But implies and we know commutes with , and hence this is not possible. If , then and if then , both of which are impossible. Since were arbitrary, must be abelian.   "
},
{
  "id": "prop-orderelgp",
  "level": "2",
  "url": "group-basics.html#prop-orderelgp",
  "type": "Proposition",
  "number": "1.15",
  "title": "",
  "body": "  Let be a group and any element.   Prove that if , then are all distinct elements of .    Prove that if , then for all integers (positive or negative) with .    Conclude in all cases.      "
},
{
  "id": "prop-",
  "level": "2",
  "url": "group-basics.html#prop-",
  "type": "Proposition",
  "number": "1.16",
  "title": "",
  "body": "  Let be groups and let be elements of .   Prove that and in particular .    Prove or disprove: if have finite order then has finite order.      "
},
{
  "id": "lem-group-element-order",
  "level": "2",
  "url": "group-basics.html#lem-group-element-order",
  "type": "Lemma",
  "number": "1.17",
  "title": "",
  "body": "  If then .   "
},
{
  "id": "exercise-1",
  "level": "2",
  "url": "group-basics.html#exercise-1",
  "type": "Exercise",
  "number": "1.1.1",
  "title": "",
  "body": " Prove that each of the groups given in are indeed groups.      Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!     "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "group-basics.html#exercise-2",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "Groups of Units.",
  "body": "Groups of Units      , , and are each abelian groups under multiplicaton.    Let be a prime integer. Then is an abelian group under multiplicaton.   These are examples of groups of units , which will be defined explicitely and explored more generally later on See:   "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "group-basics.html#exercise-3",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "",
  "body": " Give an example of a pair that satisfies axioms 1 and 2 of and an element of that has a left inverse but not a right inverse.   Coming soon to an OER near you!  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "group-basics.html#exercise-4",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": " Let be a group.     Let be an element of finite order. Show that has finite order for any integer , and in fact     Prove that for all in , holds.     "
},
{
  "id": "sec-common-groups",
  "level": "1",
  "url": "sec-common-groups.html",
  "type": "Section",
  "number": "1.2",
  "title": "Common Groups",
  "body": " Common Groups     Reality prefers symmetry.   Jorge Luis Borges     Dihedral Groups  We now discuss the important example of dihedral groups in detail.    For any integer , let denote a regular -gon. An isometry of the plane is a function that is a bijection and preserves the Euclideal distance for any ). A symmetry of is an isometry that maps to itself.     By the latter I don't mean that fixes each of the points of , but rather that , that is every point of is mapped to a (possibly different) point of and every point of is the image of some point in via . It is clear that the composition of two symmetries of is again a symmetry of , so that composition is a binary operation on .     The dihedral group  is the set of symmetries of the regular -gon equipped with the binary operation given by composition.         Every element in can be written as or for .             Assume that the regular -gon is drawn in the plane with its center at the origin and one vertex on the axis. If denotes rotation about the origin by radians counter-clockwise, then . It's inverse is rotation by clock-wise. For another example, for any line of symmetry of , reflection about that line gives an element of . By our convention for how to draw , the -axis is a line of symmetry for , and we let denote reflection about the -axis.     Prove and .    Prove that is a reflection and hence that .        Symmetric Groups  Let's introduce another very important example: symmetric groups.    A permutation of a set is a bijective function .      For any , the symmetric group is the set of all permutations of the set equipped with the composition of functions as its binary operation.     For any finite set , we may think of as the permutation group of , which is sometimes written .   We can write an element of as a table of values:     If are distinct integers between and , then denotes the element of that satisfies Such a permutation is called a cycle or an -cycle if we want to emphasize its length. A -cycle is often called a transposition .     Determine the number of -cycles in .    Note that distinct lists of integers represent the same cycle if they are cyclical rearrangements of each other, e.g., . However, .     Disjoint cycles commute, that is, if , and then .         Each can be written as a product (composition) of disjoint cycles, and such a factorization is unique up to the ordering of the factors.    Each can be written a product of transpositions; i.e., is generated by transpositions.        For the uniqueness part of statement (1) in the above proposition one needs to establish a convention regarding 1-cycles, that is one needs to stipulate either that the 1-cycles will not be recorded (which gives the shortest such factorization) or that all the 1-cycles will be recorded (which gives the longest such factorization, but also the only one that makes it clear what the number is).    Prove .    Prove that the order of a permutation is the least common multiple of the lengths of the cycles it is a product of.     The Quaternions  For our last example we mention the group of quaternions , written .    The quaternion group  is a set with elements satisfying the following relations: is the identity element and      The quaternion group arises in the study of rotations in three dimensions. It has important applications in computer graphics and computer vision, as well as in physics and algebra.  There isn't much for us to do with right now, but you'd be surprised by the unusual places this group manages to crop up...    Verify that the following are indeed groups:   The dihedral group     The symmetric group     The quaternion group      Provide explicit examples to show , and are not abelian groups.  Uncommon Groups    The Rubik's Cube Group      "
},
{
  "id": "def-iso-and-sym",
  "level": "2",
  "url": "sec-common-groups.html#def-iso-and-sym",
  "type": "Definition",
  "number": "1.18",
  "title": "",
  "body": "  For any integer , let denote a regular -gon. An isometry of the plane is a function that is a bijection and preserves the Euclideal distance for any ). A symmetry of is an isometry that maps to itself.   "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "sec-common-groups.html#remark-4",
  "type": "Remark",
  "number": "1.19",
  "title": "",
  "body": " By the latter I don't mean that fixes each of the points of , but rather that , that is every point of is mapped to a (possibly different) point of and every point of is the image of some point in via . It is clear that the composition of two symmetries of is again a symmetry of , so that composition is a binary operation on .  "
},
{
  "id": "def-d2n",
  "level": "2",
  "url": "sec-common-groups.html#def-d2n",
  "type": "Definition",
  "number": "1.20",
  "title": "",
  "body": "  The dihedral group  is the set of symmetries of the regular -gon equipped with the binary operation given by composition.   "
},
{
  "id": "prop-d2n-order",
  "level": "2",
  "url": "sec-common-groups.html#prop-d2n-order",
  "type": "Proposition",
  "number": "1.21",
  "title": "",
  "body": "     Every element in can be written as or for .           "
},
{
  "id": "problem-1",
  "level": "2",
  "url": "sec-common-groups.html#problem-1",
  "type": "Problem",
  "number": "1.22",
  "title": "",
  "body": " Assume that the regular -gon is drawn in the plane with its center at the origin and one vertex on the axis. If denotes rotation about the origin by radians counter-clockwise, then . It's inverse is rotation by clock-wise. For another example, for any line of symmetry of , reflection about that line gives an element of . By our convention for how to draw , the -axis is a line of symmetry for , and we let denote reflection about the -axis.     Prove and .    Prove that is a reflection and hence that .     "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "sec-common-groups.html#def-permutation",
  "type": "Definition",
  "number": "1.23",
  "title": "",
  "body": "  A permutation of a set is a bijective function .   "
},
{
  "id": "def-perm-group",
  "level": "2",
  "url": "sec-common-groups.html#def-perm-group",
  "type": "Definition",
  "number": "1.24",
  "title": "",
  "body": "  For any , the symmetric group is the set of all permutations of the set equipped with the composition of functions as its binary operation.   "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "sec-common-groups.html#remark-5",
  "type": "Remark",
  "number": "1.25",
  "title": "",
  "body": " For any finite set , we may think of as the permutation group of , which is sometimes written .  "
},
{
  "id": "def-cycle",
  "level": "2",
  "url": "sec-common-groups.html#def-cycle",
  "type": "Definition",
  "number": "1.26",
  "title": "",
  "body": "  If are distinct integers between and , then denotes the element of that satisfies Such a permutation is called a cycle or an -cycle if we want to emphasize its length. A -cycle is often called a transposition .   "
},
{
  "id": "problem-2",
  "level": "2",
  "url": "sec-common-groups.html#problem-2",
  "type": "Problem",
  "number": "1.27",
  "title": "",
  "body": " Determine the number of -cycles in .  "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "sec-common-groups.html#remark-6",
  "type": "Remark",
  "number": "1.28",
  "title": "",
  "body": " Note that distinct lists of integers represent the same cycle if they are cyclical rearrangements of each other, e.g., . However, .  "
},
{
  "id": "prop-disjoint-cycles-commute",
  "level": "2",
  "url": "sec-common-groups.html#prop-disjoint-cycles-commute",
  "type": "Proposition",
  "number": "1.29",
  "title": "",
  "body": "  Disjoint cycles commute, that is, if , and then .   "
},
{
  "id": "prop-cycledecomp",
  "level": "2",
  "url": "sec-common-groups.html#prop-cycledecomp",
  "type": "Proposition",
  "number": "1.30",
  "title": "",
  "body": "     Each can be written as a product (composition) of disjoint cycles, and such a factorization is unique up to the ordering of the factors.    Each can be written a product of transpositions; i.e., is generated by transpositions.      "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "sec-common-groups.html#remark-7",
  "type": "Remark",
  "number": "1.31",
  "title": "",
  "body": " For the uniqueness part of statement (1) in the above proposition one needs to establish a convention regarding 1-cycles, that is one needs to stipulate either that the 1-cycles will not be recorded (which gives the shortest such factorization) or that all the 1-cycles will be recorded (which gives the longest such factorization, but also the only one that makes it clear what the number is).  "
},
{
  "id": "problem-3",
  "level": "2",
  "url": "sec-common-groups.html#problem-3",
  "type": "Problem",
  "number": "1.32",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "problem-4",
  "level": "2",
  "url": "sec-common-groups.html#problem-4",
  "type": "Problem",
  "number": "1.33",
  "title": "",
  "body": " Prove that the order of a permutation is the least common multiple of the lengths of the cycles it is a product of.  "
},
{
  "id": "def-quaternions",
  "level": "2",
  "url": "sec-common-groups.html#def-quaternions",
  "type": "Definition",
  "number": "1.34",
  "title": "",
  "body": "  The quaternion group  is a set with elements satisfying the following relations: is the identity element and     "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec-common-groups.html#exercise-5",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Verify that the following are indeed groups:   The dihedral group     The symmetric group     The quaternion group     "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-common-groups.html#exercise-6",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "Provide explicit examples to show , and are not abelian groups. "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-common-groups.html#exercise-7",
  "type": "Exercise",
  "number": "3",
  "title": "Uncommon Groups.",
  "body": "Uncommon Groups    The Rubik's Cube Group    "
},
{
  "id": "sec-gen-cyclic-gp",
  "level": "1",
  "url": "sec-gen-cyclic-gp.html",
  "type": "Section",
  "number": "1.3",
  "title": "Generators and Cyclic Groups",
  "body": " Generators and Cyclic Groups     How often misused words generate misleading thoughts.   Herbert Spencer     Generators    A subset of a group is said to generate  if every element of is equal to a product of elements of and their inverses (with repetitions allowed).         Prove that is generated by and any reflection.    Prove that if is prime then is generated by any two distinct reflections.         For prove that is generated by and the -cycle .      Cyclic Groups    If is a generated by a single element, i.e. for some , then is called a cyclic group .     Cyclic Generators Need not be Unique   Let be a cyclic group. Then .         Prove is generated by or     Prove is generated by for any integer such that .         Every cyclic group is abelian.      Not Quite Cyclic Groups    Prove that is not a cyclic group.    Prove that is not cyclic.      "
},
{
  "id": "def-groupgenerate",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#def-groupgenerate",
  "type": "Definition",
  "number": "1.35",
  "title": "",
  "body": "  A subset of a group is said to generate  if every element of is equal to a product of elements of and their inverses (with repetitions allowed).   "
},
{
  "id": "prop-d2n-generation",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#prop-d2n-generation",
  "type": "Proposition",
  "number": "1.36",
  "title": "",
  "body": "     Prove that is generated by and any reflection.    Prove that if is prime then is generated by any two distinct reflections.      "
},
{
  "id": "thm-generating-sn",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#thm-generating-sn",
  "type": "Theorem",
  "number": "1.37",
  "title": "",
  "body": "  For prove that is generated by and the -cycle .   "
},
{
  "id": "def-cyclic-group",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#def-cyclic-group",
  "type": "Definition",
  "number": "1.38",
  "title": "",
  "body": "  If is a generated by a single element, i.e. for some , then is called a cyclic group .   "
},
{
  "id": "prop-non-unique-cyclic-generators",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#prop-non-unique-cyclic-generators",
  "type": "Proposition",
  "number": "1.39",
  "title": "Cyclic Generators Need not be Unique.",
  "body": " Cyclic Generators Need not be Unique   Let be a cyclic group. Then .   "
},
{
  "id": "prop-cyclic-groups-and-z",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#prop-cyclic-groups-and-z",
  "type": "Proposition",
  "number": "1.40",
  "title": "",
  "body": "     Prove is generated by or     Prove is generated by for any integer such that .      "
},
{
  "id": "thm-cyclic-abelian",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#thm-cyclic-abelian",
  "type": "Theorem",
  "number": "1.41",
  "title": "",
  "body": "  Every cyclic group is abelian.   "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#exercise-8",
  "type": "Exercise",
  "number": "1",
  "title": "Not Quite Cyclic Groups.",
  "body": "Not Quite Cyclic Groups    Prove that is not a cyclic group.    Prove that is not cyclic.    "
},
{
  "id": "sec-subgroups",
  "level": "1",
  "url": "sec-subgroups.html",
  "type": "Section",
  "number": "1.4",
  "title": "Subgroups",
  "body": " Subgroups     I have this fear of falling in front of large groups of people. That's why I tend not to wear heels.   Taylor Swift     Subgroup Basics    A nonempty subset of a group is called a subgroup , denoted , subgroup provided is a group under the multiplication law of .  A subgroup of a group is a proper subgroup, denoted if .     Subgroup Tests      If a subset of a group is nonempty and closed under multiplication and inversion, then is a subgroup.    If a subset of a group is nonempty and satisfies for all , , then is a subgroup.       We prove the one-step test first.  Assume is non-empty and for all , . Since is non-empty, there is an and hence . Since for any , is an identity element for . For any , , and so every element of has an inverse inside . For we have and thus and hence is closed under . This means that the restriction of the group operation of to is a well-defined group operation. This operation is associative by the axioms for the group . The axioms of a group have now been established for .  Now we prove the two step test.  Assume is non-empty and closed under multiplication and inversion. Then, for we have and . Since the hypothesis of the one-step test is satisfied, is a subgroup of .     Common Subgroups      and are the trivial subgroups of .              Let and define . Then for all .       Properties of Subgroups      Transitivity of Subgroups  If is a subgroup of and is a subgroup of , then is a subgroup of .    Intersections of Subgroups  If is a subgroup of for all in an index set , then is a subgroup of .    Unions of Subgroups  Let be a group and , subgroups. Prove that is a subgroup if and only if or .        Subgroups of Abelian and Cyclic Groups   Let be a subgroup of a group . If is abelian then so is .      Let and be groups. If , then       The alternating group  is the subset of all even cycles of .      Prove that is a subgroup of .      The special linear group with complex entries is defined       Prove that is a subgroup of .      The Center of a Group    The center of a group , often written , is the set of elements of that commute with every element of . That is,       Prove that is an abelian subgroup for any group .      Let be a group. Prove is abelian if any only if .      Let be a subgroup. Prove .      Generated Subgroups    Given a group and a subset of , the subgroup of generated by is If is a set with one element then we write and we refer to this as the cyclic subgroup generated by  .     Let be a group, , and . This is known as the commutator subgroup of .     For a subset of , the elements of can be described as:     Let . Since is a subgroup that contains , it is closed under products and inverses, and thus must contain all elements of .  For the opposite containment, we just need to show the set really is a subgroup. We use the one step test:      since we allow and declare the empty product to be .    If and are in then is also in .     Therefore and (by taking and ) and by the minimality of we obtain .       .      Prove that is the subgroup of generated by all produts of -cyclies (disjoint or not). In symbols,       Future Subgroups   Throughout this course we will encounter numerous important subgroups that will need to be verified as such. We do so here. While these subgroups may seem random now, they will prove to be exceedingly useful in the future.    For any , prove that the set is a subgroup of . The set is known as the centralizer of in , and is explored in greater depth later.     Let be a subgroup of and fix some element . Prove that is a subgroup of of the same order as .    Let be a subgroup of and fix some . Then the set is a subgroup of .    Let be a group with subgroups . Then the set is a subgroup of if and only if , where     Finding Centers Determine the following:    for . Your answer will depend on whether is even or odd.     for .     for .     .     Verify , meaning that is the subgroup of generated by .  Consider the set .   Prove that .    Prove that for each integer , there is a unique subgroup with and that is cyclic.    Prove that every finitely generated subgroup of has finitely many elements.    Prove that is not finitely generated.      Qualifying Exam Problems      May 2021 Problem (1a) Let be a group (not necessarily finite) and a nonempty subset of that is closed under multiplication. Suppose that for all we have . Prove is a subgroup of .  January 2022 Problem (1a) Let be a group, and be subgroups of . Give an example of and such that is not a subgroup of .     "
},
{
  "id": "def-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#def-subgroup",
  "type": "Definition",
  "number": "1.42",
  "title": "",
  "body": "  A nonempty subset of a group is called a subgroup , denoted , subgroup provided is a group under the multiplication law of .  A subgroup of a group is a proper subgroup, denoted if .   "
},
{
  "id": "lem-subgrouptest",
  "level": "2",
  "url": "sec-subgroups.html#lem-subgrouptest",
  "type": "Lemma",
  "number": "1.43",
  "title": "Subgroup Tests.",
  "body": " Subgroup Tests      If a subset of a group is nonempty and closed under multiplication and inversion, then is a subgroup.    If a subset of a group is nonempty and satisfies for all , , then is a subgroup.       We prove the one-step test first.  Assume is non-empty and for all , . Since is non-empty, there is an and hence . Since for any , is an identity element for . For any , , and so every element of has an inverse inside . For we have and thus and hence is closed under . This means that the restriction of the group operation of to is a well-defined group operation. This operation is associative by the axioms for the group . The axioms of a group have now been established for .  Now we prove the two step test.  Assume is non-empty and closed under multiplication and inversion. Then, for we have and . Since the hypothesis of the one-step test is satisfied, is a subgroup of .   "
},
{
  "id": "example-2",
  "level": "2",
  "url": "sec-subgroups.html#example-2",
  "type": "Example",
  "number": "1.44",
  "title": "Common Subgroups.",
  "body": " Common Subgroups      and are the trivial subgroups of .              Let and define . Then for all .     "
},
{
  "id": "thm-subgroup-properties",
  "level": "2",
  "url": "sec-subgroups.html#thm-subgroup-properties",
  "type": "Theorem",
  "number": "1.45",
  "title": "Properties of Subgroups.",
  "body": " Properties of Subgroups      Transitivity of Subgroups  If is a subgroup of and is a subgroup of , then is a subgroup of .    Intersections of Subgroups  If is a subgroup of for all in an index set , then is a subgroup of .    Unions of Subgroups  Let be a group and , subgroups. Prove that is a subgroup if and only if or .      "
},
{
  "id": "prop-abelian-and-cyclic-subgroups",
  "level": "2",
  "url": "sec-subgroups.html#prop-abelian-and-cyclic-subgroups",
  "type": "Proposition",
  "number": "1.46",
  "title": "Subgroups of Abelian and Cyclic Groups.",
  "body": " Subgroups of Abelian and Cyclic Groups   Let be a subgroup of a group . If is abelian then so is .   "
},
{
  "id": "lem-groups-contained-in-groups-are-subgroups",
  "level": "2",
  "url": "sec-subgroups.html#lem-groups-contained-in-groups-are-subgroups",
  "type": "Lemma",
  "number": "1.47",
  "title": "",
  "body": "  Let and be groups. If , then    "
},
{
  "id": "def-alternating-group",
  "level": "2",
  "url": "sec-subgroups.html#def-alternating-group",
  "type": "Definition",
  "number": "1.48",
  "title": "",
  "body": "  The alternating group  is the subset of all even cycles of .   "
},
{
  "id": "prop-alternating-group-is-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#prop-alternating-group-is-subgroup",
  "type": "Proposition",
  "number": "1.49",
  "title": "",
  "body": "  Prove that is a subgroup of .   "
},
{
  "id": "def-special-linear-group",
  "level": "2",
  "url": "sec-subgroups.html#def-special-linear-group",
  "type": "Definition",
  "number": "1.50",
  "title": "",
  "body": "  The special linear group with complex entries is defined    "
},
{
  "id": "prop-slg-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#prop-slg-subgroup",
  "type": "Proposition",
  "number": "1.51",
  "title": "",
  "body": "  Prove that is a subgroup of .   "
},
{
  "id": "def-group-pcenter",
  "level": "2",
  "url": "sec-subgroups.html#def-group-pcenter",
  "type": "Definition",
  "number": "1.52",
  "title": "",
  "body": "  The center of a group , often written , is the set of elements of that commute with every element of . That is,    "
},
{
  "id": "prop-center-is-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#prop-center-is-subgroup",
  "type": "Proposition",
  "number": "1.53",
  "title": "",
  "body": "  Prove that is an abelian subgroup for any group .   "
},
{
  "id": "prop-center-is-group-iff-abelian",
  "level": "2",
  "url": "sec-subgroups.html#prop-center-is-group-iff-abelian",
  "type": "Proposition",
  "number": "1.54",
  "title": "",
  "body": "  Let be a group. Prove is abelian if any only if .   "
},
{
  "id": "prop-centers-and-subgroups",
  "level": "2",
  "url": "sec-subgroups.html#prop-centers-and-subgroups",
  "type": "Proposition",
  "number": "1.55",
  "title": "",
  "body": "  Let be a subgroup. Prove .   "
},
{
  "id": "def-gensubgp",
  "level": "2",
  "url": "sec-subgroups.html#def-gensubgp",
  "type": "Definition",
  "number": "1.56",
  "title": "",
  "body": "  Given a group and a subset of , the subgroup of generated by is If is a set with one element then we write and we refer to this as the cyclic subgroup generated by  .   "
},
{
  "id": "ex-commutator-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#ex-commutator-subgroup",
  "type": "Example",
  "number": "1.57",
  "title": "",
  "body": " Let be a group, , and . This is known as the commutator subgroup of .  "
},
{
  "id": "lem-gensubgp",
  "level": "2",
  "url": "sec-subgroups.html#lem-gensubgp",
  "type": "Lemma",
  "number": "1.58",
  "title": "",
  "body": "  For a subset of , the elements of can be described as:     Let . Since is a subgroup that contains , it is closed under products and inverses, and thus must contain all elements of .  For the opposite containment, we just need to show the set really is a subgroup. We use the one step test:      since we allow and declare the empty product to be .    If and are in then is also in .     Therefore and (by taking and ) and by the minimality of we obtain .   "
},
{
  "id": "corollary-1",
  "level": "2",
  "url": "sec-subgroups.html#corollary-1",
  "type": "Corollary",
  "number": "1.59",
  "title": "",
  "body": "   .   "
},
{
  "id": "prop-generating-an",
  "level": "2",
  "url": "sec-subgroups.html#prop-generating-an",
  "type": "Proposition",
  "number": "1.60",
  "title": "",
  "body": "  Prove that is the subgroup of generated by all produts of -cyclies (disjoint or not). In symbols,    "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec-subgroups.html#exercise-9",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": " For any , prove that the set is a subgroup of . The set is known as the centralizer of in , and is explored in greater depth later.   "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec-subgroups.html#exercise-10",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": " Let be a subgroup of and fix some element . Prove that is a subgroup of of the same order as .  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "sec-subgroups.html#exercise-11",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": " Let be a subgroup of and fix some . Then the set is a subgroup of .  "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "sec-subgroups.html#exercise-12",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": " Let be a group with subgroups . Then the set is a subgroup of if and only if , where   "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "sec-subgroups.html#exercise-13",
  "type": "Exercise",
  "number": "5",
  "title": "Finding Centers.",
  "body": "Finding Centers Determine the following:    for . Your answer will depend on whether is even or odd.     for .     for .     .    "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "sec-subgroups.html#exercise-14",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "Verify , meaning that is the subgroup of generated by . "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "sec-subgroups.html#exercise-15",
  "type": "Exercise",
  "number": "7",
  "title": "",
  "body": "Consider the set .   Prove that .    Prove that for each integer , there is a unique subgroup with and that is cyclic.    Prove that every finitely generated subgroup of has finitely many elements.    Prove that is not finitely generated.    "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "sec-subgroups.html#exercise-16",
  "type": "Exercise",
  "number": "1",
  "title": "May 2021 Problem (1a).",
  "body": "May 2021 Problem (1a) Let be a group (not necessarily finite) and a nonempty subset of that is closed under multiplication. Suppose that for all we have . Prove is a subgroup of . "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "sec-subgroups.html#exercise-17",
  "type": "Exercise",
  "number": "9",
  "title": "January 2022 Problem (1a).",
  "body": "January 2022 Problem (1a) Let be a group, and be subgroups of . Give an example of and such that is not a subgroup of . "
},
{
  "id": "sec-gphoms",
  "level": "1",
  "url": "sec-gphoms.html",
  "type": "Section",
  "number": "2.1",
  "title": "Group Homomorphisms",
  "body": " Group Homomorphisms    In the end, the character of a civilization is encased in its structures.   Frank Gehry     If and are groups, a homomorphism from is is a function such that , where and denote the multiplication rules for and , respectively.    Intuitively, a group homomorphism preserves the algebraic structure of the group, while allowing us to compare and relate different groups. In this way, group homomorphisms allow us to study the properties of groups by comparing them to other groups that we already understand well.   Homormophism Examples     The identity map is a group homomorphism for any group .    The exponential map is a homomorphism.    The natural log map is a homomorphism.    For any positive integer the map determinant map is a group homomorphism.      Specifically, the homomorphism will preserve the additive structure, such as the identity element and inverse elements.   Homomorphism Preservations   If is a homomorphism of groups, then    and     .         Let be a group. Prove there exists a unique group homomorphism .      Let is a homomorphism of groups. The kernel of is the set       Let is a homomorphism of groups. The image of is the set      This is identical to the set-theoretic image.    Properties of Group Homomorphisms      If is a homomorphism of groups, then the image of is a subgroup of .    If is a homomorphism of groups, then the kernel of is a subgroup of .    Prove that if is a group homomorphism and then the preimage of , defined as , is a subgroup of .    If and are group homomorphisms, the composition is a group homomorphism.    A group homomorphism is injective if and only if .    A group homomorphism is surjective if and only if .        Group Homomorphisms Prove that each of the following are group homomorphisms   The function defined by .    The function defined by .    The function defined by      Finding Injective Homomorphisms   Find, with justification, an injective group homomorphism .  Find, with justification, an injective group homomorphism .     "
},
{
  "id": "def-gphom",
  "level": "2",
  "url": "sec-gphoms.html#def-gphom",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": "  If and are groups, a homomorphism from is is a function such that , where and denote the multiplication rules for and , respectively.   "
},
{
  "id": "ex-group-homom-examples",
  "level": "2",
  "url": "sec-gphoms.html#ex-group-homom-examples",
  "type": "Example",
  "number": "2.2",
  "title": "Homormophism Examples.",
  "body": " Homormophism Examples     The identity map is a group homomorphism for any group .    The exponential map is a homomorphism.    The natural log map is a homomorphism.    For any positive integer the map determinant map is a group homomorphism.     "
},
{
  "id": "thm-grphomom-prop",
  "level": "2",
  "url": "sec-gphoms.html#thm-grphomom-prop",
  "type": "Theorem",
  "number": "2.3",
  "title": "Homomorphism Preservations.",
  "body": " Homomorphism Preservations   If is a homomorphism of groups, then    and     .      "
},
{
  "id": "cor-unique-Z-homom",
  "level": "2",
  "url": "sec-gphoms.html#cor-unique-Z-homom",
  "type": "Corollary",
  "number": "2.4",
  "title": "",
  "body": "  Let be a group. Prove there exists a unique group homomorphism .   "
},
{
  "id": "def-group-kernel",
  "level": "2",
  "url": "sec-gphoms.html#def-group-kernel",
  "type": "Definition",
  "number": "2.5",
  "title": "",
  "body": "  Let is a homomorphism of groups. The kernel of is the set    "
},
{
  "id": "def-group-image",
  "level": "2",
  "url": "sec-gphoms.html#def-group-image",
  "type": "Definition",
  "number": "2.6",
  "title": "",
  "body": "  Let is a homomorphism of groups. The image of is the set    "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "sec-gphoms.html#remark-8",
  "type": "Remark",
  "number": "2.7",
  "title": "",
  "body": " This is identical to the set-theoretic image.  "
},
{
  "id": "thm-properties-of-group-homoms",
  "level": "2",
  "url": "sec-gphoms.html#thm-properties-of-group-homoms",
  "type": "Theorem",
  "number": "2.8",
  "title": "Properties of Group Homomorphisms.",
  "body": " Properties of Group Homomorphisms      If is a homomorphism of groups, then the image of is a subgroup of .    If is a homomorphism of groups, then the kernel of is a subgroup of .    Prove that if is a group homomorphism and then the preimage of , defined as , is a subgroup of .    If and are group homomorphisms, the composition is a group homomorphism.    A group homomorphism is injective if and only if .    A group homomorphism is surjective if and only if .      "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "sec-gphoms.html#exercise-18",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "Group Homomorphisms.",
  "body": "Group Homomorphisms Prove that each of the following are group homomorphisms   The function defined by .    The function defined by .    The function defined by     "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "sec-gphoms.html#exercise-19",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "Finding Injective Homomorphisms.",
  "body": "Finding Injective Homomorphisms   Find, with justification, an injective group homomorphism .  Find, with justification, an injective group homomorphism .   "
},
{
  "id": "sec-gpisos",
  "level": "1",
  "url": "sec-gpisos.html",
  "type": "Section",
  "number": "2.2",
  "title": "Group Isomorphisms",
  "body": " Group Isomorphisms    Self preservation is the first law of nature.   Samuel Butler     A homomorphism is called an isomorphism if there exists a homomorphism such that and .  If is an isomorphism, and are called isomorphic , written .     I have defined the notion of isomorphism in differently than given in the textbook. The reason is that the correct meaning of the word isomorphism in any context (sets, groups, rings, fields, topological spaces, whatever) is always a morphism that has a two-sided inverse . In many contexts, such as sets, groups, rings and fields this turns out to be equivalent to the notion of being one-to-one and onto . But there are contexts in which this is not the case. For example a one-to-one and onto continuous map of topological spaces need not be a homeomorphism. (A homeomorphism is a term one uses for isomorphism of topological spaces, for historical reasons.)   Intuitively, a group isomorphism establishes a one-to-one correspondence between the elements of two groups, such that they have exactly the same algebraic structure. This means that the groups are essentially the same, up to a relabeling of their elements.  Group isomorphisms are important because they allow us to identify different groups that have the same algebraic structure. This can simplify the study of groups by reducing the number of cases that need to be considered, and it can also provide insight into the connections between seemingly unrelated groups.    Suppose is a group homomorphism. Then an isomorphism if and only if is bijective (one-to-one and onto).     Moving forward, we will essentially treat as the de-facto definition of a group isomorphism. Rather than end every proof with a reference to , we will instead enshrine its monumental achievements of within this remark. To alleviate some of the corresponding guilt asociated with this decision I have am referencing as many times as possible, as is important and should not be forgotten.    Isomorphism Examples     The identity map is a group isomomorphism for any group .    The exponential and natural logarithm maps from are actually isomorphisms.        Let and be groups. If is an isomorphism, then the following hold:           for all and for all      is abelian if and only if is abelian          is finitely generated if and only if is finitely generated.        These properties sometimes referred to as isomorphism invariants , though not within this text.   Now seems like an exceptional time to recall Part (4) of .    Prove that the composition of two isomorphisms is an isomorphism.      Let be a group. An isomorphism is called an automorphism of .     In we saw that the identity map is a group isomomorphism from a group to itself, making an automorphism. This may prove (pun intended) useful in the following proposition.     Prove that the set of automorphisms of , denoted , is a group under composition.     Notice that we have actually shown that the composition of automorphisms is an automorphism, both through (as automorphisms are isomorphisms) and (as groups are closed under their operation)   We have collected several new methods of determining when two groups are isomorphic. Let's express them explicitly.    Suppose . Then    and     .         Let be a group. Prove that the map given by for all is an automorphism if and only if is abelian.      Let be a group and . Define a map by for all .   Prove that for all .    Prove that is a subgroup of .        Note that as is bijective it is, by definition, a permutation of . This might come up later...     Deepening Isomorphism Understanding      Prove the following:   The group of integers under addition is isomorphic to the group of even integers under addition    The group of real numbers under addition is isomorphic to the group of non-zero real numbers under multiplication     Decide whether the groups and are isomorphic or not, with justification.  Prove the following:    if and only if .               .      Find an example of groups such that there is an isomorphism but is not trivial. Note: since can be rewritten as , the above shows that in general one cannot cancel groups in isomorphisms between direct products.    Section Results       Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!     Qualifying Exam Problems   These problems are from old qualifying exams   June 2020 Problem 2 Let be a group of order for some odd integer . Let be the group of permutations on the elements of (i.e., the group of bijective functions from G to G). You may use without proof that .  Let be given by for all , where is defined by for all . Prove that is an injective group homomorphism.  Prove that if is an element of order then is a product of transpositions.  Prove contains a subgroup of index and is consequently not simple. (Tip: Consider the inverse image under of the subgroup of consisting of the even permutations.)   May 2018 Problem 1(b) Give an example, with justification, of groups and for which is not isomorphic to .    "
},
{
  "id": "def-gpiso",
  "level": "2",
  "url": "sec-gpisos.html#def-gpiso",
  "type": "Definition",
  "number": "2.9",
  "title": "",
  "body": "  A homomorphism is called an isomorphism if there exists a homomorphism such that and .  If is an isomorphism, and are called isomorphic , written .   "
},
{
  "id": "remark-9",
  "level": "2",
  "url": "sec-gpisos.html#remark-9",
  "type": "Remark",
  "number": "2.10",
  "title": "",
  "body": " I have defined the notion of isomorphism in differently than given in the textbook. The reason is that the correct meaning of the word isomorphism in any context (sets, groups, rings, fields, topological spaces, whatever) is always a morphism that has a two-sided inverse . In many contexts, such as sets, groups, rings and fields this turns out to be equivalent to the notion of being one-to-one and onto . But there are contexts in which this is not the case. For example a one-to-one and onto continuous map of topological spaces need not be a homeomorphism. (A homeomorphism is a term one uses for isomorphism of topological spaces, for historical reasons.)  "
},
{
  "id": "thm-iso-def",
  "level": "2",
  "url": "sec-gpisos.html#thm-iso-def",
  "type": "Theorem",
  "number": "2.11",
  "title": "",
  "body": "  Suppose is a group homomorphism. Then an isomorphism if and only if is bijective (one-to-one and onto).   "
},
{
  "id": "remark-10",
  "level": "2",
  "url": "sec-gpisos.html#remark-10",
  "type": "Remark",
  "number": "2.12",
  "title": "",
  "body": " Moving forward, we will essentially treat as the de-facto definition of a group isomorphism. Rather than end every proof with a reference to , we will instead enshrine its monumental achievements of within this remark. To alleviate some of the corresponding guilt asociated with this decision I have am referencing as many times as possible, as is important and should not be forgotten.  "
},
{
  "id": "ex-group-iso-examples",
  "level": "2",
  "url": "sec-gpisos.html#ex-group-iso-examples",
  "type": "Example",
  "number": "2.13",
  "title": "Isomorphism Examples.",
  "body": " Isomorphism Examples     The identity map is a group isomomorphism for any group .    The exponential and natural logarithm maps from are actually isomorphisms.     "
},
{
  "id": "thm-iso-inv",
  "level": "2",
  "url": "sec-gpisos.html#thm-iso-inv",
  "type": "Theorem",
  "number": "2.14",
  "title": "",
  "body": "  Let and be groups. If is an isomorphism, then the following hold:           for all and for all      is abelian if and only if is abelian          is finitely generated if and only if is finitely generated.      "
},
{
  "id": "remark-11",
  "level": "2",
  "url": "sec-gpisos.html#remark-11",
  "type": "Remark",
  "number": "2.15",
  "title": "",
  "body": " These properties sometimes referred to as isomorphism invariants , though not within this text.  "
},
{
  "id": "cor-composition-of-isos",
  "level": "2",
  "url": "sec-gpisos.html#cor-composition-of-isos",
  "type": "Corollary",
  "number": "2.16",
  "title": "",
  "body": "  Prove that the composition of two isomorphisms is an isomorphism.   "
},
{
  "id": "def-gp-automorphism",
  "level": "2",
  "url": "sec-gpisos.html#def-gp-automorphism",
  "type": "Definition",
  "number": "2.17",
  "title": "",
  "body": "  Let be a group. An isomorphism is called an automorphism of .   "
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
  "title": "",
  "body": "  Prove that the set of automorphisms of , denoted , is a group under composition.   "
},
{
  "id": "remark-12",
  "level": "2",
  "url": "sec-gpisos.html#remark-12",
  "type": "Remark",
  "number": "2.20",
  "title": "",
  "body": " Notice that we have actually shown that the composition of automorphisms is an automorphism, both through (as automorphisms are isomorphisms) and (as groups are closed under their operation)  "
},
{
  "id": "prop-aut-properties",
  "level": "2",
  "url": "sec-gpisos.html#prop-aut-properties",
  "type": "Proposition",
  "number": "2.21",
  "title": "",
  "body": "  Suppose . Then    and     .      "
},
{
  "id": "prop-inverse-map-and-abelian",
  "level": "2",
  "url": "sec-gpisos.html#prop-inverse-map-and-abelian",
  "type": "Proposition",
  "number": "2.22",
  "title": "",
  "body": "  Let be a group. Prove that the map given by for all is an automorphism if and only if is abelian.   "
},
{
  "id": "prop-conjugation-automorphism",
  "level": "2",
  "url": "sec-gpisos.html#prop-conjugation-automorphism",
  "type": "Proposition",
  "number": "2.23",
  "title": "",
  "body": "  Let be a group and . Define a map by for all .   Prove that for all .    Prove that is a subgroup of .      "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "sec-gpisos.html#remark-13",
  "type": "Remark",
  "number": "2.24",
  "title": "",
  "body": " Note that as is bijective it is, by definition, a permutation of . This might come up later...  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "sec-gpisos.html#exercise-20",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "Prove the following:   The group of integers under addition is isomorphic to the group of even integers under addition    The group of real numbers under addition is isomorphic to the group of non-zero real numbers under multiplication    "
},
{
  "id": "exercise-21",
  "level": "2",
  "url": "sec-gpisos.html#exercise-21",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": "Decide whether the groups and are isomorphic or not, with justification. "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "sec-gpisos.html#exercise-22",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": "Prove the following:    if and only if .               .    "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "sec-gpisos.html#exercise-23",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": "Find an example of groups such that there is an isomorphism but is not trivial. Note: since can be rewritten as , the above shows that in general one cannot cancel groups in isomorphisms between direct products. "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "sec-gpisos.html#exercise-24",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-25",
  "level": "2",
  "url": "sec-gpisos.html#exercise-25",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "sec-gpisos.html#exercise-26",
  "type": "Exercise",
  "number": "2.2.7",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "sec-gpisos.html#exercise-27",
  "type": "Exercise",
  "number": "2.2.8",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "sec-gpisos.html#exercise-28",
  "type": "Exercise",
  "number": "2.2.9",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "sec-gpisos.html#exercise-29",
  "type": "Exercise",
  "number": "2.2.10",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "sec-gpisos.html#exercise-30",
  "type": "Exercise",
  "number": "2.2.11",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "sec-gpisos.html#exercise-31",
  "type": "Exercise",
  "number": "2.2.12",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "sec-gpisos.html#exercise-32",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "June 2020 Problem 2.",
  "body": "June 2020 Problem 2 Let be a group of order for some odd integer . Let be the group of permutations on the elements of (i.e., the group of bijective functions from G to G). You may use without proof that .  Let be given by for all , where is defined by for all . Prove that is an injective group homomorphism.  Prove that if is an element of order then is a product of transpositions.  Prove contains a subgroup of index and is consequently not simple. (Tip: Consider the inverse image under of the subgroup of consisting of the even permutations.)  "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "sec-gpisos.html#exercise-33",
  "type": "Exercise",
  "number": "2.2.14",
  "title": "May 2018 Problem 1(b).",
  "body": "May 2018 Problem 1(b) Give an example, with justification, of groups and for which is not isomorphic to . "
},
{
  "id": "sec-cylic-homoms",
  "level": "1",
  "url": "sec-cylic-homoms.html",
  "type": "Section",
  "number": "2.3",
  "title": "Cyclic Groups: Revisited",
  "body": " Cyclic Groups: Revisited    There is no way to be in cyclic existence without creating the causes of suffering.   Jetsunma Ahkon Lhamo     I used to wonder when my boomerang would come back to me. Then it hit me.   Ancient Proverb    Cyclic Groups of Relatively Prime Order   Prove that if are positive integers such that then there is a group isomorphism .      Let , where has finite order . Then    .    There is a bijection for each divisor of . Moreover, for each subgroup of , . In particular, all subgroups of are cyclic and there is a unique subgroup of each order.        Universal Mapping Property (UMP) for Cyclic Groups   Assume and let be any group. If , then for each such that , there is a unique group homomorphism such that . If , then for each , there is a unique group homomorphism such that . In both cases this unique group homomorphism is given by for any .     This is a particular case of the universal mapping property of a presentation (which we will covered later), since a cyclic group is either presented by or .    Classification Theorem for Cyclic Groups   Every infinite cyclic group is isomorphic to . Every cyclic group of order is isomorphic to .    "
},
{
  "id": "thm-cyclic-relprime",
  "level": "2",
  "url": "sec-cylic-homoms.html#thm-cyclic-relprime",
  "type": "Theorem",
  "number": "2.25",
  "title": "Cyclic Groups of Relatively Prime Order.",
  "body": " Cyclic Groups of Relatively Prime Order   Prove that if are positive integers such that then there is a group isomorphism .   "
},
{
  "id": "thm-cyclic-divisors-and-subgroups",
  "level": "2",
  "url": "sec-cylic-homoms.html#thm-cyclic-divisors-and-subgroups",
  "type": "Theorem",
  "number": "2.26",
  "title": "",
  "body": "  Let , where has finite order . Then    .    There is a bijection for each divisor of . Moreover, for each subgroup of , . In particular, all subgroups of are cyclic and there is a unique subgroup of each order.      "
},
{
  "id": "prop-ump-cyclic",
  "level": "2",
  "url": "sec-cylic-homoms.html#prop-ump-cyclic",
  "type": "Proposition",
  "number": "2.27",
  "title": "Universal Mapping Property (UMP) for Cyclic Groups.",
  "body": " Universal Mapping Property (UMP) for Cyclic Groups   Assume and let be any group. If , then for each such that , there is a unique group homomorphism such that . If , then for each , there is a unique group homomorphism such that . In both cases this unique group homomorphism is given by for any .   "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "sec-cylic-homoms.html#remark-14",
  "type": "Remark",
  "number": "2.28",
  "title": "",
  "body": " This is a particular case of the universal mapping property of a presentation (which we will covered later), since a cyclic group is either presented by or .  "
},
{
  "id": "thm-cyclic-classification",
  "level": "2",
  "url": "sec-cylic-homoms.html#thm-cyclic-classification",
  "type": "Theorem",
  "number": "2.29",
  "title": "Classification Theorem for Cyclic Groups.",
  "body": " Classification Theorem for Cyclic Groups   Every infinite cyclic group is isomorphic to . Every cyclic group of order is isomorphic to .   "
},
{
  "id": "sec-cosets",
  "level": "1",
  "url": "sec-cosets.html",
  "type": "Section",
  "number": "3.1",
  "title": "Cosets and Equivalence Relations",
  "body": " Cosets and Equivalence Relations    Too much may be the equivalent of none at all.   Lee Loevinger     For any and any let be defined as a left coset and right coset of in , respectfully.     Though mostly a matter of preference as aesthetics, we will focus primarily on left cosets.    Coset Equivalencies   Let . The following facts about left cosets are equivalent for :    and belong to the same left coset of in ,     for some ,     for some ,     ,     ,     .        if and belong to the same left coset of in then and for some , so and therefore where .    for some   and .    for some   .    .   Suppose for some , then by we also have for some . Then we have  thus .   Since , we have and . If then, and belong to the same left coset.      For , the collection of left cosets of in form a partition of , and similarly for the collection of right cosets. That is,   for all , either or      ,     ,   and similarly for right cosets. Moreover all left and right cosets have the same cardinality: for any .    Let me prove the assertions for right cosets. Clearly every element of belongs to at least one right coset, since (since ). We need to show any two cosets are either identical or disjoint: if and share an element, then it follows from of Lemma that . This proves that the right cosets partition . To see that all right cosets have the same cardinality as , define a function by . Clearly is onto and if then and hence , so that is also one-to-one.      If is a finite group and , then In particular the number of left cosets of in is equal to the number of right cosets of in .  Furthermore, even if is not finite the number of left and right cosets of a subgroup is still the same. (Hint : consider the map and show it's a bijection. Why is the inverse needed?)      In finite groups, the common number of left or right cosets of a subgroup in a group is denoted as and is called the index of in .     Lagrange's Theorem   If is a subgroup of a finite group , then divides .      If and is a finite group, then divides .      If is a finite group, then       Let be a group (possibly infinite) and subgroups of . Suppose is finite. Prove that (Hint: First prove this in the case is a finite group. Then prove you can reduce to the finite case.)      Section Results       Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove the converse to Lagrange's theorem is false: find a group and an integer such that divides the order of but does not have any subgroups of order . Hint : Take .   "
},
{
  "id": "def-coset",
  "level": "2",
  "url": "sec-cosets.html#def-coset",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": "  For any and any let be defined as a left coset and right coset of in , respectfully.   "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "sec-cosets.html#remark-15",
  "type": "Remark",
  "number": "3.2",
  "title": "",
  "body": " Though mostly a matter of preference as aesthetics, we will focus primarily on left cosets.  "
},
{
  "id": "lem-cosetfacts",
  "level": "2",
  "url": "sec-cosets.html#lem-cosetfacts",
  "type": "Lemma",
  "number": "3.3",
  "title": "Coset Equivalencies.",
  "body": " Coset Equivalencies   Let . The following facts about left cosets are equivalent for :    and belong to the same left coset of in ,     for some ,     for some ,     ,     ,     .        if and belong to the same left coset of in then and for some , so and therefore where .    for some   and .    for some   .    .   Suppose for some , then by we also have for some . Then we have  thus .   Since , we have and . If then, and belong to the same left coset.   "
},
{
  "id": "lem-cosetpartition",
  "level": "2",
  "url": "sec-cosets.html#lem-cosetpartition",
  "type": "Lemma",
  "number": "3.4",
  "title": "",
  "body": "  For , the collection of left cosets of in form a partition of , and similarly for the collection of right cosets. That is,   for all , either or      ,     ,   and similarly for right cosets. Moreover all left and right cosets have the same cardinality: for any .    Let me prove the assertions for right cosets. Clearly every element of belongs to at least one right coset, since (since ). We need to show any two cosets are either identical or disjoint: if and share an element, then it follows from of Lemma that . This proves that the right cosets partition . To see that all right cosets have the same cardinality as , define a function by . Clearly is onto and if then and hence , so that is also one-to-one.   "
},
{
  "id": "cor-left-right-cosets",
  "level": "2",
  "url": "sec-cosets.html#cor-left-right-cosets",
  "type": "Corollary",
  "number": "3.5",
  "title": "",
  "body": "  If is a finite group and , then In particular the number of left cosets of in is equal to the number of right cosets of in .  Furthermore, even if is not finite the number of left and right cosets of a subgroup is still the same. (Hint : consider the map and show it's a bijection. Why is the inverse needed?)   "
},
{
  "id": "def-index",
  "level": "2",
  "url": "sec-cosets.html#def-index",
  "type": "Definition",
  "number": "3.6",
  "title": "",
  "body": "  In finite groups, the common number of left or right cosets of a subgroup in a group is denoted as and is called the index of in .   "
},
{
  "id": "thm-lagrange",
  "level": "2",
  "url": "sec-cosets.html#thm-lagrange",
  "type": "Theorem",
  "number": "3.7",
  "title": "Lagrange's Theorem.",
  "body": " Lagrange's Theorem   If is a subgroup of a finite group , then divides .   "
},
{
  "id": "cor-lagrange",
  "level": "2",
  "url": "sec-cosets.html#cor-lagrange",
  "type": "Corollary",
  "number": "3.8",
  "title": "",
  "body": "  If and is a finite group, then divides .   "
},
{
  "id": "cor-lagrange-index",
  "level": "2",
  "url": "sec-cosets.html#cor-lagrange-index",
  "type": "Corollary",
  "number": "3.9",
  "title": "",
  "body": "  If is a finite group, then    "
},
{
  "id": "thm-index-tower",
  "level": "2",
  "url": "sec-cosets.html#thm-index-tower",
  "type": "Theorem",
  "number": "3.10",
  "title": "",
  "body": "  Let be a group (possibly infinite) and subgroups of . Suppose is finite. Prove that (Hint: First prove this in the case is a finite group. Then prove you can reduce to the finite case.)   "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "sec-cosets.html#exercise-34",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "sec-cosets.html#exercise-35",
  "type": "Exercise",
  "number": "3.1.2",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "sec-cosets.html#exercise-36",
  "type": "Exercise",
  "number": "3.1.3",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "sec-cosets.html#exercise-37",
  "type": "Exercise",
  "number": "3.1.4",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "sec-cosets.html#exercise-38",
  "type": "Exercise",
  "number": "3.1.5",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-39",
  "level": "2",
  "url": "sec-cosets.html#exercise-39",
  "type": "Exercise",
  "number": "3.1.6",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "sec-cosets.html#exercise-40",
  "type": "Exercise",
  "number": "3.1.7",
  "title": "",
  "body": "Prove the converse to Lagrange's theorem is false: find a group and an integer such that divides the order of but does not have any subgroups of order . Hint : Take . "
},
{
  "id": "sec-normal-subgroups",
  "level": "1",
  "url": "sec-normal-subgroups.html",
  "type": "Section",
  "number": "3.2",
  "title": "Normal Subgroups",
  "body": " Normal Subgroups    If you are always trying to be normal, you will never know how amazing you can be.   Maya Angelou     A subgroup of a group is normal in , written , if for all .     Equivalent Normal Definitions   Let be a subgroup of a group . The following are equivalent:         for all .     for all .           The trivial subgroups , of a group are normal.    Any subgroup of an abelian group is normal.    For any group , .       Show that being a normal subgroup is not a transitive relation.   Consider one can show that and, since is abelian ( ), the subgroup is normal in . But is not normal in , since for example         Prove that if is a group homomorphism and then the preimage of , , is a normal subgroup of .    Show that if is a group homomorphism and then need not be a normal subgroup of .       Show that any subgroup of index two is normal. This means: show that if is a group, is a subgroup and , i.e the number of left (or right) cosets of in is two, then is normal.    Let be a subgroup and .   Prove that is a subgroup of .    Prove that     Suppose and is the only subgroup of of order . Prove that is normal.       Let and be normal subgroups of a group such that . Prove that for all .    Let be a group and a subset of . Let . Prove that if and only if for every and .    Let be a group and let be a set. The normal subgroup generated by , denoted , is the intersection of all the normal subgroups of that contain .   Show that is a normal subgroup of .    Show that the elements of can be described as        Let be a group, , and . Prove that .    Let be a group with subgroups . Recall the notation    Prove that if and only if .    Prove that if either one of or is a normal subgroup of , then and .       In , let and . Then but of course and do not commute. The fact that can also be justified by observing that .    Let be a group and be its automorphism group. In Problem 7 on HW # 2, you proved that for each , the function defined by for all is an automorphism of . Further, you proved the set , called the set of inner automorphisms of , is a subgroup of . Prove that .    Let be a finite group. Prove that the number of elements in the set is even. Conclude that a group of even order must have an element of order .    Let be a finite group, and subgroups such that and = are relatively prime and . Prove that .    Let be a group. A subgroup of is called a characteristic subgroup of if for every automorphism of . Show that if is a characteristic subgroup of and is a normal subgroup of , then is a normal subgroup of .   Let be a group, is a normal subgroup of , and a characteristic subgroup of . Let and consider the automorphism given by .  Let and notice , as . Thus is well defined. Let . As , we can write for some . Then , making surjective. As we see that is a bijection. The homomorphism piece we get for free from , making .  Let . As is a characteristic subgroup of , we see that for all and for all . Thus is normal in .     Let be a group with a subgroup so that . (a) Prove that there is a normal subgroup of , so that and (b) Prove that if is finitely generated, there are most finitely many subgroups with index .(Hint: you might want to consider maps .)    Let be a group, and be subgroups of .   Give an example of and such that is not a subgroup of .    Suppose now that and , where is prime. Prove that either or .        Let , , and . Notice that , and thus , ( ) which does not divide . Thus is not a subgroup of , as this would contradict .    Suppose there exists some such that . We examine . Notice that since has prime order it is cyclic, and thus generated by any non-identity element, such as . Thus any element in can be written in the form , and any element in can subsequently be written as for some . Thus .       Let be a finite group and a subgroup of such that: , is simple, and . Prove that the only normal subgroups of are , and . (Hint: Let H be a normal subgroup of G. Then H ∩K is a normal subgroup of K.)   "
},
{
  "id": "def-normal-subgroup",
  "level": "2",
  "url": "sec-normal-subgroups.html#def-normal-subgroup",
  "type": "Definition",
  "number": "3.11",
  "title": "",
  "body": "  A subgroup of a group is normal in , written , if for all .   "
},
{
  "id": "prop-equivdef-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#prop-equivdef-normal",
  "type": "Proposition",
  "number": "3.12",
  "title": "Equivalent Normal Definitions.",
  "body": " Equivalent Normal Definitions   Let be a subgroup of a group . The following are equivalent:         for all .     for all .      "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec-normal-subgroups.html#example-7",
  "type": "Example",
  "number": "3.13",
  "title": "",
  "body": "    The trivial subgroups , of a group are normal.    Any subgroup of an abelian group is normal.    For any group , .     "
},
{
  "id": "problem-5",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-5",
  "type": "Problem",
  "number": "3.14",
  "title": "",
  "body": " Show that being a normal subgroup is not a transitive relation.   Consider one can show that and, since is abelian ( ), the subgroup is normal in . But is not normal in , since for example    "
},
{
  "id": "problem-6",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-6",
  "type": "Problem",
  "number": "3.15",
  "title": "",
  "body": "    Prove that if is a group homomorphism and then the preimage of , , is a normal subgroup of .    Show that if is a group homomorphism and then need not be a normal subgroup of .     "
},
{
  "id": "problem-7",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-7",
  "type": "Problem",
  "number": "3.16",
  "title": "",
  "body": " Show that any subgroup of index two is normal. This means: show that if is a group, is a subgroup and , i.e the number of left (or right) cosets of in is two, then is normal.  "
},
{
  "id": "problem-8",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-8",
  "type": "Problem",
  "number": "3.17",
  "title": "",
  "body": " Let be a subgroup and .   Prove that is a subgroup of .    Prove that     Suppose and is the only subgroup of of order . Prove that is normal.     "
},
{
  "id": "problem-9",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-9",
  "type": "Problem",
  "number": "3.18",
  "title": "",
  "body": " Let and be normal subgroups of a group such that . Prove that for all .  "
},
{
  "id": "problem-10",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-10",
  "type": "Problem",
  "number": "3.19",
  "title": "",
  "body": " Let be a group and a subset of . Let . Prove that if and only if for every and .  "
},
{
  "id": "problem-11",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-11",
  "type": "Problem",
  "number": "3.20",
  "title": "",
  "body": " Let be a group and let be a set. The normal subgroup generated by , denoted , is the intersection of all the normal subgroups of that contain .   Show that is a normal subgroup of .    Show that the elements of can be described as      "
},
{
  "id": "problem-12",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-12",
  "type": "Problem",
  "number": "3.21",
  "title": "",
  "body": " Let be a group, , and . Prove that .  "
},
{
  "id": "problem-13",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-13",
  "type": "Problem",
  "number": "3.22",
  "title": "",
  "body": " Let be a group with subgroups . Recall the notation    Prove that if and only if .    Prove that if either one of or is a normal subgroup of , then and .     "
},
{
  "id": "problem-14",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-14",
  "type": "Problem",
  "number": "3.23",
  "title": "",
  "body": " In , let and . Then but of course and do not commute. The fact that can also be justified by observing that .  "
},
{
  "id": "problem-15",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-15",
  "type": "Problem",
  "number": "3.24",
  "title": "",
  "body": " Let be a group and be its automorphism group. In Problem 7 on HW # 2, you proved that for each , the function defined by for all is an automorphism of . Further, you proved the set , called the set of inner automorphisms of , is a subgroup of . Prove that .  "
},
{
  "id": "problem-16",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-16",
  "type": "Problem",
  "number": "3.25",
  "title": "",
  "body": " Let be a finite group. Prove that the number of elements in the set is even. Conclude that a group of even order must have an element of order .  "
},
{
  "id": "problem-17",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-17",
  "type": "Problem",
  "number": "3.26",
  "title": "",
  "body": " Let be a finite group, and subgroups such that and = are relatively prime and . Prove that .  "
},
{
  "id": "problem-18",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-18",
  "type": "Problem",
  "number": "3.27",
  "title": "",
  "body": " Let be a group. A subgroup of is called a characteristic subgroup of if for every automorphism of . Show that if is a characteristic subgroup of and is a normal subgroup of , then is a normal subgroup of .   Let be a group, is a normal subgroup of , and a characteristic subgroup of . Let and consider the automorphism given by .  Let and notice , as . Thus is well defined. Let . As , we can write for some . Then , making surjective. As we see that is a bijection. The homomorphism piece we get for free from , making .  Let . As is a characteristic subgroup of , we see that for all and for all . Thus is normal in .   "
},
{
  "id": "problem-19",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-19",
  "type": "Problem",
  "number": "3.28",
  "title": "",
  "body": " Let be a group with a subgroup so that . (a) Prove that there is a normal subgroup of , so that and (b) Prove that if is finitely generated, there are most finitely many subgroups with index .(Hint: you might want to consider maps .)  "
},
{
  "id": "problem-20",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-20",
  "type": "Problem",
  "number": "3.29",
  "title": "",
  "body": " Let be a group, and be subgroups of .   Give an example of and such that is not a subgroup of .    Suppose now that and , where is prime. Prove that either or .        Let , , and . Notice that , and thus , ( ) which does not divide . Thus is not a subgroup of , as this would contradict .    Suppose there exists some such that . We examine . Notice that since has prime order it is cyclic, and thus generated by any non-identity element, such as . Thus any element in can be written in the form , and any element in can subsequently be written as for some . Thus .     "
},
{
  "id": "problem-21",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-21",
  "type": "Problem",
  "number": "3.30",
  "title": "",
  "body": " Let be a finite group and a subgroup of such that: , is simple, and . Prove that the only normal subgroups of are , and . (Hint: Let H be a normal subgroup of G. Then H ∩K is a normal subgroup of K.)  "
},
{
  "id": "sec-quotient-groups",
  "level": "1",
  "url": "sec-quotient-groups.html",
  "type": "Section",
  "number": "3.3",
  "title": "Quotient Groups",
  "body": " Quotient Groups    For any group and normal subgroup of , the map defined by is a surjective group homomorphism with kernel .    Surjectivity is immediate from the definition. The group homomorphism property follows from the computation below which uses the definition of and the rule for multiplying cosets in : Finally, using Lemma , we have .      A subgroup of a group is normal in if and only if is the kernel of a homomorphism with domain     empty     Let be a group (not necessarily finite) and a nonempty subset of that is closed under multiplication. Suppose that for all we have . Prove the following:    is a subgroup of      is normal     is abelian.      Let be a group, a multiplicatively closed subset of , and suppose that for all .  First, notice that . Let , and consider . Notice that . As is multiplicatively closed, we see that . Thus is a subgroup of by the subgroup test.  Let , , and consider . Notice that . Multiplying by on the right we see , as it is multiplicatively closed and . We rewrite , given that elements always commute with their inverses. As , we see that as well. Thus is normal in .  Let . As for every , every element has order . Thus and so , making the group abelian.    "
},
{
  "id": "lem-quotient-surj-hom",
  "level": "2",
  "url": "sec-quotient-groups.html#lem-quotient-surj-hom",
  "type": "Lemma",
  "number": "3.31",
  "title": "",
  "body": "  For any group and normal subgroup of , the map defined by is a surjective group homomorphism with kernel .    Surjectivity is immediate from the definition. The group homomorphism property follows from the computation below which uses the definition of and the rule for multiplying cosets in : Finally, using Lemma , we have .   "
},
{
  "id": "cor-norm-iff-ker",
  "level": "2",
  "url": "sec-quotient-groups.html#cor-norm-iff-ker",
  "type": "Corollary",
  "number": "3.32",
  "title": "",
  "body": "  A subgroup of a group is normal in if and only if is the kernel of a homomorphism with domain     empty   "
},
{
  "id": "problem-22",
  "level": "2",
  "url": "sec-quotient-groups.html#problem-22",
  "type": "Problem",
  "number": "3.33",
  "title": "",
  "body": " Let be a group (not necessarily finite) and a nonempty subset of that is closed under multiplication. Suppose that for all we have . Prove the following:    is a subgroup of      is normal     is abelian.      Let be a group, a multiplicatively closed subset of , and suppose that for all .  First, notice that . Let , and consider . Notice that . As is multiplicatively closed, we see that . Thus is a subgroup of by the subgroup test.  Let , , and consider . Notice that . Multiplying by on the right we see , as it is multiplicatively closed and . We rewrite , given that elements always commute with their inverses. As , we see that as well. Thus is normal in .  Let . As for every , every element has order . Thus and so , making the group abelian.   "
},
{
  "id": "sec-isomorphism-thms",
  "level": "1",
  "url": "sec-isomorphism-thms.html",
  "type": "Section",
  "number": "3.4",
  "title": "The Isomorphism Theorems",
  "body": " The Isomorphism Theorems   Let be a (not necessarily finite) group and and normal subgroups such that . Prove that   Let defined such that . Let . Then showing is a homomorphism.  Let . As , we have and with and . As and we see .  Consider and making surjective as well.  Let . Then , and so . Let . Then , so and , placing . Thus, by the First Isomorphism Theorem, we have    Let be a finite group.   If is a normal subgroup of and , prove that is contained in the center of .    Suppose that is odd and that contains a non-trivial simple subgroup with . Prove that is the only non-trivial proper normal subgroup of .     Let and let . As is normal, we see , and thus one of the following must be true: - , where is the identity element of , or - , the only other element of . However, in the first case we would have by multiplying and over, and thus it must be the case that , or . Thus .  From Lagrange's Theorem we know that , meaning that has an even number of elements. Thus is the smallest prime dividing the order of , making normal in (See: ).  Suppose by way of contradiction there exists some non-trivial proper normal subgroup of that is not . As is normal, by the Second Isomorphism Theorem we have . However, as is simple, this means that . SIT also tells us that . As , this makes and . From part (a), . However, this contradicts Lagrange’s Theorem, as does not divide any odd numbers.    "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "sec-isomorphism-thms.html#exercise-41",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": "Let be a (not necessarily finite) group and and normal subgroups such that . Prove that   Let defined such that . Let . Then showing is a homomorphism.  Let . As , we have and with and . As and we see .  Consider and making surjective as well.  Let . Then , and so . Let . Then , so and , placing . Thus, by the First Isomorphism Theorem, we have   "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "sec-isomorphism-thms.html#exercise-42",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": "Let be a finite group.   If is a normal subgroup of and , prove that is contained in the center of .    Suppose that is odd and that contains a non-trivial simple subgroup with . Prove that is the only non-trivial proper normal subgroup of .     Let and let . As is normal, we see , and thus one of the following must be true: - , where is the identity element of , or - , the only other element of . However, in the first case we would have by multiplying and over, and thus it must be the case that , or . Thus .  From Lagrange's Theorem we know that , meaning that has an even number of elements. Thus is the smallest prime dividing the order of , making normal in (See: ).  Suppose by way of contradiction there exists some non-trivial proper normal subgroup of that is not . As is normal, by the Second Isomorphism Theorem we have . However, as is simple, this means that . SIT also tells us that . As , this makes and . From part (a), . However, this contradicts Lagrange’s Theorem, as does not divide any odd numbers.  "
},
{
  "id": "graction",
  "level": "1",
  "url": "graction.html",
  "type": "Section",
  "number": "4.1",
  "title": "Group Actions",
  "body": " Group Actions   Lorem ipsum   You may never know what results come of your action, but if you do nothing there will be no results.   Ghandi     For a group and set , an action of on is a function typically written as , such that      for all and .     for all .       To make the first axiom clearer, throughout this section we will write for the action of on and no symbol (concatenation) for the multiplication of two elements in the group .   Trivial Action  For any group and any set , defines an action, the trivial action . The associated group homomorphism is by .    Permutation Representation   Assume is a group and is a set.     If is an action of on , then the function defined as , where is the function given by , is a well defined homomorphism of groups.    Conversely, if is a group homomorphism, the rule defines an action of on .       We have thus and a similar argument shows that   Finally, we wish to show , equivalently . Since holds for all , this proves is a homomorphism.  Given a homomorphism , the function defined as is an action because , and .      An action of a group on a set is called faithful if the associated group homomorphism is injective. Equivalently, an action is faithful if and only if for a given , whenever for all , it must be that .     Left Regular Action  Let be any group and define an action of on (regarded as just a set) by the rule     Prove that the left regular action is faithful.    Let be a group and a subgroup of . Recall that the centralizer of in is Prove that if is normal in , then so is and that is isomorphic to a subgroup of the automorphism group of .   Let be a group and . Let , and consider . Let . As we have for some , and thus that 1. and 2. . Consider . By (1), we see . As commutes with everything in we have , and by (2) we have . Thus .  Let act on the left cosets of by left multiplication, giving rise to the permutation representation homomorphism . By the First Isomorphism Theorem we see that is isomorphic to a subgroup of the automorphism group of .     Recall that the centralizer of a subgroup in a group is (a) Prove that if is normal in , then is normal in . (b) Prove that if is normal in , then is isomorphic to a subgroup of (the group of automorphisms of H)   Let act on by conjugation, yielding the homomorphism via the permutation representation that maps to , where . This is the trivial permutation exactly when , making the kernel of . Thus is normal in .  From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .     Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by and the normalizer of is the subgroup of defined by .    Show that the centralizer of in is a normal subgroup of the normalizer of in .  Show that the quotient is isomorphic to a subgroup of the automorphism group of .       Let be a subgroup of a group .   Part (a)  Let act on by conjugation. Thus the associated permutation homomorphism is defined such that , where . Notice that when we have for all , and thus . If then for all , and thus . Thus and .   Part (b)  From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .       Let be a finite group and let be a subgroup of of index , where is the smallest prime divisor of the order of . Prove that is normal in .   Let and note that . Let denote the kernel of the permutation representation generated by acting on by left multiplication.  The First Isomorphism Theorem tells us that . Thus by Lagrange’s Theorem. Let . Then for all , making for all including . Thus .  This yields . Let , giving us . As we have , so . But is the smallest prime dividing the order of , and thus , making and .    "
},
{
  "id": "def-graction",
  "level": "2",
  "url": "graction.html#def-graction",
  "type": "Definition",
  "number": "4.1",
  "title": "",
  "body": "  For a group and set , an action of on is a function typically written as , such that      for all and .     for all .      "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "graction.html#remark-16",
  "type": "Remark",
  "number": "4.2",
  "title": "",
  "body": "To make the first axiom clearer, throughout this section we will write for the action of on and no symbol (concatenation) for the multiplication of two elements in the group . "
},
{
  "id": "example-8",
  "level": "2",
  "url": "graction.html#example-8",
  "type": "Example",
  "number": "4.3",
  "title": "Trivial Action.",
  "body": " Trivial Action  For any group and any set , defines an action, the trivial action . The associated group homomorphism is by .  "
},
{
  "id": "thm-permrep",
  "level": "2",
  "url": "graction.html#thm-permrep",
  "type": "Theorem",
  "number": "4.4",
  "title": "Permutation Representation.",
  "body": " Permutation Representation   Assume is a group and is a set.     If is an action of on , then the function defined as , where is the function given by , is a well defined homomorphism of groups.    Conversely, if is a group homomorphism, the rule defines an action of on .       We have thus and a similar argument shows that   Finally, we wish to show , equivalently . Since holds for all , this proves is a homomorphism.  Given a homomorphism , the function defined as is an action because , and .   "
},
{
  "id": "def-faithful",
  "level": "2",
  "url": "graction.html#def-faithful",
  "type": "Definition",
  "number": "4.5",
  "title": "",
  "body": "  An action of a group on a set is called faithful if the associated group homomorphism is injective. Equivalently, an action is faithful if and only if for a given , whenever for all , it must be that .   "
},
{
  "id": "ex-leftreg",
  "level": "2",
  "url": "graction.html#ex-leftreg",
  "type": "Example",
  "number": "4.6",
  "title": "Left Regular Action.",
  "body": " Left Regular Action  Let be any group and define an action of on (regarded as just a set) by the rule   "
},
{
  "id": "problem-23",
  "level": "2",
  "url": "graction.html#problem-23",
  "type": "Problem",
  "number": "4.7",
  "title": "",
  "body": " Prove that the left regular action is faithful.  "
},
{
  "id": "problem-24",
  "level": "2",
  "url": "graction.html#problem-24",
  "type": "Problem",
  "number": "4.8",
  "title": "",
  "body": " Let be a group and a subgroup of . Recall that the centralizer of in is Prove that if is normal in , then so is and that is isomorphic to a subgroup of the automorphism group of .   Let be a group and . Let , and consider . Let . As we have for some , and thus that 1. and 2. . Consider . By (1), we see . As commutes with everything in we have , and by (2) we have . Thus .  Let act on the left cosets of by left multiplication, giving rise to the permutation representation homomorphism . By the First Isomorphism Theorem we see that is isomorphic to a subgroup of the automorphism group of .   "
},
{
  "id": "problem-25",
  "level": "2",
  "url": "graction.html#problem-25",
  "type": "Problem",
  "number": "4.9",
  "title": "",
  "body": " Recall that the centralizer of a subgroup in a group is (a) Prove that if is normal in , then is normal in . (b) Prove that if is normal in , then is isomorphic to a subgroup of (the group of automorphisms of H)   Let act on by conjugation, yielding the homomorphism via the permutation representation that maps to , where . This is the trivial permutation exactly when , making the kernel of . Thus is normal in .  From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .   "
},
{
  "id": "problem-26",
  "level": "2",
  "url": "graction.html#problem-26",
  "type": "Problem",
  "number": "4.10",
  "title": "",
  "body": " Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by and the normalizer of is the subgroup of defined by .    Show that the centralizer of in is a normal subgroup of the normalizer of in .  Show that the quotient is isomorphic to a subgroup of the automorphism group of .    "
},
{
  "id": "problem-27",
  "level": "2",
  "url": "graction.html#problem-27",
  "type": "Problem",
  "number": "4.11",
  "title": "",
  "body": " Let be a finite group and let be a subgroup of of index , where is the smallest prime divisor of the order of . Prove that is normal in .   Let and note that . Let denote the kernel of the permutation representation generated by acting on by left multiplication.  The First Isomorphism Theorem tells us that . Thus by Lagrange’s Theorem. Let . Then for all , making for all including . Thus .  This yields . Let , giving us . As we have , so . But is the smallest prime dividing the order of , and thus , making and .   "
},
{
  "id": "sec-lois",
  "level": "1",
  "url": "sec-lois.html",
  "type": "Section",
  "number": "4.2",
  "title": "LOIS and Orbit-Stabilizer",
  "body": " LOIS and Orbit-Stabilizer    Let be a group acting on a set . For an element the orbit of is       Let be a group acting on a set . Then      is an equivalence relation    for any either or               Let be a group acting on a set . For an element the stabilizer is      The stabilizer is a subgroup of .    The Length of the Orbit is the Index of the Stabilizer (LOIS)   Let be a group that acts on a finite set via . For any we have     Let be the collection of left cosets of in . Define a function by . This function is well defined and one-to-one: The function is onto by definition of . Thus is a bijection and it yields equalities      Orbit-Stabilizer Theorem   Let be a finite group that acts on a finite set via . For any we have       An action is transitive if for all there is a such that . Equivalently, an action is transitive if for any .     Let be a group acting transitively on a set . For , let be the stabilizer of under the action from .   Let . Prove there exists such that .  Suppose has more than one element and that is finite. Prove that there exists which has no fixed point, that is, for all     Let be a group acting transitively on a set .  The action is transitive, so there exists some such that .  Let , consider b. Since , we have , stabilizes so now , but . So .  Let . We know and also , and so . Applying to both to see . This puts . Thus , completing the proof.  The action is transitive, so there is only one orbit, and so . Since is finite, the Orbit-Stabilizer Theorem tells us . Since every orbit has the same order as , we see for all . Thus there cannot exist any fixed points.    "
},
{
  "id": "def-orbit",
  "level": "2",
  "url": "sec-lois.html#def-orbit",
  "type": "Definition",
  "number": "4.12",
  "title": "",
  "body": "  Let be a group acting on a set . For an element the orbit of is    "
},
{
  "id": "lem-orbits-partition",
  "level": "2",
  "url": "sec-lois.html#lem-orbits-partition",
  "type": "Lemma",
  "number": "4.13",
  "title": "",
  "body": "  Let be a group acting on a set . Then      is an equivalence relation    for any either or            "
},
{
  "id": "def-stab",
  "level": "2",
  "url": "sec-lois.html#def-stab",
  "type": "Definition",
  "number": "4.14",
  "title": "",
  "body": "  Let be a group acting on a set . For an element the stabilizer is    "
},
{
  "id": "problem-28",
  "level": "2",
  "url": "sec-lois.html#problem-28",
  "type": "Problem",
  "number": "4.15",
  "title": "",
  "body": " The stabilizer is a subgroup of .  "
},
{
  "id": "thm-LOIS",
  "level": "2",
  "url": "sec-lois.html#thm-LOIS",
  "type": "Theorem",
  "number": "4.16",
  "title": "The Length of the Orbit is the Index of the Stabilizer (LOIS).",
  "body": " The Length of the Orbit is the Index of the Stabilizer (LOIS)   Let be a group that acts on a finite set via . For any we have     Let be the collection of left cosets of in . Define a function by . This function is well defined and one-to-one: The function is onto by definition of . Thus is a bijection and it yields equalities    "
},
{
  "id": "cor-orbit-stabilizer",
  "level": "2",
  "url": "sec-lois.html#cor-orbit-stabilizer",
  "type": "Corollary",
  "number": "4.17",
  "title": "Orbit-Stabilizer Theorem.",
  "body": " Orbit-Stabilizer Theorem   Let be a finite group that acts on a finite set via . For any we have    "
},
{
  "id": "def-faithful-action",
  "level": "2",
  "url": "sec-lois.html#def-faithful-action",
  "type": "Definition",
  "number": "4.18",
  "title": "",
  "body": "  An action is transitive if for all there is a such that . Equivalently, an action is transitive if for any .   "
},
{
  "id": "problem-29",
  "level": "2",
  "url": "sec-lois.html#problem-29",
  "type": "Problem",
  "number": "4.19",
  "title": "",
  "body": " Let be a group acting transitively on a set . For , let be the stabilizer of under the action from .   Let . Prove there exists such that .  Suppose has more than one element and that is finite. Prove that there exists which has no fixed point, that is, for all     Let be a group acting transitively on a set .  The action is transitive, so there exists some such that .  Let , consider b. Since , we have , stabilizes so now , but . So .  Let . We know and also , and so . Applying to both to see . This puts . Thus , completing the proof.  The action is transitive, so there is only one orbit, and so . Since is finite, the Orbit-Stabilizer Theorem tells us . Since every orbit has the same order as , we see for all . Thus there cannot exist any fixed points.   "
},
{
  "id": "sec-conjugation",
  "level": "1",
  "url": "sec-conjugation.html",
  "type": "Section",
  "number": "4.3",
  "title": "Conjugation",
  "body": " Conjugation   Conjugation Action  Let be any group and fix an element . Define the conjugation action of on itself by setting        Prove that the conjugation action of of on itself is a well-defined group action.    Show acts on via conjugation for any .       The kernel of the permutation representation for the conjugation action is the center .   If is the permutation representation for acting on by conjugation, then       The action of on itself by conjugation is faithful if and only if .     The conjugacy class of an element is , i.e. the orbit of under conjugation.      Let be a group. Two elements are conjugate if there is with (equivalently and are in the same orbit of the conjugation action).  Two subsets are conjugate if there is with .     Let and be the set of elements of of order . Prove that is not a conjugacy class of .   Elements of order in must permute all elements, making them of the form . There are such permutations, given that we can always reorder them so that is first, leaving remaining spots without replacement. Let denote the set of these elements.  Suppose by way of contradiction there existed some such that . Let act on itself through conjugation, making by the definition of conjugacy class. The Orbit-Stabilizer Theorem tells us that , meaning that the order of must divide the order of . However, and , so this is a contradiction. Thus is not a conjugacy class of .      Let . The conjugation action of on itself induces an action by conjugation of on . In particular, is the disjoint union of some of the conjugacy classes in .     Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by and the normalizer of is the subgroup of defined by .    Show that the centralizer of in is a normal subgroup of the normalizer of in .  Show that the quotient is isomorphic to a subgroup of the automorphism group of .     Let be a subgroup of a group .    Let act on by conjugation. Thus the associated permutation homomorphism is defined such that , where . Notice that when we have for all , and thus . If then for all , and thus . Thus and .    From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .      Let be a group and . Let , and consider . Let . As we have for some , and thus that 1. and 2. . Consider . By (1), we see . As commutes with everything in we have , and by (2) we have . Thus .  Let act on the left cosets of by left multiplication, giving rise to the permutation representation homomorphism . By the First Isomorphism Theorem we see that is isomorphic to a subgroup of the automorphism group of .     Let be a (not necessarily finite) group and a subgroup of index . Define (i.e., is the intersection of all the conjugates of K    Prove is a the largest normal subgroup of that is contained in .  Prove divides .    Let act on the left cosets of in by left multiplication, yielding the permutation representation homomorphism . Let conspicuously denote the kernel of this function.  Let . Then , the automorphism defined by is precisely the identity permutation. Thus for all and for all , so This means the elements of are precisely those that are in the conjugacy class of for all . There cannot exist a larger normal subgroup of contained in , as it would contain an element that was not in some conjugacy class for , negating the definition of a normal subgroup.  Recall the permutation representation homomorphism . The First Isomorphism Theorem tells us , which has order . Thus .     Prove that if is a finite group of odd order, then for any non-identity element , is not conjugate to .   Let be a finite group of odd order, and let act on itself via conjugation. Under this action, the orbit of an element is exactly its conjugacy class. By the Orbit-Stabilizer Theorem we have . Thus the order of an element divides the order of the group, and so every orbit must have odd order.  Suppose there exists an element such that for some . Thus . Let . Thus for some . Then . However, as , we have . As and are both in , we see that as well. As , we see that this means that the orbit of would have even order, which is not possible.     Let be a finite group and let be a proper subgroup of with .   Prove that has at most distinct conjugate sets for .  Prove that .    Let be defined by . Suppose . Notice that and , but as we have equality, and thus is well defined. Let be a conjugate set, and let . Then , and so we have surjectivity. As , there can be at most distinct conjugate sets for .  Let act on by conjugation. We know that the orbits of this action partition . However, under this action the orbits are exactly the conjugacy classes of . There are at most conjugacy classes. Each conjugacy class has at most elements in it, and each one has the identity. As there are at most of them then when we add all of their orders we get at most , which is less than the order of .    "
},
{
  "id": "example-10",
  "level": "2",
  "url": "sec-conjugation.html#example-10",
  "type": "Example",
  "number": "4.20",
  "title": "Conjugation Action.",
  "body": " Conjugation Action  Let be any group and fix an element . Define the conjugation action of on itself by setting   "
},
{
  "id": "problem-30",
  "level": "2",
  "url": "sec-conjugation.html#problem-30",
  "type": "Problem",
  "number": "4.21",
  "title": "",
  "body": "    Prove that the conjugation action of of on itself is a well-defined group action.    Show acts on via conjugation for any .     "
},
{
  "id": "problem-31",
  "level": "2",
  "url": "sec-conjugation.html#problem-31",
  "type": "Problem",
  "number": "4.22",
  "title": "",
  "body": " The kernel of the permutation representation for the conjugation action is the center .   If is the permutation representation for acting on by conjugation, then     "
},
{
  "id": "problem-32",
  "level": "2",
  "url": "sec-conjugation.html#problem-32",
  "type": "Problem",
  "number": "4.23",
  "title": "",
  "body": " The action of on itself by conjugation is faithful if and only if .  "
},
{
  "id": "def-conjugacy-class",
  "level": "2",
  "url": "sec-conjugation.html#def-conjugacy-class",
  "type": "Definition",
  "number": "4.24",
  "title": "",
  "body": "  The conjugacy class of an element is , i.e. the orbit of under conjugation.   "
},
{
  "id": "def-conjugate",
  "level": "2",
  "url": "sec-conjugation.html#def-conjugate",
  "type": "Definition",
  "number": "4.25",
  "title": "",
  "body": "  Let be a group. Two elements are conjugate if there is with (equivalently and are in the same orbit of the conjugation action).  Two subsets are conjugate if there is with .   "
},
{
  "id": "problem-33",
  "level": "2",
  "url": "sec-conjugation.html#problem-33",
  "type": "Problem",
  "number": "4.26",
  "title": "",
  "body": " Let and be the set of elements of of order . Prove that is not a conjugacy class of .   Elements of order in must permute all elements, making them of the form . There are such permutations, given that we can always reorder them so that is first, leaving remaining spots without replacement. Let denote the set of these elements.  Suppose by way of contradiction there existed some such that . Let act on itself through conjugation, making by the definition of conjugacy class. The Orbit-Stabilizer Theorem tells us that , meaning that the order of must divide the order of . However, and , so this is a contradiction. Thus is not a conjugacy class of .   "
},
{
  "id": "prop-normal-conjugacy",
  "level": "2",
  "url": "sec-conjugation.html#prop-normal-conjugacy",
  "type": "Proposition",
  "number": "4.27",
  "title": "",
  "body": "  Let . The conjugation action of on itself induces an action by conjugation of on . In particular, is the disjoint union of some of the conjugacy classes in .   "
},
{
  "id": "problem-34",
  "level": "2",
  "url": "sec-conjugation.html#problem-34",
  "type": "Problem",
  "number": "4.28",
  "title": "",
  "body": " Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by and the normalizer of is the subgroup of defined by .    Show that the centralizer of in is a normal subgroup of the normalizer of in .  Show that the quotient is isomorphic to a subgroup of the automorphism group of .     Let be a subgroup of a group .    Let act on by conjugation. Thus the associated permutation homomorphism is defined such that , where . Notice that when we have for all , and thus . If then for all , and thus . Thus and .    From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .      Let be a group and . Let , and consider . Let . As we have for some , and thus that 1. and 2. . Consider . By (1), we see . As commutes with everything in we have , and by (2) we have . Thus .  Let act on the left cosets of by left multiplication, giving rise to the permutation representation homomorphism . By the First Isomorphism Theorem we see that is isomorphic to a subgroup of the automorphism group of .   "
},
{
  "id": "problem-35",
  "level": "2",
  "url": "sec-conjugation.html#problem-35",
  "type": "Problem",
  "number": "4.29",
  "title": "",
  "body": " Let be a (not necessarily finite) group and a subgroup of index . Define (i.e., is the intersection of all the conjugates of K    Prove is a the largest normal subgroup of that is contained in .  Prove divides .    Let act on the left cosets of in by left multiplication, yielding the permutation representation homomorphism . Let conspicuously denote the kernel of this function.  Let . Then , the automorphism defined by is precisely the identity permutation. Thus for all and for all , so This means the elements of are precisely those that are in the conjugacy class of for all . There cannot exist a larger normal subgroup of contained in , as it would contain an element that was not in some conjugacy class for , negating the definition of a normal subgroup.  Recall the permutation representation homomorphism . The First Isomorphism Theorem tells us , which has order . Thus .   "
},
{
  "id": "problem-36",
  "level": "2",
  "url": "sec-conjugation.html#problem-36",
  "type": "Problem",
  "number": "4.30",
  "title": "",
  "body": " Prove that if is a finite group of odd order, then for any non-identity element , is not conjugate to .   Let be a finite group of odd order, and let act on itself via conjugation. Under this action, the orbit of an element is exactly its conjugacy class. By the Orbit-Stabilizer Theorem we have . Thus the order of an element divides the order of the group, and so every orbit must have odd order.  Suppose there exists an element such that for some . Thus . Let . Thus for some . Then . However, as , we have . As and are both in , we see that as well. As , we see that this means that the orbit of would have even order, which is not possible.   "
},
{
  "id": "problem-37",
  "level": "2",
  "url": "sec-conjugation.html#problem-37",
  "type": "Problem",
  "number": "4.31",
  "title": "",
  "body": " Let be a finite group and let be a proper subgroup of with .   Prove that has at most distinct conjugate sets for .  Prove that .    Let be defined by . Suppose . Notice that and , but as we have equality, and thus is well defined. Let be a conjugate set, and let . Then , and so we have surjectivity. As , there can be at most distinct conjugate sets for .  Let act on by conjugation. We know that the orbits of this action partition . However, under this action the orbits are exactly the conjugacy classes of . There are at most conjugacy classes. Each conjugacy class has at most elements in it, and each one has the identity. As there are at most of them then when we add all of their orders we get at most , which is less than the order of .   "
},
{
  "id": "sec-class-eq",
  "level": "1",
  "url": "sec-class-eq.html",
  "type": "Section",
  "number": "4.4",
  "title": "The Class Equation",
  "body": " The Class Equation    Let be a group. For any , is called the centralizer of in and for any , is called the normalizer of in .      Let be a group. For any , is called the normalizer of in .         Then acts on by conjugation ( ). For all , the orbit of is the conjugacy class of , and .    Then acts on the power set by conjugation ( ). For all , and .         For a finite group , the size of any conjugacy class divides .     The Class Equation   Let be a finite group and let be a list of unique representatives of all of the conjugacy classes of of size greater than 1. Then .    The elements of are precisely the group elements that are conjugate to only themselves; that is, they are the one-element orbits for the conjugation action. Because the conjugacy classes (orbits of the conjugation action) partition we have For each as in the statement, by Theorem , we have . The class equation follows from substituting this into the equation above.     Let be a finite -group and its center. If is a normal subgroup of , prove that .   Let be a finite -group for some prime and a normal subgroup of .  First, we show that the center of is nontrivial. Suppose by way of contradiction that . We examine the conjugacy classes of . From the Class Equation, we know Note that for some , meaning that the only divisors of are powers of . In finite groups, each conjugacy class must divide the order of the group. By Lagrange’s Theorem, , where . Since |Z(G)|=1, we see that , which is impossible given that . Thus .  As it is a union of conjugacy classes of the elements it contains, one of which is . Assume by way of contradiction that , meaning that is the only element in whose conjugacy class is a singleton. This yields However, by Lagrange’s Theorem must also be a group, and thus by an analogous element counting argument as above we see that there exists some such that , or that for all . Thankfully, this means that , and thus we have .     Let be a group of order where is a prime and . (a) Prove the center of G is not trivial. (b) Prove there exists a subgroup of order for each satisfying    Let be a group of order where is a prime and .  The Class Equation tells us where are the centralizers with more than one element. Notice that this means , and thus each centralizer is a power of . Thus we have for some . Thus the center of cannot be trivial, else we would not be able to sum to a power of .  The trivial subgroup has order . Suppose inductively that there exists a subgroup of order that has a subgroup for every power of in between.  Consider, if you will, a group of order , . As this is a -group, by Part (a) the center is nontrivial, making it a group as well, and thus it has a subgroup of order , , which is normal in as it lies within the center, so we mod out by to see that has a subgroup of order , which has subgroups of all the other powers by the induction hypothesis.    "
},
{
  "id": "def-centralizer",
  "level": "2",
  "url": "sec-class-eq.html#def-centralizer",
  "type": "Definition",
  "number": "4.32",
  "title": "",
  "body": "  Let be a group. For any , is called the centralizer of in and for any , is called the normalizer of in .   "
},
{
  "id": "def-normalizer",
  "level": "2",
  "url": "sec-class-eq.html#def-normalizer",
  "type": "Definition",
  "number": "4.33",
  "title": "",
  "body": "  Let be a group. For any , is called the normalizer of in .   "
},
{
  "id": "thm-conjclass",
  "level": "2",
  "url": "sec-class-eq.html#thm-conjclass",
  "type": "Theorem",
  "number": "4.34",
  "title": "",
  "body": "     Then acts on by conjugation ( ). For all , the orbit of is the conjugacy class of , and .    Then acts on the power set by conjugation ( ). For all , and .      "
},
{
  "id": "cor-conjclass",
  "level": "2",
  "url": "sec-class-eq.html#cor-conjclass",
  "type": "Corollary",
  "number": "4.35",
  "title": "",
  "body": "  For a finite group , the size of any conjugacy class divides .   "
},
{
  "id": "thm-class-eq",
  "level": "2",
  "url": "sec-class-eq.html#thm-class-eq",
  "type": "Theorem",
  "number": "4.36",
  "title": "The Class Equation.",
  "body": " The Class Equation   Let be a finite group and let be a list of unique representatives of all of the conjugacy classes of of size greater than 1. Then .    The elements of are precisely the group elements that are conjugate to only themselves; that is, they are the one-element orbits for the conjugation action. Because the conjugacy classes (orbits of the conjugation action) partition we have For each as in the statement, by Theorem , we have . The class equation follows from substituting this into the equation above.   "
},
{
  "id": "problem-38",
  "level": "2",
  "url": "sec-class-eq.html#problem-38",
  "type": "Problem",
  "number": "4.37",
  "title": "",
  "body": " Let be a finite -group and its center. If is a normal subgroup of , prove that .   Let be a finite -group for some prime and a normal subgroup of .  First, we show that the center of is nontrivial. Suppose by way of contradiction that . We examine the conjugacy classes of . From the Class Equation, we know Note that for some , meaning that the only divisors of are powers of . In finite groups, each conjugacy class must divide the order of the group. By Lagrange’s Theorem, , where . Since |Z(G)|=1, we see that , which is impossible given that . Thus .  As it is a union of conjugacy classes of the elements it contains, one of which is . Assume by way of contradiction that , meaning that is the only element in whose conjugacy class is a singleton. This yields However, by Lagrange’s Theorem must also be a group, and thus by an analogous element counting argument as above we see that there exists some such that , or that for all . Thankfully, this means that , and thus we have .   "
},
{
  "id": "problem-39",
  "level": "2",
  "url": "sec-class-eq.html#problem-39",
  "type": "Problem",
  "number": "4.38",
  "title": "",
  "body": " Let be a group of order where is a prime and . (a) Prove the center of G is not trivial. (b) Prove there exists a subgroup of order for each satisfying    Let be a group of order where is a prime and .  The Class Equation tells us where are the centralizers with more than one element. Notice that this means , and thus each centralizer is a power of . Thus we have for some . Thus the center of cannot be trivial, else we would not be able to sum to a power of .  The trivial subgroup has order . Suppose inductively that there exists a subgroup of order that has a subgroup for every power of in between.  Consider, if you will, a group of order , . As this is a -group, by Part (a) the center is nontrivial, making it a group as well, and thus it has a subgroup of order , , which is normal in as it lies within the center, so we mod out by to see that has a subgroup of order , which has subgroups of all the other powers by the induction hypothesis.   "
},
{
  "id": "sec-pgroups",
  "level": "1",
  "url": "sec-pgroups.html",
  "type": "Section",
  "number": "5.1",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-groups",
  "body": " -groups    For a prime number , a -group is a group of order for some .      If is a prime number and is a finite group of order for some , then is not the trivial group (In fact for some ).    Let be a list of unique representatives of all of the conjugacy classes of of size greater than 1 as in the class equation. Then for each , so . Since , it follows that for each . From the Class equation we deduce that so, .      Let be a finite group and a prime. Write the order of as where . A Sylow -subgroup of is a subgroup such that . That is, a Sylow -subgroup of is a subgroup whose order is the highest conceivable power of according to Lagrange's Theorem.  We set to be the collection of all Sylow -subgroups of and to be the number of Sylow -subgroups.     We allow the case when , in which case and has a unique Sylow -subgroup, namely which has order .    In for a prime , is a Sylow -subgroup. If , there is only one Sylow -subgroup of , so .  In for odd, each of the subgroups , for is a Sylow -subgroup, so .    In , the Sylow -subgroups are the cyclic groups for any five cycle , so because there are 24 five cycles, but there are four of these in every Sylow 5-subgroup. The Sylow -subgroups are the cyclic groups for any three cycle , so because there are 20 three cycles, but there are two of these in every Sylow 3-subgroup.  A Sylow -subgroup of is any subgroup of order . For example is a Sylow -subgroup. There are many others.    Cauchy's Theorem   If is a finite group and is a prime number dividing , then has an element of order . (In fact, at least elements of order .)     Let be a group of order for some prime acting on a finite set .    Suppose does not divide . Prove that there exists some element of fixed by all elements of .  Suppose acts faithfully on . Prove that .      Let be a group of order , for some prime , acting on a finite set .    Suppose there is no element in that is fixed by all elements of .  By Orbit-Stabilizer we know that for all . Thus every orbit under this action has an order dividing , so either or some positive power of However, as no element of is fixed by every element of , there exists no stabilizer which is all of , and thus there exist no orbits that have order .  Recall that the orbits of this action partition , and thus . As every orbit is divisible by , so too must be .    Suppose acts faithfully on . Thus the permutation representation homomorphism is injective. Let denote the order of . Then , which as order . As is injective, we see that , and thus .  Thus must show up in the factorization of at least times, meaning that .       "
},
{
  "id": "def-pgroup",
  "level": "2",
  "url": "sec-pgroups.html#def-pgroup",
  "type": "Definition",
  "number": "5.1",
  "title": "",
  "body": "  For a prime number , a -group is a group of order for some .   "
},
{
  "id": "thm-center-pgroup",
  "level": "2",
  "url": "sec-pgroups.html#thm-center-pgroup",
  "type": "Theorem",
  "number": "5.2",
  "title": "",
  "body": "  If is a prime number and is a finite group of order for some , then is not the trivial group (In fact for some ).    Let be a list of unique representatives of all of the conjugacy classes of of size greater than 1 as in the class equation. Then for each , so . Since , it follows that for each . From the Class equation we deduce that so, .   "
},
{
  "id": "def-sylow-subgroup",
  "level": "2",
  "url": "sec-pgroups.html#def-sylow-subgroup",
  "type": "Definition",
  "number": "5.3",
  "title": "",
  "body": "  Let be a finite group and a prime. Write the order of as where . A Sylow -subgroup of is a subgroup such that . That is, a Sylow -subgroup of is a subgroup whose order is the highest conceivable power of according to Lagrange's Theorem.  We set to be the collection of all Sylow -subgroups of and to be the number of Sylow -subgroups.   "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "sec-pgroups.html#remark-17",
  "type": "Remark",
  "number": "5.4",
  "title": "",
  "body": " We allow the case when , in which case and has a unique Sylow -subgroup, namely which has order .  "
},
{
  "id": "problem-40",
  "level": "2",
  "url": "sec-pgroups.html#problem-40",
  "type": "Problem",
  "number": "5.5",
  "title": "",
  "body": " In for a prime , is a Sylow -subgroup. If , there is only one Sylow -subgroup of , so .  In for odd, each of the subgroups , for is a Sylow -subgroup, so .  "
},
{
  "id": "problem-41",
  "level": "2",
  "url": "sec-pgroups.html#problem-41",
  "type": "Problem",
  "number": "5.6",
  "title": "",
  "body": " In , the Sylow -subgroups are the cyclic groups for any five cycle , so because there are 24 five cycles, but there are four of these in every Sylow 5-subgroup. The Sylow -subgroups are the cyclic groups for any three cycle , so because there are 20 three cycles, but there are two of these in every Sylow 3-subgroup.  A Sylow -subgroup of is any subgroup of order . For example is a Sylow -subgroup. There are many others.  "
},
{
  "id": "thm-cauchy",
  "level": "2",
  "url": "sec-pgroups.html#thm-cauchy",
  "type": "Theorem",
  "number": "5.7",
  "title": "Cauchy's Theorem.",
  "body": " Cauchy's Theorem   If is a finite group and is a prime number dividing , then has an element of order . (In fact, at least elements of order .)   "
},
{
  "id": "problem-42",
  "level": "2",
  "url": "sec-pgroups.html#problem-42",
  "type": "Problem",
  "number": "5.8",
  "title": "",
  "body": " Let be a group of order for some prime acting on a finite set .    Suppose does not divide . Prove that there exists some element of fixed by all elements of .  Suppose acts faithfully on . Prove that .      Let be a group of order , for some prime , acting on a finite set .    Suppose there is no element in that is fixed by all elements of .  By Orbit-Stabilizer we know that for all . Thus every orbit under this action has an order dividing , so either or some positive power of However, as no element of is fixed by every element of , there exists no stabilizer which is all of , and thus there exist no orbits that have order .  Recall that the orbits of this action partition , and thus . As every orbit is divisible by , so too must be .    Suppose acts faithfully on . Thus the permutation representation homomorphism is injective. Let denote the order of . Then , which as order . As is injective, we see that , and thus .  Thus must show up in the factorization of at least times, meaning that .      "
},
{
  "id": "sec-sylowthm",
  "level": "1",
  "url": "sec-sylowthm.html",
  "type": "Section",
  "number": "5.2",
  "title": "Sylow's Theorem",
  "body": " Sylow's Theorem    Suppose is a group and is a positive integer. Then   If is a subgroup of order , then is a subgroup of order .    If there is a unique subgroup of of order , then .         Let be a finite group, a prime, a Sylow -subgroup of , and any -subgroup of . Then .     Sylow's Theorem   Assume is a group of order where is prime, , and .    (there exists at least one Sylow -subgroup of ).    If is a Sylow -subgroup of and is any -subgroup of (i.e., a subgroup whose order is some power of ), then there is a such that . In particular, the action of on by conjugation is transitive — i.e., any two Sylow -subgroups are conjugate.    We have     For any , and hence         Let be a finite group.   Suppose every subgroup of is normal. Prove that given any positive divisor of there exists a subgroup of of order .    Give an example, with justification, of a finite group and a positive divisor of such that has no subgroup of order .      Let be a finite group.  Suppose every subgroup of is normal. Let be a positive divisor of . For every prime dividing the order of there is exactly one Sylow -subgroup of , given that Sylow -subgroups are normal if and only if they are unique. Thus can be written as a direct product of its Sylow -subgroups. Given the prime factorization of , the direct product of the Sylow -subgroups such that is 1. A subgroup of as each Sylow -subgroup is normal, and 2. A direct product of cyclic groups of relatively prime order, yielding an element of order . The subgroup generated by this element is a subgroup of of order .  We take a peak at with . Suppose had a subgroup of order , . First, note that , the smallest prime dividing the order of , making normal in .  As there are eight -cycles in , there exists some -cycle, , such that . Consider then and in . Since , it must be the case that either or .    If then . As we have , but as is a subgroup this would mean , which is not the case.  If then , but , and so we have a contradiction. Thus cannot exist, and has no subgroup of order .       Let be a finite group, a prime dividing the order of , and a normal subgroup of order for some . Prove the following statements.    is contained in every Sylow -subgroup of .     contains a nontrivial abelian subgroup that is normal in .      Let be a finite group, a prime dividing the order of , and a normal subgroup of order for some .  As is normal we have for all . As it is a group it is contained in some Sylow -subgroup. All Sylow -subgroups are conjugate to each other, but is fixed by conjugation so its actually in all of them.  Consider , which is abelian in . The center of -groups are nontrivial so that's good. Let , , and consider . As we know . Let . We see , since is still normal. so we have .  Notice that , and thus . Thus , and so we can substitute the last line in the previous paragraph to see . Thus we have normality!     Let be a normal subgroup of a finite group , a prime dividing the order of , and a Sylow -subgroup of . Prove that  Hint : For , consider the subgroup .   First, note that .  Let act on by conjugation, which is a transitive action by part (2) of Sylow's Theorem. Therefore acts transitively on this set as well. Under this action, .  Let , and let . Consider . As the action by is transitive there exists some such that . This means that stabilizes . Then stabilizes as well, so . But notice that , where and . Thus .     We proceed via the contrapositive. Let be a Sylow -subgroup, and suppose . Thus    Let be a finite group and a prime dividing the order of . Let P be a Sylow -subgroup.  Note that and both have elements, where is the largest power of that divides the order of . Recall . As is the largest power of that divides the order of , we see that must be at least . Thus .  First, note that . Note that is the largest subgroup of such that is normal in , making the only Sylow -subgroup of . Let . Notice that , but as we have . As is a Sylow -subgroup that is contained in , we see that , placing . Thus .     Let be a group of order    Prove that has a unique -Sylow subgroup    Prove that the -Sylow subgroup is contained in the center of .      Let be a group of order   By Sylow's Theorem we know and is congruent to . The only possibility for such is , meaning that has exactly Sylow -subgroup.  By the First Isomorphism Theorem we know that . However, , which has order . As this is a homomorphism, we see the order of must divide both and , two numbers that are relatively prime. Thus , meaning that conjugation is equivalent to the identity map, or that for all . Thus .     Let be a group of order . Prove that has a normal subgroup of order and that the center of contains a subgroup of order    Let be a group of order . By Sylow's Theorem we know the and , and so , making , the unique Sylow -subgroup of , normal in . Things are looking good thus far. We also know the following: - and , so as well. Yeehaw.  Let denote the unique Sylow -subgroup, and let act on by conjugation. Thus . The First Isomorphism Theorem tells us that , where is the kernel of . However, , meaning that the order of must divide both and , which cannot happen. Thus must be trivial, meaning that for every and , making a subgroup of of order .    "
},
{
  "id": "lem-Sylaction",
  "level": "2",
  "url": "sec-sylowthm.html#lem-Sylaction",
  "type": "Lemma",
  "number": "5.9",
  "title": "",
  "body": "  Suppose is a group and is a positive integer. Then   If is a subgroup of order , then is a subgroup of order .    If there is a unique subgroup of of order , then .      "
},
{
  "id": "lem-Syl-lem",
  "level": "2",
  "url": "sec-sylowthm.html#lem-Syl-lem",
  "type": "Lemma",
  "number": "5.10",
  "title": "",
  "body": "  Let be a finite group, a prime, a Sylow -subgroup of , and any -subgroup of . Then .   "
},
{
  "id": "thm-sylow",
  "level": "2",
  "url": "sec-sylowthm.html#thm-sylow",
  "type": "Theorem",
  "number": "5.11",
  "title": "Sylow's Theorem.",
  "body": " Sylow's Theorem   Assume is a group of order where is prime, , and .    (there exists at least one Sylow -subgroup of ).    If is a Sylow -subgroup of and is any -subgroup of (i.e., a subgroup whose order is some power of ), then there is a such that . In particular, the action of on by conjugation is transitive — i.e., any two Sylow -subgroups are conjugate.    We have     For any , and hence       "
},
{
  "id": "problem-43",
  "level": "2",
  "url": "sec-sylowthm.html#problem-43",
  "type": "Problem",
  "number": "5.12",
  "title": "",
  "body": " Let be a finite group.   Suppose every subgroup of is normal. Prove that given any positive divisor of there exists a subgroup of of order .    Give an example, with justification, of a finite group and a positive divisor of such that has no subgroup of order .      Let be a finite group.  Suppose every subgroup of is normal. Let be a positive divisor of . For every prime dividing the order of there is exactly one Sylow -subgroup of , given that Sylow -subgroups are normal if and only if they are unique. Thus can be written as a direct product of its Sylow -subgroups. Given the prime factorization of , the direct product of the Sylow -subgroups such that is 1. A subgroup of as each Sylow -subgroup is normal, and 2. A direct product of cyclic groups of relatively prime order, yielding an element of order . The subgroup generated by this element is a subgroup of of order .  We take a peak at with . Suppose had a subgroup of order , . First, note that , the smallest prime dividing the order of , making normal in .  As there are eight -cycles in , there exists some -cycle, , such that . Consider then and in . Since , it must be the case that either or .    If then . As we have , but as is a subgroup this would mean , which is not the case.  If then , but , and so we have a contradiction. Thus cannot exist, and has no subgroup of order .     "
},
{
  "id": "problem-44",
  "level": "2",
  "url": "sec-sylowthm.html#problem-44",
  "type": "Problem",
  "number": "5.13",
  "title": "",
  "body": " Let be a finite group, a prime dividing the order of , and a normal subgroup of order for some . Prove the following statements.    is contained in every Sylow -subgroup of .     contains a nontrivial abelian subgroup that is normal in .      Let be a finite group, a prime dividing the order of , and a normal subgroup of order for some .  As is normal we have for all . As it is a group it is contained in some Sylow -subgroup. All Sylow -subgroups are conjugate to each other, but is fixed by conjugation so its actually in all of them.  Consider , which is abelian in . The center of -groups are nontrivial so that's good. Let , , and consider . As we know . Let . We see , since is still normal. so we have .  Notice that , and thus . Thus , and so we can substitute the last line in the previous paragraph to see . Thus we have normality!   "
},
{
  "id": "problem-45",
  "level": "2",
  "url": "sec-sylowthm.html#problem-45",
  "type": "Problem",
  "number": "5.14",
  "title": "",
  "body": " Let be a normal subgroup of a finite group , a prime dividing the order of , and a Sylow -subgroup of . Prove that  Hint : For , consider the subgroup .   First, note that .  Let act on by conjugation, which is a transitive action by part (2) of Sylow's Theorem. Therefore acts transitively on this set as well. Under this action, .  Let , and let . Consider . As the action by is transitive there exists some such that . This means that stabilizes . Then stabilizes as well, so . But notice that , where and . Thus .   "
},
{
  "id": "problem-46",
  "level": "2",
  "url": "sec-sylowthm.html#problem-46",
  "type": "Problem",
  "number": "5.15",
  "title": "",
  "body": " We proceed via the contrapositive. Let be a Sylow -subgroup, and suppose . Thus    Let be a finite group and a prime dividing the order of . Let P be a Sylow -subgroup.  Note that and both have elements, where is the largest power of that divides the order of . Recall . As is the largest power of that divides the order of , we see that must be at least . Thus .  First, note that . Note that is the largest subgroup of such that is normal in , making the only Sylow -subgroup of . Let . Notice that , but as we have . As is a Sylow -subgroup that is contained in , we see that , placing . Thus .   "
},
{
  "id": "problem-47",
  "level": "2",
  "url": "sec-sylowthm.html#problem-47",
  "type": "Problem",
  "number": "5.16",
  "title": "",
  "body": " Let be a group of order    Prove that has a unique -Sylow subgroup    Prove that the -Sylow subgroup is contained in the center of .      Let be a group of order   By Sylow's Theorem we know and is congruent to . The only possibility for such is , meaning that has exactly Sylow -subgroup.  By the First Isomorphism Theorem we know that . However, , which has order . As this is a homomorphism, we see the order of must divide both and , two numbers that are relatively prime. Thus , meaning that conjugation is equivalent to the identity map, or that for all . Thus .   "
},
{
  "id": "problem-48",
  "level": "2",
  "url": "sec-sylowthm.html#problem-48",
  "type": "Problem",
  "number": "5.17",
  "title": "",
  "body": " Let be a group of order . Prove that has a normal subgroup of order and that the center of contains a subgroup of order    Let be a group of order . By Sylow's Theorem we know the and , and so , making , the unique Sylow -subgroup of , normal in . Things are looking good thus far. We also know the following: - and , so as well. Yeehaw.  Let denote the unique Sylow -subgroup, and let act on by conjugation. Thus . The First Isomorphism Theorem tells us that , where is the kernel of . However, , meaning that the order of must divide both and , which cannot happen. Thus must be trivial, meaning that for every and , making a subgroup of of order .   "
},
{
  "id": "sec-simple-groups",
  "level": "1",
  "url": "sec-simple-groups.html",
  "type": "Section",
  "number": "5.3",
  "title": "Simple Groups",
  "body": " Simple Groups    A group is called simple if it has only two normal subgroups: itself and the trivial subgroup.     Let us prove that no group or order is simple. Let be any group of order . We will prove that must have either a normal subgroup of order or a normal subgroups of oder .  Sylow theory gives that is either or and is either or . If either of these numbers is , we have a unique subgroup of order or of order , and such a subgroup must be normal. Suppose these numbers are and , respectively. We deduce a contradition by counting elements .  In detail, say are the Sylow -subgroups. By Lagrange for all . Thus the set  has elements, one of which is and the other of which must have order . That is, there are elements of order in . But now consider the three Sylow -subgroups . Each has order and for all . It follows that for all , and thus , a contradiction.    In the previous example, it would not be so easy to count elements of order and . We do know that every element in has order , or (any only one has order ), but the size of this set is harder to calculate. For notice that might have order . The most one can say for sure is that has at least elements.    No group of order is simple.     Let G be a simple group of order 60. Determine the number of elements of G of order 5.  Show that there is no simple group of order 30.   Let be a simple group of order By Sylow's Theorem we know that and that . Thus the options for are and . Since is simple we see that . As each Sylow -subgroup of has unique elements of order and the identity we see that the number of elements or order in is .  Suppose by way of contradiction that is a simple group of order . Similarly to above, , yielding elements of order . Now, and , so , yielding far too many elements to fit in .   Suppose is a simple group of order (Yes, there is such a group.)   How many elements of order does have?    Show that has at least elements of order      By Sylow's Theorem, and divides . Thus the only options are and . However, as is simple there cannot be only one Sylow -Subgroup, as it would be normal. Thus there are , each having unique elements and the identity. Thus there are elements of order .  By Sylow's Theorem, and divides . As is simple there cannot be one, so there must be at least , each with non-identity elements. Thus there must be at least elements of order .   Let be a group of order and let denote the set of Sylow -subgroups of . (a) Suppose for any either or Prove that is not simple. (b) Suppose there exists such that . Prove that is not simple. (Hint: Consider the normalizer of .)  Let be a group of order and let denote the set of Sylow -subgroups of . ###### Part (a) Suppose by way of contradiction that is simple. By Sylow's Theorem we know the following: - and is congruent to . As is simple there must be ten of the fuckers. - and is congruent to . As is simple there must be six of them. Since each Sylow -subgroup will have non-identity elements and they are all distinct that accounts for elements of order . However, there are also elements or order to account for, which is a problem. Thus cannot be simple.  Suppose now that there exists such that . . Given this intersection, we know that . Additionally, note that as is a subgroup of both and with index 3 in both, the smallest prime dividing the order or both, that is normal in both.  We now consider the normalizer of , which we denote for simplicity. As is a subgroup of its order must divide by Lagrange's Theorem. However, , and so must have at least elements, leaving the options of and . If then , making normal in , a problem.  If then , the smallest prime dividing . Thus is still normal, which is still a problem. Thus cannot be simple.   Let be a group of order .  Show that there are at most two options for , the number of Sylow -subgroups of and list them.  Prove that is not simple.   Let be a group of order .  By Sylow's Theorem we know that and . The possible options are thus and .  Suppose by way of contradiction that is simple. Thus , so . Let act on the by conjugation, yielding the homomorphism granted via the permutation representation. By (2) in Sylow's Theorem we see that is not trivial. As we see that , meaning that the is non-trivial, yielding a non-trivial normal subgroup of , a contradiction.   Let be a finite group of order with prime numbers. Show that is not a simple group.  Let be a finite group of order with prime numbers, and suppose by way of contradiction that is simple. By Sylow's Theorem we have the following: - and , and thus . - and , and thus . From this information we see that there are elements of order and elements of order , for a lovely total of elements, which is too many.   Let be a group and let be the number of Sylow -subgroups of , where is a prime dividing the order of . (a) Prove that if is simple then (b) Deduce that there is no simple group of order .  Let be a group, a prime dividing the order of , and the number of Sylow -subgroups of .  Let act on by conjugation, inducing the homomorphism via the permutation representation. Notice that the order of is conspicuously . The kernel of this map is a normal subgroup of . Note that since is simple the only normal subgroups of are the trivial subgroup and itself. However, the kernel cannot be all of as this would make trivial, which cannot be the case given that our action is transitive by Part (2) of Sylow's Theorem. Thus , making injective. Thus . As the image is a subgroup of , the result follows from Lagrange's Theorem.  Let be a group of order . Suppose by way of contradiction that is simple. . Thus the number of Sylow- subgroups is congruent to and divides , the options of which are 1 and 16 (See: Sylow's Theorem). As does not divide this contradicts part (a). Thus there are no simple groups of order .   Prove that any group of order has a normal subgroup of order or .  Let be a group of order . By Sylow's Theorem we have and , and thus . If then the unique Sylow -subgroup is normal, giving us a normal subgroup of order .  Suppose then that , let be one of the subgroups of order , and let act on the cosets of by left multiplication, inducing the homomorphism . This is because there are elements in , and thus there are left cosets by Lagrange's Theorem.  As , we see that cannot be injective and thus is a non-trivial normal subgroup of .  Recall that the action of on its cosets by left multiplication is always a transitive action, meaning there is exactly one orbit, for some , which must then have all elements of in it. By Orbit-Stabilizer, , and thus . So there are elements in that fix for any .  Let and . Notice that . As , We know that yields the identity permutation, and thus that .  Thus , which has order    Prove that no group of order 150 is simple.  Let be a group of order and suppose by way of contradiction that is simple. Notice that . By Sylow's Theorem, we know and divides , the only options are thus and . Since is simple, there must be exactly , where . Let act on by conjugation. Thus is a group homomorphism. Note that , and that the order of does not divide . By Part (2) of Sylow's Theorem this action is transitive, meaning that the kernel of cannot be trivial. Thus is a nontrivial normal subgroup of , a contradiction. Thus no group of order is simple.   Let G be a group of order . Prove that is not simple.  By Sylow's Theorem we know that and . Thus our options are and . Suppose that .  Let act on by conjugation, yielding the homomorphism via the permutation representation. This map is non-trivial from part (2) of Sylow's Theorem, but does not divide , and thus cannot be injective. Then the kernel of this homomorphism is non-trivial, normal subgroup of . Thus is not simple.   Prove that no group of order with is simple.  Let be a group of order with , and suppose by way of contradiction that is simple. By Sylow's Theorem we know the following: - and , and - and , so our options are and . Suppose its . Let act on by conjugation, yielding the permutation representation homomorphism . The kernel of this homomorphism cannot be trivial as the conjugation action on Sylow subgroups is transitive by Part (2) of Sylow's Theorem. Notice does not divide the order of , so our kernel cannot be all of , making a nontrivial normal subgroup of .  If , then must divide , meaning that . However, by the cyclic subgroup generated by an element of order has index in , making it normal.  Thus cannot be simple.   Prove that no group of order with is simple.  Let be a group of order with and suppose by way of contradiction that is simple.  By Sylow's Theorem we know the following: - and , and - and , so our options are .  Let act on by conjugation, yielding the permutation representation homomorphism . The kernel of this homomorphism cannot be trivial as the conjugation action on Sylow subgroups is transitive by Part (2) of Sylow's Theorem. Notice that if is or then does not divide the order of , so our kernel cannot be all of , making a nontrivial normal subgroup of .  If , then must divide , meaning that . However, by the cyclic subgroup generated by an element of order has index in , making it normal.  Thus cannot be simple.    "
},
{
  "id": "def-simple-group",
  "level": "2",
  "url": "sec-simple-groups.html#def-simple-group",
  "type": "Definition",
  "number": "5.18",
  "title": "",
  "body": "  A group is called simple if it has only two normal subgroups: itself and the trivial subgroup.   "
},
{
  "id": "problem-49",
  "level": "2",
  "url": "sec-simple-groups.html#problem-49",
  "type": "Problem",
  "number": "5.19",
  "title": "",
  "body": " Let us prove that no group or order is simple. Let be any group of order . We will prove that must have either a normal subgroup of order or a normal subgroups of oder .  Sylow theory gives that is either or and is either or . If either of these numbers is , we have a unique subgroup of order or of order , and such a subgroup must be normal. Suppose these numbers are and , respectively. We deduce a contradition by counting elements .  In detail, say are the Sylow -subgroups. By Lagrange for all . Thus the set  has elements, one of which is and the other of which must have order . That is, there are elements of order in . But now consider the three Sylow -subgroups . Each has order and for all . It follows that for all , and thus , a contradiction.  "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "sec-simple-groups.html#remark-18",
  "type": "Remark",
  "number": "5.20",
  "title": "",
  "body": " In the previous example, it would not be so easy to count elements of order and . We do know that every element in has order , or (any only one has order ), but the size of this set is harder to calculate. For notice that might have order . The most one can say for sure is that has at least elements.  "
},
{
  "id": "problem-50",
  "level": "2",
  "url": "sec-simple-groups.html#problem-50",
  "type": "Problem",
  "number": "5.21",
  "title": "",
  "body": " No group of order is simple.  "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-43",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": " Let G be a simple group of order 60. Determine the number of elements of G of order 5.  Show that there is no simple group of order 30.   Let be a simple group of order By Sylow's Theorem we know that and that . Thus the options for are and . Since is simple we see that . As each Sylow -subgroup of has unique elements of order and the identity we see that the number of elements or order in is .  Suppose by way of contradiction that is a simple group of order . Similarly to above, , yielding elements of order . Now, and , so , yielding far too many elements to fit in .  "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-44",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": "Suppose is a simple group of order (Yes, there is such a group.)   How many elements of order does have?    Show that has at least elements of order      By Sylow's Theorem, and divides . Thus the only options are and . However, as is simple there cannot be only one Sylow -Subgroup, as it would be normal. Thus there are , each having unique elements and the identity. Thus there are elements of order .  By Sylow's Theorem, and divides . As is simple there cannot be one, so there must be at least , each with non-identity elements. Thus there must be at least elements of order .  "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-45",
  "type": "Exercise",
  "number": "5.3.3",
  "title": "",
  "body": "Let be a group of order and let denote the set of Sylow -subgroups of . (a) Suppose for any either or Prove that is not simple. (b) Suppose there exists such that . Prove that is not simple. (Hint: Consider the normalizer of .)  Let be a group of order and let denote the set of Sylow -subgroups of . ###### Part (a) Suppose by way of contradiction that is simple. By Sylow's Theorem we know the following: - and is congruent to . As is simple there must be ten of the fuckers. - and is congruent to . As is simple there must be six of them. Since each Sylow -subgroup will have non-identity elements and they are all distinct that accounts for elements of order . However, there are also elements or order to account for, which is a problem. Thus cannot be simple.  Suppose now that there exists such that . . Given this intersection, we know that . Additionally, note that as is a subgroup of both and with index 3 in both, the smallest prime dividing the order or both, that is normal in both.  We now consider the normalizer of , which we denote for simplicity. As is a subgroup of its order must divide by Lagrange's Theorem. However, , and so must have at least elements, leaving the options of and . If then , making normal in , a problem.  If then , the smallest prime dividing . Thus is still normal, which is still a problem. Thus cannot be simple.  "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-46",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "",
  "body": "Let be a group of order .  Show that there are at most two options for , the number of Sylow -subgroups of and list them.  Prove that is not simple.   Let be a group of order .  By Sylow's Theorem we know that and . The possible options are thus and .  Suppose by way of contradiction that is simple. Thus , so . Let act on the by conjugation, yielding the homomorphism granted via the permutation representation. By (2) in Sylow's Theorem we see that is not trivial. As we see that , meaning that the is non-trivial, yielding a non-trivial normal subgroup of , a contradiction.  "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-47",
  "type": "Exercise",
  "number": "5.3.5",
  "title": "",
  "body": "Let be a finite group of order with prime numbers. Show that is not a simple group.  Let be a finite group of order with prime numbers, and suppose by way of contradiction that is simple. By Sylow's Theorem we have the following: - and , and thus . - and , and thus . From this information we see that there are elements of order and elements of order , for a lovely total of elements, which is too many.  "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-48",
  "type": "Exercise",
  "number": "5.3.6",
  "title": "",
  "body": "Let be a group and let be the number of Sylow -subgroups of , where is a prime dividing the order of . (a) Prove that if is simple then (b) Deduce that there is no simple group of order .  Let be a group, a prime dividing the order of , and the number of Sylow -subgroups of .  Let act on by conjugation, inducing the homomorphism via the permutation representation. Notice that the order of is conspicuously . The kernel of this map is a normal subgroup of . Note that since is simple the only normal subgroups of are the trivial subgroup and itself. However, the kernel cannot be all of as this would make trivial, which cannot be the case given that our action is transitive by Part (2) of Sylow's Theorem. Thus , making injective. Thus . As the image is a subgroup of , the result follows from Lagrange's Theorem.  Let be a group of order . Suppose by way of contradiction that is simple. . Thus the number of Sylow- subgroups is congruent to and divides , the options of which are 1 and 16 (See: Sylow's Theorem). As does not divide this contradicts part (a). Thus there are no simple groups of order .  "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-49",
  "type": "Exercise",
  "number": "5.3.7",
  "title": "",
  "body": "Prove that any group of order has a normal subgroup of order or .  Let be a group of order . By Sylow's Theorem we have and , and thus . If then the unique Sylow -subgroup is normal, giving us a normal subgroup of order .  Suppose then that , let be one of the subgroups of order , and let act on the cosets of by left multiplication, inducing the homomorphism . This is because there are elements in , and thus there are left cosets by Lagrange's Theorem.  As , we see that cannot be injective and thus is a non-trivial normal subgroup of .  Recall that the action of on its cosets by left multiplication is always a transitive action, meaning there is exactly one orbit, for some , which must then have all elements of in it. By Orbit-Stabilizer, , and thus . So there are elements in that fix for any .  Let and . Notice that . As , We know that yields the identity permutation, and thus that .  Thus , which has order   "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-50",
  "type": "Exercise",
  "number": "5.3.8",
  "title": "",
  "body": "Prove that no group of order 150 is simple.  Let be a group of order and suppose by way of contradiction that is simple. Notice that . By Sylow's Theorem, we know and divides , the only options are thus and . Since is simple, there must be exactly , where . Let act on by conjugation. Thus is a group homomorphism. Note that , and that the order of does not divide . By Part (2) of Sylow's Theorem this action is transitive, meaning that the kernel of cannot be trivial. Thus is a nontrivial normal subgroup of , a contradiction. Thus no group of order is simple.  "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-51",
  "type": "Exercise",
  "number": "5.3.9",
  "title": "",
  "body": "Let G be a group of order . Prove that is not simple.  By Sylow's Theorem we know that and . Thus our options are and . Suppose that .  Let act on by conjugation, yielding the homomorphism via the permutation representation. This map is non-trivial from part (2) of Sylow's Theorem, but does not divide , and thus cannot be injective. Then the kernel of this homomorphism is non-trivial, normal subgroup of . Thus is not simple.  "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-52",
  "type": "Exercise",
  "number": "5.3.10",
  "title": "",
  "body": "Prove that no group of order with is simple.  Let be a group of order with , and suppose by way of contradiction that is simple. By Sylow's Theorem we know the following: - and , and - and , so our options are and . Suppose its . Let act on by conjugation, yielding the permutation representation homomorphism . The kernel of this homomorphism cannot be trivial as the conjugation action on Sylow subgroups is transitive by Part (2) of Sylow's Theorem. Notice does not divide the order of , so our kernel cannot be all of , making a nontrivial normal subgroup of .  If , then must divide , meaning that . However, by the cyclic subgroup generated by an element of order has index in , making it normal.  Thus cannot be simple.  "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-53",
  "type": "Exercise",
  "number": "5.3.11",
  "title": "",
  "body": "Prove that no group of order with is simple.  Let be a group of order with and suppose by way of contradiction that is simple.  By Sylow's Theorem we know the following: - and , and - and , so our options are .  Let act on by conjugation, yielding the permutation representation homomorphism . The kernel of this homomorphism cannot be trivial as the conjugation action on Sylow subgroups is transitive by Part (2) of Sylow's Theorem. Notice that if is or then does not divide the order of , so our kernel cannot be all of , making a nontrivial normal subgroup of .  If , then must divide , meaning that . However, by the cyclic subgroup generated by an element of order has index in , making it normal.  Thus cannot be simple.  "
},
{
  "id": "sec-grp-dps",
  "level": "1",
  "url": "sec-grp-dps.html",
  "type": "Section",
  "number": "6.1",
  "title": "Direct Products",
  "body": " Direct Products   Let be a group that acts on a set , and a subgroup of such that for any there exists a unique with . (a) Prove that for every and , where (b) Prove that if then for every , is the internal direct product of and     Let be a group that acts on a set , and a subgroup of such that for any there exists a unique with .  Suppose there exists some such that . Then . But by the definition of group action. As the is unique, we see . Thus .  Let and . If then we can write , as . Suppose and for some . There exists an such that . Then , so , so . Thankfully, we can know write ), and so .  If then we have , which means . From Part (a) we have a trivial intersection, making the internal direct product of and .   "
},
{
  "id": "problem-51",
  "level": "2",
  "url": "sec-grp-dps.html#problem-51",
  "type": "Problem",
  "number": "6.1",
  "title": "",
  "body": " Let be a group that acts on a set , and a subgroup of such that for any there exists a unique with . (a) Prove that for every and , where (b) Prove that if then for every , is the internal direct product of and   "
},
{
  "id": "proof-50",
  "level": "2",
  "url": "sec-grp-dps.html#proof-50",
  "type": "Proof",
  "number": "6.1.1",
  "title": "",
  "body": " Let be a group that acts on a set , and a subgroup of such that for any there exists a unique with .  Suppose there exists some such that . Then . But by the definition of group action. As the is unique, we see . Thus .  Let and . If then we can write , as . Suppose and for some . There exists an such that . Then , so , so . Thankfully, we can know write ), and so .  If then we have , which means . From Part (a) we have a trivial intersection, making the internal direct product of and .  "
},
{
  "id": "sec-grp-spds",
  "level": "1",
  "url": "sec-grp-spds.html",
  "type": "Section",
  "number": "6.2",
  "title": "Semidirect Products",
  "body": " Semidirect Products  "
},
{
  "id": "sec-order-pq",
  "level": "1",
  "url": "sec-order-pq.html",
  "type": "Section",
  "number": "6.3",
  "title": "Groups of Order <span class=\"process-math\">\\(pq\\)<\/span>",
  "body": " Groups of Order  "
},
{
  "id": "sec-ftfgag",
  "level": "1",
  "url": "sec-ftfgag.html",
  "type": "Section",
  "number": "7.1",
  "title": "Group Decompositions",
  "body": " Group Decompositions   Prove that any group of order is abelian.  Let be a group of order . By Sylow's Theorem we see the following: - and , and so . - and , and so as well. - and , so actually too. Thus the unique Sylow -subgroup and Sylow -subgroup, denoted and , respectively, are normal in .  As and are normal in and intersect trivially, we see that . Let and consider . Let and notice . As and we see and , thus , making .  Let be the unique Sylow -subgroup, which has order . As and intersects with trivially, we see , a direct product of cyclic groups of relatively prime order, making abelian.   Suppose is a group of order and that contains an element of order . Prove is abelian.  By Sylow's Theorem we know the number of Sylow -subgroups of must divide and be congruent to , the only option of which is . Let denote the unique Sylow -subgroup and let be the cyclic subgroup generated by the element of order .  As is unique it is normal in , and it also means we have . Notice that as and are groups of relatively prime order we have . Thus , and so , making , a direct product of abelian groups. Thus is abelian.   Let be a group of order where and are distinct primes. (a) Prove that contains a normal Sylow subgroup. (b) Suppose and the Sylow -subgroup is cyclic and normal. Prove that is abelian.  Let be a group of order where and are distinct primes. Suppose by way of contradiction that has no normal Sylow -subgroup.  First, suppose . By Sylow’s Theorem we know the following: - and , so or , so - and , so or , so . We know there must be elements of order . Luckily, there is more than one Sylow -subgroup with elements, so there isn’t room for all of them.  Suppose then that . By Sylow’s Theorem we know the following: - and , so , so we’re definitely good there.  Suppose and the Sylow -subgroup, , is cyclic and normal. We know from Part (a) that there are either or Sylow -subgroups, but since there are already elements of order there is only room for one, , which is also cyclic, given its prime power. As and are thus normal in and only intersect trivially, we see that , meaning that . Thus is the product of two cyclic groups of relatively prime order, making cyclic as well. Cyclic groups are abelian, so we are done.   Suppose is a finite group which has precisely one subgroup of order for each divisor of . Prove that is cyclic.  First, suppose that is a -group. Let have biggest order. Let . So . Since , it also has exactly one subgroup for each divisor. But (h) has the same order as one of those subgroups, so they must be the same group. So . Since was arbitrary, then . So when is a -group then it is cyclic.  If its not a -group then we can decompose into relatively prime powers of primes, all of which are -groups and maintain this property. Thus is the product of relatively prime cyclic groups, making it cyclic itself.    "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "sec-ftfgag.html#exercise-54",
  "type": "Exercise",
  "number": "7.1.1",
  "title": "",
  "body": "Prove that any group of order is abelian.  Let be a group of order . By Sylow's Theorem we see the following: - and , and so . - and , and so as well. - and , so actually too. Thus the unique Sylow -subgroup and Sylow -subgroup, denoted and , respectively, are normal in .  As and are normal in and intersect trivially, we see that . Let and consider . Let and notice . As and we see and , thus , making .  Let be the unique Sylow -subgroup, which has order . As and intersects with trivially, we see , a direct product of cyclic groups of relatively prime order, making abelian.  "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "sec-ftfgag.html#exercise-55",
  "type": "Exercise",
  "number": "7.1.2",
  "title": "",
  "body": "Suppose is a group of order and that contains an element of order . Prove is abelian.  By Sylow's Theorem we know the number of Sylow -subgroups of must divide and be congruent to , the only option of which is . Let denote the unique Sylow -subgroup and let be the cyclic subgroup generated by the element of order .  As is unique it is normal in , and it also means we have . Notice that as and are groups of relatively prime order we have . Thus , and so , making , a direct product of abelian groups. Thus is abelian.  "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "sec-ftfgag.html#exercise-56",
  "type": "Exercise",
  "number": "7.1.3",
  "title": "",
  "body": "Let be a group of order where and are distinct primes. (a) Prove that contains a normal Sylow subgroup. (b) Suppose and the Sylow -subgroup is cyclic and normal. Prove that is abelian.  Let be a group of order where and are distinct primes. Suppose by way of contradiction that has no normal Sylow -subgroup.  First, suppose . By Sylow’s Theorem we know the following: - and , so or , so - and , so or , so . We know there must be elements of order . Luckily, there is more than one Sylow -subgroup with elements, so there isn’t room for all of them.  Suppose then that . By Sylow’s Theorem we know the following: - and , so , so we’re definitely good there.  Suppose and the Sylow -subgroup, , is cyclic and normal. We know from Part (a) that there are either or Sylow -subgroups, but since there are already elements of order there is only room for one, , which is also cyclic, given its prime power. As and are thus normal in and only intersect trivially, we see that , meaning that . Thus is the product of two cyclic groups of relatively prime order, making cyclic as well. Cyclic groups are abelian, so we are done.  "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "sec-ftfgag.html#exercise-57",
  "type": "Exercise",
  "number": "7.1.4",
  "title": "",
  "body": "Suppose is a finite group which has precisely one subgroup of order for each divisor of . Prove that is cyclic.  First, suppose that is a -group. Let have biggest order. Let . So . Since , it also has exactly one subgroup for each divisor. But (h) has the same order as one of those subgroups, so they must be the same group. So . Since was arbitrary, then . So when is a -group then it is cyclic.  If its not a -group then we can decompose into relatively prime powers of primes, all of which are -groups and maintain this property. Thus is the product of relatively prime cyclic groups, making it cyclic itself.  "
},
{
  "id": "sec-classifications",
  "level": "1",
  "url": "sec-classifications.html",
  "type": "Section",
  "number": "7.2",
  "title": "Groups Up to Isomorphism",
  "body": " Groups Up to Isomorphism   Determine all of the groups of order , up to isomorphism.   By Sylow's Theorem we know the following: - and , so . - and , so as well. Thus there is exactly one Sylow -subgroup, , and exactly one Sylow -subgroup, . Both are normal in . Notice that has order , a prime squared. Thus is abelian. By the FTFGAG, is either isomorphic to or . Thus or .     Let be any positive prime integer. Prove that the number of groups of order , up to isomorphism, is exactly    Let be any positive prime integer.  First, suppose . Thus is a group of order , making it abelian. So the only groups of order are and . The same applies when , where the groups are and .  Let be a Sylow -subgroup of , and note that , the smallest prime dividing the order of , making . Let denote a Sylow -subgroup of . As and are groups of relatively prime order we have and thus , where . Notice that since , we have . Thus, by the First Isomorphism Theorem As has three elements, the kernel of must be either all of or trivial. However, the order of the image must divide , which is only possible when . Thus when this is the case there are two groups of order , otherwise the kernel is always trivial and we have as the only group.     Let be a group of order and suppose contains an element of order . Prove that is abelian.   First, note that , not . You hate to see it. Anyway, let be an element of order and consider , a cyclic subgroup of order . The possible number of Sylow -subgroups of is exactly , making this subgroup and thus normal in . Let be a Sylow subgroup, it intersects trivially and thus , where . The order of is , which is relatively prime to , making trivial and and thus abelian.     Let be a group. A subgroup of is called maximal if (that is, is a proper subgroup of ) and whenever is another subgroup of containing , either or . Show that every nontrivial finitely generated group possesses maximal subgroups.   Let be a group.  Let be the poset of all proper subgroups of ordered in terms of inclusion. Consider a string of these. Consider the union of them all. Luckily, unions of subgroups are subgroups if and only if there is containment, which there is, since everything is in the union. Thus its a subgroup. Since union in and yields an upper bound, by Zorn’s Lemma we a maximal element. Thus possesses maximal subgroups.    "
},
{
  "id": "problem-52",
  "level": "2",
  "url": "sec-classifications.html#problem-52",
  "type": "Problem",
  "number": "7.1",
  "title": "",
  "body": " Determine all of the groups of order , up to isomorphism.   By Sylow's Theorem we know the following: - and , so . - and , so as well. Thus there is exactly one Sylow -subgroup, , and exactly one Sylow -subgroup, . Both are normal in . Notice that has order , a prime squared. Thus is abelian. By the FTFGAG, is either isomorphic to or . Thus or .   "
},
{
  "id": "problem-53",
  "level": "2",
  "url": "sec-classifications.html#problem-53",
  "type": "Problem",
  "number": "7.2",
  "title": "",
  "body": " Let be any positive prime integer. Prove that the number of groups of order , up to isomorphism, is exactly    Let be any positive prime integer.  First, suppose . Thus is a group of order , making it abelian. So the only groups of order are and . The same applies when , where the groups are and .  Let be a Sylow -subgroup of , and note that , the smallest prime dividing the order of , making . Let denote a Sylow -subgroup of . As and are groups of relatively prime order we have and thus , where . Notice that since , we have . Thus, by the First Isomorphism Theorem As has three elements, the kernel of must be either all of or trivial. However, the order of the image must divide , which is only possible when . Thus when this is the case there are two groups of order , otherwise the kernel is always trivial and we have as the only group.   "
},
{
  "id": "problem-54",
  "level": "2",
  "url": "sec-classifications.html#problem-54",
  "type": "Problem",
  "number": "7.3",
  "title": "",
  "body": " Let be a group of order and suppose contains an element of order . Prove that is abelian.   First, note that , not . You hate to see it. Anyway, let be an element of order and consider , a cyclic subgroup of order . The possible number of Sylow -subgroups of is exactly , making this subgroup and thus normal in . Let be a Sylow subgroup, it intersects trivially and thus , where . The order of is , which is relatively prime to , making trivial and and thus abelian.   "
},
{
  "id": "problem-55",
  "level": "2",
  "url": "sec-classifications.html#problem-55",
  "type": "Problem",
  "number": "7.4",
  "title": "",
  "body": " Let be a group. A subgroup of is called maximal if (that is, is a proper subgroup of ) and whenever is another subgroup of containing , either or . Show that every nontrivial finitely generated group possesses maximal subgroups.   Let be a group.  Let be the poset of all proper subgroups of ordered in terms of inclusion. Consider a string of these. Consider the union of them all. Luckily, unions of subgroups are subgroups if and only if there is containment, which there is, since everything is in the union. Thus its a subgroup. Since union in and yields an upper bound, by Zorn’s Lemma we a maximal element. Thus possesses maximal subgroups.   "
},
{
  "id": "sec-quals",
  "level": "1",
  "url": "sec-quals.html",
  "type": "Section",
  "number": "8.1",
  "title": "Qualifying Exams",
  "body": " Qualifying Exams   Winter 2023   Group Theory   Problem 1    Problem 2    Problem 3     Rings, Modules, Linear Algebra   Problem 4    Problem 5    Problem 6     Fields and Galois Theory   Problem 7    Problem 8    Problem 9      Summer 2023   Group Theory   Problem 1    Problem 2    Problem 3     Rings, Modules, Linear Algebra   Problem 4    Problem 5    Problem 6     Fields and Galois Theory   Problem 7    Problem 8    Problem 9      Winter 2022   Group Theory   Problem 1    Problem 2    Problem 3     Rings, Modules, Linear Algebra   Problem 4    Problem 5    Problem 6     Fields and Galois Theory   Problem 7    Problem 8    Problem 9      Summer 2022   Group Theory   Problem 1    Problem 2    Problem 3     Rings, Modules, Linear Algebra   Problem 4    Problem 5    Problem 6     Fields and Galois Theory   Problem 7    Problem 8    Problem 9     "
},
{
  "id": "problem-56",
  "level": "2",
  "url": "sec-quals.html#problem-56",
  "type": "Problem",
  "number": "8.1",
  "title": "Problem 1.",
  "body": " Problem 1  "
},
{
  "id": "problem-57",
  "level": "2",
  "url": "sec-quals.html#problem-57",
  "type": "Problem",
  "number": "8.2",
  "title": "Problem 2.",
  "body": " Problem 2  "
},
{
  "id": "problem-58",
  "level": "2",
  "url": "sec-quals.html#problem-58",
  "type": "Problem",
  "number": "8.3",
  "title": "Problem 3.",
  "body": " Problem 3  "
},
{
  "id": "problem-59",
  "level": "2",
  "url": "sec-quals.html#problem-59",
  "type": "Problem",
  "number": "8.4",
  "title": "Problem 4.",
  "body": " Problem 4  "
},
{
  "id": "problem-60",
  "level": "2",
  "url": "sec-quals.html#problem-60",
  "type": "Problem",
  "number": "8.5",
  "title": "Problem 5.",
  "body": " Problem 5  "
},
{
  "id": "problem-61",
  "level": "2",
  "url": "sec-quals.html#problem-61",
  "type": "Problem",
  "number": "8.6",
  "title": "Problem 6.",
  "body": " Problem 6  "
},
{
  "id": "problem-62",
  "level": "2",
  "url": "sec-quals.html#problem-62",
  "type": "Problem",
  "number": "8.7",
  "title": "Problem 7.",
  "body": " Problem 7  "
},
{
  "id": "problem-63",
  "level": "2",
  "url": "sec-quals.html#problem-63",
  "type": "Problem",
  "number": "8.8",
  "title": "Problem 8.",
  "body": " Problem 8  "
},
{
  "id": "problem-64",
  "level": "2",
  "url": "sec-quals.html#problem-64",
  "type": "Problem",
  "number": "8.9",
  "title": "Problem 9.",
  "body": " Problem 9  "
},
{
  "id": "problem-65",
  "level": "2",
  "url": "sec-quals.html#problem-65",
  "type": "Problem",
  "number": "8.10",
  "title": "Problem 1.",
  "body": " Problem 1  "
},
{
  "id": "problem-66",
  "level": "2",
  "url": "sec-quals.html#problem-66",
  "type": "Problem",
  "number": "8.11",
  "title": "Problem 2.",
  "body": " Problem 2  "
},
{
  "id": "problem-67",
  "level": "2",
  "url": "sec-quals.html#problem-67",
  "type": "Problem",
  "number": "8.12",
  "title": "Problem 3.",
  "body": " Problem 3  "
},
{
  "id": "problem-68",
  "level": "2",
  "url": "sec-quals.html#problem-68",
  "type": "Problem",
  "number": "8.13",
  "title": "Problem 4.",
  "body": " Problem 4  "
},
{
  "id": "problem-69",
  "level": "2",
  "url": "sec-quals.html#problem-69",
  "type": "Problem",
  "number": "8.14",
  "title": "Problem 5.",
  "body": " Problem 5  "
},
{
  "id": "problem-70",
  "level": "2",
  "url": "sec-quals.html#problem-70",
  "type": "Problem",
  "number": "8.15",
  "title": "Problem 6.",
  "body": " Problem 6  "
},
{
  "id": "problem-71",
  "level": "2",
  "url": "sec-quals.html#problem-71",
  "type": "Problem",
  "number": "8.16",
  "title": "Problem 7.",
  "body": " Problem 7  "
},
{
  "id": "problem-72",
  "level": "2",
  "url": "sec-quals.html#problem-72",
  "type": "Problem",
  "number": "8.17",
  "title": "Problem 8.",
  "body": " Problem 8  "
},
{
  "id": "problem-73",
  "level": "2",
  "url": "sec-quals.html#problem-73",
  "type": "Problem",
  "number": "8.18",
  "title": "Problem 9.",
  "body": " Problem 9  "
},
{
  "id": "problem-74",
  "level": "2",
  "url": "sec-quals.html#problem-74",
  "type": "Problem",
  "number": "8.19",
  "title": "Problem 1.",
  "body": " Problem 1  "
},
{
  "id": "problem-75",
  "level": "2",
  "url": "sec-quals.html#problem-75",
  "type": "Problem",
  "number": "8.20",
  "title": "Problem 2.",
  "body": " Problem 2  "
},
{
  "id": "problem-76",
  "level": "2",
  "url": "sec-quals.html#problem-76",
  "type": "Problem",
  "number": "8.21",
  "title": "Problem 3.",
  "body": " Problem 3  "
},
{
  "id": "problem-77",
  "level": "2",
  "url": "sec-quals.html#problem-77",
  "type": "Problem",
  "number": "8.22",
  "title": "Problem 4.",
  "body": " Problem 4  "
},
{
  "id": "problem-78",
  "level": "2",
  "url": "sec-quals.html#problem-78",
  "type": "Problem",
  "number": "8.23",
  "title": "Problem 5.",
  "body": " Problem 5  "
},
{
  "id": "problem-79",
  "level": "2",
  "url": "sec-quals.html#problem-79",
  "type": "Problem",
  "number": "8.24",
  "title": "Problem 6.",
  "body": " Problem 6  "
},
{
  "id": "problem-80",
  "level": "2",
  "url": "sec-quals.html#problem-80",
  "type": "Problem",
  "number": "8.25",
  "title": "Problem 7.",
  "body": " Problem 7  "
},
{
  "id": "problem-81",
  "level": "2",
  "url": "sec-quals.html#problem-81",
  "type": "Problem",
  "number": "8.26",
  "title": "Problem 8.",
  "body": " Problem 8  "
},
{
  "id": "problem-82",
  "level": "2",
  "url": "sec-quals.html#problem-82",
  "type": "Problem",
  "number": "8.27",
  "title": "Problem 9.",
  "body": " Problem 9  "
},
{
  "id": "problem-83",
  "level": "2",
  "url": "sec-quals.html#problem-83",
  "type": "Problem",
  "number": "8.28",
  "title": "Problem 1.",
  "body": " Problem 1  "
},
{
  "id": "problem-84",
  "level": "2",
  "url": "sec-quals.html#problem-84",
  "type": "Problem",
  "number": "8.29",
  "title": "Problem 2.",
  "body": " Problem 2  "
},
{
  "id": "problem-85",
  "level": "2",
  "url": "sec-quals.html#problem-85",
  "type": "Problem",
  "number": "8.30",
  "title": "Problem 3.",
  "body": " Problem 3  "
},
{
  "id": "problem-86",
  "level": "2",
  "url": "sec-quals.html#problem-86",
  "type": "Problem",
  "number": "8.31",
  "title": "Problem 4.",
  "body": " Problem 4  "
},
{
  "id": "problem-87",
  "level": "2",
  "url": "sec-quals.html#problem-87",
  "type": "Problem",
  "number": "8.32",
  "title": "Problem 5.",
  "body": " Problem 5  "
},
{
  "id": "problem-88",
  "level": "2",
  "url": "sec-quals.html#problem-88",
  "type": "Problem",
  "number": "8.33",
  "title": "Problem 6.",
  "body": " Problem 6  "
},
{
  "id": "problem-89",
  "level": "2",
  "url": "sec-quals.html#problem-89",
  "type": "Problem",
  "number": "8.34",
  "title": "Problem 7.",
  "body": " Problem 7  "
},
{
  "id": "problem-90",
  "level": "2",
  "url": "sec-quals.html#problem-90",
  "type": "Problem",
  "number": "8.35",
  "title": "Problem 8.",
  "body": " Problem 8  "
},
{
  "id": "problem-91",
  "level": "2",
  "url": "sec-quals.html#problem-91",
  "type": "Problem",
  "number": "8.36",
  "title": "Problem 9.",
  "body": " Problem 9  "
},
{
  "id": "sec-solve",
  "level": "1",
  "url": "sec-solve.html",
  "type": "Section",
  "number": "8.2",
  "title": "Solvable Groups",
  "body": " Solvable Groups  "
},
{
  "id": "sec-smallorder",
  "level": "1",
  "url": "sec-smallorder.html",
  "type": "Section",
  "number": "8.3",
  "title": "Groups of Small Order",
  "body": " Groups of Small Order    Transformation happens in small groups.   Gloria Steinem   "
},
{
  "id": "sec-defn-ex",
  "level": "1",
  "url": "sec-defn-ex.html",
  "type": "Section",
  "number": "1.1",
  "title": "Intro to Rings",
  "body": " Intro to Rings   Definition and First Properties    A ring is a set equipped with two binary operations, and , satisfying:      is an abelian group with identity element denoted ,     is associative (making a semigroup)     and hold for all .      is a unital ring (or a ring with identity ) if, in addition to (1), (2), (3)     there is a multiplicative identity element written as such that for all .      is commutative if in addition to (1)-(3)      holds for all .      is a division ring if , (1)–(4) and (6) hold      is a group under (i.e. every has a multiplicative inverse)      is a field if and (1)–(6) hold (i.e. a field is a commutative division ring).     Commutativity of addition is a consequence of the other ring axioms in rings with .   Here are some basic consequences of the axioms.   Ring Arithmetic   For any ring and all we have:      ,     ,     .     If moreover is unital, then      is unique, and     .       Let be a ring with identity.   Let . Observe that by the distributive law. Subtracting from both sides we have . A similar argument shows that .    Let . Note that . Consider . Using the distributive law we see that . Thus and are both additive inverses of making them unique.               is called the trivial ring . Notice that in the trivial ring . Conversely, if in a ring, then , since in this case for all , we have and hence .     is a commutative ring.     is a commutative ring under addition and multiplication modulo . Note that is a field if any only if is prime.    The familiar sets of “numbers\" are fields.    ( Matrix ring ) If is any ring (not necessarily commutative), so is for any natural number , using the usual rules for addition and multiplication of square matrices.    ( The real Hamiltonian quaternion ring ) Let be formal symbols and set to be the four dimensional -vector space consisting of all expressions of the form with . Addition is vector space addition: Multiplication is uniquely determined by the axioms of a ring together with the rules and the fact that the real coefficients commute with each other and .  It's not obvious that the multiplication defined in this way satisfies associativity, but in fact it does (this amounts conditions very similar to the associativity of the group ).   is a division ring, since one can check that where   In the equation above is non-zero real number if is not the zero element. The quantity is called the norm of the quaternion .    ( Direct product of rings ) The cartesian product of two rings and has a natural ring structure with addition and multiplication defined componentwise:      If is a set and is a ring, let be the collection of set theoretic functions from to , and define and . Then is a ring. If is a finite set and , then may be identified with , the direct product of copies of .    ( Endomorphism ring ) If is any abelian group, set to be the collection of endomorphisms of — that is, the set of group homomorphisms from to itself.  Then is a ring with addition and multiplication . This is almost always a non-commutative ring.       Units, Zero Divisors, Integral Domains    An element of a unital ring with is called a unit there exists such that and . In case such exists, it is unique, it is called the inverse of and denoted by .      The set of units of a non-trivial unital ring is denoted . This forms a group with respect to multiplication.     The group of units is indeed a group with respect to multiplication.     .    Let be a field. Prove that every non-zero element of is a unit. In symbols, show .     A zero-divisor in a ring is an element such that or for some .      A unital ring is an integral domain (often shortened to domain ) if , is commutative, and has no zero divisors.      Let be a commutative ring with identity. Then is an integral domain if and only if for all such that , we have . This property is called cancellation         Every field is an integral domain.     is an integral domain if and only if is prime (in which case it happens to be a field too) or (in which case ).       Prove that a finite integral domain must be a field.   Let , and consider the set . As is finite there must exist such that . In integral domains cancellation is allowed, and thus we can cancel an from both sides, yielding , and thus , making a unit of . Thus is a field.      If is a zero divisor in a ring , then is not a unit.    Suppose that is both a zero divisor and a unit. Then there exists such that or . Multiplying either of these equations by gives , a contradiction.     Give an example of a ring and an element which is neither a unit nor a zero-divisor.    Prove that if is finite then every element is either a unit of a zero-divisor.     An element of a ring is called nilpotent if for some integer .      If is a nilpotent element in a unital ring , then is a unit.     Let be a nilpotent element] of a ring. Show that is a unit of Deduce that the sum of a nilpotent element and a unit is a unit.     Let be a ring with identity. An element is called idempotent if .     Let be a ring with identity.   Give an example of a ring which has an idempotent other than or .    Prove that if is idempotent, so is .    Suppose is commutative and an idempotent. Let . Prove that is a commutative ring (with identity ).       Let be the ring of Gaussian integers. Define a function    Prove that for any .    Use the function to determine the units of .         Let and behold So there's that done.    Suppose . Then by Part (a) we know so , with . Thus we have . So the units of are .        Let be the ring of integral Hamiltonian quaternions, where multiplication is defined using the same rules as in . Define a function    For any , denote . Show that for all .    Prove that and for any .    Prove that if and only if .    Show that there is a group isomorphism .       "
},
{
  "id": "def-ring",
  "level": "2",
  "url": "sec-defn-ex.html#def-ring",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": "  A ring is a set equipped with two binary operations, and , satisfying:      is an abelian group with identity element denoted ,     is associative (making a semigroup)     and hold for all .      is a unital ring (or a ring with identity ) if, in addition to (1), (2), (3)     there is a multiplicative identity element written as such that for all .      is commutative if in addition to (1)-(3)      holds for all .      is a division ring if , (1)–(4) and (6) hold      is a group under (i.e. every has a multiplicative inverse)      is a field if and (1)–(6) hold (i.e. a field is a commutative division ring).   "
},
{
  "id": "exe-commutativity-of-addition",
  "level": "2",
  "url": "sec-defn-ex.html#exe-commutativity-of-addition",
  "type": "Problem",
  "number": "1.2",
  "title": "",
  "body": " Commutativity of addition is a consequence of the other ring axioms in rings with .  "
},
{
  "id": "prop-ring-arithmetic",
  "level": "2",
  "url": "sec-defn-ex.html#prop-ring-arithmetic",
  "type": "Proposition",
  "number": "1.3",
  "title": "Ring Arithmetic.",
  "body": " Ring Arithmetic   For any ring and all we have:      ,     ,     .     If moreover is unital, then      is unique, and     .       Let be a ring with identity.   Let . Observe that by the distributive law. Subtracting from both sides we have . A similar argument shows that .    Let . Note that . Consider . Using the distributive law we see that . Thus and are both additive inverses of making them unique.          "
},
{
  "id": "ex-ring-examples",
  "level": "2",
  "url": "sec-defn-ex.html#ex-ring-examples",
  "type": "Example",
  "number": "1.4",
  "title": "",
  "body": "    is called the trivial ring . Notice that in the trivial ring . Conversely, if in a ring, then , since in this case for all , we have and hence .     is a commutative ring.     is a commutative ring under addition and multiplication modulo . Note that is a field if any only if is prime.    The familiar sets of “numbers\" are fields.    ( Matrix ring ) If is any ring (not necessarily commutative), so is for any natural number , using the usual rules for addition and multiplication of square matrices.    ( The real Hamiltonian quaternion ring ) Let be formal symbols and set to be the four dimensional -vector space consisting of all expressions of the form with . Addition is vector space addition: Multiplication is uniquely determined by the axioms of a ring together with the rules and the fact that the real coefficients commute with each other and .  It's not obvious that the multiplication defined in this way satisfies associativity, but in fact it does (this amounts conditions very similar to the associativity of the group ).   is a division ring, since one can check that where   In the equation above is non-zero real number if is not the zero element. The quantity is called the norm of the quaternion .    ( Direct product of rings ) The cartesian product of two rings and has a natural ring structure with addition and multiplication defined componentwise:      If is a set and is a ring, let be the collection of set theoretic functions from to , and define and . Then is a ring. If is a finite set and , then may be identified with , the direct product of copies of .    ( Endomorphism ring ) If is any abelian group, set to be the collection of endomorphisms of — that is, the set of group homomorphisms from to itself.  Then is a ring with addition and multiplication . This is almost always a non-commutative ring.    "
},
{
  "id": "def-unit",
  "level": "2",
  "url": "sec-defn-ex.html#def-unit",
  "type": "Definition",
  "number": "1.5",
  "title": "",
  "body": "  An element of a unital ring with is called a unit there exists such that and . In case such exists, it is unique, it is called the inverse of and denoted by .   "
},
{
  "id": "def-group-of-units",
  "level": "2",
  "url": "sec-defn-ex.html#def-group-of-units",
  "type": "Definition",
  "number": "1.6",
  "title": "",
  "body": "  The set of units of a non-trivial unital ring is denoted . This forms a group with respect to multiplication.   "
},
{
  "id": "exe-group-of-units-is-a-group",
  "level": "2",
  "url": "sec-defn-ex.html#exe-group-of-units-is-a-group",
  "type": "Problem",
  "number": "1.7",
  "title": "",
  "body": " The group of units is indeed a group with respect to multiplication.  "
},
{
  "id": "ex-matrices-and-units",
  "level": "2",
  "url": "sec-defn-ex.html#ex-matrices-and-units",
  "type": "Example",
  "number": "1.8",
  "title": "",
  "body": "  .  "
},
{
  "id": "exe-units-in-fields",
  "level": "2",
  "url": "sec-defn-ex.html#exe-units-in-fields",
  "type": "Problem",
  "number": "1.9",
  "title": "",
  "body": " Let be a field. Prove that every non-zero element of is a unit. In symbols, show .  "
},
{
  "id": "def-zero-divisor",
  "level": "2",
  "url": "sec-defn-ex.html#def-zero-divisor",
  "type": "Definition",
  "number": "1.10",
  "title": "",
  "body": "  A zero-divisor in a ring is an element such that or for some .   "
},
{
  "id": "def-integral-domain",
  "level": "2",
  "url": "sec-defn-ex.html#def-integral-domain",
  "type": "Definition",
  "number": "1.11",
  "title": "",
  "body": "  A unital ring is an integral domain (often shortened to domain ) if , is commutative, and has no zero divisors.   "
},
{
  "id": "lem-cancellation-in-integral-domains",
  "level": "2",
  "url": "sec-defn-ex.html#lem-cancellation-in-integral-domains",
  "type": "Lemma",
  "number": "1.12",
  "title": "",
  "body": "  Let be a commutative ring with identity. Then is an integral domain if and only if for all such that , we have . This property is called cancellation    "
},
{
  "id": "ex-integral-domains",
  "level": "2",
  "url": "sec-defn-ex.html#ex-integral-domains",
  "type": "Example",
  "number": "1.13",
  "title": "",
  "body": "    Every field is an integral domain.     is an integral domain if and only if is prime (in which case it happens to be a field too) or (in which case ).     "
},
{
  "id": "ex-finite-domains-fields",
  "level": "2",
  "url": "sec-defn-ex.html#ex-finite-domains-fields",
  "type": "Problem",
  "number": "1.14",
  "title": "",
  "body": " Prove that a finite integral domain must be a field.   Let , and consider the set . As is finite there must exist such that . In integral domains cancellation is allowed, and thus we can cancel an from both sides, yielding , and thus , making a unit of . Thus is a field.   "
},
{
  "id": "lem-zero-divisor-not-unit",
  "level": "2",
  "url": "sec-defn-ex.html#lem-zero-divisor-not-unit",
  "type": "Lemma",
  "number": "1.15",
  "title": "",
  "body": "  If is a zero divisor in a ring , then is not a unit.    Suppose that is both a zero divisor and a unit. Then there exists such that or . Multiplying either of these equations by gives , a contradiction.   "
},
{
  "id": "exe-neither-zero-divisor-nor-unit",
  "level": "2",
  "url": "sec-defn-ex.html#exe-neither-zero-divisor-nor-unit",
  "type": "Problem",
  "number": "1.16",
  "title": "",
  "body": " Give an example of a ring and an element which is neither a unit nor a zero-divisor.  "
},
{
  "id": "exe-zero-divisor-or-unit-if-finite",
  "level": "2",
  "url": "sec-defn-ex.html#exe-zero-divisor-or-unit-if-finite",
  "type": "Problem",
  "number": "1.17",
  "title": "",
  "body": " Prove that if is finite then every element is either a unit of a zero-divisor.  "
},
{
  "id": "def-nilpotent",
  "level": "2",
  "url": "sec-defn-ex.html#def-nilpotent",
  "type": "Definition",
  "number": "1.18",
  "title": "",
  "body": "  An element of a ring is called nilpotent if for some integer .   "
},
{
  "id": "lem-nilpotents-and-units",
  "level": "2",
  "url": "sec-defn-ex.html#lem-nilpotents-and-units",
  "type": "Lemma",
  "number": "1.19",
  "title": "",
  "body": "  If is a nilpotent element in a unital ring , then is a unit.   "
},
{
  "id": "exe-one-plus-nilpotent-is-unit",
  "level": "2",
  "url": "sec-defn-ex.html#exe-one-plus-nilpotent-is-unit",
  "type": "Problem",
  "number": "1.20",
  "title": "",
  "body": " Let be a nilpotent element] of a ring. Show that is a unit of Deduce that the sum of a nilpotent element and a unit is a unit.  "
},
{
  "id": "def-idempotent",
  "level": "2",
  "url": "sec-defn-ex.html#def-idempotent",
  "type": "Definition",
  "number": "1.21",
  "title": "",
  "body": "  Let be a ring with identity. An element is called idempotent if .   "
},
{
  "id": "problem-99",
  "level": "2",
  "url": "sec-defn-ex.html#problem-99",
  "type": "Problem",
  "number": "1.22",
  "title": "",
  "body": " Let be a ring with identity.   Give an example of a ring which has an idempotent other than or .    Prove that if is idempotent, so is .    Suppose is commutative and an idempotent. Let . Prove that is a commutative ring (with identity ).     "
},
{
  "id": "exe-gaussian-units",
  "level": "2",
  "url": "sec-defn-ex.html#exe-gaussian-units",
  "type": "Problem",
  "number": "1.23",
  "title": "",
  "body": " Let be the ring of Gaussian integers. Define a function    Prove that for any .    Use the function to determine the units of .         Let and behold So there's that done.    Suppose . Then by Part (a) we know so , with . Thus we have . So the units of are .      "
},
{
  "id": "exe-integral-hamiltonian-quaternions",
  "level": "2",
  "url": "sec-defn-ex.html#exe-integral-hamiltonian-quaternions",
  "type": "Problem",
  "number": "1.24",
  "title": "",
  "body": " Let be the ring of integral Hamiltonian quaternions, where multiplication is defined using the same rules as in . Define a function    For any , denote . Show that for all .    Prove that and for any .    Prove that if and only if .    Show that there is a group isomorphism .     "
},
{
  "id": "sec-subrings",
  "level": "1",
  "url": "sec-subrings.html",
  "type": "Section",
  "number": "1.2",
  "title": "Subrings",
  "body": " Subrings    A subring of a ring is a subset such that is a ring under the operations of . When is a field we call a of .      A nonempty subset of a ring is a subring iff either one of the following hold:    is a subgroup of closed under multiplication.     is closed under subtraction and multiplication.          is a subring of , which is a subring of , which is a subring of .   is a subring without of the ring with .  The set of continuous functions mapping is a subring of , denoted .  The set is a subring of called the ring of Gaussian integers.      The center of a ring is the set       The center is a subring of . If is a ring with identity then is a subring that contains the same .     Determine the center of the real quaternion ring .     Let be a squarefree integer (that is, the prime factorization of has no repeated primes). Then the subset of is a subring that is a field (called a quadratic field ), and is a subring of .    Both and are closed under subtraction and multiplication, so they are subrings of .  The fact that is a {} follows since is also closed under taking inverses. Indeed the inverse of (from ) turns out to be whenever . A slightly subtle point here is that the fraction above makes sense since provided and are not simultaneously . This is because, if then either , which contradicts the assumption that is squarefree, or , which contradicts the assumption .     If is a ring and is a subring of , it can happen that    is unital but is not (e.g. )     is unital but is not    both and are unital but    Find examples for each of these situations!    Any subring of a commutative ring is a commutative ring. Any unital subring of an integral domain is an integral domain.   "
},
{
  "id": "def-subring",
  "level": "2",
  "url": "sec-subrings.html#def-subring",
  "type": "Definition",
  "number": "1.25",
  "title": "",
  "body": "  A subring of a ring is a subset such that is a ring under the operations of . When is a field we call a of .   "
},
{
  "id": "lem-subring-test",
  "level": "2",
  "url": "sec-subrings.html#lem-subring-test",
  "type": "Lemma",
  "number": "1.26",
  "title": "",
  "body": "  A nonempty subset of a ring is a subring iff either one of the following hold:    is a subgroup of closed under multiplication.     is closed under subtraction and multiplication.      "
},
{
  "id": "ex-subring-examples",
  "level": "2",
  "url": "sec-subrings.html#ex-subring-examples",
  "type": "Example",
  "number": "1.27",
  "title": "",
  "body": "   is a subring of , which is a subring of , which is a subring of .   is a subring without of the ring with .  The set of continuous functions mapping is a subring of , denoted .  The set is a subring of called the ring of Gaussian integers.   "
},
{
  "id": "def-center-ring",
  "level": "2",
  "url": "sec-subrings.html#def-center-ring",
  "type": "Definition",
  "number": "1.28",
  "title": "",
  "body": "  The center of a ring is the set    "
},
{
  "id": "lem-center-is-subring",
  "level": "2",
  "url": "sec-subrings.html#lem-center-is-subring",
  "type": "Lemma",
  "number": "1.29",
  "title": "",
  "body": "  The center is a subring of . If is a ring with identity then is a subring that contains the same .   "
},
{
  "id": "exe-center-of-quaternion-ring",
  "level": "2",
  "url": "sec-subrings.html#exe-center-of-quaternion-ring",
  "type": "Problem",
  "number": "1.30",
  "title": "",
  "body": " Determine the center of the real quaternion ring .  "
},
{
  "id": "lem-quadratic-field",
  "level": "2",
  "url": "sec-subrings.html#lem-quadratic-field",
  "type": "Lemma",
  "number": "1.31",
  "title": "",
  "body": "  Let be a squarefree integer (that is, the prime factorization of has no repeated primes). Then the subset of is a subring that is a field (called a quadratic field ), and is a subring of .    Both and are closed under subtraction and multiplication, so they are subrings of .  The fact that is a {} follows since is also closed under taking inverses. Indeed the inverse of (from ) turns out to be whenever . A slightly subtle point here is that the fraction above makes sense since provided and are not simultaneously . This is because, if then either , which contradicts the assumption that is squarefree, or , which contradicts the assumption .   "
},
{
  "id": "exe-finding-subring-counterexamples",
  "level": "2",
  "url": "sec-subrings.html#exe-finding-subring-counterexamples",
  "type": "Problem",
  "number": "1.32",
  "title": "",
  "body": " If is a ring and is a subring of , it can happen that    is unital but is not (e.g. )     is unital but is not    both and are unital but    Find examples for each of these situations!  "
},
{
  "id": "exe-subring-preservations",
  "level": "2",
  "url": "sec-subrings.html#exe-subring-preservations",
  "type": "Problem",
  "number": "1.33",
  "title": "",
  "body": " Any subring of a commutative ring is a commutative ring. Any unital subring of an integral domain is an integral domain.  "
},
{
  "id": "sec-ring-hom",
  "level": "1",
  "url": "sec-ring-hom.html",
  "type": "Section",
  "number": "1.3",
  "title": "Homomorphisms",
  "body": " Homomorphisms    If and are rings, a ring homomorphism from to is a function that satisfies:    for all ,     for all .         A ring homomorphism that is bijective is called a ring isomorphism . Two rings and are isomorphic , written , if there is an isomorphism from to .      The following are ring isomorphism invariants:   all group isomorphism invariants of the additive group, including the isomorphism class (i.e., if then ).    being unital, being commutative, division ring, field, integral domain    the number of zero divisors.    if is unital, all group isomorphism invariants of the group of units, including the isomorphism class (i.e., if then ).    the isomorphism type of the center (i.e., if then ).          The identity map is a ring isomorphism.  Let be a subring of a ring . The inclusion mapping of into is a ring homomorphism.  Projection maps are ring homomorphisms.       If is a ring homomorphism, then    and .    if , are unital then can be either or a zero divisor.    If and then .    If and are ring homomorphisms (or isomorphisms, respectively), then is a ring homomorphism (or isomorphism).         Since we have , thus Now either or (which yields ) or both of these are nonzero and then they are complementary zero divisors (in particular, is a zero divisor).       Let be a nontrivial ring. Then is a field if and only if every homomorphism of into a nonzero ring is injective.    Suppose is commutative and an idempotent. Let . Prove that the map given by is a ring isomorphism.    Let be squarefree integers and set and .   There is a group isomorphism .    There is a ring isomorphism if and only if .      "
},
{
  "id": "def-ring-homomorphism",
  "level": "2",
  "url": "sec-ring-hom.html#def-ring-homomorphism",
  "type": "Definition",
  "number": "1.34",
  "title": "",
  "body": "  If and are rings, a ring homomorphism from to is a function that satisfies:    for all ,     for all .      "
},
{
  "id": "def-ring-isomorphism",
  "level": "2",
  "url": "sec-ring-hom.html#def-ring-isomorphism",
  "type": "Definition",
  "number": "1.35",
  "title": "",
  "body": "  A ring homomorphism that is bijective is called a ring isomorphism . Two rings and are isomorphic , written , if there is an isomorphism from to .   "
},
{
  "id": "prop-ring-isomorphism-invariants",
  "level": "2",
  "url": "sec-ring-hom.html#prop-ring-isomorphism-invariants",
  "type": "Proposition",
  "number": "1.36",
  "title": "",
  "body": "  The following are ring isomorphism invariants:   all group isomorphism invariants of the additive group, including the isomorphism class (i.e., if then ).    being unital, being commutative, division ring, field, integral domain    the number of zero divisors.    if is unital, all group isomorphism invariants of the group of units, including the isomorphism class (i.e., if then ).    the isomorphism type of the center (i.e., if then ).      "
},
{
  "id": "exe-ring-homomorphisms-examples",
  "level": "2",
  "url": "sec-ring-hom.html#exe-ring-homomorphisms-examples",
  "type": "Example",
  "number": "1.37",
  "title": "",
  "body": "   The identity map is a ring isomorphism.  Let be a subring of a ring . The inclusion mapping of into is a ring homomorphism.  Projection maps are ring homomorphisms.    "
},
{
  "id": "lem-ring-homomorphism-properties",
  "level": "2",
  "url": "sec-ring-hom.html#lem-ring-homomorphism-properties",
  "type": "Lemma",
  "number": "1.38",
  "title": "",
  "body": "  If is a ring homomorphism, then    and .    if , are unital then can be either or a zero divisor.    If and then .    If and are ring homomorphisms (or isomorphisms, respectively), then is a ring homomorphism (or isomorphism).         Since we have , thus Now either or (which yields ) or both of these are nonzero and then they are complementary zero divisors (in particular, is a zero divisor).     "
},
{
  "id": "exe-equivalent-field-definitions",
  "level": "2",
  "url": "sec-ring-hom.html#exe-equivalent-field-definitions",
  "type": "Problem",
  "number": "1.39",
  "title": "",
  "body": " Let be a nontrivial ring. Then is a field if and only if every homomorphism of into a nonzero ring is injective.  "
},
{
  "id": "problem-106",
  "level": "2",
  "url": "sec-ring-hom.html#problem-106",
  "type": "Problem",
  "number": "1.40",
  "title": "",
  "body": " Suppose is commutative and an idempotent. Let . Prove that the map given by is a ring isomorphism.  "
},
{
  "id": "problem-107",
  "level": "2",
  "url": "sec-ring-hom.html#problem-107",
  "type": "Problem",
  "number": "1.41",
  "title": "",
  "body": " Let be squarefree integers and set and .   There is a group isomorphism .    There is a ring isomorphism if and only if .     "
},
{
  "id": "sec-ideals",
  "level": "1",
  "url": "sec-ideals.html",
  "type": "Section",
  "number": "2.1",
  "title": "Ideals",
  "body": " Ideals   Definition and First Properties    For a ring , an ideal (or a two sided ideal ) of is a non empty subset such that    is a subgroup of and    for all and , we have and (we can write this concisely as for all  and ). This is often called absorption .   For a ring , a proper ideal is an ideal such that .       In any ring , and itself are ideals.  The ideals of are .  The sets and are a right ideal and a left ideal of respectively. Neither are two-sided ideals.  The set of all nilpotent elements in a ring is an ideal, and has no nonzero nilpotent elements.   Let be a commutative ring, and set . Then is an ideal in .        An ideal of a unital ring is proper if and only if contains no units. Moreover, if is a field it has only two ideals and .      Any ideal of a ring is a subring of      Any ideal of a ring is a subring of , but not any subring is an ideal.   For example, in , the set of polynomials for which every term has even degree is a subring (it’s closed under subtraction and multiplication), but it is not an ideal because it is not closed under multiplication by arbitrary polynomials. Indeed, , but .      Let be a ring and let be ideals of . Then    is an ideal     is an ideal     is an ideal and .    The intersection of any collection of ideals of is an ideal.   The set of all ideals of a ring is a lattice with respect to the partial order given by containment. In this lattice, the supremum of a pair of ideals is and the infimum is .     Let be ideals in . Then                                     If is a ring homomorphism, then   the image of is a subring of and    the kernel of is an ideal of .     is injective if and only if .    if is an ideal of then is an ideal of .    if is an ideal of then is an ideal of .         Since is a ring homomorphism, it is in particular a group homomorphism . We know the kernel of a group homomorphism is a subgroup, so . All that remains to be shown is that for any  and . Let ; then and , show .       Give an example    Let be ideals in . Then     Give an example of a ring where ideals do not distribute.    Let be ideals in such that or . Then      Generated Ideals    If is any subset of a ring , the ideal generated by  , denoted , is the intersection of all ideals of that contain : An ideal is finitely generated if for some finite subset of .     By Proposition, is an ideal and it is the smallest ideal of that contains .     For a subset of a ring with , the ideal generated by is given by If is commutative and is any subset, then there is a simpler formula         In the commutative ring , we have . Indeed any element can be written as . Note that .    In the commutative ring , we have , the set of all even integers. Notice this shows that different sets can generate the same ideal. Also note that .    In , we have and this ideal cannot be generated by a single element.       Let be a finitely generated ideal of . Suppose every element of is nilpotent. Prove that there exists an integer such that for all .    Let    Prove that is an ideal of .    Prove that is not finitely generated.        Let be an ideal of a ring . The ideal is principal if for some , that is, is generated by a set with a single element.       every ideal of is principal with for some ( is a PID)  for any field , every ideal of is principal ( is a PID)  for any field , every ideal in is finitely generated, but not necessarily principal. This is a consequence of a deep theorem called the Hilbert Basis Theorem, which you will see in Math 905.     Let be ideals in . Then          Conclude that if and only if and are relatively prime.      "
},
{
  "id": "def-ideal",
  "level": "2",
  "url": "sec-ideals.html#def-ideal",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": "  For a ring , an ideal (or a two sided ideal ) of is a non empty subset such that    is a subgroup of and    for all and , we have and (we can write this concisely as for all  and ). This is often called absorption .   For a ring , a proper ideal is an ideal such that .   "
},
{
  "id": "ex-ideal-examples",
  "level": "2",
  "url": "sec-ideals.html#ex-ideal-examples",
  "type": "Example",
  "number": "2.2",
  "title": "",
  "body": "   In any ring , and itself are ideals.  The ideals of are .  The sets and are a right ideal and a left ideal of respectively. Neither are two-sided ideals.  The set of all nilpotent elements in a ring is an ideal, and has no nonzero nilpotent elements.   Let be a commutative ring, and set . Then is an ideal in .     "
},
{
  "id": "prop-proper-ideals",
  "level": "2",
  "url": "sec-ideals.html#prop-proper-ideals",
  "type": "Proposition",
  "number": "2.3",
  "title": "",
  "body": "  An ideal of a unital ring is proper if and only if contains no units. Moreover, if is a field it has only two ideals and .   "
},
{
  "id": "prop-ideals-are-subrings",
  "level": "2",
  "url": "sec-ideals.html#prop-ideals-are-subrings",
  "type": "Proposition",
  "number": "2.4",
  "title": "",
  "body": "  Any ideal of a ring is a subring of    "
},
{
  "id": "problem-108",
  "level": "2",
  "url": "sec-ideals.html#problem-108",
  "type": "Problem",
  "number": "2.5",
  "title": "",
  "body": " Any ideal of a ring is a subring of , but not any subring is an ideal.   For example, in , the set of polynomials for which every term has even degree is a subring (it’s closed under subtraction and multiplication), but it is not an ideal because it is not closed under multiplication by arbitrary polynomials. Indeed, , but .   "
},
{
  "id": "prop-properties-of-ideals",
  "level": "2",
  "url": "sec-ideals.html#prop-properties-of-ideals",
  "type": "Proposition",
  "number": "2.6",
  "title": "",
  "body": "  Let be a ring and let be ideals of . Then    is an ideal     is an ideal     is an ideal and .    The intersection of any collection of ideals of is an ideal.   The set of all ideals of a ring is a lattice with respect to the partial order given by containment. In this lattice, the supremum of a pair of ideals is and the infimum is .   "
},
{
  "id": "exe-ideals-are-commutative-and-associative",
  "level": "2",
  "url": "sec-ideals.html#exe-ideals-are-commutative-and-associative",
  "type": "Problem",
  "number": "2.7",
  "title": "",
  "body": " Let be ideals in . Then                                  "
},
{
  "id": "prop-homomorphisms-and-ideals",
  "level": "2",
  "url": "sec-ideals.html#prop-homomorphisms-and-ideals",
  "type": "Proposition",
  "number": "2.8",
  "title": "",
  "body": "  If is a ring homomorphism, then   the image of is a subring of and    the kernel of is an ideal of .     is injective if and only if .    if is an ideal of then is an ideal of .    if is an ideal of then is an ideal of .         Since is a ring homomorphism, it is in particular a group homomorphism . We know the kernel of a group homomorphism is a subgroup, so . All that remains to be shown is that for any  and . Let ; then and , show .     "
},
{
  "id": "exe-the-union-of-ideals-need-not-be-an-ideal",
  "level": "2",
  "url": "sec-ideals.html#exe-the-union-of-ideals-need-not-be-an-ideal",
  "type": "Problem",
  "number": "2.9",
  "title": "",
  "body": " Give an example  "
},
{
  "id": "exe-ideals-distribute-in-z",
  "level": "2",
  "url": "sec-ideals.html#exe-ideals-distribute-in-z",
  "type": "Problem",
  "number": "2.10",
  "title": "",
  "body": " Let be ideals in . Then   "
},
{
  "id": "exe-ideals-do-not-distribute-in-general",
  "level": "2",
  "url": "sec-ideals.html#exe-ideals-do-not-distribute-in-general",
  "type": "Problem",
  "number": "2.11",
  "title": "",
  "body": " Give an example of a ring where ideals do not distribute.  "
},
{
  "id": "exe-modular-law",
  "level": "2",
  "url": "sec-ideals.html#exe-modular-law",
  "type": "Problem",
  "number": "2.12",
  "title": "",
  "body": " Let be ideals in such that or . Then   "
},
{
  "id": "def-generated-ideal",
  "level": "2",
  "url": "sec-ideals.html#def-generated-ideal",
  "type": "Definition",
  "number": "2.13",
  "title": "",
  "body": "  If is any subset of a ring , the ideal generated by  , denoted , is the intersection of all ideals of that contain : An ideal is finitely generated if for some finite subset of .   "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "sec-ideals.html#remark-19",
  "type": "Remark",
  "number": "2.14",
  "title": "",
  "body": " By Proposition, is an ideal and it is the smallest ideal of that contains .  "
},
{
  "id": "lem-formula-for-generated-ideal",
  "level": "2",
  "url": "sec-ideals.html#lem-formula-for-generated-ideal",
  "type": "Lemma",
  "number": "2.15",
  "title": "",
  "body": "  For a subset of a ring with , the ideal generated by is given by If is commutative and is any subset, then there is a simpler formula    "
},
{
  "id": "exe-generated-ideals-and-z",
  "level": "2",
  "url": "sec-ideals.html#exe-generated-ideals-and-z",
  "type": "Problem",
  "number": "2.16",
  "title": "",
  "body": "    In the commutative ring , we have . Indeed any element can be written as . Note that .    In the commutative ring , we have , the set of all even integers. Notice this shows that different sets can generate the same ideal. Also note that .    In , we have and this ideal cannot be generated by a single element.     "
},
{
  "id": "exe-finite-generated-ideal-and-nilpotent",
  "level": "2",
  "url": "sec-ideals.html#exe-finite-generated-ideal-and-nilpotent",
  "type": "Problem",
  "number": "2.17",
  "title": "",
  "body": " Let be a finitely generated ideal of . Suppose every element of is nilpotent. Prove that there exists an integer such that for all .  "
},
{
  "id": "problem-116",
  "level": "2",
  "url": "sec-ideals.html#problem-116",
  "type": "Problem",
  "number": "2.18",
  "title": "",
  "body": " Let    Prove that is an ideal of .    Prove that is not finitely generated.     "
},
{
  "id": "def-principal-ideal",
  "level": "2",
  "url": "sec-ideals.html#def-principal-ideal",
  "type": "Definition",
  "number": "2.19",
  "title": "",
  "body": "  Let be an ideal of a ring . The ideal is principal if for some , that is, is generated by a set with a single element.   "
},
{
  "id": "ex-principal-ideals",
  "level": "2",
  "url": "sec-ideals.html#ex-principal-ideals",
  "type": "Example",
  "number": "2.20",
  "title": "",
  "body": "   every ideal of is principal with for some ( is a PID)  for any field , every ideal of is principal ( is a PID)  for any field , every ideal in is finitely generated, but not necessarily principal. This is a consequence of a deep theorem called the Hilbert Basis Theorem, which you will see in Math 905.    "
},
{
  "id": "exe-properties-of-principal-ideals-in-z",
  "level": "2",
  "url": "sec-ideals.html#exe-properties-of-principal-ideals-in-z",
  "type": "Problem",
  "number": "2.21",
  "title": "",
  "body": "Let be ideals in . Then          Conclude that if and only if and are relatively prime.    "
},
{
  "id": "sec-ring-quotients",
  "level": "1",
  "url": "sec-ring-quotients.html",
  "type": "Section",
  "number": "2.2",
  "title": "Quotient Rings",
  "body": " Quotient Rings   Quotient Rings    For a two-sided ideal of , the set of additive cosets modulo is This is an abelian group with respect to addition given by . The quotient ring of modulo is the set with addition defined as above and multiplication given by      Given a two-sided ideal of , prove that the quotient ring is indeed a ring.    If is an ideal in the ring , then the quotient ring is the familiar ring .    Prove that the canonical quotient map is a surjective ring homomorphism.     Let be a ring. A subset of is an ideal of if and only if there exists a ring homomorphism such that      Universal Mapping Property for Quotient Rings   If is a ring homomorphism and is an ideal such that [^1], there exists a well defined ring homomorphism such that . Furthermore, if is surjective then is surjective and if then is injective.    Ignoring for a minute, we know that there is a unique homomorphism of abelian groups from to such that . It remains only to check that preserves multiplication: Given elements , their product is , and we have since preserves multiplication.      The Ring Isomorphism Theorems   First Isomorphism Theorem for Rings   If is a ring homomorphism, then via the map given by .    The map is a well-defined ring homomorphism by the UMP for quotient rings. By the First Isomorphism Theorem for groups, the map is bijective, finishing the proof.     Second Isomorphism Theorem for Rings   Let be a subring and let be an ideal of . Then is a subring of , is an ideal of , and      Third Isomorphism Theorem for Rings   If is a ring and are two ideals of , then [^4] is an ideal of and      Lattive Isomorphism Theorem for Quotient Rings   Suppose is a ring and is a two-sided ideal of and write for the quotient ring homomorphism. There is a bijection with inverse Moreover this bijection induces a bijection between since is an ideal of containing if and only if is an ideal of .     Let be a commutative ring with identity, and assume . Let and be ideals such that .    Prove .  Prove the following special case of the Sun Tzu's Theorem: There is an isomorphism of rings of the form .     Let be a commutative ring with identity, and assume . Let and be ideals such that .  First, note that both and are ideals by   Let . Thus , where each and . As and are both ideals, each term in this sum is contained both in and . Thus, by absorption, . Hence .  Let . Thus and . Note that as , there exists some and such that . So . As we see that , with and . Thus , yielding .  Let be defined by .  Notice that if , we have , and so . (See: [[Mathematics\/Definitions\/Kernel]]) Let . Thus and , and so and . Hence , and so .  Observe making a homomorphism of rings.  Let . As , we can write and as and . However, as and , we have .  Consider the element , and observe However, as and , we see Thus is a surjective homomorphism. Hence, by the First Isomorphism Theorem, we see .     Let be a square-free integer. The ring is the subring of defined by Show that there is a ring isomorphism .    "
},
{
  "id": "def-quotient-ring",
  "level": "2",
  "url": "sec-ring-quotients.html#def-quotient-ring",
  "type": "Definition",
  "number": "2.22",
  "title": "",
  "body": "  For a two-sided ideal of , the set of additive cosets modulo is This is an abelian group with respect to addition given by . The quotient ring of modulo is the set with addition defined as above and multiplication given by    "
},
{
  "id": "exe-quotient-ring-is-ring",
  "level": "2",
  "url": "sec-ring-quotients.html#exe-quotient-ring-is-ring",
  "type": "Problem",
  "number": "2.23",
  "title": "",
  "body": " Given a two-sided ideal of , prove that the quotient ring is indeed a ring.  "
},
{
  "id": "ex-quotient-of-z",
  "level": "2",
  "url": "sec-ring-quotients.html#ex-quotient-of-z",
  "type": "Example",
  "number": "2.24",
  "title": "",
  "body": " If is an ideal in the ring , then the quotient ring is the familiar ring .  "
},
{
  "id": "quotient-map-is-surjective-homomorphism",
  "level": "2",
  "url": "sec-ring-quotients.html#quotient-map-is-surjective-homomorphism",
  "type": "Problem",
  "number": "2.25",
  "title": "",
  "body": " Prove that the canonical quotient map is a surjective ring homomorphism.  "
},
{
  "id": "prop-ideal-iff-kernel-of-ring-map",
  "level": "2",
  "url": "sec-ring-quotients.html#prop-ideal-iff-kernel-of-ring-map",
  "type": "Proposition",
  "number": "2.26",
  "title": "",
  "body": "  Let be a ring. A subset of is an ideal of if and only if there exists a ring homomorphism such that    "
},
{
  "id": "thm-ump-for-quotient-rings",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ump-for-quotient-rings",
  "type": "Theorem",
  "number": "2.27",
  "title": "Universal Mapping Property for Quotient Rings.",
  "body": " Universal Mapping Property for Quotient Rings   If is a ring homomorphism and is an ideal such that [^1], there exists a well defined ring homomorphism such that . Furthermore, if is surjective then is surjective and if then is injective.    Ignoring for a minute, we know that there is a unique homomorphism of abelian groups from to such that . It remains only to check that preserves multiplication: Given elements , their product is , and we have since preserves multiplication.   "
},
{
  "id": "thm-ring-fit",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ring-fit",
  "type": "Theorem",
  "number": "2.28",
  "title": "First Isomorphism Theorem for Rings.",
  "body": " First Isomorphism Theorem for Rings   If is a ring homomorphism, then via the map given by .    The map is a well-defined ring homomorphism by the UMP for quotient rings. By the First Isomorphism Theorem for groups, the map is bijective, finishing the proof.   "
},
{
  "id": "thm-ring-sit",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ring-sit",
  "type": "Theorem",
  "number": "2.29",
  "title": "Second Isomorphism Theorem for Rings.",
  "body": " Second Isomorphism Theorem for Rings   Let be a subring and let be an ideal of . Then is a subring of , is an ideal of , and    "
},
{
  "id": "thm-ring-tit",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ring-tit",
  "type": "Theorem",
  "number": "2.30",
  "title": "Third Isomorphism Theorem for Rings.",
  "body": " Third Isomorphism Theorem for Rings   If is a ring and are two ideals of , then [^4] is an ideal of and    "
},
{
  "id": "thm-ring-lit",
  "level": "2",
  "url": "sec-ring-quotients.html#thm-ring-lit",
  "type": "Theorem",
  "number": "2.31",
  "title": "Lattive Isomorphism Theorem for Quotient Rings.",
  "body": " Lattive Isomorphism Theorem for Quotient Rings   Suppose is a ring and is a two-sided ideal of and write for the quotient ring homomorphism. There is a bijection with inverse Moreover this bijection induces a bijection between since is an ideal of containing if and only if is an ideal of .   "
},
{
  "id": "special-case-of-sun-tzus-theorem",
  "level": "2",
  "url": "sec-ring-quotients.html#special-case-of-sun-tzus-theorem",
  "type": "Problem",
  "number": "2.32",
  "title": "",
  "body": " Let be a commutative ring with identity, and assume . Let and be ideals such that .    Prove .  Prove the following special case of the Sun Tzu's Theorem: There is an isomorphism of rings of the form .     Let be a commutative ring with identity, and assume . Let and be ideals such that .  First, note that both and are ideals by   Let . Thus , where each and . As and are both ideals, each term in this sum is contained both in and . Thus, by absorption, . Hence .  Let . Thus and . Note that as , there exists some and such that . So . As we see that , with and . Thus , yielding .  Let be defined by .  Notice that if , we have , and so . (See: [[Mathematics\/Definitions\/Kernel]]) Let . Thus and , and so and . Hence , and so .  Observe making a homomorphism of rings.  Let . As , we can write and as and . However, as and , we have .  Consider the element , and observe However, as and , we see Thus is a surjective homomorphism. Hence, by the First Isomorphism Theorem, we see .   "
},
{
  "id": "problem-121",
  "level": "2",
  "url": "sec-ring-quotients.html#problem-121",
  "type": "Problem",
  "number": "2.33",
  "title": "",
  "body": " Let be a square-free integer. The ring is the subring of defined by Show that there is a ring isomorphism .  "
},
{
  "id": "subsec-primemax-ideals",
  "level": "1",
  "url": "subsec-primemax-ideals.html",
  "type": "Section",
  "number": "3.1",
  "title": "Prime and Maximal Ideals",
  "body": " Prime and Maximal Ideals   Prime Ideals    A prime ideal of a commutative ring is a proper ideal such that whenever for , we have or .       In , the prime ideals are and the ideals generated by prime integers , where is a prime integer. The maximal ideals are the ideals generated by prime integers. In particular is prime but not maximal.  In the ideal is not prime, because , but and (because if then so , a contradiction).  In the ideal is maximal and prime (proof in the given later), the ideals and are prime but not maximal.       An ideal is prime if and only if is closed under multiplication.      Let be a commutative ring with , and let be an ideal of . The ideal is prime if and only if is an integral domain.    Suppose is prime. If , then and hence either or , so that either or . This proves is a domain. Suppose is a domain and that . Then in and hence either or . It follows or , so that is prime.      Let be a nontrivial ring. Then is an integral domain if and only if the ideal is prime.      If is a domain, is a ring and is a ring homomorphism, then is a prime ideal.      If is a ring homomorphism and is a prime ideal in , then is prime in .      Maximal Ideals    A maximal ideal of an arbitrary ring is a proper ideal such that the only ideals of containing are and .      Give an explicit example of a ring homomorphism and maximal ideal of such that is not maximal in .      Let be a commutative ring with , and let be an ideal of . The ideal is maximal if and only if is a field.    The first assertion follows immediately from the Lattice Isomorphism Theorem and the fact that is a field if and only if its only ideals are and .      Every maximal ideal is prime.    If is maximal, then is a field, which in particular implies that is a domain, so is prime.     Zorn's Lemma   Let be a non-empty family of sets. Suppose that for each chain in , the set is in . Then has a maximal element.      If is a ring with and is a proper ideal of , then there is a maximal ideal of containing . In particular every ring contains a maximal ideal.    Let be the set of proper ideals of that contain and view as a poset under containment. We will apply Zorn’s Lemma. Suppose is a totally ordered subset of . We need to show has an upper bound in . If is empty, is such a bound. Otherwise, let .  Since is non-empty, we have and so .  Given , then for some . Since is totally ordered, either or , and hence or . Either way, .  For and , we have for some and hence .  This proves is an ideal that contains . Since every is a proper ideal, , so and hence is a proper ideal, so . By Zorn’s Lemma, we conclude has at least one maximal element . This is a maximal ideal in the sense of definition since if is an ideal of and then either or, if is proper, then , which yields by using that is a maximal element of .  The existence of a maximal ideal follows by applying the first part of the theorem for .      Let be a commutative ring, and set . Prove that following assertions.     is an ideal in .  If is a field, then each element of is either a unit or in .         Let . Thus there exists integers such that . Consider Thus . Additionally, , and so as well.  We now consider as an additive group. Notice that and thus the identity is in there. Let We examine . Since we have and so . So . Perfect. We have ourselves a subring.    Suppose now that is a field. Luckily for us, this makes a maximal ideal.  Let . If , great. Suppose its not. Then in  is a unit, since we’re in a field now. So for some . Thus for some . Since and a maximal and thus prime ideal, we have or , a contradiction.            Prove that a finite integral domain must be a field.    Prove that if is a commutative ring and is a prime ideal such that has finite index as an additive subgroup of , then is a maximal ideal. Give an example to show that this implication may fail if the finite index assumption is dropped.       Let be a finite integral domain.   Let , and consider the set . As is finite there must exist such that . In integral domains cancellation is allowed, and thus we can cancel an from both sides, yielding , and thus , making a unit of . Thus is a field.    Let be a commutative ring and a prime ideal such that has finite index as an additive subgroup of .  Consider , which is a domain since is a prime ideal. As for some , we know that , making it a finite domain. Thus is a field by Part (a), making maximal by the same theorem as above.  Let and consider , in which is a prime ideal. However, , which does not have finite order, nor is it a field.         Let be a commutative ring with identity, and assume .    Prove that every maximal ideal of is a prime ideal.  Assume is a finite ring. Prove that every prime ideal is a maximal ideal.         Let be a maximal ideal of . We show that is a field By the Lattice Isomorphism Theorem we know there is a one-to-one correspondence between the ideals of and the ideals of containing . However, as is maximal, the only ideals of containing are and itself, meaning that has exactly two ideals, making a field.  We show that since is a domain, must be prime. Suppose by way of contradiction that is not prime, so exist elements such that but neither nor are in . Thus , making and zero-divisors in , contradicting the fact that is a field. Thus is prime.    Let be a finite ring, and let be a prime ideal in , making an integral domain by . We show is a field. Let , and consider for all . As is finite, there exists some such that . Then , meaning that . Thus has inverse , making a unit. Thus is a field, making a maximal ideal by          Let be a commutative ring in which every element satisfies for some Show that every prime ideal in R is maximal.    Let be a commutative ring in which every element satisfies for some Let be a prime ideal in .  Let , meaning . Then for some . As is a domain   we can cancel an to see that , and thus , making a unit in . Thus is a field, making maximal in .      Let be a commutative ring with identity (with ) and a proper ideal. Prove there exists a prime ideal containing such that whenever where is also a prime ideal, then . (Hint: use Zorn's lemma.)     "
},
{
  "id": "def-prime-ideal",
  "level": "2",
  "url": "subsec-primemax-ideals.html#def-prime-ideal",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": "  A prime ideal of a commutative ring is a proper ideal such that whenever for , we have or .   "
},
{
  "id": "ex-prime-ideals",
  "level": "2",
  "url": "subsec-primemax-ideals.html#ex-prime-ideals",
  "type": "Example",
  "number": "3.2",
  "title": "",
  "body": "   In , the prime ideals are and the ideals generated by prime integers , where is a prime integer. The maximal ideals are the ideals generated by prime integers. In particular is prime but not maximal.  In the ideal is not prime, because , but and (because if then so , a contradiction).  In the ideal is maximal and prime (proof in the given later), the ideals and are prime but not maximal.    "
},
{
  "id": "prop-prime-iff-complement-closed",
  "level": "2",
  "url": "subsec-primemax-ideals.html#prop-prime-iff-complement-closed",
  "type": "Proposition",
  "number": "3.3",
  "title": "",
  "body": "  An ideal is prime if and only if is closed under multiplication.   "
},
{
  "id": "thm-prime-iff-domain",
  "level": "2",
  "url": "subsec-primemax-ideals.html#thm-prime-iff-domain",
  "type": "Theorem",
  "number": "3.4",
  "title": "",
  "body": "  Let be a commutative ring with , and let be an ideal of . The ideal is prime if and only if is an integral domain.    Suppose is prime. If , then and hence either or , so that either or . This proves is a domain. Suppose is a domain and that . Then in and hence either or . It follows or , so that is prime.   "
},
{
  "id": "prop-equivalent-integral-domain-definition",
  "level": "2",
  "url": "subsec-primemax-ideals.html#prop-equivalent-integral-domain-definition",
  "type": "Proposition",
  "number": "3.5",
  "title": "",
  "body": "  Let be a nontrivial ring. Then is an integral domain if and only if the ideal is prime.   "
},
{
  "id": "prop-in-domain-kernel-of-homomorphism-prime",
  "level": "2",
  "url": "subsec-primemax-ideals.html#prop-in-domain-kernel-of-homomorphism-prime",
  "type": "Proposition",
  "number": "3.6",
  "title": "",
  "body": "  If is a domain, is a ring and is a ring homomorphism, then is a prime ideal.   "
},
{
  "id": "prop-preimage-of-prime-ideal-is-prime",
  "level": "2",
  "url": "subsec-primemax-ideals.html#prop-preimage-of-prime-ideal-is-prime",
  "type": "Proposition",
  "number": "3.7",
  "title": "",
  "body": "  If is a ring homomorphism and is a prime ideal in , then is prime in .   "
},
{
  "id": "def-maximal-ideal",
  "level": "2",
  "url": "subsec-primemax-ideals.html#def-maximal-ideal",
  "type": "Definition",
  "number": "3.8",
  "title": "",
  "body": "  A maximal ideal of an arbitrary ring is a proper ideal such that the only ideals of containing are and .   "
},
{
  "id": "prop-preimage-of-maximal-ideal-possibly-not-maximal",
  "level": "2",
  "url": "subsec-primemax-ideals.html#prop-preimage-of-maximal-ideal-possibly-not-maximal",
  "type": "Proposition",
  "number": "3.9",
  "title": "",
  "body": "  Give an explicit example of a ring homomorphism and maximal ideal of such that is not maximal in .   "
},
{
  "id": "thm-maximal-iff-field",
  "level": "2",
  "url": "subsec-primemax-ideals.html#thm-maximal-iff-field",
  "type": "Theorem",
  "number": "3.10",
  "title": "",
  "body": "  Let be a commutative ring with , and let be an ideal of . The ideal is maximal if and only if is a field.    The first assertion follows immediately from the Lattice Isomorphism Theorem and the fact that is a field if and only if its only ideals are and .   "
},
{
  "id": "cor-maximal-prime",
  "level": "2",
  "url": "subsec-primemax-ideals.html#cor-maximal-prime",
  "type": "Corollary",
  "number": "3.11",
  "title": "",
  "body": "  Every maximal ideal is prime.    If is maximal, then is a field, which in particular implies that is a domain, so is prime.   "
},
{
  "id": "thm-zorn",
  "level": "2",
  "url": "subsec-primemax-ideals.html#thm-zorn",
  "type": "Theorem",
  "number": "3.12",
  "title": "Zorn's Lemma.",
  "body": " Zorn's Lemma   Let be a non-empty family of sets. Suppose that for each chain in , the set is in . Then has a maximal element.   "
},
{
  "id": "thm-all-ideals-contained-in-maximal-ideal",
  "level": "2",
  "url": "subsec-primemax-ideals.html#thm-all-ideals-contained-in-maximal-ideal",
  "type": "Theorem",
  "number": "3.13",
  "title": "",
  "body": "  If is a ring with and is a proper ideal of , then there is a maximal ideal of containing . In particular every ring contains a maximal ideal.    Let be the set of proper ideals of that contain and view as a poset under containment. We will apply Zorn’s Lemma. Suppose is a totally ordered subset of . We need to show has an upper bound in . If is empty, is such a bound. Otherwise, let .  Since is non-empty, we have and so .  Given , then for some . Since is totally ordered, either or , and hence or . Either way, .  For and , we have for some and hence .  This proves is an ideal that contains . Since every is a proper ideal, , so and hence is a proper ideal, so . By Zorn’s Lemma, we conclude has at least one maximal element . This is a maximal ideal in the sense of definition since if is an ideal of and then either or, if is proper, then , which yields by using that is a maximal element of .  The existence of a maximal ideal follows by applying the first part of the theorem for .   "
},
{
  "id": "prop-annihilator-ideal-and-quotient-field",
  "level": "2",
  "url": "subsec-primemax-ideals.html#prop-annihilator-ideal-and-quotient-field",
  "type": "Proposition",
  "number": "3.14",
  "title": "",
  "body": "  Let be a commutative ring, and set . Prove that following assertions.     is an ideal in .  If is a field, then each element of is either a unit or in .         Let . Thus there exists integers such that . Consider Thus . Additionally, , and so as well.  We now consider as an additive group. Notice that and thus the identity is in there. Let We examine . Since we have and so . So . Perfect. We have ourselves a subring.    Suppose now that is a field. Luckily for us, this makes a maximal ideal.  Let . If , great. Suppose its not. Then in  is a unit, since we’re in a field now. So for some . Thus for some . Since and a maximal and thus prime ideal, we have or , a contradiction.      "
},
{
  "id": "prop-prime-ideal-with-finite-index",
  "level": "2",
  "url": "subsec-primemax-ideals.html#prop-prime-ideal-with-finite-index",
  "type": "Proposition",
  "number": "3.15",
  "title": "",
  "body": "     Prove that a finite integral domain must be a field.    Prove that if is a commutative ring and is a prime ideal such that has finite index as an additive subgroup of , then is a maximal ideal. Give an example to show that this implication may fail if the finite index assumption is dropped.       Let be a finite integral domain.   Let , and consider the set . As is finite there must exist such that . In integral domains cancellation is allowed, and thus we can cancel an from both sides, yielding , and thus , making a unit of . Thus is a field.    Let be a commutative ring and a prime ideal such that has finite index as an additive subgroup of .  Consider , which is a domain since is a prime ideal. As for some , we know that , making it a finite domain. Thus is a field by Part (a), making maximal by the same theorem as above.  Let and consider , in which is a prime ideal. However, , which does not have finite order, nor is it a field.      "
},
{
  "id": "prop-prime-ideals-maximal-in-finite-rings",
  "level": "2",
  "url": "subsec-primemax-ideals.html#prop-prime-ideals-maximal-in-finite-rings",
  "type": "Proposition",
  "number": "3.16",
  "title": "",
  "body": "  Let be a commutative ring with identity, and assume .    Prove that every maximal ideal of is a prime ideal.  Assume is a finite ring. Prove that every prime ideal is a maximal ideal.         Let be a maximal ideal of . We show that is a field By the Lattice Isomorphism Theorem we know there is a one-to-one correspondence between the ideals of and the ideals of containing . However, as is maximal, the only ideals of containing are and itself, meaning that has exactly two ideals, making a field.  We show that since is a domain, must be prime. Suppose by way of contradiction that is not prime, so exist elements such that but neither nor are in . Thus , making and zero-divisors in , contradicting the fact that is a field. Thus is prime.    Let be a finite ring, and let be a prime ideal in , making an integral domain by . We show is a field. Let , and consider for all . As is finite, there exists some such that . Then , meaning that . Thus has inverse , making a unit. Thus is a field, making a maximal ideal by       "
},
{
  "id": "prop-when-xnx-all-prime-ideals-are-maximal",
  "level": "2",
  "url": "subsec-primemax-ideals.html#prop-when-xnx-all-prime-ideals-are-maximal",
  "type": "Proposition",
  "number": "3.17",
  "title": "",
  "body": "  Let be a commutative ring in which every element satisfies for some Show that every prime ideal in R is maximal.    Let be a commutative ring in which every element satisfies for some Let be a prime ideal in .  Let , meaning . Then for some . As is a domain   we can cancel an to see that , and thus , making a unit in . Thus is a field, making maximal in .   "
},
{
  "id": "prop-minimal-prime",
  "level": "2",
  "url": "subsec-primemax-ideals.html#prop-minimal-prime",
  "type": "Proposition",
  "number": "3.18",
  "title": "",
  "body": "  Let be a commutative ring with identity (with ) and a proper ideal. Prove there exists a prime ideal containing such that whenever where is also a prime ideal, then . (Hint: use Zorn's lemma.)   "
},
{
  "id": "subsec-polyrings",
  "level": "1",
  "url": "subsec-polyrings.html",
  "type": "Section",
  "number": "3.2",
  "title": "Polynomial Rings",
  "body": " Polynomial Rings    For any commutative ring , the polynomial ring in the variable  , written , is the set with addition defined by and multiplication defined by For any commutative ring , the polynomial ring in  , written , is defined inductively as , but more easily thought of as the set consisting of (finite) sums of the form with addition and multiplication defined by rules similar to the ones seen above.     If , letting , then consists of all expressions of the form with for all but a finite number of .    One often views as the subring of consisting of the constant polynomials.    Let be a ring and let be the ring of polynomials in an indeterminate , with coefficients in . Let Prove that    is a unit in if and only if is a unit in and are nilpotent.   is nilpotent if and only if nilpotent for all .   is a zerodivisor if and only if there exists in such that .   is said to be primitive if . Prove that if , then is primitive if and only if both and are primitive.     Generalize the results of the previous exercise to a polynomial ring in several indeterminates.    In the ideal is maximal.   Consider the quotient ring . By the Third Isomorphism Theorem, and because and under this isomorphism is mapped to , we have (omitting some details) Since the quotient ring is field, we conclude that is maximal.     In the ideal is maximal and prime, the ideals and are prime but not maximal.   Here is a nice application of the First Isomorphism Theorem.   Consider the ring and let be the principal ideals generated by . Since is commutative, we have so is simply the collection of polynomials having as a factor. I claim that is isomorphic as a ring to . To prove this we define a map sending to , the evaluation of at . It is easy to check is a ring homomorphism and it is onto since elements of the form in the source map to all possible complex numbers under . We claim the kernel of is . It is clear that and it follows that since is a two-sided ideal. Suppose and write with degree of at most one, using the division algorithm in the polynomial ring . So for real numbers . If , then , which would contradict . So we must have and hence . Applying the First Isomorphism Theorem for Rings, we get via the map sending to . Intuitively, we have adjoined a formal symbol to the real numbers, and by modding out we have forced to be a square root of . That is, we have adjoined to the real numbers, obtaining .    Consider the ideal of . Explicitly, by Lemma we have Suppose we want to understand . Then the Third Isomorphism Theorem is our friend. Set and note that , and so by the Third Isomorphism Theorem Next we express both the numerator and the denominator in better terms. I claim To see this consider the reduction homomorphism sending a polynomial to its reduction modulo . The kernel of this surjective ring map is , establishing our claim by the First Isomorphism Theorem.  Recall that denotes the image of under the quotient map . Therefore we have In other words, J\/I is the ideal generated by the coset of in . Moreover, under the isomorphism discussed above, we have that , where denotes the reduction of the coefficients of modulo 2. Therefore where denotes the congruence class of modulo 2. Now we put everything together: consider the ring homomorphism where Notice that since and are surjective, so is , thus and since is an isomorphism and is a quotient map. Applying the First Isomorphism Theorem to gives and combining this with the Third Isomorphism Theorem further yields     It turns out that the ring we discussed in the previous is a field and by a problem from HW 11, any field has only two ideals and itself. This implies via the Lattice Isomorphism Theorem that there are only two ideals in which contain , namely and .     If is a domain, then    is a domain    for any nonzero polynomials ,     the units of are the units of ( )         Let and be commutative rings, is a ring homomorphism and arbitrary elements of . Then there exists a unique ring homomorphism such that and for all , namely     Let’s observe first that if such a map exists it is unique. For if is a ring map extending and sending to . Then using that preserves and .  For existence, let's assume at first. Given and , define by It is elementary (but tedious) to check really is a ring homomorphism. The fact that it restricts to is clear, however.  For the general case, we proceed by induction on the number of variables . The induction hypothesis shows that there is a ring homomorphism such that and , . Applying the case to gives with and . Setting gives a map with the needed properties.     If are commutative rings with and , then the evaluation at function given by is a ring homomorphism.    Given a ring map between commutative rings, we may apply the Proposition to the composition using the element of to get an induced ring map that sends to . That is, the map applies to the coefficients of a polynomial. This can be generalized to more than one variable in the obvious way.    Continuing with the previous example, we could have for an ideal of and could be the quotient map. Then takes a polynomial and “reduces’’ its coefficients modulo . We will usually denote the image of through the reduction homomorphism by .    Find all the ideals of that contain , the ideal of generated by and . For each such ideal, give an explicit list of generators, and determine whether the ideal is prime, maximal, or neither.   First, notice that is irreducible in as it is a cyclotomic polynomial. Thus the possibilities are the following:    ,     ,     ,     .   Notice that , which is neither prime nor maximal, as those ideals must be proper. The ideal is not maximal as it is contained in both and , nor is it prime, given that but neither nor are in .  Both and are generated with irreducible elements, making them irreducible ideals and thus maximal.     Find, with justification, all the ideals of the ring that contain the ideal .    Let be any field, and let , and be indeterminates. Prove in detail that and are isomorphic rings.    Prove the ideal of the commutative ring is not a principal ideal.   Let be a commutative ring with unity and an irreducible polynomial. We want to show that is a prime ideal in .  First, note that is an ideal of , since it is generated by a single polynomial.  Suppose that with . Then for some . Since is irreducible, it cannot be written as a product of two non-constant polynomials, so either divides or divides . Without loss of generality, assume that divides . Then for some . Substituting into yields , and cancelling the factor of gives . Thus, , and so is a prime ideal of .    "
},
{
  "id": "def-polynomial-ring",
  "level": "2",
  "url": "subsec-polyrings.html#def-polynomial-ring",
  "type": "Definition",
  "number": "3.19",
  "title": "",
  "body": "  For any commutative ring , the polynomial ring in the variable  , written , is the set with addition defined by and multiplication defined by For any commutative ring , the polynomial ring in  , written , is defined inductively as , but more easily thought of as the set consisting of (finite) sums of the form with addition and multiplication defined by rules similar to the ones seen above.   "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "subsec-polyrings.html#remark-20",
  "type": "Remark",
  "number": "3.20",
  "title": "",
  "body": " If , letting , then consists of all expressions of the form with for all but a finite number of .  "
},
{
  "id": "remark-21",
  "level": "2",
  "url": "subsec-polyrings.html#remark-21",
  "type": "Remark",
  "number": "3.21",
  "title": "",
  "body": " One often views as the subring of consisting of the constant polynomials.  "
},
{
  "id": "exe-units-and-nilpotents-in-polynomial-rings",
  "level": "2",
  "url": "subsec-polyrings.html#exe-units-and-nilpotents-in-polynomial-rings",
  "type": "Problem",
  "number": "3.22",
  "title": "",
  "body": " Let be a ring and let be the ring of polynomials in an indeterminate , with coefficients in . Let Prove that    is a unit in if and only if is a unit in and are nilpotent.   is nilpotent if and only if nilpotent for all .   is a zerodivisor if and only if there exists in such that .   is said to be primitive if . Prove that if , then is primitive if and only if both and are primitive.   "
},
{
  "id": "exe-units-and-nilpotents-in-polynomial-rings-general",
  "level": "2",
  "url": "subsec-polyrings.html#exe-units-and-nilpotents-in-polynomial-rings-general",
  "type": "Problem",
  "number": "3.23",
  "title": "",
  "body": " Generalize the results of the previous exercise to a polynomial ring in several indeterminates.  "
},
{
  "id": "ex-zx-and-2x",
  "level": "2",
  "url": "subsec-polyrings.html#ex-zx-and-2x",
  "type": "Problem",
  "number": "3.24",
  "title": "",
  "body": " In the ideal is maximal.   Consider the quotient ring . By the Third Isomorphism Theorem, and because and under this isomorphism is mapped to , we have (omitting some details) Since the quotient ring is field, we conclude that is maximal.   "
},
{
  "id": "exe-2x-prime-and-maximal-in-zx",
  "level": "2",
  "url": "subsec-polyrings.html#exe-2x-prime-and-maximal-in-zx",
  "type": "Problem",
  "number": "3.25",
  "title": "",
  "body": " In the ideal is maximal and prime, the ideals and are prime but not maximal.  "
},
{
  "id": "ex-rxx21",
  "level": "2",
  "url": "subsec-polyrings.html#ex-rxx21",
  "type": "Problem",
  "number": "3.26",
  "title": "",
  "body": " Consider the ring and let be the principal ideals generated by . Since is commutative, we have so is simply the collection of polynomials having as a factor. I claim that is isomorphic as a ring to . To prove this we define a map sending to , the evaluation of at . It is easy to check is a ring homomorphism and it is onto since elements of the form in the source map to all possible complex numbers under . We claim the kernel of is . It is clear that and it follows that since is a two-sided ideal. Suppose and write with degree of at most one, using the division algorithm in the polynomial ring . So for real numbers . If , then , which would contradict . So we must have and hence . Applying the First Isomorphism Theorem for Rings, we get via the map sending to . Intuitively, we have adjoined a formal symbol to the real numbers, and by modding out we have forced to be a square root of . That is, we have adjoined to the real numbers, obtaining .  "
},
{
  "id": "ex-ideal-of-zx-and-isomorphism",
  "level": "2",
  "url": "subsec-polyrings.html#ex-ideal-of-zx-and-isomorphism",
  "type": "Problem",
  "number": "3.27",
  "title": "",
  "body": " Consider the ideal of . Explicitly, by Lemma we have Suppose we want to understand . Then the Third Isomorphism Theorem is our friend. Set and note that , and so by the Third Isomorphism Theorem Next we express both the numerator and the denominator in better terms. I claim To see this consider the reduction homomorphism sending a polynomial to its reduction modulo . The kernel of this surjective ring map is , establishing our claim by the First Isomorphism Theorem.  Recall that denotes the image of under the quotient map . Therefore we have In other words, J\/I is the ideal generated by the coset of in . Moreover, under the isomorphism discussed above, we have that , where denotes the reduction of the coefficients of modulo 2. Therefore where denotes the congruence class of modulo 2. Now we put everything together: consider the ring homomorphism where Notice that since and are surjective, so is , thus and since is an isomorphism and is a quotient map. Applying the First Isomorphism Theorem to gives and combining this with the Third Isomorphism Theorem further yields   "
},
{
  "id": "ex-ideal-and-lit",
  "level": "2",
  "url": "subsec-polyrings.html#ex-ideal-and-lit",
  "type": "Problem",
  "number": "3.28",
  "title": "",
  "body": " It turns out that the ring we discussed in the previous is a field and by a problem from HW 11, any field has only two ideals and itself. This implies via the Lattice Isomorphism Theorem that there are only two ideals in which contain , namely and .  "
},
{
  "id": "prop-polynomials-domains-degrees-units",
  "level": "2",
  "url": "subsec-polyrings.html#prop-polynomials-domains-degrees-units",
  "type": "Proposition",
  "number": "3.29",
  "title": "",
  "body": "  If is a domain, then    is a domain    for any nonzero polynomials ,     the units of are the units of ( )      "
},
{
  "id": "prop-ump-for-polynomial-rings",
  "level": "2",
  "url": "subsec-polyrings.html#prop-ump-for-polynomial-rings",
  "type": "Proposition",
  "number": "3.30",
  "title": "",
  "body": "  Let and be commutative rings, is a ring homomorphism and arbitrary elements of . Then there exists a unique ring homomorphism such that and for all , namely     Let’s observe first that if such a map exists it is unique. For if is a ring map extending and sending to . Then using that preserves and .  For existence, let's assume at first. Given and , define by It is elementary (but tedious) to check really is a ring homomorphism. The fact that it restricts to is clear, however.  For the general case, we proceed by induction on the number of variables . The induction hypothesis shows that there is a ring homomorphism such that and , . Applying the case to gives with and . Setting gives a map with the needed properties.   "
},
{
  "id": "exe-evaluation-homomorphism",
  "level": "2",
  "url": "subsec-polyrings.html#exe-evaluation-homomorphism",
  "type": "Problem",
  "number": "3.31",
  "title": "",
  "body": " If are commutative rings with and , then the evaluation at function given by is a ring homomorphism.  "
},
{
  "id": "exe-applying-ring-homomorphism-to-coefficients",
  "level": "2",
  "url": "subsec-polyrings.html#exe-applying-ring-homomorphism-to-coefficients",
  "type": "Problem",
  "number": "3.32",
  "title": "",
  "body": " Given a ring map between commutative rings, we may apply the Proposition to the composition using the element of to get an induced ring map that sends to . That is, the map applies to the coefficients of a polynomial. This can be generalized to more than one variable in the obvious way.  "
},
{
  "id": "exe-the-reduction-homomorphism",
  "level": "2",
  "url": "subsec-polyrings.html#exe-the-reduction-homomorphism",
  "type": "Problem",
  "number": "3.33",
  "title": "",
  "body": " Continuing with the previous example, we could have for an ideal of and could be the quotient map. Then takes a polynomial and “reduces’’ its coefficients modulo . We will usually denote the image of through the reduction homomorphism by .  "
},
{
  "id": "all-ideals-containing-6-x2-x-1",
  "level": "2",
  "url": "subsec-polyrings.html#all-ideals-containing-6-x2-x-1",
  "type": "Problem",
  "number": "3.34",
  "title": "",
  "body": " Find all the ideals of that contain , the ideal of generated by and . For each such ideal, give an explicit list of generators, and determine whether the ideal is prime, maximal, or neither.   First, notice that is irreducible in as it is a cyclotomic polynomial. Thus the possibilities are the following:    ,     ,     ,     .   Notice that , which is neither prime nor maximal, as those ideals must be proper. The ideal is not maximal as it is contained in both and , nor is it prime, given that but neither nor are in .  Both and are generated with irreducible elements, making them irreducible ideals and thus maximal.   "
},
{
  "id": "problem-133",
  "level": "2",
  "url": "subsec-polyrings.html#problem-133",
  "type": "Problem",
  "number": "3.35",
  "title": "",
  "body": " Find, with justification, all the ideals of the ring that contain the ideal .  "
},
{
  "id": "problem-134",
  "level": "2",
  "url": "subsec-polyrings.html#problem-134",
  "type": "Problem",
  "number": "3.36",
  "title": "",
  "body": " Let be any field, and let , and be indeterminates. Prove in detail that and are isomorphic rings.  "
},
{
  "id": "exe-ideal-generated-by-irreducible-polynomial-prime",
  "level": "2",
  "url": "subsec-polyrings.html#exe-ideal-generated-by-irreducible-polynomial-prime",
  "type": "Problem",
  "number": "3.37",
  "title": "",
  "body": " Prove the ideal of the commutative ring is not a principal ideal.   Let be a commutative ring with unity and an irreducible polynomial. We want to show that is a prime ideal in .  First, note that is an ideal of , since it is generated by a single polynomial.  Suppose that with . Then for some . Since is irreducible, it cannot be written as a product of two non-constant polynomials, so either divides or divides . Without loss of generality, assume that divides . Then for some . Substituting into yields , and cancelling the factor of gives . Thus, , and so is a prime ideal of .   "
},
{
  "id": "sec-field-of-fractions",
  "level": "1",
  "url": "sec-field-of-fractions.html",
  "type": "Section",
  "number": "3.3",
  "title": "Fields of Fractions",
  "body": " Fields of Fractions    Suppose is a commutative ring and is a subset such that      ,     is closed under multiplication (i.e., if , then ), and     does not contain nor any zero divisors.     Such a subset is called a multiplicatively closed subset of non zero divisors of .     Two types of multiplicatively closed sets are most commonly used in practice:   If is a field then is a multiplicatively closed set of non zero divisors.    If is an arbitrary ring with and is a non zero divisor then the set of non negative powers of , , is multiplicatively closed.        If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the field of fractions  is the set of equivalence classes where the equivalence relation is defined by   From now on we just write instead of when dealing with fractions.  Addition and multiplication on are given by       If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the rules given in the above definition for and make into a field. Moreover, the function sending to is an injective ring homomorphism.    There is a lot of small things to check and we'll just do a few. Right off the bat we need to be sure the given equivalence relation really is one. The reflexive and symmetric properties are clear. But the proof of transitivity illustrates a key point: Say . Then and . We need to deduce that . The given equations imply and since is a nonzerodivisor we conclude . This is in fact the only time that the fact that consists of nonzerodivisors is used.  We also need to be sure our rules for and make sense and are independent of representation. They make sense since we assume is closed under . To show is independent of representations, say , so that . Then and and so we need to show . This is clear upon expaning out both sides and using . In a similar way one shows is well-defined.  From now on we just write instead of when dealing with fractions.  The associative and distributive axioms involve a straightfoward but tedious check, and we skip them entirely. The fact that and are commutative is clear from their definitions. is a group under addition since it has a element, namely , and , with the last equality holding since . The element is . (Note that we have used that a couple times here — indeed, without this assumption could be empty and then would be the empty set.)   being a domain means implies ( or ). The contrapositive to this statement is: if and then , which shows is a multiplicatively closed set of nonzerodivisors.  It remains only to show every non-zero element of is a unit. Given , note that and hence . So is also an element of . We have , where the last equation holds by the definition of .  The fact that is a ring homomorphism is straightforward to check. Its injective since implies .        For a specific example, the field of fractions of is .    or another, if is a squarefree integer and is an integral domain and we will show soon that its field of fractions is (isomorphic to) the field .    For yet another, is an integral domain. Its field of fractions, usually denoted constists of all rational functions . This last example could be generalized by replacing with any field and also by using any number of variables.        Let be a domain and let be its fraction field. Show that has the following universal property: if is any field and is any injective ring homomorphism, then extends to an injective ring homomorphism , so that .      Let be an integral domain with field of fractions . Let be a prime ideal of and let (a) Show that is a subring of . (b) Show that is a prime ideal of .      Let be a commutative integral domain and its field of fractions. Let and be nonzero elements of , such that . Let be the unique ring homomorphism with for and . Prove that a polynomial satisfies if and only if for some polynomial . (Hint: one way is to use induction on deg(p(x)).)    "
},
{
  "id": "def-multiplicatively-closed",
  "level": "2",
  "url": "sec-field-of-fractions.html#def-multiplicatively-closed",
  "type": "Definition",
  "number": "3.38",
  "title": "",
  "body": "  Suppose is a commutative ring and is a subset such that      ,     is closed under multiplication (i.e., if , then ), and     does not contain nor any zero divisors.     Such a subset is called a multiplicatively closed subset of non zero divisors of .   "
},
{
  "id": "example-20",
  "level": "2",
  "url": "sec-field-of-fractions.html#example-20",
  "type": "Example",
  "number": "3.39",
  "title": "",
  "body": " Two types of multiplicatively closed sets are most commonly used in practice:   If is a field then is a multiplicatively closed set of non zero divisors.    If is an arbitrary ring with and is a non zero divisor then the set of non negative powers of , , is multiplicatively closed.     "
},
{
  "id": "def-field-of-fractions",
  "level": "2",
  "url": "sec-field-of-fractions.html#def-field-of-fractions",
  "type": "Definition",
  "number": "3.40",
  "title": "",
  "body": "  If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the field of fractions  is the set of equivalence classes where the equivalence relation is defined by   From now on we just write instead of when dealing with fractions.  Addition and multiplication on are given by    "
},
{
  "id": "thm-field-of-fractions-is-field",
  "level": "2",
  "url": "sec-field-of-fractions.html#thm-field-of-fractions-is-field",
  "type": "Theorem",
  "number": "3.41",
  "title": "",
  "body": "  If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the rules given in the above definition for and make into a field. Moreover, the function sending to is an injective ring homomorphism.    There is a lot of small things to check and we'll just do a few. Right off the bat we need to be sure the given equivalence relation really is one. The reflexive and symmetric properties are clear. But the proof of transitivity illustrates a key point: Say . Then and . We need to deduce that . The given equations imply and since is a nonzerodivisor we conclude . This is in fact the only time that the fact that consists of nonzerodivisors is used.  We also need to be sure our rules for and make sense and are independent of representation. They make sense since we assume is closed under . To show is independent of representations, say , so that . Then and and so we need to show . This is clear upon expaning out both sides and using . In a similar way one shows is well-defined.  From now on we just write instead of when dealing with fractions.  The associative and distributive axioms involve a straightfoward but tedious check, and we skip them entirely. The fact that and are commutative is clear from their definitions. is a group under addition since it has a element, namely , and , with the last equality holding since . The element is . (Note that we have used that a couple times here — indeed, without this assumption could be empty and then would be the empty set.)   being a domain means implies ( or ). The contrapositive to this statement is: if and then , which shows is a multiplicatively closed set of nonzerodivisors.  It remains only to show every non-zero element of is a unit. Given , note that and hence . So is also an element of . We have , where the last equation holds by the definition of .  The fact that is a ring homomorphism is straightforward to check. Its injective since implies .   "
},
{
  "id": "example-21",
  "level": "2",
  "url": "sec-field-of-fractions.html#example-21",
  "type": "Example",
  "number": "3.42",
  "title": "",
  "body": "    For a specific example, the field of fractions of is .    or another, if is a squarefree integer and is an integral domain and we will show soon that its field of fractions is (isomorphic to) the field .    For yet another, is an integral domain. Its field of fractions, usually denoted constists of all rational functions . This last example could be generalized by replacing with any field and also by using any number of variables.     "
},
{
  "id": "prop-fof-1",
  "level": "2",
  "url": "sec-field-of-fractions.html#prop-fof-1",
  "type": "Proposition",
  "number": "3.43",
  "title": "",
  "body": "  Let be a domain and let be its fraction field. Show that has the following universal property: if is any field and is any injective ring homomorphism, then extends to an injective ring homomorphism , so that .   "
},
{
  "id": "prop-fof-2",
  "level": "2",
  "url": "sec-field-of-fractions.html#prop-fof-2",
  "type": "Proposition",
  "number": "3.44",
  "title": "",
  "body": "  Let be an integral domain with field of fractions . Let be a prime ideal of and let (a) Show that is a subring of . (b) Show that is a prime ideal of .   "
},
{
  "id": "prop-fof-3",
  "level": "2",
  "url": "sec-field-of-fractions.html#prop-fof-3",
  "type": "Proposition",
  "number": "3.45",
  "title": "",
  "body": "  Let be a commutative integral domain and its field of fractions. Let and be nonzero elements of , such that . Let be the unique ring homomorphism with for and . Prove that a polynomial satisfies if and only if for some polynomial . (Hint: one way is to use induction on deg(p(x)).)   "
},
{
  "id": "sec-eds",
  "level": "1",
  "url": "sec-eds.html",
  "type": "Section",
  "number": "4.1",
  "title": "Euclidian Domains",
  "body": " Euclidian Domains    A Euclidean domain (ED) is a domain together with a function such that and the following property holds: for any two elements with , there are elements and of such that      A \"degenerate example\" is a field equipped with the trivial norm for all . Given with , we have . Note that in this example there is no need to include in the description of the division algorithm, since implies . This is not the case in other examples. Also observe that as we've defined remainders they are {} unique. For example, in dividing by , both are considered valid. This calculation shows, more generally, that if is a unit, then for all there exists an equation with , not matter what norm is used. One could make remainders (and hence quotients) unique for by insisting that remainders always be non-negative, but this is not part of the abstract theory since it doesn’t generalize to all cases well.    The ring of Gaussian integers is a Euclidean domain with being the usual complex (Euclidean) square norm . Let ,  and let (here we use that the fraction field of is ). Now pick so that and . We have Set and set and notice that because and by closure. If we’re good, and if then, using that the complex squared norm is multiplicative as well as the Pythagorean Theorem and the choice for , we have Thus the norm function makes into a Euclidean domain.    The next classical example is with a field and where we define the norm to be degree: if and . This ring is a ED because of the familiar long division for polynomials.     Given elements , not both , of a Euclidean domain with Euclidean norm , a of and is an element such that:    and ; and    If and , then .        Note that is equivalent to .   "
},
{
  "id": "def-ed",
  "level": "2",
  "url": "sec-eds.html#def-ed",
  "type": "Definition",
  "number": "4.1",
  "title": "",
  "body": "  A Euclidean domain (ED) is a domain together with a function such that and the following property holds: for any two elements with , there are elements and of such that    "
},
{
  "id": "ex-trivial-norm",
  "level": "2",
  "url": "sec-eds.html#ex-trivial-norm",
  "type": "Example",
  "number": "4.2",
  "title": "",
  "body": " A \"degenerate example\" is a field equipped with the trivial norm for all . Given with , we have . Note that in this example there is no need to include in the description of the division algorithm, since implies . This is not the case in other examples. Also observe that as we've defined remainders they are {} unique. For example, in dividing by , both are considered valid. This calculation shows, more generally, that if is a unit, then for all there exists an equation with , not matter what norm is used. One could make remainders (and hence quotients) unique for by insisting that remainders always be non-negative, but this is not part of the abstract theory since it doesn’t generalize to all cases well.  "
},
{
  "id": "ex-gaussian-integers-are-an-ed",
  "level": "2",
  "url": "sec-eds.html#ex-gaussian-integers-are-an-ed",
  "type": "Problem",
  "number": "4.3",
  "title": "",
  "body": " The ring of Gaussian integers is a Euclidean domain with being the usual complex (Euclidean) square norm . Let ,  and let (here we use that the fraction field of is ). Now pick so that and . We have Set and set and notice that because and by closure. If we’re good, and if then, using that the complex squared norm is multiplicative as well as the Pythagorean Theorem and the choice for , we have Thus the norm function makes into a Euclidean domain.  "
},
{
  "id": "ex-degree-and-norm",
  "level": "2",
  "url": "sec-eds.html#ex-degree-and-norm",
  "type": "Problem",
  "number": "4.4",
  "title": "",
  "body": " The next classical example is with a field and where we define the norm to be degree: if and . This ring is a ED because of the familiar long division for polynomials.  "
},
{
  "id": "def-ed-gcd",
  "level": "2",
  "url": "sec-eds.html#def-ed-gcd",
  "type": "Definition",
  "number": "4.5",
  "title": "",
  "body": "  Given elements , not both , of a Euclidean domain with Euclidean norm , a of and is an element such that:    and ; and    If and , then .      "
},
{
  "id": "remark-22",
  "level": "2",
  "url": "sec-eds.html#remark-22",
  "type": "Remark",
  "number": "4.6",
  "title": "",
  "body": " Note that is equivalent to .  "
},
{
  "id": "sec-pids",
  "level": "1",
  "url": "sec-pids.html",
  "type": "Section",
  "number": "4.2",
  "title": "Principal Ideal Domains",
  "body": " Principal Ideal Domains    A ring is called a principal ideal domain (PID) if it is a domain with the property that every ideal is principal, i.e., for each ideal , we have for some      For any field , every ideal of is principal ( is a PID)     If is a Euclidean domain, then is a PID.    Let be the norm function making into a Euclidean domain. Pick an ideal . If is the zero ideal, . Otherwise pick a non-zero element of with as small as possible. (Such a exists by the well-ordering of .) I claim . It is clear that . Pick . Then and either or . But note that , and we cannot have both and by our choice of . So it must be that , and hence .     The ring is a PID, but not a Euclidean domain. It is the simplest example of such a ring, but the proofs of these claims are not easy. I will not cover a proof of this fact.    If is a PID, then every non-zero prime ideal is maximal.     Let be a domain. Two elements are associates if there is a unit of R such that .      Two elements of a domain are associates if and only if .    If then and so for some . Similarly and hence . Since is a domain, either or . If , then and otherwise is a unit.  If for a unit , then and so and , from which is follows that and .      If is a PID and , then    for some and any such is a gcd of and     the gcd of and is unique up to multiplication by a unit.       The existence of is granted by definition in a PID. Now gives that and . If and we have that , so by minimality. This gives , hence .     If is not only a PID but a Euclidean domain with norm function , then the Euclidean algorithm can be used to compute a gcd of any two nonzero .     Suppose is a domain. An element is a prime element if and the ideal is a prime ideal.      Suppose is a domain. An element is irreducible if , is not a unit, and whenever with then either or is a unit.       the prime elements of are the prime integers and their negatives; they are also irreducible  any element with a prime integer is irreducible e.g. is irreducible  the element is not irreducible in   the polynomial is irreducible; indeed if it factors nontrivially, it must factor as a product of two linear polynomials: . Then is a root for . But neither nor are roots for this polynomial, a contradiction.      In the domain the element is irreducible but not prime.   Note that and thus . However we claim that neither nor are in . If then for some and so , a contradiction. Thus is not prime.     In the ring the element is irreducible but not prime.   Since this ring is a domain. The element is irreducible for degree reasons. The ideal contains but doesn't contain so is not prime.      Let be a domain and let . 1. If is a prime element, then is irreducible. 2. If is a PID and is irreducible, then is a prime element.    Suppose is an integral domain and that is prime. Then and is not a unit. Suppose . Then and hence by definition either or . If , we have for some and so . Since , , and is an integral domain, we must have , showing that is a unit.  Assume is a PID and that is irreducible. Since is not a unit, is a proper ideal and hence is contained in a maximal ideal by Theorem . We show and hence is prime. Since is a PID, for some . So for some . But is irreducible and is not a unit, which forces to be a unit and hence .     Let be a commutative ring and an indeterminant. Prove that is a PID if and only if is a field.   First, suppose is a PID. Let be a nonzero ideal in , and consider the ideal . As is a PID we see for some . Then , but is an indeterminant and thus irreducible, so must be a unit or itself. But also generates , so can’t be , so is a unit, meaning and so . Thus the only ideals of are and , making a field.  Next, suppose is a field. Let be an ideal in . If then or , both of which are principal. Thus , and so , making principal as well. Hence is a PID.     Consider the subring of . Show that is irreducible but not prime in Hint: Consider the function .   Consider and the function .  Suppose by way of contradiction there exist such that . Then and , and Thus or , as these are the only integer divisors of . However, there do not exist integers such that this is true. Thus is irreducible in .  Suppose by way of contradiction that is prime in . Note that . Thus divides one of these factors.  First, suppose there exists some such that . Thus , and so . However, is not an integer, and thus cannot divide either of these factors. Thus is not prime in .     In the commutative ring , show that the element is irreducible but not prime.    Suppose by way of contradiction there exist such that . Then and , and Thus or , as these are the only integer divisors of . However, there do not exist integers such that this is true. Thus is irreducible in .  Suppose by way of contradiction that is prime in . Note that . Thus divides one of these factors.  First, suppose there exists some such that . Thus , and so . However, is not an integer, and thus cannot divide either of these factors. Thus is not prime in .     Prove is not a PID. Hint: One method is to use (with proof) the fact that is irreducible in this ring.    Let be a commutative ring with . Recall that is called nilpotent if for some integer Let be the set of nilpotent elements of .   Show that is an ideal of .    Show that the ring has no nonzero nilpotent elements.    For a polynomial , prove that is a nilpotent element of if and only if every coefficient of is nilpotent.      Let be a commutative ring with and Let be the set of nilpotent elements of .     Let . Then and for . Consider , which, by the binomial theorem, has each term raised to either the th or th power, sending the whole thing to .  Additionally, if consider when viewed as an additive group. Notice . Finally, let and consider , so . Thus we have our ideal.    Let be a nilpotent element in . Then , meaning . This means there exists some such that , placing . Thus all nilpotent elements in are actually (possibly four ’s in a trench coat).    Let .  First, suppose is a nilpotent element of . Thus for some . By the binomial shenanigans every product of coefficients must to go .  Next, suppose every coefficient of is nilpotent. Let be equal to the product of all the smallest powers that send each coefficient to . Thus by more binomial shenanigans we have .        Let be a PID and a multiplicatively closed subset of such that . Prove that is also a PID. Tip: Given an ideal of , consider .   Let be a PID, a multiplicatively closed subset of such that , and an ideal in . Consider , which is an ideal in and is thus generated by some .     Let be an integral domain with field of fractions . Let be a prime ideal of and let    Show that is a subring of .    Show that is a prime ideal of .      "
},
{
  "id": "def-pid",
  "level": "2",
  "url": "sec-pids.html#def-pid",
  "type": "Definition",
  "number": "4.7",
  "title": "",
  "body": "  A ring is called a principal ideal domain (PID) if it is a domain with the property that every ideal is principal, i.e., for each ideal , we have for some    "
},
{
  "id": "exe-fx-is-a-pid",
  "level": "2",
  "url": "sec-pids.html#exe-fx-is-a-pid",
  "type": "Problem",
  "number": "4.8",
  "title": "",
  "body": " For any field , every ideal of is principal ( is a PID)  "
},
{
  "id": "thm-ed-is-a-pid",
  "level": "2",
  "url": "sec-pids.html#thm-ed-is-a-pid",
  "type": "Theorem",
  "number": "4.9",
  "title": "",
  "body": "  If is a Euclidean domain, then is a PID.    Let be the norm function making into a Euclidean domain. Pick an ideal . If is the zero ideal, . Otherwise pick a non-zero element of with as small as possible. (Such a exists by the well-ordering of .) I claim . It is clear that . Pick . Then and either or . But note that , and we cannot have both and by our choice of . So it must be that , and hence .   "
},
{
  "id": "ex-pid-not-ed",
  "level": "2",
  "url": "sec-pids.html#ex-pid-not-ed",
  "type": "Problem",
  "number": "4.10",
  "title": "",
  "body": " The ring is a PID, but not a Euclidean domain. It is the simplest example of such a ring, but the proofs of these claims are not easy. I will not cover a proof of this fact.  "
},
{
  "id": "exe-nonzero-primes-maximal-in-pid",
  "level": "2",
  "url": "sec-pids.html#exe-nonzero-primes-maximal-in-pid",
  "type": "Problem",
  "number": "4.11",
  "title": "",
  "body": " If is a PID, then every non-zero prime ideal is maximal.  "
},
{
  "id": "def-associate",
  "level": "2",
  "url": "sec-pids.html#def-associate",
  "type": "Definition",
  "number": "4.12",
  "title": "",
  "body": "  Let be a domain. Two elements are associates if there is a unit of R such that .   "
},
{
  "id": "lem-associates-and-principal-ideals",
  "level": "2",
  "url": "sec-pids.html#lem-associates-and-principal-ideals",
  "type": "Lemma",
  "number": "4.13",
  "title": "",
  "body": "  Two elements of a domain are associates if and only if .    If then and so for some . Similarly and hence . Since is a domain, either or . If , then and otherwise is a unit.  If for a unit , then and so and , from which is follows that and .   "
},
{
  "id": "prop-gcds-and-units-in-pids",
  "level": "2",
  "url": "sec-pids.html#prop-gcds-and-units-in-pids",
  "type": "Proposition",
  "number": "4.14",
  "title": "",
  "body": "  If is a PID and , then    for some and any such is a gcd of and     the gcd of and is unique up to multiplication by a unit.       The existence of is granted by definition in a PID. Now gives that and . If and we have that , so by minimality. This gives , hence .   "
},
{
  "id": "remark-23",
  "level": "2",
  "url": "sec-pids.html#remark-23",
  "type": "Remark",
  "number": "4.15",
  "title": "",
  "body": " If is not only a PID but a Euclidean domain with norm function , then the Euclidean algorithm can be used to compute a gcd of any two nonzero .  "
},
{
  "id": "def-prime-element",
  "level": "2",
  "url": "sec-pids.html#def-prime-element",
  "type": "Definition",
  "number": "4.16",
  "title": "",
  "body": "  Suppose is a domain. An element is a prime element if and the ideal is a prime ideal.   "
},
{
  "id": "def-irreducible",
  "level": "2",
  "url": "sec-pids.html#def-irreducible",
  "type": "Definition",
  "number": "4.17",
  "title": "",
  "body": "  Suppose is a domain. An element is irreducible if , is not a unit, and whenever with then either or is a unit.   "
},
{
  "id": "ex-prime-and-irreducible-elements",
  "level": "2",
  "url": "sec-pids.html#ex-prime-and-irreducible-elements",
  "type": "Example",
  "number": "4.18",
  "title": "",
  "body": "   the prime elements of are the prime integers and their negatives; they are also irreducible  any element with a prime integer is irreducible e.g. is irreducible  the element is not irreducible in   the polynomial is irreducible; indeed if it factors nontrivially, it must factor as a product of two linear polynomials: . Then is a root for . But neither nor are roots for this polynomial, a contradiction.    "
},
{
  "id": "ex-in-zsqrt-5-2-irreducible-but-not-prime",
  "level": "2",
  "url": "sec-pids.html#ex-in-zsqrt-5-2-irreducible-but-not-prime",
  "type": "Problem",
  "number": "4.19",
  "title": "",
  "body": " In the domain the element is irreducible but not prime.   Note that and thus . However we claim that neither nor are in . If then for some and so , a contradiction. Thus is not prime.   "
},
{
  "id": "ex-cxyx2-y3-y-irreducible-but-not-prime",
  "level": "2",
  "url": "sec-pids.html#ex-cxyx2-y3-y-irreducible-but-not-prime",
  "type": "Problem",
  "number": "4.20",
  "title": "",
  "body": " In the ring the element is irreducible but not prime.   Since this ring is a domain. The element is irreducible for degree reasons. The ideal contains but doesn't contain so is not prime.   "
},
{
  "id": "thm-irreducible-is-prime-in-pid",
  "level": "2",
  "url": "sec-pids.html#thm-irreducible-is-prime-in-pid",
  "type": "Theorem",
  "number": "4.21",
  "title": "",
  "body": "  Let be a domain and let . 1. If is a prime element, then is irreducible. 2. If is a PID and is irreducible, then is a prime element.    Suppose is an integral domain and that is prime. Then and is not a unit. Suppose . Then and hence by definition either or . If , we have for some and so . Since , , and is an integral domain, we must have , showing that is a unit.  Assume is a PID and that is irreducible. Since is not a unit, is a proper ideal and hence is contained in a maximal ideal by Theorem . We show and hence is prime. Since is a PID, for some . So for some . But is irreducible and is not a unit, which forces to be a unit and hence .   "
},
{
  "id": "rx-a-pid-iff-r-a-field",
  "level": "2",
  "url": "sec-pids.html#rx-a-pid-iff-r-a-field",
  "type": "Problem",
  "number": "4.22",
  "title": "",
  "body": " Let be a commutative ring and an indeterminant. Prove that is a PID if and only if is a field.   First, suppose is a PID. Let be a nonzero ideal in , and consider the ideal . As is a PID we see for some . Then , but is an indeterminant and thus irreducible, so must be a unit or itself. But also generates , so can’t be , so is a unit, meaning and so . Thus the only ideals of are and , making a field.  Next, suppose is a field. Let be an ideal in . If then or , both of which are principal. Thus , and so , making principal as well. Hence is a PID.   "
},
{
  "id": "irreducible-not-prime-inz-sqrt-ten",
  "level": "2",
  "url": "sec-pids.html#irreducible-not-prime-inz-sqrt-ten",
  "type": "Problem",
  "number": "4.23",
  "title": "",
  "body": " Consider the subring of . Show that is irreducible but not prime in Hint: Consider the function .   Consider and the function .  Suppose by way of contradiction there exist such that . Then and , and Thus or , as these are the only integer divisors of . However, there do not exist integers such that this is true. Thus is irreducible in .  Suppose by way of contradiction that is prime in . Note that . Thus divides one of these factors.  First, suppose there exists some such that . Thus , and so . However, is not an integer, and thus cannot divide either of these factors. Thus is not prime in .   "
},
{
  "id": "problem-4-zsqrt-3",
  "level": "2",
  "url": "sec-pids.html#problem-4-zsqrt-3",
  "type": "Problem",
  "number": "4.24",
  "title": "",
  "body": " In the commutative ring , show that the element is irreducible but not prime.    Suppose by way of contradiction there exist such that . Then and , and Thus or , as these are the only integer divisors of . However, there do not exist integers such that this is true. Thus is irreducible in .  Suppose by way of contradiction that is prime in . Note that . Thus divides one of these factors.  First, suppose there exists some such that . Thus , and so . However, is not an integer, and thus cannot divide either of these factors. Thus is not prime in .   "
},
{
  "id": "problem-146",
  "level": "2",
  "url": "sec-pids.html#problem-146",
  "type": "Problem",
  "number": "4.25",
  "title": "",
  "body": " Prove is not a PID. Hint: One method is to use (with proof) the fact that is irreducible in this ring.  "
},
{
  "id": "problem-147",
  "level": "2",
  "url": "sec-pids.html#problem-147",
  "type": "Problem",
  "number": "4.26",
  "title": "",
  "body": " Let be a commutative ring with . Recall that is called nilpotent if for some integer Let be the set of nilpotent elements of .   Show that is an ideal of .    Show that the ring has no nonzero nilpotent elements.    For a polynomial , prove that is a nilpotent element of if and only if every coefficient of is nilpotent.      Let be a commutative ring with and Let be the set of nilpotent elements of .     Let . Then and for . Consider , which, by the binomial theorem, has each term raised to either the th or th power, sending the whole thing to .  Additionally, if consider when viewed as an additive group. Notice . Finally, let and consider , so . Thus we have our ideal.    Let be a nilpotent element in . Then , meaning . This means there exists some such that , placing . Thus all nilpotent elements in are actually (possibly four ’s in a trench coat).    Let .  First, suppose is a nilpotent element of . Thus for some . By the binomial shenanigans every product of coefficients must to go .  Next, suppose every coefficient of is nilpotent. Let be equal to the product of all the smallest powers that send each coefficient to . Thus by more binomial shenanigans we have .      "
},
{
  "id": "problem-148",
  "level": "2",
  "url": "sec-pids.html#problem-148",
  "type": "Problem",
  "number": "4.27",
  "title": "",
  "body": " Let be a PID and a multiplicatively closed subset of such that . Prove that is also a PID. Tip: Given an ideal of , consider .   Let be a PID, a multiplicatively closed subset of such that , and an ideal in . Consider , which is an ideal in and is thus generated by some .   "
},
{
  "id": "problem-149",
  "level": "2",
  "url": "sec-pids.html#problem-149",
  "type": "Problem",
  "number": "4.28",
  "title": "",
  "body": " Let be an integral domain with field of fractions . Let be a prime ideal of and let    Show that is a subring of .    Show that is a prime ideal of .     "
},
{
  "id": "subsec-ufds",
  "level": "1",
  "url": "subsec-ufds.html",
  "type": "Section",
  "number": "4.3",
  "title": "Unique Factorization Domains",
  "body": " Unique Factorization Domains    A ring is called a unique factorization domain , or UFD for short, if is an integral domain and every element that is non-zero and not a unit can be written as a finite product of (not necessarily distinct) irreducible elements of in a way that is unique up to ordering and associates. That is, if also holds with each irreducible, then and there is a permutation such that, for all , we have and are associates.       is a UFD by the Fundamental Theorem of Arithmetic.   where is a field is a UFD. This is the case because is a Euclidean domain and Euclidean domains are UFD’s (we’ll prove this shortly).  We will eventually prove that if is a UFD then so is . It follows that is a UFD for all . Note that if , this ring is not a PID and hence not a Euclidean domain.      is not a PID hence also not a Euclidean domain. For , this can be seen because the ideal is not a principal ideal. It is a UFD because is a UFD (based on the result that if is a UFD then so is which we will prove shortly).     is a domain that is not a UFD.   Consider and each of are irreducible by a norm argument (exercise). Notice also that contains elements that are irreducible but not prime: is irreducible, by a norm argument. But it is not prime since but neither nor is in       If is a PID then is a UFD.      Assume is a PID is non zero and not a unit and are two different irreducible factorization of . Then and there is a permutation such that, for all , we have and are associates.    Without loss of generality, assume . We induct on .  If then as well since and would yield , a contradiction. If we have and there is nothing more to prove.  Assume and that irreducible factorizations with factors are unique up to reordering factors and taking associates.  Since is a PID, irreducible elements are prime by Theorem . Since we have that and since is a prime ideal it follows that for some . Upon reordering, we may as well assume . Thus for some . Since is irreducible and is not a unit, must be a unit. We get and hence, since is an integral domain, we may divide by to obtain Notice that is a prime ideal so is irreducible by Theorem .  By the inductive hypothesis we deduce that hence and also that are associates to in some order. This together with associate to establishes the claim.      Prove that in a UFD an element is irreducible if and only if the ideal [^1] is prime.  Prove that is not a UFD.       Let be a UFD.  First, suppose is irreducible, and consider the ideal . Let such that . Thus , so there exists some such that . As we are in a UFD the elements and all have unique (up to associates) factorizations of irreducible elements. Thus must be an associate of one of the irreducible elements in the factorization of or , and so or , making prime.  Now suppose that is prime and that for some . Thus and , so either or , as is a prime ideal. Assume without loss of generality that . Thus for some . Thus and As UFDs are integral domains we see , making a unit. Thus is irreducible.    First, notice that . Define a function Let and behold  Suppose by way of contradiction there exist such that . Then and , and Thus or , as these are the only integer divisors of . However, there do not exist integers such that this is true. Thus is irreducible in .  Suppose by way of contradiction that is prime in . Note that . Thus divides one of these factors.  First, suppose there exists some such that . Thus , and so . However, is not an integer, and thus cannot divide either of these factors. Thus is not prime in . By Part (a), this is not a UFD.       "
},
{
  "id": "def-ufd",
  "level": "2",
  "url": "subsec-ufds.html#def-ufd",
  "type": "Definition",
  "number": "4.29",
  "title": "",
  "body": "  A ring is called a unique factorization domain , or UFD for short, if is an integral domain and every element that is non-zero and not a unit can be written as a finite product of (not necessarily distinct) irreducible elements of in a way that is unique up to ordering and associates. That is, if also holds with each irreducible, then and there is a permutation such that, for all , we have and are associates.   "
},
{
  "id": "ex-ufd-exs",
  "level": "2",
  "url": "subsec-ufds.html#ex-ufd-exs",
  "type": "Example",
  "number": "4.30",
  "title": "",
  "body": "   is a UFD by the Fundamental Theorem of Arithmetic.   where is a field is a UFD. This is the case because is a Euclidean domain and Euclidean domains are UFD’s (we’ll prove this shortly).  We will eventually prove that if is a UFD then so is . It follows that is a UFD for all . Note that if , this ring is not a PID and hence not a Euclidean domain.   "
},
{
  "id": "ex-zx-not-a-pid",
  "level": "2",
  "url": "subsec-ufds.html#ex-zx-not-a-pid",
  "type": "Problem",
  "number": "4.31",
  "title": "",
  "body": "  is not a PID hence also not a Euclidean domain. For , this can be seen because the ideal is not a principal ideal. It is a UFD because is a UFD (based on the result that if is a UFD then so is which we will prove shortly).  "
},
{
  "id": "ex-zsqrt-5-not-a-ufd",
  "level": "2",
  "url": "subsec-ufds.html#ex-zsqrt-5-not-a-ufd",
  "type": "Problem",
  "number": "4.32",
  "title": "",
  "body": "  is a domain that is not a UFD.   Consider and each of are irreducible by a norm argument (exercise). Notice also that contains elements that are irreducible but not prime: is irreducible, by a norm argument. But it is not prime since but neither nor is in    "
},
{
  "id": "thm-pid-implies-ufd",
  "level": "2",
  "url": "subsec-ufds.html#thm-pid-implies-ufd",
  "type": "Theorem",
  "number": "4.33",
  "title": "",
  "body": "  If is a PID then is a UFD.   "
},
{
  "id": "thm-factorizations-permutations-and-associates",
  "level": "2",
  "url": "subsec-ufds.html#thm-factorizations-permutations-and-associates",
  "type": "Theorem",
  "number": "4.34",
  "title": "",
  "body": "  Assume is a PID is non zero and not a unit and are two different irreducible factorization of . Then and there is a permutation such that, for all , we have and are associates.    Without loss of generality, assume . We induct on .  If then as well since and would yield , a contradiction. If we have and there is nothing more to prove.  Assume and that irreducible factorizations with factors are unique up to reordering factors and taking associates.  Since is a PID, irreducible elements are prime by Theorem . Since we have that and since is a prime ideal it follows that for some . Upon reordering, we may as well assume . Thus for some . Since is irreducible and is not a unit, must be a unit. We get and hence, since is an integral domain, we may divide by to obtain Notice that is a prime ideal so is irreducible by Theorem .  By the inductive hypothesis we deduce that hence and also that are associates to in some order. This together with associate to establishes the claim.   "
},
{
  "id": "prime-in-ufd-zsqrt-5-not-ufd",
  "level": "2",
  "url": "subsec-ufds.html#prime-in-ufd-zsqrt-5-not-ufd",
  "type": "Problem",
  "number": "4.35",
  "title": "",
  "body": "  Prove that in a UFD an element is irreducible if and only if the ideal [^1] is prime.  Prove that is not a UFD.       Let be a UFD.  First, suppose is irreducible, and consider the ideal . Let such that . Thus , so there exists some such that . As we are in a UFD the elements and all have unique (up to associates) factorizations of irreducible elements. Thus must be an associate of one of the irreducible elements in the factorization of or , and so or , making prime.  Now suppose that is prime and that for some . Thus and , so either or , as is a prime ideal. Assume without loss of generality that . Thus for some . Thus and As UFDs are integral domains we see , making a unit. Thus is irreducible.    First, notice that . Define a function Let and behold  Suppose by way of contradiction there exist such that . Then and , and Thus or , as these are the only integer divisors of . However, there do not exist integers such that this is true. Thus is irreducible in .  Suppose by way of contradiction that is prime in . Note that . Thus divides one of these factors.  First, suppose there exists some such that . Thus , and so . However, is not an integer, and thus cannot divide either of these factors. Thus is not prime in . By Part (a), this is not a UFD.      "
},
{
  "id": "subsec-noeth",
  "level": "1",
  "url": "subsec-noeth.html",
  "type": "Section",
  "number": "4.4",
  "title": "Noetherian Domains",
  "body": " Noetherian Domains    Suppose is a commutative ring. Then is called a noetherian ring if satisfies the ascending chain condition on ideals - i.e., for every chain of ideals of  there exists a positive integer such that for all .      If is a PID then is noetherian.    Consider and ascending chain of ideals of ; it must have the form Consider which is an ideal of by the argument given in Theorem . Since is a PID, for some . Since , we must have for some . Then we see that for all , thus for and the chain stabilizes as desired.     Every field is noetherian.     If is a noetherian integral domain, then every non-zero, not-unit element factors into a finite product of irreducible elements.    Pick with and . If is irreducible, there is nothing to prove. Otherwise, we have for non-units . If both are irreducible, the proof is complete. Otherwise, one or both of them factors non-trivially. We may express this conveniently by saying that and such that either and are both non-units or and are both non-units. (E.g., if is irreducible, we could set .) Continuing in the this manner, we form a binary tree with at the top, one level down, one level below that, etc.  We halt the process of building the tree if at some stage all the leaves of the tree are irreducible elements, at which point we will have proven that factors in to a product of the irreducible elements given by these leaves.  We need to rule out the possibility that the process never terminates. If it never terminates, we will have built an infinite binary tree with the property that some route downward through the tree consists of an infinite list of irreducible elements such that for a non-unit and, for each , for a non-unit . Since is an integral domain, we have and for all . (E.g., if then and hence , so that , contrary to being a non-unit.)  But then we have arrived at an infinite ascending chain of ideals in , which is not possible in a Noetherian ring.    "
},
{
  "id": "def-noetherian-ring",
  "level": "2",
  "url": "subsec-noeth.html#def-noetherian-ring",
  "type": "Definition",
  "number": "4.36",
  "title": "",
  "body": "  Suppose is a commutative ring. Then is called a noetherian ring if satisfies the ascending chain condition on ideals - i.e., for every chain of ideals of  there exists a positive integer such that for all .   "
},
{
  "id": "lem-pids-are-noetherian",
  "level": "2",
  "url": "subsec-noeth.html#lem-pids-are-noetherian",
  "type": "Lemma",
  "number": "4.37",
  "title": "",
  "body": "  If is a PID then is noetherian.    Consider and ascending chain of ideals of ; it must have the form Consider which is an ideal of by the argument given in Theorem . Since is a PID, for some . Since , we must have for some . Then we see that for all , thus for and the chain stabilizes as desired.   "
},
{
  "id": "exe-fields-are-noetherian",
  "level": "2",
  "url": "subsec-noeth.html#exe-fields-are-noetherian",
  "type": "Problem",
  "number": "4.38",
  "title": "",
  "body": " Every field is noetherian.  "
},
{
  "id": "lem-factorization-in-noetherian-domains",
  "level": "2",
  "url": "subsec-noeth.html#lem-factorization-in-noetherian-domains",
  "type": "Lemma",
  "number": "4.39",
  "title": "",
  "body": "  If is a noetherian integral domain, then every non-zero, not-unit element factors into a finite product of irreducible elements.    Pick with and . If is irreducible, there is nothing to prove. Otherwise, we have for non-units . If both are irreducible, the proof is complete. Otherwise, one or both of them factors non-trivially. We may express this conveniently by saying that and such that either and are both non-units or and are both non-units. (E.g., if is irreducible, we could set .) Continuing in the this manner, we form a binary tree with at the top, one level down, one level below that, etc.  We halt the process of building the tree if at some stage all the leaves of the tree are irreducible elements, at which point we will have proven that factors in to a product of the irreducible elements given by these leaves.  We need to rule out the possibility that the process never terminates. If it never terminates, we will have built an infinite binary tree with the property that some route downward through the tree consists of an infinite list of irreducible elements such that for a non-unit and, for each , for a non-unit . Since is an integral domain, we have and for all . (E.g., if then and hence , so that , contrary to being a non-unit.)  But then we have arrived at an infinite ascending chain of ideals in , which is not possible in a Noetherian ring.   "
},
{
  "id": "sec-roots",
  "level": "1",
  "url": "sec-roots.html",
  "type": "Section",
  "number": "5.1",
  "title": "Roots of Unity",
  "body": " Roots of Unity    Fix a prime number , and let denote the abelian group of all complex roots of unity whose orders are powers of ; that is Prove the following statements.   Every non-trivial subgroup of contains the group of roots of unity.    Every proper subgroup of is cyclic.    If and are subgroups of , then either or .    For each there exists a unique subgroup of with elements.       Let be a non-trivial subgroup of . Then there exists some such that . Then yields a primitive root of unity, which can be used to generate the other roots as well. Thus contains the roots of unity.  Suppose is a proper subgroup of , meaning it is missing some root of unity. But the subgroup of those roots of unity is cyclic and is generated by every element, so that entire subgroup must be missing. But that subgroup can be generated with any primitive root of a higher power of , so must be finite and there must be some element of maximum order, which can be used to generate the whole group. Thus is cyclic.  Suppose and are subgroups of such that . Then is a proper subgroup of , making it finite as seen above. If there exists a higher power of in then it generates .  Let . Then the subgroup generated by the roots of unity have elements, and it is unique since it is generated by every such root.    "
},
{
  "id": "prop-",
  "level": "2",
  "url": "sec-roots.html#prop-",
  "type": "Proposition",
  "number": "5.1",
  "title": "",
  "body": "  Fix a prime number , and let denote the abelian group of all complex roots of unity whose orders are powers of ; that is Prove the following statements.   Every non-trivial subgroup of contains the group of roots of unity.    Every proper subgroup of is cyclic.    If and are subgroups of , then either or .    For each there exists a unique subgroup of with elements.       Let be a non-trivial subgroup of . Then there exists some such that . Then yields a primitive root of unity, which can be used to generate the other roots as well. Thus contains the roots of unity.  Suppose is a proper subgroup of , meaning it is missing some root of unity. But the subgroup of those roots of unity is cyclic and is generated by every element, so that entire subgroup must be missing. But that subgroup can be generated with any primitive root of a higher power of , so must be finite and there must be some element of maximum order, which can be used to generate the whole group. Thus is cyclic.  Suppose and are subgroups of such that . Then is a proper subgroup of , making it finite as seen above. If there exists a higher power of in then it generates .  Let . Then the subgroup generated by the roots of unity have elements, and it is unique since it is generated by every such root.   "
},
{
  "id": "sec-irrpoly",
  "level": "1",
  "url": "sec-irrpoly.html",
  "type": "Section",
  "number": "5.2",
  "title": "Irredicuble Polynomials",
  "body": " Irredicuble Polynomials    For an integral domain , a polynomial is called irreducible if is not a unit and whenever , either or is a unit. (It follows that such a also cannot be .)      Let be a field and .   If has degree one, it is irreducible.    If has a root and , then is not irreducible (since it factors as for some of degree at least ).    If , then is irreducible if and only if has no roots.    (Rational Root Test) If and all the coefficients of are integers and is a root of with , then divides and divides . More generally, the same holds with replaced by any PID and replaced by its field of fractions.        Never, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever try to use the converse of (2) or a version of (3) for polynomials of degree more than ; they are false.    Does have any roots? No. The only possible roots are and , and a careful check rules these out. Is irreducible? No, it factors as times      For a PID and [^1], define the of , written , to be the gcd of the coefficients of . Equivalently, is the generator of the principal ideal generated by the coefficients of .     Gauss’s Lemma: Part 1   Let [^1] where is a PID. Then [^2] (up to associates).    We first show the following special case: If and , then .  To see this, pick a prime and write for the result of modding out the coefficients of by . Then (since the map sending to is a ring map). Since , we have that and . Since is a domain, it follows that . This proves does not divide all of the coefficients of . Since was arbitrary, .  For the general case, let and where and . Note that and . By the case already proven, . It follows .     Gauss’s Lemma: Part 2   Let be a PID and let be its field of fractions, and assume [^1] is a non-constant polynomial with coefficients in . is irreducible in if and only if it is irreducible in and .    Suppose with . We can find an element of such that . (We can take to be the product of all the denominators of the coefficients of , for example; this is called “clearing denominators’’.) Similarly, there is an such that . Further, write where , , and and similarly where , , and . We have Using Gauss’s Lemma, Part 1, we have and hence We also have (since we’ve already proven that ).  So and thus by dividing we arrive at But is irreducible in . It follows that either or must be a unit in (i.e., a unit in ) and it follows that either or is a unit in . This proves is irreducible in .  ( ) Say irreducible in and . If with then, since is irreducible in , one of or must be a constant. But since , this constant must be .     Let’s prove is irreducible. By Gauss’s Lemma, we just need to show it is irreducible in .  If did factor in as a product of monic polynomials, then would also factor in this way. Now . This has no roots (the only possibilities are or ) and so if it did factor it would have to factor as a product of two quadratic, irreducible polynomials. The only such polynomial in is (the others all have roots). But . This proves is irreducible in and hence must be irreducible in .    Eisenstein’s Criterion   Let be a PID with field of fractions and assume [^1] is a polynomial. Suppose there is a prime element such that , [^2] for all , and . Then is irreducible in .    We have with and . Since does not divide the leading coefficient of , we have . It therefore follows that the three assumptions involving the coefficients of are also satisfied by the coefficients . Moreover, is irreducible in if and only if is irreducible in . We may therefore assume without loss of generality that .  By Gauss’s Lemma we just need to prove it is irreducible in . Suppose with , where and where and .  Upon modding out by we get The assumptions on give that with . Since is a domain, it follows that On the other hand, we also have and since , we have that or . So or . This can only occur if or .  We have shown that if factors in as , then at least one of of must be a constant polynomial. Since , this factor must be a unit. So is irreducible in .     For instance, is irreducible in thanks to Eisenstein applied with . (Note that it isn’t irreducible in since it does not have unit content.)     For any prime , the -th cyclotomic polynomial  is irreducible in [^1].    Consider the ring isomorphism given by . I claim that To see this, we note that and by the binomial theorem we have Since , the claim follows.  By Eisenstein, is irreducible in and, since is an isomorphism, it follows that is irreducible in .      Assume is an integral domain and is a monic polynomial with coefficients in . If there is a prime element such that is irreducible in , then is irreducible in .    We prove the contra-positive. Suppose is reducible in . Then we have for some monic, non-constant polynomials and in . It follows that holds in . But since and are monic, non-constant polynomials, and are both non-constant polynomials in and hence is reducible in .     The assumption that be monic in this Proposition is necessary. Consider for instance . Modding out by yields a linear polynomial in which is thus irreducible. But clearly isn’t irreducible in . (The Proposition can be generalized to non-monic polynomials by adding the assumption that does not divided the leading coefficient of .)     Let be a field and a finite subgroup of the multiplicative group . Prove that is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the [[Mathematics\/Number Theory\/Results\/Lemma – Factor Theorem|Factor Theorem]] there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian[^2] every Sylow -subgroup of is normal,[^3] and thus there is only one of each[^4]. This means that can be written as a direct product of cyclic groups of relatively prime order;[^5] Hence is itself cyclic.      Let and and recall (from 817) that is a PID and is its field of fractions.   Prove is irreducible in .    Prove is irreducible in but is reducible in .       Let and .  Suppose by way of contradiction that is not prime in . Thus , with non-units and where and , for . Thus . As , we see that . Note that the possible factorizations of 49 in are and .  However, if then , making it a unit. So and thus . As , either or . But then either or , and as , we have a contradiction. Thus is prime in . Using Eisenstein’s Criterion with , we see that is irreducible in .  Using Eisenstein’s Criterion with , we see that is irreducible in . However, in observe that As neither nor are units in (as has no inverse), we see that is reducible in .      Show that is irreducible.        Let be a field and [^1] be irreducible. Prove the [^2] is a field.  Give an explicit construction (with justification) of a field of size . (You may use without proof that the unique irreducible quadratic in is       Let be a field and be irreducible. Thus is prime[^3], making a prime ideal in [^4] and a domain[^5]. Suppose that there existed a proper ideal such that . However, as is a field we know that is a PID[^6], meaning for some [^7]. If then [^8], meaning that . Thus is a maximal ideal and we have a field[^9].  Let . Let . Suppose with irreducible. Thus either both and have degree or one of them has degree . As , we see that without loss of generality . Then or , but neither divide . Thus is irreducible, making a field, the elements of which are: 1. 0 2. 1 3. 4. 5. 6. 7. 8. 9. 10. 11. 12. 13. 14. 15. 16. , making it a field of order .      Let be a field and a finite subgroup of the multiplicative group . Prove that is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the [[Mathematics\/Number Theory\/Results\/Lemma – Factor Theorem|Factor Theorem]] there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian[^2] every Sylow -subgroup of is normal,[^3] and thus there is only one of each[^4]. This means that can be written as a direct product of cyclic groups of relatively prime order;[^5] Hence is itself cyclic.[^6]      Let be a field and its group of units.   Prove that any finite subgroup of is cyclic.  Suppose that is algebraically closed that has characteristic . For any positive integer , prove that has a subgroup of order if and only if does not divide .     Let be a field and its group of units.  Let be a finite subgroup of . Let .  Let be the LCM of all orders of elements in . Then and thus is a root of the polynomial for all . By Lagrange’s Theorem every element divides , and so we have . However, by the Factor Theorem the polynomial can have at most roots, and we have distinct elements, and thus we have . Thus there must exist an element of order in , making cyclic, as desired.  Let and suppose that has characteristic and is algebraically closed.  First, suppose by way of contradiction that has a subgroup of order , , and . From Part (a) is cyclic and generated by some such that . However, as we see that , given that we are in an additive group. This contradicts the fact that is the smallest number such that .  Now we proceed via the contrapositive. Suppose does not have a subgroup of order . Then there cannot exist a unit such that . Consider the polynomial . As is algebraically closed there exists some root . (how do we know this isn’t 1???) Notice that this means and so is a unit in . As cannot have order , it must have an order that divides . We also know that as we are in a field of characteristic . Thus either divides or is . Either there is a non-identity root of . Note that in this case as we are...    "
},
{
  "id": "def-irreducible-polynomial",
  "level": "2",
  "url": "sec-irrpoly.html#def-irreducible-polynomial",
  "type": "Definition",
  "number": "5.2",
  "title": "",
  "body": "  For an integral domain , a polynomial is called irreducible if is not a unit and whenever , either or is a unit. (It follows that such a also cannot be .)   "
},
{
  "id": "thm-degree-and-irreducibility",
  "level": "2",
  "url": "sec-irrpoly.html#thm-degree-and-irreducibility",
  "type": "Theorem",
  "number": "5.3",
  "title": "",
  "body": "  Let be a field and .   If has degree one, it is irreducible.    If has a root and , then is not irreducible (since it factors as for some of degree at least ).    If , then is irreducible if and only if has no roots.    (Rational Root Test) If and all the coefficients of are integers and is a root of with , then divides and divides . More generally, the same holds with replaced by any PID and replaced by its field of fractions.      "
},
{
  "id": "remark-24",
  "level": "2",
  "url": "sec-irrpoly.html#remark-24",
  "type": "Remark",
  "number": "5.4",
  "title": "",
  "body": " Never, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever try to use the converse of (2) or a version of (3) for polynomials of degree more than ; they are false.  "
},
{
  "id": "ex-does-it-have-roots",
  "level": "2",
  "url": "sec-irrpoly.html#ex-does-it-have-roots",
  "type": "Example",
  "number": "5.5",
  "title": "",
  "body": " Does have any roots? No. The only possible roots are and , and a careful check rules these out. Is irreducible? No, it factors as times   "
},
{
  "id": "def-content",
  "level": "2",
  "url": "sec-irrpoly.html#def-content",
  "type": "Definition",
  "number": "5.6",
  "title": "",
  "body": "  For a PID and [^1], define the of , written , to be the gcd of the coefficients of . Equivalently, is the generator of the principal ideal generated by the coefficients of .   "
},
{
  "id": "thm-gausss-lemma-part-1",
  "level": "2",
  "url": "sec-irrpoly.html#thm-gausss-lemma-part-1",
  "type": "Theorem",
  "number": "5.7",
  "title": "Gauss’s Lemma: Part 1.",
  "body": " Gauss’s Lemma: Part 1   Let [^1] where is a PID. Then [^2] (up to associates).    We first show the following special case: If and , then .  To see this, pick a prime and write for the result of modding out the coefficients of by . Then (since the map sending to is a ring map). Since , we have that and . Since is a domain, it follows that . This proves does not divide all of the coefficients of . Since was arbitrary, .  For the general case, let and where and . Note that and . By the case already proven, . It follows .   "
},
{
  "id": "thm-gausss-lemma-part-2",
  "level": "2",
  "url": "sec-irrpoly.html#thm-gausss-lemma-part-2",
  "type": "Theorem",
  "number": "5.8",
  "title": "Gauss’s Lemma: Part 2.",
  "body": " Gauss’s Lemma: Part 2   Let be a PID and let be its field of fractions, and assume [^1] is a non-constant polynomial with coefficients in . is irreducible in if and only if it is irreducible in and .    Suppose with . We can find an element of such that . (We can take to be the product of all the denominators of the coefficients of , for example; this is called “clearing denominators’’.) Similarly, there is an such that . Further, write where , , and and similarly where , , and . We have Using Gauss’s Lemma, Part 1, we have and hence We also have (since we’ve already proven that ).  So and thus by dividing we arrive at But is irreducible in . It follows that either or must be a unit in (i.e., a unit in ) and it follows that either or is a unit in . This proves is irreducible in .  ( ) Say irreducible in and . If with then, since is irreducible in , one of or must be a constant. But since , this constant must be .   "
},
{
  "id": "ex-irreducibility-and-gauss",
  "level": "2",
  "url": "sec-irrpoly.html#ex-irreducibility-and-gauss",
  "type": "Example",
  "number": "5.9",
  "title": "",
  "body": " Let’s prove is irreducible. By Gauss’s Lemma, we just need to show it is irreducible in .  If did factor in as a product of monic polynomials, then would also factor in this way. Now . This has no roots (the only possibilities are or ) and so if it did factor it would have to factor as a product of two quadratic, irreducible polynomials. The only such polynomial in is (the others all have roots). But . This proves is irreducible in and hence must be irreducible in .  "
},
{
  "id": "thm-eisensteins-criterion",
  "level": "2",
  "url": "sec-irrpoly.html#thm-eisensteins-criterion",
  "type": "Theorem",
  "number": "5.10",
  "title": "Eisenstein’s Criterion.",
  "body": " Eisenstein’s Criterion   Let be a PID with field of fractions and assume [^1] is a polynomial. Suppose there is a prime element such that , [^2] for all , and . Then is irreducible in .    We have with and . Since does not divide the leading coefficient of , we have . It therefore follows that the three assumptions involving the coefficients of are also satisfied by the coefficients . Moreover, is irreducible in if and only if is irreducible in . We may therefore assume without loss of generality that .  By Gauss’s Lemma we just need to prove it is irreducible in . Suppose with , where and where and .  Upon modding out by we get The assumptions on give that with . Since is a domain, it follows that On the other hand, we also have and since , we have that or . So or . This can only occur if or .  We have shown that if factors in as , then at least one of of must be a constant polynomial. Since , this factor must be a unit. So is irreducible in .   "
},
{
  "id": "ex-using-eisenstein",
  "level": "2",
  "url": "sec-irrpoly.html#ex-using-eisenstein",
  "type": "Example",
  "number": "5.11",
  "title": "",
  "body": " For instance, is irreducible in thanks to Eisenstein applied with . (Note that it isn’t irreducible in since it does not have unit content.)  "
},
{
  "id": "prop-cyclotomic-polynomial-irreducible",
  "level": "2",
  "url": "sec-irrpoly.html#prop-cyclotomic-polynomial-irreducible",
  "type": "Proposition",
  "number": "5.12",
  "title": "",
  "body": "  For any prime , the -th cyclotomic polynomial  is irreducible in [^1].    Consider the ring isomorphism given by . I claim that To see this, we note that and by the binomial theorem we have Since , the claim follows.  By Eisenstein, is irreducible in and, since is an isomorphism, it follows that is irreducible in .   "
},
{
  "id": "prop-primes-and-irreducibility",
  "level": "2",
  "url": "sec-irrpoly.html#prop-primes-and-irreducibility",
  "type": "Proposition",
  "number": "5.13",
  "title": "",
  "body": "  Assume is an integral domain and is a monic polynomial with coefficients in . If there is a prime element such that is irreducible in , then is irreducible in .    We prove the contra-positive. Suppose is reducible in . Then we have for some monic, non-constant polynomials and in . It follows that holds in . But since and are monic, non-constant polynomials, and are both non-constant polynomials in and hence is reducible in .   "
},
{
  "id": "ex-monic-is-necessary",
  "level": "2",
  "url": "sec-irrpoly.html#ex-monic-is-necessary",
  "type": "Example",
  "number": "5.14",
  "title": "",
  "body": " The assumption that be monic in this Proposition is necessary. Consider for instance . Modding out by yields a linear polynomial in which is thus irreducible. But clearly isn’t irreducible in . (The Proposition can be generalized to non-monic polynomials by adding the assumption that does not divided the leading coefficient of .)  "
},
{
  "id": "prop-fields-and-group-of-units",
  "level": "2",
  "url": "sec-irrpoly.html#prop-fields-and-group-of-units",
  "type": "Proposition",
  "number": "5.15",
  "title": "",
  "body": "  Let be a field and a finite subgroup of the multiplicative group . Prove that is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the [[Mathematics\/Number Theory\/Results\/Lemma – Factor Theorem|Factor Theorem]] there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian[^2] every Sylow -subgroup of is normal,[^3] and thus there is only one of each[^4]. This means that can be written as a direct product of cyclic groups of relatively prime order;[^5] Hence is itself cyclic.   "
},
{
  "id": "prop-gaussian-irreducible",
  "level": "2",
  "url": "sec-irrpoly.html#prop-gaussian-irreducible",
  "type": "Proposition",
  "number": "5.16",
  "title": "",
  "body": "  Let and and recall (from 817) that is a PID and is its field of fractions.   Prove is irreducible in .    Prove is irreducible in but is reducible in .       Let and .  Suppose by way of contradiction that is not prime in . Thus , with non-units and where and , for . Thus . As , we see that . Note that the possible factorizations of 49 in are and .  However, if then , making it a unit. So and thus . As , either or . But then either or , and as , we have a contradiction. Thus is prime in . Using Eisenstein’s Criterion with , we see that is irreducible in .  Using Eisenstein’s Criterion with , we see that is irreducible in . However, in observe that As neither nor are units in (as has no inverse), we see that is reducible in .   "
},
{
  "id": "prop-irreducible-poly",
  "level": "2",
  "url": "sec-irrpoly.html#prop-irreducible-poly",
  "type": "Proposition",
  "number": "5.17",
  "title": "",
  "body": "  Show that is irreducible.   "
},
{
  "id": "prop-construct-field-of-size-16",
  "level": "2",
  "url": "sec-irrpoly.html#prop-construct-field-of-size-16",
  "type": "Proposition",
  "number": "5.18",
  "title": "",
  "body": "    Let be a field and [^1] be irreducible. Prove the [^2] is a field.  Give an explicit construction (with justification) of a field of size . (You may use without proof that the unique irreducible quadratic in is       Let be a field and be irreducible. Thus is prime[^3], making a prime ideal in [^4] and a domain[^5]. Suppose that there existed a proper ideal such that . However, as is a field we know that is a PID[^6], meaning for some [^7]. If then [^8], meaning that . Thus is a maximal ideal and we have a field[^9].  Let . Let . Suppose with irreducible. Thus either both and have degree or one of them has degree . As , we see that without loss of generality . Then or , but neither divide . Thus is irreducible, making a field, the elements of which are: 1. 0 2. 1 3. 4. 5. 6. 7. 8. 9. 10. 11. 12. 13. 14. 15. 16. , making it a field of order .   "
},
{
  "id": "prop-fields-and-group-of-units-1",
  "level": "2",
  "url": "sec-irrpoly.html#prop-fields-and-group-of-units-1",
  "type": "Proposition",
  "number": "5.19",
  "title": "",
  "body": "  Let be a field and a finite subgroup of the multiplicative group . Prove that is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the [[Mathematics\/Number Theory\/Results\/Lemma – Factor Theorem|Factor Theorem]] there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian[^2] every Sylow -subgroup of is normal,[^3] and thus there is only one of each[^4]. This means that can be written as a direct product of cyclic groups of relatively prime order;[^5] Hence is itself cyclic.[^6]   "
},
{
  "id": "prop-fields-and-group-of-units-2",
  "level": "2",
  "url": "sec-irrpoly.html#prop-fields-and-group-of-units-2",
  "type": "Proposition",
  "number": "5.20",
  "title": "",
  "body": "  Let be a field and its group of units.   Prove that any finite subgroup of is cyclic.  Suppose that is algebraically closed that has characteristic . For any positive integer , prove that has a subgroup of order if and only if does not divide .     Let be a field and its group of units.  Let be a finite subgroup of . Let .  Let be the LCM of all orders of elements in . Then and thus is a root of the polynomial for all . By Lagrange’s Theorem every element divides , and so we have . However, by the Factor Theorem the polynomial can have at most roots, and we have distinct elements, and thus we have . Thus there must exist an element of order in , making cyclic, as desired.  Let and suppose that has characteristic and is algebraically closed.  First, suppose by way of contradiction that has a subgroup of order , , and . From Part (a) is cyclic and generated by some such that . However, as we see that , given that we are in an additive group. This contradicts the fact that is the smallest number such that .  Now we proceed via the contrapositive. Suppose does not have a subgroup of order . Then there cannot exist a unit such that . Consider the polynomial . As is algebraically closed there exists some root . (how do we know this isn’t 1???) Notice that this means and so is a unit in . As cannot have order , it must have an order that divides . We also know that as we are in a field of characteristic . Thus either divides or is . Either there is a non-identity root of . Note that in this case as we are...   "
},
{
  "id": "sec-gpring",
  "level": "1",
  "url": "sec-gpring.html",
  "type": "Section",
  "number": "6.1",
  "title": "Group Rings",
  "body": " Group Rings  "
},
{
  "id": "sec-defmod",
  "level": "1",
  "url": "sec-defmod.html",
  "type": "Section",
  "number": "1.1",
  "title": "Module Basics",
  "body": " Module Basics  "
},
{
  "id": "sec-modhom",
  "level": "1",
  "url": "sec-modhom.html",
  "type": "Section",
  "number": "1.2",
  "title": "Module Homomorphisms",
  "body": " Module Homomorphisms  "
},
{
  "id": "sec-quote",
  "level": "1",
  "url": "sec-quote.html",
  "type": "Section",
  "number": "1.3",
  "title": "Quotient Modules",
  "body": " Quotient Modules  "
},
{
  "id": "sec-linear",
  "level": "1",
  "url": "sec-linear.html",
  "type": "Section",
  "number": "2.1",
  "title": "Linear Independence",
  "body": " Linear Independence  "
},
{
  "id": "sec-modgen",
  "level": "1",
  "url": "sec-modgen.html",
  "type": "Section",
  "number": "2.2",
  "title": "Generated Modules",
  "body": " Generated Modules  "
},
{
  "id": "sec-bases",
  "level": "1",
  "url": "sec-bases.html",
  "type": "Section",
  "number": "2.3",
  "title": "Bases",
  "body": " Bases  "
},
{
  "id": "sec-vecbasis",
  "level": "1",
  "url": "sec-vecbasis.html",
  "type": "Section",
  "number": "3.1",
  "title": "Existence of Bases",
  "body": " Existence of Bases  "
},
{
  "id": "sec-ranknul",
  "level": "1",
  "url": "sec-ranknul.html",
  "type": "Section",
  "number": "3.2",
  "title": "Rank-Nullity",
  "body": " Rank-Nullity  "
},
{
  "id": "sec-basics",
  "level": "1",
  "url": "sec-basics.html",
  "type": "Section",
  "number": "4.1",
  "title": "Basics",
  "body": " Basics  "
},
{
  "id": "sec-cob",
  "level": "1",
  "url": "sec-cob.html",
  "type": "Section",
  "number": "4.2",
  "title": "Change of Basis",
  "body": " Change of Basis  "
},
{
  "id": "sec-elematix",
  "level": "1",
  "url": "sec-elematix.html",
  "type": "Section",
  "number": "4.3",
  "title": "Elementary Matrices",
  "body": " Elementary Matrices  "
},
{
  "id": "sec-operator",
  "level": "1",
  "url": "sec-operator.html",
  "type": "Section",
  "number": "4.4",
  "title": "Linear Operators on Free Modules",
  "body": " Linear Operators on Free Modules  "
},
{
  "id": "sec-det",
  "level": "1",
  "url": "sec-det.html",
  "type": "Section",
  "number": "4.5",
  "title": "Determinants",
  "body": " Determinants  "
},
{
  "id": "sec-modpres",
  "level": "1",
  "url": "sec-modpres.html",
  "type": "Section",
  "number": "5.1",
  "title": "Finitely Presented Modules",
  "body": " Finitely Presented Modules  "
},
{
  "id": "sec-snf",
  "level": "1",
  "url": "sec-snf.html",
  "type": "Section",
  "number": "5.2",
  "title": "Smith Normal Form",
  "body": " Smith Normal Form  "
},
{
  "id": "sec-modclass",
  "level": "1",
  "url": "sec-modclass.html",
  "type": "Section",
  "number": "5.3",
  "title": "Classifications",
  "body": " Classifications  "
},
{
  "id": "sec-modpoly",
  "level": "1",
  "url": "sec-modpoly.html",
  "type": "Section",
  "number": "6.1",
  "title": "Modules over Polynomial Rings",
  "body": " Modules over Polynomial Rings  "
},
{
  "id": "sec-rcf",
  "level": "1",
  "url": "sec-rcf.html",
  "type": "Section",
  "number": "6.2",
  "title": "Rational Canonical Form",
  "body": " Rational Canonical Form  "
},
{
  "id": "sec-jcf",
  "level": "1",
  "url": "sec-jcf.html",
  "type": "Section",
  "number": "6.3",
  "title": "Jordan Canonical Form",
  "body": " Jordan Canonical Form  "
},
{
  "id": "field-extension-basics",
  "level": "1",
  "url": "field-extension-basics.html",
  "type": "Section",
  "number": "1.1",
  "title": "Field Extension Basics",
  "body": " Field Extension Basics    A field extension is an inclusion of one field into a larger field , making into a subfield of . We will write either or to signify that is a field extension of .     So a field extension is just another name for a subfield, but the emphasis is different. We think of as coming first and later.    Recall that if and are fields, then every ring homomorphism necessarily injective. (Proof: since , is a proper ideal of , and since is a field, the only proper ideal of it is .) Thus maps isomorphically onto its image and is a field extension. By abuse of notation we will typically think of as being a field extension, even though it is technically just an injective homomorphism of fields.     and are basic examples of field extensions.  Recall that is a field. So is another example of a field extension.    The latter is a typical sort of example for us: Starting with , we would like to adjoin a root of the irreducible (in ) polynomial . Doing so yields .  The previous example was a quadratic extension, which is misleadingly simple.    Consider . It is irreducible (e.g., by Eisenstein) and has roots , and in . So there are three ways in which we could “adjoin a root\" to : First we could form the field It is not completely obvious this is a field, but we'll prove it latter. The reason that we don't need third or higher powers is that, e.g., . Or we could instead form the field or the field . There are clearly not all equal since, for example, but is not in . However, they are {} field extensions as we will prove below.     Given a field extension and an element , set Then is a subring of and in fact it is the smallest subring of that contains and We define to be the field of fractions of ; that is, So, is a subfield of and it is the smallest subfield of that contains and .      If is a field extension and , show, using only the definition of , that      Note that, in the context of this definition, we have , with each inclusion being a subring inclusion. and are all fields and in general is only a ring. But, in some cases we have (and hence it is a field). Indeed, this occurs whenever is the root of some polynomial with coefficients in .    Take and . Then any expression of the form with is equal to one of the form for . If , then with and both in . This proves that and in particular that is a field.     is not a field (and so in particular it is not equal to since, for example, . (If it were, then we would have for some , and hence , which would imply is the root of a polynomial with rational coefficients. This is known to be not true.)     The degree of a field extension is      We have that and . (We could in fact say is the cardinality of , but in general we lump all infinite field extensions together when talking about degree.) We have where .     Assume is a field and is an irreducible polynomial. Set , and for , let denote the coset . The following hold:    is a field extension via the map given by for . (This is technically an injective homomorphisms of fields.)     .     has a root in ; in fact, the element is a root of this polynomial: .       Because is irreducible and is a PID, is a maximal ideal . Thus is a field . The map given by is a ring map since it is the composition of the two ring maps  . Since it is a ring map between two fields, it is injective .  The equality holds since is a basis for regarded as an -vector space, as we have seen before .  The last assertion is tricky only because the notation is confusing. Say and just to keep things straight let's set . We need to show : We have      The last part of the proposition is notationally confusing to prove in general but clear in examples. So let's do a simple one: Say and . Then . The assertion is that is a root of the polynomial viewed as having coefficients in . In other words, this element has the property that its square is . Let's check: Since and we have . Indeed, there is a field isomorphism sending to and more generally to      A field extension is called simple if for some (typically, non-unique) element of .      primitive element goes here lol      is a primitive element of the extension . So is and, more generally, for any with .     If is a field extension and is any subset of , we write for the smallest subfield of that contains all of and and it is called the subfield generated by over . Since the intersection of any two subfields of is again a subfield, exists and is where  fix Nearly always will be a finite set, , and we write for .  In this case, we have      Regard as a subfield of and let . We may also describe as where we set .  I claim that is in fact a simple extension of . For example, say . I claim that . Note that and So , and hence . Likewise, So . This example is an illustration of the Primitive Element Theorem (which we might or might not have time to prove this semester): Every finite extension of is generated by a single element (or, in other words, is simple). This example shows is simple and is a primitive element of this field extension.     Let p be a prime number, let be the field with elements, and let be a positive integer. Prove that , where, for a positive divisor of , denotes the product of all monic irreducible polynomials of degree in . (You may assume basic results on the structure of finite fields and their subfields.)      Suppose and are subfields of a field extension with and both finite. Let be the subfield of K generated by and .   Show that     Prove that equality holds when and are relatively prime.    Prove there are two subfields of , and , neither contained in the other, so that the inequality in part (a) is strict.       "
},
{
  "id": "def-field-extension",
  "level": "2",
  "url": "field-extension-basics.html#def-field-extension",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": "  A field extension is an inclusion of one field into a larger field , making into a subfield of . We will write either or to signify that is a field extension of .   "
},
{
  "id": "remark-25",
  "level": "2",
  "url": "field-extension-basics.html#remark-25",
  "type": "Remark",
  "number": "1.2",
  "title": "",
  "body": " So a field extension is just another name for a subfield, but the emphasis is different. We think of as coming first and later.  "
},
{
  "id": "remark-26",
  "level": "2",
  "url": "field-extension-basics.html#remark-26",
  "type": "Remark",
  "number": "1.3",
  "title": "",
  "body": " Recall that if and are fields, then every ring homomorphism necessarily injective. (Proof: since , is a proper ideal of , and since is a field, the only proper ideal of it is .) Thus maps isomorphically onto its image and is a field extension. By abuse of notation we will typically think of as being a field extension, even though it is technically just an injective homomorphism of fields.  "
},
{
  "id": "exe-classic-field-extensions",
  "level": "2",
  "url": "field-extension-basics.html#exe-classic-field-extensions",
  "type": "Example",
  "number": "1.4",
  "title": "",
  "body": "  and are basic examples of field extensions.  Recall that is a field. So is another example of a field extension.  "
},
{
  "id": "remark-27",
  "level": "2",
  "url": "field-extension-basics.html#remark-27",
  "type": "Remark",
  "number": "1.5",
  "title": "",
  "body": " The latter is a typical sort of example for us: Starting with , we would like to adjoin a root of the irreducible (in ) polynomial . Doing so yields .  The previous example was a quadratic extension, which is misleadingly simple.  "
},
{
  "id": "exe-more-field-extensions",
  "level": "2",
  "url": "field-extension-basics.html#exe-more-field-extensions",
  "type": "Example",
  "number": "1.6",
  "title": "",
  "body": " Consider . It is irreducible (e.g., by Eisenstein) and has roots , and in . So there are three ways in which we could “adjoin a root\" to : First we could form the field It is not completely obvious this is a field, but we'll prove it latter. The reason that we don't need third or higher powers is that, e.g., . Or we could instead form the field or the field . There are clearly not all equal since, for example, but is not in . However, they are {} field extensions as we will prove below.  "
},
{
  "id": "def-field-extension-element",
  "level": "2",
  "url": "field-extension-basics.html#def-field-extension-element",
  "type": "Definition",
  "number": "1.7",
  "title": "",
  "body": "  Given a field extension and an element , set Then is a subring of and in fact it is the smallest subring of that contains and We define to be the field of fractions of ; that is, So, is a subfield of and it is the smallest subfield of that contains and .   "
},
{
  "id": "prop-hwk1",
  "level": "2",
  "url": "field-extension-basics.html#prop-hwk1",
  "type": "Proposition",
  "number": "1.8",
  "title": "",
  "body": "  If is a field extension and , show, using only the definition of , that    "
},
{
  "id": "remark-28",
  "level": "2",
  "url": "field-extension-basics.html#remark-28",
  "type": "Remark",
  "number": "1.9",
  "title": "",
  "body": " Note that, in the context of this definition, we have , with each inclusion being a subring inclusion. and are all fields and in general is only a ring. But, in some cases we have (and hence it is a field). Indeed, this occurs whenever is the root of some polynomial with coefficients in .  "
},
{
  "id": "exe-qsqrt2",
  "level": "2",
  "url": "field-extension-basics.html#exe-qsqrt2",
  "type": "Example",
  "number": "1.10",
  "title": "",
  "body": " Take and . Then any expression of the form with is equal to one of the form for . If , then with and both in . This proves that and in particular that is a field.  "
},
{
  "id": "exe-qpi",
  "level": "2",
  "url": "field-extension-basics.html#exe-qpi",
  "type": "Example",
  "number": "1.11",
  "title": "",
  "body": "  is not a field (and so in particular it is not equal to since, for example, . (If it were, then we would have for some , and hence , which would imply is the root of a polynomial with rational coefficients. This is known to be not true.)  "
},
{
  "id": "def-degree-field-extension",
  "level": "2",
  "url": "field-extension-basics.html#def-degree-field-extension",
  "type": "Definition",
  "number": "1.12",
  "title": "",
  "body": "  The degree of a field extension is    "
},
{
  "id": "exe-degrees-of-common-extensions",
  "level": "2",
  "url": "field-extension-basics.html#exe-degrees-of-common-extensions",
  "type": "Example",
  "number": "1.13",
  "title": "",
  "body": " We have that and . (We could in fact say is the cardinality of , but in general we lump all infinite field extensions together when talking about degree.) We have where .  "
},
{
  "id": "prop-properties-of-extension-degrees",
  "level": "2",
  "url": "field-extension-basics.html#prop-properties-of-extension-degrees",
  "type": "Proposition",
  "number": "1.14",
  "title": "",
  "body": "  Assume is a field and is an irreducible polynomial. Set , and for , let denote the coset . The following hold:    is a field extension via the map given by for . (This is technically an injective homomorphisms of fields.)     .     has a root in ; in fact, the element is a root of this polynomial: .       Because is irreducible and is a PID, is a maximal ideal . Thus is a field . The map given by is a ring map since it is the composition of the two ring maps  . Since it is a ring map between two fields, it is injective .  The equality holds since is a basis for regarded as an -vector space, as we have seen before .  The last assertion is tricky only because the notation is confusing. Say and just to keep things straight let's set . We need to show : We have    "
},
{
  "id": "exe-rxx21",
  "level": "2",
  "url": "field-extension-basics.html#exe-rxx21",
  "type": "Example",
  "number": "1.15",
  "title": "",
  "body": " The last part of the proposition is notationally confusing to prove in general but clear in examples. So let's do a simple one: Say and . Then . The assertion is that is a root of the polynomial viewed as having coefficients in . In other words, this element has the property that its square is . Let's check: Since and we have . Indeed, there is a field isomorphism sending to and more generally to   "
},
{
  "id": "def-simple-extension",
  "level": "2",
  "url": "field-extension-basics.html#def-simple-extension",
  "type": "Definition",
  "number": "1.16",
  "title": "",
  "body": "  A field extension is called simple if for some (typically, non-unique) element of .   "
},
{
  "id": "def-primitive-element",
  "level": "2",
  "url": "field-extension-basics.html#def-primitive-element",
  "type": "Definition",
  "number": "1.17",
  "title": "",
  "body": "  primitive element goes here lol   "
},
{
  "id": "exe-sqrt2-primitive",
  "level": "2",
  "url": "field-extension-basics.html#exe-sqrt2-primitive",
  "type": "Example",
  "number": "1.18",
  "title": "",
  "body": "  is a primitive element of the extension . So is and, more generally, for any with .  "
},
{
  "id": "def-generated-subfield",
  "level": "2",
  "url": "field-extension-basics.html#def-generated-subfield",
  "type": "Definition",
  "number": "1.19",
  "title": "",
  "body": "  If is a field extension and is any subset of , we write for the smallest subfield of that contains all of and and it is called the subfield generated by over . Since the intersection of any two subfields of is again a subfield, exists and is where  fix Nearly always will be a finite set, , and we write for .  In this case, we have    "
},
{
  "id": "exe-qsqrt2sqrt3",
  "level": "2",
  "url": "field-extension-basics.html#exe-qsqrt2sqrt3",
  "type": "Example",
  "number": "1.20",
  "title": "",
  "body": " Regard as a subfield of and let . We may also describe as where we set .  I claim that is in fact a simple extension of . For example, say . I claim that . Note that and So , and hence . Likewise, So . This example is an illustration of the Primitive Element Theorem (which we might or might not have time to prove this semester): Every finite extension of is generated by a single element (or, in other words, is simple). This example shows is simple and is a primitive element of this field extension.  "
},
{
  "id": "prop-qual1",
  "level": "2",
  "url": "field-extension-basics.html#prop-qual1",
  "type": "Proposition",
  "number": "1.21",
  "title": "",
  "body": "  Let p be a prime number, let be the field with elements, and let be a positive integer. Prove that , where, for a positive divisor of , denotes the product of all monic irreducible polynomials of degree in . (You may assume basic results on the structure of finite fields and their subfields.)   "
},
{
  "id": "prop-qual2",
  "level": "2",
  "url": "field-extension-basics.html#prop-qual2",
  "type": "Proposition",
  "number": "1.22",
  "title": "",
  "body": "  Suppose and are subfields of a field extension with and both finite. Let be the subfield of K generated by and .   Show that     Prove that equality holds when and are relatively prime.    Prove there are two subfields of , and , neither contained in the other, so that the inequality in part (a) is strict.      "
},
{
  "id": "sec-algebraic",
  "level": "1",
  "url": "sec-algebraic.html",
  "type": "Section",
  "number": "1.2",
  "title": "Algebraic Extensions",
  "body": " Algebraic Extensions    For a field extension and , we say is algebraic over if for some non-zero polynomial . Otherwise, is transcendental over .      is algebraic over . Indeed, every element of is algebraic over . (E.g., is a root of .) ia algebraic over . So is for any . The numbers and of are transcendental over ; these are deep facts.     Suppose is a field extension and . Define a subset of .   The subset is an ideal of .   if and only if is transcendental over ; so if and only if is algebraic over .  Assume is algebraic over .  The unique monic generator of , which we will write as , is irreducible (and hence is a prime ideal).  There is a unique isomorphism of fields sending identically to and sending to .   and in particular is a field.     is algebraic over if and only if . In this case,[^5]    is transcendental over if and only if . In this case, there is a unique isomorphism of fields sending identically to and sending to . (Here, is the field of fractions of .)     All parts use the following construction:  Let be the evaluation homomorphism, given by sending to  . Note that satisfies and . We have by definition of the latter. The First Isomorphism Theorem for rings thus gives that induces a ring isomorphism given by . In particular, since is a subring of , it is an integral domain, and hence must be a prime ideal (possibly the ideal).   Let us now prove the various parts:    holds because is the kernel of the ring map .    is by definition.    For (3) assume is algebraic. Then and hence it has a unique monic generator, which we write . Since is prime, is irreducible ; this proves (3a). Also, this shows that is a field and hence so is . Since , contains and , and is a field, we must have . This proves (3b) and (3c).  For (4), if is algebraic over , then by (3b) and Proposition . For the converse, if , then the infinite list of elements of cannot be -linearly independent . So, for some and some not all of which are . This shows is the root of a non-zero polynomial.  For (5), if is transcendental, then and so is injective. Since is a field, is a domain , and is injective , it can be extended to the field of fractions of , i.e. there is a ring homomorphism given by for all with . The image of is precisely . The map is injective since it is a ring homomorphism whose source is a field.       If is algebraic over the subfield , the unique monic generator of the ideal in the previous theorem, written , is called the minimum polynomial of over .     Note that the minimum polynomial of over (if it exists) divides every polynomial in that has as a root. In particular, it is the unique monic, irreducible polynomial having as a root. It can also be characterized as the monic polynomial in of least degree having as a root.    For any prime integer , set , a so-called “primitive -th root of unity\". Let us find . Note that is a root of which factors as where . As we showed before , is irreducible in . Since is not a root of , it must be a root of , and since is irreducible, it must be (see the Remark).      Let be irreducible and let (respectively, ) be a root of in some field extension (respectively, ) of . Then there is an isomorphism of fields such that and .    Note that is (up to a non-zero constant factor) the minimum polynomial of both and . So, we may apply (3b) of the Theorem twice to give a pair of isomorphisms of fields, given by sending to (for the left one) and (for the right one). Take to be the inverse of the one on the left composed with the right one.      A simple example illustrating the Corollary is that and are isomorphic fields. In fact, the are equal: . But the Corollary gives that there is an interesting isomorphism that sends to . In general, we have for . This previews the central idea of Galois theory.    Let (the unique real cube-root of ) and (one of the two imaginary cube roots of ).  Then by the Corollary (applied with ) there is an isomorphism of fields that restricts to the identity map on . Note that these two fields are not equal since the former is contained in and the latter is not.    The Degree Formula   Suppose are field extensions. Then In particular, the composition of two finite extensions of fields is again a finite extension.    Let be a basis for as an -vector space and let be a basis for as an -vector space. Let denote the subset of . The Proposition follows from the following two facts: - is a basis of as an -vector space and - the function is bijective (so that the cardinality of is ). Concerning (a), for , we have for some and . For each , is an -linear combination of a finite set of elements of . Combining these gives that is in the -span of .  To prove linear independence, it suffices to prove that if and be distinct elements of and respectively, then the set is linearly independent. Suppose for some . Since the 's are -linearly independent and and , we get that, for each , . Using now that the 's are -linearly independent, we have that for all and all , . This proves is linearly independent over , and hence is linearly independent over .  Concerning (b), if for some , then , and since the 's are -linearly independent, we must have and hence .     Say is a field extension of prime degree . Given , by the Degree Formula we have . Since , and so . It follows that , whence . As a (very simple) example of this, since is prime, for any complex number that is not real.    Let be the result of adjoining to all of the roots in of . That is, where , , , and . As we shall see later, is an example of a “splitting field\". Let's find .  First, let us note that we can also describe as . This holds since each of belongs to and hence . The opposite containment holds because , with the latter being true because .  Set . Then . Since and is a root of , we have is at most and it will be exactly if and only if is irreducible in . This is unclear.  So instead let's try a different approach. Let . Then since is irreducible in by Eisenstein, we have . Since and is a root of , we have . But since . Note that if and only if . Thus .  By the degree formula we conclude that Note that, in hindsight, it must have been true that is irreducible in , since otherwise the degree formula would give that .     Suppose that is a finite extension of fields such that the degree is odd. Show that if , then .    Let be a finite extension of fields such that the degree is odd.  Notice that as everything in can be written in terms of . Suppose by way of contradiction that there exists some such that . Then . Notice that is a root of the polynomial , which is irreducible in as it is a degree polynomial that has no roots in . Thus is the minimum polynomial of and    However, by the Degree Formula  , which is a problem, given now divides , an odd number. Thus .      A field extension is called algebraic if every element is algebraic over (i.e., if every element of is the root of a non-zero polynomial with coefficients in ).      If is a finite extension of fields, then it is algebraic.    Pick . Since is a -vector subspace of and we have . (One could also appeal to the Degree Formula for this.) So by (4) of Theorem , is algebraic of .     Let and set . Then is a subfield of : To see this, note first that provided . Given , we have and for some and and hence are both in . Since is a field, we have , , and (provided ) all belong to and hence to . This proves is field extension of . It is algebraic over since each is. But it is not a finite extension of , since (since is irreducible in by Eisenstein ) and hence for all .      Let be extensions of fields, not necessarily finite.   Prove that and are algebraic if and only if is algebraic.  Give an example where and are Galois but is not Galois.     Let be extensions of fields, not necessarily finite.  Suppose that and are algebraic extensions. Let . Then is the root of the polynomial with . Notice that is a polynomial in , making is algebraic over this as well. Consider the chain of field extensions Since is algebraic over for all and is algebraic over , by Theorem each step in this chain has finite degree. By the Degree Formula, is finite and thus so is . By the Theorem again, is algebraic over .  Next suppose that is algebraic. Let . Then , and so it is algebraic over . Now let . Then is the root of a polynomial in , which is also in , so is algebraic as well.   is Galois over , and is Galois over , but is not Galois over as the splitting field of has degree .      Let be fields and let be algebraic elements over . Prove that and are also algebraic elements of over .    Let be fields and let be algebraic elements over First, notice that and are contained in . As is algebraic over , it is the root of some polynomial with coefficients in . But is also contained in , and thus the extension is algebraic. As is algebraic as well, we see that is an algebraic extension of fields. Thus and are algebraic over . #### The converse of this proposition is also true: Given field extensions , if is algebraic then so are and . This is more or less obvious from the definition.       Show that any finite extension of fields is algebraic.  Let denote the subfield of consisting of all the complex numbers which are algebraic over . (You may use that is a field without proof.) Show that is an algebraic extension, but not a finite extension.     Let be a finite extension of fields. Let . By the [[Proposition – The Degree Formula|Degree Formula]] we have . Thus is finite, making algebraic over .. ###### Part (b) Notice that for all and that is a root of the polynomial , which is irreducible in by Eisenstein's Criterion]] ( ). Thus . As must be added to for all , we see that this extension is not finite.      Let be the splitting field of    Prove that .    Find a basis for as a -vector space.       Let be the splitting field of Part (a) The roots of are the following:                      Notice that , and thus .  The polynomial is irreducible in by Eisenstein's Criterion ( ). Thus it is the minimal polynomial of , and so is a field extension of of degree . After adjoining as well we see that is an extension of degree . Thus a basis of as a -vector space is the following:       Assume that is a finite extension of fields of degree .   Prove that if is irreducible of degree and then remains irreducible when regarded as an element of the ring .  Show, by means of an explicit example with justification, that the statement in part (a) would become false if the assumption that were omitted.      Let be a finite extension of fields of degree .  Suppose that is irreducible of degree and .  First, note that if then will remain irreducible in  . Suppose then that . There exists an algebraically closed extension such that has a root  . Consider . As is algebraic in we know there exists some unique irreducible minimum polynomial of degree , and thus that  . Using the Degree Formula we see that However, and so for some , so . As we must have . But was defined to be the degree of , which divides . As and , we see that , so so for some . As irreducible polynomials multiplied by a constant are still irreducible, we see that is indeed irreducible in .  Let be a non-constant irreducible polynomial of degree in . Let . Because is irreducible and is a PID, is a maximal ideal. Thus is a field , , and is a root of in  . Hence is no longer irreducible by Theorem 2.2      Consider the two field extensions and .   Prove they have degrees and , respectively. {}: For the second one, show is irreducible in .    Find a primitive element for the extension and find .    Find a primitive element for the extension and find .       Consider the polynomial . This has a root , which is not in . Thus, as has degree 2, it is irreducible by Theorem 2.2 , making it the minimal polynomial of . Thus by Theorem 2.31 we see that .  Next, consider the polynomial . This has a root , which is not in as and . Let for convenience. As , has degree 2, it is irreducible by Theorem 2.2 , making it the minimal polynomial of . Thus by Theorem 2.31 we see that . Thus by the degree formula we have .  By Example 2.22 we see that . However, as is the root of it is algebraic over we see that and thus that .  Next, consider the polynomial . This has a root , which is not in as and . Let for convenience. As , has degree 2, it is irreducible by Theorem 2.2 , making it the minimal polynomial of . Thus by Theorem 2.31 we see that . Thus by the degree formula we have .  Consider , and note that and . Thus and . Thus is a primitive element of this extension field.  Next, consider the monic polynomial , and observe However, as , we see that is the root of this polynomial. Since this is a monic polynomial of degree , it must be the minimal polynomial as well. Thus the minimal polynomial of .  Consider , and note that , and .  Consider , and note that , and thus . Thus , so is a root of this polynomial. Since this is a monic polynomial of degree , it must be the minimal polynomial as well. Thus the minimal polynomial of .      Let be the field extension of obtained by adjoining to all four complex roots of the polynomial . ( is what's known as the “splitting field\" of over .) That is, where , , , and .   Prove that there exist a field extension such that , and . Tip : Note that is real number; find it explicitly.    Determine, with justification, .       Let be the field extension of obtained by adjoining to all four complex roots of the polynomial .  Let . Note that by Eisenstein's Criterion using we see that is the root of an irreducible polynomial in . Thus by Theorem 2.31 we see that is the degree of the minimum polynomial of this extension. However, as is monic and of degree 4, we see that it is the minimal polynomial and thus that . As , this extension will be contained in the real numbers, and thus that .  Next, observe and thus that .  Note that is the root of , and since and , we see that is irreducible in due to it having degree 2. As is monic and degree 2 we see its the minimal polynomial of . By the Degree Formula, we see that .  Note that   ,   ,   , and   , all of which can be written with and . Thus .  We already know that , and thus all that remains is to show that can be expressed in terms of the . Observe and thus that . Thus , and . Hence .      Let be the splitting field of over where is an odd prime integer. Find . Tip : Consider both chains and .    As seen in Example 2.60, is a root of the th cyclotomic polynomial, which is monic and irreducible in . Hence is the minimal polynomial of the th cyclotomic polynomial in , and thus the field extension has degree over by Theorem 2.31. It follows that .  Next, note that is a root of the polynomial , making it algebraic over . Using Eisenstein's Criterion in conjunction with the prime we see that is irreducible in . As , by Problem 5 on the previous homework we see that is irreducible in as well. As is irreducible and monic, we see that it is the minimal polynomial of in , and thus Using the degree formula, we see that Notice that , where , which are all roots of . By the Factor Theorem, there can be no other roots of this polynomial. Thus .  Additionally, notice that and are both roots of . Thus they are both contained in . Observe . Hence , and thus we see that . Therefore, .      Consider the two field extensions and .   Show that has degree .    Show that has degree .    Find a primitive element for the extension .    Find .         Let be a subfield of and suppose every element of is a root of a polynomial of degree in . Prove that . (Note: is not assumed to be a finite extension of .)      Let be a prime integer and let be a root of the polynomial .   Find, with justification, the degree of the field extension over .  Deduce that the polynomial is irreducible in .        Let be the splitting field over of the polynomial   Find, with justification, .  Note that (where is the unique positive, real fifth root of ) is one of the roots of . Prove is the trivial group.      Let be the splitting field over of the polynomial   Note that is irreducible in by Eisenstein's Criterion ( ). The roots of are 1. 2. 3. 4. 5.   As is monic and irreducible it is the minimum polynomial of . Let , and notice . Note that   Let be a primitive root of unity. This is the root a cyclotomic polynomial of degree which is irreducible in . As this has relatively prime order to it is irreducible there as well. Let , and notice . Notice that , and so , completing the proof.      Let and be subfields of a field with and . Let and . Recall that denotes the smallest (with respect to containment) subfield of which satisfies and .   Show that .  Show that if then   Give an example satisfying       Let and be subfields of a field with and . Let and .  We're going to go slightly out of order. By Part (b), we see when . This is the largest possible size of , as everything is irreducible where it can be. Thus   Suppose . As and are finite extensions of they are also algebraic. Thus there exists and such that has degree and has degree .  Thus , making irreducible in . Thus . Notice that , as it is the smallest (with respect to containment) subfield of which satisfies and . Thus we have , as desired.  Let , , and Notice that , and thus .     Qual  Let and be subfields of a field with and . Let and . Recall that denotes the smallest (with respect to containment) subfield of which satisfies and .   Show that .  Show that if then   Give an example satisfying      Let and be subfields of a field with and . Let and .  We're going to go slightly out of order. By Part (b), we see when . This is the largest possible size of , as everything is irreducible where it can be. Thus   Suppose . As and are finite extensions of they are also algebraic. Thus there exists and such that has degree and has degree .  Thus , making irreducible in . Thus . Notice that , as it is the smallest (with respect to containment) subfield of which satisfies and . Thus we have , as desired.  Let , , and Notice that , and thus .    "
},
{
  "id": "def-algebraic-element",
  "level": "2",
  "url": "sec-algebraic.html#def-algebraic-element",
  "type": "Definition",
  "number": "1.23",
  "title": "",
  "body": "  For a field extension and , we say is algebraic over if for some non-zero polynomial . Otherwise, is transcendental over .   "
},
{
  "id": "exe-i-algebraic-over-r",
  "level": "2",
  "url": "sec-algebraic.html#exe-i-algebraic-over-r",
  "type": "Example",
  "number": "1.24",
  "title": "",
  "body": "  is algebraic over . Indeed, every element of is algebraic over . (E.g., is a root of .) ia algebraic over . So is for any . The numbers and of are transcendental over ; these are deep facts.  "
},
{
  "id": "thm-properties-of-algebraic-elements",
  "level": "2",
  "url": "sec-algebraic.html#thm-properties-of-algebraic-elements",
  "type": "Theorem",
  "number": "1.25",
  "title": "",
  "body": "  Suppose is a field extension and . Define a subset of .   The subset is an ideal of .   if and only if is transcendental over ; so if and only if is algebraic over .  Assume is algebraic over .  The unique monic generator of , which we will write as , is irreducible (and hence is a prime ideal).  There is a unique isomorphism of fields sending identically to and sending to .   and in particular is a field.     is algebraic over if and only if . In this case,[^5]    is transcendental over if and only if . In this case, there is a unique isomorphism of fields sending identically to and sending to . (Here, is the field of fractions of .)     All parts use the following construction:  Let be the evaluation homomorphism, given by sending to  . Note that satisfies and . We have by definition of the latter. The First Isomorphism Theorem for rings thus gives that induces a ring isomorphism given by . In particular, since is a subring of , it is an integral domain, and hence must be a prime ideal (possibly the ideal).   Let us now prove the various parts:    holds because is the kernel of the ring map .    is by definition.    For (3) assume is algebraic. Then and hence it has a unique monic generator, which we write . Since is prime, is irreducible ; this proves (3a). Also, this shows that is a field and hence so is . Since , contains and , and is a field, we must have . This proves (3b) and (3c).  For (4), if is algebraic over , then by (3b) and Proposition . For the converse, if , then the infinite list of elements of cannot be -linearly independent . So, for some and some not all of which are . This shows is the root of a non-zero polynomial.  For (5), if is transcendental, then and so is injective. Since is a field, is a domain , and is injective , it can be extended to the field of fractions of , i.e. there is a ring homomorphism given by for all with . The image of is precisely . The map is injective since it is a ring homomorphism whose source is a field.    "
},
{
  "id": "def-minimum-polynomial",
  "level": "2",
  "url": "sec-algebraic.html#def-minimum-polynomial",
  "type": "Definition",
  "number": "1.26",
  "title": "",
  "body": "  If is algebraic over the subfield , the unique monic generator of the ideal in the previous theorem, written , is called the minimum polynomial of over .   "
},
{
  "id": "remark-29",
  "level": "2",
  "url": "sec-algebraic.html#remark-29",
  "type": "Remark",
  "number": "1.27",
  "title": "",
  "body": " Note that the minimum polynomial of over (if it exists) divides every polynomial in that has as a root. In particular, it is the unique monic, irreducible polynomial having as a root. It can also be characterized as the monic polynomial in of least degree having as a root.  "
},
{
  "id": "exe-primitive-roots-of-unity",
  "level": "2",
  "url": "sec-algebraic.html#exe-primitive-roots-of-unity",
  "type": "Example",
  "number": "1.28",
  "title": "",
  "body": " For any prime integer , set , a so-called “primitive -th root of unity\". Let us find . Note that is a root of which factors as where . As we showed before , is irreducible in . Since is not a root of , it must be a root of , and since is irreducible, it must be (see the Remark).   "
},
{
  "id": "cor-uniqueness-of-field-extensions",
  "level": "2",
  "url": "sec-algebraic.html#cor-uniqueness-of-field-extensions",
  "type": "Corollary",
  "number": "1.29",
  "title": "",
  "body": "  Let be irreducible and let (respectively, ) be a root of in some field extension (respectively, ) of . Then there is an isomorphism of fields such that and .    Note that is (up to a non-zero constant factor) the minimum polynomial of both and . So, we may apply (3b) of the Theorem twice to give a pair of isomorphisms of fields, given by sending to (for the left one) and (for the right one). Take to be the inverse of the one on the left composed with the right one.    "
},
{
  "id": "exe-qsqrt2congq-sqrt2",
  "level": "2",
  "url": "sec-algebraic.html#exe-qsqrt2congq-sqrt2",
  "type": "Example",
  "number": "1.30",
  "title": "",
  "body": " A simple example illustrating the Corollary is that and are isomorphic fields. In fact, the are equal: . But the Corollary gives that there is an interesting isomorphism that sends to . In general, we have for . This previews the central idea of Galois theory.  "
},
{
  "id": "exe-cube-roots",
  "level": "2",
  "url": "sec-algebraic.html#exe-cube-roots",
  "type": "Example",
  "number": "1.31",
  "title": "",
  "body": " Let (the unique real cube-root of ) and (one of the two imaginary cube roots of ).  Then by the Corollary (applied with ) there is an isomorphism of fields that restricts to the identity map on . Note that these two fields are not equal since the former is contained in and the latter is not.  "
},
{
  "id": "thm-degree-formula",
  "level": "2",
  "url": "sec-algebraic.html#thm-degree-formula",
  "type": "Theorem",
  "number": "1.32",
  "title": "The Degree Formula.",
  "body": " The Degree Formula   Suppose are field extensions. Then In particular, the composition of two finite extensions of fields is again a finite extension.    Let be a basis for as an -vector space and let be a basis for as an -vector space. Let denote the subset of . The Proposition follows from the following two facts: - is a basis of as an -vector space and - the function is bijective (so that the cardinality of is ). Concerning (a), for , we have for some and . For each , is an -linear combination of a finite set of elements of . Combining these gives that is in the -span of .  To prove linear independence, it suffices to prove that if and be distinct elements of and respectively, then the set is linearly independent. Suppose for some . Since the 's are -linearly independent and and , we get that, for each , . Using now that the 's are -linearly independent, we have that for all and all , . This proves is linearly independent over , and hence is linearly independent over .  Concerning (b), if for some , then , and since the 's are -linearly independent, we must have and hence .   "
},
{
  "id": "exe-rwc-for-all-wnotinr",
  "level": "2",
  "url": "sec-algebraic.html#exe-rwc-for-all-wnotinr",
  "type": "Example",
  "number": "1.33",
  "title": "",
  "body": " Say is a field extension of prime degree . Given , by the Degree Formula we have . Since , and so . It follows that , whence . As a (very simple) example of this, since is prime, for any complex number that is not real.  "
},
{
  "id": "exe-degree-and-x2-5",
  "level": "2",
  "url": "sec-algebraic.html#exe-degree-and-x2-5",
  "type": "Example",
  "number": "1.34",
  "title": "",
  "body": " Let be the result of adjoining to all of the roots in of . That is, where , , , and . As we shall see later, is an example of a “splitting field\". Let's find .  First, let us note that we can also describe as . This holds since each of belongs to and hence . The opposite containment holds because , with the latter being true because .  Set . Then . Since and is a root of , we have is at most and it will be exactly if and only if is irreducible in . This is unclear.  So instead let's try a different approach. Let . Then since is irreducible in by Eisenstein, we have . Since and is a root of , we have . But since . Note that if and only if . Thus .  By the degree formula we conclude that Note that, in hindsight, it must have been true that is irreducible in , since otherwise the degree formula would give that .  "
},
{
  "id": "prop-field-extension-of-odd-degree",
  "level": "2",
  "url": "sec-algebraic.html#prop-field-extension-of-odd-degree",
  "type": "Proposition",
  "number": "1.35",
  "title": "",
  "body": "  Suppose that is a finite extension of fields such that the degree is odd. Show that if , then .    Let be a finite extension of fields such that the degree is odd.  Notice that as everything in can be written in terms of . Suppose by way of contradiction that there exists some such that . Then . Notice that is a root of the polynomial , which is irreducible in as it is a degree polynomial that has no roots in . Thus is the minimum polynomial of and    However, by the Degree Formula  , which is a problem, given now divides , an odd number. Thus .   "
},
{
  "id": "def-algebraic-extension",
  "level": "2",
  "url": "sec-algebraic.html#def-algebraic-extension",
  "type": "Definition",
  "number": "1.36",
  "title": "",
  "body": "  A field extension is called algebraic if every element is algebraic over (i.e., if every element of is the root of a non-zero polynomial with coefficients in ).   "
},
{
  "id": "prop-finite-extensions-are-algebraic",
  "level": "2",
  "url": "sec-algebraic.html#prop-finite-extensions-are-algebraic",
  "type": "Proposition",
  "number": "1.37",
  "title": "",
  "body": "  If is a finite extension of fields, then it is algebraic.    Pick . Since is a -vector subspace of and we have . (One could also appeal to the Degree Formula for this.) So by (4) of Theorem , is algebraic of .   "
},
{
  "id": "exe-infinite-algebraic-extension",
  "level": "2",
  "url": "sec-algebraic.html#exe-infinite-algebraic-extension",
  "type": "Example",
  "number": "1.38",
  "title": "",
  "body": " Let and set . Then is a subfield of : To see this, note first that provided . Given , we have and for some and and hence are both in . Since is a field, we have , , and (provided ) all belong to and hence to . This proves is field extension of . It is algebraic over since each is. But it is not a finite extension of , since (since is irreducible in by Eisenstein ) and hence for all .   "
},
{
  "id": "thm-algebraic-extensions-are-transitive",
  "level": "2",
  "url": "sec-algebraic.html#thm-algebraic-extensions-are-transitive",
  "type": "Theorem",
  "number": "1.39",
  "title": "",
  "body": "  Let be extensions of fields, not necessarily finite.   Prove that and are algebraic if and only if is algebraic.  Give an example where and are Galois but is not Galois.     Let be extensions of fields, not necessarily finite.  Suppose that and are algebraic extensions. Let . Then is the root of the polynomial with . Notice that is a polynomial in , making is algebraic over this as well. Consider the chain of field extensions Since is algebraic over for all and is algebraic over , by Theorem each step in this chain has finite degree. By the Degree Formula, is finite and thus so is . By the Theorem again, is algebraic over .  Next suppose that is algebraic. Let . Then , and so it is algebraic over . Now let . Then is the root of a polynomial in , which is also in , so is algebraic as well.   is Galois over , and is Galois over , but is not Galois over as the splitting field of has degree .   "
},
{
  "id": "prop-sum-and-product-of-algebraic-elements",
  "level": "2",
  "url": "sec-algebraic.html#prop-sum-and-product-of-algebraic-elements",
  "type": "Proposition",
  "number": "1.40",
  "title": "",
  "body": "  Let be fields and let be algebraic elements over . Prove that and are also algebraic elements of over .    Let be fields and let be algebraic elements over First, notice that and are contained in . As is algebraic over , it is the root of some polynomial with coefficients in . But is also contained in , and thus the extension is algebraic. As is algebraic as well, we see that is an algebraic extension of fields. Thus and are algebraic over . #### The converse of this proposition is also true: Given field extensions , if is algebraic then so are and . This is more or less obvious from the definition.   "
},
{
  "id": "prop-algebraic-but-not-finite-extension",
  "level": "2",
  "url": "sec-algebraic.html#prop-algebraic-but-not-finite-extension",
  "type": "Proposition",
  "number": "1.41",
  "title": "",
  "body": "   Show that any finite extension of fields is algebraic.  Let denote the subfield of consisting of all the complex numbers which are algebraic over . (You may use that is a field without proof.) Show that is an algebraic extension, but not a finite extension.     Let be a finite extension of fields. Let . By the [[Proposition – The Degree Formula|Degree Formula]] we have . Thus is finite, making algebraic over .. ###### Part (b) Notice that for all and that is a root of the polynomial , which is irreducible in by Eisenstein's Criterion]] ( ). Thus . As must be added to for all , we see that this extension is not finite.   "
},
{
  "id": "prop-positive-quartic-and-basis",
  "level": "2",
  "url": "sec-algebraic.html#prop-positive-quartic-and-basis",
  "type": "Proposition",
  "number": "1.42",
  "title": "",
  "body": "  Let be the splitting field of    Prove that .    Find a basis for as a -vector space.       Let be the splitting field of Part (a) The roots of are the following:                      Notice that , and thus .  The polynomial is irreducible in by Eisenstein's Criterion ( ). Thus it is the minimal polynomial of , and so is a field extension of of degree . After adjoining as well we see that is an extension of degree . Thus a basis of as a -vector space is the following:    "
},
{
  "id": "thm-relatively-prime-extension",
  "level": "2",
  "url": "sec-algebraic.html#thm-relatively-prime-extension",
  "type": "Theorem",
  "number": "1.43",
  "title": "",
  "body": "  Assume that is a finite extension of fields of degree .   Prove that if is irreducible of degree and then remains irreducible when regarded as an element of the ring .  Show, by means of an explicit example with justification, that the statement in part (a) would become false if the assumption that were omitted.      Let be a finite extension of fields of degree .  Suppose that is irreducible of degree and .  First, note that if then will remain irreducible in  . Suppose then that . There exists an algebraically closed extension such that has a root  . Consider . As is algebraic in we know there exists some unique irreducible minimum polynomial of degree , and thus that  . Using the Degree Formula we see that However, and so for some , so . As we must have . But was defined to be the degree of , which divides . As and , we see that , so so for some . As irreducible polynomials multiplied by a constant are still irreducible, we see that is indeed irreducible in .  Let be a non-constant irreducible polynomial of degree in . Let . Because is irreducible and is a PID, is a maximal ideal. Thus is a field , , and is a root of in  . Hence is no longer irreducible by Theorem 2.2   "
},
{
  "id": "proposition-65",
  "level": "2",
  "url": "sec-algebraic.html#proposition-65",
  "type": "Proposition",
  "number": "1.44",
  "title": "",
  "body": "  Consider the two field extensions and .   Prove they have degrees and , respectively. {}: For the second one, show is irreducible in .    Find a primitive element for the extension and find .    Find a primitive element for the extension and find .       Consider the polynomial . This has a root , which is not in . Thus, as has degree 2, it is irreducible by Theorem 2.2 , making it the minimal polynomial of . Thus by Theorem 2.31 we see that .  Next, consider the polynomial . This has a root , which is not in as and . Let for convenience. As , has degree 2, it is irreducible by Theorem 2.2 , making it the minimal polynomial of . Thus by Theorem 2.31 we see that . Thus by the degree formula we have .  By Example 2.22 we see that . However, as is the root of it is algebraic over we see that and thus that .  Next, consider the polynomial . This has a root , which is not in as and . Let for convenience. As , has degree 2, it is irreducible by Theorem 2.2 , making it the minimal polynomial of . Thus by Theorem 2.31 we see that . Thus by the degree formula we have .  Consider , and note that and . Thus and . Thus is a primitive element of this extension field.  Next, consider the monic polynomial , and observe However, as , we see that is the root of this polynomial. Since this is a monic polynomial of degree , it must be the minimal polynomial as well. Thus the minimal polynomial of .  Consider , and note that , and .  Consider , and note that , and thus . Thus , so is a root of this polynomial. Since this is a monic polynomial of degree , it must be the minimal polynomial as well. Thus the minimal polynomial of .   "
},
{
  "id": "proposition-66",
  "level": "2",
  "url": "sec-algebraic.html#proposition-66",
  "type": "Proposition",
  "number": "1.45",
  "title": "",
  "body": "  Let be the field extension of obtained by adjoining to all four complex roots of the polynomial . ( is what's known as the “splitting field\" of over .) That is, where , , , and .   Prove that there exist a field extension such that , and . Tip : Note that is real number; find it explicitly.    Determine, with justification, .       Let be the field extension of obtained by adjoining to all four complex roots of the polynomial .  Let . Note that by Eisenstein's Criterion using we see that is the root of an irreducible polynomial in . Thus by Theorem 2.31 we see that is the degree of the minimum polynomial of this extension. However, as is monic and of degree 4, we see that it is the minimal polynomial and thus that . As , this extension will be contained in the real numbers, and thus that .  Next, observe and thus that .  Note that is the root of , and since and , we see that is irreducible in due to it having degree 2. As is monic and degree 2 we see its the minimal polynomial of . By the Degree Formula, we see that .  Note that   ,   ,   , and   , all of which can be written with and . Thus .  We already know that , and thus all that remains is to show that can be expressed in terms of the . Observe and thus that . Thus , and . Hence .   "
},
{
  "id": "proposition-67",
  "level": "2",
  "url": "sec-algebraic.html#proposition-67",
  "type": "Proposition",
  "number": "1.46",
  "title": "",
  "body": "  Let be the splitting field of over where is an odd prime integer. Find . Tip : Consider both chains and .    As seen in Example 2.60, is a root of the th cyclotomic polynomial, which is monic and irreducible in . Hence is the minimal polynomial of the th cyclotomic polynomial in , and thus the field extension has degree over by Theorem 2.31. It follows that .  Next, note that is a root of the polynomial , making it algebraic over . Using Eisenstein's Criterion in conjunction with the prime we see that is irreducible in . As , by Problem 5 on the previous homework we see that is irreducible in as well. As is irreducible and monic, we see that it is the minimal polynomial of in , and thus Using the degree formula, we see that Notice that , where , which are all roots of . By the Factor Theorem, there can be no other roots of this polynomial. Thus .  Additionally, notice that and are both roots of . Thus they are both contained in . Observe . Hence , and thus we see that . Therefore, .   "
},
{
  "id": "proposition-68",
  "level": "2",
  "url": "sec-algebraic.html#proposition-68",
  "type": "Proposition",
  "number": "1.47",
  "title": "",
  "body": "  Consider the two field extensions and .   Show that has degree .    Show that has degree .    Find a primitive element for the extension .    Find .      "
},
{
  "id": "proposition-69",
  "level": "2",
  "url": "sec-algebraic.html#proposition-69",
  "type": "Proposition",
  "number": "1.48",
  "title": "",
  "body": "  Let be a subfield of and suppose every element of is a root of a polynomial of degree in . Prove that . (Note: is not assumed to be a finite extension of .)   "
},
{
  "id": "proposition-70",
  "level": "2",
  "url": "sec-algebraic.html#proposition-70",
  "type": "Proposition",
  "number": "1.49",
  "title": "",
  "body": "  Let be a prime integer and let be a root of the polynomial .   Find, with justification, the degree of the field extension over .  Deduce that the polynomial is irreducible in .     "
},
{
  "id": "proposition-71",
  "level": "2",
  "url": "sec-algebraic.html#proposition-71",
  "type": "Proposition",
  "number": "1.50",
  "title": "",
  "body": "  Let be the splitting field over of the polynomial   Find, with justification, .  Note that (where is the unique positive, real fifth root of ) is one of the roots of . Prove is the trivial group.      Let be the splitting field over of the polynomial   Note that is irreducible in by Eisenstein's Criterion ( ). The roots of are 1. 2. 3. 4. 5.   As is monic and irreducible it is the minimum polynomial of . Let , and notice . Note that   Let be a primitive root of unity. This is the root a cyclotomic polynomial of degree which is irreducible in . As this has relatively prime order to it is irreducible there as well. Let , and notice . Notice that , and so , completing the proof.   "
},
{
  "id": "proposition-72",
  "level": "2",
  "url": "sec-algebraic.html#proposition-72",
  "type": "Proposition",
  "number": "1.51",
  "title": "",
  "body": "  Let and be subfields of a field with and . Let and . Recall that denotes the smallest (with respect to containment) subfield of which satisfies and .   Show that .  Show that if then   Give an example satisfying       Let and be subfields of a field with and . Let and .  We're going to go slightly out of order. By Part (b), we see when . This is the largest possible size of , as everything is irreducible where it can be. Thus   Suppose . As and are finite extensions of they are also algebraic. Thus there exists and such that has degree and has degree .  Thus , making irreducible in . Thus . Notice that , as it is the smallest (with respect to containment) subfield of which satisfies and . Thus we have , as desired.  Let , , and Notice that , and thus .   "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "sec-algebraic.html#exercise-58",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "Qual.",
  "body": "Qual  Let and be subfields of a field with and . Let and . Recall that denotes the smallest (with respect to containment) subfield of which satisfies and .   Show that .  Show that if then   Give an example satisfying      Let and be subfields of a field with and . Let and .  We're going to go slightly out of order. By Part (b), we see when . This is the largest possible size of , as everything is irreducible where it can be. Thus   Suppose . As and are finite extensions of they are also algebraic. Thus there exists and such that has degree and has degree .  Thus , making irreducible in . Thus . Notice that , as it is the smallest (with respect to containment) subfield of which satisfies and . Thus we have , as desired.  Let , , and Notice that , and thus .  "
},
{
  "id": "sec-closure",
  "level": "1",
  "url": "sec-closure.html",
  "type": "Section",
  "number": "1.3",
  "title": "Algebraic Closures",
  "body": " Algebraic Closures    A field is algebraically closed if every non-constant polynomial has a root in       is algebraically closed. This is the Fundamental Theorem of Algebra.     The following are equivalent for a field : 1. is algebraically closed. 2. Every non-constant polynomial with coefficients in splits completely into (not necessarily distinct) linear factors. 3. There are no non-trivial algebraic extensions of : If is an algebraic field extension then .       (2): Given a non-constant , by assumption has a root and thus with . But then also has a root and so it too factors, and so on.     (3): Say is algebraic. Pick . Then is a root of some . But since factors completely, .     (1). Pick a non-constant . By Proposition , there there is finite extension of in which does have a root. By assumption and so this root must be in .        Given a field , a field is called an algebraic closure of if is an algebraic field extension of and is algebraically closed.      is an algebraic closure of . This follows from the fact that is a finite extension, hence algebraic, and the Fundamental Theorem of Algebra, which we will not prove.     Let Then is an algebraic closure of .  More generally, if is a field extension and is algebraically closed, then the collection of elements of that are algebraic over is an algebraic closure of .    It is far from clear that is a subfield of , and so we first prove that: Given , we have that and are finite and hence so is . Thus, every element of is algebraic over ; that is, . Since is a field, it follows that contains , and if . This proves that is indeed a subfield of .  It is clear from the definition that is an algebraic field extension.  Given a non-constant , let be one of its roots in (which exists since we assume is algebraically closed). Then is an algebraic extension and hence so is by Proposition . This proves and hence that is algebraically closed.      Let be a field extension with algebraically closed. Consider the set (a) Show that is a field. (b) Show that is algebraically closed.    Let . Notice that and are contained in . As , there exists some polynomial with coefficients in such that is a root. However, this polynomial also lives in , so we have [[Mathematics\/Definitions\/Algebraic#$ defn$ – Algebraic (Extension)|algebraic]]. As is also algebraic, we have algebraic as well, as it is a finite extension by the [[Proposition – The Degree Formula|Degree Formula]]. Thus and are algebraic over as well, making a field.  Let . Thus is the root of a polynomial , where . Notice that is a polynomial in as well, and thus is algebraic over this extension as well. Consider the chain of extensions As is algebraic over for all and is algebraic over we see that each step in this chain has finite degree by. By the Degree Formula, is finite and thus so is . Thus is algebraic over , hence , making algebraically closed.      For any field , there exists an [[Mathematics\/Definitions\/Algebraic Closure|algebraic closure]] of . If and are two algebraic closures of the same field , then there exists a field isomorphism such that (i.e., for all ).    Fake Proof of Existence  Let be the collection of all algebraic field extensions of . Make into a poset by declaring iff . We prove has a maximal element.  Let be any totally ordered subset of . If is empty, then is an upper bound for . If is non-empty, set . Using that is totally ordered, it is not hard to see that is indeed a field. It clearly contains as a subfield and every element of it is algebraic over . So and it is an upper bound for . By Zorn's Lemma, has a maximal member .  By construction is algebraic over . If were not algebraically closed, then there would be a non-trivial algebraic extension of it, by Proposition . But then is algebraic by Proposition , and this contradicts the maximality of .  Why is this only a fake proof? It's because , as we've defined it, is not a {} but rather it is something bigger than that. Zorn's Lemma only applies to po{}. How annoying!      Let be a [[Mathematics\/Definitions\/Field Extension|field extension]] and let . Show that if is algebraically closed, then K is algebraically closed.    Let be a field extension let , and suppose that is algebraically closed. Thus every polynomial in has a root in .  Let and let be a root of . Thus , where each . By definition of , each is algebraic over . Notice that as well, making algebraic over this extension as well.  Consider the chain of extensions As is algebraic over for all and is algebraic over we see that each step in this chain has finite degree by Theorem. By the Degree Formula, is finite and thus so is . By the Theorem again, is algebraic over . Thus is algebraic over , hence , making algebraically closed.      Let be any positive prime integer.   Prove that if for some integer k, then p is not an irreducible element of .  Prove is irreducible in .     Let be any positive prime integer.  Suppose for some integer . As , is not an irreducible element of .  As is irreducible in (Eisenstein, ) and is monic, we see that . As is irreducible and monic, we see that . By the Degree Formula we have . Note that the four roots of are the following: - , - , - and - . As , we see that is the splitting field of . Note then that as and the degree of the splitting field is 8, by the Degree Formula we see that the degree of the splitting field of over . As is monic and degree , it must be the minimal polynomial of the second extension and thus irreducible in .      Let and be matrices with entries in . Recall that and are said to be similar over if there exists an invertible matrix, with entries in , such that . Prove the following statements about matrices and with entries in :   If is a field extension, and and are similar over , then they are similar over .   is similar over to its transpose .     Suppose and are similar in . As and have entries in , then they are both in . Thus there exist matrices in RCF such that is similar to and that is similar to . However, is similar to and that is similar to in as well. Notice and are still in RCF. However, as the RCF is unique, this means that in , making them equal in as well. Thus is similar to , as similarity is transitive.  Let be the algebraic closure of . Thus has a Jordan Canonical Form in . For each Jordan Block in the JCF of , let denote the transpose of the identity matrix, and notice that . As this is the case for every Jordan block, we see that the JCF of , , is similar to its transpose. As the is similar to , is similar to , and is similar to , we see that in by transitivity. From Part (a), this yields in . #### Problem In each part, determine, with justification, the degree of the given field extension. 1. . 2. .    "
},
{
  "id": "def-algebraically-closed",
  "level": "2",
  "url": "sec-closure.html#def-algebraically-closed",
  "type": "Definition",
  "number": "1.52",
  "title": "",
  "body": "  A field is algebraically closed if every non-constant polynomial has a root in    "
},
{
  "id": "exe-c-is-closed",
  "level": "2",
  "url": "sec-closure.html#exe-c-is-closed",
  "type": "Example",
  "number": "1.53",
  "title": "",
  "body": "  is algebraically closed. This is the Fundamental Theorem of Algebra.  "
},
{
  "id": "prop-equivalencies-of-algebraically-closed",
  "level": "2",
  "url": "sec-closure.html#prop-equivalencies-of-algebraically-closed",
  "type": "Proposition",
  "number": "1.54",
  "title": "",
  "body": "  The following are equivalent for a field : 1. is algebraically closed. 2. Every non-constant polynomial with coefficients in splits completely into (not necessarily distinct) linear factors. 3. There are no non-trivial algebraic extensions of : If is an algebraic field extension then .       (2): Given a non-constant , by assumption has a root and thus with . But then also has a root and so it too factors, and so on.     (3): Say is algebraic. Pick . Then is a root of some . But since factors completely, .     (1). Pick a non-constant . By Proposition , there there is finite extension of in which does have a root. By assumption and so this root must be in .     "
},
{
  "id": "def-algebraic-closure",
  "level": "2",
  "url": "sec-closure.html#def-algebraic-closure",
  "type": "Definition",
  "number": "1.55",
  "title": "",
  "body": "  Given a field , a field is called an algebraic closure of if is an algebraic field extension of and is algebraically closed.   "
},
{
  "id": "exe-c-is-the-algebraic-closure-of-r",
  "level": "2",
  "url": "sec-closure.html#exe-c-is-the-algebraic-closure-of-r",
  "type": "Example",
  "number": "1.56",
  "title": "",
  "body": "  is an algebraic closure of . This follows from the fact that is a finite extension, hence algebraic, and the Fundamental Theorem of Algebra, which we will not prove.  "
},
{
  "id": "prop-collection-of-algebraic-elements-is-closed",
  "level": "2",
  "url": "sec-closure.html#prop-collection-of-algebraic-elements-is-closed",
  "type": "Proposition",
  "number": "1.57",
  "title": "",
  "body": "  Let Then is an algebraic closure of .  More generally, if is a field extension and is algebraically closed, then the collection of elements of that are algebraic over is an algebraic closure of .    It is far from clear that is a subfield of , and so we first prove that: Given , we have that and are finite and hence so is . Thus, every element of is algebraic over ; that is, . Since is a field, it follows that contains , and if . This proves that is indeed a subfield of .  It is clear from the definition that is an algebraic field extension.  Given a non-constant , let be one of its roots in (which exists since we assume is algebraically closed). Then is an algebraic extension and hence so is by Proposition . This proves and hence that is algebraically closed.   "
},
{
  "id": "prop-algebraic-elements-closed",
  "level": "2",
  "url": "sec-closure.html#prop-algebraic-elements-closed",
  "type": "Proposition",
  "number": "1.58",
  "title": "",
  "body": "  Let be a field extension with algebraically closed. Consider the set (a) Show that is a field. (b) Show that is algebraically closed.    Let . Notice that and are contained in . As , there exists some polynomial with coefficients in such that is a root. However, this polynomial also lives in , so we have [[Mathematics\/Definitions\/Algebraic#$ defn$ – Algebraic (Extension)|algebraic]]. As is also algebraic, we have algebraic as well, as it is a finite extension by the [[Proposition – The Degree Formula|Degree Formula]]. Thus and are algebraic over as well, making a field.  Let . Thus is the root of a polynomial , where . Notice that is a polynomial in as well, and thus is algebraic over this extension as well. Consider the chain of extensions As is algebraic over for all and is algebraic over we see that each step in this chain has finite degree by. By the Degree Formula, is finite and thus so is . Thus is algebraic over , hence , making algebraically closed.   "
},
{
  "id": "thm-existence-and-uniqueness-of-algebraic-closures",
  "level": "2",
  "url": "sec-closure.html#thm-existence-and-uniqueness-of-algebraic-closures",
  "type": "Theorem",
  "number": "1.59",
  "title": "",
  "body": "  For any field , there exists an [[Mathematics\/Definitions\/Algebraic Closure|algebraic closure]] of . If and are two algebraic closures of the same field , then there exists a field isomorphism such that (i.e., for all ).    Fake Proof of Existence  Let be the collection of all algebraic field extensions of . Make into a poset by declaring iff . We prove has a maximal element.  Let be any totally ordered subset of . If is empty, then is an upper bound for . If is non-empty, set . Using that is totally ordered, it is not hard to see that is indeed a field. It clearly contains as a subfield and every element of it is algebraic over . So and it is an upper bound for . By Zorn's Lemma, has a maximal member .  By construction is algebraic over . If were not algebraically closed, then there would be a non-trivial algebraic extension of it, by Proposition . But then is algebraic by Proposition , and this contradicts the maximality of .  Why is this only a fake proof? It's because , as we've defined it, is not a {} but rather it is something bigger than that. Zorn's Lemma only applies to po{}. How annoying!   "
},
{
  "id": "prop-when-set-of-algebraic-elements-closed",
  "level": "2",
  "url": "sec-closure.html#prop-when-set-of-algebraic-elements-closed",
  "type": "Proposition",
  "number": "1.60",
  "title": "",
  "body": "  Let be a [[Mathematics\/Definitions\/Field Extension|field extension]] and let . Show that if is algebraically closed, then K is algebraically closed.    Let be a field extension let , and suppose that is algebraically closed. Thus every polynomial in has a root in .  Let and let be a root of . Thus , where each . By definition of , each is algebraic over . Notice that as well, making algebraic over this extension as well.  Consider the chain of extensions As is algebraic over for all and is algebraic over we see that each step in this chain has finite degree by Theorem. By the Degree Formula, is finite and thus so is . By the Theorem again, is algebraic over . Thus is algebraic over , hence , making algebraically closed.   "
},
{
  "id": "prop-irreducible-quartic1",
  "level": "2",
  "url": "sec-closure.html#prop-irreducible-quartic1",
  "type": "Proposition",
  "number": "1.61",
  "title": "",
  "body": "  Let be any positive prime integer.   Prove that if for some integer k, then p is not an irreducible element of .  Prove is irreducible in .     Let be any positive prime integer.  Suppose for some integer . As , is not an irreducible element of .  As is irreducible in (Eisenstein, ) and is monic, we see that . As is irreducible and monic, we see that . By the Degree Formula we have . Note that the four roots of are the following: - , - , - and - . As , we see that is the splitting field of . Note then that as and the degree of the splitting field is 8, by the Degree Formula we see that the degree of the splitting field of over . As is monic and degree , it must be the minimal polynomial of the second extension and thus irreducible in .   "
},
{
  "id": "prop-field-extensions-and-similar-transposes",
  "level": "2",
  "url": "sec-closure.html#prop-field-extensions-and-similar-transposes",
  "type": "Proposition",
  "number": "1.62",
  "title": "",
  "body": "  Let and be matrices with entries in . Recall that and are said to be similar over if there exists an invertible matrix, with entries in , such that . Prove the following statements about matrices and with entries in :   If is a field extension, and and are similar over , then they are similar over .   is similar over to its transpose .     Suppose and are similar in . As and have entries in , then they are both in . Thus there exist matrices in RCF such that is similar to and that is similar to . However, is similar to and that is similar to in as well. Notice and are still in RCF. However, as the RCF is unique, this means that in , making them equal in as well. Thus is similar to , as similarity is transitive.  Let be the algebraic closure of . Thus has a Jordan Canonical Form in . For each Jordan Block in the JCF of , let denote the transpose of the identity matrix, and notice that . As this is the case for every Jordan block, we see that the JCF of , , is similar to its transpose. As the is similar to , is similar to , and is similar to , we see that in by transitivity. From Part (a), this yields in . #### Problem In each part, determine, with justification, the degree of the given field extension. 1. . 2. .   "
},
{
  "id": "sec-splitting",
  "level": "1",
  "url": "sec-splitting.html",
  "type": "Section",
  "number": "1.4",
  "title": "Splitting Fields",
  "body": " Splitting Fields    For a field and non-constant polynomial , a splitting field of over is a field extension such that 1.  splits completely into linear factors in ; that is, for some , and 2. ; that is, is the smallest subfield of that contains and all the roots of .      As a silly example, if already splits into linear factors over , then itself is the splitting field of over .  The splitting field of over is .  If is any irreducible quadratic polynomial in , then the splitting field of is .  In general, given , a splitting field of is given by where are all of the roots of in .     More generally, we may speak of the splitting field of a list of polynomials in : it is a field extension over which each polynomial factors completely and which is generated by all the roots of all the polynomials.  Note that given a finite list , a splitting field for this list is identical to a splitting field for their product .     Let be a field and a non-constant polynomial. 1. There exists a splitting field for over . 2. If is another splitting field of over , then there is a field isomorphism such that . 3. The degree of any splitting field of is at most where .    For (1), let be an algebraic closure of , which exists by the previous Theorem. Let be the roots of in , and set .  It is clear is a splitting field.  To prove (2), we proceed by induction on the degree of . If is linear, then the only splitting field of over is itself and so the result is clear in this case. Say and are the roots of in and , respectively, and say they are ordered so that, and are roots of the same irreducible factor of in .  By Corollary there is an isomorphism that fixes . Note that factors as in and that is the splitting field of over , and similarly factors as in and that is the splitting field of over . If we blur our eyes slightly and pretend is the identity map, we can apply the inductive hypothesis, since , to conclude that there is an isomorphism as in the statement. I leave a more rigorous argument to your imaginations.  To prove (3), we also proceed by induction on the degree of , using the same notation as in the proof of (2).  Since is a root of , we have and hence In we have with and, as before, is the splitting field of over , so that by induction . By the degree formula      Recall from before that we proved there exists a field extension in which has at least one root. So for some and . We can then find a field extension of in which has at least one root , and so on. In this way we build a field extension such that factors in as for some . Finally, is a splitting field of .    The splitting field of over is , where . It is not hard to see that . We have since is irreducible in (by Eisenstein). Since and thus , the degree formula gives that . By the Theorem, and hence . (We could also have proven this without appealing to the Theorem.)    The splitting field of is This holds since . It is not too hard to see that the degree of this splitting field over is , far smaller than the upper bound given by the Theorem.    Let . Then splits completely in and its roots are the  -th roots of . One of these is . Notice that every other -th root of is a power of this one. We thus see that is the splitting field of over . This field is called the {} of roots of 1 over . This is a somewhat special example: upon joining one of the roots of we got all the others for free. This happens in other examples too, but is certainly {} a general principle.  In particular, we see that the degree of is at most , far less than the bound of given by the Proposition above. In fact, it is at most since factors as , and hence the minimum polynomial of is a divisor of .  When is prime, then is irreducible, as we proved before, and hence it must equal the minimum polynomial of . So, in this case, the degree of is exactly , but it can be smaller than in general; for example, when , and . Note that factors as and of course .  The irreducible polynomial is known as the {}.     If is the splitting field over of an irreducible polynomial and if are any two roots of , then there is a field [[Mathematics\/Definitions\/Automorphism|automorphism]] such that and .    We basically already proved this, but since it is of large importance, let's do so again:  Since are roots of the same irreducible polynomial, by Corollary there is an isomorphism such that and . We have two field maps, (actual inclusion) and the composition of , and they realize as the splitting field of over in two different ways. Since splitting fields are unique, an isomorphism such as exists.     Let be the splitting field of over ; so .  The Porism gives that there is a field automorphism of such that . This one is clear – complex conjugation gives such an isomorphism.  It also gives there is a field automorphism of such that . This is less obvious.     For fields and , we say is a finite splitting field over if is the splitting field over of some polynomial . Assume and are both finite splitting fields over and prove is also a finite splitting field over .    Let and be finite splitting fields over . So there exist polynomials such that splits in and splits in . Note that both and are finite extensions, as each can be reached by adjoining each of the roots of and , respectfully.  If then we have our splitting field, as is a splitting field over itself.  Let be an irreducible polynomial in with a root in . Then has a root in and a root in . If a splitting field has one root of a polynomial it has them all, and so we see that splits in both of these fields. Thus it splits in .      Let be the splitting field of over (a) Find a basis for as a vector space over . (b) Show that is not abelian.    Let be the splitting field of over   First, note that is irreducible in by Eisenstein's Criterion ( ) The roots of are - , - , - , and - . Let and notice . As we see that , and thus , meaning our basis will have eight elements: 1. 1 2. 3. 4. 5. 6. 7. 8.   Now that has been verified to be a splitting field, we see that is isomorphic to a subgroup of of degree .  Any subgroup of of order is a Sylow -subgroup. By Sylow's theorems, the number of Sylow -subgroups is either or .  If there are three they are all conjugate, and conjugation induces an isomorphism on the group, we see that all three subgroups are isomorphic.  Let be the set of left cosets of the subgroup of . Note that . Let act on by left multiplication. This action induces a homomorphism where is the permutation group on . As shown in class, the kernel of this homomorphism is the largest normal subgroup contained in , which is . Thus, is injective and the image of is a subgroup of isomorphic to .      Assume is an algebraic field extension such that every non-constant polynomial in splits completely into linear factors in . Prove is an algebraic closure of .    Let be an algebraic field extension such that every non-constant polynomial in splits completely into linear factors in .  Let be a polynomial in , so , with , and let be a root of . There [[Theorem – Existence and Uniqueness of Algebraic Closures|exists]] some field extension such that is algebraically closed, meaning . Notice that is [[Mathematics\/Definitions\/Algebraic|algebraic]] over .  Consider the chain of field extensions making algebraic over as well. As every non-constant polynomial in splits completely into linear factors in , this yields .      Let be the splitting field of over . (Recall that this extension occurred on the last problem set, and that where - , - , - , and - .) Prove .    Note that from the previous homework, we know that , and that . Additionally, we know the following: - , - , - , and - . Note that by Eisenstein's Criterion using we see that is irreducible in . As has characteristic 0, we see that is separable as well.  As is the splitting field of an irreducible polynomial in , by Theorem 2.90 we see that . In the Gaussian integers, it is known that if both and are nonzero then, is a Gaussian prime if and only if is an ordinary prime. Note that , and that , which is prime. Thus is prime in . Thus we may invoke Eisenstein's Criterion using to see that is irreducible in , as does not divide 5, but we'll prove it just to be sure.  Suppose . Then , so , and thus . As 5 has no imaginary component, it must be the case that , and thus that . Substituting in, we see that , and thus that , which has historically not been an integer.  Anyway, we may thus apply Porism 2.61 to see that there exists some such that . We may regard as an element of since, by definition, is a subgroup of .  As , observe the following glory: With that in mind, we examine and and don't forget So corresponds to the permutation (1 2 3 4). We have proven that is isomorphic to a subgroup of having order at most 8 and that it contains an element or order 2 and (1 2 3 4), an element of order 4. Since the subgroup generated by these two elements has order 8, we see that . (Also by Sylow's Theorem, only has one subgroup of order 8, and it is ).      Let be a positive integer and let be a prime integer. Consider the polynomial and define to be the splitting field of over .   Show that the set of roots of in is a subfield of .  Show that has exactly elements.        Let be the splitting field of over    Find, with justification, the degree of over .  Let where , a primitive root of unity. Prove is irreducible in .      Let be the splitting field of over   First, notice that by Eisenstein's Criterion]] ( ) we have irreducible in .  The roots of are the following: 1. 2. 3. 4. 5.   As is monic and irreducible, it is the minimum polynomial of . Let and notice .  Notice that , a primitive -th root of unity, is the root of , the fourth cyclotomic polynomial, which is monic and irreducible in (See: [[Proposition – Cyclotomic Polynomial Irreducible|Result]]). Thus is the minimum polynomial of and .  We know that , as every generator of can be written using and Let , , and . By the [[Proposition – The Degree Formula|Degree Formula]], we have - , and thus - , and thus As and we know that .  Thus we have .  Let where . From Part (a) we know . As , we know that has degree . As is a monic polynomial of degree , we see that it is the minimum polynomial and thus irreducible.      Let be the splitting field of over . (a) Prove, by adding two appropriate roots of or otherwise, that there exists such that and . (b) Determine, with justification, .    Let be the splitting field of over .  First, we note that the roots of are the following:   and First we examine . Notice that is a root of the polynomial , which is irreducible in using Eisenstein's Criterion]] with . Thus is monic and irreducible, making it the minimum polynomial of . Thus . Notice that , so . Thus there exists such that and .  Now let . Notice that is a root of the polynomial , which is irreducible in as and . Thus is monic and irreducible, making it the minimal polynomial of Thus and by the [[Proposition – The Degree Formula|Degree Formula]].  Notice that , so . Thus so is , and so we see that , and thus that as well, making . As seen in Part (a), each root can be expressed in terms of and , and so as well. Hence and we have .      Let where is an odd prime, and let be the splitting field of over . Find, with justification, .    Let where is an odd prime, and let be the splitting field of over . Using Eisenstein's Criterion with we see that is irreducible in . Notice that is a root of this polynomial. As is monic and irreducible it is the minimum polynomial of , and thus . Let be a primitive root of unity. Notice that is a root of the cyclotomic polynomial, , which is irreducible in by the Gospel of Mark.  As is the splitting field of , there exists a root of . Consider . As is algebraic in we know there exists some unique irreducible minimal polynomial of degree , and thus that . By the Degree Formula we see However, and so for some , so . As we must have . But was defined to be the degree of , which divides . As and , we see that , so for some . As irreducible polynomials multiplied by a constant are still irreducible, we see that is indeed irreducible in .  As is monic and irreducible in we see that it is the minimum polynomial of , and thus . As , we have .    "
},
{
  "id": "def-splitting-field",
  "level": "2",
  "url": "sec-splitting.html#def-splitting-field",
  "type": "Definition",
  "number": "1.63",
  "title": "",
  "body": "  For a field and non-constant polynomial , a splitting field of over is a field extension such that 1.  splits completely into linear factors in ; that is, for some , and 2. ; that is, is the smallest subfield of that contains and all the roots of .   "
},
{
  "id": "exe-common-splitting-fields",
  "level": "2",
  "url": "sec-splitting.html#exe-common-splitting-fields",
  "type": "Example",
  "number": "1.64",
  "title": "",
  "body": "  As a silly example, if already splits into linear factors over , then itself is the splitting field of over .  The splitting field of over is .  If is any irreducible quadratic polynomial in , then the splitting field of is .  In general, given , a splitting field of is given by where are all of the roots of in .   "
},
{
  "id": "remark-30",
  "level": "2",
  "url": "sec-splitting.html#remark-30",
  "type": "Remark",
  "number": "1.65",
  "title": "",
  "body": " More generally, we may speak of the splitting field of a list of polynomials in : it is a field extension over which each polynomial factors completely and which is generated by all the roots of all the polynomials.  Note that given a finite list , a splitting field for this list is identical to a splitting field for their product .  "
},
{
  "id": "thm-properties-of-splitting-fields",
  "level": "2",
  "url": "sec-splitting.html#thm-properties-of-splitting-fields",
  "type": "Theorem",
  "number": "1.66",
  "title": "",
  "body": "  Let be a field and a non-constant polynomial. 1. There exists a splitting field for over . 2. If is another splitting field of over , then there is a field isomorphism such that . 3. The degree of any splitting field of is at most where .    For (1), let be an algebraic closure of , which exists by the previous Theorem. Let be the roots of in , and set .  It is clear is a splitting field.  To prove (2), we proceed by induction on the degree of . If is linear, then the only splitting field of over is itself and so the result is clear in this case. Say and are the roots of in and , respectively, and say they are ordered so that, and are roots of the same irreducible factor of in .  By Corollary there is an isomorphism that fixes . Note that factors as in and that is the splitting field of over , and similarly factors as in and that is the splitting field of over . If we blur our eyes slightly and pretend is the identity map, we can apply the inductive hypothesis, since , to conclude that there is an isomorphism as in the statement. I leave a more rigorous argument to your imaginations.  To prove (3), we also proceed by induction on the degree of , using the same notation as in the proof of (2).  Since is a root of , we have and hence In we have with and, as before, is the splitting field of over , so that by induction . By the degree formula    "
},
{
  "id": "remark-31",
  "level": "2",
  "url": "sec-splitting.html#remark-31",
  "type": "Remark",
  "number": "1.67",
  "title": "",
  "body": " Recall from before that we proved there exists a field extension in which has at least one root. So for some and . We can then find a field extension of in which has at least one root , and so on. In this way we build a field extension such that factors in as for some . Finally, is a splitting field of .  "
},
{
  "id": "exe-splitting-fields-and-x3-2",
  "level": "2",
  "url": "sec-splitting.html#exe-splitting-fields-and-x3-2",
  "type": "Example",
  "number": "1.68",
  "title": "",
  "body": " The splitting field of over is , where . It is not hard to see that . We have since is irreducible in (by Eisenstein). Since and thus , the degree formula gives that . By the Theorem, and hence . (We could also have proven this without appealing to the Theorem.)  "
},
{
  "id": "exe-splitting-fields-and-x4-5x26",
  "level": "2",
  "url": "sec-splitting.html#exe-splitting-fields-and-x4-5x26",
  "type": "Example",
  "number": "1.69",
  "title": "",
  "body": " The splitting field of is This holds since . It is not too hard to see that the degree of this splitting field over is , far smaller than the upper bound given by the Theorem.  "
},
{
  "id": "exe-splitting-fields-and-xn-1",
  "level": "2",
  "url": "sec-splitting.html#exe-splitting-fields-and-xn-1",
  "type": "Example",
  "number": "1.70",
  "title": "",
  "body": " Let . Then splits completely in and its roots are the  -th roots of . One of these is . Notice that every other -th root of is a power of this one. We thus see that is the splitting field of over . This field is called the {} of roots of 1 over . This is a somewhat special example: upon joining one of the roots of we got all the others for free. This happens in other examples too, but is certainly {} a general principle.  In particular, we see that the degree of is at most , far less than the bound of given by the Proposition above. In fact, it is at most since factors as , and hence the minimum polynomial of is a divisor of .  When is prime, then is irreducible, as we proved before, and hence it must equal the minimum polynomial of . So, in this case, the degree of is exactly , but it can be smaller than in general; for example, when , and . Note that factors as and of course .  The irreducible polynomial is known as the {}.  "
},
{
  "id": "cor-porism",
  "level": "2",
  "url": "sec-splitting.html#cor-porism",
  "type": "Corollary",
  "number": "1.71",
  "title": "",
  "body": "  If is the splitting field over of an irreducible polynomial and if are any two roots of , then there is a field [[Mathematics\/Definitions\/Automorphism|automorphism]] such that and .    We basically already proved this, but since it is of large importance, let's do so again:  Since are roots of the same irreducible polynomial, by Corollary there is an isomorphism such that and . We have two field maps, (actual inclusion) and the composition of , and they realize as the splitting field of over in two different ways. Since splitting fields are unique, an isomorphism such as exists.   "
},
{
  "id": "exe-porism-and-x3-2",
  "level": "2",
  "url": "sec-splitting.html#exe-porism-and-x3-2",
  "type": "Example",
  "number": "1.72",
  "title": "",
  "body": " Let be the splitting field of over ; so .  The Porism gives that there is a field automorphism of such that . This one is clear – complex conjugation gives such an isomorphism.  It also gives there is a field automorphism of such that . This is less obvious.  "
},
{
  "id": "prop-intersection-of-splitting-fields",
  "level": "2",
  "url": "sec-splitting.html#prop-intersection-of-splitting-fields",
  "type": "Proposition",
  "number": "1.73",
  "title": "",
  "body": "  For fields and , we say is a finite splitting field over if is the splitting field over of some polynomial . Assume and are both finite splitting fields over and prove is also a finite splitting field over .    Let and be finite splitting fields over . So there exist polynomials such that splits in and splits in . Note that both and are finite extensions, as each can be reached by adjoining each of the roots of and , respectfully.  If then we have our splitting field, as is a splitting field over itself.  Let be an irreducible polynomial in with a root in . Then has a root in and a root in . If a splitting field has one root of a polynomial it has them all, and so we see that splits in both of these fields. Thus it splits in .   "
},
{
  "id": "prop-quartic-and-nonabelian-aut-group",
  "level": "2",
  "url": "sec-splitting.html#prop-quartic-and-nonabelian-aut-group",
  "type": "Proposition",
  "number": "1.74",
  "title": "",
  "body": "  Let be the splitting field of over (a) Find a basis for as a vector space over . (b) Show that is not abelian.    Let be the splitting field of over   First, note that is irreducible in by Eisenstein's Criterion ( ) The roots of are - , - , - , and - . Let and notice . As we see that , and thus , meaning our basis will have eight elements: 1. 1 2. 3. 4. 5. 6. 7. 8.   Now that has been verified to be a splitting field, we see that is isomorphic to a subgroup of of degree .  Any subgroup of of order is a Sylow -subgroup. By Sylow's theorems, the number of Sylow -subgroups is either or .  If there are three they are all conjugate, and conjugation induces an isomorphism on the group, we see that all three subgroups are isomorphic.  Let be the set of left cosets of the subgroup of . Note that . Let act on by left multiplication. This action induces a homomorphism where is the permutation group on . As shown in class, the kernel of this homomorphism is the largest normal subgroup contained in , which is . Thus, is injective and the image of is a subgroup of isomorphic to .   "
},
{
  "id": "prop-splitting-polynomials-and-alegbraic-closure",
  "level": "2",
  "url": "sec-splitting.html#prop-splitting-polynomials-and-alegbraic-closure",
  "type": "Proposition",
  "number": "1.75",
  "title": "",
  "body": "  Assume is an algebraic field extension such that every non-constant polynomial in splits completely into linear factors in . Prove is an algebraic closure of .    Let be an algebraic field extension such that every non-constant polynomial in splits completely into linear factors in .  Let be a polynomial in , so , with , and let be a root of . There [[Theorem – Existence and Uniqueness of Algebraic Closures|exists]] some field extension such that is algebraically closed, meaning . Notice that is [[Mathematics\/Definitions\/Algebraic|algebraic]] over .  Consider the chain of field extensions making algebraic over as well. As every non-constant polynomial in splits completely into linear factors in , this yields .   "
},
{
  "id": "proposition-82",
  "level": "2",
  "url": "sec-splitting.html#proposition-82",
  "type": "Proposition",
  "number": "1.76",
  "title": "",
  "body": "  Let be the splitting field of over . (Recall that this extension occurred on the last problem set, and that where - , - , - , and - .) Prove .    Note that from the previous homework, we know that , and that . Additionally, we know the following: - , - , - , and - . Note that by Eisenstein's Criterion using we see that is irreducible in . As has characteristic 0, we see that is separable as well.  As is the splitting field of an irreducible polynomial in , by Theorem 2.90 we see that . In the Gaussian integers, it is known that if both and are nonzero then, is a Gaussian prime if and only if is an ordinary prime. Note that , and that , which is prime. Thus is prime in . Thus we may invoke Eisenstein's Criterion using to see that is irreducible in , as does not divide 5, but we'll prove it just to be sure.  Suppose . Then , so , and thus . As 5 has no imaginary component, it must be the case that , and thus that . Substituting in, we see that , and thus that , which has historically not been an integer.  Anyway, we may thus apply Porism 2.61 to see that there exists some such that . We may regard as an element of since, by definition, is a subgroup of .  As , observe the following glory: With that in mind, we examine and and don't forget So corresponds to the permutation (1 2 3 4). We have proven that is isomorphic to a subgroup of having order at most 8 and that it contains an element or order 2 and (1 2 3 4), an element of order 4. Since the subgroup generated by these two elements has order 8, we see that . (Also by Sylow's Theorem, only has one subgroup of order 8, and it is ).   "
},
{
  "id": "proposition-83",
  "level": "2",
  "url": "sec-splitting.html#proposition-83",
  "type": "Proposition",
  "number": "1.77",
  "title": "",
  "body": "  Let be a positive integer and let be a prime integer. Consider the polynomial and define to be the splitting field of over .   Show that the set of roots of in is a subfield of .  Show that has exactly elements.     "
},
{
  "id": "prop-splitting-field-and-fifth-root-of-unity",
  "level": "2",
  "url": "sec-splitting.html#prop-splitting-field-and-fifth-root-of-unity",
  "type": "Proposition",
  "number": "1.78",
  "title": "",
  "body": "  Let be the splitting field of over    Find, with justification, the degree of over .  Let where , a primitive root of unity. Prove is irreducible in .      Let be the splitting field of over   First, notice that by Eisenstein's Criterion]] ( ) we have irreducible in .  The roots of are the following: 1. 2. 3. 4. 5.   As is monic and irreducible, it is the minimum polynomial of . Let and notice .  Notice that , a primitive -th root of unity, is the root of , the fourth cyclotomic polynomial, which is monic and irreducible in (See: [[Proposition – Cyclotomic Polynomial Irreducible|Result]]). Thus is the minimum polynomial of and .  We know that , as every generator of can be written using and Let , , and . By the [[Proposition – The Degree Formula|Degree Formula]], we have - , and thus - , and thus As and we know that .  Thus we have .  Let where . From Part (a) we know . As , we know that has degree . As is a monic polynomial of degree , we see that it is the minimum polynomial and thus irreducible.   "
},
{
  "id": "prop-splitting-field-of-positive-quartic",
  "level": "2",
  "url": "sec-splitting.html#prop-splitting-field-of-positive-quartic",
  "type": "Proposition",
  "number": "1.79",
  "title": "",
  "body": "  Let be the splitting field of over . (a) Prove, by adding two appropriate roots of or otherwise, that there exists such that and . (b) Determine, with justification, .    Let be the splitting field of over .  First, we note that the roots of are the following:   and First we examine . Notice that is a root of the polynomial , which is irreducible in using Eisenstein's Criterion]] with . Thus is monic and irreducible, making it the minimum polynomial of . Thus . Notice that , so . Thus there exists such that and .  Now let . Notice that is a root of the polynomial , which is irreducible in as and . Thus is monic and irreducible, making it the minimal polynomial of Thus and by the [[Proposition – The Degree Formula|Degree Formula]].  Notice that , so . Thus so is , and so we see that , and thus that as well, making . As seen in Part (a), each root can be expressed in terms of and , and so as well. Hence and we have .   "
},
{
  "id": "prop-splitting-field-prime-degree-polynomial",
  "level": "2",
  "url": "sec-splitting.html#prop-splitting-field-prime-degree-polynomial",
  "type": "Proposition",
  "number": "1.80",
  "title": "",
  "body": "  Let where is an odd prime, and let be the splitting field of over . Find, with justification, .    Let where is an odd prime, and let be the splitting field of over . Using Eisenstein's Criterion with we see that is irreducible in . Notice that is a root of this polynomial. As is monic and irreducible it is the minimum polynomial of , and thus . Let be a primitive root of unity. Notice that is a root of the cyclotomic polynomial, , which is irreducible in by the Gospel of Mark.  As is the splitting field of , there exists a root of . Consider . As is algebraic in we know there exists some unique irreducible minimal polynomial of degree , and thus that . By the Degree Formula we see However, and so for some , so . As we must have . But was defined to be the degree of , which divides . As and , we see that , so for some . As irreducible polynomials multiplied by a constant are still irreducible, we see that is indeed irreducible in .  As is monic and irreducible in we see that it is the minimum polynomial of , and thus . As , we have .   "
},
{
  "id": "sec-separable",
  "level": "1",
  "url": "sec-separable.html",
  "type": "Section",
  "number": "2.1",
  "title": "Separability",
  "body": " Separability  "
},
{
  "id": "sec-galext",
  "level": "1",
  "url": "sec-galext.html",
  "type": "Section",
  "number": "2.2",
  "title": "Galois Extensions",
  "body": " Galois Extensions  "
},
{
  "id": "sec-ftgt",
  "level": "1",
  "url": "sec-ftgt.html",
  "type": "Section",
  "number": "2.3",
  "title": "The Fundamental Theorem of Galois Theory",
  "body": " The Fundamental Theorem of Galois Theory  "
},
{
  "id": "sec-solvable-by-radicals",
  "level": "1",
  "url": "sec-solvable-by-radicals.html",
  "type": "Section",
  "number": "3.1",
  "title": "Solvability by Radicals",
  "body": " Solvability by Radicals  "
},
{
  "id": "sec-transcendental-elements",
  "level": "1",
  "url": "sec-transcendental-elements.html",
  "type": "Section",
  "number": "3.2",
  "title": "Transcendental Elements",
  "body": " Transcendental Elements  "
},
{
  "id": "sec-advanced-galois",
  "level": "1",
  "url": "sec-advanced-galois.html",
  "type": "Section",
  "number": "3.3",
  "title": "Advanced Galois Theory",
  "body": " Advanced Galois Theory  "
},
{
  "id": "sec-inverse-galois",
  "level": "1",
  "url": "sec-inverse-galois.html",
  "type": "Section",
  "number": "3.4",
  "title": "The Inverse Galois Problem",
  "body": " The Inverse Galois Problem  "
},
{
  "id": "sec-representations",
  "level": "1",
  "url": "sec-representations.html",
  "type": "Section",
  "number": "1.1",
  "title": "Representations",
  "body": " Representations    Let be a group. A representation of over a field is a -vector space equipped with a group homomorphism . More generally, a representation of over a ring is an -module equipped with group homomorphism . We may also say that  acts linearly on .     We can think of this data in a number of different ways.    Given a representation , the map satisfies the properties                    ,    In particular, the first two conditions say that acts on in the sense of group action on a set, and the last two say that the action of any element is by an -linear map. Conversely, any such function yields a representation .    If is free, then , where is the group of invertible matrices with entries in . By a slight abuse of notation, we will say that a group homomorphism is a representation of .        For any group , and any -module , there is the trivial representation  where for all . In this action, every element acts trivially on .    Any representation on is determined by specifying a group homomorphism .  For example, if (the multiplicative cyclic group of order ) and , there are possible such homomorphisms, determined by where .  Another important example of a rank 1 representation is the sign representation of the symmetric group , given by the group homomorphism which assigns to each permutation its sign, regarded as an element of the arbitrary ring .    The symmetric group acts on a free -module with basis by permuting coordinates: . For a concrete example, acts on , where, for example .    Let , symmetries of the equilateral polygon on vertices. Then acts linearly on by rotations and reflections. If is generated by (rotation by ) and (reflection about the -axis), then the associated group homomorphism maps     Let be a field, , and let . We see that the assignment is a representation. In particular, if , this is a representation of .       If and are -linear representations of on and respectively then a -equivariant map from to is an -module homomorphism such that for all . Equivalently the following diagram commutes:       If is a representation, a submodule is -stable if for all .     For acting by permuting a basis as above, and are stable subspaces.    For acting on as above, is a stable subspace.     Fix a group and a ring . The collection of left -linear representations of and -equivariant maps between them forms a category which we will denote .     Prove that if is any representation, then gives a faithful representation of .    Let be a matrix representation. Prove that the map is a degree representation.    Prove that the degree representations of are in bijective correspondence with the degree representations of the abelian group (where is the commutator subgroup of ).    Let be a (possibly infinite dimensional) -module ( is a finite group). Prove that for each there is an -submodule containing of dimension .    Prove that if then every simple -module has dimension less than .   "
},
{
  "id": "def-representation",
  "level": "2",
  "url": "sec-representations.html#def-representation",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": "  Let be a group. A representation of over a field is a -vector space equipped with a group homomorphism . More generally, a representation of over a ring is an -module equipped with group homomorphism . We may also say that  acts linearly on .   "
},
{
  "id": "remark-32",
  "level": "2",
  "url": "sec-representations.html#remark-32",
  "type": "Remark",
  "number": "1.2",
  "title": "",
  "body": " We can think of this data in a number of different ways.    Given a representation , the map satisfies the properties                    ,    In particular, the first two conditions say that acts on in the sense of group action on a set, and the last two say that the action of any element is by an -linear map. Conversely, any such function yields a representation .    If is free, then , where is the group of invertible matrices with entries in . By a slight abuse of notation, we will say that a group homomorphism is a representation of .    "
},
{
  "id": "example-51",
  "level": "2",
  "url": "sec-representations.html#example-51",
  "type": "Example",
  "number": "1.3",
  "title": "",
  "body": "   For any group , and any -module , there is the trivial representation  where for all . In this action, every element acts trivially on .    Any representation on is determined by specifying a group homomorphism .  For example, if (the multiplicative cyclic group of order ) and , there are possible such homomorphisms, determined by where .  Another important example of a rank 1 representation is the sign representation of the symmetric group , given by the group homomorphism which assigns to each permutation its sign, regarded as an element of the arbitrary ring .    The symmetric group acts on a free -module with basis by permuting coordinates: . For a concrete example, acts on , where, for example .    Let , symmetries of the equilateral polygon on vertices. Then acts linearly on by rotations and reflections. If is generated by (rotation by ) and (reflection about the -axis), then the associated group homomorphism maps     Let be a field, , and let . We see that the assignment is a representation. In particular, if , this is a representation of .    "
},
{
  "id": "def-equivariant-map",
  "level": "2",
  "url": "sec-representations.html#def-equivariant-map",
  "type": "Definition",
  "number": "1.4",
  "title": "",
  "body": "  If and are -linear representations of on and respectively then a -equivariant map from to is an -module homomorphism such that for all . Equivalently the following diagram commutes:    "
},
{
  "id": "def-stable-mod",
  "level": "2",
  "url": "sec-representations.html#def-stable-mod",
  "type": "Definition",
  "number": "1.5",
  "title": "",
  "body": "  If is a representation, a submodule is -stable if for all .   "
},
{
  "id": "example-52",
  "level": "2",
  "url": "sec-representations.html#example-52",
  "type": "Example",
  "number": "1.6",
  "title": "",
  "body": " For acting by permuting a basis as above, and are stable subspaces.  "
},
{
  "id": "example-53",
  "level": "2",
  "url": "sec-representations.html#example-53",
  "type": "Example",
  "number": "1.7",
  "title": "",
  "body": " For acting on as above, is a stable subspace.  "
},
{
  "id": "prop-equimaps-category",
  "level": "2",
  "url": "sec-representations.html#prop-equimaps-category",
  "type": "Proposition",
  "number": "1.8",
  "title": "",
  "body": "  Fix a group and a ring . The collection of left -linear representations of and -equivariant maps between them forms a category which we will denote .   "
},
{
  "id": "problem-154",
  "level": "2",
  "url": "sec-representations.html#problem-154",
  "type": "Problem",
  "number": "1.9",
  "title": "",
  "body": " Prove that if is any representation, then gives a faithful representation of .  "
},
{
  "id": "problem-155",
  "level": "2",
  "url": "sec-representations.html#problem-155",
  "type": "Problem",
  "number": "1.10",
  "title": "",
  "body": " Let be a matrix representation. Prove that the map is a degree representation.  "
},
{
  "id": "problem-156",
  "level": "2",
  "url": "sec-representations.html#problem-156",
  "type": "Problem",
  "number": "1.11",
  "title": "",
  "body": " Prove that the degree representations of are in bijective correspondence with the degree representations of the abelian group (where is the commutator subgroup of ).  "
},
{
  "id": "problem-157",
  "level": "2",
  "url": "sec-representations.html#problem-157",
  "type": "Problem",
  "number": "1.12",
  "title": "",
  "body": " Let be a (possibly infinite dimensional) -module ( is a finite group). Prove that for each there is an -submodule containing of dimension .  "
},
{
  "id": "problem-158",
  "level": "2",
  "url": "sec-representations.html#problem-158",
  "type": "Problem",
  "number": "1.13",
  "title": "",
  "body": " Prove that if then every simple -module has dimension less than .  "
},
{
  "id": "sec-group-rings-and-modules",
  "level": "1",
  "url": "sec-group-rings-and-modules.html",
  "type": "Section",
  "number": "1.2",
  "title": "Group Rings and Modules",
  "body": " Group Rings and Modules    For any ring and group , we define the group ring  as follows: As a set, is the free left -module with basis ; that is, We define addition as module addition; that is, Multiplication is the unique pairing that obeys the distributive laws and is such that is a subring, is a subgroup of , and every element of commutes with every element of . In general, we have where the inner sum is over pairs of group elements whose product is .    As a matter of notation, the element will be written as just and the element as just , so that we will regard and as subsets of . They overlap in the one element which will be written as just .  When is commutative (in particular when is a field), is an -algebra called the group -algebra of .   For any ring and , prove there is a ring isomorphism     Universal Mapping Property of Group Rings   Let be rings and a group. Given a ring homomorphism and a group homomorphism , such that for every we have that and commute in , there is a unique ring homomorphism such that and . Explicitly, is given by     Most of this follows from noticing that is a coproduct. Indeed, we can vie as an internal direct sum and hence it is the coproduct for the family where each . For each set up an -module homomorphism by mapping . Then the definition of coproduct gives a unique -module homomorphism From the way we defined the maps we can deduce that and and It remains to check that this map is in fact a ring homomorphism, i.e. it preserves multiplication. This can be done using the formula for above and the fact that and commute in .    If we assumed that is an -algebra in the proposition above, then we would not need the commutativity condition as is in the center of so it commutes with everything.    Let be a ring, a left -module, and a group. There is a bijection   Moreover, if and are representations, then is -equivariant if and only if it is -linear.    Given an -module structure on , for every , there is a map given by . We have , so is -linear. Moreover, the map that sends preserves multiplication and identity: and . Thus, we obtain an -linear representation .  Conversely, recall that a module structure on an abelian group is equivalent to a ring homomorphism to its endomorphism ring over . Given a representation by considering we get a group homomorphism to the unit subgroup of . The action of on gives a ring homomorphism . For and , we have for all . Thus, by the universal property, we get a well-defined ring homomorphism , and hence an -module structure, which is easily seen to follow the formula above.  We leave the final claim as an exercise.    We can think of these bijections as yielding mutually inverse functors and .  "
},
{
  "id": "def-groupring",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#def-groupring",
  "type": "Definition",
  "number": "1.14",
  "title": "",
  "body": "  For any ring and group , we define the group ring  as follows: As a set, is the free left -module with basis ; that is, We define addition as module addition; that is, Multiplication is the unique pairing that obeys the distributive laws and is such that is a subring, is a subgroup of , and every element of commutes with every element of . In general, we have where the inner sum is over pairs of group elements whose product is .   "
},
{
  "id": "remark-33",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#remark-33",
  "type": "Remark",
  "number": "1.15",
  "title": "",
  "body": "As a matter of notation, the element will be written as just and the element as just , so that we will regard and as subsets of . They overlap in the one element which will be written as just . "
},
{
  "id": "remark-34",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#remark-34",
  "type": "Remark",
  "number": "1.16",
  "title": "",
  "body": "When is commutative (in particular when is a field), is an -algebra called the group -algebra of . "
},
{
  "id": "problem-159",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#problem-159",
  "type": "Problem",
  "number": "1.17",
  "title": "",
  "body": " For any ring and , prove there is a ring isomorphism   "
},
{
  "id": "prop-ump-groupring",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#prop-ump-groupring",
  "type": "Proposition",
  "number": "1.18",
  "title": "Universal Mapping Property of Group Rings.",
  "body": " Universal Mapping Property of Group Rings   Let be rings and a group. Given a ring homomorphism and a group homomorphism , such that for every we have that and commute in , there is a unique ring homomorphism such that and . Explicitly, is given by     Most of this follows from noticing that is a coproduct. Indeed, we can vie as an internal direct sum and hence it is the coproduct for the family where each . For each set up an -module homomorphism by mapping . Then the definition of coproduct gives a unique -module homomorphism From the way we defined the maps we can deduce that and and It remains to check that this map is in fact a ring homomorphism, i.e. it preserves multiplication. This can be done using the formula for above and the fact that and commute in .   "
},
{
  "id": "remark-35",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#remark-35",
  "type": "Remark",
  "number": "1.19",
  "title": "",
  "body": "If we assumed that is an -algebra in the proposition above, then we would not need the commutativity condition as is in the center of so it commutes with everything. "
},
{
  "id": "lem-repsmods",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#lem-repsmods",
  "type": "Lemma",
  "number": "1.20",
  "title": "",
  "body": "  Let be a ring, a left -module, and a group. There is a bijection   Moreover, if and are representations, then is -equivariant if and only if it is -linear.    Given an -module structure on , for every , there is a map given by . We have , so is -linear. Moreover, the map that sends preserves multiplication and identity: and . Thus, we obtain an -linear representation .  Conversely, recall that a module structure on an abelian group is equivalent to a ring homomorphism to its endomorphism ring over . Given a representation by considering we get a group homomorphism to the unit subgroup of . The action of on gives a ring homomorphism . For and , we have for all . Thus, by the universal property, we get a well-defined ring homomorphism , and hence an -module structure, which is easily seen to follow the formula above.  We leave the final claim as an exercise.   "
},
{
  "id": "remark-36",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#remark-36",
  "type": "Remark",
  "number": "1.21",
  "title": "",
  "body": "We can think of these bijections as yielding mutually inverse functors and . "
},
{
  "id": "sec-simple-modules",
  "level": "1",
  "url": "sec-simple-modules.html",
  "type": "Section",
  "number": "2.1",
  "title": "Simple Modules",
  "body": " Simple Modules  Now we proceed to discuss some smallness conditions on modules. The first key notion is that of a simple module. Simple modules are the atoms in module theory.    An -module is simple if there are no nonzero proper submodules of .      Let be a nonzero -module. The following are equivalent:    is simple     for all      for some maximal left ideal .       For a left ideal , the submodules of are in bijective correspondence with the left -submodules of that contain , i.e., the left ideals that contain . It is then clear that if is a maximal left ideal, then is simple, so (3) implies (1). On the other hand, if is simple then it is cyclic (since (1) implies (2)), so for some left ideal , and if for some proper left ideal , then ; thus (1) implies (3).       If is a field, a -vector space is simple if and only if it is -dimensional. Moreover, if is a -algebra, then any -module that is -dimensional as a vector space is a simple -module as well.    If is commutative, then an -module is simple if and only if is isomorphic to a field.    Let , and be the natural -dimensional representation by reflections and rotations. Then is a simple -module, since there are no -stable subspaces.    Let be a field, or more generally a division ring, and let . The module of column vectors is a simple -module Indeed, if , say ; then , and since is generated by the standard vectors , .      Schur's Lemma   Let be a ring, and be two simple -modules. Then every nonzero -module homomorphism is an isomorphism. In particular, is a division ring.    For the first assertion, let be -linear and nonzero. Then , so by simplicity, and , so .  For the second, recall that is a ring. If is nonzero, then by the first part, it is an isomorphism, so it has a two-sided inverse in .    "
},
{
  "id": "def-simple-module",
  "level": "2",
  "url": "sec-simple-modules.html#def-simple-module",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": "  An -module is simple if there are no nonzero proper submodules of .   "
},
{
  "id": "lem-equiv-simple-mod",
  "level": "2",
  "url": "sec-simple-modules.html#lem-equiv-simple-mod",
  "type": "Lemma",
  "number": "2.2",
  "title": "",
  "body": "  Let be a nonzero -module. The following are equivalent:    is simple     for all      for some maximal left ideal .       For a left ideal , the submodules of are in bijective correspondence with the left -submodules of that contain , i.e., the left ideals that contain . It is then clear that if is a maximal left ideal, then is simple, so (3) implies (1). On the other hand, if is simple then it is cyclic (since (1) implies (2)), so for some left ideal , and if for some proper left ideal , then ; thus (1) implies (3).   "
},
{
  "id": "example-54",
  "level": "2",
  "url": "sec-simple-modules.html#example-54",
  "type": "Example",
  "number": "2.3",
  "title": "",
  "body": "   If is a field, a -vector space is simple if and only if it is -dimensional. Moreover, if is a -algebra, then any -module that is -dimensional as a vector space is a simple -module as well.    If is commutative, then an -module is simple if and only if is isomorphic to a field.    Let , and be the natural -dimensional representation by reflections and rotations. Then is a simple -module, since there are no -stable subspaces.    Let be a field, or more generally a division ring, and let . The module of column vectors is a simple -module Indeed, if , say ; then , and since is generated by the standard vectors , .    "
},
{
  "id": "lem-schurs",
  "level": "2",
  "url": "sec-simple-modules.html#lem-schurs",
  "type": "Lemma",
  "number": "2.4",
  "title": "Schur's Lemma.",
  "body": " Schur's Lemma   Let be a ring, and be two simple -modules. Then every nonzero -module homomorphism is an isomorphism. In particular, is a division ring.    For the first assertion, let be -linear and nonzero. Then , so by simplicity, and , so .  For the second, recall that is a ring. If is nonzero, then by the first part, it is an isomorphism, so it has a two-sided inverse in .   "
},
{
  "id": "sec-fl-modules",
  "level": "1",
  "url": "sec-fl-modules.html",
  "type": "Section",
  "number": "2.2",
  "title": "Finite Length Modules",
  "body": " Finite Length Modules    Given a short exact sequence we may think of the middle module as built out of and ; we call an extension of and . Suppose that a module has a finite sequence of submodules we call such a sequence a filtration . Then is an extension of and , is an extension of and , and so on. We might think of as built from like so.      A module has finite length if it has a filtration of the form with simple for each ; such a filtration is called a composition series of length  . We say a composition series is strict if for all . Two composition series are equivalent if the collections of composition factors are the same up to reordering. The length of a finite length module , denoted , is the minimum of the lengths of a composition series of . If has does not have finite length, we say that has infinite length, or .    Let be a field and . Then any filtration of the form where is a line through the origin is a strict composition series.   Let be a short exact sequence. Given filtrations \/ composition series \/ strict composition series and we can make a filtration \/ composition series \/ strict composition series of by   Conversely, given a filtration \/ composition series \/ strict composition series of that contains as a term, we can obtain filtrations \/ composition series \/ strict composition series of and by applying to the terms up through and applying to the terms from on. However, not every filtration \/ composition series of a module will contain a fixed submodule as a term.    JOrdan-Holder Theorem   Let be a module of finite length.     If is a proper submodule, then .    If is a nonzero submodule and , then .    Any filtration of can be refined to a composition series.    All strict composition series for are equivalent, and hence have the same length.       If , consider a strict composition series of of length , say      Consider the filtration By the Second Isomorphism Theorem, its composition factors satisfy The right hand side is a submodule of , which by assumption is simple, so our filtration is in fact a composition series of length . Then for any either We claim that the latter case does not hold for all : if it did, we would have , and inductively for all and in particular for , we have , contradicting that is proper. Thus, for some , the first case holds. We can then skip that and obtain a composition series of length less than , so .    Consider the filtration The factors satisfy and since , these are quotient modules of the simple module , so this is a composition series. Then for any either   We claim that the latter case does not hold for all : if it did, we would have then for all , so for all , and hence , contradicting that . Thus, for some , the first case holds, and we can skip that to obtain a composition series of length less than , so .    We proceed by induction on length again. Given a filtration of , we can suppose that there is some nonzero proper submodule in the filtration, since otherwise we could just take any composition series. Then and has length less than . The filtration up to can be refined to a strict composition series by the induction hypothesis, and the filtration from to taken mod can be refined to a strict composition series for ; pulling back as in the remark above, we get the strict composition series we want.    We show by induction on that for any module of length , all of its strict composition series are equivalent. Assume that . If , the claim is clear since we are dealing with a simple module. Suppose that is another strict composition series for , so . If , then since the two composition series we have for are equivalent by induction, so the two given series are equivalent.  If , since is simple, is not properly contained in , so the image of in is nonzero, so equals all of , which means that . Set . By the second isomorphism theorem, we then have and similarly , and both of these modules are simple.  Fix a strict composition series for : and extend to a strict composition series for : Since we also have the strict composition series of length , we must have that and is equivalent to . Thus, the composition factors of are those of plus one copy of .  Now, is a strict composition series for , so . Then, is equivalent to the strict composition series Thus, the composition factors of are those of plus one copy of .  It follows that the composition series and are equivalent.           If is a field, then a -vector space of dimension is a -module of length .    If is a -algebra, and is an -module that as a -vector space has dimension , then , since the vector space dimension of a proper submodule is strictly smaller.    The ring does not have finite length as a module over itself.     has length as a -module, with strict composition series       "
},
{
  "id": "def-finite-length",
  "level": "2",
  "url": "sec-fl-modules.html#def-finite-length",
  "type": "Definition",
  "number": "2.5",
  "title": "",
  "body": "  Given a short exact sequence we may think of the middle module as built out of and ; we call an extension of and . Suppose that a module has a finite sequence of submodules we call such a sequence a filtration . Then is an extension of and , is an extension of and , and so on. We might think of as built from like so.   "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-fl-modules.html#def-",
  "type": "Definition",
  "number": "2.6",
  "title": "",
  "body": "  A module has finite length if it has a filtration of the form with simple for each ; such a filtration is called a composition series of length  . We say a composition series is strict if for all . Two composition series are equivalent if the collections of composition factors are the same up to reordering. The length of a finite length module , denoted , is the minimum of the lengths of a composition series of . If has does not have finite length, we say that has infinite length, or .   "
},
{
  "id": "example-55",
  "level": "2",
  "url": "sec-fl-modules.html#example-55",
  "type": "Example",
  "number": "2.7",
  "title": "",
  "body": "Let be a field and . Then any filtration of the form where is a line through the origin is a strict composition series. "
},
{
  "id": "remark-37",
  "level": "2",
  "url": "sec-fl-modules.html#remark-37",
  "type": "Remark",
  "number": "2.8",
  "title": "",
  "body": " Let be a short exact sequence. Given filtrations \/ composition series \/ strict composition series and we can make a filtration \/ composition series \/ strict composition series of by   Conversely, given a filtration \/ composition series \/ strict composition series of that contains as a term, we can obtain filtrations \/ composition series \/ strict composition series of and by applying to the terms up through and applying to the terms from on. However, not every filtration \/ composition series of a module will contain a fixed submodule as a term.  "
},
{
  "id": "thm-jordan-holder",
  "level": "2",
  "url": "sec-fl-modules.html#thm-jordan-holder",
  "type": "Theorem",
  "number": "2.9",
  "title": "JOrdan-Holder Theorem.",
  "body": " JOrdan-Holder Theorem   Let be a module of finite length.     If is a proper submodule, then .    If is a nonzero submodule and , then .    Any filtration of can be refined to a composition series.    All strict composition series for are equivalent, and hence have the same length.       If , consider a strict composition series of of length , say      Consider the filtration By the Second Isomorphism Theorem, its composition factors satisfy The right hand side is a submodule of , which by assumption is simple, so our filtration is in fact a composition series of length . Then for any either We claim that the latter case does not hold for all : if it did, we would have , and inductively for all and in particular for , we have , contradicting that is proper. Thus, for some , the first case holds. We can then skip that and obtain a composition series of length less than , so .    Consider the filtration The factors satisfy and since , these are quotient modules of the simple module , so this is a composition series. Then for any either   We claim that the latter case does not hold for all : if it did, we would have then for all , so for all , and hence , contradicting that . Thus, for some , the first case holds, and we can skip that to obtain a composition series of length less than , so .    We proceed by induction on length again. Given a filtration of , we can suppose that there is some nonzero proper submodule in the filtration, since otherwise we could just take any composition series. Then and has length less than . The filtration up to can be refined to a strict composition series by the induction hypothesis, and the filtration from to taken mod can be refined to a strict composition series for ; pulling back as in the remark above, we get the strict composition series we want.    We show by induction on that for any module of length , all of its strict composition series are equivalent. Assume that . If , the claim is clear since we are dealing with a simple module. Suppose that is another strict composition series for , so . If , then since the two composition series we have for are equivalent by induction, so the two given series are equivalent.  If , since is simple, is not properly contained in , so the image of in is nonzero, so equals all of , which means that . Set . By the second isomorphism theorem, we then have and similarly , and both of these modules are simple.  Fix a strict composition series for : and extend to a strict composition series for : Since we also have the strict composition series of length , we must have that and is equivalent to . Thus, the composition factors of are those of plus one copy of .  Now, is a strict composition series for , so . Then, is equivalent to the strict composition series Thus, the composition factors of are those of plus one copy of .  It follows that the composition series and are equivalent.      "
},
{
  "id": "example-56",
  "level": "2",
  "url": "sec-fl-modules.html#example-56",
  "type": "Example",
  "number": "2.10",
  "title": "",
  "body": "    If is a field, then a -vector space of dimension is a -module of length .    If is a -algebra, and is an -module that as a -vector space has dimension , then , since the vector space dimension of a proper submodule is strictly smaller.    The ring does not have finite length as a module over itself.     has length as a -module, with strict composition series      "
},
{
  "id": "sec-chain-conditions",
  "level": "1",
  "url": "sec-chain-conditions.html",
  "type": "Chapter",
  "number": "3",
  "title": "Chain Conditions",
  "body": " Chain Conditions    We say a poset satisfies the ascending chain condition or ACC if every totally ordered nonempty subset of has a maximum element.      We say a poset satisfies the descending chain condition or DCC if every totally ordered nonempty subset of has a minimum element.     For a poset , the following are equivalent:     Every totally ordered nonempty subset has a maximum element (i.e., has ACC)    Every totally ordered subset indexed by , has a maximum element (i.e., )    Every nonempty subset of has a maximum element.     Indeed, (3) (1) (2) is clear. Given a totally ordered nonempty subset with no maximum, one can inductively keep choosing larger elements and obtain a countable such subset, so (2) (1). If any totally ordered nonempty subset of has a maximum element, then the same property holds for any nonempty subset of , so by Zorn’s Lemma, such a has a maximum element. The analogous equivalences hold with DCC.   Note that the condition (3) asserts that any nonempty subset of has an element that is maximal within the subset , not maximal within .    Let be a ring and be an -module.   We say that is Noetherian if the poset of submodules of partially ordered by containment has ACC.    We say that is Artinian if the poset of submodules of partially ordered by containment has DCC.    We say that is left Noetherian if is Noetherian as a left -module; i.e., the poset of left ideals of under containment has ACC.    We say that is left Artinian if is Artinian as a left -module; i.e., the poset of left ideals of under containment has DCC.     If is commutative, left ideals and right ideals are the same, so we will just say is Noetherian or Artinian.        A division ring is both left Noetherian and left Artinian.    If is a PID but not a field (e.g., or ), then is Noetherian but not Artinian. To see is Noetherian, note that any ideal is of the form for some irreducible elements and positive integers . An ideal contains if it corresponds to a product of the same irreducibles with smaller or equal multiplicities; there are only finitely many of these so an ascending chain must stablilize. To see is not Artinian, take some irreducible and take the chain     A polynomial ring in infinitely many variables is neither Noetherian nor Artinian: there is an ascending chain and take a descending chain as in the last example.    The -module , where is the subring of generated by and , is Artinian but not Noetherian. Suppose that is generated by , where each is odd (we can write any element in like so). Observe that for each , there are integers such that , so . Thus, is generated by . Thus, the submodules of are itself, , and for . We have so is not Noetherian. However, any descending chain is either always equal to , or else has some as a term, and there are finitely many submodules of such an , so must stabilize.    The subring of given as is left Noetherian but not right Noetherian.       Let be a short exact sequence. Then has ACC (resp DCC) if and only if and have ACC (resp. DCC).   The Noetherian condition is intimately tied to finite generation.    Let be an -module. Then has ACC if and only if every submodule of is finitely generated.    Suppose that is not finitely generated. Then we can construct an ascending chain of submodules of given by setting , and for some ; we can do this since each is a finitely generated submodule of , so is not equal to .  Now suppose that every submodule of is finitely generated. Given a countable ascending chain of submodules let ; this is a submodule of . Take a finite generating set for . For each , we have for some . Since there are finitely many 's there is some that contains them all. But then , so the chain stabilizes (i.e., achieves a maximum element).      Let be left Noetherian. Then a module is finitely generated if and only if it is left Noetherian. In particular, in a left Noetherian ring, every submodule of a finitely generated module is finitely generated.    For the first statement, the if implication holds in general without the hypothesis on . For the other implication, observe that there are short exact sequences for all . So, by the exercise above and induction on , every finitely generated free module is Noetherian. Now, if is finitely generated, there is a short exact sequence of the form so by the exercise above again, is Noetherian.  The second statement follows from the first as a submodule of a Noetherian module is Noetherian, again by the exercise    Now we tie these chain conditions to length.    A module has finite length if and only if it is both Noetherian and Artinian.    Assume that has finite length. Suppose that is not Noetherian. Then there is a chain Since each is a submodule of , its length is finite, and is a nonnegative integer. Then , which yields a contradiction. The argument that is Artinian is similar.  Now assume that is both Noetherian and Artinian. We will construct a composition series for . We can assume that . Consider the collection of proper submodules of . This is nonempty, so has a maximal element by the Noetherian hypothesis. We must have is simple, or else there is a module in between and . Using Noetherianity again, if (we’re done otherwise), there is a maximal proper submodule of ; call it . This process yields a descending chain with simple quotients, and this must stop (i.e., yield for some ) by the Artinian hypothesis. Thus, there is a composition series for .    "
},
{
  "id": "def-acc",
  "level": "2",
  "url": "sec-chain-conditions.html#def-acc",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": "  We say a poset satisfies the ascending chain condition or ACC if every totally ordered nonempty subset of has a maximum element.   "
},
{
  "id": "def-dcc",
  "level": "2",
  "url": "sec-chain-conditions.html#def-dcc",
  "type": "Definition",
  "number": "3.2",
  "title": "",
  "body": "  We say a poset satisfies the descending chain condition or DCC if every totally ordered nonempty subset of has a minimum element.   "
},
{
  "id": "remark-38",
  "level": "2",
  "url": "sec-chain-conditions.html#remark-38",
  "type": "Remark",
  "number": "3.3",
  "title": "",
  "body": " For a poset , the following are equivalent:     Every totally ordered nonempty subset has a maximum element (i.e., has ACC)    Every totally ordered subset indexed by , has a maximum element (i.e., )    Every nonempty subset of has a maximum element.     Indeed, (3) (1) (2) is clear. Given a totally ordered nonempty subset with no maximum, one can inductively keep choosing larger elements and obtain a countable such subset, so (2) (1). If any totally ordered nonempty subset of has a maximum element, then the same property holds for any nonempty subset of , so by Zorn’s Lemma, such a has a maximum element. The analogous equivalences hold with DCC.  "
},
{
  "id": "def-noeth-art-mod",
  "level": "2",
  "url": "sec-chain-conditions.html#def-noeth-art-mod",
  "type": "Definition",
  "number": "3.4",
  "title": "",
  "body": "  Let be a ring and be an -module.   We say that is Noetherian if the poset of submodules of partially ordered by containment has ACC.    We say that is Artinian if the poset of submodules of partially ordered by containment has DCC.    We say that is left Noetherian if is Noetherian as a left -module; i.e., the poset of left ideals of under containment has ACC.    We say that is left Artinian if is Artinian as a left -module; i.e., the poset of left ideals of under containment has DCC.     If is commutative, left ideals and right ideals are the same, so we will just say is Noetherian or Artinian.   "
},
{
  "id": "example-57",
  "level": "2",
  "url": "sec-chain-conditions.html#example-57",
  "type": "Example",
  "number": "3.5",
  "title": "",
  "body": "    A division ring is both left Noetherian and left Artinian.    If is a PID but not a field (e.g., or ), then is Noetherian but not Artinian. To see is Noetherian, note that any ideal is of the form for some irreducible elements and positive integers . An ideal contains if it corresponds to a product of the same irreducibles with smaller or equal multiplicities; there are only finitely many of these so an ascending chain must stablilize. To see is not Artinian, take some irreducible and take the chain     A polynomial ring in infinitely many variables is neither Noetherian nor Artinian: there is an ascending chain and take a descending chain as in the last example.    The -module , where is the subring of generated by and , is Artinian but not Noetherian. Suppose that is generated by , where each is odd (we can write any element in like so). Observe that for each , there are integers such that , so . Thus, is generated by . Thus, the submodules of are itself, , and for . We have so is not Noetherian. However, any descending chain is either always equal to , or else has some as a term, and there are finitely many submodules of such an , so must stabilize.    The subring of given as is left Noetherian but not right Noetherian.     "
},
{
  "id": "problem-160",
  "level": "2",
  "url": "sec-chain-conditions.html#problem-160",
  "type": "Problem",
  "number": "3.6",
  "title": "",
  "body": " Let be a short exact sequence. Then has ACC (resp DCC) if and only if and have ACC (resp. DCC).  "
},
{
  "id": "prop-noeth-fg-mod",
  "level": "2",
  "url": "sec-chain-conditions.html#prop-noeth-fg-mod",
  "type": "Proposition",
  "number": "3.7",
  "title": "",
  "body": "  Let be an -module. Then has ACC if and only if every submodule of is finitely generated.    Suppose that is not finitely generated. Then we can construct an ascending chain of submodules of given by setting , and for some ; we can do this since each is a finitely generated submodule of , so is not equal to .  Now suppose that every submodule of is finitely generated. Given a countable ascending chain of submodules let ; this is a submodule of . Take a finite generating set for . For each , we have for some . Since there are finitely many 's there is some that contains them all. But then , so the chain stabilizes (i.e., achieves a maximum element).   "
},
{
  "id": "prop-lnoeth-fg-mod",
  "level": "2",
  "url": "sec-chain-conditions.html#prop-lnoeth-fg-mod",
  "type": "Proposition",
  "number": "3.8",
  "title": "",
  "body": "  Let be left Noetherian. Then a module is finitely generated if and only if it is left Noetherian. In particular, in a left Noetherian ring, every submodule of a finitely generated module is finitely generated.    For the first statement, the if implication holds in general without the hypothesis on . For the other implication, observe that there are short exact sequences for all . So, by the exercise above and induction on , every finitely generated free module is Noetherian. Now, if is finitely generated, there is a short exact sequence of the form so by the exercise above again, is Noetherian.  The second statement follows from the first as a submodule of a Noetherian module is Noetherian, again by the exercise   "
},
{
  "id": "prop-fl-mod-iff",
  "level": "2",
  "url": "sec-chain-conditions.html#prop-fl-mod-iff",
  "type": "Proposition",
  "number": "3.9",
  "title": "",
  "body": "  A module has finite length if and only if it is both Noetherian and Artinian.    Assume that has finite length. Suppose that is not Noetherian. Then there is a chain Since each is a submodule of , its length is finite, and is a nonnegative integer. Then , which yields a contradiction. The argument that is Artinian is similar.  Now assume that is both Noetherian and Artinian. We will construct a composition series for . We can assume that . Consider the collection of proper submodules of . This is nonempty, so has a maximal element by the Noetherian hypothesis. We must have is simple, or else there is a module in between and . Using Noetherianity again, if (we’re done otherwise), there is a maximal proper submodule of ; call it . This process yields a descending chain with simple quotients, and this must stop (i.e., yield for some ) by the Artinian hypothesis. Thus, there is a composition series for .   "
},
{
  "id": "ch-semisimple-mod",
  "level": "1",
  "url": "ch-semisimple-mod.html",
  "type": "Chapter",
  "number": "4",
  "title": "Semisimple Modules",
  "body": " Semisimple Modules  We now study an important condition that is somewhat orthogonal (yet somewhat related) to our chain conditions. The condition of finite length, and to some extent the Noetherian and Artinian conditions, were related to how a module is made out of building blocks, or how big it is in terms of its pieces. The condition of semisimplicity says that a module is composed of basic building blocks in the simplest possible way.    For any ring , a left -module is called semisimple if it is a (possibly infinite) direct sum of simple modules. The empty direct sum is allowed, so that the module is considered to be semisimple.     Let be a finitely generated -module. Then by the FTFGAG, is isomorphic to for some , , primes and positive integers . Such a module is semisimple if and only if and for all .    Every module over a division ring is semisimple because any such module has a basis, hence it is a free module.     Let be a division ring and set for some . I claim is semisimple as a left module over itself.    For each , let denote the subset of consisting of matrices whose only nonzero entires belong to the -th column. The rules for matrix addition and multiplication show that is a left ideal (i.e., a left submodule) of . Moreover, there is evident bijection between and (column vectors) and this bijection is an isomorphism of left -modules. We proved is simple as an -module and hence so is . Finally, is the internal direct sum of : because each matrix is uniquely a sum of the form with .     Let be an infinite collection of nonzero modules. Then is not finitely generated.    As a consequence of the above exercise, a module is a finitely generated semisimple module if and only if it is a finite direct sum of simple modules. In this case if we write as a sum of simple modules, there is a strict composition series so has finite length, namely length , and the composition factors are the modules .    Krull-Schmidt for Semisimple Modules   Let be a finitely generated semisimple module. Given two direct sum decompositions as simple modules then , and there is a permutation such that for all     Follows from the previous remark and the Jordan-Holder theorem.     Equivalent Conditions for Semisimple Modules   For any ring and left -module , the following are equivalent:      is semisimple,    very submodule of is a summand; i.e., for every submodule of there is a submodule such that is the internal direct sum of and ,    every injective -map is split has a left inverse,    every SES of the form is split exact,    every surjective -map has a right inverse.       The equivalence of (3), (4), and (5) is given by the Splitting Theorem.   holds since given an injective map as in (3), we have by (2) that is a summand of , hence there is a projection homomorphism that splits the inclusion of the summand into , that is . Now is an isomorphism so we may consider the -module homomorphism and set to be . Then    holds since we can split the inclusion and thus also the SES Therefore the Splitting Theorem yields where denotes the splitting of the quotient map .  The hard part is proving . Assume (1), so that for some collection of simple submodules , and let be any submodule. (It is important to note that it does not necessarily follow that is a sum of some subcollection of the ) . Consider the collection of subsets of such that where we define . View as a poset by inclusion. It is nonempty since belongs to . If is a totally ordered subcollection of , let . I claim . If not, there is a nonzero element . But since for all but a finite number of ’s and since the collection of ’s was totally ordered, there is some such that , a contradiction. We may thus apply Zorn’s Lemma to get a maximal .  I claim is the internal direct sum of and . We have since and so it suffices to prove . Since , the latter is equivalent to proving that for all . If this fails for some , then since is a proper submodule of , which is simple, and hence . But then (if and , with and , then so and , and then .) So, is a member of that strictly contains , a contradiction. It must be thar .   Now assume that every submodule of is a summand. We proceed in three steps:  (i) We claim that every submodule of inherits this property; i.e., every submodule of is a summand of . For say is a submodule. By assumption on , we have (internal direct sum) for some . Since , it follows that . (Given , we have for some . Since , .) Since , this shows .  (ii) We claim that every nonzero submodule of contains a simple summand. Pick and apply Zorn’s Lemma to show that there is a maximal submodule of with respect to the property that . We have by (i) for some . If is not simple, then contains a nonzero, proper submodule and hence, by using (i) again, we get that for some proper nonzero submodule  .  These properties implies that . One containment is clear. If belongs to the left side, then . It follows that and so , and hence . So, either or , and either way we reach a contradiction to the maximality of .  (iii) Let be the set of all simple submodules of , and let Equivalently, the module generated by the modules in their direct sum. The set is partially ordered by inclusion. It is nonempty, since (or some singleton is in there by (ii)). Given a chain in , is again an element of , so there is a maximal element in ; call it . Let be the direct sum of  .  We claim that . By hypothesis we have for some . If we are done. Otherwise by (ii) (and (i) again) we have for some simple submodule . But then , contradicting maximality of .      If semisimple, so is every submodule and quotient module of .    Say is a submodule. By the claim marked (i) in the proof of Theorem  every submodule of is a summand, and hence is semisimple by Theorem   .  Given a surjection , it splits by Theorem  , so that is isomorphic to a submodule of , namely the image of under the splitting map. Hence is semisimple by the case already proven.    A major source of semisimple modules comes from group rings.  "
},
{
  "id": "def-semisimple-mod",
  "level": "2",
  "url": "ch-semisimple-mod.html#def-semisimple-mod",
  "type": "Definition",
  "number": "4.1",
  "title": "",
  "body": "  For any ring , a left -module is called semisimple if it is a (possibly infinite) direct sum of simple modules. The empty direct sum is allowed, so that the module is considered to be semisimple.   "
},
{
  "id": "example-58",
  "level": "2",
  "url": "ch-semisimple-mod.html#example-58",
  "type": "Example",
  "number": "4.2",
  "title": "",
  "body": " Let be a finitely generated -module. Then by the FTFGAG, is isomorphic to for some , , primes and positive integers . Such a module is semisimple if and only if and for all .  "
},
{
  "id": "example-59",
  "level": "2",
  "url": "ch-semisimple-mod.html#example-59",
  "type": "Example",
  "number": "4.3",
  "title": "",
  "body": " Every module over a division ring is semisimple because any such module has a basis, hence it is a free module.  "
},
{
  "id": "lem-matrixsemisimple",
  "level": "2",
  "url": "ch-semisimple-mod.html#lem-matrixsemisimple",
  "type": "Lemma",
  "number": "4.4",
  "title": "",
  "body": "  Let be a division ring and set for some . I claim is semisimple as a left module over itself.    For each , let denote the subset of consisting of matrices whose only nonzero entires belong to the -th column. The rules for matrix addition and multiplication show that is a left ideal (i.e., a left submodule) of . Moreover, there is evident bijection between and (column vectors) and this bijection is an isomorphism of left -modules. We proved is simple as an -module and hence so is . Finally, is the internal direct sum of : because each matrix is uniquely a sum of the form with .   "
},
{
  "id": "problem-161",
  "level": "2",
  "url": "ch-semisimple-mod.html#problem-161",
  "type": "Problem",
  "number": "4.5",
  "title": "",
  "body": " Let be an infinite collection of nonzero modules. Then is not finitely generated.  "
},
{
  "id": "remark-39",
  "level": "2",
  "url": "ch-semisimple-mod.html#remark-39",
  "type": "Remark",
  "number": "4.6",
  "title": "",
  "body": " As a consequence of the above exercise, a module is a finitely generated semisimple module if and only if it is a finite direct sum of simple modules. In this case if we write as a sum of simple modules, there is a strict composition series so has finite length, namely length , and the composition factors are the modules .  "
},
{
  "id": "prop-ks-semisimple-mod",
  "level": "2",
  "url": "ch-semisimple-mod.html#prop-ks-semisimple-mod",
  "type": "Proposition",
  "number": "4.7",
  "title": "Krull-Schmidt for Semisimple Modules.",
  "body": " Krull-Schmidt for Semisimple Modules   Let be a finitely generated semisimple module. Given two direct sum decompositions as simple modules then , and there is a permutation such that for all     Follows from the previous remark and the Jordan-Holder theorem.   "
},
{
  "id": "thm-equiv-semisimp-mod",
  "level": "2",
  "url": "ch-semisimple-mod.html#thm-equiv-semisimp-mod",
  "type": "Theorem",
  "number": "4.8",
  "title": "Equivalent Conditions for Semisimple Modules.",
  "body": " Equivalent Conditions for Semisimple Modules   For any ring and left -module , the following are equivalent:      is semisimple,    very submodule of is a summand; i.e., for every submodule of there is a submodule such that is the internal direct sum of and ,    every injective -map is split has a left inverse,    every SES of the form is split exact,    every surjective -map has a right inverse.       The equivalence of (3), (4), and (5) is given by the Splitting Theorem.   holds since given an injective map as in (3), we have by (2) that is a summand of , hence there is a projection homomorphism that splits the inclusion of the summand into , that is . Now is an isomorphism so we may consider the -module homomorphism and set to be . Then    holds since we can split the inclusion and thus also the SES Therefore the Splitting Theorem yields where denotes the splitting of the quotient map .  The hard part is proving . Assume (1), so that for some collection of simple submodules , and let be any submodule. (It is important to note that it does not necessarily follow that is a sum of some subcollection of the ) . Consider the collection of subsets of such that where we define . View as a poset by inclusion. It is nonempty since belongs to . If is a totally ordered subcollection of , let . I claim . If not, there is a nonzero element . But since for all but a finite number of ’s and since the collection of ’s was totally ordered, there is some such that , a contradiction. We may thus apply Zorn’s Lemma to get a maximal .  I claim is the internal direct sum of and . We have since and so it suffices to prove . Since , the latter is equivalent to proving that for all . If this fails for some , then since is a proper submodule of , which is simple, and hence . But then (if and , with and , then so and , and then .) So, is a member of that strictly contains , a contradiction. It must be thar .   Now assume that every submodule of is a summand. We proceed in three steps:  (i) We claim that every submodule of inherits this property; i.e., every submodule of is a summand of . For say is a submodule. By assumption on , we have (internal direct sum) for some . Since , it follows that . (Given , we have for some . Since , .) Since , this shows .  (ii) We claim that every nonzero submodule of contains a simple summand. Pick and apply Zorn’s Lemma to show that there is a maximal submodule of with respect to the property that . We have by (i) for some . If is not simple, then contains a nonzero, proper submodule and hence, by using (i) again, we get that for some proper nonzero submodule  .  These properties implies that . One containment is clear. If belongs to the left side, then . It follows that and so , and hence . So, either or , and either way we reach a contradiction to the maximality of .  (iii) Let be the set of all simple submodules of , and let Equivalently, the module generated by the modules in their direct sum. The set is partially ordered by inclusion. It is nonempty, since (or some singleton is in there by (ii)). Given a chain in , is again an element of , so there is a maximal element in ; call it . Let be the direct sum of  .  We claim that . By hypothesis we have for some . If we are done. Otherwise by (ii) (and (i) again) we have for some simple submodule . But then , contradicting maximality of .   "
},
{
  "id": "cor-semisimple-quotient",
  "level": "2",
  "url": "ch-semisimple-mod.html#cor-semisimple-quotient",
  "type": "Corollary",
  "number": "4.9",
  "title": "",
  "body": "  If semisimple, so is every submodule and quotient module of .    Say is a submodule. By the claim marked (i) in the proof of Theorem  every submodule of is a summand, and hence is semisimple by Theorem   .  Given a surjection , it splits by Theorem  , so that is isomorphic to a submodule of , namely the image of under the splitting map. Hence is semisimple by the case already proven.   "
},
{
  "id": "sec-semisimple-rings",
  "level": "1",
  "url": "sec-semisimple-rings.html",
  "type": "Section",
  "number": "5.1",
  "title": "Semisimple Rings",
  "body": " Semisimple Rings    A ring is left semisimple if is semisimple as a left module over itself. is right semisimple if is semisimple as a right modules over itself.     Recall that submodules of are left ideals and the simple ones are the minimal (nonzero) left ideals. So, is left semisimple if and only if is the internal direct sum of some collection of minimal left ideals : Moreover, is f.g. as a module over itself, and so this must be a finite direct sum. So, is left semisimple if and only if decomposes as an internal direct sum of the form for some finite collection of minimal left ideals.    For any and division ring , the matrix ring is left semisimple. This was shown earlier. It is also right semisimple.    If is a finite product of fields, then each is a simple -module, and is the direct sum of these, so is (left) semisimple.     For a ring , the following conditions are equivalent:    is a left semisimple ring.    Every left -module is semisimple.    Every SES of left -modules is split.    Every injection of left -modules splits    Every surjection of left -modules splits.    Every left -module is projective.    Every left -module is injective.       The equivalence of (2)-(5) follows from Proposition . The equivalence of (4) and (7) follows from the characterization of injective modules in Proposition and the equivalence of (5) and (6) follows from the characterization of projective modules in Proposition . The implication (2) (1) is obvious.  Now for : Assume (1) and let be any left -module. It follows from the definition that an arbitrary coproduct of semisimple modules is again semisimple, and so the free module is semisimple for any indexing set . By choosing a generating set of , we may find a surjection of the form . By Corollary , it follows that is semisimple since it is a quotient of a semisimple module .      Let be a left semisimple ring and write as an internal direct sum with minimal left ideals. Let be a complete list of representatives of isomorphism classes as left -modules taken from the list ; so, for each with , there is a unique with so that as left -modules.  Then every -module is isomorphic to for some index sets .  If is finitely generated, is isomorphic to for a unique list of nonnegative integers.    If is finitely generated there is a surjection . Using Proposition this surjection splits, so that for some , and each of and is semisimple and finitely generated. So and with simple. Clearly is isomorphic to a finite direct sum of copies of the ’s, and so the result follows from the Krull-Schmidt Theorem for semisimple modules.  In the general case, we know that is a direct sum of simple modules; if some simple summand of is not isomorphic to one of the , then is a finitely generated counterexample to the f.g. case.    In short, if is left semisimple, and we know the simple decomposition of itself, then we have a complete classification of all  -modules: they are just direct sums of the simple summands of !  Much of the interest in semisimple rings arises from the following:   Maschke's Theorem   If is a field and is a finite group such that does not divide , then the group ring is left semisimple.    Let be any injection of left -modules. It suffices to prove that there is an -linear map such that . By restriction of scalars along the inclusion , we may regard as a -linear map between -vector spaces. As such it admits a -linear splitting (since is semisimple). There is no reason that will be -linear, but we can modify it so that it becomes so: Define by Note that the formula makes sense since is invertible in by assumption.  Then is still a -linear map (since is -linear and the group action is -linear). For any we have where the second equality is given by identifying with . These conditions ensure that is -linear. Finally, where the second equality uses that is -linear and the third one uses that .     The proof actually shows that is semisimple provided is and is invertible in .    The group ring does not satisfy the hypotheses of Maschke’s theorem, since the order of the group is zero in the field. In fact, is not semisimple: let be the representation ; i.e., as a -module, we have . We claim that is the unique nonzero proper submodule of . Let be a nonzero submodule and suppose that . Then, there is some element with . Then and are linearly independent, so we must have . It follows that is not semisimple: it is not simple since , but is not a direct sum of simple modules.   Let be a finite group and a field. The representation of corresponding to viewed as a left module over itself can be described explicitly as following: As a -vector space, has as a basis: . acts on this vector space by permuting the basis via left multiplication: . This is sometimes called the (left) regular representation of .   Corollary of Maschke's Theorem   If is a finite group and is a field such that , then every -linear representation of is a direct sum of irreducible representations, and every finite dimensional representation is uniquely a finite direct sum of irreducible ones.  Moreover, every irreducible representation arises as a summand of the left regular representation.     Let . We can use Maschke’s Theorem and the theory of semisimple rings so far to classify every representation of over or over (or more generally over any field of characteristic not equal to 3). In any case, the left regular representation of is the three-dimensional representation with basis such that , i.e., in this basis. Also in any case, the subspace spanned by , which is the vector in these coordinates, is a 1-dimensional -stable subspace, so a simple subrepresentation. Moreover, this is the trivial representation, since this vector is fixed by . Then obtains the structure of a representation. We can take as a basis for , and , and , i.e., in our coordinates, A -stable subspace must correspond to an eigenvector of (which is equivalently an eigenvector of ). The characteristic equation of this matrix shows that the eigenvalues are precisely the primitive cube roots of unity.  If (or more generally if there are no primitive cube roots of unity), then the -dimensional representation we just found is simple since there are no stable subspaces. If (or more generally if there are primitive cube roots of unity), let be a primitive cube root of unity. The -dimensional representation has and as eigenvalues, and there are corresponding eigenvectors, so is a direct sum of two 1-dimensional stable subspaces such that for all and for all .  We conclude that every real representation of is isomorphic to a direct sum of copies of the trivial representation and copies of . That is, for any such representation , there is a basis of , , , such that , , and .  We conclude that every complex representation of is isomorphic to a direct sum of copies of the trivial representation, , and . That is, for any such representation , there is a basis of , , , , such that , , and .   "
},
{
  "id": "def-semisimple-ring",
  "level": "2",
  "url": "sec-semisimple-rings.html#def-semisimple-ring",
  "type": "Definition",
  "number": "5.1",
  "title": "",
  "body": "  A ring is left semisimple if is semisimple as a left module over itself. is right semisimple if is semisimple as a right modules over itself.   "
},
{
  "id": "remark-40",
  "level": "2",
  "url": "sec-semisimple-rings.html#remark-40",
  "type": "Remark",
  "number": "5.2",
  "title": "",
  "body": " Recall that submodules of are left ideals and the simple ones are the minimal (nonzero) left ideals. So, is left semisimple if and only if is the internal direct sum of some collection of minimal left ideals : Moreover, is f.g. as a module over itself, and so this must be a finite direct sum. So, is left semisimple if and only if decomposes as an internal direct sum of the form for some finite collection of minimal left ideals.  "
},
{
  "id": "example-60",
  "level": "2",
  "url": "sec-semisimple-rings.html#example-60",
  "type": "Example",
  "number": "5.3",
  "title": "",
  "body": " For any and division ring , the matrix ring is left semisimple. This was shown earlier. It is also right semisimple.  "
},
{
  "id": "example-61",
  "level": "2",
  "url": "sec-semisimple-rings.html#example-61",
  "type": "Example",
  "number": "5.4",
  "title": "",
  "body": " If is a finite product of fields, then each is a simple -module, and is the direct sum of these, so is (left) semisimple.  "
},
{
  "id": "prop-equivcond-semisimple-ring",
  "level": "2",
  "url": "sec-semisimple-rings.html#prop-equivcond-semisimple-ring",
  "type": "Proposition",
  "number": "5.5",
  "title": "",
  "body": "  For a ring , the following conditions are equivalent:    is a left semisimple ring.    Every left -module is semisimple.    Every SES of left -modules is split.    Every injection of left -modules splits    Every surjection of left -modules splits.    Every left -module is projective.    Every left -module is injective.       The equivalence of (2)-(5) follows from Proposition . The equivalence of (4) and (7) follows from the characterization of injective modules in Proposition and the equivalence of (5) and (6) follows from the characterization of projective modules in Proposition . The implication (2) (1) is obvious.  Now for : Assume (1) and let be any left -module. It follows from the definition that an arbitrary coproduct of semisimple modules is again semisimple, and so the free module is semisimple for any indexing set . By choosing a generating set of , we may find a surjection of the form . By Corollary , it follows that is semisimple since it is a quotient of a semisimple module .   "
},
{
  "id": "prop-ds-semisimple",
  "level": "2",
  "url": "sec-semisimple-rings.html#prop-ds-semisimple",
  "type": "Proposition",
  "number": "5.6",
  "title": "",
  "body": "  Let be a left semisimple ring and write as an internal direct sum with minimal left ideals. Let be a complete list of representatives of isomorphism classes as left -modules taken from the list ; so, for each with , there is a unique with so that as left -modules.  Then every -module is isomorphic to for some index sets .  If is finitely generated, is isomorphic to for a unique list of nonnegative integers.    If is finitely generated there is a surjection . Using Proposition this surjection splits, so that for some , and each of and is semisimple and finitely generated. So and with simple. Clearly is isomorphic to a finite direct sum of copies of the ’s, and so the result follows from the Krull-Schmidt Theorem for semisimple modules.  In the general case, we know that is a direct sum of simple modules; if some simple summand of is not isomorphic to one of the , then is a finitely generated counterexample to the f.g. case.   "
},
{
  "id": "thm-Maschke",
  "level": "2",
  "url": "sec-semisimple-rings.html#thm-Maschke",
  "type": "Theorem",
  "number": "5.7",
  "title": "Maschke's Theorem.",
  "body": " Maschke's Theorem   If is a field and is a finite group such that does not divide , then the group ring is left semisimple.    Let be any injection of left -modules. It suffices to prove that there is an -linear map such that . By restriction of scalars along the inclusion , we may regard as a -linear map between -vector spaces. As such it admits a -linear splitting (since is semisimple). There is no reason that will be -linear, but we can modify it so that it becomes so: Define by Note that the formula makes sense since is invertible in by assumption.  Then is still a -linear map (since is -linear and the group action is -linear). For any we have where the second equality is given by identifying with . These conditions ensure that is -linear. Finally, where the second equality uses that is -linear and the third one uses that .   "
},
{
  "id": "remark-41",
  "level": "2",
  "url": "sec-semisimple-rings.html#remark-41",
  "type": "Remark",
  "number": "5.8",
  "title": "",
  "body": " The proof actually shows that is semisimple provided is and is invertible in .  "
},
{
  "id": "example-62",
  "level": "2",
  "url": "sec-semisimple-rings.html#example-62",
  "type": "Example",
  "number": "5.9",
  "title": "",
  "body": " The group ring does not satisfy the hypotheses of Maschke’s theorem, since the order of the group is zero in the field. In fact, is not semisimple: let be the representation ; i.e., as a -module, we have . We claim that is the unique nonzero proper submodule of . Let be a nonzero submodule and suppose that . Then, there is some element with . Then and are linearly independent, so we must have . It follows that is not semisimple: it is not simple since , but is not a direct sum of simple modules.  "
},
{
  "id": "cor-Maschke",
  "level": "2",
  "url": "sec-semisimple-rings.html#cor-Maschke",
  "type": "Corollary",
  "number": "5.10",
  "title": "Corollary of Maschke's Theorem.",
  "body": " Corollary of Maschke's Theorem   If is a finite group and is a field such that , then every -linear representation of is a direct sum of irreducible representations, and every finite dimensional representation is uniquely a finite direct sum of irreducible ones.  Moreover, every irreducible representation arises as a summand of the left regular representation.   "
},
{
  "id": "example-63",
  "level": "2",
  "url": "sec-semisimple-rings.html#example-63",
  "type": "Example",
  "number": "5.11",
  "title": "",
  "body": " Let . We can use Maschke’s Theorem and the theory of semisimple rings so far to classify every representation of over or over (or more generally over any field of characteristic not equal to 3). In any case, the left regular representation of is the three-dimensional representation with basis such that , i.e., in this basis. Also in any case, the subspace spanned by , which is the vector in these coordinates, is a 1-dimensional -stable subspace, so a simple subrepresentation. Moreover, this is the trivial representation, since this vector is fixed by . Then obtains the structure of a representation. We can take as a basis for , and , and , i.e., in our coordinates, A -stable subspace must correspond to an eigenvector of (which is equivalently an eigenvector of ). The characteristic equation of this matrix shows that the eigenvalues are precisely the primitive cube roots of unity.  If (or more generally if there are no primitive cube roots of unity), then the -dimensional representation we just found is simple since there are no stable subspaces. If (or more generally if there are primitive cube roots of unity), let be a primitive cube root of unity. The -dimensional representation has and as eigenvalues, and there are corresponding eigenvectors, so is a direct sum of two 1-dimensional stable subspaces such that for all and for all .  We conclude that every real representation of is isomorphic to a direct sum of copies of the trivial representation and copies of . That is, for any such representation , there is a basis of , , , such that , , and .  We conclude that every complex representation of is isomorphic to a direct sum of copies of the trivial representation, , and . That is, for any such representation , there is a basis of , , , , such that , , and .  "
},
{
  "id": "sec-art-wedd",
  "level": "1",
  "url": "sec-art-wedd.html",
  "type": "Section",
  "number": "5.2",
  "title": "Artin-Wedderburn Theorem",
  "body": " Artin-Wedderburn Theorem  We will now give a classification of all left semisimple rings. To start, we collect some examples.    If and are left semisimple, so is the product ring .    Say we have internal direct sum decompositions and involving minimal left ideals. Then for all and , and are minimal left ideals of and they determine an internal direct sum decomposition of .     The previous lemma and Lemma show that for any integer , list of division rings and positive integers , the ring is left semisimple.   The Artin-Wedderburn Theorem asserts that the last example accounts for all examples!   Artin-Wedderburn Theorem   Let be a left semisimple ring. Then for some , positive integers , and division rings , there is a ring isomorphism   Moreover,    is the number of isomorphism classes of simple left -modules.    Say are simple modules forming a complete set of representatives of these isomorphism classes. Then, after reordering, and     is the number of times summands isomorphic to occur in the decomposition of into a direct sum of simple left modules.   Moreover, the data is unique up to a permutation of and isomorphisms of division rings.     We saw before that the module decomposition in terms of simple modules is , where is the one-dimensional trivial representation, and is the -dimensional representation given by . On the other hand, as rings,   To reconcile these decompositions by the Artin-Wedderburn Theorem, one can check that and .  We have . To compute the endomorphism ring of , observe that an -linear endomorphism of is -linear if and only if it commutes with the action of . We can write any -linear endomorphism of as a matrix; for it to commute with means it commutes with . We have so the matrices we seek are of the form Any pair of matrices in this set commutes (since the two vectorspace generators do) so they form a commutative ring and hence a field by Schur’s Lemma; any matrix in this collection is algebraic over the subring of scalar matrices (since both generators are). It follows that this collection of matrices is isomorphic as a ring to .     Let be an -module. The map is a ring isomorphism, where and denote the natural inclusion and projection maps.    It is clear that this map is additive, as each and is. Observe that is the identity on if , and the zero map otherwise and that .  The map is a two-sided inverse for :    To see that respects multiplication, we have      Let be a division ring. Then , where is the simple module of column vectors.     ???    Since is left semisimple, we have with each is simple (in fact a minimal ideal). Group by isomorphism to rewrite this as with each simple, , and such that is not isomorphic to for all . We compute the endomorphisms of both sides:     Above the second line follows from the first by properties of , the third follows because Schur’s lemma gives that , and consequently , when . The final isomorphism is the previous lemma.  On the one hand, we have by a problem from the homework. On the other hand, applying Schur’s Lemma again, is a division ring for all .  Combining these gives and hence, also by a homework problem, we have with .  This shows that given a decomposition of as a left semisimple module, there is a ring decomposition as a product of matrix rings over division rings, and the data of division rings and matrix sizes is related to the data of simple modules and multiplicities by the formulas (1)–(3). We just need to prove uniqueness.  Say we are given an isomorphism of rings for some division rings . Then since decomposes as a direct sum of copies of , and is a simple -module, hence also a simple -module, we have a semisimple -module decomposition of as By Krull-Schmidt, we must have , and after a permutation, and for each .  Moreover, we have We recall that , with the natural column vector action from , and the trivial action from the other factors. Thus, using the exercise above.      A ring is left semisimple if and only if it is right semisimple.    The claim is equivalent to showing is left semisimple if and only is, which in turn follows from just one of the implications. If is left semisimple, then , so so is left semisimple.    Henceforth, we just say that is semisimple if it is left semisimple.  "
},
{
  "id": "lem-lsemisimple-product",
  "level": "2",
  "url": "sec-art-wedd.html#lem-lsemisimple-product",
  "type": "Lemma",
  "number": "5.12",
  "title": "",
  "body": "  If and are left semisimple, so is the product ring .    Say we have internal direct sum decompositions and involving minimal left ideals. Then for all and , and are minimal left ideals of and they determine an internal direct sum decomposition of .   "
},
{
  "id": "example-64",
  "level": "2",
  "url": "sec-art-wedd.html#example-64",
  "type": "Example",
  "number": "5.13",
  "title": "",
  "body": " The previous lemma and Lemma show that for any integer , list of division rings and positive integers , the ring is left semisimple.  "
},
{
  "id": "thm-art-wedd",
  "level": "2",
  "url": "sec-art-wedd.html#thm-art-wedd",
  "type": "Theorem",
  "number": "5.14",
  "title": "Artin-Wedderburn Theorem.",
  "body": " Artin-Wedderburn Theorem   Let be a left semisimple ring. Then for some , positive integers , and division rings , there is a ring isomorphism   Moreover,    is the number of isomorphism classes of simple left -modules.    Say are simple modules forming a complete set of representatives of these isomorphism classes. Then, after reordering, and     is the number of times summands isomorphic to occur in the decomposition of into a direct sum of simple left modules.   Moreover, the data is unique up to a permutation of and isomorphisms of division rings.   "
},
{
  "id": "example-65",
  "level": "2",
  "url": "sec-art-wedd.html#example-65",
  "type": "Example",
  "number": "5.15",
  "title": "",
  "body": " We saw before that the module decomposition in terms of simple modules is , where is the one-dimensional trivial representation, and is the -dimensional representation given by . On the other hand, as rings,   To reconcile these decompositions by the Artin-Wedderburn Theorem, one can check that and .  We have . To compute the endomorphism ring of , observe that an -linear endomorphism of is -linear if and only if it commutes with the action of . We can write any -linear endomorphism of as a matrix; for it to commute with means it commutes with . We have so the matrices we seek are of the form Any pair of matrices in this set commutes (since the two vectorspace generators do) so they form a commutative ring and hence a field by Schur’s Lemma; any matrix in this collection is algebraic over the subring of scalar matrices (since both generators are). It follows that this collection of matrices is isomorphic as a ring to .  "
},
{
  "id": "lem-semisimple-end",
  "level": "2",
  "url": "sec-art-wedd.html#lem-semisimple-end",
  "type": "Lemma",
  "number": "5.16",
  "title": "",
  "body": "  Let be an -module. The map is a ring isomorphism, where and denote the natural inclusion and projection maps.    It is clear that this map is additive, as each and is. Observe that is the identity on if , and the zero map otherwise and that .  The map is a two-sided inverse for :    To see that respects multiplication, we have    "
},
{
  "id": "problem-162",
  "level": "2",
  "url": "sec-art-wedd.html#problem-162",
  "type": "Problem",
  "number": "5.17",
  "title": "",
  "body": " Let be a division ring. Then , where is the simple module of column vectors.  "
},
{
  "id": "thm-whoknows",
  "level": "2",
  "url": "sec-art-wedd.html#thm-whoknows",
  "type": "Theorem",
  "number": "5.18",
  "title": "",
  "body": "  ???    Since is left semisimple, we have with each is simple (in fact a minimal ideal). Group by isomorphism to rewrite this as with each simple, , and such that is not isomorphic to for all . We compute the endomorphisms of both sides:     Above the second line follows from the first by properties of , the third follows because Schur’s lemma gives that , and consequently , when . The final isomorphism is the previous lemma.  On the one hand, we have by a problem from the homework. On the other hand, applying Schur’s Lemma again, is a division ring for all .  Combining these gives and hence, also by a homework problem, we have with .  This shows that given a decomposition of as a left semisimple module, there is a ring decomposition as a product of matrix rings over division rings, and the data of division rings and matrix sizes is related to the data of simple modules and multiplicities by the formulas (1)–(3). We just need to prove uniqueness.  Say we are given an isomorphism of rings for some division rings . Then since decomposes as a direct sum of copies of , and is a simple -module, hence also a simple -module, we have a semisimple -module decomposition of as By Krull-Schmidt, we must have , and after a permutation, and for each .  Moreover, we have We recall that , with the natural column vector action from , and the trivial action from the other factors. Thus, using the exercise above.   "
},
{
  "id": "cor-lr-semisimple",
  "level": "2",
  "url": "sec-art-wedd.html#cor-lr-semisimple",
  "type": "Corollary",
  "number": "5.19",
  "title": "",
  "body": "  A ring is left semisimple if and only if it is right semisimple.    The claim is equivalent to showing is left semisimple if and only is, which in turn follows from just one of the implications. If is left semisimple, then , so so is left semisimple.   "
},
{
  "id": "sec-spplications",
  "level": "1",
  "url": "sec-spplications.html",
  "type": "Section",
  "number": "6.1",
  "title": "Applications",
  "body": " Applications  Let us start by restating the Artin-Wedderburn theorem in the context of group rings.   Artin-Wedderburn for Group Rings   If is a finite group and is a field such that , then there is an isomorphism of rings where are division rings. Furthermore, each contains (up to isomorphism) as a subring of its center and the above isomorphism is -linear. In particular, .  Moroever, we have:    is the number of irreducible -linear representation of (up to isomorphism),    the 's are the opposite rings of the endomorphism rings of these representations,    the 's give the number of times each irreducible representation occurs in the decomposition of the regular representation of ,    the numbers give the dimensions of these representations, and     .       This mostly follows from Artin-Wedderburn and Maschke's Theorem. What needs to be noted is that each division ring here contains a copy of in its center. Indeed, we recall that each is given as the opposite ring of for some simple module . For , we have the map which commutes with any -linear map from to itself.      Let be a finite group, and be a field such that . Then is abelian if and only if is isomorphic to a product of fields.      Let be any group and any field. Given two group homomorphisms , the associated -modules and are isomorphic if and only if .    Suppose that is an isomorphism of -modules. Identifying as vector spaces, we have for some . Then, for all , so for all .      If is a division ring that contains in its center and , then .    Pick . Then , and since is an -vectorspace, we must have for dimension reasons. Thus is commutative and is a field. Since is a finite extension of , it is algebraic, so , and we must have .     Let and . We find all the simple modules over the ring or, equivalently, all irreducible -linear representations of . We also find the Artin-Wedderburn decomposition of .  The one dimensional represenatations are given by group homomorphisms of the form , and any such map factors as Note that and there are two group homomorphisms , sending the generator to either or (the only elements of of order or ). This gives two representations: with acting trivially and with acting by the sign representation. These are not isomorphic by the previous lemma.  We have that so and , and likewise so and . So, the Artin-Wedderburn decomposition starts as     Note that there are no further factors of , since we found all of the one-dimensional simple modules.  Recall also that acts on by permuting the basis (corresponding to the group homomorphism sending a permutation to its associated permutation matrix). The subspace is a subrepresenation of of dimension . We claim it is irreducible: Say .  By applying a permutation and scaling appropriately we obtain an element of the form and hence . Adding these gives and hence . The latter two are linearly independent and so must span . This proves generates as a left -module and hence that is simple. Note that is not isomorphic to either nor by dimension considerations.  We have that , so there are two possibilities.    One possibility is and , in which case , so the Artin-Wedderburn decomposition reads as for some . We must have . We know that cannot have any one-dimensional simple modules (since we already accounted for all of the one-dimensional simple modules for ), so cannot be . Then, for dimension reasons, we must have that with , so . But then would be commutative, which it is not, as is not abelian.    The other possibility is and . We obtain the AW decomposition     (Alternatively, we could compute the endomorphism ring of and see that it contains only scalars.)  We have found the AW decomposition of . As a consequence, we have identified all of the irreducible real representations of .   "
},
{
  "id": "thm-art-wedd-gr",
  "level": "2",
  "url": "sec-spplications.html#thm-art-wedd-gr",
  "type": "Theorem",
  "number": "6.1",
  "title": "Artin-Wedderburn for Group Rings.",
  "body": " Artin-Wedderburn for Group Rings   If is a finite group and is a field such that , then there is an isomorphism of rings where are division rings. Furthermore, each contains (up to isomorphism) as a subring of its center and the above isomorphism is -linear. In particular, .  Moroever, we have:    is the number of irreducible -linear representation of (up to isomorphism),    the 's are the opposite rings of the endomorphism rings of these representations,    the 's give the number of times each irreducible representation occurs in the decomposition of the regular representation of ,    the numbers give the dimensions of these representations, and     .       This mostly follows from Artin-Wedderburn and Maschke's Theorem. What needs to be noted is that each division ring here contains a copy of in its center. Indeed, we recall that each is given as the opposite ring of for some simple module . For , we have the map which commutes with any -linear map from to itself.   "
},
{
  "id": "cor-ab-iff-gr-fieldprod",
  "level": "2",
  "url": "sec-spplications.html#cor-ab-iff-gr-fieldprod",
  "type": "Corollary",
  "number": "6.2",
  "title": "",
  "body": "  Let be a finite group, and be a field such that . Then is abelian if and only if is isomorphic to a product of fields.   "
},
{
  "id": "lem-gring-and-iso",
  "level": "2",
  "url": "sec-spplications.html#lem-gring-and-iso",
  "type": "Lemma",
  "number": "6.3",
  "title": "",
  "body": "  Let be any group and any field. Given two group homomorphisms , the associated -modules and are isomorphic if and only if .    Suppose that is an isomorphism of -modules. Identifying as vector spaces, we have for some . Then, for all , so for all .   "
},
{
  "id": "prop-dring-and-C",
  "level": "2",
  "url": "sec-spplications.html#prop-dring-and-C",
  "type": "Proposition",
  "number": "6.4",
  "title": "",
  "body": "  If is a division ring that contains in its center and , then .    Pick . Then , and since is an -vectorspace, we must have for dimension reasons. Thus is commutative and is a field. Since is a finite extension of , it is algebraic, so , and we must have .   "
},
{
  "id": "example-66",
  "level": "2",
  "url": "sec-spplications.html#example-66",
  "type": "Example",
  "number": "6.5",
  "title": "",
  "body": " Let and . We find all the simple modules over the ring or, equivalently, all irreducible -linear representations of . We also find the Artin-Wedderburn decomposition of .  The one dimensional represenatations are given by group homomorphisms of the form , and any such map factors as Note that and there are two group homomorphisms , sending the generator to either or (the only elements of of order or ). This gives two representations: with acting trivially and with acting by the sign representation. These are not isomorphic by the previous lemma.  We have that so and , and likewise so and . So, the Artin-Wedderburn decomposition starts as     Note that there are no further factors of , since we found all of the one-dimensional simple modules.  Recall also that acts on by permuting the basis (corresponding to the group homomorphism sending a permutation to its associated permutation matrix). The subspace is a subrepresenation of of dimension . We claim it is irreducible: Say .  By applying a permutation and scaling appropriately we obtain an element of the form and hence . Adding these gives and hence . The latter two are linearly independent and so must span . This proves generates as a left -module and hence that is simple. Note that is not isomorphic to either nor by dimension considerations.  We have that , so there are two possibilities.    One possibility is and , in which case , so the Artin-Wedderburn decomposition reads as for some . We must have . We know that cannot have any one-dimensional simple modules (since we already accounted for all of the one-dimensional simple modules for ), so cannot be . Then, for dimension reasons, we must have that with , so . But then would be commutative, which it is not, as is not abelian.    The other possibility is and . We obtain the AW decomposition     (Alternatively, we could compute the endomorphism ring of and see that it contains only scalars.)  We have found the AW decomposition of . As a consequence, we have identified all of the irreducible real representations of .  "
},
{
  "id": "sec-rep-closed-fields",
  "level": "1",
  "url": "sec-rep-closed-fields.html",
  "type": "Section",
  "number": "6.2",
  "title": "Algebraically Closed Fields",
  "body": " Algebraically Closed Fields  When working over an algebraically closed field, the Artin-Wedderburn Theorem takes a simpler form.   Artin-Wedderburn for Group Rings over Algebraically Closed Fields   If is a finite group and is an algebraically closed field such that , then there is an isomorphism of rings   Moroever, we have:    is the number of irreducible -linear representation of (up to isomorphism),    the 's are the opposite rings of the endomorphism rings of these representations,    the 's give the number of times each irreducible representation occurs in the decomposition of the regular representation of ,    the 's also give the dimensions of these representations, and     .       The point is that in this setting, for each irreducible representation , is equal to . Let . In particular, is a -linear endomorphism of the finite dimensional vector space . Since is algebraically closed, has an eigenvaluse, say . Then is a -linear endomorphism of that is not injective, so by Schur’s Lemma is must be . Thus,      Let and consider the alternating group of order 12. We find all the simple modules over the ring or, equivalently, all irreducible -linear representations of . We also find the Artin-Wedderburn decomposition of .  As before we start by finding 1-dimensional representations given by group homomorphisms of the form . Any such map factors as and thus there are three nonisomorphic 1-dimensional representations given by , , with . Note that corresponds to the trivial representation. Also and make essential use of the fact that we are working over as opposed to, say, where there are no primitive cubic roots of 1.  With respect to the Artin-Wedderburn decomposition we have so far where because we have already found all the 1-dimensional representations ( ) above. Counting dimensions we obtain It is easy to see there is only one solution: and . Hence there is a unique up to isomorphism -linear irreducible representation of which is a 3 dimensional -vector space.  To exhibit such a representation, let act on by permuting the standard basis elements and thus any vector in . The subspace given by is an -stable subspace. This is an irreducible representation: if , after permuting and scaling, we can write . We also have and in , so the sum . Then and are also in , and these are three linearly independent vectors, so we must have .    Let's consider what the Artin-Wedderburn Theorem says about complex representations of finite abelian groups: the group ring must be a product of copies of , so every irreducible representation is one-dimensional. Thus, every representation is a sum of one-dimensional representations. Concretely, this means that there is a basis in which every group element acts as a diagonal matrix.  This special case actually just follows from basic facts in linear algebra. Let be a representation. Then every has finite order, so for some . This implies that the matrix satisfies , so its minimal polynomial divides . This polynomial splits into distinct linear factors over , so is diagonalizable for every . (So far, we’ve only used that is finite.) Now, since is abelian, we have for all , so ; i.e., the matrices commute. Commuting diagonalizable matrices are simultaneously diagonalizable; i.e., there is a basis as above.     Let be a finite group. The number of one-dimensional complex representations of (up to isomorphism) is . Thus, in the Artin-Wedderburn decomposition of , there are exactly copies of .    We have that , and by the discussion above, there are distinct one-dimensional representations of .      For any finite group , the number of irreducible complex representations (up to isomorphism) is equal to the number of conjugacy classes.    We have and is the number of irreducible complex representations up to isomorphism. A key point is that the center of the right side is , which has dimension as a complex vector space. Since this ring isomorphism is -linear, it induces a -linear isomorphism of the centers, and thus we just need to show that is equal to the number of conjugacy classes.  Let denote the conjugacy classes of (i.e., the orbits for the action of on itself by conjugation). For each set . Then for all , and it follows that . Since that ’s are sums of disjoint subsets of a basis of , they are linearly independent. Now say belongs to the center. Then for each , and it follows that whenever are conjugate. This proves that is spanned by . We conclude that .    "
},
{
  "id": "cor-art-wedd-gring-alg-closed",
  "level": "2",
  "url": "sec-rep-closed-fields.html#cor-art-wedd-gring-alg-closed",
  "type": "Corollary",
  "number": "6.6",
  "title": "Artin-Wedderburn for Group Rings over Algebraically Closed Fields.",
  "body": " Artin-Wedderburn for Group Rings over Algebraically Closed Fields   If is a finite group and is an algebraically closed field such that , then there is an isomorphism of rings   Moroever, we have:    is the number of irreducible -linear representation of (up to isomorphism),    the 's are the opposite rings of the endomorphism rings of these representations,    the 's give the number of times each irreducible representation occurs in the decomposition of the regular representation of ,    the 's also give the dimensions of these representations, and     .       The point is that in this setting, for each irreducible representation , is equal to . Let . In particular, is a -linear endomorphism of the finite dimensional vector space . Since is algebraically closed, has an eigenvaluse, say . Then is a -linear endomorphism of that is not injective, so by Schur’s Lemma is must be . Thus,    "
},
{
  "id": "example-67",
  "level": "2",
  "url": "sec-rep-closed-fields.html#example-67",
  "type": "Example",
  "number": "6.7",
  "title": "",
  "body": " Let and consider the alternating group of order 12. We find all the simple modules over the ring or, equivalently, all irreducible -linear representations of . We also find the Artin-Wedderburn decomposition of .  As before we start by finding 1-dimensional representations given by group homomorphisms of the form . Any such map factors as and thus there are three nonisomorphic 1-dimensional representations given by , , with . Note that corresponds to the trivial representation. Also and make essential use of the fact that we are working over as opposed to, say, where there are no primitive cubic roots of 1.  With respect to the Artin-Wedderburn decomposition we have so far where because we have already found all the 1-dimensional representations ( ) above. Counting dimensions we obtain It is easy to see there is only one solution: and . Hence there is a unique up to isomorphism -linear irreducible representation of which is a 3 dimensional -vector space.  To exhibit such a representation, let act on by permuting the standard basis elements and thus any vector in . The subspace given by is an -stable subspace. This is an irreducible representation: if , after permuting and scaling, we can write . We also have and in , so the sum . Then and are also in , and these are three linearly independent vectors, so we must have .  "
},
{
  "id": "remark-42",
  "level": "2",
  "url": "sec-rep-closed-fields.html#remark-42",
  "type": "Remark",
  "number": "6.8",
  "title": "",
  "body": " Let's consider what the Artin-Wedderburn Theorem says about complex representations of finite abelian groups: the group ring must be a product of copies of , so every irreducible representation is one-dimensional. Thus, every representation is a sum of one-dimensional representations. Concretely, this means that there is a basis in which every group element acts as a diagonal matrix.  This special case actually just follows from basic facts in linear algebra. Let be a representation. Then every has finite order, so for some . This implies that the matrix satisfies , so its minimal polynomial divides . This polynomial splits into distinct linear factors over , so is diagonalizable for every . (So far, we’ve only used that is finite.) Now, since is abelian, we have for all , so ; i.e., the matrices commute. Commuting diagonalizable matrices are simultaneously diagonalizable; i.e., there is a basis as above.  "
},
{
  "id": "prop-art-wedd-decomp",
  "level": "2",
  "url": "sec-rep-closed-fields.html#prop-art-wedd-decomp",
  "type": "Proposition",
  "number": "6.9",
  "title": "",
  "body": "  Let be a finite group. The number of one-dimensional complex representations of (up to isomorphism) is . Thus, in the Artin-Wedderburn decomposition of , there are exactly copies of .    We have that , and by the discussion above, there are distinct one-dimensional representations of .   "
},
{
  "id": "prop-reps-and-conjclass",
  "level": "2",
  "url": "sec-rep-closed-fields.html#prop-reps-and-conjclass",
  "type": "Proposition",
  "number": "6.10",
  "title": "",
  "body": "  For any finite group , the number of irreducible complex representations (up to isomorphism) is equal to the number of conjugacy classes.    We have and is the number of irreducible complex representations up to isomorphism. A key point is that the center of the right side is , which has dimension as a complex vector space. Since this ring isomorphism is -linear, it induces a -linear isomorphism of the centers, and thus we just need to show that is equal to the number of conjugacy classes.  Let denote the conjugacy classes of (i.e., the orbits for the action of on itself by conjugation). For each set . Then for all , and it follows that . Since that ’s are sums of disjoint subsets of a basis of , they are linearly independent. Now say belongs to the center. Then for each , and it follows that whenever are conjugate. This proves that is spanned by . We conclude that .   "
},
{
  "id": "ch-character",
  "level": "1",
  "url": "ch-character.html",
  "type": "Chapter",
  "number": "7",
  "title": "Character Theory",
  "body": " Character Theory    A class function is any function into     "
},
{
  "id": "def-class-function",
  "level": "2",
  "url": "ch-character.html#def-class-function",
  "type": "Definition",
  "number": "7.1",
  "title": "",
  "body": "  A class function is any function into    "
},
{
  "id": "sec-",
  "level": "1",
  "url": "sec-.html",
  "type": "Section",
  "number": "A.1",
  "title": "Sets, Functions, Constructions",
  "body": " Sets, Functions, Constructions   Sets  hi    Functions  hi    Set Constructions   Subsets  hi    Product Sets  hi    Quotient Sets  hi    "
},
{
  "id": "sec-numbers-and-cardinality",
  "level": "1",
  "url": "sec-numbers-and-cardinality.html",
  "type": "Section",
  "number": "A.2",
  "title": "Number Systems and Cardinality",
  "body": " Number Systems and Cardinality  hi  "
},
{
  "id": "sec-matrices",
  "level": "1",
  "url": "sec-matrices.html",
  "type": "Section",
  "number": "A.3",
  "title": "Matrices",
  "body": " Matrices  hi  "
},
{
  "id": "appendix-2",
  "level": "1",
  "url": "appendix-2.html",
  "type": "Appendix",
  "number": "B",
  "title": "History",
  "body": " History  Abelian groups are named after Norwegian mathematician Niels Henrik Abel, who made significant contributions to the study of group theory in the early 19th century. Abel was one of the first mathematicians to investigate the properties of groups, which are sets of elements that can be combined under an operation (such as addition or multiplication) that satisfies certain axioms.  In particular, Abel studied groups in which the operation is commutative, meaning that the order in which elements are combined does not affect the result. Such groups had been studied before Abel's time, but he was the first to recognize their importance and to develop a systematic theory for them. Abel's work on these groups was influential in the development of abstract algebra, a branch of mathematics that deals with algebraic structures like groups, rings, and fields.  The term \"Abelian\" was coined in honor of Abel's contributions to the study of commutative groups. The adjective \"Abelian\" is now used to describe any algebraic structure (not just groups) in which the operation is commutative.  "
},
{
  "id": "appendix-3",
  "level": "1",
  "url": "appendix-3.html",
  "type": "Appendix",
  "number": "C",
  "title": "Notation",
  "body": " Notation   "
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
