import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface CardProps{
    data?:any;
}
export function CardAnalytics({data}:CardProps){
    return (
        <Card>
            <CardHeader>
                <CardDescription className='text-lg'>{data.name}</CardDescription>
                <CardTitle className='font-bold text-3xl'>{data.stat}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-sm">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        View all<span className="sr-only">{data.name}</span>
                    </a>
                </div>
            </CardContent>
        </Card>
    )
}