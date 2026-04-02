export function getTimeZoneHour(timeZone: string): string {
    return new Intl.DateTimeFormat('fr-FR', {
        timeZone: timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).format(new Date())

}