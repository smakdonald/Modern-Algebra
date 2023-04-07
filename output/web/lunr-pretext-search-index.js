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
  "body": " Group Basics    Most great learning happens in groups.   Ken Robinson    Binary Operation  binary-operation   A binary operation on a set is a function      We often write instead of for simplicity.     A group is a pair where is a set and is a on , called group multiplication , satisfying the following properties:   (Associativity) for all we have     (Identity Element) there exists such that for all     (Inverses) for each , there is an element such that .        Although a group is a pair, we will usually refer to the group by only naming the underlying set, .    We say that is closed under the operation , when we want to emphasize that for any the result of the operation, , is an element of . However note that closure is really part of the definition of a binary operation on a set, and it is implicitly assumed whenever we consider such an operation.    Properties of Groups      In a group , the element satisfying the second axiom of is unique, and we thus refer to it as the identity element of .    In a group , for each , the element satisfying the last axiom of is unique, and we thus refer to it as the the inverse of and we will henceforth denote it by .          Suppose there exist two elements and such that and for all . Then Thus only one element can satisfy this property, making the identity element unique.    For a given , if and fo some and , then .         A group is an abelian group if is commutative; i.e., for all . Often, but not always, the group operation for an abelian group is written as instead of . In this case the inverse of an element is written .     Group Arithmetic   If is a group and , then:   if , then .    if , then .     .     .     .          Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!        Group Examples     The trivial subgroup is the group with a single element      , and are all abelian groups, where denotes traditional addition.    For any set , the permutations on  form a non-abelian group under composition. Permutation group of a set     For any positive integer , let By invertible I mean those matrices that have two-sided inverses, but in turns out that if an matrix has a left inverse then it it is automatically a right inverse too, and vice versa. Then is a non-abelian group under matrix multiplication. General linear group     For any , let denote the integers modulo . Then is an abelian group where denotes addition modulo .         Let and be groups. Then is a group, where denotes the Cartesian Product of and , and the operation is defined     Coming soon to an OER near you!      Let be groups. Then is a group, with its operation defined similary to that in     Coming soon to an OER near you!      In a group , the order of an element  is the least positive integer such that . If no such exists, we say has infinite order. We write for the order of . Order of an element       The order of a group  is the cardinality of the set , denoted . Order of a group       Every group of order is abelian.    Let be a group with elements, and suppose there are elements such that for some elements . Since , we must have , , and . Since has only elements and , either or . Without loss, say the former occurs. But implies and we know commutes with , and hence this is not possible. If , then and if then , both of which are impossible. Since were arbitrary, must be abelian.      Let be a group and any element.   Prove that if , then are all distinct elements of .    Prove that if , then for all integers (positive or negative) with .    Conclude in all cases.         Let be groups and let be elements of .   Prove that and in particular .    Prove or disprove: if have finite order then has finite order.         If then .      Computations and Examples      Coming soon to an OER near you!    Formal Proofs       Prove that each of the groups given in are indeed groups.      Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!      Groups of Units     The subset is an abelian group under multiplication.     , , and are each abelian groups under multiplicaton.    Let be a prime integer. Then is an abelian group under multiplicaton.   These are examples of groups of units , which will be defined explicitely and explored more generally later on See:     Give an example of a pair that satisfies axioms 1 and 2 of and an element of that has a left inverse but not a right inverse.   Coming soon to an OER near you!     Let be a group.     Let be an element of finite order. Show that has finite order for any integer , and in fact     Prove that for all in , holds.       "
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
  "body": " Group Examples     The trivial subgroup is the group with a single element      , and are all abelian groups, where denotes traditional addition.    For any set , the permutations on  form a non-abelian group under composition. Permutation group of a set     For any positive integer , let By invertible I mean those matrices that have two-sided inverses, but in turns out that if an matrix has a left inverse then it it is automatically a right inverse too, and vice versa. Then is a non-abelian group under matrix multiplication. General linear group     For any , let denote the integers modulo . Then is an abelian group where denotes addition modulo .     "
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
  "body": "  In a group , the order of an element  is the least positive integer such that . If no such exists, we say has infinite order. We write for the order of . Order of an element    "
},
{
  "id": "def-order-group",
  "level": "2",
  "url": "group-basics.html#def-order-group",
  "type": "Definition",
  "number": "1.13",
  "title": "",
  "body": "  The order of a group  is the cardinality of the set , denoted . Order of a group    "
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
  "id": "prop-group-element-order",
  "level": "2",
  "url": "group-basics.html#prop-group-element-order",
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
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "group-basics.html#exercise-2",
  "type": "Exercise",
  "number": "1.1.2",
  "title": "",
  "body": " Prove that each of the groups given in are indeed groups.      Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!    Coming soon to an OER near you!     "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "group-basics.html#exercise-3",
  "type": "Exercise",
  "number": "1.1.3",
  "title": "Groups of Units.",
  "body": "Groups of Units     The subset is an abelian group under multiplication.     , , and are each abelian groups under multiplicaton.    Let be a prime integer. Then is an abelian group under multiplicaton.   These are examples of groups of units , which will be defined explicitely and explored more generally later on See:   "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "group-basics.html#exercise-4",
  "type": "Exercise",
  "number": "1.1.4",
  "title": "",
  "body": " Give an example of a pair that satisfies axioms 1 and 2 of and an element of that has a left inverse but not a right inverse.   Coming soon to an OER near you!  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "group-basics.html#exercise-5",
  "type": "Exercise",
  "number": "1.1.5",
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
  "body": " Common Groups     Reality prefers symmetry.   Jorge Luis Borges     Dihedral Groups  We now discuss the important example of dihedral groups in detail.    For any integer , let denote a regular -gon. An isometry of the plane is a function that is a bijection and preserves the Euclideal distance for any ). A symmetry of is an isometry that maps to itself.     By the latter I don't mean that fixes each of the points of , but rather that , that is every point of is mapped to a (possibly different) point of and every point of is the image of some point in via . It is clear that the composition of two symmetries of is again a symmetry of , so that composition is a binary operation on .     The dihedral group  is the set of symmetries of the regular -gon equipped with the binary operation given by composition. Dihedral Group          Every element in can be written as or for .             Assume that the regular -gon is drawn in the plane with its center at the origin and one vertex on the axis. If denotes rotation about the origin by radians counter-clockwise, then . It's inverse is rotation by clock-wise. For another example, for any line of symmetry of , reflection about that line gives an element of . By our convention for how to draw , the -axis is a line of symmetry for , and we let denote reflection about the -axis.     Prove and .    Prove that is a reflection and hence that .        Symmetric Groups  Let's introduce another very important example: symmetric groups.    A permutation of a set is a bijective function .      For any , the symmetric group is the set of all permutations of the set equipped with the composition of functions as its binary operation. Symmetric group      For any finite set , we may think of as the permutation group of , which is sometimes written .   We can write an element of as a table of values:     If are distinct integers between and , then denotes the element of that satisfies Such a permutation is called a cycle or an -cycle if we want to emphasize its length. A -cycle is often called a transposition .     Determine the number of -cycles in .    Note that distinct lists of integers represent the same cycle if they are cyclical rearrangements of each other, e.g., . However, .     Disjoint cycles commute, that is, if , and then .         Each can be written as a product (composition) of disjoint cycles, and such a factorization is unique up to the ordering of the factors.    Each can be written a product of transpositions; i.e., is generated by transpositions.        For the uniqueness part of statement (1) in the above proposition one needs to establish a convention regarding 1-cycles, that is one needs to stipulate either that the 1-cycles will not be recorded (which gives the shortest such factorization) or that all the 1-cycles will be recorded (which gives the longest such factorization, but also the only one that makes it clear what the number is).    Prove .    Prove that the order of a permutation is the least common multiple of the lengths of the cycles it is a product of.     The Quaternions  For our last example we mention the group of quaternions , written .    The quaternion group  is a set with elements satisfying the following relations: is the identity element and      The quaternion group arises in the study of rotations in three dimensions. It has important applications in computer graphics and computer vision, as well as in physics and algebra.  There isn't much for us to do with right now, but you'd be surprised by the unusual places this group manages to crop up...     Computations and Examples      Provide explicit examples to show , and are not abelian groups.  Element Orders Find the order    Formal Proofs      Verify that the following are indeed groups:   The dihedral group     The symmetric group     The quaternion group      Uncommon Groups    The Rubik's Cube Group (coming soon)    Juggling Groups (coming soon)       Qualifying Exam Problems      (coming soon)    "
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
  "body": "  The dihedral group  is the set of symmetries of the regular -gon equipped with the binary operation given by composition. Dihedral Group    "
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
  "body": "  For any , the symmetric group is the set of all permutations of the set equipped with the composition of functions as its binary operation. Symmetric group    "
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
  "id": "exercise-6",
  "level": "2",
  "url": "sec-common-groups.html#exercise-6",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Provide explicit examples to show , and are not abelian groups. "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-common-groups.html#exercise-7",
  "type": "Exercise",
  "number": "2",
  "title": "Element Orders.",
  "body": "Element Orders Find the order "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec-common-groups.html#exercise-8",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "Verify that the following are indeed groups:   The dihedral group     The symmetric group     The quaternion group     "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec-common-groups.html#exercise-9",
  "type": "Exercise",
  "number": "4",
  "title": "Uncommon Groups.",
  "body": "Uncommon Groups    The Rubik's Cube Group (coming soon)    Juggling Groups (coming soon)    "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec-common-groups.html#exercise-10",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "(coming soon) "
},
{
  "id": "sec-gen-cyclic-gp",
  "level": "1",
  "url": "sec-gen-cyclic-gp.html",
  "type": "Section",
  "number": "1.3",
  "title": "Generators and Cyclic Groups",
  "body": " Generators and Cyclic Groups     How often misused words generate misleading thoughts.   Herbert Spencer     Generators    A subset of a group is said to generate  if every element of is equal to a product of elements of and their inverses (with repetitions allowed).         Prove that is generated by and any reflection.    Prove that if is prime then is generated by any two distinct reflections.         For prove that is generated by and the -cycle .      Cyclic Groups    If is a generated by a single element, i.e. for some , then is called a cyclic group .     Cyclic Generators Need not be Unique   Let be a cyclic group. Then .         Prove is generated by or     Prove is generated by for any integer such that .         Every cyclic group is abelian.       Computations and Examples      Coming soon to an OER near you!    Formal Proofs      Not Quite Cyclic Groups    Prove that is not a cyclic group.    Prove that is not cyclic.       Qualifying Exam Problems      Coming soon to an OER near you!    "
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
  "id": "exercise-11",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#exercise-11",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#exercise-12",
  "type": "Exercise",
  "number": "2",
  "title": "Not Quite Cyclic Groups.",
  "body": "Not Quite Cyclic Groups    Prove that is not a cyclic group.    Prove that is not cyclic.    "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#exercise-13",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "sec-subgroups",
  "level": "1",
  "url": "sec-subgroups.html",
  "type": "Section",
  "number": "1.4",
  "title": "Subgroups",
  "body": " Subgroups     I have this fear of falling in front of large groups of people. That's why I tend not to wear heels.   Taylor Swift     Subgroup Basics    A nonempty subset of a group is called a subgroup , denoted , Subgroup provided is a group under the multiplication law of .  A subgroup of a group is a proper subgroup, denoted if .     Subgroup Tests      If a subset of a group is nonempty and closed under multiplication and inversion, then is a subgroup.    If a subset of a group is nonempty and satisfies for all , , then is a subgroup.       We prove the one-step test first.  Assume is non-empty and for all , . Since is non-empty, there is an and hence . Since for any , is an identity element for . For any , , and so every element of has an inverse inside . For we have and thus and hence is closed under . This means that the restriction of the group operation of to is a well-defined group operation. This operation is associative by the axioms for the group . The axioms of a group have now been established for .  Now we prove the two step test.  Assume is non-empty and closed under multiplication and inversion. Then, for we have and . Since the hypothesis of the one-step test is satisfied, is a subgroup of .     Common Subgroups      and are the trivial subgroups of .              Let and define . Then for all .        Let and be subgroups of a group and define the set      Properties of Subgroups      Transitivity of Subgroups  If is a subgroup of and is a subgroup of , then is a subgroup of .    Intersections of Subgroups  If is a subgroup of for all in an index set , then is a subgroup of .    Unions of Subgroups  Let be a group and , subgroups. Prove that is a subgroup if and only if or .        Subgroups of Abelian and Cyclic Groups   Let be a subgroup of a group . If is abelian then so is .      Let and be groups. If , then       The alternating group  is the subset of all even cycles of .      Prove that is a subgroup of .      The special linear group with complex entries is defined       Prove that is a subgroup of .      The Center of a Group    The center of a group , often written , is the set of elements of that commute with every element of . That is,       Prove that is an abelian subgroup for any group .      Let be a group. Prove is abelian if any only if .      Let be a subgroup. Prove .      Generated Subgroups    Given a group and a subset of , the subgroup of generated by is If is a set with one element then we write and we refer to this as the cyclic subgroup generated by  .     Let be a group, , and . This is known as the commutator subgroup of .     For a subset of , the elements of can be described as:     Let . Since is a subgroup that contains , it is closed under products and inverses, and thus must contain all elements of .  For the opposite containment, we just need to show the set really is a subgroup. We use the one step test:      since we allow and declare the empty product to be .    If and are in then is also in .     Therefore and (by taking and ) and by the minimality of we obtain .       .      Prove that is the subgroup of generated by all produts of -cyclies (disjoint or not). In symbols,       Computations and Examples      Future Subgroups Throughout this course we will encounter numerous important subgroups that will need to be verified as such. We do so here. While these subgroups may seem random now, they will prove to be exceedingly useful in the future.    Let . Prove that the set is a subgroup of . The set is known as the centralizer of in , and is explored in greater depth later.      Let . Prove that the set is a subgroup of . The set is known as the centralizer of in , and is explored in greater depth later.     Let be a subgroup of and fix some element . Prove that is a subgroup of of the same order as .     Let be a group with subgroups . Then the set is a subgroup of if and only if , where        Formal Proofs      Finding Centers Determine the following:    for . Your answer will depend on whether is even or odd.     for .     for .     .     Verify , meaning that is the subgroup of generated by .  Consider the set .   Prove that .    Prove that for each integer , there is a unique subgroup with and that is cyclic.    Prove that every finitely generated subgroup of has finitely many elements.    Prove that is not finitely generated.       Qualifying Exam Problems      May 2021 Problem (1a)  Let be a group (not necessarily finite) and a nonempty subset of that is closed under multiplication. Suppose that for all we have . Prove is a subgroup of .   Coming soon to an OER near you!   Coming soon to an OER near you!   January 2022 Problem (1a)  Let be a group, and be subgroups of . Give an example of and such that is not a subgroup of .   Coming soon to an OER near you!   Coming soon to an OER near you!   January 2020 Problem (1b)  Let be a group, and be subgroups of . Give an example of and such that is not a subgroup of .   Coming soon to an OER near you!   Coming soon to an OER near you!      "
},
{
  "id": "def-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#def-subgroup",
  "type": "Definition",
  "number": "1.42",
  "title": "",
  "body": "  A nonempty subset of a group is called a subgroup , denoted , Subgroup provided is a group under the multiplication law of .  A subgroup of a group is a proper subgroup, denoted if .   "
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
  "id": "def-HK",
  "level": "2",
  "url": "sec-subgroups.html#def-HK",
  "type": "Definition",
  "number": "1.45",
  "title": "",
  "body": "  Let and be subgroups of a group and define the set    "
},
{
  "id": "thm-subgroup-properties",
  "level": "2",
  "url": "sec-subgroups.html#thm-subgroup-properties",
  "type": "Theorem",
  "number": "1.46",
  "title": "Properties of Subgroups.",
  "body": " Properties of Subgroups      Transitivity of Subgroups  If is a subgroup of and is a subgroup of , then is a subgroup of .    Intersections of Subgroups  If is a subgroup of for all in an index set , then is a subgroup of .    Unions of Subgroups  Let be a group and , subgroups. Prove that is a subgroup if and only if or .      "
},
{
  "id": "prop-abelian-and-cyclic-subgroups",
  "level": "2",
  "url": "sec-subgroups.html#prop-abelian-and-cyclic-subgroups",
  "type": "Proposition",
  "number": "1.47",
  "title": "Subgroups of Abelian and Cyclic Groups.",
  "body": " Subgroups of Abelian and Cyclic Groups   Let be a subgroup of a group . If is abelian then so is .   "
},
{
  "id": "lem-groups-contained-in-groups-are-subgroups",
  "level": "2",
  "url": "sec-subgroups.html#lem-groups-contained-in-groups-are-subgroups",
  "type": "Lemma",
  "number": "1.48",
  "title": "",
  "body": "  Let and be groups. If , then    "
},
{
  "id": "def-alternating-group",
  "level": "2",
  "url": "sec-subgroups.html#def-alternating-group",
  "type": "Definition",
  "number": "1.49",
  "title": "",
  "body": "  The alternating group  is the subset of all even cycles of .   "
},
{
  "id": "prop-alternating-group-is-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#prop-alternating-group-is-subgroup",
  "type": "Proposition",
  "number": "1.50",
  "title": "",
  "body": "  Prove that is a subgroup of .   "
},
{
  "id": "def-special-linear-group",
  "level": "2",
  "url": "sec-subgroups.html#def-special-linear-group",
  "type": "Definition",
  "number": "1.51",
  "title": "",
  "body": "  The special linear group with complex entries is defined    "
},
{
  "id": "prop-slg-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#prop-slg-subgroup",
  "type": "Proposition",
  "number": "1.52",
  "title": "",
  "body": "  Prove that is a subgroup of .   "
},
{
  "id": "def-group-pcenter",
  "level": "2",
  "url": "sec-subgroups.html#def-group-pcenter",
  "type": "Definition",
  "number": "1.53",
  "title": "",
  "body": "  The center of a group , often written , is the set of elements of that commute with every element of . That is,    "
},
{
  "id": "prop-center-is-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#prop-center-is-subgroup",
  "type": "Proposition",
  "number": "1.54",
  "title": "",
  "body": "  Prove that is an abelian subgroup for any group .   "
},
{
  "id": "prop-center-is-group-iff-abelian",
  "level": "2",
  "url": "sec-subgroups.html#prop-center-is-group-iff-abelian",
  "type": "Proposition",
  "number": "1.55",
  "title": "",
  "body": "  Let be a group. Prove is abelian if any only if .   "
},
{
  "id": "prop-centers-and-subgroups",
  "level": "2",
  "url": "sec-subgroups.html#prop-centers-and-subgroups",
  "type": "Proposition",
  "number": "1.56",
  "title": "",
  "body": "  Let be a subgroup. Prove .   "
},
{
  "id": "def-gensubgp",
  "level": "2",
  "url": "sec-subgroups.html#def-gensubgp",
  "type": "Definition",
  "number": "1.57",
  "title": "",
  "body": "  Given a group and a subset of , the subgroup of generated by is If is a set with one element then we write and we refer to this as the cyclic subgroup generated by  .   "
},
{
  "id": "ex-commutator-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#ex-commutator-subgroup",
  "type": "Example",
  "number": "1.58",
  "title": "",
  "body": " Let be a group, , and . This is known as the commutator subgroup of .  "
},
{
  "id": "lem-gensubgp",
  "level": "2",
  "url": "sec-subgroups.html#lem-gensubgp",
  "type": "Lemma",
  "number": "1.59",
  "title": "",
  "body": "  For a subset of , the elements of can be described as:     Let . Since is a subgroup that contains , it is closed under products and inverses, and thus must contain all elements of .  For the opposite containment, we just need to show the set really is a subgroup. We use the one step test:      since we allow and declare the empty product to be .    If and are in then is also in .     Therefore and (by taking and ) and by the minimality of we obtain .   "
},
{
  "id": "corollary-1",
  "level": "2",
  "url": "sec-subgroups.html#corollary-1",
  "type": "Corollary",
  "number": "1.60",
  "title": "",
  "body": "   .   "
},
{
  "id": "prop-generating-an",
  "level": "2",
  "url": "sec-subgroups.html#prop-generating-an",
  "type": "Proposition",
  "number": "1.61",
  "title": "",
  "body": "  Prove that is the subgroup of generated by all produts of -cyclies (disjoint or not). In symbols,    "
},
{
  "id": "exercise-14",
  "level": "2",
  "url": "sec-subgroups.html#exercise-14",
  "type": "Exercise",
  "number": "1",
  "title": "Future Subgroups.",
  "body": "Future Subgroups Throughout this course we will encounter numerous important subgroups that will need to be verified as such. We do so here. While these subgroups may seem random now, they will prove to be exceedingly useful in the future.    Let . Prove that the set is a subgroup of . The set is known as the centralizer of in , and is explored in greater depth later.      Let . Prove that the set is a subgroup of . The set is known as the centralizer of in , and is explored in greater depth later.     Let be a subgroup of and fix some element . Prove that is a subgroup of of the same order as .     Let be a group with subgroups . Then the set is a subgroup of if and only if , where     "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "sec-subgroups.html#exercise-15",
  "type": "Exercise",
  "number": "2",
  "title": "Finding Centers.",
  "body": "Finding Centers Determine the following:    for . Your answer will depend on whether is even or odd.     for .     for .     .    "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "sec-subgroups.html#exercise-16",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "Verify , meaning that is the subgroup of generated by . "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "sec-subgroups.html#exercise-17",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "Consider the set .   Prove that .    Prove that for each integer , there is a unique subgroup with and that is cyclic.    Prove that every finitely generated subgroup of has finitely many elements.    Prove that is not finitely generated.    "
},
{
  "id": "exercise-18",
  "level": "2",
  "url": "sec-subgroups.html#exercise-18",
  "type": "Exercise",
  "number": "1",
  "title": "May 2021 Problem (1a).",
  "body": "May 2021 Problem (1a)  Let be a group (not necessarily finite) and a nonempty subset of that is closed under multiplication. Suppose that for all we have . Prove is a subgroup of .   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-19",
  "level": "2",
  "url": "sec-subgroups.html#exercise-19",
  "type": "Exercise",
  "number": "2",
  "title": "January 2022 Problem (1a).",
  "body": "January 2022 Problem (1a)  Let be a group, and be subgroups of . Give an example of and such that is not a subgroup of .   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-20",
  "level": "2",
  "url": "sec-subgroups.html#exercise-20",
  "type": "Exercise",
  "number": "3",
  "title": "January 2020 Problem (1b).",
  "body": "January 2020 Problem (1b)  Let be a group, and be subgroups of . Give an example of and such that is not a subgroup of .   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-gphoms",
  "level": "1",
  "url": "sec-gphoms.html",
  "type": "Section",
  "number": "2.1",
  "title": "Group Homomorphisms",
  "body": " Group Homomorphisms    In the end, the character of a civilization is encased in its structures.   Frank Gehry     If and are groups, a homomorphism from is is a function such that , where and denote the multiplication rules for and , respectively.    Intuitively, a group homomorphism preserves the algebraic structure of the group, while allowing us to compare and relate different groups. In this way, group homomorphisms allow us to study the properties of groups by comparing them to other groups that we already understand well.   Homormophism Examples     The identity map is a group homomorphism for any group .    The exponential map is a homomorphism.    The natural log map is a homomorphism.    For any positive integer the map determinant map is a group homomorphism.      Specifically, the homomorphism will preserve the additive structure, such as the identity element and inverse elements.   Homomorphism Preservations   If is a homomorphism of groups, then    and     .         Let be a group. Prove there exists a unique group homomorphism .      Let is a homomorphism of groups. The kernel of is the set       Let is a homomorphism of groups. The image of is the set      This is identical to the set-theoretic image.    Properties of Group Homomorphisms      If is a homomorphism of groups, then the image of is a subgroup of .    If is a homomorphism of groups, then the kernel of is a subgroup of .    Prove that if is a group homomorphism and then the preimage of , defined as , is a subgroup of .    If and are group homomorphisms, the composition is a group homomorphism.    A group homomorphism is injective if and only if .    A group homomorphism is surjective if and only if .         Computations and Examples      Coming soon to an OER near you!    Formal Proofs      Group Homomorphisms Prove that each of the following are group homomorphisms   The function defined by .    The function defined by .    The function defined by      Finding Injective Homomorphisms   Find, with justification, an injective group homomorphism .  Find, with justification, an injective group homomorphism .      Qualifying Exam Problems      Coming soon to an OER near you!    "
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
  "id": "exercise-21",
  "level": "2",
  "url": "sec-gphoms.html#exercise-21",
  "type": "Exercise",
  "number": "2.1.1",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-22",
  "level": "2",
  "url": "sec-gphoms.html#exercise-22",
  "type": "Exercise",
  "number": "2.1.2",
  "title": "Group Homomorphisms.",
  "body": "Group Homomorphisms Prove that each of the following are group homomorphisms   The function defined by .    The function defined by .    The function defined by     "
},
{
  "id": "exercise-23",
  "level": "2",
  "url": "sec-gphoms.html#exercise-23",
  "type": "Exercise",
  "number": "2.1.3",
  "title": "Finding Injective Homomorphisms.",
  "body": "Finding Injective Homomorphisms   Find, with justification, an injective group homomorphism .  Find, with justification, an injective group homomorphism .   "
},
{
  "id": "exercise-24",
  "level": "2",
  "url": "sec-gphoms.html#exercise-24",
  "type": "Exercise",
  "number": "2.1.4",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "sec-gpisos",
  "level": "1",
  "url": "sec-gpisos.html",
  "type": "Section",
  "number": "2.2",
  "title": "Group Isomorphisms",
  "body": " Group Isomorphisms    Self preservation is the first law of nature.   Samuel Butler     A homomorphism is called an isomorphism if there exists a homomorphism such that and .  If is an isomorphism, and are called isomorphic , written . Isomorphic      I have defined the notion of isomorphism in differently than given in the textbook. The reason is that the correct meaning of the word isomorphism in any context (sets, groups, rings, fields, topological spaces, whatever) is always a morphism that has a two-sided inverse . In many contexts, such as sets, groups, rings and fields this turns out to be equivalent to the notion of being one-to-one and onto . But there are contexts in which this is not the case. For example a one-to-one and onto continuous map of topological spaces need not be a homeomorphism. (A homeomorphism is a term one uses for isomorphism of topological spaces, for historical reasons.)   Intuitively, a group isomorphism establishes a one-to-one correspondence between the elements of two groups, such that they have exactly the same algebraic structure. This means that the groups are essentially the same, up to a relabeling of their elements.  Group isomorphisms are important because they allow us to identify different groups that have the same algebraic structure. This can simplify the study of groups by reducing the number of cases that need to be considered, and it can also provide insight into the connections between seemingly unrelated groups.    Suppose is a group homomorphism. Then an isomorphism if and only if is bijective (one-to-one and onto).     Moving forward, we will essentially treat as the de-facto definition of a group isomorphism. Rather than end every proof with a reference to , we will instead enshrine its monumental achievements of within this remark. To alleviate some of the corresponding guilt asociated with this decision I have am referencing as many times as possible, as is important and should not be forgotten.    Isomorphism Examples     The identity map is a group isomomorphism for any group .    The exponential and natural logarithm maps from are actually isomorphisms.        Let and be groups. If is an isomorphism, then the following hold:           for all and for all      is abelian if and only if is abelian          is finitely generated if and only if is finitely generated.        These properties sometimes referred to as isomorphism invariants , though not within this text.   Now seems like an exceptional time to recall Part (4) of .    Prove that the composition of two isomorphisms is an isomorphism.      Let be a group. An isomorphism is called an automorphism of .     In we saw that the identity map is a group isomomorphism from a group to itself, making an automorphism. This may prove (pun intended) useful in the following proposition.     Prove that the set of automorphisms of , denoted , is a group under composition.     Notice that we have actually shown that the composition of automorphisms is an automorphism, both through (as automorphisms are isomorphisms) and (as groups are closed under their operation)   We have collected several new methods of determining when two groups are isomorphic. Let's express them explicitly.    Suppose . Then    and     .         Let be a group. Prove that the map given by for all is an automorphism if and only if is abelian.      Let be a group and . Define a map by for all .   Prove that for all .    Prove that is a subgroup of .        Note that as is bijective it is, by definition, a permutation of . This might come up later...     Deepening Isomorphism Understanding      Prove the following:   The group of integers under addition is isomorphic to the group of even integers under addition    The group of real numbers under addition is isomorphic to the group of non-zero real numbers under multiplication     Decide whether the groups and are isomorphic or not, with justification.  Prove the following:    if and only if .               .      Find an example of groups such that there is an isomorphism but is not trivial. Note: since can be rewritten as , the above shows that in general one cannot cancel groups in isomorphisms between direct products.    Section Results       Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!     Qualifying Exam Problems   These problems are from old qualifying exams   June 2020 Problem 2 Let be a group of order for some odd integer . Let be the group of permutations on the elements of (i.e., the group of bijective functions from G to G). You may use without proof that .  Let be given by for all , where is defined by for all . Prove that is an injective group homomorphism.  Prove that if is an element of order then is a product of transpositions.  Prove contains a subgroup of index and is consequently not simple. (Tip: Consider the inverse image under of the subgroup of consisting of the even permutations.)   May 2018 Problem 1(b) Give an example, with justification, of groups and for which is not isomorphic to .    "
},
{
  "id": "def-gpiso",
  "level": "2",
  "url": "sec-gpisos.html#def-gpiso",
  "type": "Definition",
  "number": "2.9",
  "title": "",
  "body": "  A homomorphism is called an isomorphism if there exists a homomorphism such that and .  If is an isomorphism, and are called isomorphic , written . Isomorphic    "
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
  "id": "exercise-25",
  "level": "2",
  "url": "sec-gpisos.html#exercise-25",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "",
  "body": "Prove the following:   The group of integers under addition is isomorphic to the group of even integers under addition    The group of real numbers under addition is isomorphic to the group of non-zero real numbers under multiplication    "
},
{
  "id": "exercise-26",
  "level": "2",
  "url": "sec-gpisos.html#exercise-26",
  "type": "Exercise",
  "number": "2.2.2",
  "title": "",
  "body": "Decide whether the groups and are isomorphic or not, with justification. "
},
{
  "id": "exercise-27",
  "level": "2",
  "url": "sec-gpisos.html#exercise-27",
  "type": "Exercise",
  "number": "2.2.3",
  "title": "",
  "body": "Prove the following:    if and only if .               .    "
},
{
  "id": "exercise-28",
  "level": "2",
  "url": "sec-gpisos.html#exercise-28",
  "type": "Exercise",
  "number": "2.2.4",
  "title": "",
  "body": "Find an example of groups such that there is an isomorphism but is not trivial. Note: since can be rewritten as , the above shows that in general one cannot cancel groups in isomorphisms between direct products. "
},
{
  "id": "exercise-29",
  "level": "2",
  "url": "sec-gpisos.html#exercise-29",
  "type": "Exercise",
  "number": "2.2.5",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-30",
  "level": "2",
  "url": "sec-gpisos.html#exercise-30",
  "type": "Exercise",
  "number": "2.2.6",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-31",
  "level": "2",
  "url": "sec-gpisos.html#exercise-31",
  "type": "Exercise",
  "number": "2.2.7",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-32",
  "level": "2",
  "url": "sec-gpisos.html#exercise-32",
  "type": "Exercise",
  "number": "2.2.8",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-33",
  "level": "2",
  "url": "sec-gpisos.html#exercise-33",
  "type": "Exercise",
  "number": "2.2.9",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-34",
  "level": "2",
  "url": "sec-gpisos.html#exercise-34",
  "type": "Exercise",
  "number": "2.2.10",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-35",
  "level": "2",
  "url": "sec-gpisos.html#exercise-35",
  "type": "Exercise",
  "number": "2.2.11",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-36",
  "level": "2",
  "url": "sec-gpisos.html#exercise-36",
  "type": "Exercise",
  "number": "2.2.12",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-37",
  "level": "2",
  "url": "sec-gpisos.html#exercise-37",
  "type": "Exercise",
  "number": "2.2.1",
  "title": "June 2020 Problem 2.",
  "body": "June 2020 Problem 2 Let be a group of order for some odd integer . Let be the group of permutations on the elements of (i.e., the group of bijective functions from G to G). You may use without proof that .  Let be given by for all , where is defined by for all . Prove that is an injective group homomorphism.  Prove that if is an element of order then is a product of transpositions.  Prove contains a subgroup of index and is consequently not simple. (Tip: Consider the inverse image under of the subgroup of consisting of the even permutations.)  "
},
{
  "id": "exercise-38",
  "level": "2",
  "url": "sec-gpisos.html#exercise-38",
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
  "title": "Classifying Cyclic Groups",
  "body": " Classifying Cyclic Groups    There is no way to be in cyclic existence without creating the causes of suffering.   Jetsunma Ahkon Lhamo     I used to wonder when my boomerang would come back to me. Then it hit me.   Ancient Proverb    Cyclic Groups of Relatively Prime Order   Prove that if are positive integers such that then there is a group isomorphism .      Let , where has finite order . Then    .    There is a bijection for each divisor of . Moreover, for each subgroup of , . In particular, all subgroups of are cyclic and there is a unique subgroup of each order.        Universal Mapping Property (UMP) for Cyclic Groups   Assume and let be any group. If , then for each such that , there is a unique group homomorphism such that . If , then for each , there is a unique group homomorphism such that . In both cases this unique group homomorphism is given by for any .     This is a particular case of the universal mapping property of a presentation (which we will covered later), since a cyclic group is either presented by or .    Classification Theorem for Cyclic Groups   Every infinite cyclic group is isomorphic to . Every cyclic group of order is isomorphic to .      Computations and Examples      Coming soon to an OER near you!    Formal Proofs      Coming soon to an OER near you!    Qualifying Exam Problems      Coming soon to an OER near you!    "
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
  "id": "exercise-39",
  "level": "2",
  "url": "sec-cylic-homoms.html#exercise-39",
  "type": "Exercise",
  "number": "2.3.1",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-40",
  "level": "2",
  "url": "sec-cylic-homoms.html#exercise-40",
  "type": "Exercise",
  "number": "2.3.2",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-41",
  "level": "2",
  "url": "sec-cylic-homoms.html#exercise-41",
  "type": "Exercise",
  "number": "2.3.3",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "sec-cosets",
  "level": "1",
  "url": "sec-cosets.html",
  "type": "Section",
  "number": "3.1",
  "title": "Cosets and Conjugations",
  "body": " Cosets and Conjugations    Too much may be the equivalent of none at all.   Lee Loevinger     For any and any let be defined as a left coset and right coset of in , respectfully.     Though mostly a matter of preference as aesthetics, we will focus primarily on left cosets.    Coset Equivalencies   Let . The following facts about left cosets are equivalent for :    and belong to the same left coset of in ,     for some ,     for some ,     ,     ,     .        if and belong to the same left coset of in then and for some , so and therefore where .    for some   and .    for some   .    .   Suppose for some , then by we also have for some . Then we have  thus .   Since , we have and . If then, and belong to the same left coset.      For , the collection of left cosets of in form a partition of , and similarly for the collection of right cosets. That is,   for all , either or      ,     ,   and similarly for right cosets. Moreover all left and right cosets have the same cardinality: for any .    Let me prove the assertions for right cosets. Clearly every element of belongs to at least one right coset, since (since ). We need to show any two cosets are either identical or disjoint: if and share an element, then it follows from of Lemma that . This proves that the right cosets partition . To see that all right cosets have the same cardinality as , define a function by . Clearly is onto and if then and hence , so that is also one-to-one.      If is a finite group and , then In particular the number of left cosets of in is equal to the number of right cosets of in .  Furthermore, even if is not finite the number of left and right cosets of a subgroup is still the same. (Hint : consider the map and show it's a bijection. Why is the inverse needed?)      In finite groups, the common number of left or right cosets of a subgroup in a group is denoted as and is called the index of in . Index of in      Lagrange's Theorem   If is a subgroup of a finite group , then divides .      If and is a finite group, then divides .      If is a finite group, then       Let be a group (possibly infinite) and subgroups of . Suppose is finite. Prove that (Hint: First prove this in the case is a finite group. Then prove you can reduce to the finite case.)      The conjugacy class of an element is . Conjugacy class of in       Let be a group. Two elements are conjugate if there is with .  Two subsets are conjugate if there is with .      Section Results       Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove .   Coming soon to an OER near you!    Prove the converse to Lagrange's theorem is false: find a group and an integer such that divides the order of but does not have any subgroups of order . Hint : Take .   "
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
  "body": "  In finite groups, the common number of left or right cosets of a subgroup in a group is denoted as and is called the index of in . Index of in    "
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
  "id": "def-conjugacy-class",
  "level": "2",
  "url": "sec-cosets.html#def-conjugacy-class",
  "type": "Definition",
  "number": "3.11",
  "title": "",
  "body": "  The conjugacy class of an element is . Conjugacy class of in    "
},
{
  "id": "def-conjugate",
  "level": "2",
  "url": "sec-cosets.html#def-conjugate",
  "type": "Definition",
  "number": "3.12",
  "title": "",
  "body": "  Let be a group. Two elements are conjugate if there is with .  Two subsets are conjugate if there is with .   "
},
{
  "id": "exercise-42",
  "level": "2",
  "url": "sec-cosets.html#exercise-42",
  "type": "Exercise",
  "number": "3.1.1",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-43",
  "level": "2",
  "url": "sec-cosets.html#exercise-43",
  "type": "Exercise",
  "number": "3.1.2",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-44",
  "level": "2",
  "url": "sec-cosets.html#exercise-44",
  "type": "Exercise",
  "number": "3.1.3",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-45",
  "level": "2",
  "url": "sec-cosets.html#exercise-45",
  "type": "Exercise",
  "number": "3.1.4",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-46",
  "level": "2",
  "url": "sec-cosets.html#exercise-46",
  "type": "Exercise",
  "number": "3.1.5",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-47",
  "level": "2",
  "url": "sec-cosets.html#exercise-47",
  "type": "Exercise",
  "number": "3.1.6",
  "title": "",
  "body": " Prove .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-48",
  "level": "2",
  "url": "sec-cosets.html#exercise-48",
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
  "body": " Normal Subgroups    If you are always trying to be normal, you will never know how amazing you can be.   Maya Angelou     A subgroup of a group is normal in , written , if for all .    Intuitively, a normal subgroup of a group is a subgroup that is invariant under conjugation by any element of the larger group. That is, if is a normal subgroup of , then for any element in , the conjugate of by , denoted by , is also a subgroup of that is equal to . Normal subgroups are important in group theory because they play a crucial role in the definition and study of quotient groups, which we will explore in    Equivalent Normal Definitions   Let be a subgroup of a group . The following are equivalent:         for all .     for all .        Examples of Normal Subgroups     The trivial subgroups , of a group are normal subgroups of .    Any subgroup of an abelian group is a normal subgroup.    For any group , .           Prove that if is a group homomorphism and then the preimage of , , is a normal subgroup of .    Show that if is a group homomorphism and then need not be a normal subgroup of .        Let be a subgroup and .   Prove that is a subgroup of .    Prove that     Suppose and is the only subgroup of of order . Prove that is normal.       Let and be normal subgroups of a group such that . Prove that for all .    Let be a group and a subset of . Let . Prove that if and only if for every and .    Let be a group and let be a set. The normal subgroup generated by , denoted , is the intersection of all the normal subgroups of that contain .   Show that is a normal subgroup of .    Show that the elements of can be described as        Let be a group, , and . Prove that .    Let be a group with subgroups . Recall the notation    Prove that if and only if .    Prove that if either one of or is a normal subgroup of , then and .       In , let and . Then but of course and do not commute. The fact that can also be justified by observing that .    Let be a group and be its automorphism group. In Problem 7 on HW # 2, you proved that for each , the function defined by for all is an automorphism of . Further, you proved the set , called the set of inner automorphisms of , is a subgroup of . Prove that .    Let be a finite group. Prove that the number of elements in the set is even. Conclude that a group of even order must have an element of order .    Let be a finite group, and subgroups such that and = are relatively prime and . Prove that .    Let be a group, and be subgroups of .   Give an example of and such that is not a subgroup of .    Suppose now that and , where is prime. Prove that either or .         Let , , and . Notice that , and thus , ( ) which does not divide . Thus is not a subgroup of , as this would contradict .    Suppose there exists some such that . We examine . Notice that since has prime order it is cyclic, and thus generated by any non-identity element, such as . Thus any element in can be written in the form , and any element in can subsequently be written as for some . Thus .       Let be a finite group and a subgroup of such that: , is simple, and . Prove that the only normal subgroups of are , and .   Let be a normal subgroup of . Then is a normal subgroup of .     Computations and Examples      Coming soon to an OER near you!    Formal Proofs       Show that any subgroup of index two is normal. This means: show that if is a group, is a subgroup and , i.e the number of left (or right) cosets of in is two, then is normal.   Coming soon to an OER near you!   Coming soon to an OER near you!    Let be a group with a subgroup so that .   Prove that there is a normal subgroup of , so that and     Prove that if is finitely generated, there are most finitely many subgroups with index .      You might want to consider maps .   Coming soon to an OER near you!    Show that being a normal subgroup is not a transitive relation. In other words, find groups such that and , but .    is a good place to start routing around in.   Consider one can show that and, since is abelian ( ), the subgroup is normal in . But is not normal in , since for example      Qualifying Exam Problems      January 2019 Problem (1)  Let be a group. A subgroup of is called a characteristic subgroup of if for every automorphism of . Show that if is a characteristic subgroup of and is a normal subgroup of , then is a normal subgroup of .   Let be a group, is a normal subgroup of , and a characteristic subgroup of . Let and consider the automorphism given by .  Let and notice , as . Thus is well defined. Let . As , we can write for some . Then , making surjective. As we see that is a bijection. The homomorphism piece we get for free from , making .  Let . As is a characteristic subgroup of , we see that for all and for all . Thus is normal in .   May 2019 Problem (2a)  Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by  In the original qualifying exam, the centralizer was denoted and the normalizer of is the subgroup of defined by . Show that the centralizer of in is a normal subgroup of the normalizer of in .   May 2021 Problem (1ab)  Let be a group (not necessarily finite) and a nonempty subset of that is closed under multiplication. Suppose that for all we have . Prove the following:    is a subgroup of .     is normal.      Coming soon to an OER near you!      See:       Jan 2022 Problem (1)  Let be a group, and be subgroups of .   Give an example of and such that is not a subgroup of .    Suppose now that and , where is prime. Prove that either or       Coming soon to an OER near you!      See:       Jan 2022 Problem (3b)  Let be the group of all matrices with entres from having determinant . Let be a prime number, and take to be the subset of consisting of all with and . Prove that is a normal subgroup of .   Coming soon to an OER near you!      See:         "
},
{
  "id": "def-normal-subgroup",
  "level": "2",
  "url": "sec-normal-subgroups.html#def-normal-subgroup",
  "type": "Definition",
  "number": "3.13",
  "title": "",
  "body": "  A subgroup of a group is normal in , written , if for all .   "
},
{
  "id": "prop-equivdef-normal",
  "level": "2",
  "url": "sec-normal-subgroups.html#prop-equivdef-normal",
  "type": "Proposition",
  "number": "3.14",
  "title": "Equivalent Normal Definitions.",
  "body": " Equivalent Normal Definitions   Let be a subgroup of a group . The following are equivalent:         for all .     for all .      "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec-normal-subgroups.html#example-7",
  "type": "Example",
  "number": "3.15",
  "title": "Examples of Normal Subgroups.",
  "body": " Examples of Normal Subgroups     The trivial subgroups , of a group are normal subgroups of .    Any subgroup of an abelian group is a normal subgroup.    For any group , .     "
},
{
  "id": "prop-normal-subgroups-and-homomorphisms",
  "level": "2",
  "url": "sec-normal-subgroups.html#prop-normal-subgroups-and-homomorphisms",
  "type": "Proposition",
  "number": "3.16",
  "title": "",
  "body": "     Prove that if is a group homomorphism and then the preimage of , , is a normal subgroup of .    Show that if is a group homomorphism and then need not be a normal subgroup of .      "
},
{
  "id": "problem-5",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-5",
  "type": "Problem",
  "number": "3.17",
  "title": "",
  "body": " Let be a subgroup and .   Prove that is a subgroup of .    Prove that     Suppose and is the only subgroup of of order . Prove that is normal.     "
},
{
  "id": "problem-6",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-6",
  "type": "Problem",
  "number": "3.18",
  "title": "",
  "body": " Let and be normal subgroups of a group such that . Prove that for all .  "
},
{
  "id": "problem-7",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-7",
  "type": "Problem",
  "number": "3.19",
  "title": "",
  "body": " Let be a group and a subset of . Let . Prove that if and only if for every and .  "
},
{
  "id": "problem-8",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-8",
  "type": "Problem",
  "number": "3.20",
  "title": "",
  "body": " Let be a group and let be a set. The normal subgroup generated by , denoted , is the intersection of all the normal subgroups of that contain .   Show that is a normal subgroup of .    Show that the elements of can be described as      "
},
{
  "id": "problem-9",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-9",
  "type": "Problem",
  "number": "3.21",
  "title": "",
  "body": " Let be a group, , and . Prove that .  "
},
{
  "id": "problem-10",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-10",
  "type": "Problem",
  "number": "3.22",
  "title": "",
  "body": " Let be a group with subgroups . Recall the notation    Prove that if and only if .    Prove that if either one of or is a normal subgroup of , then and .     "
},
{
  "id": "problem-11",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-11",
  "type": "Problem",
  "number": "3.23",
  "title": "",
  "body": " In , let and . Then but of course and do not commute. The fact that can also be justified by observing that .  "
},
{
  "id": "problem-12",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-12",
  "type": "Problem",
  "number": "3.24",
  "title": "",
  "body": " Let be a group and be its automorphism group. In Problem 7 on HW # 2, you proved that for each , the function defined by for all is an automorphism of . Further, you proved the set , called the set of inner automorphisms of , is a subgroup of . Prove that .  "
},
{
  "id": "problem-13",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-13",
  "type": "Problem",
  "number": "3.25",
  "title": "",
  "body": " Let be a finite group. Prove that the number of elements in the set is even. Conclude that a group of even order must have an element of order .  "
},
{
  "id": "problem-14",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-14",
  "type": "Problem",
  "number": "3.26",
  "title": "",
  "body": " Let be a finite group, and subgroups such that and = are relatively prime and . Prove that .  "
},
{
  "id": "exercise-49",
  "level": "2",
  "url": "sec-normal-subgroups.html#exercise-49",
  "type": "Checkpoint",
  "number": "3.27",
  "title": "",
  "body": " Let be a group, and be subgroups of .   Give an example of and such that is not a subgroup of .    Suppose now that and , where is prime. Prove that either or .         Let , , and . Notice that , and thus , ( ) which does not divide . Thus is not a subgroup of , as this would contradict .    Suppose there exists some such that . We examine . Notice that since has prime order it is cyclic, and thus generated by any non-identity element, such as . Thus any element in can be written in the form , and any element in can subsequently be written as for some . Thus .     "
},
{
  "id": "exercise-50",
  "level": "2",
  "url": "sec-normal-subgroups.html#exercise-50",
  "type": "Checkpoint",
  "number": "3.28",
  "title": "",
  "body": " Let be a finite group and a subgroup of such that: , is simple, and . Prove that the only normal subgroups of are , and .   Let be a normal subgroup of . Then is a normal subgroup of .  "
},
{
  "id": "exercise-51",
  "level": "2",
  "url": "sec-normal-subgroups.html#exercise-51",
  "type": "Exercise",
  "number": "3.2.1",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-52",
  "level": "2",
  "url": "sec-normal-subgroups.html#exercise-52",
  "type": "Exercise",
  "number": "3.2.2",
  "title": "",
  "body": " Show that any subgroup of index two is normal. This means: show that if is a group, is a subgroup and , i.e the number of left (or right) cosets of in is two, then is normal.   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-53",
  "level": "2",
  "url": "sec-normal-subgroups.html#exercise-53",
  "type": "Exercise",
  "number": "3.2.3",
  "title": "",
  "body": " Let be a group with a subgroup so that .   Prove that there is a normal subgroup of , so that and     Prove that if is finitely generated, there are most finitely many subgroups with index .      You might want to consider maps .   Coming soon to an OER near you!  "
},
{
  "id": "exercise-54",
  "level": "2",
  "url": "sec-normal-subgroups.html#exercise-54",
  "type": "Exercise",
  "number": "3.2.4",
  "title": "",
  "body": " Show that being a normal subgroup is not a transitive relation. In other words, find groups such that and , but .    is a good place to start routing around in.   Consider one can show that and, since is abelian ( ), the subgroup is normal in . But is not normal in , since for example   "
},
{
  "id": "exercise-55",
  "level": "2",
  "url": "sec-normal-subgroups.html#exercise-55",
  "type": "Exercise",
  "number": "3.2.5",
  "title": "January 2019 Problem (1).",
  "body": "January 2019 Problem (1)  Let be a group. A subgroup of is called a characteristic subgroup of if for every automorphism of . Show that if is a characteristic subgroup of and is a normal subgroup of , then is a normal subgroup of .   Let be a group, is a normal subgroup of , and a characteristic subgroup of . Let and consider the automorphism given by .  Let and notice , as . Thus is well defined. Let . As , we can write for some . Then , making surjective. As we see that is a bijection. The homomorphism piece we get for free from , making .  Let . As is a characteristic subgroup of , we see that for all and for all . Thus is normal in .  "
},
{
  "id": "exercise-56",
  "level": "2",
  "url": "sec-normal-subgroups.html#exercise-56",
  "type": "Exercise",
  "number": "3.2.6",
  "title": "May 2019 Problem (2a).",
  "body": "May 2019 Problem (2a)  Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by  In the original qualifying exam, the centralizer was denoted and the normalizer of is the subgroup of defined by . Show that the centralizer of in is a normal subgroup of the normalizer of in .  "
},
{
  "id": "exercise-57",
  "level": "2",
  "url": "sec-normal-subgroups.html#exercise-57",
  "type": "Exercise",
  "number": "3.2.7",
  "title": "May 2021 Problem (1ab).",
  "body": "May 2021 Problem (1ab)  Let be a group (not necessarily finite) and a nonempty subset of that is closed under multiplication. Suppose that for all we have . Prove the following:    is a subgroup of .     is normal.      Coming soon to an OER near you!      See:      "
},
{
  "id": "exercise-58",
  "level": "2",
  "url": "sec-normal-subgroups.html#exercise-58",
  "type": "Exercise",
  "number": "3.2.8",
  "title": "Jan 2022 Problem (1).",
  "body": "Jan 2022 Problem (1)  Let be a group, and be subgroups of .   Give an example of and such that is not a subgroup of .    Suppose now that and , where is prime. Prove that either or       Coming soon to an OER near you!      See:      "
},
{
  "id": "exercise-59",
  "level": "2",
  "url": "sec-normal-subgroups.html#exercise-59",
  "type": "Exercise",
  "number": "3.2.9",
  "title": "Jan 2022 Problem (3b).",
  "body": "Jan 2022 Problem (3b)  Let be the group of all matrices with entres from having determinant . Let be a prime number, and take to be the subset of consisting of all with and . Prove that is a normal subgroup of .   Coming soon to an OER near you!      See:      "
},
{
  "id": "sec-quotient-groups",
  "level": "1",
  "url": "sec-quotient-groups.html",
  "type": "Section",
  "number": "3.3",
  "title": "Quotient Groups",
  "body": " Quotient Groups  Recall from your undergraduate algebra course the construction for the integers modulo : one starts with an equivalence relation on , considers the set of all equivalence classes with respect to this equivalence relation, and verifies that the operations on give rise to well defined binary operations on the set of equivalence classes.    For any normal subgroup of a group , the quotient group  is , where is the equivalence relation induced by the left action of on . In other words, is the set of right cosets of in with multiplication given by . By part 4. of Proposition , is also the set of left cosets of in with multiplication given by .    Recalling , we have the following corollary:    By Lagrange's Theorem, if is finite we have .     The infinite dihedral group  is the set with multiplication defined by , and . In other words, is the group having presentation Then and via and .    In the example above both and are infinite but .     For any group and normal subgroup of , the map defined by is a surjective group homomorphism with kernel .    Surjectivity is immediate from the definition. The group homomorphism property follows from the computation below which uses the definition of and the rule for multiplying cosets in : Finally, using Lemma , we have .      A subgroup of a group is normal in if and only if is the kernel of a homomorphism with domain     Coming soon to an OER near you!      Computations and Examples      Coming soon to an OER near you!    Formal Proofs      Coming soon to an OER near you!    Qualifying Exam Problems      May 2021 Problem (1)  Let be a group (not necessarily finite) and a nonempty subset of that is closed under multiplication. Suppose that for all we have . Prove the following:    is a subgroup of      is normal     is abelian.      Let be a group, a multiplicatively closed subset of , and suppose that for all .  First, notice that . Let , and consider . Notice that . As is multiplicatively closed, we see that . Thus is a subgroup of by the subgroup test.  Let , , and consider . Notice that . Multiplying by on the right we see , as it is multiplicatively closed and . We rewrite , given that elements always commute with their inverses. As , we see that as well. Thus is normal in .  Let . As for every , every element has order . Thus and so , making the group abelian.   May 2019 Problem 2  Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by  In the original qualifying exam, the centralizer was denoted and the normalizer of is the subgroup of defined by .   Show that the centralizer of in is a normal subgroup of the normalizer of in .    Show that the quotient is isomorphic to a subgroup of the automorphism group of .      Coming soon to an OER near you!   May 2018 Problem 1  Let and be groups. Recall that for any group , an automorphism of is an isomorphism from to , and denotes the group of automorphisms of .   Show that the direct product group is isomorphic to a subgroup of .    Give an example, with justification, of groups and for which is not isomorphic to .      Coming soon to an OER near you!     "
},
{
  "id": "def-quotient-group",
  "level": "2",
  "url": "sec-quotient-groups.html#def-quotient-group",
  "type": "Definition",
  "number": "3.29",
  "title": "",
  "body": "  For any normal subgroup of a group , the quotient group  is , where is the equivalence relation induced by the left action of on . In other words, is the set of right cosets of in with multiplication given by . By part 4. of Proposition , is also the set of left cosets of in with multiplication given by .   "
},
{
  "id": "cor-order-of-quotient",
  "level": "2",
  "url": "sec-quotient-groups.html#cor-order-of-quotient",
  "type": "Corollary",
  "number": "3.30",
  "title": "",
  "body": "  By Lagrange's Theorem, if is finite we have .   "
},
{
  "id": "example-8",
  "level": "2",
  "url": "sec-quotient-groups.html#example-8",
  "type": "Example",
  "number": "3.31",
  "title": "",
  "body": " The infinite dihedral group  is the set with multiplication defined by , and . In other words, is the group having presentation Then and via and .  "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "sec-quotient-groups.html#remark-16",
  "type": "Remark",
  "number": "3.32",
  "title": "",
  "body": " In the example above both and are infinite but .  "
},
{
  "id": "lem-quotient-surj-hom",
  "level": "2",
  "url": "sec-quotient-groups.html#lem-quotient-surj-hom",
  "type": "Lemma",
  "number": "3.33",
  "title": "",
  "body": "  For any group and normal subgroup of , the map defined by is a surjective group homomorphism with kernel .    Surjectivity is immediate from the definition. The group homomorphism property follows from the computation below which uses the definition of and the rule for multiplying cosets in : Finally, using Lemma , we have .   "
},
{
  "id": "cor-norm-iff-ker",
  "level": "2",
  "url": "sec-quotient-groups.html#cor-norm-iff-ker",
  "type": "Corollary",
  "number": "3.34",
  "title": "",
  "body": "  A subgroup of a group is normal in if and only if is the kernel of a homomorphism with domain     Coming soon to an OER near you!   "
},
{
  "id": "exercise-60",
  "level": "2",
  "url": "sec-quotient-groups.html#exercise-60",
  "type": "Exercise",
  "number": "3.3.1",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-61",
  "level": "2",
  "url": "sec-quotient-groups.html#exercise-61",
  "type": "Exercise",
  "number": "3.3.2",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-62",
  "level": "2",
  "url": "sec-quotient-groups.html#exercise-62",
  "type": "Exercise",
  "number": "3.3.3",
  "title": "May 2021 Problem (1).",
  "body": "May 2021 Problem (1)  Let be a group (not necessarily finite) and a nonempty subset of that is closed under multiplication. Suppose that for all we have . Prove the following:    is a subgroup of      is normal     is abelian.      Let be a group, a multiplicatively closed subset of , and suppose that for all .  First, notice that . Let , and consider . Notice that . As is multiplicatively closed, we see that . Thus is a subgroup of by the subgroup test.  Let , , and consider . Notice that . Multiplying by on the right we see , as it is multiplicatively closed and . We rewrite , given that elements always commute with their inverses. As , we see that as well. Thus is normal in .  Let . As for every , every element has order . Thus and so , making the group abelian.  "
},
{
  "id": "exercise-63",
  "level": "2",
  "url": "sec-quotient-groups.html#exercise-63",
  "type": "Exercise",
  "number": "3.3.4",
  "title": "May 2019 Problem 2.",
  "body": "May 2019 Problem 2  Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by  In the original qualifying exam, the centralizer was denoted and the normalizer of is the subgroup of defined by .   Show that the centralizer of in is a normal subgroup of the normalizer of in .    Show that the quotient is isomorphic to a subgroup of the automorphism group of .      Coming soon to an OER near you!  "
},
{
  "id": "exercise-64",
  "level": "2",
  "url": "sec-quotient-groups.html#exercise-64",
  "type": "Exercise",
  "number": "3.3.5",
  "title": "May 2018 Problem 1.",
  "body": "May 2018 Problem 1  Let and be groups. Recall that for any group , an automorphism of is an isomorphism from to , and denotes the group of automorphisms of .   Show that the direct product group is isomorphic to a subgroup of .    Give an example, with justification, of groups and for which is not isomorphic to .      Coming soon to an OER near you!  "
},
{
  "id": "sec-isomorphism-thms",
  "level": "1",
  "url": "sec-isomorphism-thms.html",
  "type": "Section",
  "number": "3.4",
  "title": "The Isomorphism Theorems",
  "body": " The Isomorphism Theorems  We come to the so-called Isomorphism Theorems.   (Universal Mapping Property (UMP) of a Quotient Group)   Let be a group and a normal subgroup. If is a homomorphism of groups such that , then    there exists a unique group homomorphism such that the composition of and the quotient map is .    If is onto, then is onto.    Moreover,       1. If such a exists, it is necessarily unique since is onto. In fact, if then has to be given by the formula We now need to show that this formula determines a well-defined homomorphism: If , then and so , whence . For any we have   2. The formula for given above ensures that hence is surjective if and only if is surjective.  3. We have iff iff iff . If for some , then for some and hence for some . Since , we have . ◻     Let be any group. For , set . Let denote the commutator subgroup of generated by all elements of the form for . (Some people write as .) Then is in fact normal: . Now let be any group homomorphism from to an abelian group . Since for all (since is abelian), we have that must contain . By the UMP for quotients, we get that factors as for a unique group homomorphism .  The group is called the abelianization of and the motto is: A homomorphism from a group to an abelian group factors uniquely through the abelianization.     If is a homomorphism of groups, then and the map defined by the UMP induces an isomorphism     By the UMP, there exists a homomorphism such that , and its kernel consists of just the one element of . So is one-to-one, and the image of is clearly the same as the image of . ◻         If and then if and only if .    If and and either one of or is a normal subgroup then and .        The identity does not mean that every pair of elements from and must commute.    In , let and . Then but of course and do not commute. The fact that can also be justified by observing that .    Second Isomorphism Theorem   Let be a group, and . Then , , and there is an isomorphism given by     The first two assertions are left as exercises and since we have . Define a homomorphism by . This is a homomorphism since it is the composition of homomorphisms. is onto since for all we have . The kernel of is . The result thus follows from the first isomorphism theorem.      If and are finite subgrups of and , then . (In fact this is also true without the requirement that be normal.)     Third Isomorphism Theorem   Suppose is a group, , and . Then , and there is an isomorphism given by sending the coset of represented by to .    The first two assertions are immediate from the definitions.  The kernel of the canonical map contains and so by the UMP for quotients we get an induced homomorhism with . Moreover, we know Finally apply the First Isomorphism Theorem to .     The Lattice Isomorphism Theorem   Let be a group and a normal subgroup with canonical homomorphism . There is an containment-preserving bijection given by for . The inverse is defined for by where is the quotient map. We denote .  Then this bijection enjoys the following properties:    (normal) subgroups correspond to normal subgroups i.e.,     iff and iff      iff and iff       indices are preserved; i.e., and .    the supremums and infimums are preserved (this makes and lattice isomorphisms)     and      and         We have previously shown that the quotient map is a surjective group homomorphism. We show:     is well defined (correct codomain) since for we have (since images of subgroups through group homomorphisms are subgroups).     is well defined (correct codomain) since for we have (since preimages of subgroups through group homomorphisms are subgroups) and for any we have , hence      and are mutual inverses: since is surjective and , with the last equality justified by     Thus, the two functions defined in the statement are well-defined and are mutually inverse.  Since and preserve containments, each of , preserves the order relation of containment.  I will only prove some parts of statements (1), (2), (3) in the theorem.  (1) If and , then holds by part of the 3rd Isomorphism Theorem or by the exercise below, since is surjective. The fact that the inverse function also sends normal subgroups to normal subgroups is a consequence of the statement that inverse images of normal subgroups are normal subgroups (see HW 4).  (2) In the interest of time, I’ll only prove the assertion about indices in the special case when is normal. In that case this fact is also an immediate consequence of the Third Isomorhism Theorem since for with we have The general case is a consequence of an exercise from HW 5.  (3) The proof of (3) is omitted.     Exercise 1.82 . If is a group homomorphism and then . In particular, if is surjective then (but this need not be true in the absence of surjectivity, see HW 4).     Let be a (not necessarily finite) group and and normal subgroups such that . Prove that    Let defined such that . Let . Then showing is a homomorphism.  Let . As , we have and with and . As and we see .  Consider and making surjective as well.  Let . Then , and so . Let . Then , so and , placing . Thus, by the First Isomorphism Theorem, we have     Let be a finite group.   If is a normal subgroup of and , prove that is contained in the center of .    Suppose that is odd and that contains a non-trivial simple subgroup with . Prove that is the only non-trivial proper normal subgroup of .      Let and let . As is normal, we see , and thus one of the following must be true: - , where is the identity element of , or - , the only other element of . However, in the first case we would have by multiplying and over, and thus it must be the case that , or . Thus .  From Lagrange's Theorem we know that , meaning that has an even number of elements. Thus is the smallest prime dividing the order of , making normal in (See: ).  Suppose by way of contradiction there exists some non-trivial proper normal subgroup of that is not . As is normal, by the Second Isomorphism Theorem we have . However, as is simple, this means that . SIT also tells us that . As , this makes and . From part (a), . However, this contradicts Lagrange’s Theorem, as does not divide any odd numbers.    Let be a group and a subgroup of . Recall that the centralizer of in is Prove that if is normal in , then so is and that is isomorphic to a subgroup of the automorphism group of .    "
},
{
  "id": "thm-UMPquot",
  "level": "2",
  "url": "sec-isomorphism-thms.html#thm-UMPquot",
  "type": "Theorem",
  "number": "3.35",
  "title": "(Universal Mapping Property (UMP) of a Quotient Group).",
  "body": " (Universal Mapping Property (UMP) of a Quotient Group)   Let be a group and a normal subgroup. If is a homomorphism of groups such that , then    there exists a unique group homomorphism such that the composition of and the quotient map is .    If is onto, then is onto.    Moreover,       1. If such a exists, it is necessarily unique since is onto. In fact, if then has to be given by the formula We now need to show that this formula determines a well-defined homomorphism: If , then and so , whence . For any we have   2. The formula for given above ensures that hence is surjective if and only if is surjective.  3. We have iff iff iff . If for some , then for some and hence for some . Since , we have . ◻   "
},
{
  "id": "example-9",
  "level": "2",
  "url": "sec-isomorphism-thms.html#example-9",
  "type": "Example",
  "number": "3.36",
  "title": "",
  "body": " Let be any group. For , set . Let denote the commutator subgroup of generated by all elements of the form for . (Some people write as .) Then is in fact normal: . Now let be any group homomorphism from to an abelian group . Since for all (since is abelian), we have that must contain . By the UMP for quotients, we get that factors as for a unique group homomorphism .  The group is called the abelianization of and the motto is: A homomorphism from a group to an abelian group factors uniquely through the abelianization.  "
},
{
  "id": "thm-fit-group",
  "level": "2",
  "url": "sec-isomorphism-thms.html#thm-fit-group",
  "type": "Theorem",
  "number": "3.37",
  "title": "",
  "body": "  If is a homomorphism of groups, then and the map defined by the UMP induces an isomorphism     By the UMP, there exists a homomorphism such that , and its kernel consists of just the one element of . So is one-to-one, and the image of is clearly the same as the image of . ◻   "
},
{
  "id": "prop-normal-hk",
  "level": "2",
  "url": "sec-isomorphism-thms.html#prop-normal-hk",
  "type": "Proposition",
  "number": "3.38",
  "title": "",
  "body": "     If and then if and only if .    If and and either one of or is a normal subgroup then and .      "
},
{
  "id": "warning-1",
  "level": "2",
  "url": "sec-isomorphism-thms.html#warning-1",
  "type": "Warning",
  "number": "3.39",
  "title": "",
  "body": " The identity does not mean that every pair of elements from and must commute.  "
},
{
  "id": "example-10",
  "level": "2",
  "url": "sec-isomorphism-thms.html#example-10",
  "type": "Example",
  "number": "3.40",
  "title": "",
  "body": " In , let and . Then but of course and do not commute. The fact that can also be justified by observing that .  "
},
{
  "id": "thm-sit-group",
  "level": "2",
  "url": "sec-isomorphism-thms.html#thm-sit-group",
  "type": "Theorem",
  "number": "3.41",
  "title": "Second Isomorphism Theorem.",
  "body": " Second Isomorphism Theorem   Let be a group, and . Then , , and there is an isomorphism given by     The first two assertions are left as exercises and since we have . Define a homomorphism by . This is a homomorphism since it is the composition of homomorphisms. is onto since for all we have . The kernel of is . The result thus follows from the first isomorphism theorem.   "
},
{
  "id": "cor-order-of-hn",
  "level": "2",
  "url": "sec-isomorphism-thms.html#cor-order-of-hn",
  "type": "Corollary",
  "number": "3.42",
  "title": "",
  "body": "  If and are finite subgrups of and , then . (In fact this is also true without the requirement that be normal.)   "
},
{
  "id": "thm-tit-group",
  "level": "2",
  "url": "sec-isomorphism-thms.html#thm-tit-group",
  "type": "Theorem",
  "number": "3.43",
  "title": "Third Isomorphism Theorem.",
  "body": " Third Isomorphism Theorem   Suppose is a group, , and . Then , and there is an isomorphism given by sending the coset of represented by to .    The first two assertions are immediate from the definitions.  The kernel of the canonical map contains and so by the UMP for quotients we get an induced homomorhism with . Moreover, we know Finally apply the First Isomorphism Theorem to .   "
},
{
  "id": "thm-lattice-iso-group",
  "level": "2",
  "url": "sec-isomorphism-thms.html#thm-lattice-iso-group",
  "type": "Theorem",
  "number": "3.44",
  "title": "The Lattice Isomorphism Theorem.",
  "body": " The Lattice Isomorphism Theorem   Let be a group and a normal subgroup with canonical homomorphism . There is an containment-preserving bijection given by for . The inverse is defined for by where is the quotient map. We denote .  Then this bijection enjoys the following properties:    (normal) subgroups correspond to normal subgroups i.e.,     iff and iff      iff and iff       indices are preserved; i.e., and .    the supremums and infimums are preserved (this makes and lattice isomorphisms)     and      and         We have previously shown that the quotient map is a surjective group homomorphism. We show:     is well defined (correct codomain) since for we have (since images of subgroups through group homomorphisms are subgroups).     is well defined (correct codomain) since for we have (since preimages of subgroups through group homomorphisms are subgroups) and for any we have , hence      and are mutual inverses: since is surjective and , with the last equality justified by     Thus, the two functions defined in the statement are well-defined and are mutually inverse.  Since and preserve containments, each of , preserves the order relation of containment.  I will only prove some parts of statements (1), (2), (3) in the theorem.  (1) If and , then holds by part of the 3rd Isomorphism Theorem or by the exercise below, since is surjective. The fact that the inverse function also sends normal subgroups to normal subgroups is a consequence of the statement that inverse images of normal subgroups are normal subgroups (see HW 4).  (2) In the interest of time, I’ll only prove the assertion about indices in the special case when is normal. In that case this fact is also an immediate consequence of the Third Isomorhism Theorem since for with we have The general case is a consequence of an exercise from HW 5.  (3) The proof of (3) is omitted.   "
},
{
  "id": "exercise-65",
  "level": "2",
  "url": "sec-isomorphism-thms.html#exercise-65",
  "type": "Checkpoint",
  "number": "3.45",
  "title": "",
  "body": " Exercise 1.82 . If is a group homomorphism and then . In particular, if is surjective then (but this need not be true in the absence of surjectivity, see HW 4). "
},
{
  "id": "exercise-66",
  "level": "2",
  "url": "sec-isomorphism-thms.html#exercise-66",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": " Let be a (not necessarily finite) group and and normal subgroups such that . Prove that    Let defined such that . Let . Then showing is a homomorphism.  Let . As , we have and with and . As and we see .  Consider and making surjective as well.  Let . Then , and so . Let . Then , so and , placing . Thus, by the First Isomorphism Theorem, we have   "
},
{
  "id": "exercise-67",
  "level": "2",
  "url": "sec-isomorphism-thms.html#exercise-67",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": " Let be a finite group.   If is a normal subgroup of and , prove that is contained in the center of .    Suppose that is odd and that contains a non-trivial simple subgroup with . Prove that is the only non-trivial proper normal subgroup of .      Let and let . As is normal, we see , and thus one of the following must be true: - , where is the identity element of , or - , the only other element of . However, in the first case we would have by multiplying and over, and thus it must be the case that , or . Thus .  From Lagrange's Theorem we know that , meaning that has an even number of elements. Thus is the smallest prime dividing the order of , making normal in (See: ).  Suppose by way of contradiction there exists some non-trivial proper normal subgroup of that is not . As is normal, by the Second Isomorphism Theorem we have . However, as is simple, this means that . SIT also tells us that . As , this makes and . From part (a), . However, this contradicts Lagrange’s Theorem, as does not divide any odd numbers.  "
},
{
  "id": "exercise-68",
  "level": "2",
  "url": "sec-isomorphism-thms.html#exercise-68",
  "type": "Exercise",
  "number": "3.4.3",
  "title": "",
  "body": " Let be a group and a subgroup of . Recall that the centralizer of in is Prove that if is normal in , then so is and that is isomorphic to a subgroup of the automorphism group of .  "
},
{
  "id": "graction",
  "level": "1",
  "url": "graction.html",
  "type": "Section",
  "number": "4.1",
  "title": "Group Actions",
  "body": " Group Actions    You may never know what results come of your action, but if you do nothing there will be no results.   Ghandi     For a group and set , an action of on is a function typically written as , such that      for all and .     for all .        To make the first axiom clearer, throughout this section we will write for the action of on and no symbol (concatenation) for the multiplication of two elements in the group .    Trivial Action  For any group and any set , defines an action, the trivial action . The associated group homomorphism is by .    Permutation Representation   Assume is a group and is a set.     If is an action of on , then the function defined as , where is the function given by , is a well defined homomorphism of groups.    Conversely, if is a group homomorphism, the rule defines an action of on .       We have thus and a similar argument shows that   Finally, we wish to show , equivalently . Since holds for all , this proves is a homomorphism.  Given a homomorphism , the function defined as is an action because , and .      An action of a group on a set is called faithful if the associated group homomorphism is injective. Equivalently, an action is faithful if and only if for a given , whenever for all , it must be that .     Left Regular Action  Let be any group and define an action of on (regarded as just a set) by the rule     Prove that the left regular action is faithful.     Let be a group and a subgroup of . Recall that the centralizer of in is Prove that if is normal in , then so is and that is isomorphic to a subgroup of the automorphism group of .    Let be a group and . Let , and consider . Let . As we have for some , and thus that 1. and 2. . Consider . By (1), we see . As commutes with everything in we have , and by (2) we have . Thus .  Let act on the left cosets of by left multiplication, giving rise to the permutation representation homomorphism . By the First Isomorphism Theorem we see that is isomorphic to a subgroup of the automorphism group of .      Recall that the centralizer of a subgroup in a group is    Prove that if is normal in , then is normal in .    Prove that if is normal in , then is isomorphic to a subgroup of (the group of automorphisms of H)       Let act on by conjugation, yielding the homomorphism via the permutation representation that maps to , where . This is the trivial permutation exactly when , making the kernel of . Thus is normal in .  From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .      Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by and the normalizer of is the subgroup of defined by .    Show that the centralizer of in is a normal subgroup of the normalizer of in .  Show that the quotient is isomorphic to a subgroup of the automorphism group of .      Let be a subgroup of a group .   Let act on by conjugation. Thus the associated permutation homomorphism is defined such that , where . Notice that when we have for all , and thus . If then for all , and thus . Thus and .    From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .        Let be a finite group and let be a subgroup of of index , where is the smallest prime divisor of the order of . Prove that is normal in .   Let and note that . Let denote the kernel of the permutation representation generated by acting on by left multiplication.  The First Isomorphism Theorem tells us that . Thus by Lagrange’s Theorem. Let . Then for all , making for all including . Thus .  This yields . Let , giving us . As we have , so . But is the smallest prime dividing the order of , and thus , making and .      Computations and Examples      Coming soon to an OER near you!    Formal Proofs      Coming soon to an OER near you!    Qualifying Exam Problems      Coming soon to an OER near you!    "
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
  "id": "remark-17",
  "level": "2",
  "url": "graction.html#remark-17",
  "type": "Remark",
  "number": "4.2",
  "title": "",
  "body": " To make the first axiom clearer, throughout this section we will write for the action of on and no symbol (concatenation) for the multiplication of two elements in the group .  "
},
{
  "id": "example-11",
  "level": "2",
  "url": "graction.html#example-11",
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
  "id": "problem-15",
  "level": "2",
  "url": "graction.html#problem-15",
  "type": "Problem",
  "number": "4.7",
  "title": "",
  "body": " Prove that the left regular action is faithful.  "
},
{
  "id": "problem-16",
  "level": "2",
  "url": "graction.html#problem-16",
  "type": "Problem",
  "number": "4.8",
  "title": "",
  "body": "  Let be a group and a subgroup of . Recall that the centralizer of in is Prove that if is normal in , then so is and that is isomorphic to a subgroup of the automorphism group of .    Let be a group and . Let , and consider . Let . As we have for some , and thus that 1. and 2. . Consider . By (1), we see . As commutes with everything in we have , and by (2) we have . Thus .  Let act on the left cosets of by left multiplication, giving rise to the permutation representation homomorphism . By the First Isomorphism Theorem we see that is isomorphic to a subgroup of the automorphism group of .   "
},
{
  "id": "problem-17",
  "level": "2",
  "url": "graction.html#problem-17",
  "type": "Problem",
  "number": "4.9",
  "title": "",
  "body": "  Recall that the centralizer of a subgroup in a group is    Prove that if is normal in , then is normal in .    Prove that if is normal in , then is isomorphic to a subgroup of (the group of automorphisms of H)       Let act on by conjugation, yielding the homomorphism via the permutation representation that maps to , where . This is the trivial permutation exactly when , making the kernel of . Thus is normal in .  From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .   "
},
{
  "id": "problem-18",
  "level": "2",
  "url": "graction.html#problem-18",
  "type": "Problem",
  "number": "4.10",
  "title": "",
  "body": "  Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by and the normalizer of is the subgroup of defined by .    Show that the centralizer of in is a normal subgroup of the normalizer of in .  Show that the quotient is isomorphic to a subgroup of the automorphism group of .      Let be a subgroup of a group .   Let act on by conjugation. Thus the associated permutation homomorphism is defined such that , where . Notice that when we have for all , and thus . If then for all , and thus . Thus and .    From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .      "
},
{
  "id": "problem-19",
  "level": "2",
  "url": "graction.html#problem-19",
  "type": "Problem",
  "number": "4.11",
  "title": "",
  "body": " Let be a finite group and let be a subgroup of of index , where is the smallest prime divisor of the order of . Prove that is normal in .   Let and note that . Let denote the kernel of the permutation representation generated by acting on by left multiplication.  The First Isomorphism Theorem tells us that . Thus by Lagrange’s Theorem. Let . Then for all , making for all including . Thus .  This yields . Let , giving us . As we have , so . But is the smallest prime dividing the order of , and thus , making and .   "
},
{
  "id": "exercise-69",
  "level": "2",
  "url": "graction.html#exercise-69",
  "type": "Exercise",
  "number": "4.1.1",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-70",
  "level": "2",
  "url": "graction.html#exercise-70",
  "type": "Exercise",
  "number": "4.1.2",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-71",
  "level": "2",
  "url": "graction.html#exercise-71",
  "type": "Exercise",
  "number": "4.1.3",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "sec-conjugation",
  "level": "1",
  "url": "sec-conjugation.html",
  "type": "Section",
  "number": "4.2",
  "title": "Left Multiplication and Conjugation",
  "body": " Left Multiplication and Conjugation   Conjugation Action  Let be any group and fix an element . Define the conjugation action of on itself by setting         Prove that the conjugation action of of on itself is a well-defined group action.    Show acts on via conjugation for any .    Let . The conjugation action of on itself induces an action by conjugation of on . In particular, is the disjoint union of some of the conjugacy classes in .         The kernel of the permutation representation for the conjugation action is the center .    If is the permutation representation for acting on by conjugation, then        The action of on itself by conjugation is faithful if and only if .      The conjugacy class of an element is , i.e. the orbit of under conjugation.      Let be a group. Two elements are conjugate if there is with (equivalently and are in the same orbit of the conjugation action).  Two subsets are conjugate if there is with .     Let be a finite group and let be a proper subgroup of with .   Prove that has at most distinct conjugate sets for .  Prove that .    Let be defined by . Suppose . Notice that and , but as we have equality, and thus is well defined. Let be a conjugate set, and let . Then , and so we have surjectivity. As , there can be at most distinct conjugate sets for .  Let act on by conjugation. We know that the orbits of this action partition . However, under this action the orbits are exactly the conjugacy classes of . There are at most conjugacy classes. Each conjugacy class has at most elements in it, and each one has the identity. As there are at most of them then when we add all of their orders we get at most , which is less than the order of .      Computations and Examples      Coming soon to an OER near you!    Formal Proofs      Coming soon to an OER near you!    Qualifying Exam Problems       Let and be the set of elements of of order . Prove that is not a conjugacy class of .   Elements of order in must permute all elements, making them of the form . There are such permutations, given that we can always reorder them so that is first, leaving remaining spots without replacement. Let denote the set of these elements.  Suppose by way of contradiction there existed some such that . Let act on itself through conjugation, making by the definition of conjugacy class. The Orbit-Stabilizer Theorem tells us that , meaning that the order of must divide the order of . However, and , so this is a contradiction. Thus is not a conjugacy class of .    Let be a (not necessarily finite) group and a subgroup of index . Define (i.e., is the intersection of all the conjugates of K    Prove is a the largest normal subgroup of that is contained in .  Prove divides .    Let act on the left cosets of in by left multiplication, yielding the permutation representation homomorphism . Let conspicuously denote the kernel of this function.  Let . Then , the automorphism defined by is precisely the identity permutation. Thus for all and for all , so This means the elements of are precisely those that are in the conjugacy class of for all . There cannot exist a larger normal subgroup of contained in , as it would contain an element that was not in some conjugacy class for , negating the definition of a normal subgroup.  Recall the permutation representation homomorphism . The First Isomorphism Theorem tells us , which has order . Thus .    Prove that if is a finite group of odd order, then for any non-identity element , is not conjugate to .   Let be a finite group of odd order, and let act on itself via conjugation. Under this action, the orbit of an element is exactly its conjugacy class. By the Orbit-Stabilizer Theorem we have . Thus the order of an element divides the order of the group, and so every orbit must have odd order.  Suppose there exists an element such that for some . Thus . Let . Thus for some . Then . However, as , we have . As and are both in , we see that as well. As , we see that this means that the orbit of would have even order, which is not possible.    Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by and the normalizer of is the subgroup of defined by .    Show that the centralizer of in is a normal subgroup of the normalizer of in .  Show that the quotient is isomorphic to a subgroup of the automorphism group of .     Let be a subgroup of a group .     Let act on by conjugation. Thus the associated permutation homomorphism is defined such that , where . Notice that when we have for all , and thus . If then for all , and thus . Thus and .    From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .      Let be a group and . Let , and consider . Let . As we have for some , and thus that 1. and 2. . Consider . By (1), we see . As commutes with everything in we have , and by (2) we have . Thus .  Let act on the left cosets of by left multiplication, giving rise to the permutation representation homomorphism . By the First Isomorphism Theorem we see that is isomorphic to a subgroup of the automorphism group of .     "
},
{
  "id": "example-13",
  "level": "2",
  "url": "sec-conjugation.html#example-13",
  "type": "Example",
  "number": "4.12",
  "title": "Conjugation Action.",
  "body": " Conjugation Action  Let be any group and fix an element . Define the conjugation action of on itself by setting   "
},
{
  "id": "thm-conjugation-action",
  "level": "2",
  "url": "sec-conjugation.html#thm-conjugation-action",
  "type": "Theorem",
  "number": "4.13",
  "title": "",
  "body": "     Prove that the conjugation action of of on itself is a well-defined group action.    Show acts on via conjugation for any .    Let . The conjugation action of on itself induces an action by conjugation of on . In particular, is the disjoint union of some of the conjugacy classes in .      "
},
{
  "id": "prop-kernel-of-conjugation-action",
  "level": "2",
  "url": "sec-conjugation.html#prop-kernel-of-conjugation-action",
  "type": "Proposition",
  "number": "4.14",
  "title": "",
  "body": "  The kernel of the permutation representation for the conjugation action is the center .    If is the permutation representation for acting on by conjugation, then     "
},
{
  "id": "cor-faithful-conjugation",
  "level": "2",
  "url": "sec-conjugation.html#cor-faithful-conjugation",
  "type": "Corollary",
  "number": "4.15",
  "title": "",
  "body": "  The action of on itself by conjugation is faithful if and only if .   "
},
{
  "id": "def-conjugacy-class",
  "level": "2",
  "url": "sec-conjugation.html#def-conjugacy-class",
  "type": "Definition",
  "number": "4.16",
  "title": "",
  "body": "  The conjugacy class of an element is , i.e. the orbit of under conjugation.   "
},
{
  "id": "def-conjugate",
  "level": "2",
  "url": "sec-conjugation.html#def-conjugate",
  "type": "Definition",
  "number": "4.17",
  "title": "",
  "body": "  Let be a group. Two elements are conjugate if there is with (equivalently and are in the same orbit of the conjugation action).  Two subsets are conjugate if there is with .   "
},
{
  "id": "problem-20",
  "level": "2",
  "url": "sec-conjugation.html#problem-20",
  "type": "Problem",
  "number": "4.18",
  "title": "",
  "body": " Let be a finite group and let be a proper subgroup of with .   Prove that has at most distinct conjugate sets for .  Prove that .    Let be defined by . Suppose . Notice that and , but as we have equality, and thus is well defined. Let be a conjugate set, and let . Then , and so we have surjectivity. As , there can be at most distinct conjugate sets for .  Let act on by conjugation. We know that the orbits of this action partition . However, under this action the orbits are exactly the conjugacy classes of . There are at most conjugacy classes. Each conjugacy class has at most elements in it, and each one has the identity. As there are at most of them then when we add all of their orders we get at most , which is less than the order of .   "
},
{
  "id": "exercise-72",
  "level": "2",
  "url": "sec-conjugation.html#exercise-72",
  "type": "Exercise",
  "number": "4.2.1",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-73",
  "level": "2",
  "url": "sec-conjugation.html#exercise-73",
  "type": "Exercise",
  "number": "4.2.2",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-74",
  "level": "2",
  "url": "sec-conjugation.html#exercise-74",
  "type": "Exercise",
  "number": "4.2.3",
  "title": "",
  "body": " Let and be the set of elements of of order . Prove that is not a conjugacy class of .   Elements of order in must permute all elements, making them of the form . There are such permutations, given that we can always reorder them so that is first, leaving remaining spots without replacement. Let denote the set of these elements.  Suppose by way of contradiction there existed some such that . Let act on itself through conjugation, making by the definition of conjugacy class. The Orbit-Stabilizer Theorem tells us that , meaning that the order of must divide the order of . However, and , so this is a contradiction. Thus is not a conjugacy class of .  "
},
{
  "id": "exercise-75",
  "level": "2",
  "url": "sec-conjugation.html#exercise-75",
  "type": "Exercise",
  "number": "4.2.4",
  "title": "",
  "body": " Let be a (not necessarily finite) group and a subgroup of index . Define (i.e., is the intersection of all the conjugates of K    Prove is a the largest normal subgroup of that is contained in .  Prove divides .    Let act on the left cosets of in by left multiplication, yielding the permutation representation homomorphism . Let conspicuously denote the kernel of this function.  Let . Then , the automorphism defined by is precisely the identity permutation. Thus for all and for all , so This means the elements of are precisely those that are in the conjugacy class of for all . There cannot exist a larger normal subgroup of contained in , as it would contain an element that was not in some conjugacy class for , negating the definition of a normal subgroup.  Recall the permutation representation homomorphism . The First Isomorphism Theorem tells us , which has order . Thus .  "
},
{
  "id": "exercise-76",
  "level": "2",
  "url": "sec-conjugation.html#exercise-76",
  "type": "Exercise",
  "number": "4.2.5",
  "title": "",
  "body": " Prove that if is a finite group of odd order, then for any non-identity element , is not conjugate to .   Let be a finite group of odd order, and let act on itself via conjugation. Under this action, the orbit of an element is exactly its conjugacy class. By the Orbit-Stabilizer Theorem we have . Thus the order of an element divides the order of the group, and so every orbit must have odd order.  Suppose there exists an element such that for some . Thus . Let . Thus for some . Then . However, as , we have . As and are both in , we see that as well. As , we see that this means that the orbit of would have even order, which is not possible.  "
},
{
  "id": "exercise-77",
  "level": "2",
  "url": "sec-conjugation.html#exercise-77",
  "type": "Exercise",
  "number": "4.2.6",
  "title": "",
  "body": " Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by and the normalizer of is the subgroup of defined by .    Show that the centralizer of in is a normal subgroup of the normalizer of in .  Show that the quotient is isomorphic to a subgroup of the automorphism group of .     Let be a subgroup of a group .     Let act on by conjugation. Thus the associated permutation homomorphism is defined such that , where . Notice that when we have for all , and thus . If then for all , and thus . Thus and .    From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .      Let be a group and . Let , and consider . Let . As we have for some , and thus that 1. and 2. . Consider . By (1), we see . As commutes with everything in we have , and by (2) we have . Thus .  Let act on the left cosets of by left multiplication, giving rise to the permutation representation homomorphism . By the First Isomorphism Theorem we see that is isomorphic to a subgroup of the automorphism group of .  "
},
{
  "id": "sec-lois",
  "level": "1",
  "url": "sec-lois.html",
  "type": "Section",
  "number": "4.3",
  "title": "LOIS and Orbit-Stabilizer",
  "body": " LOIS and Orbit-Stabilizer    Let be a group acting on a set . For an element the orbit of is       Let be a group acting on a set . Then      is an equivalence relation    for any either or               Let be a group acting on a set . For an element the stabilizer is      The stabilizer is a subgroup of .    The Length of the Orbit is the Index of the Stabilizer (LOIS)   Let be a group that acts on a finite set via . For any we have     Let be the collection of left cosets of in . Define a function by . This function is well defined and one-to-one: The function is onto by definition of . Thus is a bijection and it yields equalities      Orbit-Stabilizer Theorem   Let be a finite group that acts on a finite set via . For any we have       An action is transitive if for all there is a such that . Equivalently, an action is transitive if for any .     Let be a group acting transitively on a set . For , let be the stabilizer of under the action from .    Let . Prove there exists such that .  Suppose has more than one element and that is finite. Prove that there exists which has no fixed point, that is, for all      Let be a group acting transitively on a set .  The action is transitive, so there exists some such that .  Let , consider b. Since , we have , stabilizes so now , but . So .  Let . We know and also , and so . Applying to both to see . This puts . Thus , completing the proof.  The action is transitive, so there is only one orbit, and so . Since is finite, the Orbit-Stabilizer Theorem tells us . Since every orbit has the same order as , we see for all . Thus there cannot exist any fixed points.      Computations and Examples      Coming soon to an OER near you!    Formal Proofs      Coming soon to an OER near you!    Qualifying Exam Problems      Coming soon to an OER near you!    "
},
{
  "id": "def-orbit",
  "level": "2",
  "url": "sec-lois.html#def-orbit",
  "type": "Definition",
  "number": "4.19",
  "title": "",
  "body": "  Let be a group acting on a set . For an element the orbit of is    "
},
{
  "id": "lem-orbits-partition",
  "level": "2",
  "url": "sec-lois.html#lem-orbits-partition",
  "type": "Lemma",
  "number": "4.20",
  "title": "",
  "body": "  Let be a group acting on a set . Then      is an equivalence relation    for any either or            "
},
{
  "id": "def-stab",
  "level": "2",
  "url": "sec-lois.html#def-stab",
  "type": "Definition",
  "number": "4.21",
  "title": "",
  "body": "  Let be a group acting on a set . For an element the stabilizer is    "
},
{
  "id": "problem-21",
  "level": "2",
  "url": "sec-lois.html#problem-21",
  "type": "Problem",
  "number": "4.22",
  "title": "",
  "body": " The stabilizer is a subgroup of .  "
},
{
  "id": "thm-LOIS",
  "level": "2",
  "url": "sec-lois.html#thm-LOIS",
  "type": "Theorem",
  "number": "4.23",
  "title": "The Length of the Orbit is the Index of the Stabilizer (LOIS).",
  "body": " The Length of the Orbit is the Index of the Stabilizer (LOIS)   Let be a group that acts on a finite set via . For any we have     Let be the collection of left cosets of in . Define a function by . This function is well defined and one-to-one: The function is onto by definition of . Thus is a bijection and it yields equalities    "
},
{
  "id": "cor-orbit-stabilizer",
  "level": "2",
  "url": "sec-lois.html#cor-orbit-stabilizer",
  "type": "Corollary",
  "number": "4.24",
  "title": "Orbit-Stabilizer Theorem.",
  "body": " Orbit-Stabilizer Theorem   Let be a finite group that acts on a finite set via . For any we have    "
},
{
  "id": "def-faithful-action",
  "level": "2",
  "url": "sec-lois.html#def-faithful-action",
  "type": "Definition",
  "number": "4.25",
  "title": "",
  "body": "  An action is transitive if for all there is a such that . Equivalently, an action is transitive if for any .   "
},
{
  "id": "problem-22",
  "level": "2",
  "url": "sec-lois.html#problem-22",
  "type": "Problem",
  "number": "4.26",
  "title": "",
  "body": " Let be a group acting transitively on a set . For , let be the stabilizer of under the action from .    Let . Prove there exists such that .  Suppose has more than one element and that is finite. Prove that there exists which has no fixed point, that is, for all      Let be a group acting transitively on a set .  The action is transitive, so there exists some such that .  Let , consider b. Since , we have , stabilizes so now , but . So .  Let . We know and also , and so . Applying to both to see . This puts . Thus , completing the proof.  The action is transitive, so there is only one orbit, and so . Since is finite, the Orbit-Stabilizer Theorem tells us . Since every orbit has the same order as , we see for all . Thus there cannot exist any fixed points.   "
},
{
  "id": "exercise-78",
  "level": "2",
  "url": "sec-lois.html#exercise-78",
  "type": "Exercise",
  "number": "4.3.1",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-79",
  "level": "2",
  "url": "sec-lois.html#exercise-79",
  "type": "Exercise",
  "number": "4.3.2",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-80",
  "level": "2",
  "url": "sec-lois.html#exercise-80",
  "type": "Exercise",
  "number": "4.3.3",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "sec-class-eq",
  "level": "1",
  "url": "sec-class-eq.html",
  "type": "Section",
  "number": "4.4",
  "title": "The Class Equation",
  "body": " The Class Equation    Let be a group. For any , is called the centralizer of in and for any , is called the normalizer of in .      Let be a group. For any , is called the normalizer of in .         Then acts on by conjugation ( ). For all , the orbit of is the conjugacy class of , and .    Then acts on the power set by conjugation ( ). For all , and .         For a finite group , the size of any conjugacy class divides .     The Class Equation   Let be a finite group and let be a list of unique representatives of all of the conjugacy classes of of size greater than 1. Then .    The elements of are precisely the group elements that are conjugate to only themselves; that is, they are the one-element orbits for the conjugation action. Because the conjugacy classes (orbits of the conjugation action) partition we have For each as in the statement, by Theorem , we have . The class equation follows from substituting this into the equation above.     Let be a finite -group and its center. If is a normal subgroup of , prove that .   Let be a finite -group for some prime and a normal subgroup of .  First, we show that the center of is nontrivial. Suppose by way of contradiction that . We examine the conjugacy classes of . From the Class Equation, we know Note that for some , meaning that the only divisors of are powers of . In finite groups, each conjugacy class must divide the order of the group. By Lagrange’s Theorem, , where . Since |Z(G)|=1, we see that , which is impossible given that . Thus .  As it is a union of conjugacy classes of the elements it contains, one of which is . Assume by way of contradiction that , meaning that is the only element in whose conjugacy class is a singleton. This yields However, by Lagrange’s Theorem must also be a group, and thus by an analogous element counting argument as above we see that there exists some such that , or that for all . Thankfully, this means that , and thus we have .     Let be a group of order where is a prime and . (a) Prove the center of G is not trivial. (b) Prove there exists a subgroup of order for each satisfying    Let be a group of order where is a prime and .  The Class Equation tells us where are the centralizers with more than one element. Notice that this means , and thus each centralizer is a power of . Thus we have for some . Thus the center of cannot be trivial, else we would not be able to sum to a power of .  The trivial subgroup has order . Suppose inductively that there exists a subgroup of order that has a subgroup for every power of in between.  Consider, if you will, a group of order , . As this is a -group, by Part (a) the center is nontrivial, making it a group as well, and thus it has a subgroup of order , , which is normal in as it lies within the center, so we mod out by to see that has a subgroup of order , which has subgroups of all the other powers by the induction hypothesis.      Computations and Examples      Coming soon to an OER near you!    Formal Proofs      Coming soon to an OER near you!    Qualifying Exam Problems      Coming soon to an OER near you!    "
},
{
  "id": "def-centralizer",
  "level": "2",
  "url": "sec-class-eq.html#def-centralizer",
  "type": "Definition",
  "number": "4.27",
  "title": "",
  "body": "  Let be a group. For any , is called the centralizer of in and for any , is called the normalizer of in .   "
},
{
  "id": "def-normalizer",
  "level": "2",
  "url": "sec-class-eq.html#def-normalizer",
  "type": "Definition",
  "number": "4.28",
  "title": "",
  "body": "  Let be a group. For any , is called the normalizer of in .   "
},
{
  "id": "thm-conjclass",
  "level": "2",
  "url": "sec-class-eq.html#thm-conjclass",
  "type": "Theorem",
  "number": "4.29",
  "title": "",
  "body": "     Then acts on by conjugation ( ). For all , the orbit of is the conjugacy class of , and .    Then acts on the power set by conjugation ( ). For all , and .      "
},
{
  "id": "cor-conjclass",
  "level": "2",
  "url": "sec-class-eq.html#cor-conjclass",
  "type": "Corollary",
  "number": "4.30",
  "title": "",
  "body": "  For a finite group , the size of any conjugacy class divides .   "
},
{
  "id": "thm-class-eq",
  "level": "2",
  "url": "sec-class-eq.html#thm-class-eq",
  "type": "Theorem",
  "number": "4.31",
  "title": "The Class Equation.",
  "body": " The Class Equation   Let be a finite group and let be a list of unique representatives of all of the conjugacy classes of of size greater than 1. Then .    The elements of are precisely the group elements that are conjugate to only themselves; that is, they are the one-element orbits for the conjugation action. Because the conjugacy classes (orbits of the conjugation action) partition we have For each as in the statement, by Theorem , we have . The class equation follows from substituting this into the equation above.   "
},
{
  "id": "problem-23",
  "level": "2",
  "url": "sec-class-eq.html#problem-23",
  "type": "Problem",
  "number": "4.32",
  "title": "",
  "body": " Let be a finite -group and its center. If is a normal subgroup of , prove that .   Let be a finite -group for some prime and a normal subgroup of .  First, we show that the center of is nontrivial. Suppose by way of contradiction that . We examine the conjugacy classes of . From the Class Equation, we know Note that for some , meaning that the only divisors of are powers of . In finite groups, each conjugacy class must divide the order of the group. By Lagrange’s Theorem, , where . Since |Z(G)|=1, we see that , which is impossible given that . Thus .  As it is a union of conjugacy classes of the elements it contains, one of which is . Assume by way of contradiction that , meaning that is the only element in whose conjugacy class is a singleton. This yields However, by Lagrange’s Theorem must also be a group, and thus by an analogous element counting argument as above we see that there exists some such that , or that for all . Thankfully, this means that , and thus we have .   "
},
{
  "id": "problem-24",
  "level": "2",
  "url": "sec-class-eq.html#problem-24",
  "type": "Problem",
  "number": "4.33",
  "title": "",
  "body": " Let be a group of order where is a prime and . (a) Prove the center of G is not trivial. (b) Prove there exists a subgroup of order for each satisfying    Let be a group of order where is a prime and .  The Class Equation tells us where are the centralizers with more than one element. Notice that this means , and thus each centralizer is a power of . Thus we have for some . Thus the center of cannot be trivial, else we would not be able to sum to a power of .  The trivial subgroup has order . Suppose inductively that there exists a subgroup of order that has a subgroup for every power of in between.  Consider, if you will, a group of order , . As this is a -group, by Part (a) the center is nontrivial, making it a group as well, and thus it has a subgroup of order , , which is normal in as it lies within the center, so we mod out by to see that has a subgroup of order , which has subgroups of all the other powers by the induction hypothesis.   "
},
{
  "id": "exercise-81",
  "level": "2",
  "url": "sec-class-eq.html#exercise-81",
  "type": "Exercise",
  "number": "4.4.1",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-82",
  "level": "2",
  "url": "sec-class-eq.html#exercise-82",
  "type": "Exercise",
  "number": "4.4.2",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-83",
  "level": "2",
  "url": "sec-class-eq.html#exercise-83",
  "type": "Exercise",
  "number": "4.4.3",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "sec-pgroups",
  "level": "1",
  "url": "sec-pgroups.html",
  "type": "Section",
  "number": "5.1",
  "title": "<span class=\"process-math\">\\(p\\)<\/span>-groups",
  "body": " -groups    For a prime number , a -group is a group of order for some .      If is a prime number and is a finite group of order for some , then is not the trivial group (In fact for some ).    Let be a list of unique representatives of all of the conjugacy classes of of size greater than 1 as in the class equation. Then for each , so . Since , it follows that for each . From the Class equation we deduce that so, .      Let be a finite group and a prime. Write the order of as where . A Sylow -subgroup of is a subgroup such that . That is, a Sylow -subgroup of is a subgroup whose order is the highest conceivable power of according to Lagrange's Theorem.  We set to be the collection of all Sylow -subgroups of and to be the number of Sylow -subgroups.     We allow the case when , in which case and has a unique Sylow -subgroup, namely which has order .    In for a prime , is a Sylow -subgroup. If , there is only one Sylow -subgroup of , so .  In for odd, each of the subgroups , for is a Sylow -subgroup, so .    In , the Sylow -subgroups are the cyclic groups for any five cycle , so because there are 24 five cycles, but there are four of these in every Sylow 5-subgroup. The Sylow -subgroups are the cyclic groups for any three cycle , so because there are 20 three cycles, but there are two of these in every Sylow 3-subgroup.  A Sylow -subgroup of is any subgroup of order . For example is a Sylow -subgroup. There are many others.    Cauchy's Theorem   If is a finite group and is a prime number dividing , then has an element of order . (In fact, at least elements of order .)     Let be a group of order for some prime acting on a finite set .    Suppose does not divide . Prove that there exists some element of fixed by all elements of .  Suppose acts faithfully on . Prove that .      Let be a group of order , for some prime , acting on a finite set .    Suppose there is no element in that is fixed by all elements of .  By Orbit-Stabilizer we know that for all . Thus every orbit under this action has an order dividing , so either or some positive power of However, as no element of is fixed by every element of , there exists no stabilizer which is all of , and thus there exist no orbits that have order .  Recall that the orbits of this action partition , and thus . As every orbit is divisible by , so too must be .    Suppose acts faithfully on . Thus the permutation representation homomorphism is injective. Let denote the order of . Then , which as order . As is injective, we see that , and thus .  Thus must show up in the factorization of at least times, meaning that .         Computations and Examples      Coming soon to an OER near you!    Formal Proofs      Coming soon to an OER near you!    Qualifying Exam Problems      Coming soon to an OER near you!    "
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
  "id": "remark-18",
  "level": "2",
  "url": "sec-pgroups.html#remark-18",
  "type": "Remark",
  "number": "5.4",
  "title": "",
  "body": " We allow the case when , in which case and has a unique Sylow -subgroup, namely which has order .  "
},
{
  "id": "problem-25",
  "level": "2",
  "url": "sec-pgroups.html#problem-25",
  "type": "Problem",
  "number": "5.5",
  "title": "",
  "body": " In for a prime , is a Sylow -subgroup. If , there is only one Sylow -subgroup of , so .  In for odd, each of the subgroups , for is a Sylow -subgroup, so .  "
},
{
  "id": "problem-26",
  "level": "2",
  "url": "sec-pgroups.html#problem-26",
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
  "id": "problem-27",
  "level": "2",
  "url": "sec-pgroups.html#problem-27",
  "type": "Problem",
  "number": "5.8",
  "title": "",
  "body": " Let be a group of order for some prime acting on a finite set .    Suppose does not divide . Prove that there exists some element of fixed by all elements of .  Suppose acts faithfully on . Prove that .      Let be a group of order , for some prime , acting on a finite set .    Suppose there is no element in that is fixed by all elements of .  By Orbit-Stabilizer we know that for all . Thus every orbit under this action has an order dividing , so either or some positive power of However, as no element of is fixed by every element of , there exists no stabilizer which is all of , and thus there exist no orbits that have order .  Recall that the orbits of this action partition , and thus . As every orbit is divisible by , so too must be .    Suppose acts faithfully on . Thus the permutation representation homomorphism is injective. Let denote the order of . Then , which as order . As is injective, we see that , and thus .  Thus must show up in the factorization of at least times, meaning that .      "
},
{
  "id": "exercise-84",
  "level": "2",
  "url": "sec-pgroups.html#exercise-84",
  "type": "Exercise",
  "number": "5.1.1",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-85",
  "level": "2",
  "url": "sec-pgroups.html#exercise-85",
  "type": "Exercise",
  "number": "5.1.2",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-86",
  "level": "2",
  "url": "sec-pgroups.html#exercise-86",
  "type": "Exercise",
  "number": "5.1.3",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "sec-sylowthm",
  "level": "1",
  "url": "sec-sylowthm.html",
  "type": "Section",
  "number": "5.2",
  "title": "Sylow's Theorem",
  "body": " Sylow's Theorem    Suppose is a group and is a positive integer. Then   If is a subgroup of order , then is a subgroup of order .    If there is a unique subgroup of of order , then .         Let be a finite group, a prime, a Sylow -subgroup of , and any -subgroup of . Then .     Sylow's Theorem   Assume is a group of order where is prime, , and .    (there exists at least one Sylow -subgroup of ).    If is a Sylow -subgroup of and is any -subgroup of (i.e., a subgroup whose order is some power of ), then there is a such that . In particular, the action of on by conjugation is transitive — i.e., any two Sylow -subgroups are conjugate.    We have     For any , and hence         Let be a finite group.   Suppose every subgroup of is normal. Prove that given any positive divisor of there exists a subgroup of of order .    Give an example, with justification, of a finite group and a positive divisor of such that has no subgroup of order .      Let be a finite group.  Suppose every subgroup of is normal. Let be a positive divisor of . For every prime dividing the order of there is exactly one Sylow -subgroup of , given that Sylow -subgroups are normal if and only if they are unique. Thus can be written as a direct product of its Sylow -subgroups. Given the prime factorization of , the direct product of the Sylow -subgroups such that is 1. A subgroup of as each Sylow -subgroup is normal, and 2. A direct product of cyclic groups of relatively prime order, yielding an element of order . The subgroup generated by this element is a subgroup of of order .  We take a peak at with . Suppose had a subgroup of order , . First, note that , the smallest prime dividing the order of , making normal in .  As there are eight -cycles in , there exists some -cycle, , such that . Consider then and in . Since , it must be the case that either or .    If then . As we have , but as is a subgroup this would mean , which is not the case.  If then , but , and so we have a contradiction. Thus cannot exist, and has no subgroup of order .       Let be a finite group, a prime dividing the order of , and a normal subgroup of order for some . Prove the following statements.    is contained in every Sylow -subgroup of .     contains a nontrivial abelian subgroup that is normal in .      Let be a finite group, a prime dividing the order of , and a normal subgroup of order for some .  As is normal we have for all . As it is a group it is contained in some Sylow -subgroup. All Sylow -subgroups are conjugate to each other, but is fixed by conjugation so its actually in all of them.  Consider , which is abelian in . The center of -groups are nontrivial so that's good. Let , , and consider . As we know . Let . We see , since is still normal. so we have .  Notice that , and thus . Thus , and so we can substitute the last line in the previous paragraph to see . Thus we have normality!     Let be a normal subgroup of a finite group , a prime dividing the order of , and a Sylow -subgroup of . Prove that  Hint : For , consider the subgroup .   First, note that .  Let act on by conjugation, which is a transitive action by part (2) of Sylow's Theorem. Therefore acts transitively on this set as well. Under this action, .  Let , and let . Consider . As the action by is transitive there exists some such that . This means that stabilizes . Then stabilizes as well, so . But notice that , where and . Thus .     We proceed via the contrapositive. Let be a Sylow -subgroup, and suppose . Thus    Let be a finite group and a prime dividing the order of . Let P be a Sylow -subgroup.  Note that and both have elements, where is the largest power of that divides the order of . Recall . As is the largest power of that divides the order of , we see that must be at least . Thus .  First, note that . Note that is the largest subgroup of such that is normal in , making the only Sylow -subgroup of . Let . Notice that , but as we have . As is a Sylow -subgroup that is contained in , we see that , placing . Thus .     Let be a group of order    Prove that has a unique -Sylow subgroup    Prove that the -Sylow subgroup is contained in the center of .      Let be a group of order   By Sylow's Theorem we know and is congruent to . The only possibility for such is , meaning that has exactly Sylow -subgroup.  By the First Isomorphism Theorem we know that . However, , which has order . As this is a homomorphism, we see the order of must divide both and , two numbers that are relatively prime. Thus , meaning that conjugation is equivalent to the identity map, or that for all . Thus .     Let be a group of order . Prove that has a normal subgroup of order and that the center of contains a subgroup of order    Let be a group of order . By Sylow's Theorem we know the and , and so , making , the unique Sylow -subgroup of , normal in . Things are looking good thus far. We also know the following: - and , so as well. Yeehaw.  Let denote the unique Sylow -subgroup, and let act on by conjugation. Thus . The First Isomorphism Theorem tells us that , where is the kernel of . However, , meaning that the order of must divide both and , which cannot happen. Thus must be trivial, meaning that for every and , making a subgroup of of order .      Computations and Examples      Coming soon to an OER near you!    Formal Proofs      Coming soon to an OER near you!    Qualifying Exam Problems      Coming soon to an OER near you!    "
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
  "id": "problem-28",
  "level": "2",
  "url": "sec-sylowthm.html#problem-28",
  "type": "Problem",
  "number": "5.12",
  "title": "",
  "body": " Let be a finite group.   Suppose every subgroup of is normal. Prove that given any positive divisor of there exists a subgroup of of order .    Give an example, with justification, of a finite group and a positive divisor of such that has no subgroup of order .      Let be a finite group.  Suppose every subgroup of is normal. Let be a positive divisor of . For every prime dividing the order of there is exactly one Sylow -subgroup of , given that Sylow -subgroups are normal if and only if they are unique. Thus can be written as a direct product of its Sylow -subgroups. Given the prime factorization of , the direct product of the Sylow -subgroups such that is 1. A subgroup of as each Sylow -subgroup is normal, and 2. A direct product of cyclic groups of relatively prime order, yielding an element of order . The subgroup generated by this element is a subgroup of of order .  We take a peak at with . Suppose had a subgroup of order , . First, note that , the smallest prime dividing the order of , making normal in .  As there are eight -cycles in , there exists some -cycle, , such that . Consider then and in . Since , it must be the case that either or .    If then . As we have , but as is a subgroup this would mean , which is not the case.  If then , but , and so we have a contradiction. Thus cannot exist, and has no subgroup of order .     "
},
{
  "id": "problem-29",
  "level": "2",
  "url": "sec-sylowthm.html#problem-29",
  "type": "Problem",
  "number": "5.13",
  "title": "",
  "body": " Let be a finite group, a prime dividing the order of , and a normal subgroup of order for some . Prove the following statements.    is contained in every Sylow -subgroup of .     contains a nontrivial abelian subgroup that is normal in .      Let be a finite group, a prime dividing the order of , and a normal subgroup of order for some .  As is normal we have for all . As it is a group it is contained in some Sylow -subgroup. All Sylow -subgroups are conjugate to each other, but is fixed by conjugation so its actually in all of them.  Consider , which is abelian in . The center of -groups are nontrivial so that's good. Let , , and consider . As we know . Let . We see , since is still normal. so we have .  Notice that , and thus . Thus , and so we can substitute the last line in the previous paragraph to see . Thus we have normality!   "
},
{
  "id": "problem-30",
  "level": "2",
  "url": "sec-sylowthm.html#problem-30",
  "type": "Problem",
  "number": "5.14",
  "title": "",
  "body": " Let be a normal subgroup of a finite group , a prime dividing the order of , and a Sylow -subgroup of . Prove that  Hint : For , consider the subgroup .   First, note that .  Let act on by conjugation, which is a transitive action by part (2) of Sylow's Theorem. Therefore acts transitively on this set as well. Under this action, .  Let , and let . Consider . As the action by is transitive there exists some such that . This means that stabilizes . Then stabilizes as well, so . But notice that , where and . Thus .   "
},
{
  "id": "problem-31",
  "level": "2",
  "url": "sec-sylowthm.html#problem-31",
  "type": "Problem",
  "number": "5.15",
  "title": "",
  "body": " We proceed via the contrapositive. Let be a Sylow -subgroup, and suppose . Thus    Let be a finite group and a prime dividing the order of . Let P be a Sylow -subgroup.  Note that and both have elements, where is the largest power of that divides the order of . Recall . As is the largest power of that divides the order of , we see that must be at least . Thus .  First, note that . Note that is the largest subgroup of such that is normal in , making the only Sylow -subgroup of . Let . Notice that , but as we have . As is a Sylow -subgroup that is contained in , we see that , placing . Thus .   "
},
{
  "id": "problem-32",
  "level": "2",
  "url": "sec-sylowthm.html#problem-32",
  "type": "Problem",
  "number": "5.16",
  "title": "",
  "body": " Let be a group of order    Prove that has a unique -Sylow subgroup    Prove that the -Sylow subgroup is contained in the center of .      Let be a group of order   By Sylow's Theorem we know and is congruent to . The only possibility for such is , meaning that has exactly Sylow -subgroup.  By the First Isomorphism Theorem we know that . However, , which has order . As this is a homomorphism, we see the order of must divide both and , two numbers that are relatively prime. Thus , meaning that conjugation is equivalent to the identity map, or that for all . Thus .   "
},
{
  "id": "problem-33",
  "level": "2",
  "url": "sec-sylowthm.html#problem-33",
  "type": "Problem",
  "number": "5.17",
  "title": "",
  "body": " Let be a group of order . Prove that has a normal subgroup of order and that the center of contains a subgroup of order    Let be a group of order . By Sylow's Theorem we know the and , and so , making , the unique Sylow -subgroup of , normal in . Things are looking good thus far. We also know the following: - and , so as well. Yeehaw.  Let denote the unique Sylow -subgroup, and let act on by conjugation. Thus . The First Isomorphism Theorem tells us that , where is the kernel of . However, , meaning that the order of must divide both and , which cannot happen. Thus must be trivial, meaning that for every and , making a subgroup of of order .   "
},
{
  "id": "exercise-87",
  "level": "2",
  "url": "sec-sylowthm.html#exercise-87",
  "type": "Exercise",
  "number": "5.2.1",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-88",
  "level": "2",
  "url": "sec-sylowthm.html#exercise-88",
  "type": "Exercise",
  "number": "5.2.2",
  "title": "",
  "body": "Coming soon to an OER near you! "
},
{
  "id": "exercise-89",
  "level": "2",
  "url": "sec-sylowthm.html#exercise-89",
  "type": "Exercise",
  "number": "5.2.3",
  "title": "",
  "body": "Coming soon to an OER near you! "
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
  "id": "problem-34",
  "level": "2",
  "url": "sec-simple-groups.html#problem-34",
  "type": "Problem",
  "number": "5.19",
  "title": "",
  "body": " Let us prove that no group or order is simple. Let be any group of order . We will prove that must have either a normal subgroup of order or a normal subgroups of oder .  Sylow theory gives that is either or and is either or . If either of these numbers is , we have a unique subgroup of order or of order , and such a subgroup must be normal. Suppose these numbers are and , respectively. We deduce a contradition by counting elements .  In detail, say are the Sylow -subgroups. By Lagrange for all . Thus the set  has elements, one of which is and the other of which must have order . That is, there are elements of order in . But now consider the three Sylow -subgroups . Each has order and for all . It follows that for all , and thus , a contradiction.  "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "sec-simple-groups.html#remark-19",
  "type": "Remark",
  "number": "5.20",
  "title": "",
  "body": " In the previous example, it would not be so easy to count elements of order and . We do know that every element in has order , or (any only one has order ), but the size of this set is harder to calculate. For notice that might have order . The most one can say for sure is that has at least elements.  "
},
{
  "id": "problem-35",
  "level": "2",
  "url": "sec-simple-groups.html#problem-35",
  "type": "Problem",
  "number": "5.21",
  "title": "",
  "body": " No group of order is simple.  "
},
{
  "id": "exercise-90",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-90",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": " Let G be a simple group of order 60. Determine the number of elements of G of order 5.  Show that there is no simple group of order 30.   Let be a simple group of order By Sylow's Theorem we know that and that . Thus the options for are and . Since is simple we see that . As each Sylow -subgroup of has unique elements of order and the identity we see that the number of elements or order in is .  Suppose by way of contradiction that is a simple group of order . Similarly to above, , yielding elements of order . Now, and , so , yielding far too many elements to fit in .  "
},
{
  "id": "exercise-91",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-91",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": "Suppose is a simple group of order (Yes, there is such a group.)   How many elements of order does have?    Show that has at least elements of order      By Sylow's Theorem, and divides . Thus the only options are and . However, as is simple there cannot be only one Sylow -Subgroup, as it would be normal. Thus there are , each having unique elements and the identity. Thus there are elements of order .  By Sylow's Theorem, and divides . As is simple there cannot be one, so there must be at least , each with non-identity elements. Thus there must be at least elements of order .  "
},
{
  "id": "exercise-92",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-92",
  "type": "Exercise",
  "number": "5.3.3",
  "title": "",
  "body": "Let be a group of order and let denote the set of Sylow -subgroups of . (a) Suppose for any either or Prove that is not simple. (b) Suppose there exists such that . Prove that is not simple. (Hint: Consider the normalizer of .)  Let be a group of order and let denote the set of Sylow -subgroups of . ###### Part (a) Suppose by way of contradiction that is simple. By Sylow's Theorem we know the following: - and is congruent to . As is simple there must be ten of the fuckers. - and is congruent to . As is simple there must be six of them. Since each Sylow -subgroup will have non-identity elements and they are all distinct that accounts for elements of order . However, there are also elements or order to account for, which is a problem. Thus cannot be simple.  Suppose now that there exists such that . . Given this intersection, we know that . Additionally, note that as is a subgroup of both and with index 3 in both, the smallest prime dividing the order or both, that is normal in both.  We now consider the normalizer of , which we denote for simplicity. As is a subgroup of its order must divide by Lagrange's Theorem. However, , and so must have at least elements, leaving the options of and . If then , making normal in , a problem.  If then , the smallest prime dividing . Thus is still normal, which is still a problem. Thus cannot be simple.  "
},
{
  "id": "exercise-93",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-93",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "",
  "body": "Let be a group of order .  Show that there are at most two options for , the number of Sylow -subgroups of and list them.  Prove that is not simple.   Let be a group of order .  By Sylow's Theorem we know that and . The possible options are thus and .  Suppose by way of contradiction that is simple. Thus , so . Let act on the by conjugation, yielding the homomorphism granted via the permutation representation. By (2) in Sylow's Theorem we see that is not trivial. As we see that , meaning that the is non-trivial, yielding a non-trivial normal subgroup of , a contradiction.  "
},
{
  "id": "exercise-94",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-94",
  "type": "Exercise",
  "number": "5.3.5",
  "title": "",
  "body": "Let be a finite group of order with prime numbers. Show that is not a simple group.  Let be a finite group of order with prime numbers, and suppose by way of contradiction that is simple. By Sylow's Theorem we have the following: - and , and thus . - and , and thus . From this information we see that there are elements of order and elements of order , for a lovely total of elements, which is too many.  "
},
{
  "id": "exercise-95",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-95",
  "type": "Exercise",
  "number": "5.3.6",
  "title": "",
  "body": "Let be a group and let be the number of Sylow -subgroups of , where is a prime dividing the order of . (a) Prove that if is simple then (b) Deduce that there is no simple group of order .  Let be a group, a prime dividing the order of , and the number of Sylow -subgroups of .  Let act on by conjugation, inducing the homomorphism via the permutation representation. Notice that the order of is conspicuously . The kernel of this map is a normal subgroup of . Note that since is simple the only normal subgroups of are the trivial subgroup and itself. However, the kernel cannot be all of as this would make trivial, which cannot be the case given that our action is transitive by Part (2) of Sylow's Theorem. Thus , making injective. Thus . As the image is a subgroup of , the result follows from Lagrange's Theorem.  Let be a group of order . Suppose by way of contradiction that is simple. . Thus the number of Sylow- subgroups is congruent to and divides , the options of which are 1 and 16 (See: Sylow's Theorem). As does not divide this contradicts part (a). Thus there are no simple groups of order .  "
},
{
  "id": "exercise-96",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-96",
  "type": "Exercise",
  "number": "5.3.7",
  "title": "",
  "body": "Prove that any group of order has a normal subgroup of order or .  Let be a group of order . By Sylow's Theorem we have and , and thus . If then the unique Sylow -subgroup is normal, giving us a normal subgroup of order .  Suppose then that , let be one of the subgroups of order , and let act on the cosets of by left multiplication, inducing the homomorphism . This is because there are elements in , and thus there are left cosets by Lagrange's Theorem.  As , we see that cannot be injective and thus is a non-trivial normal subgroup of .  Recall that the action of on its cosets by left multiplication is always a transitive action, meaning there is exactly one orbit, for some , which must then have all elements of in it. By Orbit-Stabilizer, , and thus . So there are elements in that fix for any .  Let and . Notice that . As , We know that yields the identity permutation, and thus that .  Thus , which has order   "
},
{
  "id": "exercise-97",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-97",
  "type": "Exercise",
  "number": "5.3.8",
  "title": "",
  "body": "Prove that no group of order 150 is simple.  Let be a group of order and suppose by way of contradiction that is simple. Notice that . By Sylow's Theorem, we know and divides , the only options are thus and . Since is simple, there must be exactly , where . Let act on by conjugation. Thus is a group homomorphism. Note that , and that the order of does not divide . By Part (2) of Sylow's Theorem this action is transitive, meaning that the kernel of cannot be trivial. Thus is a nontrivial normal subgroup of , a contradiction. Thus no group of order is simple.  "
},
{
  "id": "exercise-98",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-98",
  "type": "Exercise",
  "number": "5.3.9",
  "title": "",
  "body": "Let G be a group of order . Prove that is not simple.  By Sylow's Theorem we know that and . Thus our options are and . Suppose that .  Let act on by conjugation, yielding the homomorphism via the permutation representation. This map is non-trivial from part (2) of Sylow's Theorem, but does not divide , and thus cannot be injective. Then the kernel of this homomorphism is non-trivial, normal subgroup of . Thus is not simple.  "
},
{
  "id": "exercise-99",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-99",
  "type": "Exercise",
  "number": "5.3.10",
  "title": "",
  "body": "Prove that no group of order with is simple.  Let be a group of order with , and suppose by way of contradiction that is simple. By Sylow's Theorem we know the following: - and , and - and , so our options are and . Suppose its . Let act on by conjugation, yielding the permutation representation homomorphism . The kernel of this homomorphism cannot be trivial as the conjugation action on Sylow subgroups is transitive by Part (2) of Sylow's Theorem. Notice does not divide the order of , so our kernel cannot be all of , making a nontrivial normal subgroup of .  If , then must divide , meaning that . However, by the cyclic subgroup generated by an element of order has index in , making it normal.  Thus cannot be simple.  "
},
{
  "id": "exercise-100",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-100",
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
  "body": " Direct Products   Let be a group that acts on a set , and a subgroup of such that for any there exists a unique with . (a) Prove that for every and , where (b) Prove that if then for every , is the internal direct product of and     Let be a group that acts on a set , and a subgroup of such that for any there exists a unique with .  Suppose there exists some such that . Then . But by the definition of group action. As the is unique, we see . Thus .  Let and . If then we can write , as . Suppose and for some . There exists an such that . Then , so , so . Thankfully, we can know write ), and so .  If then we have , which means . From Part (a) we have a trivial intersection, making the internal direct product of and .     Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "problem-36",
  "level": "2",
  "url": "sec-grp-dps.html#problem-36",
  "type": "Problem",
  "number": "6.1",
  "title": "",
  "body": " Let be a group that acts on a set , and a subgroup of such that for any there exists a unique with . (a) Prove that for every and , where (b) Prove that if then for every , is the internal direct product of and   "
},
{
  "id": "proof-45",
  "level": "2",
  "url": "sec-grp-dps.html#proof-45",
  "type": "Proof",
  "number": "6.1.1",
  "title": "",
  "body": " Let be a group that acts on a set , and a subgroup of such that for any there exists a unique with .  Suppose there exists some such that . Then . But by the definition of group action. As the is unique, we see . Thus .  Let and . If then we can write , as . Suppose and for some . There exists an such that . Then , so , so . Thankfully, we can know write ), and so .  If then we have , which means . From Part (a) we have a trivial intersection, making the internal direct product of and .  "
},
{
  "id": "exercise-101",
  "level": "2",
  "url": "sec-grp-dps.html#exercise-101",
  "type": "Exercise",
  "number": "6.1.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-102",
  "level": "2",
  "url": "sec-grp-dps.html#exercise-102",
  "type": "Exercise",
  "number": "6.1.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-103",
  "level": "2",
  "url": "sec-grp-dps.html#exercise-103",
  "type": "Exercise",
  "number": "6.1.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-grp-spds",
  "level": "1",
  "url": "sec-grp-spds.html",
  "type": "Section",
  "number": "6.2",
  "title": "Semidirect Products",
  "body": " Semidirect Products     Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-104",
  "level": "2",
  "url": "sec-grp-spds.html#exercise-104",
  "type": "Exercise",
  "number": "6.2.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-105",
  "level": "2",
  "url": "sec-grp-spds.html#exercise-105",
  "type": "Exercise",
  "number": "6.2.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-106",
  "level": "2",
  "url": "sec-grp-spds.html#exercise-106",
  "type": "Exercise",
  "number": "6.2.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-order-pq",
  "level": "1",
  "url": "sec-order-pq.html",
  "type": "Section",
  "number": "6.3",
  "title": "Groups of Order <span class=\"process-math\">\\(pq\\)<\/span>",
  "body": " Groups of Order     Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-107",
  "level": "2",
  "url": "sec-order-pq.html#exercise-107",
  "type": "Exercise",
  "number": "6.3.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-108",
  "level": "2",
  "url": "sec-order-pq.html#exercise-108",
  "type": "Exercise",
  "number": "6.3.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-109",
  "level": "2",
  "url": "sec-order-pq.html#exercise-109",
  "type": "Exercise",
  "number": "6.3.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
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
  "id": "exercise-110",
  "level": "2",
  "url": "sec-ftfgag.html#exercise-110",
  "type": "Exercise",
  "number": "7.1.1",
  "title": "",
  "body": "Prove that any group of order is abelian.  Let be a group of order . By Sylow's Theorem we see the following: - and , and so . - and , and so as well. - and , so actually too. Thus the unique Sylow -subgroup and Sylow -subgroup, denoted and , respectively, are normal in .  As and are normal in and intersect trivially, we see that . Let and consider . Let and notice . As and we see and , thus , making .  Let be the unique Sylow -subgroup, which has order . As and intersects with trivially, we see , a direct product of cyclic groups of relatively prime order, making abelian.  "
},
{
  "id": "exercise-111",
  "level": "2",
  "url": "sec-ftfgag.html#exercise-111",
  "type": "Exercise",
  "number": "7.1.2",
  "title": "",
  "body": "Suppose is a group of order and that contains an element of order . Prove is abelian.  By Sylow's Theorem we know the number of Sylow -subgroups of must divide and be congruent to , the only option of which is . Let denote the unique Sylow -subgroup and let be the cyclic subgroup generated by the element of order .  As is unique it is normal in , and it also means we have . Notice that as and are groups of relatively prime order we have . Thus , and so , making , a direct product of abelian groups. Thus is abelian.  "
},
{
  "id": "exercise-112",
  "level": "2",
  "url": "sec-ftfgag.html#exercise-112",
  "type": "Exercise",
  "number": "7.1.3",
  "title": "",
  "body": "Let be a group of order where and are distinct primes. (a) Prove that contains a normal Sylow subgroup. (b) Suppose and the Sylow -subgroup is cyclic and normal. Prove that is abelian.  Let be a group of order where and are distinct primes. Suppose by way of contradiction that has no normal Sylow -subgroup.  First, suppose . By Sylow’s Theorem we know the following: - and , so or , so - and , so or , so . We know there must be elements of order . Luckily, there is more than one Sylow -subgroup with elements, so there isn’t room for all of them.  Suppose then that . By Sylow’s Theorem we know the following: - and , so , so we’re definitely good there.  Suppose and the Sylow -subgroup, , is cyclic and normal. We know from Part (a) that there are either or Sylow -subgroups, but since there are already elements of order there is only room for one, , which is also cyclic, given its prime power. As and are thus normal in and only intersect trivially, we see that , meaning that . Thus is the product of two cyclic groups of relatively prime order, making cyclic as well. Cyclic groups are abelian, so we are done.  "
},
{
  "id": "exercise-113",
  "level": "2",
  "url": "sec-ftfgag.html#exercise-113",
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
  "body": " Groups Up to Isomorphism   Determine all of the groups of order , up to isomorphism.   By Sylow's Theorem we know the following: - and , so . - and , so as well. Thus there is exactly one Sylow -subgroup, , and exactly one Sylow -subgroup, . Both are normal in . Notice that has order , a prime squared. Thus is abelian. By the FTFGAG, is either isomorphic to or . Thus or .     Let be any positive prime integer. Prove that the number of groups of order , up to isomorphism, is exactly    Let be any positive prime integer.  First, suppose . Thus is a group of order , making it abelian. So the only groups of order are and . The same applies when , where the groups are and .  Let be a Sylow -subgroup of , and note that , the smallest prime dividing the order of , making . Let denote a Sylow -subgroup of . As and are groups of relatively prime order we have and thus , where . Notice that since , we have . Thus, by the First Isomorphism Theorem As has three elements, the kernel of must be either all of or trivial. However, the order of the image must divide , which is only possible when . Thus when this is the case there are two groups of order , otherwise the kernel is always trivial and we have as the only group.     Let be a group of order and suppose contains an element of order . Prove that is abelian.   First, note that , not . You hate to see it. Anyway, let be an element of order and consider , a cyclic subgroup of order . The possible number of Sylow -subgroups of is exactly , making this subgroup and thus normal in . Let be a Sylow subgroup, it intersects trivially and thus , where . The order of is , which is relatively prime to , making trivial and and thus abelian.     Let be a group. A subgroup of is called maximal if (that is, is a proper subgroup of ) and whenever is another subgroup of containing , either or . Show that every nontrivial finitely generated group possesses maximal subgroups.   Let be a group.  Let be the poset of all proper subgroups of ordered in terms of inclusion. Consider a string of these. Consider the union of them all. Luckily, unions of subgroups are subgroups if and only if there is containment, which there is, since everything is in the union. Thus its a subgroup. Since union in and yields an upper bound, by Zorn’s Lemma we a maximal element. Thus possesses maximal subgroups.      Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "problem-37",
  "level": "2",
  "url": "sec-classifications.html#problem-37",
  "type": "Problem",
  "number": "7.1",
  "title": "",
  "body": " Determine all of the groups of order , up to isomorphism.   By Sylow's Theorem we know the following: - and , so . - and , so as well. Thus there is exactly one Sylow -subgroup, , and exactly one Sylow -subgroup, . Both are normal in . Notice that has order , a prime squared. Thus is abelian. By the FTFGAG, is either isomorphic to or . Thus or .   "
},
{
  "id": "problem-38",
  "level": "2",
  "url": "sec-classifications.html#problem-38",
  "type": "Problem",
  "number": "7.2",
  "title": "",
  "body": " Let be any positive prime integer. Prove that the number of groups of order , up to isomorphism, is exactly    Let be any positive prime integer.  First, suppose . Thus is a group of order , making it abelian. So the only groups of order are and . The same applies when , where the groups are and .  Let be a Sylow -subgroup of , and note that , the smallest prime dividing the order of , making . Let denote a Sylow -subgroup of . As and are groups of relatively prime order we have and thus , where . Notice that since , we have . Thus, by the First Isomorphism Theorem As has three elements, the kernel of must be either all of or trivial. However, the order of the image must divide , which is only possible when . Thus when this is the case there are two groups of order , otherwise the kernel is always trivial and we have as the only group.   "
},
{
  "id": "problem-39",
  "level": "2",
  "url": "sec-classifications.html#problem-39",
  "type": "Problem",
  "number": "7.3",
  "title": "",
  "body": " Let be a group of order and suppose contains an element of order . Prove that is abelian.   First, note that , not . You hate to see it. Anyway, let be an element of order and consider , a cyclic subgroup of order . The possible number of Sylow -subgroups of is exactly , making this subgroup and thus normal in . Let be a Sylow subgroup, it intersects trivially and thus , where . The order of is , which is relatively prime to , making trivial and and thus abelian.   "
},
{
  "id": "problem-40",
  "level": "2",
  "url": "sec-classifications.html#problem-40",
  "type": "Problem",
  "number": "7.4",
  "title": "",
  "body": " Let be a group. A subgroup of is called maximal if (that is, is a proper subgroup of ) and whenever is another subgroup of containing , either or . Show that every nontrivial finitely generated group possesses maximal subgroups.   Let be a group.  Let be the poset of all proper subgroups of ordered in terms of inclusion. Consider a string of these. Consider the union of them all. Luckily, unions of subgroups are subgroups if and only if there is containment, which there is, since everything is in the union. Thus its a subgroup. Since union in and yields an upper bound, by Zorn’s Lemma we a maximal element. Thus possesses maximal subgroups.   "
},
{
  "id": "exercise-114",
  "level": "2",
  "url": "sec-classifications.html#exercise-114",
  "type": "Exercise",
  "number": "7.2.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-115",
  "level": "2",
  "url": "sec-classifications.html#exercise-115",
  "type": "Exercise",
  "number": "7.2.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-116",
  "level": "2",
  "url": "sec-classifications.html#exercise-116",
  "type": "Exercise",
  "number": "7.2.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
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
  "id": "problem-41",
  "level": "2",
  "url": "sec-quals.html#problem-41",
  "type": "Problem",
  "number": "8.1",
  "title": "Problem 1.",
  "body": " Problem 1  "
},
{
  "id": "problem-42",
  "level": "2",
  "url": "sec-quals.html#problem-42",
  "type": "Problem",
  "number": "8.2",
  "title": "Problem 2.",
  "body": " Problem 2  "
},
{
  "id": "problem-43",
  "level": "2",
  "url": "sec-quals.html#problem-43",
  "type": "Problem",
  "number": "8.3",
  "title": "Problem 3.",
  "body": " Problem 3  "
},
{
  "id": "problem-44",
  "level": "2",
  "url": "sec-quals.html#problem-44",
  "type": "Problem",
  "number": "8.4",
  "title": "Problem 4.",
  "body": " Problem 4  "
},
{
  "id": "problem-45",
  "level": "2",
  "url": "sec-quals.html#problem-45",
  "type": "Problem",
  "number": "8.5",
  "title": "Problem 5.",
  "body": " Problem 5  "
},
{
  "id": "problem-46",
  "level": "2",
  "url": "sec-quals.html#problem-46",
  "type": "Problem",
  "number": "8.6",
  "title": "Problem 6.",
  "body": " Problem 6  "
},
{
  "id": "problem-47",
  "level": "2",
  "url": "sec-quals.html#problem-47",
  "type": "Problem",
  "number": "8.7",
  "title": "Problem 7.",
  "body": " Problem 7  "
},
{
  "id": "problem-48",
  "level": "2",
  "url": "sec-quals.html#problem-48",
  "type": "Problem",
  "number": "8.8",
  "title": "Problem 8.",
  "body": " Problem 8  "
},
{
  "id": "problem-49",
  "level": "2",
  "url": "sec-quals.html#problem-49",
  "type": "Problem",
  "number": "8.9",
  "title": "Problem 9.",
  "body": " Problem 9  "
},
{
  "id": "problem-50",
  "level": "2",
  "url": "sec-quals.html#problem-50",
  "type": "Problem",
  "number": "8.10",
  "title": "Problem 1.",
  "body": " Problem 1  "
},
{
  "id": "problem-51",
  "level": "2",
  "url": "sec-quals.html#problem-51",
  "type": "Problem",
  "number": "8.11",
  "title": "Problem 2.",
  "body": " Problem 2  "
},
{
  "id": "problem-52",
  "level": "2",
  "url": "sec-quals.html#problem-52",
  "type": "Problem",
  "number": "8.12",
  "title": "Problem 3.",
  "body": " Problem 3  "
},
{
  "id": "problem-53",
  "level": "2",
  "url": "sec-quals.html#problem-53",
  "type": "Problem",
  "number": "8.13",
  "title": "Problem 4.",
  "body": " Problem 4  "
},
{
  "id": "problem-54",
  "level": "2",
  "url": "sec-quals.html#problem-54",
  "type": "Problem",
  "number": "8.14",
  "title": "Problem 5.",
  "body": " Problem 5  "
},
{
  "id": "problem-55",
  "level": "2",
  "url": "sec-quals.html#problem-55",
  "type": "Problem",
  "number": "8.15",
  "title": "Problem 6.",
  "body": " Problem 6  "
},
{
  "id": "problem-56",
  "level": "2",
  "url": "sec-quals.html#problem-56",
  "type": "Problem",
  "number": "8.16",
  "title": "Problem 7.",
  "body": " Problem 7  "
},
{
  "id": "problem-57",
  "level": "2",
  "url": "sec-quals.html#problem-57",
  "type": "Problem",
  "number": "8.17",
  "title": "Problem 8.",
  "body": " Problem 8  "
},
{
  "id": "problem-58",
  "level": "2",
  "url": "sec-quals.html#problem-58",
  "type": "Problem",
  "number": "8.18",
  "title": "Problem 9.",
  "body": " Problem 9  "
},
{
  "id": "problem-59",
  "level": "2",
  "url": "sec-quals.html#problem-59",
  "type": "Problem",
  "number": "8.19",
  "title": "Problem 1.",
  "body": " Problem 1  "
},
{
  "id": "problem-60",
  "level": "2",
  "url": "sec-quals.html#problem-60",
  "type": "Problem",
  "number": "8.20",
  "title": "Problem 2.",
  "body": " Problem 2  "
},
{
  "id": "problem-61",
  "level": "2",
  "url": "sec-quals.html#problem-61",
  "type": "Problem",
  "number": "8.21",
  "title": "Problem 3.",
  "body": " Problem 3  "
},
{
  "id": "problem-62",
  "level": "2",
  "url": "sec-quals.html#problem-62",
  "type": "Problem",
  "number": "8.22",
  "title": "Problem 4.",
  "body": " Problem 4  "
},
{
  "id": "problem-63",
  "level": "2",
  "url": "sec-quals.html#problem-63",
  "type": "Problem",
  "number": "8.23",
  "title": "Problem 5.",
  "body": " Problem 5  "
},
{
  "id": "problem-64",
  "level": "2",
  "url": "sec-quals.html#problem-64",
  "type": "Problem",
  "number": "8.24",
  "title": "Problem 6.",
  "body": " Problem 6  "
},
{
  "id": "problem-65",
  "level": "2",
  "url": "sec-quals.html#problem-65",
  "type": "Problem",
  "number": "8.25",
  "title": "Problem 7.",
  "body": " Problem 7  "
},
{
  "id": "problem-66",
  "level": "2",
  "url": "sec-quals.html#problem-66",
  "type": "Problem",
  "number": "8.26",
  "title": "Problem 8.",
  "body": " Problem 8  "
},
{
  "id": "problem-67",
  "level": "2",
  "url": "sec-quals.html#problem-67",
  "type": "Problem",
  "number": "8.27",
  "title": "Problem 9.",
  "body": " Problem 9  "
},
{
  "id": "problem-68",
  "level": "2",
  "url": "sec-quals.html#problem-68",
  "type": "Problem",
  "number": "8.28",
  "title": "Problem 1.",
  "body": " Problem 1  "
},
{
  "id": "problem-69",
  "level": "2",
  "url": "sec-quals.html#problem-69",
  "type": "Problem",
  "number": "8.29",
  "title": "Problem 2.",
  "body": " Problem 2  "
},
{
  "id": "problem-70",
  "level": "2",
  "url": "sec-quals.html#problem-70",
  "type": "Problem",
  "number": "8.30",
  "title": "Problem 3.",
  "body": " Problem 3  "
},
{
  "id": "problem-71",
  "level": "2",
  "url": "sec-quals.html#problem-71",
  "type": "Problem",
  "number": "8.31",
  "title": "Problem 4.",
  "body": " Problem 4  "
},
{
  "id": "problem-72",
  "level": "2",
  "url": "sec-quals.html#problem-72",
  "type": "Problem",
  "number": "8.32",
  "title": "Problem 5.",
  "body": " Problem 5  "
},
{
  "id": "problem-73",
  "level": "2",
  "url": "sec-quals.html#problem-73",
  "type": "Problem",
  "number": "8.33",
  "title": "Problem 6.",
  "body": " Problem 6  "
},
{
  "id": "problem-74",
  "level": "2",
  "url": "sec-quals.html#problem-74",
  "type": "Problem",
  "number": "8.34",
  "title": "Problem 7.",
  "body": " Problem 7  "
},
{
  "id": "problem-75",
  "level": "2",
  "url": "sec-quals.html#problem-75",
  "type": "Problem",
  "number": "8.35",
  "title": "Problem 8.",
  "body": " Problem 8  "
},
{
  "id": "problem-76",
  "level": "2",
  "url": "sec-quals.html#problem-76",
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
  "body": " Intro to Rings   Definition and First Properties    A ring is a set equipped with two binary operations, and , satisfying:      is an abelian group with identity element denoted ,     is associative (making a semigroup)     and hold for all .      is a unital ring (or a ring with identity ) if, in addition to (1), (2), (3)     there is a multiplicative identity element written as such that for all .      is commutative if in addition to (1)-(3)      holds for all .      is a division ring if , (1)–(4) and (6) hold      is a group under (i.e. every has a multiplicative inverse)      is a field if and (1)–(6) hold (i.e. a field is a commutative division ring).     Commutativity of addition is a consequence of the other ring axioms in rings with .   Here are some basic consequences of the axioms.   Ring Arithmetic   For any ring and all we have:      ,     ,     .     If moreover is unital, then      is unique, and     .       Let be a ring with identity.   Let . Observe that by the distributive law. Subtracting from both sides we have . A similar argument shows that .    Let . Note that . Consider . Using the distributive law we see that . Thus and are both additive inverses of making them unique.               is called the trivial ring . Notice that in the trivial ring . Conversely, if in a ring, then , since in this case for all , we have and hence .     is a commutative ring.     is a commutative ring under addition and multiplication modulo . Note that is a field if any only if is prime.    The familiar sets of “numbers\" are fields.    ( Matrix ring ) If is any ring (not necessarily commutative), so is for any natural number , using the usual rules for addition and multiplication of square matrices.    ( The real Hamiltonian quaternion ring ) Let be formal symbols and set to be the four dimensional -vector space consisting of all expressions of the form with . Addition is vector space addition: Multiplication is uniquely determined by the axioms of a ring together with the rules and the fact that the real coefficients commute with each other and .  It's not obvious that the multiplication defined in this way satisfies associativity, but in fact it does (this amounts conditions very similar to the associativity of the group ).   is a division ring, since one can check that where   In the equation above is non-zero real number if is not the zero element. The quantity is called the norm of the quaternion .    ( Direct product of rings ) The cartesian product of two rings and has a natural ring structure with addition and multiplication defined componentwise:      If is a set and is a ring, let be the collection of set theoretic functions from to , and define and . Then is a ring. If is a finite set and , then may be identified with , the direct product of copies of .    ( Endomorphism ring ) If is any abelian group, set to be the collection of endomorphisms of — that is, the set of group homomorphisms from to itself.  Then is a ring with addition and multiplication . This is almost always a non-commutative ring.       Units, Zero Divisors, Integral Domains    An element of a unital ring with is called a unit there exists such that and . In case such exists, it is unique, it is called the inverse of and denoted by .      The set of units of a non-trivial unital ring is denoted . This forms a group with respect to multiplication.     The group of units is indeed a group with respect to multiplication.     .    Let be a field. Prove that every non-zero element of is a unit. In symbols, show .     A zero-divisor in a ring is an element such that or for some .      A unital ring is an integral domain (often shortened to domain ) if , is commutative, and has no zero divisors.      Let be a commutative ring with identity. Then is an integral domain if and only if for all such that , we have . This property is called cancellation         Every field is an integral domain.     is an integral domain if and only if is prime (in which case it happens to be a field too) or (in which case ).       Prove that a finite integral domain must be a field.   Let , and consider the set . As is finite there must exist such that . In integral domains cancellation is allowed, and thus we can cancel an from both sides, yielding , and thus , making a unit of . Thus is a field.      If is a zero divisor in a ring , then is not a unit.    Suppose that is both a zero divisor and a unit. Then there exists such that or . Multiplying either of these equations by gives , a contradiction.     Give an example of a ring and an element which is neither a unit nor a zero-divisor.    Prove that if is finite then every element is either a unit of a zero-divisor.     An element of a ring is called nilpotent if for some integer .      If is a nilpotent element in a unital ring , then is a unit.     Let be a nilpotent element] of a ring. Show that is a unit of Deduce that the sum of a nilpotent element and a unit is a unit.     Let be a ring with identity. An element is called idempotent if .     Let be a ring with identity.   Give an example of a ring which has an idempotent other than or .    Prove that if is idempotent, so is .    Suppose is commutative and an idempotent. Let . Prove that is a commutative ring (with identity ).       Let be the ring of Gaussian integers. Define a function    Prove that for any .    Use the function to determine the units of .         Let and behold So there's that done.    Suppose . Then by Part (a) we know so , with . Thus we have . So the units of are .        Let be the ring of integral Hamiltonian quaternions, where multiplication is defined using the same rules as in . Define a function    For any , denote . Show that for all .    Prove that and for any .    Prove that if and only if .    Show that there is a group isomorphism .         Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "problem-84",
  "level": "2",
  "url": "sec-defn-ex.html#problem-84",
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
  "id": "exercise-117",
  "level": "2",
  "url": "sec-defn-ex.html#exercise-117",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-118",
  "level": "2",
  "url": "sec-defn-ex.html#exercise-118",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-119",
  "level": "2",
  "url": "sec-defn-ex.html#exercise-119",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-subrings",
  "level": "1",
  "url": "sec-subrings.html",
  "type": "Section",
  "number": "1.2",
  "title": "Subrings",
  "body": " Subrings    A subring of a ring is a subset such that is a ring under the operations of . When is a field we call a of .      A nonempty subset of a ring is a subring iff either one of the following hold:    is a subgroup of closed under multiplication.     is closed under subtraction and multiplication.          is a subring of , which is a subring of , which is a subring of .   is a subring without of the ring with .  The set of continuous functions mapping is a subring of , denoted .  The set is a subring of called the ring of Gaussian integers.      The center of a ring is the set       The center is a subring of . If is a ring with identity then is a subring that contains the same .     Determine the center of the real quaternion ring .     Let be a squarefree integer (that is, the prime factorization of has no repeated primes). Then the subset of is a subring that is a field (called a quadratic field ), and is a subring of .    Both and are closed under subtraction and multiplication, so they are subrings of .  The fact that is a {} follows since is also closed under taking inverses. Indeed the inverse of (from ) turns out to be whenever . A slightly subtle point here is that the fraction above makes sense since provided and are not simultaneously . This is because, if then either , which contradicts the assumption that is squarefree, or , which contradicts the assumption .     If is a ring and is a subring of , it can happen that    is unital but is not (e.g. )     is unital but is not    both and are unital but    Find examples for each of these situations!    Any subring of a commutative ring is a commutative ring. Any unital subring of an integral domain is an integral domain.     Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "exercise-120",
  "level": "2",
  "url": "sec-subrings.html#exercise-120",
  "type": "Exercise",
  "number": "1.2.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-121",
  "level": "2",
  "url": "sec-subrings.html#exercise-121",
  "type": "Exercise",
  "number": "1.2.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-122",
  "level": "2",
  "url": "sec-subrings.html#exercise-122",
  "type": "Exercise",
  "number": "1.2.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-ring-hom",
  "level": "1",
  "url": "sec-ring-hom.html",
  "type": "Section",
  "number": "1.3",
  "title": "Homomorphisms",
  "body": " Homomorphisms    If and are rings, a ring homomorphism from to is a function that satisfies:    for all ,     for all .         A ring homomorphism that is bijective is called a ring isomorphism . Two rings and are isomorphic , written , if there is an isomorphism from to .      The following are ring isomorphism invariants:   all group isomorphism invariants of the additive group, including the isomorphism class (i.e., if then ).    being unital, being commutative, division ring, field, integral domain    the number of zero divisors.    if is unital, all group isomorphism invariants of the group of units, including the isomorphism class (i.e., if then ).    the isomorphism type of the center (i.e., if then ).          The identity map is a ring isomorphism.  Let be a subring of a ring . The inclusion mapping of into is a ring homomorphism.  Projection maps are ring homomorphisms.       If is a ring homomorphism, then    and .    if , are unital then can be either or a zero divisor.    If and then .    If and are ring homomorphisms (or isomorphisms, respectively), then is a ring homomorphism (or isomorphism).         Since we have , thus Now either or (which yields ) or both of these are nonzero and then they are complementary zero divisors (in particular, is a zero divisor).       Let be a nontrivial ring. Then is a field if and only if every homomorphism of into a nonzero ring is injective.    Suppose is commutative and an idempotent. Let . Prove that the map given by is a ring isomorphism.    Let be squarefree integers and set and .   There is a group isomorphism .    There is a ring isomorphism if and only if .        Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "problem-91",
  "level": "2",
  "url": "sec-ring-hom.html#problem-91",
  "type": "Problem",
  "number": "1.40",
  "title": "",
  "body": " Suppose is commutative and an idempotent. Let . Prove that the map given by is a ring isomorphism.  "
},
{
  "id": "problem-92",
  "level": "2",
  "url": "sec-ring-hom.html#problem-92",
  "type": "Problem",
  "number": "1.41",
  "title": "",
  "body": " Let be squarefree integers and set and .   There is a group isomorphism .    There is a ring isomorphism if and only if .     "
},
{
  "id": "exercise-123",
  "level": "2",
  "url": "sec-ring-hom.html#exercise-123",
  "type": "Exercise",
  "number": "1.3.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-124",
  "level": "2",
  "url": "sec-ring-hom.html#exercise-124",
  "type": "Exercise",
  "number": "1.3.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-125",
  "level": "2",
  "url": "sec-ring-hom.html#exercise-125",
  "type": "Exercise",
  "number": "1.3.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-ideals",
  "level": "1",
  "url": "sec-ideals.html",
  "type": "Section",
  "number": "2.1",
  "title": "Ideals",
  "body": " Ideals   Definition and First Properties    For a ring , an ideal (or a two sided ideal ) of is a non empty subset such that    is a subgroup of and    for all and , we have and (we can write this concisely as for all  and ). This is often called absorption .   For a ring , a proper ideal is an ideal such that .       In any ring , and itself are ideals.  The ideals of are .  The sets and are a right ideal and a left ideal of respectively. Neither are two-sided ideals.  The set of all nilpotent elements in a ring is an ideal, and has no nonzero nilpotent elements.   Let be a commutative ring, and set . Then is an ideal in .        An ideal of a unital ring is proper if and only if contains no units. Moreover, if is a field it has only two ideals and .      Any ideal of a ring is a subring of      Any ideal of a ring is a subring of , but not any subring is an ideal.   For example, in , the set of polynomials for which every term has even degree is a subring (it’s closed under subtraction and multiplication), but it is not an ideal because it is not closed under multiplication by arbitrary polynomials. Indeed, , but .      Let be a ring and let be ideals of . Then    is an ideal     is an ideal     is an ideal and .    The intersection of any collection of ideals of is an ideal.   The set of all ideals of a ring is a lattice with respect to the partial order given by containment. In this lattice, the supremum of a pair of ideals is and the infimum is .     Let be ideals in . Then                                     If is a ring homomorphism, then   the image of is a subring of and    the kernel of is an ideal of .     is injective if and only if .    if is an ideal of then is an ideal of .    if is an ideal of then is an ideal of .         Since is a ring homomorphism, it is in particular a group homomorphism . We know the kernel of a group homomorphism is a subgroup, so . All that remains to be shown is that for any  and . Let ; then and , show .       Give an example    Let be ideals in . Then     Give an example of a ring where ideals do not distribute.    Let be ideals in such that or . Then      Generated Ideals    If is any subset of a ring , the ideal generated by  , denoted , is the intersection of all ideals of that contain : An ideal is finitely generated if for some finite subset of .     By Proposition, is an ideal and it is the smallest ideal of that contains .     For a subset of a ring with , the ideal generated by is given by If is commutative and is any subset, then there is a simpler formula         In the commutative ring , we have . Indeed any element can be written as . Note that .    In the commutative ring , we have , the set of all even integers. Notice this shows that different sets can generate the same ideal. Also note that .    In , we have and this ideal cannot be generated by a single element.       Let be a finitely generated ideal of . Suppose every element of is nilpotent. Prove that there exists an integer such that for all .    Let    Prove that is an ideal of .    Prove that is not finitely generated.        Let be an ideal of a ring . The ideal is principal if for some , that is, is generated by a set with a single element.       every ideal of is principal with for some ( is a PID)  for any field , every ideal of is principal ( is a PID)  for any field , every ideal in is finitely generated, but not necessarily principal. This is a consequence of a deep theorem called the Hilbert Basis Theorem, which you will see in Math 905.     Let be ideals in . Then          Conclude that if and only if and are relatively prime.        Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "problem-93",
  "level": "2",
  "url": "sec-ideals.html#problem-93",
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
  "id": "remark-20",
  "level": "2",
  "url": "sec-ideals.html#remark-20",
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
  "id": "problem-101",
  "level": "2",
  "url": "sec-ideals.html#problem-101",
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
  "id": "exercise-126",
  "level": "2",
  "url": "sec-ideals.html#exercise-126",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-127",
  "level": "2",
  "url": "sec-ideals.html#exercise-127",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-128",
  "level": "2",
  "url": "sec-ideals.html#exercise-128",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-ring-quotients",
  "level": "1",
  "url": "sec-ring-quotients.html",
  "type": "Section",
  "number": "2.2",
  "title": "Quotient Rings",
  "body": " Quotient Rings   Quotient Rings    For a two-sided ideal of , the set of additive cosets modulo is This is an abelian group with respect to addition given by . The quotient ring of modulo is the set with addition defined as above and multiplication given by      Given a two-sided ideal of , prove that the quotient ring is indeed a ring.    If is an ideal in the ring , then the quotient ring is the familiar ring .    Prove that the canonical quotient map is a surjective ring homomorphism.     Let be a ring. A subset of is an ideal of if and only if there exists a ring homomorphism such that      Universal Mapping Property for Quotient Rings   If is a ring homomorphism and is an ideal such that [^1], there exists a well defined ring homomorphism such that . Furthermore, if is surjective then is surjective and if then is injective.    Ignoring for a minute, we know that there is a unique homomorphism of abelian groups from to such that . It remains only to check that preserves multiplication: Given elements , their product is , and we have since preserves multiplication.      The Ring Isomorphism Theorems   First Isomorphism Theorem for Rings   If is a ring homomorphism, then via the map given by .    The map is a well-defined ring homomorphism by the UMP for quotient rings. By the First Isomorphism Theorem for groups, the map is bijective, finishing the proof.     Second Isomorphism Theorem for Rings   Let be a subring and let be an ideal of . Then is a subring of , is an ideal of , and      Third Isomorphism Theorem for Rings   If is a ring and are two ideals of , then [^4] is an ideal of and      Lattive Isomorphism Theorem for Quotient Rings   Suppose is a ring and is a two-sided ideal of and write for the quotient ring homomorphism. There is a bijection with inverse Moreover this bijection induces a bijection between since is an ideal of containing if and only if is an ideal of .     Let be a commutative ring with identity, and assume . Let and be ideals such that .    Prove .  Prove the following special case of the Sun Tzu's Theorem: There is an isomorphism of rings of the form .     Let be a commutative ring with identity, and assume . Let and be ideals such that .  First, note that both and are ideals by   Let . Thus , where each and . As and are both ideals, each term in this sum is contained both in and . Thus, by absorption, . Hence .  Let . Thus and . Note that as , there exists some and such that . So . As we see that , with and . Thus , yielding .  Let be defined by .  Notice that if , we have , and so . (See: [[Mathematics\/Definitions\/Kernel]]) Let . Thus and , and so and . Hence , and so .  Observe making a homomorphism of rings.  Let . As , we can write and as and . However, as and , we have .  Consider the element , and observe However, as and , we see Thus is a surjective homomorphism. Hence, by the First Isomorphism Theorem, we see .     Let be a square-free integer. The ring is the subring of defined by Show that there is a ring isomorphism .      Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "problem-106",
  "level": "2",
  "url": "sec-ring-quotients.html#problem-106",
  "type": "Problem",
  "number": "2.33",
  "title": "",
  "body": " Let be a square-free integer. The ring is the subring of defined by Show that there is a ring isomorphism .  "
},
{
  "id": "exercise-129",
  "level": "2",
  "url": "sec-ring-quotients.html#exercise-129",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-130",
  "level": "2",
  "url": "sec-ring-quotients.html#exercise-130",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-131",
  "level": "2",
  "url": "sec-ring-quotients.html#exercise-131",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "subsec-primemax-ideals",
  "level": "1",
  "url": "subsec-primemax-ideals.html",
  "type": "Section",
  "number": "3.1",
  "title": "Prime and Maximal Ideals",
  "body": " Prime and Maximal Ideals   Prime Ideals    A prime ideal of a commutative ring is a proper ideal such that whenever for , we have or .       In , the prime ideals are and the ideals generated by prime integers , where is a prime integer. The maximal ideals are the ideals generated by prime integers. In particular is prime but not maximal.  In the ideal is not prime, because , but and (because if then so , a contradiction).  In the ideal is maximal and prime (proof in the given later), the ideals and are prime but not maximal.       An ideal is prime if and only if is closed under multiplication.      Let be a commutative ring with , and let be an ideal of . The ideal is prime if and only if is an integral domain.    Suppose is prime. If , then and hence either or , so that either or . This proves is a domain. Suppose is a domain and that . Then in and hence either or . It follows or , so that is prime.      Let be a nontrivial ring. Then is an integral domain if and only if the ideal is prime.      If is a domain, is a ring and is a ring homomorphism, then is a prime ideal.      If is a ring homomorphism and is a prime ideal in , then is prime in .      Maximal Ideals    A maximal ideal of an arbitrary ring is a proper ideal such that the only ideals of containing are and .      Give an explicit example of a ring homomorphism and maximal ideal of such that is not maximal in .      Let be a commutative ring with , and let be an ideal of . The ideal is maximal if and only if is a field.    The first assertion follows immediately from the Lattice Isomorphism Theorem and the fact that is a field if and only if its only ideals are and .      Every maximal ideal is prime.    If is maximal, then is a field, which in particular implies that is a domain, so is prime.     Zorn's Lemma   Let be a non-empty family of sets. Suppose that for each chain in , the set is in . Then has a maximal element.      If is a ring with and is a proper ideal of , then there is a maximal ideal of containing . In particular every ring contains a maximal ideal.    Let be the set of proper ideals of that contain and view as a poset under containment. We will apply Zorn’s Lemma. Suppose is a totally ordered subset of . We need to show has an upper bound in . If is empty, is such a bound. Otherwise, let .  Since is non-empty, we have and so .  Given , then for some . Since is totally ordered, either or , and hence or . Either way, .  For and , we have for some and hence .  This proves is an ideal that contains . Since every is a proper ideal, , so and hence is a proper ideal, so . By Zorn’s Lemma, we conclude has at least one maximal element . This is a maximal ideal in the sense of definition since if is an ideal of and then either or, if is proper, then , which yields by using that is a maximal element of .  The existence of a maximal ideal follows by applying the first part of the theorem for .      Let be a commutative ring, and set . Prove that following assertions.     is an ideal in .  If is a field, then each element of is either a unit or in .         Let . Thus there exists integers such that . Consider Thus . Additionally, , and so as well.  We now consider as an additive group. Notice that and thus the identity is in there. Let We examine . Since we have and so . So . Perfect. We have ourselves a subring.    Suppose now that is a field. Luckily for us, this makes a maximal ideal.  Let . If , great. Suppose its not. Then in  is a unit, since we’re in a field now. So for some . Thus for some . Since and a maximal and thus prime ideal, we have or , a contradiction.            Prove that a finite integral domain must be a field.    Prove that if is a commutative ring and is a prime ideal such that has finite index as an additive subgroup of , then is a maximal ideal. Give an example to show that this implication may fail if the finite index assumption is dropped.       Let be a finite integral domain.   Let , and consider the set . As is finite there must exist such that . In integral domains cancellation is allowed, and thus we can cancel an from both sides, yielding , and thus , making a unit of . Thus is a field.    Let be a commutative ring and a prime ideal such that has finite index as an additive subgroup of .  Consider , which is a domain since is a prime ideal. As for some , we know that , making it a finite domain. Thus is a field by Part (a), making maximal by the same theorem as above.  Let and consider , in which is a prime ideal. However, , which does not have finite order, nor is it a field.         Let be a commutative ring with identity, and assume .    Prove that every maximal ideal of is a prime ideal.  Assume is a finite ring. Prove that every prime ideal is a maximal ideal.         Let be a maximal ideal of . We show that is a field By the Lattice Isomorphism Theorem we know there is a one-to-one correspondence between the ideals of and the ideals of containing . However, as is maximal, the only ideals of containing are and itself, meaning that has exactly two ideals, making a field.  We show that since is a domain, must be prime. Suppose by way of contradiction that is not prime, so exist elements such that but neither nor are in . Thus , making and zero-divisors in , contradicting the fact that is a field. Thus is prime.    Let be a finite ring, and let be a prime ideal in , making an integral domain by . We show is a field. Let , and consider for all . As is finite, there exists some such that . Then , meaning that . Thus has inverse , making a unit. Thus is a field, making a maximal ideal by          Let be a commutative ring in which every element satisfies for some Show that every prime ideal in R is maximal.    Let be a commutative ring in which every element satisfies for some Let be a prime ideal in .  Let , meaning . Then for some . As is a domain   we can cancel an to see that , and thus , making a unit in . Thus is a field, making maximal in .      Let be a commutative ring with identity (with ) and a proper ideal. Prove there exists a prime ideal containing such that whenever where is also a prime ideal, then . (Hint: use Zorn's lemma.)       Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "exercise-132",
  "level": "2",
  "url": "subsec-primemax-ideals.html#exercise-132",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-133",
  "level": "2",
  "url": "subsec-primemax-ideals.html#exercise-133",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-134",
  "level": "2",
  "url": "subsec-primemax-ideals.html#exercise-134",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "subsec-polyrings",
  "level": "1",
  "url": "subsec-polyrings.html",
  "type": "Section",
  "number": "3.2",
  "title": "Polynomial Rings",
  "body": " Polynomial Rings    For any commutative ring , the polynomial ring in the variable  , written , is the set with addition defined by and multiplication defined by For any commutative ring , the polynomial ring in  , written , is defined inductively as , but more easily thought of as the set consisting of (finite) sums of the form with addition and multiplication defined by rules similar to the ones seen above.     If , letting , then consists of all expressions of the form with for all but a finite number of .    One often views as the subring of consisting of the constant polynomials.    Let be a ring and let be the ring of polynomials in an indeterminate , with coefficients in . Let Prove that    is a unit in if and only if is a unit in and are nilpotent.   is nilpotent if and only if nilpotent for all .   is a zerodivisor if and only if there exists in such that .   is said to be primitive if . Prove that if , then is primitive if and only if both and are primitive.     Generalize the results of the previous exercise to a polynomial ring in several indeterminates.    In the ideal is maximal.   Consider the quotient ring . By the Third Isomorphism Theorem, and because and under this isomorphism is mapped to , we have (omitting some details) Since the quotient ring is field, we conclude that is maximal.     In the ideal is maximal and prime, the ideals and are prime but not maximal.   Here is a nice application of the First Isomorphism Theorem.   Consider the ring and let be the principal ideals generated by . Since is commutative, we have so is simply the collection of polynomials having as a factor. I claim that is isomorphic as a ring to . To prove this we define a map sending to , the evaluation of at . It is easy to check is a ring homomorphism and it is onto since elements of the form in the source map to all possible complex numbers under . We claim the kernel of is . It is clear that and it follows that since is a two-sided ideal. Suppose and write with degree of at most one, using the division algorithm in the polynomial ring . So for real numbers . If , then , which would contradict . So we must have and hence . Applying the First Isomorphism Theorem for Rings, we get via the map sending to . Intuitively, we have adjoined a formal symbol to the real numbers, and by modding out we have forced to be a square root of . That is, we have adjoined to the real numbers, obtaining .    Consider the ideal of . Explicitly, by Lemma we have Suppose we want to understand . Then the Third Isomorphism Theorem is our friend. Set and note that , and so by the Third Isomorphism Theorem Next we express both the numerator and the denominator in better terms. I claim To see this consider the reduction homomorphism sending a polynomial to its reduction modulo . The kernel of this surjective ring map is , establishing our claim by the First Isomorphism Theorem.  Recall that denotes the image of under the quotient map . Therefore we have In other words, J\/I is the ideal generated by the coset of in . Moreover, under the isomorphism discussed above, we have that , where denotes the reduction of the coefficients of modulo 2. Therefore where denotes the congruence class of modulo 2. Now we put everything together: consider the ring homomorphism where Notice that since and are surjective, so is , thus and since is an isomorphism and is a quotient map. Applying the First Isomorphism Theorem to gives and combining this with the Third Isomorphism Theorem further yields     It turns out that the ring we discussed in the previous is a field and by a problem from HW 11, any field has only two ideals and itself. This implies via the Lattice Isomorphism Theorem that there are only two ideals in which contain , namely and .     If is a domain, then    is a domain    for any nonzero polynomials ,     the units of are the units of ( )         Let and be commutative rings, is a ring homomorphism and arbitrary elements of . Then there exists a unique ring homomorphism such that and for all , namely     Let’s observe first that if such a map exists it is unique. For if is a ring map extending and sending to . Then using that preserves and .  For existence, let's assume at first. Given and , define by It is elementary (but tedious) to check really is a ring homomorphism. The fact that it restricts to is clear, however.  For the general case, we proceed by induction on the number of variables . The induction hypothesis shows that there is a ring homomorphism such that and , . Applying the case to gives with and . Setting gives a map with the needed properties.     If are commutative rings with and , then the evaluation at function given by is a ring homomorphism.    Given a ring map between commutative rings, we may apply the Proposition to the composition using the element of to get an induced ring map that sends to . That is, the map applies to the coefficients of a polynomial. This can be generalized to more than one variable in the obvious way.    Continuing with the previous example, we could have for an ideal of and could be the quotient map. Then takes a polynomial and “reduces’’ its coefficients modulo . We will usually denote the image of through the reduction homomorphism by .    Find all the ideals of that contain , the ideal of generated by and . For each such ideal, give an explicit list of generators, and determine whether the ideal is prime, maximal, or neither.   First, notice that is irreducible in as it is a cyclotomic polynomial. Thus the possibilities are the following:    ,     ,     ,     .   Notice that , which is neither prime nor maximal, as those ideals must be proper. The ideal is not maximal as it is contained in both and , nor is it prime, given that but neither nor are in .  Both and are generated with irreducible elements, making them irreducible ideals and thus maximal.     Find, with justification, all the ideals of the ring that contain the ideal .    Let be any field, and let , and be indeterminates. Prove in detail that and are isomorphic rings.    Prove the ideal of the commutative ring is not a principal ideal.   Let be a commutative ring with unity and an irreducible polynomial. We want to show that is a prime ideal in .  First, note that is an ideal of , since it is generated by a single polynomial.  Suppose that with . Then for some . Since is irreducible, it cannot be written as a product of two non-constant polynomials, so either divides or divides . Without loss of generality, assume that divides . Then for some . Substituting into yields , and cancelling the factor of gives . Thus, , and so is a prime ideal of .      Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "remark-21",
  "level": "2",
  "url": "subsec-polyrings.html#remark-21",
  "type": "Remark",
  "number": "3.20",
  "title": "",
  "body": " If , letting , then consists of all expressions of the form with for all but a finite number of .  "
},
{
  "id": "remark-22",
  "level": "2",
  "url": "subsec-polyrings.html#remark-22",
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
  "id": "problem-118",
  "level": "2",
  "url": "subsec-polyrings.html#problem-118",
  "type": "Problem",
  "number": "3.35",
  "title": "",
  "body": " Find, with justification, all the ideals of the ring that contain the ideal .  "
},
{
  "id": "problem-119",
  "level": "2",
  "url": "subsec-polyrings.html#problem-119",
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
  "id": "exercise-135",
  "level": "2",
  "url": "subsec-polyrings.html#exercise-135",
  "type": "Exercise",
  "number": "3.2.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-136",
  "level": "2",
  "url": "subsec-polyrings.html#exercise-136",
  "type": "Exercise",
  "number": "3.2.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-137",
  "level": "2",
  "url": "subsec-polyrings.html#exercise-137",
  "type": "Exercise",
  "number": "3.2.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-field-of-fractions",
  "level": "1",
  "url": "sec-field-of-fractions.html",
  "type": "Section",
  "number": "3.3",
  "title": "Fields of Fractions",
  "body": " Fields of Fractions    Suppose is a commutative ring and is a subset such that      ,     is closed under multiplication (i.e., if , then ), and     does not contain nor any zero divisors.     Such a subset is called a multiplicatively closed subset of non zero divisors of .     Two types of multiplicatively closed sets are most commonly used in practice:   If is a field then is a multiplicatively closed set of non zero divisors.    If is an arbitrary ring with and is a non zero divisor then the set of non negative powers of , , is multiplicatively closed.        If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the field of fractions  is the set of equivalence classes where the equivalence relation is defined by   From now on we just write instead of when dealing with fractions.  Addition and multiplication on are given by       If is an integral domain and is a multiplicatively closed subset of nonzerodivisors, the rules given in the above definition for and make into a field. Moreover, the function sending to is an injective ring homomorphism.    There is a lot of small things to check and we'll just do a few. Right off the bat we need to be sure the given equivalence relation really is one. The reflexive and symmetric properties are clear. But the proof of transitivity illustrates a key point: Say . Then and . We need to deduce that . The given equations imply and since is a nonzerodivisor we conclude . This is in fact the only time that the fact that consists of nonzerodivisors is used.  We also need to be sure our rules for and make sense and are independent of representation. They make sense since we assume is closed under . To show is independent of representations, say , so that . Then and and so we need to show . This is clear upon expaning out both sides and using . In a similar way one shows is well-defined.  From now on we just write instead of when dealing with fractions.  The associative and distributive axioms involve a straightfoward but tedious check, and we skip them entirely. The fact that and are commutative is clear from their definitions. is a group under addition since it has a element, namely , and , with the last equality holding since . The element is . (Note that we have used that a couple times here — indeed, without this assumption could be empty and then would be the empty set.)   being a domain means implies ( or ). The contrapositive to this statement is: if and then , which shows is a multiplicatively closed set of nonzerodivisors.  It remains only to show every non-zero element of is a unit. Given , note that and hence . So is also an element of . We have , where the last equation holds by the definition of .  The fact that is a ring homomorphism is straightforward to check. Its injective since implies .        For a specific example, the field of fractions of is .    or another, if is a squarefree integer and is an integral domain and we will show soon that its field of fractions is (isomorphic to) the field .    For yet another, is an integral domain. Its field of fractions, usually denoted constists of all rational functions . This last example could be generalized by replacing with any field and also by using any number of variables.        Let be a domain and let be its fraction field. Show that has the following universal property: if is any field and is any injective ring homomorphism, then extends to an injective ring homomorphism , so that .      Let be an integral domain with field of fractions . Let be a prime ideal of and let (a) Show that is a subring of . (b) Show that is a prime ideal of .      Let be a commutative integral domain and its field of fractions. Let and be nonzero elements of , such that . Let be the unique ring homomorphism with for and . Prove that a polynomial satisfies if and only if for some polynomial . (Hint: one way is to use induction on deg(p(x)).)      Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "example-23",
  "level": "2",
  "url": "sec-field-of-fractions.html#example-23",
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
  "id": "example-24",
  "level": "2",
  "url": "sec-field-of-fractions.html#example-24",
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
  "id": "exercise-138",
  "level": "2",
  "url": "sec-field-of-fractions.html#exercise-138",
  "type": "Exercise",
  "number": "3.3.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-139",
  "level": "2",
  "url": "sec-field-of-fractions.html#exercise-139",
  "type": "Exercise",
  "number": "3.3.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-140",
  "level": "2",
  "url": "sec-field-of-fractions.html#exercise-140",
  "type": "Exercise",
  "number": "3.3.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-eds",
  "level": "1",
  "url": "sec-eds.html",
  "type": "Section",
  "number": "4.1",
  "title": "Euclidian Domains",
  "body": " Euclidian Domains    A Euclidean domain (ED) is a domain together with a function such that and the following property holds: for any two elements with , there are elements and of such that      A \"degenerate example\" is a field equipped with the trivial norm for all . Given with , we have . Note that in this example there is no need to include in the description of the division algorithm, since implies . This is not the case in other examples. Also observe that as we've defined remainders they are {} unique. For example, in dividing by , both are considered valid. This calculation shows, more generally, that if is a unit, then for all there exists an equation with , not matter what norm is used. One could make remainders (and hence quotients) unique for by insisting that remainders always be non-negative, but this is not part of the abstract theory since it doesn’t generalize to all cases well.    The ring of Gaussian integers is a Euclidean domain with being the usual complex (Euclidean) square norm . Let ,  and let (here we use that the fraction field of is ). Now pick so that and . We have Set and set and notice that because and by closure. If we’re good, and if then, using that the complex squared norm is multiplicative as well as the Pythagorean Theorem and the choice for , we have Thus the norm function makes into a Euclidean domain.    The next classical example is with a field and where we define the norm to be degree: if and . This ring is a ED because of the familiar long division for polynomials.     Given elements , not both , of a Euclidean domain with Euclidean norm , a of and is an element such that:    and ; and    If and , then .        Note that is equivalent to .     Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "remark-23",
  "level": "2",
  "url": "sec-eds.html#remark-23",
  "type": "Remark",
  "number": "4.6",
  "title": "",
  "body": " Note that is equivalent to .  "
},
{
  "id": "exercise-141",
  "level": "2",
  "url": "sec-eds.html#exercise-141",
  "type": "Exercise",
  "number": "4.1.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-142",
  "level": "2",
  "url": "sec-eds.html#exercise-142",
  "type": "Exercise",
  "number": "4.1.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-143",
  "level": "2",
  "url": "sec-eds.html#exercise-143",
  "type": "Exercise",
  "number": "4.1.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-pids",
  "level": "1",
  "url": "sec-pids.html",
  "type": "Section",
  "number": "4.2",
  "title": "Principal Ideal Domains",
  "body": " Principal Ideal Domains    A ring is called a principal ideal domain (PID) if it is a domain with the property that every ideal is principal, i.e., for each ideal , we have for some      For any field , every ideal of is principal ( is a PID)     If is a Euclidean domain, then is a PID.    Let be the norm function making into a Euclidean domain. Pick an ideal . If is the zero ideal, . Otherwise pick a non-zero element of with as small as possible. (Such a exists by the well-ordering of .) I claim . It is clear that . Pick . Then and either or . But note that , and we cannot have both and by our choice of . So it must be that , and hence .     The ring is a PID, but not a Euclidean domain. It is the simplest example of such a ring, but the proofs of these claims are not easy. I will not cover a proof of this fact.    If is a PID, then every non-zero prime ideal is maximal.     Let be a domain. Two elements are associates if there is a unit of R such that .      Two elements of a domain are associates if and only if .    If then and so for some . Similarly and hence . Since is a domain, either or . If , then and otherwise is a unit.  If for a unit , then and so and , from which is follows that and .      If is a PID and , then    for some and any such is a gcd of and     the gcd of and is unique up to multiplication by a unit.       The existence of is granted by definition in a PID. Now gives that and . If and we have that , so by minimality. This gives , hence .     If is not only a PID but a Euclidean domain with norm function , then the Euclidean algorithm can be used to compute a gcd of any two nonzero .     Suppose is a domain. An element is a prime element if and the ideal is a prime ideal.      Suppose is a domain. An element is irreducible if , is not a unit, and whenever with then either or is a unit.       the prime elements of are the prime integers and their negatives; they are also irreducible  any element with a prime integer is irreducible e.g. is irreducible  the element is not irreducible in   the polynomial is irreducible; indeed if it factors nontrivially, it must factor as a product of two linear polynomials: . Then is a root for . But neither nor are roots for this polynomial, a contradiction.      In the domain the element is irreducible but not prime.   Note that and thus . However we claim that neither nor are in . If then for some and so , a contradiction. Thus is not prime.     In the ring the element is irreducible but not prime.   Since this ring is a domain. The element is irreducible for degree reasons. The ideal contains but doesn't contain so is not prime.      Let be a domain and let . 1. If is a prime element, then is irreducible. 2. If is a PID and is irreducible, then is a prime element.    Suppose is an integral domain and that is prime. Then and is not a unit. Suppose . Then and hence by definition either or . If , we have for some and so . Since , , and is an integral domain, we must have , showing that is a unit.  Assume is a PID and that is irreducible. Since is not a unit, is a proper ideal and hence is contained in a maximal ideal by Theorem . We show and hence is prime. Since is a PID, for some . So for some . But is irreducible and is not a unit, which forces to be a unit and hence .     Let be a commutative ring and an indeterminant. Prove that is a PID if and only if is a field.   First, suppose is a PID. Let be a nonzero ideal in , and consider the ideal . As is a PID we see for some . Then , but is an indeterminant and thus irreducible, so must be a unit or itself. But also generates , so can’t be , so is a unit, meaning and so . Thus the only ideals of are and , making a field.  Next, suppose is a field. Let be an ideal in . If then or , both of which are principal. Thus , and so , making principal as well. Hence is a PID.     Consider the subring of . Show that is irreducible but not prime in Hint: Consider the function .   Consider and the function .  Suppose by way of contradiction there exist such that . Then and , and Thus or , as these are the only integer divisors of . However, there do not exist integers such that this is true. Thus is irreducible in .  Suppose by way of contradiction that is prime in . Note that . Thus divides one of these factors.  First, suppose there exists some such that . Thus , and so . However, is not an integer, and thus cannot divide either of these factors. Thus is not prime in .     In the commutative ring , show that the element is irreducible but not prime.    Suppose by way of contradiction there exist such that . Then and , and Thus or , as these are the only integer divisors of . However, there do not exist integers such that this is true. Thus is irreducible in .  Suppose by way of contradiction that is prime in . Note that . Thus divides one of these factors.  First, suppose there exists some such that . Thus , and so . However, is not an integer, and thus cannot divide either of these factors. Thus is not prime in .     Prove is not a PID. Hint: One method is to use (with proof) the fact that is irreducible in this ring.    Let be a commutative ring with . Recall that is called nilpotent if for some integer Let be the set of nilpotent elements of .   Show that is an ideal of .    Show that the ring has no nonzero nilpotent elements.    For a polynomial , prove that is a nilpotent element of if and only if every coefficient of is nilpotent.      Let be a commutative ring with and Let be the set of nilpotent elements of .     Let . Then and for . Consider , which, by the binomial theorem, has each term raised to either the th or th power, sending the whole thing to .  Additionally, if consider when viewed as an additive group. Notice . Finally, let and consider , so . Thus we have our ideal.    Let be a nilpotent element in . Then , meaning . This means there exists some such that , placing . Thus all nilpotent elements in are actually (possibly four ’s in a trench coat).    Let .  First, suppose is a nilpotent element of . Thus for some . By the binomial shenanigans every product of coefficients must to go .  Next, suppose every coefficient of is nilpotent. Let be equal to the product of all the smallest powers that send each coefficient to . Thus by more binomial shenanigans we have .        Let be a PID and a multiplicatively closed subset of such that . Prove that is also a PID. Tip: Given an ideal of , consider .   Let be a PID, a multiplicatively closed subset of such that , and an ideal in . Consider , which is an ideal in and is thus generated by some .     Let be an integral domain with field of fractions . Let be a prime ideal of and let    Show that is a subring of .    Show that is a prime ideal of .        Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "remark-24",
  "level": "2",
  "url": "sec-pids.html#remark-24",
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
  "id": "problem-131",
  "level": "2",
  "url": "sec-pids.html#problem-131",
  "type": "Problem",
  "number": "4.25",
  "title": "",
  "body": " Prove is not a PID. Hint: One method is to use (with proof) the fact that is irreducible in this ring.  "
},
{
  "id": "problem-132",
  "level": "2",
  "url": "sec-pids.html#problem-132",
  "type": "Problem",
  "number": "4.26",
  "title": "",
  "body": " Let be a commutative ring with . Recall that is called nilpotent if for some integer Let be the set of nilpotent elements of .   Show that is an ideal of .    Show that the ring has no nonzero nilpotent elements.    For a polynomial , prove that is a nilpotent element of if and only if every coefficient of is nilpotent.      Let be a commutative ring with and Let be the set of nilpotent elements of .     Let . Then and for . Consider , which, by the binomial theorem, has each term raised to either the th or th power, sending the whole thing to .  Additionally, if consider when viewed as an additive group. Notice . Finally, let and consider , so . Thus we have our ideal.    Let be a nilpotent element in . Then , meaning . This means there exists some such that , placing . Thus all nilpotent elements in are actually (possibly four ’s in a trench coat).    Let .  First, suppose is a nilpotent element of . Thus for some . By the binomial shenanigans every product of coefficients must to go .  Next, suppose every coefficient of is nilpotent. Let be equal to the product of all the smallest powers that send each coefficient to . Thus by more binomial shenanigans we have .      "
},
{
  "id": "problem-133",
  "level": "2",
  "url": "sec-pids.html#problem-133",
  "type": "Problem",
  "number": "4.27",
  "title": "",
  "body": " Let be a PID and a multiplicatively closed subset of such that . Prove that is also a PID. Tip: Given an ideal of , consider .   Let be a PID, a multiplicatively closed subset of such that , and an ideal in . Consider , which is an ideal in and is thus generated by some .   "
},
{
  "id": "problem-134",
  "level": "2",
  "url": "sec-pids.html#problem-134",
  "type": "Problem",
  "number": "4.28",
  "title": "",
  "body": " Let be an integral domain with field of fractions . Let be a prime ideal of and let    Show that is a subring of .    Show that is a prime ideal of .     "
},
{
  "id": "exercise-144",
  "level": "2",
  "url": "sec-pids.html#exercise-144",
  "type": "Exercise",
  "number": "4.2.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-145",
  "level": "2",
  "url": "sec-pids.html#exercise-145",
  "type": "Exercise",
  "number": "4.2.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-146",
  "level": "2",
  "url": "sec-pids.html#exercise-146",
  "type": "Exercise",
  "number": "4.2.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "subsec-ufds",
  "level": "1",
  "url": "subsec-ufds.html",
  "type": "Section",
  "number": "4.3",
  "title": "Unique Factorization Domains",
  "body": " Unique Factorization Domains    A ring is called a unique factorization domain , or UFD for short, if is an integral domain and every element that is non-zero and not a unit can be written as a finite product of (not necessarily distinct) irreducible elements of in a way that is unique up to ordering and associates. That is, if also holds with each irreducible, then and there is a permutation such that, for all , we have and are associates.       is a UFD by the Fundamental Theorem of Arithmetic.   where is a field is a UFD. This is the case because is a Euclidean domain and Euclidean domains are UFD’s (we’ll prove this shortly).  We will eventually prove that if is a UFD then so is . It follows that is a UFD for all . Note that if , this ring is not a PID and hence not a Euclidean domain.      is not a PID hence also not a Euclidean domain. For , this can be seen because the ideal is not a principal ideal. It is a UFD because is a UFD (based on the result that if is a UFD then so is which we will prove shortly).     is a domain that is not a UFD.   Consider and each of are irreducible by a norm argument (exercise). Notice also that contains elements that are irreducible but not prime: is irreducible, by a norm argument. But it is not prime since but neither nor is in       If is a PID then is a UFD.      Assume is a PID is non zero and not a unit and are two different irreducible factorization of . Then and there is a permutation such that, for all , we have and are associates.    Without loss of generality, assume . We induct on .  If then as well since and would yield , a contradiction. If we have and there is nothing more to prove.  Assume and that irreducible factorizations with factors are unique up to reordering factors and taking associates.  Since is a PID, irreducible elements are prime by Theorem . Since we have that and since is a prime ideal it follows that for some . Upon reordering, we may as well assume . Thus for some . Since is irreducible and is not a unit, must be a unit. We get and hence, since is an integral domain, we may divide by to obtain Notice that is a prime ideal so is irreducible by Theorem .  By the inductive hypothesis we deduce that hence and also that are associates to in some order. This together with associate to establishes the claim.      Prove that in a UFD an element is irreducible if and only if the ideal [^1] is prime.  Prove that is not a UFD.       Let be a UFD.  First, suppose is irreducible, and consider the ideal . Let such that . Thus , so there exists some such that . As we are in a UFD the elements and all have unique (up to associates) factorizations of irreducible elements. Thus must be an associate of one of the irreducible elements in the factorization of or , and so or , making prime.  Now suppose that is prime and that for some . Thus and , so either or , as is a prime ideal. Assume without loss of generality that . Thus for some . Thus and As UFDs are integral domains we see , making a unit. Thus is irreducible.    First, notice that . Define a function Let and behold  Suppose by way of contradiction there exist such that . Then and , and Thus or , as these are the only integer divisors of . However, there do not exist integers such that this is true. Thus is irreducible in .  Suppose by way of contradiction that is prime in . Note that . Thus divides one of these factors.  First, suppose there exists some such that . Thus , and so . However, is not an integer, and thus cannot divide either of these factors. Thus is not prime in . By Part (a), this is not a UFD.         Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "exercise-147",
  "level": "2",
  "url": "subsec-ufds.html#exercise-147",
  "type": "Exercise",
  "number": "4.3.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-148",
  "level": "2",
  "url": "subsec-ufds.html#exercise-148",
  "type": "Exercise",
  "number": "4.3.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-149",
  "level": "2",
  "url": "subsec-ufds.html#exercise-149",
  "type": "Exercise",
  "number": "4.3.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "subsec-noeth",
  "level": "1",
  "url": "subsec-noeth.html",
  "type": "Section",
  "number": "4.4",
  "title": "Noetherian Domains",
  "body": " Noetherian Domains    Suppose is a commutative ring. Then is called a noetherian ring if satisfies the ascending chain condition on ideals - i.e., for every chain of ideals of  there exists a positive integer such that for all .      If is a PID then is noetherian.    Consider and ascending chain of ideals of ; it must have the form Consider which is an ideal of by the argument given in Theorem . Since is a PID, for some . Since , we must have for some . Then we see that for all , thus for and the chain stabilizes as desired.     Every field is noetherian.     If is a noetherian integral domain, then every non-zero, not-unit element factors into a finite product of irreducible elements.    Pick with and . If is irreducible, there is nothing to prove. Otherwise, we have for non-units . If both are irreducible, the proof is complete. Otherwise, one or both of them factors non-trivially. We may express this conveniently by saying that and such that either and are both non-units or and are both non-units. (E.g., if is irreducible, we could set .) Continuing in the this manner, we form a binary tree with at the top, one level down, one level below that, etc.  We halt the process of building the tree if at some stage all the leaves of the tree are irreducible elements, at which point we will have proven that factors in to a product of the irreducible elements given by these leaves.  We need to rule out the possibility that the process never terminates. If it never terminates, we will have built an infinite binary tree with the property that some route downward through the tree consists of an infinite list of irreducible elements such that for a non-unit and, for each , for a non-unit . Since is an integral domain, we have and for all . (E.g., if then and hence , so that , contrary to being a non-unit.)  But then we have arrived at an infinite ascending chain of ideals in , which is not possible in a Noetherian ring.      Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "exercise-150",
  "level": "2",
  "url": "subsec-noeth.html#exercise-150",
  "type": "Exercise",
  "number": "4.4.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-151",
  "level": "2",
  "url": "subsec-noeth.html#exercise-151",
  "type": "Exercise",
  "number": "4.4.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-152",
  "level": "2",
  "url": "subsec-noeth.html#exercise-152",
  "type": "Exercise",
  "number": "4.4.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-roots",
  "level": "1",
  "url": "sec-roots.html",
  "type": "Section",
  "number": "5.1",
  "title": "Roots of Unity",
  "body": " Roots of Unity    Fix a prime number , and let denote the abelian group of all complex roots of unity whose orders are powers of ; that is Prove the following statements.   Every non-trivial subgroup of contains the group of roots of unity.    Every proper subgroup of is cyclic.    If and are subgroups of , then either or .    For each there exists a unique subgroup of with elements.       Let be a non-trivial subgroup of . Then there exists some such that . Then yields a primitive root of unity, which can be used to generate the other roots as well. Thus contains the roots of unity.  Suppose is a proper subgroup of , meaning it is missing some root of unity. But the subgroup of those roots of unity is cyclic and is generated by every element, so that entire subgroup must be missing. But that subgroup can be generated with any primitive root of a higher power of , so must be finite and there must be some element of maximum order, which can be used to generate the whole group. Thus is cyclic.  Suppose and are subgroups of such that . Then is a proper subgroup of , making it finite as seen above. If there exists a higher power of in then it generates .  Let . Then the subgroup generated by the roots of unity have elements, and it is unique since it is generated by every such root.      Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "exercise-153",
  "level": "2",
  "url": "sec-roots.html#exercise-153",
  "type": "Exercise",
  "number": "5.1.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-154",
  "level": "2",
  "url": "sec-roots.html#exercise-154",
  "type": "Exercise",
  "number": "5.1.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-155",
  "level": "2",
  "url": "sec-roots.html#exercise-155",
  "type": "Exercise",
  "number": "5.1.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-irrpoly",
  "level": "1",
  "url": "sec-irrpoly.html",
  "type": "Section",
  "number": "5.2",
  "title": "Irredicuble Polynomials",
  "body": " Irredicuble Polynomials    For an integral domain , a polynomial is called irreducible if is not a unit and whenever , either or is a unit. (It follows that such a also cannot be .)      Let be a field and .   If has degree one, it is irreducible.    If has a root and , then is not irreducible (since it factors as for some of degree at least ).    If , then is irreducible if and only if has no roots.    (Rational Root Test) If and all the coefficients of are integers and is a root of with , then divides and divides . More generally, the same holds with replaced by any PID and replaced by its field of fractions.        Never, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever, ever try to use the converse of (2) or a version of (3) for polynomials of degree more than ; they are false.    Does have any roots? No. The only possible roots are and , and a careful check rules these out. Is irreducible? No, it factors as times      For a PID and [^1], define the of , written , to be the gcd of the coefficients of . Equivalently, is the generator of the principal ideal generated by the coefficients of .     Gauss’s Lemma: Part 1   Let [^1] where is a PID. Then [^2] (up to associates).    We first show the following special case: If and , then .  To see this, pick a prime and write for the result of modding out the coefficients of by . Then (since the map sending to is a ring map). Since , we have that and . Since is a domain, it follows that . This proves does not divide all of the coefficients of . Since was arbitrary, .  For the general case, let and where and . Note that and . By the case already proven, . It follows .     Gauss’s Lemma: Part 2   Let be a PID and let be its field of fractions, and assume [^1] is a non-constant polynomial with coefficients in . is irreducible in if and only if it is irreducible in and .    Suppose with . We can find an element of such that . (We can take to be the product of all the denominators of the coefficients of , for example; this is called “clearing denominators’’.) Similarly, there is an such that . Further, write where , , and and similarly where , , and . We have Using Gauss’s Lemma, Part 1, we have and hence We also have (since we’ve already proven that ).  So and thus by dividing we arrive at But is irreducible in . It follows that either or must be a unit in (i.e., a unit in ) and it follows that either or is a unit in . This proves is irreducible in .  ( ) Say irreducible in and . If with then, since is irreducible in , one of or must be a constant. But since , this constant must be .     Let’s prove is irreducible. By Gauss’s Lemma, we just need to show it is irreducible in .  If did factor in as a product of monic polynomials, then would also factor in this way. Now . This has no roots (the only possibilities are or ) and so if it did factor it would have to factor as a product of two quadratic, irreducible polynomials. The only such polynomial in is (the others all have roots). But . This proves is irreducible in and hence must be irreducible in .    Eisenstein’s Criterion   Let be a PID with field of fractions and assume [^1] is a polynomial. Suppose there is a prime element such that , [^2] for all , and . Then is irreducible in .    We have with and . Since does not divide the leading coefficient of , we have . It therefore follows that the three assumptions involving the coefficients of are also satisfied by the coefficients . Moreover, is irreducible in if and only if is irreducible in . We may therefore assume without loss of generality that .  By Gauss’s Lemma we just need to prove it is irreducible in . Suppose with , where and where and .  Upon modding out by we get The assumptions on give that with . Since is a domain, it follows that On the other hand, we also have and since , we have that or . So or . This can only occur if or .  We have shown that if factors in as , then at least one of of must be a constant polynomial. Since , this factor must be a unit. So is irreducible in .     For instance, is irreducible in thanks to Eisenstein applied with . (Note that it isn’t irreducible in since it does not have unit content.)     For any prime , the -th cyclotomic polynomial  is irreducible in [^1].    Consider the ring isomorphism given by . I claim that To see this, we note that and by the binomial theorem we have Since , the claim follows.  By Eisenstein, is irreducible in and, since is an isomorphism, it follows that is irreducible in .      Assume is an integral domain and is a monic polynomial with coefficients in . If there is a prime element such that is irreducible in , then is irreducible in .    We prove the contra-positive. Suppose is reducible in . Then we have for some monic, non-constant polynomials and in . It follows that holds in . But since and are monic, non-constant polynomials, and are both non-constant polynomials in and hence is reducible in .     The assumption that be monic in this Proposition is necessary. Consider for instance . Modding out by yields a linear polynomial in which is thus irreducible. But clearly isn’t irreducible in . (The Proposition can be generalized to non-monic polynomials by adding the assumption that does not divided the leading coefficient of .)     Let be a field and a finite subgroup of the multiplicative group . Prove that is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the [[Mathematics\/Number Theory\/Results\/Lemma – Factor Theorem|Factor Theorem]] there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian[^2] every Sylow -subgroup of is normal,[^3] and thus there is only one of each[^4]. This means that can be written as a direct product of cyclic groups of relatively prime order;[^5] Hence is itself cyclic.      Let and and recall (from 817) that is a PID and is its field of fractions.   Prove is irreducible in .    Prove is irreducible in but is reducible in .       Let and .  Suppose by way of contradiction that is not prime in . Thus , with non-units and where and , for . Thus . As , we see that . Note that the possible factorizations of 49 in are and .  However, if then , making it a unit. So and thus . As , either or . But then either or , and as , we have a contradiction. Thus is prime in . Using Eisenstein’s Criterion with , we see that is irreducible in .  Using Eisenstein’s Criterion with , we see that is irreducible in . However, in observe that As neither nor are units in (as has no inverse), we see that is reducible in .      Show that is irreducible.        Let be a field and [^1] be irreducible. Prove the [^2] is a field.  Give an explicit construction (with justification) of a field of size . (You may use without proof that the unique irreducible quadratic in is       Let be a field and be irreducible. Thus is prime[^3], making a prime ideal in [^4] and a domain[^5]. Suppose that there existed a proper ideal such that . However, as is a field we know that is a PID[^6], meaning for some [^7]. If then [^8], meaning that . Thus is a maximal ideal and we have a field[^9].  Let . Let . Suppose with irreducible. Thus either both and have degree or one of them has degree . As , we see that without loss of generality . Then or , but neither divide . Thus is irreducible, making a field, the elements of which are: 1. 0 2. 1 3. 4. 5. 6. 7. 8. 9. 10. 11. 12. 13. 14. 15. 16. , making it a field of order .      Let be a field and a finite subgroup of the multiplicative group . Prove that is cyclic.    Let be a field and a finite subgroup of order the multiplicative group . Let denote the LCM of all orders of elements in . Notice that as for all we have .  However, as for all we know that is the root of the polynomial in . By the [[Mathematics\/Number Theory\/Results\/Lemma – Factor Theorem|Factor Theorem]] there are thus at most roots of , but there are distinct roots. Thus .  Thus the LCM of all orders of elements in is . Notice that as is abelian[^2] every Sylow -subgroup of is normal,[^3] and thus there is only one of each[^4]. This means that can be written as a direct product of cyclic groups of relatively prime order;[^5] Hence is itself cyclic.[^6]      Let be a field and its group of units.   Prove that any finite subgroup of is cyclic.  Suppose that is algebraically closed that has characteristic . For any positive integer , prove that has a subgroup of order if and only if does not divide .     Let be a field and its group of units.  Let be a finite subgroup of . Let .  Let be the LCM of all orders of elements in . Then and thus is a root of the polynomial for all . By Lagrange’s Theorem every element divides , and so we have . However, by the Factor Theorem the polynomial can have at most roots, and we have distinct elements, and thus we have . Thus there must exist an element of order in , making cyclic, as desired.  Let and suppose that has characteristic and is algebraically closed.  First, suppose by way of contradiction that has a subgroup of order , , and . From Part (a) is cyclic and generated by some such that . However, as we see that , given that we are in an additive group. This contradicts the fact that is the smallest number such that .  Now we proceed via the contrapositive. Suppose does not have a subgroup of order . Then there cannot exist a unit such that . Consider the polynomial . As is algebraically closed there exists some root . (how do we know this isn’t 1???) Notice that this means and so is a unit in . As cannot have order , it must have an order that divides . We also know that as we are in a field of characteristic . Thus either divides or is . Either there is a non-identity root of . Note that in this case as we are...      Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "remark-25",
  "level": "2",
  "url": "sec-irrpoly.html#remark-25",
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
  "id": "exercise-156",
  "level": "2",
  "url": "sec-irrpoly.html#exercise-156",
  "type": "Exercise",
  "number": "5.2.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-157",
  "level": "2",
  "url": "sec-irrpoly.html#exercise-157",
  "type": "Exercise",
  "number": "5.2.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-158",
  "level": "2",
  "url": "sec-irrpoly.html#exercise-158",
  "type": "Exercise",
  "number": "5.2.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
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
  "body": " Module Basics   Module Basics   – Module  Let be a ring (with ). A left - is an abelian group together with a pairing , written , such that for all and 1. , 2. , 3. , and 4. .    If is a commutative ring, then any left -module may be regarded as a right -module by setting . Likewise, any right -module may be regarded as a left -module. But for non-commutative rings, left and right modules are not the same: trying to make a left -module into a right one by setting fails to satisfy the second axiom, since and , and, unless , we cannot conclude that .    – Opposite Ring  Given a ring , let , the opposite ring , denote the same set with same rule for , but with multiplication redefined as (where on the right is the original multiplication ring). Then is also a ring – note that it coincides with if and only if is commutative. Given a left -module , show that is a right -module via the rule for scaling given by .    Problem  Given a ring , let denote the “opposite ring’’. This is the same underlying set as equipped with the same rule for as , but with multiplication rule (which I will write here as ) redefined to be (where refers to the original multiplication rule for ). Then is also a ring — you don’t need to prove that.  Given a left -module , prove that is a right -module via the same rule for addition but with the rule for scaling on the right defined to be for any and . #### – Arithmetic in Modules Let be a ring and let be a (left) -module. Then for all and we have 1. , 2. , 3. , and 4. .   Proof.   For the first, and hence .  For the second, and hence since is an abelian group.  For the third, (using the second) and hence is the additive inverse of .  Finally, (using the fact that holds in any ring and the previous result).      – Modules   For any ring , the trivial module is with for any .  Every ring is a left module over itself whit the rule for scaling given by the ring multiplication rule. It is also a right module over itself.  More generally, if is any ring and is a left ideal, then is a left- -module.  Let be a field and (the ring of matrices with entries in ). Let be the collection of column vectors with entries in having entries. The usual rules for adding column vectors and multiplying column vectors on the left by matrices make into a left -module. Likewise if is the collection of all row vector with entries in , the is a right -module via addition and matrix multiplication.     – Standard Free Module  For a non-negative integer , the “standard’’ free (left) -module of rank is the set equipped with the operations     – Vector Space (Module)  Let be a field. An - is a (left) -module.    – Abelian Groups are -modules  Let be an abelian group under . Then becomes a -module upon defining the rule for scaling to be    for any and .    Problem  Let be a positive integer and recall that denotes the ring of integers modulo (whose elements I will write as ). 1. Show that if is any abelian group (under the operation ) such that for all (where ), then the pairing given makes into a -module. (Be sure to check this pairing is well-defined.) 2. Conversely, show that if is a -module, then the underlying abelian group has the property that for all .    – Restriction of Scalars  Let be a ring homomorphism. Any left -module may be regarded via restriction of scalars as a left -module with the following structure: - the rule for addition on is the same as in the original structure and - the rule for scaling by elements of is ###### Proof. Let and . One checks that the properties in the definition of module hold for the given action using properties of ring homomorphisms. In detail, since preserves addition, since preserves multiplication, and since preserves multiplicative identities. This gives three of the axioms. The final also holds:     – Complex Vector Spaces are Real Vector Spaces  For example, since is a subring of , every complex vector space may be regarded as a real vector space, by restriction of scalars from to . Likewise, any real vector space may be regarded as a rational vector space. Etc.    – Homomorphisms and Restriction of Scalars  If and are rings and is a ring homomorphism, then since is a left -module, it is also a left -module via restriction of scalars. Note that the rule for scaling given by .  As a special case of this, if is a subring of a ring then is an -module (restriction of scalars along the inclusion map).  For instance, is a left -module for any via the evident injective ring homomorphism .  Also, is a left -module for given by the ring map sending to .    – -Module is an -Module  If is a (two-sided) ideal of a ring then applying restriction of scalars along the quotient homomorphism[^1] gives that any left -module is also a left -module.  In particular, applying this to the -module gives that is a left -module. The rule for scaling is .    – Submodule  Let be a ring and let be a left -module. An - of is a subset such that 1. is a subgroup of under (so, we have , if then , and if then ), and 2. for all and .    Problem –  Let be an -module and be an ideal in . Show that the set is an -submodule of .    – -Module Homomorphism  Let be a ring and let and be -modules. An -module from to sometimes called an - , is a function such that for all and we have 1. , i.e.  is an additive group homomorphism, and 2. .    – Linear Transformation (Module)  Let be a field and let and be vector spaces over . A from to is an -module homomorphism .    – -Module Isomorphism  An -module homomorphism is an -module if there is another -module homomorphism such that and .    – Module Isomorphisms and Bijections  Given a ring , -modules and , and a -module homomorphism , is an -module isomorphism if and only if is a bijection.    – Submodules are Ideals  A subset of a ring is a left submodule of if and only if it is a (left) ideal.     – Kernels and Images of Homomorphisms are Submodules  Let be a ring and let be an -module homomorphism. Then is an -submodule of and is an -submodule of .    Problem  Let be any field and the set of infinte-by-infinite, column-finite matrices. That is, consists of arrays , where and for all , such that for each , there exists an (depending on ) such that for all . That is, consists of elements of the form such that each column has only a finite number of non-zero entries (but, importantly, there is no uniform bound on the number of non-zero entries a column may have). It is not difficult to see that is a ring under the usual rules for adding and multiplying matrices: Given as above and we define and Note that the latter is a finite sum since, given , there is an such that for all . Moreover, is column-finite since, for each such , each of the columns of has only a finite number of non-zero elements. The multiplicative identity is the infinite identity matrix. You need not prove any of this.  Do prove that as left -modules. {} Think about splitting up an element of into its even and odd columns.    Problem –  Given a homomorphism of -modules , show that is an -submodule of .    Problem –  Show that for every nonzero integers and there is a -module isomorphism .    Problem –  Let be a commutative ring. Given an -module , its annihilator is the ideal Show that if there is an isomorphism of -modules , then .    Problem –  Let be a commutative ring with . An -module is simple if it has no nontrivial submodules. Show that is simple if and only if there exists a maximal ideal of such that .    Problem 8 #unfinished  Let N be a submodule of an R-module M. Using Zorn’s Lemma, prove that there is a submodule N′ such that 1. , and 2. for every non-zero submodule N′′ of M.    Problem 5 #unfinished  Let be a –module and let be any integer. Show that there is a -module isomorphism is a submodule of . (Note: You may use the fact that is a –module without proof.)    Problem 5 #unfinished  Let be a non-zero, unital ring, and let and be the standard free left -modules of finite rank and . Assume there is an isomorphism of -modules    Prove that if is commutative then . You may assume without justification that this holds in the special case when is a field.  Show, by example, than need not equal if is not assumed to be commutative.        Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-159",
  "level": "2",
  "url": "sec-defmod.html#exercise-159",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-160",
  "level": "2",
  "url": "sec-defmod.html#exercise-160",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-161",
  "level": "2",
  "url": "sec-defmod.html#exercise-161",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-modhom",
  "level": "1",
  "url": "sec-modhom.html",
  "type": "Section",
  "number": "1.2",
  "title": "Module Homomorphisms",
  "body": " Module Homomorphisms     Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-162",
  "level": "2",
  "url": "sec-modhom.html#exercise-162",
  "type": "Exercise",
  "number": "1.2.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-163",
  "level": "2",
  "url": "sec-modhom.html#exercise-163",
  "type": "Exercise",
  "number": "1.2.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-164",
  "level": "2",
  "url": "sec-modhom.html#exercise-164",
  "type": "Exercise",
  "number": "1.2.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-quote",
  "level": "1",
  "url": "sec-quote.html",
  "type": "Section",
  "number": "1.3",
  "title": "Quotient Modules",
  "body": " Quotient Modules   Quotient Modules   – Quotient Module  Let be a ring, let be an R-module, and let be a submodule of . The  is the quotient group under (so elements of are additive cosets of the form with and addition is defined by ) and with the rule for scaling by defined to be for all and .   – Quotient Map is -module Homomorphism  Let be a ring, let be an -module, and let be a submodule of . The rule for scaling introduced above is well-defined and it, along with the rule for , makes into an -module. Moreover, the canonical quotient map , defined by , is an -module homomorphism whose kernel is .   Proof.  Among the many things to check here, we will only check a couple.  We need to prove the rule for scaling by on is well-defined: If then so by the definition of submodule. This gives that , hence . The module axioms are then pretty straightforward. We already know from 817 that is an abelian group under .  Let us check one of the four axioms involving scaling. We have which gives the third such axiom. The other three are also straightforward.  The fact that is an -module homomorphism is also straightforward. Its kernel is , which is equal to .     – -modules and Quotients  Recall that -module are the same as abelian groups. submodules and quotient -modules are the same things as subgroups and quotients of abelian groups.    – Module Isomorphism Theorems  Let be a ring, and let be a -module. - (UMP for Quotient Modules) Let be a submodule of , let be an -module, and let be an -module homomorphism. If (i.e., if ) then the function given by is a well-defined, -module homomorphism. In fact, is the unique -module homomorphism such that where denotes the canonical surjection . - (First Isomorphism Theorem) Let be an -module and let be an -module homomorphism. Then is a submodule of and there is an -module isomorphism given by . - (Second Isomorphism Theorem) Let and be submodules of , and define . Then is a submodule of , is a submodule of , and there is an -module isomorphism . - (Third Isomorphism Theorem) Let and be submodules of with . Then is a submodule of and there is an -module isomorphism given by sending to . - (Lattice Isomorphism Theorem) Let be a ring, let be a R-submodule of , and let be the canonical quotient map. Then the function defined by is a bijection, with inverse given by for each submodule of . Moreover, and preserve sums and intersections.   Proof.  Ignoring the rules for scaling by , we know each of the frist four results holds for abelian groups (and the maps are the same). So, we merely need to prove that the rules for scaling are respected in each case. In more detail:  For the UMP, we already know that is a well-defined homomorphism of groups under and that it is the unique one such that . It remains only to show preserves scaling: This follows quickly from the definitions: where the third equation uses that preserves scaling.  For the First Isomorphism Theorem, we already know that there is an isomorphism of abelian groups under , given by , and it remains only to show this map preserves scaling. This is a special case of what we proved in part (0).  For the second isomorphism theorem, we need to first check that and are submodules. From 817 we already know they are subgroups under , and it is evident from the definitions that each is closed under scaling by elements of . Now, we know from 817 that there is an isomorphism of abelian groups given by . It remains only to show preserves scaling:   For the third, we already know (from 817) that is a subgroup of under . Given and we have which belongs to since . This proves is a submodule of . Also from 817 we know there is an isomorphism of abelian groups given by and it remains only to show it is -linear: .  The Lattice Theorem is the most complicaed to gerenlize. From 817 we know thre is a bijection between the set of sub groups of and that contain and subgroups of the quotient group , and the maps are the same as given in the statment. We just need to prove that these maps send submodules to submodules. If is a submodule of containing , then by part (3) we know is a submodule of .  If is a submodule of , then is an abelian group. For adn we have and hence too, since is a submodule. This proves is a submodule.     Problem 5 – Modules and Maximal Ideals  Let be a commutative ring (with )[^1] and let be an -module. Show that if and the only submodules of are and , then there is a maximal ideal I of such that is isomorphic to [^2].   Proof .  Let be a commutative ring (with ) and let be an -module such that and the only submodules of are and .  As , there exists a non-zero element . Let be defined by . Since and , we have . By the First Isomorphism Theorem we see that , making an ideal in , which we shall conspicuously denote as henceforth. By the Lattice Isomorphism Theorem the only two ideals of are and , making a field, and a maximal ideal in .     Problem –  Let be a ring with . Prove that if is an -module and is a submodule of such that and are finitely generated, then is finitely generated.    – Every Cyclic -module to for some  Every cyclic -module is isomorphic to [^1] for some left ideal .   Proof.  Say is cyclic and is a generator of , so that . Define to be the unique -map with . Here I am applying the UMP for bases, using that is a basis of as a left -modules. More explicitly, for all . Then is onto, since generates . Its kernel is a left ideal of , since submodules of are the same thing as left ideals. By the FIT, there is an isomorphism sending to .     Problem  Let be a ring. Recall that we proved in class that every cyclic -module is isomorphic to for some left ideal . Prove the left ideal occurring this statement is unique; that is, if a cyclic -module is isomorphic to and for left ideals and , then .     More generally, the same argument shows that if is a finitely generated module, say generated by elements, then for some submodule of .    – is an -module  For a commutative ring , module and ideal , the rules for addition in [^1] and scaling by on introduced above make into an -module.  Moreover, given another -module and an -map , the function given by is a well-defined -module homomorphism.  Finally, if is yet another -module homomorphism, then , and we also have for any -module .   Proof.  I leave some of the details as an exercise, but I will check a few of the necessary things:  We already showed that the rule for scaling is well defined, and we know from 817 that the rule for addition is well-defined and that is an abelian group. To show is an -module, there remain four axioms to verify. For instance, which verifies one of them; the other proofs are similar.  Next, let me verify that the function is a well-defined -map: Let be the composition of -maps (the second one being the canonical one), so that . Since for any ’s belonging to and ’s belonging to , we have . By the UMP for quotient modules, there is an induced -map given by . The map is so far only known to be an -map, but it is in fact an -map since The final assertions are clear from the formula for for an -map .     Problem 11 – Modules and  Let be a commutative ring with , and let be a surjective homomorphism of free -modules. Prove that .   Proof.  Let and .  Let be a maximal ideal in . Thus is a field. Lemma 1.58 tells us that and are -vector spaces. Additionally, this gives rise to , which is a surjective -module linear transformation.  Note that is generated by for . Let and consider . For this to be we need it to be in , and thus all . So the set of is a basis for with elements. Likewise has a basis with elements. As we are surjective, Rank , . So by Rank-Nullity which is only positive with .     Problem  Let be a non-zero commutative ring and suppose is a surjective homomorphism of -modules for some non-negative integers and . 1. Prove that if is a field, then . 2. Prove that if is any non-zero commutative ring, then .    Problem 5 – Showing Module is Torsion-Free  Recall that a -module is called torsion-free if its torsion submodule is where Consider the -module Show that is torsion free.   Proof.  Let . Thus for some nonzero . Then , and so and . Then there exists such that and or and and . Notice that in we have , and thus neither nor can divide . Suppose and . As cannot divide we see that divides both and , placing them both . Thus . The same holds true if we use . Thus and .      The Lemma shows that the rules and determine what is known as a functor from the category of -modules to the category of -modules.    – Maximal Ideals and Vector Spaces  Suppose is a maximal ideal of a commutative ring . Then [^1] is a field,[^2] and given an -module , is a module over the field ; i.e., it is a vector space over this field. Moreover, if is an -map then is an -linear transformation.    Problem  Let be a ring, let be a left -module and let be a left -submodule. 1. Prove that if is finitely generated (as an -module), then so is . 2. Prove that if and are both finitely generated, then so is . 3. Prove the converse to the previous part is false, as follows: Let be a field and , the ring of polynomials in the infinite list of variables . (So, an element of is a {} -linear combination of monomials of the form for and . Note that each element of involves only a finite number of variables, but there is no uniform bound on how many such variables can be involved in the elements of .) You may assume without proof that is a ring with the usual rules for adding and multiplying polynomials, which make sense since each element of involves only a finite number of variables. Finally let be the ideal of generated by the variables . Prove is finitely generated as an -module but the submodule is not.    Problem  Let be a ring, and left -modules, and an -module homomorphism. Assume that is surjective. We say is a {} if there exists an -module homomorphism such that (i.e., for all ). 1. Prove that if is free, then every surjective -module homomorphism of the form is a split surjection. 2. By giving an explicit example with justification, show the statement in part (a) would become false if were not assumed to be free.    Problem   Assume is a ring, an -module, and an injective -module homomorphism. We say is a {} if there exists an -module homomorphism such that (i.e., for all ).  Prove that if is a field, is a subspace (i.e., submodule) of , and is the inclusion map, then is a split injection. Note that since is the inclusion map, what you need to prove is that there exists an -module homomorphism such that . {}: Start by picking a basis of and use a theorem proven in class to show that can be extended to a basis of . Use to construct . (I am assuming that is a subspace of and that is the inclusion map just for simplicity — more generally, it is true that every injective -module homomorphism is a split injection whenever is a field.)  Assume is a non-zero integral domain, but that it is not a field. Prove there exists an -module homomorphism that is an injection but {} a split injection. {}: Pick such that and is not a unit, let be the proper ideal generated by and show the inclusion map is not a split injection.     Problem  Let be a commutative integral domain and an -module. A subset of is called a maximal linearly independent subset of if is linearly independent and any subset of properly containing is linearly dependent. 1. Let be a linearly independent subset of . Prove that is contained in some maximal linearly independent subset of . 2. Let be a linearly independent subset of and let be the -submodule of generated by . Prove that is a maximal linearly independent subset if and only if is torsion. (Recall that an -module is called “torsion’’ if for each , there is a such that and .)    Problem –  Prove that if is a commutative ring with then as -modules if and only if . In order to do that, you will complete the following steps: 1. Show that if is any ideal of and is any -module, then is an -module via 2. Show that if is any ideal of , then as -modules. 3. Apply the previous part when is a maximal ideal of . You will need to use the following fact, which we shall prove in class very soon: if is a field, then as -vector spaces if and only if . #### Problem – Properties of Torsion Submodules Let be a domain and let be an -module. The torsion submodule of is Elements of are called the torsion elements of , and the module is called {} if . You may take for granted that this is actually a submodule of without proof. 1. Show that if and are -modules, then . 2. Show that if , then . 3. Show that if is a free -module then . 4. Show that if is an ideal of that is not principal, then is a torsion-free -module that is not a free -module. 5. Show that if is an ideal of then . 6. Suppose that R is a PID, and that is a finitely generated -module. Show that is a torsion-free -module if and only if is a free -module.    Problem –  Let be a commutative ring with . Show that     Problem 9 #unfinished  Let be an ideal in a commutative ring , let and be -modules and let be an -module homomorphism.   Prove there is a unique -module homomorphism such that , where and are the canonical quotient maps  Prove that if and is surjective, then so is . (Recall that is the ideal generated by all elements of the form , where .)        Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-165",
  "level": "2",
  "url": "sec-quote.html#exercise-165",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-166",
  "level": "2",
  "url": "sec-quote.html#exercise-166",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-167",
  "level": "2",
  "url": "sec-quote.html#exercise-167",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-linear",
  "level": "1",
  "url": "sec-linear.html",
  "type": "Section",
  "number": "2.1",
  "title": "Linear Independence",
  "body": " Linear Independence   Generated Modules   – Linear Combination  Let be an -module and . An - of is an element of of the form for some and . (If , this gives the empty sum which is interpreted to give .)    If is an -vector space, one usually uses the term spanned by’’ instead of the term generated by’’.    – Smallest Submodule of Containing  For any subset of a -module , the subset is indeed a submodule of , and it is the smallest submodule of that contains as a subset. In fact, we have     – Finitely Generated (Module)  A module is if there exists some finite subset of such that .     For any -module , we have . This is because the empty sum is interpreted as giving .    – Cyclic Module  If [^1] for some single element , we say that is .    – Cyclic -module  If , then (recalling that a -module is the same thing as an abelian group) we see that is a cyclic -module if and only if is a cyclic group.    Problem –  Show that the left -module is cyclic if and only if there exists a left ideal of such that .    Problem –  Let be a commutative a ring. Let be an -module, an ideal in , and let which is an -submodule of by Problem 1. Show that     Problem 5 – Annihilators and Generated Ideals  Let be a (not-necessarily commutative) ring let be a left -module. The annihilator of in is defined to be (a) Prove that is a -sided ideal of . (b) Suppose is an abelian group (i.e., a -module) such that and is the ideal generated by . How many possibilities, up to isomorphism, are there for ?   Proof .   Part (a)  Let . Consider . Thus . Let and consider . Let and suppose for some . Add to both sides to see that . Thus and for all . So .  Note that as for all , we know that . As for all , we see that is a left sided ideal.  Suppose for some . This time we add to both sides, but as , we once again find that . Notice that this means for all and , and thus that elements of commute with elements of .  Let . Consider . Luckily, we know and thus that . Hence , making is a two sided ideal.    Part (b)  By the FTFGAG and Sunzi’s Remainder Theorem, there are only so many options we have for : - , - , - , - , - , - , - , - - , and - . However, as ideals are additive subgroups, we know that needs to contain a cyclic subgroup of order . Thus we need only consider decompositions with a in them, of which there are exactly two: 1. 2.       – Standard Free Module Finitely Generated  Let be a ring. The standard free -module of rank , , is finitely generated, since it is generated by where , with a in the -th position. This holds since given any element of we have .  In particular, taking , is cyclic as a module over itself, since . More generally, for any (two sided) ideal , is a cyclic left -module, generated by .    – Linearly Independent (Module)  Let be an -module and let be a subset of . The set is if whenever and are distinct elements of satisfying , then . Equivalently, is linearly independent if and only if given any equation of the form where for all and for all but a finite number of s, we must have for all .    – Linearly Dependent (Module)  Let be an -module and let be a subset of . The set is linearly dependent if and only if there is an equation of the form where for all , for all but a finite number of s, and for at least one .     The empty subset of any module is linearly independent (vacuously).    – One Element Subsets of -Modules  A one element subset of an -module is linearly independent if and only if whenever , we have .  But it is possible for one elements subsets to be linearly dependent: For example, let be any ring and and (two-sided) ideal such that . Then I claim that every non-empty subset of is linearly dependent. For say is a such a nonempty subset. For any , pick any such that . Then (since for some and hence ) and this shows is linearly dependent. In particular, even a one-element subset of is linearly dependent.    – Linearly Independent in  The singleton is a linearly independent subset of the -module . But it does not generate all of . The subset does generate all of , but it is not linearly independent, since . More on this later.    – Basis (Module)  A subset of an -module is a of , if the set generates and is linearly independent.    – Free Module  An -module M is a  -module if admits at least one a basis.    – Rank (Module)  Let be a non-zero commutative ring and let be a free -module. The cardinality of any basis of is called the of .    – Zero Module is Free  The zero module is free with as (its only) basis. This holds since the empty set is vacuously linearly independent and it generates .    – Ring is Free Module over Itself   is free since is a basis for . It clearly generates and if then , so it is linearly independent.    – is Free  More generally, is free since is a basis. This is called the of . We’ve already seen that generates as an -module. Suppose . Then and hence for all .    – Quotient of Proper Nonzero Ideals Not Free  For any ring , if is a (two-sided) ideal such that and , then is not free. Since , is not the zero module and hence the empty set isn’t a basis. Let be any non-empty subset. Then since , as shown above is linearly dependent. We conclude that no subset of is a basis.    – Bases are not Unique  As you likely know from a class in linear algebra, bases of free modules are rarely unique. Indeed, if is any ring, then any single unit forms a basis for as a module over itself. For another example, for any ring and any fixed element , the set forms a basis for the free -module .    Problem –  Let be a commutative ring with . Show that if every -module is free then is a field. #### Problem –  An abelian group is called divisible if for each and , there exists such that . Prove that if is a divisible abelian group then is not a free -module. Deduce that is not a free -module.    Problem –  Let be a commutative ring with . 1. Show that if is a free -module, then . 2. Give an example of a ring an a nonzero module such that .     A key difference between free modules over rings that are not fields and vector spaces is that not every linearly independent subset of a free module can be extended to a basis. For example, is a linearly independent subset of , but it cannot be extended to a basis. Indeed, any set of the form with is linearly dependent since .  Likewise, over arbitrary rings, not every subset that generates a free module necessarily contains a basis. For instance, generated as a module over itself, but no subset of it is a basis.  (Note that has precisely two bases as a module over itself: and . )     If is the zero ring, then there is (up to isomorphism) only one -module, the zero module. (Proof: If is any module over the ring, then for each we have .) Checking the definition carefully, we see that both the empty set and the set form bases for the zero module over the ring. This gives an example of a module with two bases of different cardinalities. On the homework you will encounter another example of this sort.    – Elements Uniquely Expressible in Free Modules  Suppose is a free -module and is a basis of . Then every element of is uniquely expressible as an -linear combination of elements of .  More precisely, for each there is unique family of elements , with for all , such that for all but a finite number of indices and .   Proof.  Given , the fact that for at least one family of elements with for all but a finite number of ’s is the definition of what it means for to generate .  Suppose is another such family with . Then Since is linearly independent, by definition for all .     – Module with Infinite Basis  I have not yet given an example of a module with an infinite basis; here is one. Let be any ring and [^1] (which, recall, is an -module due to the evident ring map ). Then the countably infinite set is a basis. The fact that this set is a basis is essentially part of the definition of . The Lemma says that every polynomial is uniquely expressible as an -linear combination of (a finite subset of) .    – UMP for Free -Modules  Let be a ring, let be a free -module with basis , let be an -module, and let be any function. Then there is a unique -module homomorphism such that for all .  In other words, there is a bijection of sets given by sending a homomorphisms to its restriction to . (Here, is the set of all -module homomorphisms from to and is the set of all functions from to .)   Proof.  {} Given a function , define as follows: Given , by Lemma can be written uniquely as a finite sum . We set Note that is a well-defined function by the uniqueness of the equation .  We need to prove is an -module homomorphism. I’ll just show it preserves scaling — the proof for addition is similar. Given and , we have for some , and hence . By definition of ,   Finally, for any we have where if and if . So by construction. This proves existence.  {} Let be another -module homomorphism such that for each . Given we have and hence and hence .      The uniqueness only uses that generates as an -module.    – Free Modules with Equal Basis Elements Isomorphic  If and are free -modules having bases of the same cardinality, then and are isomorphic -modules.  More precisely, if is a basis of and is a basis of and is a bijection of sets, then there is a unique -module isomorphism such that [^1].   Proof.  Let and be the -module homomorphisms induced by the bijection and its inverse , respectively, using the UMP for free modules. We’ll show that and are mutual inverses. For this note that is an -module homomorphism and for every . Since the identity map is also an -module homomorphism such that for every , by the uniqueness clause in the UMP, we have . Similarly .     – as -modules  If is a free -module that has a basis of cardinality , then as -modules. This holds since, as seen above, has a basis of cardinality , namely the standard basis .  More precisely, as the proof makes clear, if is an (ordered) basis of , there is an isomorphism that sends to .     Beware that the cardinality of a basis of a free modules is not an isomorphism invariant in general! There exist rings such that and are isomorphic -modules for all positive integers and .    – Uniqueness of Rank over Commutative Rings  Let be a commutative ring such that and let be a free -module with bases and . Then and have the same rank, i.e. there exists a (non unique) bijection of sets joining them.   Proof. Let be a non-zero commutative ring and let be a free -module with two {} bases, and . We need to show and have the same cardinality. Since and are finite, by Example the assertion is equivalent to the following statement: \\begin{quote} For a non-zero commutative ring $R$, if there is an isomorphism $R^n \\cong R^m$ of $R$-modules for some integers $n$ and $m$, then $n = m$. \\end{quote}  I will prove this statement by taking it as already known that it holds in the special case when is a field. (We will prove it for fields later.)  Since is not the zero ring, it contains at least one maximal ideal . (This is proven using Zorn’s Lemma.) Recall that is a field.  Given an isomorphism of -modules, by Lemma we have an induced homomorphism of -module . Likewise, the inverse map induces a map . Also by that Lemma we have and similarly is the identity. That is, we have an isomorphism of -modules.  Next, I claim that there is an isomorphism of -modules. Define in the evident way (modding out by entry-wise). It is a surjective map of -modules with kernel and thus, by the First Isomorphism Theorem, it induces an isomorphism given by (where denotes taking the transpose). Now, what we have said so far only shows that is isomorphism of -modules, but it is easy to see that is in fact -linear (I’ll leave that to you) and thus it is an isomorphism of -modules.  Putting the results proven so far together, we conclude that and are isomorphic as -modules. Since is a field and since we are assuming the result holds for fields, we deduce that .     – Bijection of Matrices and Hom Functor  Suppose is a ring and and are free -modules with ordered bases and , respectively. There is a bijective correspondence that sends a matrix to the unique -module homomorphism satisfying for each .     It is of paramount importance to realize that the bijection between maps and matrices {}.  In particular, the -map written as that we associate to the matrix in this proposition depends on the basis and , and so it should really be written as something like . I will occasionally do so.     Let us rephrase the Proposition in terms of usual matrix multiplication in the case when is {}.  Given an -module homomorphism with and as in the proposition, let be the matrix attached to it using the bases and as described above. Then the diagram #empty  commutes, where and are defined in and and by we mean the map where denotes the usual rule for matrix multiplication. (Recall elements of are represented as column vectors.)  Conversely, given a matrix , the corresponding map is the unique one causing this square to commute; i.e.  .     For non-commutative rings, there is a version of the previous remark that remains true: Replace the vertical map on the left in diagram with the map given by where the exponent denotes taking the transpose of a matrix. (If is commutative, we have for all matrices and of an appropriate size, and thus . When is not commutative, it is {} true in general that .)    – Matrix Multiplication is Associative  Let be a commutative ring, let be free -modules having finite bases of size , respectively. Given a matrix and a matrix , let denote the matrix obtained by the usual formula for matrix multiplication, and let , and be the maps associated to these matrices relative to the specified bases, as given in Proposition . Then In particular, matrix multiplication is associative. ###### Proof. For the first assertion we just need to check the two maps agree on for all : We have (with the second equation using that is an -map) and (I have left off the superscripts etc. for the sake of my sanity.) These two expressions agree since is commutative.  The second assertion holds since composition of functions is associative.     The correct version of this for -non commutative is that (again, with superscripts omitted).    Problem  Bases of . 1. Let be a non-zero, commutative ring. Prove that a subset of is a basis of as a module over itself if and only if for some unit of . 2. Let be the ring of column-finite, infinite-by-infinite matrices with entries in a field , as in exercise #3. Prove that for each positive integer , there is a subset of of cardinality that forms as a basis for as a module over itself.    Problem  Bases of ideals in commutative rings 1. Assume is a non-zero, commutative ring and is a non-zero ideal. Prove is free as an -module if and only if for a non-zero-divisor . (Recall that an element is a non-zero-divisor in provided and implies for all . ) 2. Let be a field and . Let , the ideal consisting of all polynomials with constant term. Prove is not free as an -module.    Problem 5 – Maximal Linearly Independent  Let be a commutative integral domain and an -module. Recall that a subset of is called a maximal linearly independent set of if is linearly independent and any subset of properly containing is linearly dependent.   Let be a linearly independent subset of . Prove that is contained in some maximal linearly independent subset of .  Let be a linearly independent subset of and the -submodule of generated by . Prove that is a maximal linearly independent subset if and only if is torsion. (Recall that an -module is called “torsion’’ if for each , there is a such that and .)    Proof .   Part (a)  Let be the set of all linearly independent subsets of that contain . We can order with respect to inclusion. Let be a totally ordered subset of , and let be the union of all elements in . Let be a set of elements in such that for some , where for some . As is the union of all elements in , there exists some such that . However, as is totally ordered, there exists some such that contains and . Continuing in this way, we see that there exists some such that . As is linearly independent, we know that means that for all . Thus is indeed linearly independent, making it an upper bound for . Thus by Zorn’s Lemma there exists a maximal element of , which we denote . Thus is linearly independent, contains , and is maximal.    Part (b)   Suppose is maximal linearly independent, and suppose by way of contradiction that is not torsion. Thus there exists some such that for all , we see that . However, as and , this means that . Consider . This set is linearly independent, contradicting the assumption that was maximal.   Suppose is torsion. Let and consider . Consider . As is torsion, there exists an such that . Thus . (Note, if , then ). As and is generated by ( ), . Subtracting over we see that . But as , we see that each and are in , but the sum is 0. Thus is linearly dependent.      Problem 5 #unfinished  Let be an integral domain and let be an -module. Recall that a subset of is linearly independent if whenever for ring elements and elements , we must have for all . We say is maximally linearly independent if it is linearly independent and it is not properly contained in a linear independent subset of . Finally, recall that we say an -module is torsion if for all for some non-zero .   Suppose is a linearly independent subset of and let be the submodule of generated by . Prove it is maximally linearly independent if and only if is torsion.  Prove that if for every module every maximally independent subset of generates as an -module, then must be a field.        Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-168",
  "level": "2",
  "url": "sec-linear.html#exercise-168",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-169",
  "level": "2",
  "url": "sec-linear.html#exercise-169",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-170",
  "level": "2",
  "url": "sec-linear.html#exercise-170",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-modgen",
  "level": "1",
  "url": "sec-modgen.html",
  "type": "Section",
  "number": "2.2",
  "title": "Generated Modules",
  "body": " Generated Modules     Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-171",
  "level": "2",
  "url": "sec-modgen.html#exercise-171",
  "type": "Exercise",
  "number": "2.2.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-172",
  "level": "2",
  "url": "sec-modgen.html#exercise-172",
  "type": "Exercise",
  "number": "2.2.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-173",
  "level": "2",
  "url": "sec-modgen.html#exercise-173",
  "type": "Exercise",
  "number": "2.2.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-bases",
  "level": "1",
  "url": "sec-bases.html",
  "type": "Section",
  "number": "2.3",
  "title": "Bases",
  "body": " Bases     Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-174",
  "level": "2",
  "url": "sec-bases.html#exercise-174",
  "type": "Exercise",
  "number": "2.3.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-175",
  "level": "2",
  "url": "sec-bases.html#exercise-175",
  "type": "Exercise",
  "number": "2.3.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-176",
  "level": "2",
  "url": "sec-bases.html#exercise-176",
  "type": "Exercise",
  "number": "2.3.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-vecbasis",
  "level": "1",
  "url": "sec-vecbasis.html",
  "type": "Section",
  "number": "3.1",
  "title": "Existence of Bases",
  "body": " Existence of Bases   Bases of Vector Spaces and Dimension   – Span  In keeping with standard convention, we use the term span’’ instead of submodule generated by’’, but they mean exactly the same thing: for a subset of an -vector space , the span of is As with modules over general rings, the span of a subset of a vector space is a sub-vector space (i.e., sub-module).   – Linear Independence and Span  Suppose is a linearly independent subset of an -vector space and [^1], then is also linearly independent.   Proof.  We need to prove that every finite subset of is linearly independent. Let be a list of distinct elements of and suppose for some . If for all , then for all since is linearly independent. Without loss, say . If , then , contrary to the assumption. So we must have . But then for all by the same reasoning as in the first case.      The only place where the fact that the ring of scalars is a field is to know that has a multiplicative inverse when . In particular, the Lemma holds when is a division ring too.    – Finding Intermediate Bases  Let be an -vector space and assume are subsets such that is linearly independent and spans . Then there is a subset such that and is a basis of    Proof.  Let denote the collection of all subsets of such that and is linearly independent. We make into a poset by the order relation , set containment.  We note that .  Let be any totally ordered subset of . If is empty, then is (vacuously) bounded above by .  Assume is non-empty. Let . I claim . Given , for each we have for some . Since is totally ordered, one of contains all the others and hence it contains all the ’s. Since each is linearly independent, this shows are linearly independent. We have shown that every finite subset of is linearly independent, and hence is linearly independent. Since is non-empty, . Since each member of is contained in , . Thus, , and it is clearly an upper bound for .  We may thus apply Zorn’s Lemma to conclude that has at least one maximal element, . I claim is a basis of . Note that is linearly independent and by construction. We need to show that it spans . Suppose not. Since spans , if , then would have to be all of . (For note that if and , then for any we may write for and with and hence , which implies .) Since we are assuming , there must be at least one such that . Set . Clearly, and, by Lemma , is linearly independent. This shows that is an element of that is strictly bigger than , contrary to the maximality of . So, must span and hence it is a basis.     – Every Vector Space has a Basis  Every -vector space has a basis. Moreover, every linearly independent subset of is contained in some basis, and every set of vectors that spans contains some basis.   Proof.  For this first part, apply the theorem with and . For the second and third, use arbitrary and and and arbitrary, respectively.     Problem 6 – Linearly Independent Set Contained in Basis  Let be a field and a vector space (not necessarily finite-dimensional) over . Prove that every linearly independent subset of is contained in a basis for .   Proof .  Let be linearly independent in . Add elements to it until it spans , and denote this new set . Let denote the collection of all subsets of such that and is linearly independent. We make into a poset by the order relation , set containment.  We note that .  Let be any totally ordered subset of . If is empty, then is (vacuously) bounded above by . Assume is non-empty. Let . I claim .  Given , for each we have for some . Since is totally ordered, one of contains all the others and hence it contains all the ’s. Since each is linearly independent, this shows are linearly independent. We have shown that every finite subset of is linearly independent, and hence is linearly independent. Since is non-empty, . Since each member of is contained in , . Thus, , and it is clearly an upper bound for .  We may thus apply Zorn’s Lemma to conclude that has at least one maximal element, . I claim is a basis of .  Note that is linearly independent and by construction. We need to show that it spans . Suppose not. Since spans , if , then would have to be all of . (For note that if and , then for any we may write for and with and hence , which implies .)  Since we are assuming , there must be at least one such that . Set . Clearly, and, by Lemma , is linearly independent. This shows that is an element of that is strictly bigger than , contrary to the maximality of . So, must span and hence it is a basis.  Thus is contained in the basis . #### – has a basis as a -Vector Space has a basis as a -vector space. Just don’t ask me what it looks like.     – Basis of Subspaces Extent  Suppose is a field an is a subspace (i.e., submodule) of the -vector space (i.e., -module) . Then every basis of extends to a basis of – that is, if is a basis of then there exists a basis of such that is a subset of .   Proof.  Just apply the Theorem with and . (Since is a basis of , it is linearly independent, and observe that remains linearly independent when regarded as a subset of .)      It is not true that, with the notation of the previous Corollary, if is a basis of then there exists a basis of such that is a subset of . For instance, take , , and the subspace spanned by .    – Exchange Lemma  Let be a field, let be a basis of an -vector space , and let be any finite set of linearly independent vectors in . Then there are distinct vectors in , such that is also a basis .   Proof.  Let . As noted, the sublemma establishes the case of the Exchange Lemma. The general case proceeds recursively:  Suppose that for some , we have found such that is a basis for some . We need to show we can “swap out one more’’; that is, we need to prove there is a such that is also a basis.  Since is a basis, there is a (unique) equation of the form with and . Now, there must be at least one that is not in , for otherwise we would have , contrary to being linearly independent. Let for such an . Then by the sublemma is a basis of .     – Dimension Theorem  Any two bases of the same vector space have the same dimension.   Proof.  We will only prove this in the case of finite dimensional vector spaces, but it is indeed true in general.  Suppose is a field and is a finite dimensional -vector space. Then it has a finite basis . Let be any other basis. (Note that we cannot assume is necessarily finite.) For any non-negative integer , suppose is any -element subset of . Then is linearly independent and so, by the Exchange Lemma , there is an -element subset of such that is also a basis of . In particular, . Since this holds for all , we conclude . By symmetry, and hence .     – Dimension  The of a vector space , denoted or , is the cardinality of any of its bases. This is the same as the rank of as an -module.    – Dimension of in   [^1]    – SubLemma  Let be a field. Given a basis of an -vector space and vector , let for , and for all , be the unique way of writing as a linear combination of some of the members of using non-zero coefficients. Then for any , we have that is also a basis of .   Proof.  If the sublemma is vacously true since in that case.  For , we may as well assume (to simplify the notation) that . We need to show is linearly independent and spans.  By solving for (as we may since ) we obtain for some and hence . Given any , since spans, we have for some . If one of ’s is equal to , then we may use the previous equation to replace the term with a linear combination of members of . This proves that . So spans .  To show is linearly indepedent, suppose for some and some . If , then we have for some . But this contradicts the uniqueness of (for note that for all ). So we must have . But then we must also have for all since is linearly independent. This proves is linearly independent. This completes the proof of the sublemma.     – SubLemma and  For a visual interpretation of the sublemma, suppose and is its standard basis. Given , if is a non-zero multiple of one of the members of , say for , then is also basis of . If lies one of the coordinate planes but is not on a axis, say for , then both and are bases. If lies on none of the coordinate planes, then for and each of , and is a basis. So, the sublemma is saying that we can swap in for any of the basis elements that occur with a non-zero coefficient in the unique expression of as a linear combination of the basis. (This includes the case when , since no such basis vectors occur.)     This completes the proof that, for a commutative ring with , any two finite bases of a free -module have the same cardinality. (In the proof of this fact given above, we had assumed it held for fields.)     The Exchange Lemma also holds for any division ring (using the exact same proof).    –  Consider , and define rules for addition and scaling degree-wise in the evident way.  It is not hard to see is a -vector space. It can be identified with the collection of all sequences of real numbers. One might be interested in a basis for this vector space. At first glance the most obvious choice would be , where is the sequence with a in the -th position and ’s everywhere else.  However, this set does not span as can not be represented as a finite linear combination of these elements. (It turns out that is the basis for the direct sum , which may be identified with all sequences having only a finite number of non-zero terms.)  Now, since we know since is not in , we have that is a linearly independent set. However, this does not span either as is not in the span of this set. We know that has a basis, but it can be shown that no countable collection of vectors forms a basis for this space, in fact . An explicit basis of this vector space is impossible to describe.    – Dimension and Subspaces  Let be a field and let be a subspace of a finite dimensional -vector space . Then[^1]    Proof.  Pick a basis of . Regarded as a subset of , remains linearly independent and thus it may be extended to a basis of by Corollary . Let us write this basis of as with .  Let . I claim that is a basis of .  Given we have for some and scalars . Since for all , we have . This proves spans. Say for some . Then and hence , whence . Since is linearly independent, and for all . This proves is linearly independent.  We have with the second equality holding since and are disjoint.      Suitably interpreted, this is valid even if is infinite dimensional, as the proof will show.    – Nullspace  Let be a linear transformation. The of is [^1].  The of is [^2].    – Rank Nullity Theorem  Let be a field and an -linear transformation between -vector spaces and , and assume is finite dimensional. Then or equivalently    Proof.  By the first isomorphism theorem for modules we have , thus . By the previous theorem we have       Suitably interpreted, this is valid even if is infinite dimensional.    Problem 9 – Vector Spaces and Complements  Let be a field, an -vector space, and a subspace of . A subspace of is called a complement of in if is the internal direct sum of and ; that is, .   Prove that for every and as above, has at least one complement in .  Prove that if is a complement of in and is finite dimensional, then (where denotes the dimension of an -vector space).    Proof .  Let be a field, an -vector space, and a subspace of .   Part (a)  Let denote the set of all subspaces of such that . We can order with respect to inclusion. Let be a totally ordered subset of , and let be the union of all the elements in . Unions of subspaces are subspaces, and by DeMorgan’s Laws we see that . Thus by Zorn’s Lemma there exists a maximal element of which we denote . So by definition.  Suppose by way of contradiction there exists some such that .  Consider . As , for all , as we could just multiply by . Thus and , a contradiction, as was maximal. Thus is a complement of .    Part (b)  The Second Isomorphism Theorem tells us that . We also know that Put succinctly, and thus As , we see that .      Problem 4 – Integral Domain with Field Subring   Suppose that is an integral domain that contains a field as a subring, and that moreover is finite dimensional as an -vector space. Prove that is a field.  Give an example to show that the finite dimension condition is necessary.    Proof.   Part (a)  Let be an integral domain that contains a field as a subring, and that moreover is finite dimensional as an -vector space.  Say 𝐴 has dimension over . Let . Consider elements which cannot be independent because of the finite dimension. So we may choose so that is linearly dependent over and is as small as possible. This means that we may find , not all equal to , such that . Note that , as this would contradict the minimality of . Then is invertible, so 𝑥 is invertible as well, making a field.    Part (b)  Consider , which contains the subring . However, this is not a finite dimensional vector space over , and is not a field, as has no inverse.      Problem  Let be a field and let and be finite dimensional -vector spaces. 1. Let be an -linear transformation. Prove , where by definition . 2. Let be an -linear transformation from to itself. Prove that if , then . (Note: Recall that, by definition, .) 3. For extra credit: Let be an -linear transformation from to itself. Prove that if for some then .    Problem  Suppose where is a field and for some integer . Prove . {}: Note that for any , . Show that if equality holds then . #### Problem Recall that a -module is called torsion-free if the only element such that for some non-zero integer is the element . Let where is the homomorphism for the matrix . Prove is torsion-free. #### Problem Let be a finite dimensional vector space over a field and an -linear transformation. Prove the following assertions. 1. There exists an integer such that for there are equalities and . (Here denotes composed with itself times.) 2. for any as above. 3. for any s as above. (Recall for subspaces and if and . )    Problem  Let be a field, an -vector space, and a subspace of . A subspace of is called a {} of in if and . 1. Prove that for every and as above, has at least one complement in . 2. Prove that if is a complement of in and is finite dimensional, then . 3. Prove that if is a subspace of with finite dimensional and , then is non-zero.    Problem  Let be the set of all matrices over a field , let denote the group (where, recall, is the group of invertible matrices with entries in ) and set for all and . 1. Prove that the formula above defines a group action. 2. Prove that each orbit contains a matrix such that for all and for all 3. How many orbits are there?    Problem –  Let be a subspace of a vector space . Show that . #### Problem – Let be a field, be an -linear transformation, and . Prove that #### Problem – Let be an -linear transformation. Prove that if , then #### Problem 4 #unfinished Let be a subspace of a finite-dimensional vector space, . Recall that a subspace of is called a complement of if . Prove the following statements.   Every complement of has dimension .  If is not or , then has more than one complement.  If is a subspace of with , then is non-zero.        Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-177",
  "level": "2",
  "url": "sec-vecbasis.html#exercise-177",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-178",
  "level": "2",
  "url": "sec-vecbasis.html#exercise-178",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-179",
  "level": "2",
  "url": "sec-vecbasis.html#exercise-179",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-ranknul",
  "level": "1",
  "url": "sec-ranknul.html",
  "type": "Section",
  "number": "3.2",
  "title": "Rank-Nullity",
  "body": " Rank-Nullity     Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-180",
  "level": "2",
  "url": "sec-ranknul.html#exercise-180",
  "type": "Exercise",
  "number": "3.2.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-181",
  "level": "2",
  "url": "sec-ranknul.html#exercise-181",
  "type": "Exercise",
  "number": "3.2.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-182",
  "level": "2",
  "url": "sec-ranknul.html#exercise-182",
  "type": "Exercise",
  "number": "3.2.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-basics",
  "level": "1",
  "url": "sec-basics.html",
  "type": "Section",
  "number": "4.1",
  "title": "Basics",
  "body": " Basics   Linear Transformations    Recall that when is a field an -module homomorphism is called a -linear transformation. Since every -vector space has a basis, every linear transformation between finite dimensional vector spaces may be represented by a matrix, as we noted before.   – Matrix of Free Module Homomorphism  Let be a non-zero commutative ring and let , be -modules of finite rank and , respectively. (For instance, could be a field and and could be arbitrary finite dimensional vector spaces.) Let and be ordered bases of and . 1. For each , let denote the unique column vector such that . Define for similarly. 2. If is an -module homomorphism then we define elements for and by the formulas Define to be the matrix    – -Vector Space of Polynomials ( )  Let denote the the -vector space of polynomials of degree at most (including the zero polynomial) and consider the linear transformation given by , i.e. taking the derivative. Take for an ordered basis of and for an ordered basis of . Then for we have and We have confirming in this example one of the assertions of the Lemma.  Let be the linear map . Then Note that and as predicted by .    – Identity Automorphism of Free -Module  If is the identity automorphism of an -dimensional free -module , then for any basis of we have for all and hence[^1]     – When FMH Matrix is Invertible  If is an isomorphism of free modules of finite rank, is an ordered basis of and is an ordered basis of , then [^1] is an invertible matrix and        Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-183",
  "level": "2",
  "url": "sec-basics.html#exercise-183",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-184",
  "level": "2",
  "url": "sec-basics.html#exercise-184",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-185",
  "level": "2",
  "url": "sec-basics.html#exercise-185",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-cob",
  "level": "1",
  "url": "sec-cob.html",
  "type": "Section",
  "number": "4.2",
  "title": "Change of Basis",
  "body": " Change of Basis   Change of Basis   – Change of Basis Matrix  Let be a finite rank free module over a commutative ring , and let and be bases of . Let be the identity map on . Then is called the from to     By Proposition, is an invertible matrix and its inverse It follows from that that is, multiplication by really does change the representation of vectors by column vectors from one basis to another.    – CoB Matrix and Standard Free Module  Say , is the standard basis (so is a column vector with a in the -th position and ’s elsewhere). Note that for all .  Let be any other basis of . Then and so the change of basis matrix satisfies, on the one hand, and, on the other hand, That is, is the matrix whose columns are .    – CoB and  Consider , let and be bases of . We calculate the change of basis matrix. We have Thus, the change of basis matrix is given by If we wish to represent in the basis , we start by noting (where recall means to take the transpose) and compute to get . This tells us that     – CoB and Identity  Let be finitely generated free modules over a commutative ring , let and be bases of , let and be bases of , and let be a homomorphism. Then[^1]    Proof.  This is seen to hold by applying twice (since ).     – Equivalent Matrices  Two matrices and are if there exists invertible matrices and (of the appropriate sizes) so that .     With this bit of terminology, we can say that two matrices representing the same linear transformation with respect to a different pair of bases are equivalent. The converse is also true: If two matrices are equivalent, then they represent the same linear transformation with respect to different bases.    – Finding Equivalent Matrices  Let be a field. Given an -linear transformation between finite dimensional -vector spaces and , there are bases and of and , respectively, such that[^1] where [^2] and the ’s denote appropriately sized matrices with all entries.   Proof.  We form and in steps.  Start by picking an ordered basis of the image of . For each pick such that and set . Then pick a basis of the kernel of . Let us list the elements of as .  I claim that is a basis of . (Note that since for all with and for all .) Pick . Then, since spans the image of , we have for some scalars . It follows that and hence, since the kernel is spanned by , we have for some . We rearranging this equation, we conclude and thus spans .  Now say for some ’s in . Since for all and for all , this gives that . Since is linearly independent, we have for . Going back to the original equation   , we see that and hence for all , since is linearly independent.  Finally we extend to an ordered basis of arbitrarily.  By our construction, for any we have and hence Note that, in our construction, .[^3]     – Every Matrix Equivalent to Unique Matrix  Every matrix with entries in a field is equivalent to a unique matrix of the form where is the rank of .   Proof.  Let and and be the linear transformation given by , matrix multiplication. (I have called this map in the past.) If and are the standard basis of and then .  The Theorem gives that there are bases and of and such that So, by Proposition , we have with and . Note that are invertible since they are change of basis matrices (see ).  The uniqueness of follows from the fact that , which does not depend on a choice of bases.     – Finding Unique Equivalent Matrix  Let be a non-zero commutative ring, let be a free -module of dimension , and let be any ordered basis of . If is any matrix with entries in that is invertible (i.e., there is another matrix such that ), then [^1] for a unique basis of .   Proof.  Each of the maps is an isomorphism. (The one on the far right is the inverse of the one on the far left. The middle one is since is a two-sided inverse.) So the composition of all three of these maps, let us call it , is also an isomorphism. It follows that is a basis of . I leave it as an exercise for you to check that .  To show the uniqueness, say , say are ordered bases such that . Then For each we have and so that which gives .     Problem 5 #unfinished  Let F be a field, and finite dimensional -vector spaces, and an -linear transformation.   Prove that there exists bases of and such that the matrix representing with respect to these bases has the form where is the identity matrix and all the ’s denote zero matrices of the appropriate size.  Prove that the number appearing in part (a) is independent of choice of bases; that is, if, for another pair of bases of and , the matrix representing has the form then .    Proof .  Let F be a field, and finite dimensional -vector spaces, and an -linear transformation.   Part (a)  We form and in steps.  Start by picking an ordered basis of the image of . For each pick such that and set . Then pick a basis of the kernel of . Let us list the elements of as .  I claim that is a basis of . (Note that since for all with and for all .) Pick . Then, since spans the image of , we have for some scalars . It follows that and hence, since the kernel is spanned by , we have for some . We rearranging this equation, we conclude and thus spans .  Now say for some ’s in . Since for all and for all , this gives that . Since is linearly independent, we have for . Going back to the original equation   , we see that and hence for all , since is linearly independent.  Finally we extend to an ordered basis of arbitrarily.  By our construction, for any we have and hence          Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-186",
  "level": "2",
  "url": "sec-cob.html#exercise-186",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-187",
  "level": "2",
  "url": "sec-cob.html#exercise-187",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-188",
  "level": "2",
  "url": "sec-cob.html#exercise-188",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-elematix",
  "level": "1",
  "url": "sec-elematix.html",
  "type": "Section",
  "number": "4.3",
  "title": "Elementary Matrices",
  "body": " Elementary Matrices   Elementary Matrices   – Elementary Basis Change Operations  Let be a commutative ring with , let be a free -module of finite rank , and let be an ordered basis for . An on the basis is one of the following three types of operations: 1. (Type I) Replacing by for some and some . 2. (Type II) Replacing by for some and some unit of , 3. (Type III) Swapping the positions of and for some .   – Elementary Row Operations  Let be a commutative ring with . An on a matrix is one of the following three types of operations: 1. (Type I) Adding an element of times a row (column) of to a different row column of . 2. (Type II) Multiplying a row (column) of by a unit of . 3. (Type III) Interchanging two rows (columns) of .    – Elementary Matrix  Let be a commutative ring with . An over is an matrix obtained from by applying a single elementary column operation (or, equivalently, a single elementary column operation). In more detail: 1. (Type I) For and with , let be the type I elementary matrix with ’s on the diagonal, in the position, and everywhere else. 2. (Type II) For and let be the type II elementary matrix with entry , entry for all , and everywhere else. 3. Type III) For with , let be the type III elementary matrix with in the and positions and in the positions for all , and 0 in all other entries.     In particular, the Lemma and the fact that elementary matrices are invertible shows that if is an invertible matrix, then the result of performing elementary row or column operations on results in another invertible matrix.    – Properties of Elementary Matrices  Let be an elementary matrix. - For a free -module with basis such that , is the change of basis matrix , where is the basis obtained from by the corresponding elementary basis change operation. - If , then the product matrix is the result of performing the corresponding elementary column operation on . - If , then the product matrix is the result of performing the corresponding elementary column operation on .     This is true for commutative rings in general, but the proof is much harder.    – Matrix Invertible iff Columns Span  Let be a field and let be an matrix for . is invertible if and only if its columns span .   Proof.   is invertible if and only if the associated linear map given by is an isomorphism. By the rank-nullity Theorem, if and only if if and only if is an isomorphism. The result follows, since and is the span of the columns of .      The previous proof used the following fact implicitly:   If is a subspace of a finite dimensional -vector space (where is a field) and , then .   This holds since any basis of can be extended to a basis of and hence if is properly contained in we must have .  This fact fails for commutative rings in general. For instance, let and . Then and are free of rank one and is a submodule of , but .    – Gauss  Let be a field and let be an invertible matrix for . Then can be transformed to a matrix of the form for some via elementary column and column operations of type I.   Proof.  Proceed by induction on . If , there is nothing to prove (since cannot be the matrix.) Assume and that the result holds for by invertible matrices.  Let . Since is invertible, its column space must have dimension , by the previous Lemma, and in particular none of its columns can be (since otherwise the column space would be spanned by vectors and would thus have dimension at most ). In particular, its second-to-last column has at least one non-zero entry. By either doing nothing or by adding a suitable row to the last row, we can assume . By adding times column to column , we obtain . Next do suitable column operations of type I to arrive at for all , and finally do row operations of type I to also get for all . We have thus transformed to a matrix of the form . Note that this matrix remains invertible (see Remark ) and so the columns of this matrix span by the previous Lemma. Since for all , the columns of must span . Thus is invertible by the previous Lemma. By induction, we can transform via type I row and column operations to a matrix of the form as in the statement. Notice that since the for all and for all , such operations will also put into this form.     – Invertible Matrices and Identity Matrix  If is invertible then it can be transformed into via elementary column and column operations of type I and II.   Proof.  Apply the Theorem and then use a single type II operator; i.e., multiply the first row by .     – Square Matrix Invertible iff of Elementary Matrices  If is a field, then a square matrix is invertible if and only if it is a product of elementary matrices.   Proof.  ( ) Every elementary matrix is invertible and a product of invertible matrices is again invertible.  ( ) If is invertible, then by the previous Corollary and Lemma there exists elementary matrices , of type I or II such that and hence . This proves the statement since the inverse of an elementary matrix is an elementary matrix.     – Matrices Equivalent iff Path with Operations  Given two matrices and with entries in a field, and are equivalent if and only if each can be transformed to the other via elementary column and column operations.     For a ring , recall that is the group of invertible matrices with entries in . Let be the subset of consisting of all products of elementary matrices of type I. Since the inverse of an elementary matrix of type I is again an elementary matrix of type I, is a subgroup of . In fact it is a normal subgroup, at least when , and hence the quotient group is defined in this case.  As a consequence of the Theorem above, if is a field then there is an isomorphism of groups where is the group of units in .  For a general ring, the extent to which is “larger’’ than measure the extent to which Theorem fails.  The algebraic -group is defined to be (and it is usually isomorphic to for ). Moreover, is the derived subgroup of , and hence is the abelianization of .    Problem 9 #unfinished  Let be a square matrix over the field of complex numbers.   Suppose is invertible. Prove that there is a square matrix over such that . (Hint: Reduce to the case that where is the identity matrix and is a nilpotent matrix.)  Show by example that (a) can fail if is not assumed to be invertible.        Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-189",
  "level": "2",
  "url": "sec-elematix.html#exercise-189",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-190",
  "level": "2",
  "url": "sec-elematix.html#exercise-190",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-191",
  "level": "2",
  "url": "sec-elematix.html#exercise-191",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-operator",
  "level": "1",
  "url": "sec-operator.html",
  "type": "Section",
  "number": "4.4",
  "title": "Linear Operators on Free Modules",
  "body": " Linear Operators on Free Modules   Linear Operators on Free Modules   – Linear Operator  By a (or -linear operator) on we mean an -module endomorphism of .    Let be a commutative ring (with ) and assume is a free -module of finite rank . Upon choosing an ordered basis of , we may represent as a matrix — a key point here is that for operators we usually use the same basis for both the source and target of the map.    – Representing Bases  Here is a concrete example. Let , the collection of polynomials in with coefficients in of degree at most . Let be the map sending a polynomial to its derivative. The most obvious choice for a bases of is . With respect to this basis, the map is represented by the matrix   If, when , we instead used as a basis, then the matrix for would be      Say is the square matrix representing with respect to . If is another basis of and is the matrix representing with respect to (used for both the source and target of the map), then we have where is the change of basis matrix. This holds since     – Similar Matrices  Two matrices and with entries in a commutative ring are called if for some invertible matrix .     It is easy to decide if two matrices with entries in a field are equivalent — just row reduce them to see if they have the same rank.  But it is in general quite difficult to decide if two square matrices with entries in a field are similar. The operation can in principle be broken down into a sequence of steps by factoring into elementary matrices. That is, two square matrices and of the same size are similar if and only if one can be obtained from the other by a sequence of operations of the form where is an elementary matrix.  But such a stap amounts to doing a row operation and simultaneously doing the inverse column operation. There is no simple algorithm, such as Gaussian reduction, to determine whether matrices are similar.    – Linear Operators and Bases  Let be a non-zero commutative ring. Given a linear operator on a free -module of finite rank , we have: 1. The matrices representing with respect to any two choices of bases of are similar 2. If represents with respect to a basis of and if is similar to , then there is a basis of such that the matrix representing with respect to is .   Proof.  We proved the first assertion above.  Say and for some invertible matrix . By Proposition above, for a (unique) new basis . So .     Problem 5 – Eigenvalues and Linear Maps  Suppose that is a linear map, where is a finite dimensional -vector space. Fix a polynomial [^1].   Prove that if is an eigenvalue of then is an eigenvalue of .  Prove conversely that if is an eigenvalue of then there exists an eigenvalue of such that .    Proof .   Part (a)  Let be an eigenvalue of . Thus there exists some such that . Notice that and . Then making an eigenvalue of .    Part (b)  First note that if is a scalar of the identity matrix then its only eigenvalue is . Let be an eigenvalue of . Thus for some . As is algebraically closed we can factor the polynomial into linear terms: for roots . Note that for all . Observe Thus one of these terms must be sent to zero. Note that if for any this would make a scaler of the identity matrix. Thus there exists some such that , making an eigenvalue of . Notice that as we have , completing the proof.      Problem  Let be a field and consider a monic polynomial in with . 1. Show that the principal ideal is a subspace of the -vector space . 2. Show that the set , where , is a basis for the quotient -vector space . 3. Consider the linear transformation defined by for any . Find the matrix representing in the basis from part b).    Problem  Let be a field, let and be vector spaces over , let and be linear transformations and let and be the -modules they determine. 1. Show that a function is an -module homomorphism if and only if 1. is a linear transformation and 2. . 2. Suppose that , and let be the matrices representing the linear transformations and , respectively, in the standard basis of . Show that there is an -module isomorphism if and only if the matrices and are similar.    Problem  Determine, with justification, if the following two matrices with complex entries are similar.  $$A = \\begin{bmatrix} 0 & -4 & 0 & 0 \\\\ 1 & 4 & 0 & 0 \\\\ 0 & 0 & 0 & -4 \\\\ 0 & 0 & 1 & 4 \\end{bmatrix} \\textrm{ and } B = \\begin{bmatrix} 2 & 0 & 0 & 0 \\\\ 0 & 2 & 0 & 0 \\\\ 0 & 0 & 2 & 0 \\\\ 0 & 0 & 1 & 2 \\end{bmatrix}.$$       Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-192",
  "level": "2",
  "url": "sec-operator.html#exercise-192",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-193",
  "level": "2",
  "url": "sec-operator.html#exercise-193",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-194",
  "level": "2",
  "url": "sec-operator.html#exercise-194",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-det",
  "level": "1",
  "url": "sec-det.html",
  "type": "Section",
  "number": "4.5",
  "title": "Determinants",
  "body": " Determinants   Determinants   – Multilinear and Alternating  For any commutative ring and -module , given a function of the form we say: 1. is - if, for each , we have and for all elements in and all . 2. is alternating if if for some .   – Multilinear Maps when  When , a multi-linear map is the same thing as an -module homomorphism.(The alternating condition is vacuous in this case.)    – -Bilinear Maps ( )  When , instead of -multilinear’’ we say -bilinear’ . If is -bilinear then Also . For any example of this, take . Then the “dot product ’ defined by is -bilinear. But the dot product isn’t alternating.    – Determinant Formula Using Bilinear Map  For and , defined by is both -bilinear and alternating. This is of course the familiar determinant formula.     The multi-linearity property of a function can equivalently be stated as follows: If we fixed of the inputs and let the remaining input vary, then the resulting function is an -module homomorphism. More precisely: is -multi-linear if and only if for each and for each choice of elements in , the function defined by is a -module homomorphism.    – Multilinear Maps and Permutations  Assume is -multilinear and alternating. Then for any permutation and , we have where is the sign of the permutation .   Proof.  Let us first prove this in the case when and is the only non-trivial element of . Say is -multi-linear ( -bilinear) and alternating. The goal is to prove for any .  We have on the one hand and on the other hand. It follows that which proves the Lemma in this case.  Now let be arbitrary and for some . In this case we need to show for all . Fix elements and define by for any . With this notation the goal is to show Since is -multi-linear and alternating, is -bilinear and alternating, and so the case already proven gives the result.  Finally let and be arbitrary. Then is a product of transpositions — say with each a transposition. Proceed by induction on . The previous case establishes the result when . If , then using the previous case gives where and by induction . Hence which proves the result.     – Determinant Function  Define the function by where is the group of all permutations of and refers to the sign of a permutation.    – Determinant when  For we have[^1]     – Determinant of Upper Triangular Matrix  If is upper triangular, then [^1]. For note that for such a matrix the only non-zero terms in the formula for occur when for all , and this can only happen when . Similarly, if is lower triangular, then .  In particular, if is a Type I elementary matrix, then and if is a type II elementary matrix with scalar , then . We’ll look at the determinants of Type III elementary matrices later.  An even more special case is .    – Transpose Preserves Det  Prove [^1] where denotes transpose.     Let us write elements of as -tuples of columns vectors; that is, we identify with by identifying a matrix with the -tuple of its columns. Then is a function of the form where for , we let be the determinant of the matrix whose columns are .    – Uniqueness of Determinant  For each fix positive integer and non-zero commutative ring , the determinant function is the unique function of the form such that 1. is -multilinear, 2. is alternating, and 3. (i.e., where is the -th standard column vector).   Proof.  We start by proving that has these properties.  Let form the columns of a matrix . (I.e, the -th entry of is .) We have and this proves -multi-linearity.  For the alternating property, for notational simplicity, let us assume that (i.e., the first two columns of the matrix are equal). (The proof of the general case is essentially the same.) Note that where the sum ranges over triples where and is an injective function from to and by we mean the sign of the permutation sending to , to and to for all other . For each , we have , since the corresponding permutations differ by a transposition. Since and , it follows that the terms in the formula for cancel in pairs to give .  The property follows from the formula. (See Example .)  Let us now prove the uniqueness part of the Theorem:  Let be any function with the three properties stated in the Theorem. Let be any square matrix with columns . Note that where is the -th standard basis (column) vector. Using the -multi-linearity property repeatedly we have where each of ranges from to . By the alternating property unless all the are distinct. If they are distinct, then by Lemma we have where is the permutation defined as . Finally, recall by assumption. Putting all of this together gives This is just a re-writing of the formula for ; so .     – Computing Determinant of Square Matrix  Let be any non-zero commutative ring. Let be a square matrix and let be a matrix obtained form by a single elementary column operation: #fix 1. If the operation is of type I, [^1]. 2. If the operation is of type II, given by multiplying a column of by a unit , then . 3. If the operation is of type III, .   Proof.  The first claim follows from multi-linearity and alternating properties: For notational simplicity say and . Then The second is immediate from (the second part of) -multi-linearity. The last is a special case of Lemma .      The previous Lemma gives an efficient method of computing the determinant of a square matrix: Apply Gaussian reduction to transform such a matrix to , keeping track of the operations used. Since , we can deduce what the is in this way, using the Lemma.  The number of type I (and type II) operations needed to transform to is at most about Each operation involves at most at most multiplications and additions. All total, the number of operations needed to compute the determinant of an matrix is a polynomial function of (I think it is cubic, in fact). Observe that the determinant formula involves terms each with products, which is certainly exponential in .  Thus, Gaussian elimination, among other things, gives a polynomial time solution to a computation that at first blush involves an exponential number of calculations.  The “permanant’’ of a square matrix is given by the same formula but without the signs. It too involves an exponential (in ) number of calculations. Unlike the determinant, there is no known polynomial time algorithm to compute it. Indeed, if one exists then ! This is a Theorem of Leslie Valiant.    – Det Splits Across Elementary Multiplication  For any commutative ring , if is an matrix and is an elementary matrix, then[^1]    Proof.  This follows from the Proposition and the fact that is the result of doing the corresponding column operation on (see Lemma ), since These formulas follow from the formula for the determinant of an upper or lower triangular matrix — see Example .     – Det not iff Matrix Invertible  For a field, we have [^1] if and only if is invertible.   Proof.  If is not invertible, then the column space of is a proper subspace of and hence the columns of must be linearly dependent. Say the column is a linear combination of the rest: . Then If is invertible, then by Corollary can be obtained from via a sequence of elementary column operations. The result thus follows from Proposition and the fact that .      For an arbitrary commutative ring , the rule is: a square matrix is invertible if and only if is a unit of . We’ll give a proof later.    – Det Splits Across Multiplication: Fields  For a field and matrices we have[^1] ###### Proof. If is not invertible, neither is , since , and if is not invertible, neither is is , since . So, by Corollary , if either or is not invertible, both sides of the equation are .  Assume now that and are both invertible. Then by Corollary we have and and hence where the ’s and ’s are elementary matrices. Applying Corollary repeatedly gives and similarly     – Det Function is Natural  The determinant function is “natural’’: If is a homomorphism of non-zero commutative rings and , then where denotes the matrix obtained by applying to the entries of .   Proof.  This follows from the formula for , since commutes with sums and products.     – Det Splits Across Multiplication: Commutative Ring  For any non-zero commutative ring and matrices , we have[^1]    Proof.  We have already proven that this holds when is a field.  We next show that it holds whenever is an integral domain. In this case, is a subring of a field (namely, the field of fractions of ). So, we know that the equation holds in if we interpret and as belonging to . But the value of is the same if we interpret these matrices as having entries in or in . So holds in .  We finally prove that the Theorem for any non-zero commutative ring by building on the fact that it holds for domains. We do so by contructing a ring homomorphism and matrices and in such that is an integral domain, and . Granting such a and exist, the result follows from the naturality of (Lemma ). In detail, we know , since is a domain. Since the rule for multiplying matrices involves only sums and products of ring elements, we have . So It remains to prove such a , , and exists. Suppose and . Form the polynomial ring of variables with -coefficients. By the UMP for polynomial rings with integer coefficients, since is commutative, there is a (unique) ring map such that and for all . That is, is the evaluation map given by setting and for all , and interpreting integers as elements of . Let be the evident matrices of indeterminants.Then is a domain, is a ring homomorphism, and , as desired.      Another way to deduce the Theorem for arbitrary commutative rings from the case of a domain is to use the following fact: If is a non-zero commutative ring, there there exists a surjective ring homomorphism of the form where is a domain. So see this, let be a (possibly very large) set of indeterminants such that there is a bijection of sets . Let , the polynomial ring with integer coefficients in the variables . So, a typical element of is a polynomial the form for some finite subset of . By the UMP for polynomial rings, there is a unique ring map such that for all . That is, sends as above to . The ring map is clearly onto since for each , there is an with and hence . Finally, is an integral domain.     The key idea in the proof of the Theorem can be used to deduce many other identities over commutative rings from known identities over fields. E.g., it can be used to show that holds for any commutative ring and for any , where is the “adjugate’’ of , granting that this equation holds when is a field. Recall is the matrix whose entry is where is the matrix obtained by deleting the -th column and -th row of . I will likely have you do this as an exercise.  Granting holds for any non-zero commutative ring we can prove the following:    Problem – Determinantal Technique  Let be a non-zero commutative ring and . Let denote the classical adjugate of — the entry of is defined to be where is matrix obtained by deleting the -th row and -th column of . You may assume without proof that when is a field, we have . Prove holds for any non-zero commutative ring .    – Matrix Invertible iff Det is a Unit  For any non-zero commutative ring and any , is invertible if and only if [^1] is a unit of .   Proof.  If is invertible then by the Theorem, and hence is a unit.  If is a unit, then, using the equation above, we have which proves has a two-sided inverse (namely, ).     – Determinant  Let be a commutative ring and a free -module of finite rank. Given an endomorphism , we define its to be[^1] where is any basis of .    – Det Independent of Basis Choice  The definition of is independent of choice of .   Proof.  If is another basis, then for an invertible matrix (specifically, ). Then using the Theorem. Also by the Theorem .     – Companion Matrix  Let where is a field, with a monic polynomial. Say . Recall that every element of is uniquely represented by a coset of the form where is a polynomial of degree at most .  We will regard as an -vector space (via restriction of scalars along ). Then is finite dimensional — for instance, a basis of is given by .  Let be the function given as multiplication by . Then is an -linear operator, since and . (In fact, is -linear, but we won’t use that fact.) Relative to the ordered basis , the matrix of is The right-most column is due to the fact that, since in , we have The matrix is known as the of } – it is defined for any monic polynomials with entries in a field.  We have , since the only permutation that gives a non-zero term in the formula for is the -cycle , and its has sign is . So .     As we showed above, the determinant of linear operator on a free module of finite rank is an “invariant’’ of the operator, in the sense that it is independent of how we represent the operator as a matrix. Here is another such invariant:    – Trace  For a commutative ring and a square matrix , the of , written , is the sum of its diagonal entries: .  If is a free -module of finite rank and is an -module homomorphism, we define to be [^1] for any basis .    – Trace is Commutative with Two Matrices  If is a commutative ring and and , then [^1].  In particular, with the notation of the previous definition, is well-defined.   Proof.  The entry of is and so . The entry of is and so . Since is commutative, these are equal.  Say and are two bases of . Then for some invertible matrix (namely, ). Using the first part of the Lemma we have       The Lemma tells us that the trace of a product of two matrices in either order is the same, but it does not follow that the trace is unchanged if you permute arbitrarily a product of three of more matrices. For instance, is usually not equal to .  It is true that trace is invariant under all “cyclic permutations’’ of products of matrices. For instance, and more generally we have for all .    – Trace and Multiplication by  With the notation of Example , .[^1]    – Det and Trace of and Linear Operator  Let denote the complex numbers. We may regard as an -vector space. Given , multiplication by on is an -linear operator. What are the determinant and trace of this operator?  Relative to the basis of as a real vector space, multiplication by is represented by the matrix and hence the determinant of this operator is , the square of the norm of . The trace is . Note that the determinant of this operator is the square of the usual complex norm.    – Matrix of Field Extension  Similarly, we may consider the field extension . For any in the larger field, define to be multiplication by . Then is a -vector space and is a -linear operator. A -basis of is given by and relative to this basis the matrix representing is and hence , once again the square of the of usual complex norm of the element .    – Characteristic Polynomial  Let where is a field. The of is[^1] Note that is a monic polynomial of degree with coefficients in . More generally, if is a finite dimensional -vector space and is an -linear operator on , then where is the matrix representing with respect to a choice of basis of .     We should pause to check that is well-defined: Say and are two ordered bases of , so that and both represent . Then for some invertible matrix and hence since the scalar matrix commutes with all matrices. That is, and are similar matrices (with entries in ), and it follows that .  The following two exercises show that the characteristic polynomial captures both the determinant and the trace of an operator:    –  Show [^1].    – CharPoly and Trace  Show that if [^1], then the coefficient of in [^2] is [^3].    – Triangular Matrix and CharPoly  If is upper or lower triangular, then [^1]. As you may recall from an undergraduate class, in this case are the eigenvalues of . More on this later.    Problem  Let be the -vector space consisting of polynomials in the variable of degree at most and let be the -linear operator given by where and denote the first and second derivatives of . (You may take it on faith that is -linear.) Find the determinant, the trace, and the characteristic polynomial of .    Problem  Let be a field and with for some monic polynomial . Regard as an -vector space (via restriction of scalars along ), and recall that the function given by is an -linear operator on .  Prove that the characteristic polynomial of is .    Problem 8 #unfinished  The trace of a square matrix , denoted , is the sum of its diagonal entries. Prove the following assertions.    for any matrices .  Use (a) to prove that the trace of a matrix over is the sum of its eigenvalues (with multiplicities).    Proof.   Part (a)  Let be matrices.    Part (b)  Let be a matrix in . Eigenvalues are the roots of , which is the determinant of the matrix . Every matrix is similar to a matrix in Rational Canonical Form, and similar matrices share invariant factors and thus characteristic polynomials, the roots of which are the eigenvalues of the matrix.         Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-195",
  "level": "2",
  "url": "sec-det.html#exercise-195",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-196",
  "level": "2",
  "url": "sec-det.html#exercise-196",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-197",
  "level": "2",
  "url": "sec-det.html#exercise-197",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-modpres",
  "level": "1",
  "url": "sec-modpres.html",
  "type": "Section",
  "number": "5.1",
  "title": "Finitely Presented Modules",
  "body": " Finitely Presented Modules   Module Presentations    You have seen presentations for groups in the past; these consisted of a set of generators and a set of relations among these generators. Presentations are important for modules as well. In the case of modules, the relations may be encoded by a matrix.   – Presentation ( -Module)  Let be a non-zero commutative ring, let , and let be the -module homomorphism represented by with respect to the standard bases; that is, define . The -  is the -module .  Equivalently, the module presented by is where are the columns of .    – -Module Presentation  What -module is presented by Formally, is the quotient module , where is defined by . Since is generated by its standard basis elements , it follows that is generated by the cosets of the . To keep the notation short, we set .  Let and note that is the submodule of generated by the columns of , i.e.  Since maps to under the quotient map , we have that the relations of can be written as We can now see that this is a rather inefficient presentation, since we can clearly use the first equation to solve for for . This implies that can be generated using only and that is This eliminates the first equation, and by substituting the latter two relations become Now we can also eliminate , i.e leaving just two generators that satisfy Let us notice that what we have really done is to perform certain transformations of the matrix . In detail, we can use elementary row operations to “make zeros’’ on the 1st and 2nd columns as follows: Eliminating the generators and amounts to dropping the first two columns (which are the 3rd and 4th standard basis vectors) as well as the last two rows. As we will prove soon, this shows that the -module presented by is isomorphic to the -module presented by We can go further. Set . Then and also form a generating set of . The relation on translates to given by the matrix Note that we have done a row operation (subtract twice row 1 from row 2) to get from to . Continuing in this fashion by subtracting 12 row 2 from row 1 we also form The last matrix presents the module with generators  ) and relation . As we will see, this proves .    – Matrices, Modules, and Isomorphisms  Let be a non-zero commutative ring and let and for some . Then and present isomorphic -modules if can be obtained from by any finite sequence of operations of the following form: 1. an elementary column operation, 2. an elementary column operation, 3. deletion of the -th column and -th row of a matrix whose -th column is the vector , 4. the reverse of (3), 5. deletion of a column of all ’s, 6. the reverse of (5).   Proof.  Note: This proof was not covered in class. Assume is obtained from by a single one of the steps listed above. We need to prove that there is an isomorphism of -modules. 1. In this case, for some elementary matrix . More generally, let be any invertible matrix such that . Then is an isomorphism and it maps bijectively onto . It follows that the kernel of the composition is and hence by the first isomorphism theorem it induces an isomorphism 2. In this case, for some elementary matrix . More generally, assume is any invertible matrix such that . Since is an isomorphism, we have and so . (For this one we get equality, not merely an isomorphism.) 3. For notational simplicity, let us assume ; that is, the first column of is and is obtained by deleting the first row and column of , giving a matrix. So where denotes some row vector and denotes a column of all ’s. Let and be projection onto the last and components, respectively. Because of the nature of and , the diagram (page 40 in notes) commutes. Moreover, the kernel of is and the kernel of is , and since the first column of is , maps the kernel of bijectively onto the kernel of . A “diagram chase’’ shows that . In detail: Since the diagram commutes, and hence induces an -module homomorphism (by the -th isomorphism theorem). Since is onto, so is . Suppose . So, . Say . Since is onto, for some . Then and thus . As noted above, maps onto and hence for some vector . This proves and hence that in . This proves is one-to-one. 4. It is clear that the columns of generate the same submodule of as do the columns of , and thus and . 5. Since the isomorphism relation is reflexive, the statements of parts 3. & 5. show that parts 4.& 6. are true as well.      The converse is true for some rings , including Euclidean domains.     In fact, if and are equivalent matrices, then , as I shall prove below. This implies both (1) and (2) from the Theorem.    – Diagonal Presentation  Suppose is a commutative ring and is a matrix such that for all and set for all . If then and if then    Proof.  Assume and define to be the map sending to where for . (I.e., is the unique -map sending the -th standard basis vector to with in the -th position, for , and to itself for .) Then is clearly onto and the kernel of is the set of those tuples such that for some for all and for . Given such a tuple, This proves is contained Arguing backwards we see that the opposite containment also holds, so that in fact .  By the First Isomorphism Theorem, If then, by deleting columns of all ’s, we may reduce to the case when , which is included in the first case.        Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-198",
  "level": "2",
  "url": "sec-modpres.html#exercise-198",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-199",
  "level": "2",
  "url": "sec-modpres.html#exercise-199",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-200",
  "level": "2",
  "url": "sec-modpres.html#exercise-200",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-snf",
  "level": "1",
  "url": "sec-snf.html",
  "type": "Section",
  "number": "5.2",
  "title": "Smith Normal Form",
  "body": " Smith Normal Form   Smith Normal Form   – Smith Normal Form  Let be a Euclidean domain and let . Then there is a sequence of elementary column and column operations that transform into a matrix such that all non-diagonal entries of are and the diagonal entries of satisfy ###### Proof. The main point of the proof is to establish:  {}: There is a sequence of row and column operations that transforms to for some matrix and where . (We adopt the convention that if is the matrix of all ’s, then .) Note that, by Lemma , we have and thus .  Granting this claim, by applying it again to we arrive at a matrix of the form where and and . (Observe that the row and column operations on will not affect the first row and column of .) Continuing in this fashion, we arrive at the matrix in the statement.  To prove the claim, let be the upper-left entry of .  Suppose happens to be . Then, in particular, it divides every entry of the first row and column of , and so by doing row and column operations of type I, we may out these entries to arrive at a matrix of the desired form directly.  In general, let to be the number of prime factors in a prime factorization of of , and proceed by induction on .  If , then (up to associates), and we already did this case.  Assume . Then there is at least one entry such that .  Case I: There is such a belonging to the first row of . In this case we we may implement the Euclidean algorithm in the form of suitable column operations to replace by and by , as in the example above. Since , is a proper divisor of , and it follows that the number of factors in a prime factorization of is smaller than , and we are done by induction.  Case II: There is such a in the first column. Just as in the previous case, we are done by induction upon implementing the Euclidean algorithm using suitable row operations.  Case III: divides every entry of the first row and first column. In this case, suitable row and column operations transform to By Lemma we have , and thus there is some element of such that (since we are assuming is not the gcd of ). A suitable row operation puts into row one without affecting , and we are back to the previously solved Case I.    Note that some of the diagonal entries could be . Recall for all (including ), and is the only element that divides . So, the “tail’’ end of the sequence could be all ’s, and indeed if for some then all subsequent diagonal entries must be .    – FTFPMED: First Version  If is a Euclidean domain and is a finitely presented -module, then is isomorphic to a direct sum of cyclic modules: for some and some non-zero, non-invertible elements such that .   Proof.  This is an immediate consequence of the SNF Theorem, Theorem parts (1) and (2), and Lemma .     – Special Case of SNF  Suppose is a Euclidean domain and is a matrix. Column operations of type I in this case amount to adding a multiple of one element in this list to another one. The SNF Theorem in this case amounts to the Euclidean algorithm: By adding a suitable multiple of the one entry in the first two positions to the other, in the usual back-and-forth way, we arrive at where . Repeat this for columns and to arrive at where . Continuing in this fashion we arrive at where .  The proof of the SNF Theorem in general amounts to an extended version of the idea used in this special case.    – Finding SNF  Consider the matrix with entries in  Do row and column operations to put into its Smith Normal Form: Conclude that the module presented by is isomorphic to .     A version of the SNF Theorem and its Corollary are valid for PIDs: If is a PID and , there there exist invertible matrices and such that has the form as in the theorem. It follows that every finitely presented module over a PID is direct sum of cyclic ones.  For Euclidean domains, and may be taken to be products of elementary matrices, and the Smith normal form can be found algorithmically.    – GCD of a Matrix in PID  Suppose is a PID and is a matrix with entries in and is a matrix obtained from via elementary column and column operations. Then where the gcd of a matrix is defined to be the gcd of all of its entries.    – Minor  A  of is the determinant of a submatrix of ; more formally, if is an matrix, a minor of is any element of given as follows: Choose and , let be the matrix with . Then [^1] is a minor of .    – Ideals Generated by Minors  For any commutative ring and matrix , if is obtained from via an elementary column or column operation, then the ideal of generated by all the minors of equals the ideal of generated by all the minors of .    – Smith Normal Form is Unique  Assume is a PID and . Suppose can be obtained from via a sequence of elementary column and column operations and that is diagonal with diagonal entries such that . Then In particular, the SNF of a matrix is unique up to associates.   Proof.  Recall that for a PID , the gcd of any set of elements is defined to be a generatpr of the ideal they generate. So, Lemma implies that for all . Since is diagonal, the only non-zero minors of are those given by indices and for which for all , and moreover such a minor is equal to . Since for all , it follows that divides for all . Thus , for each , and hence as claimed.      So, another way of finding the SNF of a matrix with entries in a Euclidean domain is to calculate for all . This is not practical except in very special cases.    Problem  Let . Express the -module presented by as the direct sum of cyclic groups. Justify your answer.    Problem  Let and , regarded as matrices with entries in . 1. Express the cokernel of (i.e., ) in elementary divisor form (that is, as a direct sum of cyclic groups each of which is either infinite or of prime power order). 2. Express the cokernel of in elementary divisor form.    Problem –  Consider the matrix Determine the simplest representative in the isomorphism class of the -module presented by .       Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-201",
  "level": "2",
  "url": "sec-snf.html#exercise-201",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-202",
  "level": "2",
  "url": "sec-snf.html#exercise-202",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-203",
  "level": "2",
  "url": "sec-snf.html#exercise-203",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-noeth",
  "level": "1",
  "url": "sec-noeth.html",
  "type": "Section",
  "number": "5.3",
  "title": "noeth",
  "body": " noeth   Commutative Noetherian Rings    We now address the question of which modules have finite presentations. It is clear than any such module must be finitely generated (since the cosets of generate for any matrix ). If is finitely generated, say by elements, then we can find a surjective -module homomorphism Provided the kernel of is also finitely generated, say by elements, then we may find a surjection The composition is a map between free -modules and is thus equal to for some matrix . Clearly and hence by the first isomorphism theorem so that is finitely presented.  So the real question is: For a given ring , is it the case that for all , every submodule of is finitely generated? The answer is “no’’ in general, but it does hold for many rings of interest:   – Ascending Chain Condition  A commutative ring has the (on ideals) if given any chain of ideals in of the form there is an such that     – Noetherian Rings  Suppose is a commutative ring. The following conditions are equivalent: 1. has the ascending chain condition on ideals. 2. Every ideal of is finitely generated — i.e., for every ideal , there exists a finite set of elements in such that . In this case we say is Noetherian .   Proof.  Assume every ideal is finitely generated and that such a chain is given. Let . Then it is easy to see that is an ideal. (In detail, for we have for some and hence .  If , then and for some and hence there is a such that . It follows that . Finally .) Thus by assumption is finitely generated, say for some .  Each belongs to one of the ’s and hence, since there are only a finite number of such elements and ideas are nested, there is an such that . It follows that and hence .  Assume has the acc for ideals and let be any ideal. Pick any element and set . If we are done. If not, pick and set . If we are done and if not pick and let . In this way we form a strictly ascending chain , and this process cannot be continued forever since has the acc. When it terminates, we have for some and thus is finitely generated.     – Hilbert’s Basis Theorem  If is a noetherian ring, then the polynomial rings and are noetherian for any .   Proof.  We will give the proof for polynomial rings, and at the end we will indicate what the difference is in the argument for the power series ring case. First, note that by induction on , we can reduce to the case .  Given an ideal , consider the set of leading coefficients of all polynomials in , By the Hilbert Basis Lemma, we see that this is an ideal of . Since is noetherian, is finitely generated[^2], so let . Pick such that the leading coefficient of is , and set .  Let . The leading coefficient of is an -linear combination of . If has degree greater than , then we can cancel off the leading term of by subtracting a suitable combination of the . Therefore, any can be written as for some and with degree at most . In particular, note that Since is a submodule of the finitely generated free -module , it must also be finitely generated as an -module[^3]. Given such a generating set, say , we can write any element as an -linear combination of these generators and the original . Therefore, is finitely generated as an ideal in , and is a noetherian ring.  In the power series case, take to be the set of coefficients of lowest degree terms.     – Submodules of f.g. Modules are f.g. when Noetherian  If is a noetherian commutative ring, then every submodule of a finitely generated module is again finitely generated.   Proof.  I will just prove the following special case (since it is all we need): For each , every submodule of is finitely generated. The base case holds by definition (and Lemma ), since a submodule of is the same thing as an ideal.  Assume and the result holds for . Let be any submodule of . Define to be the projection onto the last component of . The kernel of may be identified with and so is a submodule of , and it is therefore finitely generated by assumption. The image of under is a submodule of , that is, an ideal of , and so it too is finitely generated by assumption (and Lemma ).  Furthermore, by the first isomorphism theorem is also finitely generated. By a homework problem, we deduce that is a finitely generated module.  % I’ll just sketch the general case (which I don’t think we’ll actually need): let be any finitely generated -module and any submodule. % Since is finitely generated, there exists a surjective -module homomorphism for some . Then is a submodule of and % hence it is finitely generated by the case we already proved. Moreover, induces a surjective -module homomorphism , % and hence is isomorphic to a quotient of a finitely generated -module and thus it is also finitely generated.      The converse is also true: If is not Noetherian, there there exists an ideal that is not finitely generated (by the Lemma). This gives an example of a non-finitely-generated submodule, namely , of a finitely generated module, namely .    – F.G. Modules Finitely Presented when Noetherian  Any finitely generated module over a noetherian ring has a finite presentation; that is, given such a module over such a ring, there exists an matrix in and an isomorphism    Proof.  We basically already proved this, but let me recap it:  If is finitely generated, then for some we can find a surjective -module homomorphism Since we assume is Noetherian, the kernel of is also finitely generated by the Proposition, and so we may find a surjection of -modules for some . The composition is equal to for some matrix . Since , the first isomorphism theorem gives an isomorphism      Problem –  Let be a commutative ring and an ideal of . Show that if is noetherian then is also noetherian.     "
},
{
  "id": "sec-modclass",
  "level": "1",
  "url": "sec-modclass.html",
  "type": "Section",
  "number": "5.4",
  "title": "Classifications",
  "body": " Classifications   Classification of Finitely Generated Modules over PIDs   – FTFGMOPIDIFF  Fundamental Theorem of finitely generated modules over a PID, invariant factors form Let be a PID and let be a finitely generated module. Then there exist integers , and non-zero, non-unit elements of satisfying [^1] such that Moreover and are uniquely determined by , and the ’s are unique up to associates.   – Invariant Factors  The polynomials occurring in the Theorem are called the {} of the operator .    – FTFGMOPRIFF  Let be a field and be the ring of polynomials with coefficients in in one variable . If a finitely generated -module then for some , and non-constant monic polynomials such that Moreover, , and are unique.   Proof.  This follows from the Theorem since is a Euclidean domain and every non-zero polynomial is associate to a unique monic one.     – -Modules of Dimension  Let be a field and a -module such that the dimension of as a -vector space is What are the possibilities for up to isomorphism?  We have with as in the Corollary. But must be since is infinite dimensional as a -vector space. Moreover, for any non-zero polynomial . So we must have . There are five possibilities: 1. and is monic of degree . 2. , is linear, is cubic and . (So if , then must be a root of ). 3. , is quadratic. 4. , is linear and is quadratic with . 5. , is linear. Now suppose . What is the total number of possibilities? For case , there are monic polynomial of degree . For case , there are choices for and choices for since for a unique quadratic , for a total of possibilities. For case there are choices. For case there are choices since there are choices for and for a unique linear . For case , there are choices for . In total there are such modules up to isomorphism.    – Sunzi’s Remainder Theorem (Rings)  Suppose and are ideals in a commutative ring such that . Then (where is defined as the set of all sums of products of the form with and ) and there is an isomorphism of -modules In particular, if is a UFD and and are relatively prime elements of , then    Proof.  Note that holds in general for any pair of ideals. If then for some and . Given we have with and , which proves .  For the second assertion define to be the -module homomorphism . Note that the kernel of is which equals by the first assertion. I claim is onto: Pick . With chosen as above, we have The last equation holds since and thus and similarly .  For the final assertion, recall that when is a UFD, two principle ideals and satisfy if and only if and are relatively prime. Also, for and , we have .     – FTFGMOPIDEDF  Let be a PID and let be a finitely generated -module. Then there exist integers , prime elements of (not necessarily distinct), and integers , such that Moreover and are uniquely determined by , and the list is unique up to associates and reordering.   Proof.  First write in invariant factor form . For any non-zero, non-unit element of , we have for some distinct (non-associate) prime elements and integers . By the Chinese remainder theorem (applied over and over again) we have Doing this for each fact in the invariant factor form of we obtain the existence of an elementary divisor form of .  Uniqueness follows from the uniqueness of the invariant factor form and of the prime factorizations of the ’s.     – Elementary Divisor (Module)  With the notation in the Theorem above, the elements of are the elementary divisors of . #fix    –  Since , so the elementary divisors of are , and . The only invariant factor of is .    – Direct Sums and  Consider the group . This is neither in IFF nor in EDF. Applying the Sunzi Remainder Theorem, we have and this gives the EDF. The elementary divisors of are (ordering does not matter).  To find the IFF we start by finding the largest prime power order for each prime in the list of orders of the summands. These are . The CRT gives Then we find the highest prime power orders for each prime among the left-over summands: By the CRT we have The highest orders of the prime power order not yet used are and , and we have which can be rearranged to give This is the IFF, and the invariant factors of are .    – FTFGAGEDF  Let be a finitely generated abelian group. Then there exist integers , positive prime integers , and strictly positive integers such that Moreover, the ’s, and ’s are uniquely determined by (up to ordering).    – FTFGMOPREDF  Let be a field and be the ring of polynomials with coefficients in in one variable . If a finitely generated -module then for some , , non-constant monic, irreducible polynomials and integers with , and these are unique up to ordering.    – Finding IFs and EDs  Find the invariant factor form and the elementary divisor form of the -module first when (a) , (b) and (c) .    Problem  Let be a Euclidean domain, an matrix with elements from , and the transpose matrix of . Let denote the quotient of by the submodule generated by the columns of . The {} submodule of an -module is the submodule (It is indeed a submodule and you need not prove this.) 1. Prove that the torsion submodules of and are isomorphic. 2. Prove that the modules and are isomorphic if and only if .    Problem –  Let be a PID and let be a finitely generated -module. 1. Determine a generator for the principal ideal in terms of the invariant factors and the free rank of . 2. Determine a generator for the principal ideal in terms of the elementary divisors and the free rank of .    Problem –  Consider the matrix where . 1. Determine the Smith normal form for . 2. Determine the representative in the isomorphism class of the module presented by which is written in invariant factor form and in elementary divisor form. # Canonical Forms for Linear Operators ## Modules over Polynomial Rings #### Suppose is a field and is a -module. By restriction of scalars along the canonical ring map we may regard as a -vector space — let us write this vector space as to be precise. Let be the map given by . Then is an -linear operator on . So, to a -module we may associate the pair where is an -vector space and is an -linear operator on . This process is reversible:    – -Module  Let be a field, let be a finite dimensional vector space over , and let be an -linear operator. The -module is defined to be the abelian group equipped with the rule for [^1] scaling given by for any polynomial and vector .    – is Actually a -Module  Given a pair as in the definition, really is a -module.    – Special Case of  We have the following special case (it isn’t really special — the general case reduces to this one upon choosing a basis):  Given a matrix , then is the -module whose underlying abelian group is (column vectors) with the usual rule for addition and with the rule for scaling given by for any column vector . For short, we write this rule as for any polynomial , where is the matrix obtained by evaluating at in the evident sense.    –  Let and let be the -module . So as a -vector space, and acts on by sending to . I claim there is an isomorphism of -modules.  Let . Note that and that and span as a -vector space. It follows that generates as a -module; in detail, for any we have .  Define a -module homomorphism by sending to and hence to . It is onto since generates as a -module. The kernel will be a (necessarily principle) ideal of ; we just need to find it. Note that , and are linearly dependent and in fact we have and hence . This gives that is in the kernel of and hence, by the -th Isomorphism Theorem we have an induced homomorphism of -modules induced by . The map is onto since is onto. Since the source and target both have dimension two as -vector spaces, is -linear, and is onto, it must in fact be an isomorphism of -modules (by the Rank-Nullity Theorem).    – Equality of -Modules  The two assignments and defined above are mutually inverse: Given a -module , there is an equality of -modules and given a pair with an -vector space and an -linear operator on we have an equality of pairs .     In fact, these rules determine an “isomorphism of categories’’.       Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-204",
  "level": "2",
  "url": "sec-modclass.html#exercise-204",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-205",
  "level": "2",
  "url": "sec-modclass.html#exercise-205",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-206",
  "level": "2",
  "url": "sec-modclass.html#exercise-206",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-rcf",
  "level": "1",
  "url": "sec-rcf.html",
  "type": "Section",
  "number": "6.1",
  "title": "Rational Canonical Form",
  "body": " Rational Canonical Form   RCF   – Block Diagonal Matrix  Given square matrices , we define to be the matrix which belongs to for .   – Rational Canonical Form  Given a finite dimensional -vector space and an -linear operator , there is a basis of such that the matrix representing relative to is for monic polynomials of degree at least one such that [^1]. Moreover, this matrix is unique, and is known as the rational canonical form of the operator .   Proof.  We know by the Fundamental Theorem of modules over (i.e., Corollary ) that there is a -module isomorphism for some unique list of monic, non-constant polynomials with for all . Recall that the operator on is given as (multiplication by ) on . Since this is a -module isomorphism, corresponds to multiplication by on each summand . As we have seen before, for each , the matrix representing on relative to the basis of is the companion matrix of . Let be the -basis of given by tuples (in that order). Then the matrix of on for is .  This gives existence. Uniqueness is a consequence of the uniqueness of the list , but I will omit the details.      The matrix is unique, but the basis that realizes it is, in general, not unique. As an extreme example illustrating this: Take to be the identity operator on a finite dimensional vector space . Then holds for any basis . (Note that is indeed in rational canonical form: it is equal to .)    – Invariant Factor  In Theorem , the number is the rank of , the numbers are the of , and the decomposition of in part (1) is the invariant factor decomposition of .    – Back to  Let us return to the example of to illustrate the Theorem and its proof. By the previous example we have an isomorphism of -module Recall that (multiplication by ) on is given by multiplication by the matrix . This is an isomorphism of -modules, and so corresponds to the operator on . As we have seen before, relative to the basis , the matrix for is This is the Rational Canonical Form of . has just one invariant factor, namely .  By the way, tracking through the calculations that got us here, we see that the basis of that gives the RCF of if of .    – Every Matrix Similar to Unique RCF Matrix  Every matrix is similar to a unique matrix in RCF.    – Similarity Classes of Matrices  Let be the field with elements for some prime . Up to similarity, how many matrices are there with entries in ?  Each such matrix is similar to a unique one of the form with monic polynomials of positive degree such that . Moreover, since is a matrix where , we must have . So the goal becomes to count all such tuples of polynomials. We proceed by cases on . Note that is not possible. - Case . Then and the number of such polynomials is (since and has elements). - Case : Note that is not possible. If then , and there are possibilities. If , then and with monic and . There are possibilities for and for , for a total of in this subcase. The total for this case is thus . - Case : The only possibilities are , and so that and with . We get possibilities. - Case . We must have with each of degree , for a total of possibilities. The total is      The proof of Theorem makes clear the following fact:   For a field , finite dimensional vector space , and -linear operator ,the invariant factors of the operator are identical to the invariant factors of the -module .   The following result is thus very useful for finding the Rational Canonical Form of an operator (we will state it just for operators given explicitly by matrices):    – RCF and Cokernels  Let be a field and let . The matrix presents the -module [^1]; that is, there is an isomorphism of -modules    Proof.  For this proof it is useful to identity with where the latter refers to all expressions of the form with . For instance, (when ) we identify with . Using this identification we define by . Then is a -module homomorphism — I leave it to you to verify this. is onto since, e.g., for any we have .  We have and hence . By the -th isomorphism theorem, there is an induced -module homomorphism induced by , and it is onto since is onto. It remains to show this map is one-to-one.  Since is -linear it is certainly -linear. Since , to prove is one-to-one, it suffices to prove (by Rank-Nullity). I claim the images of the standard basis in span it as an -vector space. To see this, note that , for , span as an -vector space, and hence they span the quotient. It thus suffices to show lies in the span of in for all and . We have and thus and by repeating this argument we have      – Invariant Factors are Diagonal SNF Entries  The invariant factors of a matrix are the non-zero, non-unit diagonal entries of the SNF of .   Proof.  Let be the Smith Normal Form of and let be its diagonal entries. As proven before, the matrix and present isomorphic -modules, and thus the Theorem gives an isomorphism Since , none of the ’s can be zero. So, each is monic and . Now some of the might be non-zero constants, in which case is a unit and . Upon tossing those out, we are left with with each monic of positive degree and . These are, by definition, the invariant factors of .     – Once More to Back to  Let’s find the invariant factors of the matrix we looked at before, but this time using the Theorem and its Corollary.  We have To find the invariant factors of we just need to find the Smith Normal Form of . I’ll do this two ways:  Method I: Do row and column operations using the generalized Euclidean algorithm: Tossing out the unit, we see that the only invariant factor is , as before.  Method II: Call the entries on the diagonal of the SNF of . Recall from Theorem that is the gcd of the entries of and . Thus and . Therefore the only invariant factor of is .    – Finding IFs and RCF  Let Let us find the invariant factors and Rational Canonical Form of by finding the Smith Normal Form of .  We have A sequence of messy row and column operations yields Note that this is indeed in Smith Normal Form. It follows that the invariant factors of are and the RCF of is   For an alternative approach, we could use that the diagonal entries of the Smith Normal Form of satisfy , is the gcd of the minors of , and . It’s clear that and an easy calculation gives that . There are nine minors of , and a tedious check reveals that each of them is one of , , or (up to signs). So . We get that as before.    Problem 7 – Nilpotent Matrices and Similarity  Let be a field and recall that a square matrix with entries in is called nilpotent if for some positive integer .   Prove that if is an nilpotent matrix, then .  Assume and prove that two nilpotent matrices are similar if and only if they have the same rank. (Recall the rank of a matrix is the dimension of the vector space spanned by its columns.)  Give an example, with justification, of two nilpotent matrices that have the same rank but are not similar.    Proof .  Let be a field.   Part (a)  Let be an nilpotent matrix. Let be some eigenvalue of . Thus there exists some vector such that . Let’s consider this the base-case of some rather banal induction. Now assume that for we have . Consider Recall that as is nilpotent, there exists some such that . As is an eigenvalue of , by the above induction we see that is an eigenvalue for . As is a field and thus an integral domain, we see that implies that is as well. As this holds in the algebraic closure of as well, we see that when factored into linear terms all the . Thus .  By the Cayley Hamilton Theorem we know , and thus .    Part (b)  Assume and let be nilpotent matrices with entries in .   Suppose . Thus there exists some invertible matrix such that by the definition of similar matrices. Let . Thus and . We multiply both sides by to see that . Therefore the , and hence the ranks of and are equal by Rank Nullity.  Next, observe as is an invertible matrix. Thus .   Suppose that . From Part (a) we know .  We consider the case where .  The only possible invariant factors involving are 1. ; 2. ; and 3. itself. However, if are the invariant factors then the rank of would be 3, making it invertible, contradicting the fact that 0 is an eigenvalue of . Thus we need only consider the latter two cases.  Note that As has rank 1 and has rank 2, since we see that they must have the same invariant factors, making them similar.  If then the only possible invariant factor is , as having two ’s would make and invertible again. If then and we’re done.    Part (c)  Consider and .  Thus   both of which have rank and are in RCF. Thus they are not similar.      Problem  Find the Rational Canonical Form of where is any field.    Problem  Find, with justification, a complete and non-redundant list of conjugacy class representatives for the group , where is the field with two elements.   Proof.  Let denote the field with two elements, and consider the group .  Recall that matrices are in the same conjugacy class if and only if they are similar, and that two matrices are similar if and only if they share the same invariant factors.  Let . All characteristic polynomials are monic, and as is invertible we see the term in the , and thus , the only other element in . There are only so many monic polynomials with coefficients in ; hence there are only four possible characteristic polynomials of : 1. , 2. , 3. and 4. . Note that since , 0 cannot be a root of any of these polynomials. Thus all that remains is to check . Luckily, is not a root of or , so the only invariant factor of each is themselves. While 1 is a root of , we see that . As , neither of these polynomials can be invariant factors by the RCF theorem; thus the only invariant factor of is itself. However , and so its possible invariant factors are - ; - and - . Let and . Thus the conjugacy class representatives for are 1. , 2. , 3. , 4. , 5. , and 6. .        Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-207",
  "level": "2",
  "url": "sec-rcf.html#exercise-207",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-208",
  "level": "2",
  "url": "sec-rcf.html#exercise-208",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-209",
  "level": "2",
  "url": "sec-rcf.html#exercise-209",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-minpoly",
  "level": "1",
  "url": "sec-minpoly.html",
  "type": "Section",
  "number": "6.2",
  "title": "The Minimum Polynomial",
  "body": " The Minimum Polynomial   The Minimum Polynomial of an Operator    Given a square matrix and polynomial , recall that refers to the square matrix .   – Ideals and  Given a matrix with entries in a field , the set forms a non-zero ideal of [^1].   Proof.   is an ideal since the result of evaluating the sum of two polynomials at is . the result of evaluating the product at is .  To show it is non-zero, consider the matrices . This is a collection of matrices in the dimensional -vector space , and hence the must be linearly dependent: there are , not all of which are , such that . This proves .     – Minimum Polynomial (Matrix)  Let be a field and let . The of , denoted , is the unique monic generator of the ideal . Equivalently, is the monic polynomial of least degree such that .    – iff Annihilates  Given an matrix and polynomial [^2], we have if and only if annihilates the -module .  In particular, [^1] is the unique monic generator of the annihilator ideal ###### Proof. If , then for each , by definition of the action of on we have and so annihilates . Conversely, if annihilates , then for all . Taking for each , this says that each column of is and hence is the zero matrix.    – Minimum Polynomial (Linear Transformation)  More generally, let be an -vector space of dimension , and let be a linear transformation. The of , denoted , is the unique monic polynomial generating the ideal or, equivalently, the annihilator ideal .    Theorem – Cayley-Hamilton  Let be a field, a finite dimensional -vector space, and an -linear operator. Let be the invariant factors of . 1. The product of the invariant factors of equals the characteristic polynomial of : 2. The largest invariant factor of is equal to the minimum polynomial of : 3. (The Cayley-Hamilton Theorem) The minimum polynomial of divides its characteristic polynomial. In particular, satisfies its characteristic polynomial: ###### Proof. The first assertion is a consequence of Corollary , since the product of the diagonal elements of the Smith Normal Form of is equal to the determinant of . (Technically, we can only conclude at first that they are only associates, but since each is monic, they must be equal.)  For the second, we use the isomorphism of -modules Note that a polynomial annihilates if and only if divides . Since , the annihilator of the -module is generated by . Thus the annihilator of is also generated by , and by the Proposition is the minimum polynomial of .  The third assertion is an immediate consequence of the first two.    – Finding Minimum Polynomial  Let’s find the minimum polynomial of   We apply the Cayley-Hamilton Theorem: . The polynomial is easy to compute since this matrix is upper-triangular: So for some . By brute-force, we verify that and thus it must be the case that .    – Finding Minimum Polynomial (2)  Let’s find the minimum polynomial of As in the previous example, and so by the Cayley-Hamilton Theorem for some . This time we notice that and so, since , .    Problem 6 – Similarity Classes and CharPoly  Determine all similarity classes of matrices with entries in with characteristic polynomial . Provide an explicit representative for each of these similarity classes.   Proof .  Let be a matrix with entries in with characteristic polynomial .  By this Corollary we know that every matrix is similar to a unique matrix in RCF. Note that RCF is based on the invariant factors if a matrix, and thus if two matrices have the same invariant factors they will have the same RCF, making them both similar to the same (unique) matrix, making them similar to each other. By part (1) of this Theorem, the characteristic polynomial of a matrix is equal to the product of the invariant factors of that same matrix.  Recall that the invariant factors must divide all preceding invariant factors in RCF, and observe that factors as and factors as . Given this information, after some fiddling with the factors, we find four possible options for invariant factors of : 1. , 2. , 3. , and 4. . Let  , and . Observe the companion matrices of each of these polynomials: Behold: explicit representatives of each similarity class: 1. , 2. , 3. , and 4. .     Problem 6 – Similarity of 3 x 3 Matrices  Let be any field.   Let and be two matrices with entries in . Prove and are similar if and only if they have the same characteristic polynomial and the same minimum polynomial.  Show, by way of an example with justification, that the previous part would become false if were replaced by .  Give an example of a field and two matrices with entries in having the same minimum polynomial that are not similar.    Proof .  Let be any field.   Part (a)  Let and be two matrices with entries in . First, suppose that . Matrices are similar if and only if they share the same invariant factors. As minimum polynomial is an invariant factor and the characteristic polynomial is a product of the invariant factors, we see that and must share the same invariant factors.  Next suppose that and share the same characteristic polynomial and the same minimal polynomial. As and are matrices, the characteristic polynomial of both and must be a degree polynomial. We proceed via cases based on the degree of . - First, suppose . Then , making the only invariant factor of both and . Thus and have the same invariant factors and are therefore similar. - Next, suppose . As and the degrees of all invariant factors must sum to the , we know that , where is a degree polynomial, which we denote for and for .. Since and share the same minimum and characteristic polynomials, we see and , and thus that . Hence and share the same invariant factors, making . - Finally, suppose . The minimum polynomial is the largest invariant factor, and thus the invariant factors of and must be , making them similar.    Part (b)  If we replaced with then this would allow for and , allowing two sets of invariant factors:  , Notice that and . Set and , so These matrices have the same and but are not similar.    Part (c)  Let . We define and . Notice that these matrices are in RCF. However, the invariant factors of are and the invariant factors of are . Thus is not similar to , but the minimal polynomial of both is . #### Problem 6 – Unipotent 4 x 4 Matrices Let be a field and a positive integer. We say an matrix with entries in is unipotent if is nilpotent (i.e., for some ). For the field , find (with complete justification) the number of similarity classes of unipotent matrices and give an explicit representative for each class.    Proof .  Let , a positive integer, and a unipotent matrix with entries in . Thus is nilpotent. Let be an eigenvalue of . Then , so and . As , we have and .  Notice that as is an eigenvalue of , we have as an eigenvalue of .  Assume inductively that is an eigenvalue of . Notice making an eigenvalue of . Thus if is an eigenvalue of , it is an eigenvalue of as well. As is nilpotent, there exists some such that . This means that . As and is a scalar in a field (and hence integral domain) we have . Thus the only eigenvalue of is , meaning that the only eigenvalue of is .  Eigenvalues of correspond to the roots of , which is a monic quartic polynomial, as is a matrix. Thus , as all roots must be .  Two matrices are similar if and only if they share the same invariant factors. Given that invariant factors divide and each invariant factor must divide the following one, the possible sets of invariant factors for are the following: - , - , - , - , and - . We identify the companion matrices for each possible invariant factor:  and We define the following: 1. , 2. , 3. , 4. , and 5. . As each of these matrices is in RCF, they are explicit representatives for each similarity class.      Problem  Let and be matrices with entries in . Prove and are similar in if and only if and are similar in . (That is, show there is a such that if and only if there is a such that .) {}: Use the Theorem on Rational Canonical Forms.    Problem  Similarity of two-by-two matrices: 1. Let be any field and , and assume that neither nor is a scalar matrix. (Recall that a scalar matrix is one of the form for some .) Prove and are similar if and only if they have the same determinant and the same trace. 2. Let be a finite field with elements. Find, with justification, the number of similarity classes of matrices with entries in . 3. Let be a finite field with elements. Find, with justification, the number of conjugacy classes of the group .    Problem  Let be any field. Up to similarity, how many matrices in of the form are there? Justify.    Problem  Let be a field, a finite dimensional -vector space, and an -linear operator. Prove that the following are equivalent for an element : 1. is an eigenvalue of . 2. is a root of the minimum polynomial of . 3. is a root of the characteristic polynomial of . (Recall that is a {} of provided for some non-zero vector .)    Problem 7 #unfinished  Suppose is any field. Recall that a square matrix with entries in is nilpotent if for some positive integer j.   Prove that if and is nilpotent, then .  Find, with justification, the number of similarity classes of nilpotent matrices with entries in . #### Problem 9 #unfinished Find, with justification, a complete and non-redundant list of conjugacy class representatives for the group , where is the field with three elements. ## JCF #### – Companion Matrix and Jordan Blocks Let us consider the companion matrix of : We can interpret this matrix as arising from the linear transformation on defined as multiplication by . Recall that the ordered basis of that gives the matrix is the “obvious one’’: But notice that is also a basis of . Let us calculate what the operator does to this alternative basis. We could work this out by brute force, but a cleaner way is to first compute what the operator does. Since is multiplication by , it sends each basis element to the next one, except for the last one, which is sent to . It follows that the matrix of this operator relative to the ordered basis is and hence the matrix for itself for this basis is This is what’s known as a Jordan Block.      In this example, if we used the basis instead we would have gotten the transpose of .    – Jordan Block  Given a field , and integer , and an element , the  is the with entries in such that its diagonal entries are all , each entry just below the diagonal is a , and all other entries are : (More precisely, for all , for all , and for all other .)     Some people (including I think the authors or our text) defined a Jordan block to be the transpose of what I have defined it to be.    – Jordan Canonical Form  Let be a field, let be a finite dimensional -vector space, and let be a linear transformation satisfying the property that the characteristic polynomial of factors completely in [^1] into linear factors. Then there is an ordered basis for such that[^3] where , the ’s, and the ’s are such that are the elementary divisors of the -module [^2]. Moreover, this matrix is unique up to ordering of the Jordan Blocks, and it is known as “the’’ Jordan Canonical Form of .   Proof.  The proof is similar to the proof the RCF theorem, using the idea of Example above, but starting with the FTFGMPIDEDF (instead of the FTFGMPIDIFF). Here are the details:  We consider the -module . Since we assume factors completely, the only irreducible polynomials in its factorization are linear. Thus the invariant factors of are products of polynomials of the form for various and integers . It follows that the elementary divisors have this form too. The FTFGMPIDEDF therefore gives an isomorphism of -modules Now pick ordered bases for each of the summands and set to be their “ordered union’’ just as we did for the proof of the Theorem on RCF. By the same argument as in Example applied to each summand individually, the matrix representing multiplication by on each summand is . This gives the existence of the JCF.  The uniqueness follows from the uniqueness clause in the FTFGMPIDEDF.      Not every operator has a Jordan Canonical Form: The Theorem only applies if factors completely, and, conversely, if an operator is represented by any lower-triangular matrix, then its characteristic polynomial must be a product of linear polynomials. For algebraically closed fields, such as , every linear operator does indeed have a JCF.     If we flip the order of each in the proof, we would end up with the transpose of what I have defined the JCF to be. This is what our text does, and it defines the JCF as the transpose of what I have defined it to be.    – JCF Exists if CharPoly Factors Linearly  If is an matrix with entries in a field and [^1] factors completely into linear factors, then is similar to a matrix in Jordan Canonical Form, and this matrix is unique up to the ordering of the Jordan Blocks.    – Finding JCF  Let us find the Jordan Canonical Form of   We found the Rational Canonical Form of this matrix before. In the process we showed that we have an isomorphism of -module. By the Sunzi Remainder Theorem and thus the elementary divisors of are . By the Theorem this shows that the JCF of is     – Diagonalizable  Let be a finite dimensional vector space over a field and let be an -linear operator. We say is if there is a basis for such that the matrix [^1] is a diagonal matrix.    Problem 7 – Diagonalizable if MinPoly Splits  Let be a finite dimensional vector space over a field and let be an -linear operator on . Prove is diagonalizable over if and only if its minimum polynomial factors into distinct linear terms in [^1].   Proof .   Suppose that is diagonalizable. Thus there exists a change of basis matrix such that is diagonal. As it is diagonal, its diagonal entries are the eigenvalues of , and thus the roots of the minimal polynomial of . Using row and column operations we can rearrange so that all repeated linear factors are next to each other in the diagonal, for convenience.  We know that is the smallest monic polynomial that sends to 0. Take all the distinct eigenvalues and consider .  We examine . It will be a product of matrices, one for each . First, take the first matrix in this product, , and note that it sends all in to 0. Thus all of the rows and columns that contained a are now 0, and thus all these rows and columns will be 0 in the final product . As this is we set for all , we see that for each row and column in there will exist a matrix in the product such that the row and column will be 0. Thus the entire matrix will be 0, and .  Note that if any were excluded from there would exist a non-zero row and column for every matrix in the product, and thus would not send to 0. Thus is indeed the minimal polynomial of . As , we see it does indeed factor into distinct linear terms.   Suppose the minimum polynomial of factors completely into distinct linear factors, each of which has the form for some . As each is distinct, each elementary divisor is of the form .  We construct the Jordan Canonical Form of . As the elementary divisors are linear the Jordan blocks are matrices, making the a diagonal matrix. As the JCF is itself a change of basis matrix, we see that is diagonalizable.     Problem 6 – Derivative Linear Operator  Consider the -vector space . (You may assume without proof that is n-dimensional.) Consider the following linear maps :  (where p′ denotes the derivative of p). Determine the JCF of (a) (b)    Proof .   Part (a)  For any integer , consider the -vector space .  Let be the linear operator given by (where denotes the derivative of ). Note that the change of basis matrix for this operator is given by with the basis . Thus [^1] will be given by the determinant of the matrix     which is diagonal. Hence Thus factors into distinct linear polynomials, each of which is in the form for . Thus each linear term is an elementary divisor, making each Jordan Block a matrix with as the only entry. Thus the Jordan Canonical form is     Part (b)  This time around the change of basis matrix (denoted and using the same basis as above) for this matrix has 0s along the diagonal, and increasing natural numbers (starting at 0, sorry) along the upper diagonal. Thus .  Recall that the minimum polynomial corresponding to will be the the smallest monic polynomial such that is sent to 0. Note that as is the operator sending to its derivative, and that . Thus can be viewed as a change of basis matrix for taking the second derivative of the basis, and so on.  As the basis extends to , it requires derivatives to make this polynomial become 0. Thus the minimal polynomial of must be , as it it monic and . As the degree of the invariant factors must sum to and , which is itself an invariant factor, we see that it must in fact be the only one.  As is already a power of a prime, it is the only elementary divisor as well. Thus the Jordan Canonical Form for is an Jordan Block with 0s along the diagonal and 1s along the sub-diagonal.      Problem 6 – JCF and RCF of Derivative Operator  Let be a positive integer. Consider the real vector space and the linear transformation , where is the derivative of p(x).   Find the characteristic polynomial and the minimum polynomial for .  Find the invariant factors and the elementary divisors for .  Find the RCF and the Jordan Canonical Form for .    Proof.  Let be the linear operator given by (where denotes the derivative of    Part (a)  Note that the change of basis matrix for this operator is given by with the basis . Thus will be given by the determinant of the matrix which is diagonal. Hence .    Part (b)  Our factors into distinct linear polynomials, each of which is in the form for . Thus each linear term is an elementary divisor. However, as none of these elementary divisors divide any of the others, we see that the only invariant factor is itself.    Part (c)  As each linear term is an elementary divisor, each Jordan block a matrix with as the only entry. Thus the Jordan Canonical form is As the only invariant factor is , we see that the Rational Canonical Form of is .      Problem 4 – JCF and Similarity  Let be the matrix with entries in  (a) Find the Jordan Canonical Form of A. (b) Is similar to    Proof.   Part (a)  First, notice that is upwards triangular, and thus . By the Cayley Hamilton Theorem the minimum polynomial divides the characteristic polynomial, and from the definition of minimum polynomial we know is the smallest polynomial such that . Since must be a power of with , we plug in values of until we get . Shucks. Moving on, which is also not . However, multiplying one more time we see . By part (2) of this theorem is an invariant factor. By part (1) of that same theorem, invariant factors must multiply to , and so the invariant factors are and . These are also the elementary divisors. So       Part (b)  Let And notice that . Thus cannot be the minimal polynomial of . Two matrices are only similar if they share the same invariant factors (and thus the same minimum polynomial), so and are not similar.      Problem 6 – RCF and Determining Existence of JCF  For the matrix in : (a) Find the RCF of . (b) Determine whether or not has a Jordan Canonical Form, and if so, find this form.   Proof .   Part (a)  Notice . So we have Not so bad! Now, the invariant factors all divide the characteristic polynomial and must divide the following factor, so our options for sets of invariant factors are the following: - - However, the largest invariant factor is also the minimal polynomial. So we check to see if . Luckily, the very first calculation shows that this is not the case. Thus the minimum polynomial is the characteristic polynomial is the only invariant factor of . Thus the RCF of is     Part (b)  Luckily for us, factors completely into linear terms! So our elementary divisors are and . We see and , so the Jordan Canonical form of is       Problem 9 – Transpose Similarity  Let be a field and a square matrix with entries from . Prove that is similar to its transpose.   Proof.  Let be the algebraic closure of . Thus has a Jordan Canonical Form in . For each Jordan block in the JCF of , let denote the transpose of the identity matrix, and notice that . As this is the case for every Jordan block, we see that the JCF of , , is similar to its transpose. As the is similar to , is similar to , and is similar to , we see that in by transitivity.  Suppose and are similar in . As and have entries in , then they are both in . Thus there exist matrices in RCF such that is similar to and that is similar to . However, is similar to and that is similar to in as well. Notice and are still in RCF. However, as the RCF is unique, this means that in , making them equal in as well. Thus is similar to , as similarity is transitive.  This yields in .     Problem  Let with the standard basis and let be the linear transformation represented by the matrix 1. Find the invariant factor decomposition of the -module . 2. Find the characteristic and minimal polynomials of . 3. Find the rational canonical form of . 4. Find the Jordan canonical form of .    Problem 8 #unfinished  Consider the following matrix: (a) Find the rational canonical form of . (b) Find the Jordan canonical form of .    Problem 6 #unfinished  Let be a positive integer and let be the Jordan block matrix of size with eigenvalue 0 in .   Find the minimal polynomials for and for , with justification.  Find the Jordan canonical form of , with justification. Hint : consider the kernel of .    Proof.  Let be a positive integer and let be the Jordan block matrix of size with eigenvalue 0 in .   Part (a)  Notice that is a triangular matrix with ’s along the diagonal. Thus , the product of the diagonal entries of the matrix .  Squaring a triangular matrix moves everything one down (Proof?), and so should do it. Squaring just moves us one closer, so     Part (b)  As , the only roots of it are , and thus these are the only elementary divisors of .      Problem 7 #unfinished  On canonical forms (a) Consider the -module and let the -vector space obtained from by restriction of scalars along the evident inclusion and let be the -linear transformation given as multiplication by . Find, with justification, the rational canonical form of . (b) Consider the -module and let the -vector space obtained from by restriction of scalars along and let be the -linear transformation given as multiplication by . Find, with justification, the Jordan canonical form of .    Problem 9 #unfinished  Consider the following matrix over : (a) Show that the characteristic and minimal polynomials of are, respectively, and . (b) Find the rational canonical form of and the Jordan canonical form of . (c) Find an invertible matrix such that .   Proof .   Part (a)  Let denote the above matrix.    Part (b)  As and , we know that our characteristic polynomial factors into linear factors, so does indeed have a JCF. This also means that only has one elementary divisor, , which corresponds to the Jordan Block , a matrix with s along the diagonal, s along the subdiagonal, and everywhere else. This is the JCF of .    Part (c)      Problem 5 (why is this true?) #unfinished  Let be a field and a monic polynomial of degree . Prove: all matrices in having characteristic polynomial are similar if and only if the irreducible factorization of has no repeated factors.       Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-210",
  "level": "2",
  "url": "sec-minpoly.html#exercise-210",
  "type": "Exercise",
  "number": "1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-211",
  "level": "2",
  "url": "sec-minpoly.html#exercise-211",
  "type": "Exercise",
  "number": "2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-212",
  "level": "2",
  "url": "sec-minpoly.html#exercise-212",
  "type": "Exercise",
  "number": "3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-jcf",
  "level": "1",
  "url": "sec-jcf.html",
  "type": "Section",
  "number": "6.3",
  "title": "Jordan Canonical Form",
  "body": " Jordan Canonical Form     Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-213",
  "level": "2",
  "url": "sec-jcf.html#exercise-213",
  "type": "Exercise",
  "number": "6.3.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-214",
  "level": "2",
  "url": "sec-jcf.html#exercise-214",
  "type": "Exercise",
  "number": "6.3.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-215",
  "level": "2",
  "url": "sec-jcf.html#exercise-215",
  "type": "Exercise",
  "number": "6.3.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "field-extension-basics",
  "level": "1",
  "url": "field-extension-basics.html",
  "type": "Section",
  "number": "1.1",
  "title": "Field Extension Basics",
  "body": " Field Extension Basics    A field extension is an inclusion of one field into a larger field , making into a subfield of . We will write either or to signify that is a field extension of .     So a field extension is just another name for a subfield, but the emphasis is different. We think of as coming first and later.    Recall that if and are fields, then every ring homomorphism necessarily injective. (Proof: since , is a proper ideal of , and since is a field, the only proper ideal of it is .) Thus maps isomorphically onto its image and is a field extension. By abuse of notation we will typically think of as being a field extension, even though it is technically just an injective homomorphism of fields.     and are basic examples of field extensions.  Recall that is a field. So is another example of a field extension.    The latter is a typical sort of example for us: Starting with , we would like to adjoin a root of the irreducible (in ) polynomial . Doing so yields .  The previous example was a quadratic extension, which is misleadingly simple.    Consider . It is irreducible (e.g., by Eisenstein) and has roots , and in . So there are three ways in which we could “adjoin a root\" to : First we could form the field It is not completely obvious this is a field, but we'll prove it latter. The reason that we don't need third or higher powers is that, e.g., . Or we could instead form the field or the field . There are clearly not all equal since, for example, but is not in . However, they are {} field extensions as we will prove below.     Given a field extension and an element , set Then is a subring of and in fact it is the smallest subring of that contains and We define to be the field of fractions of ; that is, So, is a subfield of and it is the smallest subfield of that contains and .      If is a field extension and , show, using only the definition of , that      Note that, in the context of this definition, we have , with each inclusion being a subring inclusion. and are all fields and in general is only a ring. But, in some cases we have (and hence it is a field). Indeed, this occurs whenever is the root of some polynomial with coefficients in .    Take and . Then any expression of the form with is equal to one of the form for . If , then with and both in . This proves that and in particular that is a field.     is not a field (and so in particular it is not equal to since, for example, . (If it were, then we would have for some , and hence , which would imply is the root of a polynomial with rational coefficients. This is known to be not true.)     The degree of a field extension is      We have that and . (We could in fact say is the cardinality of , but in general we lump all infinite field extensions together when talking about degree.) We have where .     Assume is a field and is an irreducible polynomial. Set , and for , let denote the coset . The following hold:    is a field extension via the map given by for . (This is technically an injective homomorphisms of fields.)     .     has a root in ; in fact, the element is a root of this polynomial: .       Because is irreducible and is a PID, is a maximal ideal . Thus is a field . The map given by is a ring map since it is the composition of the two ring maps  . Since it is a ring map between two fields, it is injective .  The equality holds since is a basis for regarded as an -vector space, as we have seen before .  The last assertion is tricky only because the notation is confusing. Say and just to keep things straight let's set . We need to show : We have      The last part of the proposition is notationally confusing to prove in general but clear in examples. So let's do a simple one: Say and . Then . The assertion is that is a root of the polynomial viewed as having coefficients in . In other words, this element has the property that its square is . Let's check: Since and we have . Indeed, there is a field isomorphism sending to and more generally to      A field extension is called simple if for some (typically, non-unique) element of .      primitive element goes here lol      is a primitive element of the extension . So is and, more generally, for any with .     If is a field extension and is any subset of , we write for the smallest subfield of that contains all of and and it is called the subfield generated by over . Since the intersection of any two subfields of is again a subfield, exists and is where  fix Nearly always will be a finite set, , and we write for .  In this case, we have      Regard as a subfield of and let . We may also describe as where we set .  I claim that is in fact a simple extension of . For example, say . I claim that . Note that and So , and hence . Likewise, So . This example is an illustration of the Primitive Element Theorem (which we might or might not have time to prove this semester): Every finite extension of is generated by a single element (or, in other words, is simple). This example shows is simple and is a primitive element of this field extension.     Let p be a prime number, let be the field with elements, and let be a positive integer. Prove that , where, for a positive divisor of , denotes the product of all monic irreducible polynomials of degree in . (You may assume basic results on the structure of finite fields and their subfields.)      Suppose and are subfields of a field extension with and both finite. Let be the subfield of K generated by and .   Show that     Prove that equality holds when and are relatively prime.    Prove there are two subfields of , and , neither contained in the other, so that the inequality in part (a) is strict.         Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "remark-26",
  "level": "2",
  "url": "field-extension-basics.html#remark-26",
  "type": "Remark",
  "number": "1.2",
  "title": "",
  "body": " So a field extension is just another name for a subfield, but the emphasis is different. We think of as coming first and later.  "
},
{
  "id": "remark-27",
  "level": "2",
  "url": "field-extension-basics.html#remark-27",
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
  "id": "remark-28",
  "level": "2",
  "url": "field-extension-basics.html#remark-28",
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
  "id": "remark-29",
  "level": "2",
  "url": "field-extension-basics.html#remark-29",
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
  "id": "exercise-216",
  "level": "2",
  "url": "field-extension-basics.html#exercise-216",
  "type": "Exercise",
  "number": "1.1.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-217",
  "level": "2",
  "url": "field-extension-basics.html#exercise-217",
  "type": "Exercise",
  "number": "1.1.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-218",
  "level": "2",
  "url": "field-extension-basics.html#exercise-218",
  "type": "Exercise",
  "number": "1.1.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-algebraic",
  "level": "1",
  "url": "sec-algebraic.html",
  "type": "Section",
  "number": "1.2",
  "title": "Algebraic Extensions",
  "body": " Algebraic Extensions    For a field extension and , we say is algebraic over if for some non-zero polynomial . Otherwise, is transcendental over .      is algebraic over . Indeed, every element of is algebraic over . (E.g., is a root of .) ia algebraic over . So is for any . The numbers and of are transcendental over ; these are deep facts.     Suppose is a field extension and . Define a subset of .   The subset is an ideal of .   if and only if is transcendental over ; so if and only if is algebraic over .  Assume is algebraic over .  The unique monic generator of , which we will write as , is irreducible (and hence is a prime ideal).  There is a unique isomorphism of fields sending identically to and sending to .   and in particular is a field.     is algebraic over if and only if . In this case,[^5]    is transcendental over if and only if . In this case, there is a unique isomorphism of fields sending identically to and sending to . (Here, is the field of fractions of .)     All parts use the following construction:  Let be the evaluation homomorphism, given by sending to  . Note that satisfies and . We have by definition of the latter. The First Isomorphism Theorem for rings thus gives that induces a ring isomorphism given by . In particular, since is a subring of , it is an integral domain, and hence must be a prime ideal (possibly the ideal).   Let us now prove the various parts:    holds because is the kernel of the ring map .    is by definition.    For (3) assume is algebraic. Then and hence it has a unique monic generator, which we write . Since is prime, is irreducible ; this proves (3a). Also, this shows that is a field and hence so is . Since , contains and , and is a field, we must have . This proves (3b) and (3c).  For (4), if is algebraic over , then by (3b) and Proposition . For the converse, if , then the infinite list of elements of cannot be -linearly independent . So, for some and some not all of which are . This shows is the root of a non-zero polynomial.  For (5), if is transcendental, then and so is injective. Since is a field, is a domain , and is injective , it can be extended to the field of fractions of , i.e. there is a ring homomorphism given by for all with . The image of is precisely . The map is injective since it is a ring homomorphism whose source is a field.       If is algebraic over the subfield , the unique monic generator of the ideal in the previous theorem, written , is called the minimum polynomial of over .     Note that the minimum polynomial of over (if it exists) divides every polynomial in that has as a root. In particular, it is the unique monic, irreducible polynomial having as a root. It can also be characterized as the monic polynomial in of least degree having as a root.    For any prime integer , set , a so-called “primitive -th root of unity\". Let us find . Note that is a root of which factors as where . As we showed before , is irreducible in . Since is not a root of , it must be a root of , and since is irreducible, it must be (see the Remark).      Let be irreducible and let (respectively, ) be a root of in some field extension (respectively, ) of . Then there is an isomorphism of fields such that and .    Note that is (up to a non-zero constant factor) the minimum polynomial of both and . So, we may apply (3b) of the Theorem twice to give a pair of isomorphisms of fields, given by sending to (for the left one) and (for the right one). Take to be the inverse of the one on the left composed with the right one.      A simple example illustrating the Corollary is that and are isomorphic fields. In fact, the are equal: . But the Corollary gives that there is an interesting isomorphism that sends to . In general, we have for . This previews the central idea of Galois theory.    Let (the unique real cube-root of ) and (one of the two imaginary cube roots of ).  Then by the Corollary (applied with ) there is an isomorphism of fields that restricts to the identity map on . Note that these two fields are not equal since the former is contained in and the latter is not.    The Degree Formula   Suppose are field extensions. Then In particular, the composition of two finite extensions of fields is again a finite extension.    Let be a basis for as an -vector space and let be a basis for as an -vector space. Let denote the subset of . The Proposition follows from the following two facts: - is a basis of as an -vector space and - the function is bijective (so that the cardinality of is ). Concerning (a), for , we have for some and . For each , is an -linear combination of a finite set of elements of . Combining these gives that is in the -span of .  To prove linear independence, it suffices to prove that if and be distinct elements of and respectively, then the set is linearly independent. Suppose for some . Since the 's are -linearly independent and and , we get that, for each , . Using now that the 's are -linearly independent, we have that for all and all , . This proves is linearly independent over , and hence is linearly independent over .  Concerning (b), if for some , then , and since the 's are -linearly independent, we must have and hence .     Say is a field extension of prime degree . Given , by the Degree Formula we have . Since , and so . It follows that , whence . As a (very simple) example of this, since is prime, for any complex number that is not real.    Let be the result of adjoining to all of the roots in of . That is, where , , , and . As we shall see later, is an example of a “splitting field\". Let's find .  First, let us note that we can also describe as . This holds since each of belongs to and hence . The opposite containment holds because , with the latter being true because .  Set . Then . Since and is a root of , we have is at most and it will be exactly if and only if is irreducible in . This is unclear.  So instead let's try a different approach. Let . Then since is irreducible in by Eisenstein, we have . Since and is a root of , we have . But since . Note that if and only if . Thus .  By the degree formula we conclude that Note that, in hindsight, it must have been true that is irreducible in , since otherwise the degree formula would give that .     Suppose that is a finite extension of fields such that the degree is odd. Show that if , then .    Let be a finite extension of fields such that the degree is odd.  Notice that as everything in can be written in terms of . Suppose by way of contradiction that there exists some such that . Then . Notice that is a root of the polynomial , which is irreducible in as it is a degree polynomial that has no roots in . Thus is the minimum polynomial of and    However, by the Degree Formula  , which is a problem, given now divides , an odd number. Thus .      A field extension is called algebraic if every element is algebraic over (i.e., if every element of is the root of a non-zero polynomial with coefficients in ).      If is a finite extension of fields, then it is algebraic.    Pick . Since is a -vector subspace of and we have . (One could also appeal to the Degree Formula for this.) So by (4) of Theorem , is algebraic of .     Let and set . Then is a subfield of : To see this, note first that provided . Given , we have and for some and and hence are both in . Since is a field, we have , , and (provided ) all belong to and hence to . This proves is field extension of . It is algebraic over since each is. But it is not a finite extension of , since (since is irreducible in by Eisenstein ) and hence for all .      Let be extensions of fields, not necessarily finite.   Prove that and are algebraic if and only if is algebraic.  Give an example where and are Galois but is not Galois.     Let be extensions of fields, not necessarily finite.  Suppose that and are algebraic extensions. Let . Then is the root of the polynomial with . Notice that is a polynomial in , making is algebraic over this as well. Consider the chain of field extensions Since is algebraic over for all and is algebraic over , by Theorem each step in this chain has finite degree. By the Degree Formula, is finite and thus so is . By the Theorem again, is algebraic over .  Next suppose that is algebraic. Let . Then , and so it is algebraic over . Now let . Then is the root of a polynomial in , which is also in , so is algebraic as well.   is Galois over , and is Galois over , but is not Galois over as the splitting field of has degree .      Let be fields and let be algebraic elements over . Prove that and are also algebraic elements of over .    Let be fields and let be algebraic elements over First, notice that and are contained in . As is algebraic over , it is the root of some polynomial with coefficients in . But is also contained in , and thus the extension is algebraic. As is algebraic as well, we see that is an algebraic extension of fields. Thus and are algebraic over . #### The converse of this proposition is also true: Given field extensions , if is algebraic then so are and . This is more or less obvious from the definition.       Show that any finite extension of fields is algebraic.  Let denote the subfield of consisting of all the complex numbers which are algebraic over . (You may use that is a field without proof.) Show that is an algebraic extension, but not a finite extension.     Let be a finite extension of fields. Let . By the [[Proposition – The Degree Formula|Degree Formula]] we have . Thus is finite, making algebraic over .. ###### Part (b) Notice that for all and that is a root of the polynomial , which is irreducible in by Eisenstein's Criterion]] ( ). Thus . As must be added to for all , we see that this extension is not finite.      Let be the splitting field of    Prove that .    Find a basis for as a -vector space.       Let be the splitting field of Part (a) The roots of are the following:                      Notice that , and thus .  The polynomial is irreducible in by Eisenstein's Criterion ( ). Thus it is the minimal polynomial of , and so is a field extension of of degree . After adjoining as well we see that is an extension of degree . Thus a basis of as a -vector space is the following:       Assume that is a finite extension of fields of degree .   Prove that if is irreducible of degree and then remains irreducible when regarded as an element of the ring .  Show, by means of an explicit example with justification, that the statement in part (a) would become false if the assumption that were omitted.      Let be a finite extension of fields of degree .  Suppose that is irreducible of degree and .  First, note that if then will remain irreducible in  . Suppose then that . There exists an algebraically closed extension such that has a root  . Consider . As is algebraic in we know there exists some unique irreducible minimum polynomial of degree , and thus that  . Using the Degree Formula we see that However, and so for some , so . As we must have . But was defined to be the degree of , which divides . As and , we see that , so so for some . As irreducible polynomials multiplied by a constant are still irreducible, we see that is indeed irreducible in .  Let be a non-constant irreducible polynomial of degree in . Let . Because is irreducible and is a PID, is a maximal ideal. Thus is a field , , and is a root of in  . Hence is no longer irreducible by Theorem 2.2      Consider the two field extensions and .   Prove they have degrees and , respectively. {}: For the second one, show is irreducible in .    Find a primitive element for the extension and find .    Find a primitive element for the extension and find .       Consider the polynomial . This has a root , which is not in . Thus, as has degree 2, it is irreducible by Theorem 2.2 , making it the minimal polynomial of . Thus by Theorem 2.31 we see that .  Next, consider the polynomial . This has a root , which is not in as and . Let for convenience. As , has degree 2, it is irreducible by Theorem 2.2 , making it the minimal polynomial of . Thus by Theorem 2.31 we see that . Thus by the degree formula we have .  By Example 2.22 we see that . However, as is the root of it is algebraic over we see that and thus that .  Next, consider the polynomial . This has a root , which is not in as and . Let for convenience. As , has degree 2, it is irreducible by Theorem 2.2 , making it the minimal polynomial of . Thus by Theorem 2.31 we see that . Thus by the degree formula we have .  Consider , and note that and . Thus and . Thus is a primitive element of this extension field.  Next, consider the monic polynomial , and observe However, as , we see that is the root of this polynomial. Since this is a monic polynomial of degree , it must be the minimal polynomial as well. Thus the minimal polynomial of .  Consider , and note that , and .  Consider , and note that , and thus . Thus , so is a root of this polynomial. Since this is a monic polynomial of degree , it must be the minimal polynomial as well. Thus the minimal polynomial of .      Let be the field extension of obtained by adjoining to all four complex roots of the polynomial . ( is what's known as the “splitting field\" of over .) That is, where , , , and .   Prove that there exist a field extension such that , and . Tip : Note that is real number; find it explicitly.    Determine, with justification, .       Let be the field extension of obtained by adjoining to all four complex roots of the polynomial .  Let . Note that by Eisenstein's Criterion using we see that is the root of an irreducible polynomial in . Thus by Theorem 2.31 we see that is the degree of the minimum polynomial of this extension. However, as is monic and of degree 4, we see that it is the minimal polynomial and thus that . As , this extension will be contained in the real numbers, and thus that .  Next, observe and thus that .  Note that is the root of , and since and , we see that is irreducible in due to it having degree 2. As is monic and degree 2 we see its the minimal polynomial of . By the Degree Formula, we see that .  Note that   ,   ,   , and   , all of which can be written with and . Thus .  We already know that , and thus all that remains is to show that can be expressed in terms of the . Observe and thus that . Thus , and . Hence .      Let be the splitting field of over where is an odd prime integer. Find . Tip : Consider both chains and .    As seen in Example 2.60, is a root of the th cyclotomic polynomial, which is monic and irreducible in . Hence is the minimal polynomial of the th cyclotomic polynomial in , and thus the field extension has degree over by Theorem 2.31. It follows that .  Next, note that is a root of the polynomial , making it algebraic over . Using Eisenstein's Criterion in conjunction with the prime we see that is irreducible in . As , by Problem 5 on the previous homework we see that is irreducible in as well. As is irreducible and monic, we see that it is the minimal polynomial of in , and thus Using the degree formula, we see that Notice that , where , which are all roots of . By the Factor Theorem, there can be no other roots of this polynomial. Thus .  Additionally, notice that and are both roots of . Thus they are both contained in . Observe . Hence , and thus we see that . Therefore, .      Consider the two field extensions and .   Show that has degree .    Show that has degree .    Find a primitive element for the extension .    Find .         Let be a subfield of and suppose every element of is a root of a polynomial of degree in . Prove that . (Note: is not assumed to be a finite extension of .)      Let be a prime integer and let be a root of the polynomial .   Find, with justification, the degree of the field extension over .  Deduce that the polynomial is irreducible in .        Let be the splitting field over of the polynomial   Find, with justification, .  Note that (where is the unique positive, real fifth root of ) is one of the roots of . Prove is the trivial group.      Let be the splitting field over of the polynomial   Note that is irreducible in by Eisenstein's Criterion ( ). The roots of are 1. 2. 3. 4. 5.   As is monic and irreducible it is the minimum polynomial of . Let , and notice . Note that   Let be a primitive root of unity. This is the root a cyclotomic polynomial of degree which is irreducible in . As this has relatively prime order to it is irreducible there as well. Let , and notice . Notice that , and so , completing the proof.      Let and be subfields of a field with and . Let and . Recall that denotes the smallest (with respect to containment) subfield of which satisfies and .   Show that .  Show that if then   Give an example satisfying       Let and be subfields of a field with and . Let and .  We're going to go slightly out of order. By Part (b), we see when . This is the largest possible size of , as everything is irreducible where it can be. Thus   Suppose . As and are finite extensions of they are also algebraic. Thus there exists and such that has degree and has degree .  Thus , making irreducible in . Thus . Notice that , as it is the smallest (with respect to containment) subfield of which satisfies and . Thus we have , as desired.  Let , , and Notice that , and thus .     Qual  Let and be subfields of a field with and . Let and . Recall that denotes the smallest (with respect to containment) subfield of which satisfies and .   Show that .  Show that if then   Give an example satisfying      Let and be subfields of a field with and . Let and .  We're going to go slightly out of order. By Part (b), we see when . This is the largest possible size of , as everything is irreducible where it can be. Thus   Suppose . As and are finite extensions of they are also algebraic. Thus there exists and such that has degree and has degree .  Thus , making irreducible in . Thus . Notice that , as it is the smallest (with respect to containment) subfield of which satisfies and . Thus we have , as desired.  Let , , and Notice that , and thus .      Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "remark-30",
  "level": "2",
  "url": "sec-algebraic.html#remark-30",
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
  "id": "proposition-67",
  "level": "2",
  "url": "sec-algebraic.html#proposition-67",
  "type": "Proposition",
  "number": "1.44",
  "title": "",
  "body": "  Consider the two field extensions and .   Prove they have degrees and , respectively. {}: For the second one, show is irreducible in .    Find a primitive element for the extension and find .    Find a primitive element for the extension and find .       Consider the polynomial . This has a root , which is not in . Thus, as has degree 2, it is irreducible by Theorem 2.2 , making it the minimal polynomial of . Thus by Theorem 2.31 we see that .  Next, consider the polynomial . This has a root , which is not in as and . Let for convenience. As , has degree 2, it is irreducible by Theorem 2.2 , making it the minimal polynomial of . Thus by Theorem 2.31 we see that . Thus by the degree formula we have .  By Example 2.22 we see that . However, as is the root of it is algebraic over we see that and thus that .  Next, consider the polynomial . This has a root , which is not in as and . Let for convenience. As , has degree 2, it is irreducible by Theorem 2.2 , making it the minimal polynomial of . Thus by Theorem 2.31 we see that . Thus by the degree formula we have .  Consider , and note that and . Thus and . Thus is a primitive element of this extension field.  Next, consider the monic polynomial , and observe However, as , we see that is the root of this polynomial. Since this is a monic polynomial of degree , it must be the minimal polynomial as well. Thus the minimal polynomial of .  Consider , and note that , and .  Consider , and note that , and thus . Thus , so is a root of this polynomial. Since this is a monic polynomial of degree , it must be the minimal polynomial as well. Thus the minimal polynomial of .   "
},
{
  "id": "proposition-68",
  "level": "2",
  "url": "sec-algebraic.html#proposition-68",
  "type": "Proposition",
  "number": "1.45",
  "title": "",
  "body": "  Let be the field extension of obtained by adjoining to all four complex roots of the polynomial . ( is what's known as the “splitting field\" of over .) That is, where , , , and .   Prove that there exist a field extension such that , and . Tip : Note that is real number; find it explicitly.    Determine, with justification, .       Let be the field extension of obtained by adjoining to all four complex roots of the polynomial .  Let . Note that by Eisenstein's Criterion using we see that is the root of an irreducible polynomial in . Thus by Theorem 2.31 we see that is the degree of the minimum polynomial of this extension. However, as is monic and of degree 4, we see that it is the minimal polynomial and thus that . As , this extension will be contained in the real numbers, and thus that .  Next, observe and thus that .  Note that is the root of , and since and , we see that is irreducible in due to it having degree 2. As is monic and degree 2 we see its the minimal polynomial of . By the Degree Formula, we see that .  Note that   ,   ,   , and   , all of which can be written with and . Thus .  We already know that , and thus all that remains is to show that can be expressed in terms of the . Observe and thus that . Thus , and . Hence .   "
},
{
  "id": "proposition-69",
  "level": "2",
  "url": "sec-algebraic.html#proposition-69",
  "type": "Proposition",
  "number": "1.46",
  "title": "",
  "body": "  Let be the splitting field of over where is an odd prime integer. Find . Tip : Consider both chains and .    As seen in Example 2.60, is a root of the th cyclotomic polynomial, which is monic and irreducible in . Hence is the minimal polynomial of the th cyclotomic polynomial in , and thus the field extension has degree over by Theorem 2.31. It follows that .  Next, note that is a root of the polynomial , making it algebraic over . Using Eisenstein's Criterion in conjunction with the prime we see that is irreducible in . As , by Problem 5 on the previous homework we see that is irreducible in as well. As is irreducible and monic, we see that it is the minimal polynomial of in , and thus Using the degree formula, we see that Notice that , where , which are all roots of . By the Factor Theorem, there can be no other roots of this polynomial. Thus .  Additionally, notice that and are both roots of . Thus they are both contained in . Observe . Hence , and thus we see that . Therefore, .   "
},
{
  "id": "proposition-70",
  "level": "2",
  "url": "sec-algebraic.html#proposition-70",
  "type": "Proposition",
  "number": "1.47",
  "title": "",
  "body": "  Consider the two field extensions and .   Show that has degree .    Show that has degree .    Find a primitive element for the extension .    Find .      "
},
{
  "id": "proposition-71",
  "level": "2",
  "url": "sec-algebraic.html#proposition-71",
  "type": "Proposition",
  "number": "1.48",
  "title": "",
  "body": "  Let be a subfield of and suppose every element of is a root of a polynomial of degree in . Prove that . (Note: is not assumed to be a finite extension of .)   "
},
{
  "id": "proposition-72",
  "level": "2",
  "url": "sec-algebraic.html#proposition-72",
  "type": "Proposition",
  "number": "1.49",
  "title": "",
  "body": "  Let be a prime integer and let be a root of the polynomial .   Find, with justification, the degree of the field extension over .  Deduce that the polynomial is irreducible in .     "
},
{
  "id": "proposition-73",
  "level": "2",
  "url": "sec-algebraic.html#proposition-73",
  "type": "Proposition",
  "number": "1.50",
  "title": "",
  "body": "  Let be the splitting field over of the polynomial   Find, with justification, .  Note that (where is the unique positive, real fifth root of ) is one of the roots of . Prove is the trivial group.      Let be the splitting field over of the polynomial   Note that is irreducible in by Eisenstein's Criterion ( ). The roots of are 1. 2. 3. 4. 5.   As is monic and irreducible it is the minimum polynomial of . Let , and notice . Note that   Let be a primitive root of unity. This is the root a cyclotomic polynomial of degree which is irreducible in . As this has relatively prime order to it is irreducible there as well. Let , and notice . Notice that , and so , completing the proof.   "
},
{
  "id": "proposition-74",
  "level": "2",
  "url": "sec-algebraic.html#proposition-74",
  "type": "Proposition",
  "number": "1.51",
  "title": "",
  "body": "  Let and be subfields of a field with and . Let and . Recall that denotes the smallest (with respect to containment) subfield of which satisfies and .   Show that .  Show that if then   Give an example satisfying       Let and be subfields of a field with and . Let and .  We're going to go slightly out of order. By Part (b), we see when . This is the largest possible size of , as everything is irreducible where it can be. Thus   Suppose . As and are finite extensions of they are also algebraic. Thus there exists and such that has degree and has degree .  Thus , making irreducible in . Thus . Notice that , as it is the smallest (with respect to containment) subfield of which satisfies and . Thus we have , as desired.  Let , , and Notice that , and thus .   "
},
{
  "id": "exercise-219",
  "level": "2",
  "url": "sec-algebraic.html#exercise-219",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "Qual.",
  "body": "Qual  Let and be subfields of a field with and . Let and . Recall that denotes the smallest (with respect to containment) subfield of which satisfies and .   Show that .  Show that if then   Give an example satisfying      Let and be subfields of a field with and . Let and .  We're going to go slightly out of order. By Part (b), we see when . This is the largest possible size of , as everything is irreducible where it can be. Thus   Suppose . As and are finite extensions of they are also algebraic. Thus there exists and such that has degree and has degree .  Thus , making irreducible in . Thus . Notice that , as it is the smallest (with respect to containment) subfield of which satisfies and . Thus we have , as desired.  Let , , and Notice that , and thus .  "
},
{
  "id": "exercise-220",
  "level": "2",
  "url": "sec-algebraic.html#exercise-220",
  "type": "Exercise",
  "number": "1.2.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-221",
  "level": "2",
  "url": "sec-algebraic.html#exercise-221",
  "type": "Exercise",
  "number": "1.2.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-222",
  "level": "2",
  "url": "sec-algebraic.html#exercise-222",
  "type": "Exercise",
  "number": "1.2.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-closure",
  "level": "1",
  "url": "sec-closure.html",
  "type": "Section",
  "number": "1.3",
  "title": "Algebraic Closures",
  "body": " Algebraic Closures    A field is algebraically closed if every non-constant polynomial has a root in       is algebraically closed. This is the Fundamental Theorem of Algebra.     The following are equivalent for a field : 1. is algebraically closed. 2. Every non-constant polynomial with coefficients in splits completely into (not necessarily distinct) linear factors. 3. There are no non-trivial algebraic extensions of : If is an algebraic field extension then .       (2): Given a non-constant , by assumption has a root and thus with . But then also has a root and so it too factors, and so on.     (3): Say is algebraic. Pick . Then is a root of some . But since factors completely, .     (1). Pick a non-constant . By Proposition , there there is finite extension of in which does have a root. By assumption and so this root must be in .        Given a field , a field is called an algebraic closure of if is an algebraic field extension of and is algebraically closed.      is an algebraic closure of . This follows from the fact that is a finite extension, hence algebraic, and the Fundamental Theorem of Algebra, which we will not prove.     Let Then is an algebraic closure of .  More generally, if is a field extension and is algebraically closed, then the collection of elements of that are algebraic over is an algebraic closure of .    It is far from clear that is a subfield of , and so we first prove that: Given , we have that and are finite and hence so is . Thus, every element of is algebraic over ; that is, . Since is a field, it follows that contains , and if . This proves that is indeed a subfield of .  It is clear from the definition that is an algebraic field extension.  Given a non-constant , let be one of its roots in (which exists since we assume is algebraically closed). Then is an algebraic extension and hence so is by Proposition . This proves and hence that is algebraically closed.      Let be a field extension with algebraically closed. Consider the set (a) Show that is a field. (b) Show that is algebraically closed.    Let . Notice that and are contained in . As , there exists some polynomial with coefficients in such that is a root. However, this polynomial also lives in , so we have [[Mathematics\/Definitions\/Algebraic#$ defn$ – Algebraic (Extension)|algebraic]]. As is also algebraic, we have algebraic as well, as it is a finite extension by the [[Proposition – The Degree Formula|Degree Formula]]. Thus and are algebraic over as well, making a field.  Let . Thus is the root of a polynomial , where . Notice that is a polynomial in as well, and thus is algebraic over this extension as well. Consider the chain of extensions As is algebraic over for all and is algebraic over we see that each step in this chain has finite degree by. By the Degree Formula, is finite and thus so is . Thus is algebraic over , hence , making algebraically closed.      For any field , there exists an [[Mathematics\/Definitions\/Algebraic Closure|algebraic closure]] of . If and are two algebraic closures of the same field , then there exists a field isomorphism such that (i.e., for all ).    Fake Proof of Existence  Let be the collection of all algebraic field extensions of . Make into a poset by declaring iff . We prove has a maximal element.  Let be any totally ordered subset of . If is empty, then is an upper bound for . If is non-empty, set . Using that is totally ordered, it is not hard to see that is indeed a field. It clearly contains as a subfield and every element of it is algebraic over . So and it is an upper bound for . By Zorn's Lemma, has a maximal member .  By construction is algebraic over . If were not algebraically closed, then there would be a non-trivial algebraic extension of it, by Proposition . But then is algebraic by Proposition , and this contradicts the maximality of .  Why is this only a fake proof? It's because , as we've defined it, is not a {} but rather it is something bigger than that. Zorn's Lemma only applies to po{}. How annoying!      Let be a [[Mathematics\/Definitions\/Field Extension|field extension]] and let . Show that if is algebraically closed, then K is algebraically closed.    Let be a field extension let , and suppose that is algebraically closed. Thus every polynomial in has a root in .  Let and let be a root of . Thus , where each . By definition of , each is algebraic over . Notice that as well, making algebraic over this extension as well.  Consider the chain of extensions As is algebraic over for all and is algebraic over we see that each step in this chain has finite degree by Theorem. By the Degree Formula, is finite and thus so is . By the Theorem again, is algebraic over . Thus is algebraic over , hence , making algebraically closed.      Let be any positive prime integer.   Prove that if for some integer k, then p is not an irreducible element of .  Prove is irreducible in .     Let be any positive prime integer.  Suppose for some integer . As , is not an irreducible element of .  As is irreducible in (Eisenstein, ) and is monic, we see that . As is irreducible and monic, we see that . By the Degree Formula we have . Note that the four roots of are the following: - , - , - and - . As , we see that is the splitting field of . Note then that as and the degree of the splitting field is 8, by the Degree Formula we see that the degree of the splitting field of over . As is monic and degree , it must be the minimal polynomial of the second extension and thus irreducible in .      Let and be matrices with entries in . Recall that and are said to be similar over if there exists an invertible matrix, with entries in , such that . Prove the following statements about matrices and with entries in :   If is a field extension, and and are similar over , then they are similar over .   is similar over to its transpose .     Suppose and are similar in . As and have entries in , then they are both in . Thus there exist matrices in RCF such that is similar to and that is similar to . However, is similar to and that is similar to in as well. Notice and are still in RCF. However, as the RCF is unique, this means that in , making them equal in as well. Thus is similar to , as similarity is transitive.  Let be the algebraic closure of . Thus has a Jordan Canonical Form in . For each Jordan Block in the JCF of , let denote the transpose of the identity matrix, and notice that . As this is the case for every Jordan block, we see that the JCF of , , is similar to its transpose. As the is similar to , is similar to , and is similar to , we see that in by transitivity. From Part (a), this yields in . #### Problem In each part, determine, with justification, the degree of the given field extension. 1. . 2. .      Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "exercise-223",
  "level": "2",
  "url": "sec-closure.html#exercise-223",
  "type": "Exercise",
  "number": "1.3.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-224",
  "level": "2",
  "url": "sec-closure.html#exercise-224",
  "type": "Exercise",
  "number": "1.3.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-225",
  "level": "2",
  "url": "sec-closure.html#exercise-225",
  "type": "Exercise",
  "number": "1.3.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-splitting",
  "level": "1",
  "url": "sec-splitting.html",
  "type": "Section",
  "number": "1.4",
  "title": "Splitting Fields",
  "body": " Splitting Fields    For a field and non-constant polynomial , a splitting field of over is a field extension such that 1.  splits completely into linear factors in ; that is, for some , and 2. ; that is, is the smallest subfield of that contains and all the roots of .      As a silly example, if already splits into linear factors over , then itself is the splitting field of over .  The splitting field of over is .  If is any irreducible quadratic polynomial in , then the splitting field of is .  In general, given , a splitting field of is given by where are all of the roots of in .     More generally, we may speak of the splitting field of a list of polynomials in : it is a field extension over which each polynomial factors completely and which is generated by all the roots of all the polynomials.  Note that given a finite list , a splitting field for this list is identical to a splitting field for their product .     Let be a field and a non-constant polynomial. 1. There exists a splitting field for over . 2. If is another splitting field of over , then there is a field isomorphism such that . 3. The degree of any splitting field of is at most where .    For (1), let be an algebraic closure of , which exists by the previous Theorem. Let be the roots of in , and set .  It is clear is a splitting field.  To prove (2), we proceed by induction on the degree of . If is linear, then the only splitting field of over is itself and so the result is clear in this case. Say and are the roots of in and , respectively, and say they are ordered so that, and are roots of the same irreducible factor of in .  By Corollary there is an isomorphism that fixes . Note that factors as in and that is the splitting field of over , and similarly factors as in and that is the splitting field of over . If we blur our eyes slightly and pretend is the identity map, we can apply the inductive hypothesis, since , to conclude that there is an isomorphism as in the statement. I leave a more rigorous argument to your imaginations.  To prove (3), we also proceed by induction on the degree of , using the same notation as in the proof of (2).  Since is a root of , we have and hence In we have with and, as before, is the splitting field of over , so that by induction . By the degree formula      Recall from before that we proved there exists a field extension in which has at least one root. So for some and . We can then find a field extension of in which has at least one root , and so on. In this way we build a field extension such that factors in as for some . Finally, is a splitting field of .    The splitting field of over is , where . It is not hard to see that . We have since is irreducible in (by Eisenstein). Since and thus , the degree formula gives that . By the Theorem, and hence . (We could also have proven this without appealing to the Theorem.)    The splitting field of is This holds since . It is not too hard to see that the degree of this splitting field over is , far smaller than the upper bound given by the Theorem.    Let . Then splits completely in and its roots are the  -th roots of . One of these is . Notice that every other -th root of is a power of this one. We thus see that is the splitting field of over . This field is called the {} of roots of 1 over . This is a somewhat special example: upon joining one of the roots of we got all the others for free. This happens in other examples too, but is certainly {} a general principle.  In particular, we see that the degree of is at most , far less than the bound of given by the Proposition above. In fact, it is at most since factors as , and hence the minimum polynomial of is a divisor of .  When is prime, then is irreducible, as we proved before, and hence it must equal the minimum polynomial of . So, in this case, the degree of is exactly , but it can be smaller than in general; for example, when , and . Note that factors as and of course .  The irreducible polynomial is known as the {}.     If is the splitting field over of an irreducible polynomial and if are any two roots of , then there is a field [[Mathematics\/Definitions\/Automorphism|automorphism]] such that and .    We basically already proved this, but since it is of large importance, let's do so again:  Since are roots of the same irreducible polynomial, by Corollary there is an isomorphism such that and . We have two field maps, (actual inclusion) and the composition of , and they realize as the splitting field of over in two different ways. Since splitting fields are unique, an isomorphism such as exists.     Let be the splitting field of over ; so .  The Porism gives that there is a field automorphism of such that . This one is clear – complex conjugation gives such an isomorphism.  It also gives there is a field automorphism of such that . This is less obvious.     For fields and , we say is a finite splitting field over if is the splitting field over of some polynomial . Assume and are both finite splitting fields over and prove is also a finite splitting field over .    Let and be finite splitting fields over . So there exist polynomials such that splits in and splits in . Note that both and are finite extensions, as each can be reached by adjoining each of the roots of and , respectfully.  If then we have our splitting field, as is a splitting field over itself.  Let be an irreducible polynomial in with a root in . Then has a root in and a root in . If a splitting field has one root of a polynomial it has them all, and so we see that splits in both of these fields. Thus it splits in .      Let be the splitting field of over (a) Find a basis for as a vector space over . (b) Show that is not abelian.    Let be the splitting field of over   First, note that is irreducible in by Eisenstein's Criterion ( ) The roots of are - , - , - , and - . Let and notice . As we see that , and thus , meaning our basis will have eight elements: 1. 1 2. 3. 4. 5. 6. 7. 8.   Now that has been verified to be a splitting field, we see that is isomorphic to a subgroup of of degree .  Any subgroup of of order is a Sylow -subgroup. By Sylow's theorems, the number of Sylow -subgroups is either or .  If there are three they are all conjugate, and conjugation induces an isomorphism on the group, we see that all three subgroups are isomorphic.  Let be the set of left cosets of the subgroup of . Note that . Let act on by left multiplication. This action induces a homomorphism where is the permutation group on . As shown in class, the kernel of this homomorphism is the largest normal subgroup contained in , which is . Thus, is injective and the image of is a subgroup of isomorphic to .      Assume is an algebraic field extension such that every non-constant polynomial in splits completely into linear factors in . Prove is an algebraic closure of .    Let be an algebraic field extension such that every non-constant polynomial in splits completely into linear factors in .  Let be a polynomial in , so , with , and let be a root of . There [[Theorem – Existence and Uniqueness of Algebraic Closures|exists]] some field extension such that is algebraically closed, meaning . Notice that is [[Mathematics\/Definitions\/Algebraic|algebraic]] over .  Consider the chain of field extensions making algebraic over as well. As every non-constant polynomial in splits completely into linear factors in , this yields .      Let be the splitting field of over . (Recall that this extension occurred on the last problem set, and that where - , - , - , and - .) Prove .    Note that from the previous homework, we know that , and that . Additionally, we know the following: - , - , - , and - . Note that by Eisenstein's Criterion using we see that is irreducible in . As has characteristic 0, we see that is separable as well.  As is the splitting field of an irreducible polynomial in , by Theorem 2.90 we see that . In the Gaussian integers, it is known that if both and are nonzero then, is a Gaussian prime if and only if is an ordinary prime. Note that , and that , which is prime. Thus is prime in . Thus we may invoke Eisenstein's Criterion using to see that is irreducible in , as does not divide 5, but we'll prove it just to be sure.  Suppose . Then , so , and thus . As 5 has no imaginary component, it must be the case that , and thus that . Substituting in, we see that , and thus that , which has historically not been an integer.  Anyway, we may thus apply Porism 2.61 to see that there exists some such that . We may regard as an element of since, by definition, is a subgroup of .  As , observe the following glory: With that in mind, we examine and and don't forget So corresponds to the permutation (1 2 3 4). We have proven that is isomorphic to a subgroup of having order at most 8 and that it contains an element or order 2 and (1 2 3 4), an element of order 4. Since the subgroup generated by these two elements has order 8, we see that . (Also by Sylow's Theorem, only has one subgroup of order 8, and it is ).      Let be a positive integer and let be a prime integer. Consider the polynomial and define to be the splitting field of over .   Show that the set of roots of in is a subfield of .  Show that has exactly elements.        Let be the splitting field of over    Find, with justification, the degree of over .  Let where , a primitive root of unity. Prove is irreducible in .      Let be the splitting field of over   First, notice that by Eisenstein's Criterion]] ( ) we have irreducible in .  The roots of are the following: 1. 2. 3. 4. 5.   As is monic and irreducible, it is the minimum polynomial of . Let and notice .  Notice that , a primitive -th root of unity, is the root of , the fourth cyclotomic polynomial, which is monic and irreducible in (See: [[Proposition – Cyclotomic Polynomial Irreducible|Result]]). Thus is the minimum polynomial of and .  We know that , as every generator of can be written using and Let , , and . By the [[Proposition – The Degree Formula|Degree Formula]], we have - , and thus - , and thus As and we know that .  Thus we have .  Let where . From Part (a) we know . As , we know that has degree . As is a monic polynomial of degree , we see that it is the minimum polynomial and thus irreducible.      Let be the splitting field of over . (a) Prove, by adding two appropriate roots of or otherwise, that there exists such that and . (b) Determine, with justification, .    Let be the splitting field of over .  First, we note that the roots of are the following:   and First we examine . Notice that is a root of the polynomial , which is irreducible in using Eisenstein's Criterion]] with . Thus is monic and irreducible, making it the minimum polynomial of . Thus . Notice that , so . Thus there exists such that and .  Now let . Notice that is a root of the polynomial , which is irreducible in as and . Thus is monic and irreducible, making it the minimal polynomial of Thus and by the [[Proposition – The Degree Formula|Degree Formula]].  Notice that , so . Thus so is , and so we see that , and thus that as well, making . As seen in Part (a), each root can be expressed in terms of and , and so as well. Hence and we have .      Let where is an odd prime, and let be the splitting field of over . Find, with justification, .    Let where is an odd prime, and let be the splitting field of over . Using Eisenstein's Criterion with we see that is irreducible in . Notice that is a root of this polynomial. As is monic and irreducible it is the minimum polynomial of , and thus . Let be a primitive root of unity. Notice that is a root of the cyclotomic polynomial, , which is irreducible in by the Gospel of Mark.  As is the splitting field of , there exists a root of . Consider . As is algebraic in we know there exists some unique irreducible minimal polynomial of degree , and thus that . By the Degree Formula we see However, and so for some , so . As we must have . But was defined to be the degree of , which divides . As and , we see that , so for some . As irreducible polynomials multiplied by a constant are still irreducible, we see that is indeed irreducible in .  As is monic and irreducible in we see that it is the minimum polynomial of , and thus . As , we have .      Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
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
  "id": "remark-31",
  "level": "2",
  "url": "sec-splitting.html#remark-31",
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
  "id": "remark-32",
  "level": "2",
  "url": "sec-splitting.html#remark-32",
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
  "id": "proposition-84",
  "level": "2",
  "url": "sec-splitting.html#proposition-84",
  "type": "Proposition",
  "number": "1.76",
  "title": "",
  "body": "  Let be the splitting field of over . (Recall that this extension occurred on the last problem set, and that where - , - , - , and - .) Prove .    Note that from the previous homework, we know that , and that . Additionally, we know the following: - , - , - , and - . Note that by Eisenstein's Criterion using we see that is irreducible in . As has characteristic 0, we see that is separable as well.  As is the splitting field of an irreducible polynomial in , by Theorem 2.90 we see that . In the Gaussian integers, it is known that if both and are nonzero then, is a Gaussian prime if and only if is an ordinary prime. Note that , and that , which is prime. Thus is prime in . Thus we may invoke Eisenstein's Criterion using to see that is irreducible in , as does not divide 5, but we'll prove it just to be sure.  Suppose . Then , so , and thus . As 5 has no imaginary component, it must be the case that , and thus that . Substituting in, we see that , and thus that , which has historically not been an integer.  Anyway, we may thus apply Porism 2.61 to see that there exists some such that . We may regard as an element of since, by definition, is a subgroup of .  As , observe the following glory: With that in mind, we examine and and don't forget So corresponds to the permutation (1 2 3 4). We have proven that is isomorphic to a subgroup of having order at most 8 and that it contains an element or order 2 and (1 2 3 4), an element of order 4. Since the subgroup generated by these two elements has order 8, we see that . (Also by Sylow's Theorem, only has one subgroup of order 8, and it is ).   "
},
{
  "id": "proposition-85",
  "level": "2",
  "url": "sec-splitting.html#proposition-85",
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
  "id": "exercise-226",
  "level": "2",
  "url": "sec-splitting.html#exercise-226",
  "type": "Exercise",
  "number": "1.4.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-227",
  "level": "2",
  "url": "sec-splitting.html#exercise-227",
  "type": "Exercise",
  "number": "1.4.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-228",
  "level": "2",
  "url": "sec-splitting.html#exercise-228",
  "type": "Exercise",
  "number": "1.4.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-separable",
  "level": "1",
  "url": "sec-separable.html",
  "type": "Section",
  "number": "2.1",
  "title": "Separability",
  "body": " Separability    Let R be a commutative ring. The characteristic of , written , is the unique non-negative generator of the kernel of the unique ring homomorphism . (Recall .)  Equivalently, is the smallest positive integer such that , if such and integer exists, and otherwise.      Observe that for any integer and commutative ring , we have in (i.e., ) if and only if .    –   and for any .    – Prime Field  For a field its is the smallest subfield of ; i.e., it is the intersection of all subfields of .    – Characteristic and Prime Fields  Let F be a field. 1. The characteristic is either or a prime number . 2. if and only if the [[Mathematics\/Definitions\/Prime Field|prime]] subfield of is isomorphic to ; for a prime integer if and only if the prime subfield of is isomorphic to .    Proof.  For the first assertion, consider the unique ring homomorphism . Since is a domain, the kernel of is a prime ideal (since and is a subring of ). The result holds since the only prime ideals of are and for a prime integer . (Note that this proof shows that, more generally, the characteristic of an integral domain must be either or a prime.)  For the second assertion, observe that the smallest {} of is the image of the ring map , and by the first assertion, this image is isomorphic to either or . The latter is already a field and hence it is the prime field of . In the former case, the prime subfield is isomorphic to the field of fractions of , which is .    – No Homomorphisms if Different Characteristics  If and are fields such that [^1] then there exist no ring homomorphisms from to (or vice versa).    Proof.  Suppose and are fields and is a ring homomorphism. Let and be the unique ring maps from to and . Since is a ring map from to , we have by the uniqueness of . Since is a field and is not the zero ring, the map is injective. Since is injective, it follows that , and hence we obtain that . By definition of characteristic, we conclude .    – Root Multiplicity  For a field and a polynomial [^1], let be an [[Mathematics\/Definitions\/Algebraic Closure|algebraic closure]] of and a root of . The of in is the number of times appears in the factorization of in . (This number is independent of choice of algebraic closure by uniqueness of such closures up to isomorphism.[^2])    – Separable (Polynomial)  Let be a field and a polynomial in [^1]. If the [[Mathematics\/Definitions\/Multiplicity|multiplicity]] of every root is , we say is a ; i.e.  is separable provided it has no repeated roots.    – Derivative  For any field and [^1], define its to be     – Derivatives in Characteristic  If and for , then . So beware that non-constant polynomials can have derivatives! Observe, however, that this cannot occur in characteristic .    – GCD and Field Extensions  Let be a field. For [^1], not both of which are , recall that denotes the unique monic generator of the ideal in generated by and . 1. For any field extension , . 2. Let be an [[Mathematics\/Definitions\/Algebraic Closure|algebraic closure]] of . if any only if and have no common roots in .    Proof.  Let . To prove (1), we note that is the unique monic polynomial such that - for some , - for soem , and - for soem . Since is a subring of , these three properties also hold when we regard as belonging to and thus by the uniqueness property, we have .   is a consequence of (1), since if two polynomials factor completely into linear factors, then they are relatively prime if and only if they have no linear factors in common, which is equivalent to their having no roots in common.     – Criteria for Separability  Let be field and an [[Mathematics\/Definitions\/Algebraic Closure]] of . 1. Given [^2] and , the [[Mathematics\/Definitions\/Multiplicity|multiplicity]] of in is at least if and only if and [^1]. 2. is separable if and only if in . 3. If is irreducible in , then is separable if and only if .    Proof.  For (1), suppose is a root of of multiplicity at least two. Then in and hence , by the Product Rule. It follows that . Conversely, suppose . Since , we have and hence . Since it follows and thus has multiplicity at least two.  For the second assertion, by (1), we have that is separable if and only if and has no common roots in . The result thus follows from the Lemma.  For the final assertion, assume is irreducible. Since the degree of is strictly less than the degree of , we have that if and only if .    – Separability and   is not separable sine is a double root (it factors as ). As predicted by the Theorem, it fails to be relatively prime to its derivative, which is , since each are divisible by .   is separable in because it has 3 distinct roots in , namely . As predicted by the Theorem, it is relatively prime to its derivative .  Now interpret as belonging to . Then is not separable. As predicted by the Theorem, it is not relatively prime to its derivative, which is .    –  Let be a field of characteristic and assume is an element such that for all .Then is irreducible but not separable. It is not separable since in we have where . Also note that its derivative is .  It is less obvious that it is irreducible, but we can see that this is indeed the case in a specific example: Take (the field of fractions of the polynomial ring ) and let . In this case, is seen to be irreducible, by Eisenstein, but not separable.    – Separability and Characteristic Zero  If is an irreducible polynomial with coefficients in a field of characteristic , then is [[Mathematics\/Definitions\/Multiplicity|separable]]. More generally, if is irreducible of degree and , then is separable.    – Separable (Field Extension)  An algebraic field extension is called if for every its minimum polynomial is [[Mathematics\/Definitions\/Multiplicity|separable]] (i.e., has no repeated roots in an algebraic closure of ).    – Separability, Algebraic Extensions, and Char Zero  If [^1], then every algebraic field extension is [[Mathematics\/Definitions\/Multiplicity|separable]].    Proof.  Suppose is an algebraic extension and let be algebraic over . Then the minimal polynomial of over has coefficients in and is of the form where . We need to show that is separable, i.e., has no repeated roots in its splitting field.  Suppose has a repeated root in some splitting field of , i.e., for some polynomial . Since is also a root of , we have . Since is an algebraic extension, is algebraic over , so . It follows that , i.e., , which means that is a repeated root of , contradicting the assumption that has no repeated roots. Hence is separable, and since was an arbitrary algebraic element of , we conclude that is a separable extension.    –  Let and be indeterminants. The extension of fields given by identifying with is not separable. Somewhat more precisely, is isomorphism to the subfield of consisting of elements of the form , with the isomorphism given by sending to .  Then is a root of the polynomial . Moreover since is the field of fractions of the PID and is a prime element of , we may apply Eisenstein (and Gauss) to conclude that is irreducible in . This proves that . This polynomial is not separable since in it is equal to and hence has a repeated root. (Or, you may use that its derivative is .)    Problem 9 – Separable, Factorization, and Irreducibility  Assume is field and let . Recall that is separable if has no repeated roots in an [[Mathematics\/Definitions\/Algebraic Closure|algebraic closure]] of .   Assume [^1]. Prove that is separable if and only if the irreducible factorization of in has no repeated factors.  Fix a prime integer , let be the field with elements, and let be the [[Mathematics\/Definitions\/Field of Fractions|field of fractions]] of the polynomial ring . Prove is irreducible in but not separable.    proof   Part (a)   Suppose that is not separable, so has a repeated root in , which we denote . So is a factor of . By Corollary 2.96, is separable, so the minimal polynomial of in has no repeated root in . As does have a repeated root (by supposition) it cannot be the minimum polynomial of . Thus for some such that has as a root, otherwise would not obtain its repeated root. However, this means that , meaning that has as a factor as well. Thus we see that is a repeated factor of , one from the minimum polynomial, one from .   Suppose that the prime factorization of in admits a repeated factor. Thus there exists some prime (and thus irreducible) such that . However, has a root in , so in we see that has as a root as well, as . But since has factor , it shows up twice in the factorization of because . So has multiplicity at least 2, so is not separable.    Part (b)  Let be indeterminants, , and such that (as seen in Example 2.78). Note then that is a root of the polynomial .  Moreover, since is the field of fractions of the PID and is a prime element of , we may apply Eisenstein’s Criterion (using ) to conclude that is irreducible in . Thus is the minimum polynomial of in .  However, as the derivative of this polynomial is , we see that the is not separable by Proposition 2.72. However, by the Freshman’s Dream, we see that . But as , we see that the prime factorization of admits no repeated factor. #### Problem 6 – Strict Inequality of Automorphism Group Assume is a finite [[Mathematics\/Definitions\/Field Extension|extension]] of fields and that the characteristic of is , where p is a prime. Prove that if there exists an element such that , then . You may use, without proof, the fact that for any finite extension of fields     Proof .  Let is a finite extension of fields and that the characteristic of is , where is a prime, and suppose there exists an element such that .  Consider the polynomial , and notice that , as we are in a field of characteristic . However, this characteristic also yields . As is a field we have as a UFD, and thus as is irreducible in it is also prime. Therefore this is the unique factorization of up to associates. If was reducible it would thus have to be divisible into power os , which will never be reducible as . Thus is irreducible in , making it the minimal polynomial of . However, if this would make the splitting field of over , which it is not, given . Thus . #### Problem 5 #unfinished Let F be a field, and let . Recall that is separable provided, for every extension field has no multiple roots in . (A multiple root is an element such that in    Prove that is separable if and only if and its derivative are relatively prime in .  Suppose that is irreducible and that the degree of is not a multiple of the characteristic of . Prove that is separable.       Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "def-ring-characteristic",
  "level": "2",
  "url": "sec-separable.html#def-ring-characteristic",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": "  Let R be a commutative ring. The characteristic of , written , is the unique non-negative generator of the kernel of the unique ring homomorphism . (Recall .)  Equivalently, is the smallest positive integer such that , if such and integer exists, and otherwise.   "
},
{
  "id": "exercise-229",
  "level": "2",
  "url": "sec-separable.html#exercise-229",
  "type": "Exercise",
  "number": "2.1.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-230",
  "level": "2",
  "url": "sec-separable.html#exercise-230",
  "type": "Exercise",
  "number": "2.1.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-231",
  "level": "2",
  "url": "sec-separable.html#exercise-231",
  "type": "Exercise",
  "number": "2.1.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-galext",
  "level": "1",
  "url": "sec-galext.html",
  "type": "Section",
  "number": "2.2",
  "title": "Galois Extensions",
  "body": " Galois Extensions   – Field Automorphism Group Let be a field. The of , written , is the collection of field automorphisms of , with the binary operation of composition.  The of a field extension , written , is the subgroup of consisting of those field automorphisms of that restrict to the identity on .   –  I claim has two elements (and so is a cyclic group of order ): the identity map on and the element given as complex conjugation. It is easy to see each of these is an element of — for , this amounts to the fact that complex conjugation commutes with addition and multiplication of complex numbers (and that it sends to ).  To see these are the only elements of , suppose . For any , we have since . Moreover, and so . Thus or .    –  For any square-free integer , has order , and its two elements are the identity and the map sending to . Checking that each really is an element of this group and that there are the only two elements in this group is done similarly to the previous example.    – and  For a more complicated example, let be the splitting field of over . Recall  Let us ponder how big could be. Pick any . Since is a ring homomorphism, for any we have and thus is also a root of . In other words, for each we have for some . Moreover, since is generated as a field extension of by , the action of on the three roots completely determines the action of on all of . In more detail, every element of is given taking -linear combinations of sums and products and quotients of these roots, and any element of preserves sums, products and -linear combinations.  To summarize, we have proven that there are {} possibilities for . In fact, more is true: The function given by sending to its restriction to the subset is an injective group homomorphism. Thus is isomorphic to a subgroup of . I claim that and hence . I will prove this directly – we will learn of fancier methods to do so later.  First we notice that the field automorphism of given by complex conjugation, namely , permutes the roots of and hence it restricts to a field map from into . Since this map is -linear and injective (as are all field maps) and is a finite dimensional -vector space, this map must be onto as well. So, we obtain an element given by for all . It corresponds .  Next, we apply Porism , which gives such that . So, in the numbering above, corresponds to either or in . We don’t really know which of these it is. (In fact, both will occur — the map is not unique.) But either way we have proven the claim: For notice that both subsets and of generated all of .  In other words, every possible permutation of roots of arises as a field automorphism of its splitting field over . This is what I meant before when I said that the roots of are “as symmetric as possible’’.    – Automorphisms and Permutations (Fields)  Suppose is a field extension and . Let , the set of roots of in . 1. For any and [^1], we have . 2. If then for all . 3. The function [^2] given by for is a homomorphism of groups. 4. If [^3] then is one-to-one. In particular, if is the splitting field over of , then is isomorphic to a subgroup of where is the number of roots of in . (Note that [^4].)   Proof.  Say with . Then This proves (1) and (2) is an immediate consequence.  To show (3) we need to first prove that for all , the function is a bijection. (The target of this function is indeed by (2).) Since is finite, we just need to show its one-to-one. This holds since itself is one-to-one. (If for then and, since is one-to-one, we have .) Since the group laws of and are both given as function composition, it is clear that is a group homomorphism. In detail, for all and so .  Now asssume . We show is one-to-one by showing its kernel is trivial. Suppose ; that is, suppose for all . We show . Define the so-called {} of . Note that since and we also have by assumption. It is easy to see that is a subfield of . (Here are the details: Clearly . For , we have and, if , and thus .) So, is a subfield of that contains and , but recall that is the {} subfield of that contains and , and so we must have . But then for all and hence .     – Fixed Field  Let [^1]. Define the so-called of .    – Automorphisms and Group Actions (Fields)  Let be the spitting field of some . 1. The group [^1] acts on the set of roots in by the rule . 2. This action is faithful. 3. If is irreducible, this action is transitive.   Proof.  We proceed by induction on . When , we have and is the one element group.  For , pick and let . Consider the extension . Note that is a subgroup of , by definition. By induction we have . Using the degree formula and the fact that , it suffices to prove . This follows from:  {} Let be the set of roots of that belong to . Then the function given by is well-defined and injective. (Note: is not necessarily normal, and so isn’t a group. By I just mean the {} of left cosets of in .)  By Proposition , for each we have . Moreover, by definition of , for all , we have and hence . This proves is a well-defined function (i.e., it is independent of left coset representative). For , if then which implies (since if an automorphism of fixes and then it fixes ). Thus implies and hence is one-to-one.  Since , we conclude from the claim that . Putting all this together gives .     – Automorphisms and Finite Extension Degree  If is a finite extension of fields, then [^1].   Proof.  We proceed by induction on . When , we have and is the one element group.  For , pick and let . Consider the extension . Note that is a subgroup of , by definition. By induction we have . Using the degree formula and the fact that , it suffices to prove . This follows from:  {} Let be the set of roots of that belong to . Then the function given by is well-defined and injective. (Note: is not necessarily normal, and so isn’t a group. By I just mean the {} of left cosets of in .)  \\begin{proof} By Proposition , for each we have . Moreover, by definition of , for all , we have and hence . This proves is a well-defined function (i.e., it is independent of left coset representative). For , if then which implies (since if an automorphism of fixes and then it fixes ). Thus implies and hence is one-to-one.     – and  Let be the splitting field of the irreducible polynomial . So where . By the Corollary above, the action of on is faithful so that we have an injective group homomorphism .  Note that this map cannot possibly be onto: there is no such that , , , and ; i.e., the permutation of these roots is not realizable by a field automorphism. To see this note that if then . So, any field automorphism that interchanges and would have to also interchange and . In fact, as we shall see, , considerably smaller than .  Let us compute . Note that since and in fact . In the chain of extensions the first one has degree , since is irreducible by Eisenstein, and the second has degree at most since is a root of . It would be less than two if factors in . But since and is not contained in , the second extension cannot be trivial and so must have degree exactly . We conclude . It follows from Proposition that . (In fact, since is the splitting field of a separable polynomial, the Theorem below will tell us that . But we won’t appeal to this fact here.)  We claim and is isomorphic to the subgroup of generated by and . (This is isomorphic to .)  The map given by complex conjugation permutes the roots of and it restricts to an automorphism of — specially, it fixes and interchanges and . It follows that complex conjugation determines an element that corresponds to .  By the degree formula we get . Since , the degree of must be . This shows that must remain irreducible as a polynomial in ; this is not obvious, but we have now proven it, and this fact will be useful in what we do next.  To construct another element of , we use that that is the splitting field of the polynomial over and that, as we just showed, is irreducible in . We may thus apply Porism (also stated in the Corollary) to get that there is an element such that . We may regard as an element of since, by definition, is a subgroup of . We have since by construction. A key point here is that if we had merely specified to be an element of sending to , then we would have no idea what does to — it was key to define as we did. We then also get and . So corresponds to the permutation .  We have proven that is isomorphic to a subgroup of having order at most (by the Proposition above) and that it contains and . Since the subgroup generated by these two elements has order , the claim follows.    – Normal Extension  A finite extension is called if is the splitting field of some (non-unique) polynomial [^1].    – Normal Extension   is a normal extension of since it is the splitting field of .    – not Normal  Is normal? It isn’t the splitting field of clearly, but maybe it somehow is the splitting field of some other polynomial. It in fact is not normal, but it is not so obvious that it isn’t. The next Theorem will allow us to prove it isn’t normal.    – Galois Extension Equivalencies  Let be a finite extension of fields. The following are equivalent. 1. [^1] 2. The extension is both normal and separable. 3. is the splitting field of some separable polynomial with coefficients in .    – Galois Extension  A finite extension of fields is a if the three equivalence conditions of this theorem hold: 1. [^2] 2. The extension is both normal and separable. 3. is the splitting field of some separable polynomial with coefficients in .  In this case it is customary to write for the group [^1] and to refer to it as the of the extension – they are exactly the same group, but the former is used only when the extension is Galois.     Recall from the Proposition above that holds for any finite field extension. So, such an extension is Galois if and only if its automorphism group is as large as is allowed by the Proposition.    – Galois Extension   is a Galois extension of , since it the splitting field of . We proved above that has six elements and , as the Theorem predicts.    – not Galois  I claim is not a Galois extension of . Let be the set of all roots of in . Since , has just one element: . Since , the function is injective by Proposition and so since , we have . Thus it isn’t Galois. Since it is separable, must not be a normal extension of .    – One Root to Factor them All  Suppose is a finite extension of fields and [^1] is an irreducible polynomial. If is a normal extension and has at least one root in , then factors completely in .   Proof.  Say is the splitting field of . Let be the splitting field of . So . Say is a root of that belongs to , and let be any other root. We aim to prove .  Recall that we know that if is a splitting field over of an {} polynomial, then acts transitively on the roots of this polynomial. Something more general is true: If is the splitting field over of some possibly reducible polynomial , then for each irreducible factors , acts transitively on the roots of . I won’t prove this, but will apply it to . Since is irreducible, we get that there is there a such that . Let be all the roots of , so that . Since fixes , it must permute these roots. In particular, . But then .     – Galois and Characteristic  Let be a field of characteristic , for a prime integer , and assume is a finite field extension of such that there exists an element of with but . Then is not Galois since in this case. You will prove this in the Homework.    Problem 5 – Galois Group and Transitive Action  Let be a finite Galois extension and let be the Galois group of . Suppose that and let be the minimum polynomial of over . Prove that ###### Proof . Let be a finite Galois extension and let be the Galois group of . Suppose that and let be the minimal polynomial of over . Thus acts on the roots of faithfully.[^1] Additionally, as is the minimal polynomial of it is irreducible, making the action transitive as well.  As is Galois over we know that splits into linear factors, each of the form , where is a root of . As our action is transitive, for every root there exists a such that , or . #### Problem 4 – Prime Degree and Splitting Field Let be a field of characteristic , , and consider the polynomial [^1].   Prove that is either irreducible over or it splits into distinct linear factors over . ( Hint : If is a root of , consider for .)  Suppose is irreducible over and let be a splitting field of over . Prove that the Galois group of over is cyclic.     Proof.  Let be a field of characteristic , , and consider the polynomial .   Part (a)  Suppose has a root, , in . Then . Consider for some , and observe . By The Freshman’s Dream, we have , but as , we really have . By Fermat’s Little Theorem, , and thus . Thus we have found roots of , and thus splits into linear factors.  Suppose then that no root of exists in . Let be a splitting field of over , and note that from the above paragraph we have . As , we see , and thus is separable. Hence is a Galois extension. Thus there exists a such that . So for some . Notice . As is prime, we see that , and thus we need to apply to  times in order to get back to . Thus , so . Thus . Thus the minimum polynomial of must have degree . As is a root of and is monic, it must be the minimal polynomial and is thus irreducible.    Part (b)  Suppose is irreducible over and let be a splitting field of over . Let be a root of Consider . By part (a), contains all the roots of , hence . As is monic and irreducible, it is the minimum polynomial of , and thus . Hence . All groups of prime order are cyclic, completing the proof. #### Problem 9 – Primitive Sixth Root of Unity Consider . (a) Let be a root of and prove is a Galois field extension of . (Hint: First show is primitive -th root of unity.) (b) Find the Galois group .     Proof.  Consider . ###### Part (a) Let be a root of . Note that , and so so yay! It’s primitive. Using one th primitive root we can obtain all the others, specifically . So we multiply each root by this to get all the others. So we have our splitting field.   Part (b)  Since is Galois, we see that . So is either or The roots of are for .  By the Porism there exists a such that . Let , and note that . Additionally, note that when and when .  Observe then that Similarly, we see that and . Thus corresponds to the permutation .  Using the Porism again we see there exists a such that . Using a similar process as above we see that corresponds to . However, observe that , while . Thus these elements do not commute, so we cannot be in . Thus . #### Problem 6 #unfinished Let be a primitive th root of unity. (a) Find and generator(s) for . (b) Draw the subfield lattice for and indicate the degrees of each extension. (You do not have to find generators for each of the subfields) #### Problem 6 #unfinished Let be a finite Galois field extension of . Let and be subfields of such that is normal, and . Prove that #### Problem 6 #unfinished Let be the splitting field of the polynomial over . Find , and describe the elements of explicitly. #### Problem 6 #unfinished Let be a finite Galois field extension, , and . Let be an element of and its minimal polynomial over ; set .   Prove there are distinct elements in the set .  Prove ##### Proof . Let be a finite Galois field extension, , and . Let be an element of and its minimal polynomial over ; set . #### Problem 8 #unfinished Let be an extension of fields and let . Show that         Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-232",
  "level": "2",
  "url": "sec-galext.html#exercise-232",
  "type": "Exercise",
  "number": "2.2.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-233",
  "level": "2",
  "url": "sec-galext.html#exercise-233",
  "type": "Exercise",
  "number": "2.2.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-234",
  "level": "2",
  "url": "sec-galext.html#exercise-234",
  "type": "Exercise",
  "number": "2.2.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-ftgt",
  "level": "1",
  "url": "sec-ftgt.html",
  "type": "Section",
  "number": "2.3",
  "title": "The Fundamental Theorem of Galois Theory",
  "body": " The Fundamental Theorem of Galois Theory     – Intermediate Field Given a field extension , an is a subfield of that contains , so that .    – Intermediate Extensions are Galois  If is a (finite) Galois extension, then so is for any intermediate field .   Proof.  This is immediate from the definition: If is the splitting field over of a separable polynomial , then is also the splitting field over of the same polynomial, now regarded as belonging to .      In the setting of the previous Proposition, need not be Galois over . For , is Galois over but is not Galois over , as we noted before.    – Fixed Subfield  For a field and a subgroup of [^1], the    , denoted , is by definition  really is a subfield of since where , and we proved before that is a subfield of .    – Fundamental Theorem of Galois Theory  Suppose is a (finite) Galois field extension. Then the functions[^1] given by is a bijection whose inverse is given by Moreover, this bijective correspondence enjoys the following properties: 1. and each reverse the order of inclusions. 2. and convert degrees of extensions to indices of subgroups: 1. or, equivalently, 2. . 3. Normal subgroups correspond to intermediate fields that are Galois over : 1. If then is Galois.[^2] 2. If is Galois, then . 4. If for a normal subgroup , then . 5. If are subgroups of with corresponding fixed subfields and , then 1. and 2. and .    – Galois Correspondence and Lattices  The Galois correspondence induces a lattice isomorphism between the lattice of intermediate fields of a Galois extension and the “dual’’ of the lattice of subgroups of .    – FTGT and  Let be the splitting field of over . Let’s use the fundamental theorem to list all intermediate fields for and to determine which are Galois over . Notice that without the theorem, it isn’t even obvious that there are only a finite number of such intermediate fields.  We know corresponds to the element subgroup of generated by and where we number the roots as .  This group is isomorphic to and we can make this isomorphism explicit by labeling the four corners of a square by , counter-clockwise. So, is rotation by degrees and is reflection about the line joining vertices and .  The subgroup lattice and intermediate field lattice are represented below, with normal subgroups and Galois extensions highlighted (boxed).  The subgroups are and the lattices are INSERT IMAGE The intermediate fields are the fixed subfields of associated to each of these subgroups. In some sense, this answers the question, but let’s find explicit generators for at least some of these.   corresponds to and corresponds to .  Set . has degree over . It is clear (and ) belongs to and since , we must have .  Likewise .   also has degree four over . Let and note . If , then would be fixed by a subgroup of index that contains , and the only possibility is . But sends to . So we must have and hence .  I’ll skip the details on and , but they are and .   has degree equal to over and so we merely need to find a single, non-rational element of fixed by . Since (which can be seen by looking back at how we built originally or by noting that ), we get .  I’ll skip the details on , but it is .   also has degree two over and so we just need to find a single non-rational element fixed by the two generators of . Note that and so is fixed by both and . Thus .  Finally, we note that are normal subgroups of , since is the center of and each of has index two. Some messy checking reveals these to be the only normal subgroups. It follows from the Fundamental Theorem that are the only intermediate fields that are Galois over . As an example, to see directly that is not Galois over , note that is a root of , which is irreducible. But is also a root of this polynomial and it is not in . We conclude from Proposition that is not a normal extension of .    – Cyclotomic Extensions Revisited  Let be a field, let be a positive integer such that does not divide , and let be the algebraic closure of . If is a primitive -th root of 1 over , then is a finite Galois extension, and is a cyclic group that is isomorphic to a subgroup of .     If is a field of prime characteristic and is an integer that is divisible by , then is not separable.    – Two Complex Roots and  Let be an irreducible, fifth degree polynomial in with exactly three real roots and let be its splitting field over . Let the real roots be and the imaginary ones be and . Then is isomorphic to . You will prove this on one of the final exam problems (for a specific case), but let me get you started with a couple {}: Show that is isomorphic to a subgroup of with . You may use (without justifying it) that if is a -cycle in and is any five cycle in , then the subgroup of they generate is all of .    – Finding Unique Intermediate Field  If is a finite Galois extension of degree , then I claim there is a unique intermediate field with and that must be a Galois extension over .  To see this, set . Then and by the Sylow theorems, there is a unique Sylow -subgroup, call it , and hence is normal in . It follows from the Fundamental Theorem that is an intermediate field that (a) is Galois over and (b) satisfies . Moreover, it is unique since has just one subgroup of index .  In fact, there are exactly two groups of order up to isomorphism, the cyclic one and one that is a (non-trivial) semi-direct product of by . So, there are just two possible lattices of intermediate fields for such a field extension. #### Problem 4 – All Primitive Generators and Galois Let be the splitting field over of the polynomial . (a) Find all intermediate fields with (including possibly and ) such that is Galois over . (b) For each field you found in (a), find with justification a primitive generator (i.e., find so that .   Proof.  Let be the splitting field over of the polynomial    Part (a)  First, notice that is irreducible in by Eisenstein’s Criterion . Let denote a primitive third root of unity. The roots of are the following: 1. , 2. , and 3. . As is irreducible and monic we see that it is the minimum polynomial of over . Let and notice .  Recall that is isomorphic to a subgroup of . As and , we see another extension is needed, and that extension will have at least degree . Thus, due to size constraints, we see .  By the FTGT each Galois intermediate extension between and corresponds to a normal subgroup of , which are the normal subgroups of .  The elements of are the following: 1. 2. 3. 4. 5. 6. The subgroup has index in and is thus normal. None of the order subgroups are normal in , so is the only strictly intermediate extension.  Recall , meaning , so corresponds to a subgroup of order in , so its not Galois unfortunately. However, is a degree extension that is an intermediate field, as is a root of the irreducible polynomial .  With all this in mind, notice: - is a splitting field of , and has the primitive generator by . - is our only strictly intermediate field, and has the primitive generator - Finally, is Galois over , and has the primitive generator .    Part (b)      Problem 8 – Cubic Polynomial with Two Complex Roots  Let be the splitting field over of the polynomial . Prove that the Galois group is isomorphic to .   Proof .  Let be the splitting field over of the polynomial , the roots of which are: 1. 2. , and 3. . Using Eisenstein’s Criterion]] with we see that is irreducible in . As is monic and irreducible it is the minimum polynomial of and . Thus, by the FTGT we know there exists an element of order in .  Notice now that has exactly two complex roots, making complex conjugation correspond to a transposition in . Thus we have an element of order and an element of order , so the order of must be at least by Lagrange’s Theorem.  As we know is isomorphic to a subgroup of , which has order . Thus is isomorphic to .     Problem 9 – Cubic with Two Complex Roots  Let be an irreducible cubic (degree ) polynomial having exactly one real root. Let be the splitting field of over . Show that .   Proof.  Let be an irreducible cubic (degree ) polynomial having exactly one real root, and let be the splitting field of over .  As is the splitting field of , it is a normal extension]. As has characteristic 0, is separable (because is algebraic extension, as its the extension caused by adjoining each root of , and algebraic extensions of algebraic extensions are algebraic). Thus by we see .  By Proposition 2.83 we see that is isomorphic to some subgroup of , where is the number of distinct roots of . As cubic and irreducible we know that the real root must be irrational, which we will denote . Consider the extension . As , we see that . However, neither of our complex roots are in this extension, and so another extension is needed to reach . But this extension would also have a degree larger than , so . As , there exists no subgroup of it that can be isomorphic to, given that . Thus we see that , meaning that our complex roots are distinct.  Then or , the only possible sizes of subgroups of . However, by the previous argument we see that as , the only viable subgroup of is itself. Thus .     Problem 9 – Galois Extensions of Degree 5 and 10  Let be a Galois extension of with [^1]. (a) Prove that there exists a subfield of containing F with [^2]. (b) Determine whether there must also exist a subfield of containing with .   Proof.  Let be a Galois extension of with .   Part (a)  Let be a Sylow -subgroup of . Notice that . By the FTGT there exists an intermediate field extension such that . By the Degree Formula, we have , with and . Thus .    Part (b)  Notice that as is a prime dividing the order of there must exist an element of order by Cauchy’s Theorem. The cyclic subgroup, , generated by this element has order . By the FTGT there exists an intermediate field extension such that . By the Degree Formula, we have , with and . Thus . #### Problem 8 – Galois Group and Transitivity Suppose that is a finite Galois extension with Galois group , and that . Prove that if and only if the images of under elements of are distinct.    Proof .  First, suppose that . As is a Galois extension the minimum polynomial of in splits completely into linear factors. Thus acts faithfully on the roots of , which includes . Thus the images of under elements of are distinct.  Now suppose that the images of under elements of are distinct, and suppose by way of contradiction that there exists some that is not in . Consider the intermediate field . By the FTGT there exists a nontrivial subgroup of whose elements fix elements of , including , a contradiction.      Problem 5 – Minimal Polynomial of  Let . (a) Find the minimum polynomial of over . (b) Let be the splitting field of over . Find the Galois group of . (c) Find all subgroups of and generators for the corresponding intermediate fields of .   Proof .  Let .   Part (a)  Let which factors as two irreducible polynomials and has no roots in , making it irreducible. Thus is the minimal polynomial of .    Part (b)  Notice that which also has degree . Let denote the Galois group of . Thus is a group of order , making it isomorphic to or . Notice that the elements of are the following: - and , - and , - and , and - and . All of these automorphisms have degree , making .    Part (c)  Thus are only two subgroups of , and . The first, , corresponds to and is generated by , where corresponds to and is generated by . #### Problem 8 – Quartic and Unique Galois Extension Let be the splitting field of over . Prove there exists a unique intermediate field such that [^1] and is a Galois extension.    Proof .  Let be the splitting field of over . Let be a primitive fourth root of unity. Thus .  Notice that the roots of are the following: - , - , - , and - . Thus .  Using Eisenstein’s Criterion]] with we see that is irreducible in . Let , and notice that is the minimum polynomial of . Let and observe .  As is the root of the monic irreducible polynomial we have and . Thus is isomorphic to a subgroup of of order , making it .  Notice that is an extension of degree , and thus by the FTGT we have a subgroup such that . As we have , and thus . This makes the cyclic subgroup of generated by a reflection, the only element of order in , making it unique. This is also a normal subgroup of , making Galois over .      Problem 9 – Quintic with Two Complex Roots  Consider This polynomial has exactly three real roots, a fact that you may use without proof.   Show that is irreducible in .  Let be a splitting field of $over . Show that is a Galois extension and find the isomorphism class of the Galois group .    Proof.   Part (a)  Notice that is prime in , and thus is irreducible in by Eisenstein’s Criterion.    Part (b)  Let be a real root of . As is irreducible this root is not in . As is the root of a monic irreducible polynomial of degree , we see that . By the FTGT there exists a subgroup of with order , making it a cyclic subgroup generated by some element of order .  However, as only has complex roots we see that complex conjugation corresponds to an element of order in . Thus we have a transposition and a -cycle, meaning we can generate all of . .      Problem 9 – Quintic with Two Complex Roots  Consider . This polynomial has exactly three real roots, a fact that you may use without proof.   Show that is irreducible in .  Let be a splitting field of over . Show that is a Galois extension with Galois group isomorphic to the symmetric group .    Proof.  Consider .   Part (a)  Using Eisenstein’s Criterion with we see that is indeed irreducible in .    Part (b)  Let be a splitting field of over . As is monic and irreducible, it is the minimum polynomial for some such that . As has complex roots, we know that , and is thus an intermediate field. By the FTGT there exists a subgroup of such that . As we know , making for some . Thus is an element of order in . As is a degree polynomial, we know is isomorphic to a subgroup of . Thus must be a -cycle.  Recall that has exactly two complex roots. Thus , the complex conjugation automorphism, has order , making it a transposition. From the Gospel of Mark we were told that we did not need to prove that a transposition and an -cycle generate all of , and thus #### Problem 4 – Unique Intermediate Field of Degree 5 Let be a finite Galois field extension of degree . Prove there exists a unique intermediate field (i.e., such that [^1].     Proof.  Let be a finite Galois field extension of degree .  Note that as , we see that the number of Sylow- subgroups of divides and is congruent to . Thus there is exactly one Sylow- subgroup of , which we denote . By the Fundamental Theorem of Galois Theory, corresponds to an intermediate field extension . Note that as has order 5, we see that , and thus as well. By the Degree Formula we see that . As and , we see that , as desired. As corresponds to the unique subgroup of or order 5, we see that this extension must be unique as well.     Problem  Let be the splitting field over of the polynomial . (a) Find all intermediate fields with (including possibly and ) such that is Galois over . (b) For each field you found in (a), find with justification a primitive generator (i.e., find so that ).   Proof.   Part (a)  Invoking Eisenstein’s Criterion and setting we see that is an irreducible cubic with exactly one real root. Thus . Thus the subgroups of are as follows: and By the Fundamental Theorem of Galois Theory there exist four intermediate field extensions: , and . Note that as and are all Sylow-2 subgroups of , by Sylow’s Theorem none are normal in . However, as , the smallest prime dividing 6, we see that is the only strictly intermediate field that is Galois over .  As the identity map is the only automorphism from that fixes and , we see that is Galois over itself. As all finite extensions of fields with characteristic 0 are separable, we see that is also Galois over . Thus and are the only intermediate fields that are Galois over . #### Problem 5 #unfinished Let be the splitting field of the polynomial over . Give, with full justification, a presentation for the Galois group that has two generators. #### Problem 5 #unfinished Let denote a primitive th root of unity, over . (a) Prove that is a Galois extension, of degree (b) Describe an explicit isomorphism (c) Describe a primitive generator for the fixed subfield of the subgroup of .     Proof .   Part (a)  Notice is a root of the polynomial , and we can factor out an to see that is a root of the cyclotomic polynomial . Thanks to Mark, this is a monic irreducible polynomial in , making the minimal polynomial of , and thus the degree of the extension is .       Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-235",
  "level": "2",
  "url": "sec-ftgt.html#exercise-235",
  "type": "Exercise",
  "number": "2.3.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-236",
  "level": "2",
  "url": "sec-ftgt.html#exercise-236",
  "type": "Exercise",
  "number": "2.3.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-237",
  "level": "2",
  "url": "sec-ftgt.html#exercise-237",
  "type": "Exercise",
  "number": "2.3.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "sec-solvable-by-radicals",
  "level": "1",
  "url": "sec-solvable-by-radicals.html",
  "type": "Section",
  "number": "3.1",
  "title": "Solvability by Radicals",
  "body": " Solvability by Radicals   "
},
{
  "id": "sec-transcendental-elements",
  "level": "1",
  "url": "sec-transcendental-elements.html",
  "type": "Section",
  "number": "3.2",
  "title": "Transcendental Elements",
  "body": " Transcendental Elements   "
},
{
  "id": "sec-advanced-galois",
  "level": "1",
  "url": "sec-advanced-galois.html",
  "type": "Section",
  "number": "3.3",
  "title": "Advanced Galois Theory",
  "body": " Advanced Galois Theory   "
},
{
  "id": "sec-inverse-galois",
  "level": "1",
  "url": "sec-inverse-galois.html",
  "type": "Section",
  "number": "3.4",
  "title": "The Inverse Galois Problem",
  "body": " The Inverse Galois Problem   "
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
  "body": " History  Abelian groups are named after Norwegian mathematician Niels Henrik Abel, who made significant contributions to the study of group theory in the early 19th century. Abel was one of the first mathematicians to investigate the properties of groups, which are sets of elements that can be combined under an operation (such as addition or multiplication) that satisfies certain axioms.  In particular, Abel studied groups in which the operation is commutative, meaning that the order in which elements are combined does not affect the result. Such groups had been studied before Abel's time, but he was the first to recognize their importance and to develop a systematic theory for them. Abel's work on these groups was influential in the development of abstract algebra, a branch of mathematics that deals with algebraic structures like groups, rings, and fields.  The term \"Abelian\" was coined in honor of Abel's contributions to the study of commutative groups. The adjective \"Abelian\" is now used to describe any algebraic structure (not just groups) in which the operation is commutative.    Computations and Examples       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Formal Proofs       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     Qualifying Exam Problems       Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!     "
},
{
  "id": "exercise-238",
  "level": "2",
  "url": "exercises-65.html#exercise-238",
  "type": "Exercise",
  "number": "B.1",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-239",
  "level": "2",
  "url": "exercises-65.html#exercise-239",
  "type": "Exercise",
  "number": "B.2",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
},
{
  "id": "exercise-240",
  "level": "2",
  "url": "exercises-65.html#exercise-240",
  "type": "Exercise",
  "number": "B.3",
  "title": ".",
  "body": " Coming soon to an OER near you!   Coming soon to an OER near you!   Coming soon to an OER near you!  "
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
