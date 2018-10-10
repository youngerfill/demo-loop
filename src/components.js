import * as h from 'react-hyperscript-helpers';


const List1D = ({names}) =>
{
    return [
            h.div({key: 0}, "TOP"),
            names.map((name, index) => h.div({key: index+1}, name)),
            h.div({key: names.length}, "BOTTOM")
        ]
}



const List2D = ({names}) =>
{
    let rows = []
    let index=0

    for (var row=0; row<names.length; row++)
    {
        let items = []

        for (var col=0; col<names.length; col++)
        {
            index++

            items.push( h.span({key:index}, "(" + names[row] + ", " + names[col] + ")") )
        }

        rows.push ( h.div({key:row}, items) )
    }

    return rows
}

const List2D_map = ({names}) =>
{
    return names.map( (name, row) =>
        h.div(
            {key:row},
            names.map( (name, col) =>
                h.span(
                    {key:col},
                    "[" + names[row] + ", " + names[col] + "]"
                )
            )
        )
    )
}

export { List1D, List2D, List2D_map }
