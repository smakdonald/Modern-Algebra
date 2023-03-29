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
  "id": "group-first-definitions",
  "level": "1",
  "url": "group-first-definitions.html",
  "type": "Section",
  "number": "1.1",
  "title": "First Definitions",
  "body": " First Definitions   Groups   Binary Operation   A binary operation on a set is a function     We often write instead of for simplicity.    A group is a pair where is a set and is a on , called group multiplication , satisfying the following properties:   (Associativity) for all we have     (Identity Element) there exists such that for all     (Inverses) for each , there is an element such that .       Although a group is a pair, we will usually refer to the group by only naming the underlying set, .  We say that is closed under the operation , when we want to emphasize that for any the result of the operation, , is an element of . However note that closure is really part of the definition of a binary operation on a set, and it is implicitly assumed whenever we consider such an operation.    In a group , the element satisfying the second axiom of is unique, and we thus refer to it as the identity element of .    If and for all , then .      In a group , for each , the element satisfying the last axiom of is unique.    Proof. For a given , if and fo some and , then .    We will call the element satisfying the last axiom of  the inverse of and we will henceforth denote it by .    A group is an abelian group if is commutative; i.e., for all . Often, but not always, the group operation for an abelian group is written as instead of . In this case the inverse of an element is written .     Every group of order is abelian.   Let be a group with elements, and suppose there are elements such that for some elements . Since , we must have , , and . Since has only elements and , either or . Without loss, say the former occurs. But implies and we know commutes with , and hence this is not possible. If , then and if then , both of which are impossible. Since a, b were arbitrary, G must be abelian.     Properties of Groups   If is a group and , then:   if , then .    if , then .     .     .     .                The trivial subgroup is the group with a single element     For any set , the permutations on  form a non-abelian group under composition.    For any field and positive integer , let By invertible I mean those matrices that have two-sided inverses, but in turns out that if an matrix has a left inverse then it it is automatically a right inverse too, and vice versa. Then is a non-abelian group under matrix multiplication.    For any , let denote the integers modulo . Then is an abelian group where denotes addition modulo .    For any field (e.g., , , or for a prime ), the set is an abelian group under the usual multiplication.          Give an example of a pair that satisfies axioms 1 and 2 of and an element of that has a left inverse but not a right inverse.          Direct products of groups are groups      Dihedral Groups  We now discuss the important example of dihedral groups in detail.    For any integer , let denote a regular -gon. An isometry of the plane is a function that is a bijection and preserves the Euclideal distance for any ). A symmetry of is an isometry that maps to itself.    By the latter I don't mean that fixes each of the points of , but rather that , that is every point of is mapped to a (possibly different) point of and every point of is the image of some point in via . It is clear that the composition of two symmetries of is again a symmetry of , so that composition is a binary operation on .    The dihedral group  is the set of symmetries of the regular -gon equipped with the binary operation given by composition.     Prove that the dihedral group is indeed a group.     Symmetric Groups  Let's introduce another very important example: symmetric groups.    A permutation of a set is a bijective function .      For any , the symmetric group is the set of all permutations of the set equipped with the composition of functions as its binary operation.    For any finite set , we may think of as the permutation group of , which is sometimes written .   Prove that is indeed a group for all .   We can write an element of as a table of values:     If are distinct integers between and , then denotes the element of that satisfies Such a permutation is called a cycle or an -cycle if we want to emphasize its length. A -cycle is often called a transposition .     Determine the number of -cycles in .   Note that distinct lists of integers represent the same cycle if they are cyclical rearrangements of each other, e.g., . However, .   Disjoint cycles commute, that is, if , and then .        Each can be written as a product (composition) of disjoint cycles, and such a factorization is unique up to the ordering of the factors.    Each can be written a product of transpositions; i.e., is generated by transpositions.       For the uniqueness part of statement (1) in the above proposition one needs to establish a convention regarding 1-cycles, that is one needs to stipulate either that the 1-cycles will not be recorded (which gives the shortest such factorization) or that all the 1-cycles will be recorded (which gives the longest such factorization, but also the only one that makes it clear what the number is).    The Quaternions  For our last example we mention the group of quaternions , written .    The quaternion group is a group with elements satisfying the following relations: is the identity element and       Verify that is a group. Provide a specific example to show that is not an abelian group.     Order    In a group , the order of an element  is the least positive integer such that . If no such exists, we say has infinite order. We write for the order of .      The order of a group  is the cardinality of the set , denoted .      Prove that any group of order is abelian.          Let be a group and any element.   Prove that if , then are all distinct elements of .    Prove that if , then for all integers (positive or negative) with .    Conclude in all cases.        Prove .    Prove that the order of a permutation is the least common multiple of the lengths of the cycles it is a product of.    Let be groups and let be elements of .   Prove that and in particular .    Prove or disprove: if have finite order then has finite order.       Let be a group.   Let be an element of finite order. Show that has finite order for any integer , and in fact     Prove that for all in , holds.           Every element in can be written as or for .              If then .     "
},
{
  "id": "def-binop",
  "level": "2",
  "url": "group-first-definitions.html#def-binop",
  "type": "Definition",
  "number": "1.1",
  "title": "Binary Operation.",
  "body": " Binary Operation   A binary operation on a set is a function    "
},
{
  "id": "remark-1",
  "level": "2",
  "url": "group-first-definitions.html#remark-1",
  "type": "Remark",
  "number": "1.2",
  "title": "",
  "body": "We often write instead of for simplicity. "
},
{
  "id": "def-group",
  "level": "2",
  "url": "group-first-definitions.html#def-group",
  "type": "Definition",
  "number": "1.3",
  "title": "",
  "body": "  A group is a pair where is a set and is a on , called group multiplication , satisfying the following properties:   (Associativity) for all we have     (Identity Element) there exists such that for all     (Inverses) for each , there is an element such that .      "
},
{
  "id": "remark-2",
  "level": "2",
  "url": "group-first-definitions.html#remark-2",
  "type": "Remark",
  "number": "1.4",
  "title": "",
  "body": "Although a group is a pair, we will usually refer to the group by only naming the underlying set, . "
},
{
  "id": "remark-3",
  "level": "2",
  "url": "group-first-definitions.html#remark-3",
  "type": "Remark",
  "number": "1.5",
  "title": "",
  "body": "We say that is closed under the operation , when we want to emphasize that for any the result of the operation, , is an element of . However note that closure is really part of the definition of a binary operation on a set, and it is implicitly assumed whenever we consider such an operation. "
},
{
  "id": "prop-unique-identity",
  "level": "2",
  "url": "group-first-definitions.html#prop-unique-identity",
  "type": "Proposition",
  "number": "1.6",
  "title": "",
  "body": "  In a group , the element satisfying the second axiom of is unique, and we thus refer to it as the identity element of .    If and for all , then .   "
},
{
  "id": "prop-unique-inverse",
  "level": "2",
  "url": "group-first-definitions.html#prop-unique-inverse",
  "type": "Proposition",
  "number": "1.7",
  "title": "",
  "body": "  In a group , for each , the element satisfying the last axiom of is unique.    Proof. For a given , if and fo some and , then .   "
},
{
  "id": "remark-4",
  "level": "2",
  "url": "group-first-definitions.html#remark-4",
  "type": "Remark",
  "number": "1.8",
  "title": "",
  "body": "We will call the element satisfying the last axiom of  the inverse of and we will henceforth denote it by . "
},
{
  "id": "def-abelian",
  "level": "2",
  "url": "group-first-definitions.html#def-abelian",
  "type": "Definition",
  "number": "1.9",
  "title": "",
  "body": "  A group is an abelian group if is commutative; i.e., for all . Often, but not always, the group operation for an abelian group is written as instead of . In this case the inverse of an element is written .   "
},
{
  "id": "order-4-abelian",
  "level": "2",
  "url": "group-first-definitions.html#order-4-abelian",
  "type": "Problem",
  "number": "1.10",
  "title": "",
  "body": " Every group of order is abelian.   Let be a group with elements, and suppose there are elements such that for some elements . Since , we must have , , and . Since has only elements and , either or . Without loss, say the former occurs. But implies and we know commutes with , and hence this is not possible. If , then and if then , both of which are impossible. Since a, b were arbitrary, G must be abelian.   "
},
{
  "id": "lem-group-props",
  "level": "2",
  "url": "group-first-definitions.html#lem-group-props",
  "type": "Lemma",
  "number": "1.11",
  "title": "Properties of Groups.",
  "body": " Properties of Groups   If is a group and , then:   if , then .    if , then .     .     .     .          "
},
{
  "id": "prop-gpex",
  "level": "2",
  "url": "group-first-definitions.html#prop-gpex",
  "type": "Proposition",
  "number": "1.12",
  "title": "",
  "body": "     The trivial subgroup is the group with a single element     For any set , the permutations on  form a non-abelian group under composition.    For any field and positive integer , let By invertible I mean those matrices that have two-sided inverses, but in turns out that if an matrix has a left inverse then it it is automatically a right inverse too, and vice versa. Then is a non-abelian group under matrix multiplication.    For any , let denote the integers modulo . Then is an abelian group where denotes addition modulo .    For any field (e.g., , , or for a prime ), the set is an abelian group under the usual multiplication.      "
},
{
  "id": "problem-2",
  "level": "2",
  "url": "group-first-definitions.html#problem-2",
  "type": "Problem",
  "number": "1.13",
  "title": "",
  "body": "  Give an example of a pair that satisfies axioms 1 and 2 of and an element of that has a left inverse but not a right inverse.       "
},
{
  "id": "thm-dirprop-gp",
  "level": "2",
  "url": "group-first-definitions.html#thm-dirprop-gp",
  "type": "Theorem",
  "number": "1.14",
  "title": "",
  "body": "  Direct products of groups are groups   "
},
{
  "id": "def-iso-and-sym",
  "level": "2",
  "url": "group-first-definitions.html#def-iso-and-sym",
  "type": "Definition",
  "number": "1.15",
  "title": "",
  "body": "  For any integer , let denote a regular -gon. An isometry of the plane is a function that is a bijection and preserves the Euclideal distance for any ). A symmetry of is an isometry that maps to itself.   "
},
{
  "id": "remark-5",
  "level": "2",
  "url": "group-first-definitions.html#remark-5",
  "type": "Remark",
  "number": "1.16",
  "title": "",
  "body": "By the latter I don't mean that fixes each of the points of , but rather that , that is every point of is mapped to a (possibly different) point of and every point of is the image of some point in via . It is clear that the composition of two symmetries of is again a symmetry of , so that composition is a binary operation on . "
},
{
  "id": "def-d2n",
  "level": "2",
  "url": "group-first-definitions.html#def-d2n",
  "type": "Definition",
  "number": "1.17",
  "title": "",
  "body": "  The dihedral group  is the set of symmetries of the regular -gon equipped with the binary operation given by composition.   "
},
{
  "id": "problem-3",
  "level": "2",
  "url": "group-first-definitions.html#problem-3",
  "type": "Problem",
  "number": "1.18",
  "title": "",
  "body": " Prove that the dihedral group is indeed a group.  "
},
{
  "id": "def-permutation",
  "level": "2",
  "url": "group-first-definitions.html#def-permutation",
  "type": "Definition",
  "number": "1.19",
  "title": "",
  "body": "  A permutation of a set is a bijective function .   "
},
{
  "id": "def-perm-group",
  "level": "2",
  "url": "group-first-definitions.html#def-perm-group",
  "type": "Definition",
  "number": "1.20",
  "title": "",
  "body": "  For any , the symmetric group is the set of all permutations of the set equipped with the composition of functions as its binary operation.   "
},
{
  "id": "remark-6",
  "level": "2",
  "url": "group-first-definitions.html#remark-6",
  "type": "Remark",
  "number": "1.21",
  "title": "",
  "body": "For any finite set , we may think of as the permutation group of , which is sometimes written . "
},
{
  "id": "problem-4",
  "level": "2",
  "url": "group-first-definitions.html#problem-4",
  "type": "Problem",
  "number": "1.22",
  "title": "",
  "body": " Prove that is indeed a group for all .  "
},
{
  "id": "def-cycle",
  "level": "2",
  "url": "group-first-definitions.html#def-cycle",
  "type": "Definition",
  "number": "1.23",
  "title": "",
  "body": "  If are distinct integers between and , then denotes the element of that satisfies Such a permutation is called a cycle or an -cycle if we want to emphasize its length. A -cycle is often called a transposition .   "
},
{
  "id": "problem-5",
  "level": "2",
  "url": "group-first-definitions.html#problem-5",
  "type": "Problem",
  "number": "1.24",
  "title": "",
  "body": " Determine the number of -cycles in .  "
},
{
  "id": "remark-7",
  "level": "2",
  "url": "group-first-definitions.html#remark-7",
  "type": "Remark",
  "number": "1.25",
  "title": "",
  "body": "Note that distinct lists of integers represent the same cycle if they are cyclical rearrangements of each other, e.g., . However, . "
},
{
  "id": "problem-6",
  "level": "2",
  "url": "group-first-definitions.html#problem-6",
  "type": "Problem",
  "number": "1.26",
  "title": "",
  "body": " Disjoint cycles commute, that is, if , and then .  "
},
{
  "id": "prop-cycledecomp",
  "level": "2",
  "url": "group-first-definitions.html#prop-cycledecomp",
  "type": "Proposition",
  "number": "1.27",
  "title": "",
  "body": "     Each can be written as a product (composition) of disjoint cycles, and such a factorization is unique up to the ordering of the factors.    Each can be written a product of transpositions; i.e., is generated by transpositions.      "
},
{
  "id": "remark-8",
  "level": "2",
  "url": "group-first-definitions.html#remark-8",
  "type": "Remark",
  "number": "1.28",
  "title": "",
  "body": "For the uniqueness part of statement (1) in the above proposition one needs to establish a convention regarding 1-cycles, that is one needs to stipulate either that the 1-cycles will not be recorded (which gives the shortest such factorization) or that all the 1-cycles will be recorded (which gives the longest such factorization, but also the only one that makes it clear what the number is). "
},
{
  "id": "def-quaternions",
  "level": "2",
  "url": "group-first-definitions.html#def-quaternions",
  "type": "Definition",
  "number": "1.29",
  "title": "",
  "body": "  The quaternion group is a group with elements satisfying the following relations: is the identity element and     "
},
{
  "id": "problem-7",
  "level": "2",
  "url": "group-first-definitions.html#problem-7",
  "type": "Problem",
  "number": "1.30",
  "title": "",
  "body": " Verify that is a group. Provide a specific example to show that is not an abelian group.  "
},
{
  "id": "def-element-order",
  "level": "2",
  "url": "group-first-definitions.html#def-element-order",
  "type": "Definition",
  "number": "1.31",
  "title": "",
  "body": "  In a group , the order of an element  is the least positive integer such that . If no such exists, we say has infinite order. We write for the order of .   "
},
{
  "id": "def-order-group",
  "level": "2",
  "url": "group-first-definitions.html#def-order-group",
  "type": "Definition",
  "number": "1.32",
  "title": "",
  "body": "  The order of a group  is the cardinality of the set , denoted .   "
},
{
  "id": "problem-8",
  "level": "2",
  "url": "group-first-definitions.html#problem-8",
  "type": "Problem",
  "number": "1.33",
  "title": "",
  "body": "  Prove that any group of order is abelian.       "
},
{
  "id": "prop-orderelgp",
  "level": "2",
  "url": "group-first-definitions.html#prop-orderelgp",
  "type": "Proposition",
  "number": "1.34",
  "title": "",
  "body": "  Let be a group and any element.   Prove that if , then are all distinct elements of .    Prove that if , then for all integers (positive or negative) with .    Conclude in all cases.      "
},
{
  "id": "problem-9",
  "level": "2",
  "url": "group-first-definitions.html#problem-9",
  "type": "Problem",
  "number": "1.35",
  "title": "",
  "body": " Prove .  "
},
{
  "id": "problem-10",
  "level": "2",
  "url": "group-first-definitions.html#problem-10",
  "type": "Problem",
  "number": "1.36",
  "title": "",
  "body": " Prove that the order of a permutation is the least common multiple of the lengths of the cycles it is a product of.  "
},
{
  "id": "problem-11",
  "level": "2",
  "url": "group-first-definitions.html#problem-11",
  "type": "Problem",
  "number": "1.37",
  "title": "",
  "body": " Let be groups and let be elements of .   Prove that and in particular .    Prove or disprove: if have finite order then has finite order.     "
},
{
  "id": "problem-12",
  "level": "2",
  "url": "group-first-definitions.html#problem-12",
  "type": "Problem",
  "number": "1.38",
  "title": "",
  "body": " Let be a group.   Let be an element of finite order. Show that has finite order for any integer , and in fact     Prove that for all in , holds.     "
},
{
  "id": "prop-d2n-order",
  "level": "2",
  "url": "group-first-definitions.html#prop-d2n-order",
  "type": "Proposition",
  "number": "1.39",
  "title": "",
  "body": "     Every element in can be written as or for .           "
},
{
  "id": "lem-group-element-order",
  "level": "2",
  "url": "group-first-definitions.html#lem-group-element-order",
  "type": "Lemma",
  "number": "1.40",
  "title": "",
  "body": "  If then .   "
},
{
  "id": "sec-gen-cyclic-gp",
  "level": "1",
  "url": "sec-gen-cyclic-gp.html",
  "type": "Section",
  "number": "1.2",
  "title": "Generators and Cyclic Groups",
  "body": " Generators and Cyclic Groups   Generators    A subset of a group is said to generate  if every element of is equal to a product of elements of and their inverses (with repetitions allowed).    Assume that the regular -gon is drawn in the plane with its center at the origin and one vertex on the axis. If denotes rotation about the origin by radians counter-clockwise, then . It’s inverse is rotation by clock-wise. For another example, for any line of symmetry of , reflection about that line gives an element of . By our convention for how to draw , the -axis is a line of symmetry for , and we let denote reflection about the -axis.      Prove and .    Prove that is a reflection and hence that .          Prove that is generated by and any reflection.    Prove that if is prime then is generated by any two distinct reflections.       For prove that is generated by and the -cycle .     Cyclic Groups    If is a generated by a single element, i.e. for some , then is called a cyclic group .     Let be a cyclic group. Then .       Prove is generated by or     Prove is generated by for any integer such that .       Prove that is not a cyclic group.     Prove that any cyclic group is abelian.     Prove that is not cyclic.    "
},
{
  "id": "def-groupgenerate",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#def-groupgenerate",
  "type": "Definition",
  "number": "1.41",
  "title": "",
  "body": "  A subset of a group is said to generate  if every element of is equal to a product of elements of and their inverses (with repetitions allowed).   "
},
{
  "id": "problem-13",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#problem-13",
  "type": "Problem",
  "number": "1.42",
  "title": "",
  "body": "    Prove and .    Prove that is a reflection and hence that .     "
},
{
  "id": "problem-14",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#problem-14",
  "type": "Problem",
  "number": "1.43",
  "title": "",
  "body": "    Prove that is generated by and any reflection.    Prove that if is prime then is generated by any two distinct reflections.     "
},
{
  "id": "problem-15",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#problem-15",
  "type": "Problem",
  "number": "1.44",
  "title": "",
  "body": " For prove that is generated by and the -cycle .  "
},
{
  "id": "def-cyclic-group",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#def-cyclic-group",
  "type": "Definition",
  "number": "1.45",
  "title": "",
  "body": "  If is a generated by a single element, i.e. for some , then is called a cyclic group .   "
},
{
  "id": "problem-16",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#problem-16",
  "type": "Problem",
  "number": "1.46",
  "title": "",
  "body": " Let be a cyclic group. Then .  "
},
{
  "id": "problem-17",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#problem-17",
  "type": "Problem",
  "number": "1.47",
  "title": "",
  "body": "    Prove is generated by or     Prove is generated by for any integer such that .     "
},
{
  "id": "problem-18",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#problem-18",
  "type": "Problem",
  "number": "1.48",
  "title": "",
  "body": " Prove that is not a cyclic group.  "
},
{
  "id": "prop-cyclicabelian",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#prop-cyclicabelian",
  "type": "Proposition",
  "number": "1.49",
  "title": "",
  "body": "  Prove that any cyclic group is abelian.   "
},
{
  "id": "problem-19",
  "level": "2",
  "url": "sec-gen-cyclic-gp.html#problem-19",
  "type": "Problem",
  "number": "1.50",
  "title": "",
  "body": " Prove that is not cyclic.  "
},
{
  "id": "sec-subgroups",
  "level": "1",
  "url": "sec-subgroups.html",
  "type": "Section",
  "number": "1.3",
  "title": "Subgroups",
  "body": " Subgroups   Definition and Examples    A nonempty subset of a group is called a subgroup provided is a group under the multiplication law of . The fact that is a subgroup of is denoted or if we also mean that .     Subgroup Tests      If a subset of a group is nonempty and closed under multiplication and inversion, then is a subgroup.    If a subset of a group is nonempty and satisfies for all , , then is a subgroup.        Prove the following:    and are the trivial subgroups of .              Let and define . Prove for all .    Let be a group. For any , prove that the set is a subgroup of .       Properties of Subgroups      If is a subgroup of and is a subgroup of , then is a subgroup of .    If is a subgroup of for all in an index set , then is a subgroup of .    Let be a group and , subgroups. Prove that is a subgroup if and only if or .        Let be a subgroup of and fix some element . Prove that is a subgroup of of the same order as .     The alternating group  is the subset of all even cycles of .     Prove that is a subgroup of .     For any field , the special linear group       Prove that is a subgroup of .     The Center of a Group    The center of a group often written , is the set of elements of that commute with every element of . That is,      Prove that is an abelian subgroup for any group .    Find for . Your answer will depend on whether is even or odd.     Generated Subgroups    Given a group and a subset of , the subgroup of generated by is If is a set with one element then we write and we refer to this as the cyclic subgroup generated by  .      For a subset of , the elements of can be described as:     Let . Since is a subgroup that contains , it is closed under products and inverses, and thus must contain all elements of .  For the opposite containment, we just need to show the set really is a subgroup. We use the one step test:      since we allow and declare the empty product to be .    If and are in then is also in .     Therefore and (by taking and ) and by the minimality of we obtain .      implies that for an element of a group , .    Verify , meaning that is the subgroup of generated by .    Prove that is the subgroup of generated by all produts of -cyclies (disjoint or not). In symbols,     Consider the set , which is a subgroup of (a fact you need not prove).   Prove that for each integer , there is a unique subgroup with and that is cyclic.    Prove that every finitely generated subgroup of has finitely many elements.    Prove that is not finitely generated.       "
},
{
  "id": "def-subgroup",
  "level": "2",
  "url": "sec-subgroups.html#def-subgroup",
  "type": "Definition",
  "number": "1.51",
  "title": "",
  "body": "  A nonempty subset of a group is called a subgroup provided is a group under the multiplication law of . The fact that is a subgroup of is denoted or if we also mean that .   "
},
{
  "id": "lem-subgrouptest",
  "level": "2",
  "url": "sec-subgroups.html#lem-subgrouptest",
  "type": "Lemma",
  "number": "1.52",
  "title": "Subgroup Tests.",
  "body": " Subgroup Tests      If a subset of a group is nonempty and closed under multiplication and inversion, then is a subgroup.    If a subset of a group is nonempty and satisfies for all , , then is a subgroup.      "
},
{
  "id": "example-1",
  "level": "2",
  "url": "sec-subgroups.html#example-1",
  "type": "Example",
  "number": "1.53",
  "title": "",
  "body": " Prove the following:    and are the trivial subgroups of .              Let and define . Prove for all .    Let be a group. For any , prove that the set is a subgroup of .     "
},
{
  "id": "prop-subgroup-properties",
  "level": "2",
  "url": "sec-subgroups.html#prop-subgroup-properties",
  "type": "Proposition",
  "number": "1.54",
  "title": "Properties of Subgroups.",
  "body": " Properties of Subgroups      If is a subgroup of and is a subgroup of , then is a subgroup of .    If is a subgroup of for all in an index set , then is a subgroup of .    Let be a group and , subgroups. Prove that is a subgroup if and only if or .      "
},
{
  "id": "problem-20",
  "level": "2",
  "url": "sec-subgroups.html#problem-20",
  "type": "Problem",
  "number": "1.55",
  "title": "",
  "body": " Let be a subgroup of and fix some element . Prove that is a subgroup of of the same order as .  "
},
{
  "id": "def-altgroup",
  "level": "2",
  "url": "sec-subgroups.html#def-altgroup",
  "type": "Definition",
  "number": "1.56",
  "title": "",
  "body": "  The alternating group  is the subset of all even cycles of .   "
},
{
  "id": "problem-21",
  "level": "2",
  "url": "sec-subgroups.html#problem-21",
  "type": "Problem",
  "number": "1.57",
  "title": "",
  "body": " Prove that is a subgroup of .  "
},
{
  "id": "def-slg",
  "level": "2",
  "url": "sec-subgroups.html#def-slg",
  "type": "Definition",
  "number": "1.58",
  "title": "",
  "body": "  For any field , the special linear group     "
},
{
  "id": "problem-22",
  "level": "2",
  "url": "sec-subgroups.html#problem-22",
  "type": "Problem",
  "number": "1.59",
  "title": "",
  "body": " Prove that is a subgroup of .  "
},
{
  "id": "def-gpcenter",
  "level": "2",
  "url": "sec-subgroups.html#def-gpcenter",
  "type": "Definition",
  "number": "1.60",
  "title": "",
  "body": "  The center of a group often written , is the set of elements of that commute with every element of . That is,    "
},
{
  "id": "problem-23",
  "level": "2",
  "url": "sec-subgroups.html#problem-23",
  "type": "Problem",
  "number": "1.61",
  "title": "",
  "body": " Prove that is an abelian subgroup for any group .  "
},
{
  "id": "problem-24",
  "level": "2",
  "url": "sec-subgroups.html#problem-24",
  "type": "Problem",
  "number": "1.62",
  "title": "",
  "body": " Find for . Your answer will depend on whether is even or odd.  "
},
{
  "id": "def-gensubgp",
  "level": "2",
  "url": "sec-subgroups.html#def-gensubgp",
  "type": "Definition",
  "number": "1.63",
  "title": "",
  "body": "  Given a group and a subset of , the subgroup of generated by is If is a set with one element then we write and we refer to this as the cyclic subgroup generated by  .   "
},
{
  "id": "lem-gensubgp",
  "level": "2",
  "url": "sec-subgroups.html#lem-gensubgp",
  "type": "Lemma",
  "number": "1.64",
  "title": "",
  "body": "  For a subset of , the elements of can be described as:     Let . Since is a subgroup that contains , it is closed under products and inverses, and thus must contain all elements of .  For the opposite containment, we just need to show the set really is a subgroup. We use the one step test:      since we allow and declare the empty product to be .    If and are in then is also in .     Therefore and (by taking and ) and by the minimality of we obtain .   "
},
{
  "id": "problem-25",
  "level": "2",
  "url": "sec-subgroups.html#problem-25",
  "type": "Problem",
  "number": "1.65",
  "title": "",
  "body": "  implies that for an element of a group , .  "
},
{
  "id": "problem-26",
  "level": "2",
  "url": "sec-subgroups.html#problem-26",
  "type": "Problem",
  "number": "1.66",
  "title": "",
  "body": " Verify , meaning that is the subgroup of generated by .  "
},
{
  "id": "problem-27",
  "level": "2",
  "url": "sec-subgroups.html#problem-27",
  "type": "Problem",
  "number": "1.67",
  "title": "",
  "body": " Prove that is the subgroup of generated by all produts of -cyclies (disjoint or not). In symbols,   "
},
{
  "id": "problem-28",
  "level": "2",
  "url": "sec-subgroups.html#problem-28",
  "type": "Problem",
  "number": "1.68",
  "title": "",
  "body": " Consider the set , which is a subgroup of (a fact you need not prove).   Prove that for each integer , there is a unique subgroup with and that is cyclic.    Prove that every finitely generated subgroup of has finitely many elements.    Prove that is not finitely generated.     "
},
{
  "id": "sec-gphoms",
  "level": "1",
  "url": "sec-gphoms.html",
  "type": "Section",
  "number": "2.1",
  "title": "Group Homomorphisms",
  "body": " Group Homomorphisms    If and are groups, a homomorphism from is is a function such that , where and denote the multiplication rules for and , respectively.      If is a homomorphism of groups, then    and     .         Let be a group. Prove there exists a unique group homomorphism .      Let is a homomorphism of groups. The kernel of is the set       Let is a homomorphism of groups. The image of is the set          If is a homomorphism of groups, then the set-theoretic image of is a subgroup of .    If is a homomorphism of groups, then the kernel of is a subgroup of .    Prove that if is a group homomorphism and then the preimage of , defined as , is a subgroup of .            A group homomorphism is injective if and only if .    A group homomorphism is surjective if and only if .          Find, with justification, an injective group homomorphism .  Find, with justification, an injective group homomorphism .     "
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
  "id": "lem-grphomom-prop",
  "level": "2",
  "url": "sec-gphoms.html#lem-grphomom-prop",
  "type": "Lemma",
  "number": "2.2",
  "title": "",
  "body": "  If is a homomorphism of groups, then    and     .      "
},
{
  "id": "cor-unique-Z-homom",
  "level": "2",
  "url": "sec-gphoms.html#cor-unique-Z-homom",
  "type": "Corollary",
  "number": "2.3",
  "title": "",
  "body": "  Let be a group. Prove there exists a unique group homomorphism .   "
},
{
  "id": "def-gpker",
  "level": "2",
  "url": "sec-gphoms.html#def-gpker",
  "type": "Definition",
  "number": "2.4",
  "title": "",
  "body": "  Let is a homomorphism of groups. The kernel of is the set    "
},
{
  "id": "def-gpimage",
  "level": "2",
  "url": "sec-gphoms.html#def-gpimage",
  "type": "Definition",
  "number": "2.5",
  "title": "",
  "body": "  Let is a homomorphism of groups. The image of is the set    "
},
{
  "id": "prop-homsubgp",
  "level": "2",
  "url": "sec-gphoms.html#prop-homsubgp",
  "type": "Proposition",
  "number": "2.6",
  "title": "",
  "body": "     If is a homomorphism of groups, then the set-theoretic image of is a subgroup of .    If is a homomorphism of groups, then the kernel of is a subgroup of .    Prove that if is a group homomorphism and then the preimage of , defined as , is a subgroup of .      "
},
{
  "id": "prop-grptrivialkernel",
  "level": "2",
  "url": "sec-gphoms.html#prop-grptrivialkernel",
  "type": "Proposition",
  "number": "2.7",
  "title": "",
  "body": "     A group homomorphism is injective if and only if .    A group homomorphism is surjective if and only if .      "
},
{
  "id": "problem-29",
  "level": "2",
  "url": "sec-gphoms.html#problem-29",
  "type": "Problem",
  "number": "2.8",
  "title": "",
  "body": "   Find, with justification, an injective group homomorphism .  Find, with justification, an injective group homomorphism .    "
},
{
  "id": "sec-gpisos",
  "level": "1",
  "url": "sec-gpisos.html",
  "type": "Section",
  "number": "2.2",
  "title": "Group Isomorphisms",
  "body": " Group Isomorphisms    A homomorphism is called an isomorphism if there exists a homomorphism such that and .  If is an isomorphism, and are called isomorphic , written .    I have defined the notion of isomorphism in Definition differently than given in the textbook. The reason is that the correct meaning of the word isomorphism in any context (sets, groups, rings, fields, topological spaces, whatever) is always a morphism that has a two-sided inverse . In many contexts, such as sets, groups, rings and fields this turns out to be equivalent to the notion of being one-to-one and onto . But there are contexts in which this is not the case. For example a one-to-one and onto continuous map of topological spaces need not be a homeomorphism. (A homeomorphism is a term one uses for isomorphism of topological spaces, for historical reasons.)    Suppose is a group homomorphism. Then an isomorphism if and only if is bijective (one-to-one and onto).      An isomorphism invariant is a property such that whenever and has then has .      The following are isomorphism invariants:     the order of the group,    the set of orders of elements in the group,    being abelian,    the order of the center of the group,    being finitely generated,        Decide whether the groups and are isomorphic or not, with justification.        if and only if .                  Let be a group. An isomorphism is called an automorphism of .     Prove that the set of automorphisms of , denoted , is a group under composition.    Let be a group. Prove that the map given by for all is an automorphism if and only if is abelian.    Let be a group and . Define a map by for all .   Prove that for all .    Prove that is a subgroup of .       Prove that if groups and are isomorphic then:    and     .       Find an example of groups such that there is an isomorphism but is not trivial. Note: since can be rewritten as , the above shows that in general one cannot cancel groups in isomorphisms between direct products.    Prove that there are group isomorphisms between the following pairs of groups:    , where .     for any integer , where .       Let be a group of order for some odd integer . Let be the group of permutations on the elements of (i.e., the group of bijective functions from G to G). You may use without proof that .   Let be given by for all , where is defined by for all . Prove that is an injective group homomorphism.  Prove that if is an element of order then is a product of transpositions.  Prove contains a subgroup of index and is consequently not simple. (Tip: Consider the inverse image under of the subgroup of consisting of the even permutations.)     Prove the following   The identity map is a group isomomorphism for any group .    The exponential map is a homomorphism. So is . In fact, these maps are inverse to each other so we obtain an isomorphism . .    For any positive integer and field , the map determinant map is a group homomorphism.      "
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
  "body": "I have defined the notion of isomorphism in Definition differently than given in the textbook. The reason is that the correct meaning of the word isomorphism in any context (sets, groups, rings, fields, topological spaces, whatever) is always a morphism that has a two-sided inverse . In many contexts, such as sets, groups, rings and fields this turns out to be equivalent to the notion of being one-to-one and onto . But there are contexts in which this is not the case. For example a one-to-one and onto continuous map of topological spaces need not be a homeomorphism. (A homeomorphism is a term one uses for isomorphism of topological spaces, for historical reasons.) "
},
{
  "id": "prop-iso-def",
  "level": "2",
  "url": "sec-gpisos.html#prop-iso-def",
  "type": "Proposition",
  "number": "2.11",
  "title": "",
  "body": "  Suppose is a group homomorphism. Then an isomorphism if and only if is bijective (one-to-one and onto).   "
},
{
  "id": "def-iso-inv",
  "level": "2",
  "url": "sec-gpisos.html#def-iso-inv",
  "type": "Definition",
  "number": "2.12",
  "title": "",
  "body": "  An isomorphism invariant is a property such that whenever and has then has .   "
},
{
  "id": "thm-iso-inv",
  "level": "2",
  "url": "sec-gpisos.html#thm-iso-inv",
  "type": "Theorem",
  "number": "2.13",
  "title": "",
  "body": "  The following are isomorphism invariants:     the order of the group,    the set of orders of elements in the group,    being abelian,    the order of the center of the group,    being finitely generated,      "
},
{
  "id": "problem-30",
  "level": "2",
  "url": "sec-gpisos.html#problem-30",
  "type": "Problem",
  "number": "2.14",
  "title": "",
  "body": " Decide whether the groups and are isomorphic or not, with justification.  "
},
{
  "id": "problem-31",
  "level": "2",
  "url": "sec-gpisos.html#problem-31",
  "type": "Problem",
  "number": "2.15",
  "title": "",
  "body": "     if and only if .               "
},
{
  "id": "def-gp-automorphism",
  "level": "2",
  "url": "sec-gpisos.html#def-gp-automorphism",
  "type": "Definition",
  "number": "2.16",
  "title": "",
  "body": "  Let be a group. An isomorphism is called an automorphism of .   "
},
{
  "id": "problem-32",
  "level": "2",
  "url": "sec-gpisos.html#problem-32",
  "type": "Problem",
  "number": "2.17",
  "title": "",
  "body": " Prove that the set of automorphisms of , denoted , is a group under composition.  "
},
{
  "id": "problem-33",
  "level": "2",
  "url": "sec-gpisos.html#problem-33",
  "type": "Problem",
  "number": "2.18",
  "title": "",
  "body": " Let be a group. Prove that the map given by for all is an automorphism if and only if is abelian.  "
},
{
  "id": "problem-34",
  "level": "2",
  "url": "sec-gpisos.html#problem-34",
  "type": "Problem",
  "number": "2.19",
  "title": "",
  "body": " Let be a group and . Define a map by for all .   Prove that for all .    Prove that is a subgroup of .     "
},
{
  "id": "problem-35",
  "level": "2",
  "url": "sec-gpisos.html#problem-35",
  "type": "Problem",
  "number": "2.20",
  "title": "",
  "body": " Prove that if groups and are isomorphic then:    and     .     "
},
{
  "id": "problem-36",
  "level": "2",
  "url": "sec-gpisos.html#problem-36",
  "type": "Problem",
  "number": "2.21",
  "title": "",
  "body": " Find an example of groups such that there is an isomorphism but is not trivial. Note: since can be rewritten as , the above shows that in general one cannot cancel groups in isomorphisms between direct products.  "
},
{
  "id": "problem-37",
  "level": "2",
  "url": "sec-gpisos.html#problem-37",
  "type": "Problem",
  "number": "2.22",
  "title": "",
  "body": " Prove that there are group isomorphisms between the following pairs of groups:    , where .     for any integer , where .     "
},
{
  "id": "problem-38",
  "level": "2",
  "url": "sec-gpisos.html#problem-38",
  "type": "Problem",
  "number": "2.23",
  "title": "",
  "body": " Let be a group of order for some odd integer . Let be the group of permutations on the elements of (i.e., the group of bijective functions from G to G). You may use without proof that .   Let be given by for all , where is defined by for all . Prove that is an injective group homomorphism.  Prove that if is an element of order then is a product of transpositions.  Prove contains a subgroup of index and is consequently not simple. (Tip: Consider the inverse image under of the subgroup of consisting of the even permutations.)   "
},
{
  "id": "problem-39",
  "level": "2",
  "url": "sec-gpisos.html#problem-39",
  "type": "Problem",
  "number": "2.24",
  "title": "",
  "body": " Prove the following   The identity map is a group isomomorphism for any group .    The exponential map is a homomorphism. So is . In fact, these maps are inverse to each other so we obtain an isomorphism . .    For any positive integer and field , the map determinant map is a group homomorphism.     "
},
{
  "id": "sec-cylic-homoms",
  "level": "1",
  "url": "sec-cylic-homoms.html",
  "type": "Section",
  "number": "2.3",
  "title": "Cyclic Groups: Revisited",
  "body": " Cyclic Groups: Revisited   Prove that if are positive integers such that then there is a group isomorphism .     Let , where has finite order . Then    .    There is a bijection for each divisor of . Moreover, for each subgroup of , . In particular, all subgroups of are cyclic and there is a unique subgroup of each order.        Universal Mapping Property (UMP) for Cyclic Groups   Assume and let be any group. If , then for each such that , there is a unique group homomorphism such that . If , then for each , there is a unique group homomorphism such that . In both cases this unique group homomorphism is given by for any .    This is a particular case of the universal mapping property of a presentation (which we will covered later), since a cyclic group is either presented by or .   Classification Theorem for Cyclic Groups   Every infinite cyclic group is isomorphic to . Every cyclic group of order is isomorphic to .    "
},
{
  "id": "problem-40",
  "level": "2",
  "url": "sec-cylic-homoms.html#problem-40",
  "type": "Problem",
  "number": "2.25",
  "title": "",
  "body": " Prove that if are positive integers such that then there is a group isomorphism .  "
},
{
  "id": "thm-cyclic-relprime",
  "level": "2",
  "url": "sec-cylic-homoms.html#thm-cyclic-relprime",
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
  "id": "remark-10",
  "level": "2",
  "url": "sec-cylic-homoms.html#remark-10",
  "type": "Remark",
  "number": "2.28",
  "title": "",
  "body": "This is a particular case of the universal mapping property of a presentation (which we will covered later), since a cyclic group is either presented by or . "
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
  "body": " Cosets and Equivalence Relations    For any and any g\\in G let be defined as a left coset and right coset of in , respectfully.      Let . The following facts about left cosets are equivalent for :    and belong to the same left coset of in ,     for some ,     for some ,     ,     ,     .       We only prove the statements about left cosets.   if and belong to the same left coset of in then and for some , so and therefore where .    for some   and .    for some   .    .   Suppose for some , then by we also have for some . Then we have  thus .   Since , we have and . If then, and belong to the same left coset.      For , the collection of left cosets of in form a partition of , and similarly for the collection of right cosets. That is,   for all , either or      ,     ,   and similarly for right cosets. Moreover all left and right cosets have the same cardinality: for any .    Let me prove the assertions for right cosets. Clearly every element of belongs to at least one right coset, since (since ). We need to show any two cosets are either identical or disjoint: if and share an element, then it follows from of Lemma that . This proves that the right cosets partition . To see that all right cosets have the same cardinality as , define a function by . Clearly is onto and if then and hence , so that is also one-to-one.      If is a finite group and , then In particular the number of left cosets of in is equal to the number of right cosets of in .     Even if is not finite the number of left and right cosets of a subgroup is still the same. (Hint : consider the map and show it's a bijection. Why is the inverse needed?)    Lagrange's Theorem   If is a subgroup of a finite group , then divides .      If and is a finite group, then divides .       In finite groups, the common number of left or right cosets of a subgroup in a group is denoted as and is called the index of in .      If is a finite group, then     Let be a group (possibly infinite) and subgroups of . Suppose is finite. Prove that (Hint: First prove this in the case is a finite group. Then prove you can reduce to the finite case.)    Prove the converse to Lagrange's theorem is false: find a group and an integer such that divides the order of but does not have any subgroups of order . Hint : Take .    Let be a finite group and a subgroup of such that: , is simple, and . Prove that the only normal subgroups of are , and . (Hint: Let H be a normal subgroup of G. Then H ∩K is a normal subgroup of K.)   "
},
{
  "id": "def-coset",
  "level": "2",
  "url": "sec-cosets.html#def-coset",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": "  For any and any g\\in G let be defined as a left coset and right coset of in , respectfully.   "
},
{
  "id": "lem-cosetfacts",
  "level": "2",
  "url": "sec-cosets.html#lem-cosetfacts",
  "type": "Lemma",
  "number": "3.2",
  "title": "",
  "body": "  Let . The following facts about left cosets are equivalent for :    and belong to the same left coset of in ,     for some ,     for some ,     ,     ,     .       We only prove the statements about left cosets.   if and belong to the same left coset of in then and for some , so and therefore where .    for some   and .    for some   .    .   Suppose for some , then by we also have for some . Then we have  thus .   Since , we have and . If then, and belong to the same left coset.   "
},
{
  "id": "lem-cosetpartition",
  "level": "2",
  "url": "sec-cosets.html#lem-cosetpartition",
  "type": "Lemma",
  "number": "3.3",
  "title": "",
  "body": "  For , the collection of left cosets of in form a partition of , and similarly for the collection of right cosets. That is,   for all , either or      ,     ,   and similarly for right cosets. Moreover all left and right cosets have the same cardinality: for any .    Let me prove the assertions for right cosets. Clearly every element of belongs to at least one right coset, since (since ). We need to show any two cosets are either identical or disjoint: if and share an element, then it follows from of Lemma that . This proves that the right cosets partition . To see that all right cosets have the same cardinality as , define a function by . Clearly is onto and if then and hence , so that is also one-to-one.   "
},
{
  "id": "cor-left-right-cosets",
  "level": "2",
  "url": "sec-cosets.html#cor-left-right-cosets",
  "type": "Corollary",
  "number": "3.4",
  "title": "",
  "body": "  If is a finite group and , then In particular the number of left cosets of in is equal to the number of right cosets of in .   "
},
{
  "id": "problem-41",
  "level": "2",
  "url": "sec-cosets.html#problem-41",
  "type": "Problem",
  "number": "3.5",
  "title": "",
  "body": " Even if is not finite the number of left and right cosets of a subgroup is still the same. (Hint : consider the map and show it's a bijection. Why is the inverse needed?)  "
},
{
  "id": "thm-lagrange",
  "level": "2",
  "url": "sec-cosets.html#thm-lagrange",
  "type": "Theorem",
  "number": "3.6",
  "title": "Lagrange's Theorem.",
  "body": " Lagrange's Theorem   If is a subgroup of a finite group , then divides .   "
},
{
  "id": "cor-lagrange",
  "level": "2",
  "url": "sec-cosets.html#cor-lagrange",
  "type": "Corollary",
  "number": "3.7",
  "title": "",
  "body": "  If and is a finite group, then divides .   "
},
{
  "id": "def-index",
  "level": "2",
  "url": "sec-cosets.html#def-index",
  "type": "Definition",
  "number": "3.8",
  "title": "",
  "body": "   In finite groups, the common number of left or right cosets of a subgroup in a group is denoted as and is called the index of in .    "
},
{
  "id": "problem-42",
  "level": "2",
  "url": "sec-cosets.html#problem-42",
  "type": "Problem",
  "number": "3.9",
  "title": "",
  "body": " If is a finite group, then   "
},
{
  "id": "problem-43",
  "level": "2",
  "url": "sec-cosets.html#problem-43",
  "type": "Problem",
  "number": "3.10",
  "title": "",
  "body": " Let be a group (possibly infinite) and subgroups of . Suppose is finite. Prove that (Hint: First prove this in the case is a finite group. Then prove you can reduce to the finite case.)  "
},
{
  "id": "problem-44",
  "level": "2",
  "url": "sec-cosets.html#problem-44",
  "type": "Problem",
  "number": "3.11",
  "title": "",
  "body": " Prove the converse to Lagrange's theorem is false: find a group and an integer such that divides the order of but does not have any subgroups of order . Hint : Take .  "
},
{
  "id": "problem-45",
  "level": "2",
  "url": "sec-cosets.html#problem-45",
  "type": "Problem",
  "number": "3.12",
  "title": "",
  "body": " Let be a finite group and a subgroup of such that: , is simple, and . Prove that the only normal subgroups of are , and . (Hint: Let H be a normal subgroup of G. Then H ∩K is a normal subgroup of K.)  "
},
{
  "id": "sec-normal-subgroups",
  "level": "1",
  "url": "sec-normal-subgroups.html",
  "type": "Section",
  "number": "3.2",
  "title": "Normal Subgroups",
  "body": " Normal Subgroups    A subgroup of a group is normal in , written , if for all .     Equivalent Normal Definitions   Let be a subgroup of a group . The following are equivalent:         for all .     for all .           The trivial subgroups , of a group are normal.    Any subgroup of an abelian group is normal.    For any group , .       Show that being a normal subgroup is not a transitive relation.   Consider one can show that and, since is abelian ( ), the subgroup is normal in . But is not normal in , since for example         Prove that if is a group homomorphism and then the preimage of , , is a normal subgroup of .    Show that if is a group homomorphism and then need not be a normal subgroup of .       Show that any subgroup of index two is normal. This means: show that if is a group, is a subgroup and , i.e the number of left (or right) cosets of in is two, then is normal.    Let be a subgroup and .   Prove that is a subgroup of .    Prove that     Suppose and is the only subgroup of of order . Prove that is normal.       Let and be normal subgroups of a group such that . Prove that for all .    Let be a group and a subset of . Let . Prove that if and only if for every and .    Let be a group and let be a set. The normal subgroup generated by , denoted , is the intersection of all the normal subgroups of that contain .   Show that is a normal subgroup of .    Show that the elements of can be described as        Let be a group, , and . Prove that .    Let be a group with subgroups . Recall the notation    Prove that if and only if .    Prove that if either one of or is a normal subgroup of , then and .       In , let and . Then but of course and do not commute. The fact that can also be justified by observing that .    Let be a group and be its automorphism group. In Problem 7 on HW # 2, you proved that for each , the function defined by for all is an automorphism of . Further, you proved the set , called the set of inner automorphisms of , is a subgroup of . Prove that .    Let be a finite group. Prove that the number of elements in the set is even. Conclude that a group of even order must have an element of order .    Let be a finite group, and subgroups such that and = are relatively prime and . Prove that .    Let be a group. A subgroup of is called a characteristic subgroup of if for every automorphism of . Show that if is a characteristic subgroup of and is a normal subgroup of , then is a normal subgroup of .   Let be a group, is a normal subgroup of , and a characteristic subgroup of . Let and consider the automorphism given by .  Let and notice , as . Thus is well defined. Let . As , we can write for some . Then , making surjective. As we see that is a bijection. The homomorphism piece we get for free from , making .  Let . As is a characteristic subgroup of , we see that for all and for all . Thus is normal in .     Let be a group with a subgroup so that . (a) Prove that there is a normal subgroup of , so that and (b) Prove that if is finitely generated, there are most finitely many subgroups with index .(Hint: you might want to consider maps .)    Let be a group, and be subgroups of .   Give an example of and such that is not a subgroup of .    Suppose now that and , where is prime. Prove that either or .        Let , , and . Notice that , and thus , ( ) which does not divide . Thus is not a subgroup of , as this would contradict .    Suppose there exists some such that . We examine . Notice that since has prime order it is cyclic, and thus generated by any non-identity element, such as . Thus any element in can be written in the form , and any element in can subsequently be written as for some . Thus .      "
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
  "id": "example-2",
  "level": "2",
  "url": "sec-normal-subgroups.html#example-2",
  "type": "Example",
  "number": "3.15",
  "title": "",
  "body": "    The trivial subgroups , of a group are normal.    Any subgroup of an abelian group is normal.    For any group , .     "
},
{
  "id": "problem-46",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-46",
  "type": "Problem",
  "number": "3.16",
  "title": "",
  "body": " Show that being a normal subgroup is not a transitive relation.   Consider one can show that and, since is abelian ( ), the subgroup is normal in . But is not normal in , since for example    "
},
{
  "id": "problem-47",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-47",
  "type": "Problem",
  "number": "3.17",
  "title": "",
  "body": "    Prove that if is a group homomorphism and then the preimage of , , is a normal subgroup of .    Show that if is a group homomorphism and then need not be a normal subgroup of .     "
},
{
  "id": "problem-48",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-48",
  "type": "Problem",
  "number": "3.18",
  "title": "",
  "body": " Show that any subgroup of index two is normal. This means: show that if is a group, is a subgroup and , i.e the number of left (or right) cosets of in is two, then is normal.  "
},
{
  "id": "problem-49",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-49",
  "type": "Problem",
  "number": "3.19",
  "title": "",
  "body": " Let be a subgroup and .   Prove that is a subgroup of .    Prove that     Suppose and is the only subgroup of of order . Prove that is normal.     "
},
{
  "id": "problem-50",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-50",
  "type": "Problem",
  "number": "3.20",
  "title": "",
  "body": " Let and be normal subgroups of a group such that . Prove that for all .  "
},
{
  "id": "problem-51",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-51",
  "type": "Problem",
  "number": "3.21",
  "title": "",
  "body": " Let be a group and a subset of . Let . Prove that if and only if for every and .  "
},
{
  "id": "problem-52",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-52",
  "type": "Problem",
  "number": "3.22",
  "title": "",
  "body": " Let be a group and let be a set. The normal subgroup generated by , denoted , is the intersection of all the normal subgroups of that contain .   Show that is a normal subgroup of .    Show that the elements of can be described as      "
},
{
  "id": "problem-53",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-53",
  "type": "Problem",
  "number": "3.23",
  "title": "",
  "body": " Let be a group, , and . Prove that .  "
},
{
  "id": "problem-54",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-54",
  "type": "Problem",
  "number": "3.24",
  "title": "",
  "body": " Let be a group with subgroups . Recall the notation    Prove that if and only if .    Prove that if either one of or is a normal subgroup of , then and .     "
},
{
  "id": "problem-55",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-55",
  "type": "Problem",
  "number": "3.25",
  "title": "",
  "body": " In , let and . Then but of course and do not commute. The fact that can also be justified by observing that .  "
},
{
  "id": "problem-56",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-56",
  "type": "Problem",
  "number": "3.26",
  "title": "",
  "body": " Let be a group and be its automorphism group. In Problem 7 on HW # 2, you proved that for each , the function defined by for all is an automorphism of . Further, you proved the set , called the set of inner automorphisms of , is a subgroup of . Prove that .  "
},
{
  "id": "problem-57",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-57",
  "type": "Problem",
  "number": "3.27",
  "title": "",
  "body": " Let be a finite group. Prove that the number of elements in the set is even. Conclude that a group of even order must have an element of order .  "
},
{
  "id": "problem-58",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-58",
  "type": "Problem",
  "number": "3.28",
  "title": "",
  "body": " Let be a finite group, and subgroups such that and = are relatively prime and . Prove that .  "
},
{
  "id": "problem-59",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-59",
  "type": "Problem",
  "number": "3.29",
  "title": "",
  "body": " Let be a group. A subgroup of is called a characteristic subgroup of if for every automorphism of . Show that if is a characteristic subgroup of and is a normal subgroup of , then is a normal subgroup of .   Let be a group, is a normal subgroup of , and a characteristic subgroup of . Let and consider the automorphism given by .  Let and notice , as . Thus is well defined. Let . As , we can write for some . Then , making surjective. As we see that is a bijection. The homomorphism piece we get for free from , making .  Let . As is a characteristic subgroup of , we see that for all and for all . Thus is normal in .   "
},
{
  "id": "problem-60",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-60",
  "type": "Problem",
  "number": "3.30",
  "title": "",
  "body": " Let be a group with a subgroup so that . (a) Prove that there is a normal subgroup of , so that and (b) Prove that if is finitely generated, there are most finitely many subgroups with index .(Hint: you might want to consider maps .)  "
},
{
  "id": "problem-61",
  "level": "2",
  "url": "sec-normal-subgroups.html#problem-61",
  "type": "Problem",
  "number": "3.31",
  "title": "",
  "body": " Let be a group, and be subgroups of .   Give an example of and such that is not a subgroup of .    Suppose now that and , where is prime. Prove that either or .        Let , , and . Notice that , and thus , ( ) which does not divide . Thus is not a subgroup of , as this would contradict .    Suppose there exists some such that . We examine . Notice that since has prime order it is cyclic, and thus generated by any non-identity element, such as . Thus any element in can be written in the form , and any element in can subsequently be written as for some . Thus .     "
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
  "number": "3.32",
  "title": "",
  "body": "  For any group and normal subgroup of , the map defined by is a surjective group homomorphism with kernel .    Surjectivity is immediate from the definition. The group homomorphism property follows from the computation below which uses the definition of and the rule for multiplying cosets in : Finally, using Lemma , we have .   "
},
{
  "id": "cor-norm-iff-ker",
  "level": "2",
  "url": "sec-quotient-groups.html#cor-norm-iff-ker",
  "type": "Corollary",
  "number": "3.33",
  "title": "",
  "body": "  A subgroup of a group is normal in if and only if is the kernel of a homomorphism with domain     empty   "
},
{
  "id": "problem-62",
  "level": "2",
  "url": "sec-quotient-groups.html#problem-62",
  "type": "Problem",
  "number": "3.34",
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
  "id": "exercise-1",
  "level": "2",
  "url": "sec-isomorphism-thms.html#exercise-1",
  "type": "Exercise",
  "number": "3.4.1",
  "title": "",
  "body": "Let be a (not necessarily finite) group and and normal subgroups such that . Prove that   Let defined such that . Let . Then showing is a homomorphism.  Let . As , we have and with and . As and we see .  Consider and making surjective as well.  Let . Then , and so . Let . Then , so and , placing . Thus, by the First Isomorphism Theorem, we have   "
},
{
  "id": "exercise-2",
  "level": "2",
  "url": "sec-isomorphism-thms.html#exercise-2",
  "type": "Exercise",
  "number": "3.4.2",
  "title": "",
  "body": "Let be a finite group.   If is a normal subgroup of and , prove that is contained in the center of .    Suppose that is odd and that contains a non-trivial simple subgroup with . Prove that is the only non-trivial proper normal subgroup of .     Let and let . As is normal, we see , and thus one of the following must be true: - , where is the identity element of , or - , the only other element of . However, in the first case we would have by multiplying and over, and thus it must be the case that , or . Thus .  From Lagrange's Theorem we know that , meaning that has an even number of elements. Thus is the smallest prime dividing the order of , making normal in (See: ).  Suppose by way of contradiction there exists some non-trivial proper normal subgroup of that is not . As is normal, by the Second Isomorphism Theorem we have . However, as is simple, this means that . SIT also tells us that . As , this makes and . From part (a), . However, this contradicts Lagrange’s Theorem, as does not divide any odd numbers.  "
},
{
  "id": "sec-grp-presentations",
  "level": "1",
  "url": "sec-grp-presentations.html",
  "type": "Section",
  "number": "3.5",
  "title": "Presentations as Quotient Groups",
  "body": " Presentations as Quotient Groups  "
},
{
  "id": "graction",
  "level": "1",
  "url": "graction.html",
  "type": "Section",
  "number": "4.1",
  "title": "Group Actions",
  "body": " Group Actions    For a group and set , an action of on is a function typically written as , such that      for all and .     for all .       To make the first axiom clearer, throughout this section we will write for the action of on and no symbol (concatenation) for the multiplication of two elements in the group .   Trivial Action  For any group and any set , defines an action, the trivial action . The associated group homomorphism is by .    Permutation Representation   Assume is a group and is a set.     If is an action of on , then the function defined as , where is the function given by , is a well defined homomorphism of groups.    Conversely, if is a group homomorphism, the rule defines an action of on .       We have thus and a similar argument shows that   Finally, we wish to show , equivalently . Since holds for all , this proves is a homomorphism.  Given a homomorphism , the function defined as is an action because , and .      An action of a group on a set is called faithful if the associated group homomorphism is injective. Equivalently, an action is faithful if and only if for a given , whenever for all , it must be that .     Left Regular Action  Let be any group and define an action of on (regarded as just a set) by the rule     Prove that the left regular action is faithful.    Let be a group and a subgroup of . Recall that the centralizer of in is Prove that if is normal in , then so is and that is isomorphic to a subgroup of the automorphism group of .   Let be a group and . Let , and consider . Let . As we have for some , and thus that 1. and 2. . Consider . By (1), we see . As commutes with everything in we have , and by (2) we have . Thus .  Let act on the left cosets of by left multiplication, giving rise to the permutation representation homomorphism . By the First Isomorphism Theorem we see that is isomorphic to a subgroup of the automorphism group of .     Recall that the centralizer of a subgroup in a group is (a) Prove that if is normal in , then is normal in . (b) Prove that if is normal in , then is isomorphic to a subgroup of (the group of automorphisms of H)   Let act on by conjugation, yielding the homomorphism via the permutation representation that maps to , where . This is the trivial permutation exactly when , making the kernel of . Thus is normal in .  From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .     Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by and the normalizer of is the subgroup of defined by .    Show that the centralizer of in is a normal subgroup of the normalizer of in .  Show that the quotient is isomorphic to a subgroup of the automorphism group of .       Let be a subgroup of a group .   Part (a)  Let act on by conjugation. Thus the associated permutation homomorphism is defined such that , where . Notice that when we have for all , and thus . If then for all , and thus . Thus and .   Part (b)  From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .       Let be a finite group and let be a subgroup of of index , where is the smallest prime divisor of the order of . Prove that is normal in .   Let and note that . Let denote the kernel of the permutation representation generated by acting on by left multiplication.  The First Isomorphism Theorem tells us that . Thus by Lagrange’s Theorem. Let . Then for all , making for all including . Thus .  This yields . Let , giving us . As we have , so . But is the smallest prime dividing the order of , and thus , making and .    "
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
  "id": "remark-11",
  "level": "2",
  "url": "graction.html#remark-11",
  "type": "Remark",
  "number": "4.2",
  "title": "",
  "body": "To make the first axiom clearer, throughout this section we will write for the action of on and no symbol (concatenation) for the multiplication of two elements in the group . "
},
{
  "id": "example-3",
  "level": "2",
  "url": "graction.html#example-3",
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
  "id": "problem-63",
  "level": "2",
  "url": "graction.html#problem-63",
  "type": "Problem",
  "number": "4.7",
  "title": "",
  "body": " Prove that the left regular action is faithful.  "
},
{
  "id": "problem-64",
  "level": "2",
  "url": "graction.html#problem-64",
  "type": "Problem",
  "number": "4.8",
  "title": "",
  "body": " Let be a group and a subgroup of . Recall that the centralizer of in is Prove that if is normal in , then so is and that is isomorphic to a subgroup of the automorphism group of .   Let be a group and . Let , and consider . Let . As we have for some , and thus that 1. and 2. . Consider . By (1), we see . As commutes with everything in we have , and by (2) we have . Thus .  Let act on the left cosets of by left multiplication, giving rise to the permutation representation homomorphism . By the First Isomorphism Theorem we see that is isomorphic to a subgroup of the automorphism group of .   "
},
{
  "id": "problem-65",
  "level": "2",
  "url": "graction.html#problem-65",
  "type": "Problem",
  "number": "4.9",
  "title": "",
  "body": " Recall that the centralizer of a subgroup in a group is (a) Prove that if is normal in , then is normal in . (b) Prove that if is normal in , then is isomorphic to a subgroup of (the group of automorphisms of H)   Let act on by conjugation, yielding the homomorphism via the permutation representation that maps to , where . This is the trivial permutation exactly when , making the kernel of . Thus is normal in .  From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .   "
},
{
  "id": "problem-66",
  "level": "2",
  "url": "graction.html#problem-66",
  "type": "Problem",
  "number": "4.10",
  "title": "",
  "body": " Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by and the normalizer of is the subgroup of defined by .    Show that the centralizer of in is a normal subgroup of the normalizer of in .  Show that the quotient is isomorphic to a subgroup of the automorphism group of .    "
},
{
  "id": "problem-67",
  "level": "2",
  "url": "graction.html#problem-67",
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
  "id": "problem-68",
  "level": "2",
  "url": "sec-lois.html#problem-68",
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
  "id": "problem-69",
  "level": "2",
  "url": "sec-lois.html#problem-69",
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
  "id": "example-5",
  "level": "2",
  "url": "sec-conjugation.html#example-5",
  "type": "Example",
  "number": "4.20",
  "title": "Conjugation Action.",
  "body": " Conjugation Action  Let be any group and fix an element . Define the conjugation action of on itself by setting   "
},
{
  "id": "problem-70",
  "level": "2",
  "url": "sec-conjugation.html#problem-70",
  "type": "Problem",
  "number": "4.21",
  "title": "",
  "body": "    Prove that the conjugation action of of on itself is a well-defined group action.    Show acts on via conjugation for any .     "
},
{
  "id": "problem-71",
  "level": "2",
  "url": "sec-conjugation.html#problem-71",
  "type": "Problem",
  "number": "4.22",
  "title": "",
  "body": " The kernel of the permutation representation for the conjugation action is the center .   If is the permutation representation for acting on by conjugation, then     "
},
{
  "id": "problem-72",
  "level": "2",
  "url": "sec-conjugation.html#problem-72",
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
  "id": "problem-73",
  "level": "2",
  "url": "sec-conjugation.html#problem-73",
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
  "id": "problem-74",
  "level": "2",
  "url": "sec-conjugation.html#problem-74",
  "type": "Problem",
  "number": "4.28",
  "title": "",
  "body": " Let be a subgroup of a group . Recall that the centralizer of is the subgroup of defined by and the normalizer of is the subgroup of defined by .    Show that the centralizer of in is a normal subgroup of the normalizer of in .  Show that the quotient is isomorphic to a subgroup of the automorphism group of .     Let be a subgroup of a group .    Let act on by conjugation. Thus the associated permutation homomorphism is defined such that , where . Notice that when we have for all , and thus . If then for all , and thus . Thus and .    From the above permutation representation we have a homomorphism . As , by the First Isomorphism Theorem we have , a subgroup of .      Let be a group and . Let , and consider . Let . As we have for some , and thus that 1. and 2. . Consider . By (1), we see . As commutes with everything in we have , and by (2) we have . Thus .  Let act on the left cosets of by left multiplication, giving rise to the permutation representation homomorphism . By the First Isomorphism Theorem we see that is isomorphic to a subgroup of the automorphism group of .   "
},
{
  "id": "problem-75",
  "level": "2",
  "url": "sec-conjugation.html#problem-75",
  "type": "Problem",
  "number": "4.29",
  "title": "",
  "body": " Let be a (not necessarily finite) group and a subgroup of index . Define (i.e., is the intersection of all the conjugates of K    Prove is a the largest normal subgroup of that is contained in .  Prove divides .    Let act on the left cosets of in by left multiplication, yielding the permutation representation homomorphism . Let conspicuously denote the kernel of this function.  Let . Then , the automorphism defined by is precisely the identity permutation. Thus for all and for all , so This means the elements of are precisely those that are in the conjugacy class of for all . There cannot exist a larger normal subgroup of contained in , as it would contain an element that was not in some conjugacy class for , negating the definition of a normal subgroup.  Recall the permutation representation homomorphism . The First Isomorphism Theorem tells us , which has order . Thus .   "
},
{
  "id": "problem-76",
  "level": "2",
  "url": "sec-conjugation.html#problem-76",
  "type": "Problem",
  "number": "4.30",
  "title": "",
  "body": " Prove that if is a finite group of odd order, then for any non-identity element , is not conjugate to .   Let be a finite group of odd order, and let act on itself via conjugation. Under this action, the orbit of an element is exactly its conjugacy class. By the Orbit-Stabilizer Theorem we have . Thus the order of an element divides the order of the group, and so every orbit must have odd order.  Suppose there exists an element such that for some . Thus . Let . Thus for some . Then . However, as , we have . As and are both in , we see that as well. As , we see that this means that the orbit of would have even order, which is not possible.   "
},
{
  "id": "problem-77",
  "level": "2",
  "url": "sec-conjugation.html#problem-77",
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
  "id": "problem-78",
  "level": "2",
  "url": "sec-class-eq.html#problem-78",
  "type": "Problem",
  "number": "4.37",
  "title": "",
  "body": " Let be a finite -group and its center. If is a normal subgroup of , prove that .   Let be a finite -group for some prime and a normal subgroup of .  First, we show that the center of is nontrivial. Suppose by way of contradiction that . We examine the conjugacy classes of . From the Class Equation, we know Note that for some , meaning that the only divisors of are powers of . In finite groups, each conjugacy class must divide the order of the group. By Lagrange’s Theorem, , where . Since |Z(G)|=1, we see that , which is impossible given that . Thus .  As it is a union of conjugacy classes of the elements it contains, one of which is . Assume by way of contradiction that , meaning that is the only element in whose conjugacy class is a singleton. This yields However, by Lagrange’s Theorem must also be a group, and thus by an analogous element counting argument as above we see that there exists some such that , or that for all . Thankfully, this means that , and thus we have .   "
},
{
  "id": "problem-79",
  "level": "2",
  "url": "sec-class-eq.html#problem-79",
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
  "body": " -groups    For a prime number , a -group is a group of order for some .      If is a prime number and is a finite group of order for some , then is not the trivial group (In fact for some ).    Let be a list of unique representatives of all of the conjugacy classes of of size greater than 1 as in the class equation. Then for each , so . Since , it follows that for each . From the Class equation we deduce that so, .      Let be a finite group and a prime. Write the order of as where . A Sylow -subgroup of is a subgroup such that . That is, a Sylow -subgroup of is a subgroup whose order is the highest conceivable power of according to Lagrange's Theorem.  We set to be the collection of all Sylow -subgroups of and to be the number of Sylow -subgroups.     We allow the case when , in which case and has a unique Sylow -subgroup, namely which has order .    In for a prime , is a Sylow -subgroup. If , there is only one Sylow -subgroup of , so .  In for odd, each of the subgroups , for is a Sylow -subgroup, so .    In , the Sylow -subgroups are the cyclic groups for any five cycle , so because there are 24 five cycles, but there are four of these in every Sylow 5-subgroup. The Sylow -subgroups are the cyclic groups for any three cycle , so because there are 20 three cycles, but there are two of these in every Sylow 3-subgroup.  A Sylow -subgroup of is any subgroup of order . For example is a Sylow -subgroup. There are many others.    Cauchy's Theorem   If is a finite group and is a prime number dividing , then has an element of order . (In fact, at least elements of order .)     Let be a group of order for some prime acting on a finite set .    Suppose does not divide . Prove that there exists some element of fixed by all elements of .  Suppose acts faithfully on . Prove that .      Let be a group of order , for some prime , acting on a finite set .   Part (a)  Suppose there is no element in that is fixed by all elements of .  By Orbit-Stabilizer we know that for all . Thus every orbit under this action has an order dividing , so either or some positive power of However, as no element of is fixed by every element of , there exists no stabilizer which is all of , and thus there exist no orbits that have order .  Recall that the orbits of this action partition , and thus . As every orbit is divisible by , so too must be .   Part (b)  Suppose acts faithfully on . Thus the permutation representation homomorphism is injective. Let denote the order of . Then , which as order . As is injective, we see that , and thus .  Thus must show up in the factorization of at least times, meaning that .         "
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
  "id": "remark-12",
  "level": "2",
  "url": "sec-pgroups.html#remark-12",
  "type": "Remark",
  "number": "5.4",
  "title": "",
  "body": " We allow the case when , in which case and has a unique Sylow -subgroup, namely which has order .  "
},
{
  "id": "problem-80",
  "level": "2",
  "url": "sec-pgroups.html#problem-80",
  "type": "Problem",
  "number": "5.5",
  "title": "",
  "body": " In for a prime , is a Sylow -subgroup. If , there is only one Sylow -subgroup of , so .  In for odd, each of the subgroups , for is a Sylow -subgroup, so .  "
},
{
  "id": "problem-81",
  "level": "2",
  "url": "sec-pgroups.html#problem-81",
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
  "id": "problem-82",
  "level": "2",
  "url": "sec-pgroups.html#problem-82",
  "type": "Problem",
  "number": "5.8",
  "title": "",
  "body": " Let be a group of order for some prime acting on a finite set .    Suppose does not divide . Prove that there exists some element of fixed by all elements of .  Suppose acts faithfully on . Prove that .      Let be a group of order , for some prime , acting on a finite set .   Part (a)  Suppose there is no element in that is fixed by all elements of .  By Orbit-Stabilizer we know that for all . Thus every orbit under this action has an order dividing , so either or some positive power of However, as no element of is fixed by every element of , there exists no stabilizer which is all of , and thus there exist no orbits that have order .  Recall that the orbits of this action partition , and thus . As every orbit is divisible by , so too must be .   Part (b)  Suppose acts faithfully on . Thus the permutation representation homomorphism is injective. Let denote the order of . Then , which as order . As is injective, we see that , and thus .  Thus must show up in the factorization of at least times, meaning that .      "
},
{
  "id": "problem-83",
  "level": "2",
  "url": "sec-pgroups.html#problem-83",
  "type": "Problem",
  "number": "5.9",
  "title": "",
  "body": " "
},
{
  "id": "sec-sylowthm",
  "level": "1",
  "url": "sec-sylowthm.html",
  "type": "Section",
  "number": "5.2",
  "title": "Sylow's Theorem",
  "body": " Sylow's Theorem    Suppose is a group and is a positive integer. Then   If is a subgroup of order , then is a subgroup of order .    If there is a unique subgroup of of order , then .         Let be a finite group, a prime, a Sylow -subgroup of , and any -subgroup of . Then .     Sylow's Theorem   Assume is a group of order where is prime, , and .    (there exists at least one Sylow -subgroup of ).    If is a Sylow -subgroup of and is any -subgroup of (i.e., a subgroup whose order is some power of ), then there is a such that . In particular, the action of on by conjugation is transitive — i.e., any two Sylow -subgroups are conjugate.    We have     For any , and hence         Let be a finite group. (a) Suppose every subgroup of is normal. Prove that given any positive divisor of there exists a subgroup of of order . (b) Give an example, with justification, of a finite group and a positive divisor of such that has no subgroup of order .   Let be a finite group.  Suppose every subgroup of is normal. Let be a positive divisor of . For every prime dividing the order of there is exactly one Sylow -subgroup of , given that Sylow -subgroups are normal if and only if they are unique. Thus can be written as a direct product of its Sylow -subgroups. Given the prime factorization of , the direct product of the Sylow -subgroups such that is 1. A subgroup of as each Sylow -subgroup is normal, and 2. A direct product of cyclic groups of relatively prime order, yielding an element of order . The subgroup generated by this element is a subgroup of of order .  We take a peak at with . Suppose had a subgroup of order , . First, note that , the smallest prime dividing the order of , making normal in .  As there are eight -cycles in , there exists some -cycle, , such that . Consider then and in . Since , it must be the case that either or .    If then . As we have , but as is a subgroup this would mean , which is not the case.  If then , but , and so we have a contradiction. Thus cannot exist, and has no subgroup of order .       Let be a finite group, a prime dividing the order of , and a normal subgroup of order for some . Prove the following statements. (a) is contained in every Sylow -subgroup of . (b) contains a nontrivial abelian subgroup that is normal in .   Let be a finite group, a prime dividing the order of , and a normal subgroup of order for some .  As is normal we have for all . As it is a group it is contained in some Sylow -subgroup. All Sylow -subgroups are conjugate to each other, but is fixed by conjugation so its actually in all of them.  Consider , which is abelian in . The center of -groups are nontrivial so that’s good. Let , , and consider . As we know . Let . We see , since is still normal. so we have .  Notice that , and thus . Thus , and so we can substitute the last line in the previous paragraph to see . Thus we have normality!     Let be a normal subgroup of a finite group , a prime dividing the order of , and a Sylow -subgroup of . Prove that  Hint : For , consider the subgroup .   First, note that .  Let act on by conjugation, which is a transitive action by part (2) of Sylow’s Theorem. Therefore acts transitively on this set as well. Under this action, .  Let , and let . Consider . As the action by is transitive there exists some such that . This means that stabilizes . Then stabilizes as well, so . But notice that , where and . Thus .     We proceed via the contrapositive. Let be a Sylow -subgroup, and suppose . Thus    Let be a finite group and a prime dividing the order of . Let P be a Sylow -subgroup.  Note that and both have elements, where is the largest power of that divides the order of . Recall . As is the largest power of that divides the order of , we see that must be at least . Thus .  First, note that . Note that is the largest subgroup of such that is normal in , making the only Sylow -subgroup of . Let . Notice that , but as we have . As is a Sylow -subgroup that is contained in , we see that , placing . Thus .     Let be a group of order (a) Prove that has a unique -Sylow subgroup (b) Prove that the -Sylow subgroup is contained in the center of .   Let be a group of order   By Sylow’s Theorem we know and is congruent to . The only possibility for such is , meaning that has exactly Sylow -subgroup.  By the First Isomorphism Theorem we know that . However, , which has order . As this is a homomorphism, we see the order of must divide both and , two numbers that are relatively prime. Thus , meaning that conjugation is equivalent to the identity map, or that for all . Thus .     Let be a group of order . Prove that has a normal subgroup of order and that the center of contains a subgroup of order    Let be a group of order . By Sylow’s Theorem we know the and , and so , making , the unique Sylow -subgroup of , normal in . Things are looking good thus far. We also know the following: - and , so as well. Yeehaw.  Let denote the unique Sylow -subgroup, and let act on by conjugation. Thus . The First Isomorphism Theorem tells us that , where is the kernel of . However, , meaning that the order of must divide both and , which cannot happen. Thus must be trivial, meaning that for every and , making a subgroup of of order .    "
},
{
  "id": "lem-Sylaction",
  "level": "2",
  "url": "sec-sylowthm.html#lem-Sylaction",
  "type": "Lemma",
  "number": "5.10",
  "title": "",
  "body": "  Suppose is a group and is a positive integer. Then   If is a subgroup of order , then is a subgroup of order .    If there is a unique subgroup of of order , then .      "
},
{
  "id": "lem-Syl-lem",
  "level": "2",
  "url": "sec-sylowthm.html#lem-Syl-lem",
  "type": "Lemma",
  "number": "5.11",
  "title": "",
  "body": "  Let be a finite group, a prime, a Sylow -subgroup of , and any -subgroup of . Then .   "
},
{
  "id": "thm-sylow",
  "level": "2",
  "url": "sec-sylowthm.html#thm-sylow",
  "type": "Theorem",
  "number": "5.12",
  "title": "Sylow's Theorem.",
  "body": " Sylow's Theorem   Assume is a group of order where is prime, , and .    (there exists at least one Sylow -subgroup of ).    If is a Sylow -subgroup of and is any -subgroup of (i.e., a subgroup whose order is some power of ), then there is a such that . In particular, the action of on by conjugation is transitive — i.e., any two Sylow -subgroups are conjugate.    We have     For any , and hence       "
},
{
  "id": "problem-84",
  "level": "2",
  "url": "sec-sylowthm.html#problem-84",
  "type": "Problem",
  "number": "5.13",
  "title": "",
  "body": " Let be a finite group. (a) Suppose every subgroup of is normal. Prove that given any positive divisor of there exists a subgroup of of order . (b) Give an example, with justification, of a finite group and a positive divisor of such that has no subgroup of order .   Let be a finite group.  Suppose every subgroup of is normal. Let be a positive divisor of . For every prime dividing the order of there is exactly one Sylow -subgroup of , given that Sylow -subgroups are normal if and only if they are unique. Thus can be written as a direct product of its Sylow -subgroups. Given the prime factorization of , the direct product of the Sylow -subgroups such that is 1. A subgroup of as each Sylow -subgroup is normal, and 2. A direct product of cyclic groups of relatively prime order, yielding an element of order . The subgroup generated by this element is a subgroup of of order .  We take a peak at with . Suppose had a subgroup of order , . First, note that , the smallest prime dividing the order of , making normal in .  As there are eight -cycles in , there exists some -cycle, , such that . Consider then and in . Since , it must be the case that either or .    If then . As we have , but as is a subgroup this would mean , which is not the case.  If then , but , and so we have a contradiction. Thus cannot exist, and has no subgroup of order .     "
},
{
  "id": "problem-85",
  "level": "2",
  "url": "sec-sylowthm.html#problem-85",
  "type": "Problem",
  "number": "5.14",
  "title": "",
  "body": " Let be a finite group, a prime dividing the order of , and a normal subgroup of order for some . Prove the following statements. (a) is contained in every Sylow -subgroup of . (b) contains a nontrivial abelian subgroup that is normal in .   Let be a finite group, a prime dividing the order of , and a normal subgroup of order for some .  As is normal we have for all . As it is a group it is contained in some Sylow -subgroup. All Sylow -subgroups are conjugate to each other, but is fixed by conjugation so its actually in all of them.  Consider , which is abelian in . The center of -groups are nontrivial so that’s good. Let , , and consider . As we know . Let . We see , since is still normal. so we have .  Notice that , and thus . Thus , and so we can substitute the last line in the previous paragraph to see . Thus we have normality!   "
},
{
  "id": "problem-86",
  "level": "2",
  "url": "sec-sylowthm.html#problem-86",
  "type": "Problem",
  "number": "5.15",
  "title": "",
  "body": " Let be a normal subgroup of a finite group , a prime dividing the order of , and a Sylow -subgroup of . Prove that  Hint : For , consider the subgroup .   First, note that .  Let act on by conjugation, which is a transitive action by part (2) of Sylow’s Theorem. Therefore acts transitively on this set as well. Under this action, .  Let , and let . Consider . As the action by is transitive there exists some such that . This means that stabilizes . Then stabilizes as well, so . But notice that , where and . Thus .   "
},
{
  "id": "problem-87",
  "level": "2",
  "url": "sec-sylowthm.html#problem-87",
  "type": "Problem",
  "number": "5.16",
  "title": "",
  "body": " We proceed via the contrapositive. Let be a Sylow -subgroup, and suppose . Thus    Let be a finite group and a prime dividing the order of . Let P be a Sylow -subgroup.  Note that and both have elements, where is the largest power of that divides the order of . Recall . As is the largest power of that divides the order of , we see that must be at least . Thus .  First, note that . Note that is the largest subgroup of such that is normal in , making the only Sylow -subgroup of . Let . Notice that , but as we have . As is a Sylow -subgroup that is contained in , we see that , placing . Thus .   "
},
{
  "id": "problem-88",
  "level": "2",
  "url": "sec-sylowthm.html#problem-88",
  "type": "Problem",
  "number": "5.17",
  "title": "",
  "body": " Let be a group of order (a) Prove that has a unique -Sylow subgroup (b) Prove that the -Sylow subgroup is contained in the center of .   Let be a group of order   By Sylow’s Theorem we know and is congruent to . The only possibility for such is , meaning that has exactly Sylow -subgroup.  By the First Isomorphism Theorem we know that . However, , which has order . As this is a homomorphism, we see the order of must divide both and , two numbers that are relatively prime. Thus , meaning that conjugation is equivalent to the identity map, or that for all . Thus .   "
},
{
  "id": "problem-89",
  "level": "2",
  "url": "sec-sylowthm.html#problem-89",
  "type": "Problem",
  "number": "5.18",
  "title": "",
  "body": " Let be a group of order . Prove that has a normal subgroup of order and that the center of contains a subgroup of order    Let be a group of order . By Sylow’s Theorem we know the and , and so , making , the unique Sylow -subgroup of , normal in . Things are looking good thus far. We also know the following: - and , so as well. Yeehaw.  Let denote the unique Sylow -subgroup, and let act on by conjugation. Thus . The First Isomorphism Theorem tells us that , where is the kernel of . However, , meaning that the order of must divide both and , which cannot happen. Thus must be trivial, meaning that for every and , making a subgroup of of order .   "
},
{
  "id": "sec-simple-groups",
  "level": "1",
  "url": "sec-simple-groups.html",
  "type": "Section",
  "number": "5.3",
  "title": "Simple Groups",
  "body": " Simple Groups    A group is called simple if it has only two normal subgroups: itself and the trivial subgroup.     Let us prove that no group or order is simple. Let be any group of order . We will prove that must have either a normal subgroup of order or a normal subgroups of oder .  Sylow theory gives that is either or and is either or . If either of these numbers is , we have a unique subgroup of order or of order , and such a subgroup must be normal. Suppose these numbers are and , respectively. We deduce a contradition by counting elements .  In detail, say are the Sylow -subgroups. By Lagrange for all . Thus the set  has elements, one of which is and the other of which must have order . That is, there are elements of order in . But now consider the three Sylow -subgroups . Each has order and for all . It follows that for all , and thus , a contradiction.    In the previous example, it would not be so easy to count elements of order and . We do know that every element in has order , or (any only one has order ), but the size of this set is harder to calculate. For notice that might have order . The most one can say for sure is that has at least elements.    No group of order is simple.     Let G be a simple group of order 60. Determine the number of elements of G of order 5.  Show that there is no simple group of order 30.   Let be a simple group of order By Sylow’s Theorem we know that and that . Thus the options for are and . Since is simple we see that . As each Sylow -subgroup of has unique elements of order and the identity we see that the number of elements or order in is .  Suppose by way of contradiction that is a simple group of order . Similarly to above, , yielding elements of order . Now, and , so , yielding far too many elements to fit in .   Suppose is a simple group of order (Yes, there is such a group.) (a) How many elements of order does have? (b) Show that has at least elements of order   By Sylow's Theorem, and divides . Thus the only options are and . However, as is simple there cannot be only one Sylow -Subgroup, as it would be normal. Thus there are , each having unique elements and the identity. Thus there are elements of order .  By Sylow's Theorem, and divides . As is simple there cannot be one, so there must be at least , each with non-identity elements. Thus there must be at least elements of order .   Let be a group of order and let denote the set of Sylow -subgroups of . (a) Suppose for any either or Prove that is not simple. (b) Suppose there exists such that . Prove that is not simple. (Hint: Consider the normalizer of .)  Let be a group of order and let denote the set of Sylow -subgroups of . ###### Part (a) Suppose by way of contradiction that is simple. By Sylow’s Theorem we know the following: - and is congruent to . As is simple there must be ten of the fuckers. - and is congruent to . As is simple there must be six of them. Since each Sylow -subgroup will have non-identity elements and they are all distinct that accounts for elements of order . However, there are also elements or order to account for, which is a problem. Thus cannot be simple.  Suppose now that there exists such that . . Given this intersection, we know that . Additionally, note that as is a subgroup of both and with index 3 in both, the smallest prime dividing the order or both, that is normal in both.  We now consider the normalizer of , which we denote for simplicity. As is a subgroup of its order must divide by Lagrange’s Theorem. However, , and so must have at least elements, leaving the options of and . If then , making normal in , a problem.  If then , the smallest prime dividing . Thus is still normal, which is still a problem. Thus cannot be simple.   Let be a group of order .  Show that there are at most two options for , the number of Sylow -subgroups of and list them.  Prove that is not simple.   Let be a group of order .  By Sylow's Theorem we know that and . The possible options are thus and .  Suppose by way of contradiction that is simple. Thus , so . Let act on the by conjugation, yielding the homomorphism granted via the permutation representation. By (2) in Sylow’s Theorem we see that is not trivial. As we see that , meaning that the is non-trivial, yielding a non-trivial normal subgroup of , a contradiction.   Let be a finite group of order with prime numbers. Show that is not a simple group.  Let be a finite group of order with prime numbers, and suppose by way of contradiction that is simple. By Sylow’s Theorem we have the following: - and , and thus . - and , and thus . From this information we see that there are elements of order and elements of order , for a lovely total of elements, which is too many.   Let be a group and let be the number of Sylow -subgroups of , where is a prime dividing the order of . (a) Prove that if is simple then (b) Deduce that there is no simple group of order .  Let be a group, a prime dividing the order of , and the number of Sylow -subgroups of .  Let act on by conjugation, inducing the homomorphism via the permutation representation. Notice that the order of is conspicuously . The kernel of this map is a normal subgroup of . Note that since is simple the only normal subgroups of are the trivial subgroup and itself. However, the kernel cannot be all of as this would make trivial, which cannot be the case given that our action is transitive by Part (2) of Sylow’s Theorem. Thus , making injective. Thus . As the image is a subgroup of , the result follows from Lagrange’s Theorem.  Let be a group of order . Suppose by way of contradiction that is simple. . Thus the number of Sylow- subgroups is congruent to and divides , the options of which are 1 and 16 (See: Sylow’s Theorem). As does not divide this contradicts part (a). Thus there are no simple groups of order .   Prove that any group of order has a normal subgroup of order or .  Let be a group of order . By Sylow’s Theorem we have and , and thus . If then the unique Sylow -subgroup is normal, giving us a normal subgroup of order .  Suppose then that , let be one of the subgroups of order , and let act on the cosets of by left multiplication, inducing the homomorphism . This is because there are elements in , and thus there are left cosets by Lagrange’s Theorem.  As , we see that cannot be injective and thus is a non-trivial normal subgroup of .  Recall that the action of on its cosets by left multiplication is always a transitive action, meaning there is exactly one orbit, for some , which must then have all elements of in it. By Orbit-Stabilizer, , and thus . So there are elements in that fix for any .  Let and . Notice that . As , We know that yields the identity permutation, and thus that .  Thus , which has order 9   Prove that no group of order 150 is simple.  Let be a group of order and suppose by way of contradiction that is simple. Notice that . By Sylow’s Theorem, we know and divides , the only options are thus and . Since is simple, there must be exactly , where . Let act on by conjugation. Thus is a group homomorphism. Note that , and that the order of does not divide . By Part (2) of Sylow’s Theorem this action is transitive, meaning that the kernel of cannot be trivial. Thus is a nontrivial normal subgroup of , a contradiction. Thus no group of order is simple.   Let G be a group of order . Prove that is not simple.  By Sylow’s Theorem we know that and . Thus our options are and . Suppose that .  Let act on by conjugation, yielding the homomorphism via the permutation representation. This map is non-trivial from part (2) of Sylow’s Theorem, but does not divide , and thus cannot be injective. Then the kernel of this homomorphism is non-trivial, normal subgroup of . Thus is not simple.   Prove that no group of order with is simple.  Let be a group of order with , and suppose by way of contradiction that is simple. By Sylow’s Theorem we know the following: - and , and - and , so our options are and . Suppose its . Let act on by conjugation, yielding the permutation representation homomorphism . The kernel of this homomorphism cannot be trivial as the conjugation action on Sylow subgroups is transitive by Part (2) of Sylow’s Theorem. Notice does not divide the order of , so our kernel cannot be all of , making a nontrivial normal subgroup of .  If , then must divide , meaning that . However, by the cyclic subgroup generated by an element of order has index in , making it normal.  Thus cannot be simple.   Prove that no group of order with is simple.  Let be a group of order with and suppose by way of contradiction that is simple.  By Sylow’s Theorem we know the following: - and , and - and , so our options are .  Let act on by conjugation, yielding the permutation representation homomorphism . The kernel of this homomorphism cannot be trivial as the conjugation action on Sylow subgroups is transitive by Part (2) of Sylow’s Theorem. Notice that if is or then does not divide the order of , so our kernel cannot be all of , making a nontrivial normal subgroup of .  If , then must divide , meaning that . However, by the cyclic subgroup generated by an element of order has index in , making it normal.  Thus cannot be simple.    "
},
{
  "id": "def-simple-group",
  "level": "2",
  "url": "sec-simple-groups.html#def-simple-group",
  "type": "Definition",
  "number": "5.19",
  "title": "",
  "body": "  A group is called simple if it has only two normal subgroups: itself and the trivial subgroup.   "
},
{
  "id": "problem-90",
  "level": "2",
  "url": "sec-simple-groups.html#problem-90",
  "type": "Problem",
  "number": "5.20",
  "title": "",
  "body": " Let us prove that no group or order is simple. Let be any group of order . We will prove that must have either a normal subgroup of order or a normal subgroups of oder .  Sylow theory gives that is either or and is either or . If either of these numbers is , we have a unique subgroup of order or of order , and such a subgroup must be normal. Suppose these numbers are and , respectively. We deduce a contradition by counting elements .  In detail, say are the Sylow -subgroups. By Lagrange for all . Thus the set  has elements, one of which is and the other of which must have order . That is, there are elements of order in . But now consider the three Sylow -subgroups . Each has order and for all . It follows that for all , and thus , a contradiction.  "
},
{
  "id": "remark-13",
  "level": "2",
  "url": "sec-simple-groups.html#remark-13",
  "type": "Remark",
  "number": "5.21",
  "title": "",
  "body": " In the previous example, it would not be so easy to count elements of order and . We do know that every element in has order , or (any only one has order ), but the size of this set is harder to calculate. For notice that might have order . The most one can say for sure is that has at least elements.  "
},
{
  "id": "problem-91",
  "level": "2",
  "url": "sec-simple-groups.html#problem-91",
  "type": "Problem",
  "number": "5.22",
  "title": "",
  "body": " No group of order is simple.  "
},
{
  "id": "exercise-3",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-3",
  "type": "Exercise",
  "number": "5.3.1",
  "title": "",
  "body": " Let G be a simple group of order 60. Determine the number of elements of G of order 5.  Show that there is no simple group of order 30.   Let be a simple group of order By Sylow’s Theorem we know that and that . Thus the options for are and . Since is simple we see that . As each Sylow -subgroup of has unique elements of order and the identity we see that the number of elements or order in is .  Suppose by way of contradiction that is a simple group of order . Similarly to above, , yielding elements of order . Now, and , so , yielding far too many elements to fit in .  "
},
{
  "id": "exercise-4",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-4",
  "type": "Exercise",
  "number": "5.3.2",
  "title": "",
  "body": "Suppose is a simple group of order (Yes, there is such a group.) (a) How many elements of order does have? (b) Show that has at least elements of order   By Sylow's Theorem, and divides . Thus the only options are and . However, as is simple there cannot be only one Sylow -Subgroup, as it would be normal. Thus there are , each having unique elements and the identity. Thus there are elements of order .  By Sylow's Theorem, and divides . As is simple there cannot be one, so there must be at least , each with non-identity elements. Thus there must be at least elements of order .  "
},
{
  "id": "exercise-5",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-5",
  "type": "Exercise",
  "number": "5.3.3",
  "title": "",
  "body": "Let be a group of order and let denote the set of Sylow -subgroups of . (a) Suppose for any either or Prove that is not simple. (b) Suppose there exists such that . Prove that is not simple. (Hint: Consider the normalizer of .)  Let be a group of order and let denote the set of Sylow -subgroups of . ###### Part (a) Suppose by way of contradiction that is simple. By Sylow’s Theorem we know the following: - and is congruent to . As is simple there must be ten of the fuckers. - and is congruent to . As is simple there must be six of them. Since each Sylow -subgroup will have non-identity elements and they are all distinct that accounts for elements of order . However, there are also elements or order to account for, which is a problem. Thus cannot be simple.  Suppose now that there exists such that . . Given this intersection, we know that . Additionally, note that as is a subgroup of both and with index 3 in both, the smallest prime dividing the order or both, that is normal in both.  We now consider the normalizer of , which we denote for simplicity. As is a subgroup of its order must divide by Lagrange’s Theorem. However, , and so must have at least elements, leaving the options of and . If then , making normal in , a problem.  If then , the smallest prime dividing . Thus is still normal, which is still a problem. Thus cannot be simple.  "
},
{
  "id": "exercise-6",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-6",
  "type": "Exercise",
  "number": "5.3.4",
  "title": "",
  "body": "Let be a group of order .  Show that there are at most two options for , the number of Sylow -subgroups of and list them.  Prove that is not simple.   Let be a group of order .  By Sylow's Theorem we know that and . The possible options are thus and .  Suppose by way of contradiction that is simple. Thus , so . Let act on the by conjugation, yielding the homomorphism granted via the permutation representation. By (2) in Sylow’s Theorem we see that is not trivial. As we see that , meaning that the is non-trivial, yielding a non-trivial normal subgroup of , a contradiction.  "
},
{
  "id": "exercise-7",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-7",
  "type": "Exercise",
  "number": "5.3.5",
  "title": "",
  "body": "Let be a finite group of order with prime numbers. Show that is not a simple group.  Let be a finite group of order with prime numbers, and suppose by way of contradiction that is simple. By Sylow’s Theorem we have the following: - and , and thus . - and , and thus . From this information we see that there are elements of order and elements of order , for a lovely total of elements, which is too many.  "
},
{
  "id": "exercise-8",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-8",
  "type": "Exercise",
  "number": "5.3.6",
  "title": "",
  "body": "Let be a group and let be the number of Sylow -subgroups of , where is a prime dividing the order of . (a) Prove that if is simple then (b) Deduce that there is no simple group of order .  Let be a group, a prime dividing the order of , and the number of Sylow -subgroups of .  Let act on by conjugation, inducing the homomorphism via the permutation representation. Notice that the order of is conspicuously . The kernel of this map is a normal subgroup of . Note that since is simple the only normal subgroups of are the trivial subgroup and itself. However, the kernel cannot be all of as this would make trivial, which cannot be the case given that our action is transitive by Part (2) of Sylow’s Theorem. Thus , making injective. Thus . As the image is a subgroup of , the result follows from Lagrange’s Theorem.  Let be a group of order . Suppose by way of contradiction that is simple. . Thus the number of Sylow- subgroups is congruent to and divides , the options of which are 1 and 16 (See: Sylow’s Theorem). As does not divide this contradicts part (a). Thus there are no simple groups of order .  "
},
{
  "id": "exercise-9",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-9",
  "type": "Exercise",
  "number": "5.3.7",
  "title": "",
  "body": "Prove that any group of order has a normal subgroup of order or .  Let be a group of order . By Sylow’s Theorem we have and , and thus . If then the unique Sylow -subgroup is normal, giving us a normal subgroup of order .  Suppose then that , let be one of the subgroups of order , and let act on the cosets of by left multiplication, inducing the homomorphism . This is because there are elements in , and thus there are left cosets by Lagrange’s Theorem.  As , we see that cannot be injective and thus is a non-trivial normal subgroup of .  Recall that the action of on its cosets by left multiplication is always a transitive action, meaning there is exactly one orbit, for some , which must then have all elements of in it. By Orbit-Stabilizer, , and thus . So there are elements in that fix for any .  Let and . Notice that . As , We know that yields the identity permutation, and thus that .  Thus , which has order 9  "
},
{
  "id": "exercise-10",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-10",
  "type": "Exercise",
  "number": "5.3.8",
  "title": "",
  "body": "Prove that no group of order 150 is simple.  Let be a group of order and suppose by way of contradiction that is simple. Notice that . By Sylow’s Theorem, we know and divides , the only options are thus and . Since is simple, there must be exactly , where . Let act on by conjugation. Thus is a group homomorphism. Note that , and that the order of does not divide . By Part (2) of Sylow’s Theorem this action is transitive, meaning that the kernel of cannot be trivial. Thus is a nontrivial normal subgroup of , a contradiction. Thus no group of order is simple.  "
},
{
  "id": "exercise-11",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-11",
  "type": "Exercise",
  "number": "5.3.9",
  "title": "",
  "body": "Let G be a group of order . Prove that is not simple.  By Sylow’s Theorem we know that and . Thus our options are and . Suppose that .  Let act on by conjugation, yielding the homomorphism via the permutation representation. This map is non-trivial from part (2) of Sylow’s Theorem, but does not divide , and thus cannot be injective. Then the kernel of this homomorphism is non-trivial, normal subgroup of . Thus is not simple.  "
},
{
  "id": "exercise-12",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-12",
  "type": "Exercise",
  "number": "5.3.10",
  "title": "",
  "body": "Prove that no group of order with is simple.  Let be a group of order with , and suppose by way of contradiction that is simple. By Sylow’s Theorem we know the following: - and , and - and , so our options are and . Suppose its . Let act on by conjugation, yielding the permutation representation homomorphism . The kernel of this homomorphism cannot be trivial as the conjugation action on Sylow subgroups is transitive by Part (2) of Sylow’s Theorem. Notice does not divide the order of , so our kernel cannot be all of , making a nontrivial normal subgroup of .  If , then must divide , meaning that . However, by the cyclic subgroup generated by an element of order has index in , making it normal.  Thus cannot be simple.  "
},
{
  "id": "exercise-13",
  "level": "2",
  "url": "sec-simple-groups.html#exercise-13",
  "type": "Exercise",
  "number": "5.3.11",
  "title": "",
  "body": "Prove that no group of order with is simple.  Let be a group of order with and suppose by way of contradiction that is simple.  By Sylow’s Theorem we know the following: - and , and - and , so our options are .  Let act on by conjugation, yielding the permutation representation homomorphism . The kernel of this homomorphism cannot be trivial as the conjugation action on Sylow subgroups is transitive by Part (2) of Sylow’s Theorem. Notice that if is or then does not divide the order of , so our kernel cannot be all of , making a nontrivial normal subgroup of .  If , then must divide , meaning that . However, by the cyclic subgroup generated by an element of order has index in , making it normal.  Thus cannot be simple.  "
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
  "id": "problem-92",
  "level": "2",
  "url": "sec-grp-dps.html#problem-92",
  "type": "Problem",
  "number": "6.1",
  "title": "",
  "body": " Let be a group that acts on a set , and a subgroup of such that for any there exists a unique with . (a) Prove that for every and , where (b) Prove that if then for every , is the internal direct product of and   "
},
{
  "id": "proof-48",
  "level": "2",
  "url": "sec-grp-dps.html#proof-48",
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
  "id": "exercise-14",
  "level": "2",
  "url": "sec-ftfgag.html#exercise-14",
  "type": "Exercise",
  "number": "7.1.1",
  "title": "",
  "body": "Prove that any group of order is abelian.  Let be a group of order . By Sylow's Theorem we see the following: - and , and so . - and , and so as well. - and , so actually too. Thus the unique Sylow -subgroup and Sylow -subgroup, denoted and , respectively, are normal in .  As and are normal in and intersect trivially, we see that . Let and consider . Let and notice . As and we see and , thus , making .  Let be the unique Sylow -subgroup, which has order . As and intersects with trivially, we see , a direct product of cyclic groups of relatively prime order, making abelian.  "
},
{
  "id": "exercise-15",
  "level": "2",
  "url": "sec-ftfgag.html#exercise-15",
  "type": "Exercise",
  "number": "7.1.2",
  "title": "",
  "body": "Suppose is a group of order and that contains an element of order . Prove is abelian.  By Sylow's Theorem we know the number of Sylow -subgroups of must divide and be congruent to , the only option of which is . Let denote the unique Sylow -subgroup and let be the cyclic subgroup generated by the element of order .  As is unique it is normal in , and it also means we have . Notice that as and are groups of relatively prime order we have . Thus , and so , making , a direct product of abelian groups. Thus is abelian.  "
},
{
  "id": "exercise-16",
  "level": "2",
  "url": "sec-ftfgag.html#exercise-16",
  "type": "Exercise",
  "number": "7.1.3",
  "title": "",
  "body": "Let be a group of order where and are distinct primes. (a) Prove that contains a normal Sylow subgroup. (b) Suppose and the Sylow -subgroup is cyclic and normal. Prove that is abelian.  Let be a group of order where and are distinct primes. Suppose by way of contradiction that has no normal Sylow -subgroup.  First, suppose . By Sylow’s Theorem we know the following: - and , so or , so - and , so or , so . We know there must be elements of order . Luckily, there is more than one Sylow -subgroup with elements, so there isn’t room for all of them.  Suppose then that . By Sylow’s Theorem we know the following: - and , so , so we’re definitely good there.  Suppose and the Sylow -subgroup, , is cyclic and normal. We know from Part (a) that there are either or Sylow -subgroups, but since there are already elements of order there is only room for one, , which is also cyclic, given its prime power. As and are thus normal in and only intersect trivially, we see that , meaning that . Thus is the product of two cyclic groups of relatively prime order, making cyclic as well. Cyclic groups are abelian, so we are done.  "
},
{
  "id": "exercise-17",
  "level": "2",
  "url": "sec-ftfgag.html#exercise-17",
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
  "id": "problem-93",
  "level": "2",
  "url": "sec-classifications.html#problem-93",
  "type": "Problem",
  "number": "7.1",
  "title": "",
  "body": " Determine all of the groups of order , up to isomorphism.   By Sylow's Theorem we know the following: - and , so . - and , so as well. Thus there is exactly one Sylow -subgroup, , and exactly one Sylow -subgroup, . Both are normal in . Notice that has order , a prime squared. Thus is abelian. By the FTFGAG, is either isomorphic to or . Thus or .   "
},
{
  "id": "problem-94",
  "level": "2",
  "url": "sec-classifications.html#problem-94",
  "type": "Problem",
  "number": "7.2",
  "title": "",
  "body": " Let be any positive prime integer. Prove that the number of groups of order , up to isomorphism, is exactly    Let be any positive prime integer.  First, suppose . Thus is a group of order , making it abelian. So the only groups of order are and . The same applies when , where the groups are and .  Let be a Sylow -subgroup of , and note that , the smallest prime dividing the order of , making . Let denote a Sylow -subgroup of . As and are groups of relatively prime order we have and thus , where . Notice that since , we have . Thus, by the First Isomorphism Theorem As has three elements, the kernel of must be either all of or trivial. However, the order of the image must divide , which is only possible when . Thus when this is the case there are two groups of order , otherwise the kernel is always trivial and we have as the only group.   "
},
{
  "id": "problem-95",
  "level": "2",
  "url": "sec-classifications.html#problem-95",
  "type": "Problem",
  "number": "7.3",
  "title": "",
  "body": " Let be a group of order and suppose contains an element of order . Prove that is abelian.   First, note that , not . You hate to see it. Anyway, let be an element of order and consider , a cyclic subgroup of order . The possible number of Sylow -subgroups of is exactly , making this subgroup and thus normal in . Let be a Sylow subgroup, it intersects trivially and thus , where . The order of is , which is relatively prime to , making trivial and and thus abelian.   "
},
{
  "id": "problem-96",
  "level": "2",
  "url": "sec-classifications.html#problem-96",
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
  "id": "problem-97",
  "level": "2",
  "url": "sec-quals.html#problem-97",
  "type": "Problem",
  "number": "8.1",
  "title": "Problem 1.",
  "body": " Problem 1  "
},
{
  "id": "problem-98",
  "level": "2",
  "url": "sec-quals.html#problem-98",
  "type": "Problem",
  "number": "8.2",
  "title": "Problem 2.",
  "body": " Problem 2  "
},
{
  "id": "problem-99",
  "level": "2",
  "url": "sec-quals.html#problem-99",
  "type": "Problem",
  "number": "8.3",
  "title": "Problem 3.",
  "body": " Problem 3  "
},
{
  "id": "problem-100",
  "level": "2",
  "url": "sec-quals.html#problem-100",
  "type": "Problem",
  "number": "8.4",
  "title": "Problem 4.",
  "body": " Problem 4  "
},
{
  "id": "problem-101",
  "level": "2",
  "url": "sec-quals.html#problem-101",
  "type": "Problem",
  "number": "8.5",
  "title": "Problem 5.",
  "body": " Problem 5  "
},
{
  "id": "problem-102",
  "level": "2",
  "url": "sec-quals.html#problem-102",
  "type": "Problem",
  "number": "8.6",
  "title": "Problem 6.",
  "body": " Problem 6  "
},
{
  "id": "problem-103",
  "level": "2",
  "url": "sec-quals.html#problem-103",
  "type": "Problem",
  "number": "8.7",
  "title": "Problem 7.",
  "body": " Problem 7  "
},
{
  "id": "problem-104",
  "level": "2",
  "url": "sec-quals.html#problem-104",
  "type": "Problem",
  "number": "8.8",
  "title": "Problem 8.",
  "body": " Problem 8  "
},
{
  "id": "problem-105",
  "level": "2",
  "url": "sec-quals.html#problem-105",
  "type": "Problem",
  "number": "8.9",
  "title": "Problem 9.",
  "body": " Problem 9  "
},
{
  "id": "problem-106",
  "level": "2",
  "url": "sec-quals.html#problem-106",
  "type": "Problem",
  "number": "8.10",
  "title": "Problem 1.",
  "body": " Problem 1  "
},
{
  "id": "problem-107",
  "level": "2",
  "url": "sec-quals.html#problem-107",
  "type": "Problem",
  "number": "8.11",
  "title": "Problem 2.",
  "body": " Problem 2  "
},
{
  "id": "problem-108",
  "level": "2",
  "url": "sec-quals.html#problem-108",
  "type": "Problem",
  "number": "8.12",
  "title": "Problem 3.",
  "body": " Problem 3  "
},
{
  "id": "problem-109",
  "level": "2",
  "url": "sec-quals.html#problem-109",
  "type": "Problem",
  "number": "8.13",
  "title": "Problem 4.",
  "body": " Problem 4  "
},
{
  "id": "problem-110",
  "level": "2",
  "url": "sec-quals.html#problem-110",
  "type": "Problem",
  "number": "8.14",
  "title": "Problem 5.",
  "body": " Problem 5  "
},
{
  "id": "problem-111",
  "level": "2",
  "url": "sec-quals.html#problem-111",
  "type": "Problem",
  "number": "8.15",
  "title": "Problem 6.",
  "body": " Problem 6  "
},
{
  "id": "problem-112",
  "level": "2",
  "url": "sec-quals.html#problem-112",
  "type": "Problem",
  "number": "8.16",
  "title": "Problem 7.",
  "body": " Problem 7  "
},
{
  "id": "problem-113",
  "level": "2",
  "url": "sec-quals.html#problem-113",
  "type": "Problem",
  "number": "8.17",
  "title": "Problem 8.",
  "body": " Problem 8  "
},
{
  "id": "problem-114",
  "level": "2",
  "url": "sec-quals.html#problem-114",
  "type": "Problem",
  "number": "8.18",
  "title": "Problem 9.",
  "body": " Problem 9  "
},
{
  "id": "problem-115",
  "level": "2",
  "url": "sec-quals.html#problem-115",
  "type": "Problem",
  "number": "8.19",
  "title": "Problem 1.",
  "body": " Problem 1  "
},
{
  "id": "problem-116",
  "level": "2",
  "url": "sec-quals.html#problem-116",
  "type": "Problem",
  "number": "8.20",
  "title": "Problem 2.",
  "body": " Problem 2  "
},
{
  "id": "problem-117",
  "level": "2",
  "url": "sec-quals.html#problem-117",
  "type": "Problem",
  "number": "8.21",
  "title": "Problem 3.",
  "body": " Problem 3  "
},
{
  "id": "problem-118",
  "level": "2",
  "url": "sec-quals.html#problem-118",
  "type": "Problem",
  "number": "8.22",
  "title": "Problem 4.",
  "body": " Problem 4  "
},
{
  "id": "problem-119",
  "level": "2",
  "url": "sec-quals.html#problem-119",
  "type": "Problem",
  "number": "8.23",
  "title": "Problem 5.",
  "body": " Problem 5  "
},
{
  "id": "problem-120",
  "level": "2",
  "url": "sec-quals.html#problem-120",
  "type": "Problem",
  "number": "8.24",
  "title": "Problem 6.",
  "body": " Problem 6  "
},
{
  "id": "problem-121",
  "level": "2",
  "url": "sec-quals.html#problem-121",
  "type": "Problem",
  "number": "8.25",
  "title": "Problem 7.",
  "body": " Problem 7  "
},
{
  "id": "problem-122",
  "level": "2",
  "url": "sec-quals.html#problem-122",
  "type": "Problem",
  "number": "8.26",
  "title": "Problem 8.",
  "body": " Problem 8  "
},
{
  "id": "problem-123",
  "level": "2",
  "url": "sec-quals.html#problem-123",
  "type": "Problem",
  "number": "8.27",
  "title": "Problem 9.",
  "body": " Problem 9  "
},
{
  "id": "problem-124",
  "level": "2",
  "url": "sec-quals.html#problem-124",
  "type": "Problem",
  "number": "8.28",
  "title": "Problem 1.",
  "body": " Problem 1  "
},
{
  "id": "problem-125",
  "level": "2",
  "url": "sec-quals.html#problem-125",
  "type": "Problem",
  "number": "8.29",
  "title": "Problem 2.",
  "body": " Problem 2  "
},
{
  "id": "problem-126",
  "level": "2",
  "url": "sec-quals.html#problem-126",
  "type": "Problem",
  "number": "8.30",
  "title": "Problem 3.",
  "body": " Problem 3  "
},
{
  "id": "problem-127",
  "level": "2",
  "url": "sec-quals.html#problem-127",
  "type": "Problem",
  "number": "8.31",
  "title": "Problem 4.",
  "body": " Problem 4  "
},
{
  "id": "problem-128",
  "level": "2",
  "url": "sec-quals.html#problem-128",
  "type": "Problem",
  "number": "8.32",
  "title": "Problem 5.",
  "body": " Problem 5  "
},
{
  "id": "problem-129",
  "level": "2",
  "url": "sec-quals.html#problem-129",
  "type": "Problem",
  "number": "8.33",
  "title": "Problem 6.",
  "body": " Problem 6  "
},
{
  "id": "problem-130",
  "level": "2",
  "url": "sec-quals.html#problem-130",
  "type": "Problem",
  "number": "8.34",
  "title": "Problem 7.",
  "body": " Problem 7  "
},
{
  "id": "problem-131",
  "level": "2",
  "url": "sec-quals.html#problem-131",
  "type": "Problem",
  "number": "8.35",
  "title": "Problem 8.",
  "body": " Problem 8  "
},
{
  "id": "problem-132",
  "level": "2",
  "url": "sec-quals.html#problem-132",
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
  "body": " Groups of Small Order  "
},
{
  "id": "sec-defn-ex",
  "level": "1",
  "url": "sec-defn-ex.html",
  "type": "Section",
  "number": "9.1",
  "title": "Definition and Examples",
  "body": " Definition and Examples  "
},
{
  "id": "sec-subrings",
  "level": "1",
  "url": "sec-subrings.html",
  "type": "Section",
  "number": "9.2",
  "title": "Subrings",
  "body": " Subrings  "
},
{
  "id": "sec-unitass",
  "level": "1",
  "url": "sec-unitass.html",
  "type": "Section",
  "number": "9.3",
  "title": "Units and Associates",
  "body": " Units and Associates  "
},
{
  "id": "sec-ring-hom",
  "level": "1",
  "url": "sec-ring-hom.html",
  "type": "Section",
  "number": "9.4",
  "title": "Homomorohisms",
  "body": " Homomorohisms  "
},
{
  "id": "sec-ideals",
  "level": "1",
  "url": "sec-ideals.html",
  "type": "Section",
  "number": "10.1",
  "title": "Ideals",
  "body": " Ideals  "
},
{
  "id": "sec-ring-quotients",
  "level": "1",
  "url": "sec-ring-quotients.html",
  "type": "Section",
  "number": "10.2",
  "title": "Quotient Rings",
  "body": " Quotient Rings  "
},
{
  "id": "sec-ring-iso",
  "level": "1",
  "url": "sec-ring-iso.html",
  "type": "Section",
  "number": "10.3",
  "title": "Ring Isomorphism Theorems",
  "body": " Ring Isomorphism Theorems  "
},
{
  "id": "subsec-primemax-ideals",
  "level": "1",
  "url": "subsec-primemax-ideals.html",
  "type": "Section",
  "number": "11.1",
  "title": "Prime and Maximal Ideals",
  "body": " Prime and Maximal Ideals  "
},
{
  "id": "subsec-polyrings",
  "level": "1",
  "url": "subsec-polyrings.html",
  "type": "Section",
  "number": "11.2",
  "title": "Polynomial Rings",
  "body": " Polynomial Rings  "
},
{
  "id": "sec-eds",
  "level": "1",
  "url": "sec-eds.html",
  "type": "Section",
  "number": "12.1",
  "title": "Euclidian Domains",
  "body": " Euclidian Domains  "
},
{
  "id": "sec-pids",
  "level": "1",
  "url": "sec-pids.html",
  "type": "Section",
  "number": "12.2",
  "title": "Principal Ideal Domains",
  "body": " Principal Ideal Domains  "
},
{
  "id": "subsec-ufds",
  "level": "1",
  "url": "subsec-ufds.html",
  "type": "Section",
  "number": "12.3",
  "title": "Unique Factorization Domains",
  "body": " Unique Factorization Domains  "
},
{
  "id": "subsec-noeth",
  "level": "1",
  "url": "subsec-noeth.html",
  "type": "Section",
  "number": "12.4",
  "title": "Noetherian Domains",
  "body": " Noetherian Domains  "
},
{
  "id": "sec-roots",
  "level": "1",
  "url": "sec-roots.html",
  "type": "Section",
  "number": "13.1",
  "title": "Roots of Unity",
  "body": " Roots of Unity  "
},
{
  "id": "sec-irrpoly",
  "level": "1",
  "url": "sec-irrpoly.html",
  "type": "Section",
  "number": "13.2",
  "title": "Irredicuble Polynomials",
  "body": " Irredicuble Polynomials  "
},
{
  "id": "sec-gpring",
  "level": "1",
  "url": "sec-gpring.html",
  "type": "Section",
  "number": "14.1",
  "title": "Group Rings",
  "body": " Group Rings  "
},
{
  "id": "sec-defnfield",
  "level": "1",
  "url": "sec-defnfield.html",
  "type": "Section",
  "number": "15.1",
  "title": "Definition and Examples",
  "body": " Definition and Examples  "
},
{
  "id": "sec-interactions",
  "level": "1",
  "url": "sec-interactions.html",
  "type": "Section",
  "number": "15.2",
  "title": "Interactions",
  "body": " Interactions  "
},
{
  "id": "sec-firstprops",
  "level": "1",
  "url": "sec-firstprops.html",
  "type": "Section",
  "number": "16.1",
  "title": "First Properties",
  "body": " First Properties  "
},
{
  "id": "sec-albebraic",
  "level": "1",
  "url": "sec-albebraic.html",
  "type": "Section",
  "number": "16.2",
  "title": "Algebraic Extensions",
  "body": " Algebraic Extensions  "
},
{
  "id": "sec-closure",
  "level": "1",
  "url": "sec-closure.html",
  "type": "Section",
  "number": "16.3",
  "title": "Algebraic Closures",
  "body": " Algebraic Closures  "
},
{
  "id": "sec-splitting",
  "level": "1",
  "url": "sec-splitting.html",
  "type": "Section",
  "number": "16.4",
  "title": "Splitting Fields",
  "body": " Splitting Fields  "
},
{
  "id": "sec-separable",
  "level": "1",
  "url": "sec-separable.html",
  "type": "Section",
  "number": "17.1",
  "title": "Separability",
  "body": " Separability  "
},
{
  "id": "sec-galext",
  "level": "1",
  "url": "sec-galext.html",
  "type": "Section",
  "number": "17.2",
  "title": "Galois Extensions",
  "body": " Galois Extensions  "
},
{
  "id": "sec-ftgt",
  "level": "1",
  "url": "sec-ftgt.html",
  "type": "Section",
  "number": "17.3",
  "title": "The Fundamental Theorem of Galois Theory",
  "body": " The Fundamental Theorem of Galois Theory  "
},
{
  "id": "sec-defmod",
  "level": "1",
  "url": "sec-defmod.html",
  "type": "Section",
  "number": "18.1",
  "title": "Definition and Examples",
  "body": " Definition and Examples  "
},
{
  "id": "sec-modhom",
  "level": "1",
  "url": "sec-modhom.html",
  "type": "Section",
  "number": "18.2",
  "title": "Module Homomorphisms",
  "body": " Module Homomorphisms  "
},
{
  "id": "sec-quote",
  "level": "1",
  "url": "sec-quote.html",
  "type": "Section",
  "number": "18.3",
  "title": "Quotient Modules",
  "body": " Quotient Modules  "
},
{
  "id": "sec-linear",
  "level": "1",
  "url": "sec-linear.html",
  "type": "Section",
  "number": "19.1",
  "title": "Linear Independence",
  "body": " Linear Independence  "
},
{
  "id": "sec-modgen",
  "level": "1",
  "url": "sec-modgen.html",
  "type": "Section",
  "number": "19.2",
  "title": "Generated Modules",
  "body": " Generated Modules  "
},
{
  "id": "sec-bases",
  "level": "1",
  "url": "sec-bases.html",
  "type": "Section",
  "number": "19.3",
  "title": "Bases",
  "body": " Bases  "
},
{
  "id": "sec-vecbasis",
  "level": "1",
  "url": "sec-vecbasis.html",
  "type": "Section",
  "number": "20.1",
  "title": "Existence of Bases",
  "body": " Existence of Bases  "
},
{
  "id": "sec-ranknul",
  "level": "1",
  "url": "sec-ranknul.html",
  "type": "Section",
  "number": "20.2",
  "title": "Rank-Nullity",
  "body": " Rank-Nullity  "
},
{
  "id": "sec-basics",
  "level": "1",
  "url": "sec-basics.html",
  "type": "Section",
  "number": "21.1",
  "title": "Basics",
  "body": " Basics  "
},
{
  "id": "sec-cob",
  "level": "1",
  "url": "sec-cob.html",
  "type": "Section",
  "number": "21.2",
  "title": "Change of Basis",
  "body": " Change of Basis  "
},
{
  "id": "sec-elematix",
  "level": "1",
  "url": "sec-elematix.html",
  "type": "Section",
  "number": "21.3",
  "title": "Elementary Matrices",
  "body": " Elementary Matrices  "
},
{
  "id": "sec-operator",
  "level": "1",
  "url": "sec-operator.html",
  "type": "Section",
  "number": "21.4",
  "title": "Linear Operators on Free Modules",
  "body": " Linear Operators on Free Modules  "
},
{
  "id": "sec-det",
  "level": "1",
  "url": "sec-det.html",
  "type": "Section",
  "number": "21.5",
  "title": "Determinants",
  "body": " Determinants  "
},
{
  "id": "sec-modpres",
  "level": "1",
  "url": "sec-modpres.html",
  "type": "Section",
  "number": "22.1",
  "title": "Finitely Presented Modules",
  "body": " Finitely Presented Modules  "
},
{
  "id": "sec-snf",
  "level": "1",
  "url": "sec-snf.html",
  "type": "Section",
  "number": "22.2",
  "title": "Smith Normal Form",
  "body": " Smith Normal Form  "
},
{
  "id": "sec-modclass",
  "level": "1",
  "url": "sec-modclass.html",
  "type": "Section",
  "number": "22.3",
  "title": "Classifications",
  "body": " Classifications  "
},
{
  "id": "sec-modpoly",
  "level": "1",
  "url": "sec-modpoly.html",
  "type": "Section",
  "number": "23.1",
  "title": "Modules over Polynomial Rings",
  "body": " Modules over Polynomial Rings  "
},
{
  "id": "sec-rcf",
  "level": "1",
  "url": "sec-rcf.html",
  "type": "Section",
  "number": "23.2",
  "title": "Rational Canonical Form",
  "body": " Rational Canonical Form  "
},
{
  "id": "sec-jcf",
  "level": "1",
  "url": "sec-jcf.html",
  "type": "Section",
  "number": "23.3",
  "title": "Jordan Canonical Form",
  "body": " Jordan Canonical Form  "
},
{
  "id": "sec-representations",
  "level": "1",
  "url": "sec-representations.html",
  "type": "Section",
  "number": "24.1",
  "title": "Representations",
  "body": " Representations    Let be a group. A representation of over a field is a -vector space equipped with a group homomorphism . More generally, a representation of over a ring is an -module equipped with group homomorphism . We may also say that  acts linearly on .     We can think of this data in a number of different ways.    Given a representation , the map satisfies the properties                    ,    In particular, the first two conditions say that acts on in the sense of group action on a set, and the last two say that the action of any element is by an -linear map. Conversely, any such function yields a representation .    If is free, then , where is the group of invertible matrices with entries in . By a slight abuse of notation, we will say that a group homomorphism is a representation of .        For any group , and any -module , there is the trivial representation  where for all . In this action, every element acts trivially on .    Any representation on is determined by specifying a group homomorphism .  For example, if (the multiplicative cyclic group of order ) and , there are possible such homomorphisms, determined by where .  Another important example of a rank 1 representation is the sign representation of the symmetric group , given by the group homomorphism which assigns to each permutation its sign, regarded as an element of the arbitrary ring .    The symmetric group acts on a free -module with basis by permuting coordinates: . For a concrete example, acts on , where, for example .    Let , symmetries of the equilateral polygon on vertices. Then acts linearly on by rotations and reflections. If is generated by (rotation by ) and (reflection about the -axis), then the associated group homomorphism maps     Let be a field, , and let . We see that the assignment is a representation. In particular, if , this is a representation of .       If and are -linear representations of on and respectively then a -equivariant map from to is an -module homomorphism such that for all . Equivalently the following diagram commutes:       If is a representation, a submodule is -stable if for all .     For acting by permuting a basis as above, and are stable subspaces.    For acting on as above, is a stable subspace.     Fix a group and a ring . The collection of left -linear representations of and -equivariant maps between them forms a category which we will denote .    "
},
{
  "id": "def-representation",
  "level": "2",
  "url": "sec-representations.html#def-representation",
  "type": "Definition",
  "number": "24.1",
  "title": "",
  "body": "  Let be a group. A representation of over a field is a -vector space equipped with a group homomorphism . More generally, a representation of over a ring is an -module equipped with group homomorphism . We may also say that  acts linearly on .   "
},
{
  "id": "remark-14",
  "level": "2",
  "url": "sec-representations.html#remark-14",
  "type": "Remark",
  "number": "24.2",
  "title": "",
  "body": " We can think of this data in a number of different ways.    Given a representation , the map satisfies the properties                    ,    In particular, the first two conditions say that acts on in the sense of group action on a set, and the last two say that the action of any element is by an -linear map. Conversely, any such function yields a representation .    If is free, then , where is the group of invertible matrices with entries in . By a slight abuse of notation, we will say that a group homomorphism is a representation of .    "
},
{
  "id": "example-6",
  "level": "2",
  "url": "sec-representations.html#example-6",
  "type": "Example",
  "number": "24.3",
  "title": "",
  "body": "   For any group , and any -module , there is the trivial representation  where for all . In this action, every element acts trivially on .    Any representation on is determined by specifying a group homomorphism .  For example, if (the multiplicative cyclic group of order ) and , there are possible such homomorphisms, determined by where .  Another important example of a rank 1 representation is the sign representation of the symmetric group , given by the group homomorphism which assigns to each permutation its sign, regarded as an element of the arbitrary ring .    The symmetric group acts on a free -module with basis by permuting coordinates: . For a concrete example, acts on , where, for example .    Let , symmetries of the equilateral polygon on vertices. Then acts linearly on by rotations and reflections. If is generated by (rotation by ) and (reflection about the -axis), then the associated group homomorphism maps     Let be a field, , and let . We see that the assignment is a representation. In particular, if , this is a representation of .    "
},
{
  "id": "def-equivariant-map",
  "level": "2",
  "url": "sec-representations.html#def-equivariant-map",
  "type": "Definition",
  "number": "24.4",
  "title": "",
  "body": "  If and are -linear representations of on and respectively then a -equivariant map from to is an -module homomorphism such that for all . Equivalently the following diagram commutes:    "
},
{
  "id": "def-stable-mod",
  "level": "2",
  "url": "sec-representations.html#def-stable-mod",
  "type": "Definition",
  "number": "24.5",
  "title": "",
  "body": "  If is a representation, a submodule is -stable if for all .   "
},
{
  "id": "example-7",
  "level": "2",
  "url": "sec-representations.html#example-7",
  "type": "Example",
  "number": "24.6",
  "title": "",
  "body": " For acting by permuting a basis as above, and are stable subspaces.  "
},
{
  "id": "example-8",
  "level": "2",
  "url": "sec-representations.html#example-8",
  "type": "Example",
  "number": "24.7",
  "title": "",
  "body": " For acting on as above, is a stable subspace.  "
},
{
  "id": "prop-equimaps-category",
  "level": "2",
  "url": "sec-representations.html#prop-equimaps-category",
  "type": "Proposition",
  "number": "24.8",
  "title": "",
  "body": "  Fix a group and a ring . The collection of left -linear representations of and -equivariant maps between them forms a category which we will denote .   "
},
{
  "id": "sec-group-rings-and-modules",
  "level": "1",
  "url": "sec-group-rings-and-modules.html",
  "type": "Section",
  "number": "24.2",
  "title": "Group Rings and Modules",
  "body": " Group Rings and Modules    For any ring and group , we define the group ring  as follows: As a set, is the free left -module with basis ; that is, We define addition as module addition; that is, Multiplication is the unique pairing that obeys the distributive laws and is such that is a subring, is a subgroup of , and every element of commutes with every element of . In general, we have where the inner sum is over pairs of group elements whose product is .    As a matter of notation, the element will be written as just and the element as just , so that we will regard and as subsets of . They overlap in the one element which will be written as just .  When is commutative (in particular when is a field), is an -algebra called the group -algebra of .   For any ring and , prove there is a ring isomorphism     Universal Mapping Property of Group Rings   Let be rings and a group. Given a ring homomorphism and a group homomorphism , such that for every we have that and commute in , there is a unique ring homomorphism such that and . Explicitly, is given by     Most of this follows from noticing that is a coproduct. Indeed, we can vie as an internal direct sum and hence it is the coproduct for the family where each . For each set up an -module homomorphism by mapping . Then the definition of coproduct gives a unique -module homomorphism From the way we defined the maps we can deduce that and and It remains to check that this map is in fact a ring homomorphism, i.e. it preserves multiplication. This can be done using the formula for above and the fact that and commute in .    If we assumed that is an -algebra in the proposition above, then we would not need the commutativity condition as is in the center of so it commutes with everything.    Let be a ring, a left -module, and a group. There is a bijection   Moreover, if and are representations, then is -equivariant if and only if it is -linear.    Given an -module structure on , for every , there is a map given by . We have , so is -linear. Moreover, the map that sends preserves multiplication and identity: and . Thus, we obtain an -linear representation .  Conversely, recall that a module structure on an abelian group is equivalent to a ring homomorphism to its endomorphism ring over . Given a representation by considering we get a group homomorphism to the unit subgroup of . The action of on gives a ring homomorphism . For and , we have for all . Thus, by the universal property, we get a well-defined ring homomorphism , and hence an -module structure, which is easily seen to follow the formula above.  We leave the final claim as an exercise.    We can think of these bijections as yielding mutually inverse functors and .  "
},
{
  "id": "def-groupring",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#def-groupring",
  "type": "Definition",
  "number": "24.9",
  "title": "",
  "body": "  For any ring and group , we define the group ring  as follows: As a set, is the free left -module with basis ; that is, We define addition as module addition; that is, Multiplication is the unique pairing that obeys the distributive laws and is such that is a subring, is a subgroup of , and every element of commutes with every element of . In general, we have where the inner sum is over pairs of group elements whose product is .   "
},
{
  "id": "remark-15",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#remark-15",
  "type": "Remark",
  "number": "24.10",
  "title": "",
  "body": "As a matter of notation, the element will be written as just and the element as just , so that we will regard and as subsets of . They overlap in the one element which will be written as just . "
},
{
  "id": "remark-16",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#remark-16",
  "type": "Remark",
  "number": "24.11",
  "title": "",
  "body": "When is commutative (in particular when is a field), is an -algebra called the group -algebra of . "
},
{
  "id": "problem-133",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#problem-133",
  "type": "Problem",
  "number": "24.12",
  "title": "",
  "body": " For any ring and , prove there is a ring isomorphism   "
},
{
  "id": "prop-ump-groupring",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#prop-ump-groupring",
  "type": "Proposition",
  "number": "24.13",
  "title": "Universal Mapping Property of Group Rings.",
  "body": " Universal Mapping Property of Group Rings   Let be rings and a group. Given a ring homomorphism and a group homomorphism , such that for every we have that and commute in , there is a unique ring homomorphism such that and . Explicitly, is given by     Most of this follows from noticing that is a coproduct. Indeed, we can vie as an internal direct sum and hence it is the coproduct for the family where each . For each set up an -module homomorphism by mapping . Then the definition of coproduct gives a unique -module homomorphism From the way we defined the maps we can deduce that and and It remains to check that this map is in fact a ring homomorphism, i.e. it preserves multiplication. This can be done using the formula for above and the fact that and commute in .   "
},
{
  "id": "remark-17",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#remark-17",
  "type": "Remark",
  "number": "24.14",
  "title": "",
  "body": "If we assumed that is an -algebra in the proposition above, then we would not need the commutativity condition as is in the center of so it commutes with everything. "
},
{
  "id": "lem-repsmods",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#lem-repsmods",
  "type": "Lemma",
  "number": "24.15",
  "title": "",
  "body": "  Let be a ring, a left -module, and a group. There is a bijection   Moreover, if and are representations, then is -equivariant if and only if it is -linear.    Given an -module structure on , for every , there is a map given by . We have , so is -linear. Moreover, the map that sends preserves multiplication and identity: and . Thus, we obtain an -linear representation .  Conversely, recall that a module structure on an abelian group is equivalent to a ring homomorphism to its endomorphism ring over . Given a representation by considering we get a group homomorphism to the unit subgroup of . The action of on gives a ring homomorphism . For and , we have for all . Thus, by the universal property, we get a well-defined ring homomorphism , and hence an -module structure, which is easily seen to follow the formula above.  We leave the final claim as an exercise.   "
},
{
  "id": "remark-18",
  "level": "2",
  "url": "sec-group-rings-and-modules.html#remark-18",
  "type": "Remark",
  "number": "24.16",
  "title": "",
  "body": "We can think of these bijections as yielding mutually inverse functors and . "
},
{
  "id": "sec-simple-modules",
  "level": "1",
  "url": "sec-simple-modules.html",
  "type": "Section",
  "number": "25.1",
  "title": "Simple Modules",
  "body": " Simple Modules  Now we proceed to discuss some smallness conditions on modules. The first key notion is that of a simple module. Simple modules are the atoms in module theory.    An -module is simple if there are no nonzero proper submodules of .      Let be a nonzero -module. The following are equivalent:    is simple     for all      for some maximal left ideal .       For a left ideal , the submodules of are in bijective correspondence with the left -submodules of that contain , i.e., the left ideals that contain . It is then clear that if is a maximal left ideal, then is simple, so (3) implies (1). On the other hand, if is simple then it is cyclic (since (1) implies (2)), so for some left ideal , and if for some proper left ideal , then ; thus (1) implies (3).       If is a field, a -vector space is simple if and only if it is -dimensional. Moreover, if is a -algebra, then any -module that is -dimensional as a vector space is a simple -module as well.    If is commutative, then an -module is simple if and only if is isomorphic to a field.    Let , and be the natural -dimensional representation by reflections and rotations. Then is a simple -module, since there are no -stable subspaces.    Let be a field, or more generally a division ring, and let . The module of column vectors is a simple -module Indeed, if , say ; then , and since is generated by the standard vectors , .      Schur's Lemma   Let be a ring, and be two simple -modules. Then every nonzero -module homomorphism is an isomorphism. In particular, is a division ring.    For the first assertion, let be -linear and nonzero. Then , so by simplicity, and , so .  For the second, recall that is a ring. If is nonzero, then by the first part, it is an isomorphism, so it has a two-sided inverse in .    "
},
{
  "id": "def-simple-module",
  "level": "2",
  "url": "sec-simple-modules.html#def-simple-module",
  "type": "Definition",
  "number": "25.1",
  "title": "",
  "body": "  An -module is simple if there are no nonzero proper submodules of .   "
},
{
  "id": "lem-equiv-simple-mod",
  "level": "2",
  "url": "sec-simple-modules.html#lem-equiv-simple-mod",
  "type": "Lemma",
  "number": "25.2",
  "title": "",
  "body": "  Let be a nonzero -module. The following are equivalent:    is simple     for all      for some maximal left ideal .       For a left ideal , the submodules of are in bijective correspondence with the left -submodules of that contain , i.e., the left ideals that contain . It is then clear that if is a maximal left ideal, then is simple, so (3) implies (1). On the other hand, if is simple then it is cyclic (since (1) implies (2)), so for some left ideal , and if for some proper left ideal , then ; thus (1) implies (3).   "
},
{
  "id": "example-9",
  "level": "2",
  "url": "sec-simple-modules.html#example-9",
  "type": "Example",
  "number": "25.3",
  "title": "",
  "body": "   If is a field, a -vector space is simple if and only if it is -dimensional. Moreover, if is a -algebra, then any -module that is -dimensional as a vector space is a simple -module as well.    If is commutative, then an -module is simple if and only if is isomorphic to a field.    Let , and be the natural -dimensional representation by reflections and rotations. Then is a simple -module, since there are no -stable subspaces.    Let be a field, or more generally a division ring, and let . The module of column vectors is a simple -module Indeed, if , say ; then , and since is generated by the standard vectors , .    "
},
{
  "id": "lem-schurs",
  "level": "2",
  "url": "sec-simple-modules.html#lem-schurs",
  "type": "Lemma",
  "number": "25.4",
  "title": "Schur's Lemma.",
  "body": " Schur's Lemma   Let be a ring, and be two simple -modules. Then every nonzero -module homomorphism is an isomorphism. In particular, is a division ring.    For the first assertion, let be -linear and nonzero. Then , so by simplicity, and , so .  For the second, recall that is a ring. If is nonzero, then by the first part, it is an isomorphism, so it has a two-sided inverse in .   "
},
{
  "id": "sec-fl-modules",
  "level": "1",
  "url": "sec-fl-modules.html",
  "type": "Section",
  "number": "25.2",
  "title": "Finite Length Modules",
  "body": " Finite Length Modules    Given a short exact sequence we may think of the middle module as built out of and ; we call an extension of and . Suppose that a module has a finite sequence of submodules we call such a sequence a filtration . Then is an extension of and , is an extension of and , and so on. We might think of as built from like so.      A module has finite length if it has a filtration of the form with simple for each ; such a filtration is called a composition series of length  . We say a composition series is strict if for all . Two composition series are equivalent if the collections of composition factors are the same up to reordering. The length of a finite length module , denoted , is the minimum of the lengths of a composition series of . If has does not have finite length, we say that has infinite length, or .    Let be a field and . Then any filtration of the form where is a line through the origin is a strict composition series.   Let be a short exact sequence. Given filtrations \/ composition series \/ strict composition series and we can make a filtration \/ composition series \/ strict composition series of by   Conversely, given a filtration \/ composition series \/ strict composition series of that contains as a term, we can obtain filtrations \/ composition series \/ strict composition series of and by applying to the terms up through and applying to the terms from on. However, not every filtration \/ composition series of a module will contain a fixed submodule as a term.    JOrdan-Holder Theorem   Let be a module of finite length.     If is a proper submodule, then .    If is a nonzero submodule and , then .    Any filtration of can be refined to a composition series.    All strict composition series for are equivalent, and hence have the same length.       If , consider a strict composition series of of length , say      Consider the filtration By the Second Isomorphism Theorem, its composition factors satisfy The right hand side is a submodule of , which by assumption is simple, so our filtration is in fact a composition series of length . Then for any either We claim that the latter case does not hold for all : if it did, we would have , and inductively for all and in particular for , we have , contradicting that is proper. Thus, for some , the first case holds. We can then skip that and obtain a composition series of length less than , so .    Consider the filtration The factors satisfy and since , these are quotient modules of the simple module , so this is a composition series. Then for any either   We claim that the latter case does not hold for all : if it did, we would have then for all , so for all , and hence , contradicting that . Thus, for some , the first case holds, and we can skip that to obtain a composition series of length less than , so .    We proceed by induction on length again. Given a filtration of , we can suppose that there is some nonzero proper submodule in the filtration, since otherwise we could just take any composition series. Then and has length less than . The filtration up to can be refined to a strict composition series by the induction hypothesis, and the filtration from to taken mod can be refined to a strict composition series for ; pulling back as in the remark above, we get the strict composition series we want.    We show by induction on that for any module of length , all of its strict composition series are equivalent. Assume that . If , the claim is clear since we are dealing with a simple module. Suppose that is another strict composition series for , so . If , then since the two composition series we have for are equivalent by induction, so the two given series are equivalent.  If , since is simple, is not properly contained in , so the image of in is nonzero, so equals all of , which means that . Set . By the second isomorphism theorem, we then have and similarly , and both of these modules are simple.  Fix a strict composition series for : and extend to a strict composition series for : Since we also have the strict composition series of length , we must have that and is equivalent to . Thus, the composition factors of are those of plus one copy of .  Now, is a strict composition series for , so . Then, is equivalent to the strict composition series Thus, the composition factors of are those of plus one copy of .  It follows that the composition series and are equivalent.           If is a field, then a -vector space of dimension is a -module of length .    If is a -algebra, and is an -module that as a -vector space has dimension , then , since the vector space dimension of a proper submodule is strictly smaller.    The ring does not have finite length as a module over itself.     has length as a -module, with strict composition series       "
},
{
  "id": "def-finite-length",
  "level": "2",
  "url": "sec-fl-modules.html#def-finite-length",
  "type": "Definition",
  "number": "25.5",
  "title": "",
  "body": "  Given a short exact sequence we may think of the middle module as built out of and ; we call an extension of and . Suppose that a module has a finite sequence of submodules we call such a sequence a filtration . Then is an extension of and , is an extension of and , and so on. We might think of as built from like so.   "
},
{
  "id": "def-",
  "level": "2",
  "url": "sec-fl-modules.html#def-",
  "type": "Definition",
  "number": "25.6",
  "title": "",
  "body": "  A module has finite length if it has a filtration of the form with simple for each ; such a filtration is called a composition series of length  . We say a composition series is strict if for all . Two composition series are equivalent if the collections of composition factors are the same up to reordering. The length of a finite length module , denoted , is the minimum of the lengths of a composition series of . If has does not have finite length, we say that has infinite length, or .   "
},
{
  "id": "example-10",
  "level": "2",
  "url": "sec-fl-modules.html#example-10",
  "type": "Example",
  "number": "25.7",
  "title": "",
  "body": "Let be a field and . Then any filtration of the form where is a line through the origin is a strict composition series. "
},
{
  "id": "remark-19",
  "level": "2",
  "url": "sec-fl-modules.html#remark-19",
  "type": "Remark",
  "number": "25.8",
  "title": "",
  "body": " Let be a short exact sequence. Given filtrations \/ composition series \/ strict composition series and we can make a filtration \/ composition series \/ strict composition series of by   Conversely, given a filtration \/ composition series \/ strict composition series of that contains as a term, we can obtain filtrations \/ composition series \/ strict composition series of and by applying to the terms up through and applying to the terms from on. However, not every filtration \/ composition series of a module will contain a fixed submodule as a term.  "
},
{
  "id": "thm-jordan-holder",
  "level": "2",
  "url": "sec-fl-modules.html#thm-jordan-holder",
  "type": "Theorem",
  "number": "25.9",
  "title": "JOrdan-Holder Theorem.",
  "body": " JOrdan-Holder Theorem   Let be a module of finite length.     If is a proper submodule, then .    If is a nonzero submodule and , then .    Any filtration of can be refined to a composition series.    All strict composition series for are equivalent, and hence have the same length.       If , consider a strict composition series of of length , say      Consider the filtration By the Second Isomorphism Theorem, its composition factors satisfy The right hand side is a submodule of , which by assumption is simple, so our filtration is in fact a composition series of length . Then for any either We claim that the latter case does not hold for all : if it did, we would have , and inductively for all and in particular for , we have , contradicting that is proper. Thus, for some , the first case holds. We can then skip that and obtain a composition series of length less than , so .    Consider the filtration The factors satisfy and since , these are quotient modules of the simple module , so this is a composition series. Then for any either   We claim that the latter case does not hold for all : if it did, we would have then for all , so for all , and hence , contradicting that . Thus, for some , the first case holds, and we can skip that to obtain a composition series of length less than , so .    We proceed by induction on length again. Given a filtration of , we can suppose that there is some nonzero proper submodule in the filtration, since otherwise we could just take any composition series. Then and has length less than . The filtration up to can be refined to a strict composition series by the induction hypothesis, and the filtration from to taken mod can be refined to a strict composition series for ; pulling back as in the remark above, we get the strict composition series we want.    We show by induction on that for any module of length , all of its strict composition series are equivalent. Assume that . If , the claim is clear since we are dealing with a simple module. Suppose that is another strict composition series for , so . If , then since the two composition series we have for are equivalent by induction, so the two given series are equivalent.  If , since is simple, is not properly contained in , so the image of in is nonzero, so equals all of , which means that . Set . By the second isomorphism theorem, we then have and similarly , and both of these modules are simple.  Fix a strict composition series for : and extend to a strict composition series for : Since we also have the strict composition series of length , we must have that and is equivalent to . Thus, the composition factors of are those of plus one copy of .  Now, is a strict composition series for , so . Then, is equivalent to the strict composition series Thus, the composition factors of are those of plus one copy of .  It follows that the composition series and are equivalent.      "
},
{
  "id": "example-11",
  "level": "2",
  "url": "sec-fl-modules.html#example-11",
  "type": "Example",
  "number": "25.10",
  "title": "",
  "body": "    If is a field, then a -vector space of dimension is a -module of length .    If is a -algebra, and is an -module that as a -vector space has dimension , then , since the vector space dimension of a proper submodule is strictly smaller.    The ring does not have finite length as a module over itself.     has length as a -module, with strict composition series      "
},
{
  "id": "sec-chain-conditions",
  "level": "1",
  "url": "sec-chain-conditions.html",
  "type": "Chapter",
  "number": "26",
  "title": "Chain Conditions",
  "body": " Chain Conditions    We say a poset satisfies the ascending chain condition or ACC if every totally ordered nonempty subset of has a maximum element.      We say a poset satisfies the descending chain condition or DCC if every totally ordered nonempty subset of has a minimum element.     For a poset , the following are equivalent:     Every totally ordered nonempty subset has a maximum element (i.e., has ACC)    Every totally ordered subset indexed by , has a maximum element (i.e., )    Every nonempty subset of has a maximum element.     Indeed, (3) (1) (2) is clear. Given a totally ordered nonempty subset with no maximum, one can inductively keep choosing larger elements and obtain a countable such subset, so (2) (1). If any totally ordered nonempty subset of has a maximum element, then the same property holds for any nonempty subset of , so by Zorn’s Lemma, such a has a maximum element. The analogous equivalences hold with DCC.   Note that the condition (3) asserts that any nonempty subset of has an element that is maximal within the subset , not maximal within .    Let be a ring and be an -module.   We say that is Noetherian if the poset of submodules of partially ordered by containment has ACC.    We say that is Artinian if the poset of submodules of partially ordered by containment has DCC.    We say that is left Noetherian if is Noetherian as a left -module; i.e., the poset of left ideals of under containment has ACC.    We say that is left Artinian if is Artinian as a left -module; i.e., the poset of left ideals of under containment has DCC.     If is commutative, left ideals and right ideals are the same, so we will just say is Noetherian or Artinian.        A division ring is both left Noetherian and left Artinian.    If is a PID but not a field (e.g., or ), then is Noetherian but not Artinian. To see is Noetherian, note that any ideal is of the form for some irreducible elements and positive integers . An ideal contains if it corresponds to a product of the same irreducibles with smaller or equal multiplicities; there are only finitely many of these so an ascending chain must stablilize. To see is not Artinian, take some irreducible and take the chain     A polynomial ring in infinitely many variables is neither Noetherian nor Artinian: there is an ascending chain and take a descending chain as in the last example.    The -module , where is the subring of generated by and , is Artinian but not Noetherian. Suppose that is generated by , where each is odd (we can write any element in like so). Observe that for each , there are integers such that , so . Thus, is generated by . Thus, the submodules of are itself, , and for . We have so is not Noetherian. However, any descending chain is either always equal to , or else has some as a term, and there are finitely many submodules of such an , so must stabilize.    The subring of given as is left Noetherian but not right Noetherian.       Let be a short exact sequence. Then has ACC (resp DCC) if and only if and have ACC (resp. DCC).   The Noetherian condition is intimately tied to finite generation.    Let be an -module. Then has ACC if and only if every submodule of is finitely generated.    Suppose that is not finitely generated. Then we can construct an ascending chain of submodules of given by setting , and for some ; we can do this since each is a finitely generated submodule of , so is not equal to .  Now suppose that every submodule of is finitely generated. Given a countable ascending chain of submodules let ; this is a submodule of . Take a finite generating set for . For each , we have for some . Since there are finitely many 's there is some that contains them all. But then , so the chain stabilizes (i.e., achieves a maximum element).      Let be left Noetherian. Then a module is finitely generated if and only if it is left Noetherian. In particular, in a left Noetherian ring, every submodule of a finitely generated module is finitely generated.    For the first statement, the if implication holds in general without the hypothesis on . For the other implication, observe that there are short exact sequences for all . So, by the exercise above and induction on , every finitely generated free module is Noetherian. Now, if is finitely generated, there is a short exact sequence of the form so by the exercise above again, is Noetherian.  The second statement follows from the first as a submodule of a Noetherian module is Noetherian, again by the exercise    Now we tie these chain conditions to length.    A module has finite length if and only if it is both Noetherian and Artinian.    Assume that has finite length. Suppose that is not Noetherian. Then there is a chain Since each is a submodule of , its length is finite, and is a nonnegative integer. Then , which yields a contradiction. The argument that is Artinian is similar.  Now assume that is both Noetherian and Artinian. We will construct a composition series for . We can assume that . Consider the collection of proper submodules of . This is nonempty, so has a maximal element by the Noetherian hypothesis. We must have is simple, or else there is a module in between and . Using Noetherianity again, if (we’re done otherwise), there is a maximal proper submodule of ; call it . This process yields a descending chain with simple quotients, and this must stop (i.e., yield for some ) by the Artinian hypothesis. Thus, there is a composition series for .    "
},
{
  "id": "def-acc",
  "level": "2",
  "url": "sec-chain-conditions.html#def-acc",
  "type": "Definition",
  "number": "26.1",
  "title": "",
  "body": "  We say a poset satisfies the ascending chain condition or ACC if every totally ordered nonempty subset of has a maximum element.   "
},
{
  "id": "def-dcc",
  "level": "2",
  "url": "sec-chain-conditions.html#def-dcc",
  "type": "Definition",
  "number": "26.2",
  "title": "",
  "body": "  We say a poset satisfies the descending chain condition or DCC if every totally ordered nonempty subset of has a minimum element.   "
},
{
  "id": "remark-20",
  "level": "2",
  "url": "sec-chain-conditions.html#remark-20",
  "type": "Remark",
  "number": "26.3",
  "title": "",
  "body": " For a poset , the following are equivalent:     Every totally ordered nonempty subset has a maximum element (i.e., has ACC)    Every totally ordered subset indexed by , has a maximum element (i.e., )    Every nonempty subset of has a maximum element.     Indeed, (3) (1) (2) is clear. Given a totally ordered nonempty subset with no maximum, one can inductively keep choosing larger elements and obtain a countable such subset, so (2) (1). If any totally ordered nonempty subset of has a maximum element, then the same property holds for any nonempty subset of , so by Zorn’s Lemma, such a has a maximum element. The analogous equivalences hold with DCC.  "
},
{
  "id": "def-noeth-art-mod",
  "level": "2",
  "url": "sec-chain-conditions.html#def-noeth-art-mod",
  "type": "Definition",
  "number": "26.4",
  "title": "",
  "body": "  Let be a ring and be an -module.   We say that is Noetherian if the poset of submodules of partially ordered by containment has ACC.    We say that is Artinian if the poset of submodules of partially ordered by containment has DCC.    We say that is left Noetherian if is Noetherian as a left -module; i.e., the poset of left ideals of under containment has ACC.    We say that is left Artinian if is Artinian as a left -module; i.e., the poset of left ideals of under containment has DCC.     If is commutative, left ideals and right ideals are the same, so we will just say is Noetherian or Artinian.   "
},
{
  "id": "example-12",
  "level": "2",
  "url": "sec-chain-conditions.html#example-12",
  "type": "Example",
  "number": "26.5",
  "title": "",
  "body": "    A division ring is both left Noetherian and left Artinian.    If is a PID but not a field (e.g., or ), then is Noetherian but not Artinian. To see is Noetherian, note that any ideal is of the form for some irreducible elements and positive integers . An ideal contains if it corresponds to a product of the same irreducibles with smaller or equal multiplicities; there are only finitely many of these so an ascending chain must stablilize. To see is not Artinian, take some irreducible and take the chain     A polynomial ring in infinitely many variables is neither Noetherian nor Artinian: there is an ascending chain and take a descending chain as in the last example.    The -module , where is the subring of generated by and , is Artinian but not Noetherian. Suppose that is generated by , where each is odd (we can write any element in like so). Observe that for each , there are integers such that , so . Thus, is generated by . Thus, the submodules of are itself, , and for . We have so is not Noetherian. However, any descending chain is either always equal to , or else has some as a term, and there are finitely many submodules of such an , so must stabilize.    The subring of given as is left Noetherian but not right Noetherian.     "
},
{
  "id": "problem-134",
  "level": "2",
  "url": "sec-chain-conditions.html#problem-134",
  "type": "Problem",
  "number": "26.6",
  "title": "",
  "body": " Let be a short exact sequence. Then has ACC (resp DCC) if and only if and have ACC (resp. DCC).  "
},
{
  "id": "prop-noeth-fg-mod",
  "level": "2",
  "url": "sec-chain-conditions.html#prop-noeth-fg-mod",
  "type": "Proposition",
  "number": "26.7",
  "title": "",
  "body": "  Let be an -module. Then has ACC if and only if every submodule of is finitely generated.    Suppose that is not finitely generated. Then we can construct an ascending chain of submodules of given by setting , and for some ; we can do this since each is a finitely generated submodule of , so is not equal to .  Now suppose that every submodule of is finitely generated. Given a countable ascending chain of submodules let ; this is a submodule of . Take a finite generating set for . For each , we have for some . Since there are finitely many 's there is some that contains them all. But then , so the chain stabilizes (i.e., achieves a maximum element).   "
},
{
  "id": "prop-lnoeth-fg-mod",
  "level": "2",
  "url": "sec-chain-conditions.html#prop-lnoeth-fg-mod",
  "type": "Proposition",
  "number": "26.8",
  "title": "",
  "body": "  Let be left Noetherian. Then a module is finitely generated if and only if it is left Noetherian. In particular, in a left Noetherian ring, every submodule of a finitely generated module is finitely generated.    For the first statement, the if implication holds in general without the hypothesis on . For the other implication, observe that there are short exact sequences for all . So, by the exercise above and induction on , every finitely generated free module is Noetherian. Now, if is finitely generated, there is a short exact sequence of the form so by the exercise above again, is Noetherian.  The second statement follows from the first as a submodule of a Noetherian module is Noetherian, again by the exercise   "
},
{
  "id": "prop-fl-mod-iff",
  "level": "2",
  "url": "sec-chain-conditions.html#prop-fl-mod-iff",
  "type": "Proposition",
  "number": "26.9",
  "title": "",
  "body": "  A module has finite length if and only if it is both Noetherian and Artinian.    Assume that has finite length. Suppose that is not Noetherian. Then there is a chain Since each is a submodule of , its length is finite, and is a nonnegative integer. Then , which yields a contradiction. The argument that is Artinian is similar.  Now assume that is both Noetherian and Artinian. We will construct a composition series for . We can assume that . Consider the collection of proper submodules of . This is nonempty, so has a maximal element by the Noetherian hypothesis. We must have is simple, or else there is a module in between and . Using Noetherianity again, if (we’re done otherwise), there is a maximal proper submodule of ; call it . This process yields a descending chain with simple quotients, and this must stop (i.e., yield for some ) by the Artinian hypothesis. Thus, there is a composition series for .   "
},
{
  "id": "ch-semisimple-mod",
  "level": "1",
  "url": "ch-semisimple-mod.html",
  "type": "Chapter",
  "number": "27",
  "title": "Semisimple Modules",
  "body": " Semisimple Modules  We now study an important condition that is somewhat orthogonal (yet somewhat related) to our chain conditions. The condition of finite length, and to some extent the Noetherian and Artinian conditions, were related to how a module is made out of building blocks, or how big it is in terms of its pieces. The condition of semisimplicity says that a module is composed of basic building blocks in the simplest possible way.    For any ring , a left -module is called semisimple if it is a (possibly infinite) direct sum of simple modules. The empty direct sum is allowed, so that the module is considered to be semisimple.     Let be a finitely generated -module. Then by the FTFGAG, is isomorphic to for some , , primes and positive integers . Such a module is semisimple if and only if and for all .    Every module over a division ring is semisimple because any such module has a basis, hence it is a free module.     Let be a division ring and set for some . I claim is semisimple as a left module over itself.    For each , let denote the subset of consisting of matrices whose only nonzero entires belong to the -th column. The rules for matrix addition and multiplication show that is a left ideal (i.e., a left submodule) of . Moreover, there is evident bijection between and (column vectors) and this bijection is an isomorphism of left -modules. We proved is simple as an -module and hence so is . Finally, is the internal direct sum of : because each matrix is uniquely a sum of the form with .     Let be an infinite collection of nonzero modules. Then is not finitely generated.    As a consequence of the above exercise, a module is a finitely generated semisimple module if and only if it is a finite direct sum of simple modules. In this case if we write as a sum of simple modules, there is a strict composition series so has finite length, namely length , and the composition factors are the modules .    Krull-Schmidt for Semisimple Modules   Let be a finitely generated semisimple module. Given two direct sum decompositions as simple modules then , and there is a permutation such that for all     Follows from the previous remark and the Jordan-Holder theorem.     Equivalent Conditions for Semisimple Modules   For any ring and left -module , the following are equivalent:      is semisimple,    very submodule of is a summand; i.e., for every submodule of there is a submodule such that is the internal direct sum of and ,    every injective -map is split has a left inverse,    every SES of the form is split exact,    every surjective -map has a right inverse.       The equivalence of (3), (4), and (5) is given by the Splitting Theorem.   holds since given an injective map as in (3), we have by (2) that is a summand of , hence there is a projection homomorphism that splits the inclusion of the summand into , that is . Now is an isomorphism so we may consider the -module homomorphism and set to be . Then    holds since we can split the inclusion and thus also the SES Therefore the Splitting Theorem yields where denotes the splitting of the quotient map .  The hard part is proving . Assume (1), so that for some collection of simple submodules , and let be any submodule. (It is important to note that it does not necessarily follow that is a sum of some subcollection of the ) . Consider the collection of subsets of such that where we define . View as a poset by inclusion. It is nonempty since belongs to . If is a totally ordered subcollection of , let . I claim . If not, there is a nonzero element . But since for all but a finite number of ’s and since the collection of ’s was totally ordered, there is some such that , a contradiction. We may thus apply Zorn’s Lemma to get a maximal .  I claim is the internal direct sum of and . We have since and so it suffices to prove . Since , the latter is equivalent to proving that for all . If this fails for some , then since is a proper submodule of , which is simple, and hence . But then (if and , with and , then so and , and then .) So, is a member of that strictly contains , a contradiction. It must be thar .   Now assume that every submodule of is a summand. We proceed in three steps:  (i) We claim that every submodule of inherits this property; i.e., every submodule of is a summand of . For say is a submodule. By assumption on , we have (internal direct sum) for some . Since , it follows that . (Given , we have for some . Since , .) Since , this shows .  (ii) We claim that every nonzero submodule of contains a simple summand. Pick and apply Zorn’s Lemma to show that there is a maximal submodule of with respect to the property that . We have by (i) for some . If is not simple, then contains a nonzero, proper submodule and hence, by using (i) again, we get that for some proper nonzero submodule  .  These properties implies that . One containment is clear. If belongs to the left side, then . It follows that and so , and hence . So, either or , and either way we reach a contradiction to the maximality of .  (iii) Let be the set of all simple submodules of , and let Equivalently, the module generated by the modules in their direct sum. The set is partially ordered by inclusion. It is nonempty, since (or some singleton is in there by (ii)). Given a chain in , is again an element of , so there is a maximal element in ; call it . Let be the direct sum of  .  We claim that . By hypothesis we have for some . If we are done. Otherwise by (ii) (and (i) again) we have for some simple submodule . But then , contradicting maximality of .      If semisimple, so is every submodule and quotient module of .    Say is a submodule. By the claim marked (i) in the proof of Theorem  every submodule of is a summand, and hence is semisimple by Theorem   .  Given a surjection , it splits by Theorem  , so that is isomorphic to a submodule of , namely the image of under the splitting map. Hence is semisimple by the case already proven.    A major source of semisimple modules comes from group rings.  "
},
{
  "id": "def-semisimple-mod",
  "level": "2",
  "url": "ch-semisimple-mod.html#def-semisimple-mod",
  "type": "Definition",
  "number": "27.1",
  "title": "",
  "body": "  For any ring , a left -module is called semisimple if it is a (possibly infinite) direct sum of simple modules. The empty direct sum is allowed, so that the module is considered to be semisimple.   "
},
{
  "id": "example-13",
  "level": "2",
  "url": "ch-semisimple-mod.html#example-13",
  "type": "Example",
  "number": "27.2",
  "title": "",
  "body": " Let be a finitely generated -module. Then by the FTFGAG, is isomorphic to for some , , primes and positive integers . Such a module is semisimple if and only if and for all .  "
},
{
  "id": "example-14",
  "level": "2",
  "url": "ch-semisimple-mod.html#example-14",
  "type": "Example",
  "number": "27.3",
  "title": "",
  "body": " Every module over a division ring is semisimple because any such module has a basis, hence it is a free module.  "
},
{
  "id": "lem-matrixsemisimple",
  "level": "2",
  "url": "ch-semisimple-mod.html#lem-matrixsemisimple",
  "type": "Lemma",
  "number": "27.4",
  "title": "",
  "body": "  Let be a division ring and set for some . I claim is semisimple as a left module over itself.    For each , let denote the subset of consisting of matrices whose only nonzero entires belong to the -th column. The rules for matrix addition and multiplication show that is a left ideal (i.e., a left submodule) of . Moreover, there is evident bijection between and (column vectors) and this bijection is an isomorphism of left -modules. We proved is simple as an -module and hence so is . Finally, is the internal direct sum of : because each matrix is uniquely a sum of the form with .   "
},
{
  "id": "problem-135",
  "level": "2",
  "url": "ch-semisimple-mod.html#problem-135",
  "type": "Problem",
  "number": "27.5",
  "title": "",
  "body": " Let be an infinite collection of nonzero modules. Then is not finitely generated.  "
},
{
  "id": "remark-21",
  "level": "2",
  "url": "ch-semisimple-mod.html#remark-21",
  "type": "Remark",
  "number": "27.6",
  "title": "",
  "body": " As a consequence of the above exercise, a module is a finitely generated semisimple module if and only if it is a finite direct sum of simple modules. In this case if we write as a sum of simple modules, there is a strict composition series so has finite length, namely length , and the composition factors are the modules .  "
},
{
  "id": "prop-ks-semisimple-mod",
  "level": "2",
  "url": "ch-semisimple-mod.html#prop-ks-semisimple-mod",
  "type": "Proposition",
  "number": "27.7",
  "title": "Krull-Schmidt for Semisimple Modules.",
  "body": " Krull-Schmidt for Semisimple Modules   Let be a finitely generated semisimple module. Given two direct sum decompositions as simple modules then , and there is a permutation such that for all     Follows from the previous remark and the Jordan-Holder theorem.   "
},
{
  "id": "thm-equiv-semisimp-mod",
  "level": "2",
  "url": "ch-semisimple-mod.html#thm-equiv-semisimp-mod",
  "type": "Theorem",
  "number": "27.8",
  "title": "Equivalent Conditions for Semisimple Modules.",
  "body": " Equivalent Conditions for Semisimple Modules   For any ring and left -module , the following are equivalent:      is semisimple,    very submodule of is a summand; i.e., for every submodule of there is a submodule such that is the internal direct sum of and ,    every injective -map is split has a left inverse,    every SES of the form is split exact,    every surjective -map has a right inverse.       The equivalence of (3), (4), and (5) is given by the Splitting Theorem.   holds since given an injective map as in (3), we have by (2) that is a summand of , hence there is a projection homomorphism that splits the inclusion of the summand into , that is . Now is an isomorphism so we may consider the -module homomorphism and set to be . Then    holds since we can split the inclusion and thus also the SES Therefore the Splitting Theorem yields where denotes the splitting of the quotient map .  The hard part is proving . Assume (1), so that for some collection of simple submodules , and let be any submodule. (It is important to note that it does not necessarily follow that is a sum of some subcollection of the ) . Consider the collection of subsets of such that where we define . View as a poset by inclusion. It is nonempty since belongs to . If is a totally ordered subcollection of , let . I claim . If not, there is a nonzero element . But since for all but a finite number of ’s and since the collection of ’s was totally ordered, there is some such that , a contradiction. We may thus apply Zorn’s Lemma to get a maximal .  I claim is the internal direct sum of and . We have since and so it suffices to prove . Since , the latter is equivalent to proving that for all . If this fails for some , then since is a proper submodule of , which is simple, and hence . But then (if and , with and , then so and , and then .) So, is a member of that strictly contains , a contradiction. It must be thar .   Now assume that every submodule of is a summand. We proceed in three steps:  (i) We claim that every submodule of inherits this property; i.e., every submodule of is a summand of . For say is a submodule. By assumption on , we have (internal direct sum) for some . Since , it follows that . (Given , we have for some . Since , .) Since , this shows .  (ii) We claim that every nonzero submodule of contains a simple summand. Pick and apply Zorn’s Lemma to show that there is a maximal submodule of with respect to the property that . We have by (i) for some . If is not simple, then contains a nonzero, proper submodule and hence, by using (i) again, we get that for some proper nonzero submodule  .  These properties implies that . One containment is clear. If belongs to the left side, then . It follows that and so , and hence . So, either or , and either way we reach a contradiction to the maximality of .  (iii) Let be the set of all simple submodules of , and let Equivalently, the module generated by the modules in their direct sum. The set is partially ordered by inclusion. It is nonempty, since (or some singleton is in there by (ii)). Given a chain in , is again an element of , so there is a maximal element in ; call it . Let be the direct sum of  .  We claim that . By hypothesis we have for some . If we are done. Otherwise by (ii) (and (i) again) we have for some simple submodule . But then , contradicting maximality of .   "
},
{
  "id": "cor-semisimple-quotient",
  "level": "2",
  "url": "ch-semisimple-mod.html#cor-semisimple-quotient",
  "type": "Corollary",
  "number": "27.9",
  "title": "",
  "body": "  If semisimple, so is every submodule and quotient module of .    Say is a submodule. By the claim marked (i) in the proof of Theorem  every submodule of is a summand, and hence is semisimple by Theorem   .  Given a surjection , it splits by Theorem  , so that is isomorphic to a submodule of , namely the image of under the splitting map. Hence is semisimple by the case already proven.   "
},
{
  "id": "sec-semisimple-rings",
  "level": "1",
  "url": "sec-semisimple-rings.html",
  "type": "Section",
  "number": "28.1",
  "title": "Semisimple Rings",
  "body": " Semisimple Rings    A ring is left semisimple if is semisimple as a left module over itself. is right semisimple if is semisimple as a right modules over itself.     Recall that submodules of are left ideals and the simple ones are the minimal (nonzero) left ideals. So, is left semisimple if and only if is the internal direct sum of some collection of minimal left ideals : Moreover, is f.g. as a module over itself, and so this must be a finite direct sum. So, is left semisimple if and only if decomposes as an internal direct sum of the form for some finite collection of minimal left ideals.    For any and division ring , the matrix ring is left semisimple. This was shown earlier. It is also right semisimple.    If is a finite product of fields, then each is a simple -module, and is the direct sum of these, so is (left) semisimple.     For a ring , the following conditions are equivalent:    is a left semisimple ring.    Every left -module is semisimple.    Every SES of left -modules is split.    Every injection of left -modules splits    Every surjection of left -modules splits.    Every left -module is projective.    Every left -module is injective.       The equivalence of (2)-(5) follows from Proposition . The equivalence of (4) and (7) follows from the characterization of injective modules in Proposition and the equivalence of (5) and (6) follows from the characterization of projective modules in Proposition . The implication (2) (1) is obvious.  Now for : Assume (1) and let be any left -module. It follows from the definition that an arbitrary coproduct of semisimple modules is again semisimple, and so the free module is semisimple for any indexing set . By choosing a generating set of , we may find a surjection of the form . By Corollary , it follows that is semisimple since it is a quotient of a semisimple module .      Let be a left semisimple ring and write as an internal direct sum with minimal left ideals. Let be a complete list of representatives of isomorphism classes as left -modules taken from the list ; so, for each with , there is a unique with so that as left -modules.  Then every -module is isomorphic to for some index sets .  If is finitely generated, is isomorphic to for a unique list of nonnegative integers.    If is finitely generated there is a surjection . Using Proposition this surjection splits, so that for some , and each of and is semisimple and finitely generated. So and with simple. Clearly is isomorphic to a finite direct sum of copies of the ’s, and so the result follows from the Krull-Schmidt Theorem for semisimple modules.  In the general case, we know that is a direct sum of simple modules; if some simple summand of is not isomorphic to one of the , then is a finitely generated counterexample to the f.g. case.    In short, if is left semisimple, and we know the simple decomposition of itself, then we have a complete classification of all  -modules: they are just direct sums of the simple summands of !  Much of the interest in semisimple rings arises from the following:   Maschke's Theorem   If is a field and is a finite group such that does not divide , then the group ring is left semisimple.    Let be any injection of left -modules. It suffices to prove that there is an -linear map such that . By restriction of scalars along the inclusion , we may regard as a -linear map between -vector spaces. As such it admits a -linear splitting (since is semisimple). There is no reason that will be -linear, but we can modify it so that it becomes so: Define by Note that the formula makes sense since is invertible in by assumption.  Then is still a -linear map (since is -linear and the group action is -linear). For any we have where the second equality is given by identifying with . These conditions ensure that is -linear. Finally, where the second equality uses that is -linear and the third one uses that .     The proof actually shows that is semisimple provided is and is invertible in .    The group ring does not satisfy the hypotheses of Maschke’s theorem, since the order of the group is zero in the field. In fact, is not semisimple: let be the representation ; i.e., as a -module, we have . We claim that is the unique nonzero proper submodule of . Let be a nonzero submodule and suppose that . Then, there is some element with . Then and are linearly independent, so we must have . It follows that is not semisimple: it is not simple since , but is not a direct sum of simple modules.   Let be a finite group and a field. The representation of corresponding to viewed as a left module over itself can be described explicitly as following: As a -vector space, has as a basis: . acts on this vector space by permuting the basis via left multiplication: . This is sometimes called the (left) regular representation of .   Corollary of Maschke's Theorem   If is a finite group and is a field such that , then every -linear representation of is a direct sum of irreducible representations, and every finite dimensional representation is uniquely a finite direct sum of irreducible ones.  Moreover, every irreducible representation arises as a summand of the left regular representation.     Let . We can use Maschke’s Theorem and the theory of semisimple rings so far to classify every representation of over or over (or more generally over any field of characteristic not equal to 3). In any case, the left regular representation of is the three-dimensional representation with basis such that , i.e., in this basis. Also in any case, the subspace spanned by , which is the vector in these coordinates, is a 1-dimensional -stable subspace, so a simple subrepresentation. Moreover, this is the trivial representation, since this vector is fixed by . Then obtains the structure of a representation. We can take as a basis for , and , and , i.e., in our coordinates, A -stable subspace must correspond to an eigenvector of (which is equivalently an eigenvector of ). The characteristic equation of this matrix shows that the eigenvalues are precisely the primitive cube roots of unity.  If (or more generally if there are no primitive cube roots of unity), then the -dimensional representation we just found is simple since there are no stable subspaces. If (or more generally if there are primitive cube roots of unity), let be a primitive cube root of unity. The -dimensional representation has and as eigenvalues, and there are corresponding eigenvectors, so is a direct sum of two 1-dimensional stable subspaces such that for all and for all .  We conclude that every real representation of is isomorphic to a direct sum of copies of the trivial representation and copies of . That is, for any such representation , there is a basis of , , , such that , , and .  We conclude that every complex representation of is isomorphic to a direct sum of copies of the trivial representation, , and . That is, for any such representation , there is a basis of , , , , such that , , and .   "
},
{
  "id": "def-semisimple-ring",
  "level": "2",
  "url": "sec-semisimple-rings.html#def-semisimple-ring",
  "type": "Definition",
  "number": "28.1",
  "title": "",
  "body": "  A ring is left semisimple if is semisimple as a left module over itself. is right semisimple if is semisimple as a right modules over itself.   "
},
{
  "id": "remark-22",
  "level": "2",
  "url": "sec-semisimple-rings.html#remark-22",
  "type": "Remark",
  "number": "28.2",
  "title": "",
  "body": " Recall that submodules of are left ideals and the simple ones are the minimal (nonzero) left ideals. So, is left semisimple if and only if is the internal direct sum of some collection of minimal left ideals : Moreover, is f.g. as a module over itself, and so this must be a finite direct sum. So, is left semisimple if and only if decomposes as an internal direct sum of the form for some finite collection of minimal left ideals.  "
},
{
  "id": "example-15",
  "level": "2",
  "url": "sec-semisimple-rings.html#example-15",
  "type": "Example",
  "number": "28.3",
  "title": "",
  "body": " For any and division ring , the matrix ring is left semisimple. This was shown earlier. It is also right semisimple.  "
},
{
  "id": "example-16",
  "level": "2",
  "url": "sec-semisimple-rings.html#example-16",
  "type": "Example",
  "number": "28.4",
  "title": "",
  "body": " If is a finite product of fields, then each is a simple -module, and is the direct sum of these, so is (left) semisimple.  "
},
{
  "id": "prop-equivcond-semisimple-ring",
  "level": "2",
  "url": "sec-semisimple-rings.html#prop-equivcond-semisimple-ring",
  "type": "Proposition",
  "number": "28.5",
  "title": "",
  "body": "  For a ring , the following conditions are equivalent:    is a left semisimple ring.    Every left -module is semisimple.    Every SES of left -modules is split.    Every injection of left -modules splits    Every surjection of left -modules splits.    Every left -module is projective.    Every left -module is injective.       The equivalence of (2)-(5) follows from Proposition . The equivalence of (4) and (7) follows from the characterization of injective modules in Proposition and the equivalence of (5) and (6) follows from the characterization of projective modules in Proposition . The implication (2) (1) is obvious.  Now for : Assume (1) and let be any left -module. It follows from the definition that an arbitrary coproduct of semisimple modules is again semisimple, and so the free module is semisimple for any indexing set . By choosing a generating set of , we may find a surjection of the form . By Corollary , it follows that is semisimple since it is a quotient of a semisimple module .   "
},
{
  "id": "prop-ds-semisimple",
  "level": "2",
  "url": "sec-semisimple-rings.html#prop-ds-semisimple",
  "type": "Proposition",
  "number": "28.6",
  "title": "",
  "body": "  Let be a left semisimple ring and write as an internal direct sum with minimal left ideals. Let be a complete list of representatives of isomorphism classes as left -modules taken from the list ; so, for each with , there is a unique with so that as left -modules.  Then every -module is isomorphic to for some index sets .  If is finitely generated, is isomorphic to for a unique list of nonnegative integers.    If is finitely generated there is a surjection . Using Proposition this surjection splits, so that for some , and each of and is semisimple and finitely generated. So and with simple. Clearly is isomorphic to a finite direct sum of copies of the ’s, and so the result follows from the Krull-Schmidt Theorem for semisimple modules.  In the general case, we know that is a direct sum of simple modules; if some simple summand of is not isomorphic to one of the , then is a finitely generated counterexample to the f.g. case.   "
},
{
  "id": "thm-Maschke",
  "level": "2",
  "url": "sec-semisimple-rings.html#thm-Maschke",
  "type": "Theorem",
  "number": "28.7",
  "title": "Maschke's Theorem.",
  "body": " Maschke's Theorem   If is a field and is a finite group such that does not divide , then the group ring is left semisimple.    Let be any injection of left -modules. It suffices to prove that there is an -linear map such that . By restriction of scalars along the inclusion , we may regard as a -linear map between -vector spaces. As such it admits a -linear splitting (since is semisimple). There is no reason that will be -linear, but we can modify it so that it becomes so: Define by Note that the formula makes sense since is invertible in by assumption.  Then is still a -linear map (since is -linear and the group action is -linear). For any we have where the second equality is given by identifying with . These conditions ensure that is -linear. Finally, where the second equality uses that is -linear and the third one uses that .   "
},
{
  "id": "remark-23",
  "level": "2",
  "url": "sec-semisimple-rings.html#remark-23",
  "type": "Remark",
  "number": "28.8",
  "title": "",
  "body": " The proof actually shows that is semisimple provided is and is invertible in .  "
},
{
  "id": "example-17",
  "level": "2",
  "url": "sec-semisimple-rings.html#example-17",
  "type": "Example",
  "number": "28.9",
  "title": "",
  "body": " The group ring does not satisfy the hypotheses of Maschke’s theorem, since the order of the group is zero in the field. In fact, is not semisimple: let be the representation ; i.e., as a -module, we have . We claim that is the unique nonzero proper submodule of . Let be a nonzero submodule and suppose that . Then, there is some element with . Then and are linearly independent, so we must have . It follows that is not semisimple: it is not simple since , but is not a direct sum of simple modules.  "
},
{
  "id": "cor-Maschke",
  "level": "2",
  "url": "sec-semisimple-rings.html#cor-Maschke",
  "type": "Corollary",
  "number": "28.10",
  "title": "Corollary of Maschke's Theorem.",
  "body": " Corollary of Maschke's Theorem   If is a finite group and is a field such that , then every -linear representation of is a direct sum of irreducible representations, and every finite dimensional representation is uniquely a finite direct sum of irreducible ones.  Moreover, every irreducible representation arises as a summand of the left regular representation.   "
},
{
  "id": "example-18",
  "level": "2",
  "url": "sec-semisimple-rings.html#example-18",
  "type": "Example",
  "number": "28.11",
  "title": "",
  "body": " Let . We can use Maschke’s Theorem and the theory of semisimple rings so far to classify every representation of over or over (or more generally over any field of characteristic not equal to 3). In any case, the left regular representation of is the three-dimensional representation with basis such that , i.e., in this basis. Also in any case, the subspace spanned by , which is the vector in these coordinates, is a 1-dimensional -stable subspace, so a simple subrepresentation. Moreover, this is the trivial representation, since this vector is fixed by . Then obtains the structure of a representation. We can take as a basis for , and , and , i.e., in our coordinates, A -stable subspace must correspond to an eigenvector of (which is equivalently an eigenvector of ). The characteristic equation of this matrix shows that the eigenvalues are precisely the primitive cube roots of unity.  If (or more generally if there are no primitive cube roots of unity), then the -dimensional representation we just found is simple since there are no stable subspaces. If (or more generally if there are primitive cube roots of unity), let be a primitive cube root of unity. The -dimensional representation has and as eigenvalues, and there are corresponding eigenvectors, so is a direct sum of two 1-dimensional stable subspaces such that for all and for all .  We conclude that every real representation of is isomorphic to a direct sum of copies of the trivial representation and copies of . That is, for any such representation , there is a basis of , , , such that , , and .  We conclude that every complex representation of is isomorphic to a direct sum of copies of the trivial representation, , and . That is, for any such representation , there is a basis of , , , , such that , , and .  "
},
{
  "id": "sec-art-wedd",
  "level": "1",
  "url": "sec-art-wedd.html",
  "type": "Section",
  "number": "28.2",
  "title": "Artin-Wedderburn Theorem",
  "body": " Artin-Wedderburn Theorem  We will now give a classification of all left semisimple rings. To start, we collect some examples.    If and are left semisimple, so is the product ring .    Say we have internal direct sum decompositions and involving minimal left ideals. Then for all and , and are minimal left ideals of and they determine an internal direct sum decomposition of .     The previous lemma and Lemma show that for any integer , list of division rings and positive integers , the ring is left semisimple.   The Artin-Wedderburn Theorem asserts that the last example accounts for all examples!   Artin-Wedderburn Theorem   Let be a left semisimple ring. Then for some , positive integers , and division rings , there is a ring isomorphism   Moreover,    is the number of isomorphism classes of simple left -modules.    Say are simple modules forming a complete set of representatives of these isomorphism classes. Then, after reordering, and     is the number of times summands isomorphic to occur in the decomposition of into a direct sum of simple left modules.   Moreover, the data is unique up to a permutation of and isomorphisms of division rings.     We saw before that the module decomposition in terms of simple modules is , where is the one-dimensional trivial representation, and is the -dimensional representation given by . On the other hand, as rings,   To reconcile these decompositions by the Artin-Wedderburn Theorem, one can check that and .  We have . To compute the endomorphism ring of , observe that an -linear endomorphism of is -linear if and only if it commutes with the action of . We can write any -linear endomorphism of as a matrix; for it to commute with means it commutes with . We have so the matrices we seek are of the form Any pair of matrices in this set commutes (since the two vectorspace generators do) so they form a commutative ring and hence a field by Schur’s Lemma; any matrix in this collection is algebraic over the subring of scalar matrices (since both generators are). It follows that this collection of matrices is isomorphic as a ring to .     Let be an -module. The map is a ring isomorphism, where and denote the natural inclusion and projection maps.    It is clear that this map is additive, as each and is. Observe that is the identity on if , and the zero map otherwise and that .  The map is a two-sided inverse for :    To see that respects multiplication, we have      Let be a division ring. Then , where is the simple module of column vectors.     ???    Since is left semisimple, we have with each is simple (in fact a minimal ideal). Group by isomorphism to rewrite this as with each simple, , and such that is not isomorphic to for all . We compute the endomorphisms of both sides:     Above the second line follows from the first by properties of , the third follows because Schur’s lemma gives that , and consequently , when . The final isomorphism is the previous lemma.  On the one hand, we have by a problem from the homework. On the other hand, applying Schur’s Lemma again, is a division ring for all .  Combining these gives and hence, also by a homework problem, we have with .  This shows that given a decomposition of as a left semisimple module, there is a ring decomposition as a product of matrix rings over division rings, and the data of division rings and matrix sizes is related to the data of simple modules and multiplicities by the formulas (1)–(3). We just need to prove uniqueness.  Say we are given an isomorphism of rings for some division rings . Then since decomposes as a direct sum of copies of , and is a simple -module, hence also a simple -module, we have a semisimple -module decomposition of as By Krull-Schmidt, we must have , and after a permutation, and for each .  Moreover, we have We recall that , with the natural column vector action from , and the trivial action from the other factors. Thus, using the exercise above.      A ring is left semisimple if and only if it is right semisimple.    The claim is equivalent to showing is left semisimple if and only is, which in turn follows from just one of the implications. If is left semisimple, then , so so is left semisimple.    Henceforth, we just say that is semisimple if it is left semisimple.  "
},
{
  "id": "lem-lsemisimple-product",
  "level": "2",
  "url": "sec-art-wedd.html#lem-lsemisimple-product",
  "type": "Lemma",
  "number": "28.12",
  "title": "",
  "body": "  If and are left semisimple, so is the product ring .    Say we have internal direct sum decompositions and involving minimal left ideals. Then for all and , and are minimal left ideals of and they determine an internal direct sum decomposition of .   "
},
{
  "id": "example-19",
  "level": "2",
  "url": "sec-art-wedd.html#example-19",
  "type": "Example",
  "number": "28.13",
  "title": "",
  "body": " The previous lemma and Lemma show that for any integer , list of division rings and positive integers , the ring is left semisimple.  "
},
{
  "id": "thm-art-wedd",
  "level": "2",
  "url": "sec-art-wedd.html#thm-art-wedd",
  "type": "Theorem",
  "number": "28.14",
  "title": "Artin-Wedderburn Theorem.",
  "body": " Artin-Wedderburn Theorem   Let be a left semisimple ring. Then for some , positive integers , and division rings , there is a ring isomorphism   Moreover,    is the number of isomorphism classes of simple left -modules.    Say are simple modules forming a complete set of representatives of these isomorphism classes. Then, after reordering, and     is the number of times summands isomorphic to occur in the decomposition of into a direct sum of simple left modules.   Moreover, the data is unique up to a permutation of and isomorphisms of division rings.   "
},
{
  "id": "example-20",
  "level": "2",
  "url": "sec-art-wedd.html#example-20",
  "type": "Example",
  "number": "28.15",
  "title": "",
  "body": " We saw before that the module decomposition in terms of simple modules is , where is the one-dimensional trivial representation, and is the -dimensional representation given by . On the other hand, as rings,   To reconcile these decompositions by the Artin-Wedderburn Theorem, one can check that and .  We have . To compute the endomorphism ring of , observe that an -linear endomorphism of is -linear if and only if it commutes with the action of . We can write any -linear endomorphism of as a matrix; for it to commute with means it commutes with . We have so the matrices we seek are of the form Any pair of matrices in this set commutes (since the two vectorspace generators do) so they form a commutative ring and hence a field by Schur’s Lemma; any matrix in this collection is algebraic over the subring of scalar matrices (since both generators are). It follows that this collection of matrices is isomorphic as a ring to .  "
},
{
  "id": "lem-semisimple-end",
  "level": "2",
  "url": "sec-art-wedd.html#lem-semisimple-end",
  "type": "Lemma",
  "number": "28.16",
  "title": "",
  "body": "  Let be an -module. The map is a ring isomorphism, where and denote the natural inclusion and projection maps.    It is clear that this map is additive, as each and is. Observe that is the identity on if , and the zero map otherwise and that .  The map is a two-sided inverse for :    To see that respects multiplication, we have    "
},
{
  "id": "problem-136",
  "level": "2",
  "url": "sec-art-wedd.html#problem-136",
  "type": "Problem",
  "number": "28.17",
  "title": "",
  "body": " Let be a division ring. Then , where is the simple module of column vectors.  "
},
{
  "id": "thm-whoknows",
  "level": "2",
  "url": "sec-art-wedd.html#thm-whoknows",
  "type": "Theorem",
  "number": "28.18",
  "title": "",
  "body": "  ???    Since is left semisimple, we have with each is simple (in fact a minimal ideal). Group by isomorphism to rewrite this as with each simple, , and such that is not isomorphic to for all . We compute the endomorphisms of both sides:     Above the second line follows from the first by properties of , the third follows because Schur’s lemma gives that , and consequently , when . The final isomorphism is the previous lemma.  On the one hand, we have by a problem from the homework. On the other hand, applying Schur’s Lemma again, is a division ring for all .  Combining these gives and hence, also by a homework problem, we have with .  This shows that given a decomposition of as a left semisimple module, there is a ring decomposition as a product of matrix rings over division rings, and the data of division rings and matrix sizes is related to the data of simple modules and multiplicities by the formulas (1)–(3). We just need to prove uniqueness.  Say we are given an isomorphism of rings for some division rings . Then since decomposes as a direct sum of copies of , and is a simple -module, hence also a simple -module, we have a semisimple -module decomposition of as By Krull-Schmidt, we must have , and after a permutation, and for each .  Moreover, we have We recall that , with the natural column vector action from , and the trivial action from the other factors. Thus, using the exercise above.   "
},
{
  "id": "cor-lr-semisimple",
  "level": "2",
  "url": "sec-art-wedd.html#cor-lr-semisimple",
  "type": "Corollary",
  "number": "28.19",
  "title": "",
  "body": "  A ring is left semisimple if and only if it is right semisimple.    The claim is equivalent to showing is left semisimple if and only is, which in turn follows from just one of the implications. If is left semisimple, then , so so is left semisimple.   "
},
{
  "id": "sec-spplications",
  "level": "1",
  "url": "sec-spplications.html",
  "type": "Section",
  "number": "29.1",
  "title": "Applications",
  "body": " Applications  Let us start by restating the Artin-Wedderburn theorem in the context of group rings.   Artin-Wedderburn for Group Rings   If is a finite group and is a field such that , then there is an isomorphism of rings where are division rings. Furthermore, each contains (up to isomorphism) as a subring of its center and the above isomorphism is -linear. In particular, .  Moroever, we have:    is the number of irreducible -linear representation of (up to isomorphism),    the 's are the opposite rings of the endomorphism rings of these representations,    the 's give the number of times each irreducible representation occurs in the decomposition of the regular representation of ,    the numbers give the dimensions of these representations, and     .       This mostly follows from Artin-Wedderburn and Maschke's Theorem. What needs to be noted is that each division ring here contains a copy of in its center. Indeed, we recall that each is given as the opposite ring of for some simple module . For , we have the map which commutes with any -linear map from to itself.      Let be a finite group, and be a field such that . Then is abelian if and only if is isomorphic to a product of fields.      Let be any group and any field. Given two group homomorphisms , the associated -modules and are isomorphic if and only if .    Suppose that is an isomorphism of -modules. Identifying as vector spaces, we have for some . Then, for all , so for all .      If is a division ring that contains in its center and , then .    Pick . Then , and since is an -vectorspace, we must have for dimension reasons. Thus is commutative and is a field. Since is a finite extension of , it is algebraic, so , and we must have .     Let and . We find all the simple modules over the ring or, equivalently, all irreducible -linear representations of . We also find the Artin-Wedderburn decomposition of .  The one dimensional represenatations are given by group homomorphisms of the form , and any such map factors as Note that and there are two group homomorphisms , sending the generator to either or (the only elements of of order or ). This gives two representations: with acting trivially and with acting by the sign representation. These are not isomorphic by the previous lemma.  We have that so and , and likewise so and . So, the Artin-Wedderburn decomposition starts as     Note that there are no further factors of , since we found all of the one-dimensional simple modules.  Recall also that acts on by permuting the basis (corresponding to the group homomorphism sending a permutation to its associated permutation matrix). The subspace is a subrepresenation of of dimension . We claim it is irreducible: Say .  By applying a permutation and scaling appropriately we obtain an element of the form and hence . Adding these gives and hence . The latter two are linearly independent and so must span . This proves generates as a left -module and hence that is simple. Note that is not isomorphic to either nor by dimension considerations.  We have that , so there are two possibilities.    One possibility is and , in which case , so the Artin-Wedderburn decomposition reads as for some . We must have . We know that cannot have any one-dimensional simple modules (since we already accounted for all of the one-dimensional simple modules for ), so cannot be . Then, for dimension reasons, we must have that with , so . But then would be commutative, which it is not, as is not abelian.    The other possibility is and . We obtain the AW decomposition     (Alternatively, we could compute the endomorphism ring of and see that it contains only scalars.)  We have found the AW decomposition of . As a consequence, we have identified all of the irreducible real representations of .   "
},
{
  "id": "thm-art-wedd-gr",
  "level": "2",
  "url": "sec-spplications.html#thm-art-wedd-gr",
  "type": "Theorem",
  "number": "29.1",
  "title": "Artin-Wedderburn for Group Rings.",
  "body": " Artin-Wedderburn for Group Rings   If is a finite group and is a field such that , then there is an isomorphism of rings where are division rings. Furthermore, each contains (up to isomorphism) as a subring of its center and the above isomorphism is -linear. In particular, .  Moroever, we have:    is the number of irreducible -linear representation of (up to isomorphism),    the 's are the opposite rings of the endomorphism rings of these representations,    the 's give the number of times each irreducible representation occurs in the decomposition of the regular representation of ,    the numbers give the dimensions of these representations, and     .       This mostly follows from Artin-Wedderburn and Maschke's Theorem. What needs to be noted is that each division ring here contains a copy of in its center. Indeed, we recall that each is given as the opposite ring of for some simple module . For , we have the map which commutes with any -linear map from to itself.   "
},
{
  "id": "cor-ab-iff-gr-fieldprod",
  "level": "2",
  "url": "sec-spplications.html#cor-ab-iff-gr-fieldprod",
  "type": "Corollary",
  "number": "29.2",
  "title": "",
  "body": "  Let be a finite group, and be a field such that . Then is abelian if and only if is isomorphic to a product of fields.   "
},
{
  "id": "lem-gring-and-iso",
  "level": "2",
  "url": "sec-spplications.html#lem-gring-and-iso",
  "type": "Lemma",
  "number": "29.3",
  "title": "",
  "body": "  Let be any group and any field. Given two group homomorphisms , the associated -modules and are isomorphic if and only if .    Suppose that is an isomorphism of -modules. Identifying as vector spaces, we have for some . Then, for all , so for all .   "
},
{
  "id": "prop-dring-and-C",
  "level": "2",
  "url": "sec-spplications.html#prop-dring-and-C",
  "type": "Proposition",
  "number": "29.4",
  "title": "",
  "body": "  If is a division ring that contains in its center and , then .    Pick . Then , and since is an -vectorspace, we must have for dimension reasons. Thus is commutative and is a field. Since is a finite extension of , it is algebraic, so , and we must have .   "
},
{
  "id": "example-21",
  "level": "2",
  "url": "sec-spplications.html#example-21",
  "type": "Example",
  "number": "29.5",
  "title": "",
  "body": " Let and . We find all the simple modules over the ring or, equivalently, all irreducible -linear representations of . We also find the Artin-Wedderburn decomposition of .  The one dimensional represenatations are given by group homomorphisms of the form , and any such map factors as Note that and there are two group homomorphisms , sending the generator to either or (the only elements of of order or ). This gives two representations: with acting trivially and with acting by the sign representation. These are not isomorphic by the previous lemma.  We have that so and , and likewise so and . So, the Artin-Wedderburn decomposition starts as     Note that there are no further factors of , since we found all of the one-dimensional simple modules.  Recall also that acts on by permuting the basis (corresponding to the group homomorphism sending a permutation to its associated permutation matrix). The subspace is a subrepresenation of of dimension . We claim it is irreducible: Say .  By applying a permutation and scaling appropriately we obtain an element of the form and hence . Adding these gives and hence . The latter two are linearly independent and so must span . This proves generates as a left -module and hence that is simple. Note that is not isomorphic to either nor by dimension considerations.  We have that , so there are two possibilities.    One possibility is and , in which case , so the Artin-Wedderburn decomposition reads as for some . We must have . We know that cannot have any one-dimensional simple modules (since we already accounted for all of the one-dimensional simple modules for ), so cannot be . Then, for dimension reasons, we must have that with , so . But then would be commutative, which it is not, as is not abelian.    The other possibility is and . We obtain the AW decomposition     (Alternatively, we could compute the endomorphism ring of and see that it contains only scalars.)  We have found the AW decomposition of . As a consequence, we have identified all of the irreducible real representations of .  "
},
{
  "id": "sec-rep-closed-fields",
  "level": "1",
  "url": "sec-rep-closed-fields.html",
  "type": "Section",
  "number": "29.2",
  "title": "Algebraically Closed Fields",
  "body": " Algebraically Closed Fields  When working over an algebraically closed field, the Artin-Wedderburn Theorem takes a simpler form.   Artin-Wedderburn for Group Rings over Algebraically Closed Fields   If is a finite group and is an algebraically closed field such that , then there is an isomorphism of rings   Moroever, we have:    is the number of irreducible -linear representation of (up to isomorphism),    the 's are the opposite rings of the endomorphism rings of these representations,    the 's give the number of times each irreducible representation occurs in the decomposition of the regular representation of ,    the 's also give the dimensions of these representations, and     .       The point is that in this setting, for each irreducible representation , is equal to . Let . In particular, is a -linear endomorphism of the finite dimensional vector space . Since is algebraically closed, has an eigenvaluse, say . Then is a -linear endomorphism of that is not injective, so by Schur’s Lemma is must be . Thus,      Let and consider the alternating group of order 12. We find all the simple modules over the ring or, equivalently, all irreducible -linear representations of . We also find the Artin-Wedderburn decomposition of .  As before we start by finding 1-dimensional representations given by group homomorphisms of the form . Any such map factors as and thus there are three nonisomorphic 1-dimensional representations given by , , with . Note that corresponds to the trivial representation. Also and make essential use of the fact that we are working over as opposed to, say, where there are no primitive cubic roots of 1.  With respect to the Artin-Wedderburn decomposition we have so far where because we have already found all the 1-dimensional representations ( ) above. Counting dimensions we obtain It is easy to see there is only one solution: and . Hence there is a unique up to isomorphism -linear irreducible representation of which is a 3 dimensional -vector space.  To exhibit such a representation, let act on by permuting the standard basis elements and thus any vector in . The subspace given by is an -stable subspace. This is an irreducible representation: if , after permuting and scaling, we can write . We also have and in , so the sum . Then and are also in , and these are three linearly independent vectors, so we must have .    Let's consider what the Artin-Wedderburn Theorem says about complex representations of finite abelian groups: the group ring must be a product of copies of , so every irreducible representation is one-dimensional. Thus, every representation is a sum of one-dimensional representations. Concretely, this means that there is a basis in which every group element acts as a diagonal matrix.  This special case actually just follows from basic facts in linear algebra. Let be a representation. Then every has finite order, so for some . This implies that the matrix satisfies , so its minimal polynomial divides . This polynomial splits into distinct linear factors over , so is diagonalizable for every . (So far, we’ve only used that is finite.) Now, since is abelian, we have for all , so ; i.e., the matrices commute. Commuting diagonalizable matrices are simultaneously diagonalizable; i.e., there is a basis as above.     Let be a finite group. The number of one-dimensional complex representations of (up to isomorphism) is . Thus, in the Artin-Wedderburn decomposition of , there are exactly copies of .    We have that , and by the discussion above, there are distinct one-dimensional representations of .      For any finite group , the number of irreducible complex representations (up to isomorphism) is equal to the number of conjugacy classes.    We have and is the number of irreducible complex representations up to isomorphism. A key point is that the center of the right side is , which has dimension as a complex vector space. Since this ring isomorphism is -linear, it induces a -linear isomorphism of the centers, and thus we just need to show that is equal to the number of conjugacy classes.  Let denote the conjugacy classes of (i.e., the orbits for the action of on itself by conjugation). For each set . Then for all , and it follows that . Since that ’s are sums of disjoint subsets of a basis of , they are linearly independent. Now say belongs to the center. Then for each , and it follows that whenever are conjugate. This proves that is spanned by . We conclude that .    "
},
{
  "id": "cor-art-wedd-gring-alg-closed",
  "level": "2",
  "url": "sec-rep-closed-fields.html#cor-art-wedd-gring-alg-closed",
  "type": "Corollary",
  "number": "29.6",
  "title": "Artin-Wedderburn for Group Rings over Algebraically Closed Fields.",
  "body": " Artin-Wedderburn for Group Rings over Algebraically Closed Fields   If is a finite group and is an algebraically closed field such that , then there is an isomorphism of rings   Moroever, we have:    is the number of irreducible -linear representation of (up to isomorphism),    the 's are the opposite rings of the endomorphism rings of these representations,    the 's give the number of times each irreducible representation occurs in the decomposition of the regular representation of ,    the 's also give the dimensions of these representations, and     .       The point is that in this setting, for each irreducible representation , is equal to . Let . In particular, is a -linear endomorphism of the finite dimensional vector space . Since is algebraically closed, has an eigenvaluse, say . Then is a -linear endomorphism of that is not injective, so by Schur’s Lemma is must be . Thus,    "
},
{
  "id": "example-22",
  "level": "2",
  "url": "sec-rep-closed-fields.html#example-22",
  "type": "Example",
  "number": "29.7",
  "title": "",
  "body": " Let and consider the alternating group of order 12. We find all the simple modules over the ring or, equivalently, all irreducible -linear representations of . We also find the Artin-Wedderburn decomposition of .  As before we start by finding 1-dimensional representations given by group homomorphisms of the form . Any such map factors as and thus there are three nonisomorphic 1-dimensional representations given by , , with . Note that corresponds to the trivial representation. Also and make essential use of the fact that we are working over as opposed to, say, where there are no primitive cubic roots of 1.  With respect to the Artin-Wedderburn decomposition we have so far where because we have already found all the 1-dimensional representations ( ) above. Counting dimensions we obtain It is easy to see there is only one solution: and . Hence there is a unique up to isomorphism -linear irreducible representation of which is a 3 dimensional -vector space.  To exhibit such a representation, let act on by permuting the standard basis elements and thus any vector in . The subspace given by is an -stable subspace. This is an irreducible representation: if , after permuting and scaling, we can write . We also have and in , so the sum . Then and are also in , and these are three linearly independent vectors, so we must have .  "
},
{
  "id": "remark-24",
  "level": "2",
  "url": "sec-rep-closed-fields.html#remark-24",
  "type": "Remark",
  "number": "29.8",
  "title": "",
  "body": " Let's consider what the Artin-Wedderburn Theorem says about complex representations of finite abelian groups: the group ring must be a product of copies of , so every irreducible representation is one-dimensional. Thus, every representation is a sum of one-dimensional representations. Concretely, this means that there is a basis in which every group element acts as a diagonal matrix.  This special case actually just follows from basic facts in linear algebra. Let be a representation. Then every has finite order, so for some . This implies that the matrix satisfies , so its minimal polynomial divides . This polynomial splits into distinct linear factors over , so is diagonalizable for every . (So far, we’ve only used that is finite.) Now, since is abelian, we have for all , so ; i.e., the matrices commute. Commuting diagonalizable matrices are simultaneously diagonalizable; i.e., there is a basis as above.  "
},
{
  "id": "prop-art-wedd-decomp",
  "level": "2",
  "url": "sec-rep-closed-fields.html#prop-art-wedd-decomp",
  "type": "Proposition",
  "number": "29.9",
  "title": "",
  "body": "  Let be a finite group. The number of one-dimensional complex representations of (up to isomorphism) is . Thus, in the Artin-Wedderburn decomposition of , there are exactly copies of .    We have that , and by the discussion above, there are distinct one-dimensional representations of .   "
},
{
  "id": "prop-reps-and-conjclass",
  "level": "2",
  "url": "sec-rep-closed-fields.html#prop-reps-and-conjclass",
  "type": "Proposition",
  "number": "29.10",
  "title": "",
  "body": "  For any finite group , the number of irreducible complex representations (up to isomorphism) is equal to the number of conjugacy classes.    We have and is the number of irreducible complex representations up to isomorphism. A key point is that the center of the right side is , which has dimension as a complex vector space. Since this ring isomorphism is -linear, it induces a -linear isomorphism of the centers, and thus we just need to show that is equal to the number of conjugacy classes.  Let denote the conjugacy classes of (i.e., the orbits for the action of on itself by conjugation). For each set . Then for all , and it follows that . Since that ’s are sums of disjoint subsets of a basis of , they are linearly independent. Now say belongs to the center. Then for each , and it follows that whenever are conjugate. This proves that is spanned by . We conclude that .   "
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
