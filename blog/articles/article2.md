title: Article 2
date: 2020-01-02
author: Tom Schmelzer
description: This is the second article.

# ABAP Hello World

```abap
METHODS set_item_zz_sgtxt
    IMPORTING
      !is_input TYPE any
    CHANGING
      !cs_linetype_data TYPE any.
```

Explanation:

The exclamation mark is nothing more than a hint to the ABAP compiler. It is required when you want use keywords like export, exceptions and so on as formal/actual argument.